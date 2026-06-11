/*!***************************************************
* Dictionary Auto Correction,
* Script Ver 1.4
* http://www.expoodisha.com
* Copyright (c) 2018, Manas Ranjan Swain

*****************************************************/

$(document).ready(function() {
    $('#fnrbtn').click(function() {
    var textarea=$('#uInput');
textarea.val(textarea.val().replace(/_Wň/g,"_W˙ň")); 
textarea.val(textarea.val().replace(/_eňWű/g,"_eňW˙ű"));
textarea.val(textarea.val().replace(/_Wű/g,"_W˙ű"));
textarea.val(textarea.val().replace(/ceęWň/g,"ceęW˙ň"));
textarea.val(textarea.val().replace(/aX/g,"aX˙"));
textarea.val(textarea.val().replace(/_X/g,"_X˙"));
textarea.val(textarea.val().replace(/KZęđ_l/g,"K©đé_l"));
textarea.val(textarea.val().replace(/IWňgű/g,"IW˙ňgű"));
textarea.val(textarea.val().replace(/ů_÷űejňZý/g,"ů_řůeűjňZĄ"));
textarea.val(textarea.val().replace(/ů_÷ű/g,"ů_ř"));
textarea.val(textarea.val().replace(/ű÷/g,"ř"));
textarea.val(textarea.val().replace(/Tkú/g,"¬kň"));
textarea.val(textarea.val().replace(/ů_řejňZý/g,"ů_řůeűjňZĄ"));
textarea.val(textarea.val().replace(/MW/g,"MW˙"));
textarea.val(textarea.val().replace(/aäK¨/g,"aäK"));
textarea.val(textarea.val().replace(/ůW˙eű/g,"ůWeű"));
textarea.val(textarea.val().replace(/^ňůźđg/g,"^ňů\đg"));
textarea.val(textarea.val().replace(/MWň/g,"MW˙ň"));
textarea.val(textarea.val().replace(/eaň¦â/g,"eaú¦â"));
textarea.val(textarea.val().replace(/ůPű÷/g,"ůPř"));
textarea.val(textarea.val().replace(/ůP÷ű/g,"ůPř"));

    });
});
