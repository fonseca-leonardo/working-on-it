import React from 'react';
import { View, 
  StyleSheet, 
  ActivityIndicator,
  ViewPropTypes} from 'react-native';
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 5,
    backgroundColor: "rgba(0,0,0, 0.75)"
  },
  loading: {
    backgroundColor: "#f3f3f3",
    padding: 20,
    borderRadius: 5
  }
  
})


const Loading = ({ backgroundStyle, boxStyle, loadIndicatorSize, children }) => {
  return (
    children ? (
      <View style={[styles.container, backgroundStyle]}>
        <View style={[styles.loading, boxStyle]}>{children}</View>
      </View>
    )
    : 
    (
      <View style={[styles.container, backgroundStyle]}>
        <ActivityIndicator style={[styles.loading, boxStyle]} size={loadIndicatorSize} ></ActivityIndicator>
      </View>
    )
  )
}

Loading.propTypes = {
  backgroundStyle: ViewPropTypes.style,
  boxStyle: ViewPropTypes.style,
  loadIndicatorSize: PropTypes.oneOf(["large", "small"])
}

export default Loading