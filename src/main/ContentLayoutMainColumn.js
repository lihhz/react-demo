import React, {Component} from 'react';
import QuestionAskButton from './icon/QuestionAskButton';
import ArticleWriteButton from "./icon/ArticleWriteButton";
import AnswerButton from "./icon/AnswerButton";
import HomeMainItem from '../home-main/HomeMainItem';
import $ from 'jquery';

class Main extends Component {
    getData($this) {
        $.post('http://localhost:8081/web-spider/spiderBaiduBaike/selectByCondition',
            {currentPage: $this.state.currentPage + 1, pageSize: $this.state.pageSize}, function (data, status) {
                $this.setState({
                    testArr: $this.state.testArr.concat(data.list),
                    currentPage: $this.state.currentPage + 1
                });
            });
    }
    componentDidMount(){
        this.getData(this);
    }
    componentWillReceiveProps(newProps){
        if(newProps.pageParam.isBottom) {
            this.getData(this);
        }
    }
    constructor(){
        super();
        this.state = {
            currentPage:0,
            pageSize:10,
            testArr:[]
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
                        {this.state.testArr.map((item)=><HomeMainItem itemInfo={item} key={item.id}/>)}

                    </div>
                    <div></div>
                </div>
            </div>
        );
    }
}

export default Main;