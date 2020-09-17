import React from 'react'
import {InlineWidget} from 'react-calendly'

class Calendly extends React.Component {
  componentDidMount() {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
    head.appendChild(script);
  }

  render(){
    return (
      <div>
        <InlineWidget url="https://calendly.com/hoangluu404/60min" />
      </div>
    );
  }
}

export default Calendly;