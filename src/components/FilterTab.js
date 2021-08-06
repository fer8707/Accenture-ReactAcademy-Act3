import React from 'react'
import Button from '@material-ui/core/Button'


export default function FilterTab({theme, category, action, ...other}) {

    return (
        <Button 
            {...other}
            onClick={() => action(category.id)}
            style={Object.assign({}, theme.filterTab, category.selected ? theme.filterTab.selected : theme.filterTab.noSelected)}
        >{category.name}
        </Button>
    )
}