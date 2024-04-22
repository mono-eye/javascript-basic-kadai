/*=====================================
event.js
=====================================*/

// btnというidを持つHTML要素を取得し、定数に代入する
//idのtextを取得まではできています、
//こちらを定数に代入し、指定の動きをさせます。

const addBtn = document.getElementById('btn');
const text = document.getElementById('text');

addBtn.addEventListener('click', () => {
 
 if(document.getElementById){
  document.getElementById('text').innerText = 'ボタンをクリックしました';
 }

});