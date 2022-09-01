class User {
    constructor(name, lastname, userName, tweets = []) {
        this.name = name
        this.lastname = lastname
        this.userName = userName
        this.tweets = tweets
    }
    static userType = 'general'

    getUserInfo() {
        return `🙎Nombre: ${this.name},${this.lastname} 
                    🔵User Name: ${this.userName}
                        🤳Tweets: ${this.tweets.length}`
    }

    addTweet(text) {
        const date = new Date()
        const created = date.toISOString()
        const tweet = { created, text }
        this.tweets.push(tweet)
    }

    getTweets() {
        const tweetsText = []

        for (const tweets of this.tweets) {
            tweetsText.push(tweets.text)
        }
        return tweetsText
    }
}


(function (run) {
    console.log(User.userType)

    //const user = new User('Juan Cruz','Sosa', 'juancruz.sosag')

    //console.log(user)

    //console.log("User Info:")
   //console.log(user.getUserInfo())

    //user.addTweet('Estoy en un after de coder muy bueno')
    //user.addTweet('Estoy aprendiendo js')
    
    //console.log("User Info:")
    //console.log(user.getUserInfo())

    //console.log(user.getTweets())
})(true)

