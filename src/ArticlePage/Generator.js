import React, {useState, useEffect, useRef} from 'react';
import Article from "./Article";

// assing values to tags
const checkTags = (Main, Checked) => {
    return Main.map(tag => {
        (tag in Checked)? tag.sub.value.push(1): tag.sub.value.push(0);
        return tag;
    })
}

export default function Generator(props) {
    const [userTags, setUserTags] = useState(localStorage.getItem('userTags').split(','));
    console.log("-->" + userTags);
    const call = () => props.articles
    const [articles, setArticles] = useState([])
    // const [check, setCheck] = useState(props.articles)
    console.log( typeof call)
    const [renderCount, setRenderCount] = useState(0)
    const mounted = useRef()
    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
            if(renderCount === 0){
                setArticles(call())
            }
        } else {
            if(renderCount === 5) {

                setArticles(call())
                setRenderCount(0)
            }
        }
    }, [articles, props.article, renderCount])

    const like = (tagName) => {
        console.log("You just liked "+ tagName)
        props.handleUpdate(tagName, 1)
        console.log(`we just updated ${tagName} by 1`)
        setRenderCount(prev => prev++)
      };

    const dislike = (tagName) => {
        console.log("You just disliked "+ tagName)
        props.handleUpdate(tagName, 0)
        console.log(`we just updated ${tagName} by 0`)
        setRenderCount(prev => prev++)
    };

    return (
        <>
            <div className="container-fluid">

            {(articles !== "empty")? (
                articles.map(item => <Article data={item} handleLike={like} handleDislike={dislike} />)
            ):(
                <h1>Its Empty</h1>
            )}
            </div>
        </>
    );
}
 
