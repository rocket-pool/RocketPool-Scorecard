FROM node:20-alpine AS builder
RUN npm install -g pnpm
WORKDIR /app
COPY . .

RUN corepack enable pnpm
RUN pnpm i
ENV NEXT_TELEMETRY_DISABLED 1

RUN pnpm run build
RUN pnpm prune --prod

FROM nginx:alpine
COPY .deploy/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/.next /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

