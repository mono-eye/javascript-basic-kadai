/*=====================================
event.js
=====================================*/

// btnというidを持つHTML要素を取得し、定数に代入する
const addBtn = document.getElementById('btn');

addBtn.addEventListener('click', () => {
 
 if(document.getElementById){
  document.getElementById('text').innerText = 'ボタンをクリックしました';
 }

});