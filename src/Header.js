import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
	list-style: none;
	display: flex;
	background-color: #66ff66;


`

const ListItem = styled.li`
	margin: 10px;
	cursor: grab;
`

const Header = props => {
  return(
    <React.Fragment>
      <List>
        <ListItem>Home</ListItem>
        <ListItem>Doc</ListItem>
        <ListItem>User</ListItem>
      </List>
    </React.Fragment>
    )
}

export default Header