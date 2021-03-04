// Arxiu init.js + index.js
 
(function($){
  $(function(){
 
    $('.sidenav').sidenav();
 
  }); // end of document ready
})(jQuery); // end of jQuery name space
 
 
document.addEventListener('deviceready', onDeviceReady, false);
 
function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    $(document).ready(function(){
      $('ul.tabs').tabs({
        swipeable : true,
        responsiveThreshold : 1920
      });

      $('input#etSearch').keyup(function(){
        console.log($('input#etSearch').val());
      })

      $('.fixed-action-btn').floatingActionButton();
    });

    //document.getElementById('deviceready').classList.add('ready');
}