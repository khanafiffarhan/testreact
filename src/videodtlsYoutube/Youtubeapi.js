

export async function getvideo (){

    const channeId = 'UCbMys3ID_1S8D1mZuYkoG2A'

    return await fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2C%20contentDetails&channelId=UCbMys3ID_1S8D1mZuYkoG2A&maxResults=50&key=AIzaSyALg58DhEqBfaTIjeCZ8LcZCrD53l50wvA').then(data => data.json()).then(list => list.items);

}

// https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2C%20contentDetails&id=UCf2DUfsMCi8m4ja9tSfP2cg&key=AIzaSyALg58DhEqBfaTIjeCZ8LcZCrD53l50wvA 

// GET https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2C%20contentDetails&id=UCf2DUfsMCi8m4ja9tSfP2cg&maxResults=50&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json




