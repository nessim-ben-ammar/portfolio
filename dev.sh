#!/bin/bash

# Script to start the portfolio development container

# Get the GitHub token from the macOS keychain
GITHUB_TOKEN=$(security find-internet-password -s github.com -w)

# Build the image if it doesn't exist
IMAGE_NAME="portfolio-dev"

# Check if image already exists
if ! docker image inspect $IMAGE_NAME > /dev/null 2>&1; then
  echo "🔧 Building Docker image..."
  docker build -t $IMAGE_NAME .
else
  echo "✅ Using existing Docker image: $IMAGE_NAME"
fi

# Run the container with live access to source code
docker run -it --rm \
  -v "$PWD":/app \
  -v "$PWD/askpass.sh":/askpass.sh \
  -e GIT_ASKPASS=/askpass.sh \
  -e GITHUB_TOKEN="$GITHUB_TOKEN" \
  -w /app \
  -p 3000:3000 \
  $IMAGE_NAME
