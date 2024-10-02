// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
    $w.onReady(function () {
        $w("#trackButton").onClick(() => {
            let trackingNumber = $w("#trackingInput").value;
    
            // Change state based on the tracking number
            if (trackingNumber === "12345") {
                $w("#multiStateBox").changeState("State1"); // In transit
            } else if (trackingNumber === "67890") {
                $w("#multiStateBox").changeState("State2"); // Delivered
            } else {
                $w("#multiStateBox").changeState("State3"); // Preparing for shipping
            }
        });
    });
    
});
