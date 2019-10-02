# Working on It

![platforms](https://img.shields.io/badge/platforms-Android%20%7C%20iOS-brightgreen.svg?style=flat-square&colorB=191A17)
[![npm](https://img.shields.io/npm/v/working-on-it?style=flat-square)](https://www.npmjs.com/package/working-on-it) [![npm](https://img.shields.io/npm/dm/working-on-it.svg?style=flat-square&colorB=007ec6)](https://www.npmjs.com/package/working-on-it)


It's a loading indicator designed to be use on react-native forms. When Working on It is rendered it will block all parent View inputs, use it after user submitting a form and block his inputs while waiting for an API response.

### Example
```javascript
import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import WorkingOnIt from 'working-on-It';

const App = () => {
  return (
    <View style={styles.container}>
      <WorkingOnIt loadIndicatorSize="large" />
      <View >
        <Text>Here a simple text for an example</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default App;

```
iOS           |  Android
:-------------------------:|:-------------------------:
<img  width=700  src="https://github.com/fonseca-leonardo/working-on-it/blob/master/img/Simulator%20Screen%20Shot%20-%20iPhone%20X%20-%202019-10-01%20at%2008.57.01.png?raw=true">  |  <img width=700 src="https://github.com/fonseca-leonardo/working-on-it/blob/master/img/screenshot-2019-10-01_08.54.21.329.png?raw=true">


Also, you can use your own loading indicator. Just place your indicator as Working on It children:

```javascript
const App = () => {
  return (
    <View style={styles.container}>
      <WorkingOnIt loadIndicatorSize="large" >
        {/*YOUR LOAD INDICATOR HERE*/}
        <Text>Loading...</Text>
      </WorkingOnIt>
      <View >
        <Text>Here a simple text for an example</Text>
      </View>
    </View>
  );
};
```
<img  width=400  src="https://github.com/fonseca-leonardo/working-on-it/blob/master/img/Simulator%20Screen%20Shot%20-%20iPhone%20X%20-%202019-10-01%20at%2008.58.54.png?raw=true">

| props  |  |
| ------------- | ------------- |
| backgroundStyle  |Change View style that is behind loading indicator |
|boxStyle  |Change the View that is holding loading indicator |
| loadIndicatorSize  | It's loading size, can be: **small** or **large**  |