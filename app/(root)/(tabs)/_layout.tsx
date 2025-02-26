import {Tabs} from "expo-router";
import {icons} from "@/constants";
import {Image, ImageSourcePropType, View, Animated, Keyboard, Platform} from "react-native";
import {useRef, useEffect} from "react";

interface TabIconProps {
    source: ImageSourcePropType;
    focused: boolean;
}

const TabIcon = ({source, focused}: TabIconProps) => {
    const slideAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        if (focused) {
            Animated.parallel([
                Animated.spring(slideAnim, {
                    toValue: 1,
                    useNativeDriver: true,
                    tension: 50,
                    friction: 7
                }),
                Animated.spring(scaleAnim, {
                    toValue: 1.1,
                    useNativeDriver: true,
                    tension: 50,
                    friction: 7
                })
            ]).start();
        } else {
            Animated.parallel([
                Animated.spring(slideAnim, {
                    toValue: 0,
                    useNativeDriver: true,
                    tension: 50,
                    friction: 7
                }),
                Animated.spring(scaleAnim, {
                    toValue: 1,
                    useNativeDriver: true,
                    tension: 50,
                    friction: 7
                })
            ]).start();
        }
    }, [focused]);

    return (
        <View className="flex flex-row justify-center items-center rounded-full">
            <Animated.View
                className="rounded-full w-12 h-12 items-center justify-center"
                style={{
                    transform: [
                        {scale: scaleAnim}
                    ]
                }}
            >
                <Image
                    source={source}
                    resizeMode="contain"
                    className="w-7 h-7"
                />
                {focused && (
                    <Animated.View
                        className="absolute bottom-0 h-1 rounded-full bg-white"
                        style={{
                            width: 20,
                            opacity: slideAnim,
                            transform: [
                                {
                                    translateY: slideAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [10, 4]
                                    })
                                }
                            ]
                        }}
                    />
                )}
            </Animated.View>
        </View>
    );
};

export default function Layout() {
    const tabBarAnimation = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const showSubscription = Keyboard.addListener(
            Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
            () => {
                Animated.timing(tabBarAnimation, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true,
                }).start();
            }
        );
        const hideSubscription = Keyboard.addListener(
            Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
            () => {
                Animated.timing(tabBarAnimation, {
                    toValue: 1,
                    duration: 200,
                    useNativeDriver: true,
                }).start();
            }
        );

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#333344",
                    borderRadius: 30,
                    paddingBottom: 30,
                    overflow: "hidden",
                    height: 76,
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    flexDirection: "row",
                    position: "absolute",
                    transform: [{
                        translateY: tabBarAnimation.interpolate({
                            inputRange: [0, 1],
                            outputRange: [100, 0] // Move down 100 units when hidden
                        })
                    }],
                    opacity: tabBarAnimation
                },
            }}
        >
            <Tabs.Screen
                name="Home"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon source={icons.home} focused={focused}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="JobListing"
                options={{
                    title: "Jobs",
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon source={icons.list} focused={focused}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="Challenges"
                options={{
                    title: "Challenges",
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon source={icons.flag} focused={focused}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="Portfolio"
                options={{
                    title: "Portfolio",
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon source={icons.portfolio} focused={focused}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="Profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon source={icons.user} focused={focused}/>
                    ),
                }}
            />
        </Tabs>
    );
}