
import { StyleSheet, useColorScheme, View } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Button, Chip, FAB, IconButton, PaperProvider, Switch, Text } from 'react-native-paper'
import { temaClaro } from 'themes/TemaClaro'
import { temaOscuro } from 'themes/TemaOscuro'

export default function Botones() {

    const[swichActivado,setSwichActivado]=useState(false)

  return (
    <View className='flex-1 justify-center p-4'>
        
        <Text variant='bodyMedium'>Botones de Texto</Text>
        <View className='flex-row px-4 flex-wrap'>
            <Button onPress={()=> console.log("Pulsado")}>Aceptar</Button>
            <Button onPress={()=> console.log("Pulsado 2")} disabled={true}>Desabilitado</Button>
            <Button onPress={()=> console.log("Pulsado 3")} icon={"camera"}>CAMARA</Button>
            <Button onPress={()=> console.log("Pulsado 4")} loading={true}>Cargando</Button>

        </View>
        
        <Text variant='bodyMedium'>Botones Outlined</Text>
        <View className='flex-row px-4 flex-wrap'>
            <Button mode='outlined' onPress={()=> console.log("Pulsado 5")}>Aceptar</Button>
            <Button mode='outlined' onPress={()=> console.log("Pulsado 6")} disabled={true}>Desabilitado</Button>
            <Button mode='outlined' onPress={()=> console.log("Pulsado 7")} icon={"camera"}>CAMARA</Button>
            <Button mode='outlined' onPress={()=> console.log("Pulsado 8")} loading={true}>Cargando</Button>

        </View>

        <Text variant='bodyMedium'>Botones contained</Text>
        <View className='flex-row px-4 flex-wrap'>  
            <Button mode='contained' onPress={()=> console.log("Pulsado 5")}>Aceptar</Button>
            <Button mode='contained' onPress={()=> console.log("Pulsado 6")} disabled={true}>Desabilitado</Button>
            <Button mode='contained' onPress={()=> console.log("Pulsado 7")} icon={"camera"}>CAMARA</Button>
            <Button mode='contained' onPress={()=> console.log("Pulsado 8")} loading={true}>Cargando</Button>

        </View>

        <Text variant='bodyMedium'>Botones contained</Text>
        <View className='flex-row px-4 flex-wrap'>  
            <Button mode='contained-tonal' onPress={()=> console.log("Pulsado 5")}>Aceptar</Button>
            <Button mode='contained-tonal' onPress={()=> console.log("Pulsado 6")} disabled={true}>Desabilitado</Button>
            <Button mode='contained-tonal' onPress={()=> console.log("Pulsado 7")} icon={"camera"}>CAMARA</Button>
            <Button mode='contained-tonal' onPress={()=> console.log("Pulsado 8")} loading={true}>Cargando</Button>

        </View>


        <Text variant='bodyMedium'>Otros Botones</Text>
        <View className='flex-row px-4 flex-wrap'>  
            <IconButton icon={"camera"}></IconButton>
            <IconButton mode="contained" icon={"camera"}></IconButton>
            <IconButton mode="contained-tonal" icon={"camera"}></IconButton>
            <IconButton mode="outlined" icon={"camera"}></IconButton>
            
            <Switch value={swichActivado} onValueChange={setSwichActivado}></Switch>
        </View>

         <Text variant='bodyMedium'>Avatares</Text>
        <View className='flex-row px-4 flex-wrap'>  
            <Avatar.Image source={require("../assets/images.jpg")} size={48}/>
            <Avatar.Icon icon={"account"} size={48} />
            <Avatar.Text label={"JD"} size={48}/>
        </View>

         <Text variant='bodyMedium'>CHIP</Text>
        <View className='flex-row px-4 flex-wrap'>  
            <Chip>nomal</Chip>
            <Chip selected={true} >seleccionado</Chip>
            <Chip icon={"camera"}>con icono</Chip>
            <Chip onPress={()=>console.log("pulsando el chip")}>pulsable</Chip>
            <Chip onPress={()=>console.log("Cerrable el chip")}>Cerrable</Chip>

        </View>
       
        <FAB
        
            icon={"plus"}
            label="Añadir"
            onPress={()=>console.log("FAB pulsado")}
            style={styles.fab}
        />

    </View>
  ) 
}

const styles = StyleSheet.create({

    fab:{

        position:"absolute",
        margin:16,
        left:0,
        bottom:0

    }

})