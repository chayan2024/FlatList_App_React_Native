// App.js
import React, { useState } from 'react';
import { View, FlatList, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

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
    <View style={styles.card}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.textContainer}>
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
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 16,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  category: {
    color: '#777',
    marginBottom: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
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
    marginBottom: 8,
  },
  rating: {
    color: '#888',
    marginBottom: 8,
  },
  buyButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buyButtonText: {
    color: 'white',
  },
});

export default App;
