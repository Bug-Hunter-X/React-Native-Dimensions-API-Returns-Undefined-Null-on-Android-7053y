The solution involves using a combination of `useEffect` hook, `Dimensions` API, and `useState` to safely handle the asynchronous nature of getting screen dimensions. We initialize the dimensions with default values and update them only when they become available.  This ensures that your app doesn't crash when accessing `width` or `height` and provides a smooth user experience.

```javascript
import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text } from 'react-native';

const DimensionsSolution = () => {
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setWindowDimensions(window);
    });

    // Get initial dimensions
    setWindowDimensions(Dimensions.get('window'));

    return () => subscription.remove();
  }, []);

  return (
    <View>
      <Text>Window Width: {windowDimensions.width}</Text>
      <Text>Window Height: {windowDimensions.height}</Text>
    </View>
  );
};

export default DimensionsSolution;
```