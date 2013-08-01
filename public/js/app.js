var box = $('#box1');

box.css('position', 'absolute');
box.css('left', 0);
box.css('top', 0);
box.data('x', 0);
box.data('y', 0);

function hideAddressBar () {
  if (document.height <= window.outerHeight) {
    document.body.style.height = (window.outerHeight + 50) + 'px';
    setTimeout( function(){ window.scrollTo(0, 1); }, 50 );
  } else {
    setTimeout( function(){ window.scrollTo(0, 1); }, 0 );
  }
}

window.addEventListener("load", function(){ if(!window.pageYOffset){ hideAddressBar(); } } );
window.addEventListener("orientationchange", hideAddressBar );

Hammer('#box1').on('drag', function (e) {
  var x = e.gesture.deltaX,
      y = e.gesture.deltaY,
      oldX = box.data('x'),
      oldY = box.data('y');

  box.css('left', oldX + x);
  box.css('top', oldY + y);

  e.gesture.preventDefault();
})
.on('release', function (e) {
  var x = Math.floor(box.css('left').replace('px', '')),
      y = Math.floor(box.css('top').replace('px', ''));

  box.data('x', x);
  box.data('y', y);
});

document.ontouchmove = function (e) { e.preventDefault(); };