import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';

const AlertMessage = ({ isShown, variant, message, close }) => (
    isShown
    && (
        <Alert variant={variant} onClose={close} dismissible>
            {message}
        </Alert>
    )
);

AlertMessage.propTypes = {
    isShown: PropTypes.bool.isRequired,
};

export default AlertMessage;
