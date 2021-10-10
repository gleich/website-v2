---
name: Small Docker Images
date: '2021-10-08'
description: Develop Docker images that have a final image size smaller than 10mb
---

Docker images can easily generate giant images. In this post, I'll try to easily and briefly explain some practices you can follow to make images smaller.

# Copy the Binary

If you're using a language that produced static binary like go, rust, or c you can copy the binary to a smaller image after compiling. A docker image that would normally look like this:

1. Copy file contents
2. Build binary
3. Run the binary

Would become something like this:

1. Copy file contents
2. Build binary
3. Copy binary to smaller image
4. Run the binary

We can then use [docker build stages](https://docs.docker.com/develop/develop-images/multistage-build/) to divide the steps into build and run stages:

- Build Stage (using an image like [golang](https://hub.docker.com/_/golang))
  1. Copy file contents
  2. Build binary
- Run Stage (using an image like [alpine](https://hub.docker.com/_/alpine))
  1. Run the binary

An example of this process is seen below:

```dockerfile
# Set this image as the builder image
FROM golang AS builder

# Copy the files
COPY . /usr/src/app
WORKDIR /usr/src/app

# Build the binary
RUN go build -o app .

# Set a new base image
FROM alpine:latest
# Copy the compiled binary to the new base image
COPY --from=builder /usr/src/app/app .
CMD ["./app"]
```
