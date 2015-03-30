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
*   1) Float -> left, right, up, down               --> DONE................................... [✓]
*   2) Puff-> in, out                               --> DONE................................... [✓]
*   3) Move from one div to another                 --> STALLED UNFORSEEABLY................... [x]
*   4) Fade in sequentially, by taking in a class   --> STALLED UNTIL NEXT VERSION............. [?]
*   5) credits animation -> up, down                --> DONE................................... [✓]
----------------------------------*/

$.fn.animania = function(value, options, callback) {
    var this_ = $(this);
    var settings = $.extend(true, {
        animation: "float",
        duration: 400,
        transition: "entry",
        float: {
            offset:100,
            direction: "down"
        },
        puff: {
            offset:100,
            direction: "in"
        },
        credits: {
            offset:100,
            direction: "up",
            hoverStop: true
        }
    }, options);
    
    if(typeof(value)==="undefined") 
        value = settings.animation;
    else {
        if(typeof value !== "string") {
            if(typeof value != "object") 
                if(typeof value == "function") callback = value; 
            if(typeof(options)!=="undefined" && options.length<1) callback = options;
            options = value;
            settings = $.extend(options);
        }
        else
            if(typeof options !== "object")
                callback = options;
    }
    
    /*--------------------------
     *     FLOAT ANIMATION
    ---------------------------*/
    var floatanim = function(options, callback) {
        this_.show();
        var pos;
        var offsetpos;
        var trans = 0;
        pos = this_.position();
        
        if(options.transition==="entry") trans = 0;
        else if(options.transition==="exit") trans=1;
        else trans=0;
        
        if(options.transition=="entry") {
            if(options.float.direction=="up") 
                offsetpos= {top: pos.top+options.float.offset, left: pos.left};
            if(options.float.direction=="down") 
                offsetpos= {top: pos.top-options.float.offset, left: pos.left};
            if(options.float.direction=="left")
                offsetpos= {left: pos.left-options.float.offset, top: pos.top};
            if(options.float.direction=="right") 
                offsetpos= {left: pos.left+options.float.offset, top:pos.top};
            this_.css({top: offsetpos.top, left:offsetpos.left, opacity: trans});
        }   
        if(options.transition=="exit") {
            if(options.float.direction=="up") 
                offsetpos= {top: pos.top-options.float.offset, left: pos.left};
            if(options.float.direction=="down") 
                offsetpos= {top: pos.top+options.float.offset, left: pos.left};
            if(options.float.direction=="left")
                offsetpos= {left: pos.left+options.float.offset, top: pos.top};
            if(options.float.direction=="right") 
                offsetpos= {left: pos.left-options.float.offset, top:pos.top};
            this_.css({top: pos.top, left:pos.left, opacity: trans});
        }
        
        if(trans===0) trans=1;
        else trans=0;
        
        if(options.transition==="entry")
            this_.animate({
                top: pos.top,
                left: pos.left,
                opacity: trans
            }, {
                duration: options.duration,
                complete: callback || null
            }).show();
        if(options.transition==="exit")
            this_.animate({
                top: offsetpos.top,
                left: offsetpos.left,
                opacity: trans,
            }, {
                duration: options.duration,
                complete: function() {
                    $(this).css({top: pos.top, left: pos.left});
                    if(typeof callback!=="undefined")
                        callback.call();
                }
            }).fadeOut(0);
    };
    
    /*--------------------------
     *     PUFF ANIMATION
    ---------------------------*/
    var puffanim = function(options, callback) {
        var size={};
        this_.show(); 
        var offsize={};
        var pos = this_.position();
        size = {height: this_.outerHeight(true), width: this_.outerWidth(true)};
        offsize = {height: size.height + options.puff.offset, width: size.width + options.puff.offset};
        var animData = [
            {width: size.width, height: size.height, top: pos.top, left: pos.left, opacity:1},
            {width: offsize.width, height: offsize.height, top: pos.top-options.puff.offset, left: pos.top-options.puff.offset, opacity:0}
        ];
        console.log(animData[0]);
        if(options.transition=="entry") {
            this_.css({width:offsize.width, height:offsize.height, top: pos.top - (options.puff.offset/2), left: pos.left - (options.puff.offset/2), opacity: 0});
            this_.animate({width: size.width, height: size.height, top: pos.top, left: pos.left, opacity:1}, {
                duration: options.duration,
                complete: callback || null
            }).show();
        }
        if(options.transition=="exit") {
            this_.css({opacity: 1});
            this_.animate({width: offsize.width, height: offsize.height, top: pos.top-(options.puff.offset/2), left: pos.left-(options.puff.offset/2), opacity:0}, {
                duration: options.duration,
                complete: function() {
                    $(this).css(animData[0]);
                    if(typeof callback!=="undefined")
                        callback.call();
                }
            }).show();
        }
    };
    
    /*--------------------------
     *     FADE ANIMATION
    ---------------------------*/
    var fadeanim = function(options, callback) {
        console.log("Fadeanim called");
        console.log(options.duration);
    };
    
    /*--------------------------
     *     CREDITS ANIMATION
    ---------------------------*/
    var creditsanim = function(options, callback){
        var size={};
        var animFunct;
        var pos = this_.position();
        this_.show();
        this_.wrapAll('<div class="animania-credits-handler"></div>');
        var handler_ = $(".animania-credits-handler");
        handler_.parent().css({overflow: "hidden"});
        var handler_parent = {
            height: handler_.parent().height(), 
            width: handler_.parent().width(),
            padding: 0,
            margin: 0,
            top: 0,
            left: 0,
            textAlign: "center",
            overflow: "hidden",
            position: "relative",
        };
        console.log(handler_parent); 
        
        handler_.css(handler_parent);
        if(options.credits.direction=="up") {
            this_.css({
                top: handler_.height() + options.credits.offset
            });
            animFunct = function() {
                this_.animate({
                    top: (handler_.height()*0) - (this_.height() + options.credits.offset)
                },
                {
                    duration: options.duration,
                    complete: function() {
                        $(this).css({top: pos.top}).hide().unwrap().hide();
                        handler_.parent().css({overflow: "auto"});
                        if(typeof callback!=="undefined")
                            callback.call();
                    }
                }).show();
            }
            animFunct.call();
        }
        if(options.credits.direction=="down") {
            this_.css({
                top: pos.top - (pos.top+this_.height()+options.credits.offset)
            });
            animFunct = function() {
                this_.animate({
                    top: pos.top + handler_.height() + options.credits.offset,
                },
                {
                    duration: options.duration,
                    complete: function() {
                        $(this).css({top: pos.top}).hide().unwrap().hide();
                        handler_.parent().css({overflow: "auto"});
                        if(typeof callback!=="undefined")
                            callback.call();
                    }
                }).show(); 
            }
            animFunct.call();
        }
            
        if(options.credits.hoverStop) {
            $(this_).unbind('mouseenter').on('mouseenter', function() {
                $(this_).stop();
            });
            $(this_).unbind('mouseleave').on('mouseleave', animFunct);
        }
        
                
        console.log(handler_parent);
        handler_.css(handler_parent);
        console.log(handler_.parent());
    };
    
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
                alert("AnimaniaJS: '" + value + "' animation is not available.");
                break;
    }
};