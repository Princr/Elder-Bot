function community (text){
    //let reply = new Buffer('Hi there villager let me give you a tour to the community');
    //return (reply.toString());
    if(text == '/available space'){
        let reply = new Buffer('The current available spaces are as follows: ');
        return (reply.toString());
    }
    else if(text == '/rules of the space'){
        let reply = new Buffer('The Rules are as follows: ');
        return (reply.toString());
    }
    else if(text == '/terms of the space'){
        let reply = new Buffer('The terms of the space are as follows:');
        return (reply.toString());
    }
}
/*
function primaryinfo(text){
    let reply = new Buffer();
    if (text == '')
}
*/

function communityRequest (text){
    if(text == 'payement'){
        let reply = new Buffer('If you want to make a payment, state whether its cash, ecocash or transfer');
        return (reply.toString());
        function payment(text){
            if(text == 'cash'){
                let reply = new Buffer('For Cash payments visit the Techvillage and see Varaidzo Majada');
                return (reply.toString());
            }
            else if(text == 'ecocash'){
                let reply = new Buffer('For ecocash payments use the following merchant code: 103361 (The Techvillage Trust)');
                return (reply.toString());
            }
            else if(text == 'transfer'){
                let reply = new Buffer('For Transfers use the following EcoBank Account number: xxxx-xxxxxx-xxx');
                return (reply.toString());
            }
            else{
                let reply = new Buffer('I dont understand please, text cash, ecocash or transfer');
                return (reply.toString());
            }
        }
    }
}
module.exports.community = community;
module.exports.communityRequest = communityRequest;