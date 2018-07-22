import React, {Component} from 'react';
import ContentItemMoreButton from "../icon/ContentItemMoreButton";


class RichContentInner extends Component {
    readMore(){
        this.props.moreBtnClick();
    }
    ReadMoreBtn(props){
        return (
            <button onClick={props.cEvent.bind(this)} type="button" className="Button ContentItem-more Button--plain">阅读全文
                <ContentItemMoreButton/>
            </button>
        );
    }
    render() {
        return (
            <div className="RichContent-inner">
                <span className="RichText ztext CopyrightRichText-richText" itemprop="text">
                    {this.props.summary}
                </span>
                {this.props.isCollapsed ? <this.ReadMoreBtn cEvent={this.readMore.bind(this)}/> : ''}
            </div>
        );
    }
}
export default RichContentInner;