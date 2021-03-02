'use strict';

/**
 * NOTE
 * Each day you have a quota of 10 000 units to interact with the Google API
 * Fetch a video, channel or playlist from an id cost 1 point
 * Search a video, channel or playlist cost 100 points
 */

const YouTubeDataAPI = require("./YouTubeDataAPI");
const YouTubeTrack = require("./YouTubeTrack");

class YouTubeService {
    static async video(query) {
        const items = await YouTubeDataAPI.fetchVideoFromSearch(query);
        const track = new YouTubeTrack(items[0])
        return track;
    }
}

module.exports = YouTubeService;
