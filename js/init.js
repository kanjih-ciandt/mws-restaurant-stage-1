(function($){
  $(function(){

    $('.sidenav').sidenav(
        {
          menuWidth: 300, // Default is 300
          edge: 'left', // Choose the horizontal origin
          closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        }
    );
    $(document).ready(function(){
      $('select').formSelect();
    });

    $('.collapsible').collapsible();

  }); // end of document ready


})(jQuery); // end of jQuery name space
