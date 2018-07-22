import React, {Component} from 'react';
import '../../App.css'
import Sign from "../Sign";
import ViewPass from "../icon/ViewPass";

class Login extends Component {
    render() {
        return (
            <Sign slogen="登录">
                <div className="SignContainer-inner">
                    <div className="Login-content">
                        <form novalidate="" className="SignFlow" data-za-detail-view-path-module="SignInForm" data-za-extra-module="{'card':{'content':null}}">
                            <div className="SignFlow-account">
                                <div className="SignFlow-supportedCountriesSelectContainer"></div>
                                <div className="SignFlowInput SignFlow-accountInputContainer">
                                    <div className="SignFlow-accountInput Input-wrapper">
                                        <input name="username" type="text" className="Input" placeholder="手机号或邮箱" value="" /></div>
                                    <div className="SignFlowInput-errorMask SignFlowInput-requiredErrorMask SignFlowInput-errorMask--hidden"></div>
                                </div>
                            </div>
                            <div className="SignFlow-password">
                                <div className="SignFlowInput">
                                    <div className="Input-wrapper">
                                        <input name="password" type="password" className="Input" placeholder="密码" value="" /></div>
                                    <div className="SignFlowInput-errorMask SignFlowInput-requiredErrorMask SignFlowInput-errorMask--hidden"></div>
                                </div>
                                <button tabindex="-1" type="button" className="Button SignFlow-switchPassword Button--plain">
                                    <ViewPass/>
                                </button>
                            </div>
                            <div className="Captcha SignFlow-captchaContainer" style={{width: '0px',height: '0px',opacity: '0',overflow: 'hidden',margin: '0px',padding: '0px',border: '0px'}}>
                                <div>
                                    <div className="Captcha-chineseOperator">
                                        <span className="Captcha-info">请点击图中倒立的文字</span>
                                        <button type="button" className="Button Captcha-chineseRefreshButton Button--plain">
                                            <svg className="Zi Zi--Refresh" fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                                                <path d="M20 12.878C20 17.358 16.411 21 12 21s-8-3.643-8-8.122c0-4.044 3.032-7.51 6.954-8.038.034-1.185.012-1.049.012-1.049-.013-.728.461-1.003 1.057-.615l3.311 2.158c.598.39.596 1.026 0 1.418l-3.31 2.181c-.598.393-1.08.12-1.079-.606 0 0 .006-.606-.003-1.157-2.689.51-4.675 2.9-4.675 5.708 0 3.21 2.572 5.822 5.733 5.822 3.163 0 5.733-2.612 5.733-5.822 0-.633.51-1.148 1.134-1.148.625 0 1.133.515 1.133 1.148" fill-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="Captcha-chineseContainer">
                                        <img data-tooltip="看不清楚？换一张" className="Captcha-chineseImg" src="data:image/jpg;base64,null" alt="图形验证码" /></div>
                                </div>
                            </div>
                            <div className="Login-options">
                                <button type="button" className="Button Login-switchType Button--plain">手机验证码登录</button>
                                <button type="button" className="Button Login-cannotLogin Button--plain">忘记密码？</button></div>
                            <button type="submit" className="Button SignFlow-submitButton Button--primary Button--blue">登录</button>
                            <div className="Login-footer">
        <span className="Login-qrcode">
          <button type="button" className="Button Button--plain">二维码登录</button></span>
                                <span className="Login-footerSeparate Login-qrcodeSeparate">·</span>
                                <span className="Login-aboardPhone">
          <button type="button" className="Button Button--plain">海外手机登录</button></span>
                                <span className="Login-footerSeparate">·</span>
                                <span className="Login-socialLogin">
          <button type="button" className="Button Login-socialButtonEntrance Button--plain">社交帐号登录</button>
          <span className="Login-socialButtonGroup Login-socialButtonGroup--hidden">
            <button disabled="" type="button" className="Button Login-socialButton Button--plain">
              <svg viewBox="0 0 20 19" className="Icon Login-socialIcon Icon--wechat" width="18" height="17" aria-hidden="true" style={{height: '17px', width: '18px'}}>
                <title></title>
                <g>
                  <path fill-rule="evenodd" d="M.224 18.667s4.24-1.825 4.788-2.056C13.03 20.14 20 14.715 20 8.9 20 3.984 15.523 0 10 0S0 3.984 0 8.898c0 1.86.64 3.585 1.737 5.013-.274.834-1.513 4.757-1.513 4.757zM6.167 8.96c.69 0 1.25-.57 1.25-1.27 0-.703-.56-1.272-1.25-1.272s-1.25.57-1.25 1.27c0 .703.56 1.272 1.25 1.272zm7.583 0c.69 0 1.25-.57 1.25-1.27 0-.703-.56-1.272-1.25-1.272s-1.25.57-1.25 1.27c0 .703.56 1.272 1.25 1.272z"></path>
                </g>
              </svg>
            </button>
            <button disabled="" type="button" className="Button Login-socialButton Button--plain">
              <svg viewBox="0 0 22 18" className="Icon Login-socialIcon Icon--weibo" width="20" height="16" aria-hidden="true" style={{height: '16px', width: '20px'}}>
                <title></title>
                <g>
                  <g fill-rule="evenodd">
                    <path d="M14.518.06s-.87.644.03 1.71c0 0 6.287-1.19 5.69 6.33 0 0 1.05 1.13 1.674-.31 0 .002 1.44-8.584-7.394-7.73zM4.883 13.17s.038 2.584 3.326 2.584c3.657 0 3.683-2.98 3.683-2.98S12.1 9.67 8.687 9.61c-3.863-.07-3.804 3.56-3.804 3.56zM7.41 14.21c-.668 0-1.214-.447-1.214-.998 0-.55.543-.998 1.215-.998.67 0 1.213.447 1.213.998 0 .55-.54.998-1.212.998z"></path>
                    <path d="M4.317 4.52C-2.603 10.353.873 14.85.873 14.85c.57 1.01 3.382 3.1 8.596 3.1 5.21 0 9.314-3.628 9.314-6.44 0-2.813-2.918-2.714-2.918-2.714 1.04-1.554.19-2.65.19-2.65-1.684-2.118-5.404-.16-5.407-.158.772-1.717.11-2.797.11-2.797C8.932.66 4.317 4.52 4.317 4.52zm10.448 7.79s-.467 4.16-6.447 4.16c-5.745 0-5.82-3.322-5.842-3.712 0 0-.073-4.423 6.58-4.654 5.94-.204 5.71 4.207 5.71 4.207zM18.65 7.045s1.018-4.37-3.864-3.818c0 0-.628.58.09 1.346 0 0 2.602-.58 2.397 2.598 0 0 .715.885 1.376-.125z"></path>
                  </g>
                </g>
              </svg>
            </button>
            <button disabled="" type="button" className="Button Login-socialButton Button--plain">
              <svg width="17" height="19" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg" className="Icon Login-socialIcon Icon--qq" aria-hidden="true" style={{height: '19px', width: '17px'}}>
                <title></title>
                <g>
                  <title>QQ</title>
                  <path d="M9.003 0c-2.265 0-6.29 1.364-6.29 7.325V8.52S.55 12.96.55 15.474c0 .665.17 1.025.28 1.025.115 0 .903-.485 1.75-2.073 0 0-.18 2.197 1.903 3.967 0 0-1.77.495-1.77 1.182 0 .686 4.078.43 6.29 0 2.24.425 6.287.687 6.287 0 0-.688-1.768-1.182-1.768-1.182 2.085-1.77 1.905-3.967 1.905-3.967.845 1.588 1.634 2.072 1.746 2.072.11 0 .283-.36.283-1.026 0-2.514-2.166-6.954-2.166-6.954V7.325C15.29 1.365 11.268 0 9.003 0z" fill-rule="evenodd"></path>
                </g>
              </svg>
            </button>
          </span>
        </span>
                            </div>
                        </form>
                    </div>
                </div>
            </Sign>
        );
    }
}

export default Login;