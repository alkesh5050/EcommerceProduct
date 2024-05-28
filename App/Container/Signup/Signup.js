import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Signup() {
    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
            />
            <FontAwesome name="angle-left" size={45} color="black" />
            <Text style={styles.fonts}>Signup</Text>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder='Name'
                    autoCapitalize="none"
                    placeholderTextColor='#9B9B9B'

                />
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    autoCapitalize="none"
                    placeholderTextColor='#9B9B9B'

                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    autoCapitalize="none"
                    placeholderTextColor='#9B9B9B'

                />
            </View>
            <View style={styles.arow}>
                <Text style={styles.text}>Already have an account ? </Text>
                <FontAwesome name="long-arrow-right" size={17} color="red" />
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={{fontSize:17,color:'white'}}>SIGN UP</Text>
            </TouchableOpacity>

            <Text style={styles.textcenter}>Or sign up with social account</Text>
            <View style={styles.icon}>
                <TouchableOpacity style={styles.webicon}><FontAwesome name="google" size={28} color="red" /></TouchableOpacity>
                <TouchableOpacity style={styles.webicon}><FontAwesome name="facebook-square" size={28} color="blue" /></TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 18,
        backgroundColor: '#F9F9F9',
        paddingTop:13
    },
    fonts: {
        color: 'black',
        fontSize: 40,
        fontFamily: 'Metropolis-Bold',
        marginBottom:40,
        marginTop:20
    },
    input: {
        // width: 350,
    
        height: 60,
        backgroundColor: '#FFFFFF',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 10,
        fontSize: 14,
        fontWeight: '500',
        elevation: 2
    },
    button: {
        width: 350,
        height: 55,
        backgroundColor: '#DB3022',
        color: 'white',
        borderRadius: 50,
        alignItems: 'center',
        elevation: 2,
        justifyContent:'center'

    },
    icon: {
        // display: 'flex',
        flexDirection: 'row',
        padding: 10,
        // alignItems: 'center',
        justifyContent: 'center',
        columnGap: 20,
        marginTop: 30

    },
    text: {
        color: 'black',
    },
    arow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10,
        alignItems: 'center'
    },
    textcenter:{
        color: 'black',
         marginTop: 100,
          textAlign: 'center'
    },
    webicon:{
        backgroundColor:'#FFFFFF' ,
        width:85,
        height:70,
        alignItems:'center',
       justifyContent:'center',
       borderRadius:17,
    //  shadowColor: 'rgba(0,0,0, .4)', // IOS
       elevation: 2, // Android
    }
})

// import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, } from 'react-native'
// import React from 'react'
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

// export default function Signup() {
//     return (
//         <View style={styles.container}>
//             <StatusBar
//                 backgroundColor="#61dafb"

//             />
//             <Text>hhhhh</Text>
//         </View>

// <View style={{ backgroundColor: '#F9F9F9', }}>
//     <FontAwesome name="angle-left" size={50} color="black" />
//     <Text style={{ color: 'black', fontSize: 40, fontFamily: 'Metropolis-Bold' }}> Signup</Text>

//     <TextInput
//         style={styles.input}
//         placeholder='Name'
//         autoCapitalize="none"
//         placeholderTextColor='#9B9B9B'

//     />
//     <TextInput
//         style={styles.input}
//         placeholder='Email'
//         autoCapitalize="none"
//         placeholderTextColor='#9B9B9B'

//     />
//     <TextInput
//         style={styles.input}
//         placeholder='Password'
//         autoCapitalize="none"
//         placeholderTextColor='#9B9B9B'

//     />
//     <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', padding: 10, alignItems: 'center' }}>
//         <Text style={{ color: 'black', }}>Already have an account ? </Text>
//         <FontAwesome name="long-arrow-right" size={28} color="red" />
//     </View>
//     <TouchableOpacity style={styles.button}>
//         <Text>SIGN UP</Text>
//     </TouchableOpacity>
//     <Text style={{color:'black',paddingTop:160}}>Or sign up with social account</Text>
//     <View style={styles.icon}>
//     <FontAwesome name="google" size={28} color="red" />
//     <FontAwesome name="facebook-square" size={28} color="blue" />
//     </View>


// </View>

//     )
// }


// const styles = StyleSheet.create({
//     input: {
//         width: 350,
//         height: 55,
//         backgroundColor: '#FFFFFF',
//         margin: 10,
//         padding: 8,
//         color: 'white',
//         borderRadius: 10,
//         fontSize: 14,
//         fontWeight: '500',

//     },
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     button: {
//         width: 350,
//         height: 55,
//         backgroundColor: '#DB3022',
//         margin: 10,
//         padding: 18,
//         color: 'white',
//         borderRadius: 50,
//         alignItems: 'center',
//     },
//     icon: {
//         display: 'flex',
//         flexDirection: 'row',
//         padding: 10,
//         alignItems: 'center',
//         justifyContent: 'center',
//         columnGap: 20,


//     }
// })