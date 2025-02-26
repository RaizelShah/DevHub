import {Text, ScrollView, View} from "react-native";
import {icons} from "@/constants";
import InputField from "@/components/InputField";
import {useState} from "react";
import CustomButton from "@/components/CustomButton";
import {Link, useRouter} from "expo-router";
import OAuth from "@/components/OAuth";
import {useSignIn} from "@clerk/clerk-expo";

const SignIn = () => {
    const {signIn, setActive, isLoaded} = useSignIn();
    const router = useRouter();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const onSignInPress = async () => {
        if (!isLoaded) return;

        // Start the sign-in process using the email and password provided
        try {
            const signInAttempt = await signIn.create({
                identifier: form.email,
                password: form.password,
            });

            // If sign-in process is complete, set the created session as active
            // and redirect the user
            if (signInAttempt.status === "complete") {
                await setActive({session: signInAttempt.createdSessionId});
                router.replace("/(root)/(tabs)/Home");
            } else {
                // If the status isn't complete, check why. User might need to
                // complete further steps.
                console.error(JSON.stringify(signInAttempt, null, 2));
            }
        } catch (err) {
            // See https://clerk.com/docs/custom-flows/error-handling
            // for more info on error handling
            console.error(JSON.stringify(err, null, 2));
        }
    };
    return (
        <ScrollView className="flex-1 bg-background">
            <View className="flex-1 bg-background">
                <View className="w-full h-[250px] justify-center items-center">
                    <Text className="text-2xl text-textPrimary">
                        Welcome to DevHub! 👋
                    </Text>
                    <Text className="text-xl text-textPrimary">
                        Your Personalized Developer Companion
                    </Text>
                </View>

                <View className="p-5">
                    <InputField
                        label="Email"
                        placeholder="Enter your email"
                        icon={icons.email}
                        value={form.email}
                        onChangeText={(value) =>
                            setForm({
                                ...form,
                                email: value,
                            })
                        }
                    />
                    <InputField
                        label="Password"
                        placeholder="Enter your password"
                        icon={icons.lock}
                        secureTextEntry={true}
                        value={form.password}
                        onChangeText={(value) =>
                            setForm({
                                ...form,
                                password: value,
                            })
                        }
                    />

                    <CustomButton
                        title="Sign In"
                        onPress={onSignInPress}
                        className="mt-6"
                        textVariant="primary"
                    />

                    <OAuth/>
                    <Link
                        href="/(auth)/Sign-Up"
                        className="text-lg text-center text-textPrimary mt-10"
                    >
                        Don't have an account?{" "}
                        <Text className="text-textSecondary">Sign Up</Text>
                    </Link>
                </View>

                {/*  Verification Modal*/}
            </View>
        </ScrollView>
    );
};

export default SignIn;
