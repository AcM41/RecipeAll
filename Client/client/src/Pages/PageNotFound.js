import React from 'react'

const PageNotFound = () => {
    return (
        <div className="container mt-5 text-center">
            <h1>Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <img
                src="https://example.com/path/to/your/image.jpg"
                alt="Page Not Found"
                className="img-fluid"
            />
            <p>Return to <a href="/">Home</a></p>
            </div>
        );
    }
    
    export default PageNotFound;