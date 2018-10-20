function space (text){
    let reply = new Buffer('Hi there villager let me give you a tour to the Space');
    return (reply.toString());
    function request(text){
        if(text == 'About' || text == 'about'){
            let temp = new Buffer('The Co Working Space is desinged for day 1 Entreprenuers and Accelerating Startups');
            return (temp.toString());
        }
        else if(text == 'payment' || text == 'Payment'){
            let temp = new Buffer('')
        }
    }
}

module.exports.space = space;