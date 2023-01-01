function setUpGoogleSheets() {
  const form = document.querySelector("#scoutingForm")
  const submitButton = document.querySelector("#submit")
  const scriptURL = '<INSERT SCRIPT URL>'

  form.addEventListener('submit', e => {
    submitButton.disabled = true
    e.preventDefault()
    let requestBody = new FormData(form)
    fetch(scriptURL, { method: 'POST', body: requestBody})
      .then(response => {
        alert('Success!', response)
        submitButton.disabled = false
      })
      .catch(error => {
        alert('Error!', error.message)
        submitButton.disabled = false
      })
  })
}
