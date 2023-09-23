import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Formik, useField } from 'formik';
import StyledTextInput from '../StyledTextInput';
import StyledText from '../StyledText';
import { loginValidationSchema } from '../../validationSchemas/login';

const initialForm = {
  email: '',
  password: '',
};

const styles = StyleSheet.create({
  form: {
    margin: 12,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 20,
    marginTop: -5,
  },
});

const FormikInputVAlue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <>
      <StyledTextInput
        error={meta.error}
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  );
};

const LogIn = () => {
  return (
    <Formik
      initialValues={initialForm}
      onSubmit={(values) => console.log(values)}
      validationSchema={loginValidationSchema}
    >
      {({ handleChange, handleSubmit, values }) => {
        return (
          <View style={styles.form}>
            <FormikInputVAlue name="email" placeholder="e-mail" />
            <FormikInputVAlue
              name="password"
              placeholder="password"
              secureTextEntry
            />
            <Button onPress={handleSubmit} title="Log In" />
          </View>
        );
      }}
    </Formik>
  );
};

export default LogIn;
