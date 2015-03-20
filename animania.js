/*----------------------------------
* ANIMANIA Custom Animation Plugin
*
* Author: Samrith Shankar
* Version: 1.0.0
* Created at: 18th March, 2015
* Built for: jQuery
* Website: http://animatron
* Functions offered:
*   1) Float -> left, right, up, down
*   2) Puff-> in, out
*   3) Move from one div to another
*   4) Fade in sequentially, by taking in a class
*   5) credits animation -> up, down
*   6) 
----------------------------------*/

$.fn.animania = function(value, options, callback) {
    
    var settings = $.extend({
        duration: 400,
        direction: "down",
        
        
    });
    switch(value) {
            case "float":
                floatanim(options, callback);
                break;
            
            case "
    }
    
    var floatanim = function(options, callback) {
    }
};