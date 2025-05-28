<!-- filepath: /home/thanhdd/Code/nest-demo/docs/base.md -->

## Cách tạo Module trong NestJS

### 1. Sử dụng Nest CLI (Khuyến khích)

Mở terminal và chạy lệnh sau:

```bash
nest generate module <tên-module>
```

Ví dụ, để tạo một module có tên là `users`:

```bash
nest generate module users
```

## Cách tạo Service trong NestJS

### Sử dụng Nest CLI (Khuyến khích)

Mở terminal và chạy lệnh sau:

```bash
nest generate service <tên-service> [--flat]
# hoặc
nest g s <tên-service> [--flat]
```

- `<tên-service>`: Tên của service bạn muốn tạo (ví dụ: `users`, `products`).
- `--flat` (tùy chọn): Tạo file service trực tiếp trong thư mục module hiện tại thay vì tạo một thư mục con mới cho service.

Ví dụ, để tạo một service có tên là `users` (sẽ tạo file `users.service.ts` trong thư mục `src/users` nếu bạn đang ở thư mục `src` hoặc trong thư mục module tương ứng):

```bash
nest generate service users
```

Ví dụ, để tạo một service có tên là `items` trong thư mục `items` của module `products` (giả sử bạn đang ở thư mục `src/products`):

```bash
nest generate service items
```

Nếu bạn muốn tạo service `items` trực tiếp trong thư mục `src/products` (không tạo thư mục con `items`):

```bash
nest generate service items --flat
```

## Cách tạo Controller trong NestJS

### Sử dụng Nest CLI (Khuyến khích)

Mở terminal và chạy lệnh sau:

```bash
nest generate controller <tên-controller> [--flat]
# hoặc
nest g co <tên-controller> [--flat]
```

- `<tên-controller>`: Tên của controller bạn muốn tạo (ví dụ: `users`, `products`).
- `--flat` (tùy chọn): Tạo file controller trực tiếp trong thư mục module hiện tại thay vì tạo một thư mục con mới cho controller.

Ví dụ, để tạo một controller có tên là `users` (sẽ tạo file `users.controller.ts` trong thư mục `src/users` nếu bạn đang ở thư mục `src` hoặc trong thư mục module tương ứng):

```bash
nest generate controller users
```

Ví dụ, để tạo một controller có tên là `items` trong thư mục `items` của module `products` (giả sử bạn đang ở thư mục `src/products`):

```bash
nest generate controller items
```

Nếu bạn muốn tạo controller `items` trực tiếp trong thư mục `src/products` (không tạo thư mục con `items`):

```bash
nest generate controller items --flat
```
