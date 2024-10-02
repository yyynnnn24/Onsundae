// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
    
    $w('#title').text = "Reach Out to Us!";

    
    $w('#formBox').backgroundColor = "#ADD8E5";

    
    $w('#submitButton').onClick(() => {
        
        const firstName = $w('#firstName').value;
        const lastName = $w('#lastName').value;
        const email = $w('#email').value;
        const phone = $w('#phone').value;
        const message = $w('#message').value;

        
        if (firstName && lastName && email && phone && message) {
            
            console.log("Form submitted:", { firstName, lastName, email, phone, message });
            
            $w('#formBox').collapse(); 
            $w('#successMessage').text = "Thanks, we received your submission."
            $w('#successMessage').show(); 
        } else {
            
            console.log("Please fill out all fields.");
            $w('#errorMessage').show(); 
        }
    });
});