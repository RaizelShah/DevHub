import {Text, TouchableOpacity} from "react-native";
import ButtonProps from "@/types/type";

const getBgVariant = (variant: ButtonProps["bgVariant"]) => {
    switch (variant) {
        case "secondary":
            return "bg-[#8AB4F8]";
        case "primary":
            return "bg-[#1E90FF]";
        case "error":
            return "bg-[#FF4444]";
        case "success":
            return "bg-[#00C851]";
        case "outline":
            return "bg-transparent border-neutral-300 border-[0.5px]";
        default:
            return "bg-white";
    }
};
const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
    switch (variant) {
        case "primary":
            return "text-[#EAEAEA]";
        case "secondary":
            return "text-[#B0B0B0]";
        case "error":
            return "bg-[#FF4444]";
        case "success":
            return "bg-[#00C851]";
        default:
            return "text-black";
    }
};

const CustomButton = ({
                          onPress,
                          title,
                          bgVariant = "primary",
                          textVariant = "default",
                          IconLeft,
                          IconRight,
                          className,
                          ...props
                      }: ButtonProps) => (
    <TouchableOpacity
        onPress={onPress}
        className={`w-full rounded-full p-3 flex flex-row justify-center items-center ${getBgVariant(bgVariant)} ${className}`}
        {...props}
    >
        {IconLeft && <IconLeft/>}
        <Text className={`text-lg font-bold ${getTextVariantStyle(textVariant)}`}>
            {title}
        </Text>
        {IconRight && <IconRight/>}
    </TouchableOpacity>
);

export default CustomButton;
