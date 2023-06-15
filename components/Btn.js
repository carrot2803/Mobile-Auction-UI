import { COLORS, SIZES, SHADOWS, assets, FONTS } from '../constants';
import { TouchableOpacity, Image, Text } from 'react-native';
import React from 'react'

export const CircleBtn = ({ imgUrl, handlePress, ...props }) => {
	return (
		<TouchableOpacity style={{
			width: 40,
			height: 40,
			backgroundColor: COLORS.white,
			position: "absolute",
			borderRadius: SIZES.extraLarge,
			alignItems: 'center',
			justifyContent: 'center',
			...SHADOWS.light,
			...props,
		}}
			onPress={handlePress}
		>
			<Image
				source={imgUrl}
				resizeMode="contain"
				style={{ width: 24, height: 24 }}
			/>
		</TouchableOpacity>
	);
}

export const RectBtn = ({ minWidth, fontSize, handlePress, ...props }) => {
	return (
		<TouchableOpacity style={{
			backgroundColor: COLORS.primary,
			borderRadius: SIZES.extraLarge,
			minWidth: minWidth,
			padding: SIZES.small,
			...props,
		}}
			onPress={handlePress}
		>
			<Text style={{
				fontFamily: FONTS.semiBold,
				fontSize: fontSize,
				color: COLORS.white,
				textAlign: 'center'
			}}>
				Buy Now
			</Text>
		</TouchableOpacity>
	);
}


