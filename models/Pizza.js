const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema({
  pizzaName: {
    type: String
  },

  createdBy: {
    type: String
  },

  createdAt: {
    type: Date,
    default: 'Large'
  },

  size: {
    type: String,
    default: 'Large'
  },

  toppings: []

});

// Create the Pizza Model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

// Export the pizza model
module.exports = Pizza;