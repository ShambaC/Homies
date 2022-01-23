const { DiscordTogether } = require('discord-together');
module.exports = {
    name: 'start',
    aliases: ['s'],
    category: 'together',
    utilisation: '{prefix}start [activity name]',
    description: 'Starts the mentioned activity in a VC',

    async execute(client, message, args) {
        if(!args[0]) return message.channel.send(`Please mention an activity ${message.author}... try again ? ❌`);
        if(!message.member.voice.channel) return message.channel.send(`You are not in a voice channel...Try again ❌`);

        client.discordTogether = new DiscordTogether(client);

        var argument = args.join(' ');
        argument = argument.toLowerCase();

        switch(argument) {
            case 'youtube':
                client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {
                    message.channel.send('One person click on the blue link or play button to start and then others join 📺 : ');
                    return message.channel.send(`${invite.code}`);
                })
                break;
            case 'poker':
                client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'poker').then(async invite => {
                    message.channel.send('One person click on the blue link or play button to start and then others join : ');
                    return message.channel.send(`${invite.code}`);
                })
                break;
            case 'chess':
                client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'chess').then(async invite => {
                    message.channel.send('One person click on the blue link or play button to start and then others join : ');
                    return message.channel.send(`${invite.code}`);
                })
                break;
            case 'checkers':
                client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'checkers').then(async invite => {
                    message.channel.send('One person click on the blue link or play button to start and then others join : ');
                    return message.channel.send(`${invite.code}`);
                })
                break;
            case 'betrayal':
                client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'betrayal').then(async invite => {
                    message.channel.send('One person click on the blue link or play button to start and then others join : ');
                    return message.channel.send(`${invite.code}`);
                })
                break;
            case 'fishington':
                client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'fishing').then(async invite => {
                    message.channel.send('One person click on the blue link or play button to start and then others join : ');
                    return message.channel.send(`${invite.code}`);
                })
                break;
            case 'letter league':
                client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'lettertile').then(async invite => {
                    message.channel.send('One person click on the blue link or play button to start and then others join : ');
                    return message.channel.send(`${invite.code}`);
                })
                break;
            case 'words snack':
                client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'wordsnack').then(async invite => {
                    message.channel.send('One person click on the blue link or play button to start and then others join : ');
                    return message.channel.send(`${invite.code}`);
                })
                break;
            case 'spellcast':
                client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'spellcast').then(async invite => {
                    message.channel.send('One person click on the blue link or play button to start and then others join : ');
                    return message.channel.send(`${invite.code}`);
                })
                break;
            case 'awkword':
                client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'awkword').then(async invite => {
                    message.channel.send('One person click on the blue link or play button to start and then others join : ');
                    return message.channel.send(`${invite.code}`);
                })
                break;
            case 'puttparty':
                client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'puttparty').then(async invite => {
                    message.channel.send('One person click on the blue link or play button to start and then others join : ');
                    return message.channel.send(`${invite.code}`);
                })
                break;
            /*case 'sketch heads':
                client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'sketchheads').then(async invite => {
                    message.channel.send('One person click on the blue link or play button to start and then others join : ');
                    return message.channel.send(`${invite.code}`);
                })
                break;*/
            case 'doodle crew':                
                return message.channel.send('Doodle Crew is no longer available in discord. It has been replaced Sketch Heads. That will be soon made available to the BOT.');
                break;
            default:
                return message.channel.send(`No such activity found ! ❌`)
        }
    }
};