const liItemsEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${liItemsEl.length}`);

liItemsEl.forEach(item => {
    const titleCategoryEl = item.querySelector("h2");
    const quantityItemEl = item.querySelectorAll("li");
    console.log(`Category: ${titleCategoryEl.textContent} \nElements: ${quantityItemEl.length}`);
})