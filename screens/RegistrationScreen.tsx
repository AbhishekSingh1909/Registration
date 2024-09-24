import React from 'react';
import { View,StyleSheet, Image } from 'react-native';
import { Button, ButtonGroup, withTheme, Text } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignUpScreen: React.FC = () => {
  console.log('start');

  // Function to handle button press
  const handleGooglePress = () => { console.log("Perform Google Sign-in here."); }
  const handleFacebookPress = () => { console.log("Perform Facebook Sign-in here."); }
  const handleEMailPress = () => { console.log("Perform Email Sign-in here."); }

  return (
    <View style={styles.container}>
      {/* Illustration */}
          <Image source={require('../assets/icons/sign-up/cactus-icon.png')} style={styles.image} />

      {/* Main Title */}
      <Text h2 style={styles.headingTitle}>Create your account</Text>

      {/* Subtitle */}
      <Text h4 style={styles.subtitle}>Register your account to save your settings.</Text>

      {/* Google Button */}
      <Button
        title="Continue with Google"
        buttonStyle={styles.googleButton}
        // icon={<Icon name="google" size={24} color="white" />}
        // icon={{
        //   name: "google",
        //   type: 'font-awesome',
        //   size: 24,
        //   color:"#4285F4",
        // }}
        icon={
          <Image
            source={require('../assets/icons/sign-up//google.png')} // Path to your multi-colored Google icon
            style={styles.googleIcon}
          />
        }
        //iconContainerStyle={{ marginRight: 10 }}
        titleStyle={styles.buttonTitle}
        onPress={handleGooglePress}  // Attach onPress handler here
      />

      {/* Facebook Button */}
      <Button
        title="Continue with Facebook"
        buttonStyle={styles.facebookButton}
        // icon={<Icon name="facebook" size={24} color="white" />}
        iconContainerStyle={{ marginRight: 10 }}
        icon={{
          name: "facebook",
          type: 'font-awesome',
          size: 30,
          color: 'white',
        }}
        //iconContainerStyle={{ marginRight: 10 }}
        titleStyle={styles.buttonTitle}
        onPress={handleFacebookPress} // Attach onPress handler here
      />

      {/* Email Button */}
      <Button
        title="Continue with Email"
        // type="outline"
        buttonStyle={styles.emailButton}
        iconContainerStyle={{ marginRight: 10 }}
        //icon={<Icon name="envelope" size={24} color="gray" />}
        icon={{
          name: "envelope",
          type: 'font-awesome',
          size: 25,
          color: "lightgray",
        }}
        titleStyle={styles.emailTitle}
        onPress={handleEMailPress} //Attach onPress handler here
       // iconContainerStyle={{ marginRight: 10 }}
      />

      {/* Privacy Notice */}
      <Text style={styles.notice}>
        We won’t share or send you anything without your permission.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 150,
    marginBottom: 30,
    // You can adjust this with an actual image URL or local image.
  },
  headingTitle: {
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'sans-serif'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'slab-serif',  // System font for Android
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    
    width :300,
    color: 'gray',
    marginBottom: 30,
    textAlign: 'center',
  },
  googleIcon: {
    width: 24, // Adjust size based on the Google icon image dimensions
    height: 24,
    marginRight: 10, // Space between the icon and text
  },
  googleButton: {
    backgroundColor: '#E0E0E0',
    borderColor: 'transparent',
    borderWidth: 2,
    borderRadius: 50,
    width: 300,
    paddingVertical: 20,
    marginBottom: 10,
    marginTop: 60,
    display: 'flex',
    justifyContent:"center"
  },
  facebookButton: {
    backgroundColor: '#1877F2',
    borderColor: 'transparent',
    borderWidth: 2,
    borderRadius: 50,
    width: 300,
    paddingVertical: 20,
    marginBottom: 10,
    marginTop: 0,
    display: 'flex',
    justifyContent:"center"
  },
  emailButton: {
    backgroundColor: 'transparent',
    borderColor: '#F5F5F5',
    borderWidth: 2,
    borderRadius: 50,
    width: 300,
    paddingVertical: 20,
    marginBottom: 20,
    marginTop: 0,
    display: 'flex',
    justifyContent:"center"
  },
  buttonTitle: {
    marginLeft: 10,
    color: '#000',
    fontWeight: 100
  },
  emailTitle: {
    marginLeft: 10,
    
    color: 'gray',
  },
  notice: {
    fontSize: 12,
    
    color: 'gray',
    marginTop: 30,
    textAlign: 'center',
  },
});

export default SignUpScreen;
