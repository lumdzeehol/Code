/* 
* @Author: Marte
* @Date:   2017-07-20 14:21:00
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-20 15:37:53
*/

$(document).ready(function(){
    var btn = $('#btn');
    btn.click(function(){
        console.log(666);
        var codeStr = $('#encode').val();
        var codeArr = [];
        console.log(codeStr);     
        for (var i = 0; i < 4; i++) {
            codeArr.push( (Number(codeStr[i]) + 10) - 5);
        }
        console.log(codeArr);
        codeArr[0] = codeArr[0] + codeArr[3];
        codeArr[3] = codeArr[0] - codeArr[3];
        codeArr[0] = codeArr[0] - codeArr[3];
        
        codeArr[1] = codeArr[1] + codeArr[2];
        codeArr[2] = codeArr[1] - codeArr[2];
        codeArr[1] = codeArr[1] - codeArr[2];

        console.log(codeArr);
        var p = $('#out');
        p[0].innerHTML = codeArr;
             
    });
    function exchange(x,y){
        console.log('run exchange');
        var t;
        t = x + y;
        y = t - y;
        x = t - y;
    }
});