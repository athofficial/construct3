"use strict";

{
	C3.Plugins.AtheiosTeam_AtheiosModule.Acts =
	{
		Initpreview()
		{
			console.log("Initpreview() called.");
			//implementation
			const data = {
				key: this._apiKeyAth,
				secret: this._apiSecret,
				onNonce: this.onNonceAth,
				onInit: this.onInitAth,
				onMessage: this.onMessageAth,
				logger: console.log
			};
			this.atheios.initPreview(data);

		},

		sendwithdata(requesttype, jsondata)
		{
			//implementation

			this.atheios.sendWithData(requesttype, JSON.parse(jsondata), this.onResponseAth);

		},
		Initlive()
		{
			console.log("Initlive() called.");
			//implementation
			const data = {
				key: this._apiKeyAth,
				secret: this._apiSecret,
				onNonce: this.onNonceAth,
				onInit: this.onInitAth,
				onMessage: this.onMessageAth,
				logger: console.log
			};

			this.atheios.initLive(data);

		},

		Sendwithdataid(requesttype, jsondata, requestid)
		{
			this.atheios.sendWithData(requesttype, JSON.parse(jsondata), this.onResponseAth, requestid);
		}
	};
}