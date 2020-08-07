import React from "react";
import styled from "styled-components";
import {backgroundColor, textColor} from "../../../constants/theme/styles";

const MainTemplate = ({children, onClick}) => {
    return (
        <Styling onClick={onClick} variant={"primary"}>
            {children}
        </Styling>
    );
};

const Styling = styled.div`
  width: 100%;
  color: ${textColor};
  background-color: ${backgroundColor};
  height: 100%;
  
`;

export default MainTemplate;
