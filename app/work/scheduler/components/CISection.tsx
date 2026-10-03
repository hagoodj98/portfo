import React from "react";
import CarouselControlled from "../../../components/Carousel";
const ciSlides = [
  {
    id: "ci-pipeline",
    title: "CI Pipeline",
    summary:
      "GitHub Actions runs database-backed checks for pull requests and pushes to main: generation, type checking, linting, tests, and a production build.",
    description: `The workflow is configured using GitHub Actions. It runs on pushes and pull requests to main and includes:
jobs:
  verify:
    name: Lint, Type Check, Unit + E2E, Build
    runs-on: ubuntu-latest
    env:
      DATABASE_URL: postgresql://ci:ci@localhost:5432/ci?schema=public

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      # NOTE: npm ci uses package-lock.json and will fail if it’s out of sync with package.json.
      - name: Install dependencies
        run: npm ci

      - name: Generate Prisma client
        run: npm run --if-present prisma:generate

      - name: Type check
        run: npm run --if-present type-check

      - name: Lint
        run: npm run lint

      - name: Run unit tests
        run: npm run test:unit

      - name: Install Playwright browser
        run: npx playwright install --with-deps chromium

      - name: Run e2e tests
        run: npm run test:e2e

      - name: Build
        run: npm run build
  `,
  },
  {
    id: "docker-postgres",
    title: "Dockerized PostgreSQL for Local Development",
    summary:
      "Docker Compose provides a local PostgreSQL 16 database with a health check and persistent storage.",
    description: `The docker-compose.yml database service:
  services:
  db:
    image: postgres:16
    restart: unless-stopped
    environment:
      POSTGRES_USER: ${"${POSTGRES_USER}"}
      POSTGRES_PASSWORD: ${"${POSTGRES_PASSWORD}"}
      POSTGRES_DB: ${"${POSTGRES_DB}"}
    ports:
      - "5433:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U ${"${POSTGRES_USER}"} -d ${"${POSTGRES_DB}"}"]
      interval: 10s
      timeout: 5s
      retries: 5
volumes:
  postgres_data:
  `,
  },
];

const CISection = () => {
  return (
    <div className="tw-bg-moreblue tw-my-10 tw-py-16">
      <div className="tw-container tw-mx-auto tw-p-5 tw-text-white">
        <div className="md:tw-w-2/3">
          <h3 className="tw-leading-10 tw-text-2xl md:tw-text-4xl tw-font-boldonse md:tw-leading-[1.5]">
            Continuous Integration and Dockerized Development
          </h3>
          <div className="tw-w-36">
            <hr className="tw-h-2 tw-bg-yellow" />{" "}
          </div>
          <p className="md:tw-text-base lg:tw-text-lg">
            GitHub Actions runs on pushes and pull requests to main. It starts
            PostgreSQL, generates the Prisma client, type-checks and lints the
            app, runs unit and Playwright end-to-end tests, applies migrations,
            seeds test data, and builds the app.
          </p>
          <p className="md:tw-text-base lg:tw-text-lg">
            For local development, Docker Compose runs PostgreSQL 16 with a
            health check and persistent volume. Database migrations and seed
            data are managed with the project&apos;s Prisma and seed commands.
          </p>
        </div>
        <div className="tw-grid md:tw-grid-cols-2 tw-gap-3 tw-my-6">
          <div className="tw-bg-[#113058] tw-rounded-lg tw-p-4">
            <h4 className="tw-font-semibold tw-mb-2">CI Pipeline Checks</h4>
            <p className="tw-text-sm tw-mb-0">
              Provision PostgreSQL, generate Prisma, run type-check and lint,
              unit and E2E tests, apply migrations, seed, and build.
            </p>
          </div>
          <div className="tw-bg-[#113058] tw-rounded-lg tw-p-4">
            <h4 className="tw-font-semibold tw-mb-2">Docker Workflow</h4>
            <p className="tw-text-sm tw-mb-0">
              docker compose up starts the local PostgreSQL service with a
              health check and persistent storage.
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

export default CISection;
