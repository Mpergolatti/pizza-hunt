const { Pizza } = require('../models');

const pizzaController = {
  // Get All Pizzas
  getAllPizza(req, res) {
    Pizza.find({})
      .populate({
        path: 'comments',
        select: '-__v'
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbPizzaData => res.json(dbPizzaData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // Get One Pizza By Id
  getPizzaById({ params }, res) {
    Pizza.findOne({ _id: params.id })
      .populate({
        path: 'comments',
        select: '-__v'
      })
      .select('-__v')
      .then(dbPizzaData => {
        
        // If NO Pizza Is Found, send 404
        if (!dbPizzaData) {
          res.status(404).json({ message: 'No Pizza found with this id!'});
          return;
        }
        res.json(dbPizzaData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // Create Pizza
  createPizza({ body }, res) {
    Pizza.create(body)
      .then(dbPizzaData => res.json(dbPizzaData))
      .catch(err => res.status(400).json(err));
  },

  // Update Pizza By ID
  updatePizza({ params, body }, res) {
    Pizza.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
      .then(dbPizzaData => {
        if (!dbPizzaData) {
          res.status(404).json({ message: 'No Pizza found with this id!'});
          return;
        }
        res.json(dbPizzaData);
      })
      .catch(err => res.status(400).json(err))
  },

  // Delete Pizza
  deletePizza({ params }, res) {
    Pizza.findOneAndDelete({ _id: params.id })
    .then(dbPizzaData => {
      if (!dbPizzaData) {
        res.status(404).json({ message: 'No Pizza found with this id!'});
        return;
      }
      res.json(dbPizzaData);
    }) 
    .catch(err => res.status(400).json(err))
  },
  
}

module.exports = pizzaController;