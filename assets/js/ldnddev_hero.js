jQuery(document).ready(function($){    
    if( $('.ldnddev-hero').hasClass('-parallax') ){
        var speed = $('.ldnddev-hero.-parallax').attr('data-speed');
        speed = '0.'+speed;
        $('.ldnddev-hero.-parallax .ldnddev-hero__image').each(function(){
            var $elem = $(this);
            var $elem_content = $(this).parent().children('.ldnddev-hero__content');
            $(window).on('scroll', function(){
                var scroll = $(document).scrollTop();
                // $elem.css({
                //     'background-position': '50% ' +(speed*scroll)+'px'
                // });
                $elem_content.css({
                    'bottom': (speed*scroll)+'px'
                });
            });
        });
    }
});