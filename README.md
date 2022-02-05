# Map

Pipe to map chunks of data to a new value.

# Install

`npm install -g @davidbernal/map` or download binary and copy in your `PATH`.

## Usage

### As pipe

```bash
$ echo "hello world" | map TEST
# print TEST
```

### As command

```bash
$ map TEST
# create a infinite stream of TEST every 100ms
```
