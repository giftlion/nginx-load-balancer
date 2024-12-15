# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy app files
COPY index.js ./

# Set environment variables
ENV HOSTNAME=app

# Expose the app port
EXPOSE 3000

# Run the app
CMD ["node", "index.js"]
