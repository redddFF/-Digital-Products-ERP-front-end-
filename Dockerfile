# Use Node.js v16 as the base image
FROM node:18

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application for production
RUN npm run build

# Expose port 4200 (the default port used by Angular)
EXPOSE 4200

# Start the application using ng serve
CMD [ "npm", "start" ]
