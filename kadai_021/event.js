const btn = document.getElementById('btn');
const newText = document.getElementById('text');

btn.addEventListener('click', () => {
  setTimeout(() => {
    newText.textContent = 'ボタンをクリックしました';
  }, 2000);
});