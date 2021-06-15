import { Component } from 'react'
import PropTypes from 'prop-types';

class Button extends Component {
    
  render() {
    const { onClick, text, color } = this.props

    return (
      <button 
        className="btn" 
        onClick={onClick} 
        style={{ backgroundColor: color}}
      >
        {text}
      </button>
    )
  }
}

Button.defaultProps = {
  text: 'Button',
  color: 'blue'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
}

export default Button
