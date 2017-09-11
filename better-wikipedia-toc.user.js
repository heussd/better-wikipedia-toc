// ==UserScript==
// @name        Better Wikipedia TOC
// @author      T.H.
// @namespace   https://github.com/heussd/better-wikipedia-toc
// @include     *wiki*
// @downloadURL https://github.com/heussd/better-wikipedia-toc/raw/master/better-wikipedia-toc.user.js
// @homepageURL https://github.com/heussd/better-wikipedia-toc/
// @grant       GM_addStyle
// ==/UserScript==

// A product of the bday-h4ck 2017

function addStyle(thatNewStyleCss) {
  var thatNewStyle = document.createElement('style');
  thatNewStyle.type = 'text/css';
  thatNewStyle.innerHTML = thatNewStyleCss;
  document.documentElement.appendChild(thatNewStyle);
}

addStyle('.toc {position: absolute; top: 70px; left: -177px; width: 160px; font-size: x-small !important;}');
addStyle('div#mw-panel {z-index: -1;}');
addStyle('.mw-content-ltr .toc ul ul, .mw-content-ltr #toc ul ul, .mw-content-rtl .mw-content-ltr .toc ul ul, .mw-content-rtl .mw-content-ltr #toc ul ul {margin: 0 0 0 0.2em}')
