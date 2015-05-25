var sliderButton = $('.slider-button');
var sliderImage = $('#slider-image');

sliderButton.click(function(){
  $(sliderButton).children().removeClass('selected');
  $(this).children().addClass('selected');
  if ($(this).hasClass('slider1')) {
    sliderImage.css("background-image", "url(img/top-image.png)");
  } else if ($(this).hasClass('slider2')) {
    sliderImage.css("background-image", "url(img/top-image-red.png)");
  } else if ($(this).hasClass('slider3')) {
    sliderImage.css("background-image", "url(img/top-image-blue.png)");
  }
});
