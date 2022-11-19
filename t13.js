var userlog = document.getElementById('users');


document.getElementById('my-form').addEventListener('submit', function (e) {
  e.preventDefault();
  var username = document.getElementById('name').value.trim();
  var usermail = document.getElementById('email').value.trim();
  //var userList = JSON.parse(localStorage.getItem('userList') || '[]');

  var userDetail = {
    name: username,
    email: usermail,
  };
  //console.log(userDetail);
  //userList.push(userDetail);

  localStorage.setItem(userDetail.name, JSON.stringify(userDetail));

 
  displayList(userDetail);
  document.getElementById('my-form').reset();
  document.getElementById('name').focus();
});

window.addEventListener('DOMContentLoaded', (event) => {
  event.preventDefault();
  Object.keys(localStorage).forEach((key) => {
    const user = JSON.parse(localStorage.getItem(key));
    displayList(user);
  });
});

function displayList(user) {
  /creating list node/
  var newUser = JSON.parse(localStorage.getItem(user.name)).name;
  console.log(newUser);
  var newemail = JSON.parse(localStorage.getItem(user.name)).email;
  var li = document.createElement('li');
  li.className = 'user-list';
  li.setAttribute('id', newUser);
  li.appendChild(document.createTextNode(newUser));
  li.appendChild(document.createTextNode(' '));
  li.appendChild(document.createTextNode(newemail+' '));

  userlog.appendChild(li);

  console.log(li);
  /*Adding Edit button */
  var editBtn = document.createElement('button');
  editBtn.className = 'btn-edit';
  editBtn.appendChild(document.createTextNode('EDIT'));

  li.appendChild(editBtn);

  /Adding delete button/
  var deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn-delete';
  deleteBtn.appendChild(document.createTextNode('DELETE'));
  li.appendChild(deleteBtn);

  deleteBtn.addEventListener('click', () => {
    //deleteUserFromDOM(newUser);
    localStorage.removeItem(newUser);
    userlog.removeChild(li);
  });
  
  editBtn.addEventListener('click', () => {
    
    document.getElementById('name').value = newUser;
    document.getElementById('email').value = newemail;
    userlog.removeChild(li); 
    localStorage.removeItem(newUser);

  });
}