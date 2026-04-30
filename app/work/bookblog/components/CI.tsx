import React from "react";
import CarouselControlled from "../../../components/Carousel";
const ciSlides = [
  {
    id: "ci-setup",
    title: "docker-compose.yml: ",
    summary:
      "Workflow triggers and service setup create a reproducible verification environment.",
    description: `services:
  db:
    image: postgres:16
    container_name: postgres-bookblog
    restart: unless-stopped
    env_file:
      - .env.local
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./lib/database/schema.sql:/docker-entrypoint-initdb.d/schema.sql

volumes:
  postgres_data:
`,
    alt: "ci.yml trigger and postgres service",
  },
  {
    id: "ci-validation",
    title: "ci.yml: Validation Steps",
    summary:
      "Schema setup, type-check, lint, unit tests, build, and E2E run in sequence.",
    description: `# .github/workflows/ci.yml\non:\n
  push:
    branches: [main]
  pull_request:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read

concurrency:
  group: book-blog-ci-${"${{ github.workflow }}"}-${"${{ github.event.pull_request.number || github.ref }}"}
  cancel-in-progress: true
jobs:
  verify:
    name: Verify code quality
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_USER: postgres
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: bookblog
        ports:
          - 5432:5432
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
    env:
      PG_USER: postgres
      PG_PASSWORD: postgres
      PG_HOST: localhost
      PG_PORT: 5432
      PG_DATABASE: bookblog
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - name: Install dependencies
        run: npm ci
      - name: Setup database schema
        run: psql -h localhost -U postgres -d bookblog -f lib/database/schema.sql
        env:
          PGPASSWORD: postgres
      - name: Type check
        run: npm run --if-present type-check
      - name: Lint code
        run: npm run --if-present lint
      - name: Run unit tests
        run: npm run test:unit
      - name: Build application
        run: npm run build
      - name: Install Playwright browsers
        run: npx playwright install --with-deps chromium
      - name: Run end-to-end tests
        run: npm run test:e2e`,
    alt: "ci.yml validation steps",
  },
];

const CI = () => {
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

export default CI;
