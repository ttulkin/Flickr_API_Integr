$(document).ready(function() {

  $('button').on('click', function(){
    var ajaxUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
    var animal = $(this).text();
    var flickrOptions = {
      tags: animal,
      format: "json"
    };
    function callbackFunction(data) {

    }
    $.getJSON(ajaxUrl, flickrOptions, function (data) {
      console.log(data);
      console.log(animal);

    });
  });

    

  });

