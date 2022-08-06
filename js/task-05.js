// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//  подставляет его текущее значение в span#name-output.
//   Если инпут пустой, в спане должна отображаться строка "Anonymous".

let inputEl = document.querySelector('#name-input');
inputEl.addEventListener('input', onInputChange);

let outputEl = document.querySelector('#name-output');

function onInputChange(event) {
  inputEl = event.currentTarget.value;
  console.log(inputEl);

  inputEl !== ' ' ? (outputEl.innerText = inputEl.trim()) : 'Anonymous';
}