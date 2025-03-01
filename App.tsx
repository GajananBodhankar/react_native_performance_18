import './global.css';
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useColorScheme, colorScheme} from 'nativewind';

export default function App() {
  const [hasNotch, setHasNotch] = useState<boolean>(false);
  useEffect(() => {
    if (Platform.OS == 'android') {
      setHasNotch(StatusBar.currentHeight! > 24);
    }
  }, []);
  const {setColorScheme, toggleColorScheme} = useColorScheme();
  const mode = colorScheme.get() == 'light' ? 1 : 0;
  const icon = mode ? 'moon.png' : 'day-mode.png';

  return (
    <View
      className={`${hasNotch ? 'pt-16 px-5 dark:bg-black flex-1' : 'pt-1'}`}>
      <StatusBar barStyle={mode ? 'dark-content' : 'light-content'} />
      <TouchableOpacity
        className="flex-row justify-end items-center gap-3"
        onPress={() => {
          toggleColorScheme();
        }}>
        <Image
          source={
            mode
              ? require(`./src/Assets/moon.png`)
              : require('./src/Assets/day-mode.png')
          }
          className="h-10 w-10"
        />
      </TouchableOpacity>
      <Text className="pt-5 dark:text-white text-xl ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        placeat nihil quas architecto dolores et minima temporibus quibusdam,
        vero itaque eos. Et libero minima iure aperiam deserunt vero accusamus,
        tenetur nihil mollitia autem sunt. Quas blanditiis tempore, saepe
        doloremque molestiae libero maxime sit animi sapiente illo tempora vel
        est? Amet omnis officiis quos eos accusamus est perspiciatis voluptatem,
        tenetur cum vitae rem voluptates possimus deleniti inventore porro
        corporis consequatur sit temporibus facilis voluptatibus error
        necessitatibus tempora atque rerum? Nisi, minus. Ad perferendis sint
        iste eum nobis veniam hic et ipsum iure libero, tempore soluta,
        repellendus deserunt, ratione fugit facilis porro?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
