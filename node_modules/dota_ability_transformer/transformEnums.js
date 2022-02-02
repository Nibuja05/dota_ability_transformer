"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtectedProperties = exports.AbilityCastGestureSlotValueNames = exports.SpellDispellableTypesNames = exports.SpellImmunityTypesNames = exports.LinkedSpecialBonusOperationNames = exports.NumericBaseProperties = exports.DifferentlyNamesEnums = exports.DifferentlyNamedAbilityKVs = void 0;
var DifferentlyNamedAbilityKVs;
(function (DifferentlyNamedAbilityKVs) {
    DifferentlyNamedAbilityKVs["Type"] = "AbilityType";
    DifferentlyNamedAbilityKVs["Behavior"] = "AbilityBehavior";
    DifferentlyNamedAbilityKVs["OnCastBar"] = "OnCastbar";
    DifferentlyNamedAbilityKVs["OnLearnBar"] = "OnLearnbar";
    DifferentlyNamedAbilityKVs["CastRange"] = "AbilityCastRange";
    DifferentlyNamedAbilityKVs["CastRangeBuffer"] = "AbilityCastRangeBuffer";
    DifferentlyNamedAbilityKVs["CastPoint"] = "AbilityCastPoint";
    DifferentlyNamedAbilityKVs["ChannelTime"] = "AbilityChannelTime";
    DifferentlyNamedAbilityKVs["Cooldown"] = "AbilityCooldown";
    DifferentlyNamedAbilityKVs["Duration"] = "AbilityDuration";
    DifferentlyNamedAbilityKVs["SharedCooldown"] = "AbilitySharedCooldown";
    DifferentlyNamedAbilityKVs["Damage"] = "AbilityDamage";
    DifferentlyNamedAbilityKVs["ManaCost"] = "AbilityManaCost";
    DifferentlyNamedAbilityKVs["ModifierSupportValue"] = "AbilityModifierSupportValue";
    DifferentlyNamedAbilityKVs["ModifierSupportBonus"] = "AbilityModifierSupportBonus";
    DifferentlyNamedAbilityKVs["UnitTargetTeam"] = "AbilityUnitTargetTeam";
    DifferentlyNamedAbilityKVs["CastAnimation"] = "AbilityCastAnimation";
    DifferentlyNamedAbilityKVs["UnitDamageType"] = "AbilityUnitDamageType";
    DifferentlyNamedAbilityKVs["Sound"] = "AbilitySound";
    DifferentlyNamedAbilityKVs["CastGestureSlot"] = "AbilityCastGestureSlot";
    DifferentlyNamedAbilityKVs["UnitTargetType"] = "AbilityUnitTargetType";
    DifferentlyNamedAbilityKVs["GrantedByScepter"] = "IsGrantedByScepter";
    DifferentlyNamedAbilityKVs["UnitTargetFlags"] = "AbilityUnitTargetFlags";
    DifferentlyNamedAbilityKVs["GrantedByShard"] = "IsGrantedByShard";
    DifferentlyNamedAbilityKVs["Charges"] = "AbilityCharges";
    DifferentlyNamedAbilityKVs["ChargeRestoreTime"] = "AbilityChargeRestoreTime";
    DifferentlyNamedAbilityKVs["ChannelAnimation"] = "AbilityChannelAnimation";
    DifferentlyNamedAbilityKVs["TextureName"] = "AbilityTextureName";
    // Precache = "precache",
})(DifferentlyNamedAbilityKVs = exports.DifferentlyNamedAbilityKVs || (exports.DifferentlyNamedAbilityKVs = {}));
var DifferentlyNamesEnums;
(function (DifferentlyNamesEnums) {
    DifferentlyNamesEnums["ABILITY_TYPE_BASIC"] = "DOTA_ABILITY_TYPE_BASIC";
    DifferentlyNamesEnums["ABILITY_TYPE_ULTIMATE"] = "DOTA_ABILITY_TYPE_ULTIMATE";
    DifferentlyNamesEnums["ABILITY_TYPE_ATTRIBUTES"] = "DOTA_ABILITY_TYPE_ATTRIBUTES";
    DifferentlyNamesEnums["ABILITY_TYPE_HIDDEN"] = "DOTA_ABILITY_TYPE_HIDDEN";
})(DifferentlyNamesEnums = exports.DifferentlyNamesEnums || (exports.DifferentlyNamesEnums = {}));
exports.NumericBaseProperties = [
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
var LinkedSpecialBonusOperationNames;
(function (LinkedSpecialBonusOperationNames) {
    LinkedSpecialBonusOperationNames["SUBTRACT"] = "SPECIAL_BONUS_SUBTRACT";
    LinkedSpecialBonusOperationNames["PERCENTAGE_ADD"] = "SPECIAL_BONUS_PERCENTAGE_ADD";
    LinkedSpecialBonusOperationNames["MULTIPLY"] = "SPECIAL_BONUS_MULTIPLY";
})(LinkedSpecialBonusOperationNames = exports.LinkedSpecialBonusOperationNames || (exports.LinkedSpecialBonusOperationNames = {}));
var SpellImmunityTypesNames;
(function (SpellImmunityTypesNames) {
    SpellImmunityTypesNames["ENEMIES_YES"] = "SPELL_IMMUNITY_ENEMIES_YES";
    SpellImmunityTypesNames["ENEMIES_NO"] = "SPELL_IMMUNITY_ENEMIES_NO";
    SpellImmunityTypesNames["ALLIES_NO"] = "SPELL_IMMUNITY_ALLIES_NO";
    SpellImmunityTypesNames["ALLIES_YES"] = "SPELL_IMMUNITY_ALLIES_YES";
    SpellImmunityTypesNames["ALLIES_YES_ENEMIES_NO"] = "SPELL_IMMUNITY_ALLIES_YES_ENEMIES_NO";
})(SpellImmunityTypesNames = exports.SpellImmunityTypesNames || (exports.SpellImmunityTypesNames = {}));
var SpellDispellableTypesNames;
(function (SpellDispellableTypesNames) {
    SpellDispellableTypesNames["DISPELLABLE_YES"] = "SPELL_DISPELLABLE_YES";
    SpellDispellableTypesNames["DISPELLABLE_NO"] = "SPELL_DISPELLABLE_NO";
    SpellDispellableTypesNames["DISPELLABLE_YES_STRONG"] = "SPELL_DISPELLABLE_YES_STRONG";
})(SpellDispellableTypesNames = exports.SpellDispellableTypesNames || (exports.SpellDispellableTypesNames = {}));
var AbilityCastGestureSlotValueNames;
(function (AbilityCastGestureSlotValueNames) {
    AbilityCastGestureSlotValueNames["DEFAULT"] = "DEFAULT";
    AbilityCastGestureSlotValueNames["ABSOLUTE"] = "ABSOLUTE";
})(AbilityCastGestureSlotValueNames = exports.AbilityCastGestureSlotValueNames || (exports.AbilityCastGestureSlotValueNames = {}));
var ProtectedProperties;
(function (ProtectedProperties) {
    ProtectedProperties["SpecialValues"] = "SpecialValues";
    ProtectedProperties["BaseProperties"] = "BaseProperties";
    ProtectedProperties["CustomProperties"] = "CustomProperties";
    ProtectedProperties["SkipAbility"] = "SkipAbility";
})(ProtectedProperties = exports.ProtectedProperties || (exports.ProtectedProperties = {}));
