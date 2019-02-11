# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:10.15.1

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn

# Copy all local files into the image.
COPY . .

# Build for production.
RUN npm install
RUN npm run build 

# Set the command to start the node server.
# start app
CMD ["npm", "start"]

# Tell Docker about the port we'll run on.
EXPOSE 3000
