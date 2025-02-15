import mongoose from 'mongoose';

// Define the schema for a recording
const recordingSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now
  },
  request: {
    method: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    headers: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    body: {
      type: mongoose.Schema.Types.Mixed,
      default: {}
    }
  },
  response: {
    status: {
      type: Number,
      required: true,
    },
    headers: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    }
  }
});

// Create the model from the schema
const Recording = mongoose.model('Recording', recordingSchema);

// Export the model
export default Recording;
