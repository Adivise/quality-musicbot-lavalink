const delay = require('delay');
const chalk = require('chalk');

module.exports = { 
    config: {
        name: "pop",
        description: "Turning on pop filter",
        category: "filters",
        accessableby: "Member",
        aliases: [""]
    },

    run: async (bot, message, filter) => {
        const msg = await message.channel.send("Turning on `Bass` please wait...");

        const player = bot.music.players.get(message.guild.id);
        if(!player) return msg.edit("No song/s currently playing in this guild.");

        const { voiceChannel } = message.member;
        if (!voiceChannel) return message.channel.send("You need to be in a voice channel to play music.");

        player.setEQ([{ 'band': 0, 'gain': 0.65 }, { 'band': 1, 'gain': 0.45 }, { 'band': 2, 'gain': -0.45 }, { 'band': 3, 'gain': -0.65 }, { 'band': 4, 'gain': -0.35 }, { 'band': 5, 'gain': 0.45 }, { 'band': 6, 'gain': 0.55 }, { 'band': 7, 'gain': 0.6 }, { 'band': 8, 'gain': 0.6 }, { 'band': 9, 'gain': 0.6 }, { 'band': 10, 'gain': 0 }, { 'band': 11, 'gain': 0 }, { 'band': 12, 'gain': 0 }, { 'band': 13, 'gain': 0 }]);

        await delay(5000);
        msg.edit('Turn on `Pop`');
            console.log(chalk.magenta(`  [Command]: Pop used by ${message.author.tag} from ${message.guild.name}`));
   }
};