import * as redis from 'redis';
import { Client } from 'redis-om'
export class RedisUtil {
    invalidDbRefmsg = 'Invalid config. Please select properconfig';
    public static redisInstance;
    private redisObj = {};

    constructor() { }

    async redisClientConnect(config, configId) {
        let option = {};
        let optionProp = [
            "url", "username", "password", "database", "commandsQueueMaxLength",
            "disableOfflineQueue", "readonly", "legacyMode", "name"
        ];
        const socketOptions = [
            "host", "port", "family",
            "path", "connectTimeout", "noDelay",
            "keepAlive", "tls", "reconnectStrategy"
        ];

        if (config.enableSocket) {
            optionProp.push("socket");
        }
        if (config.connectionName) {
            config['name'] = config.connectionName;
        }

        optionProp.forEach((ele) => {
            if (config[ele] !== "" && config[ele] !== 0) {
                if (ele === "socket") {
                    option[ele] = {};
                    socketOptions.forEach(key => {
                        if (config[key] !== "" && config[key] !== 0) {
                            option[ele][key] = config[key];
                        }
                    });
                } else {
                    option[ele] = config[ele];
                }
            }
        });
        const client = redis.createClient(option);
        if (client) {
            await client.connect();
            this.redisObj[configId] = await new Client().use(client);
        }
    }

    static getInstance() {
        if (!RedisUtil.redisInstance) {
            return RedisUtil.redisInstance = new RedisUtil();
        } else
            return RedisUtil.redisInstance;
    }

    getConnection(id) {
        return this.redisObj[id];
    }

}