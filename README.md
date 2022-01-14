# Dota Ability Transformer

A typescript transformer, that automatically builds ability KV files from your typescript code!

# Why should I use this?

You don't need any skipping to KV files anymore and have everything related to an ability in one place. With autocomplete features you can type faster and ensure that you don't make any mistakes. Special values get compiled (enumerated) automatically and you have to never worry about float or integer decision again.
All abilities get created on transpilation, so no remnant code of these ability values can be found in the output lua.

# What do I need to use this?

You need to use the [ModDota typescript template](https://github.com/ModDota/TypeScriptAddonTemplate). Please follow the instructions there to setup the project.
It is also recommended to use VSCode, not only because of its internal support of NodeJS, but also because it's a great editor. Also, not all editors support NodeJS and/or Typescript, which, depending on the editor, will make it inconvenient to work with the tooltip generator.

# Installation Instructions

_The following steps asume you have already setup your typescript project_

-   If you haven't, install this transformer as [npm module](https://www.npmjs.com/package/dota_ability_transformer): `npm i dota_ability_transformer`
-   Find your `tsconfig.json` in your vscripts source directory
-   Add a new transformer as plugin:

```json
{
	"compilerOptions": {
		"plugins": [{ "transform": "dota_ability_transformer/transform" }]
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

`BaseProperties` - Defines basic KV values for an ability. This includes the abilities behavior, texture, etc.

`SpecialValues` - Defines special values of your ability. Any name can be chosen and the value can either be a **number**, an **array of numbers** or an **special object**.

`CustomProperties` - Defines custom properties you want to add to your ability KV.

`SkipAbility` - If this is true, the transformer will skip this ability and generate no KV file for it.

# Example usage

Here is an example on how to use it on an ability class.

**Please note, that you can only use enums and literal values. As the code does not run on lua side, all computed values are ignored!**

```ts
@registerAbility()
export class meepo_earthbind_ts_example extends BaseAbility {
	particle?: ParticleID;

	BaseProperties: AbilityBaseProperties = {
		TextureName: "meepo_earthbind",
		Behavior: [AbilityBehavior.AOE, AbilityBehavior.POINT, AbilityBehavior.IGNORE_BACKSWING], //autocomplete helps to type faster
		SpellImmunityType: SpellImmunityTypes.ENEMIES_NO, //Special enums to support all types of properties
		FightRecapLevel: 1,
		Sound: "Hero_Meepo.Earthbind.Cast",
		CastRange: 1250,
		CastPoint: 0.3,
		Cooldown: 2,
		ManaCost: 120,
	};
	SpecialValues: AbilitySpecials = {
		duration: 2.5, //float values get detected automatically
		radius: [220, 260, 300, 340],
		speed: 857,
		tooltip_range: 1250,
		cooldown: {
			value: [20, 18, 16, 8], //value is always needed when an object is supplied
			LinkedSpecialBonus: "special_bonus_unique_meepo3", //all other keys of the object are optional
		},
	};
	CustomProperties: AbilityCustomProperties = {
		MyVar: 5, //you can choose any name and value here
	};

	//Normal ability functions will follow...
```

# Config your transformer

You can create a file named `.abilityTransformerrc.json` in your root directory to set the settings for the transformer.

```json
{
	"modularization": "folder",
	"strict": "warn",
	"debug": false,
	"disable": false
}
```

The default for `modularization` is `folder` and the options are:

-   `folder`: create one .kv file for each folder the source file is in
-   `file`: create one .kv file for each source file
-   `none`: create a single .kv file for all abilities

The default for `strict` is `warn` and the options are:

-   `off`: ignore abilities without properties without any notice
-   `warn`: print a warn message in the console for every ability without properties
-   `error`: throw an error for every ability without properties

The default for `debug` is `false`. Enable this option to see debug prints in the console

The default for `disable` is `false`. Enable this option to skip all ability transformation completly
