module.exports = {
    'google advance musk: Elon Musk'(client){
        const mainQuery = 'Elon Musk';
        const mainQueryInputSelector = 'name="as_q"';

        client.
        url('https://www.google.com/advanced_search')
        .setValue(mainQueryInputSelector, mainQuery)
        .saveScreenshot('tests_output/google.png');
    }
}