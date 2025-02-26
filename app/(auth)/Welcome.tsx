import {
    Text,
    SafeAreaView,
    TouchableOpacity,
    View,
    Image,
} from "react-native";
import {router} from "expo-router";
import Swiper from "react-native-swiper";
import {useRef, useState} from "react";
import {onboarding} from "@/constants";
import CustomButton from "@/components/CustomButton";

const Onboarding = () => {
    const swiperRef = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const isLastSlide = activeIndex === onboarding.length - 1;
    return (
        <SafeAreaView className="flex h-full items-center justify-between bg-background">
            <TouchableOpacity
                onPress={() => {
                    router.replace("/(auth)/Sign-Up");
                }}
                className="flex w-full justify-end items-end p-5"
            >
                <Text className="text-textPrimary text-md">Skip</Text>
            </TouchableOpacity>

            <Swiper
                ref={swiperRef}
                loop={false}
                dot={
                    <View className="w-[32px] h-[4px] mx-1 bg-white rounded-full"/>
                }
                activeDot={
                    <View className="w-[32px] h-[4px] mx-1 bg-primary rounded-full"/>
                }
                onIndexChanged={(index) => setActiveIndex(index)}
            >
                {onboarding.map((item) => (
                    <View key={item.id} className="flex items-center justify-center p-5">
                        <Image
                            source={item.image}
                            className="w-full h-[360px] bg-none"
                            resizeMode="contain"
                        />
                        <View className="flex flex-row items-center justify-center w-full mt-10">
                            <Text className="text-textPrimary text-3xl font-bold mx-10 text-center">
                                {item.title}
                            </Text>
                        </View>
                        <Text className="text-md text-center text-textSecondary mx-10 mt-3">
                            {item.description}
                        </Text>
                    </View>
                ))}
            </Swiper>

            <CustomButton
                title={isLastSlide ? "Get Started" : "Next"}
                onPress={() =>
                    isLastSlide
                        ? router.replace("/(auth)/Sign-Up")
                        : swiperRef.current?.scrollBy(1)
                }
                className="w-10/12 mt-10 mb-10"
                textVariant="primary"
            />
        </SafeAreaView>
    );
};

export default Onboarding;
