import * as configNodes from './config/configNodes';
//append_imports_start

import { MongoConnections } from './utils/ndefault-mongodb/Mongodb/MongoConnections'; //_splitter_
import { sessionObject } from './entity/ndefault-session/Session/Session'; //_splitter_
import { LoggerTypeorm } from './utils/ndefault-sql/ExecuteSql/LoggerTypeorm'; //_splitter_
import * as log from './utils/Logger'; //_splitter_
import { createConnection } from './typeormUtils'; //_splitter_
import { sep } from 'path'; //_splitter_
import { redisUtil } from './utils/neutrinos-redis/6189ff69-47a2-54d4-9dbc-f0faf16be9db/redisUtil'; //_splitter_
import { RedisUtil } from './utils/neutrinos-redis-om/6189ff69-47a2-54d4-9dbc-f0faf16be9dq/redisUtil'; //_splitter_
//append_imports_end
export let StartScripts = [
  //appendnew_flow

  //__start__script__neutrinos-redis-om
  async () => {
    let redisConnection = RedisUtil.getInstance();
    function isDBDisabled(flag) {
      return typeof flag === 'boolean' && flag;
    }
    const dbConfig =
      configNodes.default['6189ff69-47a2-54d4-9dbc-f0faf16be9dq'];
    if (dbConfig) {
      const dbConfigsList = Object.keys(dbConfig);
      for (let i = 0; i < dbConfigsList.length; i++) {
        if (
          dbConfig[dbConfigsList[i]] &&
          !isDBDisabled(dbConfig[dbConfigsList[i]].disableDatabase)
        ) {
          let dbOption = dbConfig[dbConfigsList[i]];
          await redisConnection.redisClientConnect(dbOption, dbConfigsList[i]);
        }
      }
    }
  },
  //__start__script__neutrinos-redis-om__end

  //__start__script__neutrinos-redis
  async () => {
    let redisConnection = redisUtil.getInstance();
    function isDBDisabled(flag) {
      return typeof flag === 'boolean' && flag;
    }
    const dbConfig =
      configNodes.default['6189ff69-47a2-54d4-9dbc-f0faf16be9db'];
    if (dbConfig) {
      const dbConfigsList = Object.keys(dbConfig);
      for (let i = 0; i < dbConfigsList.length; i++) {
        if (
          dbConfig[dbConfigsList[i]] &&
          !isDBDisabled(dbConfig[dbConfigsList[i]].disableDatabase)
        ) {
          let dbOption = dbConfig[dbConfigsList[i]];
          await redisConnection.redisClientConnect(dbOption, dbConfigsList[i]);
        }
      }
    }
  },
  //__start__script__neutrinos-redis__end

  //__start__script__ndefault-sql
  async () => {
    const dbConfig = configNodes.default['db-config'];
    if (!dbConfig) {
      return;
    }
    const isValidDbConfig = (dbConf) =>
      dbConf?.dbOption &&
      !(typeof dbConf.disabledb === 'boolean' && dbConf.disabledb) &&
      dbConf.dbOption.type !== 'mongodb';
    const ormConfig: any[] = Object.values(dbConfig)
      .filter(isValidDbConfig)
      .map((dbConf: any) => {
        const { dbOption, erdPath } = dbConf;
        if (!erdPath) {
          log.default.info('ERD relative path not found.');
          log.default.info('ERD entities will be ignored.');
        }
        if (typeof dbOption.port === 'string') {
          dbOption.port = parseInt(dbOption.port);
        }
        dbOption.entities = erdPath
          ? [`${__dirname + sep}entities${sep}${erdPath}/*{.ts,.js}`].concat(
              sessionObject[dbOption.type]
            )
          : sessionObject[dbOption.type];
        dbOption.logger = new LoggerTypeorm(log.default);
        return dbOption;
      })
      .map((dbOption) => {
        return createConnection(dbOption.name, dbOption);
      });
    await Promise.all(ormConfig);
  },
  //__start__script__ndefault-sql__end

  //__start__script__ndefault-mongodb
  async () => {
    const monogConnections = MongoConnections.getInstance();
    const dbConfig = configNodes.default['db-config'];
    if (!dbConfig) {
      return;
    }
    const isValidDbConfig = (dbConf) =>
      dbConf?.dbOption &&
      !(typeof dbConf.disabledb === 'boolean' && dbConf.disabledb) &&
      dbConf.dbOption.type === 'mongodb';
    const dbConfigKeys = Object.keys(dbConfig).filter((key) =>
      isValidDbConfig(dbConfig[key])
    );
    for (const dbConfigKey of dbConfigKeys) {
      const dbOption = dbConfig[dbConfigKey].dbOption;
      await monogConnections.newConnection(dbOption, dbConfigKey);
    }
  },
  //__start__script__ndefault-mongodb__end
];
