import { BaseAbility, registerAbility } from "../../../lib/dota_ts_adapter";

@registerAbility()
export class other_meepo_ability extends BaseAbility {
	particle?: ParticleID;

	texture = "other_meepo_ability";
	SkipAbility: boolean = false;

	BaseProperties: AbilityBaseProperties = {
		Behavior: [AbilityBehavior.HIDDEN, AbilityBehavior.IGNORE_SILENCE],
	};
}
