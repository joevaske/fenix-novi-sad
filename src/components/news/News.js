import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './News.scss'
import SingleNews from './SingleNews';
import Pagination from '../pagination/Pagination';





const News = () => {

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 3;

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('http://fenixmma.com/wp-json/wp/v2/posts/?_embed&per_page=24');
            setPosts(res.data);
        };
        fetchPosts();
    }, []);

    // Get current Posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change Page
    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    }

    return (
        <div className="news">
            <h2>News</h2>
            <SingleNews items={currentPosts} activeNewsPage={true} />
            <Pagination
                activePostPage={currentPage}
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate} />

        </div>
    );

























}

export default News
