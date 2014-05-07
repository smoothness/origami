

// Side Bar Cursos Component
if( $('.side-bar-cursos').length ) {

	var pathName = window.location.pathname;
	
	$('.side-bar-cursos').find('li a').attr('href', function(i, val) {
		if(val === pathName) $(this).parent().addClass('hidden');
	});
}
