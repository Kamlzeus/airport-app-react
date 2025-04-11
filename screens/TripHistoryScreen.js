import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const TripHistoryScreen = () => {
  const trips = [
    {
      id: "1337231",
      dateTime: "02:30 | 15.01.2025",
      airlineName: "Asman Airline",
      logoUri:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8QtL3CdR8polag68knX2ZFiJPVT39UR4baw&s",
    },
    {
      id: "1337232",
      dateTime: "12:30 | 16.01.2025",
      airlineName: "Kyrgyzstan Airline",
      logoUri:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe2nKQgT4x4dX-sUPJydPQ3i-OXGL8uItY71NczAQRQIA3iBce6GowD_KtHw6Oa1dqGmY&usqp=CAU",
    },
    {
      id: "1337233",
      dateTime: "11:30 | 17.01.2025",
      airlineName: "Emirates Airline",
      logoUri:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/1200px-Emirates_logo.svg.png",
    },
    {
      id: "1337234",
      dateTime: "16:30 | 18.01.2025",
      airlineName: "Pegasus Airline",
      logoUri:
        "https://logoeps.com/wp-content/uploads/2013/04/pegasus-airlines-eps-vector-logo.png",
    },
    {
      id: "1337235",
      dateTime: "22:00 | 19.01.2025",
      airlineName: "Qatar Airline",
      logoUri:
        "https://www.itl.cat/pngfile/big/99-995290_qatar-airways-logo.png",
    },
    {
      id: "1337236",
      dateTime: "19:00 | 20.01.2025",
      airlineName: "Japan Airline",
      logoUri:
        "https://s3.eu-central-1.amazonaws.com/static.obilet.com/images/partner/1474-lg.png",
    },
    {
      id: "1337237",
      dateTime: "01:00 | 21.01.2025",
      airlineName: "American Airline",
      logoUri:
        "https://s202.q4cdn.com/986123435/files/doc_downloads/logos/american-airlines/THUMB-aa_aa__ahz_4cp_grd_pos-(1).png",
    },
    {
      id: "1337238",
      dateTime: "09:30 | 22.01.2025",
      airlineName: "Turkish Airline",
      logoUri:
        "https://companieslogo.com/img/orig/THYAO.IS-f22d40e8.png?t=1720244494",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.textBlock}>
        <Text style={styles.airline}>{item.airlineName}</Text>
        <Text style={styles.flightNumber}>#{item.id}</Text>
        <Text style={styles.dateTime}>{item.dateTime}</Text>
      </View>
      <Image
        source={{ uri: item.logoUri }}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );

  return (
    <ImageBackground
      source={{
        uri: "https://triptokyrgyzstan.com/sites/default/files/styles/hero/public/images/2019-04/slide-1960x857-07.jpg.webp?itok=PMx4TeLB",
      }}
      style={styles.imageBackground}
    >
      <LinearGradient
        colors={["rgba(0, 150, 255, 0.5)", "rgba(255, 255, 255, 1)"]}
        style={styles.overlay}
      >
        <View style={styles.container}>
          <FlatList
            data={trips}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.listContainer}
          />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  gradient: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    marginBottom: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  textBlock: {
    flex: 1,
  },
  airline: {
    fontSize: 16,
    fontWeight: "bold",
  },
  flightNumber: {
    fontSize: 15,
    marginTop: 3,
  },
  dateTime: {
    fontSize: 14,
    color: "#555",
    marginTop: 3,
  },
  logo: {
    width: 50,
    height: 50,
    marginLeft: 15,
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
  },
});

export default TripHistoryScreen;
