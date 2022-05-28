//add new list items

function newItem() {
  let list = $('#list');
  let li = $('<li></li>');
  let input = $('#input');
  let inputValue = input.val();

  li.append(inputValue);

  // adding alert message for empty string - input
  if (inputValue === '') {
    alert('Check your input. In order to add an item to your list, you must type something in the input field!');
  } else {
     list.append(li);
     input.val('');
  }

  // strike out items from List - Done or cancelled
  function crossOut() {
    li.toggleClass('strike');
  }

  //evenListener - strike out item - Done/cancelled
  li.on('dblclick', crossOut);

  //delete button - crossOutButton
  let crossOutButton = $('<crossOutButton class="crossoutbutton"></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  function deleteListItem() {
    li.addClass('delete');
  }

  //event listener - delete item from list
  crossOutButton.on('click', deleteListItem);

  //sort list
  $('#list').sortable();
}
