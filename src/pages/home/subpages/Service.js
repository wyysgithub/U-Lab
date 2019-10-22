import React from 'react';

import {Row, Col} from 'antd';

import img1 from '../../../resources/images/home/service/1.png'
import img2 from '../../../resources/images/home/service/2.png'
import img3 from '../../../resources/images/home/dcs.png'
import cirA from '../../../resources/images/home/service/circleA.png'
import cirB from '../../../resources/images/home/service/circleB.png'


export default class Service extends React.Component {
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
        let title = this.props.language === 1 ? 'U-Lab服务' : 'You could…';
        let serviceInfoZh = [
            {imgSrc: img1, title: '空间服务', desc: ['模块式实验空间', '实验室智能管理系统', '共享办公、会议、休闲空间']},
            {imgSrc: img2, title: '跨境加速', desc: ['3-6个月短期加速项目', '投资人对接', '生物医药会议 | 国际论坛']},
            {imgSrc: img3, title: '商务配套', desc: ['法务、财务、人力资源', '政策扶持申请', '产品推广展示']}

        ];
        let serviceInfoEn = [
            {
                imgSrc: img1,
                title: 'Space',
                desc: ['Reside in our modular labs', 'Experience with our lab Intelligent Management System', 'Stay in our shared offices, meeting rooms, or recreation area']
            },
            {
                imgSrc: img2,
                title: 'Acceleration',
                desc: ['Grow your projects in 3-6 months', 'Talk to our investors', 'Attend Biomed Forums & Info Sessions']
            },
            {
                imgSrc: img3,
                title: 'Benefits',
                desc: ['Use our legal, financial & HR resources', 'Turn to us for policy support assistance', 'Exhibit your products']
            }

        ];
        let serviceInfo = this.props.language === 1 ? serviceInfoZh : serviceInfoEn;
        if (this.props.isPc) {
            return (
                <div className='about-div service'>
                    <img className='circleA' src={cirA} width={150} alt="cirA"/>
                    <img className='circleB' src={cirB} width={150} alt="cirB"/>
                    <Row gutter={16} type="flex" justify="center">
                        <Col span={4} className="service-title">
                            <h1>{title}</h1>
                            <div className='line'/>
                        </Col>
                        <Col span={10}>
                            {
                                serviceInfo.map((item, i) => {
                                    return (
                                        <div className="space-dna" key={i}>
                                            <div className="img-box">
                                                <img width={50} src={item.imgSrc} alt="img1"/>
                                                <p>{item.title}</p>
                                            </div>
                                            <ul>
                                                {
                                                    item.desc.map((de, d) => {
                                                        return (
                                                            <li key={d}><span>{de}</span></li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    )
                                })
                            }
                        </Col>

                    </Row>
                </div>
            )
        } else {
            return (
                <div className='about-div service mobile'>

                    <Row type="flex" justify="center">
                        <Col span={24} className="service-title">
                            <h1 id="service">{title}</h1>
                            <div className='line'/>
                        </Col>


                    </Row>
                    <Row>
                        <Col span={24}>
                            {
                                serviceInfo.map((item, i) => {
                                    return (
                                        <div className="space-dna" key={i}>
                                            <div className="img-box">
                                                <img width={50} src={item.imgSrc} alt="img1"/>
                                                <p>{item.title}</p>
                                            </div>
                                            <ul>
                                                {
                                                    item.desc.map((de, d) => {
                                                        return (
                                                            <li key={d}><span>{de}</span></li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    )
                                })
                            }
                        </Col>

                    </Row>
                </div>
            )
        }
    }
}