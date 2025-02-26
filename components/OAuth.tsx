import {Text, View, Image} from "react-native";
import CustomButton from "@/components/CustomButton";
import {icons} from "@/constants";
import * as WebBrowser from 'expo-web-browser'
import * as AuthSession from 'expo-auth-session'
import {useSSO} from '@clerk/clerk-expo'
import React, {useCallback, useEffect} from 'react'
import {router} from "expo-router";

export const useWarmUpBrowser = () => {
    useEffect(() => {
        // Preloads the browser for Android devices to reduce authentication load time
        // See: https://docs.expo.dev/guides/authentication/#improving-user-experience
        void WebBrowser.warmUpAsync()
        return () => {
            // Cleanup: closes browser when component unmounts
            void WebBrowser.coolDownAsync()
        }
    }, [])
}

WebBrowser.maybeCompleteAuthSession() // Ensure smooth auth session handling

const OAuth = () => {
    useWarmUpBrowser()
    const {startSSOFlow} = useSSO()

    const handleGoogleSignIn = useCallback(async () => {
        try {
            // Start the authentication process by calling `startSSOFlow()`
            const {createdSessionId, setActive, signIn, signUp} = await startSSOFlow({
                strategy: 'oauth_google',
                // Defaults to current path
                redirectUrl: AuthSession.makeRedirectUri(),
            })

            // If sign in was successful, set the active session
            if (createdSessionId) {
                await setActive!({session: createdSessionId})
                router.replace("/(root)/(tabs)/Home")
            } else {
                // If there is no `createdSessionId`,
                // there are missing requirements, such as MFA
                // Use the `signIn` or `signUp` returned from `startSSOFlow`
                // to handle next steps
            }
        } catch (err) {
            // See https://clerk.com/docs/custom-flows/error-handling
            // for more info on error handling
            console.error(JSON.stringify(err, null, 2))
        }
    }, [])

    return (
        <View>
            <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
                <View className="flex-1 h-[1px] bg-general-100"/>
                <Text className="text-lg text-textSecondary">Or</Text>
                <View className="flex-1 h-[1px] bg-general-100"/>
            </View>

            <CustomButton
                title="Log In with Google"
                className="mt-5 w-full shadow-none"
                IconLeft={() => (
                    <Image
                        source={icons.google}
                        resizeMode="contain"
                        className="w-5 h-5 mx-2"
                    />
                )}
                bgVariant="default"
                textVariant="default"
                onPress={handleGoogleSignIn}
            />
        </View>
    );
};

export default OAuth;
