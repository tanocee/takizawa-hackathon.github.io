$(function() {

    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    (function () {
        $('#preloader').delay(500).fadeOut('slow');
    }());

    // --------------------------------------------------------------------
    // One Page Navigation
    // --------------------------------------------------------------------

    (function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 50) {
                $('nav.navbar').addClass('sticky-nav');
            }
            else {
                $('nav.navbar').removeClass('sticky-nav');
            }
        });
    }());

    // --------------------------------------------------------------------
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    // --------------------------------------------------------------------

    (function () {
        $('a.page-scroll').on('click', function (e) {
            e.preventDefault();
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
        });
    }());

    // --------------------------------------------------------------------
    // Closes the Responsive Menu on Menu Item Click
    // --------------------------------------------------------------------

    (function () {
        $('.navbar-collapse ul li a').on('click', function () {
            if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
                $('.navbar-toggle:visible').trigger('click');
            }
        });
    }());

    // --------------------------------------------------------------------
    // particale.js
    // --------------------------------------------------------------------
    particlesJS.load('background-particles', 'js/particles.json', function() {
      // customize file -> particles.json
      console.log('particle.js loaded!');
    });

    // --------------------------------------------------------------------
    // first view catch copy
    // --------------------------------------------------------------------

    $(function() {
    	var message = {

    		message: [
    			'滝沢の課題を解決する;',
    			'ワクワクを生み出す;',
    			'新しいものをつくる;',
          'ものづくりを楽しむ;',
          'アイディアを形にする;',
          '最初の一歩を踏み出す;',
    			'新たな仲間をつくる;',
          '未来の滝沢を創造する;'
    		],
    		counterS: 0,
    		counterL: 0,
    		deleteS: false,

    		init: function() {
    			this.cacheElem();
    			this.type();
    		},

    		cacheElem: function() {
    			this.$text = $('.input-catch-copy');
    		},

    		type: function() {
    			var message 	= this.message[this.counterS],
    				  that 	    = this,
    				  speed 	  = 0;

    			message = !this.deleteS ? message.slice(0, ++this.counterL) : message.slice(0, --this.counterL);
    			if(this.message[this.counterS] != message && !this.deleteS) {
    				this.$text.text(message);
    				speed = 200;
    			}
    			else {
    				this.deleteS = true;
    				speed = this.message[this.counterS] == message ? 1500 : 40;
    				this.$text.text(message);
    				if (message == '') {
    					this.deleteS = false;
    					this.counterS = this.counterS < this.message.length - 1 ? this.counterS + 1 : 0;
    				}
    			}
    			setTimeout(function(){that.type()}, speed);
    		}
    	};
    	message.init();
    });
}); // JQuery end
