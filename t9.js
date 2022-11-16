var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);



// Add item
function addItem(e){
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;
    var description=document.getElementById('description').value;


    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));


    // Create del button element
    var deleteBtn = document.createElement('button');
    var descriptionNode=document.createTextNode(" "+description)


    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //create edit button
    var editBtn = document.createElement('button');

    //Add  classes to edit button
    editBtn.className = 'btn btn-success btn-sm float-right'
    //append text node
    editBtn.appendChild(document.createTextNode('EDIT'));

    // Append button to li
    li.appendChild(deleteBtn);
    li.appendChild(descriptionNode);


  //append editbtn to list
  li.appendChild(editBtn);
    // Append li to list
    itemList.appendChild(li);
  }

  // Remove item
  function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }
   // Filter Items
   function onFilter(e)
   {
     const text=e.target.value.toLowerCase();
     const items=itemList.getElementById('li');
     Array.from(items).forEach(function(item)
     {
       const itemName=item.firstChild.textContent;
       const description=item.childNodes[1].textContent;
       if((itemName.toLowerCase().indexof(text) !=-1) || (description.toLowerCase().indexof(text)!=-1))
       {
         item.style.display='block';
       }else
       {
         item.style.display = 'none';
       }
     })
   }
    
 