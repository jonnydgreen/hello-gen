# hello-gen

![CI workflow](https://github.com/jonnydgreen/hello-gen/workflows/CI%20workflow/badge.svg)

- [Description](#description)
- [Install](#install)
- [Usage](#usage)
- [Commands](#commands)
- [Contributing](#contributing)
- [License](#license)

## Description

WIP - first release coming soon! :)

HelloGen provides a set of CLI commands to make the backend life a dream so you
can "crack on" with the important things.

## Install

### Manual

Retrieve the hello-gen binary by downloading a [pre-compiled binary](https://github.com/jonnydgreen/hello-gen/releases) or compiling it from source.

#### MacOS/Linux

This command assumes that the binary is currently in your downloads folder and that your `PATH` includes `/usr/local/bin`, but you can customise it if your locations are different.

```sh
mv ~/Downloads/hello-gen /usr/local/bin/
```

#### Windows

This [Stack Overflow article](https://stackoverflow.com/questions/1618280/where-can-i-set-path-to-make-exe-on-windows) contains instructions for setting the PATH on Windows through the user interface.

### With Deno

```sh
deno install --allow-net --allow-read https://raw.githubusercontent.com/jonnydgreen/hello-gen/main/src/hello-gen.ts
```

### With asdf (coming soon)

## Usage

```
$ hello-gen -h

  Usage:   hello-gen
  Version: 0.1.0

  Description:

    Hello-gen in a generator CLI for all your development needs.

  Options:

    -h, --help     - Show this help.
    -V, --version  - Show the version number for this program.

  Commands:

    ...
```

# Commands

- [`hello-gen graphql:types`](#hello-gen-graphqltypes)

## `hello-gen graphql:types`

Generates GraphQL Types from an input schema

```
USAGE
  $ hello-gen graphql:types

OPTIONS
  -h, --help           show CLI help
  -i, --input=input    [default: schema.graphql] File path to GraphQL schema.
  -o, --output=output  [default: types.generated.ts] Output file path to write to.

EXAMPLE
  $ hello-gen graphql:types
  Generating types... done
  Generated GraphQL types at 'types.generated.ts'
```

# Contributing

All PRs are welcome! :)

To get setup, you must install and configure the pre-requisites:

- Install and configure [Deno](https://deno.land/manual/getting_started/installation)

To run tests:

```sh
deno test --lock=lock.json --allow-read --allow-write -A
```

## License

MIT
