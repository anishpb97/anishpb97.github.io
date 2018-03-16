$(document).ready(function() {
	var chartPosition = $(".skillGraphs").offset().top-300; 
	var chartNotCreated = true;
document.addEventListener("scroll",collapse);
function collapse()
{
	if(document.body.scrollTop > 200)
   {
		$("#header").addClass("collapsed");

	}
  else
   {
		$("#header").removeClass("collapsed");
	}
}
 $(".headerMenu").on("click","li",function(){
	 var text = $(this).html();
   text = text.toLowerCase();
	 text=text.replace(" ",'_');
   $('html, body').animate({
        scrollTop: $("#"+text).offset().top
      }, 800);
		var previous = document.getElementsByClassName("currentPage");
    console.log(previous + " " +this);
		$(previous).removeClass("currentPage");
		$(this).addClass("currentPage");
 	});
	document.addEventListener("scroll",bodyScroll);
	function bodyScroll()
	{
		var tabList = $(".tab").toArray();
		

		for(var i=0;i<tabList.length;i++)
		{
		
			var text = $(tabList[i]).html();
	    text = text.toLowerCase();
	 	 	text=text.replace(" ",'_');
			div = $("#"+text)
		
      if($("body").scrollTop()>=div.offset().top-50)
			 	{
				$(".currentPage").removeClass("currentPage");
				$(tabList[i]).addClass("currentPage");
			}
		}
	}

	$(window).scroll(function() {

		if(($("body").scrollTop()>=chartPosition-150)&&(chartNotCreated)){
				chartNotCreated = false
				$(".skillProgress").addClass("glowBar").removeClass("skillBarDefault");
		}
	});

});
