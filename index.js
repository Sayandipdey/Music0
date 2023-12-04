// Automatically move to the next slide after 5 seconds
$(document).ready(function() {
    $('#myCarousel').carousel({
      interval: 5000,
      pause: "hover"
    });
  
    setInterval(function() {
      $('#myCarousel').carousel('next');
    }, 5000);
  });
  