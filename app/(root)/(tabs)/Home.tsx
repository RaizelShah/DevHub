import {View, Text, ScrollView, Image, TouchableOpacity} from "react-native";
import {useUser} from "@clerk/clerk-expo";
import {useNavigation} from "@react-navigation/native";
import {trendingNews, aiFeatures, recommendedProjects, quickTools} from "@/constants";
import CustomButton from "@/components/CustomButton";

// Function to get the appropriate greeting based on the current hour
const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "Good Morning";
    if (hour >= 12 && hour < 17) return "Good Afternoon";
    return "Good Evening";
};

const HomeScreen = () => {
    const {user} = useUser();
    const navigation = useNavigation();

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 150}}
                    className="flex-1 bg-background px-4 py-6">
            {/* Header */}
            <View className="flex flex-row justify-between items-center">
                <Text className="text-2xl font-semibold text-textPrimary">
                    {getGreeting()}, {user?.firstName ? user?.firstName : user?.emailAddresses[0].emailAddress.split('@')[0]} 👋
                </Text>
            </View>

            {/* Trending News Section */}
            <View className="mt-6">
                <Text className="text-lg font-semibold text-textPrimary">Trending Dev News</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-3">
                    {trendingNews.map((news) => (
                        <View key={news.id} className="bg-card p-4 rounded-xl mr-3 w-64">
                            <Text className="text-textPrimary font-semibold">{news.title}</Text>
                            <TouchableOpacity>
                                <Text className="text-primary mt-2">Read More →</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>

            {/* AI Career Features */}
            <View className="mt-6">
                {aiFeatures.map((feature) => (
                    <View key={feature.id}
                          className="bg-card p-4 rounded-xl flex flex-row justify-between items-center mt-3">
                        <View>
                            <View className="flex justify-between flex-row w-full items-center">
                                <Text className="text-lg font-semibold text-textPrimary">{feature.title}</Text>
                                <Image source={feature.icon} className="w-10 h-10"/>
                            </View>
                            <Text className="text-textSecondary text-sm mt-1 text-wrap">{feature.description}</Text>
                            <CustomButton title="Explore" className="mt-3 w-32" textVariant="primary"/>
                        </View>
                    </View>
                ))}
            </View>

            {/* Recommended Projects */}
            <View className="mt-6">
                <Text className="text-lg font-semibold text-textPrimary">Recommended Projects</Text>
                {recommendedProjects.map((project) => (
                    <TouchableOpacity key={project.id} className="bg-card p-4 rounded-xl my-3">
                        <Text className="text-textPrimary font-semibold">{project.title}</Text>
                        <Text className="text-textSecondary text-sm mt-1">{project.description}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Quick Tools */}
            <View className="mt-6">
                <Text className="text-lg font-semibold text-textPrimary">Quick Tools</Text>
                <View className="flex flex-row mt-3 gap-3">
                    {quickTools.map((tool) => (
                        <TouchableOpacity key={tool.id} className="bg-card p-3 rounded-xl flex-1 items-center">
                            <Text className="text-textPrimary">{tool.title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

export default HomeScreen;
