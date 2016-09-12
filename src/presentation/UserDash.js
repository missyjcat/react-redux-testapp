import React, { PropTypes } from 'react';
import Greeting from './Greeting';
import Signup from './Signup';

const UserDash = ({user}) =>(
    <div class="userDash">
        { user.id ?  [<Greeting user={{ user }} />] : [<Signup />] }
    </div>
);

UserDash.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired
    })
}