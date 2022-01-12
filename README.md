# Dota Ability Transformer

A typescript transformer, that automatically builds ability KV files from your typescript code!

# Why should I use this?

You don't need any skipping to KV files anymore and have everything related to an ability in one place. The transformer

# What do I need to use this?

You need to use the [ModDota typescript template](https://github.com/ModDota/TypeScriptAddonTemplate). Please follow the instructions there to setup the project.
It is also recommended to use VSCode, not only because of its internal support of NodeJS, but also because it's a great editor. Also, not all editors support NodeJS and/or Typescript, which, depending on the editor, will make it inconvenient to work with the tooltip generator.

# Installation Instructions

_The following steps asume you have already setup your typescript project_

-   Find your `tsconfig.json` in your vscripts source directory
-   Add a new transformer as plugin:

```json
{
	"compilerOptions": {
		"plugins": [{ "transform": "transformer/transform" }]
	}
}
```

-   if you already have a transfomer, you can simply add it, like: `"plugins": [{ "transform": "@moddota/dota-lua-types/transformer" }, { "transform": "dota_ability_transformer/transform" }]`

-   you also need to add the type definitions to your `tsconfig.json`:

```json
{
	"compilerOptions": {
		"types": ["dota_ability_transformer"]
	}
}
```

-   if you already have a types defined, you can simply add it, like: `"types": ["@moddota/dota-lua-types/normalized", "dota_ability_transformer"],`

That's it! The transformer is now fully functional and will update KV ability automatically.

# How to use it

_An example on how to use it can be found under: `src/vscripts/abilities/heroes/meepo/earthbind_ts_example.ts`_

-   Create a new lua ability or use an existing one
-   Make sure you register the ability with the `@registerAbility()` decorator
-   This will already create a new empty ability

-   Now you can add properties to your ability class to define its features:

`BaseProperties`: Defines basic KV values for an ability. This includes the abilities behavior, texture, etc.

`SpecialValues`: Defines special values of your ability. Any name can be chosen and the value can either be a **number**, an **array of numbers** or an **special object**.
