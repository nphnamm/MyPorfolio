const header = document.querySelector("header");

const skills_box = document.querySelector(".skills")
const first_skill = document.querySelector(".skill:first-child");  
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

const ml_section = document.querySelector(".milestones");
const ml_counters = document.querySelectorAll(".number span");

const prt_section = document.querySelector(".portfolio")
const zoom_icons = document.querySelectorAll(".zoom-icon");
const modal_overlay = document.querySelector(".modal-overlay")

const images = document.querySelectorAll(".images img");
const prev_btn = document.querySelector(".prev-btn");
const next_btn = document.querySelector(".next-btn");

     
      window.addEventListener("scroll", ()=>{
    
        if(!skillsPlayed) skillsCounter();
        if(!mlPlayed) mlCounter();
    
      })
/* ------------------------- Sticky Navbar -------------------------- */

      function stickyNavbar(){
        header.classList.toggle("scrolled", window.pageYOffset >0);

      }

      stickyNavbar();
      window.addEventListener("scroll",stickyNavbar);

      /* ------------------------- Reveal Animation -------------------------- */

      let sr = ScrollReveal({
        duration :2000 ,
        distance: "60px",

      });

      sr.reveal(".showcase-info",{delay:600});
      sr.reveal(".showcase-image",{origin:"top", delay:700});
      /* ------------------------- Skills Progress Bar Animation -------------------------- */


      function hasReached(el){
        let topPosition = el.getBoundingClientRect().top;
      // console.log(topPosition);

        if(window.innerHeight >= topPosition +el.offsetHeight) return true;
        
        return false;


      }
      function updateCount(num,maxNum){
        let currentNum =+ num.innerText;

        //console.log(num.innerText);
        if(currentNum < maxNum){
          num.innerText = currentNum + 1;
          setTimeout(()=>{
            updateCount(num,maxNum);
          },12);
        }
      }
      
    let skillsPlayed = false;

      function skillsCounter(){
      
        if(!hasReached(first_skill)){
          console.log("you reached skill counter")
          
          return ;

        } 
        
        console.log("you reached skill counter1")
        skillsPlayed = true;
       
        sk_counters.forEach((counter, i)=>{
          let target = +counter.dataset.target;
          let strokeValue = 427 - 427 *(target /100);
          
          progress_bars[i].style.setProperty("--target",strokeValue);
          // console.log(counter);
          // console.log(target);
          setTimeout(() =>{
            updateCount(counter,target);
          },400)
        
        });
   
        progress_bars.forEach((p) => (p.style.animation ="progress 2s ease-in-out forwards"));

      }
/* ------------------------- Services Counter Animationr -------------------------- */
let mlPlayed = false;

function mlCounter(){
  if(!hasReached(ml_section)) return;
  mlPlayed = true;

  console.log("you've reached ml section");
  ml_counters.forEach((ctr) => {
    
    let target = +ctr.dataset.target;
    setTimeout(() =>{
      updateCount(ctr,target);
      
    },400);
    console.log(ctr);
  });
   
}
mlCounter();
/* ------------------------- Porfolio Filter Animation -------------------------- */

let mixer = mixitup('.portfolio-gallery',{
  selectors:{
    target: ".prt-card",

  },
  animation:{
    duration:500,
  }
});

/* ------------------------- Modal Pop Up Animation -------------------------- */
let currentIndex =0;

zoom_icons.forEach((icn ,i) => 
  icn.addEventListener("click" ,() =>{
  prt_section.classList.add("open");  
  document.body.classList.add("stopScrolling");
  currentIndex = i;
  changeImage(currentIndex);
  })
);

modal_overlay.addEventListener("click", () =>{
  prt_section.classList.remove("open")
  document.body.classList.remove("stopScrolling");
  }
);
prev_btn.addEventListener("click", () =>{
  if(currentIndex === 0){
    currentIndex = 5;

  }else if(currentIndex === 6){
    currentIndex =0;
  }
  else{
    currentIndex --;

  }
  
  changeImage(currentIndex);
})
next_btn.addEventListener("click", () =>{
  if(currentIndex === 6){
    currentIndex =0;
  }
  else{
    currentIndex ++;

  }
 
  changeImage(currentIndex);
})
function changeImage(index){
  images.forEach((img) => img.classList.remove("showImage"))
  images[index].classList.add("showImage");
};
