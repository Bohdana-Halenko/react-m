import React from "react";
import Gallery from './Gallery';
import paintings from './paintings.json';

function App() {
    return (
        <div>
            <h1>Галерея картин</h1>
            <Gallery items={ paintings} />
        </div>
    )
}

export default App;