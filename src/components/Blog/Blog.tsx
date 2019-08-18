import React, { useEffect, useState, Ref } from "react";
import './Blog.css';
import RSSParser from 'rss-parser';
import BlogPost from "../BlogPost/BlogPost";
import { History } from "history";

type BlogTypes = {
    isVisible: boolean;
    match: {
        isExact: boolean,
        params: {
            postname?: string
        },
        path: string,
        url: string
    },
    history: History
}

const Blog: React.FC<BlogTypes> = ({isVisible = true, match, history}) => {
    const [currentPost, setCurrentPost] = useState(match.params.postname);
    const [items, setItems] = useState<undefined | RSSParser.Item[]>([]);

    async function fetchData() {
        let parser = new RSSParser();
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

        parser.parseURL(CORS_PROXY + 'https://medium.com/feed/@samjwright', function(err, feed) {
            setItems(feed.items ? feed.items : []);
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    const [currentGuid, setCurrentGuid] = useState('');

    const onFocus = (guid: string) => {
        if(currentGuid !== guid) {
            const post = items ? items.find(item => item.guid === guid) : '';
            if(post && post.title) {
                const url = post.title.replace(/ /g,'-').toLocaleLowerCase();
                history.push(`/blog/${url}`);
                setCurrentGuid(guid);
            }
        }   
    }

    const [startedScrolling, setStartedScrolling] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            let ticking;
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setStartedScrolling(true);
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

    const item = currentPost && items ? items.find(item => item.title ? item.title.toLocaleLowerCase() === currentPost.replace(/-/g,' ').toLocaleLowerCase() : '') : '';
    const itemGuid = item ? item.guid : '';
    return (
        <div className="blog">
            {isVisible && items ? items.map(item => (
                <BlogPost post={item} key={item.guid} scrollTo={!startedScrolling && item.guid === itemGuid} onFocus={onFocus} />
            )) : ''}
        </div>
    )
}

export default Blog;