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
			console.log("DEBUG --- data: ", data);
			this.atheios.initPreview(data);

		},

		sendwithdata(requesttype, jsondata)
		{
			//implementation
			console.log("***DEBUG*** sendwithdata() called. " + requesttype + "  " + jsondata);

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

			console.log("DEBUG --- data: ", data);
			this.atheios.initLive(data);

		},

		Sendwithdataid(requesttype, jsondata, requestid)
		{
			console.log("***DEBUG*** sendwithdata() called. " + requesttype + "  " + jsondata + " requestid: " + requestid);
			this.atheios.sendWithData(requesttype, JSON.parse(jsondata), this.onResponseAth, requestid);
		}
	};
}