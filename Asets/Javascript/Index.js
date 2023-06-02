const dispaly=document.querySelector("input");
const button=document.querySelector("button");
const copyBtn=document.querySelector("span.far");
const copyActive=document.querySelector("span.fas");

const chars=
"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+|}{[]:;?><,./-=";
button.addEventListener('click',()=>{
    let randompassword="";
    copyBtn.style.dispaly="block"
    copyActive.style.dispaly="none"
    for(var i=0;i<16;i++)
    {
        randompassword +=chars.charAt(Math.floor(Math.random()*chars.length));
    }
    dispaly.value=randompassword;22
});
const copy=()=>{
    copyBtn.style.dispaly="none";
    copyActive.style.dispaly="block";
    dispaly.select();
    // document.execCommand("copy");
}
