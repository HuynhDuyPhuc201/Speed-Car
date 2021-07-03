




let image = document.getElementById('images');
let images = ['./img/Whyus-car-1.jpg', './img/Whyus-car-2.jpg', './img/Whyus-car-3.jpg', './img/Whyus-car-4.jpg']
setInterval(function(){
    let random = Math.floor(Math.random() * 4);
    image.src = images[random];
}, 1100);




$(document).ready(function(){   

    $(this).on('scroll',function(){
        let scrollTop = document.documentElement.scrollTop;
        $('main .footer_line-backtotop').on('click',function(){
            window.scrollBy({
                top: -6643,
                behavior: "smooth",
            })
        })
    });
    // scrollTop 
   // scroll line About
    $(this).on('scroll',function(){
        // console.log(scrollTop);
        let scrollTop = document.documentElement.scrollTop;
            if(scrollTop > 400){
                $('.about_introduce-evaluate .item .bar .blue').addClass('active');
                $('.about_introduce-evaluate .item .bar .pink').addClass('active-1');
                $('.about_introduce-evaluate .item .bar .orange').addClass('active-2');
                
            }else{
                $('.about_introduce-evaluate .item .bar .blue').removeClass('active');
                $('.about_introduce-evaluate .item .bar .pink').removeClass('active-1');
                $('.about_introduce-evaluate .item .bar .orange').removeClass('active-2');
            }
    })

    // arcordion2 AFQ 
    $('.FAQ .item6').on('click', function(){
        $('.FAQ .item6').toggleClass('active');
    })
    $('.FAQ .item7').on('click', function(){
        $('.FAQ .item7').toggleClass('active');
    })
    $('.FAQ .item8').on('click', function(){
        $('.FAQ .item8').toggleClass('active');
    })
    $('.FAQ .item9').on('click', function(){
        $('.FAQ .item9').toggleClass('active');
    })
    $('.FAQ .item10').on('click', function(){
        $('.FAQ .item10').toggleClass('active');
    })
    // tabs about
    $('.tab_container:first').show()
    $('.tab_navigation .li:first').addClass('active')
    $('.tab_navigation .li').click(function(event){
        index = $(this).index();
        $('.tab_navigation .li').removeClass('active');
        $(this).addClass('active');
        $('.tab_container').hide(); 
        $('.tab_container').eq(index).show(); 
    });

    // gallery
    $('.tab_gallery:first').show()
    $('.tab_navigation-1 li:first').addClass('active')
    $('.tab_navigation-1 li').click(function(event){
        index = $(this).index();
        $('.tab_navigation-1 li').removeClass('active');
        $(this).addClass('active');
        $('.tab_gallery').hide(); 
        $('.tab_gallery').eq(index).show(); 
    });

    // shopsingle
    $('.tab_shopsingle:first').show()
    $('.tab_navigation-2 li:first').addClass('active')
    $('.tab_navigation-2 li').click(function(event){
        index = $(this).index();
        $('.tab_navigation-2 li').removeClass('active');
        $(this).addClass('active');
        $('.tab_shopsingle').hide(); 
        $('.tab_shopsingle').eq(index).show(); 
    });



    // FAQ
    $(".FAQ .FAQ_accordion").click(function(e){
        e.preventDefault();
        $('.FAQ .FAQ_content').stop().slideUp();
        $(this).next().stop().slideToggle();
        // $('.FAQ .FAQ_content').not($(this).next()).slideUp();
        // $(this).next().slideToggle();
    });
    $('.FAQ .item').on('click', function(){
        $('.FAQ .item').toggleClass('active');
    })
    $('.FAQ .item1').on('click', function(){
        $('.FAQ .item1').toggleClass('active');
    })
    $('.FAQ .item2').on('click', function(){
        $('.FAQ .item2').toggleClass('active');
    })
    $('.FAQ .item3').on('click', function(){
        $('.FAQ .item3').toggleClass('active');
    })
    $('.FAQ .item4').on('click', function(){
        $('.FAQ .item4').toggleClass('active');
    })
    $('.FAQ .item5').on('click', function(){
        $('.FAQ .item5').toggleClass('active');
    })




    
    // Menu fixed 
    $(window).scroll(function(){
        if ($(window).scrollTop() > 1000){
            $('.menu-fixed').slideDown(300);
        } 
            else{
            $('.menu-fixed').slideUp(200);
        }
    })

    // list-home
    $('.search_bg-content-name .list').on('click',function(){
        $('.list_ul').stop().slideUp();
        $(this).next().stop().slideToggle();
        $('.search_bg-content-name .list .icon1').toggleClass('active')
    })
    $('.list_ul li p').on('click',function(){
        var current = $(this).html();
        $('.list .p1').html(current);
        $('.list_ul').stop().slideUp();
        $('.list .icon1').toggleClass('active')
    })

        // list-language
    $('.english').on('click',function(){
        $('.language').stop().slideUp();
        $(this).next().stop().slideToggle();
        $('.english .icon').toggleClass('active')
    })
    $('.language_ul li p').on('click',function(){
        var current = $(this).html();
        $('.english .text p').html(current);
        $('.language_ul').stop().slideUp();
    })

    // Menu mobile 
    $('.menu-mobile__hamburgur').on('click', function(){
        $('.menu-mobile__fullscreen').css({
            'height': '100vh',
            'visibility': 'visible',
            'opacity': '1',
            'transition': 'all 0.5s',
        });
    })
    $('.menu-mobile__fullscreen .close').on('click', function(){
        $('.menu-mobile__fullscreen').css({
            'height': '0',
            'visibility': 'hidden',
            'opacity': '0',
            'transition': 'all 0.5s',
        });
    })




    //list-view inventory
    $(".shortby1 .shortby-icon .2hang").on("click",function(){
        $(".list-view-1").css({
            "display" : "none",
            "transiton" : "all 0.5s"
        })
        $(".list-view-2").css({
            "display" : "block",
            "transiton" : "all 0.5s"
        })
    }) 
    $(".shortby1 .shortby-icon .1hang").on("click",function(){
        $(".list-view-2").css({
            "display" : "none",
            "transiton" : "all 0.5s"
        })
        $(".list-view-1").css({
            "display" : "block",
            "transiton" : "all 0.5s"
        })
    })

    //load-page     
    $('.load-page').fadeOut(1600);

    $('.sv_menu .make').on('click',function(){
        $('.sv_menu-list .list').stop().slideUp();
        $(this).next().stop().slideToggle();
        $('.sv_menu .make img').toggleClass('active')
    })
    $('.sv_menu .model').on('click',function(){
        $('.sv_menu-list .list2').stop().slideUp();
        $(this).next().stop().slideToggle();
        $('.sv_menu .model img').toggleClass('active')
    })
    $('.sv_menu .condition').on('click',function(){
        $('.sv_menu-list .list3').stop().slideUp();
        $(this).next().stop().slideToggle();
        $('.sv_menu .condition img').toggleClass('active')
    })
    $('.sv_menu .fuel').on('click',function(){
        $('.sv_menu-list .list4').stop().slideUp();
        $(this).next().stop().slideToggle();
        $('.sv_menu .fuel img').toggleClass('active')
    })
    $('.sv_menu .Style').on('click',function(){
        $('.sv_menu-list .list5').stop().slideUp();
        $(this).next().stop().slideToggle();
        $('.sv_menu .Style img').toggleClass('active')
    })
    $('.pp_menu .year').on('click',function(){
        $('.pp_menu-list .list6').stop().slideUp();
        $(this).next().stop().slideToggle();
        $('.pp_menu .year img').toggleClass('active')
    })
    $('.pp_menu .mileage').on('click',function(){
        $('.pp_menu-list .list7').stop().slideUp();
        $(this).next().stop().slideToggle();
        $('.pp_menu .mileage img').toggleClass('active')
    })

    // about
    let $carousel2= $('.et .slide-et');
    $carousel2.flickity({
    // options
    cellAlign: 'left',
    wrapAround: true,
    contain: true,
    pageDots: false,
    prevNextButtons: false,

    });

    // home
    let $carousel3= $('.nb .slide-nb');
    $carousel3.flickity({
    // options
    cellAlign: 'left',
    wrapAround: true,
    contain: true,
    pageDots: false,
    prevNextButtons: false,
    });

    // about
    let $carousel4= $('.customer-reviews .slide-cr');
    $carousel4.flickity({
    // options
    cellAlign: 'left',
    wrapAround: true,
    contain: true,
    pageDots: true,
    prevNextButtons: false,
    });

    // shop single
    let $carousel5= $('main .slide-shopsingle');
    $carousel5.flickity({
    // options
    cellAlign: 'left',
    wrapAround: true,
    contain: true,
    pageDots: false,
    prevNextButtons: false,
    });

    // team member
    let $carousel6= $('.et .slide-tm');
    $carousel6.flickity({
    // options
    cellAlign: 'left',
    wrapAround: true,
    contain: true,
    pageDots: false,
    prevNextButtons: false,

    });

    // about
    let prev_et = ()=>{
        $('.et .container .row .et_btn .prev').on( 'click', function() {
            $("main .et .slide-et").flickity('previous');
        });
    }
    prev_et();
    let next_et = ()=>{
        $('.et .container .row .et_btn .next').on( 'click', function() {
            $("main .et .slide-et").flickity('next');
        });
    }
    next_et();

    // home
    let prev_newblogs = ()=>{
        $('.nb_img .prev').on( 'click', function() {
            $("main .slide-nb").flickity('previous');
        });
    }
    prev_newblogs();
    let next_newblogs = ()=>{
        $('.nb_img .next').on( 'click', function() {
            $("main .slide-nb").flickity('next');
        });
    }
    next_newblogs();


    // shop single
    let prev_shopsingle = ()=>{
        $('.sg_img .prev').on( 'click', function() {
            $("main .slide-shopsingle").flickity('previous');
        });
    }
    prev_shopsingle();
    let next_shopsingle = ()=>{
        $('.sg_img .next').on( 'click', function() {
            $("main .slide-shopsingle").flickity('next');
        });
    }
    next_shopsingle();


    // team member
    let prev_tm = ()=>{
        $('.tm .container .row .tm_btn .prev').on( 'click', function() {
            $("main .tm .slide-tm").flickity('previous');
        });
    }
    prev_tm();
    let next_tm = ()=>{
        $('.tm .container .row .tm_btn .next').on( 'click', function() {
            $("main .tm .slide-tm").flickity('next');
        });
    }
    next_tm();


    // list shop gird
    $('.list1 .list1-item').on('click',function(){
        $('.wrapper-list .list1 .list2').stop().slideUp();
        $(this).next().stop().slideToggle();
        $('.wrapper-list .list1 .list1-item .icon img').toggleClass('active')
    })
    // video About
    $('.about_introduce .about_introduce-img .video img').on('click', function() {
        $('.video_about').addClass('video_active');
    })
    $('.video_about').on('click', function() {
        $('.video_about').removeClass('video_active');
    })
    $('.line').on('click', function() {
        $('.video_about').removeClass('video_active');
        $('.video_about iframe').attr('src','https://www.youtube.com/');
    })


    //video Home
    $('.whyus .content_img .video .play').on('click', function() {
        $('.video_about').addClass('video_active');
    })
    $('.video_about').on('click', function() {
        $('.video_about').removeClass('video_active');
    })
    $('.line1').on('click', function() {
        $('.video_about').removeClass('video_active');
        $('.video_about iframe').attr('src','https://www.youtube.com/');
    })

    AOS.init({
        duration: 1500,
    });


    $('main .contactbtn_d').on('click',function(){

        // document.querySelector('.form .form_table-1 .name input').classList.add('error');
        let name = $('.contact_form .name input').val();
        let phone = $('.contact_form .phone input').val();
        let email = $('.contact_form .mail input').val();
        let subject = $('.contact_form .subject input').val();
        
    
        var check_name = true;
        var check_phone = true;
        var check_email = true;
        var check_subject = true;
    
        if  (name == ""){
            $('.contact_form .name input').addClass('error');
            check_name = false;
        }
        else{
            $('.contact_form .name input').removeClass('error');
            check_name = true;
        }
        if  (phone == ""){
            $('.contact_form .phone input').addClass('error');
            check_phone = false;
        }
        else{
            $('.contact_form .phone input').removeClass('error');
            check_phone = true;
        }
        if  (email == ""){
            $('.contact_form .mail input').addClass('error');
            check_email = false;
        }
        else{
            $('.contact_form .mail input').removeClass('error');
            check_email = true;
        }
        if  (subject == ""){
            $('.contact_form .subject input').addClass('error');
            check_subject = false;
        }
        else{
            $('.contact_form .subject input').removeClass('error');
            check_subject = true;
        }
        
        if (check_name == true && check_phone == true && check_email == true && check_subject == true){
            $('main .popup').addClass('active');
            $('main .popup .text').html('Logged in successfully !!!');
        }
        else{
            $('main .popup').addClass('active');
            $('main .popup .text').html("System error");
        }
        
        $("main .popup .popup-modal .btn").on('click', function(){
            $('main .popup').removeClass('active');
        })
    });


});


