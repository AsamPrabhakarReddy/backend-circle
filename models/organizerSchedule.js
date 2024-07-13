import mongoose from "mongoose";

const organizerScheduleSchema = new mongoose.Schema(
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
      type: String,
    },
    endTime: {
      type: String,
    },
    slots: {
      type: Array,
    },
  },
  { timestamps: true }
);

const organizerScheduleModel = mongoose.model(
  "organizerSchedules",
  organizerScheduleScheam
);

export { organizerScheduleModel as organizerScheduleModel };
