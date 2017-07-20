/* 
* @Author: Marte
* @Date:   2017-07-20 17:10:39
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-20 20:50:20
*/

$(document).ready(function(){
    
    /*因数1，因数2*/
    var fac_1 = 0;
    var fac_2 = 0;
    /*当前是否正在输入数字*/
    var isNum = true;
    /*输入的操作符*/
    var operation = '';
    /*点击数字按钮时*/
    $('.num').click(function(event) {
        // console.log($('#inputting').val());
        if ($('#inputting').html() === '0'&&$(this).val()!=='.') {
            $('#inputting').html('');
        }else{

        }
        if (!isNum) {
            $('#inputting').html($(this).val());
        }else{
        $('#inputting').append($(this).val());
        }      
        isNum = true;
    });

    /*点击运算符时*/
    $('.op').click(function(event) {
        fac_1 = Number( $('#inputting').html());
 
        operation = $(this).val();
                  
        if (isNum) {
            switch($(this).val()){
                case '+':

                    // console.log(fac_2);
                    fac_1 = fac_1 +fac_2;
                    // console.log(fac_1);
                    $('#inputting').html(fac_1);
                    break;
                case '-':
                    fac_1 = fac_1 - fac_2;
                    $('#inputting').html(fac_1);
                    break;
                case '*':
                    fac_1 = fac_1 * fac_2;
                    $('#inputting').html(fac_1);
                    break;
                case '/':
                    fac_1 = fac_1 / fac_2;
                    $('#inputting').html(fac_1);
                    break;
                default:
                    ;
            }
            operation = '';
            // fac_2 = 0;
        }
        isNum = false;
    });

    /*点击=时*/
    $('.eqal').click(function(){
        fac_2 = Number( $('#inputting').html());
        // if (isNum) {
            switch(operation){
                case '+':
                    // console.log(fac_2);
                    fac_1 = fac_1 + fac_2;
                    // console.log(fac_1);
                    $('#inputting').html(fac_1);
                    break;
                case '-':
                    fac_1 = fac_1 - fac_2;
                    $('#inputting').html(fac_1);
                    break;
                case '*':
                    fac_1 = fac_1 * fac_2;
                    $('#inputting').html(fac_1);
                    break;
                case '/':
                    fac_1 = fac_1 / fac_2;
                    $('#inputting').html(fac_1);
                    break;
                default:
                    ;
            }
            operation = '';
        //}
        isNum = false;
    });

    /*点击C时*/
    $('.clearScreen').click(function(){
        $('#pres').html('0');
        $('#inputting').html('0');
        fac_1 = 0;
        fac_2 = 0;
    });



});