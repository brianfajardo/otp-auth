import React, { Component } from 'react'
import { View, Keyboard } from 'react-native'
import { Field, reduxForm } from 'redux-form'
import { Text, FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as actions from '../actions/'
import styles from '../../styles/SignUpFormContainer_styles'
import { signUpValidator } from '../utils/formValidation'

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
    const { textInput, button } = styles
    const { handleSubmit } = this.props
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
          onPress={handleSubmit(this.onFormSubmit)}
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

SignUpFormContainer.propTypes = {
  signUp: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  httpError: PropTypes.string
}

const SignUpFormContainerWithReduxForm = reduxForm({
  form: 'signUpForm',
  validate: signUpValidator
})(SignUpFormContainer)

export default connect(mapStateToProps, actions)(SignUpFormContainerWithReduxForm)