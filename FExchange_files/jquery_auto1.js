/*!***************************************************
* Dictionary Auto Correction,
* Script Ver 1.4
* http://www.expoodisha.com
* Copyright (c) 2018, Manas Ranjan Swain

*****************************************************/

$(document).ready(function() {
    $('#fnrbtn').click(function() {
    var textarea=$('#uInput');
textarea.val(textarea.val().replace(/_Wò/g,"_Wÿò")); 
textarea.val(textarea.val().replace(/_eòWû/g,"_eòWÿû"));
textarea.val(textarea.val().replace(/_Wû/g,"_Wÿû"));
textarea.val(textarea.val().replace(/ceêWò/g,"ceêWÿò"));
textarea.val(textarea.val().replace(/aX/g,"aXÿ"));
textarea.val(textarea.val().replace(/_X/g,"_Xÿ"));
textarea.val(textarea.val().replace(/KZêğ_l/g,"K©ğé_l"));
textarea.val(textarea.val().replace(/IWògû/g,"IWÿògû"));
textarea.val(textarea.val().replace(/ù_÷ûejòZı/g,"ù_øùeûjòZ¥"));
textarea.val(textarea.val().replace(/ù_÷û/g,"ù_ø"));
textarea.val(textarea.val().replace(/û÷/g,"ø"));
textarea.val(textarea.val().replace(/Tkú/g,"¬kò"));
textarea.val(textarea.val().replace(/ù_øejòZı/g,"ù_øùeûjòZ¥"));
textarea.val(textarea.val().replace(/MW/g,"MWÿ"));
textarea.val(textarea.val().replace(/aäK¨/g,"aäK"));
textarea.val(textarea.val().replace(/ùWÿeû/g,"ùWeû"));
textarea.val(textarea.val().replace(/^òùŸğg/g,"^òù\ğg"));
textarea.val(textarea.val().replace(/MWò/g,"MWÿò"));
textarea.val(textarea.val().replace(/eaò¦â/g,"eaú¦â"));
textarea.val(textarea.val().replace(/ùPû÷/g,"ùPø"));
textarea.val(textarea.val().replace(/ùP÷û/g,"ùPø"));

    });
});