let splashButton = document.getElementById("get-tracks");
let clearTracks = document.getElementById('clear-tracks');
let submitBin = document.getElementById("submit-bin");

splashButton.addEventListener('click', function(){
  console.log('button works');
  document.location.href = "play.html";
})

submitBin.addEventListener('click', function(){
  console.log("submit bin works");
})

clearTracks.addEventListener('click', function(){
  console.log('clear tracks works');
})
