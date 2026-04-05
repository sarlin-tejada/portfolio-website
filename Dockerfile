FROM node:22

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml* .npmrc* ./
RUN pnpm install --ignore-scripts

COPY . .

EXPOSE 4321

CMD ["pnpm", "dev", "--host", "0.0.0.0"]