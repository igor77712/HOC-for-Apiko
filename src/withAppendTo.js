import React, {Component} from 'react'
import ReactDOM from 'react-dom'

const withAppendTo = noda => BaseComponent => {

  class WithAppendTo extends Component{

    constructor(props){
      super(props)
      this.state = {};
    }

    render(){
      console.log('render')
        if (document.getElementById(noda) !== null) {
          return ReactDOM.createPortal(<BaseComponent {...this.props}/>, 
            document.getElementById(noda) )} else { return <React.Fragment/> }
    }
  }
  return WithAppendTo
}

export default withAppendTo