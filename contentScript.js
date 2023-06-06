(() => {
    let youtubeLeftControls, youtubePlayer;
    let currentVideoId = "";

    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        const { type, value, videoId } = request;

        if (type === 'NEW') {
            currentVideoId = videoId;
            newVideoLoaded();
        }
    });
})();