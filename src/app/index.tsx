import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Platform } from "react-native";
import { Link } from "expo-router";
import { AntDesign, FontAwesome, Feather } from "@expo/vector-icons";
import backgroundImage from "../assets/image/login.png"; // Import your image

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 50,
    },
     backgroundImage: {
        flex: 1,
         justifyContent: "center",
         alignItems: "center",
         backgroundColor: 'rgba(0,0,0,0.5)',
         ...(Platform.OS === 'ios' ? {
          blurRadius: 10,
            } : {}),

      },
       image: {
        resizeMode: "contain",
      },
    welcomeText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginBottom: 10,
        textAlign: "center",
    },
    myAccountText: {
        fontSize: 20,
        color: "white",
        marginBottom: 30,
        textAlign: "center",
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 5,
        padding: 15,
        color: "white",
        marginBottom: 10,
    },
    otpContainer: {
       marginBottom: 20,
    },
    otpRow: {
        flexDirection: "row",
    },
    otpInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 5,
        padding: 15,
        color: "white",
        marginRight: 10,
    },
    getOtpButton: {
        backgroundColor: "white",
        padding: 15,
        borderRadius: 5,
    },
    getOtpButtonText: {
         color: "black",
        fontWeight: "bold"
    },
   loginButton: {
        backgroundColor: "#b252e1",
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
      },
    loginButtonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    skipLink: {
        alignItems: "center",
        marginBottom: 30,
        textAlign: "center",
    },
    skipLinkText: {
       color: "white",
       textDecorationLine: 'none'

    },
    orContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,
    },
    orLine: {
        flex: 1,
        height: 1,
        backgroundColor: "white",
    },
    orText: {
        marginHorizontal: 10,
        color: "white",
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
       marginBottom: 10,
    },
    socialButton: {
        backgroundColor: "white",
        borderRadius: 25,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
      },
       otpLabel: {
        color: "white",
        marginBottom: 5,
       }
});


const HomeScreen = () => {
    return (
     <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
     <View style={styles.image}>
       <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to Varsada !!</Text>
          <Text style={styles.myAccountText}>My Account</Text>

           <View style={styles.inputContainer}>
                <Text style={styles.otpLabel}>
                     Login Using Phone Number or E-mail
                 </Text>
                 <TextInput
                    style={styles.input}
                    placeholder="Enter Phone Number or E- mail to Login"
                     placeholderTextColor="white"
                />
            </View>
           <View style={styles.otpContainer}>
              <Text style={styles.otpLabel}>Enter OTP</Text>
              <View style={styles.otpRow}>
                 <TextInput
                    style={styles.otpInput}
                     placeholder="Enter OTP"
                     placeholderTextColor="white"
                  />
                   <TouchableOpacity style={styles.getOtpButton}>
                     <Text style={styles.getOtpButtonText}>Get OTP</Text>
                  </TouchableOpacity>
              </View>
           </View>

            <TouchableOpacity style={styles.loginButton}>
                 <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>

            <Link href={"/"} style={styles.skipLink}>
                 <Text style={styles.skipLinkText}>Skip</Text>
            </Link>
           <View style={styles.orContainer}>
              <View style={styles.orLine}></View>
              <Text style={styles.orText}>OR</Text>
              <View style={styles.orLine}></View>
            </View>
          <View style={styles.socialContainer}>
             <TouchableOpacity style={styles.socialButton}>
                <AntDesign name="google" size={24} />
                </TouchableOpacity>
             <TouchableOpacity style={styles.socialButton}>
                <FontAwesome name="facebook" size={24} />
             </TouchableOpacity>
             <TouchableOpacity style={styles.socialButton}>
                  <AntDesign name="apple1" size={24} color="black" />
             </TouchableOpacity>
        </View>
       </View>
       </View>
      </ImageBackground>
    );
};

export default HomeScreen;