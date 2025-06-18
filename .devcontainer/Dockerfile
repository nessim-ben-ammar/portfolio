# Use the official Ubuntu base image
FROM mcr.microsoft.com/devcontainers/base:ubuntu

# Install system tools + Node.js 20 + npm from NodeSource
RUN apt-get update && \
    apt-get install -y curl git && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g npm@11.4.2 && \
    apt-get clean

# Set default working directory
WORKDIR /workspace

# Default command
CMD ["bash"]
