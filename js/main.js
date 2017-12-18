function play(sound){
   var audio = document.getElementById("audio");
    audio.setAttribute('src', sound);
   audio.play();
}
function stopAudio(){
   var audio = document.getElementById("audio");
   audio.pause();
   $('#audio-background').css('background-image', 'url(https://cdn.pixabay.com/photo/2015/12/20/16/55/fractal-1101414_960_720.jpg)');
}

function changeImage(a) {
    $('#audio-background').css('background-image', 'url('+a+')');
}
