import './style.css';
import reviewData from './csvs/reviews.csv';
import hoursData from './csvs/hours.csv';
import menuData from './csvs/menu-items.csv'
import logo from './imgs/logo-img.png';


// Loads header header
const [reviewsData, reviewAuthors] = [...reviewData];
const [days, times] = [...hoursData];
const [coffees, coffeePrices, teas, teaPrices, breakfasts, breakfastPrices, desserts, dessertPrices] = [...menuData];
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

  // Logo
  const menuSection = document.createElement('section');
  const mainLogo = new Image();
  mainLogo.src = logo;

  // Coffee Menu
  const coffeeMenu = document.createElement('div');
  const coffeeTitleBox = document.createElement('div');
  const coffeeTopLine = document.createElement('div');
  const coffeeTitle = document.createElement('h2');
  const coffeeBotLine = document.createElement('div');
  const coffeeMenuItems = document.createElement('div');
  
  for (let i = 0; i < coffees.length; i++) {
    const menuItem = document.createElement('div');
    const item = document.createElement('p');
    const price = document.createElement('p');

    menuItem.classList.add('menu-item');
    item.classList.add('item');
    price.classList.add('price');

    item.textContent = `${coffees[i]}`;
    price.textContent = `${coffeePrices[i]}`;

    menuItem.appendChild(item);
    menuItem.appendChild(price);
    coffeeMenuItems.appendChild(menuItem);
  }

  menuSection.classList.add('menu-section');
  mainLogo.classList.add('logo');
  coffeeMenu.classList.add('menu-box');
  coffeeTitleBox.classList.add('menu-title-box');
  coffeeTitle.classList.add('menu-title');
  coffeeTopLine.classList.add('menu-line');
  coffeeBotLine.classList.add('menu-line');

  coffeeTitle.textContent = 'Coffee';

  coffeeTitleBox.appendChild(coffeeTopLine);
  coffeeTitleBox.appendChild(coffeeTitle);
  coffeeTitleBox.appendChild(coffeeBotLine);
  coffeeMenu.appendChild(coffeeTitleBox);
  coffeeMenu.appendChild(coffeeMenuItems);

  // Tea Menu
  const teaMenu = document.createElement('div');
  const teaTitleBox = document.createElement('div');
  const teaTopLine = document.createElement('div');
  const teaTitle = document.createElement('h2');
  const teaBotLine = document.createElement('div');
  const teaMenuItems = document.createElement('div');
  
  for (let i = 0; i < teas.length; i++) {
    const menuItem = document.createElement('div');
    const item = document.createElement('p');
    const price = document.createElement('p');

    menuItem.classList.add('menu-item');
    item.classList.add('item');
    price.classList.add('price');

    item.textContent = `${teas[i]}`;
    price.textContent = `${teaPrices[i]}`;

    menuItem.appendChild(item);
    menuItem.appendChild(price);
    teaMenuItems.appendChild(menuItem);
  }

  menuSection.classList.add('menu-section');
  mainLogo.classList.add('logo');
  teaMenu.classList.add('menu-box');
  teaTitleBox.classList.add('menu-title-box');
  teaTitle.classList.add('menu-title');
  teaTopLine.classList.add('menu-line');
  teaBotLine.classList.add('menu-line');
  
  teaTitle.textContent = 'Tea';

  teaTitleBox.appendChild(teaTopLine);
  teaTitleBox.appendChild(teaTitle);
  teaTitleBox.appendChild(teaBotLine);
  teaMenu.appendChild(teaTitleBox);
  teaMenu.appendChild(teaMenuItems);

  // Breakfast Menu
  const breakfastMenu = document.createElement('div');
  const breakfastTitleBox = document.createElement('div');
  const breakfastTopLine = document.createElement('div');
  const breakfastTitle = document.createElement('h2');
  const breakfastBotLine = document.createElement('div');
  const breakfastMenuItems = document.createElement('div');
  
  for (let i = 0; i < teas.length; i++) {
    const menuItem = document.createElement('div');
    const item = document.createElement('p');
    const price = document.createElement('p');

    menuItem.classList.add('menu-item');
    item.classList.add('item');
    price.classList.add('price');

    item.textContent = `${breakfasts[i]}`;
    price.textContent = `${breakfastPrices[i]}`;

    menuItem.appendChild(item);
    menuItem.appendChild(price);
    breakfastMenuItems.appendChild(menuItem);
  }

  breakfastMenu.classList.add('menu-box');
  breakfastTitleBox.classList.add('menu-title-box');
  breakfastTitle.classList.add('menu-title');
  breakfastTopLine.classList.add('menu-line');
  breakfastBotLine.classList.add('menu-line');
  
  breakfastTitle.textContent = 'Breakfast';

  breakfastTitleBox.appendChild(breakfastTopLine);
  breakfastTitleBox.appendChild(breakfastTitle);
  breakfastTitleBox.appendChild(breakfastBotLine);
  breakfastMenu.appendChild(breakfastTitleBox);
  breakfastMenu.appendChild(breakfastMenuItems);

  // Bakery Menu
  const dessertMenu = document.createElement('div');
  const dessertTitleBox = document.createElement('div');
  const dessertTopLine = document.createElement('div');
  const dessertTitle = document.createElement('h2');
  const dessertBotLine = document.createElement('div');
  const dessertMenuItems = document.createElement('div');
  
  for (let i = 0; i < desserts.length; i++) {
    const menuItem = document.createElement('div');
    const item = document.createElement('p');
    const price = document.createElement('p');

    menuItem.classList.add('menu-item');
    item.classList.add('item');
    price.classList.add('price');

    item.textContent = `${desserts[i]}`;
    price.textContent = `${dessertPrices[i]}`;

    menuItem.appendChild(item);
    menuItem.appendChild(price);
    dessertMenuItems.appendChild(menuItem);
  }

  dessertMenu.classList.add('menu-box');
  dessertTitleBox.classList.add('menu-title-box');
  dessertTitle.classList.add('menu-title');
  dessertTopLine.classList.add('menu-line');
  dessertBotLine.classList.add('menu-line');
  
  dessertTitle.textContent = 'Breakfast';

  dessertTitleBox.appendChild(dessertTopLine);
  dessertTitleBox.appendChild(dessertTitle);
  dessertTitleBox.appendChild(dessertBotLine);
  dessertMenu.appendChild(dessertTitleBox);
  dessertMenu.appendChild(dessertMenuItems);

  menuSection.appendChild(mainLogo);
  menuSection.appendChild(coffeeMenu);
  menuSection.appendChild(teaMenu);
  menuSection.appendChild(breakfastMenu);
  menuSection.appendChild(dessertMenu);
  content.appendChild(menuSection);
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

menuPage();