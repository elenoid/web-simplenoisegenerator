function play(sound){
   var audio = document.getElementById("audio");
    audio.setAttribute('src', sound);
   audio.play();
}
function stopAudio(){
   var audio = document.getElementById("audio");
   return audio.paused ? audio.play() : audio.pause();
}

function playAudio(){
   var audio = document.getElementById("audio");
   audio.play();
}

function changeImage(a) {
    $('#audio-background').css('background-image', 'url('+a+')');
    // $(document.body).css('background-image', 'url('+a+')');
}

window.SetVolume = function(val)
{
    var player = document.getElementById('audio');
    console.log('Before: ' + player.volume);
    player.volume = val / 100;
    console.log('After: ' + player.volume);
}
