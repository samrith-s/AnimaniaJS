/*----------------------------------
*       ___   __   _   _       ___  ___       ___   __   _   _       ___  
*      /   | |  \ | | | |     /   |/   |     /   | |  \ | | | |     /   | 
*     / /| | |   \| | | |    / /|   /| |    / /| | |   \| | | |    / /| | 
*    / /_| | | |\   | | |   / / |__/ | |   / /_| | | |\   | | |   / /_| | 
*   / ___  | | | \  | | |  / /       | |  / ___  | | | \  | | |  / ___  | 
*  /_/   |_| |_|  \_| |_| /_/        |_| /_/   |_| |_|  \_| |_| /_/   |_| 
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
    if(typeof(value)!="undefined") {
        if(!value.isString) options = value;
        if(options.length<1) callback = options;
    }
    else
        value="float";

    var settings = $.extend({
        duration: 400,
        direction: "down",
    }, options);
    
    var floatanim = function(options, callback) {
        console.log("Floatanim called");
        console.log(options.duration);
    };
    
    var puffanim = function(options, callback) {
        console.log("Puffanim called");
        console.log(options.duration);
    }
    
    var moveanim = function(options, callback) {
        console.log("Moveanim called");
        console.log(options.duration);
    }
    
    var fadeanim = function(options, callback) {
        console.log("Fadeanim called");
        console.log(options.duration);
    }
    
    var creditsanim = function(options, callback){
        console.log("Creditsanim called");
        console.log(options.duration);
    }
    
    switch(value) {
            case "float":
                floatanim(settings, callback);
                break;
            
            case "puff":
                puffanim(settings, callback);
                break;
            
            case "move":
                moveanim(settings,callback);
                break;
            
            case "fade":
                fadeanim(settings,callback);
                break;
            
            case "credits":
                creditsanim(settings,callback);
                break;
            
            default:
                floatanim(settings,callback);
                break;
    }
};