import React, { PropTypes } from 'react';
import UserDash from './UserDash';
import Pin from './Pin';

const PinPage = ({user, pin}) => (
    <div class="PinPage">
        <Pin pin={ pin } />
        <UserDash user={ user } />
    </div>
);

PinPage.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired
    }),
    pin: PropTypes.shape({
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })
}