import React, { useRef, useEffect, useState, DetailedReactHTMLElement } from "react";
import './BlogPost.css';
import RSSParser from 'rss-parser';
import Moment from 'moment';
import Card from "../Card/Card";
import Parser from "html-react-parser";
import Gist from "react-embed-gist";


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
    },[onFocus, post.guid]);


    const [elements, setElements] = useState<JSX.Element[] | DetailedReactHTMLElement<{}, HTMLElement>[]>(Parser(post["content:encoded"]) as DetailedReactHTMLElement<{}, HTMLElement>[]);
    useEffect(() => {
        const postParsed = post["content:encoded"];
        const elements = Parser(postParsed) as DetailedReactHTMLElement<{}, HTMLElement>[];
        const iframes = elements.filter(element => element.type === "iframe");
        const indexes = iframes.map(iframe => elements.indexOf(iframe));
        iframes.forEach((iframe, index) => {
            const props: any = iframe.props;
            const val = props.children;
            const expr = /<a[^>]*>(.*?)<\/a>/;
            const matches = expr.exec(val);
            const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
            const iframeUrl = matches ? CORS_PROXY + matches[1] : '';
            
            return fetch(iframeUrl, {redirect: 'follow'})
            .then(res => {
                return res.text()
            })
            .then((body: string) => {
                const expr = /og:url" content="*(.*?)"/
                const matches = expr.exec(body);
                let gist =  matches ? matches[1] : '';
                gist = gist.replace('https://gist.github.com/','');
                const theGist = <Gist gist={gist} key={gist} />
                const theIndex = indexes[index]
                setElements(v => [...v.slice(0, theIndex),theGist,...v.slice(theIndex+1)])
                return React.createElement('span', {}, Parser(body));
            });
        })
        

    },[post]);    

    return (
        <Card className="blog-post">
            <div ref={myRef}>
                <a href={post.title ? '/blog/' + post.title.replace(/ /g,'-').toLocaleLowerCase() : ''}><h2>{post.title}</h2></a>
                {publicationDate.format("D MMMM, YYYY")}
                <div className="blog">{elements}</div>
            </div>
        </Card>
    )
}

export default BlogPost;