javascript:( 
    function(){  
        var speed = prompt("Speed:", 1);  
        if (speed == null) {return;}  
        speed = speed.replaceAll(",", "."); 
        document.querySelector('video').playbackRate = speed; 
    })();