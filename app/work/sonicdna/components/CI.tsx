import React from "react";
import CarouselControlled from "../../../components/Carousel";

const ciSlides = [
  {
    id: "docker-setup",
    title: "docker-compose.yml: API + DB Services",
    summary:
      "Two-service compose stack: a PostgreSQL database with a healthcheck and the Node API server that waits for it.",
    description: `services:
  db:
    container_name: sonicdna-db
    image: postgres:16-alpine
    restart: unless-stopped
    environment:
      POSTGRES_USER: \${POSTGRES_USER}
      POSTGRES_PASSWORD: \${POSTGRES_PASSWORD}
      POSTGRES_DB: \${POSTGRES_DB}
    ports:
      - "5432:5432"
    volumes:
      - sound-api-db-data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U \${POSTGRES_USER} -d \${POSTGRES_DB}"]
      interval: 5s
      timeout: 5s
      retries: 10

  api:
    container_name: sonicdna-server
    build:
      context: .
      dockerfile: Dockerfile
    env_file:
      - .env
    environment:
      DATABASE_URL: postgresql://\${POSTGRES_USER}:\${POSTGRES_PASSWORD}@db:5432/\${POSTGRES_DB}?schema=public
    ports:
      - "3000:3000"
    depends_on:
      db:
        condition: service_healthy
    restart: unless-stopped

volumes:
  sound-api-db-data:`,
    alt: "docker-compose.yml API and DB services",
  },
  {
    id: "dockerfile",
    title: "Dockerfile: Node + Python + ffmpeg",
    summary:
      "Single image ships the Node API, a Python venv, and ffmpeg so audio conversion runs entirely inside the container.",
    description: `FROM node:22-bookworm-slim

WORKDIR /app

# Python + audio deps needed by librosa/soundfile conversion scripts.
RUN apt-get update \\
  && apt-get install -y --no-install-recommends \\
    python3 python3-pip python3-venv \\
    ffmpeg libsndfile1 \\
  && rm -rf /var/lib/apt/lists/*

# Isolated venv so pip packages don't conflict with system Python.
RUN python3 -m venv /app/.venv
ENV PATH="/app/.venv/bin:\${PATH}"

# JS deps first — maximises Docker layer cache hits.
COPY package*.json .npmrc ./
RUN npm ci --legacy-peer-deps

# Python deps for analyze/convert scripts.
COPY python/requirements.txt ./python/requirements.txt
RUN pip install --no-cache-dir -r ./python/requirements.txt

# Source + Prisma client generation.
COPY . .
RUN npx prisma generate

EXPOSE 3000
CMD ["npm", "start"]`,
    alt: "Dockerfile multi-runtime image",
  },
  {
    id: "expo-ci",
    title: "ci.yml: Verify Expo App",
    summary:
      "Push and PR validation run lint, tests, type-check, and Expo doctor without consuming EAS build credits.",
    description: `name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read

concurrency:
  group: sonicdna-mobile-ci-${"${{ github.workflow }}"}-${"${{ github.event.pull_request.number || github.ref }}"}
  cancel-in-progress: true

jobs:
  verify:
    name: Verify Expo App
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Use Node.js 20.x
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - name: Install dependencies
        run: npm ci
      - name: Lint
        run: npm run lint
      - name: Test
        run: npm run test:ci
      - name: Typecheck
        run: npm run typecheck
      - name: Expo doctor
        run: npm run doctor`,
    alt: "ci.yml full workflow",
  },
  {
    id: "eas-manual",
    title: "eas-build.yml: Manual EAS Build",
    summary:
      "EAS builds are triggered manually via workflow_dispatch to avoid burning free-plan quota on every push.",
    description: `name: EAS Build

on:
  workflow_dispatch:
    inputs:
      profile:
        description: Build profile to run
        required: true
        default: preview
        type: choice
        options: [preview, production]
      platform:
        description: Platform to build
        required: true
        default: all
        type: choice
        options: [all, android, ios]

jobs:
  build:
    name: Build ${"${{ matrix.platform }}"}
    runs-on: ubuntu-latest
    strategy:
      fail-fast: false
      matrix:
        platform: [android, ios]
    env:
      EXPO_TOKEN: ${"${{ secrets.EXPO_TOKEN }}"}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - uses: expo/expo-github-action@v8
        with:
          eas-version: latest
          token: ${"${{ secrets.EXPO_TOKEN }}"}
      - run: eas build --non-interactive --platform ${"${{ matrix.platform }}"} --profile preview`,
    alt: "eas-build.yml manual trigger",
  },
];

const CI = () => {
  return (
    <div className="tw-bg-bluegreen tw-mb-10 tw-py-16">
      <div className="tw-container tw-mx-auto tw-p-5 tw-text-white">
        <div className="md:tw-w-2/3">
          <h3 className="tw-leading-10 tw-text-2xl md:tw-text-4xl tw-font-boldonse md:tw-leading-[1.5]">
            CI/CD and Build Strategy
          </h3>
          <div className="tw-w-36">
            <hr className="tw-h-2 tw-bg-yellow" />{" "}
          </div>
          <p className="md:tw-text-base lg:tw-text-lg">
            The API server ships as a Docker Compose stack: a postgres:16-alpine
            database with a healthcheck and a Node 20 container that bundles
            Python, ffmpeg, and libsndfile so audio conversion runs entirely
            inside the image without host dependencies.
          </p>
          <p className="md:tw-text-base lg:tw-text-lg">
            On the mobile side, CI runs automatically on every push and PR
            checking lint, tests, type-check, and Expo doctor without touching
            EAS. EAS builds are kept manual-only so free-plan credits are spent
            intentionally at release or demo time.
          </p>
        </div>
        <div className="tw-grid md:tw-grid-cols-3 tw-gap-3 tw-my-6">
          <div className="tw-bg-[#113058] tw-rounded-lg tw-p-4">
            <h4 className="tw-font-semibold tw-mb-2">Docker Workflow</h4>
            <p className="tw-text-sm tw-mb-0">
              docker compose up starts the API and Postgres together. The API
              waits for the DB healthcheck before accepting connections.
            </p>
          </div>
          <div className="tw-bg-[#113058] tw-rounded-lg tw-p-4">
            <h4 className="tw-font-semibold tw-mb-2">CI Pipeline Checks</h4>
            <p className="tw-text-sm tw-mb-0">
              Lint, unit tests, type-check, and Expo doctor run on every push
              and PR — no EAS credits consumed.
            </p>
          </div>
          <div className="tw-bg-[#113058] tw-rounded-lg tw-p-4">
            <h4 className="tw-font-semibold tw-mb-2">Manual EAS Builds</h4>
            <p className="tw-text-sm tw-mb-0">
              workflow_dispatch triggers a matrix build for Android and iOS
              against configurable preview or production profiles.
            </p>
          </div>
        </div>
        <CarouselControlled
          wireframeslides={ciSlides}
          width="100%"
          height="auto"
        />
      </div>
    </div>
  );
};

export default CI;
