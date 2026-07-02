/* ===================================
   Happy Birthday Ali Raza
   script.js
=================================== */

// Loader
window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        if (loader) {
            loader.style.opacity = "0";
            loader.style.transition = "0.8s";
            setTimeout(() => {
                loader.style.display = "none";
            }, 800);
        }
    }, 1500);
});

// Dark Mode
const darkBtn = document.getElementById("darkBtn");

if (darkBtn) {
    darkBtn.onclick = () => {
        document.body.classList.toggle("dark");
        darkBtn.innerHTML =
            document.body.classList.contains("dark")
                ? "☀️"
                : "🌙";
    };
}

// Scroll Gallery
const galleryBtn = document.getElementById("galleryBtn");

if (galleryBtn) {
    galleryBtn.onclick = () => {
        document.getElementById("gallery").scrollIntoView({
            behavior: "smooth"
        });
    };
}

// Gift Popup
const giftBox = document.getElementById("giftBox");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

if (giftBox) {
    giftBox.onclick = () => {
        popup.style.display = "flex";
        createFireworks();
    };
}

if (closePopup) {
    closePopup.onclick = () => {
        popup.style.display = "none";
    };
}

// Gallery Lightbox
const imgs = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

imgs.forEach(img => {
    img.onclick = () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    };
});

if (closeLightbox) {
    closeLightbox.onclick = () => {
        lightbox.style.display = "none";
    };
}

// Scroll Button
const topBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// Celebrate Button
const celebrateBtn=document.getElementById("celebrateBtn");

if(celebrateBtn){

celebrateBtn.onclick=()=>{

confettiBlast();

createFireworks();

};

}

// Music
const music=document.getElementById("birthdaySong");

const musicBtn=document.getElementById("musicBtn");

let playing=false;

if(musicBtn){

musicBtn.onclick=()=>{

if(!playing){

music.play();

musicBtn.innerHTML="⏸";

playing=true;

}else{

music.pause();

musicBtn.innerHTML="🎵";

playing=false;

}

};

}

// Confetti
function confettiBlast(){

for(let i=0;i<150;i++){

let c=document.createElement("div");

c.style.position="fixed";

c.style.width="10px";

c.style.height="10px";

c.style.left=Math.random()*100+"vw";

c.style.top="-10px";

c.style.background=`hsl(${Math.random()*360},100%,50%)`;

c.style.pointerEvents="none";

c.style.zIndex="99999";

document.body.appendChild(c);

let x=(Math.random()-0.5)*300;

let y=window.innerHeight+100;

c.animate([

{

transform:"translate(0,0) rotate(0deg)"

},

{

transform:`translate(${x}px,${y}px) rotate(720deg)`

}

],{

duration:3000

});

setTimeout(()=>{

c.remove();

},3000);

}

}

// Fireworks
function createFireworks(){

for(let i=0;i<80;i++){

let f=document.createElement("div");

f.style.position="fixed";

f.style.left="50%";

f.style.top="45%";

f.style.width="8px";

f.style.height="8px";

f.style.borderRadius="50%";

f.style.background=`hsl(${Math.random()*360},100%,50%)`;

f.style.pointerEvents="none";

f.style.zIndex="99999";

document.body.appendChild(f);

let x=(Math.random()-0.5)*700;

let y=(Math.random()-0.5)*700;

f.animate([

{

transform:"translate(0,0)",

opacity:1

},

{

transform:`translate(${x}px,${y}px)`,

opacity:0

}

],{

duration:1800

});

setTimeout(()=>{

f.remove();

},1800);

}

}

// Floating Hearts
function heart(){

let h=document.createElement("div");

h.innerHTML="❤️";

h.style.position="fixed";

h.style.left=Math.random()*100+"vw";

h.style.bottom="-20px";

h.style.fontSize=(18+Math.random()*20)+"px";

h.style.pointerEvents="none";

document.body.appendChild(h);

h.animate([

{

transform:"translateY(0)",

opacity:1

},

{

transform:"translateY(-120vh)",

opacity:0

}

],{

duration:6000

});

setTimeout(()=>{

h.remove();

},6000);

}

setInterval(heart,900);

// Floating Balloons
function balloon(){

let b=document.createElement("div");

b.innerHTML="🎈";

b.style.position="fixed";

b.style.left=Math.random()*100+"vw";

b.style.bottom="-50px";

b.style.fontSize="35px";

b.style.pointerEvents="none";

document.body.appendChild(b);

b.animate([

{

transform:"translateY(0)"

},

{

transform:"translateY(-130vh)"

}

],{

duration:10000

});

setTimeout(()=>{

b.remove();

},10000);

}

setInterval(balloon,1800);

// Auto Fireworks Every 25 Seconds
setInterval(createFireworks,25000);

// Auto Confetti Every 18 Seconds
setInterval(confettiBlast,18000);

console.log("Happy Birthday Ali Raza Website Loaded Successfully 🎂");