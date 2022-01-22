const btn = document.querySelector('#btn-share');
const social = document.querySelector('#share-social');

btn.addEventListener('click', function showSocial() {
  social.classList.toggle('hidden');
});
