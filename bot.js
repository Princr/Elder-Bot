const TeleBot = require('telebot');
const bot = new TeleBot('528601566:AAFmolAWZEQS9m_33D57Jkni3mJNQeyOTXk');
var com = require('../elder/community/index');
var space = require('../elder/space/index');

let err_msg = "As a Village Elder I dont't understand your message try again";
let init = 'I am the Village Elder what do you want to know about the `community` or `space`';

/*
// On inline query
bot.on('inlineQuery', msg => {

    let query = msg.query;
    console.log(`inline query: ${ query }`);

    // Create a new answer list object
    const answers = bot.answerList(msg.id, {cacheTime: 60});

    // Article
    answers.addArticle({
        id: 'query',
        title: 'Inline Title',
        description: `Your query: ${ query }`,
        message_text: 'Click!'
    });

    // Photo
    answers.addPhoto({
        id: 'photo',
        caption: 'Telegram logo.',
        photo_url: 'https://telegram.org/img/t_logo.png',
        thumb_url: 'https://telegram.org/img/t_logo.png'
    });

    // Gif
    answers.addGif({
        id: 'gif',
        gif_url: 'https://telegram.org/img/tl_card_wecandoit.gif',
        thumb_url: 'https://telegram.org/img/tl_card_wecandoit.gif'
    });

    // Send answers
    return bot.answerQuery(answers);

});
*/


bot.on('/start', (msg)=> {
    
});

bot.on('text', (msg)=>{
    let id = msg.from.id;
    let text = msg.text;

    if (text == '/community' || text == 'Community'){
        return bot.sendMessage(id, com.community(text));
    }else if (text == '/space' || text == 'Space'){
        return bot.sendMessage(id, space.space(text));
    }else if(text == '/start'){
        return bot.sendMessage(msg.from.id, init );
    }
    else {
        return bot.sendMessage(id, err_msg);
    }
});


bot.start();

