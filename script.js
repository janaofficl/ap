document.getElementById('searchBar').addEventListener('keyup', function() {
    const query = this.value.toLowerCase();
    const products = document.querySelectorAll('.products-container');

    products.forEach(product => {
        const productName = product.querySelector('.product-name').textContent.toLowerCase();
        if (productName.includes(query)) {
            product.style.display = 'block'; 
        } else {
            product.style.display = 'none'; 
        }
    });
});