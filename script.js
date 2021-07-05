//Hey Kiddo
const ageCheck = function(number) {
  console.log("Age check..");
  console.log ("age: ",number);
  if (number >= 18) {
      return "true";
  }
  console.log ("age: ",number);
  return "false";
};

const adultAgeCheck = function(number) {
  console.log("Adult check..");
  console.log ("The age is above 18");
  if (number  >= 18) {
      return "Hello there";
  }
  console.log ("The age is under 18");
  return "Hey kiddo";
};


const doAgeCheck = function(number) {
  const adultAge = ageCheck(number);
  const adultChecker = adultAgeCheck(number);
  
  return adultChecker;
};

console.log(doAgeCheck(67));


// VAT exercise 1 
const totalPrice = function(basicprice, vat) {
  const calculateVat = basicprice * vat;
  return calculateVat;
}

  const price1 = function() {
  const totalPrice = calculateVat + basicprice;
    return totalPrice
}
console.log(totalPrice(6,0.21));

// VAT exercise 2
????
