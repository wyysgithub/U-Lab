import React from 'react';

import {Row, Col} from 'antd'

import '../../../resources/css/home/home.css'

import city from '../../../resources/images/home/city.png'
import font from '../../../resources/images/home/font.png'


export default class Top extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        // let language = (navigator.language || navigator.browserLanguage).toLowerCase();
        // message.success('1')
        // message.success(language)
    }

    render() {
        if (this.props.isPc) {
            return (
                <div className='about-div'>
                    <Row gutter={16} className="center-row">
                        <Col span={12}>
                            <img width={600} src={font} alt="font"/>
                        </Col>
                        <Col span={12}>
                            <img width={600} className="topImg" src={city} alt="city"/>
                        </Col>
                    </Row>
                </div>
            )
        } else {
            return (
                <div className='about-div mobile' id="top">
                    <img src={font} alt="font"/>
                    <img src={city} alt="city"/>
                </div>
            )
        }

    }
}