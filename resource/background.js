(function() {
  var commands = {
    showPageAction: function(id) {
      chrome.pageAction.show(id);
    },
    markdownize: function(id) {
      chrome.tabs.executeScript(id, { file: '/marked/lib/marked.js' });
      chrome.tabs.executeScript(id, { file: '/resource/maaku.js' });
      chrome.tabs.insertCSS(id, {file: '/resource/markdown.css' });
    }
  };
  chrome.runtime.onMessage.addListener(function(request, sender, callback) {
    if(commands.hasOwnProperty(request)) commands[request](sender.tab.id);
  });
  chrome.pageAction.onClicked.addListener(function(tab) {
    commands.markdownize(tab.id);
  });
})();