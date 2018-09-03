/**
 * Created by Tloy on 2017/9/20.
 */

import {StackNavigator} from 'react-navigation';

import RouteConfig from '../configs/RouteConfig';

// import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';


/**
 * 使用facebook推荐的react-navigation作为应用的导航器=======相当于安卓配置清单文件
 */

 //
export default BaseNavigator = StackNavigator(
    
    RouteConfig, 
    {     // navigation 属性配置
        // initialRouteName: RouteConfig.CoinExchange.name,
        initialRouteName: RouteConfig.HomeTab.name,  //设置默认路由,不设置,会默认第一个
        headerMode: 'null',     //滑动返回时导航栏的效果,设为null 隐藏默认导航栏
        // navigationOptions: {
        //     header: null   //隐藏默认导航栏,默认导航栏样式单一,不具备个性化定制功能.需自行封装导航栏
        // },
        gesturesEnabled: false,  // 是否允许滑动返回
        mode: 'modal',
        // cardStyle:
        transitionConfig: () => ({
            // screenInterpolator: CardStackStyleInterpolator.forHorizontal,  //设置页面切换动画
            transitionSpec: {
                duration: 100,    //动画时长
            }
        })

        
    });
    