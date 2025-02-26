import {ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {useRouter} from "expo-router";
import useFetch from "@/hooks/useFetch";

const NearbyJobs = (query) => {
    const router = useRouter();
    const {data, isLoading, error} = useFetch("search", {
        query: `${query}`,
        num_pages: 2,
        country: "in"
    });

    return (
        <View className="flex flex-col p-2">
            <View className="flex flex-row justify-between items-center my-2">
                <Text className="text-textPrimary">Nearby Jobs</Text>
                <TouchableOpacity>
                    <Text className="text-textSecondary">Show all</Text>
                </TouchableOpacity>
            </View>

            <View>
                {isLoading ? (
                    <ActivityIndicator size="large" color="text-textPrimary"/>
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    <FlatList
                        keyExtractor={(item) => item?.job_id}
                        data={data}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{columnGap: 30}}
                        renderItem={({item}) => (
                            <TouchableOpacity
                                key={item.job_id}
                                className="bg-card p-4 rounded-xl mb-3 justify-between"
                                onPress={() => router.push(item?.job_google_link)}
                            >
                                <View className="flex flex-row items-center gap-2">
                                    <Image
                                        source={{
                                            uri: item?.employer_logo
                                                ? item?.employer_logo
                                                : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
                                        }}
                                        resizeMode="contain"
                                        className="w-12 h-12 rounded-md"
                                    />
                                    <View className="flex flex-col justify-between">
                                        <Text numberOfLines={1} className="text-lg font-semibold text-textPrimary">
                                            {item.job_title}
                                        </Text>
                                        <Text numberOfLines={1} className="text-primary font-semibold mt-1">
                                            {item.job_employment_type}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                )}
            </View>
        </View>
    );
};

export default NearbyJobs;
