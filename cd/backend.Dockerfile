# Multi-stage build: Frontend + Backend

# Stage 1: Build frontend
FROM node:18-alpine AS frontend-builder

WORKDIR /frontend

# Copy frontend package files
COPY frontend/package.json ./

# Install frontend dependencies
RUN npm install

# Copy frontend source code
COPY frontend/ ./

# Build frontend (output to dist/)
ENV DOCKER_BUILD=true
RUN npm run build

# Stage 2: Backend with frontend static files
FROM node:18-alpine

WORKDIR /app

# Copy backend package files
COPY backend/package.json ./

# Install backend dependencies
RUN npm install --production

# Copy backend source code
COPY backend/src ./src

# Copy frontend build from stage 1
COPY --from=frontend-builder /frontend/dist ./public

# Create uploads directory
RUN mkdir -p uploads

# Expose backend port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Start the backend server
CMD ["node", "src/index.js"]
