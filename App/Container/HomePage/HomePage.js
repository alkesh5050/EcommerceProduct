import { View, Text, StatusBar, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../../../assets/matrix/Metrics'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../Redux/slice/category.slice';

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

const data11 = [
  {
    id: 1,
    name: 'man'
  },
  {
    id: 2,
    name: 'woman'
  },
  {
    id: 3,
    name: 'chaid'
  }
]

// const company =  [{ id:"1", name:"somename"},{ id:"2", name:"somename"}]

// company.map(({ id, name }) => ({ companyId: id, companyName: name, companyId: id, companyName: name }));

// console.log(company);
export default function HomePage({ route, navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [])



  const category = useSelector(state => state.category);

  console.log(category.categories);
  const datamap = category.categories

  const ProductCard = ({ v }) => (
    // console.log(v)
    <TouchableOpacity style={styles.product} onPress={() => navigation.navigate("Product")}>
      <Image style={styles.background1} source={v.image}/>
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
    </TouchableOpacity>
  );

  const NewProductCard = ({ v }) => (

    <TouchableOpacity style={styles.product} onPress={() => navigation.navigate("Product")} >
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
    </TouchableOpacity>
  );
  // const renderCategory = ({ item }) => (
  //   <View>
  //     <Image style={styles.img} source={require('../../../assets/img/page1.jpg')} />
  //     <View style={styles.textsale}>
  //       <Text style={styles.newcoll}>New collection {item.name}</Text>
  //     </View>
  //     <View style={styles.DirectView}>
  //       <View style={styles.SecondView}>
  //         <View style={styles.SummSale}>
  //           <View style={styles.SumTextView}>
  //             <Text style={styles.SummText1}>{item.name}</Text>
  //           </View>
  //         </View>
  //         <View style={styles.BlackView}>
  //           <Image source={require('../../../assets/img/WhatsApp.jpg')} style={{ width: '100%', height: '100%' }} />
  //           <Text style={styles.BlackText}>Black</Text>
  //         </View>
  //       </View>
  //       <View style={styles.BodieView}>
  //         <Image source={require('../../../assets/img/pagehome.webp')} style={{ width: '100%', height: '100%' }} />
  //         <View style={styles.hoodieTextView}>
  //           <Text style={styles.hoodieText}>{item.name}</Text>
  //         </View>
  //       </View>
  //     </View>
  //   </View>
  // );

  return (

    <ScrollView style={styles.container}>

      <StatusBar
        animated={true}
        backgroundColor="transparent"
        // barStyle="dark-content"
      />
      <View style={styles.background}>
        <ImageBackground style={styles.background} source={require('../../../assets/img/pexels-godisable-jacob-226636-896293.jpg')} />
        <View style={styles.textsale}>

          <Text style={styles.sale}>Fashion Sale</Text>


          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("CategoriesTwo")}>
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
      {
        data11.map((v, i) => (
          <View>
            <View>
              <Image style={styles.img} source={require('../../../assets/img/page1.jpg')} />
              <View style={styles.textsale}>

                <Text style={styles.newcoll}>New collection{v.name}</Text>
              </View>
            </View>

            <View style={styles.DirectView}>
              <View style={styles.SecondView}>
                <View style={styles.SummSale}>
                  <View style={styles.SumTextView}>
                    <Text style={styles.SummText1}>{v.name}</Text>
                  </View>
                </View>

                <View style={styles.BlackView}>
                  <Image source={require('../../../assets/img/WhatsApp.jpg')} style={{ width: '100%', height: '100%' }} />
                  <Text style={styles.BlackText}>Black</Text>
                </View>
              </View>

              <View style={styles.BodieView}>
                <Image source={require('../../../assets/img/pagehome.webp')} style={{ width: '100%', height: '100%' }} />
                <View style={styles.hoodieTextView}>
                  <Text style={styles.hoodieText}>{v.name}</Text>
                </View>

              </View>
            </View>
          </View>
        ))
      }
      {/* <FlatList
        data={data11}
        renderItem={renderCategory}
        keyExtractor={item => item.id.toString()}
      /> */}
    </ScrollView>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // position: 'relative',

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
    marginLeft: horizontalScale(18)

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
    fontSize: moderateScale(38)
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
    paddingBottom: verticalScale(9),
    paddingTop: verticalScale(7),
    columnGap: horizontalScale(4)
  },
  product: {
    // marginHorizontal: 10,
    paddingLeft: horizontalScale(17)
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
  },
  img: {
    width: '100%',
    height: verticalScale(400),
  },
  newcoll: {
    // position: 'absolute',
    color: 'white',
    fontSize: moderateScale(40),
    fontFamily: 'Metropolis-Bold',
    marginLeft: horizontalScale(70),
    top: horizontalScale(20)
  },

  DirectView: {
    width: '100%',
    height: verticalScale(400),
    flexDirection: 'row'
  },

  SecondView: {
    width: '50%',
    height: verticalScale(400)
  },
  SummSale: {
    backgroundColor: 'white',
    width: '100%',
    height: '50%',
    position: 'relative'
  },
  SumTextView: {
    width: horizontalScale(150),
    height: verticalScale(100),
    position: 'absolute',
    bottom: horizontalScale(30),
    left: horizontalScale(18)
  },
  SummText1: {
    color: '#DB3022',
    fontSize: moderateScale(35),
    fontFamily: 'Metropolis-Bold',
  },
  BlackView: {
    backgroundColor: 'red',
    width: '100%',
    height: '50%',
    position: 'relative'
  },
  BlackText: {
    color: 'white',
    fontSize: moderateScale(35),
    fontFamily: 'Metropolis-Bold',
    position: 'absolute',
    bottom: horizontalScale(20),
    left: horizontalScale(20)
  },
  BodieView: {
    backgroundColor: 'red',
    width: '50%',
    height: '100%',
    position: 'relative'
  },
  hoodieTextView: {
    position: 'absolute',
    bottom: horizontalScale(90),
    left: horizontalScale(40),

  },
  hoodieText: {
    color: 'white',
    fontSize: moderateScale(35),
    fontFamily: 'Metropolis-Bold',
  }
})