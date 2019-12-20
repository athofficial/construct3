"use strict";

{
	const PLUGIN_CLASS = SDK.Plugins.AtheiosTeam_AtheiosModule;
	
	PLUGIN_CLASS.Type = class AtheiosModuleType extends SDK.ITypeBase
	{
		constructor(sdkPlugin, iObjectType)
		{
			super(sdkPlugin, iObjectType);
		}
	};
}