﻿$(document).ready(function() {
    $('#btnfix').click(function() {
    var textarea=$('#Unicode'); 

textarea.val(textarea.val().replace(/ର୍ୟ୍ୟ/g,"ର୍ଯ୍ୟ"));
textarea.val(textarea.val().replace(/ତ୍ଵ/g,"ତ୍ବ")); 
textarea.val(textarea.val().replace(/ସ୍ଵ/g,"ସ୍ବ"));
textarea.val(textarea.val().replace(/ଵ/g,"ବ"));
textarea.val(textarea.val().replace(/ଡ଼/g,"ଡ଼"));    
textarea.val(textarea.val().replace(/ ଜ୍ଝ/g,"।"));
textarea.val(textarea.val().replace(/,  /g,", "));
textarea.val(textarea.val().replace(/ ।/g,"।")); 



    });
});
