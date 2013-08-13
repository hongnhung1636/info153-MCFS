$(document).ready(function(){
	$(':button').click(function(){
		var e1 = document.getElementsByClassName($(this).attr('id'));
		var at = $(this).attr('id');
		if($("#nowshowing:contains("+at+")").length == 0){
			$("#nowshowing").append("<span class='nowshowinglist'>"+at + " </span>");
		}
		for(var i =0; i<e1.length; i++){
			console.log($(e1[i]).attr('class'));
			if($(e1[i]).attr('class').substring(0,4)=='hide'){
				$(e1[i]).removeClass('hide').addClass('show');
			};
		};
	});
});
