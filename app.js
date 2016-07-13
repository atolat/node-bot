//Building my first bot
var builder = require('botbuilder');

//Talk to bot from console
var connector = new builder.ConsoleConnector().listen();

//The UniversalBot class implements all of logic to manage the bots’ conversations with users. You can bind the UniversalBot to a variety of channels using connectors.
var bot = new builder.UniversalBot(connector);

//root dialog-Hello world!
bot.dialog('/',function(session){
    session.send('Hello World');
});