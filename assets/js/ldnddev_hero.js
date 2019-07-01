jQuery(document).ready(function($){
    if( $('.ldnddev-hero').hasClass('-parallax') ){        
        $('.ldnddev-hero.-parallax').each(function(){
            var speed = $('.ldnddev-hero.-parallax').attr('data-speed');
            speed = '0.'+speed;
            var elem = $(this).find('.ldnddev-hero__content');
            var offset = $(this).offset();
            offset = (offset.top - 100);
            $(window).on('scroll', function(){
                var scroll = $(document).scrollTop();
                if( $(this).scrollTop() >= offset ){
                    elem.css({
                        'bottom': (speed*(scroll-offset))+'px'
                    });
                }
            });
        });
    }
});