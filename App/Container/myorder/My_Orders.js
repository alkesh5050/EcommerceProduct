import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  a,
  Image,
  ScrollView,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import { horizontalScale, moderateScale, verticalScale } from '../../../assets/matrix/Metrics';


export default function My_profilee({ route, navigation }) {
  return (
    <ScrollView style={{backgroundColor:'#FFFFFF'}}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <View style={Styles.container}>
        <View style={Styles.search}>
          {/* <TouchableOpacity>
            <EvilIcons name="search" size={32} color="#222222" />
          </TouchableOpacity> */}
        </View>

        {/* <Text style={Styles.myProfile}>My Profile</Text> */}

        <View style={Styles.profileHead}>
          <Image
            style={Styles.Profileimg}
            source={require('../../../assets/img/drress1.webp')}
          />

          <View style={Styles.matildabrownTextMAin}>
            <Text style={Styles.matildabrownText}>Matilda Brown</Text>
            <Text style={Styles.matildabrowngmailText}>
              matildabrown@mail.com
            </Text>
          </View>
        </View>

        <View style={Styles.datamain}>
          <View style={Styles.dataHead}>
            <View>
             <TouchableOpacity  onPress={() => navigation.navigate("My_Oeders")}><Text style={Styles.data1}>My orders</Text></TouchableOpacity>
              <Text style={Styles.data2}>Already have 12 orders</Text>
            </View>

            <View>
              <TouchableOpacity>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={30}
                  color="#9B9B9B"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={Styles.dataHead}>
            <View>
             <TouchableOpacity onPress={() => navigation.navigate("ShippingAddresses")}><Text style={Styles.data1}>Shipping addresses</Text></TouchableOpacity> 
              <Text style={Styles.data2}>3 ddresses</Text>
            </View>

            <View>
              <TouchableOpacity>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={30}
                  color="#9B9B9B"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={Styles.dataHead}>
            <View>
              <Text style={Styles.data1}>Payment methods</Text>
              <Text style={Styles.data2}>Visa **34</Text>
            </View>

            <View>
              <TouchableOpacity>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={30}
                  color="#9B9B9B"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={Styles.dataHead}>
            <View>
              <Text style={Styles.data1}>Promocodes</Text>
              <Text style={Styles.data2}>You have special promocodes</Text>
            </View>

            <View>
              <TouchableOpacity>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={30}
                  color="#9B9B9B"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={Styles.dataHead}>

            <TouchableOpacity  onPress={() => navigation.navigate("Rating")}>
              <Text style={Styles.data1}>My reviews</Text>
              <Text style={Styles.data2}>Reviews for 4 items</Text>
            </TouchableOpacity>

            <View>
              <TouchableOpacity>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={30}
                  color="#9B9B9B"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={Styles.dataHead}>
            <View>
              <Text style={Styles.data1}>Settings</Text>
              <Text style={Styles.data2}>Notifications, password</Text>
            </View>

            <View>
              <TouchableOpacity>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={30}
                  color="#9B9B9B"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: horizontalScale(15),
// backgroundColor:'#FFFFFF'
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: verticalScale(15),
  },
  myProfile: {
    fontFamily: 'Metropolis-Bold',
    fontSize: moderateScale(34),
    color: '#222222',
  },
  Profileimg: {
    width: horizontalScale(100),
    height: verticalScale(100),
    borderWidth: 1,
    borderRadius: moderateScale(50),
  },
  profileHead: {
    flexDirection: 'row',
    marginTop: verticalScale(15),
  },
  matildabrownTextMAin: {
    padding: horizontalScale(16),
    padding: verticalScale(16),
  },
  matildabrownText: {
    fontFamily: 'Metropolis-Bold',
    fontSize: moderateScale(22),
    color: '#222222',
  },
  matildabrowngmailText: {
    fontFamily: 'Metropolis-Bold',
    fontSize: moderateScale(14),
    color: '#9B9B9B',
  },
  dataHead: {
    paddingVertical:verticalScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   elevation: 0.2,
  },
  data1: {
    fontFamily: 'Metropolis-Bold',
    fontSize: moderateScale(20),
    lineHeight: 40,
    color: '#222222',
    marginTop: verticalScale(5),
  },
  data2: {
    fontFamily: 'Metropolis-Regular',
    fontSize: moderateScale(13),
    color: '#9B9B9B',
  },
  datamain: {
    fontFamily: 'Metropolis-Regular',
    marginTop: verticalScale(25),
  },
});
