import { BaseAbility, registerAbility } from "../../../lib/dota_ts_adapter";

@registerAbility()
export class other_meepo_ability extends BaseAbility {
	particle?: ParticleID;

	texture = "other_meepo_ability";

	// SpecialValues: AbilitySpecialValue[] = [
	// 	{
	// 		name: "test",
	// 		value: 5,
	// 	},
	// 	{
	// 		name: "otherVal",
	// 		value: [6, 6, 6, 7],
	// 	},
	// ];
	BaseProperties: AbilityBaseProperties = {
		Behavior: [AbilityBehavior.HIDDEN, AbilityBehavior.IGNORE_SILENCE],
	};
}
