let screen = document.getElementById('screen');
let btn = document.querySelectorAll('button');
let screenValue = '';
for(item of btn)
{
    item.addEventListener('click', (e)=>
    {
        buttonText = e.target.innerText;

           console.log('button text is', buttonText);
           if(buttonText== 'x')
           {
               buttonText = "*";
               screenValue += buttonText;
               screen.value = screenValue;
           }

           else if (buttonText == "AC")
           {
               screenValue = "";
               screen.value = screenValue;

           }

           else if(buttonText=="=")
           {
                screen.value = eval(screenValue);
           }
           else if(buttonText == "<-")
           {
               screenValue = screenValue.slice(0,-1);
               screen.value = screenValue;
           }
           else
           {
               screenValue += buttonText;
               screen.value = screenValue;

           }
    });
}











// let btn = document.getElementsByClassName('lastbutton');

// btn[0].addEventListener('mousedown',()=>{
//  btn[0].style.borderColor = "white";
// });

// btn[0].addEventListener('mouseup',()=>{
//     btn[0].style.borderColor = "red";
//    });
