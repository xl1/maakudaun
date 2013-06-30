(function() {
  var first = document.body.firstElementChild;
  if(!first) return;
  if(first.textContent === document.body.textContent){
    chrome.extension.sendRequest('showPageAction');
    if(/\.(markdown|md)$/.test(document.URL)){
      chrome.extension.sendRequest('markdownize');
    }
  }
})();
