import React, {useCallback, useRef, useState} from 'react';
import Input from "../../atoms/input";
import Button from "../../atoms/button";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {getResults} from "../../../../store/actions/search.action";
import {clearSearch, closeModalDispatch} from "../../../../store/actions/clear.action";
import {selectedGif} from "../../../../store/actions/usesearch.action";
import {ClipLoader} from "react-spinners";
import {Link} from "react-router-dom";
import loader from './35.gif';

const SearchInput = () => {
    const [inputState, setInputState] = useState({search: ''});
    const [imageDownloading, setImageDownloading] = useState(true);
    const {data, loading, error, modal, pagination} = useSelector(state => state.SearchState);
    
    const dispatch = useDispatch();
    
    const observer = useRef();
    
    
    const lastSearchResult = useCallback(node => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                dispatch(getResults({
                    search: inputState.search,
                    offset: pagination.offset + 25,
                    count: pagination.total_count
                }))
            }
        });
        if (node) observer.current.observe(node);
        // eslint-disable-next-line
    }, [data]);
    
    // console.log(lastSearchResult);
    
    
    const imageLoad = () => {
        setImageDownloading(false);
    };
    
    const handleOnchange = (e) => {
        setInputState({...inputState, [e.target.name]: e.target.value})
    };
    
    const handleSubmit = () => {
        dispatch(closeModalDispatch(true));
        if (inputState.search !== '') {
            dispatch(getResults(inputState))
        }
    };
    
    const handleSelected = (e) => {
        dispatch(selectedGif(data[e.target.id]));
        dispatch(clearSearch())
    };
    
    return (
        <Styling variant={'primary'} imageLoading={imageDownloading}>
            <div className="search-input">
                <Input type={'search'} variant={'secondary'} value={inputState.search} name={'search'}
                       onChange={handleOnchange}/>
                <Button variant={'secondary'} name={'Search'} onClick={handleSubmit}/>
            </div>
            {
                loading ? 'loading...' :
                    error ? error :
                        data.length > 0 && inputState.search && modal ?
                            <div className="drop-results"
                                //      onMouseLeave={() => {
                                //     dispatch(closeModalDispatch(false));
                                //     dispatch(clearSearch())
                                // }}
                                 onClickCapture={(e) => {
                                     setInputState({search: ''})
                                 }}>
                                {
                                    error ? error :
                                        loading ? <ClipLoader/> :
                                            data.map((el, index) => {
                                                if (data.length === index + 1) {
                                                    return <div key={el.id+'ty'+index} ref={lastSearchResult}
                                                                className={'gif-result'} onClick={handleSelected}>
                                                        <Link to={'/gif_details'}>
                                                            {/*<img src={loader} alt="loading" style={{display: imageDownloading ? 'block' : 'none' }}/>*/}
                                                            <img id={index} src={el.images.downsized.url}
                                                                 className={'loading'}
                                                                 onLoad={imageLoad}
                                                                 alt={el.type}/>
                                                            
                                                        </Link>
                                                    </div>
                                                } else {
                                                    return <div key={el.id+'ty'+index} className={'gif-result'}
                                                                onClick={handleSelected}>
                                                        <Link to={'/gif_details'}>
                                                             {/*<img src={loader} alt="loading" style={{display: imageDownloading ? 'block' : 'none' }}/>*/}
                                                                <img id={index} src={el.images.downsized.url}
                                                                     onLoad={imageLoad}
                                                                     className={'loading'}
                                                                     alt={el.type}/>
                                                            
                                                        </Link>
                                                    </div>
                                                }
                                                
                                            })
                                }
                            </div>
                            : null
            }
        </Styling>
    );
};

const Styling = styled.div`
width: 100%;
position: relative;

.search-input{
    position: relative;
    display: flex;
    align-items: center;
    
    input {
        height: 40px;
        border: 1px solid grey;
        border-radius: 10px;
        outline: none;
    }
    
    button{
        position: absolute;
        right: 3px;
    }
}
.drop-results{
    position: absolute;
    z-index: 2;
    background: white;
    box-shadow: 5px 3px 10px 1px #00000057;
    overflow-y: scroll;
    height: 250px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    border-radius: 7px;

    .gif-result {
        overflow: hidden;
        display: flex;
        justify-content: center;
        width: 94px; //85
        height: 90px;
        margin: 5px;
        border: 1px solid #3535352b;
        border-radius: 7px;
        background: url(${loader || null}) no-repeat scroll center center;
        background-size: contain;
        img {width: 100%; height: 100%;};
        transition: 0.5s;
    }
}

@media screen and (max-width: 425px) {
    .drop-results {
        .gif-result {
            width: 87px;
        }
    }
}
@media screen and (max-width: 350px) {
    .drop-results {
        .gif-result {
            width: 80px;
            height: 80px;
        }
    }
}
`;

export default SearchInput;