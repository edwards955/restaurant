function loadPage() {
  const content = document.querySelector('#content');
  const headline = document.createElement('h1');
  headline.textContent = `Zaxby's`;
  const mainParagraph = document.createElement('p');
  mainParagraph.textContent = `This chicken is the best chicken in the Southeast United States`;

  const nav = document.createElement('ul');
  const navHome = document.createElement('li');
  navHome.textContent = 'Home';
  const navMenu = document.createElement('li');
  navMenu.textContent = 'Menu';
  const navContact = document.createElement('li');
  navContact.textContent = 'Contact';

  nav.appendChild(navHome);
  nav.appendChild(navMenu);
  nav.appendChild(navContact);

  content.appendChild(nav);
  content.appendChild(headline);
  content.appendChild(mainParagraph);
}

export { loadPage };