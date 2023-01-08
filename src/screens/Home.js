/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Swiper from 'react-native-web-swiper';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView, ActivityIndicator } from 'react-native';
import getSliderAction from '../redux/actions/getSliderAction';


import {
  appThemeColor,
  blackcolor,
  commonstyles,
  ITEM_WIDTH,
  SLIDER_WIDTH,
} from '../styles/commonstyles';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Spinner from 'react-native-loading-spinner-overlay';
import Ionicons from 'react-native-vector-icons/Ionicons';
import getCinemaAction from '../redux/actions/getCinemaAction';
import getRasiPhalaluAction from '../redux/actions/getRasiPhalaluAction';
import HomeUI from '../components/HomeUI';
import getLatestNewsAction from '../redux/actions/getLatestNewsAction';
import getCartoonAction from '../redux/actions/getCartoonAction';
import getHealthAction from '../redux/actions/getHealthAction';
import getHyderabadAction from '../redux/actions/getHyderabadAction';
import getTelanganaAction from '../redux/actions/getTelanganaAction';
import getApAction from '../redux/actions/getApAction';
import getNationalAction from '../redux/actions/getNationalAction';
import getInterNationalAction from '../redux/actions/getInterNationalAction';
import getSportsAction from '../redux/actions/getSportsAction';
import getBusinessAction from '../redux/actions/getBusinessAction';
import getNriAction from '../redux/actions/getNriAction';
import getEditPageAction from '../redux/actions/getEditPageAction';
import getZindagiAction from '../redux/actions/getZindagiAction';
import getBathukammaAction from '../redux/actions/getBathukammaAction';
import getAgricultureAction from '../redux/actions/getAgricultureAction';
import getCookingAction from '../redux/actions/getCookingAction';
import getVaasthuAction from '../redux/actions/getVaasthuAction';
const Home = ({
  navigation,
  sliderData,
  loading,
  latestNews,
  latestLoading,
  cinemaData,
  cinemaLoading,
  rasiPhalaluData,
  rasiPhalaluLoading,
  cartoonData,
  cartoonLoading,
  healthData,
  healthLoading,
  hyderabadData,
  hyderabadLoading,
  telanganaData,
  telanganaLoaing,
  apData,
  apLoading, nationalData,
  nationalLoading, interNationalData,
  interNationalLoading, sportsData,
  sportsLoading, businessData,
  businessLoading, nriData,
  nriLoading, editPageData,
  ediPageLoading, zindagiData,
  zindagiLoading, bathukammaData,
  bathukammaLoading, agricultureData,
  agricultureLoading, cookingData,
  cookingLoading, vaasthuData,
  vaasthuLoading,
}: Props) => {

  // let decode = require('html-entities-decoder');
  const isCarousel = useRef(null);
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const [filteredDetails, setFilteredDetails] = useState([]);
  const [totalLoading, setTotalLoading] = useState(false);
  useEffect(() => {
    dispatch(getSliderAction());
    dispatch(getLatestNewsAction());
    dispatch(getCinemaAction());
    dispatch(getRasiPhalaluAction());
    dispatch(getCartoonAction());
    dispatch(getHealthAction());
    dispatch(getHyderabadAction());
    dispatch(getTelanganaAction());
    dispatch(getApAction());
    dispatch(getNationalAction());
    dispatch(getInterNationalAction());
    dispatch(getSportsAction());
    dispatch(getBusinessAction());
    dispatch(getNriAction());
    dispatch(getEditPageAction());
    dispatch(getZindagiAction());
    dispatch(getBathukammaAction());
    dispatch(getAgricultureAction());
    dispatch(getCookingAction());
    dispatch(getVaasthuAction());

    var newArray = sliderData?.data?.filter(function (elem, pos) {
      return sliderData?.data?.indexOf(elem) == pos;
    });
    setFilteredDetails(newArray);

    if (loading === false && latestLoading === false && cinemaLoading === false &&
       rasiPhalaluLoading === false) {
      setTotalLoading(false);
    }
    else {
      setTotalLoading(true);
    }
  }, []);

  return (

    <ScrollView>
      <View style={{padding:10}}>
        {/* Spinner */}
        <Spinner
          //visibility of Overlay Loading Spinner
          visible={loading}
          //Text with the Spinner
          textContent={'Loading...'}
          //Text style of the Spinner Text
          textStyle={{ color: '#FFF' }}
        />
        {/* Slider */}
        <View>
          <Carousel
            layout="default"
            ref={isCarousel}
            data={sliderData?.data}
            // loop={true}
            renderItem={({ item, index }) => (
              <TouchableOpacity
              onPress={() => {
                navigation.navigate('Details',{item:item,detailsData:sliderData?.data});
              }}>
              <View style={commonstyles.sliderView} key={index}>
                <Image
                  source={{uri: item.web_featured_image}}
                  style={commonstyles.slidercard}
                />
                <View
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }}>
                  <Text
                      style={{
                        color: '#FFFFFF',
                        fontSize: 18,
                        fontFamily: 'Mandali-Bold',
                      }}>
                      {index+1}/{sliderData?.data?.length}
                    </Text>
                </View>
                <LinearGradient
                  colors={[
                    'rgba(0,0,0,0)',
                    'rgba(0,0,0,.8)',
                    'rgba(0,0,0,1)',
                  ]}
                  style={commonstyles.sliderGradient}>
                  <Text style={commonstyles.slidertext}>
                    {item.title.rendered}
                  </Text>
                </LinearGradient>
              </View>
            </TouchableOpacity>
            )}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            onSnapToItem={index => setIndex(index)}
            useScrollView={true}
          />
        <Pagination
            style={commonstyles.pagination}
            carouselRef={isCarousel}
            dotStyle={{display: 'none'}}
            enableMomentum={true}
            
          />

        </View>
        {/* LatestNews */}
        <HomeUI
          categoryName="తాజావార్తలు"
          data={latestNews?.data}
          navigationScreen="LatestNews"
          navigation={navigation}
        />
        {/* Cinema */}
        <HomeUI
          categoryName="సినిమా"
          data={cinemaData?.data}
          navigationScreen="సినిమా"
          navigation={navigation}
        />
        {/* RasiPhalalu */}
        <HomeUI
          categoryName="రాశి ఫలాలు"
          data={healthData?.data}
          navigationScreen="రాశి ఫలాలు"
          navigation={navigation}
        />
        {/* Cartoon */}
        <View>
          {/* Cartoon   text*/}
          <View style={commonstyles.categoryMview}>
            <View style={commonstyles.categoryView}>
              <View>
                <Text style={commonstyles.Category}>{'కార్టూన్‌'}</Text>
              </View>
              <View style={commonstyles.dot}>
                <FontAwesome name="circle" size={10} color={appThemeColor} />
              </View>
            </View>
          </View>
          {/* Cartoon  Cards*/}
          <View>
            <View>
              <FlatList
                style={[commonstyles.bgDarkGrey]}
                data={cartoonData?.data}
                showsHorizontalScrollIndicator={true}
                horizontal={true}
                renderItem={({ item, index }) => (
                  <View style={{ flex: 1 }}>
                    <View style={commonstyles.CartoonCard}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('CartoonArticle', {
                            item: item,
                          });
                        }}>
                        <Image
                          source={{ uri: item.web_featured_image }}
                          style={commonstyles.cartoonimg}
                        />
                        <View>
                          <Text
                            numberOfLines={2}
                            ellipsizeMode="tail"
                            style={commonstyles.SportText}>
                            {item.title.rendered}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              />
              {/* more text */}
              <View style={commonstyles.moreview}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('కార్టూన్‌');
                  }}>
                  <Text style={commonstyles.moretext}>More . . .</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        {/* Health */}
        <HomeUI
          categoryName="ఆరోగ్యం"
          data={healthData?.data}
          navigationScreen="ఆరోగ్యం"
          navigation={navigation}
        />
        {/* Hyderabad */}
        <HomeUI
          categoryName="హైదరాబాద్‌"
          data={healthData?.data}
          navigationScreen="హైదరాబాద్‌"
          navigation={navigation}
        />
        {/* telangana */}
        <HomeUI
          categoryName="తెలంగాణ"
          data={healthData?.data}
          navigationScreen="తెలంగాణ"
          navigation={navigation}
        />
        {/* ap */}
        <HomeUI
          categoryName="ఏపీ"
          data={healthData?.data}
          navigationScreen="ఏపీ"
          navigation={navigation}
        />
        {/* national */}
        <HomeUI
          categoryName="జాతీయం"
          data={healthData?.data}
          navigationScreen="జాతీయం"
          navigation={navigation}
        />
        {/* International */}
        <HomeUI
          categoryName="అంతర్జాతీయం"
          data={healthData?.data}
          navigationScreen="అంతర్జాతీయం"
          navigation={navigation}
        />
        {/* sports */}
        <HomeUI
          categoryName="స్పోర్ట్స్"
          data={healthData?.data}
          navigationScreen="స్పోర్ట్స్"
          navigation={navigation}
        />
        {/* Business */}
        <HomeUI
          categoryName="బిజినెస్"
          data={healthData?.data}
          navigationScreen="బిజినెస్"
          navigation={navigation}
        />
        {/* Nri */}
        <HomeUI
          categoryName="ఎన్‌ఆర్‌ఐ"
          data={healthData?.data}
          navigationScreen="ఎన్‌ఆర్‌ఐ"
          navigation={navigation}
        />
        {/* EditPage */}
        <HomeUI
          categoryName="ఎడిట్‌ పేజీ"
          data={healthData?.data}
          navigationScreen="ఎడిట్‌ పేజీ"
          navigation={navigation}
        />
        {/* Zindagi */}
        <HomeUI
          categoryName="జిందగీ"
          data={healthData?.data}
          navigationScreen="జిందగీ"
          navigation={navigation}
        />
        {/* Bathukamma */}
        <HomeUI
          categoryName="బతుకమ్మ"
          data={healthData?.data}
          navigationScreen="బతుకమ్మ"
          navigation={navigation}
        />
        {/* Agriculture */}
        <HomeUI
          categoryName="వ్యవసాయం"
          data={healthData?.data}
          navigationScreen="వ్యవసాయం"
          navigation={navigation}
        />
        {/* Cooking */}
        <HomeUI
          categoryName="వంటలు"
          data={healthData?.data}
          navigationScreen="వంటలు"
          navigation={navigation}
        />
        {/* Vaasthu */}
        <HomeUI
          categoryName="వాస్తు"
          data={healthData?.data}
          navigationScreen="వాస్తు"
          navigation={navigation}
        />
      </View>



    </ScrollView>
  );

};

