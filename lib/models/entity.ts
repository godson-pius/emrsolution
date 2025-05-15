import {model, models, Schema} from "mongoose";

const entitySchema = new Schema({
    entityName: {type: String, required: [true, 'Entity name is required'], unique: true},
    location: {type: String, required: [true, 'Location is required']},
    contactInfo: {type: String, required: [true, 'Contact Info is required'], unique: true},
    contactEmail: {type: String, required: [true, 'Contact Email is required'], unique: true},
    entityType: {type: String, required: [true, 'Entity Type is required']},
    password: {type: String, required: [true, 'Password is required']},
    regNum: {type: String},
}, {timestamps: true});

const Entity = models.Entity || model("Entity", entitySchema);
export default Entity;