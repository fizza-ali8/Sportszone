import React from 'react';
import '../Style/LiveScreen.css';
import LiveMatchDetails from '../components/LiveMatchDetails';
import ShareLive from '../components/ShareLive';
import MoreLive from '../components/MoreLive';

const LiveScreen = () => {
    const videoUrl = "http://yourwebsite.com/path/to/your/video.mp4"; // Replace with your actual video URL

    const shareOnWhatsApp = () => {
        const message = `Check out this live match: ${videoUrl}`;
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const shareOnFacebook = () => {
        const message = `Check out this live match: ${videoUrl}`;
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(videoUrl)}&quote=${encodeURIComponent(message)}`;
        window.open(facebookUrl, '_blank');
    };

    const shareOnTwitter = () => {
        const message = `Check out this live match: ${videoUrl}`;
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
        window.open(twitterUrl, '_blank');
    };

    const shareByEmail = () => {
        const subject = "Check out this live match!";
        const body = `Hi there,\n\nCheck out this live match: ${videoUrl}\n\nBest regards,`;
        const emailUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(emailUrl, '_blank');
    };

    return (
        <div className="live-screen">
            <div className="video-container">
                <video width="100%" height="100%" controls>
                    <source src="path/to/your/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <LiveMatchDetails />
            <ShareLive
                shareOnWhatsApp={shareOnWhatsApp}
                shareOnFacebook={shareOnFacebook}
                shareOnTwitter={shareOnTwitter}
                shareByEmail={shareByEmail}
            />
            <hr className="share_live_divider" />
            <MoreLive />
        </div>
    );
};

export default LiveScreen;
