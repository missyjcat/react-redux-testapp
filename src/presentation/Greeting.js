import React, { PropTypes } from 'react';

// const Greeting = (user) => (
//     <div style="text-align:center">Hello, {{user['name']}}!</div>
// );

const Greeting = ({user}) => (
    <div style="text-align:center">Hello, { user.name }!</div>
);

Greeting.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired
    })
}

export default Greeting;