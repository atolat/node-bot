//Building my first bot
var builder = require('botbuilder');

//Talk to bot from console
var connector = new builder.ConsoleConnector().listen();

//The UniversalBot class implements all of logic to manage the bots’ conversations with users. You can bind the UniversalBot to a variety of channels using connectors.
var bot = new builder.UniversalBot(connector);

var intents = new builder.IntentDialog();

//Setting up a waterfall of functions....!
bot.dialog('/', intents);

intents.matches(/^change name/i, [
    function (session) {
        session.beginDialog('/profile');
    },
    function (session, results) {
        session.send('Ok... Changed your name to %s', session.userData.name);
    }
]);

intents.onDefault([
    function (session, args, next) {
        if (!session.userData.name) {
            session.beginDialog('/profile');
        } else {
            next();
        }
    },
    function (session, results) {
        session.send('Hello %s!', session.userData.name);
    }
]);

bot.dialog('/profile', [
    function (session) {
        builder.Prompts.text(session, 'Hi! What is your name?');
    },
    function (session, results) {
        session.userData.name = results.response;
        session.endDialog();
    }
]);