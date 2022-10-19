
$( function() {

    var state = true;
    $( ".time-slot" ).on( "click", function() {
      console.log(this);
      if ( state ) {
        $( this ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( this ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
  } );