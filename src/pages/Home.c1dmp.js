$w.onReady(function () {
    // Add the heading element
    const heading = $w("#text36");
    heading.text = "Bring Your Gelato Dreams to Life";
    heading.font = "Poppins";
    heading.fontSize = 86;
    heading.color = "#404040";

    const button = $w("#button8");
    button.label = "Our Services";
    button.onClick(() => {
        wixLocation.to("/Services");
});

