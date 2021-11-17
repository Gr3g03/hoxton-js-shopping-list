
// We want you to create a shopping list price displayer. You should be able to see in a list each item followed by its price!

// Instructions
// - Use these items and it's respective prices as a starting point: Milk at £1,20, Cocoa at £2,00, Salad at £2,00, Carrots at £2,00, Tomatoes at £2,50, Ready meals at £ 5,00
// - Store this information using the most appropriated data structures we've studied so far
// - Have a prompt to add an item to the list (you can have two prompts for the item and its price)
// - Output a list displaying each item and its price
// - Output the total at the end

let items = ["Milk " , "Cocoa ", "Salad ", "Carrots " , "Tomatos " , "Ready Meals "]
let prices = ["1.20", "2.00", "2.00", "2.00", "2.50", "5.00"]


let addItem = String( prompt(`Please add your item`))
let itemPrice = Number(prompt(`Please enter the price`))

items.push( addItem)
prices.push(itemPrice)

let finalPrice = 0

for(let i = 0; i < items.length; i++) {
   confirm( `${items[i]} ${prices[i]} `)
    // finalPrice= finalPrice + prices[i]
}



console.log(`Total price of products is : ${1.20 + 2.00+2.00+2.00+2.50+.00 + itemPrice}`)


if (Number.isNaN(itemPrice) ||typeof addItem !== "string"){
    alert(`please enter the right data type`)   
}

else{
  confirm(`this is the price and the shooping list` )
}


