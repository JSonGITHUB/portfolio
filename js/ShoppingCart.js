function ShoppingCartClass () {
    this.total=0;
    this.items=0;
    document.write("<div class='shoppingCart'>SHOPPING CART</div>");
}

ShoppingCartClass.prototype = {
    constructor: ShoppingCartClass,
    
    addStuff:function(product, type, amount, dollars, cents) {
		console.log(product + ", " + type + ", " + amount + ", " + dollars + ", " + cents);

	},
    addItem:function (amount)  {
    	var count = amount;
    	while (count>0) {
    		this.items++
    		count--
    	}
    },
    removeItem:function (amount)  {
    	var count = amount;
    	while (count>0) {
    		this.items--
    		count--
    	}
    }

}