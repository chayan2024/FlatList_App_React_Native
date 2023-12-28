// App.js
import React, { useState } from 'react';
import { View, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Image, Text, Button } from 'react-native-elements';

const groceryProducts = [
  { id: '1', name: 'Apples', category: 'Fruits', image: require('./assets/apple.jpg'), price: 2.99, rating: 4.5 },
  { id: '2', name: 'Bread', category: 'Bakery', image: require('./assets/bread.jpg'), price: 1.99, rating: 4.2 },
  { id: '3', name: 'Milk', category: 'Dairy', image: require('./assets/milk.jpg'), price: 2.49, rating: 4.7 },
  { id: '4', name: 'Eggs', category: 'Dairy', image: require('./assets/eggs.jpg'), price: 3.99, rating: 4.0 },
  { id: '5', name: 'Chicken', category: 'Meat', image: require('./assets/chicken.jpg'), price: 5.99, rating: 4.8 },
  // Add more products as needed
];

const App = () => {
  const [quantity, setQuantity] = useState(1);

  const renderItem = ({ item }) => (
    <Card containerStyle={styles.card}>
      <Image style={styles.image} source={item.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.category}>{item.category}</Text>
      <View style={styles.quantityContainer}>
        <TextInput
          style={styles.quantityInput}
          value={quantity.toString()}
          onChangeText={(text) => setQuantity(text)}
          keyboardType="numeric"
        />
      </View>
      <Text style={styles.price}>Price: ${item.price.toFixed(2)}</Text>
      <Text style={styles.rating}>Rating: {item.rating}</Text>
      <Button
        title="Buy Now"
        buttonStyle={styles.buyButton}
        titleStyle={styles.buyButtonText}
        onPress={() => console.log('Buy Now pressed')}
      />
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={groceryProducts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    padding: 0,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2, // Add shadow on Android
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    marginLeft: 8,
  },
  category: {
    color: '#777',
    marginBottom: 8,
    marginLeft: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginLeft: 8,
    width: 40,
  },
  price: {
    fontWeight: 'bold',
    marginTop: 8,
    marginLeft: 8,
  },
  rating: {
    color: '#888',
    marginBottom: 8,
    marginLeft: 8,
  },
  buyButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    marginTop: 8,
  },
  buyButtonText: {
    color: 'white',
  },
});

export default App;
