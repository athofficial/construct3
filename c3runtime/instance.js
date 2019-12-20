"use strict";

{
	C3.Plugins.AtheiosTeam_AtheiosModule.Instance = class AtheiosMuduleInstance extends C3.SDKInstanceBase
	{
		constructor(inst, properties)
		{
			super(inst);
			
			// Initialise object properties
			this._testProperty = 0;
			
			if (properties)		// note properties may be null in some cases
			{
				this._testProperty = properties[0];
			}
		}
		
		Release()
		{
			super.Release();
		}
		
		SaveToJson()
		{
			return {
				// data to be saved for savegames
			};
		}
		
		LoadFromJson(o)
		{
			// load state for savegames
		}
	};
}