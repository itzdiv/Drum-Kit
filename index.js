

for(i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
        let lol = this.innerHTML;
        makesound(lol);
        animation1(lol);
       
        
    })
    
}

document.addEventListener("keydown",function(event){
    makesound(event.key);
    animation1(event.key);

});

function makesound(key){

    switch (key) {
            
        case 'w':

        let sound= new Audio('./sounds/crash.mp3');
        sound.play();
        break;
        
        case 'a':

        let sound2= new Audio('./sounds/kick-bass.mp3');
        sound2.play();
        break;
        
        case 's':

        let sound3= new Audio('./sounds/snare.mp3');
        sound3.play();
        break;

        case 'd':

        let sound4= new Audio('./sounds/tom-1.mp3');
        sound4.play();
        break;

        case 'j':

        let sound5= new Audio('./sounds/tom-2.mp3');
        sound5.play();
        break;

        case 'k':

        let sound6= new Audio('./sounds/tom-3.mp3');
        sound6.play();
        break;

        case 'l':

        let sound7= new Audio('./sounds/tom-4.mp3');
        sound7.play();
        break;

        

            
    
        default:
            console.log("Keystroke Not Recognized");
            break;
    }

}

function animation1(key){
    var clss=document.querySelector('.'+key);
    console.log(clss);
    clss.classList.add('pressed','scale');
    setTimeout(function(){
        clss.classList.remove('pressed','scale');
    },150);
}