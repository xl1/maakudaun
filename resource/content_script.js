(function() {
  var first = document && document.body && document.body.firstElementChild;
  if(first && first.textContent === document.body.textContent){
    chrome.runtime.sendMessage('showPageAction');
    if(/\.(markdown|md)$/.test(location.pathname)){
      chrome.runtime.sendMessage('markdownize');
    }
  }
})();
