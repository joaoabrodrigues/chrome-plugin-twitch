'use strict';

chrome.runtime.onInstalled.addListener(() => {
  //alert("Ta funcionando");
});

// executed when a tab is activated
chrome.tabs.onActivated.addListener(() => {
  chrome.tabs.query({url: "*://*.twitch.tv/*"}, function(results) {
    chrome.tabs.executeScript(results.id, {
      file: 'inject.js'
    });
  });
});

// executed when a tab is reloaded
chrome.tabs.onUpdated.addListener(() => {
  chrome.tabs.query({url: "*://*.twitch.tv/*"}, function(results) {
    console.log(results);
    chrome.tabs.executeScript(results.id, {
      file: 'inject.js'
    });
  });
});