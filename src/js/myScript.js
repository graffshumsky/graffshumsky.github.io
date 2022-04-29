"use strict"

$(document).ready(function(){
    
    let options = {treshold: [1]};
let observer = new IntersectionObserver(onEntry, options);
let elements = $('.element-animation');
elements.each((i,el) => {
    observer.observe(el);
});
    
});

let design1 = prompt("какой сайт вы хотите? (0- сайт-визитка- 10 000руб, 1- корпоративный сайт- 15 000руб, 2- лендинг- 25 000руб, 3- интернет-магазин- 40 000руб)");

if(design1 == "0"){10000}
else if (design1 == "1"){15000}
else if(design1 == "2"){25000}
else if(design1 == "3"){40000}
else{alert("вы не ввели значение");
    }

console.log(design1)

let design2 = prompt("какой предпочитаете дизайн? (0- шаблонный дизайн- 1000руб, 1- уникальный дизайн- 5000руб, 2- кастомный дизайн- 10 000руб)");

if(design2 == "0"){1000}
else if(design2 == "1"){5000}
else if(design2 == "2"){10000}
else{alert("вы не ввели значение");
    }

console.log(design2)

let design3 = prompt("какой тип вёрстки? (0- фиксированная- 1000руб, 1- резиновая- 3000руб, 2- адаптивная- 5000руб)");

if(design3 == "0"){1000}
else if(design3 == "1"){3000}
else if(design3 == "2"){5000}
else{alert("вы не ввели значение");
    }

console.log(design3)

let result = +"design1" + +"design2" + +"design3";
          

alert("ваша стоимость сайта" , "result");

$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 80 + "px"});
});

function onEntry(entry){
    entry.forEach(change => {
        if (change.isIntersecting){
            change.target.classList.add('show-animation');
        }
    });
}

$(function() {
	
		var target_block = $(".cifra"); // Ищем блок 
		var blockStatus = true;
		
		$(window).scroll(function() {
		
			var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
			
			if(scrollEvent && blockStatus) {
			
				blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
				
				$({numberValue: 0}).animate({numberValue: 4000}, {
				
					duration: 1500, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд 
					easing: "linear",
					
					step: function(val) {
					
						$(".cifra").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
						
					}
					
				});
				
			}
			
		});
		
	});