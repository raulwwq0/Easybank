$(document).ready(() => {
    var menu_enabled = false;
    var menu = $('#header-menu');
    var shadow = $('#mobile-shadow');
    var btn = $('#hamburger #btn-img');
    var open_menu = "./images/icon-hamburger.svg";
    var close_menu = "./images/icon-close.svg";

    $('#hamburger').click(() => {
        if(menu_enabled == false){
            // Menu animation
            menu.hide();

            shadow.hide();

            shadow.fadeToggle()

            menu.fadeIn({
                queue: false,
                duration: 'slow'
            });

            menu.animate({
                top: '130%'
            });

            // Disable scrolling 
            $('html, body').css({
                'overflow': 'hidden',            
                'height': '100%'            
            });

            // Change menu button to close
            btn.attr('src', close_menu);

            // Conditional toggle
            menu_enabled = true;

        }else{
            // Change menu button to hamburger
            btn.attr('src', open_menu);

            // Enable scrolling 
            $('html, body').css({
                'overflow': 'auto',            
                'height': 'auto'            
            });
            
            // Conditional toggle
            menu_enabled = false;

            // Menu animation

            $('#mobile-shadow').fadeToggle()

            menu.fadeOut({
                queue: false,
                duration: 'slow'
            });

            menu.animate({
                top: '-215px'
            });
        };
    });
});
