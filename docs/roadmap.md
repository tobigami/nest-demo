# Roadmap Tìm Hiểu NestJS

## Giới Thiệu

NestJS là một framework để xây dựng các ứng dụng server-side hiệu quả và có thể mở rộng dễ dàng. Nó sử dụng TypeScript và kết hợp các yếu tố của OOP (Object Oriented Programming), FP (Functional Programming) và FRP (Functional Reactive Programming). Roadmap này sẽ giúp bạn có một cái nhìn tổng quan về những gì cần tìm hiểu để làm chủ NestJS.

## Roadmap

### Kiến Thức Nền Tảng

- [ ] **TypeScript cơ bản**

  - [x] Hiểu về kiểu dữ liệu, interface, type, decorators
  - [ ] Class và OOP trong TypeScript
  - [ ] Generic Types
  - [x] Asynchronous Programming (Promise/Async-Await)

- [ ] **Node.js cơ bản**

  - [ ] Event Loop
  - [ ] Module system
  - [x] NPM và quản lý package
  - [ ] Stream và Buffer

- [ ] **Dependency Injection và IoC Container**
  - [ ] Hiểu nguyên lý Dependency Injection
  - [ ] Inversion of Control

### NestJS Căn Bản

- [ ] **Cài đặt và thiết lập môi trường**

  - [ ] Nest CLI
  - [ ] Cấu trúc project

- [ ] **Module**

  - [ ] Hiểu về Module
  - [ ] Feature modules
  - [ ] Shared modules
  - [ ] Dynamic modules
  - [ ] Module re-exporting

- [ ] **Controllers**

  - [ ] Routing
  - [ ] Request object
  - [ ] Response handling
  - [ ] Route parameters
  - [ ] Request body và DTOs
  - [ ] Các HTTP methods: GET, POST, PUT, DELETE...

- [ ] **Providers & Services**

  - [ ] Custom providers
  - [ ] Scope (Singleton, Request, Transient)
  - [ ] Injection scopes
  - [ ] Provider registration

- [ ] **Pipes**

  - [ ] Built-in pipes
  - [ ] Custom pipes
  - [ ] Validation pipe

- [ ] **Guard**

  - [ ] Authentication guards
  - [ ] Role-based authorization
  - [ ] Custom guards

- [ ] **Interceptors**

  - [ ] Response mapping
  - [ ] Exception mapping
  - [ ] Cache interceptor
  - [ ] Timeout handling

- [ ] **Exception Filters**

  - [ ] Built-in HTTP exceptions
  - [ ] Exception filters
  - [ ] Custom exceptions

- [ ] **Middleware**
  - [ ] Functional middleware
  - [ ] Class middleware
  - [ ] Global middleware

### Cơ Sở Dữ Liệu & ORM

- [ ] **TypeORM với NestJS**

  - [ ] Cấu hình TypeORM
  - [ ] Entities
  - [ ] Repositories
  - [ ] Transactions
  - [ ] Migrations
  - [ ] Relations (One-to-One, One-to-Many, Many-to-Many)

- [ ] **MongoDB với NestJS**

  - [ ] Mongoose integration
  - [ ] Schemas
  - [ ] Models

- [ ] **Prisma với NestJS**
  - [ ] Cấu hình Prisma
  - [ ] Sử dụng Prisma Client trong NestJS

### Xác Thực & Phân Quyền

- [ ] **Authentication**

  - [ ] Passport.js integration
  - [ ] JWT authentication
  - [ ] Sessions
  - [ ] OAuth2

- [ ] **Authorization**
  - [ ] Role-based access control
  - [ ] Permission-based access control
  - [ ] Policy-based authorization

### Nâng Cao

- [ ] **Microservices**

  - [ ] Microservice architecture
  - [ ] Transport methods (TCP, Redis, MQTT, gRPC, NATS)
  - [ ] Message patterns (Event-based, RPC)

- [ ] **WebSockets**

  - [ ] Gateways
  - [ ] Adapters
  - [ ] Socket.io integration

- [ ] **GraphQL**

  - [ ] Apollo integration
  - [ ] Resolvers
  - [ ] Schema first approach
  - [ ] Code first approach

