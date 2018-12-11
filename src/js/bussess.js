var $ = require('./jquery-3.3.1.min.js');
import fullpage from './fullpage.min.js';
import '../css/fullpage.min.css';
import '../css/base.css';
import '../css/menu.css';
$(document).ready(function () {
    var fullPageInstance = new fullpage('#fullpage',{
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        autoScrolling:false,
        verticalCentered: false,
        
    });
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
