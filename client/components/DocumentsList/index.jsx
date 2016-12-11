import React, {Component, PropTypes} from 'react'
import {List, ListItem} from 'material-ui/List'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import ToggleStar from 'material-ui/svg-icons/toggle/star'
import {grey400} from 'material-ui/styles/colors'
import Divider from 'material-ui/Divider'

export default class DocumentsList extends  Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  }

  static defaultProps = {
    items: [],
  }

  render() {
    const iconButtonElement = (
      <IconButton
        touch={true}
        tooltip="Favorite"
        tooltipPosition="bottom-center">
        <ToggleStar color={grey400} />
      </IconButton>
    );

    const elements = this.props.items.map((item, index)=> (
      <div>
        <ListItem
          key={item.title}
          primaryText={item.title}
          rightIconButton={iconButtonElement}
          secondaryText={item.subtitle}
          secondaryTextLines={2} />

          {
            index !== this.props.items.length - 1 &&
            <Divider />
          }
      </div>
    ))

    return (
      <List>

        {elements}
      </List>
    )
  }
}