$(document).ready(function() {
    $('#btnfix').click(function() {
    var textarea=$('#Unicode'); 

textarea.val(textarea.val().replace(/e୍d୍d/g,"ର୍ଯ୍ୟ"));
textarea.val(textarea.val().replace(/i୍a/g,"Ê")); 
textarea.val(textarea.val().replace(/\୍~/g,"\¥"));
textarea.val(textarea.val().replace(/~଼/g,"d"));
textarea.val(textarea.val().replace(/i୍c/g,"iá"));
textarea.val(textarea.val().replace(/Kðୋ/g,"ùKðû"));
textarea.val(textarea.val().replace(/h୍Y/g,"¾"));


    });
});
