/*

У вас есть массив хэшей*, отсортируйте этот массив  
а) по возрастанию population
б) по убыванию area
в) по алфавиту capital
На основе начального массива выведите список всех городов, сгруппированный по первой букве страны, к которой принадлежит этот город, список будет вложенный**, т.е будет выглядетть так (список, естественно, должен быть отсортирован по первым буквам страны):
А
  Сидней
  Луанда
  Буэнос-Айрес
   ...
Б
   Дакка
   Сан-Паулу
   ...
   **строчку прямо в таком виде можно вывести в консоль, потому что мы пока еще не умеем делать ничего другого :)

   *Массив хэшей будет выглядеть так:
[
{city: 'Токио', country: 'Япония', population: 37843, area: 8547, density: 4400},
{city: 'Джакарта', country: 'Индонезия', population: 30539, area: 3225, density: 9500},
{city: 'Дели', country: 'Индия', population: 24998, area: 2072, density: 12100},
...]
*/




/*
"use strick"
function sortPopArc(A,B) { 				//Сортировка population по возрастанию (Arc)
	return A.population-B.population;
}

function sortAreaDec(A,B) {				// Сортировка area по убыванию (Dec)
	return B.population-A.population;
}

function sortCapitalABC(A,B) {			// Сортировка capital по алфавиту (ABC)
	if (A.city<B.city) return -1;
	if (A.city>B.city) return 1;
	return 0;
}
// Функция возвращения первой буквы страны

//Создать пустой хэш куда будут запихиваться буквы
var countriesHash = {};
function firstLetter(V, I) { //пробежаться можно и форич
	for (var i = 0; i < listCity.length; i++) {
		var letter = listCity[i].country[0]; //первая буква страны
		if (!(letter in countriesHash)) {// если буквы в нашем вновь созданным масиве нет, то...
			countriesHash[letter] = [];
		}	
		countriesHash[letter].push(listCity[i].city); //добавляем в хэш букв, добавить проверку потому как будет обновляться буквы (сверху)
	}
console.log(V.charAt(I));
}

//Функция вывода один раз буквы и всех городов под этой буквой
listCity.sort(sortPopArc);
listCity.sort(sortAreaDec);

*/

var listCity =  [
				{city: 'Токио', country: 'Япония', population: 37843, area: 8547, density: 4400},
				{city: 'Джакарта', country: 'Индонезия', population: 30539, area: 3225, density: 9500},
				{city: 'Дели', country: 'Индия', population: 24998, area: 2072, density: 12100},
				{city: 'Манила', country: 'Филиппины', population: 24245, area: 1787, density: 13600},
				{city: 'Мумбаи', country: 'Индия', population: 22885, area: 881, density: 26000},
				{city: 'Карачи', country: 'Пакистан', population: 23545, area: 1010, density: 23300},
				{city: 'Осака-Кобе-Киото', country: 'Япония', population: 17075, area: 3212, density: 5300 },
				{city: 'Дакка', country: 'Бангладеш', population: 16820, area: 368, density: 45700},
				{city: 'Москва', country: 'Россия', population: 16710, area: 5698, density: 2900},
				{city: 'Калькутта', country: 'Индия', population: 14950, area: 1347, density: 11100},
				{city: 'Тегеран', country: 'Иран', population: 13805, area: 1748, density: 7900},
				{city: 'Стамбул', country: 'Турция', population: 13755, area: 1360, density: 10100},
				{city: 'Богота', country: 'Колумбия', population: 9740, area: 562, density: 17300},
				{city: 'Париж', country: 'Франция', population: 10950, area: 2845, density: 3700},
				{city: 'Лима', country: 'Перу', population: 11150, area: 894, density: 12500},				
				];

var countriesHash = {};


listCity.sort(sortCapitalABC);

firstLetter (listCity);

console.log(listCity);
console.log(countriesHash);
show(countriesHash); 
function sortCapitalABC(A,B) {			// Сортировка capital по алфавиту (ABC)
	if (A.city<B.city) return -1;
	if (A.city>B.city) return 1;
	return 0;
}

function firstLetter() { 						//Добавление городов по первой букве страны
	for (var i = 0; i < listCity.length; i++) {
		var letter = listCity[i].country[0]; 		
		if (!(letter in countriesHash)) {			
			countriesHash[letter] = [];
		}	
		countriesHash[letter].push(listCity[i].city); 
	}
}

function show(arr) {
	for (var key in arr) {
		document.write('<ul>' + key + '</ul>' + '<li>' + arr[key].join('<li>') + '</li>')
	}
}
