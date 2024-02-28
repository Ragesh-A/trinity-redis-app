import * as redis from 'redis';
export class redisUtil {
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
            this.redisObj[configId] = client;
        }
    }

    static getInstance() {
        if (!redisUtil.redisInstance) {
            return redisUtil.redisInstance = new redisUtil();
        } else
            return redisUtil.redisInstance;
    }

    getConnection(id) {
        return this.redisObj[id];
    }

    async redisDB(configId, operation, key, value) {
        try {
            console.log('configId', configId);
            const client = this.getConnection(configId);
            if (typeof client === 'undefined') {
                throw new Error(this.invalidDbRefmsg);
            }
            if (operation == 'set') {
                return await client[operation](key, value);
            } else {
                const value = await client[operation](key);
                return value;
            }
        } catch (err) {
            console.error(err);
            return err;
        }
    }

    async redisSub(configId, channel, callback) {
        try {
            const subscriber = this.getConnection(configId);
            if (typeof subscriber === 'undefined') {
                throw new Error(this.invalidDbRefmsg);
            }
            await subscriber.subscribe(channel, (message) => {
                callback(message);
            });
        } catch (err) {
            console.error(err);
            return err;
        }
    }

    async redisPub(configId, channel, message) {
        try {
            const publisher = this.getConnection(configId);
            if (typeof publisher === 'undefined') {
                throw new Error(this.invalidDbRefmsg);
            }
            await publisher.publish(channel, message);
        } catch (err) {
            console.error(err);
            return err;
        }
    }

}