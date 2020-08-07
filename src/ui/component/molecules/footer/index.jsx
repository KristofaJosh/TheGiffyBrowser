import React from 'react';
import styled from "styled-components";
import {backgroundColor, textColor} from "../../../constants/theme/styles";
import Text from "../../atoms/typography/text";
import {siteFonts} from "../../../constants/variables/sitefonts";

const Footer = () => {
    return (
        <Styling variant={'secondary'}>
            
            <div className="container">
                <div className="content">
                    <div>
                        <Text size={siteFonts.sHeading}>Let's work together</Text>
                        <span>
                            <Text size={siteFonts.medium}>
                                Call: <span><a href={'tel:+234 7013722950'}>+234 7013722950</a>{" "}</span>
                                Email: <span><a href={'mailto:christopherjoshua25@hotmail.com'}>christopherjoshua25@hotmail.com</a></span></Text>
                        </span>
                    </div>
                    
                    <div>
                        <Text bold size={siteFonts.medium}>All rights reserved</Text>
                        <Text size={siteFonts.medium}>Made with <span role={"img"} aria-label={'heart'}>💝</span> by Christopher Joshua</Text>
                    </div>
                </div>
            </div>
            
            
        </Styling>
    );
};

const Styling = styled.div`
height: 200px;
background: ${backgroundColor};
color: ${textColor};
display: flex;
justify-content: center;
.container{
    width: 100%;
    display: flex;
    align-items: center;
    .content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        div {width: 100%;}
    }
    
    @media screen and (max-width: 500px){
        .content {flex-direction: column; div {margin: 5px 0;}}
    }
}
`;

export default Footer;