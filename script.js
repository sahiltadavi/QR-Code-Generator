let h2 = document.getElementById("h2");
let input = document.getElementById('input');
let img = document.getElementById('img');

let show = ()=>{
    let inputfiled = input.value;
    
    if(!inputfiled){
        alert("Enter a valid URL");
        return;
    }
    else{
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
        img.alt = `QR code for ${input}`;
    }
}
let btn = document.getElementById("btn");
btn.addEventListener("click",show);