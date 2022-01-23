const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'gamehelp',
    aliases: ['gh'],
    category: 'together',
    utilisation: '{prefix}gamehelp [activity name]',
    description: 'Displays help for a activity',

    async execute(client, message, args) {

        const embed = new MessageEmbed();

        if(!args[0])
        {
            embed.setColor('RED');
            embed.setAuthor('ACTIVITY HELP PANEL');
            embed.setDescription(`Type +gamehelp [activity name] to know more about it.\nType +start [activity name] to start an activity\n**Here's a list of available activities : **\n💠YouTube\n💠Poker\n💠Chess\n💠Checkers\n💠Betrayal\n💠Fishington\n💠Letter League\n💠Words Snack\n💠SpellCast\n💠Awkword❌\n💠Puttparty❌\n💠Sketch Heads❌`);
            embed.setTimestamp();
            embed.setFooter('Made with heart by ShambaC ❤️', message.author.avatarURL({ dynamic: true }));

            message.channel.send({ embeds: [embed] });
        }
        else
        {
            embed.setColor('RED');
            embed.setAuthor('ACTIVITY HELP PANEL');
            embed.setTimestamp();
            embed.setFooter('Made with heart by ShambaC ❤️', message.author.avatarURL({ dynamic: true }));

            var arguments = args.join(' ');
            arguments = arguments.toLowerCase();

            switch(arguments) {
            case 'youtube':
                embed.setDescription('Watch Youtube videos together');
                break;
            case 'poker':
                embed.setDescription(`Discord Poker Night is a Texas hold 'em style game mode with up to 7 other players.`);
                break;
            case 'chess':
                embed.setDescription(`Chess in the Park is a multiplayer strategy game, where you and another player move chess pieces on a board to overtake the other player's pieces. Each different piece on the board can be moved in various ways, which will require planning to win against the other player!`);
                break;
            case 'checkers':
                embed.setDescription(`Checkers is a multiplayer strategy game, where you and another player move checkers pieces on a board to overtake the other player's pieces. You will be able to view other players' games and either create a new game or join a game in the virtual park. `);
                break;
            case 'betrayal':
                embed.setDescription(`Dunno what this is 🤷‍♂️`);
                break;
            case 'fishington':
                embed.setDescription(`Dunno what this is 🤷‍♂️`);
                break;
            case 'letter league':
                embed.setDescription(`Letter League is a game where you and your friends take turns placing letters on a shared game board to create words in a crossword-style. Spelling longer words and placing letters on special spaces earn players more points, so get your dictionaries and thesauri ready!`);
                break;
            case 'words snack':
                embed.setDescription(`Word Snacks is a multiplayer word search game, where you and your friends try to find and make as many words as possible from a few letters. The more words you can spell before your friends, the higher your score!`);
                break;
            case 'spellcast':
                embed.setDescription(`SpellCast is a multiplayer word game where each player takes turns attempting to find words in sequences of adjacent letters. Certain letters will allow for more points, and some letters have special gems. `);
                break;
            case 'awkword':
                embed.setDescription(`Dunno what this is 🤷‍♂️`);
                break;
            case 'puttparty':
                embed.setDescription(`Dunno what this is 🤷‍♂️`);
                break;
            case 'sketch heads':
                embed.setDescription(`This replaces Doodle Crew. In Sketch Heads in Classic Mode one player sketches an image as a clue for other players to guess what the secret word is. Guessing quickly earns more points!\nIn Blitz Mode of Sketch Heads there are multiple drawers and guessers, drawers sketch the image as quickly as they can so the guessers can guess as many words as possible in the allotted time. `);
                break;
            default:
                embed.setDescription(`No such activity found ! ❌`);
            }
            message.channel.send({ embeds: [embed] });
        }
    }
};