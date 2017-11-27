var Product = ["Add", "Apples", "Salad", "Fruit", "Pasta", "Ketchup", "Tomato Sauce", "Tomatoes", "Squash", "Eggs", "Milk", "Juice", "Ranch", "Soy Ginger Dressing", "Mozerrella", "Parmesean", "Cheddar", "Pizza", "Cat Food", "Water"];
var Type = ["---", "frozen", "fresh", "dried", "powder", "seasoning", "chopped", "bag", "box", "bottle", "Seeds", "Plant"];
var Amount = [];
var dollars = [];
var cents = [];
//Object creation

var x=0;
for (x; x<=20;x++) {
  Amount[x] = x;
}
for (x=0; x<=30;x++) {
  dollars[x] = x;
}
for (x=0; x<=100;x++) {
  if (x<10) {
    cents[x] = String("0"+x);
  } else {
    cents[x] = x;
  }
  
}

function NewItemClass () {
  this.Product="";
  this.Type="";
  this.Amount="";
  this.dollars="";
  this.cents="";
}

NewItemClass.prototype = {

  constructor: NewItemClass,

  createContainer:function() {

    var x=0;
    
    document.write("<div class='item'>");

    for (var prop in this) {

      x++

      if (prop != "") {
        document.write("("+x+") ->" + prop);

      } else {
        
        if (prop == "dollars") {
          document.write(" $");
        } else if (prop == "cents") {
          document.write(".");
        } else {
          document.write(" " + prop + ": ");
        }
        
        document.write("<select>");
        
        var x=0;
        for(x=0; x<eval(prop).length; x++){
          document.write("<option value='"+eval(prop)[x]+"'>"+eval(prop)[x]+"</option>");
        }
      
        document.write("</select>");

      }

    }
    
    document.write("<span class='button' onclick='cart.addStuff(Product, Type, Amount, dollars, cents)'>ADD NEXT</span></div>");
  
  }

}