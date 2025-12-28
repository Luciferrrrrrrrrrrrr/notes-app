import { Stack } from "expo-router";

const RootLayout = () => {
  return (<Stack 
  screenOptions={
    {
    headerStyle :{
    backgroundColor : '#ff8c00',
  
    },
    headerTintColor : '#fff',
    headerBackTitleStyle : {
      fontSize : 20,
      fontWeight : 'Bold',
    },
    contentStyle :{
      paddingHorizontal : 10,
      paddingTop : 10,
      backgroundColor : '#fff'
    },


    }}>
    <Stack.Screen name ='index' options ={{title : 'Home'}}/>
    
    <Stack.Screen name ='notes' options ={ { headerTitle : 'Notes'}}/>
    </Stack>    
    
);
};

export default RootLayout;
