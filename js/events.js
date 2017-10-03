//define functions here
function getIt(){
  $('p').on('click', function(){
    alert("Hey!")//action you want taken
  })
}

function frameIt(){
  $('img').on('load', function(){
  $('img').addClass('tasty');  //action you want taken
  })
}

function submitIt(){
  $('form').on('submit', function(){
      alert("Your form is going to be submitted now.")
  })
}

function pressIt(){
  $('input').on('keydown', function(e){
    console.log(e.which)
  })
}


$(document).ready(function(){

// call functions here
getIt()
frameIt()
submitIt()
});
