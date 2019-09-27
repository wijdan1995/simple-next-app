import Layout from '../components/Layout'
import styled from "styled-components";
import { withTranslation } from '../i18n';
import PropTypes from 'prop-types'
import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux'
import { sendMessage } from '../actions/contactAction'


class contact extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.sendMessage(this.state)
    }
    render() {

        return (
            <Layout>
                <p>{this.props.t('contact-text')}</p>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">{this.props.t('name')}</label>
                        <input type="text" id="name" onChange={this.handleChange} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="email">{this.props.t('email')}</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="message">{this.props.t('message')}</label>
                        <textarea id="message" onChange={this.handleChange} />
                    </div>
                    <br />
                    <Button>{this.props.t('contact-button')}</Button>
                </form>

            </Layout>
        )
    }

}
const Button = styled.button`
background-color:pink;
text-decoration:none;
cursor:pointer;
color:#4c393c;
border-radius:5px;
padding:5px;
border: none;

`

contact.getInitialProps = async () => ({
    namespacesRequired: ['common', 'contact'],
})

contact.propTypes = {
    t: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (message) => dispatch(sendMessage(message))
    }
}

export default connect(null, mapDispatchToProps)(withTranslation('contact')(contact))
