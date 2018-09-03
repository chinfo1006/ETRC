/**
 * Created by Tloy on 2018/1/2.
 */


"use strict"

import React, {Component} from 'react';
import {View} from 'react-native'
import {Provider} from 'react-redux';
import configureStore from './store/ConfigureStore'
import BaseNavigator from './pages/BaseNavigator' 
import {getToken} from "./utils/CacheUtil";  

const store = configureStore();

export default class Root extends Component {
    constructor(props) {
        super(props)
        global.userInfo = {}
        getToken(() => {
            this.setState({
                readToken: true
            })
        })
    }

    componentDidMount() {
    }

    state = {
        readToken: false,
    }


    render() {
        return (
            <Provider store={store}>
                {this.state.readToken ? (
                    <BaseNavigator/>
                ) : (<View></View>)}
            </Provider>
        )
    }
}