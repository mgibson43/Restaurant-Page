import './style.css';

const content = document.getElementById('content');
const container = document.createElement('div');
const nav = document.createElement('nav');
const navTitle = document.createElement('h2');
const navLinks = document.createElement('div');
const home = document.createElement('div');
const menu = document.createElement('div');
const contact = document.createElement('div');

container.classList.add('nav-container');

navTitle.classList.add('nav-title');
navTitle.textContent = 'Kappu Keiki';

navLinks.classList.add('nav-links');

home.classList.add('nav-link');
home.classList.add('selected');
home.textContent = 'Home';
home.addEventListener('click', homepage);

menu.classList.add('nav-link');
menu.textContent = 'Menu';
menu.addEventListener('click', menuPage);

contact.classList.add('nav-link');
contact.textContent = 'Contact';
contact.addEventListener('click', contactPage);

navLinks.appendChild(home);
navLinks.appendChild(menu);
navLinks.appendChild(contact);

container.appendChild(navTitle);
container.appendChild(navLinks);

nav.appendChild(container);

content.before(nav);
const links = document.querySelectorAll('.nav-link');

function homepage() {
  content.innerHTML = '';

  const header = document.createElement('header');
  const titleBox = document.createElement('div');
  const title = document.createElement('h1');
  const logo = document.createElement('img');
  const infoBox = document.createElement('div');
  const aboutUs = document.createElement('p');
  const quote = document.createElement('p');
  

  links.forEach(link => {
    link.classList.remove('selected');
  });

  home.classList.add('selected');

  // logo.src = ""
  title.classList.add('title');
  title.textContent = 'Kappu Keiki';

  aboutUs.textContent = 'Kappu Keiki is the best (and only) Japanese style cafe in the city! At Kappu Keiki, we love our otaku and strive to serve the most drinkable coffee and completely eatable bakery products to our customers.'

  quote.textContent = '"Omae wa mou shindeiru" - Some buff dude';

  infoBox.appendChild(aboutUs);
  infoBox.appendChild(quote);

  titleBox.appendChild(title);
  titleBox.appendChild(logo);

  header.appendChild(titleBox);
  header.appendChild(infoBox);
  content.appendChild(header);
}

function menuPage() {
  content.innerHTML = '';

  links.forEach(link => {
    link.classList.remove('selected');
  });

  menu.classList.add('selected');
}

function contactPage() {
  content.innerHTML = '';

  links.forEach(link => {
    link.classList.remove('selected');
  });

  contact.classList.add('selected');
}

homepage();