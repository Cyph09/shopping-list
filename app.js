// Reference form elements
let inputNewItem = document.querySelector('input');
let btnAdd = document.querySelector('button');
let shoppingList = document.querySelector('ul');

// Add item event listner
btnAdd.addEventListener('click', addItem)

// function addItem in response to btnAdd being clicked
function addItem(){
  let currentItem = inputNewItem.value;
  inputNewItem.value = '';

  // create list item -li, 
  let listItem = document.createElement('li');

  // Create delete button, and span
  let btnDel   = document.createElement('button');
  btnDel.textContent = 'Delete';

  let span     = document.createElement('span');
  span.textContent = currentItem;

  //append delete btn and span to listItem
  listItem.appendChild(span);
  listItem.appendChild(btnDel);

  // append li to the ul
  shoppingList.appendChild(listItem);

  // BtnDel event handler to remove list item from list
  btnDel.addEventListener('click', function(){
    shoppingList.removeChild(listItem);
  });

  //Focus the input element ready for entering the next shopping list item
  inputNewItem.focus();
}



