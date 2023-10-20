const mongoose= require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema(
  {
    name: { type: String, required: false },
    startTime:{ type: String, required: false },
    endTime:{ type: String, required: false },
    hours:{ type: Number, required: false },
    rate:{ type: Number, required: false },
    supplier:{ type: String, required: false },
    poNumber:{ type: String, required: false },
    description:{ type: String, required: false }
  },
  {
    timestamps: true
  }
);

schema.index({ name: 1 }, { unique: true });
var Docket = mongoose.model('Docket', schema);

module.exports=Docket;
