/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking, ScrollView, FlatList, Share, Dimensions } from 'react-native';
import { appThemeColor, commonstyles, Header_text } from '../styles/commonstyles';
import AutoHeightWebView from 'react-native-autoheight-webview';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { HeaderStyle } from '../styles/Header.Styles';
import HTMLView from 'react-native-htmlview';
import moment from 'moment';
import { connect, useDispatch } from 'react-redux';
import getRelatedAction from '../redux/actions/getRelatedAction';
const screenWidth = Dimensions.get('window').width;

// let decode = require('html-entities-decoder');

const Details = ({ navigation, relatedData, relatedLoading,
  sliderData,
  loading,
  latestNews,
  latestLoading, route }: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRelatedAction());
  }, []);
  console.log('item data', route?.params?.item);
  // let source1 = route?.params?.item?.content?.rendered?.replace(
  //   'lazyload',
  //   'text/javascript',
  // );
  return (
    <View style={commonstyles.container}>
      <View>
        <View style={HeaderStyle.subHeadercustom}>
          <View style={{ flex: 0.3 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={{ zIndex: 999 }}>
              <Image
                source={require('../Assets/Images/arrow.png')}
                style={{ width: 18, height: 18, top: 10 }}
              />
              {/* <MaterialIcons name="arrow-back" size={30} color={blackcolor} style={{  left: 10,zIndex: 999, }} /> */}
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.6,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              paddingTop: 5,
            }}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  'http://www.facebook.com/sharer.php?u=' +
                  this.state.data.link +
                  '%3Futm_source%3Dreferral%26utm_medium%3DFB%26utm_campaign%3Dsocial_share&app_id=369158533547966',
                );
              }}>
              <Image
                resizeMode="contain"
                source={require('../Assets/Images/facebook_share.png')}
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  'https://twitter.com/intent/tweet?url=' +
                  this.state.data.link,
                );
              }}>
              <Image
                resizeMode="contain"
                source={require('../Assets/Images/twitter_share.png')}
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  'whatsapp://send?text=' + this.state.data.link,
                );
              }}>
              <Image
                resizeMode="contain"
                source={require('../Assets/Images/whatsapp_share.png')}
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  'https://t.me/share?url=' + this.state.data.link,
                );
              }}>
              <Image
                resizeMode="contain"
                source={require('../Assets/Images/telegram_icon.png')}
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView
        ref={c => {
          this.scroll = c;
        }}>
        <View>
          <View>
            <Image
              source={{ uri: route?.params?.item?.web_featured_image }}
              style={commonstyles.Detailslargecard}
            />
          </View>

          <View style={{ margin: 10 }}>
            <HTMLView
              value={'<p>' + route?.params?.item?.title.rendered + '</p>'}
              stylesheet={headerStyles}
            />
          </View>

          <View style={{ flexDirection: 'row', start: 10 }}>
            <Text style={commonstyles.detailTime}>
              {moment(route?.params?.item?.date_gmt).format('MMMM DD , YYYY')} /{' '}
            </Text>
            <Text style={commonstyles.detailTime}>
              {moment(route?.params?.item?.modified)
                .utcOffset('+05:30')
                .format('hh.mm a')}{' '}
              IST{' '}
            </Text>
          </View>
          {/* description */}

          <View
            style={{
              width: screenWidth - 10,
              justifyContent: 'center',
              pointerEvents: 'none',
              paddingLeft: 10,
            }}>
            {/* <AutoHeightWebView
              androidHardwareAccelerationDisabled
              customStyle={`
                                  * {
                                    font-family: 'Mandali-Bold';
                                    line-height: 1.5;
                                    -webkit-user-select: none;
                                      -webkit-touch-callout: none; 
                                     }
                                  p {
                                    font-size: 16px;
                                    text-align:left;
                                    margin:10;
                                    font-family:'Mandali-Regular';
                                    line-height:35px
                                                                  }
                                                                  p img{
                                                                    width:100%;
                                                                    height:inherit
                                                                  }
                                                                  p iframe{
                                                                    width:100%;
                                                                    height:inherit
                                                                  }
                                                                 
                                `}
              source={{
                html: (source1 +=
                  "<style>@import url('https://fonts.googleapis.com/css2?family=Mandali&display=swap');p strong, span, p span{font-family: 'Mandali', sans-serif;}p,li{font-family: 'Mandali', sans-serif;line-height:1.6;padding:0px 8px;color:#000;font-weight:500;font-size:18px}</style>"),
                baseUrl: 'https://twitter.com',
              }}
              scalesPageToFit={false}
              viewportContent={'width=device-width, user-scalable=no'}
            /> */}
          </View>
          {/* Related News */}
          <View>
            <View style={{ marginLeft: 10, marginTop: 10 }}>
              <Text style={commonstyles.relatedText}>Related News</Text>
            </View>
            {/* Related news FlatList */}

            <View >
              <FlatList
                showsHorizontalScrollIndicator={false}
                persistentScrollbar={false}
                data={relatedData?.data}
                renderItem={({ item, index }) => (
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                      navigation.navigate('Details', {
                          item: item,
                          // DetailsData: relatedData,
                        });
                      }}>
                      <View style={commonstyles.cardView}>
                        <View style={commonstyles.cateviewImg}>
                          <Image
                            source={{ uri: item?.web_featured_image }}
                            style={commonstyles.cateImage}
                          />
                        </View>
                        <View style={commonstyles.cateviewText}>
                          <Text
                            numberOfLines={2}
                            ellipsizeMode="tail"
                            style={commonstyles.latestText}>
                            {item?.title?.rendered}
                          </Text>
                          <View style={commonstyles.timeview}>
                            <Text style={commonstyles.latesttime}>
                              {moment(item?.date_gmt).format('DD-MMM-YYYY')}{' '}
                              ,{' '}
                            </Text>
                            <Text style={commonstyles.latesttime}>
                              {moment(item?.modified)
                                .utcOffset('+05:30')
                                .format('hh.mm a')}{' '}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
              />
            </View>

          </View>



        </View>
      </ScrollView>
      {/* {this.state.isLoading == false && (
          <View style={commonstyles.loading}>
            <ActivityIndicator color={appThemeColor} size="large" />
          </View>
        )} */}
    </View>
  );
};
const styles = StyleSheet.create({
  p: {
    color: '#000',
    fontSize: 22,
    fontFamily: 'Mandali-Regular',
    lineHeight: 30,
  },
});
const headerStyles = StyleSheet.create({
  p: {
    color: Header_text,
    fontSize: 24,
    fontFamily: 'Mandali-Bold',
    lineHeight: 30,
  },
});
const RelatedTextStyles = StyleSheet.create({
  p: { color: '#000', fontSize: 20, fontFamily: 'JIMS', lineHeight: 25, top: 10 },
});
type Props = {
  relatedData: Function,
  relatedLoading: Boolean,
  sliderData: Function,
  loading: Boolean,
  latestNews: Function,
  latestLoading: Boolean,

};

const mapStateToProps = state => ({
  relatedData: state.relatedReducer?.relatedData,
  relatedLoading: state.relatedReducer?.relatedLoading,
  sliderData: state.sliderReducer?.sliderData,
  loading: state.sliderReducer?.loading,
  latestNews: state.latestNewsReducer?.latestNews,
  latestLoading: state.latestNewsReducer?.latestLoading,
});
const mapDispatchToProps = {
  getRelatedAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Details);
