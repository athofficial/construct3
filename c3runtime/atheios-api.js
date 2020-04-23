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

