import React from 'react';

import {Row, Col} from 'antd';

import about from '../../../resources/images/home/about.png'
import dcs from '../../../resources/images/home/dcs.png'
import dcs2 from '../../../resources/images/home/dcs2.png'
import dcs3 from '../../../resources/images/home/dcs3.png'

export default class About extends React.Component {
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
        let aboutInfo = this.props.language === 1 ? {
            title: '关于U-Lab',
            desc: 'U-Lab是上海外联发商务咨询有限公司打造的生物医药共享实验室项目。聚焦生物医药新药研发&IVD产业，联合自贸区产业资源，利用好保税研发政策，打造跨境双向科创加速服务特色的“分布式网络化”平台。'
        } : {
            title: 'Overview',
            desc: 'U-Lab is a multipurpose, customized lab space for life science innovators from all over the world. Conveniently located in the core area of China (Shanghai) Free Trade Zone, U-Lab facilitates cross-border collaborations.'
        };
        let ulInfoZh = [
            {title: '分布式网络化', desc: "生物医药、医疗器械行业领先企业，外资医院，科研院所集聚"},
            {title: '保税研发', desc: '进口研发设备免税、进口试剂保税'},
            {title: '跨境双向', desc: '中外合作研发、学术交流、跨境加速营'}
        ];
        let ulInfoEn = [
            {
                title: 'Innovation Hub',
                desc: "Leading players in life science industry, research institutions, universities and hospitals etc."
            },
            {title: 'Bonded R&D', desc: 'Imports: Duty-free equipment, bonded reagent etc.'},
            {title: 'Cross-border', desc: 'R&D corporation, academic exchanges, acceleration bootcamps etc.'}
        ];
        let ulInfo = this.props.language === 1 ? ulInfoZh : ulInfoEn;
        if (this.props.isPc) {
            return (
                <div className='about-div'>
                    <Row gutter={16} type="flex" justify="center">
                        <Col span={10} className="about-col">
                            <h1>{aboutInfo.title}</h1>
                            <div className='line'/>
                            <p>
                                {aboutInfo.desc}
                            </p>

                        </Col>
                        <Col span={10}>
                            <img height={220} src={about} alt="img"/>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" gutter={16} className="about-row">
                        <Col span={5}>
                            <img src={dcs} alt="dcs"/>
                            <h3>{ulInfo[0].title}</h3>
                            <p>
                                {ulInfo[0].desc}
                            </p>
                        </Col>

                        <Col span={5}>
                            <img src={dcs2} alt="dcs2"/>
                            <h3>{ulInfo[1].title}</h3>
                            <p>
                                {ulInfo[1].desc}
                            </p>
                        </Col>

                        <Col span={5}>
                            <img src={dcs3} alt="dcs3"/>
                            <h3> {ulInfo[2].title}</h3>
                            <p>
                                {ulInfo[2].desc}
                            </p>
                        </Col>
                    </Row>
                </div>
            )
        } else {
            return (
                <div className='about-div mobile'>
                    <Row type="flex" justify="center">
                        <Col span={20} className="about-col">
                            <h1 id="about">{aboutInfo.title}</h1>
                            <div className='line'/>
                            <p>
                                {aboutInfo.desc}
                            </p>

                        </Col>
                    </Row>
                    <Row>
                        <Col span={20}>
                            <img height={200} src={about} alt="img"/>
                        </Col>
                    </Row>
                    <Row type="flex" className="about-row mobile">
                        <Col span={24}>
                            <img src={dcs} alt="dcs"/>
                            <h3>{ulInfo[0].title}</h3>
                            <p>
                                {ulInfo[0].desc}
                            </p>
                        </Col>
                        <Col span={24}>
                            <img src={dcs2} alt="dcs2"/>
                            <h3>{ulInfo[1].title}</h3>
                            <p>
                                {ulInfo[1].desc}
                            </p>
                        </Col>

                        <Col span={24}>
                            <img src={dcs3} alt="dcs3"/>
                            <h3> {ulInfo[2].title}</h3>
                            <p>
                                {ulInfo[2].desc}
                            </p>
                        </Col>
                    </Row>
                </div>
            )
        }

    }
}