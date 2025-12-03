# Condulit - Playwright Test Automation Framework

A comprehensive test automation framework built with Playwright and TypeScript for testing the Conduit API and web application. This project demonstrates modern testing practices including Page Object Model (POM), API testing, and E2E testing patterns.

## 🚀 Features

- **API Testing** - Complete API test coverage for Users and Articles
- **E2E Testing** - End-to-end web application testing
- **Page Object Model** - Structured UI testing with reusable page objects
- **Controller Pattern** - Clean API interaction layer
- **Authentication Management** - Automated user authentication and token handling
- **Parallel Execution** - Configurable test execution modes
- **Test Fixtures** - Reusable test data and setup
- **HTML Reporting** - Comprehensive test reports

## 🛠 Tech Stack

- **Playwright** - Modern test automation framework
- **TypeScript** - Type-safe test development
- **Faker.js** - Dynamic test data generation
- **dotenv** - Environment configuration management

## 📁 Project Structure

```
condulit/
├── app/                          # Application layer
│   ├── api/                      # API controllers
│   │   ├── BaseController.ts     # Base API controller
│   │   ├── ArticleController/    # Article API operations
│   │   └── UserController/       # User API operations
│   └── ui/                       # UI page objects
│       ├── components/           # Reusable UI components
│       └── pages/                # Page object models
├── tests/                        # Test suites
│   ├── api/                      # API tests
│   ├── e2e/                      # End-to-end tests
│   └── fixture/                  # Test fixtures and data
├── utils/                        # Utility functions
├── playwright.config.ts          # Playwright configuration
├── globalSetup.ts               # Global test setup
└── globalVars.ts                # Global variables
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd condulit
```

2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers:

```bash
npx playwright install
```

4. Create environment file:

```bash
# Create .env file in the root directory
CONDULIT_DEFAULT_PASSWORD=your_password_here
```

### Configuration

The project uses two main test configurations:

- **API Tests**: Target `https://conduit-api.learnwebdriverio.com`
- **E2E Tests**: Target `https://demo.learnwebdriverio.com`

## 🎯 Running Tests

### Run All Tests

```bash
npx playwright test
```

### Run API Tests Only

```bash
npx playwright test --project=api
```

### Run E2E Tests Only

```bash
npx playwright test --project=e2e
```

### Run Specific Test File

```bash
npx playwright test tests/api/users.api.ts
npx playwright test tests/e2e/navigation.spec.ts
```

### Run Tests in Debug Mode

```bash
npx playwright test --debug
```

### View Test Report

```bash
npx playwright show-report
```

## 📊 Test Reports

The framework generates HTML reports automatically after test execution. Reports include:

- Test execution summary
- Failed test details with screenshots
- Execution traces for debugging
- Performance metrics

## 🔧 Architecture

### API Layer

The API layer follows the Controller pattern:

- **BaseController**: Abstract base class for all API controllers
- **UserController**: Handles user registration, login, and authentication
- **ArticleController**: Manages article creation, deletion, and operations

### UI Layer

The UI layer implements the Page Object Model:

- **BasePage**: Abstract base class for all page objects
- **Components**: Reusable UI components (Header, Footer)
- **Pages**: Specific page implementations (HomePage, RegisterPage)

### Test Fixtures

Custom fixtures provide:

- Pre-configured API controllers
- Authentication tokens
- Test data management
- Setup and teardown operations

## 🔐 Authentication

The framework includes automated authentication management:

1. **Global Setup**: Creates or validates default user account
2. **Token Management**: Stores authentication tokens in `.auth/` directory
3. **Automatic Login**: API fixtures handle authentication automatically

## 📝 Test Data

Test data is managed through:

- **Faker.js**: Dynamic data generation
- **Static Fixtures**: Predefined test data in `tests/fixture/`
- **Environment Variables**: Sensitive data configuration

## 🎨 Best Practices

This project demonstrates:

- **Separation of Concerns**: Clear separation between test logic and application interaction
- **Reusability**: Shared components and utilities
- **Type Safety**: Full TypeScript implementation
- **Clean Code**: Consistent naming and structure
- **Error Handling**: Robust error management and reporting

## 🧪 Test Categories

### API Tests (`tests/api/`)

- User registration and authentication
- Article creation and management
- API response validation
- Error scenario testing

### E2E Tests (`tests/e2e/`)

- User interface navigation
- End-to-end user workflows
- Cross-browser compatibility
- Visual regression testing

## 📋 Environment Variables

Required environment variables:

```bash
CONDULIT_DEFAULT_PASSWORD=default_user_password
```

## 🤝 Contributing

1. Follow the existing code structure and patterns
2. Add appropriate type definitions
3. Include both positive and negative test scenarios
4. Update documentation for new features
5. Ensure all tests pass before submitting

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**Pavlo Safonov**

---

## 🔗 Related Links

- [Playwright Documentation](https://playwright.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Conduit API Demo](https://conduit-api.learnwebdriverio.com)
- [Conduit Web Demo](https://demo.learnwebdriverio.com)
