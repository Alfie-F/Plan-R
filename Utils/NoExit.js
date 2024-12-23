import { useEffect } from "react";
import { Alert, BackHandler } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function NoEscape(closeApp) {
  const navigation = useNavigation();
  useEffect(() => {
    const backAction = () => {
      if (closeApp) {
        Alert.alert(
          "Exit App",
          "Do you want to exit? \nTo change user please do so via account.",
          [
            {
              text: "Cancel",
              onPress: () => {},
              style: "cancel",
            },
            { text: "YES", onPress: () => BackHandler.exitApp() },
          ],
          { cancelable: false }
        );
        return true;
      } else {
        navigation.goBack();
        return true;
      }
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [closeApp, navigation]);
}
