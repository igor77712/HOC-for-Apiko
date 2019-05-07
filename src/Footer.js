import React from 'react'
import styled from 'styled-components'

const CopyRight = styled.p`
	background-color: black;
	color: white;
	padding: 15px;
	text-align: center;
`

const Footer = props => {
  return(

      <React.Fragment>
      <CopyRight>
        {props.copyright}
      </CopyRight>
    </React.Fragment>

    )
}

export default Footer