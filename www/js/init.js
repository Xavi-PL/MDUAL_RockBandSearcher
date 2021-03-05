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

        $.ajax({
          method: "GET",
          url: "https://musicbrainz.org/ws/2/artist?query=" + $('input#etSearch').val(),
          dataType: "json",   // necessitem això pq ens retorni un objecte JSON
        }).done(function (msg) {

          var $results = $('ul#results');
          $results.empty();

          for(var item in msg.artists) {

            $results.append('<li class="collection-item">' + msg.artists[item].name + '</li>')
            console.log(msg.artists[item]);
            // aquí caldría fer mes coses, of course...
            // ...
          };
        }).fail(function () {
          alert("ERROR");
        });

        // console.log($('input#etSearch').val());
      })

      $('.fixed-action-btn').floatingActionButton();
    });

    //document.getElementById('deviceready').classList.add('ready');
}