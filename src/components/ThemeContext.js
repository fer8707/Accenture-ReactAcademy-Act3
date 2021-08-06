import React from 'react'

export const theme = {
    containerFirstTitle: {
        marginTop: '40px',
        marginBottom: '15px'
    },
    firstTitle: {
        color: '#f59c16'
    },
    openFirstTitle: {
        width: '15px',
        height: '35px',
        border: '3px solid #f59c16',
        borderRight: '0px'
    },
    closeFirstTitle: {
        width: '15px',
        height: '35px',
        border: '3px solid #f59c16',
        borderLeft: '0px'
    },
    containerSecondTitle: {
        marginTop: '5px',
        marginBottom: '10px'
    },
    secondTitle: {
        color: 'black',
        fontWeight: 'bold'
    },
    createButton: {
        marginRight: '20px',
        padding: '10px',
        backgroundColor: '#f59c16',
        color: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    },
    linkIcon:{
        position: 'absolute',
        zIndex:'1',
        right: '30px',
        top: '260px'
    },
    modalErrorMessage: {
        color: '#f59c16',
        marginTop: '15px'
    },
    filterTabs: {
        boxShadow: 'none',
    },
    filterTab: {
        textTransform: 'none',
        width: '80px',
        color: '#2e2e2d', 
        borderColor: '#a8a8a8', 
        border: '1px solid #e6e6e6',
        boxShadow: 'none',
        selected: {
            backgroundColor: '#c9c9c9'
        },
        noSelected: {
            backgroundColor: 'white'
        }
        
    },
    postTitle: {
        color: 'white',
        fontWeight: 'bold',
        marginBottom: '1px',
    },
    postComments: {
        color: 'white',
        fontSize: '15px',
        fontStyle: 'italic',
        marginBottom: '4px',
    },
    postIconComments: {
        color: 'white',
        fontSize: '15px',
        marginLeft: '4px',
    },
    postDescription: {
        height: '50px',
        color: 'white',
        fontSize: '15px',
        overflow: 'hidden',
        paddingRight: '10vw',
        marginBottom: '0'
    },
    postCategory: {
        color: 'white',
        fontSize: '13px',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: '2px',
        marginBottom: '22px'
    },
}

const ThemeContext = React.createContext(theme)

export default ThemeContext