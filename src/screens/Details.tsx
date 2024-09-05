import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

type DetailsProps = NativeStackScreenProps<RootStackParamList, "Details">

export default function Details({ route }: DetailsProps) {
  const { product } = route.params
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image style={styles.image}
          source={{ uri: product.imageUrl }} />
        <View>
          <Text style={styles.name}>{product.name}</Text>
          <View>
            <View style={styles.rating}>
              <Text style={styles.ratingText}>{product.rating}⭐</Text>
              <Text>({product.ratingCount.toLocaleString()}) ratings</Text>
            </View>
          </View>
          <View>
            <View style={styles.rowContainer}>
              <Text style={styles.offerPercentage}>{product.offerPercentage}% off</Text>
              <Text style={styles.originalPrice}>PKR{product.originalPrice.toLocaleString()}</Text>
              <Text style={styles.discountPrice}>PKR{product.discountPrice.toLocaleString()}</Text>
            </View>
          </View>
          {product.tags.map((tag, index) => (
            <View key={index} style={styles.badge}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  name: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    marginTop: 3
  },
  rating: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 12,
    marginBottom:5
  },
  ratingText: {
    backgroundColor: 'green',
    paddingHorizontal: 7,
    borderRadius: 5,
    marginRight: 4,
    color: 'white',
  },
  rowContainer: {
    display:'flex',
    flexDirection:'row',
    backgroundColor:'#ACE1AF',
    paddingVertical: 20,
    marginHorizontal: 9,
    marginBottom:5,
    borderRadius: 5,
    alignItems:'flex-end'
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    marginLeft:7
  },
  discountPrice: {
    fontWeight: 'bold',
    color: 'black',
    marginLeft:7
  },
  offerPercentage: {
    color: '#17B169',
    fontWeight: 'bold',
    marginLeft: 5
  },
  badge: {
    marginLeft: 12,
    marginRight: 50
  },
  tagText: {
    paddingHorizontal: 4,
    marginBottom: 3,
    borderRadius: 7,
    borderWidth: 1.6,
  }
})