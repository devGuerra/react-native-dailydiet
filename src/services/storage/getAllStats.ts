import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatisticsData } from "@models/index";

import { STATS_COLLECTION } from "./config";

export async function getAllStats(): Promise<StatisticsData> {
  try {
    const data = await AsyncStorage.getItem(STATS_COLLECTION);
    return data !== null ? JSON.parse(data) : [];
  } catch (error) {
    console.error(error);
    throw error;
  }
}
