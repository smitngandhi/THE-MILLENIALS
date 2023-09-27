const clickaudio = new Audio();
clickaudio.src = "videoplayback.m4a";
let C=0;
const box = document.querySelectorAll('[data-selection]');
const buttons = Array.from(document.getElementsByClassName('ROWS'))
box.forEach((ROWS) => {
    ROWS.addEventListener('click', e => {
        const select = ROWS.dataset.selection
       
        
        playgame(select);
    })
})
let count = 0;
let array = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
console.log(array[6])
function playgame(select) {
   
    C++;
    count++;
    
    console.log(count);
   
    if (count % 2 != 0) {
        buttons[select].innerText = "X";
    }
    else {
        buttons[select].innerText = "O";
    }
let flag=0;
    for (let i of array) {
        let arr=[ele1, ele2, ele3] = [buttons[i[0]].innerText,
                                 buttons[i[1]].innerText,
                                 buttons[i[2]].innerText,
                                ];
                               console.log(arr)
        if(ele1 !="" && ele2!="" & ele3!="")
        {
            flag=1
            console.log("No blank spaces")
            if(ele1 == ele2 && ele2 == ele3)
            {
               if(ele1=="X")
               {
                document.getElementById("RES").innerHTML=" X WIN"
                let box = document.querySelector(".result");
                box.style.display="block";
                document.querySelector(".back").style.display="block"
                
               }
               else if(ele1=="O")
               {
                document.getElementById("RES").innerHTML=" O WIN"
                document.querySelector(".back").style.display="block"
                let box = document.querySelector(".result");
                box.style.display="block";
                
               }
              
            }
            
        }
        
    }
    
    if(count==8)
    {
        document.getElementById("RES").innerHTML=" Its a TIE"
                document.querySelector(".back").style.display="block"
    }
}