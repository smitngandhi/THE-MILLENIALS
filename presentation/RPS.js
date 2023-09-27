const buttons = document.querySelectorAll('[data-selection]');
let i;
buttons.forEach((button) => {
   button.addEventListener('click', e => {
      const select = button.dataset.selection
      makeSelection(select)
   })
})
let user = 0;
let comp = 0;
function makeSelection(selection) {
  
   document.getElementById("user_phase").style.animation="animate";
   document.getElementById("computer_phase").style.animation="animate";
   const x = Math.floor(Math.random() * (3) + 1);
   console.log("The vale selcted by the computer is :", x);
   if (selection == 1 && x == 1 || selection == 2 && x == 2 || selection == 3 && x == 3) {
     
      console.log("the user has", user)
      console.log("the computer has", comp)
      document.getElementById("User").innerHTML = user;
      document.getElementById("computer").innerHTML = comp;

   }
   else if (selection == 1 && x == 3 || selection == 2 && x == 1 || selection == 3 && x == 2) {
      user += 1;
      console.log("the user has", user)
      document.getElementById("User").innerHTML = user;
   }
   else if (selection == 3 && x == 1 || selection == 1 && x == 2 || selection == 2 && x == 3) {
      comp += 1;
      console.log("the computer has", comp)
      document.getElementById("computer").innerHTML = comp;
   }
   if(selection==1)
   {
      document.getElementById("user_phase").src="R1 (2).png";
   }
   
   if(selection==2 )
   {
      document.getElementById("user_phase").src="P1 (2).png";
   }
   if(selection==3 )
   {
      document.getElementById("user_phase").src="S1 (2).png";
   }
   if(x==1)
   {
      document.getElementById("computer_phase").src="R1.png";
   }
   if(x==2)
   {
      document.getElementById("computer_phase").src="P1.png";
   }
   
   if(x==3)
   {
      document.getElementById("computer_phase").src="S1.png";
   }
   if (user == 5 && comp == 5) {
      document.getElementById("result").innerHTML = "It is a draw"
   }
   else if (comp == 5) {
      document.getElementById("result").innerHTML = "Computer Wins"
     
   }
   else if (user == 5) {
      document.getElementById("result").innerHTML = "You Win!!!!"
   }
}



