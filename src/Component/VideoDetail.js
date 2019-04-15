import React from 'react';

const VideoDetail = ({ video }) =>{
    if(!video)
    {
        return <div>Loading...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return(
        <div className="ui segment">
            <div className="ui embed">
                <iframe title="YouTube video" src={videoSrc} />
            </div>
            <h2 className="ui header">{video.snippet.title}</h2>
            <div className="ui divider"></div>

            <div className="ui huge list">
                <div className="item">
                    <img className="ui avatar image" alt="avatar" src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                    <div className="content">
                        <div className="header">{video.snippet.channelTitle}</div>
                        <div className="description">{video.snippet.publishedAt}</div>
                    </div>
                    <div className="ui divider"></div>
                    <div className="meta">{video.snippet.description}</div>
                </div>
            </div>
        </div>
    );
}

export default VideoDetail;