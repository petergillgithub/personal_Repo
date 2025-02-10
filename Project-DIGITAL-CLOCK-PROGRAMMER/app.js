// Digital Clock Program



function digitalclock() {

  const now = new Date;

  // Hour Section
  let hour = now.getHours();
  const meridium = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  hour = hour.toString().padStart(2,0);

  // Minutes Section
  const minutes = now.getMinutes().toString().padStart(2,0);

  // Second Section
  const seconds = now.getSeconds().toString().padStart(2,0);

  // 0 Section on Time
  const timeString = `${hour}:${minutes}:${seconds} ${meridium}`;
  document.getElementById("clock").textContent = timeString;
}

digitalclock();

setInterval(digitalclock,1000)