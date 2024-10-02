// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
        
        loadProducts();
    
        // Sort products when the dropdown value changes
        $w('#sortDropdown').onChange(() => {
            loadProducts($w('#sortDropdown').value);
        });
    });
    
    function loadProducts(sortBy = 'name') {
        
        wixData.query('Products')
            .ascending(sortBy)
            .find()
            .then((results) => {
                
                $w('#repeater').data = results.items;
    
                
                $w('#repeater').forEachItem(($item, itemData, index) => {
                    $item('#productImage').src = itemData.image;
                    $item('#productName').text = itemData.name;
                    $item('#productPrice').text = `RM ${itemData.price.toFixed(2)}`;
                    $item('#productCategory').text = itemData.category;
                });
            })
            .catch((err) => {
                console.error('Error loading products:', err);
            });
    }