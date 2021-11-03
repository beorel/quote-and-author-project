import React from 'react';


const Quotes = (props) => {
  return (
    <div id="text">
      {props.quote}
      {props.author}
    </div>
  )
}
export default Quotes;