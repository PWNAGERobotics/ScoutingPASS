function setUpGoogleSheets() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwrU7jIbikKm7DUsp-U6ayH5k_h9n8ayJ80EFPYA6SiHm2cB8vuu1fRXtJS60yOwEfr/exec'
    const form = document.querySelector('#scoutingForm')
    const btn = document.querySelector('#submit')
 
    
    form.addEventListener('submit', e => {
      e.preventDefault()
      btn.disabled = true
      btn.innerHTML = "Sending..."

      let fd = getData(false)
      // for (const [key, value] of fd) {
      //   console.log(`${key}: ${value}\n`);
      // }

      fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: fd })
        .then(response => { 
              console.log(fd, response); })
        .catch(error => {
              alert('Error!'); console.log(error);})

      btn.disabled = false
      btn.innerHTML = "Send to Google Sheets"
    })
}
