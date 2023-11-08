// Define an array of products with name and price in US Dollars
const products = [
  {name: "Shirt", price: 10.99},
  {name: "Pants", price: 15.99},
  {name: "Shoes", price: 20.99}
];

// Define a function that converts the price in US Dollars to Indian Rupees
function convertToRupees(price) {
  return price * 80;
}

// Create a number formatter for US Dollars
const usdFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

// Create a number formatter for Indian Rupees
const inrFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR"
});

// Use map to create a new array with the formatted prices in both currencies
const formattedPrices = products.map(product => ({
  name: product.name,
  usdPrice: usdFormatter.format(product.price),
  inrPrice: inrFormatter.format(convertToRupees(product.price))
}));

// Print the result
console.log(formattedPrices);
/*
[
  { name: 'Shirt', usdPrice: '$10.99', inrPrice: '₹879.20' },
  { name: 'Pants', usdPrice: '$15.99', inrPrice: '₹1,279.20' },
  { name: 'Shoes', usdPrice: '$20.99', inrPrice: '₹1,679.20' }
]
*/
