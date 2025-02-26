import {useState} from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    SafeAreaView
} from "react-native";
import useCodeforcesProblems from "@/hooks/useCodeforcesProblems";
import {useRouter} from "expo-router";
import InputField from "@/components/InputField";
import {icons, ratingFilters} from "@/constants";

const indexFilters = ["All", "A", "B", "C", "D", "E", "F", "G"];

const Challenges = () => {
    const {problems, isLoading, error} = useCodeforcesProblems();
    const router = useRouter();
    const [selectedIndex, setSelectedIndex] = useState("All");
    const [selectedRating, setSelectedRating] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    if (error) {
        return (
            <View className="flex-1 justify-center items-center bg-background">
                <Text className="text-red-500">Failed to load problems</Text>
            </View>
        );
    }

    //Filter Problems
    const filteredProblems = problems.filter((item) => {
        const matchesIndex =
            selectedIndex === "All" || item.index.startsWith(selectedIndex);
        const matchesRating =
            selectedRating === "All" || item.rating?.toString() === selectedRating;
        const matchesSearch =
            searchQuery === "" ||
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.tags.some((tag) =>
                tag.toLowerCase().includes(searchQuery.toLowerCase())
            );

        return matchesIndex && matchesRating && matchesSearch;
    });

    return (
        <SafeAreaView className="flex-1 bg-background px-4 py-6">
            <Text className="text-textPrimary w-full text-2xl mb-2 text-center">
                Problems to Solve
            </Text>

            <View className="flex flex-col mb-4">
                {/* Search Bar */}
                <InputField
                    icon={icons.search}
                    placeholder="Search by name or tags..."
                    placeholderTextColor="#888"
                    className="bg-general-100 text-textPrimary px-4 py-3 rounded-xl mb-4"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />

                {/* Index Filter */}
                <Text className="text-textPrimary font-semibold mb-2">
                    Filter by Index:
                </Text>
                <View className="flex flex-row flex-wrap gap-2 mb-4">
                    {indexFilters.map((index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => setSelectedIndex(index)}
                            className={`px-4 py-2 rounded-full ${
                                selectedIndex === index
                                    ? "bg-primary text-white"
                                    : "bg-card text-textSecondary"
                            }`}
                        >
                            <Text
                                className={`font-semibold ${
                                    selectedIndex === index ? "text-white" : "text-textSecondary"
                                }`}
                            >
                                {index}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Rating Filter */}
                <Text className="text-textPrimary font-semibold mb-2">
                    Filter by Rating:
                </Text>
                <FlatList
                    data={ratingFilters}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        gap: 12,
                        paddingBottom: 8,
                        marginBottom: 14,
                    }}
                    keyExtractor={(item) => item.toString()}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            onPress={() => setSelectedRating(item)}
                            className={`px-4 py-2 w-auto flex justify-center items-center rounded-full h-11 ${
                                selectedRating === item
                                    ? "bg-primary text-white"
                                    : "bg-card text-textSecondary"
                            }`}
                        >
                            <Text
                                className={`font-semibold ${
                                    selectedRating === item
                                        ? "text-textPrimary"
                                        : "text-textSecondary"
                                }`}
                            >
                                {item === "All" ? "All Ratings" : `${item}`}
                            </Text>
                        </TouchableOpacity>
                    )}
                />

                {isLoading ? (
                    <View className="flex-1 justify-center items-center">
                        <ActivityIndicator size="large" color="#0000ff"/>
                    </View>
                ) : (
                    <FlatList
                        data={filteredProblems}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => `${item.contestId}-${item.index}`}
                        renderItem={({item}) => (
                            <TouchableOpacity
                                onPress={() =>
                                    router.push(
                                        `https://codeforces.com/problemset/problem/${item.contestId}/${item.index}`
                                    )
                                }
                                className="bg-card p-4 rounded-xl mb-3"
                            >
                                <Text className="text-lg font-semibold text-textPrimary">
                                    {item.index}. {item.name}
                                </Text>
                                <Text className="text-textSecondary">
                                    Difficulty: {item.rating ? item.rating : "Unrated"}
                                </Text>
                                <Text className="text-primary mt-1">
                                    Tags: {item.tags.join(", ")}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                )}
            </View>
        </SafeAreaView>
    );
};

export default Challenges;
