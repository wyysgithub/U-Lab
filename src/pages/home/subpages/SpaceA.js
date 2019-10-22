import React from 'react';

import {Row, Col} from 'antd';

import space1 from '../../../resources/images/home/space/space1.png'
import space2 from '../../../resources/images/home/space/space2.png'
import dna from '../../../resources/images/home/space/dna.png'
import office from '../../../resources/images/home/space/office.png'

export default class SpaceA extends React.Component {
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
        let title = this.props.language === 1 ? '空间设施' : 'Solutions';
        let solutionInfoZh = [
            {title: '定制化实验套间', desc: ['BSL2', '独立实验室及配套办公室', '模块化建设 150m²/250m²/500m²']},
            {title: '办公空间', desc: ['独立&共享办公室', '提供专用办公桌', '可使用所有便利设施']},
        ];
        let solutionInfoEn = [
            {title: 'Lab Suits', desc: ['BSL2', 'Private & Customized', 'Modular construction 150m²/250m²/500m²']},
            {title: 'Co-Working', desc: ['Private and shared offices', 'Dedicated desks', 'Access to all amenities']},
        ];
        let solutionInfo = this.props.language === 1 ? solutionInfoZh : solutionInfoEn;
        if (this.props.isPc) {
            return (
                <div className='about-div space'>
                    <h1 style={{marginTop:'20px'}}>{title}</h1>
                    <div className='line'/>
                    <Row gutter={16} type="flex" justify="center">

                        <Col span={9}>
                            <div className="space-dna">
                                <div className="img-box">
                                    <img width={50} src={dna} alt="dna"/>
                                    <p>{solutionInfo[0].title}</p>
                                </div>
                                <ul>
                                    {
                                        solutionInfo[0].desc.map((item, i) => {
                                            return (
                                                <li key={i}><span>{item}</span></li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>

                            <div>
                                <img className="spaceImg" width={450} src={space1} alt=""/>
                            </div>
                        </Col>

                        <Col span={9}>
                            <div>
                                <img className="spaceImg" width={450} src={space2} alt=""/>
                            </div>
                            <div className="space-dna">
                                <div className="img-box">
                                    <img width={50} src={office} alt="office"/>
                                    <p>{solutionInfo[1].title}</p>
                                </div>
                                <ul>
                                    {
                                        solutionInfo[1].desc.map((item, i) => {
                                            return (
                                                <li key={i}><span>{item}</span></li>
                                            )
                                        })
                                    }
                                </ul>

                            </div>


                        </Col>
                    </Row>
                </div>
            )
        } else {
            return (
                <div className='about-div space mobile'>
                    <h1 id="spaceA">{title}</h1>
                    <div className='line'/>
                    <Row type="flex" justify="center">

                        <Col span={24}>
                            <div className="space-dna" style={{'margin':'30px 0'}}>
                                <div className="img-box">
                                    <img  src={dna} alt="dna"/>
                                    <p style={{'fontSize':'0.8rem'}}>{solutionInfo[0].title}</p>
                                </div>
                                <ul>
                                    {
                                        solutionInfo[0].desc.map((item, i) => {
                                            return (
                                                <li key={i}><span>{item}</span></li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <img src={space1} alt=""/>
                            </div>
                        </Col>
                        <Col span={24}>
                            <div className="space-dna">
                                <div className="img-box">
                                    <img  src={office} alt="office"/>
                                    <p>{solutionInfo[1].title}</p>
                                </div>
                                <ul>
                                    {
                                        solutionInfo[1].desc.map((item, i) => {
                                            return (
                                                <li key={i}><span>{item}</span></li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <img src={space2} alt=""/>
                            </div>
                        </Col>

                    </Row>
                </div>
            )
        }
    }
}