# Discord Bot Template 🤖

This repository is a Discord bot template project that uses the [`discord.js`](https://discord.js.org) library to help you kickstart your own bot development. Whether you're a beginner or an experienced developer, this template provides a solid foundation for creating a functional and extensible Discord bot.

## Getting Started 🚀

Follow these steps to set up and start using this Discord bot template.

### Prerequisites 🛠️

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16.11.0 or higher)
- [npm](https://www.npmjs.com/) (usually installed with Node.js)

### Installation ⚙️

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Yarondr/discord-bot-template.git
   ```

2. Navigate to the project directory:

   ```bash
   cd discord-bot-template
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

## Usage 🧑‍💻

Now that you have the bot template installed, you can start building your own Discord bot.

1. Create a new bot on the [Discord Developer Portal](https://discord.com/developers/applications) and obtain your bot token.

2. Copy the contents of the `.env.example` file and create a new file named `.env` with the copied contents.

3. In the newly created `.env` file, fill in the following values:
    
   ```env
   BOT_TOKEN=YOUR_BOT_TOKEN_HERE
   TEST_SERVER_ID=YOUR_TEST_SERVER_ID
   OWNER_ID=YOUR_DISCORD_USER_ID
   ```

   Make sure to replace the placeholders with your specific information.

5. Define your bot's commands, event handlers, and other functionality in the `src/slashCommands/` and `src/events/` directories.

6. Utilize buttons and modals by referring to the provided examples in the `src/interactions/` directory.

7. Start the bot by running:

   ```bash
   npm start
   ```

Your bot is now running and ready to interact with users using buttons and modals on your Discord server.

## Customization 🎨

This template project is designed to be easily customizable. Here are some ways you can make it your own:

- **Custom Slash Commands**: Add your own bot commands in the `src/slashCommands/` directory. You can use the provided command handler as a reference.

- **Event Handling**: Define custom event handlers in the `src/events/` directory to react to specific events, such as message events or user join events.

- **Interactions**: Create your own interactions with buttons and modals in the `src/interactions/` directory. You can use the provided examples as a reference.

- **Extensions**: Create new features or functionalities by adding more modules and scripts in the `src/` directory.

- **Logging and Error Handling**: Customize the logging and error handling mechanisms in the `src/utils/logger.ts` file.

## Contributing 🤝

Contributions to this project are welcome! If you have any bug fixes, improvements, or new features to propose, feel free to submit a pull request. Please make sure to follow the coding style and conventions used in the existing code.

## License 📝

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details. You are free to use this template for your own Discord bot projects, whether they are personal or public.
