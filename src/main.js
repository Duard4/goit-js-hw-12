import { ImageSearch } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');
const search = document.querySelector('.search_bar');
const loader = document.querySelector('.loader');
const loadButton = document.querySelector('.load');
const gallery = document.querySelector('.gallery');

const source = 'https://pixabay.com/api/?';
const options = new URLSearchParams({
	key: '46749030-b6cef6a6b69e043ecf4444c1b',
	image_type: 'photo',
	orientation: 'horizontal',
	per_page: 12,
});

const noMatchError =
	'Sorry, there are no images matching your search query. Please try again!';
const collectionEndError =
	"We're sorry, but you've reached the end of search results.";
const dispatchEvent = array =>
	document.dispatchEvent(new CustomEvent('imagesFetched', { detail: array }));

let page;

form.addEventListener('submit', event => {
	event.preventDefault();
	let searchValue = search.value.trim();
	if (!searchValue) return;

	page = 1;
	gallery.innerHTML = '';
	options.set('page', page);
	options.set('q', searchValue);
	loader.style.display = 'block';

	ImageSearch(source, options)
		.then(posts => {
			loadButton.style.display = 'block';
			handleImageSearch(posts);
			clear();
		})
		.catch(error => {
			raiseError(error);
			clear();
		});
});

loadButton.addEventListener('click', () => {
	options.set('page', ++page);
	ImageSearch(source, options)
		.then(posts => {
			handleImageSearch(posts);
		})
		.catch(error => {
			raiseError(error);
			clear();
		});
});

document.addEventListener('imagesFetched', event => {
	renderGallery(event.detail);
});

function handleImageSearch(posts) {
	if (posts.total) {
		dispatchEvent(posts.hits);
		if (
			parseInt(options.get('per_page')) * parseInt(options.get('page')) >
			posts.total
		) {
			loadButton.style.display = 'none';
			raiseInfo(collectionEndError);
		}
		console.log(posts);
	} else {
		loadButton.style.display = 'none';
		console.log(posts);
		raiseError(noMatchError);
	}
}

function raiseError(error) {
	iziToast.error({
		message: error,
		position: 'topRight',
		color: 'red',
		theme: 'dark',
	});
}

function raiseInfo(info) {
	iziToast.error({
		message: info,
		position: 'topRight',
		color: 'blue',
		theme: 'dark',
	});
}

function clear() {
	loader.style.display = 'none';
	search.value = '';
}
