"use strict";

var workshopImgs = ['img/knowledge/science-and-technology/1.jpg', 'img/knowledge/science-and-technology/2.jpg', 'img/knowledge/science-and-technology/3.jpg', 'img/knowledge/science-and-technology/4.jpg'];
$('document').ready(function () {
  console.log('document.ready();'); // #region Knowledge

  setInterval(changeBgEventItemSmooth, 3000); // #endregion
});

var changeBgEventItem = function changeBgEventItem() {
  var imgUrl = workshopImgs[Math.floor(Math.random() * workshopImgs.length)];
  $('#eventItemScience').css('background-image', "url(\"".concat(imgUrl, "\")"));
  $('#eventItemScience').fadeIn(500);
};

var changeBgEventItemSmooth = function changeBgEventItemSmooth() {
  $('#eventItemScience').fadeOut(500, changeBgEventItem);
};