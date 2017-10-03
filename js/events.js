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
  $('img').on('load', function(){
      alert("Your form is going to be submitted now.")
  })
}



$(document).ready(function(){

// call functions here
getIt()
frameIt()
});
