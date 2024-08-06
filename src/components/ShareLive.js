import React from 'react';
import '../Style/ShareLive.css';

const ShareLive = ({ shareOnWhatsApp, shareOnFacebook, shareOnTwitter, shareByEmail }) => {
    function copyText() {
        const textToCopy = "Your text or content to copy";
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('Text copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }

    return (
        <div className="share-live">
            <span>SHARE</span>
            <div className="share-icons">
                <a href="#" onClick={copyText} className="share-icon">
                    <img src="../img/Copy.png" alt="Copy" />
                </a>
                <a href="#" onClick={shareOnWhatsApp} className="share-icon">
                    <img src="../img/WhatsApp.png" alt="WhatsApp" />
                </a>
                <a href="#" onClick={shareOnFacebook} className="share-icon">
                    <img src="../img/Facebook.png" alt="Facebook" />
                </a>
                <a href="#" onClick={shareOnTwitter} className="share-icon">
                    <img src="../img/Twitter.png" alt="Twitter" />
                </a>
                <a href="#" onClick={shareByEmail} className="share-icon">
                    <img src="../img/Email.png" alt="Email" />
                </a>
            </div>
        </div>
    );
};

export default ShareLive;