$(function () {
  //헤더 버거바
  $(".burger").on("click", function () {
    $(".burger div:nth-child(1)").toggleClass("on");
    $(".burger div:nth-child(2)").toggleClass("on");
    $(".burger div:nth-child(3)").toggleClass("on");
    $(".drop").toggleClass("on");
  });

  $(window).scroll(function () {
    ////헤더 스크롤하면 보더
    // $("header").css({ borderBottom: "1px solid #333" });

    //스크롤에 따라 나오는 컨테이너박스
    let scroll = $(window).scrollTop();
    let baseline = -600;
    let topOf1 = $(".con1").offset().top + baseline;
    let topOf2 = $(".con2").offset().top + baseline;
    let topOf3 = $(".con3").offset().top + baseline;
    let topOf4 = $(".con4").offset().top + baseline;
    let topOf5 = $(".con5").offset().top + baseline;

    if (scroll > topOf1) {
      $(".con1").addClass("on");
    }
    if (scroll > topOf2) {
      $(".con2").addClass("on");
    }
    if (scroll > topOf3) {
      $(".con3").addClass("on");
    }
    if (scroll > topOf4) {
      $(".con4").addClass("on");
      
    }
    if (scroll > topOf5) {
      $(".con5").addClass("on");
    }

    //스크롤에 따라 움직이는 사진 효과 구현 해보려했는데.....
    //0이 되었을때 요소가 멈추지 않는 것을 해결하지 못함.
    // let scroll = $(window).scrollTop();
    // console.log(scroll);

    // if ($(".con1 .pic").css("transform") === "translateX(0%)") {
    // } else {
    //   $(".con1 .pic").css({ transform: `translateX(${-100 + scroll / 10}%)` });
    // }
  });

  //con4 움직이는 컨테이너
  let i = 0;
  let timer;

  go();

  function slide() {
    $(".pic_wrap ul li").removeClass("on");
    $(".text_wrap ul li").fadeOut();
    $(".bar li").removeClass("on");

    i++;
    if (i == 4) {
      $(".pic_wrap ul li").eq(0).addClass("on");
      setTimeout(function () {
        $(".text_wrap ul li").eq(0).fadeIn();
      }, 700);
      $(".bar li").eq(0).addClass("on");

      i = 0;
    } else {
      $(".pic_wrap ul li").eq(i).addClass("on");
      setTimeout(function () {
        $(".text_wrap ul li").eq(i).fadeIn();
      }, 700);
      $(".bar li").eq(i).addClass("on");
    }
  }

  function go() {
    timer = setInterval(slide, 3900);
  }

  $(".bar li").click(function () {
    clearInterval(timer);
    let index = $(this).index();
    $(".pic_wrap ul li").removeClass("on");
    $(".text_wrap ul li").fadeOut();
    $(".bar li").removeClass("on");

    $(".pic_wrap ul li").eq(index).addClass("on");
    setTimeout(function () {
      $(".text_wrap ul li").eq(index).fadeIn();
    }, 700);
    $(".bar li").eq(index).addClass("on");

    go();
  });

  // con5 마우스 오버 효과

  $(".picture li").mouseover(function () {
    $(".picture li").children(".text").removeClass("on");
    $(this).children(".text").addClass("on");
  });
});
