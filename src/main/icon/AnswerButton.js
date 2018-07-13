import React, {Component} from 'react';
import './icon.css';

class AnswerButton extends Component {
    render() {
        return (<svg width="16" height="16" viewBox="0 0 17 18"
                     xmlns="http://www.w3.org/2000/svg" className="Icon Icon--paper"
                     aria-hidden="true" style={{height: '16px', width: '16px'}}><title></title>
            <g>
                <g fill="#8590A6" fillRule="evenodd">
                    <path
                        d="M.833 4.35c0-2.21 1.79-4 4.01-4h7.315c2.214 0 4.01 1.79 4.01 4v8.743c0 2.21-1.79 4-4.01 4H4.842c-2.214 0-4.01-1.792-4.01-4V4.35zm1.643-.32v9.383c0 1.106.897 2.006 2.003 2.006h8.04c1.118 0 2.004-.9 2.004-2.007V4.03c0-1.107-.897-2.007-2.003-2.007H4.48c-1.118 0-2.004.898-2.004 2.006z"></path>
                    <path
                        d="M4.667 4.814h7.666v1.674H4.667V4.814zm0 2.79h7.666V9.28H4.667V7.604zm0 2.79h4.928v1.676H4.667v-1.675z"></path>
                </g>
            </g>
        </svg>);
    }
}
export default AnswerButton;