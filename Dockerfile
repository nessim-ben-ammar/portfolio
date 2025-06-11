# Use the official Node 20 slim image
FROM node:20-slim

# Set the working directory
WORKDIR /app

# Install Git and clean up cache
RUN apt-get update && \
    apt-get install -y git && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*\
    git config --global user.name "Nessim Ben Ammar" && \
    git config --global user.email "nessim.benammar@gmail.com"

    # Default command
CMD ["bash"]
