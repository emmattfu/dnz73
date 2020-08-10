import React from 'react'


const Group = ({match}) => {
    const groupNumber = match.params.number

    return (
        <h1>Група №{groupNumber} </h1>
    )
}

export default Group