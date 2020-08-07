import React from 'react';
import PropTypes from 'prop-types';
import Text from "../../atoms/typography/text";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Button from "../../atoms/button";
import {backgroundColor, textColor} from "../../../constants/theme/styles";

const AboutGif = (
    {
        data: {
            rating, import_datetime, trending_datetime, slug, title,
            images: {original: {url: source, webp, webp_size}, original_still: {height, width}}
        }
    }
) => {
    
    const getText = (text, type) => {
        if (type === 'title') {
            let newText = text.split(' ');
            return newText.splice(0, newText.length - 1).join(' ');
        } else if (type === 'slug') {
            let newText = text.split('-');
            return newText.splice(0, newText.length - 1);
        }
    };
    
    const getSize = (byte) => {
        let size = byte / 1000;
        if (size > 999) {
            size = size / 1000;
            return `${size.toFixed(2)} MB`;
        }
        return `${size.toFixed(2)} KB`
    };
    
    const trending = (dateString) => {
        let year = dateString.split('-')[0];
        let cur_year = new Date().toDateString().split(' ')[3];
        if (cur_year === year){
            return `Currently Trending`
        }
        return `last trending stat in ${year}`
    };
    
    return (
        <Styling variant={'secondary'}>
            <section>
                <div className="card">
                    <Text textCase={'uppercase'} variant={'secondary'} bold>
                        <strong>NAME:</strong>{" " + getText(title, 'title')}
                    </Text>
                </div>
                
                <div style={{display:'flex'}}>
                    <img style={{maxWidth: '500px', minWidth:'200px', width: '100%'}} src={source} alt=""/>
                </div>
                
                <div className="card">
                    <Text variant={'secondary'} >
                        <span style={{display: 'flex', alignItems: 'center'}}>
                            <strong>{'SLUGS: '}</strong>
                            <span style={{display:'flex', flexWrap: 'wrap'}}>
                                {
                                    getText(slug, 'slug').map((el, index) => (
                                        <span key={index} className={'slug-text'}>{el}</span>))
                                }
                            </span>
                            
                        </span>
                    </Text>
                </div>
            </section>
            
            <section>
                <div className="card-content">
                    <div className={'card'}>
                        <Text textCase={'uppercase'} bold variant={'secondary'}>Whats's Up</Text>
                    </div>
                    <div>
                        <Text textCase={'capitalize'} variant={'secondary'}>
                            rating: <span>{rating}</span>
                        </Text>
                    </div>
                    <div>
                        <Text textCase={'capitalize'} variant={'secondary'}>
                            date imported: <span>{import_datetime}</span>
                        </Text>
                    </div>
                    <div>
                        <Text textCase={'capitalize'} variant={'secondary'}>
                            trending: <span>{trending(trending_datetime)}</span>
                        </Text>
                    </div>
                </div>
            </section>
            <section>
                <div className="card-content">
                    <div className="card">
                        <Text variant={'secondary'} textCase={'uppercase'}><strong>Gif Properties</strong></Text>
                    </div>
                    <div className="image-properties">
                        <Text textCase={'uppercase'} variant={'secondary'}>height:<span className={'slug-text'}> {height}</span></Text>
                        <Text textCase={'uppercase'} variant={'secondary'}>width: <span className={'slug-text'}>{width}</span></Text>
                        <Text textCase={'uppercase'} variant={'secondary'} bold>size: <span className={'slug-text'}>{getSize(webp_size)}</span></Text>
                    </div>
                </div>
                <div className={"card"}>
                    <span >
                        <Link to={{pathname: webp}} rel="noopener noreferrer" target="_blank">
                            <Text textCase={'uppercase'} variant={'primary'}>
                                <Button name={'Goto Giphy'} textCase={'uppercase'}/>
                            </Text>
                        </Link>
                    </span>
                </div>
            </section>
        </Styling>
    );
};

AboutGif.propTypes = {
    data: PropTypes.object,
};

const Styling = styled.div`
width: 100%;

.card {
    background: ${backgroundColor};
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 7px;

}
.card-content {
    padding: 1rem;
    background: grey;
    border-radius: 7px;
    margin: 1rem 0;
}
.slug-text {
    background: grey;
    margin: 5px 10px;
    padding: 5px;
    color: ${textColor};
    text-transform: uppercase;
    border-radius: 7px;
}

`;

export default AboutGif;