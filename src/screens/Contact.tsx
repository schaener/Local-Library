import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, TouchableOpacity, View, Linking} from 'react-native';
import {FlexBox, Heading, WelcomeSection, Button} from '../components';
import {Colors, Fonts, Routes} from '../constants';
import {globalStyles} from '../styles';

function Contact() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[globalStyles.flex, globalStyles.backgroundWhite]}>
      <FlexBox flexDirection="column" rowGap={40}>
        <WelcomeSection
          smallTitle="All Your Favorite Books In One Place"
          bigTitle="Contact Now"
          backTitle="Back To Home"
          onBack={() => navigation.navigate(Routes.SERVICES)}
        />
        <View style={globalStyles.paddingHorizontal}>
          <FlexBox flexDirection="column" alignItems="center" rowGap={50}>
            <FlexBox flexDirection="column" alignItems="center" rowGap={20}>
              <Heading
                title="Contact Us"
                type={2}
                fontFamily={Fonts.SECONDARY}
              />
              <FlexBox flexDirection="column" rowGap={10}>
                <FlexBox flexDirection="row" alignItems="center" columnGap={5}>
                  <Heading
                    title="Phone:"
                    type={3}
                    fontFamily={Fonts.SECONDARY}
                  />
                  <TouchableOpacity
                    onPress={() => Linking.openURL('tel:+6281381385412')}>
                    <Heading
                      title="+6281381385412"
                      type={3}
                      fontFamily={Fonts.SECONDARY}
                    />
                  </TouchableOpacity>
                </FlexBox>
                <FlexBox flexDirection="row" alignItems="center" columnGap={5}>
                  <Heading
                    title="E-mail:"
                    type={3}
                    fontFamily={Fonts.SECONDARY}
                  />
                  <TouchableOpacity
                    onPress={() =>
                      Linking.openURL('mailto:aoktafiando@gmail.com')
                    }>
                    <Heading
                      title="aoktafiando@gmail.com"
                      type={3}
                      fontFamily={Fonts.SECONDARY}
                    />
                  </TouchableOpacity>
                </FlexBox>
                <Heading
                  title="Address: Karang Tengah, Tangerang"
                  type={3}
                  fontFamily={Fonts.SECONDARY}
                />
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </View>
      </FlexBox>
    </SafeAreaView>
  );
}

export default Contact;
