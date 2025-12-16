let startbtn = document.querySelector(".start-btn")
let mainimages = document.querySelector(".mainimages")
let imgs = document.querySelectorAll("img")
let score = document.querySelector(".score")
let time = document.querySelector(".time")
let maininfo = document.querySelector(".main-info")
let main = document.querySelector(".main")
let innerWidth = window.innerWidth;
let innerHeight = window.innerHeight;

let count = 10;
let scor = 0;
let storeimage = ""

startbtn.addEventListener("click", ()=>{
  mainimages.style.display = "flex"
  startbtn.style.display = "none"
  
})


imgs.forEach((e)=>{
  e.addEventListener("click", ()=>{
    storeimage = e.src;
    mainimages.style.display = "none";

  let inervall = setInterval(()=>{
    
    if(count >= 1){
      time.innerHTML = `time: ${count}`
      // clearInterval(inervall)
      score.innerHTML = `score: ${scor}`
      --count
      showimage()
  //  mainimages.style.display = "none"
  

    }
    else{
      clearInterval(inervall)
      clearInterval(big)
    document.querySelectorAll(".chotiimage").forEach(img => {
    img.style.display = "none";
    // info.style.display = "none"
    maininfo.style.display = "none";
    main.innerHTML = `your score is ${scor}`
  });
  
    }
    
  },800)
 big = setInterval(()=>{
   showimage()
},200)
  
})});

function showimage() {
  const img = document.createElement("img");
  img.classList.add("chotiimage");
  [img.style.left, img.style.top] = randomgetcoordinate();
  img.src = storeimage;

img.addEventListener("click", () => {
  scor++;
  score.innerHTML = `score: ${scor}`;
  img.remove();
});




  maininfo.append(img);
  // mainmain.append(img)
}
function randomgetcoordinate() {
  const x = Math.random() * (innerWidth - 100);
  const y = Math.random() * (innerHeight - 100);
  if (x <= 0 || y <= 0 || x >= innerWidth - 100 || y >= innerHeight - 100) {
    return randomgetcoordinate();
  }
  return [x + "px", y + "px"];
}