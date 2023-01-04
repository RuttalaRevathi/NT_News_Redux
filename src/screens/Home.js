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
import getLatestNewsAction from '../redux/actions/getLatestNewsAction';
import moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import getCinemaAction from '../redux/actions/getCinemaAction';
import getRasiPhalaluAction from '../redux/actions/getRasiPhalaluAction';
import HomeUI from '../components/HomeUI';
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
}: Props) => {
  // let decode = require('html-entities-decoder');
  const isCarousel = useRef(null);
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const [filteredDetails, setFilteredDetails] = useState([]);
  useEffect(() => {
    dispatch(getSliderAction());
    dispatch(getLatestNewsAction());
    dispatch(getCinemaAction());
    dispatch(getRasiPhalaluAction());
    var newArray = sliderData?.data?.filter(function (elem, pos) {
      return sliderData?.data?.indexOf(elem) == pos;
    });
    setFilteredDetails(newArray);
  }, []);

  return (

    <ScrollView>
      <View style={{ flex: 1 }}>
        {/* {latestLoading === false && (
                    <View style={commonstyles.loadingview}>
              <ActivityIndicator color={appThemeColor} size="large" />
            </View>
        )} */}
        {/* Slider */}
        <View>
          <Carousel
            layout="tinder"
            ref={isCarousel}
            data={sliderData?.data}
            loop={true}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Details');
                }}>
                <View style={commonstyles.sliderView} key={index}>
                  <Image
                    source={{ uri: item.web_featured_image }}
                    style={commonstyles.slidercard}
                  />
                  <LinearGradient
                    colors={['rgba(0,0,0,0)', 'rgba(0,0,0,.8)', 'rgba(0,0,0,1)']}
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
            dotsLength={sliderData?.data?.length - 5}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              marginVertical: 0,
              backgroundColor: appThemeColor,
            }}
            inactiveDotStyle={{
              backgroundColor: 'rgba(0, 0, 0, 0.92)',
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            tappableDots={true}
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
        {/* Cinema */}
        <HomeUI
          categoryName="రాశి ఫలాలు"
          data={rasiPhalaluData?.data}
          navigationScreen="రాశి ఫలాలు"
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
});
const mapDispatchToProps = {
  getSliderAction,
  getLatestNewsAction,
  getCinemaAction,
  getRasiPhalaluAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
