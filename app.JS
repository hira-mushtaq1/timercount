        
        
        var timerInput = document.getElementById("timer")
        var form = document.getElementById("form")
        
        form.addEventListener("submit", function(e) {
            e.preventDefault();
          startCountDown();
        })
        
        
        function startCountDown() {
              clearInterval(x);
          var x = setInterval(function() {
        
        
            var now = new Date().getTime();
            console.log(timerInput.value, new Date().getTime())
        
          
            var distance = new Date(timerInput.value).getTime() - now;
        
           
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
            document.getElementById("display").innerHTML = hours + "h : " +
              minutes + "m : " + seconds + "s ";
        
            // If the count down is over, write some text 
            if (distance < 0) {
              clearInterval(x);
              document.getElementById("display").innerHTML = "Time Expired";
            }
          }, 1000);
        }



