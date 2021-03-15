import React from 'react'

const SingleNews = ({ items, activeNewsPage }) => {
    return (
        <div className={`news__container ${activeNewsPage === true ? 'active' : ''} `}>
            {
                items.map((item) => (
                    <div key={item.link} className="news__container__single">
                        <p>{item.id}</p>
                        <h3 className="news__container__single__title"><a href={item.link}
                            dangerouslySetInnerHTML={{ __html: item.title.rendered }}
                        /></h3>
                        {item.featured_media ?
                            <a href={item.link}><img src={item._embedded['wp:featuredmedia'][0].media_details.sizes["full"].source_url} alt="" /></a>
                            : null}
                        {item.excerpt.rendered ?
                            <div className="news__container__single__excerpt" dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
                            : null}
                        <div className="news__container__single__entry-meta">
                            <a className="news__container__single__author-wrap" href={item._embedded.author[0].link}> author:&nbsp; {item._embedded.author[0].name}</a>
                            <a className="news__container__single__button read-more" href={item.link}>Read More </a>
                        </div>
                    </div>
                ))
            }

        </div >

    )
}

export default SingleNews
