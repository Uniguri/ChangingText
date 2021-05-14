let list = [
    "Zutomayo", "Is", "Good", "Made", "By", "JCH", "Zutomayo", "Is", "Omnipotent", "God"
]
let count = 0;

function init(){
    document.getElementById('container').innerHTML = "";
    for(i=0; i<list.length; i++){
        var temp = document.createElement('div');
        temp.innerText = list[i];
        temp.className = "text";
        temp.style.transform = `translate(-50%, ${-50+70*i}%`

        document.getElementById('container').append(temp);
    }

    DoEvent();
}

function DoEvent(){
    const texts = document.getElementsByClassName('text');

    for(i=0; i<texts.length; i++){
        texts[i].style.transform = `translate(-50%, ${-50+70*i-70*count}%`

        for(j=0; j<=20; j++){
            var opacity = 100-Math.E*j*10;
            var rgb = 255-Math.E*j*10;
            if(count+j < texts.length){
                texts[count+j].style.opacity = `${opacity}%`;
                texts[count+j].style.color = `rgb(${rgb}, ${rgb}, ${rgb})`;
            }
            if(0<=count-j){
                texts[count-j].style.opacity = `${opacity}%`;
                texts[count-j].style.color = `rgb(${rgb}, ${rgb}, ${rgb})`;
            }
        }
    }
}

window.addEventListener("wheel", (event) => {
    const texts = document.getElementsByClassName('text');
    if(event.deltaY > 0){
        count++;
    } 
    else{
        count--;
        if(count < 0){
            count = texts.length-1;
        }
    }
    if(Math.abs(count) >= texts.length){
        count = 0;
    }

    DoEvent();
});
