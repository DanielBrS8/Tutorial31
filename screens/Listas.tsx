import { View } from 'react-native'
import React from 'react'
import { Divider, List, Text } from 'react-native-paper'

export default function Listas() {
  return (
    <View className='flex-1 justify-center px-4'>
    <List.Section>
        <List.Subheader><Text variant="titleLarge">Ciclos</Text></List.Subheader>
        <Divider/>
        <List.Subheader><Text variant="titleMedium">Superior</Text></List.Subheader>
      <List.Item
        title="Aplicaciones Multiplataforma"
        description="bla bla bla"
        left={()=><List.Icon icon="school"/>}
      />
      <List.Item
        title="Aplicaciones Multiplataforma"
        description="bla bla bla"
        left={()=><List.Icon icon="school"/>}
      />
      <Divider/>
      <List.Subheader><Text variant="titleMedium">Medio</Text></List.Subheader>
      <List.Item
        title="Aplicaciones Multiplataforma"
        description="bla bla bla"
        left={()=><List.Icon icon="school"/>}
      />

      </List.Section>
    </View>
  )
}