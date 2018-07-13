import React, {Component} from 'react';


class FeedSource extends Component {
    render() {
        return (
            <div className="AuthorInfo FeedSource-byline AuthorInfo--plain" itemprop="author" itemscope=""
                 itemtype="http://schema.org/Person">
                <meta itemprop="name" content="看着不像好人"/>
                <meta itemprop="image" content="https://pic4.zhimg.com/v2-b4dfde394e429efe34225bc97080da81_b.jpg"/>
                <meta itemprop="url" content="https://www.zhihu.com/people/bao-zi-lian-54"/>
                <meta itemprop="zhihu:followerCount"/>
                <span className="UserLink AuthorInfo-avatarWrapper">
                    <div className="Popover">
                        <div id="Popover4-toggle" aria-haspopup="true"
                             aria-expanded="false"
                             aria-owns="Popover4-content">
                            <a className="UserLink-link"
                               data-za-detail-view-element_name="User"
                               target="_blank"
                               href="//www.zhihu.com/people/bao-zi-lian-54">
                                <img
                                    className="Avatar AuthorInfo-avatar" width="24" height="24"
                                    src="https://pic4.zhimg.com/v2-b4dfde394e429efe34225bc97080da81_s.jpg"
                                    srcset="https://pic4.zhimg.com/v2-b4dfde394e429efe34225bc97080da81_xs.jpg 2x"
                                    alt="看着不像好人"/>
                            </a>
                        </div>
                    </div>
                </span>
                <div className="AuthorInfo-content">
                    <div className="AuthorInfo-head">
                        <span className="UserLink AuthorInfo-name">
                            <div className="Popover">
                                <div id="Popover5-toggle" aria-haspopup="true"
                                     aria-expanded="false" aria-owns="Popover5-content">
                                    <a
                                        className="UserLink-link" data-za-detail-view-element_name="User"
                                        target="_blank"
                                        href="//www.zhihu.com/people/bao-zi-lian-54">看着不像好人
                                    </a>
                                </div>
                            </div>
                        </span>
                    </div>
                    <div className="AuthorInfo-detail">
                        <div className="AuthorInfo-badge"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeedSource;