import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES, assets } from "../constants";

const Header = ({ onSearch }) => {
	return (
		<View style={{ backgroundColor: COLORS.primary, padding: SIZES.font }}>
			<View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
				<Image source={assets.logo} resizeMode="contain" style={{ width: 90, height: 25 }} />

				<TouchableOpacity style={{ width: 45, height: 45 }}>
					{/* Profile pic */}
					<Image source={assets.person01} resizeMode="contain" style={{ width: "100%", height: "100%" }} />
					<Image
						source={assets.badge}
						resizeMode="contain"
						style={{ position: "absolute", width: 20, height: 20, bottom: 0, right: 0 }}
					/>
				</TouchableOpacity>
			</View>
			<View style={{ marginVertical: SIZES.font }}>
				<Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.white }}>
					{" "}
					Hi Astronauts! 🚀
				</Text>

				<Text
					style={{
						fontFamily: FONTS.bold,
						fontSize: SIZES.large,
						color: COLORS.white,
						marginTop: SIZES.base / 2,
					}}
				>
					Lets buy Art!
				</Text>
			</View>

			<View style={{ marginTop: SIZES.font }}>
				<View
					style={{
						width: "100%",
						borderRadius: SIZES.font,
						backgroundColor: COLORS.gray,
						flexDirection: "row",
						alignItems: "center",
						paddingHorizontal: SIZES.font,
						paddingVertical: SIZES.small - 2,
					}}
				>
					<Image source={assets.search} style={{ width: 20, height: 20, marginRight: SIZES.base }} />
					<TextInput placeholder="Search Art" style={{ flex: 1 }} onChangeText={onSearch} />
				</View>
			</View>
		</View>
	);
};

export default Header;
