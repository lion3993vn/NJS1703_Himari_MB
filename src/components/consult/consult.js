import React from "react";
import { View, Text, FlatList } from "react-native";

const Consults = ({ groupedData }) => {
  const categories = Object.keys(groupedData || {});

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item}
      ListEmptyComponent={
        <View className="mt-72">
          <Text className="text-center text-gray-500 text-2xl -tracking-tighter">
            Bạn đang gặp vấn đề về da?{"\n"}Đừng lo, hãy đặt câu hỏi để được
            chuyên gia tư vấn ngay!
          </Text>
        </View>
      }
      renderItem={({ item }) => (
        <View>
          <Text className="text-pink-600 text-xl font-bold pt-6">{item}</Text>
          {groupedData[item]?.map((consult) => (
            <View
              key={consult.id}
              className="flex-row justify-between px-2 py-1 bg-[rgba(118,112,118,0.1)] rounded-lg mt-2"
            >
              {/* Container for bodyPart with flex to center it */}
              <View className="bg-[#FE99AD] my-auto rounded-lg w-[84px] h-8 justify-center items-center">
                <Text className="text-white text-center font-semibold">
                  {consult.bodyPart}
                </Text>
              </View>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                className="text-gray-700 my-auto flex-1 text-lg px-2"
              >
                {consult.message}
              </Text>
              <Text className="text-gray-500">{consult.time}</Text>
            </View>
          ))}
        </View>
      )}
    />
  );
};

export default Consults;
