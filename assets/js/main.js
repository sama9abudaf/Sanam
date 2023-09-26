
$(document).ready(function () {
  document.addEventListener("DOMContentLoaded", function(){
    /////// Prevent closing from click inside dropdown
    document.querySelectorAll('.dropdown-menu').forEach(function(element){
      element.addEventListener('click', function (e) {
        e.stopPropagation();  
      });
    })
  });

  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
  
  $("#newsHero").owlCarousel({
    loop: true,
    lazyLoad: true,
    autoplay: true,
    margin:18,
    rtl : true,
    // nav: true,
    // autoplayTimeout: 6000,
    lazyLoad: true,
    dots: false,
    responsive: {
      0: {
        items: 1.5,
        dots : true,
        center:true

      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });


  $("#CamelWorld").owlCarousel({
    loop: true,
    lazyLoad: true,
    autoplay: true,
    margin:18,
    rtl : true,
    center:true,
    autoWidth:true,
    lazyLoad: true,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 2,
      },
    },
  });


  $("#allProductsRelated").owlCarousel({
    loop: true,
    autoplay: true,
    margin:18,
    rtl : true,
    nav: true,
    navText: ["<img src='./assets/images/arrowRelatedright.svg'>","<img src='./assets/images/arrowRelatedleft.svg'>"],
    lazyLoad: true,
    dots: false,
    responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
    }
  });


  var swiper = new Swiper(".swiper.cardsSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true
    },
    spaceBetween: 40,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },

      // Responsive breakpoints
   breakpoints: {
    640: {
      coverflowEffect: {
        modifier: 5
      },
      spaceBetween: 40
    },
    1024: {
      coverflowEffect: {
        modifier: 3
      }
    }
    }
  });


  var swiper2 = new Swiper('.swiper-container-top', {
    direction: 'vertical',
    slidesPerView: 3,
    spaceBetween: 30,
    mousewheel: true,
    grabCursor: true,
    
    speed : 1200,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true
    },
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
  });

  var swiper3 = new Swiper('.swiper-container-bottom', {
    direction: 'vertical',
    slidesPerView: 3,
    spaceBetween: 30,
    mousewheel: true,
    grabCursor: true,
    
    speed : 1200,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      // reverseDirection: true
    },
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
  });



  $('.navbar .navbar-collapse > ul > li').click(function(e){
    $(this).addClass('active').siblings().removeClass('active');
  })

  $("body").on("mouseenter touchstart", ".product-ratings", function (e) {  
    var i = ($(this).find(".ratings").width() / $(this).width()) * 5;
    $(this)
        .find(".tooltiptext")
        .text(i ? i.toFixed(0) : i);
  });


 $("body").on("click", ".rating-form .rating-stars > a", function (e) {
    var i = $(this);
    i.addClass("active").siblings().removeClass("active"), i.parent().addClass("selected"), i.closest(".rating-form").find("select").val(i.text()), e.preventDefault();
  });


  // $('.selectSingle').select2({
  //   placeholder: "Select a state",
  //   minimumResultsForSearch: -1,
  //   selectionCssClass : "selectSingleContainer",
  //   dropdownCssClass: 'dropDownSingle'
  // });



  // $(".js-select2").select2({
  //   //   closeOnSelect: false,
  //     allowHtml: true,
  //     allowClear: true,
  //     tags: true, // создает новые опции на лету
  // });



  
  //   var markernav = document.querySelector('#marker');
  //   var links = document.querySelectorAll('#main_nav > .navbar-nav > .nav-item > .nav-link');

  //   function indicator(e){
  //     markernav.style.left = e.offsetLeft+"px"; 
  //     markernav.style.width = e.offsetWidth+"px";
  //     console.log(e.offsetLeft+"px")
  //   }

  //   links.forEach(link => {
  //     // link.addEventListener('mouseover', (e)=>{
  //     //     indicator(e.target);
  //     // })
  //     link.addEventListener('click', (e)=>{
  //         indicator(e.target);
  //     })
  //   })




    // let linksNav = $('#main_nav > .navbar-nav > .nav-item');
    // let markerNav = $('#marker');
  
    // linksNav.click(function(e){
    //   let leftMarker = $(this).position().left
    //   markerNav.css("left", leftMarker )
    // });


    // linksNav.each(function () {
    //   if($(this).hasClass('disabled')){
    //     $(this).removeClass('active');
    //   }
    // });



    // var markermedia = document.querySelector('#markermedia');
    // var tabsMedia = document.querySelectorAll('.tabsContentOwl li');

    // function indicatorMedia(e){
    //   markermedia.style.top = e.offsetTop+"px"; 
    //   markermedia.style.height = e.offsetHeight+"px";
    // }

    // tabsMedia.forEach(tab => {
    //   // link.addEventListener('mouseover', (e)=>{
    //   //     indicator(e.target);
    //   // })
    //   tab.addEventListener('click', (e)=>{
    //     indicatorMedia(e.target);
    //   })

    // })

  // $('.tabsContentOwl li').click(function(e){
  //   $(this).addClass('active').siblings().removeClass('active');
  //   let tabMedia = '.' + $(this).data( "tabmedia");
  //   console.log($(`${tabMedia}`).hasClass('active'));

  //   $(`${tabMedia}`).addClass('active').siblings().removeClass('active');
  // })


  //   $("#projectsHomeSider").owlCarousel({
  //   loop: true,
  //   lazyLoad: true,
  //   autoplay: true,
  //   margin:18,
  //   nav: true,
  //   navText: ["<img src='./assets/images/leftNav.svg'>","<img src='./assets/images/rightNav.svg'>"],
  //   autoplayTimeout: 6000,
  //   lazyLoad: true,
  //   dots: false,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 1,
  //     },
  //     1000: {
  //       items: 3,
  //     },
  //   },
  // });



  // $("#PhotoGallery").owlCarousel({
  //   loop: true,
  //   lazyLoad: true,
  //   autoplay: true,
  //   margin:12,
  //   nav: true,
  //   navText: ["<img src='./assets/images/leftNav.svg'>","<img src='./assets/images/rightNav.svg'>"],
  //   autoplayTimeout: 60000,
  //   lazyLoad: true,
  //   width:700,
  //   dots: false,
  //   center:true,
  //   responsive: {
  //     0: {
  //       items: 1.7,
  //     },
  //     600: {
  //       items: 1.7,
  //     },
  //     1000: {
  //       items: 2.1,
  //     },
  //   },
  // });



  // $("#testi").owlCarousel({
  //   loop: true,
  //   lazyLoad: true,
  //   autoplay: true,
  //   margin:18,
  //   // nav: true,
  //   // navText: ["<img src='./assets/images/leftNav.svg'>","<img src='./assets/images/rightNav.svg'>"],
  //   autoplayTimeout: 6000,
  //   lazyLoad: true,
  //   dots: true,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 1,
  //     },
  //     1000: {
  //       items: 1,
  //     },
  //   },
  // });


  // //customers Logos 1
  // $("#partners").owlCarousel({
  //   loop: true,
  //   margin: 20,
  //   dots: false,
  //   autoplay: true,
  //   nav: true,
  //   navText: ["<img src='./assets/images/leftNav.svg'>","<img src='./assets/images/rightNav.svg'>"],
  //   slideTransition: "linear",
  //   autoplayTimeout: 0,
  //   autoplaySpeed: 3000,
  //   autoplayHoverPause: false,
  //   responsive: {
  //     0: {
  //       items: 2,
  //     },
  //     600: {
  //       items: 3,
  //     },
  //     1000: {
  //       items: 6,
  //     },
  //   },
  // });


  //   //Twitter Slider 
  //   $("#twitterOwl").owlCarousel({
  //     loop: true,
  //     lazyLoad: true,
  //     autoplay: true,
  //     dots:false,
  //     nav: true,
  //     navText: ["<img src='./assets/images/leftNav.svg'>","<img src='./assets/images/rightNav.svg'>"],
  //     responsive: {
  //       0: {
  //         items: 1,
  //       },
  //       600: {
  //         items: 2,
  //       },
  //       1000: {
  //         items: 3,
  //       },
  //     },
  //   });

 

  // $("#blogCar").owlCarousel({
  //   loop: true,
  //   lazyLoad: true,
  //   autoplay: true,
  //   margin:18,
  //   nav: true,
  //   navText: ["<img src='./assets/images/leftNav.svg'>","<img src='./assets/images/rightNav.svg'>"],
  //   // autoplayTimeout: 6000,
  //   lazyLoad: true,
  //   dots: false,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 2,
  //     },
  //     1000: {
  //       items: 3,
  //     },
  //   },
  // });


  // $("#NewsCar").owlCarousel({
  //   loop: true,
  //   lazyLoad: true,
  //   autoplay: true,
  //   margin:18,
  //   nav: true,
  //   navText: ["<img src='./assets/images/leftNav.svg'>","<img src='./assets/images/rightNav.svg'>"],
  //   autoplayTimeout: 6000,
  //   lazyLoad: true,
  //   dots: false,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 2,
  //     },
  //     1000: {
  //       items: 3,
  //     },
  //   },
  // });


  // $("#heroMobile").owlCarousel({
  //   loop: true,
  //   lazyLoad: true,
  //   autoplay: true,
  //   autoplayTimeout: 6000,
  //   lazyLoad: true,
  //   dots: true,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 1,
  //     },
  //     1000: {
  //       items: 1,
  //     },
  //   },
  // });


  // Scroll to explore more
  $('.exploreHome').click(function(e){
    e.preventDefault()
    $('html, body').animate({
        scrollTop : $('.heroHome').height() - heightNavBar
    },700)
    
  })

  $('.navbar-expand-lg .navbar-collapse .navbar-nav li').click(function(e){
    if($(this).children('.dropdown-menu.megamenu').hasClass("show")){
      $('.navbar').addClass('showPC');
    }else{
      $('.navbar').removeClass('showPC');
    }
    
  })

  

  // Add Class stickyNav when scroll


  let heightNavBar = $('.navbar').outerHeight()
  $(window).on('scroll', function(){

    if($(window).scrollTop() >= heightNavBar){
        $('.navbar').addClass('stickyNav');
    }
    else{
        $('.navbar').removeClass('stickyNav');
        $('.navbar-expand-lg .navbar-collapse > .navbar-nav > li').each(function(){
          if($(this).children('.dropdown-menu.megamenu').hasClass("show")){
            $('.navbar').addClass('showPC');
          }else{            
            $('.navbar').removeClass('showPC');

          }
            
        })
    }
  });


  


  $(".navbar-dark .navbar-toggler").click(function(){
    $(this).toggleClass('open');
    $('.navbar').toggleClass('openNav')
  })

  // Quantity Products

