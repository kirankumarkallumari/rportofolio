console.log("srcipt etc")
document.querySelector('.cross').style.display= 'none';
document.querySelector('.hamburger').addEventListener("click", ()=> {
 document.querySelector('.sidebar').classList.toggle('sidebargo');
 if(document.querySelector('.sidebar').classList.contains('sidebargo')){
    document.querySelector('.ham').style.display='inline'
    document.querySelector('.cross').style.display='none'
 }
 else{
    document.querySelector('.ham').style.display = 'none'
    setTimeout(() => {
        document.querySelector('.cross').style.display = 'inline'
    }, 300);

    
 }
})
 src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"
 var typed = new Typed(".about", {
   strings : ["Vedio Editor", "Developer", "Learner"],
   typeSpeed: 150,
   backSpeed: 150,
   loop: true
 }
 )
