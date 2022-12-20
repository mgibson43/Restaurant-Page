import './style.css';
import reviewData from './reviews.csv';
import hoursData from './hours.csv';


// Loads header header
const [reviewsData, reviewAuthors] = [...reviewData];
const [days, times] = [...hoursData];
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
  document.title = "Home | Kappu Keiki";

  // Creates hero section
  const hero = document.createElement('section');
  const titleBox = document.createElement('div');
  const title = document.createElement('h1');
  const titleText = document.createElement('p');

  hero.classList.add('hero-section');
  hero.classList.add('section-margin');
  title.classList.add('title');
  titleBox.classList.add('title-box');
  titleText.classList.add('title-text');

  title.textContent = 'Kappu Keiki';
  titleText.textContent = 'Authentic Japanese Style Cafe';

  titleBox.appendChild(title);
  titleBox.appendChild(titleText);

  hero.appendChild(titleBox);

  content.appendChild(hero);

  // Creates review section
  const reviewSection = document.createElement('section');
  const reviewHeaderBox = document.createElement('div');
  const reviewHeaderLeft = document.createElement('div');
  const reviewHeader = document.createElement('h2');
  const reviewHeaderRight = document.createElement('div');
  const reviewBox = document.createElement('div');

  for (let i = 0; i < reviewsData.length; i++) {
    const review = document.createElement('p');
    const reviewAuthor = document.createElement('p');
    const reviewCard = document.createElement('div');

    review.classList.add('review');
    reviewAuthor.classList.add('review-author');
    reviewCard.classList.add('review-card');

    review.textContent = reviewsData[i];
    reviewAuthor.textContent = `- ${reviewAuthors[i]}`;

    reviewCard.appendChild(review);
    reviewCard.appendChild(reviewAuthor);
    reviewBox.appendChild(reviewCard);
  }
  

  reviewSection.classList.add('review-section');
  reviewSection.classList.add('section-margin');
  reviewHeaderBox.classList.add('review-header-box');
  reviewHeaderLeft.classList.add('line');
  reviewHeader.classList.add('review-header');
  reviewHeaderRight.classList.add('line');
  reviewBox.classList.add('review-box');

  reviewHeader.textContent = 'Reviews'

  reviewHeaderBox.appendChild(reviewHeaderLeft);
  reviewHeaderBox.appendChild(reviewHeader);
  reviewHeaderBox.appendChild(reviewHeaderRight);

  reviewSection.appendChild(reviewHeaderBox);
  reviewSection.appendChild(reviewBox);

  content.appendChild(reviewSection);

  // Creates hours section
  const hoursSection = document.createElement('section');
  const hoursHeader = document.createElement('h2');
  const hoursBox = document.createElement('div');

  hoursSection.classList.add('hours-section');
  hoursHeader.classList.add('hours-header');
  hoursBox.classList.add('hours-box');

  hoursHeader.textContent = 'Our Hours';

  for (let i = 0; i < days.length; i++) {
    const hours = document.createElement('p');
    hours.classList.add('hours');
    hours.textContent = `${days[i]}: ${times[i]}`;
    hoursBox.appendChild(hours);
  }

  hoursSection.appendChild(hoursHeader);
  hoursSection.appendChild(hoursBox);

  content.appendChild(hoursSection);
}


// Loads menu page
function menuPage() {
  content.innerHTML = '';

  links.forEach(link => {
    link.classList.remove('selected');
  });
  menu.classList.add('selected');
  document.title = "Menu | Kappu Keiki";
}


// Loads contact page
function contactPage() {
  content.innerHTML = '';

  links.forEach(link => {
    link.classList.remove('selected');
  });
  contact.classList.add('selected');
  document.title = "Contact | Kappu Keiki";
}

homepage();