import React, { Component } from 'react';
import './app.css'

class App extends Component {

  state = {
    mobileNumber: '',
    msg: '',

  }

onSendClicked = (e) => {
   e.preventDefault()

   fetch(`https://sendysms.herokuapp.com/${this.state.mobileNumber}/${this.state.msg}`)
     .then(() => console.log('Message Sent'))
 .catch( err => console.log(err))
}

  render(){
    console.log(this.state.status)
  return <div className='container text-center  justify-content-center col-md-7'>
        <h1 className='text-center a6 shadow'>Send SMS</h1>

       <div className='container a2 shadow col-md-5'>
       <span className='a5 shadow'>+91</span><input className='a1 text-center shadow' placeholder='Enter Mobile number' value={this.state.mobileNumber} onChange={(e) => this.setState({ mobileNumber: e.target.value })} />
       <br />

       <textarea className='a4 text-center shadow' placeholder='type your message here' value={this.state.msg} onChange={(e) => this.setState({ msg: e.target.value })} />
       <br />
       <button className='a3 btn btn-success shadow' onClick={this.onSendClicked} >Send</button>
              <br />
       <div className='a7'>*sms will be send only between 9am to 9pm</div>
       </div>
         </div>
  }
}
export default App;
