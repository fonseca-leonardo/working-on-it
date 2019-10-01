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
<img src="https://github.com/fonseca-leonardo/working-on-it/blob/master/img/screenshot-2019-10-01_08.54.21.329.png" >