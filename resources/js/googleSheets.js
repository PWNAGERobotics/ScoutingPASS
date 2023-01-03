function setUpGoogleSheets() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxSyy853BpmXoKLv2VOVmS8PJ4yqC_XIuQI-aeFFXPRxAuCmEbaF5N27uu-hcPweMC-/exec'
    const form = document.querySelector('#scoutingForm')
    const btn = document.querySelector('#submit')
 
    form.addEventListener('submit', e => {
      e.preventDefault()
      btn.disabled = true
      btn.innerHTML = "Loading..."

      console.log(form)
      let fd = new FormData(form)
      for (const [key, value] of fd) {
        console.log(`${key}: ${value}\n`);
      }

      fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: new FormData(form) })
        .then(response => { 
              alert('Success!', response) })
        .catch(error => {
              alert('Error!', error.message)})

      btn.disabled = false
      btn.innerHTML = "Send to Google Sheets"
    })
}

