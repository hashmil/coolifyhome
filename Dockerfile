# Use the official Node.js 20 image as a parent image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies with --legacy-peer-deps to ensure compatibility
RUN npm install --legacy-peer-deps

# Copy the rest of your app's source code
COPY . .

# Build your Next.js app
RUN npm run build

# Expose the port Next.js runs on
EXPOSE 3000

# Run the app
CMD ["npm", "start"]