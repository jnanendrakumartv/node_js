import mongoose from 'mongoose'
 
const Schema = mongoose.Schema
 
const DownloadSchema = new Schema({
    firstname: {
        type: String
    },
    place : {
     type: String
    },
    email:{
     type: String
    },
    // console.log(firstname);
    lastname: {
        type: String
    }
})
 
export default DownloadSchema;