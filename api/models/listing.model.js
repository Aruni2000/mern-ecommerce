import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    Quantity: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    organicspices: {
      type: Number,
      required: true,
    },
    spicesgiftbox: {
      type: Number,
      required: true,
    },
    wholespices: {
      type: Number,
      required: true,
    },
    filterbyPrice: {
      type: Number,
      required: true,
    },
    
    offer: {
      type: Boolean,
      required: true,
    },
    
    imageUrls: {
      type: Array,
      required: true,
    },
    userRef: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;
