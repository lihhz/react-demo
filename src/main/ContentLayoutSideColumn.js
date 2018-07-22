import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Login from '../login/Login';

class ContentLayoutSideColumn extends Component {
    constructor(){
        super();
        this.state = {
            showLogin:false
        };
    }
    showLogin(){
        let newDIV = document.createElement('div');
        let desktop = document.getElementById('app-body');
        desktop.appendChild(newDIV);
        ReactDOM.render(<Login/>, newDIV);
    }
    render() {
        return (
            <div className="ContentLayout-sideColumn">
                <div>
                    <div>
                        <div className={`Sticky ${this.props.pageParam.scrollTop > 200 ? 'is-fixed' : ''}`} style={this.props.pageParam.scrollTop > 200 ? {width: '296px', top: '-120px', left: '878.5px'} : {}}>
                            <div className="Card">
                                <div className="HomeSidebar-signBanner">
                                    <div className="HomeSidebar-signBannerHeader">
                                        <div className="HomeSidebar-signBannerTitle">加入知乎<br/>发现更大的世界</div>
                                        <div className="HomeSidebar-signBannerActions">
                                            <button data-za-detail-view-id="2278" type="button" onClick={this.showLogin.bind(this)}
                                                    className="Button HomeSidebar-signBannerButton Button--blue Button--spread">登录
                                            </button>
                                            <button data-za-detail-view-id="2277" type="button"
                                                    className="Button HomeSidebar-signBannerButton Button--primary Button--blue Button--spread">注册
                                            </button>
                                        </div>
                                    </div>
                                    <div className="HomeSidebar-signBannerFooter">
                                        <div className="Card AppBanner HomeSidebar-download">
                                            <a
                                                className="AppBanner-link"
                                                href="http://zhi.hu/BDXoI">
                                                <div className="AppBanner-layout">
                                                    <img className="AppBanner-qrcode"
                                                         src="data:image/png;base64,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"
                                                         alt="QR Code of Downloading Zhihu App"/>
                                                    <div className="AppBanner-content">
                                                        <div className="AppBanner-title">扫码下载知乎 App</div>
                                                        <div className="AppBanner-description">立即体验更多精彩内容</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Card">
                                <div>
                                    <a data-za-detail-view-id="2280" href="https://event.zhihu.com/thedarktriad/"
                                       target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="HomeSidebar-adBannerImage"
                                            src="https://static.zhihu.com/heifetz/banner@3x.58626357294f500937df.png"
                                            alt="知乎实验室"/>
                                    </a>
                                </div>
                                <div></div>
                            </div>
                            <footer className="Footer">
                                <a className="Footer-item" target="_blank"
                                   rel="noopener noreferrer"
                                   href="//liukanshan.zhihu.com/">刘看山</a>
                                <span
                                    className="Footer-dot">
                                </span>
                                <a className="Footer-item" target="_blank"
                                   rel="noopener noreferrer"
                                   href="/question/19581624">知乎指南</a>
                                <span
                                    className="Footer-dot">
                                </span>
                                <a className="Footer-item" target="_blank"
                                   rel="noopener noreferrer" href="/terms">知乎协议</a>
                                <span
                                    className="Footer-dot">
                                </span>
                                <a className="Footer-item" target="_blank"
                                   rel="noopener noreferrer"
                                   href="/terms/privacy">隐私政策</a>
                                <br/>
                                <a
                                    className="Footer-item"
                                    target="_blank"
                                    href="/app">应用</a>
                                <span
                                    className="Footer-dot">
                                </span>
                                <a className="Footer-item" target="_blank"
                                   rel="noopener noreferrer"
                                   href="https://app.mokahr.com/apply/zhihu">工作</a>
                                <span
                                    className="Footer-dot">
                                </span>
                                <button type="button" className="Button OrgCreateButton">申请开通知乎机构号</button>
                                <br/>
                                <a className="Footer-item" target="_blank" rel="noopener noreferrer"
                                   href="https://zhuanlan.zhihu.com/p/28561671">侵权举报</a>
                                <span
                                    className="Footer-dot">
                                </span>
                                <a className="Footer-item" target="_blank"
                                   rel="noopener noreferrer"
                                   href="http://www.12377.cn">网上有害信息举报专区</a>
                                <br/>
                                <span
                                    className="Footer-item">违法和不良信息举报：010-82716601</span>
                                <br/>
                                <a className="Footer-item"
                                   target="_blank"
                                   href="/jubao">儿童色情信息举报专区</a>
                                <br/>
                                <a
                                    className="Footer-item" target="_blank"
                                    href="/contact">联系我们</a>
                                <span> © 2018 知乎</span>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentLayoutSideColumn;