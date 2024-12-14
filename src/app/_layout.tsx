import { Stack } from "expo-router";
import Header from '../components/Header';

const Layout = () => {
  return (
    <>
      <Header/>
       <Stack screenOptions={{headerShown: false}} />
    </>

  );
};

export default Layout;