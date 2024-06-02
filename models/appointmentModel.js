import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    organizerId: {
      type: String,
      required: true,
    },
    isBooked: {
      type: Boolean,
      default: false,
    },
    userFirstName: {
      type: String,
    },
    userLastName: {
      type: String,
    },
    userEmail: {
      type: String,
    },
    organizerEmail: {
      type: String,
      required: true,
    },
    secondaryEmail: {
      type: String,
    },
    subject: {
      type: String,
    },
    description: {
      type: String,
    },
    startTime: {
      type: String,
    },
    endTime: {
      type: String,
    },
  },
  { timestamps: true }
);

const appointmentModel = mongoose.model("appointments", appointmentSchema);
export { appointmentModel as appointmentModel };
