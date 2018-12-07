var $ = require('./jquery-3.3.1.min.js');
require('../images/Banner_1.png');
require('../images/Banner_2.png');
import '../css/fullpage.min.css';
import '../css/base.css';
import '../css/menu.css';
import fullpage from './fullpage.min.js';
$(document).ready(function() {
      // fullpage.js option start
    var fullPageInstance = new fullpage('#fullpage',{
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        //options here
        autoScrolling:false,
        css3:true,
        // navigation: true,
        anchors:['01', '02', '03','04'],
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        // navigationTooltips:['疯玩首页','公司理念','发展历程','游戏业务'],
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
    $(".menu-button[href='#'], .nav-cover, .nav-close").on("click", function(e){
        e.preventDefault();
        $("body").toggleClass("nav-opened nav-closed");
         //给document绑定一个一次性的click事件，点击关闭菜单
        $(document).one("click", function(){
            $("body").toggleClass("nav-opened nav-closed");
        });
        // event.stopPropagation()来阻止事件冒泡  
        e.stopPropagation(); 
    });
    $(".nav").on("click",function(e){
        e.stopPropagation();
    })
});