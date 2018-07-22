import React, {Component} from 'react';
import ZhiHuLogo from "./icon/ZhiHuLogo";
import Modal from '../common/Modal'

class Sign extends Component {
    render() {
        return (
            <Modal>
                <div className="Card SignContainer-content">
                    <div className="SignFlowHeader">
                        <ZhiHuLogo/>
                        <div className="SignFlowHeader-slogen">{this.props.slogen}知乎，发现更大的世界</div>
                    </div>
                    <div className="SignContainer-inner">
                        {this.props.children}
                        <div className="SignContainer-switch">
                            {this.props.slogen === '注册' ? '已有帐号' : '没有账号'}？
                            <span> {this.props.slogen === '注册' ? '登录' : '注册'}</span>
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

export default Sign;