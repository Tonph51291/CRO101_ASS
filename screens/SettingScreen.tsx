import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";
import { icon } from "@/constants";
import { UIHeader } from "@/components";
import image from "@/constants/image";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Modal } from "react-native";
import { TouchableOpacity } from "react-native";
export default function SettingScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <UIHeader iconLeft={image.back} title="Setting" />
      <View style={styles.containerMenu}>
        <View style={styles.containerRow}>
          <View style={styles.containerIcon}>
            <Icon name="history" color={"#D17842"} size={20} />
          </View>
          <Text style={styles.styleText}>History</Text>
          <Icon name="chevron-right" color={"#AEAEAE"} size={25} />
        </View>
        <View style={styles.containerRow}>
          <View style={styles.containerIcon}>
            <Icon name="user" color={"#D17842"} size={20} />
          </View>
          <Text style={styles.styleText}>Personal Details</Text>
          <Icon name="chevron-right" color={"#AEAEAE"} size={25} />
        </View>
        <View style={styles.containerRow}>
          <View style={styles.containerIcon}>
            <Image source={require("../assets/images/location.png")} />
          </View>
          <Text style={styles.styleText}>Address</Text>
          <Icon name="chevron-right" color={"#AEAEAE"} size={25} />
        </View>
        <View style={styles.containerRow}>
          <View style={styles.containerIcon}>
            <Icon name="credit-card" color={"#D17842"} size={20} />
          </View>
          <Text style={styles.styleText}>Payment Method</Text>
          <Icon name="chevron-right" color={"#AEAEAE"} size={25} />
        </View>
        <View style={styles.containerRow}>
          <View style={styles.containerIcon}>
            <Icon name="exclamation" color={"#D17842"} size={20} />
          </View>
          <Text style={styles.styleText}>About</Text>
          <Icon name="chevron-right" color={"#AEAEAE"} size={25} />
        </View>
        <View style={styles.containerRow}>
          <View style={styles.containerIcon}>
            <Icon name="question" color={"#D17842"} size={20} />
          </View>
          <Text style={styles.styleText}>Help</Text>
          <Icon name="chevron-right" color={"#AEAEAE"} size={25} />
        </View>
        <View style={styles.containerRow}>
          <View style={styles.containerIcon}>
            <Image
              source={require("../assets/images/ic_twotone-log-out.png")}
            />
          </View>
          <Text style={styles.styleText}>Log out</Text>
          <Icon
            name="chevron-right"
            color={"#AEAEAE"}
            size={25}
            onPress={() => {
              setModalVisible(true);
            }}
          />
        </View>
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Are you sure want to logout!</Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.noButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.noText}>No</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.yesButton]}
                onPress={() => console.log("Logout")}
              >
                <Text style={styles.yesText}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.brightRed,
  },
  containerRow: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    marginTop: 10,
  },
  containerMenu: {
    marginTop: 70,
  },
  containerIcon: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(209, 120, 66, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  styleImg: {
    width: 40,
    height: 40,
  },
  styleText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    flex: 1,
    marginStart: 20,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  modalContainer: {
    width: 300,
    backgroundColor: "#121212",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  noButton: {
    backgroundColor: "transparent",
  },
  yesButton: {
    backgroundColor: "#D47F4E",
    marginLeft: 10,
  },
  noText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  yesText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
