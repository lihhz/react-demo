import React, {Component} from 'react';
import './icon.css';

class ArticleWriteButton extends Component {
    render() {
        return (
            <svg width="16" height="16" viewBox="0 0 18 18"
                 xmlns="http://www.w3.org/2000/svg" className="Icon Icon--write"
                 aria-hidden="true" style={{height: '16px', width: '16px'}}><title></title>
                <g>
                    <g fill="none" fillRule="evenodd">
                        <path
                            d="M9.595 2.023H4.842c-2.22 0-4.01 1.793-4.01 4.005v7.62c0 2.21 1.796 4.003 4.01 4.003h7.316c2.22 0 4.01-1.792 4.01-4.003v-7.11.51L14.523 8.72v4.253c0 1.66-1.336 3.004-3.01 3.004h-6.03c-1.66 0-3.008-1.338-3.008-3.004V6.7c0-1.657 1.336-3.002 3.01-3.002h2.467L9.595 2.03v-.007z"
                            fill="#8590A6"></path>
                        <path
                            d="M6.372 11.08c-.185-.915.2-2.238.85-2.888l6.616-6.616c.565-.565 1.472-.567 2.038 0 .56.56.56 1.477 0 2.038L9.258 10.23c-.652.65-1.975 1.034-2.888.85z"
                            stroke="#8590A6" strokeWidth="1.5"></path>
                        <path fill="#8590A6"
                              d="M13.04 2.088l2.324 2.324-.987.986-2.323-2.324z"></path>
                    </g>
                </g>
            </svg>

        );
    }
}

export default ArticleWriteButton;