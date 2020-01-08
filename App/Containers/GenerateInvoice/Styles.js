import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  portal: {
    bottom: 10,
    position: 'absolute',
  },
  container: { 
    bottom: 10,
    position: 'absolute',
    flexDirection:'row',
    flexWrap:'wrap',
    backgroundColor: '#303030',
    bottom: 0,
    margin: 25,
    paddingBottom: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3, 
  },
  icon: {
    marginLeft: 10,
    flexGrow: 1, justifyContent:'center', alignItems: 'center'
  },
  text: {
    color: 'white',
    marginTop: -10,
  },
  loading:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
