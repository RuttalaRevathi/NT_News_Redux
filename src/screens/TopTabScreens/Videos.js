/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import {
    ActivityIndicator,
    FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import SubHeader from '../../components/SubHeader';
import { commonstyles } from '../../styles/commonstyles';
import getVideoAction from '../../redux/actions/getVideoAction';

const Videos = ({
    navigation,
<<<<<<< HEAD
    videoData,
    videoLoading,
=======
    videosData,
    videosLoading,
>>>>>>> d6475f5 (district categories)
    route,
}: Props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideoAction());
    }, []);
    // share function
<<<<<<< HEAD
    console.log('videoData', videoData?.data);
=======
    console.log('videosData', videosData?.data);
>>>>>>> d6475f5 (district categories)
    return (
        <SafeAreaView styles={commonstyles.container}>
            <SubHeader
                title={'వీడియోలు '}
                isMenu={false}
                isBook={false}
                isShare={true}
                leftBtnClick={() => navigation.goBack()}
                ShareClick={() => {
                    this.sharecall();
                }}
                BookClick={() => {
                    alert('BookMark   Clicked');
                }}
            />
            <ScrollView style={commonstyles.cateflist}>
                <View>
                    <View>
                        <FlatList
                            style={commonstyles.cateflist}
<<<<<<< HEAD
                            data={videoData?.data}
=======
                            data={videosData?.data}
>>>>>>> d6475f5 (district categories)
                            numColumns={2}
                            renderItem={({ item, index }) =>

                                <View style={{ flex: 1 }}>
                                    <View >
                                        <TouchableOpacity onPress={() => {
                                            navigation.navigate('VideoArticle', {
                                                item: item,
<<<<<<< HEAD
                                                detailsData: videoData?.data,
=======
                                                detailsData: videosData?.data,
>>>>>>> d6475f5 (district categories)
                                            });
                                        }}  >
                                            <View style={commonstyles.latestMainView}>
                                                <View style={commonstyles.latestsubView}>
                                                    <View>
                                                        <Image style={commonstyles.latestimgTag} source={{ uri: item?.web_featured_image }} />
                                                    </View>
                                                    <View>
                                                        <View style={{ backgroundColor: 'red', padding: 5, bottom: 55, left: 0, position: 'absolute' }}>
                                                            <Image style={{ height: 15, width: 25, borderRadius: 10 }}
                                                                source={require('../../Assets/Images/videoicon.png')} />
                                                        </View>
                                                        <Text numberOfLines={2} ellipsizeMode="tail"
                                                            style={commonstyles.latestTxtTag}>{item?.title?.rendered}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>



                            }

                        />

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

type Props = {
    videoData: Function,
    videoLoading: Boolean,
};

const mapStateToProps = state => ({
    videoData: state.videoReducer?.videoData,
    videoLoading: state.videoReducer?.videoLoading,
});
const mapDispatchToProps = {
    getVideoAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Videos);
