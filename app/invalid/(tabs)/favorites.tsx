// import { SafeAreaView, View } from "react-native";
// import React, { useState } from "react";
// import { useColors, SIZES } from "@/src/shared/utils";
// import { Stack } from "expo-router";
// import { P } from "@/src/shared/ui/Texts";
// import { InvalidCards } from "@/src/widgets/InvalidCards";

// const FavoritesScreen = () => {
//   const COLORS = useColors();
//   const [searchValue, setSearchValue] = useState("");
//   const [isFoodProblem, setIsFoodProblem] = useState(false);
//   const [isClothesProblem, setIsClothesProblem] = useState(false);
//   const [isDrugsProblem, setIsDrugsProblem] = useState(false);
//   const [isChildProblem, setIsChildProblem] = useState(false);
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
//       <Stack.Screen
//         options={{
//           headerStyle: { backgroundColor: COLORS.primary },
//           headerShadowVisible: false,
//           headerTitle: "",
//         }}
//       />
//       <View
//         style={{
//           padding: SIZES.semiMedium,
//           flexDirection: "column",
//           gap: SIZES.light,
//         }}
//       >
//         <View>
//           <P size="large" text="Мои заявки" color={COLORS.contrat} isCenter />
//         </View>
//         <InvalidCards
//           searchValue={searchValue}
//           isFoodProblem={isFoodProblem}
//           isClothesProblem={isClothesProblem}
//           isDrugsProblem={isDrugsProblem}
//           isChildProblem={isChildProblem}
//           forInvalid={false}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default FavoritesScreen;
