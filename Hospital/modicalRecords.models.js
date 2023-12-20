import mongoose from 'mongoose'

const medicalRecordsSchema = new mongoose.Schema({})


export const MedicalRecords = mongoose.model("MedicalRecords", medicalRecordsSchema)