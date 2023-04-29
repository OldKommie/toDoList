// создание дива  и применение к нему другого дива

// поиск дива по ID 
let mainDiv = document.getElementById('main');
// создание дива  
let childDiv = document.createElement("div");
// вставляем текст в див 
childDiv.innerHTML = "Hello";
//приминяем созданный див к основному DIV
mainDiv.appendChild(childDiv);