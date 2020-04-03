function calculatePrice() {
    var hairDyePrice = 3.37; //1ml
    var oxygenPrice = 0.35; //1ml
    var shampooPrice = 0.35; //1ml
    var conditionerPrice = 0.46; //1ml
    var towelPrice = 2.5; //1 item
    var glovesPrice = 3; //1 pair
    var powderPrice = 1; //1g
    var foilPrice = 0.8; //1m
    var customerFoilPrice = 2; //1m
    hairLength  = document.getElementById("hairLength").value;
    switch (hairLength) {
        case "length2":
            price = (shampooPrice * 30) + (conditionerPrice * 20) + glovesPrice; 
            break;
        case "length3":
            price = (shampooPrice * 50) + (conditionerPrice * 20) + glovesPrice;
            break;  
        case "length4":
            price = (shampooPrice * 60) + (conditionerPrice * 40) + glovesPrice;
            break;
        case "length5":
            price = (shampooPrice * 70) + (conditionerPrice * 50) + glovesPrice;
            break;
        default:
            price = (shampooPrice * 20) + (conditionerPrice * 10) + glovesPrice;
    }
    switch (hairLength) {
        case "length2":
            customerPrice = (shampooPrice * 30 * 2.86) + (conditionerPrice * 20 * 2.86) + (glovesPrice * 2); 
            break;
        case "length3":
            customerPrice = (shampooPrice * 50 * 2.86) + (conditionerPrice * 20 * 2.86) + (glovesPrice * 2);
            break;  
        case "length4":
            customerPrice = (shampooPrice * 60 * 2.86) + (conditionerPrice * 40 * 2.86) + (glovesPrice * 2);
            break;
        case "length5":
            customerPrice = (shampooPrice * 70 * 2.86) + (conditionerPrice * 50 * 2.86) + (glovesPrice * 2);
            break;
        default:
            customerPrice = (shampooPrice * 20 * 2.86) + (conditionerPrice * 10 * 2.86) + (glovesPrice * 2);
    }
    hairDyeQuantity = document.getElementById("hairDyeQuantity").value;
    foilQuantity  = document.getElementById("foilQuantity").value;
    towelQuantity = document.getElementById("towelQuantity").value;
    oxygenQuantity = document.getElementById("oxygenQuantity").value;
    powderQuantity = document.getElementById("powderQuantity").value;
    finalPrice = parseFloat (foilQuantity * foilPrice) + parseFloat (towelQuantity * towelPrice) + parseFloat (hairDyeQuantity * hairDyePrice) + 
    parseFloat (oxygenQuantity * oxygenPrice) + parseFloat (powderQuantity + powderPrice) + price;
    var finalPriceBeautiful = finalPrice.toFixed(2);
    document.getElementById("finalPrice").innerHTML = "<p style='color:red; margin-left: 10px;'> Моя стоимость :</p>"+ "<p style='margin-left: 20px; font-weight: bold;'>" + finalPriceBeautiful +" грн.</p>";
    customerFinalPrice = parseFloat (foilQuantity * customerFoilPrice) + parseFloat (towelQuantity * towelPrice * 2) +
    parseFloat (hairDyeQuantity * hairDyePrice * 2) + parseFloat (oxygenQuantity * oxygenPrice * 2) + 
    parseFloat (powderQuantity + powderPrice * 2) + customerPrice ;
    var customerFinalPriceBeautiful = customerFinalPrice.toFixed(2);
    document.getElementById('customerFinalPrice').innerHTML = "<p style='color:red; margin-left: 10px;' >Стоимость :</p>"+ "<p style='margin-left: 20px; font-weight: bold; height: 150px;'>" + customerFinalPriceBeautiful + " грн.</p>";
}
