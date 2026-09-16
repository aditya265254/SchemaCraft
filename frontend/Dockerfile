# Use Node.js Alpine image for a lightweight dev environment
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy dependency definitions first for layer caching
COPY package.json pnpm-lock.yaml ./

# Install all dependencies (including devDependencies like Vite/TypeScript)
RUN pnpm install

# Copy the rest of the source code
COPY . .

# Expose Vite's default development port
EXPOSE 5173

# Run Vite in dev mode, bound to all network interfaces so Docker can expose
CMD ["pnpm", "dev", "--host", "0.0.0.0"]
