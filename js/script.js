$(document).ready(function(){
    $('.bxslider').bxSlider({adaptiveHeight:true, mode:'horizontal', auto:true, speed: 500,  pause: 6000});

    $('#verticalTab').easyResponsiveTabs({
        type: 'vertical',
        width: 'auto',
        fit: true
    });

    $(".fa-bars").click(function(){
        $(".hidden-mobile").slideToggle();
    });

    $('#horizontalTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true,   // 100% fit in a container
        closed: 'accordion', // Start closed if in accordion view
        activate: function(event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#tabInfo');
            var $name = $('span', $info);

            $name.text($tab.text());

            $info.show();
        }
    });



});

var $grid = $('.grid').isotope({

});

// $('#container').isotope({ filter: '.metal' });

$grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
});


$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 800);
    return false;
});


(function($) {
    $(document).ready(function() {
        var navChildren = $(".navigation ul li").children();
        var aArray = [];
        for (var i = 0; i < navChildren.length; i++) {
            var aChild = navChildren[i];
            var ahref = $(aChild).attr('href');
            aArray.push(ahref);
        }
        $(window).scroll(function() {
            var windowPos = $(window).scrollTop();
            var windowHeight = $(window).height();
            var docHeight = $(document).height();
            for (var i = 0; i < aArray.length; i++) {
                var theID = aArray[i];
                var secPosition = $(theID).offset().top;
                secPosition = secPosition - 135;
                var divHeight = $(theID).height();
                divHeight = divHeight + 90;
                if (windowPos >= secPosition && windowPos < (secPosition + divHeight)) {
                    $("a[href='" + theID + "']").parent().addClass("active");
                } else {
                    $("a[href='" + theID + "']").parent().removeClass("active");
                }
            }
        });

    });
})(jQuery);
