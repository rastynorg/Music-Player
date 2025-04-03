
let singerName=document.querySelector('#singer')
let songName=document.querySelector('#song')
let musicCover=document.querySelector('#cover')
let musicRange=document.querySelector('#music-range')
let pervBtn=document.querySelector('#perv')
let playBtn=document.querySelector('#play')
let nextBtn=document.querySelector('#next')

//Musics Information

let musics=[
    {
        singer:'Saeed Shayesteh',
        song:'Parya',
        audio:new Audio('./musics/parya.mp3'),
        cover:'./pics/musics-cover/paria.webp'
    },
    {
        singer:'Mehdi Ahmadvand',
        song:'Leyla',
        audio:new Audio('./musics/leyla.mp3'),
        cover:'./pics/musics-cover/leyla.webp'
    },
    {
        singer:'AmirAbass Golab',
        song:'Mahkoom',
        audio:new Audio('./musics/mahkum.mp3'),
        cover:'./pics/musics-cover/mahkum.jpg'
    }

]

let currentMusic=0

let audio=musics[currentMusic].audio
singerName.innerText=musics[currentMusic].singer
songName.innerText=musics[currentMusic].song
musicCover.src=musics[currentMusic].cover

//Music Range

audio.addEventListener('canplay',()=>{
    musicRange.max=audio.duration
})

audio.addEventListener('timeupdate',()=>{
    musicRange.value=audio.currentTime
})

musicRange.addEventListener('input',()=>{
    audio.currentTime=musicRange.value
})

//Play Button 

playBtn.addEventListener('click',()=>{
    if(audio.paused){

    audio.play()
    playBtn.classList.replace('fa-play','fa-pause')
    musicCover.style.animationPlayState='running'

    }else{

        audio.pause()
        playBtn.classList.replace('fa-pause','fa-play')
        musicCover.style.animationPlayState='paused'

    }
})

//Next & Pervious Button Work

pervBtn.addEventListener('click',()=>{
    musicUpdate('perv')
})

nextBtn.addEventListener('click',()=>{
    musicUpdate('next')
})

//Change Music Function

function musicUpdate(state){
    audio.pause()
    audio.currentTime=0
    musicRange.value=0
    musicCover.style.animationPlayState='paused'
    playBtn.classList.replace('fa-pause','fa-play')

    if(state == 'next'){
        if(currentMusic == musics.length-1){
            currentMusic = 0
        }else{
            currentMusic += 1
        }
    }else{
        if(currentMusic == 0){
            currentMusic = musics.length-1
        }else{
            currentMusic -= 1
        }
    }
    audio=musics[currentMusic].audio
    singerName.innerText=musics[currentMusic].singer
    songName.innerText=musics[currentMusic].song
    musicCover.src=musics[currentMusic].cover

    audio.addEventListener('timeupdate',()=>{
        musicRange.value=audio.currentTime
    })
  
}