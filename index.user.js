// ==UserScript==
// @name        Monospaced BBCode Editor
// @match       https://www.empornium.sx/*
// @match       https://www.empornium.is/*
// @grant       none
// @version     1.0
// @author      timdotcom
// @description 8/21/2024, 2:24:47 PM
// ==/UserScript==

(function() {
  'use strict';

  // the browser will use the first font it finds, with 'monospace' as a fallback.
  const fontStack = `'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'`;

  const textareas = document.querySelectorAll('textarea');

  textareas.forEach(textarea => {
      textarea.style.fontFamily = fontStack;
  });
})();