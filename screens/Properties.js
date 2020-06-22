import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-community/async-storage'

import { authStyles } from '../styles'


export default function App({navigation}) {
  
  const [data, setData] = useState([
    {id:1,name:"Eastwood",location:"664 Kenwood Alley",description:"kkeane0@live.com",imgUrl:"https://robohash.org/laborefugiatsit.png?size=50x50&set=set1",price:"$631.45"},
    {id:2,name:"Steensland",location:"285 Truax Place",description:"fpund1@dropbox.com",imgUrl:"https://robohash.org/etundevoluptas.jpg?size=50x50&set=set1",price:"$763.31"},
    {id:3,name:"Larry",location:"8747 Swallow Street",description:"blunck2@vkontakte.ru",imgUrl:"https://robohash.org/eaeosea.jpg?size=50x50&set=set1",price:"$788.06"},
    {id:4,name:"Montana",location:"2 Jay Court",description:"pfishburn3@auda.org.au",imgUrl:"https://robohash.org/quoquodaliquam.bmp?size=50x50&set=set1",price:"$716.65"},
    {id:5,name:"Moulton",location:"01684 Loeprich Plaza",description:"wwalcot4@umich.edu",imgUrl:"https://robohash.org/iustoestoccaecati.jpg?size=50x50&set=set1",price:"$660.00"},
    {id:6,name:"Maple",location:"23 Utah Parkway",description:"iblodgett5@google.com.hk",imgUrl:"https://robohash.org/remomnisipsam.png?size=50x50&set=set1",price:"$525.61"},
    {id:7,name:"Pennsylvania",location:"5295 Ruskin Road",description:"ikyneton6@blogger.com",imgUrl:"https://robohash.org/eaminimaprovident.jpg?size=50x50&set=set1",price:"$327.82"},
    {id:8,name:"Spohn",location:"937 Rockefeller Alley",description:"ceinchcombe7@apache.org",imgUrl:"https://robohash.org/nihilrepellatfuga.jpg?size=50x50&set=set1",price:"$727.45"},
    {id:9,name:"Arizona",location:"38 8th Road",description:"djanny8@hibu.com",imgUrl:"https://robohash.org/fugautillo.bmp?size=50x50&set=set1",price:"$531.75"},
    {id:10,name:"Ramsey",location:"5689 Gateway Crossing",description:"dcasetta9@imdb.com",imgUrl:"https://robohash.org/estexpeditaut.bmp?size=50x50&set=set1",price:"$423.68"},
    {id:11,name:"Golden Leaf",location:"4463 Sundown Terrace",description:"caldwicka@stanford.edu",imgUrl:"https://robohash.org/etincidunttempora.jpg?size=50x50&set=set1",price:"$350.19"},
    {id:12,name:"Sunbrook",location:"49463 Sage Circle",description:"kcassamb@de.vu",imgUrl:"https://robohash.org/reprehenderitquasdebitis.png?size=50x50&set=set1",price:"$528.33"},
    {id:13,name:"Linden",location:"35114 Village Hill",description:"falexsandrovichc@slate.com",imgUrl:"https://robohash.org/cummolestiaefugiat.jpg?size=50x50&set=set1",price:"$548.27"},
    {id:14,name:"Monument",location:"35 Declaration Parkway",description:"crosoned@cbsnews.com",imgUrl:"https://robohash.org/molestiaedolorofficiis.bmp?size=50x50&set=set1",price:"$354.44"},
    {id:15,name:"Thierer",location:"952 Duke Plaza",description:"droberte@reverbnation.com",imgUrl:"https://robohash.org/quaeratsitea.bmp?size=50x50&set=set1",price:"$614.39"},
    {id:16,name:"Cascade",location:"7892 Hanson Circle",description:"eguesfordf@dailymotion.com",imgUrl:"https://robohash.org/auteminventorenon.png?size=50x50&set=set1",price:"$357.89"},
    {id:17,name:"Corry",location:"78 Forest Run Circle",description:"kindeg@usda.gov",imgUrl:"https://robohash.org/laboriosamadipisciet.bmp?size=50x50&set=set1",price:"$678.78"},
    {id:18,name:"Hanson",location:"11824 Main Pass",description:"aseawellh@mtv.com",imgUrl:"https://robohash.org/consequaturrepellenduseaque.bmp?size=50x50&set=set1",price:"$334.65"},
    {id:19,name:"Tennyson",location:"18 Chive Court",description:"mpiresi@wiley.com",imgUrl:"https://robohash.org/dolorumomnismolestiae.bmp?size=50x50&set=set1",price:"$728.45"},
    {id:20,name:"Sycamore",location:"963 Northridge Plaza",description:"mgrutej@seattletimes.com",imgUrl:"https://robohash.org/rationevoluptastempora.jpg?size=50x50&set=set1",price:"$505.43"}
  ]) 
  const [user, setUser] = useState({})
 
  return(
    <SafeAreaView style={authStyles.container}>
      <View style={authStyles.container}>
        <Text style={authStyles.title}>Properties</Text>
        <FlatList
          data={data}
          numColumns={3}
          style={styles.container}
          
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item}>
              <Image source={{uri:"https://placeimg.com/640/480/arch"}} style={styles.image}/>
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          )}
        >

        </FlatList>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flex: 1,
    width: '90%',
    alignContent: 'center',
  },
  item: {
    flexDirection: 'column',
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 100,
    margin: 12,
    height: 100,
  },
  image: {
    height: 80,
    width: 100,
    backgroundColor: 'grey'
  },
  text: {
    // justifyContent:
    textAlign: 'center',
    // borderWidth: 2,
    width: 100,
    color: '#27c7d2',
    // backgroundColor: ''
  }
})
