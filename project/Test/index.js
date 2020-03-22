import express from 'express';
const app = express();
app.listen('127.0.0.1:5501/project/index.html ' ());
console.log('');


import TwitterClient from 'twit-wrapper';
const twitterClient = new TwitterClient(
    consumerAPIKey,
    consumerAPISecretKey,
    accessToken,
    accessTokenSecret,
);

// post new tweet
try {
    const msgToPost = 'Post a test message';
    const postedMsg = await twitterClient.postTweet(msgToPost);
    console.log(postedMsg);
} catch (e) {
    console.error(e);
}

// search twitter for all tweets containing the word 'javascript' since January 1, 2017
try {
    const searchedTweets = await twitterClient.getTweets('javascript', '2017-01-01');
    console.log(searchedTweets);
} catch (e) {
    console.error(e);
}