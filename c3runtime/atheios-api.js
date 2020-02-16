console.log("atheios-api.js loaded");

Atheios.prototype.gameLadderRequest = function(authToken, userId, playId, gameId ,onResponse)
{
    var request = {};
    request["authToken"] = authToken;
    request["userId"] = userId;
    request["playId"] = playId;
    request["gameId"] = gameId;

    atheios.sendWithData("GameLadderRequest", request, onResponse);
}



// Will provide more information on the account
//
// Response: AccountDetailsResponse
//      value   as string
//      currency as string
//
Atheios.prototype.finishGameRequest = function(authToken, userId, playId, scoreValue ,onResponse)
{
    var request = {};
    request["authToken"] = authToken;
    request["userId"] = userId;
    request["playId"] = playId;
    request["scoreValue"] = scoreValue;

    atheios.sendWithData("FinishGameRequest", request, onResponse);
}

// Will provide more information on the account
//
// Response: AccountDetailsResponse
//      value   as string
//      currency as string
//
Atheios.prototype.setWageRequest = function(authToken, userId, wage ,onResponse)
{
    var request = {};
    request["authToken"] = authToken;
    request["userId"] = userId;
    request["wage"] = wage;

    atheios.sendWithData("SetWageRequest", request, onResponse);
}


// Will provide more information on the account
//
// Response: AccountDetailsResponse
//      value   as string
//      currency as string
//
Atheios.prototype.accountDetailsRequest = function(authToken, userId ,onResponse)
{
    var request = {};
    request["authToken"] = authToken;
    request["userId"] = userId;
    atheios.sendWithData("AccountDetailsRequest", request, onResponse);
}

// username as string
// password as string
// Response: AuthorizationResponse
//      authToken   as string
//      displayName as string
//      newPlayer as boolean
//      userId as string
//      requestID as string

Atheios.prototype.authenticationRequest = function(password, userName, onResponse )
{
    var request = {};
    request["password"] = password;
    request["userName"] = userName;
    atheios.sendWithData("AuthenticationRequest", request, onResponse);
}



