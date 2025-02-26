import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Image,
    SafeAreaView
} from "react-native";
import {icons, portfolioProjects} from "@/constants";
import CustomButton from "@/components/CustomButton";

const ResumePortfolio = () => {
    return (
        <SafeAreaView className="flex-1 bg-background px-4 pt-6">
            {/* Header */}
            <Text className="text-2xl text-center font-semibold text-textPrimary mb-2">
                Resume & Portfolio
            </Text>
            <Text className="text-textSecondary mb-4">
                Showcase your skills and achievements
            </Text>

            {/* Resume Section */}
            <View className="bg-card p-4 rounded-xl mb-4">
                <Text className="text-lg font-semibold text-textPrimary mb-2">
                    Resume
                </Text>
                <Text className="text-textSecondary mb-4">
                    Upload or view your resume
                </Text>
                <TouchableOpacity className="bg-primary rounded-full py-2 px-4 w-40">
                    <Text className="text-white text-center font-semibold">
                        Upload Resume
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Portfolio Section */}
            <View className="flex justify-between items-center flex-row mb-2">
                <Text className="text-lg font-semibold text-textPrimary">
                    Projects
                </Text>
                {/* Add New Project Button */}
                <TouchableOpacity
                    className="bg-primary rounded-full p-2"
                    onPress={() => console.log("Navigate to Add Project")}
                >
                    <Image source={icons.plus} className="text-white w-5 h-5 p-0" resizeMode="contain"/>
                </TouchableOpacity>
            </View>

            <FlatList
                data={portfolioProjects}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <View className="bg-card p-4 rounded-xl mb-3">
                        <Text className="text-lg font-semibold text-textPrimary">
                            {item.title}
                        </Text>
                        <Text className="text-textSecondary mb-2">
                            {item.description}
                        </Text>
                        <View className="flex-row flex-wrap gap-2 mt-1">
                            {item.tags.map((tag) => (
                                <Text
                                    key={tag}
                                    className="bg-secondary text-textPrimary px-2 py-1 rounded-full text-xs"
                                >
                                    {tag}
                                </Text>
                            ))}
                        </View>
                        <TouchableOpacity
                            className="my-3 flex flex-row justify-center items-center"
                        >
                            <CustomButton title="View Details" textVariant="primary" className="mt-3 w-32"
                                          onPress={() => console.log("Navigate to project")}/>
                        </TouchableOpacity>

                    </View>
                )}
                contentContainerStyle={{paddingBottom: 200}}
            />
        </SafeAreaView>
    );
};

export default ResumePortfolio;
