
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
  employee_name: {
    type: String
  },
  company_name: {
    type: String
  },
  employee_id: {
    type: Number
  }
},{
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);
