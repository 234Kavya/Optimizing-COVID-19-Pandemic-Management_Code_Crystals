function startSpeechRecognition(inputId) {
    const recognition = new (webkitSpeechRecognition || SpeechRecognition)();
  
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
  
    recognition.start();
  
    recognition.onresult = function (event) {
        const result = event.results[0][0].transcript;
        document.getElementById(inputId).value = result;
    };
  
    recognition.onend = function () {
        console.log('Speech recognition ended');
    };
  }
  
  function registerPatient() {
    // ... your existing registerPatient function ...
  }