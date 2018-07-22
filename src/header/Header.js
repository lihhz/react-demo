import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './header.css' ;
import Logo from './icon/Logo.js'
import IconSearch from './icon/IconSearch.js';
import ZiBell from "./icon/ZiBell";
import ZiProfile from "./icon/ZiProfile";
import ZiComments from "./icon/ZiComments";
import Registe from "../sign/registe/Registe";

import $ from 'jquery';
class Header extends Component {
    constructor(){
        super();
        this.state = {
            clientWidth : 1300,
            searchFocus : false,
            searchValue:''
        };
        this.login = this.login.bind(this);
    }
    componentDidMount(){
        this.setState(()=>{
            return {clientWidth : document.documentElement.clientWidth}
        });
    }

    login(){
        ReactDOM.render(<Registe/>,document.body);
    }
    searchInputFocus(){
        this.setState(()=>{
            return {searchFocus : true}
        });
    }
    searchInputBlur(){
        this.setState(()=>{
            return {searchFocus : false}
        });
    }
    change(event) {
        this.setState({searchValue: event.target.value});
    }
    searchBtnClick(){
        this.props.searchMainItem(this.state.searchValue);
    }

    render() {
        return (
            <header className={`Sticky AppHeader ${this.props.scrollTop > 0 ? 'is-fixed' : ''}`} style={this.props.scrollTop > 0 ? {width: this.state.clientWidth+'px', top: '0px', left: '0px'} : {width: this.state.clientWidth+'px'}}>
                <div className="AppHeaderInner">
                    <a href="/" aria-label="知乎">
                        <Logo/>
                    </a>
                    <nav role="navigation" className="AppHeader-nav">
                        <a className="AppHeader-navItem is-active" href="/">首页</a>
                        <a className="AppHeader-navItem" href="//www.zhihu.com/explore">发现</a>
                        <a className="AppHeader-navItem" href="//www.zhihu.com/topic">话题</a>
                    </nav>
                    <div className="SearchBar" role="search" data-za-module="PresetWordItem">
                        <div className="SearchBar-toolWrapper">
                            <form className="SearchBar-tool">
                                <div>
                                    <div className="Popover">
                                        <div className={"SearchBar-input Input-wrapper Input-wrapper--grey " + (this.state.searchFocus ? "SearchBar-focusedInput is-focus":"")}>
                                            <input onBlur={this.searchInputBlur.bind(this)}
                                                   onFocus={this.searchInputFocus.bind(this)}
                                                   onChange={this.change.bind(this)}
                                                   value={this.state.searchValue}
                                                type="text" maxLength="100" autoComplete="off" role="combobox"
                                                   aria-expanded="false" aria-autocomplete="list"
                                                   aria-activedescendant="AutoComplete2-topSearch--1"
                                                   id="Popover1-toggle"
                                                   aria-haspopup="true" aria-owns="Popover1-content" className="Input"
                                                   placeholder="搜索你感兴趣的内容…" />
                                            <div className="Input-after">
                                                <button aria-label="搜索" type="button" onClick={this.searchBtnClick.bind(this)}
                                                        className={"Button SearchBar-searchIcon Button--primary " + (this.state.searchValue === '' ? '' : 'SearchBar-hasValue SearchIcon Button--blue')}>
                                                    <IconSearch searchValue = {this.state.searchValue}/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <button type="button" className={"Button QuestionAskButton SearchBar-askButton Button--primary Button--blue " + (this.state.searchFocus ? "SearchBar-hiddenAskButton" : "")}>提问</button>
                    </div>
                    <div className="AppHeader-userInfo">
                        <button type="button"
                                className="Button AppHeader-fakeButton Button--plain Button--withIcon Button--iconOnly">
                            <span style={{display: 'inline-flex', alignItems: 'center'}}>&#8203;
                                <ZiBell/>
                            </span>
                        </button>
                        <button type="button"
                                className="Button AppHeader-fakeButton Button--plain Button--withIcon Button--iconOnly">
                            <span style={{display: 'inline-flex', alignItems: 'center'}}>&#8203;
                                <ZiComments/>
                            </span>
                        </button>
                        <button onClick={this.login} type="button" className="Button AppHeader-fakeButton Button--plain Button--withIcon Button--iconOnly">
                            <span style={{display: 'inline-flex', alignItems: 'center'}}>&#8203;
                                <ZiProfile/>
                            </span>
                        </button>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;