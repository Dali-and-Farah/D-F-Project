
function startgame(){
  window.location = 'startGame.html';
}


$('#startGame').on('click',function(){
  var namePlayer = document.querySelector('input').value;
  alert('welcome' + ' ' + namePlayer);
});
