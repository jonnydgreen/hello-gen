crackon
=======



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/crackon.svg)](https://npmjs.org/package/crackon)
[![Downloads/week](https://img.shields.io/npm/dw/crackon.svg)](https://npmjs.org/package/crackon)
[![License](https://img.shields.io/npm/l/crackon.svg)](https://github.com/jonnydgreen/crackon/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g crackon
$ crackon COMMAND
running command...
$ crackon (-v|--version|version)
crackon/0.0.0 darwin-x64 node-v16.3.0
$ crackon --help [COMMAND]
USAGE
  $ crackon COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`crackon hello [FILE]`](#crackon-hello-file)
* [`crackon help [COMMAND]`](#crackon-help-command)

## `crackon hello [FILE]`

describe the command here

```
USAGE
  $ crackon hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ crackon hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/jonnydgreen/crackon/blob/v0.0.0/src/commands/hello.ts)_

## `crackon help [COMMAND]`

display help for crackon

```
USAGE
  $ crackon help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
