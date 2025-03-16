# AI Fight

A debate simulation between two AI personalities with different temperaments discussing philosophical topics.

## Description

This project pits two AI models against each other in a structured debate:
- **Llama**: An aggressive AI looking for a fight
- **Deepseek**: A calm AI seeking peaceful solutions

The AIs debate a predefined topic with alternating responses.

## Setup

1. Clone the repository
2. Install dependencies
   ```
   pnpm install
   ```
3. Create a `.env` file with your API key
   ```
   GROQ_API_KEY=your_api_key_here
   ```

## Usage

Run the project with:

```
node index.js
```

You can modify the topic and number of debate turns in the index.js file.

## Features

- Uses Groq API with OpenAI compatibility
- Customizable system prompts for each AI personality
- Configurable debate topics and length

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Contact

Haroon - Software Engineer
Email: info@codexharoon.com

## License

This project is licensed under the ISC License - see the LICENSE file for details.
