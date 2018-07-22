import React, {Component} from 'react';
class ContentItemTitle extends Component {
    render() {
        return (
            <h2 className="ContentItem-title">
                <div itemprop="zhihu:question" itemtype="http://schema.org/Question" itemscope="">
                    <meta itemprop="url" content="https://www.zhihu.com/question/284737508"/>
                    <meta itemprop="name" content={this.props.itemInfo.title}/>
                    <a target="_blank" data-za-detail-view-element_name="Title"
                       href="/question/284737508/answer/439797015">{this.props.itemInfo.title}</a>
                </div>
            </h2>
        );
    }
}

export default ContentItemTitle;