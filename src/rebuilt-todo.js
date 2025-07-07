const arrayList = [{
    inputValue: 'make dinner',
    dateValue: '2025-07-06'
}, {
    inputValue: 'wash dishes',
    dateValue: '2025-07-07'
}];
let objectInsideArray;
function displayValue() {
    let storedValue = '';
    for (let i = 0; i < arrayList.length; i++) {
        objectInsideArray = arrayList[i];
        const { inputValue, dateValue } = objectInsideArray;
        const html = `<div>${inputValue}</div>
        <div> ${dateValue}</div>
    <button onclick="
    arrayList.splice(${i},1)
    displayValue();
    " class="css-button"
    
    >Delete</button>
    `;
        storedValue = storedValue + html;

    }
    const divElement = document.querySelector
        ('.js-input-container');
    divElement.innerHTML = storedValue;
    console.log(storedValue)

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
    console.log(arrayList)
    inputElement.value = '';
    displayValue();

}
