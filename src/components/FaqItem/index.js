import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isClicked: false,
    }

    this.showAns = () => {
      this.setState(prevState => ({isClicked: !prevState.isClicked}))
    }
  }

  render() {
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    const {isClicked} = this.state
    return (
      <li className="faq-item">
        <div className="faq-question-container">
          <h2 className="faq-question">{questionText}</h2>

          {
            /* Add the plus/minus button here */
            <button type="button" onClick={this.showAns}>
              {isClicked ? '-' : '+'}
            </button>
          }
        </div>

        {
          /* Add the conditional answer section here */
          isClicked && <p>{answerText}</p>
        }
      </li>
    )
  }
}

export default FaqItem
