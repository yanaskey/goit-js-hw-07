const categoriesEl = document.querySelector('#categories');
const categoryItemsEl = document.querySelectorAll('li.item');

function basicInfoAboutCategories(arrayEl) {
  categoryItemsEl.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
  });
}

console.log(`Number of categories: ${categoriesEl.children.length}`);
basicInfoAboutCategories(categoryItemsEl);
