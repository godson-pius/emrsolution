import {Schema, model, models} from "mongoose";

const claimSchema = new Schema({
    fullname: {type: String, required: [true, 'Full Name is required']},
    identityNum: {type: String, required: [true, 'Identity number is required']},
    phone: {type: String, required: [true, 'Phone number is required']},
    services: {type: [], required: [true, 'Services are required']},
    admissionDate: {type: String, required: [true, 'Admission date required']},
    dischargeDate: {type: String, required: [true, 'Discharge date required']},
    entity: {type: Schema.Types.ObjectId, ref: "Entity", required: true},
}, { timestamps: true });

const Claim = models.Claim || model("Claim", claimSchema);
export default Claim;