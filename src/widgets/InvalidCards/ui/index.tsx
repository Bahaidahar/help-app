import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View, Text } from "react-native";
import { InvalidCard } from "@/src/entities/InvalidCard";
import { IInvalidCard } from "@/src/shared/interface";
import { COLORS, SIZES } from "@/src/shared/utils";

interface IInvalidCards {
  forInvalid: boolean;
  searchValue: string;
  isFoodProblem: boolean;
  isClothesProblem: boolean;
  isDrugsProblem: boolean;
  isChildProblem: boolean;
}

const InvalidCards = ({
  searchValue,
  isChildProblem,
  isClothesProblem,
  isDrugsProblem,
  isFoodProblem,
  forInvalid,
}: IInvalidCards) => {
  const initialCards = [
    {
      id: 1,
      name: "Baha Yelik",
      desc: "Senior plov developer",
      isFood: true,
      isChild: true,
      isBlind: true,
      isMedicine: false,
    },
    {
      id: 2,
      name: "Baha Yelik",
      desc: "Senior plov developer",
      isFood: false,
      isChild: true,
      isBlind: true,
      isMedicine: false,
    },
    {
      id: 3,
      name: "Baha Yelik",
      desc: "Senior plov developer",
      isFood: true,
      isChild: false,
      isBlind: true,
      isMedicine: false,
    },
    {
      id: 4,
      name: "Baha Yelik",
      desc: "Senior plov developer",
      isFood: true,
      isChild: true,
      isBlind: false,
      isMedicine: false,
    },
    {
      id: 5,
      name: "Baha Yelik",
      desc: "Senior plov developer",
      isFood: false,
      isChild: false,
      isBlind: true,
      isMedicine: false,
    },
    {
      id: 6,
      name: "Baha Yelik",
      desc: "Senior plov developer",
      isFood: true,
      isChild: false,
      isBlind: false,
      isMedicine: false,
    },
  ];

  const [filteredCards, setFilteredCards] = useState(initialCards);

  const renderItem = ({ item }: { item: IInvalidCard }) => (
    <InvalidCard
      forInvalid={forInvalid}
      isFood={item.isFood}
      isChild={item.isChild}
      isBlind={item.isBlind}
      isMedicine={item.isMedicine}
      key={item.id}
      id={item.id}
      name={item.name}
      desc={item.desc}
    />
  );

  const ItemSeparatorComponent = () => (
    <View style={{ height: SIZES.regular, backgroundColor: "transparent" }} />
  );

  const filterCards = () => {
    let filtered = initialCards;
    if (!searchValue.trim()) {
      setFilteredCards(initialCards);
    } else {
      filtered = initialCards.filter((card) =>
        card.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    if (isChildProblem) {
      filtered = filtered.filter((card) => card.isChild);
    }
    if (isClothesProblem) {
      filtered = filtered.filter((card) => card.isBlind);
    }
    if (isDrugsProblem) {
      filtered = filtered.filter((card) => card.isMedicine);
    }
    if (isFoodProblem) {
      filtered = filtered.filter((card) => card.isFood);
    }

    setFilteredCards(filtered);
  };

  useEffect(() => {
    filterCards();
  }, [
    searchValue,
    isChildProblem,
    isClothesProblem,
    isDrugsProblem,
    isFoodProblem,
  ]);

  return (
    <>
      {filteredCards.length === 0 ? (
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
          data={filteredCards}
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
