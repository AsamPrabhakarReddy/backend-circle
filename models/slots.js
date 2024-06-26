import mongoose from "mongoose";

const slotSchema = new mongoose.Schema({
  organizerId: {
    type: String,
  },
  slotBooked: {
    type: Boolean,
  },
  slotStartTime: {
    type: String,
  },
  slotEndTime: {
    type: String,
  },
});

const slotModel = mongoose.model("slots", slotSchema);

export { slotModel as slotModel };
