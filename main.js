let target = document.querySelector("#dynamic");

function randomString() {
    let stringArr = ["No.3 | Coding Project", "Learn to HTML",
    "Learn to CSS", "Learn to Javascript", "Learn to Vue"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)]; 
    let selectStringArr = selectString.split("");
    return selectStringArr;
}

function resetTyping() {
    target.textContent = ""; 
    dynamic(randomString()); 
}                           

function dynamic(randomArr){
    if(randomArr.length > 0){
    target.textContent += randomArr.shift(); 
    setTimeout(function(){
        dynamic(randomArr);
    }, 80);
  }
  else{
    setTimeout(resetTyping, 3000); //3초뒤
  }
}

dynamic(randomString());

function blink(){ 
    target.classList.toggle("active");
} 

setInterval(blink, 500); 

const toggleBtn = document.querySelector('.navbtn');

const menu = document.querySelector('.nav');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');  
})
