var timerInterval; 
var startTime; 

   
    function startTimer() {
        startTime = Date.now(); 

        
        function updateTimer() {
            var elapsedTime = Date.now() - startTime; 
            var minutes = Math.floor(elapsedTime / (1000 * 60)); 
            var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000); 
            var formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
            var formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
            document.querySelector('.timeDisplay').textContent = formattedMinutes + ':' + formattedSeconds;
        }

        
        timerInterval = setInterval(updateTimer, 1000);
    }

    
    function pauseTimer() {
        clearInterval(timerInterval); 
    }

document.getElementById('resetBtn').addEventListener('click', function() {
    var inputs = document.querySelectorAll('.vc input');
    inputs.forEach(function(input) {
        input.value = '';
    });
});

document.getElementById('ResetBtn').addEventListener('click', function() {
    var inputs = document.querySelectorAll('.des input');
    inputs.forEach(function(input) {
        input.value = '';
    });
});

var mcElements = document.querySelectorAll('.mc');
var vcElements = document.querySelectorAll('.vc');

    mcElements.forEach(function(element) {
        element.disabled = true;
    });

    vcElements.forEach(function(element) {
        element.disabled = false;
    })

    function updateHourD() {
        var currentTime = new Date();
        var currentHour = ('0' + currentTime.getHours()).slice(-2); 
        document.querySelector('.one').textContent = currentHour;
    }

    function updateMinutesD() {
        var currentTime = new Date();
        var currentMinutes = ('0' + currentTime.getMinutes()).slice(-2); 
        document.querySelector('.two').textContent = currentMinutes;
    }
    
    function updateDateD() {
        var currentDate = new Date();
        var formattedDate = currentDate.toLocaleString('en-US', { month: 'short', day: '2-digit' });
        var formattedYear = currentDate.toLocaleString('en-US', { year: 'numeric' });
        document.querySelector('.thr').textContent = formattedDate;
        document.querySelector('.fou').textContent = formattedYear;
    }

    
    document.getElementById('stopBtn').addEventListener('click', function() {
        mcElements.forEach(function(element) {
            element.disabled = false;
        });

        vcElements.forEach(function(element) {
            element.disabled = true;
        });

        updateHourD();
        updateMinutesD();
        updateDateD();
        pauseTimer();
        document.getElementById('md').disabled = true;
        document.getElementById('resetBtn').disabled = true;
        document.getElementById('stopBtn').disabled = true;
    });

    function updateHour() {
        var currentTime = new Date();
        var currentHour = ('0' + currentTime.getHours()).slice(-2); 
        document.querySelector('.on').textContent = currentHour;
    }

    function updateMinutes() {
        var currentTime = new Date();
        var currentMinutes = ('0' + currentTime.getMinutes()).slice(-2); 
        document.querySelector('.tw').textContent = currentMinutes;
    }

    function updateDate() {
        var currentDate = new Date();
        var formattedDate = currentDate.toLocaleString('en-US', { month: 'short', day: '2-digit' });
        var formattedYear = currentDate.toLocaleString('en-US', { year: 'numeric' });
        document.querySelector('.th').textContent = formattedDate;
        document.querySelector('.fo').textContent = formattedYear;
    }
    
    function resetTextContent() {
        var dis1Elements = document.querySelectorAll('.dis1 div');
        var dis2Elements = document.querySelectorAll('.dis2 div');

        dis1Elements.forEach(function(element) {
            element.textContent = '';
        });

        dis2Elements.forEach(function(element) {
            element.textContent = '';
        });
    }


    function areInputsFilled() {
        var inputs = document.querySelectorAll('.sec1 .vc input');
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].value.trim() === '') {
                return false;
            }
        }
        return true;
    }

    document.getElementById('stopBtn').disabled = true;

    
    document.getElementById('md').addEventListener('click', function() {

        if (!areInputsFilled()) {
            
            alert('Please fill in all inputs before clicking Start.');
            event.preventDefault(); 
        }
        else {
            document.getElementById('stopBtn').disabled = false;
            document.getElementById('md').disabled = true;
            document.getElementById('resetBtn').disabled = true;
            updateHour();
            updateMinutes();
            updateDate()
            startTimer()
            vcElements.forEach(function(element) {
                element.disabled = true;
            });
        }
    });

