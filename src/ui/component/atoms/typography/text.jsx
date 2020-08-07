import React from 'react';
import styled from "styled-components";
import {textColor} from "../../../constants/theme/styles";
import PropTypes from "prop-types";

const Text = ({textCase, variant, size, bold, children}) => {
    return (
        <Styling variant={variant} bold={bold} size={size} textCase={textCase}>
            {children}
        </Styling>
    );
};

Text.propTypes = {
    textCase: PropTypes.string,
    variant: PropTypes.string,
    size: PropTypes.string,
    bold: PropTypes.bool,
};


const Styling = styled.p`
color: ${textColor};
font-size: ${props=>props.size ? props.size: '1rem'};
text-transform: ${props=>props.textCase ? props.textCase : null};
font-weight: ${props=>props.bold ? 'bold' : null};
margin: 1rem;
`;

export default Text;