const container = document.querySelector('.container');
var inputValue = document.querySelector('.input');
const add = document.querySelector('.add');

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

        container.appendChild(itemBox);

        itemBox.appendChild(input);
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
		inputValue.value = "";
	}
}