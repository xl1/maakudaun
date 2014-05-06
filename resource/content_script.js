(function() {
  var first = document.body.firstElementChild;
  if(!first) return;
  if(first.textContent === document.body.textContent){
    chrome.runtime.sendMessage('showPageAction');
    if(/\.(markdown|md)$/.test(document.URL)){
      chrome.runtime.sendMessage('markdownize');
    }
  }
})();
