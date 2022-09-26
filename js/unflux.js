(function($) {

    var simaJS = {

        init : function(){

            this.popin();
            this.addLang();
            this.animateFigures();
            this.headerDisplace();
            this.rework2022()
        },
        

        popin : function(){
            var videoItem = $(".video-item");
            if(videoItem.length) {
                videoItem.click(function(){
                    var videoName = $(this).data('videoname');
                    $("#"+videoName).addClass('popin-open');
                    if(!$("#" + videoName + " > .popin-container > iframe").length) {
                        $("#" + videoName + " > .popin-container > .popin-close").after('<iframe src="' + $("#"+videoName).data('yt-url') + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="" kwframeid="1"></iframe>')
                    }
                    $("html").addClass('noscroll');
                });
                $(".popin-close, .popin-overlay").click(function(){
                    var videoName = $(this).data('videoname');
                    $(".popin").removeClass('popin-open');
                    $("#"+ videoName +' iframe').attr("src", $("#"+ videoName +' iframe').attr("src"));
                    $("html").removeClass('noscroll');
                });
            }
        },

        addLang : function() {
            if ( $('html').attr('lang') == 'en' ) {
                $(".js .ls-lang-list").append('<li class="ls-lang-item ls-lang-es"><a class="ls-lang-link" href="/Visit/Visitar-SIMA"><abbr title="Español">es</abbr></a></li> <li class="ls-lang-item ls-lang-it"><a class="ls-lang-link" href="/Visit/Visitare-SIMA"><abbr title="Italiano">it</abbr></a></li> <li class="ls-lang-item ls-lang-de"><a class="ls-lang-link" href="/Visit/Die-SIMA-besuchen"><abbr title="Deutsch">de</abbr></a></li>');
            } else {
                $(".js .ls-lang-list").append('<li class="ls-lang-item ls-lang-es"><a class="ls-lang-link" href="/Visiter/Visitar-SIMA"><abbr title="Español">es</abbr></a></li> <li class="ls-lang-item ls-lang-it"><a class="ls-lang-link" href="/Visiter/Visitare-SIMA"><abbr title="Italiano">it</abbr></a></li> <li class="ls-lang-item ls-lang-de"><a class="ls-lang-link" href="/Visiter/Die-SIMA-besuchen"><abbr title="Deutsch">de</abbr></a></li>');
            }
        },
        
        animateFigures : function() {
            
            /*
            jQuery animateNumber plugin v0.0.14
            (c) 2013, Alexandr Borisov.
            https://github.com/aishek/jquery-animateNumber
           */
           (function(d){var r=function(b){return b.split("").reverse().join("")},m={numberStep:function(b,a){var e=Math.floor(b);d(a.elem).text(e)}},g=function(b){var a=b.elem;a.nodeType&&a.parentNode&&(a=a._animateNumberSetter,a||(a=m.numberStep),a(b.now,b))};d.Tween&&d.Tween.propHooks?d.Tween.propHooks.number={set:g}:d.fx.step.number=g;d.animateNumber={numberStepFactories:{append:function(b){return function(a,e){var f=Math.floor(a);d(e.elem).prop("number",a).text(f+b)}},separator:function(b,a,e){b=b||" ";
           a=a||3;e=e||"";return function(f,k){var u=0>f,c=Math.floor((u?-1:1)*f).toString(),n=d(k.elem);if(c.length>a){for(var h=c,l=a,m=h.split("").reverse(),c=[],p,s,q,t=0,g=Math.ceil(h.length/l);t<g;t++){p="";for(q=0;q<l;q++){s=t*l+q;if(s===h.length)break;p+=m[s]}c.push(p)}h=c.length-1;l=r(c[h]);c[h]=r(parseInt(l,10).toString());c=c.join(b);c=r(c)}n.prop("number",f).text((u?"-":"")+c+e)}}}};d.fn.animateNumber=function(){for(var b=arguments[0],a=d.extend({},m,b),e=d(this),f=[a],k=1,g=arguments.length;k<g;k++)f.push(arguments[k]);
           if(b.numberStep){var c=this.each(function(){this._animateNumberSetter=b.numberStep}),n=a.complete;a.complete=function(){c.each(function(){delete this._animateNumberSetter});n&&n.apply(this,arguments)}}return e.animate.apply(e,f)}})(jQuery);


            //Animate key figures

            var $window = $(window);
            var $elem = $(".chiffres-cles")

            function isScrolledIntoView($elem, $window) {
                var docViewTop = $window.scrollTop();
                var docViewBottom = docViewTop + $window.height();

                var elemTop = $elem.offset().top;
                var elemBottom = elemTop + $elem.height();

                return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
            }

            $(document).on("scroll", function () {
                if ($elem.length > 0) {
                    if (isScrolledIntoView($elem, $window)) {

                        if ( $('html').attr('lang') == 'en' ) {
                            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                        } else {
                            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ')
                        }

                        //Animate visite number
                        $('#figure-visit').animateNumber({ number: 25, easing: 'easeOutQuart' }, 2000);

                        //Animate enterprise number
                        $('#figure-enterprise').animateNumber({
                                number: 1800,
                                easing: 'easeOutQuart',
                                numberStep: comma_separator_number_step
                            } , 2000
                        );

                        //Animate europe number
                        $('#figure-europe').animateNumber({ number: 200, easing: 'easeOutQuart' }, 2000);

                        //Animate press number
                        $('#figure-press').animateNumber({ number: 600, easing: 'easeOutQuart' }, 2000);

                        //Animate continent number
                        $('#figure-continent').animateNumber({ number: 5, easing: 'easeOutQuart' }, 2000);

                        //Animate pro number
                        $('#figure-pro').animateNumber({
                                number: 230000,
                                easing: 'easeOutQuart',
                                numberStep: comma_separator_number_step
                            } , 2000
                        );

                        $(document).off('scroll');


                    }
                }
            });

        },
        
        headerDisplace() {
          const datesAndPlace = document.querySelector('.nav-left > p')
          const header = document.querySelector('.main-navigation .mn-menu')
          const afterItem = header.querySelector('.mn-menu-item-374214')
          header.insertBefore(datesAndPlace, afterItem)

          const span = datesAndPlace.querySelector('span')
          span.innerHTML.startsWith('- ') && (span.innerHTML = span.innerHTML.replace('- ', ''))
        },

        rework2022() {
            // Safe for dev
            const baneer = document.querySelector('.anniversary-baneer')
            if(!baneer) return

            // Add class on parent
            baneer.parentNode.parentNode.classList.add('anniversary-baneer-wrapper')

            // Move banner
            const header = document.querySelector('.site-banner')
            const headerInside = header.querySelector('.inside')
            header.insertBefore(baneer, headerInside)

            // Handle close banner
            const close = document.querySelector('.anniversary-baneer__close') 
            close.addEventListener('click', () => {
                header.classList.add('no-banner')
                document.querySelector('.site-wrapper').classList.add('no-banner')
            })

            // Infos pratiques moves
            const ip = document.querySelector('.content905618')
            if(ip) {
                const ipTitle = document.querySelector('.content905618 h1')
                const ipZone1 = document.querySelector('#zone1')
                ipZone1.appendChild(ipTitle)

                const ipDateSection = document.querySelector('.content905618 .edito:nth-child(1) .inside')
                const dateSection = document.createElement('div')
                ipDateSection.appendChild(dateSection)
                dateSection.classList.add('salon-dates')
                dateSection.innerHTML = `
                <div class="salon-dates__start salon-dates__part">
                    <p class="salon-dates__day">06</p>
                    <p class="salon-dates__month">novembre</p>
                    <p class="salon-dates__year">2022</p>
                    <svg viewBox="0 0 46 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333ZM6 7L46 7V5L6 5V7Z" fill="#252525"/>
                    </svg>
                </div>
                <div class="salon-dates__end salon-dates__part">
                    <p class="salon-dates__day">10</p>
                    <p class="salon-dates__month">novembre</p>
                    <p class="salon-dates__year">2022</p>
                    <svg viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40.7071 8.70711C41.0976 8.31658 41.0976 7.68342 40.7071 7.29289L34.3431 0.928932C33.9526 0.538408 33.3195 0.538408 32.9289 0.928932C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM0 9L40 9V7L0 7L0 9Z" fill="white"/>
                    </svg>
                </div>
                `;
            }

            // Pourquoi visiter moves
            const whyVisit = document.querySelector('.content905639')
            if(whyVisit) {
                const blocks = document.querySelectorAll('.content905639 .edito')
                blocks.forEach((el, i) => {
                    if(i === 0) return
                    const title = el.querySelector('h2');
                    title.innerHTML = `<span>#${i + 1}</span>` + title.innerHTML;

                    const img = el.querySelector('.at-illust');
                    img.outerHTML = `<div class="img-with-cube"><div class="img-with-cube__cube"></div>${img.outerHTML}</div>`;

                    el.querySelector('.inside').insertAdjacentHTML('beforeend', '<div class="edito-content"></div>');

                    const content = el.querySelector('.edito-content');
                    const paragraphs = el.querySelectorAll('p');
                    paragraphs.forEach((paragraph) => {
                        content.appendChild(paragraph)
                    }
                })
            }
        }

    }
    simaJS.init();

})(jQuery);
