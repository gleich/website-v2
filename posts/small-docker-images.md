---
name: Small Docker Images
date: '2021-10-08'
description: Develop Docker images that have a final image size smaller than 10mb
---

Docker images can easily become huge (over 500mb in size). This produces longer pull and push times and wasted resources. In this post, I'll try to easily and briefly explain some practices you can follow to make them smaller.

# Copy the Binary

If you're using a language that produced static binary like go, rust, or c you can copy the binary to a smaller image after compiling. A docker image that would normally look like this:

1. Copy files
2. Build binary
3. Run binary

Would become something like this:

1. Copy files
2. Build binary
3. Copy binary to smaller image
4. Run binary

We can do this using [docker build stages](https://docs.docker.com/develop/develop-images/multistage-build/) to divide the steps into a build and run stage:

1. Build Stage (using an image like [golang](https://hub.docker.com/_/golang)):
   - Copy file contents
   - Build binary
2. Run Stage (using an image like [alpine](https://hub.docker.com/_/alpine)):
   - Run the binary

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

# hadolint

Using a tool called [hadolint](https://github.com/hadolint/hadolint) you can lint your dockerfiles to detect if there are any things you can remove/optimize. As an example, if you run `yarn install` you can run `yarn clean cache` after to remove the cache making your image smaller.

# Small Base Images

Small base images such as [alpine](https://hub.docker.com/_/alpine) are much smaller than other base images like ubuntu. Alpine is only 5mb while ubuntu is over 100mb. With these smaller images you are missing some packages (such as `git` or `wget`)but can you can simply install what you need using the package manager.

A lot of images also have a alpine variant available on dockerhub. An example of this would be the [golang alpine image](https://github.com/docker-library/golang/blob/8c4f2e21fa0194a24288d8c126a5d15b51c221cb/1.17/alpine3.14/Dockerfile).
