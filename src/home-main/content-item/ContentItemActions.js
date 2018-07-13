import React, {Component} from 'react';
import VoteUpButton from "../icon/VoteUpButton";
import VoteDownButton from "../icon/VoteDownButton";
import ZiComment from "../icon/ZiComment";
import ZiShare from "../icon/ZiShare";
import ZiStar from "../icon/ZiStar";
import ZiHeart from "../icon/ZiHeart";


class ContentItemActions extends Component {
    render() {
        return (
            <div className="ContentItem-actions">
                <span>
                    <button aria-label="赞同" type="button" className="Button VoteButton VoteButton--up">
                        <span style={{display: 'inline-flex', alignItems: 'center'}}>&#8203;
                            <VoteUpButton/>
                        </span>赞同 14K
                    </button>
                    <button
                        aria-label="反对" type="button"
                        className="Button VoteButton VoteButton--down">
                        <span style={{display: 'inline-flex', alignItems: 'center'}}>&#8203;
                            <VoteDownButton/>
                        </span>
                    </button>
                </span>
                <button type="button"
                        className="Button ContentItem-action Button--plain Button--withIcon Button--withLabel">
                    <span style={{display: 'inline-flex', alignItems: 'center'}}>&#8203;
                        <ZiComment/>
                    </span>5,294 条评论
                </button>
                <div className="Popover ShareMenu ContentItem-action">
                    <div className="" id="Popover4-toggle" aria-haspopup="true"
                         aria-expanded="false"
                         aria-owns="Popover4-content">
                        <img
                            className="ShareMenu-fakeQRCode"
                            src="https://www.zhihu.com/qrcode?url=https%3A%2F%2Fwww.zhihu.com%2Fanswer%2F439797015%23showWechatShareTip"
                            alt="微信二维码"/>
                        <button type="button"
                                className="Button Button--plain Button--withIcon Button--withLabel">
                            <span style={{display: 'inline-flex', alignItems: 'center'}}>&#8203;
                                <ZiShare/>
                            </span>分享
                        </button>
                    </div>
                </div>
                <button type="button"
                        className="Button ContentItem-action Button--plain Button--withIcon Button--withLabel">
                    <span style={{display: 'inline-flex', alignItems: 'center'}}>&#8203;
                        <ZiStar/>
                    </span>收藏
                </button>
                <button type="button"
                        className="Button ContentItem-action Button--plain Button--withIcon Button--withLabel">
                    <span style={{display: 'inline-flex', alignItems: 'center'}}>&#8203;
                        <ZiHeart/>
                    </span>感谢
                </button>
            </div>
        );
    }
}
export default ContentItemActions;