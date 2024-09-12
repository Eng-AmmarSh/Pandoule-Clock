let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");



setInterval(() => {

  let day = new Date();
  let hh = day.getHours() * 30 ;
  let mm = day.getMinutes() * 6 ;
  let ss = day.getSeconds() * 6 ;

  hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
  
  // digital clock :

  let hours = document.getElementById("hours");
  let minuts = document.getElementById("minuts");
  let secounds = document.getElementById("secounds");
  let ampm = document.getElementById("ampm");
  
  let h = new Date().getHours() ;
  let m = new Date().getMinutes() ;
  let s = new Date().getSeconds() ;


  // chnge from 24 to 12
  let selected = document.querySelector("input[name='12hr']:checked");
  

  if(selected.value == "12 hr"){
    let AMPM = h>12 ? "PM" :"AM" ; 
    if (h > 12) {
        h = h-12  ; 
    };
    ampm.style.visibility="visible";
    ampm.innerHTML = AMPM;
  }else{
    ampm.style.visibility="hidden";
  };


  

  
 // add zero befor single number
  h = (h < 10)? h = "0" + h : h ;
  m = (m < 10)? m = "0" + m : m ;
  s = (s < 10)? s = "0" + s : s ;

  
  hours.innerHTML = h;
  minuts.innerHTML = m ;
  secounds.innerHTML = s ;
  
  
} );

// change from 12hr to 24hr

let lab_rad1 = document.getElementById("lab_rad1");
let lab_rad2 = document.getElementById("lab_rad2");

let raiobtns = document.querySelectorAll("input[name='12hr']");

raiobtns.forEach(radiobtn =>{
radiobtn.addEventListener("change",()=>{
  let selected = document.querySelector("input[name='12hr']:checked");
 
  if(selected.value == "12 hr"){
       lab_rad1.style.color ="#d56363";
       lab_rad2.style.color ="#fff";
      }else{
       lab_rad1.style.color ="#fff";
       lab_rad2.style.color ="#d56363";
      }
      
})
})


