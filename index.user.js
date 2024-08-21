// ==UserScript==
// @name        Monospaced BBCode Editor
// @match       https://www.empornium.sx/*
// @match       https://www.empornium.is/*
// @grant       none
// @version     2.0
// @author      timdotcom
// @description 8/21/2024, 2:24:47 PM
// ==/UserScript==

(function () {
  "use strict";

  // the browser will use the first font it finds, with 'monospace' as a fallback.
  const fontStack = `'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'`;

  const applyFontStack = (textarea) => {
    textarea.style.fontFamily = fontStack;
  };

  // apply the font stack to existing textareas
  const textareas = document.querySelectorAll("textarea");
  textareas.forEach(applyFontStack);

  // set up a MutationObserver to watch for dynamically added textareas, like
  // those when editing a post
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.tagName.toLowerCase() === "textarea") {
            applyFontStack(node);
          }
          // Also, handle any textareas within added nodes
          const innerTextareas = node.querySelectorAll("textarea");
          innerTextareas.forEach(applyFontStack);
        }
      });
    });
  });

  // observe the entire document for added nodes
  observer.observe(document.body, { childList: true, subtree: true });
})();
