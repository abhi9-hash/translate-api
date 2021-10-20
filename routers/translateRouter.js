import express from 'express';
import translateModel from '../models/translateModel.js';
import translate from '@vitalets/google-translate-api';

const translateRouter = express.Router();

translateRouter.get(
    '/cache',
    async (req, res) => {
      try {
        const allTranslations = await translateModel.find({});
        res.send(allTranslations);
      } catch {
        res.status(404).send({ message: 'Cannot find Translations' });
      } 
    }
)
translateRouter.post(
    '/',
    async (req, res) => {
      try {
        const text = await translate(req.body.text, { to: req.body.toLang })
        const translation = new translateModel({
            fromLang: req.body.fromLang,
            toLang: req.body.toLang,
            fromText: req.body.text,
            toText: text.text,
        })
        const translationText = await translation.save();
        res.send(translationText);
      } catch {
        res.status(404).send({ message: 'Cannot Translate' });
      }
    }
 );

export default translateRouter;