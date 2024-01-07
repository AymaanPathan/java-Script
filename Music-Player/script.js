const image = document.getElementById('img');
const title = document.getElementById('title');
const Artist = document.getElementById('artist')
const music = document.querySelector('audio');
const progessContainer =document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeEL = document.getElementById('current-time');
const durationEl = document.getElementById('duration-time')
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Music
const songs = [
    {
        name:'jacinto-1',
        displayName:'Electric Chill Machine',
        artist:'jacinto Design'
    },

    {
        name:'jacinto-2',
        displayName:'Seven Nation Army (Remix)',
        artist:'jacinto Design'
    },

    {
        name:'jacinto-3',
        displayName:'Good Night Disco Queen',
        artist:'jacinto Design'
    },

    {
        name:'metric-1',
        displayName:'Front Row (Remix)',
        artist:'Metric/jacinto Design'
    }
]

// Check if Playing
let isPlaying = false;

// play
function play(){
    isPlaying = true;
    playBtn.classList.replace('fa-play','fa-pause');
    playBtn.setAttribute('title','pause')
    music.play();
}

// pause
function pause(){
    isPlaying = false;
    playBtn.classList.replace('fa-pause','fa-play')
    playBtn.setAttribute('title','play')
    music.pause();
}

// Play & Pause Song

playBtn.addEventListener('click',()=>(isPlaying ? pause() :play()));


// Update DOM

function loadSong(song){
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src= `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`
}

// Current Song

let currentSong = 0;

// Prev Song
function prevSong(){
    currentSong--;
    if(currentSong<0){
        currentSong = songs.length-1
    }
    loadSong(songs[currentSong]);
    play();
}

// // Next Song
function nextSong(){
    currentSong++;
    if(currentSong>songs.length-1){
        currentSong =0
    }
    loadSong(songs[currentSong]);
    play();
}


loadSong(songs[currentSong]);

// UPDATE PROGRESS BAR AND TIME
function updateProgressBar(e){
    if(isPlaying){
        const {duration,currentTime} = e.srcElement;
        // console.log(duration,currentTime);
        // Update Progress Bar Width
        const progressPercentage = (currentTime/duration) *100;
        progress.style.width = `${progressPercentage}%`;
        const durationMinutes = Math.floor(duration/60); 
        let durationSeconds = Math.floor(duration%60);
        if(durationSeconds<10) {
            durationSeconds =`0${durationSeconds}`
        };
        console.log(durationSeconds)
        if(durationSeconds) {
            durationEl.textContent = `${durationMinutes}:${durationSeconds}` ;
        }
        // Current
        const currentMinutes = Math.floor(currentTime/60);
        let currentSeconds = Math.floor(currentTime%60);
        if(currentSeconds<10) {
            currentSeconds =`0${currentSeconds}`
        };
        currentTimeEL.textContent = `${currentMinutes}:${currentSeconds}`
    }
}

// Set ProgressBar
function setProgressBar(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const {duration} = music;
    console.log(duration);
    music.currentTime = ((clickX/width)* duration)
}
// EVENT Listener 
prevBtn.addEventListener('click',prevSong);
nextBtn.addEventListener('click',nextSong);
music.addEventListener('timeupdate',updateProgressBar);
music.addEventListener('ended',nextSong)
progessContainer.addEventListener('click',setProgressBar)