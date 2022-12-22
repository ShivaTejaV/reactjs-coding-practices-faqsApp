/*
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isSelected: true}

  selectOrUnselect = () => {
    this.setState(prevState => ({
      isSelected: !prevState.isSelected,
    }))
  }

  render() {
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    const {isSelected} = this.state
    let hide
    let imgUrl
    let altText
    if (!isSelected) {
      hide = ''
      imgUrl =
        'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

      altText = 'plus'
    } else {
      hide = 'hide'
      imgUrl = 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

      altText = 'minus'
    }

    return (
      <li className="faq">
        <div className="questionContainer">
          <h1 className="question">{questionText}</h1>
          <button
            type="button"
            onClick={this.selectOrUnselect}
            className="button"
          >
            <img src={imgUrl} alt={altText} />
          </button>
        </div>
        <p className={`answer ${hide}`}>{answerText}</p>
      </li>
    )
  }
}

export default FaqItem

*/

// Write your code here.
import {Component} from 'react'

import './index.css'

const PLUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const MINUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  renderAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleIsActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderActiveImage = () => {
    const {isActive} = this.state
    const image = isActive ? MINUS_IMAGE : PLUS_IMAGE
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button className="button" type="button" onClick={this.onToggleIsActive}>
        <img src={image} alt={altText} />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    return (
      <li className="faq-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
