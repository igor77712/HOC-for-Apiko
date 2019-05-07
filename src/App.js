import React, {Component, Fragment} from 'react'
import Header from './Header.js'
import Blog from './Blog.js'
import Footer from './Footer.js'
import withAppendTo from './withAppendTo.js'


const rootDiv = document.getElementById('root')
const ComOne = withAppendTo("header")(Header)
const ComTwo = withAppendTo("blog")(Blog)
const ComTree = withAppendTo("footer")(Footer)

class App extends Component{

  constructor(props){
    super(props)
    
    this.el = document.createElement('div')
  }

  componentWillMount(){
    
    this.el.innerHTML = 

      ` <div id="header"></div>
        <div id="blog"></div>
        <div id="footer"></div> `

    rootDiv.appendChild(this.el)
  }

  render(){
    return(
      <Fragment>
        <ComOne/>

        <ComTwo 
          title = "ea molestias quasi exercitationem repellat qui ipsa sit aut"
          body = "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
          date = "12-02-19"
        />

        <ComTree 
          copyright = 'Copyright © 2019'
        />

      </Fragment>
      )
  }
}

export default App;
