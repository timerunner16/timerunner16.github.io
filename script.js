function startTimer(enddate, display) {
    function timer() {
      // get the number of seconds that have elapsed since 
      // startTimer() was called
      const diffTime = Math.abs(enddate - Date.now());
      
      var diffSeconds = Math.ceil(diffTime / (1000)%60) | 0;
      var diffMinutes = Math.ceil(diffTime / (1000 * 60)%60) | 0;
      var diffHours = Math.ceil(diffTime / (1000 * 60 * 60)%24) | 0;
      var diffDays = Math.ceil(diffTime / (1000*60*60*24)%365) - 1 | 0;
      
      diffSeconds = diffSeconds < 10 ? '0' + diffSeconds : diffSeconds
      diffMinutes = diffMinutes < 10 ? '0' + diffMinutes : diffMinutes
      diffHours = diffHours < 10 ? '0' + diffHours : diffHours
      diffDays = diffDays < 10 ? '0' + diffDays : diffDays
      
      display.textContent = diffDays + ":" + diffHours + ":" + diffMinutes + ":" + diffSeconds
    };
    
    setInterval(timer, 1000);
  }
  
  window.onload = function () {
      var endtime = new Date(2024, 2, 15, 0, 0, 0);
      var display = document.querySelector('#time');
      startTimer(endtime, display);
  };
