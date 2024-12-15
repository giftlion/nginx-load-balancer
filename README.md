# Load Balanced Node.js Application

This repository contains a simple load-balanced Node.js application using Docker and Nginx. The setup includes three Node.js instances and an Nginx load balancer.

## Architecture

- 3 Node.js applications running on different ports
- Nginx load balancer to distribute traffic

## Setup and Running

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Start the application using Docker Compose:
   ```bash
   docker-compose up --build
   ```

## Testing the Load Balancer

Once everything is running, you can test the load balancer by making requests to `http://localhost:8080`. Each request will be distributed among the three Node.js instances.

