import { useMemo, useContext } from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import { LineChart } from "react-native-gifted-charts";

import Card from "@/components/Card";
import Text from "@/components/Text";
import { CategoryContext } from "@/contexts/CategoryProvider";
import CategoryItem from "@/components/CategoryItem";
import { Palette } from "@/theme";

const EXPENSES_DATA = [
  {
    value: 123900,
    dataPointText: "123,900",
    label: "Jan",
  },
  {
    value: 84300,
    dataPointText: "84,300",
    label: "Feb",
  },
  {
    value: 50000,
    dataPointText: "50,000",
    label: "Mar",
  },
  {
    value: 89900,
    dataPointText: "89,900",
    label: "Apr",
  },
  {
    value: 76000,
    dataPointText: "76,000",
    label: "May",
  },
  {
    value: 90764,
    dataPointText: "90,764",
    label: "Jun",
  },
  {
    value: 100210,
    dataPointText: "100,210",
    label: "Jul",
  },
  {
    value: 99098,
    dataPointText: "99,098",
    label: "Aug",
  },
  {
    value: 75647,
    dataPointText: "75,647",
    label: "Sep",
  },
  {
    value: 85655,
    dataPointText: "85,655",
    label: "Oct",
  },
  {
    value: 104300,
    dataPointText: "104,300",
    label: "Nov",
  },
  {
    value: 83000,
    dataPointText: "83,000",
    label: "Dec",
  },
];
const INCOME_DATA = [
  {
    value: 90000,
    dataPointText: "123,900",
    label: "Jan",
  },
  {
    value: 174000,
    dataPointText: "84,300",
    label: "Feb",
  },
  {
    value: 104000,
    dataPointText: "50,000",
    label: "Mar",
  },
  {
    value: 109500,
    dataPointText: "89,900",
    label: "Apr",
  },
  {
    value: 80789,
    dataPointText: "76,000",
    label: "May",
  },
  {
    value: 120499,
    dataPointText: "90,764",
    label: "Jun",
  },
  {
    value: 149700,
    dataPointText: "100,210",
    label: "Jul",
  },
  {
    value: 85400,
    dataPointText: "99,098",
    label: "Aug",
  },
  {
    value: 120000,
    dataPointText: "75,647",
    label: "Sep",
  },
  {
    value: 134700,
    dataPointText: "85,655",
    label: "Oct",
  },
  {
    value: 74000,
    dataPointText: "104,300",
    label: "Nov",
  },
  {
    value: 190000,
    dataPointText: "83,000",
    label: "Dec",
  },
];

export default function Home() {
  const [categories] = useContext(CategoryContext);

  const [maxOffset, minOffset] = useMemo(() => {
    const incomeValues = INCOME_DATA?.map((income) => income.value);
    const expenseValues = EXPENSES_DATA?.map((expense) => expense.value);

    const minValue = [...incomeValues, ...expenseValues].sort(
      (a, b) => a - b,
    )?.[0];
    const maxValue = [...incomeValues, ...expenseValues].sort(
      (a, b) => b - a,
    )?.[0];

    return [
      // !!maxValue ? maxValue + 10000 : maxValue,
      maxValue,
      !!minValue ? minValue - 10000 : minValue,
    ];
  }, [INCOME_DATA, EXPENSES_DATA]);

  const dummyTopSpending = useMemo(() => {
    return categories
      ?.map((category) => ({
        ...category,
        amount: Math.floor(Math.random() * 40000) + 1,
        transactions: Math.floor(Math.random() * 10) + 1,
      }))
      .sort((a, b) => b.amount - a.amount);
  }, [categories]);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <Card style={styles.chartCardContainer}>
              <Text style={styles.chartTitle}>
                Income &times; Expense Overview
              </Text>
              <View style={styles.chartContainer}>
                <LineChart
                  hideYAxisText
                  curved
                  isAnimated
                  animateOnDataChange
                  // hideRules
                  showValuesAsDataPointsText
                  focusEnabled
                  // showStripOnFocus
                  showTextOnFocus
                  delayBeforeUnFocus={1500}
                  yAxisOffset={minOffset}
                  yAxisColor="transparent"
                  xAxisColor="transparent"
                  xAxisLabelTextStyle={{
                    color: Palette.text.secondary,
                    fontWeight: 600,
                    fontFamily: "Exo2-Medium",
                  }}
                  maxValue={maxOffset}
                  textShiftY={-4}
                  textShiftX={-10}
                  endSpacing={-24}
                  data={EXPENSES_DATA}
                  data2={INCOME_DATA}
                  color1="#ff6581"
                  color2="#bbf1a1"
                  dataPointsColor1="#ff6581"
                  dataPointsColor2="#bbf1a1"
                />
              </View>
            </Card>
            <Text style={styles.topExpenseHeader}>Top 5 Expenses</Text>
          </>
        }
        ListHeaderComponentStyle={styles.listHeaderComponentStyle}
        ItemSeparatorComponent={() => (
          <View style={{ width: "100%", height: 16 }} />
        )}
        data={dummyTopSpending}
        renderItem={({ item }) => <CategoryItem item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  chartCardContainer: {
    marginBottom: 16,
  },
  chartContainer: {
    overflow: "hidden",
    marginLeft: -8, // Offset the chart's left spacing
    marginTop: 8,
  },
  chartTitle: {
    fontWeight: 600,
    fontSize: 16,
  },
  customDatapoint: {
    width: 20,
    height: 20,
    borderRadius: 999,
    backgroundColor: "red",
  },
  listHeaderComponentStyle: {
    marginTop: 24,
    marginBottom: 16,
  },
  topExpenseHeader: {
    fontSize: 24,
    fontWeight: 600,
  },
});
