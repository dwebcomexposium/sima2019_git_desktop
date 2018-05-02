(function($) {

    var simaJS = {

        init : function(){

            this.popin();

        },
        

        popin : function(){
            $(".video-item").click(function(){
                var videoName = $(this).data('videoname');
                $("#"+videoName).addClass('popin-open');
                $("html").addClass('noscroll');
            });
            $(".popin-close, .popin-overlay").click(function(){
                var videoName = $(this).data('videoname');
                $(".popin").removeClass('popin-open');
                $("#"+ videoName +' iframe').attr("src", $("#"+ videoName +' iframe').attr("src"));
                $("html").removeClass('noscroll');
            });
        }

    }
    simaJS.init();

})(jQuery);
