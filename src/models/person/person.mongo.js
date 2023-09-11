import mongoose, {Schema} from "mongoose";

const personSchema = new Schema({
    name: {
        type: String,
        required: true
    },
},{
    versionKey: false
})

export default mongoose.model('Person', personSchema);