import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image, TouchableOpacity } from 'react-native';

// Main Page Component
function MainPage({ onExplore }) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainTitle}>Ownable</Text>
      <Text style={styles.mainSubtitle}>A place for rent-to-buy homes</Text>
      <Button title="Explore Homes" onPress={onExplore} />
    </View>
  );
}

// Home Listings Page Component
function HomeList() {
  return (
    <ScrollView style={styles.scrollContainer}>
      <Text style={styles.headerText}>Find Your Dream Home</Text>

      {/* Card 1 */}
      <TouchableOpacity style={styles.card}>
        <Image
          style={styles.cardImage}
          source={require('./assets/._apartment-image-1.jpg')}
        />
        <Text style={styles.cardTitle}>Modern Family Home</Text>
        <Text style={styles.cardSubtitle}>3 Beds • 2 Baths • $2500/month</Text>
      </TouchableOpacity>

      {/* Card 2 */}
      <TouchableOpacity style={styles.card}>
        <Image
          style={styles.cardImage}
          source={require('./assets/apartment-image-2.jpg')}
        />
        <Text style={styles.cardTitle}>Luxury Villa</Text>
        <Text style={styles.cardSubtitle}>4 Beds • 3 Baths • $4500/month</Text>
      </TouchableOpacity>

      {/* Card 3 */}
      <TouchableOpacity style={styles.card}>
        <Image
          style={styles.cardImage}
          source={require('./assets/apartment-image-3.jpg')}
        />
        <Text style={styles.cardTitle}>Cozy Cottage</Text>
        <Text style={styles.cardSubtitle}>2 Beds • 1 Bath • $1800/month</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Main App Component
export default function App() {
  const [showHomeList, setShowHomeList] = React.useState(false);

  return showHomeList ? (
    <HomeList />
  ) : (
    <MainPage onExplore={() => setShowHomeList(true)} />
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  mainTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  mainSubtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  scrollContainer: {
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginHorizontal: 10,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
    marginHorizontal: 10,
    marginBottom: 10,
  },
});
