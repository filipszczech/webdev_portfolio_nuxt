# ---------- base ----------
    FROM node:18-alpine

    # Needed tools
    RUN apk add --no-cache curl
    
    # Workdir
    WORKDIR /app
    
    # Better caching for deps
    COPY package*.json ./
    
    # Install exact deps
    RUN npm ci
    
    # Copy source
    COPY . .
    
    
    # Build the app
    RUN npm run build && npm cache clean --force
    
    EXPOSE 3000
    
    # Healthcheck (make sure you created server/api/healthz.get.ts)
    HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
      CMD curl -fsS http://localhost:3000/api/healthz || exit 1
    
    # Start Nitro server
    CMD ["node", ".output/server/index.mjs"]
    