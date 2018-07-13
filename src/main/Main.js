import React, {Component} from 'react';
import ContentLayoutMainColumn from './ContentLayoutMainColumn';
import ContentLayoutSideColumn from './ContentLayoutSideColumn';

class Main extends Component {
    render() {
        return (
            <main role='main' className="App-main">
                <div className="ContentLayout">
                    <ContentLayoutMainColumn/>
                    <ContentLayoutSideColumn scrollTop={this.props.scrollTop}/>
                </div>
            </main>
        );
    }
}

export default Main;