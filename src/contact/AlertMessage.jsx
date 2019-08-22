import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';

const AlertMessage = ({ isShown, variant, message }) => (
    isShown
    && (
        <Alert variant={variant} dismissible>
            {message}
        </Alert>
    )
);

AlertMessage.propTypes = {
    isShown: PropTypes.bool.isRequired,
};

export default AlertMessage;
