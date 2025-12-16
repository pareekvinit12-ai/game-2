let startbtn = document.querySelector(".start-btn")
let mainimages = document.querySelector(".mainimages")
let imgs = document.querySelectorAll("img")
let score = document.querySelector(".score")
let time = document.querySelector(".time")
let mainmain = document.querySelector(".mainmain")
let innerwidth = window.innerWidth;
let innerHeight = window.innerHeight;

let count = 60;
let scor = 0;
let storeimage = ""

startbtn.addEventListener("click", ()=>{
  mainimages.style.display = "flex"
  startbtn.style.display = "none"
})


imgs.forEach((e)=>{
  e.addEventListener("click", ()=>{
  let inervall = setInterval(()=>{
    if(count >= 1){
      time.innerHTML = `time: ${count}`
      // clearInterval(inervall)
      score.innerHTML = `score: ${scor}`
      --count
   mainimages.style.display = "none"

    }
    // else{
    //   //clearInterval(inervall)
    // }
    
  },100)
})});

function showimage() {
  const img = document.createElement("img");
  img.classList.add("chotiimage");
  [img.style.left, img.style.top] = randomgetcoordinate();
  img.src = storeimage;
  mainmain.append(img)


}

  


function randomgetcoordinate() {
  const x = Math.random() * (innerWidth - 100);
  const y = Math.random() * (innerHeight - 100);
  if (x <= 0 || y <= 0 || x >= innerWidth - 100 || y >= innerHeight - 100) {
    return randomgetcoordinate();
  }
  return [x + "px", y + "px"];
}