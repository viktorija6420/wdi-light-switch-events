document.addEventListener('DOMContentLoaded', function(){

// When someone hits the button in the switch,
// remove the current state class (on/off),
// and apply the opposite class (on/off)

var switchOn = document.querySelector('.on');


switchOn.addEventListener('click', function(){
  var body = document.querySelector('body');
  var status = document.querySelector('h1');

  if (body.className === 'light'){

  body.classList.remove('light');
  body.classList.add('dark');

  this.classList.remove('on');
  this.classList.add('off');

  status.innerText = 'Hey, who turned off the lights?';

} else {

  body.classList.remove('dark');
  body.classList.add('light');

  this.classList.remove('off');
  this.classList.add('on');

  status.innerText = 'It\'s so bright in here!';

}});


});
