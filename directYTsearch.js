javascript:( 
    function(){  
        var query = prompt("Suche:", "");  
        if (query == null) {return;}  
        var url = "https://www.youtube.com/results?search_query=";
        window.open(url + query);
    })();