$(document).ready(function(){

	$( ".menu-button" ).click(function() {
        $( "html" ).toggleClass( "nav-open" );
    });

    $( ".menu-link" ).click(function() {
        $('.menu-button').trigger('click');
    });




	var scroll = new SmoothScroll('.scroller-link', {

		offset: 80,

	});



});
