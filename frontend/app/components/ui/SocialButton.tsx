import {View, Image, StyleSheet} from 'react-native'
import { appColors } from 'app/globalStyles'

// ADD ONPRESS FUNCTIONALITY
function SocialButton({img}: {img: any}) {
  return (
    <View style={styles.container}>
        <Image
          style={styles.img}
          source={img}
          resizeMode="contain" />
    </View>
  )
}

export default SocialButton

const styles = StyleSheet.create({
    container : {
        width: 47.36,
        height: 47.36,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: appColors.lightGray

    },
    img: {
        margin: 'auto',
        width: 24,
        height: 24,
}
}
)