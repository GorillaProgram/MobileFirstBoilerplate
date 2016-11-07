/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import HomeView from '../view/HomeView';

class HomeContainer extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        const adModels = [
            {
                image: 'http://10.240.90.212:7001/padServer/padimages/1.png',
                url: 'http://www.baidu.com'
            },
            {
                image: 'http://10.240.90.212:7001/padServer/padimages/1.png',
                url: 'http://www.taobao.com'
            }
        ];
        // 测试数据
        const productModels = [
            {
                image: 'http://10.240.90.212:7001/padServer/padimages/1.png',
                content: [
                    {
                        des: '名称',
                        text: '白金卡(精致版)'
                    },
                    {
                        des: '额度',
                        text: '10万-100万'
                    },
                    {
                        des: '币种',
                        text: '多币种'
                    },
                    {
                        des: '简介',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    }
                ]
            },
            {
                image: 'http://10.240.90.212:7001/padServer/padimages/1.png',
                content: [
                    {
                        des: '名称',
                        text: '白金卡(精致版)'
                    },
                    {
                        des: '额度',
                        text: '10万-100万'
                    },
                    {
                        des: '币种',
                        text: '多币种'
                    },
                    {
                        des: '简介',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    }
                ]
            },
            {
                image: 'http://10.240.90.212:7001/padServer/padimages/1.png',
                content: [
                    {
                        des: '名称',
                        text: '白金卡(精致版)'
                    },
                    {
                        des: '额度',
                        text: '10万-100万'
                    },
                    {
                        des: '币种',
                        text: '多币种'
                    },
                    {
                        des: '简介',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    }
                ]
            },
            {
                image: 'http://10.240.90.212:7001/padServer/padimages/1.png',
                content: [
                    {
                        des: '名称',
                        text: '白金卡(精致版)'
                    },
                    {
                        des: '额度',
                        text: '10万-100万'
                    },
                    {
                        des: '币种',
                        text: '多币种'
                    },
                    {
                        des: '简介',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    }
                ]
            }
        ];
        return (
            <HomeView
                adModels={adModels}
                productModels={productModels}
            />
        );
    }
}

HomeContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,

};

HomeContainer.contextTypes = {
    router: React.PropTypes.object
};

function mapStateToProps(state) {
    const {  } = state;
    return {

    };
}

export default connect(mapStateToProps)(HomeContainer);
