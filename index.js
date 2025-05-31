let profile = {name:"Charlie", age:29, address:{city:"San francisco", Zipcode:"94101"}};
let updates = { age: 30, address: { zipcode: "94109", country: "USA" } };
let new_obj = {...profile,...updates};
console.log(new_obj);