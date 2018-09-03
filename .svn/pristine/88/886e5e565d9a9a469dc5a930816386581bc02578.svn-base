import React, {Component} from 'react';
import {
    StyleSheet,
    Animated,
    Easing,
    View,
    Text,
} from 'react-native';
import {unitWidth} from "../utils/AdapterUtilNew";

export default class ScrollNewsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            translateY: new Animated.Value(0),
        };
    }

    componentDidMount() {
        this.showHeadBar(0, this.props.itemList.length / 2);         //从第0条开始，轮播5条数据
    }

    showHeadBar(index, count) {
        index++;
        Animated.timing(this.state.translateY, {
            toValue: -unitWidth * 72 * index,             //40为文本View的高度
            duration: 500,                        //动画时间
            Easing: Easing.linear,
            delay: 3000                            //文字停留时间
        }).start(() => {                          //每一个动画结束后的回调
            if (index >= count) {
                index = 0;
                this.state.translateY.setValue(0);
            }
            this.showHeadBar(index, count);  //循环动画
        })
    }


    render() {
        return (
            <View style={styles.container}>
                <Animated.View
                    style={[styles.wrapper, {
                        transform: [{
                            translateY: this.state.translateY
                        }]
                    }
                    ]}
                >
                    {this.props.itemList.map((item, index) => {
                        return (
                            <View style={styles.item} key={"item" + index}>
                                <Text
                                    style={styles.text}
                                    numberOfLines={1}
                                    onPress={() => {
                                        this.props.onPressItem(item)
                                    }}>{item.FullHead}</Text>
                            </View>
                        )
                    })}
                </Animated.View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: unitWidth * 440,
        height: unitWidth * 72,
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    wrapper: {},

    item: {
        width: unitWidth * 440,
        height: unitWidth * 36,
        justifyContent: 'center',
    },
    text: {
        fontSize: unitWidth * 24,
        color: "#444444"
    },
});