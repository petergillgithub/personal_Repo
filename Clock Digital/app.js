

function newDigitalClock(){

  const now = new Date();

  //Hour Part()
  let hour = now.getHours();
  const meridium = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  hour = hour.toString().padStart(2,0);

  //minutue part
  let minutes =  now.getMinutes();
  
  minutes.toString().padStart();

  //second part
  let second = now.getSeconds();
  
  second.toString().padStart(2,0);



  let textString = ` ${hour}:${minutes}:${second}${meridium}`

  document.getElementById("clock").textContent = textString


}

newDigitalClock();
setInterval(newDigitalClock,1000)
