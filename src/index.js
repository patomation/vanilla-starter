import * as firebase from 'firebase'

if (module && module.hot) {
  module.hot.accept()
}

var firebaseConfig = {
  apiKey: 'some-api-key',
  authDomain: 'some-app.firebaseapp.com',
  databaseURL: 'https://some-app.firebaseio.com',
  storageBucket: 'some-app.appspot.com'
}

/**
   * Set up UI event listeners and registering Firebase auth listeners.
   */
window.onload = function () {
  firebase.initializeApp(firebaseConfig)
  // Event bindings.
  document.getElementById('sign-in-form').addEventListener('submit', onSignInSubmit)
  document.getElementById('phone-number').addEventListener('keyup', updateSignInButtonUI)
  document.getElementById('phone-number').addEventListener('change', updateSignInButtonUI)

  // [START appVerifier]
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')
  // [END appVerifier]
}

/**
   * Function called when clicking the Login/Logout button.
   */
function onSignInSubmit (e) {
  e.preventDefault()
  if (isPhoneNumberValid()) {
    window.signingIn = true
    updateSignInButtonUI()
    const phoneNumber = getPhoneNumberFromUserInput()
    const appVerifier = window.recaptchaVerifier
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        window.signingIn = false
        updateSignInButtonUI()
        resetRecaptcha()
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        const code = window.prompt('Enter the verification code you received by SMS')
        if (code) {
          confirmationResult.confirm(code).then(function () {
            window.close()
          }).catch(function (error) {
            // User couldn't sign in (bad verification code?)
            console.error('Error while checking the verification code', error)
            window.alert('Error while checking the verification code:\n\n' +
                    error.code + '\n\n' + error.message)
          })
        }
      }).catch(function (error) {
        // Error; SMS not sent
        window.signingIn = false
        console.error('Error during signInWithPhoneNumber', error)
        window.alert('Error during signInWithPhoneNumber:\n\n' +
                error.code + '\n\n' + error.message)
        updateSignInButtonUI()
        resetRecaptcha()
      })
  }
}

/**
   * Reads the phone number from the user input.
   */
function getPhoneNumberFromUserInput () {
  return document.getElementById('phone-number').value
}

/**
   * Returns true if the phone number is valid.
   */
function isPhoneNumberValid () {
  const pattern = /^\+[0-9\s\-()]+$/
  const phoneNumber = getPhoneNumberFromUserInput()
  return phoneNumber.search(pattern) !== -1
}

/**
   * This resets the recaptcha widget.
   */
function resetRecaptcha () {
  return window.recaptchaVerifier.render().then(function (widgetId) {
    // eslint-disable-next-line no-undef
    grecaptcha.reset(widgetId)
  })
}

/**
   * Updates the Sign-in button state depending on ReCaptcha and form values state.
   */
function updateSignInButtonUI () {
  document.getElementById('sign-in-button').disabled = !isPhoneNumberValid() || !!window.signingIn
}
