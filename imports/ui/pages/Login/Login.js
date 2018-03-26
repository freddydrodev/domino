import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'
import { Layout, Input, Button, Icon } from 'antd'

export default class Login extends Component {
    state = {
        loading: false
    }

    formSubmitHandler = e => {
        e.preventDefault()
        const { email, password } = this
        // this.setState({ loading: true })
        Meteor.loginWithPassword(
            email.value.trim(),
            password.value.trim(),
            err => {
                console.log('logging in')
                // this.setState({ loading: true })
            }
        )
    }
    render() {
        console.log(history)
        return (
            <>
                <h1>Login</h1>
                <form
                    onSubmit={this.formSubmitHandler}
                    style={{ width: 300 }}
                    className="mx-auto"
                >
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
                    <Button
                        // loading={this.state.loading}
                        htmlType="submit"
                        type="primary"
                        className="w-100"
                    >
                        Register <Icon type="arrow-right" />
                    </Button>
                </form>
            </>
        )
    }
}
