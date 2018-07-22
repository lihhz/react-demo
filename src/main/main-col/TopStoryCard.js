import React ,{Component} from 'react';
import QuestionAskButton from "../icon/QuestionAskButton";
import AnswerButton from "../icon/AnswerButton";
import ArticleWriteButton from "../icon/ArticleWriteButton";
class TopStoryCard extends Component{
    render(){
        return (
            <div className="TopstoryHeader">
                <div className="TopstoryHeader-nav">
                    <button type="button" className="Button QuestionAskButton TopstoryHeader-navItem Button--plain">
                        <QuestionAskButton/>
                        提问
                    </button>
                    <a href="/question" target="_blank" title="回答"
                       className="TopstoryHeader-navItem">
                        <AnswerButton/>回答
                    </a>
                    <a href="//zhuanlan.zhihu.com/write" target="_blank" rel="noopener noreferrer"
                       title="写文章" className="TopstoryHeader-navItem TopstoryHeader-navItemArticle">
                        <ArticleWriteButton/>写文章
                    </a>
                </div>
                <a className="TopstoryHeader-rightItem" href="/draft" target="_blank" title="草稿">草稿</a>
            </div>
        );
    }
};
export default TopStoryCard;