FROM golang:alpine AS builder

ENV GO111MODULE=on \
    CGO_ENABLED=0

WORKDIR /build
COPY . .
RUN go mod tidy
RUN go build --ldflags "-s -w -extldflags -static" -o main .


FROM oven/bun:canary-alpine AS inertia_builder

WORKDIR /build
COPY . .
RUN bun install
RUN bun run build


FROM alpine:latest

WORKDIR /www

COPY --from=builder /build/main /www/
COPY --from=builder /build/storage/ /www/storage/
COPY --from=builder /build/.env /www/.env
COPY --from=inertia_builder /build/public/ /www/public/
COPY --from=inertia_builder /build/resources/ /www/resources/

ENTRYPOINT ["/www/main"]
