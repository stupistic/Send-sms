module.exports = (mob,msg) => {
  const accountSid = 'AC19966e2ea0dea40607ca019cac7763dc';
  const authToken = 'c575c273eb3b6141a6e5c2549af624b2';
  const client = require('twilio')(accountSid, authToken);
 
  client.messages
    .create({
       body: msg,
       from: '+19726967216',
       to: mob
     })
    .then(message => console.log(message.sid));

}
