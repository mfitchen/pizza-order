// Business Logic

// Pizza Constructor
function Pizza(size) {
  this.pizzasize = size;
  this.pizzaingredients = [];
};

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

    $("ul#pizza-order-list").append("<li><button type='submit' class='btn btn-primary btn-margin'><span class='pizzaOrder'>" + newPizza.pizzasize + " Pizza Order" + "</button></span></li>");

    $(".pizzaOrder").last().click(function() {
      $("#pizza-order-detail").show();
      $(".pizza-size").text(newPizza.pizzasize);
      $(".pizza-ingredients").text(newPizza.pizzaingredients);
      $(".order-total").text(newPizza.price());

    });
  });
});
