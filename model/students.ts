import mongoose, { Schema, Document } from "mongoose";

interface sData extends Document {
  name: string;
  place: string;
  standard: number;
  medium: string;
}

const studentSchema: Schema<sData> = new Schema({
    name:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    standard:{
        type:Number,
        required:true

    },
    medium:{
        type:String,
        required:true
    }
});


const student = mongoose.model<sData>('Student',studentSchema)

export default student
