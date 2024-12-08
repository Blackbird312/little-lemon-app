import { FlatList, SectionList, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';

const SectionListMenu = () => {

  const menuItemsToDisplay = [
    {
      title: 'Appetizers',
      data: [
        { name: 'Hummus', price: '$5.00' },
        { name: 'Moutabal', price: '$5.00' },
        { name: 'Falafel', price: '$7.50' },
        { name: 'Marinated Olives', price: '$5.00' },
        { name: 'Kofta', price: '$5.00' },
        { name: 'Eggplant Salad', price: '$8.50' },
      ],
    },
    {
      title: 'Main Dishes',
      data: [
        { name: 'Lentil Burger', price: '$10.00' },
        { name: 'Smoked Salmon', price: '$14.00' },
        { name: 'Kofta Burger', price: '$11.00' },
        { name: 'Turkish Kebab', price: '$15.50' },
      ],
    },
    {
      title: 'Sides',
      data: [
        { name: 'Fries', price: '$3.00', id: '11K' },
        { name: 'Buttered Rice', price: '$3.00' },
        { name: 'Bread Sticks', price: '$3.00' },
        { name: 'Pita Pocket', price: '$3.00' },
        { name: 'Lentil Soup', price: '$3.75' },
        { name: 'Greek Salad', price: '$6.00' },
        { name: 'Rice Pilaf', price: '$4.00' },
      ],
    },
    {
      title: 'Desserts',
      data: [
        { name: 'Baklava', price: '$3.00' },
        { name: 'Tartufo', price: '$3.00' },
        { name: 'Tiramisu', price: '$5.00' },
        { name: 'Panna Cotta', price: '$5.00' },
      ],
    },
  ];

  const colorScheme = useColorScheme();
  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{item?.name}</Text>
      </View>
    )
  }

  const sectionHeader = ({ section: { title } }: any) => <Text style={{ backgroundColor: Colors.app.secondary, padding: 2, fontSize: 30 }}>{title}</Text>

  return (
    <View style={{ ...styles.container, backgroundColor: colorScheme === 'dark' ? Colors.dark.background : Colors.light.background }}>
      <View style={{ flex: 1 }}>
        <SectionList
          keyExtractor={(item, index) => item?.name + index}
          sections={menuItemsToDisplay}
          renderItem={renderItem}
          renderSectionHeader={sectionHeader}
        />
      </View>
    </View>
  )
}

export default SectionListMenu

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    color: Colors.app.secondary,
    fontSize: 20
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15
  }
})