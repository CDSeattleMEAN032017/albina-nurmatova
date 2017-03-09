clicked = true;
    $(document).ready(function(){
        $(".btn").click(function(){
            if(clicked){
                $(this).css('background-color', 'red');
                clicked  = false;
            } else {
                $(this).css('background-color', 'blue');
                clicked  = true;
            }   
        });
	   	$('.btn').hover(function(){
			$(this).css('background-color', 'green');
		}, function(){
			$(this).css('background-color', 'blue');
		});

	});

		// $('.btn2').click(function(){
  //   	$(".btn").click();
		// })

	
