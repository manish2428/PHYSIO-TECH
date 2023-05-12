import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Dr_info = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={Style.container}>
     
      {/* <View style={Style.back_profile_help}>
        <View style={[Style.top_left,{float:'left',marginLeft:0}]}><Text>B</Text></View><View style={Style.top_left}><Text>My Profile</Text></View>
        <View style={[Style.top_left,{marginLeft:110}]}><Text>@Help</Text></View>
      </View> */}
      <View style={Style.frst_container}>
        <View style={Style.inside_frst_container}>
          <View style={Style.img_inside_frst_cntnr}>
            <Image
              source={{
                uri: 'https://st.depositphotos.com/60655086/52863/v/600/depositphotos_528632666-stock-illustration-black-doctor-medic-male-white.jpg',
              }}
              style={{width: 105, height: 100,borderRadius:70}}
            />
          </View>
          <View style={Style.txt_inside_frst_cntnr}>
            <View>
              <Text style={Style.txt_header}>Dr Manish Yadav</Text>
            </View>
            <View style={Style.txt_footer1}>
              <Text style={{fontSize: 16, color: '#393939'}}>Homeopath</Text>
            </View>
            <View style={Style.txt_footer2}>
              <Text style={{fontSize: 16, color: '#393939'}}>MBBS</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[Style.frst_container, Style.scnd_container]}>
        <View
          style={[
            Style.inside_frst_container,
            {width: 360, height: 145},
            Style.attition_to_scnd_cntnr,
          ]}>
          <View style={Style.inside_scnd_cntnr}>
            <Text style={{color: 'black', fontSize: 20}}>Clinica Details</Text>
          </View>
          <View style={Style.inside_scnd_cntnr_txt}>
            <View>
              <Text style={{fontSize: 20}}>Manish</Text>
            </View>
            <View>
              <Text style={{fontSize: 16}}>201014</Text>
              <Text style={{fontSize: 16}}>Phone: 8658202125</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[Style.frst_container, Style.scnd_container, {height: 300,marginBottom:20}]}>
        <View style={Style.inside_frst_container}>
          <View style={Style.inside_payment}>
            <Text style={{fontSize: 20, color: 'black'}}>Payment Method</Text>
            <Text style={{marginTop: 10}}>Please select method of payment</Text>
          </View>
          <View style={Style.upi_bank}>
            <View style={Style.upi}>
              {/* <View Style={{height:40,width:40,color:'pink',marginTop:50}}><Text>Logo</Text></View> */}
              <View style={Style.bank_logo}>
              <Image
              source={{
                uri: 'https://pixlok.com/wp-content/uploads/2021/01/UPI_logo_PNG-300x300.jpg',
              }}
              style={{width: 80, height: 80,borderRadius:10}}
            />
              </View>
              <View style={{marginLeft: 70, marginTop: 30}}>
                <Text style={{fontSize: 20}}>UPI Payment</Text>
              </View>
            </View>

            <View style={Style.bank}>
              <View style={Style.bank_logo}>
              <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUAlrXxcmo8mYMPW-sGJJ7w37BY6kYttaCTQ&usqp=CAU',
              }}
              style={{width: 50, height: 50,borderRadius:10,marginTop:10,marginLeft:5}}
            />
              </View>
              <View style={{marginTop: 20, marginLeft: 70}}>
                <Text style={{fontSize: 20}}>Bank Account</Text>
                <Text style={{fontSize: 16}}>Account Numner -</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
    {/* </LinearGradient> */}
    </ScrollView>
  );
};

export default Dr_info;

const Style = StyleSheet.create({
  back_profile_help:{
    display:'flex',
    flexDirection:'row',
    
  },
  top_left:{
   backgroundColor:"pink",
   marginTop:0,
   padding:8,
   marginBottom:80,
   
  },

  container: {
    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:'white'
    
    
  },
  frst_container: {
    marginTop:140,
    height: 300,
    width: 380,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 30,
    shadowOpacity: 20,
  },
  scnd_container: {
    marginTop: 15,
    height: 165,
  },
  inside_frst_container: {
    display: 'flex',
    backgroundColor: '#f8f9f5',
    height: 280,
    width: 360,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 10,
    marginLeft: 10,
  },
  img_inside_frst_cntnr: {
    height: 100,
    width: 105,
    backgroundColor: 'grey',
    borderRadius: 70,
    marginBottom: 10,
  },
  txt_inside_frst_cntnr: {
    height: 100,
    width: 330,
    backgroundColor: '#f5f5f5',
    marginTop: 7,
    borderRadius: 20,
  },
  txt_header: {
    color: 'black',
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
  },
  txt_footer1: {
    marginLeft: 10,
    marginTop: 10,
  },
  txt_footer2: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 1,
  },
  attition_to_scnd_cntnr: {
    backgroundColor: 'white',
  },
  inside_scnd_cntnr: {
    width: 340,
    marginBottom: 30,
  },
  inside_scnd_cntnr_txt: {
    width: 340,
  },
  inside_payment: {
    height: 60,
    width: 360,
    backgroundColor: 'white',
  },
  upi_bank: {
    width: 360,
    height: 200,
    // backgroundColor: 'pink',
    display: 'flex',
    flexDirection: 'column',
  },
  upi: {
    width: 360,
    height: 80,
    display: 'flex',
    flexDirection: 'row',
  },
  bank: {
    width: 360,
    height: 80,
    display: 'flex',
    flexDirection: 'row',
  },
  bank_logo: {
    width: 80,
    height: 80,
    borderRadius: 10,
  }

});
