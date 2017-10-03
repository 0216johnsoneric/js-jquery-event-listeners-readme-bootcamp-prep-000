//define functions here
function getIt(){
  $('p').on('click', function(){
    alert("Hey!")//action you want taken
  })
}

function frameIt(){
  $('.tasty').on('load', function(){
    add("redframe")//action you want taken
  })
}

$(document).ready(function(){

// call functions here
getIt()
});
