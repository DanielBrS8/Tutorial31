import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Checkbox, HelperText, RadioButton, Searchbar, TextInput } from 'react-native-paper';

export default function Formulario() {
  const [edad, setEdad] = useState('');
  const [errorEdad, setErrorEdad] = useState('');
  const [contraseñaOculta, setContraseñaOculta] = useState(true);
  const [textoBusqueda, setTextoBusqueda] = useState('');
  const [terminosLeido, setTerminosLeidos] = useState(false);
  const [cursorSeleccionado, setCursorSeleccionado] = useState('');

  function validadEdad() {
    const validadorEdad = /^\d+$/;
    setErrorEdad(validadorEdad.test(edad) ? '' : 'La edad no es un numero valido');
  }

  return (
    <View className="flex-1 justify-center">
      <Text>Formulario</Text>
      <TextInput label={'Nombre'} mode="flat"></TextInput>
      <TextInput
        label={'Edad'}
        value={edad}
        onChangeText={setEdad}
        mode="outlined"
        left={<TextInput.Icon icon="numeric" />}
        right={<TextInput.Affix text="años" />}
        onEndEditing={validadEdad}></TextInput>
      <HelperText type="error" visible={errorEdad !== ''}>
        {errorEdad}
      </HelperText>

      <TextInput
        mode="outlined"
        label={'Contraseña'}
        secureTextEntry={contraseñaOculta}
        right={
          <TextInput.Icon
            icon={contraseñaOculta ? 'eye-off' : 'eye'}
            onPress={() => setContraseñaOculta(!contraseñaOculta)}
          />
        }></TextInput>

      <Searchbar
        value={textoBusqueda}
        onChangeText={setTextoBusqueda}
        placeholder="Buscar Cursos"></Searchbar>

      <View className="flex-row items-center">
        <Checkbox
          status={terminosLeido ? 'checked' : 'unchecked'}
          onPress={() => setTerminosLeidos(!terminosLeido)}
        />
        <Text>He leido y aceptado los terminos</Text>
      </View>

      <RadioButton.Group value={cursorSeleccionado} onValueChange={setCursorSeleccionado}>
        <View className="flex-row items-center">
          <RadioButton value="1dam"></RadioButton>
          <Text>1º Desarrollo multiplataforma</Text>
        </View>
        <View className="flex-row items-center">
          <RadioButton value="2dam"></RadioButton>
          <Text>2º Desarrollo multiplataforma</Text>
        </View>
        <View className="flex-row items-center">
          <RadioButton value="3dam"></RadioButton>
          <Text>3º Desarrollo multiplataforma</Text>
        </View>
      </RadioButton.Group>

        <TextInput
          mode="outlined" label={"Observaciones"} style={{height: 120}}
          maxLength={200} multiline={true} numberOfLines={4}
        ></TextInput>

    </View>
  );
}

const styles = StyleSheet.create({});
