import React, {Component} from 'react';
import QuestionAskButton from './icon/QuestionAskButton';
import ArticleWriteButton from "./icon/ArticleWriteButton";
import AnswerButton from "./icon/AnswerButton";
import HomeMainItem from '../home-main/HomeMainItem';

class Main extends Component {
    constructor(){
        super();
        this.state = {
            testArr : [1,2,3,4,5,6]
        };
    }
    render() {
        return (
            <div className="ContentLayout-mainColumn">
                <div>
                    <div className="Card">
                        <div className="TopstoryHeader">
                            <div className="TopstoryHeader-nav">
                                <button type="button"
                                        className="Button QuestionAskButton TopstoryHeader-navItem Button--plain">
                                    <QuestionAskButton/>
                                    提问
                                </button>
                                <a href="/question" target="_blank" title="回答"
                                   className="TopstoryHeader-navItem">
                                    <AnswerButton/>回答
                                </a>
                                <a href="//zhuanlan.zhihu.com/write" target="_blank" rel="noopener noreferrer"
                                   title="写文章" className="TopstoryHeader-navItem TopstoryHeader-navItemArticle">
                                    <ArticleWriteButton/>写文章</a>
                            </div>
                            <a className="TopstoryHeader-rightItem" href="/draft" target="_blank" title="草稿">草稿</a>
                        </div>
                    </div>
                    <div>
                        {this.state.testArr.map((item)=><HomeMainItem key={item}/>)}

                    </div>
                    <div></div>
                </div>
            </div>
        );
    }
}

export default Main;