import { ENV, PLAIN_DOMAIN_URL } from "../constants";

const generateIframeComponent = (options: {
  workspaceSubdomain: string;
  boardUrls: string[];
}) => {
  let { workspaceSubdomain, boardUrls = [] } = options;

  // Filter out empty strings from boardUrls
  boardUrls = boardUrls.filter((url) => url.trim() !== "");

  // Build URL parameters
  const params = new URLSearchParams();

  // Add board URLs if they exist
  if (boardUrls.length > 0) {
    // Encode each board URL and add them as 'b' parameters
    boardUrls.forEach((url) => {
      params.append("b", encodeURIComponent(url));
    });
  }

  // Construct the base URL
  const baseUrl = `${ENV === "DEV" ? "http:" : "https:"}//${encodeURIComponent(
    workspaceSubdomain
  )}${PLAIN_DOMAIN_URL}/widgets/public-board`;

  // Combine base URL with parameters
  const iframeSrc = params.toString()
    ? `${baseUrl}?${params.toString()}`
    : baseUrl;

  // Create and configure iframe element
  const iframe = document.createElement("iframe");
  iframe.src = iframeSrc;
  iframe.style.width = "100%";
  iframe.style.height = "100%";
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
    "[data-feerio-all-boards]"
  );

  if (htmlElementForAllBoards) {
    boardUrls = [];
  }

  if (htmlElementForAllBoards) {
    let iframeComponent = generateIframeComponent({
      workspaceSubdomain,
      boardUrls,
    });

    htmlElementForAllBoards.appendChild(iframeComponent);
  }
};

export { renderPublicBoard };
