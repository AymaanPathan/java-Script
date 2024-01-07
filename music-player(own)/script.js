const music  = document.getElementById('music');
const prev = document.getElementById('prev');
const play = document.getElementById('play');
const next = document.getElementById('next');
const pause = document.getElementById('pause');


const songs = [
    {
        name:'aymaan-1',
        displayName:'Electric Chill Machine',
        artist:'jacinto Design'
    },

    {
        name:'aymaan-2',
        displayName:'Electric Chill Machine',
        artist:'jacinto Design'
    },

    {
        name:'aymaan-3',
        displayName:'Electric Chill Machine',
        artist:'jacinto Design'
    }
]
console.log(songs)

let Isplaying = false;


// Play
function playing() {
    Isplaying = true;
    music.play();
    play.classList.replace('fa-play','fa-pause');
}
// Pause
function pausing(){
    Isplaying = false;
    play.classList.replace('fa-pause','fa-play');
    music.pause();
};


play.addEventListener('click',()=>{
    (Isplaying ? pausing(): playing());
})

// next song

next.addEventListener('click',function(){
    
})