function setUpGoogleSheets() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxSyy853BpmXoKLv2VOVmS8PJ4yqC_XIuQI-aeFFXPRxAuCmEbaF5N27uu-hcPweMC-/exec'
    const form = document.querySelector('#scoutingForm')
    const btn = document.querySelector('#submit')

    form.addEventListener('submit', e => {
      e.preventDefault()
      btn.disabled = true
      btn.innerHTML = "Loading..."

      console.log(form)
      fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: new FormData(form) })
        .then(response => { 
              btn.disabled = false
              btn.innerHTML = "Submit"
              alert('Success!', response) })
        .catch(error => {
              btn.disabled = false
              btn.innerHTML = "Submit"
              alert('Error!', error.message)})
    })
//   const form = document.querySelector("#scoutingForm")
//   const submitButton = document.querySelector("#submit")
//   const scriptURL = 'https://script.google.com/macros/s/AKfycbxSyy853BpmXoKLv2VOVmS8PJ4yqC_XIuQI-aeFFXPRxAuCmEbaF5N27uu-hcPweMC-/exec'

//   form.addEventListener('submit', e => {
//     submitButton.disabled = true
//     e.preventDefault()
//     let requestBody = new FormData(form)
//     console.log(requestBody);
//     console.log("------");
//     console.log(form);
//     fetch(scriptURL, { method: 'POST',
//                        mode: 'no-cors',
//                        body: requestBody
//                       })
//       .then(response => {
//         alert('Success!', response)
//         submitButton.disabled = false
//       })
//       .catch(error => {
//         alert('Error!', error.message)
//         submitButton.disabled = false
//       })
//   })
}

