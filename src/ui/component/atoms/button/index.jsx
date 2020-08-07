import React from 'react';
import styled from "styled-components";
import {backgroundColor} from "../../../constants/theme/styles";
import Text from "../typography/text";
import PropTypes from 'prop-types'

const Button = ({name, variant, onClick}, props) => {
    return (
        <Styling variant={variant} onClick={onClick}>
            <Text variant={variant} textCase={props.textCase}>{name}</Text>
        </Styling>
    );
};

Button.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.instanceOf(Function)
};

const Styling = styled.button`
    outline: none;
    min-width: 100px;
    height: 36px;
    border: none;
    border-radius: 10px;
    padding: 10px;
    background: ${backgroundColor};
    p {margin: 0;}

`;

export default Button;
