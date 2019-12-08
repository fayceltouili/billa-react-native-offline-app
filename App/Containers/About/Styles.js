import { StyleSheet, Dimensions } from 'react-native'
var {height, width} = Dimensions.get('window')


export default StyleSheet.create({
  container: {
    margin: 15,
    backgroundColor: '#f8f8f8',
    height: height,
    borderColor: '#e5dfdf',
    borderWidth: 1,
    borderRadius: 15,
  
  },
  title:{
    textAlign: 'center',
    fontSize: 18,
    padding: 10,
    fontFamily: 'PalanquinDark-Regular',
    color: 'white',


  },
  titleView: {
    flexDirection:'row',
    flexWrap:'wrap',
    height: 150,
    backgroundColor: '#303030',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
  },
  list: {
    marginTop: 15,
    padding: 15,

  },

  image: {
    margin: 10,
    width: 120,
    height: 120,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "white"
  },
  logoText:{
    fontSize: 50,
    color: 'white',
    marginTop: 30,
    marginLeft: 30,
    fontFamily:'PalanquinDark-Regular'
  }
})
