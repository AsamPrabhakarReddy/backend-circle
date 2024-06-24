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
      default: "",
    },
    userLastName: {
      type: String,
      default: "",
    },
    userEmail: {
      type: String,
      default: "",
    },
    organizerEmail: {
      type: String,
      required: true,
    },
    secondaryEmail: {
      type: String,
      default: "",
    },
    subject: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    startTime: {
      type: Date,
    },
    endTime: {
      type: Date,
    },
  },
  { timestamps: true }
);

const appointmentModel = mongoose.model("appointments", appointmentSchema);
export { appointmentModel as appointmentModel };
