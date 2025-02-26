import {View, Text, FlatList, TouchableOpacity, SafeAreaView} from "react-native";
import {icons, jobListings} from "@/constants";
import {useState} from "react";
import InputField from "@/components/InputField";
import PopularJobs from "@/components/PopularJobs";
import NearbyJobs from "@/components/NearbyJobs";

const jobTypes = ["All", "Full-time", "Part-time", "Contractor"];

const JobListings = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedType, setSelectedType] = useState("All");

    const handleSearch = () => {
        setSearchQuery(searchQuery);
    }

    return (
        <SafeAreaView className="flex-1 bg-background px-4 pt-6">
            <View className="flex flex-row justify-center items-center mb-2">
                <Text className="text-textPrimary text-2xl">Find your perfect job</Text>
            </View>

            <InputField
                icon={icons.search}
                placeholder="Search jobs..."
                placeholderTextColor="#888"
                className="bg-general-100 text-textPrimary px-4 py-3 rounded-xl"
                value={searchQuery}
                onChangeText={handleSearch}
            />

            <View>
                <FlatList
                    horizontal
                    contentContainerStyle={{
                        gap: 12,
                        paddingVertical: 4,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                    data={jobTypes}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            key={item}
                            onPress={() => setSelectedType(item)}
                            className={`px-4 py-2 rounded-full shadow-md h-[40px] w-auto ${selectedType === item ? "bg-primary text-textPrimary" : "bg-card text-textSecondary"}`}>
                            <Text
                                className={`font-semibold ${selectedType === item ? "text-textPrimary" : "text-textSecondary"}`}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>

            <PopularJobs query={searchQuery}/>

            <NearbyJobs query={searchQuery}/>
        </SafeAreaView>
    );
};

export default JobListings;
