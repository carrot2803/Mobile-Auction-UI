import { CircleBtn, RectBtn, SubInfo, FocusBar, DetailsDesc, DetailsCost } from "../components";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";
import React from "react";

const DetailsHeader = ({ data, navigation }) => (
	<View style={{ width: "100%", height: 373 }}>
		<Image source={data.image} resizeMode="cover" style={{ width: "100%", height: "100%" }} />
		<CircleBtn
			imgUrl={assets.left}
			handlePress={() => navigation.goBack()}
			left={15}
			top={StatusBar.currentHeight + 10}
		/>
		<CircleBtn
			imgUrl={assets.heart}
			handlePress={() => navigation.goBack()}
			right={15}
			top={StatusBar.currentHeight + 10}
		/>
	</View>
);

const Details = ({ route, navigation }) => {
	const { data } = route.params;
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<FocusBar barStyle="dark-content" backgroundColor="transparent" transcluent={true} />

			<View
				style={{
					width: "100%",
					position: "absolute",
					bottom: 0,
					paddingBottom: 40,
					paddingVertical: SIZES.font,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "rgba(255,255,255,0.5)",
					zIndex: 1,
				}}
			>
				<RectBtn minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
			</View>

			<FlatList
				data={data.bids}
				renderItem={({ item }) => <DetailsCost bid={item} />}
				keyExtractor={(item) => item.id}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
				ListHeaderComponent={() => (
					<React.Fragment>
						<DetailsHeader data={data} navigation={navigation} />
						<SubInfo />
						<View style={{ padding: SIZES.font }}>
							<DetailsDesc data={data} />

							{data.bids.length > 0 && (
								<Text
									style={{ fontSize: SIZES.font, fontFamily: FONTS.semiBold, color: COLORS.primary }}
								>
									Current Bids
								</Text>
							)}
						</View>
					</React.Fragment>
				)}
			/>
		</SafeAreaView>
	);
};

export default Details;
