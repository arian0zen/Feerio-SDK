import React from "react";
import ReactDOM from "react-dom";
import ChangelogWidget from "./changelog-widget/ChangelogWidget";
import { handleButtonClickForChangelogTrigger } from "./ChangelogWidgetUtility";

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
      // fq is the queue of functions that will be called when the script is loaded
      fq: any[];
    };
  }
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
    button.addEventListener("click", (event) =>
      handleButtonClickForChangelogTrigger(event as MouseEvent, options)
    );
  });
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

console.log("Methods called ", window.Feerio?.fq?.length);

// for now we are approaching the 1st way

window.Feerio = {
  initializeChangelog,
  fq: window.Feerio?.fq || [],
};
