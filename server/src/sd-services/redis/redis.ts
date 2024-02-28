// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { Middleware } from '../../middleware/Middleware'; //_splitter_
import * as settings from '../../config/config'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import { redisUtil } from '../../utils/neutrinos-redis/6189ff69-47a2-54d4-9dbc-f0faf16be9db/redisUtil'; //_splitter_
import { RedisUtil } from '../../utils/neutrinos-redis-om/6189ff69-47a2-54d4-9dbc-f0faf16be9dq/redisUtil'; //_splitter_
//append_imports_end
export class redis {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'redis';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new redis(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_redis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: redis');
    //appendnew_flow_redis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: redis');

    this.app['post'](
      `${this.serviceBasePath}/redis/get`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_Np9ResJjvH7Nuh4l(bh, parentSpanInst);
          //appendnew_next_sd_aqActn6PayOx9ZDQ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_aqActn6PayOx9ZDQ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/redis/set`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_SfX6GnFFvHvFCDVG(bh, parentSpanInst);
          //appendnew_next_sd_HAlv7s1BJDQ7jXn0
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_HAlv7s1BJDQ7jXn0');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/test`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_l3owUrUuQVZlwEY3(bh, parentSpanInst);
          //appendnew_next_sd_99vJ35JjFrvzGO4y
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_99vJ35JjFrvzGO4y');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_redis_HttpIn
  }
  //   service flows_redis

  //appendnew_flow_redis_start

  async sd_Np9ResJjvH7Nuh4l(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Np9ResJjvH7Nuh4l',
      parentSpanInst
    );
    try {
      bh.local.key = bh.input.body.key;
      bh.local.value = 'dell';

      this.tracerService.sendData(spanInst, bh);
      bh = await this.redisDb(bh, parentSpanInst);
      //appendnew_next_sd_Np9ResJjvH7Nuh4l
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Np9ResJjvH7Nuh4l',
        spanInst,
        'sd_Np9ResJjvH7Nuh4l'
      );
    }
  }

  async redisDb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('redisDb', parentSpanInst);
    try {
      bh.local.result = await redisUtil
        .getInstance()
        .redisDB('sd_B6hyTS5rzRtd9MNH', 'get', bh.local.key, bh.local.value);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_aWyTbBGL4hyE2Dih(bh, parentSpanInst);
      //appendnew_next_redisDb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MhjBzjyD6o8YK5g9',
        spanInst,
        'redisDb'
      );
    }
  }

  async sd_aWyTbBGL4hyE2Dih(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aWyTbBGL4hyE2Dih',
      parentSpanInst
    );
    try {
      console.log(bh.local.result, 'Resulttttttt');
      this.tracerService.sendData(spanInst, bh);
      await this.sd_U7eb2NmnoabZ0T3P(bh, parentSpanInst);
      //appendnew_next_sd_aWyTbBGL4hyE2Dih
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aWyTbBGL4hyE2Dih',
        spanInst,
        'sd_aWyTbBGL4hyE2Dih'
      );
    }
  }

  async sd_U7eb2NmnoabZ0T3P(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_U7eb2NmnoabZ0T3P');
    }
  }

  async sd_SfX6GnFFvHvFCDVG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SfX6GnFFvHvFCDVG',
      parentSpanInst
    );
    try {
      bh.local.key = bh.input.body.key;
      bh.local.value = bh.input.body.value;

      console.log(bh.input);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.redisSetDb(bh, parentSpanInst);
      //appendnew_next_sd_SfX6GnFFvHvFCDVG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SfX6GnFFvHvFCDVG',
        spanInst,
        'sd_SfX6GnFFvHvFCDVG'
      );
    }
  }

  async redisSetDb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'redisSetDb',
      parentSpanInst
    );
    try {
      bh.local.result = await redisUtil
        .getInstance()
        .redisDB('sd_B6hyTS5rzRtd9MNH', 'set', bh.local.key, bh.local.value);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Wr5nARtmonBESCDc(bh, parentSpanInst);
      //appendnew_next_redisSetDb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gJiCCNm38zhJcJIx',
        spanInst,
        'redisSetDb'
      );
    }
  }

  async sd_Wr5nARtmonBESCDc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Wr5nARtmonBESCDc',
      parentSpanInst
    );
    try {
      console.log(bh.local.result, 'Resulttttttt');
      this.tracerService.sendData(spanInst, bh);
      await this.sd_ZGQIkt9FiplBNLo6(bh, parentSpanInst);
      //appendnew_next_sd_Wr5nARtmonBESCDc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Wr5nARtmonBESCDc',
        spanInst,
        'sd_Wr5nARtmonBESCDc'
      );
    }
  }

  async sd_ZGQIkt9FiplBNLo6(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZGQIkt9FiplBNLo6');
    }
  }

  async sd_l3owUrUuQVZlwEY3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_l3owUrUuQVZlwEY3',
      parentSpanInst
    );
    try {
      bh.local.redis = await RedisUtil.getInstance()['getConnection'](
        'sd_3Sl10QmXLUOy6tXy'
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.basicSetGet(bh, parentSpanInst);
      //appendnew_next_sd_l3owUrUuQVZlwEY3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_l3owUrUuQVZlwEY3',
        spanInst,
        'sd_l3owUrUuQVZlwEY3'
      );
    }
  }

  async basicSetGet(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'basicSetGet',
      parentSpanInst
    );
    try {
      const { redis } = bh.local.redis;

      // SEARCH
      const data = await redis.ft.search;

      // SET
      const data1 = await redis.json.set('name', '$', { name: 'abu' });

      // GET
      const data2 = await redis.json.get('name', '$');

      console.log('this is seatch data', data);
      console.log('this is set data', data1);
      console.log('this is get data', data2);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.schemaAndIndex(bh, parentSpanInst);
      //appendnew_next_basicSetGet
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_w0ZcjOOZDwZ2WNyc',
        spanInst,
        'basicSetGet'
      );
    }
  }

  async schemaAndIndex(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'schemaAndIndex',
      parentSpanInst
    );
    try {
      const { redis: client } = bh.local.redis;

      const schema = {
        '$.brand': {
          type: 'TEXT',
          SORTABLE: true,
          AS: 'brand',
        },
        '$.model': {
          type: 'TEXT',
          AS: 'model',
        },
        '$.description': {
          type: 'TEXT',
          AS: 'description',
        },
        '$.price': {
          type: 'NUMERIC',
          AS: 'price',
        },
      };

      // creating index the name of schema is idx:bicycle used for the query
      try {
        await client.ft.create('idx:bicycle', schema, {
          ON: 'JSON',
          PREFIX: 'bicycle:',
        });
      } catch (e) {
        console.log(e);
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.searchRedis(bh, parentSpanInst);
      //appendnew_next_schemaAndIndex
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zwOCAznhcyC9POAx',
        spanInst,
        'schemaAndIndex'
      );
    }
  }

  async searchRedis(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'searchRedis',
      parentSpanInst
    );
    try {
      const { redis: client } = bh.local.redis;

      let result = await client.ft.search(
        'idx:bicycle', // schema to search
        '@brand:"Velorim"', // condition to search eg: @feild: "value"
        {
          // options
          LIMIT: {
            from: 0,
            size: 10,
          },
          PROJECTION: ['price'],
        }
      );

      bh.local.result = result;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_dueOSf0z879FDKeA(bh, parentSpanInst);
      //appendnew_next_searchRedis
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CtwOMUlk2TXSAj9D',
        spanInst,
        'searchRedis'
      );
    }
  }

  async sd_dueOSf0z879FDKeA(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dueOSf0z879FDKeA');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_redis_Catch
}
