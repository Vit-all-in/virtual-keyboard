/* eslint-disable linebreak-style */
import './style.css';

const body = document.querySelector('body');
const container = document.createElement('div');
const keyboardWrapp = document.createElement('div');
const keyboardKeys = document.createElement('div');
const input = document.createElement('textarea');
const numberArr = ['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'];
const tabArr = ['', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'];
const capsArr = ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', ''];
const shiftArr = ['', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '^', ''];
const ctrlArr = ['CTRL', 'Win', 'Alt', '', 'Alt', 'CTRL', '<', '^', '>'];
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
  const keys = document.querySelectorAll('.key');
  keys[13].classList.add('backspace');
  keys[14].classList.add('tab');
  keys[27].classList.add('slash');
  keys[28].classList.add('delete');
  keys[29].classList.add('caps-lock');
  keys[41].classList.add('enter');
  keys[42].classList.add('shift', 'shift-left');
  keys[54].classList.add('shift', 'shift-right');
  keys[53].classList.add('arrow-top');
  keys[55].classList.add('ctrl', 'ctrl-left');
  keys[56].classList.add('win');
  keys[57].classList.add('alt', 'alt-left');
  keys[58].classList.add('space');
  keys[59].classList.add('alt', 'alt-right');
  keys[60].classList.add('ctrl', 'ctrl-right');
  keys[61].classList.add('arrow-left');
  keys[62].classList.add('arrow-bottom');
  keys[63].classList.add('arrow-right');
}

createHtml();
