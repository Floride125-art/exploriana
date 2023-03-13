const searchBox = document.querySelector('.search-box');
const searchIcon = searchBox.querySelector('i');
const inputBox = searchBox.querySelector('input');

searchIcon.addEventListener('click', () => {
	searchBox.classList.toggle('active');
	inputBox.focus();
});
