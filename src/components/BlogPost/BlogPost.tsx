import React, { useRef, useEffect } from "react";
import './BlogPost.css';
import RSSParser from 'rss-parser';
import Moment from 'moment';
import Card from "../Card/Card";

type BlogPostProps = {
    post: RSSParser.Item,
    scrollTo: boolean,
    onFocus: Function
}

const scrollToRef = (ref: any) => {
    return window.scrollTo(0, ref.current.offsetTop - 50)
}

const BlogPost: React.FC<BlogPostProps> = ({post, scrollTo, onFocus}) => {  
    const publicationDate = Moment(post.pubDate);
    const myRef = useRef(null);   

    const executeScroll = () => scrollToRef(myRef);

    useEffect(() => {
        if(scrollTo && myRef.current) {
            executeScroll()
        }
    });

    useEffect(() => {
        const onScroll = () => {
            let last_known_scroll_position = window.scrollY;
        
            let ticking;
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const current: any = myRef.current;
                    if(current.offsetTop - last_known_scroll_position < 0 && current.offsetTop + current.offsetHeight > last_known_scroll_position) {
                        onFocus(post.guid);
                    }
                    ticking = false;
                });
        
                ticking = true;
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll); 
        }
    });

    return (
        <Card className="blog-post">
            <div ref={myRef}>
                <a href={post.title ? '/blog/' + post.title.replace(/ /g,'-').toLocaleLowerCase() : ''}><h2>{post.title}</h2></a>
                {publicationDate.format("D MMMM, YYYY")}
                <div className="blog" dangerouslySetInnerHTML={{__html: post["content:encoded"]}}></div>
            </div>
        </Card>
    )
}

export default BlogPost;