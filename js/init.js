(function($){
  $(function(){

    $('.sidenav').sidenav(
        {
          menuWidth: 300, // Default is 300
          edge: 'left', // Choose the horizontal origin
          closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
          draggable: true // Choose whether you can drag to open on touch screens
        }
    );
    $(document).ready(function(){
      $('select').formSelect();
    });

  }); // end of document ready


})(jQuery); // end of jQuery name space








let restaurants,
    neighborhoods,
    cuisines
var map
var markers = []


/**
 * Initialize Google map, called from HTML.
 */
window.initMap = () => {
  let loc = {
    lat: 40.722216,
    lng: -73.987501
  };
  self.map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: loc,
    scrollwheel: false,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl:false,
    zoomControl:false
  });

}
