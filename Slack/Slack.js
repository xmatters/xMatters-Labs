
/*
 * Slack Shared Library
 *
 *  This shared library is for interacting with Slack to create a channel, retrieve channel history, and to get user info. 
 * 
 *  Exposed methods:
 *    createChannel - Creates a new Slack channel with the given name and return the channel info.
 *                    If the channel already exists, retrieve the details and return those
 *       channelName - The name of the channel to create
 *
 *    getTeam - Gets the Slack team info. Handy for creating links to channels
 *		 
 *    getChannel - Gets the channel details. There isn't a good API for getting a specific channel by name, so we
 *                 have to iterate through each channel to get it. 
 *       channelName - The name of the channel to retrieve
 *
 *    getRoomHistory - Gets the room (channel) chat history. 
 *       channelName - required - The name of the channel to get
 *       count       - optional - The number of messages to get (the API defaults to 100)
 *       latest      - optional - The end of time range to include in results
 *       oldest      - optional - The start of the time range to get
 *
 *    getUserInfo - Gets the User info based on the User's id. The history returns the userid, not the username, so this can translate
 *       userid - The userid of the user to get (ex. U1234567890)
 *       
 *  Usage: 
 *  

    // Import the Slack shared library
    var Slack = require( 'Slack' );
	
	// getRoomHistory
	// Get the room (channel) history and build the text for insertion into a Service Desk ticket for example.
	// The format will be Service Desk platform dependent. See the README.md file for details
	chatData = Slack.getRoomHistory( room.toLowerCase() );
    chatText = buildSlackText( chatData, room.toLowerCase() );

    // createChannel
    // Create a channel based on the `number` value and build a link for inclusion in emails
    var channel = Slack.createChannel( data.properties.number );
    var team    = Slack.getTeam();
    data.properties.chat_link = 'https://' + team.name + '.slack.com/messages/#' + data.properties.number;

    // 

 *
 */
 
exports.createChannel = function( channelName ) {
    // Prepare the HTTP request
    var slackRequest = http.request({
        'endpoint': 'Slack',
        'method': 'POST',
        'path': '/api/channels.create?token=' + constants["Slack Token"] + '&name=' + channelName
    });

    var slackResponse = slackRequest.write();
    var slackBody     = JSON.parse( slackResponse.body );
    console.log( 'Slack Create Channel Response: ' + JSON.stringify( slackBody ) );
    
    // If the name is taken, then let's go
    // get the channel
    if( slackBody.error == 'name_taken' ){
        
        console.log( 'Channel "' + channelName + '" already exists. Getting info.' );
        return this.getChannel( channelName );
    }
    
    return slackBody;
};


exports.getTeam = function() {
    // GET https://slack.com/api/team.info
    
    var slackRequest = http.request({
        'endpoint': 'Slack',
        'method': 'GET',
        'path': '/api/team.info?token=' + constants["Slack Token"]
    });
    
    var slackResponse = slackRequest.write();
    var body = JSON.parse( slackResponse.body );
    if( body.ok )
      return body.team;
      
    return null;
};



exports.getChannel = function( channelName ) {
    
    var slackRequest = http.request({
        'endpoint': 'Slack',
        'method': 'GET',
        'path': '/api/channels.list?token=' + constants["Slack Token"]
    });
    
    var slackResponse = slackRequest.write();
    var slackBody     = JSON.parse( slackResponse.body );
    if( !slackBody.ok ){
        console.log( 'Error getting Channel list: ' + slackBody.error );
        return null;
    }
    
    
    for( var i in slackBody.channels ) {
        console.log( 'Checking "' + slackBody.channels[i].name + '"' );
        if( slackBody.channels[i].name == channelName )
          return slackBody.channels[i];
    }
            
    return null;
            
};


exports.getRoomHistory = function( channelName, count, latest, oldest ){
  
    var channel = this.getChannel( channelName );
    
    if( channel === null ) {
        console.log( 'Channel "' + channelName + '" not found.' );
        return null;
    }
    
    
    var parms = '';
    parms += '&channel=' + channel.id;
    parms += ( !!count  ? '&count='  + count  : '' );
    parms += ( !!latest ? '&latest=' + latest : '' );
    parms += ( !!oldest ? '&oldest=' + oldest : '' );
    
    var slackRequest = http.request({
        'endpoint': 'Slack',
        'method': 'GET',
        'path': '/api/channels.history?token=' + constants["Slack Token"] + parms
    });
    
    var slackResponse = slackRequest.write();
    var slackBody     = JSON.parse( slackResponse.body );
    if( !slackBody.ok ){
        console.log( 'Error getting Channel history: ' + slackBody.error );
        return null;
    }
    
    return slackBody.messages;
    
};



exports.getUserInfo = function( userid ) {
    
    var slackRequest = http.request({
        'endpoint': 'Slack',
        'method': 'GET',
        'path': '/api/users.info?token=' + constants["Slack Token"] + '&user=' + encodeURIComponent( userid )
    });
    
    var slackResponse = slackRequest.write();
    var slackBody     = JSON.parse( slackResponse.body );
    if( !slackBody.ok ) {
        console.log( 'Error getting user "' + userid + '"' );
        return null;
    }
    
    return slackBody.user;
    
}



// 
