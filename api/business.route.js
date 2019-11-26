// business.route.js

const express = require('express');
const businessRoutes = express.Router();

// Require Business model in our routes module
let Business = require('./business.model');

// Defined store route
businessRoutes.route('/add').post(function (req, res) {
  let business = new Business(req.body);
  business.save()
    .then(business => {
      res.status(200).json({ 'Employee has been added successfully' });
    })
    .catch(err => {
      res.status(400).send("Unable to save to database");
    });
});

// Defined get data(index or listing) route
businessRoutes.route('/').get(function (req, res) {
  Business.find(function (err, businesses) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
});

// Defined edit route
businessRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Business.findById(id, function (err, business) {
    res.json(business);
  });
});

//  Defined update route
businessRoutes.route('/update/:id').post(function (req, res) {
  Business.findById(req.params.id, function (err, business) {
    if (!business)
      res.status(404).send("Data is not found");
    else {
      business.employee_name = req.body.employee_name;
      business.company_name = req.body.company_name;
      business.employee_id = req.body.employee_id;

      business.save().then(business => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("Unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
businessRoutes.route('/delete/:id').get(function (req, res) {
  Business.findByIdAndRemove({ _id: req.params.id }, function (err, business) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = businessRoutes;
