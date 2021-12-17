function msg(){  
 alert("You will be Notified for The New Updates");  
} 


document.addEventListener("DOMContentLoaded", function(){
    function createParagraph(){
        let para = document.createElement('p');
        para.textContent ='You Heart the Page ❤️❤️❤️';
        document.body.appendChild(para);
    }

const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++){
    buttons[i].addEventListener('click', createParagraph);
}
});