import React, {Component} from 'react';
import ContentItem from "./content-item/ContentItem";
import FeedSource from "./feed-source/FeedSource";


class HomeMainItem extends Component {
    render() {
        return (
            <div className="Card HomeMainItem">
                <div className="Feed" data-za-detail-view-path-module="FeedItem" data-za-detail-view-path-index="0"
                     data-za-extra-module="{'card':{'card_type':'Feed','feed_id':'0_1531443579.43','has_image':false,'has_video':false,'content':{'type':'Answer','token':'439797015'}},'attached_info_bytes':'ClEQBBoJMTEwMDMyMzk2IIz9ltoFKNFuQABSFmd1ZXN0X2hvbWVfZmVlZF9hbnN3ZXJaCDI1NTUyMDM0cgk0Mzk3OTcwMTWKAQkyODQ3Mzc1MDg='}">
                    <FeedSource/>
                    <ContentItem/>
                </div>
            </div>
        );
    }
}

export default HomeMainItem;