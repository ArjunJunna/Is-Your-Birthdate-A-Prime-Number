const birthDate = document.querySelector('#birthDate');
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');
const reset = document.querySelector('#reset');
const message = document.querySelector('.message');

hideMessage();
btn.addEventListener('click', function () {
  let number = birthDate.value.replaceAll('-', '');

  if (number === '') {
    showMessage('Please Select Your DateOfBirth');
  } else {
    toCheckForPrime(number);
  }
});

reset.addEventListener('click', function () {
  birthDate.value = '';
  output.innerText = '';
  hideMessage();
});

function showMessage(msg) {
  message.innerText = msg;
  message.style.display = 'block';
}
function hideMessage() {
  message.style.display = 'none';
}

function toCheckForPrime(number) {
  var isPrime = true;
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log('its a prime number');
    output.innerText = `${birthDate.value} is a prime number✨✨✨. Please do share this JS app on your social media...`;
  } else {
    console.log('not a prime number');
    output.innerText = `${birthDate.value} is a not prime number😔😔😔`;
  }
}
