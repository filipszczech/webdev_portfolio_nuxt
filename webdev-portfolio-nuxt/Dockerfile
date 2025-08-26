
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first for better Docker layer caching
COPY package*.json ./

# Install dependencies (including devDependencies needed for build)
RUN npm ci

# Copy source code
COPY . .

# Set environment variables for build
ENV NODE_ENV=production
ENV NITRO_PRESET=node-server

# Build the application
RUN npm run build

# Keep all dependencies as some "dev" dependencies are needed at runtime
RUN npm cache clean --force

# Expose the port
EXPOSE 3000

# Start the application
CMD ["node", ".output/server/index.mjs"]