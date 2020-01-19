"use strict";

{
	C3.Plugins.AtheiosTeam_AtheiosModule.Cnds =
	{
		oninit()
		{
			//implementation
			console.log("***DEBUG*** Oninit trigger");
			return true;
		},

		onmessage()
		{
			//implementation
			console.log("***DEBUG*** OnMessage Trigger");
			return true;
		},

		onresponse()
		{
			//implementation
			return true;
		}
	};
}