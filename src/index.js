import './style.css';

const content = document.getElementById('content');
const nav = document.createElement('nav');
const navTitle = document.createElement('h2');
const navLinks = document.createElement('div');
const home = document.createElement('div');
const menu = document.createElement('div');
const contact = document.createElement('div');

navTitle.classList.add('nav-title');
navTitle.textContent = 'Kappu Keiki';

navLinks.classList.add('nav-links');

home.classList.add('nav-link');
home.textContent = 'Home';

menu.classList.add('nav-link');
menu.textContent = 'Menu';

contact.classList.add('nav-link');
contact.textContent = 'Contact';

navLinks.appendChild(home);
navLinks.appendChild(menu);
navLinks.appendChild(contact);

nav.appendChild(navTitle);
nav.appendChild(navLinks);

content.appendChild(nav);

function homepage() {
  
  const header = document.createElement('header');
  const titleBox = document.createElement('div');
  const title = document.createElement('h1');
  const logo = document.createElement('img');
  const infoBox = document.createElement('div');
  const aboutUs = document.createElement('p');
  const quote = document.createElement('p');

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

homepage();