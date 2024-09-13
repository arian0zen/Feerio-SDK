import {
  handleButtonClickForChangelogTrigger,
  renderChangelogWidgetPopup,
} from "./ChangelogWidgetUtility";
import { renderPublicBoard } from "./PublicBoardUtility";

declare global {
  interface Window {
    Feerio: {
      initializeChangelog: (options: {
        workspaceId: string;
        workspaceSubdomain: string;
        theme?: "light" | "dark";
        position?:
          | "top-right"
          | "top-left"
          | "bottom-right"
          | "bottom-left"
          | "left"
          | "right"
          | "top-center"
          | "bottom-center";
      }) => void;
      initializePublicBoard: (options: {
        workspaceSubdomain: string;
        boardUrls: string[];
        // theme?: "light" | "dark";
      }) => void;
      // always show the changelog popup
      initializeChangelogPopup: (options: {
        workspaceId: string;
        workspaceSubdomain: string;
        theme?: "light" | "dark";
        color?: string;
        position?: "left" | "right";
      }) => void;

      // fq is the queue of functions that will be called when the script is loaded
      fq: any[];
    };
  }
}

// Wrap the handler in a closure to pass the options
function createClickHandler(options: any) {
  return function (event: MouseEvent) {
    handleButtonClickForChangelogTrigger(event, options);
  };
}

const initializeChangelog = (options: {
  workspaceId: string;
  workspaceSubdomain: string;
  theme?: "light" | "dark";
  position?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "left"
    | "right"
    | "top-center"
    | "bottom-center";
}) => {
  console.log("====INITIALIZE CHANGELOG====");

  document.querySelectorAll("[data-feerio-changelog]").forEach((button) => {
    // button.addEventListener("click", (event) =>
    //   handleButtonClickForChangelogTrigger(event as MouseEvent, options)
    // );

    // we need to remove the previous event listener if it exists and add the new event listener with the updated options

    // Remove the previous event listener if it exists
    button.removeEventListener(
      "click",
      createClickHandler(options) as EventListener
    );

    // Add the new event listener
    button.addEventListener(
      "click",
      createClickHandler(options) as EventListener
    );
  });
};
const initializeChangelogPopup = (options: {
  workspaceId: string;
  workspaceSubdomain: string;
  theme?: "light" | "dark";
  color?: string;
  position?: "left" | "right";
}) => {
  console.log("====INITIALIZE CHANGELOG POPUP (ALWAYS)====");

  renderChangelogWidgetPopup(options);
};

const initializePublicBoard = (options: {
  workspaceSubdomain: string;
  boardUrls: string[];
}) => {
  console.log("====INITIALIZE PUBLIC BOARD====");
  renderPublicBoard(options);
};

// window.Feerio = { initializeChangelog };

/*
NOTE: When the script is loading, anyway the methods for Feerio (i.e initializeChangelog) will be called before the script is loaded. Thus we are maintaining a queue of functions that will store the functions that are called before the script is loaded. Once the script is loaded, we will call all the functions in the queue.

now for that we have 2 ways
1. We can use a global variable to store the queue of functions and when the script is loaded, we will assign that to the window.Feerio.fq. This way we can access the queue of functions from the script tag inside the onLoad function and run a while loop to call all the functions in the queue.

if (w.Feerio.q) {
    while (w.Feerio.q.length) {
        var args = w.Feerio.q.shift();
        var method = args[0];
        var params = args[1];

        if (w.Feerio[method]) {
            w.Feerio[method](params);
        } else {
            console.warn(`Feerio method ${methodExist.`);
        }
    }
}

2. Instead of doing the queue loop inside the script tag, we can call the functions here in the index.tsx file itself. This way we can avoid the while loop inside the script tag.


*/

// for now we are approaching the 1st way

// VERSION ************ 2.1.3 ************

window.Feerio = {
  initializeChangelog,
  initializeChangelogPopup,
  initializePublicBoard,

  fq: window.Feerio?.fq || [],
};
