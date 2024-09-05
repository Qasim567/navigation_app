import { StyleSheet, View, FlatList, Pressable } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import ProductItem from '../components/ProductItem'
import Seperaotor from '../components/Seperaotor'
import { PRODUCT_LIST } from '../data/contants'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

export default function Home({navigation}: HomeProps) {
  return (
    <View style={styles.conatiner}>
      <FlatList
      data={PRODUCT_LIST}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={Seperaotor}
      renderItem={({item})=>(
        <Pressable onPress={()=> navigation.navigate('Details', {
          product: item
        })}>
          <ProductItem product={item}/>
        </Pressable>
      )}/>
    </View>
  )
}

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        // justifyContent:'center',
        // alignItems:'center',
        margin:8
    }
})