import React, { useEffect, useState } from "react";
import './Blog.css';
import RSSParser from 'rss-parser';
import BlogPost from "../BlogPost/BlogPost";

type BlogTypes = {
    isVisible: boolean;
}

const Blog: React.FC<BlogTypes> = ({isVisible = false}) => {
    const [items, setItems] = useState<undefined | RSSParser.Item[]>([]);

    async function fetchData() {
        let parser = new RSSParser();
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

        parser.parseURL(CORS_PROXY + 'https://medium.com/feed/@samjwright', function(err, feed) {
            setItems(feed.items ? feed.items : []);
            console.log(feed);
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    
    return (
        <div className="blog">
            {isVisible && items ? items.map(item => (
                <BlogPost post={item} key={item.guid} />
            )) : ''}
        </div>
    )
}

export default Blog;