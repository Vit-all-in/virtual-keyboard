/* eslint-disable linebreak-style */
import './style.css';

const body = document.querySelector('body');
const container = document.createElement('div');
const keyboardWrapp = document.createElement('div');
const keyboardKeys = document.createElement('div');
const input = document.createElement('textarea');
const numberArr = ['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', ''];
const tabArr = ['', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', ''];
const capsArr = ['', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', ''];
const shiftArr = ['', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', ''];
const ctrlArr = ['', '', '', '', '', '', '←', '↓', '→'];

function createHtml() {
  container.classList.add('container');
  keyboardWrapp.classList.add('keyboard-wrapper');
  keyboardKeys.classList.add('keyboard-keys');
  input.classList.add('input');
  input.setAttribute('type', 'text');
  body.appendChild(container);
  container.appendChild(input);
  container.appendChild(keyboardWrapp);
  keyboardWrapp.appendChild(keyboardKeys);
  for (let i = 0; i < 5; i += 1) {
    const row = document.createElement('div');
    row.classList.add('row');
    keyboardKeys.appendChild(row);
  }
  const rows = document.querySelectorAll('.row');
  rows[0].classList.add('row-1');
  const row1 = rows[0];
  for (let i = 0; i < numberArr.length; i += 1) {
    const key = document.createElement('div');
    key.classList.add('key');
    key.innerHTML = numberArr[i];
    row1.appendChild(key);
  }
  rows[1].classList.add('row-2');
  const row2 = rows[1];
  for (let i = 0; i < tabArr.length; i += 1) {
    const key = document.createElement('div');
    key.classList.add('key');
    key.innerHTML = tabArr[i];
    row2.appendChild(key);
  }
  rows[2].classList.add('row-3');
  const row3 = rows[2];
  for (let i = 0; i < capsArr.length; i += 1) {
    const key = document.createElement('div');
    key.classList.add('key');
    key.innerHTML = capsArr[i];
    row3.appendChild(key);
  }
  rows[3].classList.add('row-4');
  const row4 = rows[3];
  for (let i = 0; i < shiftArr.length; i += 1) {
    const key = document.createElement('div');
    key.classList.add('key');
    key.innerHTML = shiftArr[i];
    row4.appendChild(key);
  }
  rows[4].classList.add('row-5');
  const row5 = rows[4];
  for (let i = 0; i < ctrlArr.length; i += 1) {
    const key = document.createElement('div');
    key.classList.add('key');
    key.innerHTML = ctrlArr[i];
    row5.appendChild(key);
  }
  const keys = document.querySelectorAll('.key', 'option');
  keys[13].classList.add('backspace', 'option');
  keys[14].classList.add('tab', 'option');
  keys[27].classList.add('slash', 'option');
  keys[28].classList.add('delete', 'option');
  keys[29].classList.add('caps-lock', 'option');
  keys[41].classList.add('enter', 'option');
  keys[42].classList.add('shift', 'shift-left', 'option');
  keys[54].classList.add('shift', 'shift-right', 'option');
  keys[53].classList.add('arrow-top', 'option');
  keys[55].classList.add('ctrl', 'ctrl-left', 'option');
  keys[56].classList.add('lang', 'option');
  keys[57].classList.add('alt', 'alt-left', 'option');
  keys[58].classList.add('space', 'option');
  keys[59].classList.add('alt', 'alt-right', 'option');
  keys[60].classList.add('ctrl', 'ctrl-right', 'option');
  keys[61].classList.add('arrow-left', 'option');
  keys[62].classList.add('arrow-bottom', 'option');
  keys[63].classList.add('arrow-right', 'option');
  const p = document.createElement('p');
  p.classList.add('info');
  keyboardWrapp.appendChild(p);
  p.innerText = 'Клавиатура создана в операционной системе Windows Для переключения языка используйте клавишу "Lang"';
}

createHtml();

const keys = document.querySelectorAll('.key');
const space = document.querySelector('.space');
const shiftLeft = document.querySelector('.shift-left');
const shiftRight = document.querySelector('.shift-right');
const capsLock = document.querySelector('.caps-lock');
const arrowTop = document.querySelector('.arrow-top');
const arrowRight = document.querySelector('.arrow-right');
const arrowBottom = document.querySelector('.arrow-bottom');
const arrowLeft = document.querySelector('.arrow-left');
const enter = document.querySelector('.enter');
const tab = document.querySelector('.tab');
const backspace = document.querySelector('.backspace');
const del = document.querySelector('.delete');
const ctrlLeft = document.querySelector('.ctrl-left');
const ctrlRight = document.querySelector('.ctrl-right');
const altLeft = document.querySelector('.alt-left');
const altRight = document.querySelector('.alt-right');
const lang = document.querySelector('.lang');
const phisicalKeyboard = () => {
  window.addEventListener('keydown', (e) => {
    for (let i = 0; i < keys.length; i += 1) {
      if (e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('LowerCaseName')) {
        keys[i].classList.add('active');
        input.value += keys[i].innerText;
      }
    }
    if (e.code === 'Space') {
      space.classList.add('active');
      input.value += '';
    }
    if (e.code === 'ShiftLeft') {
      shiftLeft.classList.add('active');
      shiftRight.classList.remove('active');
    }
    if (e.code === 'ShiftRight') {
      shiftRight.classList.add('active');
      shiftLeft.classList.remove('active');
    }
    if (e.code === 'CapsLock') {
      capsLock.classList.toggle('active');
      keyboardWrapp.classList.toggle('uppercase');
      e.preventDefault();
    }
    if (e.code === 'ArrowUp') {
      arrowTop.classList.add('active');
      input.value += '↑';
    }
    if (e.code === 'ArrowRight') {
      arrowRight.classList.add('active');
      input.value += '→';
    }
    if (e.code === 'ArrowDown') {
      arrowBottom.classList.add('active');
      input.value += '↓';
    }
    if (e.code === 'ArrowLeft') {
      arrowLeft.classList.add('active');
      input.value += '←';
    }
    if (e.code === 'Enter') {
      enter.classList.add('active');
      input.value += '\n';
    }
    if (e.code === 'Tab') {
      tab.classList.toggle('removed');
      input.value += '\t';
      e.preventDefault();
    }
    if (e.code === 'Backspace') {
      backspace.classList.add('active');
    }
    if (e.code === 'Delete') {
      del.classList.add('active');
      input.value += '';
    }
    if (e.code === 'AltLeft') {
      altLeft.classList.add('active');
    }
    if (e.code === 'AltRight') {
      altRight.classList.add('active');
    }
    if (e.code === 'ControlLeft') {
      ctrlLeft.classList.add('active');
    }
    if (e.code === 'ControlRight') {
      ctrlRight.classList.add('active');
    }
  });

  window.addEventListener('keyup', (e) => {
    for (let i = 0; i < keys.length; i += 1) {
      if (e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('LowerCaseName')) {
        keys[i].classList.remove('active');
        keys[i].classList.toggle('removed');
      }
    }

    if (e.code === 'Space') {
      space.classList.remove('active');
      space.classList.toggle('removed');
    }
    if (e.code === 'CapsLock') {
      capsLock.classList.remove('active');
      capsLock.classList.add('removed');
    }
    if (e.code === 'ShiftLeft') {
      shiftLeft.classList.remove('active');
    }
    if (e.code === 'ShiftRight') {
      shiftRight.classList.remove('active');
    }
    if (e.code === 'ArrowUp') {
      arrowTop.classList.remove('active');
      arrowTop.classList.toggle('removed');
    }
    if (e.code === 'ArrowRight') {
      arrowRight.classList.remove('active');
      arrowRight.classList.toggle('removed');
    }
    if (e.code === 'ArrowDown') {
      arrowBottom.classList.remove('active');
      arrowBottom.classList.toggle('removed');
    }
    if (e.code === 'ArrowLeft') {
      arrowLeft.classList.remove('active');
      arrowLeft.classList.toggle('removed');
    }
    if (e.code === 'Enter') {
      enter.classList.remove('active');
      enter.classList.toggle('removed');
    }
    if (e.code === 'Backspace') {
      backspace.classList.remove('active');
      backspace.classList.toggle('removed');
    }
    if (e.code === 'Delete') {
      del.classList.remove('active');
      del.classList.toggle('removed');
    }
    if (e.code === 'AltLeft') {
      altLeft.classList.remove('active');
      altLeft.classList.toggle('removed');
    }
    if (e.code === 'AltRight') {
      altRight.classList.remove('active');
      altRight.classList.toggle('removed');
    }
    if (e.code === 'ControlLeft') {
      ctrlLeft.classList.remove('active');
      ctrlLeft.classList.toggle('removed');
    }
    if (e.code === 'ControlRight') {
      ctrlRight.classList.remove('active');
      ctrlRight.classList.toggle('removed');
    }
  });
};

phisicalKeyboard();

function virtualKeyboard() {
  for (let i = 0; i < keys.length; i += 1) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('LowerCaseName', keys[i].innerText.toLowerCase());
    keys[i].addEventListener('mousedown', () => {
      input.value += keys[i].innerText;
      keys[i].classList.add('active');
    });
    keys[i].addEventListener('mouseup', () => {
      keys[i].classList.remove('active');
    });
  }
  space.addEventListener('click', () => {
    input.value += ' ';
  });

  keys.forEach((key) => {
    key.addEventListener('click', function q() {
      if (this.classList.contains('caps-lock')) {
        keyboardWrapp.classList.toggle('uppercase');
      }
    });
  });

  tab.addEventListener('click', () => {
    input.value += '\t';
    input.focus();
  });

  enter.addEventListener('click', () => {
    input.value += '\n';
    input.focus();
  });

  backspace.addEventListener('click', () => {
    input.setRangeText('', input.selectionStart - 1, input.selectionEnd);
    input.focus();
  });

  del.addEventListener('click', () => {
    input.setRangeText('', input.selectionStart, input.selectionEnd + 1);
    input.focus();
  });
}

virtualKeyboard();

function changeLanguage() {
  const key = document.querySelectorAll('.key');
  key.forEach((item) => {
    if (!item.classList.contains('option')) {
      item.classList.add('symbol');
    }
  });
  const symbol = document.querySelectorAll('.symbol');
  const arrRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.'];
  const arrEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];
  keyboardWrapp.classList.toggle('language');
  if (keyboardWrapp.classList.contains('language')) {
    for (let i = 0; i < arrRu.length; i += 1) {
      symbol[i].innerText = arrRu[i];
      localStorage.setItem(symbol[i].innerText, arrRu[i]);
    }
  } else {
    for (let i = 0; i < arrEng.length; i += 1) {
      symbol[i].innerText = arrEng[i];
      localStorage.setItem(symbol[i].innerText, arrEng[i]);
    }
  }
}

lang.addEventListener('click', changeLanguage);
