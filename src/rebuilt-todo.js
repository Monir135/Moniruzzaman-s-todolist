/*const arrayList = [{
    inputValue: 'make dinner',
    dateValue: '2025-07-06'
}, {
    inputValue: 'wash dishes',
    dateValue: '2025-07-07'
}];*/
const defaultValue = [{
    inputValue: 'Local Storage was Added',
    dateValue: '2025-07-15'
}, {
    inputValue: 'More CSS was Added',
    dateValue: '2025-07-15'
}];
const arrayList = JSON.parse(localStorage.getItem('listItems')) || defaultValue;
    
let objectInsideArray;
function displayValue() {
    let storedValue = '';
    for (let i = 0; i < arrayList.length; i++) {
        objectInsideArray = arrayList[i];
        const { inputValue, dateValue } = objectInsideArray;
        const html = `<div class="inputvalue-div-style" ><span class="arrow-style">&rarrhk;</span>${inputValue}</div>
        <div class="dateValue-div-style" > ${dateValue}</div>
    <button onclick="
    arrayList.splice(${i},1)
    localStorage.setItem('listItems', JSON.stringify(arrayList));
    displayValue();
    " class="css-button"
    >Delete</button>
    `;
        storedValue = storedValue + html;
    }
    const divElement = document.querySelector
        ('.js-input-container');
    divElement.innerHTML = storedValue;
}
displayValue();
function todoList() {
    const inputElement = document.querySelector('.js-todo-input');
    let inputValue = inputElement.value;
    const dateElement = document.querySelector('.dueDate-input');
    let dateValue = dateElement.value;
    arrayList.push({
        inputValue,
        dateValue
    });
    localStorage.setItem('listItems', JSON.stringify(arrayList));
    
    inputElement.value = '';
    displayValue();

}