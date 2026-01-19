import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Checkbox, HelperText, Searchbar, TextInput } from 'react-native-paper'

export default function Formulario() {

  const [edad,setEdad] = useState("")
  const [errorEdad,setErrorEdad] = useState("")
  const [contraseñaOculta,setContraseñaOculta] = useState(true)
  const [textoBusqueda,setTextoBusqueda] = useState("")
  const  [terminosLeido,setTerminosLeidos] = useState(false)

  function validadEdad(){

    const validadorEdad = /^\d+$/
    setErrorEdad(validadorEdad.test(edad) ? "" : "La edad no es un numero valido")
  }

  return (
    <View className='flex-1 justify-center'>
      <Text>Formulario</Text>
      <TextInput label={"Nombre"} mode='flat'></TextInput>
      <TextInput label={"Edad"} value={edad} onChangeText={setEdad} mode="outlined" left={<TextInput.Icon icon='numeric'/>} right={<TextInput.Affix text='años' />}
        onEndEditing={validadEdad}
      ></TextInput>
      <HelperText type='error' visible={errorEdad!==""}>{errorEdad}</HelperText>

      <TextInput mode="outlined" label={"Contraseña"} secureTextEntry={contraseñaOculta}
        right={<TextInput.Icon
          icon={contraseñaOculta?"eye-off":"eye"}
          onPress={()=> setContraseñaOculta(!contraseñaOculta)}
          />}
      ></TextInput>

      <Searchbar
        value={textoBusqueda}
        onChangeText={setTextoBusqueda}
        placeholder='Buscar Cursos'
      ></Searchbar>

      <View className='flex-row items-center'>
        <Checkbox status={terminosLeido?"checked":"unchecked"}
                          onPress={()=>setTerminosLeidos(!terminosLeido)}/>
        <Text>He leido y aceptado los terminos</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({})