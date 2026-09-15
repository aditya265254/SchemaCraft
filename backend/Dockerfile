# 1. Node image in this project we use alpine 18
FROM node:18-alpine

# 2. Set the working directory as app
WORKDIR /app

# 3. Copy package files first (to leverage Docker caching for dependencies)
COPY package.json pnpm-lock.yaml ./

# 4. Install global pnpm and dependencies
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# 5. Copy rest of backend code
COPY . .

# 6. Build the project (if you have a build script)
RUN pnpm run build

# 7. Expose the port
EXPOSE 3000

# 8. Run the backend (For Production)
CMD ["pnpm", "run", "start"]