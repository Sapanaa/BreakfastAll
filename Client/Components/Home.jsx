import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

function MyHome() {
  return (
        <View style={styles.container}>
          <Image
            resizeMode="auto"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/3b7178e8c5def31224fcc27349f0f624b8930a1bfb70a34a5f84eec386bac8d8?",
            }}
            style={styles.image}
          />
          <Text style={styles.heading}>BREAKFAST ALL DAY</Text>
          <Text style={styles.description}>
                 Eat healthy, Eat tasty
          </Text>
         <View style={styles.qrCode}>
            <Text style={styles.qrCodeText}>Scan QR code</Text>
          </View>
          
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex:1,
        borderRadius: 45,
        backgroundColor: "#E9BABA",
        maxWidth: 480,
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        padding: 30,
        margin: "0 auto",
      },
      image: {
        width: "100%",
        aspectRatio: 1,
      },
      heading: {
        color: "#93092A",
        fontFamily: "Irish Grover, sans-serif",
        marginTop: 48,
        fontSize: 32,
      },
    
      description: {
        color: "#0D6056",
        fontFamily: "Itim, sans-serif",
        alignSelf: "flex-start",
        marginTop: 27,
        marginLeft: 22,
      },
      qrCode: {
        backgroundColor: "#A25252",
        borderRadius: 30,
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginTop: 58,
      },
      qrCodeText: {
        color: "#fff",
        fontFamily: "Itim, sans-serif",
      },
    });
    

export default MyHome;
