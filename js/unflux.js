(function($) {

    var simaJS = {

        init : function(){

            this.popin();
            this.addLang();

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
        },

        addLang : function() {
            if ( $('html').attr('lang') == 'en' ) {
                $(".js .ls-lang-list").append('<li class="ls-lang-item ls-lang-es"><a class="ls-lang-link" href="/Visit/Visitar-SIMA"><abbr title="Español">es</abbr></a></li> <li class="ls-lang-item ls-lang-it"><a class="ls-lang-link" href="/Visit/Visitare-SIMA"><abbr title="Italiano">it</abbr></a></li>');
            } else {
                $(".js .ls-lang-list").append('<li class="ls-lang-item ls-lang-es"><a class="ls-lang-link" href="/Visiter/Visitar-SIMA"><abbr title="Español">es</abbr></a></li> <li class="ls-lang-item ls-lang-it"><a class="ls-lang-link" href="/Visiter/Visitare-SIMA"><abbr title="Italiano">it</abbr></a></li>');
            }
        }

    }
    simaJS.init();

})(jQuery);
