const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors')
const sendSMS = require('./sms')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/:mob/:msg', (req,res) => {
 const mob = req.params.mob;
 const msg = req.params.msg;
 sendSMS(mob,msg);
 res.send(msg)
})

const Port = process.env.PORT || 5000
app.listen(Port, () => console.log(`Listening to ${Port}`));
