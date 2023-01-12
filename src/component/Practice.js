import React from 'react'

const Practice = (props) => {

  return (
  <>
    <h1>{props.data.name}</h1>
    <h1>{props.data.id}</h1>
    <h1>{props.data.phone}</h1>
    <h1>{props.data.email}</h1>
    </>
  )
}

export default Practice