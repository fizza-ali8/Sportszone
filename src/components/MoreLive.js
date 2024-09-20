import React from 'react';
import '../Style/MoreLive.css';

const MoreLive = () => {
    const videoData = [
        { id: 1, title: 'Live Match 1', videoUrl: 'video1.mp4' },
        { id: 2, title: 'Live Match 2', videoUrl: 'video2.mp4' },
        { id: 3, title: 'Live Match 3', videoUrl: 'video3.mp4' },
        { id: 4, title: 'Live Match 4', videoUrl: 'video4.mp4' },
        { id: 5, title: 'Live Match 5', videoUrl: 'video5.mp4' },
        { id: 6, title: 'Live Match 6', videoUrl: 'video6.mp4' },
        { id: 7, title: 'Live Match 7', videoUrl: 'video7.mp4' },
        { id: 8, title: 'Live Match 8', videoUrl: 'video8.mp4' },
        { id: 9, title: 'Live Match 9', videoUrl: 'video9.mp4' },
    ];

    return (
        <div className="more-live">
            <h2>More</h2>
            <div className="more-videos">
                {videoData.map((video) => (
                    <div key={video.id} className="more-video">
                        <div className="video-placeholder">
                            <video width="100%" height="100%" controls>
                                <source src={video.videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="video-title">{video.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoreLive;
