import React from "react";
import CarouselControlled from "../../../components/Carousel";
const ciSlides = [
  {
    id: "ci-pipeline",
    title: "CI Pipeline",
    summary:
      "The CI pipeline is set up to automate the testing and deployment process for the production scheduling system. It includes stages for code linting, unit testing, integration testing, and deployment to a staging environment. This ensures that any changes to the codebase are thoroughly tested before being released to production.",
    description: `The CI pipeline is configured using GitHub Actions. It triggers on every push to the main branch and includes the following steps:
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
    id: "docker",
    title: "Dockerization",
    summary:
      "The production scheduling system is containerized using Docker, allowing for consistent deployment across different environments. The Dockerfile defines the application environment, including the Node.js runtime and necessary dependencies. This setup simplifies the deployment process and ensures that the application runs reliably in production.",
    description: `The Dockerfile for the production scheduling system is structured as follows:
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
            CI/CD and Dockerized Development
          </h3>
          <div className="tw-w-36">
            <hr className="tw-h-2 tw-bg-yellow" />{" "}
          </div>
          <p className="md:tw-text-base lg:tw-text-lg">
            The project includes a GitHub Actions CI pipeline that runs on
            pushes and pull requests to main. It spins up a PostgreSQL service,
            applies the schema, and verifies the app with type-checking,
            linting, unit tests, production build, and Playwright end-to-end
            tests.
          </p>
          <p className="md:tw-text-base lg:tw-text-lg">
            For local development, Docker Compose runs a postgres:16 container,
            mounts schema.sql for initialization, and uses a persistent volume
            so database state survives container restarts.
          </p>
        </div>
        <div className="tw-grid md:tw-grid-cols-2 tw-gap-3 tw-my-6">
          <div className="tw-bg-[#113058] tw-rounded-lg tw-p-4">
            <h4 className="tw-font-semibold tw-mb-2">CI Pipeline Checks</h4>
            <p className="tw-text-sm tw-mb-0">
              Setup DB schema, run type-check, lint, unit tests, build, and E2E
              validation before merge.
            </p>
          </div>
          <div className="tw-bg-[#113058] tw-rounded-lg tw-p-4">
            <h4 className="tw-font-semibold tw-mb-2">Docker Workflow</h4>
            <p className="tw-text-sm tw-mb-0">
              docker compose up starts local PostgreSQL with seeded schema and
              persistent storage for repeatable dev environments.
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
