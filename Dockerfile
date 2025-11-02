# Use a small, fast base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files for better caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the project
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port 4000
EXPOSE 4000

# Set environment
ENV NODE_ENV=production
ENV PORT=4000

# Start the app
CMD ["npm", "start"]
