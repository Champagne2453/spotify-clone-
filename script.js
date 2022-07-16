console.log("welcome to my spotify");

//intialize variable
let songindex = 0 ;
let audioelement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songitem = document.getElementById('songitem');

let songs =[
    {filepath: "1.mp3"},
    {filepath: "2.mp3"},
    {filepath: "3.mp3"},
    {filepath: "4.mp3"},
    {filepath: "5.mp3"},
    {filepath: "6.mp3"},
    {filepath: "7.mp3"},

]

//audioelemnet.play();

//handle play/pause click
masterplay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioelement.pause();
        masterplay.classList.add('fa-circle-play');
        masterplay.classList.remove('fa-circle-pause');
        gif.style.opacity = 0;
    }
})

//listen to events
audioelement.addEventListener('timeupdate',()=>{
    
    progress = parseInt((audioelement.currentTime/audioelement.duration)*100);
    
    myprogressbar.value = progress;
}
);
myprogressbar.addEventListener('change', ()=>{
    audioelement.currentTime = myprogressbar.value * audioelement.duration/100;
})

const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        
            element.classList.remove('fa-pause');
            element.classList.add('fa-play');
       
    })

}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplays();
        songindex = parseInt(e.target.id); 
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioelement.src = '${songindex+1}.mp3';
        audioelement.currentTime = 0;
        audioelement.play();
        masterplay.classList.add('fa-circle-pause');
        masterplay.classList.remove('fa-circle-play');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=6)
    { songindex=0 }
    else{
        songindex +=1;

    }
    audioelement.src = '${songindex+1}.mp3';
        audioelement.currentTime = 0;
        audioelement.play();
        masterplay.classList.add('fa-circle-pause');
        masterplay.classList.remove('fa-circle-play');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0)
    { songindex=0 }
    else{
        songindex -=1;

    }
    audioelement.src = '${songindex+1}.mp3';
        audioelement.currentTime = 0;
        audioelement.play();
        masterplay.classList.add('fa-circle-pause');
        masterplay.classList.remove('fa-circle-play');

})