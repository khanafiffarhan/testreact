import axios from "axios";
const KEY = "AIzaSyALg58DhEqBfaTIjeCZ8LcZCrD53l50wvA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  },
  headers: {}
});
GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCbMys3ID_1S8D1mZuYkoG2A&pageToken=CBkQAA&key=[YOUR_API_KEY] HTTP/1.1

Authorization: Bearer [YOUR_ACCESS_TOKEN]
Accept: application/json
