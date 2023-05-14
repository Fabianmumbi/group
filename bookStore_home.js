const menubtn = document.getElementById('menubutton');
const myparagraph = document.getElementById('my-paragraph');

menubtn.addEventListener("click" , () =>{
    myparagraph.style.display = myparagraph.style.display === "none" ? "block" : "none";
    
});