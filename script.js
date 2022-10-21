console.log("Welcome to T-MUSIC");
let songindex=0;
let audioelement=new Audio('1.mp3');
let masterplay = document.getElementById("masterplay");
let myprogressbar=document.getElementById("myprogressbar");
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songitem'));


let songs=[
    {songName:"DIL MERI NA SUNE" ,filePath:"musicApp/1.mp3",coverPath:"covers/1.mp3"},
    {songName:"SHIVAM" ,filePath:"musicApp/2.mp3",coverPath:"covers/2.mp3"},
    {songName:"TAARIF" ,filePath:"musicApp/3.mp3",coverPath:"covers/3.mp3"},
    {songName:"ALAG AASAMAAN" ,filePath:"musicApp/4.mp3",coverPath:"covers/4.mp3"},
    {songName:"DEVA" ,filePath:"musicApp/5.mp3",coverPath:"covers/5.mp3"},
    {songName:"HOSANA" ,filePath:"musicApp/6.mp3",coverPath:"covers/6.mp3"},

]

songitems.forEach((element,i)=>{
    // element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songname')[0].innerHTML=songs[i].songName;

})

masterplay.addEventListener('click',()=>{
if(audioelement.paused || audioelement.currentTime<=0){
    audioelement.play();
    masterplay.classlist.remove('fa-play-circle');
    masterplay.classlist.add('fa-pause-circle');
    gif.style.opacity=1;
}
else{
    audioelement.pause();
    masterplay.classlist.remove('fa-pause-circle');
    masterplay.classlist.add('fa-play-circle');
    gif.style.opacity=0;
}

});

audioelement.addEventListener('timeupdate',()=>{
    console.log("timeupdated")

    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    console.log(progress);
    myprogressbar.value=progress;
       

});

myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime=myprogressbar.value*audioelement.duration/100;
});

const makeallplay=()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })


}
Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplay();
        console.log(e.target);
        songindex=parseInt(e.target.id);
e.target.classList.remove('fa-play-circle');
e.target.classList.add('fa-pause-circle');
audioelement.src=`covers/${songindex+1}.mp3`;
audioelement.currentTime=0;
audioelement.play();
masterplay.classList.remove('fa-play-circle');
masterplay.classList.add('fa-pause-circle');

    })

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex-=1;
    }
audioelement.src=`covers/${songindex+1}.mp3`;
audioelement.currentTime=0;
audioelement.play();
masterplay.classList.remove('fa-play-circle');
masterplay.classList.add('fa-pause-circle');
})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>9){
        songindex=0;
    }
    else{
        songindex+=1;
    }
audioelement.src=`covers/${songindex+1}.mp3`;
audioelement.currentTime=0;
audioelement.play();
masterplay.classList.remove('fa-play-circle');
masterplay.classList.add('fa-pause-circle');
})