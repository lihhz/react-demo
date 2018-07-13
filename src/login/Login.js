import React, {Component} from 'react';
import ZhiHuLogo from "./icon/ZhiHuLogo";
import ZiSelect from "./icon/ZiSelect";
import ZiClose from "./icon/ZiClose";


class Login extends Component {
    render() {
        return (
            <div>
                <div>
                    <span>
                        <div className="Modal-wrapper">
                            <div className="Modal-backdrop"></div>
                                <div className="Modal Modal--default signFlowModal" tabindex="0">
                                    <div className="Modal-inner">
                                        <div className="Modal-content">
                                            <div className="Card SignContainer-content">
                                                <div className="SignFlowHeader">
                                                    <ZhiHuLogo/>
                                                    <div
                                                        className="SignFlowHeader-slogen">注册知乎，发现更大的世界
                                                    </div>
                                                </div>
                                                <div className="SignContainer-inner">
                                                    <div className="Register"
                                                         data-za-detail-view-path-module="SignUpForm"
                                                         data-za-extra-module="{'card':{'content':null}}">
                                                        <div>
                                                            <div className="Register-content">
                                                            <form novalidate="">
                                                            <div className="SignFlow-account">
                                                                <div className="SignFlow-supportedCountriesSelectContainer">
                                                                    <div className="Popover SignFlow-supportedCountriesSelect">
                                                                        <button role="combobox"
                                                                                aria-expanded="false"
                                                                                type="button"
                                                                                id="Popover172-toggle"
                                                                                aria-haspopup="true"
                                                                                aria-owns="Popover172-content"
                                                                                className="Button Select-button Select-plainButton Button--plain">
                                                                            中国 +86
                                                                            <span style={{display: 'inline-flex', alignItems: 'center'}}>&#8203;'
                                                                                <ZiSelect/>
                                                                            </span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <span className="SignFlow-accountSeperator">&nbsp;'</span>
                                                                <div className="SignFlowInput SignFlow-accountInputContainer">
                                                                    <div className="SignFlow-accountInput Input-wrapper">
                                                                        <input name="phoneNo" type="tel" className="Input" placeholder="手机号" value=""/>
                                                                    </div>
                                                                    <div className="SignFlowInput-errorMask SignFlowInput-requiredErrorMask SignFlowInput-errorMask--hidden"></div>
                                                                </div>
                                                            </div>
                                                            <div className="Captcha SignFlow-captchaContainer Register-captcha"
                                                                style={{width: '0px', height: '0px', opacity: '0', overflow: 'hidden', margin: '0px', padding: '0px', border: '0px'}}>
                                                                <div>
                                                                    <div className="SignFlowInput">
                                                                        <div className="Input-wrapper">
                                                                            <input name="captcha" type="text" tabIndex="-1" className="Input" placeholder="验证码" value=""/>
                                                                        </div>
                                                                        <div className="SignFlowInput-errorMask SignFlowInput-requiredErrorMask SignFlowInput-errorMask--hidden"></div>
                                                                    </div>
                                                                    <span className="Captcha-englishImage">
                                                                        <div className="Captcha-englishContainer">
                                                                            <img
                                                                                data-tooltip="看不清楚？换一张"
                                                                                className="Captcha-englishImg"
                                                                                src="data:image/jpg;'base64,R0lGODdhlgA8AIcAAP7+/gICAhYWFufn5yUlJdfX14eHh8fHx0hISHd3dzQ0NFZWVmZmZpaWlri4&#10;'uKenp6enpzo6OvHx8Zqamurq6rW1tSkpKX19fY2NjQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#10;'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#10;'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#10;'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#10;'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#10;'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#10;'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#10;'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#10;'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#10;'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#10;'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#10;'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#10;'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAlgA8AEAI/wABCBxI&#10;'sKDBgwgTKlzIsKHDhxAjSpxYsICCAAEWANjIsaPHjxwdBAgQoQCAkyhTqgRQIIDLlwIaDABAs6bN&#10;'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&#10;'"
                                                                                alt="图形验证码"/>
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="Register-SMSInput">
                                                                <div className="SignFlow SignFlow-smsInputContainer">
                                                                    <div className="SignFlowInput SignFlow-smsInput">
                                                                        <div className="Input-wrapper">
                                                                            <input name="digits" type="number" className="Input" placeholder="输入 6 位短信验证码" value=""/>
                                                                        </div>
                                                                        <div className="SignFlowInput-errorMask SignFlowInput-requiredErrorMask SignFlowInput-errorMask--hidden"></div>
                                                                    </div>
                                                                    <button type="button" className="Button CountingDownButton SignFlow-smsInputButton Button--plain">获取短信验证码</button>
                                                                </div>
                                                                <div className="Register-smsBackUp">
                                                                    <span>接收语音验证码</span>
                                                                </div>
                                                            </div>
                                                            <button type="submit" className="Button Register-submitButton Button--primary Button--blue">注册</button>
                                                        </form>
                                                        <div className="Register-footer">
                                                            <span className="Register-declaration">
                                                                注册即代表同意
                                                                <a href="https://www.zhihu.com/terms">《知乎协议》</a>
                                                                <a href="https://www.zhihu.com/terms/privacy">《隐私政策》</a>
                                                            </span>
                                                            <a className="Register-org" href="https://www.zhihu.com/org/signup">注册机构号</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
<div className="SignContainer-switch">已有帐号？<span>登录</span>
</div>
<div
    className="SignFlowHomepage-qrImage SignFlowHomepage-qrImageHidden">
<div>
</div>
</div>
</div>
</div>
</div>
</div>
    <button aria-label="关闭" type="button" className="Button Modal-closeButton Button--plain">
        <ZiClose/>
    </button>
</div>
</div>
</span>
                </div>
            </div>
        );
    }
}

export default Login;