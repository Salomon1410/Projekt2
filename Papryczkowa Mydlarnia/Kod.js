
$(document).ready(function() {
	$('.sm').smartmenus({                    		 // Smartmenu
		showFunction: function($ul, complete) {
			$ul.slideDown(250, complete);
			},
		hideFunction: function($ul, complete) {
			$ul.slideUp(250, complete);
			}
	}); // Koniec funkcji smartmenus
													// Galeria
	$('#gallery a').click(function(evt){
		evt.preventDefault();
		var imgPath = $(this).attr('href');
		var oldImage = $('#photo img');
		var newImage = $('<img src="' + imgPath +'">');
		newImage.hide();
		$('#photo').prepend(newImage);
		newImage.fadeIn(1000);
		oldImage.fadeOut(1000,function(){
			$(this).remove();
			}); // Koniec funkcji fadeOut
	}); // Koniec funkcji click
	$('#gallery a:first').click();
	
	$('#Pull_out_bar').hover(     				//Pasek boczny wysuwany 
	function() {
		$(this).stop().animate({
			left: '0',
			backgroundColor: 'rgb(220,250,235)'
		},
		500,
		'easeInSine'
		); // Koniec funkcji animate
	},
	function(){
		$(this).stop().animate({
			left: '-105px',
			backgroundColor: 'rgb(255,211,224)'
		},
		1500,
		'easeOutBounce'
		);
	}
 ); // Koniec funkcji hover	

	var btnopen = document.querySelector(".opend");
btnopen.addEventListener("click", function () {
	document.body.classList.add("modal-opend");
}, false);

var btnclose = document.querySelector(".close-btn");
btnclose.addEventListener("click", function(){
	document.body.classList.remove("modal-opend");
},false);

document.addEventListener("keyup", function(evt) {
	if(evt.keyCode === 27) {
	document.body.classList.remove("modal-opend");
	}
},false);


 
}); // Koniec funkcji ready.


