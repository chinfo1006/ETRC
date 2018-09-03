import React, {Component} from 'react';
import {
    StyleSheet,
    Animated,
    Easing,
    View,
    Text,
} from 'react-native';
import {titleHeight, unitWidth, width} from "../utils/AdapterUtilNew";
import * as Color from "../configs/Color";

export default class ScrollTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            translateX: new Animated.Value(0),
        };
    }

    componentDidMount() {
        this.showHeadBar();         //从第0条开始，轮播5条数据
    }

    showHeadBar() {
        Animated.timing(this.state.translateX, {
            toValue: unitWidth * 360 - unitWidth * 35 * this.props.title.length,            //40为文本View的高度
            duration: this.props.title.length * 200,                        //动画时间
            Easing: Easing.linear,
            delay: 2000
        }).start(() => {                          //每一个动画结束后的回调
            // this.state.translateY.setValue(0);
            Animated.timing(this.state.translateX, {
                toValue: 0,            //40为文本View的高度
                duration: 3000,                        //动画时间
                Easing: Easing.linear,
            }).start(() => {                          //每一个动画结束后的回调
                this.showHeadBar()
            })
        })
    }


    render() {
        return (
            <View style={styles.container}>
                <Animated.Text
                    numberOfLines={1}
                    style={[styles.text, {
                        width: unitWidth * 50 * this.props.title.length,
                        transform: [{
                            translateX: this.state.translateX
                        }]
                    }]}
                >{this.props.title}</Animated.Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: width - unitWidth * 360,
        height: titleHeight,
        overflow: 'hidden',
        justifyContent: 'center',
        backgroundColor: Color.themeColor
    },
    text: {
        fontSize: unitWidth * 40,
        color: "white",
    },
});