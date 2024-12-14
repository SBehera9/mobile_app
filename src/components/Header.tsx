import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    logo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginRight: 20,
        letterSpacing: -1.5,
        textAlignVertical: 'center'
    },
     logo_slash: {
        transform: [{ skewX: '15deg' }],
        position: 'relative',
        top: -1,
        left: -2,
    },
    iconContainer: {
        flexDirection: "row",
       alignItems: 'center',
       gap: 24
    },

});


const Header = () => {
    return (
        <View className="bg-white shadow-md">
            <View style={styles.container}>
                <TouchableOpacity>
                    <Feather name="menu" size={24} />
                </TouchableOpacity>

                <Link href="/" style={{ flexDirection: 'row', alignItems: 'center'}}>
                     <Text style={styles.logo}>
                      VARSADA
                    </Text>
                </Link>

                <View style={styles.iconContainer}>
                    <TouchableOpacity>
                        <Feather name="search" size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                         <Feather name="shopping-bag" size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="person-outline" size={24} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Header;