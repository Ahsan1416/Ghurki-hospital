const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  department: { type: String, required: true },
  day: { type: String, required: true },
  time: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);
