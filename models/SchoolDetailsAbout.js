const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const SchoolDetailsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
  },
  schoolCNPJ: {
    type: String,
    
  },
  schoolPhone: {
    type: String,
    
  },
  schoolCellPhone: {
    type: String,
    
  },
  schoolCEP: {
    type: String,
    
  },
  schoolName: {
    type: String,
    
  },
  schoolResponsibleCPF: {
    type: String,
    // required: true
  },
  schoolResponsibleEmail: {
    type: String,
    
  },
  schoolResponsibleName: {
    type: String,
    
  },
  schoolResponsiblePhone: {
    type: String,
    // required: true
  },
  schoolResponsibleRole: {
    type: String,
    // required: true
  },
  schoolSecretaryName: {
    type: String,
    // required: false
  },
  schoolSocialReason: {
    type: String,
    // required: false
  },
  schoolgrade: {  // public, private
    type: String,
    // required: false
  },
  schoolState: {  // public, private
    type: String,
    // required: false
  },
  schoolCity: {  // public, private
    type: String,
    // required: false
  },
  schoolStreet: {  // public, private
    type: String,
    // required: false
  },
  date: {  // register date
    type: Date,
    default: Date.now,
  },
});

module.exports = SchoolDetails = mongoose.model("schoolsDetails", SchoolDetailsSchema);
