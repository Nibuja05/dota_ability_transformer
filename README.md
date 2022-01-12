# Dota Ability Transformer

A typescript transformer, that automatically builds ability KV files from your typescript code!

# What do I need to use this?

You need to use the [ModDota typescript template](https://github.com/ModDota/TypeScriptAddonTemplate). Please follow the instructions there to setup the project.
It is also recommended to use VSCode, not only because of its internal support of NodeJS, but also because it's a great editor. Also, not all editors support NodeJS and/or Typescript, which, depending on the editor, will make it inconvenient to work with the tooltip generator.

# Installation Instructions

_The following steps asume you have already setup your typescript project_

-   Find your `tsconfig.json` in your vscripts source directory
-   Add a new transformer as plugin (there could already be a transformer for types there, just add it in that case):

```json
{
	"compilerOptions": {
		"plugins": [{ "transform": "transformer/transform" }]
	}
}
```

That's it. The transformer is now fully functional and will update KV ability automatically.

# How to use it

_An example on how to use it can be found under: `scc/vscripts/abilities/heroes/meepo/earthbind_ts_example.ts`_

-   Create a new lua ability or use an existing one
-   Make sure you register the ability with the `@registerAbility()` decorator
-   This will already create a new empty ability

-   To change the core properties of the ability, simply set the `BaseProperties` property on your ability class

**TBD**
