import mongoose from "mongoose";

const slotSchema = new mongoose.Schema({
  organizerId: {
    type: String,
  },
  newDate: {
    type: String,
  },
  timeSlots: {
    type: [String],
  },
});

const slotModel = mongoose.model("slots", slotSchema);

export { slotModel as slotModel };
