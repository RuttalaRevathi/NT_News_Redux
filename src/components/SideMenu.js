/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, Alert, SafeAreaView, TouchableHighlight, Linking } from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';
import { appThemeColor, blackcolor, graycolor, whitecolor } from '../styles/commonstyles';
import { sideMenuStyle } from '../styles/SideMenuStyles';
import { ScrollView } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';

export default class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DrawerItem: false,
        };
    }
    NestedDrawerItem = () => {
        if (this.state.DrawerItem === true) {
            this.setState({ DrawerItem: false });
        }
        else {
            this.setState({ DrawerItem: true });
        }
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={{ flex: 1, paddingTop: 20, backgroundColor: graycolor }}>
                    <View style={{ backgroundColor: appThemeColor, flexDirection: 'row' }}>
                        <View style={{ width: '90%' }}>
                            <Text style={sideMenuStyle.sectionsText}>Sections</Text>
                        </View>
                        <View >
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.goBack();
                            }}>
                                <AntDesign name="close" size={23} color={whitecolor} style={{ top: 5, alignSelf: 'flex-end', justifyContent: 'center' }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView style={{ paddingBottom: 50 }}>
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/home.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="హోమ్"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Home');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/topnews.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="లేటెస్ట్ న్యూస్"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Hyderabad');
                            }}
                        />

                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/horoscope.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="సినిమా"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('సినిమా');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/horoscope.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="రాశి ఫలాలు"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Hyderabad');
                            }}
                        />

                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/cartoon.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="కార్టూన్‌"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('National');
                            }}
                        />

                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/health.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="ఆరోగ్యం"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('InterNational');
                            }}
                        />

                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/hyderabad.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="హైదరాబాద్‌"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Telangana');
                            }}
                        />

                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/telangana.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="తెలంగాణ"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Ap');
                            }}
                        />

                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/ap.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="ఏపీ"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Cinema');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/national.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="జాతీయం"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Sports');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/international.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="అంతర్జాతీయం"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Chinthana');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/sports.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="స్పోర్ట్స్"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Education');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/business.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="బిజినెస్"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Business');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/nri.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="ఎన్‌ఆర్‌ఐ"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Special');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/photos.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="ఫొటోలు"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Nri');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/video.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="వీడియోలు"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('LifeStyle');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/editpage.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="ఎడిట్‌ పేజీ"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Photos');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/zindagi.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="జిందగీ"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Videos');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/bathukamma.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="బతుకమ్మ"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Science');
                            }}
                        />

                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/agriculture.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="వ్యవసాయం"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Cartoon');
                            }}
                        />

                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/cooking.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="వంటలు"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('EverGreen');
                            }}
                        />

                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/vaasthu.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="వాస్తు"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Crime');
                            }}
                        />

                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/more.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label={({ color }) => (
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}>
                                    <View>
                                        <Text style={sideMenuStyle.text}>జిల్లాలు</Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.NestedDrawerItem(this.setState({ shouldShow: !this.state.shouldShow }));
                                        }}>
                                        <AntDesign
                                            name={this.state.shouldShow ? "upcircleo" : "downcircleo"}
                                            size={20}
                                            color={blackcolor}
                                            style={{ top: 12 }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            )}
                            labelStyle={sideMenuStyle.text}
                        />
                        {this.state.DrawerItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}

                                label="ఆదిలాబాద్"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('ఆదిలాబాద్');
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}

                                label="హైదరాబాద్"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('హైదరాబాద్');
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}
                                label="కరీంనగర్‌"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('కరీంనగర్‌');
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}

                                label="ఖమ్మం"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('ఖమ్మం');
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}

                                label="మెహబూబ్ నగర్"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('మెహబూబ్ నగర్');
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}

                                label="మెదక్"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('మెదక్');
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}

                                label="నల్గొండ"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('నల్గొండ');
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}

                                label="నిజామాబాద్"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('నిజామాబాద్');
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}

                                label="రంగారెడ్డి"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('రంగారెడ్డి');
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}

                                label="వరంగల్"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('వరంగల్');
                                }}
                            />
                        )}
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/paper.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="E-PAPER"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                Linking.openURL('https://epaper.ntnews.com/');
                            }}
                        />
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/contact.png')} style={sideMenuStyle.icon} />
                            }
                            label="Contact Us"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Contact');
                            }}
                        />
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/about.png')} style={sideMenuStyle.icon} />
                            }
                            label="About Us"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('About');
                            }}
                        />
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/privacy.png')} style={sideMenuStyle.icon} />
                            }
                            label="Privacy Policy"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Privacy');
                            }}
                        />
                        {/* <DrawerItem style={[sideMenuStyle.item,{paddingBottom:40}]}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/conditions.png')} style={sideMenuStyle.icon} />
                            }
                            label="Terms and Conditions"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate("Terms")
                            }}
                        /> */}
                        <DrawerItem style={[sideMenuStyle.item]}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/conditions.png')} style={sideMenuStyle.icon} />
                            }
                            // label={({ focused, color }) => (
                            //     <Text style={{color: appThemeColor,
                            //         fontFamily: 'Mandali-Regular',
                            //         fontSize: 16,}}>Terms & Conditions</Text>
                            // )}
                            label="Terms and Conditions"

                            labelStyle={[sideMenuStyle.text]}
                            onPress={() => {
                                this.props.navigation.navigate('Terms');
                            }}
                        />







                    </ScrollView>

                </View >
            </SafeAreaView>
        );

    }


}
