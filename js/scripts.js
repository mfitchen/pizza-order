// Business Logic
// Pizza Constructor
function Pizza(size) {
  this.pizzasize = size;
  this.pizzaingredients = [];
};

// function Ingredients(chs, pep, blp, cbn, pna, olv, msh, xch) {
//   this.addcheese = chs;
//   this.addpepperoni = pep;
//   this.addbellpeppers = blp;
//   this.addcanadianbacon = cbn;
//   this.addpineapple = pna;
//   this.addolives = olv;
//   this.addmushrooms = msh;
//   this.addxcheese = xch;
// };

// Price Prototype Method
Pizza.prototype.price = function() {
  var price = 7;

  if (this.pizzasize === "Large") {
    price *= 3;
  } else if (this.pizzasize === "Medium") {
    price *= 2;
  } else {
    price *= 1;
  }

  if (this.pizzaingredients.length === 0) {
    price *= 1;
  } else {
    price += this.pizzaingredients.length;
  }

  // if (this.pizzasize === "Large") {
  //   price *= 3;
  // } else if (this.pizzasize === "Medium") {
  //   price *= 2;
  // } else if (this.pizzasize === "Small") {
  //   price *= 1;
  // } else if (this.addcheese === "true") {
  //   // this.pizzaingredients.push("Cheese");
  //   price += 1;
  // } else if (this.addpepperoni === "true") {
  //   // this.pizzaingredients.push("Pepperoni");
  //   price += 1;
  // } else if (this.addbellpeppers === "true") {
  //   // this.pizzaingredients.push("Bell Peppers");
  //   price += 1;
  // } else if (this.addcanadianbacon === "true") {
  //   // this.pizzaingredients.push("Canadian Bacon");
  //   price += 1;
  // } else if (this.addpineapple === "true") {
  //   // this.pizzaingredients.push("Pineapple");
  //   price += 1;
  // } else if (this.addolives === "true") {
  //   // this.pizzaingredients.push("Olives");
  //   price += 1;
  // } else if (this.addmushrooms === "true") {
  //   // this.pizzaingredients.push("Mushrooms");
  //   price += 1;
  // } else if (this.addxcheese === "true") {
  //   // this.pizzaingredients.push("Extra Cheese");
  //   price += 1;
  // } else {
  //   price *= 1;
  // }

  return price;

};

// Front-End User Logic
$(document).ready(function() {
  $("form#pizza-order-form").submit(function(event) {
    event.preventDefault();

    var inputtedPizzaSize = $("select#pizza-size").val();
    var newPizza = new Pizza(inputtedPizzaSize);

    $.each($("input[name='toppings']:checked"), function() {
      newPizza.pizzaingredients.push($(this).val());
    });

    $("ul#pizza-order-list").append("<li><span class='pizzaOrder'>" + newPizza.pizzasize + " Pizza" + "</span></li>");

    $(".pizzaOrder").last().click(function() {
      $("#pizza-order-detail").show();
      $(".pizza-size").text(newPizza.pizzasize);
      $(".pizza-ingredients").text(newPizza.pizzaingredients);
      $(".order-total").text(newPizza.price());

    });
  });
});
