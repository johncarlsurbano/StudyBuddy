import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.forgotPasswordText}>Forgot Password</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Enter your email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="white"
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#284CC9',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 150,
  },
  forgotPasswordText: {
    color: 'white',
    fontFamily: 'Inter-Bold',
    fontSize: 32,
    marginBottom: 70,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  inputLabel: {
    color: 'white',
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  cancelButton: {
    backgroundColor: 'white',
    width: 140,
    height: 39,
    borderRadius: 8,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: 'white',
    width: 140,
    height: 39,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#284CC9',
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
