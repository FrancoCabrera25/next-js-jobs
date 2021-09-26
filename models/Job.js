import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  companyName: {
    /* The name of this pet */

    type: String,
    required: [true, "Please provide a name for this pet."],
    maxlength: [250, "Name cannot be more than 60 characters"],
  },
  title: {
    /* The name of this pet */

    type: String,
    required: [true, "Please provide a name for this pet."],
    maxlength: [350, "Name cannot be more than 60 characters"],
  },
  category: {
    /* The name of this pet */

    type: String,
    required: [true, "Please provide a name for this pet."],
    maxlength: [150, "Name cannot be more than 60 characters"],
  },
  description: {
    /* The name of this pet */
    type: String,
    required: [true, "Please provide a name for this pet."],
  },

  type: {
    /* The name of this pet */
    type: String,
    required: [true, "Please provide a name for this pet."],
  },

  location: {
    /* The name of this pet */
    type: String,
    required: [true, "Please provide a name for this pet."],
  },

  url: {
    /* The name of this pet */
    type: String,
    required: [true, "Please provide a name for this pet."],
  },
}, {
  timestamps: true
});

export default mongoose.models.Job || mongoose.model("Job", JobSchema);
