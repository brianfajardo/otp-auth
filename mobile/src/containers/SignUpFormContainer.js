import React, { Component } from 'react'
import { View, Keyboard, StyleSheet } from 'react-native'
import { Field, reduxForm, reset } from 'redux-form'
import { Text, FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import { connect } from 'react-redux'

import * as actions from '../actions/'

class SignUpFormContainer extends Component {

  constructor() {
    super()
    this.renderField = this.renderField.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.renderError = this.renderField.bind(this)
  }

  onFormSubmit({ phoneNumber }) {
    const { signUp, reset } = this.props
    Keyboard.dismiss()
    signUp(phoneNumber)
    reset()
  }

  renderField(fieldProps) {
    const {
      input,
      meta: { touched, error },
      ...props
    } = fieldProps
    const hasError = touched && error !== undefined
    return (
      <View>
        <FormLabel>Mobile number</FormLabel>
        <FormInput
          {...input}
          {...props}
          maxLength={10}
          keyboardType="numeric"
          keyboardAppearance="light"
        />
        {hasError && <FormValidationMessage>{error}</FormValidationMessage>}
      </View>
    )
  }

  render() {
    console.log(this.props)
    const { textInput, button } = styles
    return (
      <View>
        <Text h3>Sign up</Text>
        <View style={textInput}>
          <Field
            type="number"
            name="phoneNumber"
            component={this.renderField}
          />
        </View>
        <Button
          title="Submit"
          onPress={this.props.handleSubmit(this.onFormSubmit)}
          style={button}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const httpError = state.auth.error
  return { httpError }
}

const validate = ({ phoneNumber }) => {
  const errors = {}
  if (!phoneNumber || phoneNumber.length < 10 || phoneNumber.trim() === '') {
    errors.phoneNumber = 'Sign up with your 10 digit phone number!'
  }
  return errors
}

SignUpFormContainer = reduxForm({
  form: 'signUpForm',
  validate
})(SignUpFormContainer)

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 15
  },
  button: {
    marginBottom: 30
  }
})

export default connect(mapStateToProps, actions)(SignUpFormContainer)