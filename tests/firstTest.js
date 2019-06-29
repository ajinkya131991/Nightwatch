module.exports = {
    'My First Test Case'(client){
        client.url('https://news.ycombinator.com/')
            .waitForElementVisible('.hnname')
            .assert.containsText('.hnname', 'Hacker News');
    }
}