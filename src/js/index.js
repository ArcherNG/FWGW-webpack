var $ = require('./jquery-3.3.1.min.js');
require('../images/Banner_1.png');
require('../images/Banner_2.png');
import '../css/fullpage.min.css';
import '../css/base.css';
import fullpage from './fullpage.min.js';
$(document).ready(function() {
      // fullpage.js option start
      var fullPageInstance = new fullpage('#fullpage',{
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        //options here
        autoScrolling:false,
        css3:true,
        navigation: true,
        anchors:['01', '02', '03','04'],
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        navigationTooltips:['疯玩首页','公司理念','发展历程','游戏业务'],
        onLeave: function(origin, destination, direction){
            var leavingSection = this;
            //after leaving section 2
            if(origin.index == 0 && direction =='down'){
                $(".FZ").toggleClass("floating");
                $(".title-0").toggleClass("title_name");
                $(".slogan-0").toggleClass("slogan_introduce");
            }
            else if(origin.index == 1 && direction == 'down'){
                $(".DQ").toggleClass("DiQiuZiZhuan")
                $(".title-1").toggleClass("title_name");
                $(".slogan-1").toggleClass("slogan_introduce");
                $(".slogan1").toggleClass("slogan_introduce");
                $(".slogan2").toggleClass("slogan_introduce");
                $(".slogan3").toggleClass("slogan_introduce");
            }
            else if(origin.index==2 && direction == 'down'){
                $(".YXJT").toggleClass("floating");
                $(".title-2").toggleClass("title_name");
                $(".slogan-2").toggleClass("slogan_introduce");
            }
        }
    });
    //methods
    setInterval(function(){
        fullPageInstance.moveSlideRight();
    }, 5000);
    // $(window).scroll(function(){
    //     if(this.scrollY==0){
    //         $('.nav-fixed').css({
    //             'position':'relative',
    //             'background': "rgba(4, 8, 40, 1)"
    //         })
    //     }
    // })
});