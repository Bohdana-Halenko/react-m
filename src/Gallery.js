import React from "react";
import PropTypes from "prop-types";
import GalleryItem from "./GalleryItem";

function Gallery({items}) {
    return (
        <div>
            {items.map(({ id, ...itemProps }) => (
                <GalleryItem key={id} {...itemProps} />
            ))}
        </div>
    )
}

Gallery.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Gallery;