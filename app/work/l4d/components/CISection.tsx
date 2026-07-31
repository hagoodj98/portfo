import CarouselControlled from "../../../components/Carousel";

const ciSlides = [
  {
    id: "ci-pipeline",
    title: "CI Pipeline",
    summary:
      "Automated checks for code quality and functionality. The CI pipeline runs on pushes and pull requests to main. It spins up a PostgreSQL service, applies the schema, and verifies the app with type-checking, linting, unit tests, production build, and Playwright end-to-end tests.",
    description: `  

jobs:
  validate:
    name: Games Forum CI Check
    runs-on: ubuntu-latest
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

      - name: Syntax check
        run: node --check index.ts

      - name: Run lint
        run: npm run lint

      - name: Run tests
        run: npm test

      - name: Initialize database schema
        run: npm run db:init
        env:
          PGPASSWORD: postgres

      - name: Install Playwright browser
        run: npx playwright install --with-deps chromium

      - name: Run end-to-end tests
        run: npm run test:e2e
`,
  },
  {
    id: "docker-workflow",
    title: "Docker Workflow",
    summary:
      "Docker Compose runs a postgres:16 container, mounts schema.sql for initialization, and uses a persistent volume so database state survives container restarts.  services:",
    description: `
  db:
    image: postgres:16-alpine
    restart: unless-stopped
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U ${"${PG_USER}"} -d ${"${PG_DATABASE}"}"]
      interval: 10s
      timeout: 5s
      retries: 5
    environment:
      POSTGRES_USER: ${"${PG_USER}"}
      POSTGRES_PASSWORD: ${"${PG_PASSWORD}"}
      POSTGRES_DB: ${"${PG_DATABASE}"}
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./db/init.sql:/docker-entrypoint-initdb.d/init.sql:ro

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