- [ ] **Caching**

  - [ ] In-memory cache
  - [ ] Redis cache
  - [ ] Cache interception

- [ ] **Task Scheduling**

  - [ ] Cron jobs
  - [ ] Interval tasks
  - [ ] Timeout tasks

- [ ] **File Upload**

  - [ ] Multer integration
  - [ ] File validation
  - [ ] Storage strategies

- [ ] **Queue**

  - [ ] Bull integration
  - [ ] Queue management
  - [ ] Job processing

- [ ] **Email**

  - [ ] Nodemailer integration
  - [ ] Email templates
  - [ ] Mail queues

- [ ] **Logging**

  - [ ] Custom logger implementation
  - [ ] Log levels
  - [ ] Logging services (Winston, Pino)

- [ ] **Configuration**

  - [ ] Environment variables
  - [ ] Configuration namespaces
  - [ ] Validation

- [ ] **Health Checks**
  - [ ] Terminus integration
  - [ ] Custom health indicators

### Testing

- [ ] **Unit Testing**

  - [ ] Jest framework
  - [ ] Testing services
  - [ ] Testing controllers
  - [ ] Mocking dependencies

- [ ] **E2E Testing**

  - [ ] SuperTest
  - [ ] HTTP testing
  - [ ] Database integration testing

- [ ] **Integration Testing**
  - [ ] Module testing
  - [ ] Database testing

### Bảo Mật

- [ ] **Helmet**

  - [ ] HTTP headers security

- [ ] **CORS**

  - [ ] Cross-Origin Resource Sharing

- [ ] **Rate Limiting**

  - [ ] Throttling requests
  - [ ] Custom rate limiter

- [ ] **Data Validation**
  - [ ] Input validation
  - [ ] Output sanitization

### Deployment & DevOps

- [ ] **Docker**

  - [ ] Containerization
  - [ ] Docker Compose

- [ ] **CI/CD**

  - [ ] GitHub Actions
  - [ ] GitLab CI
  - [ ] Jenkins

- [ ] **Monitoring**

  - [ ] Prometheus
  - [ ] Grafana
  - [ ] New Relic

- [ ] **Logging Services**
  - [ ] ELK Stack
  - [ ] Fluentd

### Phát triển Frontend tích hợp

- [ ] **RESTful API Design**

  - [ ] Best practices
  - [ ] API documentation (Swagger/OpenAPI)

- [ ] **Frontend Integration**
  - [ ] Serving static files
  - [ ] Template engines (Handlebars, EJS)
  - [ ] Single Page Application (SPA) integration

### Dự Án Thực Tế

- [ ] **Xây dựng một ứng dụng CRUD đầy đủ**

  - [ ] Phát triển RESTful API
  - [ ] Xác thực người dùng
  - [ ] Xử lý lỗi
  - [ ] Validation

- [ ] **Xây dựng một ứng dụng real-time**

  - [ ] WebSockets
  - [ ] Notification system
  - [ ] Chat application

- [ ] **Xây dựng một hệ thống microservices**
  - [ ] Service discovery
  - [ ] API Gateway
  - [ ] Inter-service communication

## Tài Nguyên Học Tập

- Tài liệu chính thức: [NestJS Documentation](https://docs.nestjs.com/)
- GitHub: [NestJS Repository](https://github.com/nestjs/nest)
- Khóa học: [NestJS Zero to Hero (Ariel Weinberger)](https://www.udemy.com/course/nestjs-zero-to-hero/)
- Khóa học: [NestJS: The Complete Developer's Guide (Stephen Grider)](https://www.udemy.com/course/nestjs-the-complete-developers-guide/)
- Blog: [Dev.to NestJS tag](https://dev.to/t/nestjs)

## Cập Nhật Roadmap

Mỗi khi hoàn thành một phần, hãy đánh dấu vào checkbox tương ứng bằng cách thay `[ ]` thành `[x]`. Việc này sẽ giúp bạn theo dõi tiến độ học tập của mình.

Chúc bạn học tập hiệu quả!
