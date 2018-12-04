var $ = require('./jquery-3.3.1.min.js');
import fullpage from './fullpage.min.js';
import '../css/fullpage.min.css';
import '../css/base.css';
$(document).ready(function () {
    var fullPageInstance = new fullpage('#fullpage',{
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        autoScrolling:false,
        verticalCentered: false,
    })
});    
