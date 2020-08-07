import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Input = ({type, name, variant, value, onChange}) => {
    return (
        <Styling variant={variant}>
            <input type={type} name={name} placeholder={'Search for giphys here'} value={value} onChange={onChange}/>
        </Styling>
    );
};

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.instanceOf(Function),
};

const Styling = styled.div`
width: 100%;

input {
    text-indent: 10px;
    width: 100%;
    height: 35px;
}
`;

export default Input;