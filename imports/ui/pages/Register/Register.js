import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'
import { Layout, Input, Button, Icon } from 'antd'
import { Accounts } from 'meteor/accounts-base'

export default class Register extends Component {
    fromSubmitHandler = e => {
        e.preventDefault()
        const { username, email, fullname, password, confirm } = this

        console.log(username, email, fullname, password, confirm)
        if (password.value === confirm.value) {
        Accounts.createUser(
            {
                username: username.value.trim(),
                email: email.value.trim(),
                password: password.value.trim(),
                profile: {
                    fullname: fullname.value.trim()
                }
            },
            (err) => {
                console.log('Account Created', err)
            }
        )
        }
    }
    render() {
        return (
            <>
                <h1>Registration</h1>
                <form
                    onSubmit={this.fromSubmitHandler}
                    style={{ width: 300 }}
                    className="mx-auto"
                >
                    <Input
                        placeholder="username"
                        ref={inp => (this.username = inp.input)}
                        className="mb-2"
                        required
                    />
                    <Input
                        placeholder="fullname"
                        ref={inp => (this.fullname = inp.input)}
                        className="mb-2"
                        required
                    />
                    <Input
                        placeholder="email"
                        ref={inp => (this.email = inp.input)}
                        className="mb-2"
                        type="email"
                        required
                    />
                    <Input
                        placeholder="Password"
                        ref={inp => (this.password = inp.input)}
                        className="mb-2"
                        type="password"
                        required
                    />
                    <Input
                        placeholder="Confirm Password"
                        ref={inp => (this.confirm = inp.input)}
                        className="mb-2"
                        type="password"
                        required
                    />
                    <Button htmlType="submit" type="primary" className="w-100">
                        Register <Icon type="arrow-right" />
                    </Button>
                </form>
            </>
        )
    }
}
