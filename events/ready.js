module.exports = async (client) => {
    console.log(`Logged to the client ${client.user.username}\n-> Ready on ${client.guilds.cache.size} servers for a total of ${client.users.cache.size} users`);

    client.user.setActivity(process.env.PLAYING, {type: process.env.TYPE});
    client.user.setStatus(process.env.STATUS);
};