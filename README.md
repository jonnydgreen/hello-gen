crackon
=======



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/crackon.svg)](https://npmjs.org/package/crackon)
[![Downloads/week](https://img.shields.io/npm/dw/crackon.svg)](https://npmjs.org/package/crackon)
[![License](https://img.shields.io/npm/l/crackon.svg)](https://github.com/jonnydgreen/crackon/blob/main/package.json)

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
crackon/1.0.0 darwin-x64 node-v16.3.0
$ crackon --help [COMMAND]
USAGE
  $ crackon COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`crackon autocomplete [SHELL]`](#crackon-autocomplete-shell)
* [`crackon commands`](#crackon-commands)
* [`crackon graphql`](#crackon-graphql)
* [`crackon help [COMMAND]`](#crackon-help-command)
* [`crackon plugins`](#crackon-plugins)
* [`crackon plugins:inspect PLUGIN...`](#crackon-pluginsinspect-plugin)
* [`crackon plugins:install PLUGIN...`](#crackon-pluginsinstall-plugin)
* [`crackon plugins:link PLUGIN`](#crackon-pluginslink-plugin)
* [`crackon plugins:uninstall PLUGIN...`](#crackon-pluginsuninstall-plugin)
* [`crackon plugins:update`](#crackon-pluginsupdate)
* [`crackon update [CHANNEL]`](#crackon-update-channel)
* [`crackon which COMMAND`](#crackon-which-command)

## `crackon autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ crackon autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ crackon autocomplete
  $ crackon autocomplete bash
  $ crackon autocomplete zsh
  $ crackon autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.3.0/src/commands/autocomplete/index.ts)_

## `crackon commands`

list all the commands

```
USAGE
  $ crackon commands

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

## `crackon graphql`

describe the command here

```
USAGE
  $ crackon graphql

OPTIONS
  -h, --help           show CLI help
  -i, --input=input    (required) File path to GraphQL schema.
  -o, --output=output  (required) Output file path to write GraphQL schema to.

EXAMPLE
  $ crackon graphql -i schema.graphql -o types.generated.ts
  Generating types... done
  Generated GraphQL types at 'types.generated.ts'
```

_See code: [dist/src/commands/graphql.js](https://github.com/jonnydgreen/crackon/blob/v1.0.0/dist/src/commands/graphql.js)_

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

## `crackon plugins`

list installed plugins

```
USAGE
  $ crackon plugins

OPTIONS
  --core  show core plugins

EXAMPLE
  $ crackon plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/index.ts)_

## `crackon plugins:inspect PLUGIN...`

displays installation properties of a plugin

```
USAGE
  $ crackon plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] plugin to inspect

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

EXAMPLE
  $ crackon plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/inspect.ts)_

## `crackon plugins:install PLUGIN...`

installs a plugin into the CLI

```
USAGE
  $ crackon plugins:install PLUGIN...

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
  $ crackon plugins:add

EXAMPLES
  $ crackon plugins:install myplugin 
  $ crackon plugins:install https://github.com/someuser/someplugin
  $ crackon plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/install.ts)_

## `crackon plugins:link PLUGIN`

links a plugin into the CLI for development

```
USAGE
  $ crackon plugins:link PLUGIN

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
  $ crackon plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/link.ts)_

## `crackon plugins:uninstall PLUGIN...`

removes a plugin from the CLI

```
USAGE
  $ crackon plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

ALIASES
  $ crackon plugins:unlink
  $ crackon plugins:remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/uninstall.ts)_

## `crackon plugins:update`

update installed plugins

```
USAGE
  $ crackon plugins:update

OPTIONS
  -h, --help     show CLI help
  -v, --verbose
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/update.ts)_

## `crackon update [CHANNEL]`

update the crackon CLI

```
USAGE
  $ crackon update [CHANNEL]
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v1.3.10/src/commands/update.ts)_

## `crackon which COMMAND`

show which plugin a command is in

```
USAGE
  $ crackon which COMMAND
```

_See code: [@oclif/plugin-which](https://github.com/oclif/plugin-which/blob/v1.0.3/src/commands/which.ts)_
<!-- commandsstop -->
