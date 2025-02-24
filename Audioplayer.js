let isPlaying = false;

let playNext = () => {
    // console.log(current);
    current++;
    if(current < songs.length){
        document.querySelector('#player').src = songs[current];
        document.querySelector('#SongName').innerHTML = names[current];
        document.querySelector('#player').play();
    }
    else{
        current = 0;
        document.querySelector('#player').src = songs[current];
        document.querySelector('#SongName').innerHTML = names[current];
        document.querySelector('#player').play();
    }
    isPlaying = true;
}
let playPrev = () => {
    // console.log(current);
    current--;
    if(current >= 0){
        document.querySelector('#player').src = songs[current];
        document.querySelector('#SongName').innerHTML = names[current];
        document.querySelector('#player').play();
    }
    else{
        current = songs.length - 1;
        document.querySelector('#player').src = songs[current];
        document.querySelector('#SongName').innerHTML = names[current];
        document.querySelector('#player').play();
    }
    isPlaying = true;
}

let playOrPause = () => {
    if(isPlaying){
        document.querySelector('#player').pause();
        document.querySelector('#play').classList = "fa fas fa-play";
        isPlaying = false;
    }
    else{
        isPlaying = true;
        document.querySelector('#player').play();
        document.querySelector('#play').classList = "fa fas fa-pause";
    }
}


window.onload = () => {
    let player = document.querySelector('#player');
    let slider = document.querySelector('#player-slider');
    player.ontimeupdate = () => slider.value = ( (player.currentTime * 100) / player.duration);
    player.pause();
    CreateNavbar();
};