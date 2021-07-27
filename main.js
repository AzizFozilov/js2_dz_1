var num1 = +prompt('yoshingizni kiriting')
if(num1 < 18){
    console.log('siz hali yoshakansiz');
}
else if(num1 < 50){
    console.log('siz ishlashingiz kerak');
}
else if(num1 < 59){
    console.log('siz yaqinda pensiyaga chiqarkansiz');
}
else if(num1 < 150){
    console.log('siz pensiyonersiz');
}
else if(num1 < 1000){
    console.log('sistemada xatolik yuz berdi');
}