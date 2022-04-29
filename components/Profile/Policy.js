// Example of Collapsible/Accordion/Expandable List View in React Native
// https://aboutreact.com/collapsible-accordion-expandable-view/

// import React in our code
import React, { useState } from 'react';
import Icon from "react-native-vector-icons/Entypo";

// import all the components we are going to use
import {
  SafeAreaView,
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';


//import for the animation of Collapse and Expand
import * as Animatable from 'react-native-animatable';
//import for the Accordion view
import Accordion from 'react-native-collapsible/Accordion';

//Dummy content to show
//You can also use dynamic data by calling web service

const CONTENT = [
  {
    title: 'INFORMATION COLELCTION AND USE',
    content:
      `For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information. The information that we request will be retained by us and used as described in this privacy policy.

 The app does use third-party services that may 
 collect information used to identify you.
      
 Link to the privacy policy of third-party service
 providers used by the app
      
 •[Google Play Services]("https://www.google.com/policies/privacy/")
 •[Google Analytics for Firebase](https://firebase.google.com/policies/analytics)
 •[Facebook](https://www.facebook.com/about/privacy/update/printable)
      ` ,
        },
  {
    title: 'LOG DATA',
    content:
      'We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.',
  },
  {
    title: 'COOKIES',
    content:
      'Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your devices internal memory. This Service does not use these “cookies” explicitly. However, the app may use third-party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service. ',
  },
  {  
  title: 'SERVICE PROVIDERS',
    content:
      `We may employ third-party companies and individuals due to the following reasons:

    •	To facilitate our Service.
    •	To provide the Service on our behalf.
    •	To perform Service-related services.
    •	To assist us in analyzing how our Service is used.
      
 We want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
      `,
  },
  {
  title: 'SECURITY',
  content:
    `We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
    `,
},
{
  title: 'LINKS TO OTHER SITES',
  content:
    `This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
    `,
},
{
  title: 'CHILDRENS PRIVACY',
  content:
    `These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do the necessary actions.
    `,
},
{
  title: 'CHANGES TO THIS PRIVACY POLICY',
  content:
    `We may update our Privacy Policy from time to time.Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.This policy is effective as of 2022-01-01    
    `,
},
{
  title: 'CONTACT US',
  content:
    `If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at info@ogso.eu.
    `,
},

];
 
//To make the selector (Something like tabs)

export default function app () {
  // Ddefault active selector
  const [activeSections, setActiveSections] = useState([]);

  // Collapsed condition for the single collapsible
  const [collapsed, setCollapsed] = useState(true);
  // MultipleSelect is for the Multiple Expand allowed
  // True: Expand multiple at a time
  // False: One can be expand at a time
  const [multipleSelect, setMultipleSelect] = useState(false);

  const toggleExpanded = () => {
    //Toggling the state of single Collapsible
    setCollapsed(!collapsed);
  };

  const setSections = (sections) => {
    //setting up a active section state
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };
  

  const renderHeader = (section, _, isActive) => {
    //Accordion Header view
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Text  style={styles.headerText}> <Icon name="controller-record" style={styles.icon}></Icon> {section.title}</Text>
      </Animatable.View>
    );
  };

  const renderContent = (section, _, isActive) => {
    //Accordion Content view
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Animatable.Text
          animation={isActive ? 'bounceIn' : undefined}
          style={{ textAlign: 'left',color: '#666666',
          fontFamily: 'Museo Sans 300',
          fontSize: 13,
          fontWeight: '400',
          fontStyle: 'normal',
          lineHeight: 23, }}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView>
        <Text style={styles.privacyPolicy}> Privacy policy </Text>
          <Accordion 
            activeSections={activeSections}
            //for any default active section
            sections={CONTENT}
            //title and content of accordion
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            //Do you want to expand mutiple at a time or single at a time
            renderHeader={renderHeader}
            //Header Component(View) to render
            renderContent={renderContent}
            //Content Component(View) to render
            duration={400}
            //Duration for Collapse and expand
            onChange={setSections}
            //setting the state of active sections
          />
      </ScrollView>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 30,
    marginBottom : 10,
    
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 13,
    color :"#eb5c26",
  },
  title: {
  
    color: '#000000',
    fontFamily: 'Museo',
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'left',
    lineHeight: 14,
  },
  header: {
    marginLeft : 20,
    color: '#000000',
    fontFamily: 'Museo',
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
    marginBottom : 10,
    
  },
  headerText: {
    color: '#000000',
    fontFamily: 'Museo',
    fontSize: 14,
    fontStyle: 'normal',
    textAlign: 'left',
    },
  textHeader: {
    marginLeft : 20,
    marginRight : 10,
    marginBottom : 20,
    color: '#000000',
    fontFamily: 'Museo',
    fontSize: 40,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
    lineHeight: 23,
  },
  content: {
    marginLeft :38,
    color: 'gray',
    fontFamily: 'Museo Sans 300',
    fontSize:100,
    fontStyle: 'normal',
    textAlign: 'left',
    lineHeight: 23,
  },
  active: {
    marginLeft :38,
    color: 'gray',
    fontFamily: 'Museo Sans 300',
    fontSize:100,
    fontStyle: 'normal',
    textAlign: 'left',
    lineHeight: 23,
  },
  inactive: {
    marginLeft :38,
    color: 'gray',
    fontFamily: 'Museo Sans 300',
    fontSize:100,
    fontStyle: 'normal',
    textAlign: 'left',
    lineHeight: 23,
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#ffffff',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
    textAlign: 'center',
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  privacyPolicy: {
    color: '#000000',
    fontFamily: 'Museo',
    fontSize: 18,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
    lineHeight: 36,
     paddingLeft : 40,
    marginBottom: 10
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});
