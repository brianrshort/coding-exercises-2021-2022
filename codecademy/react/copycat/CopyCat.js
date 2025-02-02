import React from 'react';
import styles from "../styles.js";
import PropTypes from 'prop-types';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


export class CopyCat extends React.Component {
    
  render() {
    
    
    return (
      <div style={styles.divStyles}>
        <h1 style={{marginBottom: 80}} >Copy Cat 
        
        {this.props.name ? this.props.name : "Tom"}
        </h1>
        <input type="text" value={this.props.input} onChange={this.props.handleChange} />
        <img 
          style={styles.imgStyles}
          alt='cat'
          src={this.props.copying ? images.copycat : images.quietcat}
          onClick={this.props.toggleTape}
        />
        <p>
        {this.props.copying ? this.props.input : ""}
        </p>
      </div>
    );
  };
}

this.props.propTypes = {
  input: PropTypes.string.isRequired,
  copying: PropTypes.boolean.isRequired,
  name: PropTypes.string.isRequired
}