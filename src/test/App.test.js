import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
import {gifData, gifResponse} from "./mockData";
import {getResults, searchResult} from "../store/actions/search.action";
import axios from "../__mock__/axios";
import {instanceOf} from "prop-types";


const middlewares = [thunk];
const mockStore = configureStore(middlewares);


function fetchData () {
    return dispatch => {
        return axios.get().then((data) => {
            dispatch(searchResult(data));
        } )
    };
}

it('should execute fetch data', () => {
    const store = mockStore({});
    
    return store.dispatch(fetchData())
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual(searchResult(gifResponse))
        })
});



it('should dispatch action', () => {
    const store = mockStore({});
    
    store.dispatch(searchResult(gifResponse));
    
    const actions = store.getActions();
    
    const expectedPayload =  { type: 'SEARCH_RESULT', payload: {data: gifData}};
    
    expect(actions).toEqual([expectedPayload])
});

it('should contain at least one search term in slug or title', () => {
    const store = mockStore({});
    
    const search = 'title';
    
    return store.dispatch(fetchData())
        .then(() => {
            const actions = store.getActions();
            const slug = actions[0].payload.data[0].slug.split('-');
            const title = actions[0].payload.data[0].title.split(' ');
            const data = actions[0].payload.data;

            
            expect(slug).toBeInstanceOf(Array);
            try {
                expect(slug).toContain(search);
            }catch (e) {
                expect(title).toContain(search);
            }
            expect(slug).toContain('test');
            expect(data).toBeInstanceOf(Array)
            
        })
});