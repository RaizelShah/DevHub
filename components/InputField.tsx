import {
    TextInput,
    View,
    Text,
    Image,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
} from "react-native";

import {InputFieldProps} from "@/types/type";

const InputField = ({
                        label,
                        icon,
                        secureTextEntry = false,
                        labelStyle,
                        containerStyle,
                        inputStyle,
                        iconStyle,
                        className,
                        ...props
                    }: InputFieldProps) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className="my-2 w-full">
                    <View
                        className={`flex flex-row justify-start items-center relative bg-card rounded-full border border-neutral-100 focus:border-primary-500 ${containerStyle}`}
                    >
                        {icon && (
                            <Image source={icon} className={`w-6 h-6 ml-4 text-textSecondary ${iconStyle}`}/>
                        )}
                        <TextInput
                            className={`rounded-full p-4 text-textSecondary text-[15px] ${inputStyle} text-left`}
                            secureTextEntry={secureTextEntry}
                            {...props}
                            placeholderTextColor="#B0B0B0"
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default InputField;
