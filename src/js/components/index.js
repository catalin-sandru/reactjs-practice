import React, { Component} from 'react';

const Dummy_Data = [
  {
    senderId: 'santa',
    text: 'ho ho ho'
  },
  {
    senderId: 'kitty_kat',
    text: 'meow meow'
  }
]

class MessageList extends Component {
  
  render() {
    return(
      <ul className='message-list'>
        {this.props.message.map(message => {
          return (
            <li key={message.id}>
              <div>
                {message.senderId}
              </div>
              <div>
                {message.text}
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}


export default MessageList