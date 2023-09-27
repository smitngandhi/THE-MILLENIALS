let TheTextBox = document.getElementById("Mytextbox");
function clr()
{
    TheTextBox.value = ""
}
/*To enter character in textbox*/
function btn(text)
{
    TheTextBox.value = TheTextBox.value + text;
}
/*To calculate string*/
function calculate()
{    
    TheTextBox.value=eval(TheTextBox.value)
}
/*To delete last character of string*/
function del()
{
    TheTextBox.value=TheTextBox.value.substring(0,TheTextBox.value.length-1)
}
/*To calculate percentage*/
function percentage()
{
    TheTextBox.value=TheTextBox.value/100
}
/*To enter value of Pi*/
function Pi()
{
    TheTextBox.value+=22/7
}
/*To calculate root of string*/
function root()
{
    TheTextBox.value=Math.sqrt(TheTextBox.value)
}
/*To calculate square of string*/
function square()
{
    TheTextBox.value=Math.pow(TheTextBox.value,2)
}
/*To calculate reciprocal of string*/
function reciprocal()
{
    TheTextBox.value=1/TheTextBox.value
}
/*To calculate log of given string for base 10*/
function log10()
{
    TheTextBox.value=Math.log10(TheTextBox.value)
}
/*To calculate log of given string for base e*/
function loge()
{
    TheTextBox.value=Math.log(TheTextBox.value)
}
/*To calculate sin of given string*/
function sin()
{
    TheTextBox.value=Math.sin(TheTextBox.value)
}
/*To calculate cos of given string*/
function cos()
{
    TheTextBox.value=Math.cos(TheTextBox.value)
}
/*To calculate tan of given string*/
function tan()
{
    TheTextBox.value=Math.tan(TheTextBox.value)
}
/*To change the sign of string*/
function sign()
{
    TheTextBox.value=TheTextBox.value*(-1)
}