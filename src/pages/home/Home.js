import React from 'react';

import Top from './subpages/Top'
import About from './subpages/About'
import SpaceA from './subpages/SpaceA'
import SpaceB from './subpages/SpaceB'
import Service from './subpages/Service'
import Contact from './subpages/Contact'

import {Row, Col, Button, Drawer} from 'antd'

import {SectionsContainer, Section} from 'react-fullpage'

import logo from '../../resources/images/home/logo.png'
import Zh from '../../resources/images/home/Zh.png'
import En from '../../resources/images/home/En.png'
import change from '../../resources/images/home/change.png'


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 1,
            isPc: true,
            visible: false,
            placement: 'bottom'
            // language: localStorage.getItem('language') || 1
        }
    }

    IsPC() {
        let userAgentInfo = navigator.userAgent;
        let Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        let flag = true;
        for (let v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }

    componentDidMount() {
        let isPc = this.IsPC();
        // 这里检测是否是移动端
        this.setState({
            language: Number(localStorage.getItem('language')) || 1,
            isPc: isPc
        });
        // 监听url变化
        if (isPc) {
            window.addEventListener('hashchange', (e) => {
                let hash = e.currentTarget.location.hash;
                let header = document.getElementsByTagName('header');
                let language = document.getElementsByClassName('language');
                if (hash.indexOf('top') !== -1) {
                    header[0].classList.add('active');
                    language[0].classList.add('active');
                } else {
                    header[0].classList.remove('active');
                    language[0].classList.remove('active');
                }
                // 如果是spaceB 则空间设施要选中
                let spaceB = document.querySelector("a[href='#spaceA']");
                if (hash.indexOf('spaceB') > 0 || hash.indexOf('spaceA') > 0) {
                    spaceB.classList.add('active')
                } else {
                    spaceB.classList.remove('active')

                }
            })
        }

    }

    // 语言切换
    changeLanguage() {
        let lang = this.state.language === 1 ? 2 : 1;
        this.setState({
            language: lang
        });
        localStorage.setItem('language', lang);

    }

    showDrawer = () => {
        this.setState({
            visible: true
        });
        let mc = document.getElementsByClassName('mobile-change');
        if (mc.length > 0) {
            mc[1].classList.add('rotate')
        }
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
        let mc = document.getElementsByClassName('mobile-change');
        if (mc.length > 0) {
            mc[1].classList.remove('rotate')
        }

    };

    // 滚动
    scrollToAnchor = (anchorName) => {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if (anchorElement) {
                anchorElement.scrollIntoView();
            }
        }
        // this.onClose()
    };

    render() {
        let options = {
            activeClass: 'active',
            sectionClassName: 'section',
            anchors: ['top', 'about', 'spaceA', 'spaceB', 'service', 'contact'],
            scrollBar: false,
            navigation: true,
            verticalAlign: false,
            sectionPaddingTop: '0',
            sectionPaddingBottom: '0',
            arrowNavigation: true,
        };
        let navBar = this.state.language === 1 ? ['关于U-Lab', '空间设施', 'U-Lab服务', '联系我们'] : ['Overview', 'Solutions', 'What-else?', 'Contact Us'];
        let backTop = this.state.language === 1 ? '回到顶部' :'Back to top';
        if (this.state.isPc) {
            return (
                <div>
                    <div className="language">
                        {
                            this.state.language === 1 ?
                                <img src={En} width={40} onClick={this.changeLanguage.bind(this)}/>
                                :

                                <img src={Zh} width={40} onClick={this.changeLanguage.bind(this)}/>

                        }
                    </div>
                    <header>
                        <Row gutter={16}>
                            <Col span={5}>
                                <h2><a href="#about">{navBar[0]}</a></h2>
                            </Col>
                            <Col span={5}>
                                <h2><a href="#spaceA">{navBar[1]}</a></h2>
                            </Col>
                            <Col span={4}>
                                <a href="#top" className="logo active"><img src={logo} alt="logo"/></a>
                            </Col>
                            <Col span={5}>
                                <h2><a href="#service">{navBar[2]}</a></h2>
                            </Col>
                            <Col span={5}>
                                <h2><a href="#contact">{navBar[3]}</a></h2>
                            </Col>
                        </Row>
                    </header>
                    <SectionsContainer {...options}>
                        <Section>
                            <Top language={this.state.language} isPc={this.state.isPc}/>
                        </Section>
                        <Section>
                            <About language={this.state.language} isPc={this.state.isPc}/>
                        </Section>
                        <Section>
                            <SpaceA language={this.state.language} isPc={this.state.isPc}/>
                        </Section>
                        <Section>
                            <SpaceB language={this.state.language} isPc={this.state.isPc}/>
                        </Section>
                        <Section>
                            <Service language={this.state.language} isPc={this.state.isPc}/>
                        </Section>
                        <Section color="#BaB7d2">
                            <Contact language={this.state.language} isPc={this.state.isPc}/>
                        </Section>
                    </SectionsContainer>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="language mobile-change">
                        {
                            this.state.language === 1 ?
                                <img src={En} width={40} onClick={this.changeLanguage.bind(this)}/>
                                :

                                <img src={Zh} width={40} onClick={this.changeLanguage.bind(this)}/>

                        }
                    </div>

                    <div className="mobile-change">
                        <img src={change} alt="change" onClick={this.showDrawer}/>
                    </div>

                    <Drawer

                        placement={this.state.placement}
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                    >
                        <a onClick={() => {
                            this.onClose();
                            this.scrollToAnchor('about')
                        }}>{navBar[0]}</a>

                        <a onClick={() => {
                            this.onClose();
                            this.scrollToAnchor('spaceA')
                        }}>{navBar[1]}</a>

                        {/*<a href="#top" className="logo"><img src={logo} alt="logo"/></a>*/}

                       <a onClick={() => {
                            this.onClose();
                            this.scrollToAnchor('service')
                        }}>{navBar[2]}</a>

                        <a onClick={() => {
                            this.onClose();
                            this.scrollToAnchor('contact')
                        }}>{navBar[3]}</a>
                        {/*<p><img src={logo} height={60} alt="logo"/></p>*/}
                        <p><a onClick={() => {
                            this.onClose();
                            this.scrollToAnchor('top')
                        }}>{backTop}</a></p>
                    </Drawer>

                    <Top language={this.state.language} isPc={this.state.isPc}/>

                    <About language={this.state.language} isPc={this.state.isPc}/>

                    <SpaceA language={this.state.language} isPc={this.state.isPc}/>

                    <SpaceB language={this.state.language} isPc={this.state.isPc}/>

                    <Service language={this.state.language} isPc={this.state.isPc}/>

                    <Contact language={this.state.language} isPc={this.state.isPc}/>
                </div>
            )
        }
    }
}