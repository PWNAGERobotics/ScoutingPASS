function setUpGoogleSheets() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzXq-T_QAM6X8SheoK9pt9prNnbZ_0pes-qtR9xpB-Y9q4iwFGelqiuwDLRiy1_JZZn-g/exec'
    const form = document.querySelector('#scoutingForm')
    const btn = document.querySelector('#submit')
 
    
    form.addEventListener('submit', e => {
      e.preventDefault()
      btn.disabled = true
      btn.innerHTML = "Sending..."

      let fd = getData(false)
      for (const [key, value] of fd) {
        console.log(`${key}: ${value}\n`);
      }

      fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: fd })
        .then(response => { 
              alert('Success!', response) })
        .catch(error => {
              alert('Error!', error.message)})

      btn.disabled = false
      btn.innerHTML = "Send to Google Sheets"
    })
}
