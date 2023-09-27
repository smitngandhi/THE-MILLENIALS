let count_el=document.getElementById("Heading")
let count=0
let saveEl = document.getElementById("save_el")
function increment()
{
    count+=1
    count_el.innerText=count
}
function reset()
{
    count=0
    count_el.innerText=count
}
function save()
{
    saveEl.textContent+=count+" - "
    console.log(count)
}
