'use strict';

const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({
  text: String,

  // owner: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: false,
  // },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
});

exampleSchema.virtual('length').get(function length() {
  return this.text.length;
});

const Example = mongoose.model('Example', exampleSchema);

module.exports = Example;
