import { View, Text, StatusBar, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../../../assets/matrix/Metrics'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

const data = [
  {
    id: 1,
    title: 'Dorphin perkins',
    subtitle: 'Evening Dress',
    image: require('../../../assets/img/drress1.webp'),
    price: 20,
    discount: 10
  },
  {
    id: 2,
    title: 'Dorphin perkins',
    subtitle: 'Evening Dress',
    image: require('../../../assets/img/bqq09177.webp'),
    price: 20,
    discount: 10
  },
  {
    id: 3,
    title: 'Dorphin perkins',
    subtitle: 'Evening Dress',
    image: require('../../../assets/img/drress1.webp'),
    price: 20,
    discount: 10
  },
  {
    id: 4,
    title: 'Dorphin perkins',
    subtitle: 'Evening Dress',
    image: require('../../../assets/img/drress1.webp'),
    price: 20,
    discount: 10
  }
]

const data2 = [
  {
    id: 1,
    title: 'Dorphin perkins',
    subtitle: 'boy jacket',
    image: require('../../../assets/img/download.jpeg'),
    price: 20,
    discount: 10
  },
  {
    id: 2,
    title: 'Dorphin perkins',
    subtitle: 'boy shirt',
    image: require('../../../assets/img/images.jpeg'),
    price: 20,
    discount: 10
  },
  {
    id: 3,
    title: 'Dorphin perkins',
    subtitle: 'child jacket',
    image: require('../../../assets/img/dow.jpeg'),
    price: 20,
    discount: 10
  },
  {
    id: 4,
    title: 'Dorphin perkins',
    subtitle: 'Evening Dress',
    image: require('../../../assets/img/drress1.webp'),
    price: 20,
    discount: 10
  }
]
export default function HomePage() {

  const ProductCard = ({ v }) => (
    // console.log(v)
    <View style={styles.product}>
      <Image style={styles.background1} source={v.image} />
      <View style={styles.iconview}>
        <FontAwesome name="star" size={20} color="#FFBA49" />
        <FontAwesome name="star" size={20} color="#FFBA49" />
        <FontAwesome name="star" size={20} color="#FFBA49" />
        <FontAwesome name="star" size={20} color="#FFBA49" />
        <FontAwesome name="star" size={20} color="#FFBA49" />

      </View>

      <Text style={styles.textDorothy}>{v.title}</Text>
      <Text style={styles.textDress}>{v.subtitle}</Text>
      <View style={styles.pricelist}>
        <Text style={[styles.textDress, styles.price]}>{v.discount}<FontAwesome style={styles.price} name="dollar" size={20} color="#FFBA49" /></Text>

        <Text style={[styles.textDress, styles.price1]}> {v.price}<FontAwesome style={styles.price1} name="dollar" size={20} color="#FFBA49" /></Text>
      </View>
    </View>
  );

  const NewProductCard = ({ v }) => (

    <View style={styles.product}>
      <Image style={styles.background1} source={v.image} />
      <View style={styles.iconview}>
        <FontAwesome name="star" size={20} color="#FFBA49" />
        <FontAwesome name="star" size={20} color="#FFBA49" />
        <FontAwesome name="star" size={20} color="#FFBA49" />
        <FontAwesome name="star" size={20} color="#FFBA49" />
        <FontAwesome name="star" size={20} color="#FFBA49" />

      </View>

      <Text style={styles.textDorothy}>{v.title}</Text>
      <Text style={styles.textDress}>{v.subtitle}</Text>
      <View style={styles.pricelist}>
        <Text style={[styles.textDress, styles.price]}>{v.discount}<FontAwesome style={styles.price} name="dollar" size={20} color="#FFBA49" /></Text>

        <Text style={[styles.textDress, styles.price1]}> {v.price}<FontAwesome style={styles.price1} name="dollar" size={20} color="#FFBA49" /></Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>

      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View style={styles.background}>
        <ImageBackground style={styles.background} source={require('../../../assets/img/pexels-godisable-jacob-226636-896293.jpg')} />
        <View style={styles.textsale}>

          <Text style={styles.sale}>Fashion Sale</Text>


          <TouchableOpacity style={styles.button}>
            <Text style={{ fontSize: moderateScale(14), color: 'white', }}>Check</Text>
          </TouchableOpacity>
        </View>

      </View>

      <View>
        <View style={styles.view2}>
          <View >
            <Text style={styles.salefont}>Sale</Text>
            <Text style={{ color: '#B3B3B3' }}>super summer sale</Text>
          </View>
          <View>
            <Text style={styles.viewall}>View all</Text>
          </View>
        </View>

        <FlatList
          data={data}
          renderItem={({ item }) => <ProductCard v={item} />}
          keyExtractor={item => item.id}
          horizontal={true}
        />

      </View>
      <View>
        <View style={styles.view2}>
          <View >
            <Text style={styles.salefont}>New</Text>
            <Text style={{ color: '#B3B3B3' }}>you've never seen before</Text>
          </View>
          <View>
            <Text style={styles.viewall}>View all</Text>
          </View>
        </View>

        <FlatList
          data={data2}
          renderItem={({ item }) => <NewProductCard v={item} />}
          keyExtractor={item => item.id}
          horizontal={true}
        />
      </View>
    </ScrollView>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',

  },
  background: {
    width: '100%',
    height: verticalScale(600),
   
  },
  background1: {
    width: horizontalScale(180),
    height: verticalScale(300),
    borderRadius: moderateScale(10)
  },
  sale: {
    color: 'white',
    fontSize: moderateScale(53),
    fontFamily: 'Metropolis-Bold',
    marginLeft: horizontalScale(10),
    width: '64%',
    padding: horizontalScale(10),
  },
  textsale: {
    position: 'absolute',
    bottom: verticalScale(50),

  },
  button: {
    height: verticalScale(36),
    width: horizontalScale(150),
    backgroundColor: '#DB3022',
    color: 'white',
    borderRadius: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: horizontalScale(10)

  },
  view2: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: horizontalScale(30),
    padding: horizontalScale(20),
  },
  salefont: {
    color: 'black',
    fontFamily: 'Metropolis-Bold',
    fontSize: moderateScale(45)
  },
  viewall: {
    color: 'black',
    paddingTop: horizontalScale(17)
  },
  textDorothy: {
    color: '#B3B3B3',

  },
  textDress: {
    color: 'black',
    fontFamily: 'Metropolis-Bold',
    fontSize: moderateScale(20)
  },
  iconview: {
    flexDirection: 'row',
    paddingBottom: 9,
    paddingTop: 7
  },
  product: {
    marginHorizontal: 10
  },
  price1: {
    color: 'red',
    fontSize: 18
  },
  price: {
    color: '#B3B3B3',
    fontSize: 18,
    textDecorationLine: 'line-through'
  },
  pricelist: {
    paddingTop: horizontalScale(3),
    flexDirection: 'row'
  }
})