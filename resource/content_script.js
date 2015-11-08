(function() {
  var first = document && document.body && document.body.firstElementChild;
  if(first && first.textContent === document.body.textContent){
    chrome.runtime.sendMessage('showPageAction');
    if(/\.(markdown|md)$/.test(document.URL)){
      chrome.runtime.sendMessage('markdownize');
    }
  }
})();
