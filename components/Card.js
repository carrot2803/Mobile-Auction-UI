import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { SubInfo, Price, Title } from './SubInfo';
import { View, Image, Text } from 'react-native';
import { CircleBtn, RectBtn } from './Btn';

const Card = ({ data }) => {
	const nav = useNavigation();
	return (
		<View style={{
			backgroundColor: COLORS.white,
			borderRadius: SIZES.font,
			marginBottom: SIZES.extraLarge,
			margin: SIZES.base,
			...SHADOWS.dark
		}}>
			<View style={{ width: "100%", height: 250 }}>
				<Image
					source={data.image}
					resizeMode="cover"
					style={{
						width: "100%",
						height: "100%",
						borderTopLeftRadius: SIZES.font,
						borderTopRightRadius: SIZES.font,
					}}
				/>
			</View>
			<CircleBtn imgUrl={assets.heart} right={10} top={10} />
			<SubInfo />
			<View style={{ width: "100%", padding: SIZES.font }}>
				<Title
					title={data.name}
					subTitle={data.creator}
					titleSize={SIZES.large}
					subTitleSize={SIZES.small}
				/>

				<View style={{
					marginTop: SIZES.font,
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: 'center',
				}}>
					<Price price={data.price} />
					<RectBtn
						minWidth={120}
						fontSize={SIZES.font}
						handlePress={() => nav.navigate("Details", { data })}
					/>
				</View>
			</View>
		</View>
	)
}

export default Card