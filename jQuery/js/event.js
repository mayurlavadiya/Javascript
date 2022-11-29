$(document).ready(function(){

    $('#sname, #sclass, #scountry').focus(function(){
        $(this).css('background-color','orange');
    });

    $('#sname, #sclass, #scountry').blur(function(){
        $(this).css('background-color',''); // bar click kro tyare change kre
    });

    $('#scountry').change(function(){ // select box sathe j kaam kre
        $(this).css('background-color','pink');

        var a = $(this).val();
        $('#test').html(a);
    });

    $('#sname, #sclass').select(function(){
        $(this).css('background-color','yellow'); // input ma je text selevt thay tyare
    });

    $('$sform').submit(function(){
        // $(this).css('background-color','lime');
        alert(1);
    });

});