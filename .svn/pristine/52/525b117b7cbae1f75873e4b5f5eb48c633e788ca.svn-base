import { AsyncStorage } from 'react-native';

export default class StorageUtil {

    /**
     * 保存一个Json对象
     * @param key
     * @param value
     * @param callback
     */
    static async saveJsonObject(key, value) {
        return await this.saveString(key, JSON.stringify(value));
    }


    /**
     * 获取一个Json对象
     * @param key
     * @param defaultObject
     */
    static async getJsonObject(key, defaultObject) {
        let result = null;
        try {
            result = await this.getString(key, null);
            result = await JSON.parse(result);
        } catch (err) {
            if (defaultObject) {
                return Promise.resolve(defaultObject);
            } else {
                return Promise.reject(err);
            }
        }
        return result;

    }


    /**
     * 保存一个值
     * @param key
     * @param value
     */
    static async saveString(key, value) {
        if (key != null && value != null) {
            //Key 与Value 都不为空
            try {
                await AsyncStorage.setItem(key, value);
                
            } catch (err) {
                return Promise.reject(err)
            }
            return Promise.resolve(true);
        } else {
            return Promise.reject({ "msg": "Key and value can not be null" });
        }
        
    }

    /**
     * 获取一个值
     * @param key
     * @param defaultValue
     */
    static async getString(key, defaultValue) {
        let result = null;
        let noDataError = { "msg": "No value found !" };
        if (key != null) {
            result = await AsyncStorage.getItem(key);
            console.log('获取结果=',result,defaultValue);
            return result ? result : defaultValue != null ? defaultValue : Promise.reject(noDataError);
        } else {
            if (defaultValue) {
                return Promise.resolve(defaultValue);
            } else {
                return Promise.reject(noDataError);
            }
        }

    }


    /**
     * 移除一个值
     * @param key
     */
    static async remove(key) {
        let result = true;
        try {
            result = await AsyncStorage.removeItem(key);
        } catch (err) {
            return Promise.reject(err)
        }
        return result;
    }


    /**
     * 获取所有已存储
     */
    static async getAllKeys() {
        let result = true;
        try {
            result = await AsyncStorage.getAllKeys();
        } catch (err) {
            return Promise.reject(err)
        }
        return result;
    }

}