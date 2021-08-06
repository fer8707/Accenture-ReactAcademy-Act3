import React, {useState, useEffect, useContext} from 'react';
import { useParams } from "react-router";
import Header from './Header';
import PostInformation from './PostInformation';
import ThemeContext from './ThemeContext';

function PostPage({ postList }) {

    const theme = useContext(ThemeContext)
    const { postId } = useParams();
    const postFound = postList.find(post => post.id === postId);
    const [postPage, setPostPage] = useState(postFound)

    useEffect(() => {
        const postFound = postList.find(post => post.id === postId);
        setPostPage(postFound)
    }, [postList, postId])

  return (
    <>
        <Header theme={theme} />
        <PostInformation post={postPage} />
    </>
  );
}

export default PostPage;
