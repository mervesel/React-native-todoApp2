import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import styles from './Input.styles';

const Input = ({text, setText, handleAddTodo}) => {
  const [changeColor, setChangeColor] = useState('#808080');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text_input}
        placeholder="Yapılacaklar..."
        onChangeText={setText}
        value={text}
        onFocus={() => setChangeColor('orange')}
        onBlur={() => setChangeColor('#808080')}
      />
      <TouchableOpacity
        onPress={handleAddTodo}
        style={{
          margin: 10,
          padding: 10,
          backgroundColor: `${changeColor}`,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          fontWeight: 'bold',
        }}>
        <Text style={{color: 'white'}}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Input;
