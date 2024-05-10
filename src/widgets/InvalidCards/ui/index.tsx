import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View, Text } from "react-native";
import { InvalidCard } from "@/src/entities/InvalidCard";
import { IInvalidCard } from "@/src/shared/interface";
import { useColors, SIZES } from "@/src/shared/utils";
import { ICard } from "@/src/shared/interface/InvalidCard";

interface IInvalidCards {
  forInvalid: boolean;
  searchValue: string;
  cards: ICard[];
}

const InvalidCards = ({ searchValue, cards, forInvalid }: IInvalidCards) => {
  const COLORS = useColors();

  const renderItem = ({ item }: { item: ICard }) => (
    <InvalidCard forInvalid={forInvalid} key={item.id} {...item} />
  );

  const ItemSeparatorComponent = () => (
    <View style={{ height: SIZES.regular, backgroundColor: "transparent" }} />
  );

  return (
    <>
      {cards.length === 0 ? (
        <Text
          style={{
            textAlign: "center",
            fontSize: SIZES.medium,
            color: COLORS.contrat,
            paddingTop: SIZES.regular,
          }}
        >
          Извините, таких нет
        </Text>
      ) : (
        <FlatList
          data={cards}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={ItemSeparatorComponent}
          contentInset={{ bottom: 350 }}
        />
      )}
    </>
  );
};

export default InvalidCards;
