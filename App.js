import { Image, StyleSheet, View } from "react-native";

const App = () => {
    return (
        <View style="styles.container">
        <Image
            resizeMode="contain"
            style={{
                width:"100%",
                height: 180,
                borderwidth: 2,
                bordercolor: "red",
            }}
        source= {{
            uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hurriyet.com.tr%2Fseyahat%2Fgece-fotograf-cekerken-daha-iyi-sonuc-almanizi-saglayacak-ipuclari-40946115&psig=AOvVaw07VSbqo7YzLjamKUkuookP&ust=1703940572841000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJi3nrfXtIMDFQAAAAAdAAAAABAD"
        }}
        />
        
        </View>
    );
};


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});