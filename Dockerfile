# Use the official Node 20 image
FROM node:20-slim

# Set the working directory inside the container
WORKDIR /app

# Default command: launch bash shell
CMD ["bash"]