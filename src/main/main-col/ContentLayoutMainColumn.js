import React, {Component} from 'react';
import HomeMainItem from '../../home-main/HomeMainItem';
import $ from 'jquery';
import TopStoryCard from "./TopStoryCard";

class Main extends Component {
    getData($this,_searchVal) {
        $.post('http://localhost:8081/web-spider/spiderBaiduBaike/selectByCondition?d='+Date.now(),
            {
                currentPage: _searchVal ? 0 : $this.state.currentPage + 1, pageSize: $this.state.pageSize,
                searchValue: _searchVal ? _searchVal : $this.props.pageParam.searchValue
            }, function (data, status) {
            debugger;
                $this.setState({
                    testArr: _searchVal ? data.list : $this.state.testArr.concat(data.list),
                    currentPage: _searchVal ? 0 : $this.state.currentPage + 1
                });
            }
        );
    }
    componentDidMount(){
        this.getData(this);
    }
    componentWillReceiveProps(newProps){
        // this.props //当前的props
        // nextProps //下一阶段的props
        if(newProps.pageParam.isBottom) {
            this.getData(this);
        }else if(this.props.pageParam.searchValue !== newProps.pageParam.searchValue){
            this.getData(this,newProps.pageParam.searchValue);
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
                        <TopStoryCard/>
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