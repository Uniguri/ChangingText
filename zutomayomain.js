let list = [
    "Zutomayo", "Is", "Good"
]
let count = 0;

function init(){
    document.getElementById('text').innerText = list[0];
}
function resize() {
    const text = document.getElementById('text');
    const shadows = document.getElementsByClassName('shadows');
    text.style.paddingTop = (window.innerHeight - 217) / 2;
    text.style.paddingBottom = (window.innerHeight - 217) / 2;
}

window.addEventListener("resize", resize);
window.addEventListener("wheel", (event) => {
    const text = document.getElementById('text');
    if(event.deltaY > 0)
        count++;
    else
        count--;
    console.log(count);
    text.innerText = list[Math.abs(count%list.length)];
})