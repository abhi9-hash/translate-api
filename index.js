import Express from 'express'
import mongoose  from 'mongoose';
import { url } from './keys.js';
import translateRouter from './routers/translateRouter.js';


const app=Express();
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

mongoose.connect( url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>console.log('DB Connected'))
  .catch((err)=>console.log(err));
app.use('/translate', translateRouter);
app.get('/',(req,res)=>{
    res.send('server has started')
    });
    
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
    });
app.listen(5000,()=>{
    console.log('running port 5000')
});