$('body').find(".horizontal-quantity").TouchSpin({ verticalbuttons: !1, buttonup_txt: "", buttondown_txt: "", buttondown_class: "btn btn-outline btn-down-icon", buttonup_class: "btn btn-outline btn-up-icon", initval: 1, min: 1 });

$('body').find(".vertical-quantity").TouchSpin({verticalbuttons: !0,verticalup: "",verticaldown: "", verticalupclass: "icon-up-dir", verticaldownclass: "icon-down-dir", buttondown_class: "btn btn-outline", buttonup_class: "btn btn-outline", initval: 1, min: 1,});



/** Toogle Password **/

$(".togglePassword").click(function() {
  $(this).find('i').toggleClass("fa-eye fa-eye-slash");

  let inputPassowd = $($(this).siblings('input'));
  if (inputPassowd.attr("type") == "password") {
    inputPassowd.attr("type", "text");
  } else {
    inputPassowd.attr("type", "password");
  }
});


// ----floatin input label in input and select

$('.floating-group').find('.floating-control').each(function (index, ele) {
	var $ele = $(ele);
	if($ele.val() != '' || $ele.is(':selected') === true){
		$ele.parents('.floating-group').addClass('focused');
	}
})


$('.floating-control').on('focus', function (e) {
	$(this).parents('.floating-group').addClass('focused');	
}).on('blur', function(){
	if($(this).val().length > 0){
		$(this).parents('.floating-group').addClass('focused');		
	}else{
		$(this).parents('.floating-group').removeClass('focused');
	}
});



