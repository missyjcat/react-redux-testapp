import React, { PropTypes } from 'react';

const Pin = ({pin}) => (
    <div class="Pin">
        <img src={ pin.img } /><br />
        <div class="name">{ pin.name }</div>
    </div>
);

Pin.propTypes = {
    pin: PropTypes.shape({
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })
}