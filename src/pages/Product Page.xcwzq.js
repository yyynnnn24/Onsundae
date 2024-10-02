// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {

    loadProducts();

    $w('#repeater').onItemReady(($item, itemData, index) => {
        $item('#addToCartButton').onClick(() => {
            addToCart(itemData);
        });
 
    });
});

    function loadProducts() {
        wixData.query('Products')
            .find()
            .then((results) => {
                $w('#repeater').data = results.items;
    
                $w('#repeater').forEachItem(($item, itemData, index) => {
                    $item('#productImage').src = itemData.image;
                    $item('#productName').text = itemData.name;
                    $item('#productPrice').text = `RM ${itemData.price.toFixed(2)}`;
                });
            })
            .catch((err) => {
                console.error('Error loading products:', err);
            });
    }

    function addToCart(product) {
        
        $w('#shoppingCartIcon1').addProductToCart(product._id)
            .then(() => {
                console.log(`${product.name} was added to the cart`);
            })
            .catch((err) => {
                console.error('Error adding to cart:', err);
            });
    }
    
});
