import React from 'react';

function SpecialText(props) {
  return (
      <div>
        Hello, {props.text} has signed up for {props.courses}
      </div>
  );
}
export default SpecialText;