const onDiv = document.getElementById('on');
const twDiv = document.getElementById('tw');
const thDiv = document.getElementById('th');
const foDiv = document.getElementById('fo');
const timeDisplayDiv = document.getElementById('timeDisplay');
const oneDiv = document.getElementById('one');
const twoDiv = document.getElementById('two');
const thrDiv = document.getElementById('thr');
const fouDiv = document.getElementById('fou');

const onInput = document.getElementById('onInput');
const twInput = document.getElementById('twInput');
const thInput = document.getElementById('thInput');
const foInput = document.getElementById('foInput');
const timeDisplayInput = document.getElementById('timeDisplayInput');
const oneInput = document.getElementById('oneInput');
const twoInput = document.getElementById('twoInput');
const thrInput = document.getElementById('thrInput');
const fouInput = document.getElementById('fouInput');

// Function to update the value of the hidden input fields with the content of the corresponding div elements
function updateHiddenInputs() {
  onInput.value = onDiv.textContent;
  twInput.value = twDiv.textContent;
  thInput.value = thDiv.textContent;
  foInput.value = foDiv.textContent;
  timeDisplayInput.value = timeDisplayDiv.textContent;
  oneInput.value = oneDiv.textContent;
  twoInput.value = twoDiv.textContent;
  thrInput.value = thrDiv.textContent;
  fouInput.value = fouDiv.textContent;
}

// Call the function to update the hidden input fields initially
updateHiddenInputs();

document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.querySelector('.mc');
  
    submitButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Retrieve values from HTML elements
      const onValue = document.querySelector('.on').innerText;
      const twValue = document.querySelector('.tw').innerText;
      const thValue = document.querySelector('.th').innerText;
      const foValue = document.querySelector('.fo').innerText;
      const oneValue = document.querySelector('.one').innerText;
      const twoValue = document.querySelector('.two').innerText;
      const thrValue = document.querySelector('.thr').innerText;
      const fouValue = document.querySelector('.fou').innerText;
      const timeDisplayValue = document.querySelector('.timeDisplay').innerText;
      const rValue = document.querySelector('.r').value;
      const raValue = document.querySelector('.ra').value;
      const rawValue = document.querySelector('.raw').value;
  
      // Construct data object
      const data = {
        on: onValue,
        tw: twValue,
        th: thValue,
        fo: foValue,
        one: oneValue,
        two: twoValue,
        thr: thrValue,
        fou: fouValue,
        timeDisplay: timeDisplayValue,
        r: rValue,
        ra: raValue,
        raw: rawValue
      };
  
      // Send data to Google Apps Script doPost function
      fetch('https://script.google.com/macros/s/AKfycbwZbcal6d-4Q8dr3eU_1AokkcX7YzJS8ueCzV4RD79oUgwCLMFc0_xo8J4YIQ5YH16p/exec', {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(data)
      })
      .then(response => {
        console.log('Data submitted successfully');
        // Handle success
      })
      .catch(error => {
        console.error('Error submitting data:', error);
        // Handle error
      });
    });
  });
  
  document.querySelector('.sec1 button[type="submit"].mc').addEventListener('click', function() {
    mcElements.forEach(function(element) {
        // element.disabled = true;
    });
    
    var inputs = document.querySelectorAll('.des input');
    inputs.forEach(function(input) {
    input.value = '';
    });

    var inputs = document.querySelectorAll('.vc input');
    inputs.forEach(function(input) {
    input.value = '';
    });

    vcElements.forEach(function(element) {
        element.disabled = false;
    });

    document.querySelector('.timeDisplay').textContent = '00:00';
    document.getElementById('stopBtn').disabled = true;
    document.querySelector('.raw').disabled = true;
    document.getElementById('md').disabled = false;
    resetTextContent();
});
