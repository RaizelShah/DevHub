import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Switch,
    ScrollView,
    Alert,
    ActivityIndicator,
    SafeAreaView
} from "react-native";
import {useState} from "react";
import {useUser, useAuth} from "@clerk/clerk-expo";
import {icons} from "@/constants";
import {Link, router} from "expo-router";

const ProfileSettings = () => {
    const {user, isLoaded, isSignedIn} = useUser();
    const {signOut} = useAuth();
    const [darkMode, setDarkMode] = useState(true);
    const [notifications, setNotifications] = useState(true);

    // Toggle Functions
    const toggleDarkMode = () => setDarkMode((prev) => !prev);
    const toggleNotifications = () => setNotifications((prev) => !prev);

    // Logout Function
    const handleLogout = () => {
        Alert.alert(
            "Logout",
            "Are you sure you want to log out?",
            [
                {text: "Cancel", style: "cancel"},
                {
                    text: "Logout",
                    onPress: async () => {
                        await signOut();
                        console.log("Logged Out");
                        router.replace("/(auth)/Sign-In")
                    },
                },
            ],
            {cancelable: true}
        );
    };

    // Loading State
    if (!isLoaded) {
        return (
            <View className="flex-1 justify-center items-center bg-background">
                <ActivityIndicator size="large" color="#4F46E5"/>
            </View>
        );
    }

    // Check if user is signed in
    if (!isSignedIn) {
        return (
            <View className="flex-1 justify-center items-center bg-background">
                <Text className="text-textPrimary">You are not signed in.</Text>
                <Link href="/(auth)/Sign-In">
                    <Text className="text-textPrimary">Sign In</Text>
                </Link>
            </View>
        );
    }

    return (
        <SafeAreaView className="w-full h-full">
            <ScrollView
                className="flex-1 bg-background px-4 pt-6"
                showsVerticalScrollIndicator={false}
            >
                {/* Profile Section */}
                <View className="items-center mb-6">
                    <Image
                        source={{uri: user?.imageUrl}}
                        className="w-24 h-24 rounded-full mb-3"
                    />
                    <Text className="text-2xl font-semibold text-textPrimary">
                        {user?.firstName ? user?.firstName : user?.emailAddresses[0].emailAddress.split('@')[0]}
                    </Text>
                    <Text className="text-textSecondary">{user.primaryEmailAddress?.emailAddress}</Text>
                    <TouchableOpacity className="mt-4 bg-primary rounded-full py-2 px-4">
                        <Text className="text-white font-semibold">Edit Profile</Text>
                    </TouchableOpacity>
                </View>

                {/* Account Settings */}
                <View className="bg-card p-4 rounded-xl mb-4">
                    <Text className="text-lg font-semibold text-textPrimary mb-2">
                        Account Settings
                    </Text>
                    <View className="mb-3">
                        <Text className="text-textSecondary">Email</Text>
                        <Text className="text-textPrimary">
                            {user.primaryEmailAddress?.emailAddress}
                        </Text>
                    </View>
                    <TouchableOpacity className="mt-2 bg-primary rounded-full py-2 px-4 w-40">
                        <Text className="text-white text-center font-semibold">
                            Change Password
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* App Settings */}
                <View className="bg-card p-4 rounded-xl mb-4">
                    <Text className="text-lg font-semibold text-textPrimary mb-2">
                        App Settings
                    </Text>
                    <View className="flex-row justify-between items-center mb-4">
                        <Text className="text-textPrimary">Dark Mode</Text>
                        <Switch
                            value={darkMode}
                            onValueChange={toggleDarkMode}
                            trackColor={{false: "#767577", true: "#81b0ff"}}
                            thumbColor={darkMode ? "#f5dd4b" : "#f4f3f4"}
                        />
                    </View>
                    <View className="flex-row justify-between items-center">
                        <Text className="text-textPrimary">Notifications</Text>
                        <Switch
                            value={notifications}
                            onValueChange={toggleNotifications}
                            trackColor={{false: "#767577", true: "#81b0ff"}}
                            thumbColor={notifications ? "#f5dd4b" : "#f4f3f4"}
                        />
                    </View>
                </View>

                {/* Other Actions */}
                <TouchableOpacity
                    className="flex-row items-center bg-card p-4 rounded-xl mb-4"
                    onPress={() => console.log("Navigate to About Screen")}
                >
                    <Image source={icons.sun} className="mr-3 w-5 h-5" resizeMode="contain"/>
                    {/*<SunIcon color="#fff" size={24} className="mr-3"/>*/}
                    <Text className="text-textPrimary text-lg">About App</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    className="flex-row items-center bg-error p-4 rounded-xl"
                    onPress={handleLogout}
                >
                    <Image source={icons.logout} className="mr-3 w-5 h-5" resizeMode="contain"/>
                    {/*<LogOutIcon color="#fff" size={24} className="mr-3"/>*/}
                    <Text className="text-white text-lg">Logout</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProfileSettings;
