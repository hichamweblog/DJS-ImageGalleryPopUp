const galleryEl = document.querySelector('.gallery');
const imgContainersEl = document.querySelectorAll('.img-container');
const modalEl = document.querySelector('.modal');
const fullImgEl = document.querySelector('.full-img');

galleryEl.addEventListener('click', showModal);
modalEl.addEventListener('click', hideModal);
document.addEventListener('keyup', hideModal);

// Show modal with full image when an image in the gallery is clicked
function showModal(e) {
	if (e.target.tagName === 'IMG') {
		fullImgEl.classList.add('open');
		fullImgEl.src = `img/full/${e.target.id}.jpg`;
		modalEl.classList.add('open');
	}
}
// Hide modal when the background is clicked
function hideModal(e) {
	if (
		modalEl.classList.contains('open') &&
		(e.target === modalEl || e.key === 'Escape' || e.code === 'Escape')
	) {
		fullImgEl.classList.remove('open');
		modalEl.classList.remove('open');
	}
}
