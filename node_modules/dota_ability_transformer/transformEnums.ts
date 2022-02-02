export enum DifferentlyNamedAbilityKVs {
	Type = "AbilityType",
	Behavior = "AbilityBehavior",
	OnCastBar = "OnCastbar",
	OnLearnBar = "OnLearnbar",
	CastRange = "AbilityCastRange",
	CastRangeBuffer = "AbilityCastRangeBuffer",
	CastPoint = "AbilityCastPoint",
	ChannelTime = "AbilityChannelTime",
	Cooldown = "AbilityCooldown",
	Duration = "AbilityDuration",
	SharedCooldown = "AbilitySharedCooldown",
	Damage = "AbilityDamage",
	ManaCost = "AbilityManaCost",
	ModifierSupportValue = "AbilityModifierSupportValue",
	ModifierSupportBonus = "AbilityModifierSupportBonus",
	UnitTargetTeam = "AbilityUnitTargetTeam",
	CastAnimation = "AbilityCastAnimation",
	UnitDamageType = "AbilityUnitDamageType",
	Sound = "AbilitySound",
	CastGestureSlot = "AbilityCastGestureSlot",
	UnitTargetType = "AbilityUnitTargetType",
	GrantedByScepter = "IsGrantedByScepter",
	UnitTargetFlags = "AbilityUnitTargetFlags",
	GrantedByShard = "IsGrantedByShard",
	Charges = "AbilityCharges",
	ChargeRestoreTime = "AbilityChargeRestoreTime",
	ChannelAnimation = "AbilityChannelAnimation",
	TextureName = "AbilityTextureName",
	// Precache = "precache",
}

export enum DifferentlyNamesEnums {
	ABILITY_TYPE_BASIC = "DOTA_ABILITY_TYPE_BASIC",
	ABILITY_TYPE_ULTIMATE = "DOTA_ABILITY_TYPE_ULTIMATE",
	ABILITY_TYPE_ATTRIBUTES = "DOTA_ABILITY_TYPE_ATTRIBUTES",
	ABILITY_TYPE_HIDDEN = "DOTA_ABILITY_TYPE_HIDDEN",
}

export const NumericBaseProperties = [
	"CastRange",
	"CastRangeBuffer",
	"CastPoint",
	"ChannelTime",
	"Cooldown",
	"Duration",
	"Damage",
	"ManaCost",
	"Charges",
	"ChargeRestoreTime",
];

export enum LinkedSpecialBonusOperationNames {
	SUBTRACT = "SPECIAL_BONUS_SUBTRACT",
	PERCENTAGE_ADD = "SPECIAL_BONUS_PERCENTAGE_ADD",
	MULTIPLY = "SPECIAL_BONUS_MULTIPLY",
}

export enum SpellImmunityTypesNames {
	ENEMIES_YES = "SPELL_IMMUNITY_ENEMIES_YES",
	ENEMIES_NO = "SPELL_IMMUNITY_ENEMIES_NO",
	ALLIES_NO = "SPELL_IMMUNITY_ALLIES_NO",
	ALLIES_YES = "SPELL_IMMUNITY_ALLIES_YES",
	ALLIES_YES_ENEMIES_NO = "SPELL_IMMUNITY_ALLIES_YES_ENEMIES_NO",
}

export enum SpellDispellableTypesNames {
	DISPELLABLE_YES = "SPELL_DISPELLABLE_YES",
	DISPELLABLE_NO = "SPELL_DISPELLABLE_NO",
	DISPELLABLE_YES_STRONG = "SPELL_DISPELLABLE_YES_STRONG",
}

export enum AbilityCastGestureSlotValueNames {
	DEFAULT = "DEFAULT",
	ABSOLUTE = "ABSOLUTE",
}

export enum ProtectedProperties {
	SpecialValues = "SpecialValues",
	BaseProperties = "BaseProperties",
	CustomProperties = "CustomProperties",
	SkipAbility = "SkipAbility",
}
