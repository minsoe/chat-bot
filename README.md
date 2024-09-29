# ChatBot Frontend Application

This is a frontend chatbot application built to interact with a backend server. The application provides a user-friendly interface for managing conversations with an AI assistant.

## Features

1. Start a new conversation
2. Retrieve existing conversations
3. Send messages to the existing conversation

## Technology Stack

- React
- TypeScript
- Mantine (React component library)

## Development Environment

This project uses VSCode with devcontainers, allowing developers to work in a consistent environment without installing libraries on their local machine.

## Getting Started

### Prerequisites

- Visual Studio Code
- Docker
- VSCode Remote - Containers extension

### Setup

1. Clone the repository
2. Open the project folder in VSCode
3. When prompted, click "Reopen in Container"
4. VSCode will build and start the devcontainer, which may take a few minutes the first time

### Running the Application

Once the devcontainer is ready, you can start the application by running:
```
npm start
```


This will start the development server. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Project Structure

The main components of the application are:

- `ChatBot`: The main component that manages the conversation state and renders the message list and input
- `MessageList`: Displays the conversation messages
- `MessageInput`: Allows users to input and send new messages

## API Integration

The application interacts with a backend API for managing conversations. The API calls are handled in the `src/api/conversation.ts` file.

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
