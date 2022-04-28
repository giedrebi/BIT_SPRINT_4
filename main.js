const container = document.querySelector('.container');
var inputValue = document.querySelector('.input');
const add = document.querySelector('.add');

if(window.localStorage.getItem("todos") == undefined){
    var todos = [];
    window.localStorage.setItem("todos", JSON.stringify(todos));
}

var todosEX = window.localStorage.getItem("todos");
var todos = JSON.parse(todosEX);

class item {
    constructor(name) {
        this.createItem(name);
    }
    createItem(name) {
        var itemBox = document.createElement('div');
        itemBox.classList.add('item');

        var input = document.createElement('input');
        input.type = "text";
        input.setAttribute('readonly', 'readonly');
        input.value = name;
        input.classList.add('item_input');

        var edit = document.createElement('button');
        edit.className = 'fas fa-edit edit';
        edit.type = 'button'; 
        edit.addEventListener('click', () => this.edit(input, name, edit, save));

        var save = document.createElement('button');
        save.className = 'fas fa-check-square save';
        save.type = 'button';
        save.style.display = 'none';
        save.addEventListener('click', () => this.save(input, name, edit, save));

        var remove = document.createElement('button');
        remove.className ='far fa-trash-alt remove';
        remove.addEventListener('click', () => this.remove(itemBox, name));

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(save);
        itemBox.appendChild(remove);
    }
    edit(input, name, edit, save) {
        input.readOnly = false;
        input.style.background = 'white';
        input.style.color = '#498da0';
        edit.style.display = 'none';
        save.style.display = '';
        let indexof = todos.indexOf(name);
        todos[indexof] = input.value;
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
    save(input, name, edit, save) {
        input.readOnly = true;
        input.style.background = 'none'
        input.style.color = 'white';
        edit.style.display = '';
        save.style.display = 'none';
        let indexof = todos.indexOf(name);
        todos[indexof] = input.value;
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
    remove(itemBox, name) {
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
}

add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
	if(e.which == '13'){
		check();
	}
})

function check() {
    if (inputValue.value == 0) {
        alert('Please enter task!');
    } else  {
		new item(inputValue.value);
        todos.push(inputValue.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
		inputValue.value = "";
	}
}

for (var v = 0 ; v < todos.length ; v++){
    new item(todos[v]);
}