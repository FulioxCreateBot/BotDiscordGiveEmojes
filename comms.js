const Discord = require ('discord.js') 
const { config } = require("dotenv")
const prefix = config.prefix;
const versions = config.versions;

// Список команд //

var comms_list = [{
    name: "monetka",
    out: monetka,
    about: "Монетка"
},
    {
    name: "say",
    out: say,
    about: "Отправка сообщений от имени бота"
}]


// Name - название команды, на которую будет реагировать бот
// Out - название функции с командой
// About - описание команды 

// КОМАНДЫ //
function monetka (robot, mess, Math) {
    mess.channel.send('Монета подбрасывается...')

    var random = Math.floor(Math.random() * 4) + 1; // Объявление переменной random - она вычисляет случайное число от 1 до 3
    
    if (random === 1) { // Если вычислено число 1, то выпадает орёл.
        mess.channel.send(':full_moon: Орёл!')
    } else if (random === 2) { // Если вычислено число 2, то выпадает решка.
        mess.channel.send(':new_moon: Решка!')
    } else if (random === 3) { // Если вычислено число 3, то монета падает ребром.
        mess.channel.send(':last_quarter_moon: Монета упала ребром!')
    }
}

function say (robot, mess, args) {
if (!mess.member.hasPermission("MANAGE_MESSAGES")) return mess.channel.send("У  вас нет прав"); /* Если у исполнителя команды нету привилегии MANGAGE_MESSAGES, он не сможет её использовать */

args = mess.content.split(' ');
args.shift();
args = args.join(' ');

mess.delete().catch(); // Удаление сообщения пользователя после отправки 

mess.channel.send(args)
}

module.exports.comms = comms_list;