// GARP API javascript module 0.3.0
// Works towards the GARP framework
// https://www.garp.io
// https://garp.readthedocs.io

Atheios.prototype.sendChatRequest = function(authToken, userId, roomId, meta, msg ,onResponse)
{
    var request = {};
    request["authToken"] = authToken;
    request["userId"] = userId;
    request["roomId"] = roomId;
    request["msg"] = msg;
    request["meta"] = meta;

    atheios.sendWithData("SendChatRequest", request, onResponse);
}

Atheios.prototype.lockRoomRequest = function(authToken, roomId, onResponse)
{
    var request = {};
    request["authToken"] = authToken;
    request["roomId"] = roomId;

    atheios.sendWithData("LockRoomRequest", request, onResponse);
}

Atheios.prototype.queryRoomRequest = function(authToken, gameId, onResponse)
{
    var request = {};
    request["authToken"] = authToken;
    request["gameId"] = gameId;

    atheios.sendWithData("QueryRoomRequest", request, onResponse);
}

Atheios.prototype.leaveRoomRequest = function(authToken, userId, roomId, onResponse)
{
    var request = {};
    request["authToken"] = authToken;
    request["userId"] = userId;
    request["roomId"] = roomId;

    atheios.sendWithData("LeaveRoomRequest", request, onResponse);
}



Atheios.prototype.joinRoomRequest = function(authToken, userId, gameId, roomSerial, onResponse)
{
    var request = {};
    request["authToken"] = authToken;
    request["userId"] = userId;
    request["gameId"] = gameId;
    request["roomSerial"] = roomSerial;

    atheios.sendWithData("JoinRoomRequest", request, onResponse);
}



Atheios.prototype.createRoomRequest = function(authToken, userId, gameId , roomSeats, onResponse)
{
    var request = {};
    request["authToken"] = authToken;
    request["userId"] = userId;
    request["gameId"] = gameId;
    request["roomSeats"] = roomSeats;

    atheios.sendWithData("CreateRoomRequest", request, onResponse);
}



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
Atheios.prototype.setWageRequest = function(authToken, wage, currency, userId, gameId , gameToken, onResponse)
{
    var request = {};
    request["authToken"] = authToken;
    request["userId"] = userId;
    request["gameId"] = gameId;
    request["wage"] = wage;
    request["currency"] = currency;
    request["apiKey"] = gameToken;

    atheios.sendWithData("SetWageRequest", request, onResponse);
}


// Will provide more information on the account
//
// Response: AccountDetailsResponse
//      protocolId  Procotol version
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

Atheios.prototype.gameInfoRequest = function(apikey ,onResponse)
{
    var request = {};
    request["apikey"] = apikey;

    atheios.sendWithData("GameInfoRequest", request, onResponse);
}



Atheios.prototype.authenticationRequest = function(username, password, apikey, onResponse )
{
    var request = {};
    request["userpass"] = password;
    request["username"] = username;
    request["apikey"] = apikey;
    atheios.sendWithData("AuthenticationRequest", request, onResponse);
}

