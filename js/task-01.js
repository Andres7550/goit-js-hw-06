const categoriesList = document.getElementById('categories');
const categories = categoriesList.querySelectorAll('li.item');
let categoryCount = 0;
categories.forEach(category => {
    categoryCount++;
    const categoryTitle = category.querySelector('h2').textContent;
    const elements = category.querySelectorAll('ul li');
    const elementsCount = elements.length;
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${elementsCount}`);
});