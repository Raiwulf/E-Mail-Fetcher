// ==UserScript==
// @name         E-mail Fetcher
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.gov.pl/web/poland-businessharbour-en/itspecialist
// @icon         https://www.google.com/s2/favicons?domain=gov.pl
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var listOfEmails = [];
    var contentToSearch = document.body.innerHTML;
    var contentAsText = contentToSearch.toString();
    listOfEmails = contentAsText.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);

    let a = document.createElement('a');
    a.href = "data:application/octet-stream,"+encodeURIComponent(listOfEmails);
    a.download = 'emails.txt';
    a.click();
})();