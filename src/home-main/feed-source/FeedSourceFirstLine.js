import React, {Component} from 'react';

class FeedSourceFirstLine extends Component {
    render() {
        return (
            <div className="FeedSource-firstline">
                热门内容, 来自:
                <span>
                    <a className="TopicLink" href="//www.zhihu.com/topic/19550429" target="_blank">
                        <div className="Popover">
                            <div id="Popover3-toggle" aria-haspopup="true" aria-expanded="false"
                                 aria-owns="Popover3-content">电影</div>
                        </div>
                    </a>
                </span>
            </div>
        );
    }
}

export default FeedSourceFirstLine;