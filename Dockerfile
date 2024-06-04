FROM node:18-alpine AS deps
WORKDIR /app
COPY pnpm-lock.yaml ./
RUN apk add --no-cache curl && curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
COPY package.json ./
RUN pnpm install --frozen-lockfile

ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_LOGIN_URL
ARG NEXT_PUBLIC_MASTER_TOKEN
RUN echo "NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}" > .env
RUN echo "NEXT_PUBLIC_LOGIN_URL=${NEXT_PUBLIC_LOGIN_URL}" >> .env
RUN echo "NEXT_PUBLIC_MASTER_TOKEN=${NEXT_PUBLIC_MASTER_TOKEN}" >> .env

FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/.env ./env

RUN pnpm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./.next
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["pnpm", "start"]

