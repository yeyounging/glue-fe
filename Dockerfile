# 1. 환경 설정
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat

WORKDIR /app
COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm 
RUN pnpm install --frozen-lockfile

# 2. 빌드 단계
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm run build

# 3. 실행 단계
FROM node:18-alpine AS runner
WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["pnpm", "start"]
