$(document).ready(function(){
	$(".filters").hide();
	var active = new Array();
	var index = 0;
	$(':button').click(function(){
		var e1 = document.getElementsByClassName($(this).attr('id'));
		var at = $(this).attr('id');
		var displaybutton = "#button_" + at;
		$(displaybutton).show();

		for(var i =0; i<e1.length; i++){
			$(e1[i]).removeClass('hide').addClass('show');
			active[index] = $(e1[i]).attr('id');
			index ++;
		}

	});
	$(".filters").click(function(){
		$(this).hide();
		var at = $(this).attr('id');
		$("."+ at.substring(7)).hide();
	})

});
