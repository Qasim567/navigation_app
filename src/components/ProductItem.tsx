import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PropsWithChildren } from 'react'

type ProductProps = PropsWithChildren<{
    product: Product
}>

const ProductItem = ({ product }: ProductProps) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image}
                source={{ uri: product.imageUrl }} />
            <View>
                <View style={styles.rowContainer}>
                    <View style={styles.rating}>
                        <Text style={styles.ratingText}>{product.rating}⭐</Text>
                    </View>
                    <Text>({product.ratingCount.toLocaleString()})</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.originalPrice}>PKR{product.originalPrice.toLocaleString()}</Text>
                    <Text style={styles.discountPrice}>PKR{product.discountPrice.toLocaleString()}</Text>
                    <Text style={styles.offerPercentage}>{product.offerPercentage}% off</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        margin: 8
    },
    image:{
        height: 120,
        width: 100,
    },
    rowContainer:{
        display: 'flex',
        flexDirection:'row',
        marginTop: 7,
        marginLeft: 10,
        marginBottom: 5
    },
    rating:{
        backgroundColor:'green',
        paddingHorizontal: 7,
        borderRadius: 5,
        marginRight: 4
    },
    ratingText:{
        color:'white'
    },
    originalPrice:{
        textDecorationLine: 'line-through',
        marginHorizontal: 2
    },
    discountPrice:{
        fontWeight: 'bold',
        color:'black',
        marginRight: 3
    },
    offerPercentage:{
        color: '#17B169',
        fontWeight: '700'
    }
})

export default ProductItem

