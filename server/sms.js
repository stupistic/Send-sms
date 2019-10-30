module.exports = (mob,msg) => {
  const accountSid = '';
  const authToken = '';
  const client = require('twilio')(accountSid, authToken);

  client.messages
    .create({
       body: msg,
       from: '',
       to: mob
     })
    .then(message => console.log(message.sid));

}
