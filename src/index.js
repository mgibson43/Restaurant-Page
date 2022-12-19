import './style.css';

function homepage() {
  const content = document.getElementById('content');
  const header = document.createElement('header');
  const titleBox = document.createElement('div');
  const title = document.createElement('h1');
  const logo = document.createElement('img');
  const infoBox = document.createElement('div');
  const aboutUs = document.createElement('p');
  const quote = document.createElement('p');

  // logo.src = ""
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