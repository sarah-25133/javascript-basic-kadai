const btn = document.getElementById('btn');
const textElement = document.getElementById('text');

btn.addEventListener('click', () => {
  textElement.textContent = 'ボタンをクリックしました！';
});