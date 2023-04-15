// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedback: false}

  onFeedback = () => {
    this.setState({isFeedback: true})
  }

  render() {
    const {resources} = this.props
    const {isFeedback} = this.state

    return (
      <div className="bg">
        <div className="card">
          {isFeedback ? (
            <div className="text">
              <img
                src={resources.loveEmojiUrl}
                className="love-img"
                alt="love emoji"
              />
              <h1 className="thank">Thank You!</h1>
              <p className="thank-desc">
                We will use your feedback to improve our customer support
                performance.
              </p>
            </div>
          ) : (
            <div>
              <h1 className="heading">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="fle">
                {resources.emojis.map(item => (
                  <li className="aa" key={item.id}>
                    <button onClick={this.onFeedback}>
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="img"
                      />
                    </button>
                    <p className="desc">{item.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Feedback
