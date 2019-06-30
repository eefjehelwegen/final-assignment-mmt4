$("#accordion").accordion({
    heightStyle:'content'
});

$('#btn').click(function(){
    
    //toggle
    
    if($('#btn').hasClass('active')){
        //uit
        $('#btn').removeClass('active');
        
        $('#accordion').accordion('enable');
        
    }else{
        //aan
        $('#btn').addClass('active');
        
        $('#accordion').accordion('disable');
    }
});



$('.toggle-btn').click(function(){
    
    if($('.toggle-btn').hasClass('active')){
        $('.toggle-btn').removeClass('active');
        
        $('.nachtmodusheader').css("background-color", "white");
        $('.nachtmodustekst').css("color", "#1D00FF");
        $('.nachtmodus').css("background-color", "white");
        $('.nachtmodustekst').css("color", "#4B4B4B");
        $('.nachtmodustekstonderin').css("color", "#1D00FF");
        
    }else{
        
        $('.toggle-btn').addClass('active');
        
        $('.nachtmodusheader').css("background-color", "black");
        $('.nachtmodustekst').css("color", "white");
        $('.nachtmodus').css("background-color", "black");
        $('.nachtmodustekst').css("color", "white");
        $('.nachtmodustekstonderin').css("color", "white");
        
    }
    
});


