import mongoose from 'mongoose';

// Define the schema for an item
const itemSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }
});

// Create the model from the schema
const Item = mongoose.model('Item', itemSchema);

// Export the model
export default Item;
