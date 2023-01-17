var pennyCount = 0;
var nickelCount = 0;
var dimeCount = 0;
var quarterCount = 0;

function initialize()
{
    penny = document.getElementById("penny");
    nickel = document.getElementById("nickel");
    dime = document.getElementById("dime");
    quarter = document.getElementById("quarter");
    total = document.getElementById("total");

    pennyValue = document.getElementById("pennyValue")
    nickelValue = document.getElementById("nickelValue")
    dimeValue = document.getElementById("dimeValue")
    quarterValue = document.getElementById("quarterValue")
    totalValue = document.getElementById("totalValue")
    display();
}

function addCoin (whichCoin)
{
    switch(whichCoin)
    {
        case 1:
            pennyCount++;  
            break;

        case 5:
            nickelCount++;
            break;

        case 10:
            dimeCount++;
            break;

        case 25:
            quarterCount++;
            break;

        default:
            break;
    }
    console.log(pennyCount);
    display();
}

function subCoin(whichCoin)
{
    switch (whichCoin)
    {
        case 1:
            if (pennyCount > 0) {pennyCount--;}
            break;

        case 5:
            if (nickelCount > 0) {nickelCount--;}
            break;
        
        case 10:
            if (dimeCount > 0) {dimeCount--;}
            break;
        
        case 25:
            if (quarterCount > 0) {quarterCount--;}
            break;
        
        default:
            display();
            break;
    }
    display();
}

function display()
{
    penny.innerHTML = "Your total penny count is: " + pennyCount;
    nickel.innerHTML = "Your total nickel count is: " + nickelCount;
    dime.innerHTML = "Your total dime count is: " + dimeCount;
    quarter.innerHTML = "Your total quarter count is: " + quarterCount;
    total.innerHTML = "Your total coin count is: " + (pennyCount + nickelCount + dimeCount + quarterCount);

    let pennyValueFloat = pennyCount / 100;
    pennyValue.innerHTML = "Your total penny amount is $" + pennyValueFloat;

    let nickelValueFloat = nickelCount / 20;
    nickelValue.innerHTML = "Your total nickel amount is $" + nickelValueFloat;

    let dimeValueFloat = dimeCount / 10;
    dimeValue.innerHTML = "Your total dime amount is $" + dimeValueFloat;

    let quarterValueFloat = quarterCount / 4;
    quarterValue.innerHTML = "Your total quarter amount is $" + quarterValueFloat;

    let totalValueFloat = (pennyCount + (nickelCount * 5) + (dimeCount* 10) + (quarterCount * 25)) / 100;
    totalValue.innerHTML = "Your total coin amount is $" + totalValueFloat;

}
