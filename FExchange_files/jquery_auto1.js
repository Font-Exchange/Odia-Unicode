/*!***************************************************
* Dictionary Auto Correction,
* Script Ver 1.4
* http://www.expoodisha.com
* Copyright (c) 2018, Manas Ranjan Swain

*****************************************************/

$(document).ready(function() {
    $('#fnrbtn').click(function() {
    var textarea=$('#uInput');
textarea.val(textarea.val().replace(/_W�/g,"_W��")); 
textarea.val(textarea.val().replace(/_e�W�/g,"_e�W��"));
textarea.val(textarea.val().replace(/_W�/g,"_W��"));
textarea.val(textarea.val().replace(/ce�W�/g,"ce�W��"));
textarea.val(textarea.val().replace(/aX/g,"aX�"));
textarea.val(textarea.val().replace(/_X/g,"_X�"));
textarea.val(textarea.val().replace(/KZ��_l/g,"K���_l"));
textarea.val(textarea.val().replace(/IW�g�/g,"IW��g�"));
textarea.val(textarea.val().replace(/�_��ej�Z�/g,"�_��e�j�Z�"));
textarea.val(textarea.val().replace(/�_��/g,"�_�"));
textarea.val(textarea.val().replace(/��/g,"�"));
textarea.val(textarea.val().replace(/Tk�/g,"�k�"));
textarea.val(textarea.val().replace(/�_�ej�Z�/g,"�_��e�j�Z�"));
textarea.val(textarea.val().replace(/MW/g,"MW�"));
textarea.val(textarea.val().replace(/a�K�/g,"a�K"));
textarea.val(textarea.val().replace(/�W�e�/g,"�We�"));
textarea.val(textarea.val().replace(/^����g/g,"^��\�g"));
textarea.val(textarea.val().replace(/MW�/g,"MW��"));
textarea.val(textarea.val().replace(/ea��/g,"ea���"));
textarea.val(textarea.val().replace(/�P��/g,"�P�"));
textarea.val(textarea.val().replace(/�P��/g,"�P�"));

    });
});