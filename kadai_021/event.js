const btn = document.getElementById('btn');
const textElement = document.getElementById('text');

btn.addEventListener('click', () => {
  setTimeout(() => {
    textElement.textContent = 'ボタンをクリックしました！';
  }, 2000);
});