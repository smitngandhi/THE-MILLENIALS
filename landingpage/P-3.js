const img1 =document.querySelector('.gameimg1');
const text1 = document.querySelector('.gametext1');
const img2 = document.querySelector('.gameimg2');
const text2 = document.querySelector('.gametext2');
const img3 = document.querySelector('.gameimg3');
const text3 = document.querySelector('.gametext3');
const img4 = document.querySelector('.gameimg4');
const text4 = document.querySelector('.gametext4');
const img5 = document.querySelector('.gameimg5');
const text5 = document.querySelector('.gametext5');
const img6 = document.querySelector('.gameimg6');
const text6 = document.querySelector('.gametext6');
console.log(img1);
console.log(text1);
console.log(img2);
console.log(img2);
console.log(img3);
console.log(text3);
console.log(img4);
console.log(text4);
console.log(img5);
console.log(text5);
console.log(img6);
console.log(text6);

function revealtext1()
{
    if(text1.classList.contains("gameimg1"))
    {
        text1.classList.remove("gameimg1");
    }
    else
    {
        text1.classList.add("gameimg1");
    }
}

img1.addEventListener("mouseover",revealtext1);


function revealtext2()
{
    if(text2.classList.contains("gameimg2"))
    {
        text2.classList.remove("gameimg2");
    }
    else
    {
        text2.classList.add("gameimg2");
    }
}

img2.addEventListener("mouseover",revealtext2);

function revealtext3()
{
    if(text3.classList.contains("gameimg3"))
    {
        text3.classList.remove("gameimg3");
    }
    else
    {
        text3.classList.add("gameimg3");
    }
}

img3.addEventListener("mouseover",revealtext3);

function revealtext4()
{
    if(text4.classList.contains("gameimg4"))
    {
        text4.classList.remove("gameimg4");
    }
    else
    {
        text4.classList.add("gameimg4");
    }
}

img4.addEventListener("mouseover",revealtext4);

function revealtext5()
{
    if(text5.classList.contains("gameimg5"))
    {
        text5.classList.remove("gameimg5");
    }
    else
    {
        text5.classList.add("gameimg5");
    }
}

img5.addEventListener("mouseover",revealtext5);

function revealtext6()
{
    if(text6.classList.contains("gameimg6"))
    {
        text6.classList.remove("gameimg6");
    }
    else
    {
        text6.classList.add("gameimg6");
    }
}

img6.addEventListener("mouseover",revealtext6);