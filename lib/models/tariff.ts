import {Schema, model, models} from "mongoose";

const tariffSchema = new Schema({
    name: {type: String, required: [true, 'TariffComponent Name is required'], unique: true},
    description: {type: String, required: [true, 'TariffComponent Description is required']},
    price: {type: String, required: [true, 'TariffComponent Price is required']},
}, { timestamps: true });

const Tariff = models.Tariff || model("Tariff", tariffSchema);
export default Tariff;