$('.floating-control').on('change', function (e) {
	if($(this).is('select')){
		if($(this).val() === $("option:first", $(this)).val()) {
			$(this).parents('.floating-group').removeClass('focused');
		}
		else{
			$(this).parents('.floating-group').addClass('focused');
		}
	}
})






// --------select2-------
$(document).ready(function() {
	//---- select2 single----
	$('.customSelect').each(function() {
		var dropdownParents = $(this).parents('.select2Part')
		$(this).select2({
			dropdownParent: dropdownParents,
			minimumResultsForSearch: -1
		}).on("select2:open", function (e) { 
			$(this).parents('.floating-group').addClass('focused');
		}).on("select2:close", function (e) {
			if($(this).find(':selected').val() === ''){
				$(this).parents('.floating-group').removeClass('focused');
			}
		});
	});

	//---- select2 multiple----
	$('.customSelectMultiple').each(function() {
		var dropdownParents = $(this).parents('.select2Part');
		// var placehldrget = $(this).attr("data-placeholder");
		$(this).select2({
			dropdownParent: dropdownParents,
      dir: "rtl",
			// placeholder: placehldrget,
			// tags: true,
			// closeOnSelect: false,
		}).on("select2:open", function (e) { 
			$(this).parents('.floating-group').addClass('focused');
		}).on("select2:close", function (e) {
			if($(this).val() != ''){
				$(this).parents('.floating-group').addClass('focused');
			}else{
				$(this).parents('.floating-group').removeClass('focused');
			}
		}).on("select2:select", function (e) { 
			$(this).parents('.floating-group').addClass('focused');
		}).on("select2:unselect", function (e) {
			$(this).parents('.floating-group').addClass('focused');
		})
	});


  $('.widget.search').on("click", ".resetValues", function () {
    $(this).parent('form').find('input').val('');
    $(this).parent('form').find('.floating-group').removeClass('focused')
  });

  $('.widget.checkBoxProducts').on("click", ".resetValues", function () {
    $(this).parent('form').find('input:checkbox').removeAttr('checked');
  })



  const rangeInput = document.querySelectorAll(".widget.price .range-input input"),
  priceInput = document.querySelectorAll(".widget.price .price-input input"),
  range = document.querySelector(".widget.price .slider .progress");  
  let priceGap = 10;

  priceInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

      if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
        if (e.target.className === "input-min") {
          rangeInput[0].value = minPrice;
          range.style.right = (minPrice / rangeInput[0].max) * 100 + "%";
        } else {
          rangeInput[1].value = maxPrice;
          range.style.left = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
        }
      }
    });
  });

  rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

      if (maxVal - minVal < priceGap) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        range.style.right = (minVal / rangeInput[0].max) * 100 + "%";
        range.style.left = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    });
  });

  const maxPriceProduct =   $('.range-input input:first-child').attr("min") ;

  const minPriceProduct =   $('.range-input input:first-child').attr('max') ;

  console.log(maxPriceProduct);

  console.log(minPriceProduct);

  $('.widget.price').on("click", ".resetValues", function () {
    range.style.left = 0 + "%";
    range.style.right = 0 + "%";
    $(this).parent('form').find('.price-input .field:first-child').find('input').val(maxPriceProduct) ;
    $(this).parent('form').find('.price-input .field:last-child').find('input').val(minPriceProduct) ;
    $(this).parent('form').find('.range-input input:first-child').val(maxPriceProduct) ;
    $(this).parent('form').find('.range-input input:last-child').val(minPriceProduct) ;
  })

});







    // // Dynamic Tabs Map
    // $('.contentCity > div').hide();
    // $('.contentCity > div').first().show();
    // $('.BtnCity').first().addClass('active');

    // $('.BtnCity').on('click', function(){
    //   console.log($(this).data('content'));
    //   $(this).addClass('active').siblings().removeClass('active');
    //   $('.contentCity > div').hide();
    //   $(`.${$(this).data('content')}`).fadeIn(1000);

    //   $(this).children().children();
    //     $(`.${$(this).data('content')}`).children().children().first().addClass('active').siblings().removeClass('active')

    // });


  // $("#kt_datepicker_public").flatpickr({
  //   disableMobile: "true"
  // });


  // $(".search .filterSearch").click(function(){
  //   $(this).toggleClass('open');
  //   $('.containerFilter').toggleClass('openFilters')
  // })



  // var mainSlider = $('.mainSlider.mainSlider').owlCarousel({
  //   // loop:true,
  //   nav:false,
  //   // lazyLoad: true,
  //   // autoplay:true,
  //   // autoplayTimeout:6000,
  //   // autoplayHoverPause:true,
  //   lazyLoad: true,
  //   dotsData: true,
  //   touchDrag  : false,
  //   mouseDrag  : false,
  //   dotsContainer: '#carousel-custom-dots',
  //   responsive:{
  //       0:{
  //           items:1
  //       },
  //       600:{
  //           items:1
  //       },
  //       1000:{
  //           items:1
  //       }
  //   }
  // })


  // var stringTitleSilder = $('.owl-item.active .titleSlider h2').data('titleslider');
  // var str = stringTitleSilder.split("");
  // var el = document.querySelector('.owl-item.active .titleSlider h2');
  // el.innerHTML = "";
  // (function animate() {
  // str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
  // var running = setTimeout(animate, 90);
  // })();


  // var stringTitleSilder = $('.owl-item.active .titleSlider h2').data('titleslider');

  // console.log(stringTitleSilder);

  // var strTitleSlider = stringTitleSilder.split("");

  // console.log(strTitleSlider);
  // var elString = $('.owl-item.active .titleSlider h2');
  
  // function animate() {
  //   strTitleSlider.length > 0 ? elString.innerHTML += strTitleSlider.shift() : clearTimeout(running); 
  //   var running = setTimeout(animate, 120);
  // };

  // animate()


  // $('.owl-dot-custom').click(function () {
  //   mainSlider.trigger('to.owl.carousel', [$(this).index(), 300]);
  // });

    // Scroll to explore more
    // $(' #carousel-custom-dots li.owl-dot-custom').click(function(){

    //   let markerSlider = $('.owl-item.active .markSlider');

    //   markerSlider.each(function(){
    //     let titleMarker = $(this).find('.titleMarker').width();
    //     $(this).find('.lineWidth').attr("style",`--from-width:${titleMarker}px`);
    //   })

    //   var stringTitleSilder = $('.owl-item.active .titleSlider h2').data('titleslider');
    //   var str = stringTitleSilder.split("");
    //   var el = document.querySelector('.owl-item.active .titleSlider h2');
    //   el.innerHTML = "";
    //   (function animate() {
    //   str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
    //   var running = setTimeout(animate, 70);
    //   })();

    // })
  
      let favouriteBttons = $('.favourite-icon button');
      favouriteBttons.click(function(e){
        $(this).toggleClass("liked");
        console.log($(this))
      })



});


$(window).load(function(){
  let markerSlider = $('.owl-item.active .markSlider');

  markerSlider.each(function(){
    let titleMarker = $(this).find('.titleMarker').width();
    $(this).find('.lineWidth').attr("style",`--from-width:${titleMarker}px`);
  })

  console.log($('.lineWidth').width())
});
