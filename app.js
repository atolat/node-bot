//Building my first bot
var builder = require('botbuilder');

//Talk to bot from console
var connector = new builder.ConsoleConnector().listen();

//The UniversalBot class implements all of logic to manage the bots’ conversations with users. You can bind the UniversalBot to a variety of channels using connectors.
var bot = new builder.UniversalBot(connector);

//Setting up a waterfall of functions....!
bot.dialog('/', [function (session) {
        builder.Prompts.text(session, 'Hi! What is ypur name?');
}
            , function (session, results) {
        session.send('Hello ' + results.response);
            }

            ]);