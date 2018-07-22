import React, {Component} from 'react';
import ContentItemActions from "./ContentItemActions";
import ContentItemTitle from "./ContentItemTitle";
import RichContentInner from "./RichContentInner";


class HomeMainItem extends Component {

    constructor() {
        super();
        this.state = {
            isCollapsed: true,
            summary: ''
        }
    }
    componentDidMount(){
        debugger
        this.setState(function () {
            return {
                summary : this.props.itemInfo.summary.length > 74 ? this.props.itemInfo.summary.substr(0,74) + '...' : this.props.itemInfo.summary
            }
        });
    }
    collapse(){
        this.setState(function () {
            return {
                isCollapsed: false,
                summary: this.props.itemInfo.summary
            };
        });
    }
    less(){
        this.setState(function () {
            return {
                isCollapsed: true,
                summary: this.props.itemInfo.summary.substr(0, 74) + '...'
            };
        });
    }
    render() {
        return (
            <div className="ContentItem AnswerItem"
                 data-zop="{'authorName':'匿名用户','itemId':439797015,'title':'如何看待11个姐姐凑钱给弟弟买房子结婚？','type':'answer'}"
                 name="439797015" itemProp="answer" itemtype="http://schema.org/Answer" itemscope=""
                 dataZaDetailViewPathModule="AnswerItem"
                 dataZaExtraModule="{'card':{'has_image':false,'has_video':false,'content':{'type':'Answer','token':'439797015','upvote_num':14150,'comment_num':5294,'publish_timestamp':null,'parent_token':'284737508','author_member_hash_id':'0'}}}">
                <ContentItemTitle itemInfo={this.props.itemInfo}/>
                <div className="ContentItem-meta"></div>
                <meta itemprop="image"/>
                <meta itemprop="upvoteCount" content="14150"/>
                <meta itemprop="url" content="https://www.zhihu.com/question/284737508/answer/439797015"/>
                <meta itemprop="dateCreated" content="2018-07-11T08:23:40.000Z"/>
                <meta itemprop="dateModified" content="2018-07-12T15:09:50.000Z"/>
                <meta itemprop="commentCount" content="5294"/>
                <div className={this.state.isCollapsed ? 'RichContent is-collapsed' : 'RichContent'}>
                    <RichContentInner summary={this.state.summary} isCollapsed = {this.state.isCollapsed} moreBtnClick = {this.collapse.bind(this)}/>
                    <ContentItemActions itemInfo={this.props.itemInfo} isCollapsed = {this.state.isCollapsed} lessBtnClick={this.less.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default HomeMainItem;