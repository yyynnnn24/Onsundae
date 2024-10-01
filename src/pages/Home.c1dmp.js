$w.onReady(function () {
    // Add the heading element
    const heading = $w("#text36");
    heading.text = "Bring Your Gelato Dreams to Life";
    heading.font = "Poppins";
    heading.fontSize = 86;
    heading.color = "#404040";


    const button = $w("#button8");
    button.label = "Explore Now";
    button.color = "FFB83C";
    button.font = "Wix Madefor Text";
    button.fontSize = "25";
    button.onClick(() => {
        wixLocation.to("/Services");


    const button = $w("#button5");
    button.label = "About Us";
    button.color = "FFB83C";
    button.font = "Poppins Extra Light";
    button.fontSize = "20";
    button.onClick(() => {
        wixLocation.to("/About");


    const button = $w("#button9");
    button.label = "Find Us";
    button.color = "FFB83C";
    button.font = "Poppins Extra Light";
    button.fontSize = "20";
    button.onClick(() => {
        wixLocation.to("/Contact Us");


    const heading = $w("#text25");
    heading.text = "We don’t just offer gelato, we create joyful experiences. Let us help you craft a unique dessert story!";
    heading.font = "Poppins Extra Light";
    heading.fontSize = 39;
    heading.color = "#404040";
});

