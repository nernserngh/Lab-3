function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username !== 'johnathandoe') {
      console.log('Form submission failed.');
      return false;
    }

    if (email !== 'johndoe@gmail.com') {
      console.log('Form submission failed.');
      return false;
    }

    if (password !== 'johndoespassword') {
      console.log('Form submission failed.');
      return false;
    }

    console.log('Form submitted successfully.');
    return true;
}