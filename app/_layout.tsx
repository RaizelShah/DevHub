import {Stack} from "expo-router";
import {ClerkProvider, ClerkLoaded} from "@clerk/clerk-expo";
import {tokenCache} from "@/cache";
import '../global.css';

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

export default function RootLayout() {
    if (!publishableKey) {
        throw new Error("Add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY to your .env file");
    }
    return (
        <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
            <ClerkLoaded>
                <Stack>
                    <Stack.Screen name="index" options={{headerShown: false}}/>
                    <Stack.Screen name="(root)" options={{headerShown: false}}/>
                    <Stack.Screen name="(auth)" options={{headerShown: false}}/>
                </Stack>
            </ClerkLoaded>
        </ClerkProvider>
    );
}
