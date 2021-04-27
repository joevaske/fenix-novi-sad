import React, { useState } from 'react';
import axios from 'axios';

const SingleNews = ({ items, activeNewsPage }) => {
  const [singlePost, setSinglePost] = useState([]);
  const [rendered, setRendered] = useState('');

  // Get Post by ID ****nije uradjena

  const getPost = (id) => {
    setSinglePost([]);

    const fetchPosts = async () => {
      const res = await axios.get(
        `http://fenixmma.com/wp-json/wp/v2/posts?include=${id}`
      );
      setSinglePost(res.data);
    };
    fetchPosts();
    //  setSinglePost(rendered)
    console.log(singlePost);

    singlePost.map((item) => setRendered(item.content.rendered));
  };

  return (
    <div
      className={`news__container ${activeNewsPage === true ? 'active' : ''} `}
    >
      {items.map((item) => (
        <div key={item.link} className='news__container__single'>
          {/*
                            <p>{item.id}</p>
                            */}

          <h3 className='news__container__single__title'>
            <a
              href={item.link}
              dangerouslySetInnerHTML={{ __html: item.title.rendered }}
            />
          </h3>
          {item.featured_media ? (
            <a href={item.link}>
              <img
                src={
                  item._embedded['wp:featuredmedia'][0].media_details.sizes[
                    'full'
                  ].source_url
                }
                alt=''
              />
            </a>
          ) : null}

          {item.excerpt.rendered ? (
            <div
              className='news__container__single__excerpt'
              dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}
            />
          ) : null}

          <div className='news__container__single__entry-meta'>
            <a
              className='news__container__single__author-wrap'
              href={item._embedded.author[0].link}
            >
              {' '}
              author:&nbsp; {item._embedded.author[0].name}
            </a>
            <a
              className='news__container__single__button read-more'
              onClick={() => getPost(item.id)}
              href='#!'
            >
              Više informacija{' '}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleNews;
