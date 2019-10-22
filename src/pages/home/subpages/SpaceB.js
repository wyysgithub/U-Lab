import React from 'react';

import {Row, Col} from 'antd';


import num1 from '../../../resources/images/home/space/1.png'
import num2 from '../../../resources/images/home/space/2.png'
import num3 from '../../../resources/images/home/space/3.png'
import num4 from '../../../resources/images/home/space/4.png'
import num5 from '../../../resources/images/home/space/5.png'
import num6 from '../../../resources/images/home/space/6.png'
import num7 from '../../../resources/images/home/space/7.png'
import num8 from '../../../resources/images/home/space/8.png'
import num9 from '../../../resources/images/home/space/9.png'
import num10 from '../../../resources/images/home/space/10.png'
import num11 from '../../../resources/images/home/space/11.png'
import num12 from '../../../resources/images/home/space/12.png'
import num13 from '../../../resources/images/home/space/13.png'
import num14 from '../../../resources/images/home/space/14.png'
import num15 from '../../../resources/images/home/space/15.png'
import num16 from '../../../resources/images/home/space/16.png'


export default class SpaceB extends React.Component {
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
        let spaceInfoArrZh = [
            {src:num1,title:"接待处",className:''},
            {src:num2,title:"充足停车位",className:'gray'},
            {src:num3,title:"24/7安保",className:''},
            {src:num4,title:"24/7门禁",className:'gray'},
            {src:num5,title:"IT数据中心",className:'gray'},
            {src:num6,title:"空间设计和扩展",className:''},
            {src:num7,title:"现场设施管理",className:'gray'},
            {src:num8,title:"会议室预定系统",className:''},
            {src:num9,title:"健身中心",className:''},
            {src:num10,title:"咖啡厅及休息室",className:'gray'},
            {src:num11,title:"超高速光纤互联网",className:''},
            {src:num12,title:"信息技术与支持",className:'gray'},
            {src:num13,title:"危废处理",className:'gray'},
            {src:num14,title:"环境健康与安全",className:''},
            {src:num15,title:"双柴油发动机",className:'gray'},
            {src:num16,title:"应急备用电源",className:''},
        ];
        let spaceInfoArrEn = [
            {src:num1,title:"Reception",className:''},
            {src:num2,title:"Abundant-Parking",className:'gray'},
            {src:num3,title:"24/7 Security",className:''},
            {src:num4,title:"24/7 Access",className:'gray'},
            {src:num5,title:"IT Data Center",className:'gray'},
            {src:num6,title:"Space Built-out",className:''},
            {src:num7,title:"Facilities Management",className:'gray'},
            {src:num8,title:"Conference Rooms",className:''},
            {src:num9,title:"Gym",className:''},
            {src:num10,title:"Coffee & Talk ",className:'gray'},
            {src:num11,title:"Fiber Internet",className:''},
            {src:num12,title:"IT Supports",className:'gray'},
            {src:num13,title:"Waste Management",className:'gray'},
            {src:num14,title:"EHS",className:''},
            {src:num15,title:"Dual Diesel Generator",className:'gray'},
            {src:num16,title:"Back-up Power",className:''},
        ];
        let spaceInfoArr = this.props.language === 1 ? spaceInfoArrZh : spaceInfoArrEn;
        if(this.props.isPc){
            return (
                <div className='about-div spaceB'>
                    <Row gutter={16} type="flex" justify="center">
                        {
                            spaceInfoArr.map((item,i) => {
                                return(
                                    <Col span={5} key={i}>
                                        <div className="space-dna">
                                            <div className="img-box">
                                                <img width={50} src={item.src} alt="dna"/>
                                                <p className={item.className}>{item.title}</p>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }


                    </Row>
                </div>
            )
        }else {
            return (
                <div className='about-div spaceB mobile'>
                    <Row type="flex" justify="center">
                        {
                            spaceInfoArr.map((item,i) => {
                                return(
                                    <Col span={12} key={i}>
                                        <div className="space-dna">
                                            <div className="img-box">
                                                <img width={50} src={item.src} alt="dna"/>
                                                <p className={item.className}>{item.title}</p>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }


                    </Row>
                </div>
            )
        }

    }
}