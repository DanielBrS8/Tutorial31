import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, IconButton, Text } from 'react-native-paper'
import CardActions from 'react-native-paper/lib/typescript/components/Card/CardActions'

export default function Targetas() {
  return (
    <View className='flex-1 justify-center px-4'>
      <Card mode="elevated" onPress={()=>console.log("card pulsado")}>
        <Card.Cover source={{uri:"https://www.evolmind.com/blog/el-poder-didactico-de-la-imagen/"}} resizeMode='stretch'/>
        <Card.Title
            title={"Titulo de la targeta"}
            subtitle={"Subtitulo de la targeta"}
            left={()=> <Avatar.Icon size={40} icon="account"></Avatar.Icon>}
            right={()=> <IconButton icon="dots-vertical" onPress={()=>console.log("Menu pulsado")}></IconButton>}/>

        <Card.Content>
            <Text variant={"bodyMedium"}>description del proyecto</Text>
        </Card.Content>

        <Card.Actions>
            <Button>Canckera</Button>
            <Button>Aceptar</Button>
        </Card.Actions>

      </Card>
    </View>
  )
}

const styles = StyleSheet.create({

})