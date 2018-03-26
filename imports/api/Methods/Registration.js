import { Meteor } from 'meteor/meteor'


Meteor.methods({
    registerUser({...args}) {
        const { username, email, password, fullname } = args

        console.log(username, email, password, fullname)
        
        Accounts.createUser({
            // username,
            email,
            password,
            // profile: {
            //     fullname
            // }
        }, (err, res) => {
            console.log(err, res)
        })
    }
})
