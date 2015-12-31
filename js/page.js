//logic goes here

//Add event listener for mobile menu button
document.getElementById('mobilemenubutton').addEventListener('click', toggleMobileMenu);
document.getElementById('lowerclosemenu').addEventListener('click', toggleMobileMenu);


function toggleMobileMenu(){
  var button   = document.getElementById('mobilemenubutton'); 
  var menu     = document.getElementById('mobilemenu'); 

  button.classList.toggle('active');
  menu.classList.toggle('open');

}

