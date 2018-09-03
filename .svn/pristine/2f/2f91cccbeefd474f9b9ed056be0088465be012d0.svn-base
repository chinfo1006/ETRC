import PropTypes from "prop-types";

import React, {Component} from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import Modal from "react-native-modalbox";
import {Wheel} from "teaset";
import * as Color from "../configs/Color";
import {unitWidth,} from "../utils/AdapterUtilNew";
import WhiteSpace from "../components/whitespace/WhiteSpace";

export default class WheelViewModal extends Component {
    constructor(props) {
        super(props);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.state = {
            itemList: [],
            index: 0,
        };
    }

    /**
     * 默认属性   isRequired必传
     */
    static propTypes = {
        onPress: PropTypes.func.isRequired,
        onCancle: PropTypes.func,
    };

    open() {
        this.setState({
            index: 0
        })
        this.refs.SelectPicModal.open();
    }

    close() {
        this.refs.SelectPicModal.close();
    }

    componentWillUnmount() {
        this.close();
    }

    componentDidMount() {
        let list = []
        for (let i = 1; i <= 100; i++) {
            list.push(i);
        }
        this.setState({
            itemList: list
        })
    };

    render() {
        return (
            <Modal
                style={styles.background}
                ref={"SelectPicModal"}
                backdropPressToClose={true}
                backButtonClose={true}
                position={"center"}
                swipeToClose={false}
            >
                <Text style={styles.title}>请选择参与次数</Text>
                <WhiteSpace size={40}/>
                <Wheel
                    style={styles.wheel}
                    holeLine={2}
                    items={this.state.itemList}
                    itemStyle={{textAlign: 'center', fontSize: unitWidth * 30}}
                    onChange={(index) => {
                        this.setState({
                            index: index,
                        })
                    }}/>
                <WhiteSpace size={40}/>
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.bt}
                    onPress={() => {
                        this.props.onPress(this.state.itemList[this.state.index]);
                        this.close();
                    }}>
                    <Text style={styles.btText}>去支付</Text>
                </TouchableOpacity>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        width: unitWidth * 500,
        height: unitWidth * 445,
        alignItems: "center",
        backgroundColor: "white",
        paddingTop: unitWidth * 10,
        paddingBottom: unitWidth * 10,
        borderRadius: unitWidth * 10
    },
    title: {
        color: 'black',
        fontSize: unitWidth * 40
    },
    wheel: {
        flex: 1,
        width: unitWidth * 400,
    },
    bt: {
        width: unitWidth * 300,
        height: unitWidth * 70,
        borderRadius: unitWidth * 35,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Color.themeColor
    },

    btText: {
        color: Color.white,
    },
});
