// 响应式运算
(function (doc, win) {
  var docEl = doc.documentElement,
  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
  recalc = function () {
    var clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    if(clientWidth>=768){
      docEl.style.fontSize = '100px';
    }else{
      docEl.style.fontSize = 100 * (clientWidth / 768) + 'px';
    }
  };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
  recalc();
})(document, window);

// 第一屏的点击效果
var $muneBtn = $('#muneBtn');
$muneBtn.on('click',function(){
  $('.first-box .nav-box ul').slideToggle('normal').toggleClass('active');
})

var $link = $('.first-box .nav-box li');
$link.on('click',function(){
  $(this).addClass('active').siblings().removeClass('active');
})

var $btn = $('.first-box .btn');
$btn.on('click',function(){
  $(this).toggleClass('active');
})

// 第五屏的点击效果
var $imgsBox = $('.fifth-box .pic-item');
$imgsBox.on('click',function(){
  $(this).toggleClass('active');
})