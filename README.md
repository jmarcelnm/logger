# Lightweight Logger for Node.js

A lightweight and customizable logging library for Node.js applications. This library supports various log levels, output formats, and configuration options to make logging simple and effective.

## Features

- **Log Levels**: `info`, `warn`, `error`, `debug`
- **Customizable Output Formats**:
  - JSON
  - Plain text
- **Write Logs**:
  - Console
  - Files
- **Timestamps**: Include timestamps in logs.
- **Configurable Log Levels**: Suppress lower-priority logs based on the environment.
- **Optional Colors**: Add colored output for better readability.

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/) installed on your machine.

### Setting Up the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/jmarcelnm/logger.git
   cd lightweight-logger
   ```

2. Build the Docker image:

   ```bash
   docker-compose build
   ```

3. Install dependencies inside the Docker container:
   ```bash
   docker-compose run app sh -c "npm install"
   ```

### Running Tests

To run tests using Jest:

```bash
docker-compose run app sh -c "npm test"
```

## Usage

Import the logger into your project and configure it as needed:

```javascript
const Logger = require('./logger')

const logger = new Logger({
  level: 'info',
  format: 'json',
})

logger.info('This is an info message')
logger.error('This is an error message')
logger.debug('This debug message will be suppressed in production')
```

## Roadmap

- Add support for file output.
- Enhance colored output for different log levels.
- Include benchmarks for performance.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new feature branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes using [Conventional Commits](https://www.conventionalcommits.org/): `git commit -m "feat: add new feature"`.
4. Push to your branch: `git push origin feature/your-feature-name`.
5. Open a Pull Request.
