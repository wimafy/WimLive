( function( ripplefunction ) {
    $( function() {

        ripplefunction( '.ripple' ).ripple();
        ripplefunction( '.ripple-fast' ).ripple( { 'v_duration': 150, 'h_duration': 150 } );
        ripplefunction( '.ripple-slow' ).ripple( { 'v_duration': 1000, 'h_duration': 1000 } );
        ripplefunction( '.ripple-fast-slow' ).ripple( { 'v_duration': 600, 'h_duration': 150 } );

    } );
} )( jQuery );