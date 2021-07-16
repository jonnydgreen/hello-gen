hello-gen
=======



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/hello-gen.svg)](https://npmjs.org/package/hello-gen)
[![Downloads/week](https://img.shields.io/npm/dw/hello-gen.svg)](https://npmjs.org/package/hello-gen)
[![License](https://img.shields.io/npm/l/hello-gen.svg)](https://github.com/jonnydgreen/hello-gen/blob/main/package.json)

<!-- toc -->
* [Description](#description)
* [Usage](#usage)
* [Commands](#commands)
* [Contributing](#contributing)
<!-- tocstop -->
# Description

WIP - first release coming soon! :)

HelloGen provides a set of CLI commands to make the backend life a dream so you can "crack on" with the important things.

# Usage
<!-- usage -->
```sh-session
$ npm install -g hello-gen
$ hello-gen COMMAND
running command...
$ hello-gen (-v|--version|version)
hello-gen/1.0.0 darwin-x64 node-v16.3.0
$ hello-gen --help [COMMAND]
USAGE
  $ hello-gen COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`hello-gen autocomplete [SHELL]`](#hello-gen-autocomplete-shell)
* [`hello-gen commands`](#hello-gen-commands)
* [`hello-gen graphql`](#hello-gen-graphql)
* [`hello-gen graphql:resolvers`](#hello-gen-graphqlresolvers)
* [`hello-gen graphql:types`](#hello-gen-graphqltypes)
* [`hello-gen help [COMMAND]`](#hello-gen-help-command)
* [`hello-gen plugins`](#hello-gen-plugins)
* [`hello-gen plugins:inspect PLUGIN...`](#hello-gen-pluginsinspect-plugin)
* [`hello-gen plugins:install PLUGIN...`](#hello-gen-pluginsinstall-plugin)
* [`hello-gen plugins:link PLUGIN`](#hello-gen-pluginslink-plugin)
* [`hello-gen plugins:uninstall PLUGIN...`](#hello-gen-pluginsuninstall-plugin)
* [`hello-gen plugins:update`](#hello-gen-pluginsupdate)
* [`hello-gen update [CHANNEL]`](#hello-gen-update-channel)
* [`hello-gen which COMMAND`](#hello-gen-which-command)

## `hello-gen autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ hello-gen autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ hello-gen autocomplete
  $ hello-gen autocomplete bash
  $ hello-gen autocomplete zsh
  $ hello-gen autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.3.0/src/commands/autocomplete/index.ts)_

## `hello-gen commands`

list all the commands

```
USAGE
  $ hello-gen commands

OPTIONS
  -h, --help              show CLI help
  -j, --json              display unfiltered api data in json format
  -x, --extended          show extra columns
  --columns=columns       only show provided columns (comma-separated)
  --csv                   output is csv format [alias: --output=csv]
  --filter=filter         filter property by partial string matching, ex: name=foo
  --hidden                show hidden commands
  --no-header             hide table header from output
  --no-truncate           do not truncate output to fit screen
  --output=csv|json|yaml  output in a more machine friendly format
  --sort=sort             property to sort by (prepend '-' for descending)
```

_See code: [@oclif/plugin-commands](https://github.com/oclif/plugin-commands/blob/v1.3.0/src/commands/commands.ts)_

## `hello-gen graphql`

Generates GraphQL server files from an input schema

```
USAGE
  $ hello-gen graphql

OPTIONS
  -h, --help           show CLI help
  -i, --input=input    [default: schema.graphql] File path to GraphQL schema.
  -o, --output=output  [default: types.generated.ts] Output file path to write to.

EXAMPLE
  $ hello-gen graphql
  Generating GraphQL server... done
  Generated GraphQL server
```

_See code: [dist/src/commands/graphql/index.js](https://github.com/jonnydgreen/hello-gen/blob/v1.0.0/dist/src/commands/graphql/index.js)_

## `hello-gen graphql:resolvers`

Generates GraphQL resolvers from an input schema

```
USAGE
  $ hello-gen graphql:resolvers

OPTIONS
  -h, --help           show CLI help
  -i, --input=input    [default: schema.graphql] File path to GraphQL schema.
  -o, --output=output  [default: .] Output directory to write GraphQL resolvers to.

EXAMPLE
  $ hello-gen graphql:resolvers
  Generating resolvers... done
  Generated GraphQL resolvers
```

_See code: [dist/src/commands/graphql/resolvers.js](https://github.com/jonnydgreen/hello-gen/blob/v1.0.0/dist/src/commands/graphql/resolvers.js)_

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

_See code: [dist/src/commands/graphql/types.js](https://github.com/jonnydgreen/hello-gen/blob/v1.0.0/dist/src/commands/graphql/types.js)_

## `hello-gen help [COMMAND]`

display help for hello-gen

```
USAGE
  $ hello-gen help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `hello-gen plugins`

list installed plugins

```
USAGE
  $ hello-gen plugins

OPTIONS
  --core  show core plugins

EXAMPLE
  $ hello-gen plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/index.ts)_

## `hello-gen plugins:inspect PLUGIN...`

displays installation properties of a plugin

```
USAGE
  $ hello-gen plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] plugin to inspect

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

EXAMPLE
  $ hello-gen plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/inspect.ts)_

## `hello-gen plugins:install PLUGIN...`

installs a plugin into the CLI

```
USAGE
  $ hello-gen plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  plugin to install

OPTIONS
  -f, --force    yarn install with force flag
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command 
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in 
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ hello-gen plugins:add

EXAMPLES
  $ hello-gen plugins:install myplugin 
  $ hello-gen plugins:install https://github.com/someuser/someplugin
  $ hello-gen plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/install.ts)_

## `hello-gen plugins:link PLUGIN`

links a plugin into the CLI for development

```
USAGE
  $ hello-gen plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello' 
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLE
  $ hello-gen plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/link.ts)_

## `hello-gen plugins:uninstall PLUGIN...`

removes a plugin from the CLI

```
USAGE
  $ hello-gen plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

ALIASES
  $ hello-gen plugins:unlink
  $ hello-gen plugins:remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/uninstall.ts)_

## `hello-gen plugins:update`

update installed plugins

```
USAGE
  $ hello-gen plugins:update

OPTIONS
  -h, --help     show CLI help
  -v, --verbose
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/update.ts)_

## `hello-gen update [CHANNEL]`

update the hello-gen CLI

```
USAGE
  $ hello-gen update [CHANNEL]
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v1.3.10/src/commands/update.ts)_

## `hello-gen which COMMAND`

show which plugin a command is in

```
USAGE
  $ hello-gen which COMMAND
```

_See code: [@oclif/plugin-which](https://github.com/oclif/plugin-which/blob/v1.0.3/src/commands/which.ts)_
<!-- commandsstop -->

# Contributing

All PRs are welcome! :)

To get setup and compile TypeScript, run the following:

```sh
npm install
```

To run tests:

```sh
npm run test
```

## In watch mode

To compile:

```sh
npm run build -- -w
```

To test:

```sh
npm run unit -- -w
```
