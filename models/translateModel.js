import mongoose from 'mongoose';

const translateSchema = new mongoose.Schema(
  {
    fromLang: { type: String, required: true },
    toLang: { type: String, required: true },
    fromText: { type: String, required: true },
    toText: { type: String, required: true },
  }
);
const translateModel = mongoose.model('Translate', translateSchema);
export default translateModel;