// Atheios API javascript module 0.1.4
// Works towards the Atheios blockchain
// https://www.atheios.org
// https://portal.atheios.org

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
Atheios.prototype.setWageRequest = function(authToken, wage, userId, gameId , gameToken, onResponse)
{
    var request = {};
    request["authToken"] = authToken;
    request["userId"] = userId;
    request["gameId"] = gameId;
    request["wage"] = wage;
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

Atheios.prototype.authenticationRequest = function(username, password, apikey, onResponse )
{
    var request = {};
    request["userpass"] = password;
    request["username"] = username;
    request["apikey"] = apikey;
    atheios.sendWithData("AuthenticationRequest", request, onResponse);
}



Atheios.prototype.gameInfoRequest = function(authToken, apikey ,onResponse)
{
    var request = {};
    request["apiKey"] = apikey;

    atheios.sendWithData("GameInfoRequest", request, onResponse);
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

