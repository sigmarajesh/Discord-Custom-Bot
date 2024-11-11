const { REST, Routes } = require ('discord.js');

const commands = [
    {
      name: 'create',
      description: 'Create new short URL',
    },
  ];

  const rest = new REST({ version: '10' }).setToken("TOKEN");

  (async () => {
  try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands('client id'), { 
      body: commands, });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();