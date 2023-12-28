// App.js
import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Card, Image, Text, Button } from 'react-native-elements';

const windowWidth = Dimensions.get('window').width;

const groceryProducts = [
  { id: '1', name: 'Apples', category: 'Fruits', image: require('./assets/apple.jpg'), price: 2.99, rating: 4.5 },
  { id: '2', name: 'Bread', category: 'Bakery', image: require('./assets/bread.jpg'), price: 1.99, rating: 4.2 },
  { id: '3', name: 'Milk', category: 'Dairy', image: require('./assets/milk.jpg'), price: 2.49, rating: 4.7 },
  { id: '4', name: 'Eggs', category: 'Dairy', image: require('./assets/eggs.jpg'), price: 3.99, rating: 4.0 },
  { id: '5', name: 'Chicken', category: 'Meat', image: require('./assets/chicken.jpg'), price: 5.99, rating: 4.8 },
  // Add more products as needed
];

const GridItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <Card containerStyle={styles.card}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.price}>Price: ${item.price.toFixed(2)}</Text>
          <Text style={styles.rating}>Rating: {item.rating}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <Button
            title="-"
            buttonStyle={styles.quantityButton}
            onPress={decreaseQuantity}
          />
          <Text style={styles.quantityText}>{quantity}</Text>
          <Button
            title="+"
            buttonStyle={styles.quantityButton}
            onPress={increaseQuantity}
          />
        </View>
      </View>
      <Button
        title="Add to Cart"
        buttonStyle={styles.buyButton}
        titleStyle={styles.buyButtonText}
        onPress={() => console.log(`Added ${quantity} ${item.name} to cart`)}
      />
    </Card>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={groceryProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GridItem item={item} />}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  flatListContainer: {
    justifyContent: 'space-between',
  },
  card: {
    width: (windowWidth - 40) / 2,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    elevation: 2,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  textContainer: {
    flex: 1,
    padding: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  price: {
    fontWeight: 'bold',
  },
  rating: {
    color: '#888',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
  },
  quantityText: {
    marginHorizontal: 8,
    fontSize: 16,
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
