import React, {Component} from 'react';
import ContentItemMoreButton from "../icon/ContentItemMoreButton";


class RichContentInner extends Component {
    render() {
        return (
            <div className="RichContent-inner">
                <span
                    className="RichText ztext CopyrightRichText-richText"
                    itemprop="text">7月12号晚更新：今晚和父亲在书房枯坐了一晚。白天请来了父亲的律师朋友请教了下，大概心里有谱了。 我把评论区的一些建议给他看了，他只回我：正面击垮对方…
                </span>
                <button type="button" className="Button ContentItem-more Button--plain">阅读全文
                    <ContentItemMoreButton/>
                </button>
            </div>
        );
    }
}
export default RichContentInner;