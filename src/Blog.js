import React from 'react'
import styled from 'styled-components'

const Block = styled.div`
	border: 1px solid blue;
	padding: 10px;
	margin: 20px;
`

const Blog = props => {
  return(
    <Block>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
      <i>{props.date}</i>
    </Block>
    )
}

export default Blog