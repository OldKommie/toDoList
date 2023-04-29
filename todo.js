let mainDiv = document.getElementById('main');
let myToDo = [{ "id": "1", "description": "make html  this design" }, { "id": "2", "description": "hello" }]

let randerToDo = (toDoList) => {

    myToDo.forEach(item => {
        let html = document.querySelector(`.toDo${item.id}`)
        console.log(html)
        if (html !== null) {
            html.remove()
        }
    })

    let htmlToDo = toDoList.map(item => {
        return `<div class="toDo toDo${item.id}"  >
        <div class="toDoText" > ${item.description} <div class="toDoButton">
                <div class="square" > <img class="icon" id=${item.id} src="./basket.jpg"> </img> </div>
            </div>
        </div>
    </div>`
    })
    htmlToDo.forEach(item => {
        // создание дива
        let childDiv = document.createElement("div");
        // вставляем текст в див 
        childDiv.innerHTML = item;
        //приминяем созданный див к основному DIV
        mainDiv.appendChild(childDiv);
    })
    document.querySelectorAll('.square').forEach(item => {
        item.addEventListener('click', function (event) {
            let div = event.target
            myToDo = myToDo.filter((item) => {
                return item == event.target.id
            })
            div.closest(".toDo").remove()
            // randerToDo(myToDo)
        });
    })
}
randerToDo(myToDo)
// создание дива  и применение к нему другого дива

// поиск дива по ID
let buttonDiv = document.getElementById('button')
buttonDiv.addEventListener('submit', function (event) {
    let newToDo = { "id": String(Math.floor(Math.random() * 10000)), "description": document.getElementById('input').textContent }
    myToDo.push(newToDo)

    randerToDo(myToDo)
});