window.onload = () => {
    let player = document.querySelector('#player');
    let slider = document.querySelector('#player-slider');
    player.ontimeupdate = () => slider.value = ( (player.currentTime * 100) / player.duration);
    player.pause();
    CreateNavbar();
};