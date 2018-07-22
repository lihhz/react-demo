import React, {Component} from 'react';
import ZhiHuLogo from "./icon/ZhiHuLogo";
import ZiSelect from "./icon/ZiSelect";
import ZiClose from "./icon/ZiClose";
import '../App.css'
import Modal from "../common/Modal";

class Login extends Component {
    render() {
        return (
            <Modal>
                <div className="Card SignContainer-content">
                    <div className="SignFlowHeader">
                        <ZhiHuLogo/>
                        <div className="SignFlowHeader-slogen">注册知乎，发现更大的世界</div></div>
                    <div className="SignContainer-inner">
                        <div className="Register" data-za-detail-view-path-module="SignUpForm" data-za-extra-module="{'card':{'content':null}}">
                            <div>
                                <div className="Register-content">
                                    <form novalidate="">
                                        <div className="SignFlow-account">
                                            <div className="SignFlow-supportedCountriesSelectContainer">
                                                <div className="Popover SignFlow-supportedCountriesSelect">
                                                    <button role="combobox" aria-expanded="false" type="button" id="Popover172-toggle" aria-haspopup="true" aria-owns="Popover172-content" className="Button Select-button Select-plainButton Button--plain">中国 +86
                                                        <span style={{display: 'inline-flex', alignItems: 'center'}}>&#8203;'
                                                                        <ZiSelect/>
                                                                    </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <span className="SignFlow-accountSeperator">&nbsp;'</span>
                                            <div className="SignFlowInput SignFlow-accountInputContainer">
                                                <div className="SignFlow-accountInput Input-wrapper">
                                                    <input name="phoneNo" type="tel" className="Input" placeholder="手机号" value="" /></div>
                                                <div className="SignFlowInput-errorMask SignFlowInput-requiredErrorMask SignFlowInput-errorMask--hidden"></div>
                                            </div>
                                        </div>
                                        <div className="Captcha SignFlow-captchaContainer Register-captcha" style={{width: '0px', height: '0px', opacity: '0', overflow: 'hidden', margin: '0px', padding: '0px', border: '0px'}}>
                                            <div>
                                                <div className="SignFlowInput">
                                                    <div className="Input-wrapper">
                                                        <input name="captcha" type="text" tabIndex="-1" className="Input" placeholder="验证码" value="" /></div>
                                                    <div className="SignFlowInput-errorMask SignFlowInput-requiredErrorMask SignFlowInput-errorMask--hidden"></div>
                                                </div>
                                                <span className="Captcha-englishImage">
                                                                <div className="Captcha-englishContainer">
                                                                  <img data-tooltip="看不清楚？换一张" className="Captcha-englishImg" alt="图形验证码" />
                                                                </div>
                                                            </span>
                                            </div>
                                        </div>
                                        <div className="Register-SMSInput">
                                            <div className="SignFlow SignFlow-smsInputContainer">
                                                <div className="SignFlowInput SignFlow-smsInput">
                                                    <div className="Input-wrapper">
                                                        <input name="digits" type="number" className="Input" placeholder="输入 6 位短信验证码" value="" /></div>
                                                    <div className="SignFlowInput-errorMask SignFlowInput-requiredErrorMask SignFlowInput-errorMask--hidden"></div>
                                                </div>
                                                <button type="button" className="Button CountingDownButton SignFlow-smsInputButton Button--plain">获取短信验证码</button></div>
                                            <div className="Register-smsBackUp">
                                                <span>接收语音验证码</span></div>
                                        </div>
                                        <button type="submit" className="Button Register-submitButton Button--primary Button--blue">注册</button>
                                    </form>
                                    <div className="Register-footer">
                                                  <span className="Register-declaration">注册即代表同意
                                                    <a href="https://www.zhihu.com/terms">《知乎协议》</a>
                                                    <a href="https://www.zhihu.com/terms/privacy">《隐私政策》</a>
                                                  </span>
                                        <a className="Register-org" href="https://www.zhihu.com/org/signup">注册机构号</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="SignContainer-switch">已有帐号？
                            <span>登录</span>
                        </div>
                        <div className="SignFlowHomepage-qrImage SignFlowHomepage-qrImageHidden">
                            <div></div>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default Login;