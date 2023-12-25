import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistencePropTypes } from "./type";

/**
 *
 * @param key
 * @param value
 * @returns
 */
export const setItemToStorage = async (
  key: persistencePropTypes,
  value: string,
) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    return;
  } catch (e) {
    console.log({ e });
    return;
  }
};

/**
 *
 * @param key
 * @returns
 */
export const getItemFromStorage = async (key: persistencePropTypes) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log({ e });
    return null;
  }
};

/**
 *
 * @param key
 * @returns
 */
export const removeItemFromStorage = async (key: persistencePropTypes) => {
  try {
    await AsyncStorage.removeItem(key);
    return;
  } catch (e) {
    console.log({ e });
    return;
  }
};
