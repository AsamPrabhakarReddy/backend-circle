import mongoose from "mongoose";

const participantSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  secondaryEmail: { type: String },
  password: { type: String, required: true },
  middleName: { type: String },
  notification: {
    type: Array,
    default: [],
  },
  seenNotification: {
    type: Array,
    default: [],
  },
  verified: {
    type: Boolean,
    default: false,
  },
  selectedCountry: {
    type: Object,
    required: true,
  },
  selectedState: {
    type: Object,
    required: true,
  },
  selectedCity: {
    type: Object,
    required: true,
  },
  phoneNumber: {
    type: String,
    default: "",
  },
  streetName: {
    type: String,
    default: "",
  },
  gender: {
    type: Object,
  },
  postalCode: {
    type: String,
    default: "",
  },
});

const ParticipantModel = mongoose.model("Participant", participantSchema);

export { ParticipantModel as ParticipantModel };
