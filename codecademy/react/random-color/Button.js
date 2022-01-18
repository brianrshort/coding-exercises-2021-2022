import React from 'react';

export class Button extends React.Component {
  constructor(props) {
    super(props);
  }
	render() {
		return (
			<button 
        onClick={ this.props.onClick }
				className={ this.props.light ? 'light-button' : 'dark-button' }>
				Refresh
			</button>
		);
	}
}