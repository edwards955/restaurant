function loadPage() {
  const content = document.querySelector('#content');
  const headline = document.createElement('h1');
  headline.textContent = `Zaxby's`;
  const mainParagraph = document.createElement('p');
  mainParagraph.textContent = `This chicken is the best chicken in the Southeast United States`;
  content.appendChild(headline);
  content.appendChild(mainParagraph);
}

export { loadPage };