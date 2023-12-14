function loadPage() {
  console.log('Check this out');
  const content = document.querySelector('#content');
  content.textContent = 'This is a test';
}

export { loadPage };