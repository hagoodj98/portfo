import React from "react";
import CarouselControlled from "../../../components/Carousel";

const ciSlides = [
  {
    id: "ci-cd",
    title: "CI/CD Pipeline with GitHub Actions",
    summary:
      "Automated workflow for code quality verification, testing, and building on every push to main branch.",
    description: `jobs:
  verify:
    name: Verify Code quality
    runs-on: ubuntu-latest
    services:
      redis:
        image: bitnami/redis
        env:
          REDIS_PASSWORD: password
        ports:
          - 6379:6379
        options: >-
          --health-cmd "redis-cli -a password ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
    env:
      REDIS_PASSWORD: password
      REDIS_HOST: localhost
      REDIS_PORT: 6379
      STRIPE_SECRET_KEY: sk_test_placeholder
      STRIPE_WEBHOOK_SECRET: whsec_placeholder
      STRIPE_PRICE_ID: price_placeholder
      MAILCHIMP_LIST_ID: list_placeholder
      MAILCHIMP_API_KEY: placeholder
      MAILCHIMP_SERVER_PREFIX: us1
      MAILCHIMP_WEBHOOK_TOKEN: placeholder
      NEXT_PUBLIC_BASE_URL: http://localhost:3000
      INTERNAL_API_SECRET: ci-internal-secret
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
      - name: Use Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: "npm"
      - name: Install dependencies
        run: rm -f package-lock.json && npm install
      - name: Type check
        run: npm run type-check
      - name: Lint codebase
        run: npm run lint
      - name: Run unit tests
        run: npm run test:unit
      - name: Run integration tests
        run: npm run test:integration
      - name: Build application
        run: npm run build
      - name: Install Playwright browsers
        run: npx playwright install --with-deps
      - name: Run end-to-end tests
        run: npm run test:e2e
`,
  },
];

const CI = () => {
  return (
    <div className="tw-bg-moreblue tw-w-full tw-py-16">
      <div className="tw-max-w-screen-2xl tw-mx-auto tw-p-5 tw-text-white">
        <div className="md:tw-w-2/3">
          <h3 className="tw-leading-10 tw-text-2xl md:tw-text-4xl tw-font-boldonse md:tw-leading-[1.5]">
            CI/CD
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
        </div>
        <div className="tw-grid md:tw-grid-cols-2 tw-gap-3 tw-my-6">
          <div className="tw-bg-[#113058] tw-rounded-lg tw-p-4">
            <h4 className="tw-font-semibold tw-mb-2">CI Pipeline Checks</h4>
            <p className="tw-text-sm tw-mb-0">
              Setup DB schema, run type-check, lint, unit tests, build, and E2E
              validation before merge.
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
