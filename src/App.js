import React, {Component} from 'react';
import './App.css';
import Header from './header/Header';
import Main from "./main/Main";

class App extends Component {

    constructor() {
        super();
        this.state = {
            scrollTop: 0
        };
        this.scrollHandler = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler);
    }


    handleScroll(event) {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        this.setState({scrollTop: scrollTop});
    }

    render() {
        return (
            <div className="App">
                <div>
                    <div>
                        <Header scrollTop ={this.state.scrollTop} />
                        {this.state.scrollTop > 0 ?
                            <div className="Sticky--holder"
                                 style={{
                                     position: 'relative',
                                     top: '0px',
                                     right: '0px',
                                     bottom: '0px',
                                     left: '0px',
                                     display: 'block',
                                     float: 'none',
                                     margin: '0px',
                                     height: '52px'
                                 }}>
                            </div>
                            : ''
                        }
                    </div>
                    <Main scrollTop ={this.state.scrollTop} />
                </div>
            </div>
        );
    }
}

export default App;
