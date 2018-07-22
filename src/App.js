import React, {Component} from 'react';
import Header from './header/Header';
import Main from "./main/Main";

import $ from 'jquery';
class App extends Component {

    constructor() {
        super();
        this.state = {
            scrollTop: 0,
            isBottom: false,
            img:null,
            searchValue : ''
        };
        this.scrollHandler = this.handleScroll.bind(this);
    }

    componentDidMount() {
        let that = this;
        $.post('http://localhost:8081/web-spider/baiduBaikeUserInfo/selectByPrimaryKey',{id:866},function (data,status) {
            that.setState({img:data.picture});
        });
        window.addEventListener('scroll', this.scrollHandler);
    }

    handleScroll(event) {
        let bodyEle = document.documentElement || document.body;
        let clientHeight = bodyEle.clientHeight;
        let scrollHeight = bodyEle.scrollHeight;
        let scrollTop = document.body.scrollTop;
        let isBottom = (clientHeight + scrollTop === scrollHeight);
        this.setState({scrollTop: scrollTop, isBottom: isBottom});
    }

    searchMainItem(_searchValue){
        this.setState(()=>{return {searchValue:_searchValue}});
    }
    render() {
        return (
            <div>
                <div>
                    <Header searchMainItem={this.searchMainItem.bind(this)} scrollTop={this.state.scrollTop}/>
                    {this.state.scrollTop > 0 ?
                        <div className="Sticky--holder"
                             style={{ position: 'relative', top: '0px', right: '0px', bottom: '0px',
                                 left: '0px', display: 'block', float: 'none',  margin: '0px', height: '52px'
                             }}>
                        </div>
                        : ''
                    }
                </div>
                <Main pageParam={this.state}/>
            </div>
        );
    }
}

export default App;
