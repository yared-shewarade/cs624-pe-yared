import React from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <View>
        <Image
          source={{
            uri: './assets/icon.png',
          }}
          style={{width: 300, height: 300}}   
        />
      </View>
      <Text>Which Courses are you taking?</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue='   CS624'
      />
      <Text>{'\n'}</Text>
     <View>
      <Text style={{fontSize: 40, fontWeight: 'bold', backgroundColor: 'yellow'}}>
        Core Requirements (24 credits)
        </Text>
     </View>
      <Text>CS 504 Software Engineering</Text>
      <Text>CS 506 Programming for Computing</Text>
      <Text>CS 519 Cloud Computing Overview</Text>
      <Text>CS 533 Computer Architecture</Text>
      <Text>CS 547 Secure Systems and Programs</Text>
      <Text>CS 622 Discrete MAth and Algorithms for Computing</Text>
      <Text>DS 510 Artificial Intelligence for Data Science</Text>
      <Text>DS 620 Machine Learning & Deep Learning</Text>
      <Text>{'\n'}</Text>
    <View>
      <Text style={{fontSize: 40, fontWeight: 'bold', backgroundColor: 'yellow'}}>Depth of Study (6 credits)</Text>
     </View>

      <Text>CS 624 Full-Stack Development-Mobile App</Text>
      <Text>CS 628 Full-Stack Development-Web App</Text>
      <Text>{'\n'}</Text>

    <View>
      <Text style={{fontSize: 40, fontWeight: 'bold', backgroundColor: 'yellow'}}>Capstone (3 Credits)</Text>
     </View>

    <Text>CS 687 Computer Science Capstone</Text>
    </ScrollView>
  );
};


export default App;
