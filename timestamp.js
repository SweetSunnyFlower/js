window.onload = function () {
   
    currentTime = document.getElementById("current_time");
    current_timestamp = document.getElementById("current_timestamp");
    setInterval(() => {
      
        date = new moment()
        currentTime.innerHTML = date.format('YYYY-MM-DD HH:mm:ss')
        current_timestamp.innerHTML = date.unix()
    }, 1000);

    


    timestamp2time = document.getElementById("timestamp2time");
    timestamp2timevalue = document.getElementById("timestamp2timevalue");
    timestamp2time.addEventListener('input', function () {
        date = new moment(this.value * 1000)
        time = date.format('YYYY-MM-DD HH:mm:ss')
        timestamp2timevalue.innerHTML = time
    })

    time2timestamp = document.getElementById("time2timestamp");
    time2timestampvalue = document.getElementById("time2timestampvalue");

    time2timestamp.addEventListener('input', function () {
        date = new moment(this.value)
        time = date.unix()
        time2timestampvalue.innerHTML = time
    })

    currentTime.addEventListener("click", function () {
        time2timestamp.value = this.innerHTML
    })
    
    current_timestamp.addEventListener("click", function () {
        timestamp2time.value = this.innerHTML
    })
}
