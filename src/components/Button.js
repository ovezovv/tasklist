import React from 'react'
import PropTypes from 'prop-types';

const Button = ({ text, color, addTask }) => {
    
    return (
        <button 
            className="btn" 
            onClick={addTask} 
            style={{ backgroundColor: color}}
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    text: 'Button',
    color: 'blue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    addTask: PropTypes.func
}

export default Button
