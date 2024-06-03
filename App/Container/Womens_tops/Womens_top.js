import { View, Text, ScrollView, StatusBar, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { horizontalScale, moderateScale, verticalScale } from '../../../assets/matrix/Metrics';

const data = [
  {
    id: 1,
    title: 'T-shirts',

  },
  {
    id: 2,
    title: 'Crop tops',

  },
  {
    id: 3,
    title: 'sleeveless',

  },
  {
    id: 4,
    title: 'Shirts',

  }
]
const data2 = [
  {
    id: 1,
    title: 'Pullover',
    subtitle: 'Mango',
    image: require('../../../assets/img/drress1.webp'),
    price: 51,

  },
  {
    id: 2,
    title: 'Blouse',
    subtitle: 'Dorothy Perkins',
    image: require('../../../assets/img/bqq09177.webp'),
    price: 34,
  },
  {
    id: 3,
    title: 'T-Shirt',
    subtitle: 'LOST ink',
    image: require('../../../assets/img/drress1.webp'),
    price: 12,
  },
  {
    id: 4,
    title: 'Shirt',
    subtitle: 'Topshop',
    image: require('../../../assets/img/drress1.webp'),
    price: 51,
  }
]
export default function Womens_top() {

  const ProductCard = ({ v }) => (

    <View style={styles.product}>
      <View style={styles.fav_tshirts}><Text style={styles.textfont}>{v.title}</Text></View>

    </View>
  );
  const NewProductCard = ({ v }) => (
    <View style={styles.olldeta}>
      <Image source={v.image} style={styles.img} />
      <View style={styles.pullovertext}>
        <Text style={styles.protext}>{v.title}</Text>
        <Text style={styles.protext2}>{v.subtitle}</Text>

        <View style={styles.iconview}>
          <FontAwesome name="star" size={18} color="#FFBA49" />
          <FontAwesome name="star" size={18} color="#FFBA49" />
          <FontAwesome name="star" size={18} color="#FFBA49" />
          <FontAwesome name="star" size={18} color="#FFBA49" />
          <FontAwesome name="star" size={18} color="#FFBA49" />
        </View>
        <Text style={styles.price}>{v.price}$</Text>
      </View>

    </View>
  );
  return (
    <ScrollView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
      />
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <FontAwesome name="angle-left" size={45} color="black" />
        <FontAwesome style={{ paddingTop: 9 }} name="search" size={25} color="black" />
      </View>
      <Text style={styles.fonts}>Women's tops</Text>

      <FlatList
        data={data}
        renderItem={({ item }) => <ProductCard v={item} />}
        keyExtractor={item => item.id}
        horizontal={true}
      />

      <View style={styles.fontsicon}>
        <FontAwesome name="wifi" size={26} color="black" /><Text style={styles.filter}>filters</Text>
        <FontAwesome name="arrows-v" size={26} color="black" /><Text style={styles.filter}>price:lowest to high</Text>
        <FontAwesome name="th" size={26} color="black" />
      </View>

      <FlatList
        data={data2}
        renderItem={({ item }) => <NewProductCard v={item} />}
        keyExtractor={item => item.id}
      // horizontal={true}
      />


    </ScrollView>
  )
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: horizontalScale(19),
    paddingTop: horizontalScale(13)
  },
  fonts: {
    color: 'black',
    fontSize: 35,
    fontFamily: 'Metropolis-Bold',
    marginBottom: horizontalScale(15),
    marginTop: horizontalScale(35)
  },
  fav_tshirts: {
    width: horizontalScale(90),
    height: verticalScale(35),
    backgroundColor: 'black',
    borderRadius: horizontalScale(100),
    justifyContent: 'center',
    alignItems: 'center',

  },
  textfont: {
    fontSize: moderateScale(14),
    fontFamily: 'Metropolis-Bold',
    color: 'white',

  },
  product: {
    // marginHorizontal: 10,
    paddingRight: horizontalScale(9),
  },
  fontsicon: {
    marginTop: verticalScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F9F9F9',
    marginBottom: verticalScale(20)
  },
  filter: {
    color: 'black',
    paddingRight: verticalScale(30)
  },
  olldeta: {
    flexDirection: 'row',
    height: 135,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: horizontalScale(15),
  },
  pullovertext: {
    margin: '3%',

  },
  protext: {
    color: 'black',
    fontSize: moderateScale(24),
    fontFamily: 'Metropolis-Bold',
  },
  protext2: {
    color: '#9B9B9B',
    fontSize: moderateScale(15),
  },
  iconview: {
    flexDirection: 'row',
    paddingBottom: verticalScale(9),
    paddingTop: verticalScale(7),
    columnGap: horizontalScale(4)
  },
  price: {
    color: 'black',
    fontSize: moderateScale(20),

  },
  img: {
    width: '30%',
    height: '100%',
    borderBottomLeftRadius: horizontalScale(10),
    borderTopLeftRadius: horizontalScale(10),
  }
});