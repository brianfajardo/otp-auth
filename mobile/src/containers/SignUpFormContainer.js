import React, { Component } from 'react'
import { View, Keyboard } from 'react-native'
import { Field, reduxForm } from 'redux-form'
import { FormLabel, FormInput, Button } from 'react-native-elements'

class SignUpFormContainer extends Component {

  constructor() {
    super()
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit(submittedNumber) {
    Keyboard.dismiss()
    console.log('submitted number:', submittedNumber)
  }

  renderField(fieldProps) {
    const { input, ...props } = fieldProps
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
      </View>
    )
  }

  render() {
    return (
      <View>
        <Field
          type="number"
          name="phoneNumber"
          component={this.renderField}
        />
        <Button
          title="Submit"
          onPress={this.props.handleSubmit(this.onFormSubmit)}
        />
      </View>
    )
  }
}

export default reduxForm({
  form: 'signUpForm'
})(SignUpFormContainer)