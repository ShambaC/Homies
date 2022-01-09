const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    showHelp: false,
    utilisation: '{prefix}help [command name]',
    description: 'Shows help',

    execute(client, message, args) 
    {
        const embed = new MessageEmbed();

        if(!args[0])
        {
            embed.setColor('RED');
            embed.setAuthor('HELP PANEL');

            const core = client.commands.filter(x => x.category == 'Core').map((x) => '`' + x.name + '`').join(', ');
            const together = client.commands.filter(x => x.category == 'together').map((x) => '`' + x.name + '`').join(', ');

            embed.setDescription('Type +help <command> to know more about a command')
            embed.addField('Info', core);
            embed.addField('VC', together);

            embed.setTimestamp();
            embed.setFooter('Made with heart by ShambaC ❤️', message.author.avatarURL({ dynamic: true }));

            message.channel.send({ embeds: [embed] });
        }
        else
        {
            const command = client.commands.get(args.join(" ").toLowerCase()) || client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));
            if (!command) return message.channel.send(`❌ - I did not find this command !`);

            embed.setColor('RED');
            embed.setAuthor('HELP PANEL');

            embed.setDescription(command.description);

            embed.addField('Name', command.name, true);
            embed.addField('Category', command.category, true);
            embed.addField('Aliase(s)', command.aliases.length < 1 ? 'None' : command.aliases.join(', '), true);
            embed.addField('Utilisation', command.utilisation.replace('{prefix}', process.env.PREFIX), true);

            embed.setTimestamp();
            embed.setFooter('Made with heart by ShambaC ❤️', message.author.avatarURL({ dynamic: true }));

            message.channel.send({ embeds: [embed] });

        }

        
    },
};