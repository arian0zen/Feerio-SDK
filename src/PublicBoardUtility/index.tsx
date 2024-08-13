import { ENV, PLAIN_DOMAIN_URL } from "../constants";

const generateIframeComponent = (options: {
  workspaceSubdomain: string;
  boardUrls: string[];
}) => {
  let { workspaceSubdomain, boardUrls = [] } = options;

  // if boardUrls element is empty string remove that element

  boardUrls = boardUrls.filter((url) => url !== "");

  let boardUrlParam = boardUrls.length > 0 ? `?b=${boardUrls[0]}` : "";

  let iframeSrc = `${
    ENV === "DEV" ? "http:" : "https:"
  }//${workspaceSubdomain}${PLAIN_DOMAIN_URL}/widgets/public-board${boardUrlParam}`;

  /* <iframe src="${iframeSrc}" style="width: 100%; height: 100%; border: none;"></iframe> */

  let iframe = document.createElement("iframe");
  iframe.src = iframeSrc;
  iframe.style.width = "100%";
  iframe.style.height = "1000px";
  iframe.style.overflow = "scroll";
  iframe.style.border = "none";

  return iframe;
};

const renderPublicBoard = (options: {
  workspaceSubdomain: string;
  boardUrls: string[];
}) => {
  //   ReactDOM.render(<PublicBoardWidget />, container);
  // instead of rendering the component render a iframe div with this url https://feedback.feerio.io/dashboard/board?b=integrations

  let { workspaceSubdomain, boardUrls = [] } = options;

  boardUrls = boardUrls.filter((url) => url !== "");

  boardUrls.forEach((url) => {
    let dataAttributeStringForTheBoard = `data-feerio-board-${url}`;

    let element = document.querySelector(`[${dataAttributeStringForTheBoard}]`);

    if (!element) {
      console.error("Element not found for the board url", url);
      return;
    }

    let iframeComponent = generateIframeComponent({
      workspaceSubdomain,
      boardUrls: [url],
    });

    element.appendChild(iframeComponent);
  });

  let htmlElementForAllBoards = document.querySelector(
    "[data-feerio-public-board]"
  );

  if (htmlElementForAllBoards) {
    let iframeComponent = generateIframeComponent({
      workspaceSubdomain,
      boardUrls,
    });

    htmlElementForAllBoards.appendChild(iframeComponent);
  }
};

export { renderPublicBoard };