type Props = {
  sliderData: Function,
  loading: Boolean,
  latestNews: Function,
  latestLoading: Boolean,
  cinemaData: Function,
  cinemaLoading: Boolean,
  rasiPhalaluData: Function,
  rasiPhalaluLoading: Boolean,
  cartoonData: Function,
  cartoonLoading: Boolean,
  healthData: Function,
  healthLoading: Boolean,
  hyderabadData: Function,
  hyderabadLoading: Boolean,
  telanganaData: Function,
  telanganaLoaing: Boolean,
  apData: Function,
  apLoading: Boolean, nationalData: Function,
  nationalLoading: Boolean,
  interNationalData: Function,
  interNationalLoading: Boolean,
  sportsData: Function,
  sportsLoading: Boolean,
  businessData: Function,
  businessLoading: Boolean,
  nriData: Function,
  nriLoading: Boolean,
  editPageData: Function,
  ediPageLoading: Boolean,
  zindagiData: Function,
  zindagiLoading: Boolean,
  bathukammaData: Function,
  bathukammaLoading: Boolean,
  agricultureData: Function,
  agricultureLoading: Boolean,
  cookingData: Function,
  cookingLoading: Boolean,
  vaasthuData: Function,
  vaasthuLoading: Boolean,
};

const mapStateToProps = state => ({
  sliderData: state.sliderReducer?.sliderData,
  loading: state.sliderReducer?.loading,
  latestNews: state.latestNewsReducer?.latestNews,
  latestLoading: state.latestNewsReducer?.latestLoading,
  cinemaData: state.cinemaReducer?.cinemaData,
  cinemaLoading: state.cinemaReducer?.cinemaLoading,
  rasiPhalaluData: state.rasiPhalauReducer?.rasiPhalaluData,
  rasiPhalaluLoading: state.rasiPhalauReducer?.rasiPhalaluLoading,
  cartoonData: state.cartoonReducer?.cartoonData,
  cartoonLoading: state.cartoonReducer?.cartoonLoading,
  healthData: state.healthReducer?.healthData,
  healthLoading: state.healthReducer?.healthLoading,
  hyderabadData: state.hyderabadReducer?.hyderabadData,
  hyderabadLoading: state.hyderabadReducer?.hyderabadLoading,
  telanganaData: state.telanganaReducer?.telanganaData,
  telanganaLoaing: state.telanganaReducer?.telanganaLoaing,
  apData: state.apReducer?.apData,
  apLoading: state.apReducer?.apLoading,
  nationalData: state.nationalReducer?.nationalData,
  nationalLoading: state.nationalReducer?.nationalLoading,
  interNationalData: state.interNationalReducer?.interNationalData,
  interNationalLoading: state.interNationalReducer?.interNationalLoading,
  sportsData: state.sportsReducer?.sportsData,
  sportsLoading: state.sportsReducer?.sportsLoading,
  businessData: state.businessReducer?.businessData,
  businessLoading: state.businessReducer?.businessLoading,
  nriData: state.nriReducer?.nriData,
  nriLoading: state.nriReducer?.nriLoading,
  editPageData: state.editPageReducer?.editPageData,
  ediPageLoading: state.editPageReducer?.ediPageLoading,
  zindagiData: state.zindagiReducer?.zindagiData,
  zindagiLoading: state.zindagiReducer?.zindagiLoading,
  bathukammaData: state.bathukammaReducer?.bathukammaData,
  bathukammaLoading: state.bathukammaReducer?.bathukammaLoading,
  agricultureData: state.agricultureReducer?.agricultureData,
  agricultureLoading: state.agricultureReducer?.agricultureLoading,
  cookingData: state.cookingReducer?.cookingData,
  cookingLoading: state.cookingReducer?.cookingLoading,
  vaasthuData: state.vaasthuReducer?.vaasthuData,
  vaasthuLoading: state.vaasthuReducer?.vaasthuLoading,
});
const mapDispatchToProps = {
  getSliderAction,
  getLatestNewsAction,
  getCinemaAction,
  getRasiPhalaluAction,
  getCartoonAction,
  getHealthAction,
  getHyderabadAction,
  getTelanganaAction,
  getApAction,
  getNationalAction,
  getInterNationalAction,
  getSportsAction,
  getBusinessAction,
  getNriAction,
  getEditPageAction,
  getZindagiAction,
  getBathukammaAction,
  getAgricultureAction,
  getCookingAction,
  getVaasthuAction,


};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
