import './style.css';


// Loads header header
const content = document.getElementById('content');
const container = document.createElement('div');
const header = document.createElement('header');
const headerTitle = document.createElement('h2');
const headerLinks = document.createElement('div');
const home = document.createElement('div');
const menu = document.createElement('div');
const contact = document.createElement('div');

container.classList.add('header-container');

headerTitle.classList.add('header-title');
headerTitle.textContent = 'Kappu Keiki';
headerTitle.addEventListener('click', homepage);

headerLinks.classList.add('header-links');

home.classList.add('header-link');
home.classList.add('selected');
home.textContent = 'Home';
home.addEventListener('click', homepage);

menu.classList.add('header-link');
menu.textContent = 'Menu';
menu.addEventListener('click', menuPage);

contact.classList.add('header-link');
contact.textContent = 'Contact';
contact.addEventListener('click', contactPage);

headerLinks.appendChild(home);
headerLinks.appendChild(menu);
headerLinks.appendChild(contact);

container.appendChild(headerTitle);
container.appendChild(headerLinks);

header.appendChild(container);

content.before(header);
const links = document.querySelectorAll('.header-link');


// Loads homepage
function homepage() {
  content.innerHTML = '';

  links.forEach(link => {
    link.classList.remove('selected');
  });
  home.classList.add('selected');

  // Creates hero section
  const hero = document.createElement('div');
  const titleBox = document.createElement('div');
  const title = document.createElement('h1');
  const titleText = document.createElement('p');

  hero.classList.add('hero-section');
  title.classList.add('title');
  titleBox.classList.add('title-box');
  titleText.classList.add('title-text');

  title.textContent = 'Kappu Keiki';
  titleText.textContent = 'Authentic Japanese Style Cafe';

  titleBox.appendChild(title);
  titleBox.appendChild(titleText);

  hero.appendChild(titleBox);

  content.appendChild(hero);
}


// Loads menu page
function menuPage() {
  content.innerHTML = '';

  links.forEach(link => {
    link.classList.remove('selected');
  });

  menu.classList.add('selected');
}


// Loads contact page
function contactPage() {
  content.innerHTML = '';

  links.forEach(link => {
    link.classList.remove('selected');
  });

  contact.classList.add('selected');
}

homepage();