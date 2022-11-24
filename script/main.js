$(document).ready(function(){
    $('header li').click(function(){
        let i = $(this).index();
        $('html, body').animate({scrollTop:$('main section').eq(i).offset().top-70},500,'swing');
        return false;
    })

        $(window).scroll(function(){
        if(this.scrollY>0){
            // console.log(this.scrollY)
            $('header').css({
                'box-shadow':'1px 4px 10px rgba(58, 58, 58, 0.379)',
                'background':'rgba(225,225,225,0.5)',
                'backdrop-filter' :'blur(15px)'
            });
        }else{
            $('header').css({
                'box-shadow':'none',
                'background':'#fff'
            });
        };

        if(this.scrollY >= $('.sec2').offset().top-70){
            $('.sec2 .inner .skill dd span div').eq(0).animate({'width':'80%'},500);
            $('.sec2 .inner .skill dd span div').eq(1).animate({'width':'80%'},550);
            $('.sec2 .inner .skill dd span div').eq(2).animate({'width':'50%'},600);
            $('.sec2 .inner .skill dd span div').eq(3).animate({'width':'60%'},650);
            $('.sec2 .inner .skill dd span div').eq(4).animate({'width':'30%'},700);
            $('.sec2 .inner .skill dd span div').eq(5).animate({'width':'70%'},750);
            $('.sec2 .inner .skill dd span div').eq(6).animate({'width':'80%'},800);
            $('.sec2 .inner .skill dd span div').eq(7).animate({'width':'80%'},850);
            $('.sec2 .inner .skill dd span div').eq(8).animate({'width':'80%'},900);
        };
    });

    const spyEl = document.querySelectorAll('.scroll-spy');

    spyEl.forEach(function (spyEl) {

        new ScrollMagic
        .Scene({ //감시할 장면을 추가
            triggerElement: spyEl,
            triggerHook: .9 //화면의 80% 지점에서 동작
        })
        .setClassToggle(spyEl, 'show') //show클래스를 적용하거나 해제하기
        .addTo(new ScrollMagic.Controller()); //컨트롤러에 장면을 할당한다
    });
    })