'use strict'
var x = parseFloat(prompt('请输入体重（kg）：'));
var y = parseFloat(prompt('请输入身高（m）：'));
var BMI = x / (y * y);
if (BMI < 18.5) {
    alert('太瘦了');
}
else if ( BMI >= 18.5&&BMI < 25) {
    alert('不胖也不瘦啊~');
}
else if (BMI >= 25&& BMI <28) {
    alert('有点重了');
}
else if (BMI >= 28&& BMI <32) {
    alert('很重了');
}
else {
    alert('pig?');
}