import React from "react";
import './BlogPost.css';
import RSSParser from 'rss-parser';
import Moment from 'moment';
import Card from "../Card/Card";

type BlogPostProps = {
    post: RSSParser.Item
}

const BlogPost: React.FC<BlogPostProps> = ({post}) => {  
    const publicationDate = Moment(post.pubDate);
    return (
        <Card className="blog-post">
            <h2>{post.title}</h2>
            {publicationDate.format("D MMMM, YYYY")}
            <div className="blog" dangerouslySetInnerHTML={{__html: post["content:encoded"]}}></div>
        </Card>
    )
}

export default BlogPost;