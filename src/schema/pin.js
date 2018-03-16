import mongoose from 'mongoose'

const Schema = mongoose.Schema

const pinSchema = new Schema(
  {
    namePlace: { type: String, required: true },
    createdBy: { type: String, required: true },
    lng: { type: Number, required: true },
    lat: { type: Number, required: true },
    createdAt: { type: String, default: Date.now }
  },
  {
    timestamps: {
      createdAt: 'created_at',
    }
  }
)

const Pin = mongoose.model('pin', pinSchema)
export default Pin