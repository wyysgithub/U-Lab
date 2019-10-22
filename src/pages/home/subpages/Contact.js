import React from 'react';

import map from '../../../resources/images/home/map.png'

export default class Contact extends React.Component {
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
        let title = this.props.language === 1 ? '联系我们' : 'Contact Us';
        let addr = this.props.language === 1 ? {
            title: '总部地址：',
            desc: '上海外高桥保税区基隆路6号15楼，200131'
        } : {title: 'Headquarter：', desc: '15F, No. 6 Jilong Rd., Pudong New Area, Shanghai, China'};
        let leader = this.props.language === 1 ? ['胡经理', '毕经理'] : ['Reva Hu', 'Kenson Bi'];
        let emailTitle = this.props.language === 1 ? '电话/邮箱' : 'Mobile/E-mail';
        if(this.props.isPc){
        return (
            <div className='about-div contact'>
                <h1>{title}</h1>
                <div className='line'/>
                <div className="map">
                    <img src={map} width={660} alt="map"/>
                </div>
                <div className="contact-info">
                    <h4>{addr.title}</h4>
                    <p>{addr.desc}</p>
                    <h4>{emailTitle}：</h4>
                    <p>+86  13681660934  hunan@shftz.cn（{leader[0]}）</p>
                    <p>+86  13916240961  bilicun@shftz.cn（{leader[1]}）</p>
                    <span>U-Lab, it’s your lab!</span>
                </div>
            </div>
        )
        }else {
            return(
                <div className='about-div contact mobile'>
                    <h1 id="contact">{title}</h1>
                    <div className='line'/>
                    <div className="map">
                        <img src={map} alt="map"/>
                    </div>
                    <div className="contact-info">
                        <h4>{addr.title}</h4>
                        <p>{addr.desc}</p>
                        <h4>{emailTitle}：</h4>
                        <p>+86 13681660934 hunan@shftz.cn（{leader[0]}）</p>
                        <p>+86 13916240961 bilicun@shftz.cn（{leader[1]}）</p>
                    </div>
                </div>
            )
        }
    }
}