$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['1', '2','3', '4'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['', '','', ''],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor: ['#CC3399', '#9933CC', '#CC99CC', '#006633', '#CC99CC'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: onLeave,
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });

    //第一次页面加载完毕后 初始化操作 使第一屏动起来
    init();
});

//Jquery 扩展方法
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

//第一次加载时动画
function init() {
    animatAndClear("#Resume1_title", "flipInX");
}

//屏幕切换事件
function onLeave(index, nextIndex, direction) {
    console.log(index + "-" + nextIndex + "-" + direction);
    if(nextIndex == 1) {
        animatAndClear("#Resume1_title", "flipInX");
    } else if(nextIndex == 2) {
        animatAndClear("#Resume2_title", "rotateInDownLeft");
    } else if(nextIndex == 3) {

    } else if(nextIndex == 4) {

    } else {
        console.error("未知页面")
    }

}

//元素动一下（元素，效果）
function animatAndClear(elementSelecter, action) {
    setTimeout(function(){
        $(elementSelecter).addClass('animated ' + action);
        setTimeout(function(){
            $(elementSelecter).removeClass('animated ' + action);
        }, 1000);
    }, 1000);
}