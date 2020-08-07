import React, {useContext} from "react";
import MainTemplate from "../../template/main";
import {StyleContext} from "../../../constants/context";
import styled from "styled-components";
import Footer from "../../../component/molecules/footer";
import Text from "../../../component/atoms/typography/text";
import {siteFonts} from "../../../constants/variables/sitefonts";
import SearchInput from "../../../component/molecules/searchinput";
import {useDispatch, useSelector} from "react-redux";
import {clearSearch, closeModalDispatch} from "../../../../store/actions/clear.action";

import axios from "axios";

const HomePage = () => {
    const changeStyle = useContext(StyleContext);
    const {modal} = useSelector(state => state.SearchState);

    const dispatch = useDispatch();

    const closeModal = () => {
        if (modal) {
            dispatch(closeModalDispatch(false));
            dispatch(clearSearch())
        }
    };


    return (
        <>
            <MainTemplate variant={"primary"} onClick={closeModal}>
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

                <Styling variant={'primary'}>
                    <div className="container">
                        <div className="content">
                            <div className="logo" onClick={changeStyle.changeMode}>
                                <Text variant={'primary'} size={siteFonts.normal} bold textCase={'uppercase'}>the
                                    click me
                                </Text>
                                <img src={"/assets/images/logo/cj_logo.png"} alt=""/>
                            </div>
                        </div>
                        <div className={'giphy-ad'}>
                            <section>
                                <div style={{margin: '1rem 0'}}>
                                    <Text variant={'primary'} size={siteFonts.heading} bold textCase={'uppercase'}>the
                                        giphy
                                        browser</Text>
                                </div>
                                <div className="search">
                                    <SearchInput/>
                                </div>
                            </section>
                            <section className={'last-child'}>

                                <div>
                                    <Text size={siteFonts.sHeading} textCase={'uppercase'}>
                                        Were expert to create beautiful design & smart technology
                                    </Text>
                                    <Text size={siteFonts.medium} bold>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nobis
                                        reprehenderit veniam voluptatum.
                                    </Text>
                                </div>

                                {/*<div className={'ad'}>*/}
                                {/*    <span className={'ad-brand'}>*/}
                                {/*        <img src={"/assets/images/logo/riby_single_logo.png"} alt=""/>*/}
                                {/*        <Text size={siteFonts.medium}>Web & Mobile</Text>*/}
                                {/*    </span>*/}
                                {/*    <span className={'ad-brand'}>*/}
                                {/*        <img src={"/assets/images/logo/riby_single_logo.png"} alt=""/>*/}
                                {/*        <Text size={siteFonts.medium}>Web & Mobile</Text>*/}
                                {/*    </span>*/}
                                {/*    <span className={'ad-brand'}>*/}
                                {/*        <img src={"/assets/images/logo/riby_single_logo.png"} alt=""/>*/}
                                {/*        <Text size={siteFonts.medium}>Web & Mobile</Text>*/}
                                {/*    </span>*/}


                                {/*</div>*/}

                            </section>
                        </div>
                    </div>
                </Styling>
                <Footer/>
            </MainTemplate>
        </>
    );
};

const Styling = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
justify-content: center;
// overflow: scroll;

.container {

.giphy-ad {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}


.logo {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 1rem 0;
    
    img {width: 125px; margin: 0 5px; padding: 1rem;};
}

.last-child {
    display: flex;
    justify-content: space-between;
    position: relative;
    
    div{
        width: 100%;
        &:nth-child(2){
            display: flex;
            justify-content: space-evenly;
        }
    }
    height: 200px;
}

    .ad-brand {
        text-align: center;
        display: flex;
        align-items: center;
        flex-direction: column;
        img {width: 100px;}
        p {margin-top: 5px;}
    }

@media screen and (max-width: 700px){
    .last-child {
        flex-direction: column;
    }
}

@media screen and (max-width: 350px){
    .ad-brand {
    img{
       width: 67px;
    }
    }
}

@media screen and (max-width: 550px){
    .last-child {
        div{
            &:nth-child(2){
                margin: 50px 0;
                justify-content: space-between;
                align-items: center;
            }
        }
    }
}
}
`;

export default HomePage;
