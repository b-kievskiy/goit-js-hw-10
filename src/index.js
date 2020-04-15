import products from './menu.json';
import productTmpl from './templates/product.hbs';
import './templates/theme.js';
import './styles.css';

const refs = document.querySelector('.js-menu');

buildProductsFeed(products);

function buildProductsFeed(products) {
  const markup = products.map(product => productTmpl(product)).join('');

  refs.insertAdjacentHTML('beforeend', markup);
}
