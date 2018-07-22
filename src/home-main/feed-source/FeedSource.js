import React, {Component} from 'react';
import AuthorInfo from "./AuthorInfo";
import FeedSourceFirstLine from "./FeedSourceFirstLine";


class FeedSource extends Component {
    render() {
        return (
            <div className="FeedSource">
                <FeedSourceFirstLine/>
                <AuthorInfo itemInfo={this.props.itemInfo}/>
            </div>
        );
    }
}

export default FeedSource;