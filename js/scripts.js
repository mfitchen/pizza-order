// Business Logic
// Pizza Constructor
function Pizza(size) {
  this.pizzasize = size;
  this.pizzaingredients = [];
};

// Ingredients Prototype Method
Pizza.prototype.ingredients = function() {
  if(cheese === true) {
    this.pizzaingredients.push("Cheese");
  }

  if(pepperoni === true) {
    this.pizzaingredients.push("Pepperoni");
  }

  if(bellpeppers === true) {
    this.pizzaingredients.push("Bell Peppers");
  }

  if(canadianbacon === true) {
    this.pizzaingredients.push("Canadian Bacon");
  }

  if(pineapple === true) {
    this.pizzaingredients.push("Pineapple");
  }

  if(olives === true) {
    this.pizzaingredients.push("Olives");
  }

  if(mushrooms === true) {
    this.pizzaingredients.push("Mushrooms");
  }

  if(xcheese === true) {
    this.pizzaingredients.push("Extra Cheese");
  }

};

// Price Prototype Method
Pizza.prototype.price = function() {
  var price = 7;

  if(this.pizzasize === "Large") {
    price *= 3;
  } else if(this.pizzasize === "Medium") {
    price *= 2;
  } else {
    price *= 1;
  }

  if(this.pizzaingredients.length === 0) {
    price *= 1;
  } else {
    price += (this.pizzaingredients.length - 1);
  }

  return price;

};

// Front-End User Logic
$(document).ready(function() {
  $("form#pizza-order-form").submit(function(event) {
    event.preventDefault();

    var inputtedPizzaSize = $("select#pizza-size").val();

    var cheese = $("input:checkbox[name=cheese]:checked").val();
    var pepperoni = $("input:checkbox[name=pepperoni]:checked").val();
    var bellpeppers = $("input:checkbox[name=bell-peppers]:checked").val();
    var canadianbacon = $("input:checkbox[name=canadian-bacon]:checked").val();
    var pineapple = $("input:checkbox[name=pineapple]:checked").val();
    var olives = $("input:checkbox[name=olives]:checked").val();
    var mushrooms = $("input:checkbox[name=mushrooms]:checked").val();
    var xcheese = $("input:checkbox[name=x-cheese]:checked").val();

    var newPizza = new Pizza(inputtedPizzaSize);

    $("ul#pizza-order-list").append("<li><span class='pizzaOrder'>" + newPizza.pizzasize + " Pizza" + "</span></li>");

    newPizza.ingredients(cheese, pepperoni, bellpeppers, canadianbacon, pineapple, olives, mushrooms, xcheese);

    $(".pizzaOrder").last().click(function() {
      $("#pizza-order-detail").show();
      // $("#show-ticket h2").html('<img src="img/' + newTicket.poster() + '">');
      $(".pizza-size").text(newPizza.pizzasize);
      $(".order-total").text(newPizza.price());
    });

  });
});
