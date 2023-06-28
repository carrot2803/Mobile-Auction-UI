import { View, SafeAreaView, FlatList } from "react-native";
import { Card, Header, FocusBar } from "../components";
import { COLORS, DATA } from "../constants";
import { useState } from "react";

const Home = () => {
	const [data, setData] = useState(DATA);

	const handleSearch = (value) => {
		if (value.length === 0) setData(DATA);
		const filteredData = DATA.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
		if (filteredData.length === 0) setData(DATA);
		else setData(filteredData);
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<FocusBar background={COLORS.primary} />

			<View style={{ flex: 1 }}>
				<View style={{ zIndex: 0 }}>
					<FlatList
						data={data}
						renderItem={({ item }) => <Card data={item} />}
						keyExtractor={(item) => item.id}
						showsVerticalScrollIndicator={false}
						ListHeaderComponent={<Header onSearch={handleSearch} />}
					/>
				</View>
			</View>

			<View style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, zIndex: -1 }}>
				<View style={{ height: 300, backgroundColor: COLORS.primary }} />
				<View style={{ flex: 1, backgroundColor: COLORS.white }} />
			</View>
		</SafeAreaView>
	);
};

export default Home;
