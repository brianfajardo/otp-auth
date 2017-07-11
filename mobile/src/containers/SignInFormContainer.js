import React, { Component } from 'react'
import { View, Keyboard } from 'react-native'
import { Field, reduxForm } from 'redux-form'
import { Text, FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as actions from '../actions/'
import styles from '../../styles/SignInFormContainer_styles'
import { signInValidator } from '../utils/formValidation'

class SignInFormContainer extends Component {

  constructor() {
    super()
    this.renderField = this.renderField.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.renderError = this.renderField.bind(this)
  }

  onFormSubmit({ phoneNumber, code }) {
    const { signIn, reset } = this.props
    Keyboard.dismiss()
    signIn(phoneNumber, code)
    reset()
  }

  renderField(fieldProps) {
    const {
      input,
      label,
      maxLength,
      meta: { touched, error },
      ...props
    } = fieldProps
    const hasError = touched && error !== undefined
    return (
      <View>
        <FormLabel>{label}</FormLabel>
        <FormInput
          {...input}
          {...props}
          maxLength={maxLength}
          keyboardType="numbers-and-punctuation"
          keyboardAppearance="light"
        />
        {hasError && <FormValidationMessage>{error}</FormValidationMessage>}
      </View>
    )
  }

  render() {
    const { textInput, button } = styles
    const { handleSubmit } = this.props
    return (
      <View>
        <Text h3>Sign In</Text>
        <View style={textInput}>
          <Field
            type="number"
            label="Mobile number"
            name="phoneNumber"
            maxLength={10}
            component={this.renderField}
          />
          <Field
            type="number"
            label="Code"
            name="code"
            maxLength={4}
            component={this.renderField}
          />
        </View>
        <Button
          title="Submit"
          onPress={handleSubmit(this.onFormSubmit)}
          style={button}
        />
      </View>
    )
  }
}

SignInFormContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired
}

const SignInFormContainerWithReduxForm = reduxForm({
  form: 'signInForm',
  validate: signInValidator
})(SignInFormContainer)

export default connect(null, actions)(SignInFormContainerWithReduxForm)