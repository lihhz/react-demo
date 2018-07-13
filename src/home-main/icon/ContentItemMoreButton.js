import React, {Component} from 'react';

class ContentItemMoreButton extends Component {
    render() {
        return (<svg viewBox="0 0 10 6"
                     className="Icon ContentItem-arrowIcon Icon--arrow"
                     width="10" height="16"
                     aria-hidden="true" style={{height: '16px', width: '10px'}}>
            <title></title>
            <g>
                <path
                    d="M8.716.217L5.002 4 1.285.218C.99-.072.514-.072.22.218c-.294.29-.294.76 0 1.052l4.25 4.512c.292.29.77.29 1.063 0L9.78 1.27c.293-.29.293-.76 0-1.052-.295-.29-.77-.29-1.063 0z"></path>
            </g>
        </svg>);
    }
}

export default ContentItemMoreButton;