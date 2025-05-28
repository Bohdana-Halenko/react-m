import React from 'react';
import PropTypes from 'prop-types';

function GalleryItem({ url, title, price, author, quantity }) {
    return (
        <div style={{border: '1px solid #ccc', padding: 10, marginBottom: 10}}>
            <img src={url } alt={ title} width='300'/>
            <h2>{ title}</h2>
            <p>Ціна: { price}</p>
            <p>Автор:
                <a href={author.url}>{author.tag }</a>
            </p>
            <p>Кількість: {quantity}  шт.</p>
        </div>
    )
}

GalleryItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
    price: PropTypes.number,
    author: PropTypes.shape({
        tag: PropTypes.string,
        url: PropTypes.string.isRequired,
    }),
    quantity: PropTypes.number,
}

GalleryItem.defaultProps = {
    title: 'Без назви',
    price: 'Не відомо',
    quantity: 0,
    author: {
        tag:'Невідомий',
        url: '#',
    }
}

export default GalleryItem;