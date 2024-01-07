// function test() {
//     VoiceRSS.speech({
//     key: '9f7773277amsh9b6125a1f394c22p160b27jsnb9288c859f05',
//     src: 'Hello, world!',
//     hl: 'en-us',
//     v: 'Linda',
//     r: 0, 
//     c: 'mp3',
//     f: '44khz_16bit_stereo',
//     ssml: false
// });
// }

// test();

function tellme (tell) {
    console.log(`tellme :`,tell)
}

async function getJoke(){
    let joke ='';
    const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        if(data.setup) {
            joke = `${data.setup}...${data.delivery}`
        }
        else {
            joke =  `${data.joke}`
        }
        tellme(joke)
    }catch(error){
        console.log('Whoops',error)
    }
}

getJoke()