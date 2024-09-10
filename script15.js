let inputBx = document.querySelector('#inputBx');
let list = document.querySelector('#list');

// Load saved items from localStorage on page load
window.addEventListener('load', () => {
    let savedItems = JSON.parse(localStorage.getItem('listItems')) || [];
    savedItems.forEach(item => addItem(item.text, item.done));
});

inputBx.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addItem(this.value);
        this.value = "";
    }
});

let addItem = (itemValue, done = false) => {
    let listItem = document.createElement("li");
    listItem.textContent = itemValue;

    if (done) {
        listItem.classList.add('done');
    }

    listItem.addEventListener("click", function() {
        this.classList.toggle('done');
        updateLocalStorage();
    });

    listItem.insertAdjacentHTML('beforeend', '<i></i>'); // Add delete icon

    listItem.querySelector("i").addEventListener("click", function(){
        listItem.remove();
        updateLocalStorage();
    });

    list.appendChild(listItem);
    updateLocalStorage();
};

function updateLocalStorage() {
    let items = [];
    Array.from(list.children).forEach(item => {
        items.push({
            text: item.textContent.trim(),
            done: item.classList.contains('done')
        });
    });
    localStorage.setItem('listItems', JSON.stringify(items));
}
























// let inputBx = document.querySelector('#inputBx');
// let list = document.querySelector('#list');

// inputBx.addEventListener("keyup",function(event){
//     if(event.key=="Enter"){
//         addItem(this.value)
//         this.value=""
//     }
// })

// let addItem = (inputBx) => {
//     let listItem = document.createElement("li");
//     listItem.innerHTML = '${inputBx}<i></i>';

//     listItem.addEventListener("click",function(){
//         this.classList.toggle('done');
//     })

// listItem.addEventListener("click", function() {
//     this.classList.toggle('done');
// });

// listItem.querySelector("i").addEventListener("click", function(){
//          listItem.remove();
// })

//     list.appendChild(listItem);
// }
