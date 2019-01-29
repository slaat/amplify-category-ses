const featureName = 'ses';

module.exports = {
  name: featureName,
  run: async (context) => {
    const header = `amplify ${featureName} <subcommand>`;

    const commands = [
      {
        name: 'add',
        description: `Takes you through a CLI flow to add an ${featureName} resource to your local backend`,
      },
    ];

    context.amplify.showHelp(header, commands);

    context.print.info('');
  },
};