Atheios.prototype.acceptChallengeRequest = function(challengeInstanceId, message, onResponse )
{
    var request = {};
    request["challengeInstanceId"] = challengeInstanceId;
    request["message"] = message;
    atheios.sendWithData("AcceptChallengeRequest", request, onResponse);
}
Atheios.prototype.analyticsRequest = function(data, end, key, start, onResponse )
{
    var request = {};
    request["data"] = data;
    request["end"] = end;
    request["key"] = key;
    request["start"] = start;
    atheios.sendWithData("AnalyticsRequest", request, onResponse);
}
Atheios.prototype.aroundMeLeaderboardRequest = function(count, friendIds, leaderboardShortCode, social, onResponse )
{
    var request = {};
    request["count"] = count;
    request["friendIds"] = friendIds;
    request["leaderboardShortCode"] = leaderboardShortCode;
    request["social"] = social;
    atheios.sendWithData("AroundMeLeaderboardRequest", request, onResponse);
}
Atheios.prototype.buyVirtualGoodsRequest = function(currencyType, quantity, shortCode, onResponse )
{
    var request = {};
    request["currencyType"] = currencyType;
    request["quantity"] = quantity;
    request["shortCode"] = shortCode;
    atheios.sendWithData("BuyVirtualGoodsRequest", request, onResponse);
}
Atheios.prototype.changeUserDetailsRequest = function(displayName, onResponse )
{
    var request = {};
    request["displayName"] = displayName;
    atheios.sendWithData("ChangeUserDetailsRequest", request, onResponse);
}
Atheios.prototype.chatOnChallengeRequest = function(challengeInstanceId, message, onResponse )
{
    var request = {};
    request["challengeInstanceId"] = challengeInstanceId;
    request["message"] = message;
    atheios.sendWithData("ChatOnChallengeRequest", request, onResponse);
}
Atheios.prototype.consumeVirtualGoodRequest = function(quantity, shortCode, onResponse )
{
    var request = {};
    request["quantity"] = quantity;
    request["shortCode"] = shortCode;
    atheios.sendWithData("ConsumeVirtualGoodRequest", request, onResponse);
}
Atheios.prototype.createChallengeRequest = function(accessType, challengeMessage, challengeShortCode, currency1Wager, currency2Wager, currency3Wager, currency4Wager, currency5Wager, currency6Wager, endTime, expiryTime, maxAttempts, maxPlayers, minPlayers, silent, startTime, usersToChallenge, onResponse )
{
    var request = {};
    request["accessType"] = accessType;
    request["challengeMessage"] = challengeMessage;
    request["challengeShortCode"] = challengeShortCode;
    request["currency1Wager"] = currency1Wager;
    request["currency2Wager"] = currency2Wager;
    request["currency3Wager"] = currency3Wager;
    request["currency4Wager"] = currency4Wager;
    request["currency5Wager"] = currency5Wager;
    request["currency6Wager"] = currency6Wager;
    request["endTime"] = endTime;
    request["expiryTime"] = expiryTime;
    request["maxAttempts"] = maxAttempts;
    request["maxPlayers"] = maxPlayers;
    request["minPlayers"] = minPlayers;
    request["silent"] = silent;
    request["startTime"] = startTime;
    request["usersToChallenge"] = usersToChallenge;
    atheios.sendWithData("CreateChallengeRequest", request, onResponse);
}
Atheios.prototype.declineChallengeRequest = function(challengeInstanceId, message, onResponse )
{
    var request = {};
    request["challengeInstanceId"] = challengeInstanceId;
    request["message"] = message;
    atheios.sendWithData("DeclineChallengeRequest", request, onResponse);
}
Atheios.prototype.deviceAuthenticationRequest = function(deviceId, deviceModel, deviceName, deviceOS, deviceType, operatingSystem, onResponse )
{
    var request = {};
    request["deviceId"] = deviceId;
    request["deviceModel"] = deviceModel;
    request["deviceName"] = deviceName;
    request["deviceOS"] = deviceOS;
    request["deviceType"] = deviceType;
    request["operatingSystem"] = operatingSystem;
    atheios.sendWithData("DeviceAuthenticationRequest", request, onResponse);
}
Atheios.prototype.dismissMessageRequest = function(messageId, onResponse )
{
    var request = {};
    request["messageId"] = messageId;
    atheios.sendWithData("DismissMessageRequest", request, onResponse);
}
Atheios.prototype.endSessionRequest = function(onResponse )
{
    var request = {};
    atheios.sendWithData("EndSessionRequest", request, onResponse);
}
Atheios.prototype.facebookConnectRequest = function(accessToken, code, onResponse )
{
    var request = {};
    request["accessToken"] = accessToken;
    request["code"] = code;
    atheios.sendWithData("FacebookConnectRequest", request, onResponse);
}
Atheios.prototype.findChallengeRequest = function(accessType, count, offset, onResponse )
{
    var request = {};
    request["accessType"] = accessType;
    request["count"] = count;
    request["offset"] = offset;
    atheios.sendWithData("FindChallengeRequest", request, onResponse);
}
Atheios.prototype.getChallengeRequest = function(challengeInstanceId, message, onResponse )
{
    var request = {};
    request["challengeInstanceId"] = challengeInstanceId;
    request["message"] = message;
    atheios.sendWithData("GetChallengeRequest", request, onResponse);
}
Atheios.prototype.getDownloadableRequest = function(shortCode, onResponse )
{
    var request = {};
    request["shortCode"] = shortCode;
    atheios.sendWithData("GetDownloadableRequest", request, onResponse);
}
Atheios.prototype.getMessageRequest = function(messageId, onResponse )
{
    var request = {};
    request["messageId"] = messageId;
    atheios.sendWithData("GetMessageRequest", request, onResponse);
}
Atheios.prototype.getRunningTotalsRequest = function(friendIds, shortCode, onResponse )
{
    var request = {};
    request["friendIds"] = friendIds;
    request["shortCode"] = shortCode;
    atheios.sendWithData("GetRunningTotalsRequest", request, onResponse);
}
Atheios.prototype.getUploadUrlRequest = function(uploadData, onResponse )
{
    var request = {};
    request["uploadData"] = uploadData;
    atheios.sendWithData("GetUploadUrlRequest", request, onResponse);
}
Atheios.prototype.getUploadedRequest = function(uploadId, onResponse )
{
    var request = {};
    request["uploadId"] = uploadId;
    atheios.sendWithData("GetUploadedRequest", request, onResponse);
}
Atheios.prototype.googlePlayBuyGoodsRequest = function(currencyCode, signature, signedData, subUnitPrice, onResponse )
{
    var request = {};
    request["currencyCode"] = currencyCode;
    request["signature"] = signature;
    request["signedData"] = signedData;
    request["subUnitPrice"] = subUnitPrice;
    atheios.sendWithData("GooglePlayBuyGoodsRequest", request, onResponse);
}
Atheios.prototype.iOSBuyGoodsRequest = function(currencyCode, receipt, sandbox, subUnitPrice, onResponse )
{
    var request = {};
    request["currencyCode"] = currencyCode;
    request["receipt"] = receipt;
    request["sandbox"] = sandbox;
    request["subUnitPrice"] = subUnitPrice;
    atheios.sendWithData("IOSBuyGoodsRequest", request, onResponse);
}
Atheios.prototype.joinChallengeRequest = function(challengeInstanceId, message, onResponse )
{
    var request = {};
    request["challengeInstanceId"] = challengeInstanceId;
    request["message"] = message;
    atheios.sendWithData("JoinChallengeRequest", request, onResponse);
}
Atheios.prototype.leaderboardDataRequest = function(challengeInstanceId, entryCount, friendIds, leaderboardShortCode, offset, social, onResponse )
{
    var request = {};
    request["challengeInstanceId"] = challengeInstanceId;
    request["entryCount"] = entryCount;
    request["friendIds"] = friendIds;
    request["leaderboardShortCode"] = leaderboardShortCode;
    request["offset"] = offset;
    request["social"] = social;
    atheios.sendWithData("LeaderboardDataRequest", request, onResponse);
}
Atheios.prototype.listAchievementsRequest = function(onResponse )
{
    var request = {};
    atheios.sendWithData("ListAchievementsRequest", request, onResponse);
}
Atheios.prototype.listChallengeRequest = function(entryCount, offset, shortCode, state, onResponse )
{
    var request = {};
    request["entryCount"] = entryCount;
    request["offset"] = offset;
    request["shortCode"] = shortCode;
    request["state"] = state;
    atheios.sendWithData("ListChallengeRequest", request, onResponse);
}
Atheios.prototype.listChallengeTypeRequest = function(onResponse )
{
    var request = {};
    atheios.sendWithData("ListChallengeTypeRequest", request, onResponse);
}
Atheios.prototype.listGameFriendsRequest = function(onResponse )
{
    var request = {};
    atheios.sendWithData("ListGameFriendsRequest", request, onResponse);
}
Atheios.prototype.listInviteFriendsRequest = function(onResponse )
{
    var request = {};
    atheios.sendWithData("ListInviteFriendsRequest", request, onResponse);
}
Atheios.prototype.listLeaderboardsRequest = function(onResponse )
{
    var request = {};
    atheios.sendWithData("ListLeaderboardsRequest", request, onResponse);
}
Atheios.prototype.listMessageRequest = function(entryCount, offset, onResponse )
{
    var request = {};
    request["entryCount"] = entryCount;
    request["offset"] = offset;
    atheios.sendWithData("ListMessageRequest", request, onResponse);
}
Atheios.prototype.listMessageSummaryRequest = function(entryCount, offset, onResponse )
{
    var request = {};
    request["entryCount"] = entryCount;
    request["offset"] = offset;
    atheios.sendWithData("ListMessageSummaryRequest", request, onResponse);
}
Atheios.prototype.listVirtualGoodsRequest = function(onResponse )
{
    var request = {};
    atheios.sendWithData("ListVirtualGoodsRequest", request, onResponse);
}
Atheios.prototype.logChallengeEventRequest = function(challengeInstanceId, eventKey, onResponse )
{
    var request = {};
    request["challengeInstanceId"] = challengeInstanceId;
    request["eventKey"] = eventKey;
    atheios.sendWithData("LogChallengeEventRequest", request, onResponse);
}
Atheios.prototype.logEventRequest = function(eventKey, onResponse )
{
    var request = {};
    request["eventKey"] = eventKey;
    atheios.sendWithData("LogEventRequest", request, onResponse);
}
Atheios.prototype.pushRegistrationRequest = function(deviceOS, pushId, onResponse )
{
    var request = {};
    request["deviceOS"] = deviceOS;
    request["pushId"] = pushId;
    atheios.sendWithData("PushRegistrationRequest", request, onResponse);
}
Atheios.prototype.registrationRequest = function(displayName, password, userName, onResponse )
{
    var request = {};
    request["displayName"] = displayName;
    request["password"] = password;
    request["userName"] = userName;
    atheios.sendWithData("RegistrationRequest", request, onResponse);
}
Atheios.prototype.sendFriendMessageRequest = function(friendIds, message, onResponse )
{
    var request = {};
    request["friendIds"] = friendIds;
    request["message"] = message;
    atheios.sendWithData("SendFriendMessageRequest", request, onResponse);
}
Atheios.prototype.socialLeaderboardDataRequest = function(challengeInstanceId, entryCount, friendIds, leaderboardShortCode, offset, social, onResponse )
{
    var request = {};
    request["challengeInstanceId"] = challengeInstanceId;
    request["entryCount"] = entryCount;
    request["friendIds"] = friendIds;
    request["leaderboardShortCode"] = leaderboardShortCode;
    request["offset"] = offset;
    request["social"] = social;
    atheios.sendWithData("SocialLeaderboardDataRequest", request, onResponse);
}
Atheios.prototype.twitterConnectRequest = function(accessSecret, accessToken, onResponse )
{
    var request = {};
    request["accessSecret"] = accessSecret;
    request["accessToken"] = accessToken;
    atheios.sendWithData("TwitterConnectRequest", request, onResponse);
}
Atheios.prototype.windowsBuyGoodsRequest = function(currencyCode, receipt, subUnitPrice, onResponse )
{
    var request = {};
    request["currencyCode"] = currencyCode;
    request["receipt"] = receipt;
    request["subUnitPrice"] = subUnitPrice;
    atheios.sendWithData("WindowsBuyGoodsRequest", request, onResponse);
}
Atheios.prototype.withdrawChallengeRequest = function(challengeInstanceId, message, onResponse )
{
    var request = {};
    request["challengeInstanceId"] = challengeInstanceId;
    request["message"] = message;
    atheios.sendWithData("WithdrawChallengeRequest", request, onResponse);
}