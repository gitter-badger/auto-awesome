var awesome = function(domId) {
  var elem = $('#' + domId)
    , evt  = document.createEvent("MouseEvents")
    , cb;
  evt.initMouseEvent("click", true, true, window,1, 0, 0, elem.offset().left, elem.offset().top, false, false, false, false, 0, null);
  cb = document.getElementById(domId);
  cb.dispatchEvent(evt);
}
awesome.domId = window.prompt("What's your awesome button's DOM ID?", "")
setInterval('awesome("'+awesome.domId+'")', 45000)
