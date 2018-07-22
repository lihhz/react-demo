import React, {Component} from 'react';
import ZiClose from "./icon/ZiClose";
import '../App.css'

class Modal extends Component {
    closeLogin(){
        let desktop = document.getElementById('app-body');
        let div = desktop.lastElementChild;
        desktop.removeChild(div);
    }
    render() {
        return (
            <div className="Modal-wrapper">
                <div className="Modal-backdrop"></div>
                <div className="Modal Modal--default signFlowModal" tabindex="0">
                    <div className="Modal-inner">
                        {this.props.modalTitle ? <h3 className="Modal-title">绑定手机</h3> : ''}
                        <div className="Modal-content">
                            {this.props.children}
                        </div>
                    </div>
                    <button onClick={this.closeLogin.bind(this)} aria-label="关闭" type="button" className="Button Modal-closeButton Button--plain">
                        <ZiClose/>
                    </button>
                </div>
            </div>
        );
    }
}

export default Modal;