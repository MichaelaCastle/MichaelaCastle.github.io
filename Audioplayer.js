let playNext = () => {
    console.log(current);
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
}
let playPrev = () => {
    console.log(current);
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
}