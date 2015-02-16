var pizza= $("#pizzabutton")
var max= function (){
    alert('yo dawg');
}
var kelsey= function(){
    $("body").css('background-color', '#000');
    
};
var zuzu= function(){
    $("body").css('background-color', '#fff');
}

var image= $("#picture");
var expand= function(){
    if(image.width()=== 500) {
    image.css('width','300px');
    }else{
        image.css('width','500px');
    }
}

var link= $("#color");
var changecolor= function(){
    link.css('color', '#F862DE');
}
   
//$(document).ready(kelsey)

pizza.click(max);
pizza.hover(kelsey, zuzu);
image.click(expand);
link.click(changecolor);