import React, {Component} from 'react';
import ContentLayoutMainColumn from './main-col/ContentLayoutMainColumn';
import ContentLayoutSideColumn from './ContentLayoutSideColumn';

class Main extends Component {
    render() {
        return (
            <main role='main' className="App-main">
                <div className="ContentLayout">
                    <ContentLayoutMainColumn pageParam={this.props.pageParam}/>
                    <ContentLayoutSideColumn pageParam={this.props.pageParam}/>
                </div>
            </main>
        );
    }
}

export default Main;