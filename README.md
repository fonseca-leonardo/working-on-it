# Working on It

It's a loading indicator designed to be use on react-native forms. When Working on It is rendered it will block all parent View inputs, use it after user subminting a form and block his inputs while waiting for an API response.

### Example
```javascript
import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Loading from './src/Working-on-It';

const App = () => {
  return (
    <View style={styles.container}>
      <Loading loadIndicatorSize="large" />
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

Also, you can your own loading indicator. Just use your indicator as Working on It children:

```javascript
const App = () => {
  return (
    <View style={styles.container}>
      <Loading loadIndicatorSize="large" >
        <Text>Loading...</Text>
      </Loading>
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