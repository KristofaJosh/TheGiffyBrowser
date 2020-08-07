import React from 'react';
import {useSelector} from "react-redux";
import {Redirect} from 'react-router-dom';
import styled from "styled-components";
import Footer from "../../../component/molecules/footer";
import AboutGif from "../../../component/organism/aboutgif";
import {backgroundColor} from "../../../constants/theme/styles";

const GifDetails = () => {
    const gifData = useSelector(state => state.SearchState);
    
    const inView = gifData.gif_details;
    
    return (
        <>
            <Styling variant={'primary'}>
                {process.env.NODE_ENV === "development" ? (
                    <div style={{
                        width: '100%', height: '2rem', display: 'flex', position: 'fixed', top: '0',
                        justifyContent: 'center', alignItems: 'center', background: 'grey', zIndex: '900',
                    }}>
                        <small>This Application is running in
                            <strong style={{color: "red", textTransform: "uppercase"}}>
                                {" " + process.env.NODE_ENV + " "}
                            </strong>mode.</small>
                    </div>
                ) : null}
                <div className="container">
                    <div className="content">
                        {
                            !Object.entries(inView).length ?
                                <Redirect to={'/'}/>
                                :
                                <AboutGif data={inView}/>
                        }
                    </div>
                </div>
            </Styling>
            <Footer/>
        </>
    );
};

GifDetails.propTypes = {};

const Styling = styled.div`
min-height: 100vh;
display: flex;
justify-content: center;
background: ${backgroundColor};

.container {
    width: 100%;
    padding: 3rem 1rem;
    .content {
        width: 100%;
    }
}
`;

export default GifDetails;