import { View, Text, ScrollView, StatusBar, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { horizontalScale, moderateScale, verticalScale } from '../../../assets/matrix/Metrics';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const data = [
  {
    id: 1,
    title: 'Summer',

  },
  {
    id: 2,
    title: 'T-Shirts',

  },
  {
    id: 3,
    title: 'Shirts',

  },
  {
    id: 4,
    title: 'Shirts',

  }
]
const data2 = [
  {
    id: 1,
    title: 'LIME',
    subtitle: 'Shirt',
    image: require('../../../assets/img/drress1.webp'),
    color: 'Blue',
    Size: 'L',
    price: 32,
    ratting: 10

  },
  {
    id: 2,
    title: 'Mango',
    subtitle: 'Longsleeve Vioeta',
    image: require('../../../assets/img/bqq09177.webp'),
    color: 'Orange',
    Size: 'S',
    price: 46,
    ratting: 2
  },
  {
    id: 3,
    title: 'Olivier',
    subtitle: 'Shirt',
    image: require('../../../assets/img/drress1.webp'),
    color: 'gray',
    Size: 'L',
    price: 52,
    ratting: 3
  },
  {
    id: 4,
    title: '&Berries',
    subtitle: 'T-Shirt',
    image: require('../../../assets/img/drress1.webp'),
    color: 'Black',
    Size: 'S',
    price: 39,
    ratting: 4
  }
]
export default function Favorites() {

  const ProductCard = ({ v }) => (

    <TouchableOpacity style={styles.product}>
      <View style={styles.fav_tshirts}><Text style={styles.textfont}>{v.title}</Text></View>

    </TouchableOpacity>
  );
  const NewProductCard = ({ v }) => (
    <TouchableOpacity style={styles.olldeta}> 
      <Image source={v.image} style={styles.img} />
      <View style={styles.pullovertext}>

      <View style={{flexDirection:'row',columnGap:160}}>
      <Text style={styles.protext2}>{v.title}</Text>
        <TouchableOpacity><Fontisto  name="close-a" size={18} color="#B9B9B9" /></TouchableOpacity>
      </View>

      <Text style={styles.protext}>{v.subtitle}</Text>

        <View style={styles.Color}>
          <Text style={styles.Colortext}>color:<Text style={styles.colorsize}>{v.color}</Text></Text>
          <Text style={styles.Colortext}>Size:<Text style={styles.colorsize}>{v.Size}</Text></Text>
        </View>

        <View style={styles.iconview}>
          <Text style={styles.price}>{v.price}$</Text>
          <View style={styles.star}>
            <FontAwesome name="star" size={18} color="#FFBA49" />
            <FontAwesome name="star" size={18} color="#FFBA49" />
            <FontAwesome name="star" size={18} color="#FFBA49" />
            <FontAwesome name="star" size={18} color="#FFBA49" />
            <FontAwesome name="star" size={18} color="#FFBA49" />
            <Text style={styles.starrating}>({v.ratting})</Text>
            <View style={styles.shoppingcard}>
              <Fontisto name="shopping-bag" size={18} color="#F9F9F9" />
            </View>

          </View>

        </View>
      </View>

    </TouchableOpacity>
  );
  return (
    <ScrollView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={'transparent'}
      />
      <TouchableOpacity style={{}}>
        {/* <FontAwesome name="angle-left" size={45} color="black" /> */}
        <FontAwesome style={{ paddingTop: 9, }} name="search" size={25} color="black" />
      </TouchableOpacity>
      <Text style={styles.fonts}>Favorites</Text>

      <FlatList
        data={data}
        renderItem={({ item }) => <ProductCard v={item} />}
        keyExtractor={item => item.id}
        horizontal={true}
      />

      <View style={styles.fontsicon}>
        <TouchableOpacity style={styles.filtertoch}><Ionicons name="filter" size={26} color="black" /><Text style={styles.filter}>filters</Text></TouchableOpacity>
        <TouchableOpacity style={styles.filtertoch}><FontAwesome name="arrows-v" size={26} color="black" /><Text style={styles.filter}>price:lowest to high</Text></TouchableOpacity>
        <TouchableOpacity style={styles.filtertoch}><FontAwesome name="th-list" size={26} color="black" /></TouchableOpacity>
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
    // paddingRight: verticalScale(30),
    marginLeft: 10
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
    fontSize: moderateScale(20),
    fontFamily: 'Metropolis-Bold',
  },
  protext2: {
    color: '#9B9B9B',
    fontSize: moderateScale(14),
    // flexDirection:'row'
  },
  iconview: {
    flexDirection: 'row',
    paddingBottom: verticalScale(9),
    paddingTop: verticalScale(7),
    columnGap: horizontalScale(28),

  },
  price: {
    color: 'black',
    fontSize: moderateScale(18),

  },
  img: {
    width: '30%',
    height: '100%',
    borderBottomLeftRadius: horizontalScale(10),
    borderTopLeftRadius: horizontalScale(10),
  },
  Color: {
    flexDirection: 'row',
    columnGap: horizontalScale(35),
    paddingTop: verticalScale(7)
  },
  Colortext: {
    color: '#9B9B9B'
  },
  colorsize: {
    color: 'black'
  },
  star: {
    paddingTop: verticalScale(7),
    flexDirection: 'row',
    columnGap: horizontalScale(2)
  },
  starrating: {
    color: '#9B9B9B',
    fontSize: 15,
    bottom: 3
  },
  shoppingcard: {
    position: 'relative',
    bottom: -10,
    backgroundColor: '#DB2032',
    height: 45,
    width: 45,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',

  },
  filtertoch: {
    flexDirection: 'row'
  }
});