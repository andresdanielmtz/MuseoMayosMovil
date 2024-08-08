import React, { Component } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import PieChart from "react-native-pie-chart";

export default class TestChart extends Component {
  render() {
    const widthAndHeight = 250;
    const series = [80, 20];
    const sliceColor = ["#FF7F26", "#7F3F00"];
    // #7F3F00
    // #FF7F26
    const legendData = [
      { name: "Sonora", color: "#FF7F26", val: 80 },
      { name: "Sinaloa", color: "#7F3F00", val: 20 },
    ];

    return (
      <View style={styles.container}>
        <Text style={styles.title}>División Poblacional</Text>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
        />
        <View style={styles.legendContainer}>
          {legendData.map((item, index) => (
            <View key={index} style={styles.legendItem}>
              <View
                style={[styles.legendColor, { backgroundColor: item.color }]}
              />

              <Text style={styles.legendText}>{item.name}: </Text>
              <Text style={styles.legendText}>{item.val}%</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginBottom: 150, // Extra margin at the bottom
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
  legendContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  legendColor: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  legendText: {
    fontSize: 16,
  },
});
