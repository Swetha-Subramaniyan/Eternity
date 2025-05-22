
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AddCustomer
 * 
 */
export type AddCustomer = $Result.DefaultSelection<Prisma.$AddCustomerPayload>
/**
 * Model AddCasting
 * 
 */
export type AddCasting = $Result.DefaultSelection<Prisma.$AddCastingPayload>
/**
 * Model AddFiling
 * 
 */
export type AddFiling = $Result.DefaultSelection<Prisma.$AddFilingPayload>
/**
 * Model AddSetting
 * 
 */
export type AddSetting = $Result.DefaultSelection<Prisma.$AddSettingPayload>
/**
 * Model AddBuffing
 * 
 */
export type AddBuffing = $Result.DefaultSelection<Prisma.$AddBuffingPayload>
/**
 * Model AddItem
 * 
 */
export type AddItem = $Result.DefaultSelection<Prisma.$AddItemPayload>
/**
 * Model AddPurchaseStock
 * 
 */
export type AddPurchaseStock = $Result.DefaultSelection<Prisma.$AddPurchaseStockPayload>
/**
 * Model Casting
 * 
 */
export type Casting = $Result.DefaultSelection<Prisma.$CastingPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AddCustomers
 * const addCustomers = await prisma.addCustomer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AddCustomers
   * const addCustomers = await prisma.addCustomer.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.addCustomer`: Exposes CRUD operations for the **AddCustomer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AddCustomers
    * const addCustomers = await prisma.addCustomer.findMany()
    * ```
    */
  get addCustomer(): Prisma.AddCustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.addCasting`: Exposes CRUD operations for the **AddCasting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AddCastings
    * const addCastings = await prisma.addCasting.findMany()
    * ```
    */
  get addCasting(): Prisma.AddCastingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.addFiling`: Exposes CRUD operations for the **AddFiling** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AddFilings
    * const addFilings = await prisma.addFiling.findMany()
    * ```
    */
  get addFiling(): Prisma.AddFilingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.addSetting`: Exposes CRUD operations for the **AddSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AddSettings
    * const addSettings = await prisma.addSetting.findMany()
    * ```
    */
  get addSetting(): Prisma.AddSettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.addBuffing`: Exposes CRUD operations for the **AddBuffing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AddBuffings
    * const addBuffings = await prisma.addBuffing.findMany()
    * ```
    */
  get addBuffing(): Prisma.AddBuffingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.addItem`: Exposes CRUD operations for the **AddItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AddItems
    * const addItems = await prisma.addItem.findMany()
    * ```
    */
  get addItem(): Prisma.AddItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.addPurchaseStock`: Exposes CRUD operations for the **AddPurchaseStock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AddPurchaseStocks
    * const addPurchaseStocks = await prisma.addPurchaseStock.findMany()
    * ```
    */
  get addPurchaseStock(): Prisma.AddPurchaseStockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.casting`: Exposes CRUD operations for the **Casting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Castings
    * const castings = await prisma.casting.findMany()
    * ```
    */
  get casting(): Prisma.CastingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AddCustomer: 'AddCustomer',
    AddCasting: 'AddCasting',
    AddFiling: 'AddFiling',
    AddSetting: 'AddSetting',
    AddBuffing: 'AddBuffing',
    AddItem: 'AddItem',
    AddPurchaseStock: 'AddPurchaseStock',
    Casting: 'Casting'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "addCustomer" | "addCasting" | "addFiling" | "addSetting" | "addBuffing" | "addItem" | "addPurchaseStock" | "casting"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AddCustomer: {
        payload: Prisma.$AddCustomerPayload<ExtArgs>
        fields: Prisma.AddCustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddCustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddCustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddCustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddCustomerPayload>
          }
          findFirst: {
            args: Prisma.AddCustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddCustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddCustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddCustomerPayload>
          }
          findMany: {
            args: Prisma.AddCustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddCustomerPayload>[]
          }
          create: {
            args: Prisma.AddCustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddCustomerPayload>
          }
          createMany: {
            args: Prisma.AddCustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AddCustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddCustomerPayload>
          }
          update: {
            args: Prisma.AddCustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddCustomerPayload>
          }
          deleteMany: {
            args: Prisma.AddCustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddCustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AddCustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddCustomerPayload>
          }
          aggregate: {
            args: Prisma.AddCustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddCustomer>
          }
          groupBy: {
            args: Prisma.AddCustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddCustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddCustomerCountArgs<ExtArgs>
            result: $Utils.Optional<AddCustomerCountAggregateOutputType> | number
          }
        }
      }
      AddCasting: {
        payload: Prisma.$AddCastingPayload<ExtArgs>
        fields: Prisma.AddCastingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddCastingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddCastingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddCastingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddCastingPayload>
          }
          findFirst: {
            args: Prisma.AddCastingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddCastingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddCastingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddCastingPayload>
          }
          findMany: {
            args: Prisma.AddCastingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddCastingPayload>[]
          }
          create: {
            args: Prisma.AddCastingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddCastingPayload>
          }
          createMany: {
            args: Prisma.AddCastingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AddCastingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddCastingPayload>
          }
          update: {
            args: Prisma.AddCastingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddCastingPayload>
          }
          deleteMany: {
            args: Prisma.AddCastingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddCastingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AddCastingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddCastingPayload>
          }
          aggregate: {
            args: Prisma.AddCastingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddCasting>
          }
          groupBy: {
            args: Prisma.AddCastingGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddCastingGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddCastingCountArgs<ExtArgs>
            result: $Utils.Optional<AddCastingCountAggregateOutputType> | number
          }
        }
      }
      AddFiling: {
        payload: Prisma.$AddFilingPayload<ExtArgs>
        fields: Prisma.AddFilingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddFilingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddFilingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddFilingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddFilingPayload>
          }
          findFirst: {
            args: Prisma.AddFilingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddFilingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddFilingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddFilingPayload>
          }
          findMany: {
            args: Prisma.AddFilingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddFilingPayload>[]
          }
          create: {
            args: Prisma.AddFilingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddFilingPayload>
          }
          createMany: {
            args: Prisma.AddFilingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AddFilingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddFilingPayload>
          }
          update: {
            args: Prisma.AddFilingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddFilingPayload>
          }
          deleteMany: {
            args: Prisma.AddFilingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddFilingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AddFilingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddFilingPayload>
          }
          aggregate: {
            args: Prisma.AddFilingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddFiling>
          }
          groupBy: {
            args: Prisma.AddFilingGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddFilingGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddFilingCountArgs<ExtArgs>
            result: $Utils.Optional<AddFilingCountAggregateOutputType> | number
          }
        }
      }
      AddSetting: {
        payload: Prisma.$AddSettingPayload<ExtArgs>
        fields: Prisma.AddSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddSettingPayload>
          }
          findFirst: {
            args: Prisma.AddSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddSettingPayload>
          }
          findMany: {
            args: Prisma.AddSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddSettingPayload>[]
          }
          create: {
            args: Prisma.AddSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddSettingPayload>
          }
          createMany: {
            args: Prisma.AddSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AddSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddSettingPayload>
          }
          update: {
            args: Prisma.AddSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddSettingPayload>
          }
          deleteMany: {
            args: Prisma.AddSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AddSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddSettingPayload>
          }
          aggregate: {
            args: Prisma.AddSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddSetting>
          }
          groupBy: {
            args: Prisma.AddSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddSettingCountArgs<ExtArgs>
            result: $Utils.Optional<AddSettingCountAggregateOutputType> | number
          }
        }
      }
      AddBuffing: {
        payload: Prisma.$AddBuffingPayload<ExtArgs>
        fields: Prisma.AddBuffingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddBuffingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddBuffingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddBuffingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddBuffingPayload>
          }
          findFirst: {
            args: Prisma.AddBuffingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddBuffingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddBuffingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddBuffingPayload>
          }
          findMany: {
            args: Prisma.AddBuffingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddBuffingPayload>[]
          }
          create: {
            args: Prisma.AddBuffingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddBuffingPayload>
          }
          createMany: {
            args: Prisma.AddBuffingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AddBuffingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddBuffingPayload>
          }
          update: {
            args: Prisma.AddBuffingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddBuffingPayload>
          }
          deleteMany: {
            args: Prisma.AddBuffingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddBuffingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AddBuffingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddBuffingPayload>
          }
          aggregate: {
            args: Prisma.AddBuffingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddBuffing>
          }
          groupBy: {
            args: Prisma.AddBuffingGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddBuffingGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddBuffingCountArgs<ExtArgs>
            result: $Utils.Optional<AddBuffingCountAggregateOutputType> | number
          }
        }
      }
      AddItem: {
        payload: Prisma.$AddItemPayload<ExtArgs>
        fields: Prisma.AddItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddItemPayload>
          }
          findFirst: {
            args: Prisma.AddItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddItemPayload>
          }
          findMany: {
            args: Prisma.AddItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddItemPayload>[]
          }
          create: {
            args: Prisma.AddItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddItemPayload>
          }
          createMany: {
            args: Prisma.AddItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AddItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddItemPayload>
          }
          update: {
            args: Prisma.AddItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddItemPayload>
          }
          deleteMany: {
            args: Prisma.AddItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AddItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddItemPayload>
          }
          aggregate: {
            args: Prisma.AddItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddItem>
          }
          groupBy: {
            args: Prisma.AddItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddItemCountArgs<ExtArgs>
            result: $Utils.Optional<AddItemCountAggregateOutputType> | number
          }
        }
      }
      AddPurchaseStock: {
        payload: Prisma.$AddPurchaseStockPayload<ExtArgs>
        fields: Prisma.AddPurchaseStockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddPurchaseStockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddPurchaseStockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddPurchaseStockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddPurchaseStockPayload>
          }
          findFirst: {
            args: Prisma.AddPurchaseStockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddPurchaseStockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddPurchaseStockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddPurchaseStockPayload>
          }
          findMany: {
            args: Prisma.AddPurchaseStockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddPurchaseStockPayload>[]
          }
          create: {
            args: Prisma.AddPurchaseStockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddPurchaseStockPayload>
          }
          createMany: {
            args: Prisma.AddPurchaseStockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AddPurchaseStockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddPurchaseStockPayload>
          }
          update: {
            args: Prisma.AddPurchaseStockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddPurchaseStockPayload>
          }
          deleteMany: {
            args: Prisma.AddPurchaseStockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddPurchaseStockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AddPurchaseStockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddPurchaseStockPayload>
          }
          aggregate: {
            args: Prisma.AddPurchaseStockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddPurchaseStock>
          }
          groupBy: {
            args: Prisma.AddPurchaseStockGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddPurchaseStockGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddPurchaseStockCountArgs<ExtArgs>
            result: $Utils.Optional<AddPurchaseStockCountAggregateOutputType> | number
          }
        }
      }
      Casting: {
        payload: Prisma.$CastingPayload<ExtArgs>
        fields: Prisma.CastingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CastingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CastingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastingPayload>
          }
          findFirst: {
            args: Prisma.CastingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CastingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastingPayload>
          }
          findMany: {
            args: Prisma.CastingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastingPayload>[]
          }
          create: {
            args: Prisma.CastingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastingPayload>
          }
          createMany: {
            args: Prisma.CastingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CastingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastingPayload>
          }
          update: {
            args: Prisma.CastingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastingPayload>
          }
          deleteMany: {
            args: Prisma.CastingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CastingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CastingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastingPayload>
          }
          aggregate: {
            args: Prisma.CastingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCasting>
          }
          groupBy: {
            args: Prisma.CastingGroupByArgs<ExtArgs>
            result: $Utils.Optional<CastingGroupByOutputType>[]
          }
          count: {
            args: Prisma.CastingCountArgs<ExtArgs>
            result: $Utils.Optional<CastingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    addCustomer?: AddCustomerOmit
    addCasting?: AddCastingOmit
    addFiling?: AddFilingOmit
    addSetting?: AddSettingOmit
    addBuffing?: AddBuffingOmit
    addItem?: AddItemOmit
    addPurchaseStock?: AddPurchaseStockOmit
    casting?: CastingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AddCastingCountOutputType
   */

  export type AddCastingCountOutputType = {
    Castings: number
  }

  export type AddCastingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Castings?: boolean | AddCastingCountOutputTypeCountCastingsArgs
  }

  // Custom InputTypes
  /**
   * AddCastingCountOutputType without action
   */
  export type AddCastingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddCastingCountOutputType
     */
    select?: AddCastingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddCastingCountOutputType without action
   */
  export type AddCastingCountOutputTypeCountCastingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CastingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AddCustomer
   */

  export type AggregateAddCustomer = {
    _count: AddCustomerCountAggregateOutputType | null
    _avg: AddCustomerAvgAggregateOutputType | null
    _sum: AddCustomerSumAggregateOutputType | null
    _min: AddCustomerMinAggregateOutputType | null
    _max: AddCustomerMaxAggregateOutputType | null
  }

  export type AddCustomerAvgAggregateOutputType = {
    id: number | null
  }

  export type AddCustomerSumAggregateOutputType = {
    id: number | null
  }

  export type AddCustomerMinAggregateOutputType = {
    id: number | null
    name: string | null
    phoneNumber: string | null
    address: string | null
    email: string | null
  }

  export type AddCustomerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phoneNumber: string | null
    address: string | null
    email: string | null
  }

  export type AddCustomerCountAggregateOutputType = {
    id: number
    name: number
    phoneNumber: number
    address: number
    email: number
    _all: number
  }


  export type AddCustomerAvgAggregateInputType = {
    id?: true
  }

  export type AddCustomerSumAggregateInputType = {
    id?: true
  }

  export type AddCustomerMinAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    address?: true
    email?: true
  }

  export type AddCustomerMaxAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    address?: true
    email?: true
  }

  export type AddCustomerCountAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    address?: true
    email?: true
    _all?: true
  }

  export type AddCustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddCustomer to aggregate.
     */
    where?: AddCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddCustomers to fetch.
     */
    orderBy?: AddCustomerOrderByWithRelationInput | AddCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AddCustomers
    **/
    _count?: true | AddCustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddCustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddCustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddCustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddCustomerMaxAggregateInputType
  }

  export type GetAddCustomerAggregateType<T extends AddCustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateAddCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddCustomer[P]>
      : GetScalarType<T[P], AggregateAddCustomer[P]>
  }




  export type AddCustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddCustomerWhereInput
    orderBy?: AddCustomerOrderByWithAggregationInput | AddCustomerOrderByWithAggregationInput[]
    by: AddCustomerScalarFieldEnum[] | AddCustomerScalarFieldEnum
    having?: AddCustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddCustomerCountAggregateInputType | true
    _avg?: AddCustomerAvgAggregateInputType
    _sum?: AddCustomerSumAggregateInputType
    _min?: AddCustomerMinAggregateInputType
    _max?: AddCustomerMaxAggregateInputType
  }

  export type AddCustomerGroupByOutputType = {
    id: number
    name: string
    phoneNumber: string
    address: string
    email: string | null
    _count: AddCustomerCountAggregateOutputType | null
    _avg: AddCustomerAvgAggregateOutputType | null
    _sum: AddCustomerSumAggregateOutputType | null
    _min: AddCustomerMinAggregateOutputType | null
    _max: AddCustomerMaxAggregateOutputType | null
  }

  type GetAddCustomerGroupByPayload<T extends AddCustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddCustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddCustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddCustomerGroupByOutputType[P]>
            : GetScalarType<T[P], AddCustomerGroupByOutputType[P]>
        }
      >
    >


  export type AddCustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    address?: boolean
    email?: boolean
  }, ExtArgs["result"]["addCustomer"]>



  export type AddCustomerSelectScalar = {
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    address?: boolean
    email?: boolean
  }

  export type AddCustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phoneNumber" | "address" | "email", ExtArgs["result"]["addCustomer"]>

  export type $AddCustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AddCustomer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phoneNumber: string
      address: string
      email: string | null
    }, ExtArgs["result"]["addCustomer"]>
    composites: {}
  }

  type AddCustomerGetPayload<S extends boolean | null | undefined | AddCustomerDefaultArgs> = $Result.GetResult<Prisma.$AddCustomerPayload, S>

  type AddCustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddCustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddCustomerCountAggregateInputType | true
    }

  export interface AddCustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AddCustomer'], meta: { name: 'AddCustomer' } }
    /**
     * Find zero or one AddCustomer that matches the filter.
     * @param {AddCustomerFindUniqueArgs} args - Arguments to find a AddCustomer
     * @example
     * // Get one AddCustomer
     * const addCustomer = await prisma.addCustomer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddCustomerFindUniqueArgs>(args: SelectSubset<T, AddCustomerFindUniqueArgs<ExtArgs>>): Prisma__AddCustomerClient<$Result.GetResult<Prisma.$AddCustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AddCustomer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddCustomerFindUniqueOrThrowArgs} args - Arguments to find a AddCustomer
     * @example
     * // Get one AddCustomer
     * const addCustomer = await prisma.addCustomer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddCustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, AddCustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddCustomerClient<$Result.GetResult<Prisma.$AddCustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddCustomer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddCustomerFindFirstArgs} args - Arguments to find a AddCustomer
     * @example
     * // Get one AddCustomer
     * const addCustomer = await prisma.addCustomer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddCustomerFindFirstArgs>(args?: SelectSubset<T, AddCustomerFindFirstArgs<ExtArgs>>): Prisma__AddCustomerClient<$Result.GetResult<Prisma.$AddCustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddCustomer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddCustomerFindFirstOrThrowArgs} args - Arguments to find a AddCustomer
     * @example
     * // Get one AddCustomer
     * const addCustomer = await prisma.addCustomer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddCustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, AddCustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddCustomerClient<$Result.GetResult<Prisma.$AddCustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AddCustomers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddCustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AddCustomers
     * const addCustomers = await prisma.addCustomer.findMany()
     * 
     * // Get first 10 AddCustomers
     * const addCustomers = await prisma.addCustomer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addCustomerWithIdOnly = await prisma.addCustomer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddCustomerFindManyArgs>(args?: SelectSubset<T, AddCustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddCustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AddCustomer.
     * @param {AddCustomerCreateArgs} args - Arguments to create a AddCustomer.
     * @example
     * // Create one AddCustomer
     * const AddCustomer = await prisma.addCustomer.create({
     *   data: {
     *     // ... data to create a AddCustomer
     *   }
     * })
     * 
     */
    create<T extends AddCustomerCreateArgs>(args: SelectSubset<T, AddCustomerCreateArgs<ExtArgs>>): Prisma__AddCustomerClient<$Result.GetResult<Prisma.$AddCustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AddCustomers.
     * @param {AddCustomerCreateManyArgs} args - Arguments to create many AddCustomers.
     * @example
     * // Create many AddCustomers
     * const addCustomer = await prisma.addCustomer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddCustomerCreateManyArgs>(args?: SelectSubset<T, AddCustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AddCustomer.
     * @param {AddCustomerDeleteArgs} args - Arguments to delete one AddCustomer.
     * @example
     * // Delete one AddCustomer
     * const AddCustomer = await prisma.addCustomer.delete({
     *   where: {
     *     // ... filter to delete one AddCustomer
     *   }
     * })
     * 
     */
    delete<T extends AddCustomerDeleteArgs>(args: SelectSubset<T, AddCustomerDeleteArgs<ExtArgs>>): Prisma__AddCustomerClient<$Result.GetResult<Prisma.$AddCustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AddCustomer.
     * @param {AddCustomerUpdateArgs} args - Arguments to update one AddCustomer.
     * @example
     * // Update one AddCustomer
     * const addCustomer = await prisma.addCustomer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddCustomerUpdateArgs>(args: SelectSubset<T, AddCustomerUpdateArgs<ExtArgs>>): Prisma__AddCustomerClient<$Result.GetResult<Prisma.$AddCustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AddCustomers.
     * @param {AddCustomerDeleteManyArgs} args - Arguments to filter AddCustomers to delete.
     * @example
     * // Delete a few AddCustomers
     * const { count } = await prisma.addCustomer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddCustomerDeleteManyArgs>(args?: SelectSubset<T, AddCustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AddCustomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddCustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AddCustomers
     * const addCustomer = await prisma.addCustomer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddCustomerUpdateManyArgs>(args: SelectSubset<T, AddCustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AddCustomer.
     * @param {AddCustomerUpsertArgs} args - Arguments to update or create a AddCustomer.
     * @example
     * // Update or create a AddCustomer
     * const addCustomer = await prisma.addCustomer.upsert({
     *   create: {
     *     // ... data to create a AddCustomer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AddCustomer we want to update
     *   }
     * })
     */
    upsert<T extends AddCustomerUpsertArgs>(args: SelectSubset<T, AddCustomerUpsertArgs<ExtArgs>>): Prisma__AddCustomerClient<$Result.GetResult<Prisma.$AddCustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AddCustomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddCustomerCountArgs} args - Arguments to filter AddCustomers to count.
     * @example
     * // Count the number of AddCustomers
     * const count = await prisma.addCustomer.count({
     *   where: {
     *     // ... the filter for the AddCustomers we want to count
     *   }
     * })
    **/
    count<T extends AddCustomerCountArgs>(
      args?: Subset<T, AddCustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddCustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AddCustomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddCustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddCustomerAggregateArgs>(args: Subset<T, AddCustomerAggregateArgs>): Prisma.PrismaPromise<GetAddCustomerAggregateType<T>>

    /**
     * Group by AddCustomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddCustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddCustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddCustomerGroupByArgs['orderBy'] }
        : { orderBy?: AddCustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddCustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AddCustomer model
   */
  readonly fields: AddCustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AddCustomer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddCustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AddCustomer model
   */
  interface AddCustomerFieldRefs {
    readonly id: FieldRef<"AddCustomer", 'Int'>
    readonly name: FieldRef<"AddCustomer", 'String'>
    readonly phoneNumber: FieldRef<"AddCustomer", 'String'>
    readonly address: FieldRef<"AddCustomer", 'String'>
    readonly email: FieldRef<"AddCustomer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AddCustomer findUnique
   */
  export type AddCustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddCustomer
     */
    select?: AddCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddCustomer
     */
    omit?: AddCustomerOmit<ExtArgs> | null
    /**
     * Filter, which AddCustomer to fetch.
     */
    where: AddCustomerWhereUniqueInput
  }

  /**
   * AddCustomer findUniqueOrThrow
   */
  export type AddCustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddCustomer
     */
    select?: AddCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddCustomer
     */
    omit?: AddCustomerOmit<ExtArgs> | null
    /**
     * Filter, which AddCustomer to fetch.
     */
    where: AddCustomerWhereUniqueInput
  }

  /**
   * AddCustomer findFirst
   */
  export type AddCustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddCustomer
     */
    select?: AddCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddCustomer
     */
    omit?: AddCustomerOmit<ExtArgs> | null
    /**
     * Filter, which AddCustomer to fetch.
     */
    where?: AddCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddCustomers to fetch.
     */
    orderBy?: AddCustomerOrderByWithRelationInput | AddCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddCustomers.
     */
    cursor?: AddCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddCustomers.
     */
    distinct?: AddCustomerScalarFieldEnum | AddCustomerScalarFieldEnum[]
  }

  /**
   * AddCustomer findFirstOrThrow
   */
  export type AddCustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddCustomer
     */
    select?: AddCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddCustomer
     */
    omit?: AddCustomerOmit<ExtArgs> | null
    /**
     * Filter, which AddCustomer to fetch.
     */
    where?: AddCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddCustomers to fetch.
     */
    orderBy?: AddCustomerOrderByWithRelationInput | AddCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddCustomers.
     */
    cursor?: AddCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddCustomers.
     */
    distinct?: AddCustomerScalarFieldEnum | AddCustomerScalarFieldEnum[]
  }

  /**
   * AddCustomer findMany
   */
  export type AddCustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddCustomer
     */
    select?: AddCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddCustomer
     */
    omit?: AddCustomerOmit<ExtArgs> | null
    /**
     * Filter, which AddCustomers to fetch.
     */
    where?: AddCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddCustomers to fetch.
     */
    orderBy?: AddCustomerOrderByWithRelationInput | AddCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AddCustomers.
     */
    cursor?: AddCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddCustomers.
     */
    skip?: number
    distinct?: AddCustomerScalarFieldEnum | AddCustomerScalarFieldEnum[]
  }

  /**
   * AddCustomer create
   */
  export type AddCustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddCustomer
     */
    select?: AddCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddCustomer
     */
    omit?: AddCustomerOmit<ExtArgs> | null
    /**
     * The data needed to create a AddCustomer.
     */
    data: XOR<AddCustomerCreateInput, AddCustomerUncheckedCreateInput>
  }

  /**
   * AddCustomer createMany
   */
  export type AddCustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AddCustomers.
     */
    data: AddCustomerCreateManyInput | AddCustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AddCustomer update
   */
  export type AddCustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddCustomer
     */
    select?: AddCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddCustomer
     */
    omit?: AddCustomerOmit<ExtArgs> | null
    /**
     * The data needed to update a AddCustomer.
     */
    data: XOR<AddCustomerUpdateInput, AddCustomerUncheckedUpdateInput>
    /**
     * Choose, which AddCustomer to update.
     */
    where: AddCustomerWhereUniqueInput
  }

  /**
   * AddCustomer updateMany
   */
  export type AddCustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AddCustomers.
     */
    data: XOR<AddCustomerUpdateManyMutationInput, AddCustomerUncheckedUpdateManyInput>
    /**
     * Filter which AddCustomers to update
     */
    where?: AddCustomerWhereInput
    /**
     * Limit how many AddCustomers to update.
     */
    limit?: number
  }

  /**
   * AddCustomer upsert
   */
  export type AddCustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddCustomer
     */
    select?: AddCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddCustomer
     */
    omit?: AddCustomerOmit<ExtArgs> | null
    /**
     * The filter to search for the AddCustomer to update in case it exists.
     */
    where: AddCustomerWhereUniqueInput
    /**
     * In case the AddCustomer found by the `where` argument doesn't exist, create a new AddCustomer with this data.
     */
    create: XOR<AddCustomerCreateInput, AddCustomerUncheckedCreateInput>
    /**
     * In case the AddCustomer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddCustomerUpdateInput, AddCustomerUncheckedUpdateInput>
  }

  /**
   * AddCustomer delete
   */
  export type AddCustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddCustomer
     */
    select?: AddCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddCustomer
     */
    omit?: AddCustomerOmit<ExtArgs> | null
    /**
     * Filter which AddCustomer to delete.
     */
    where: AddCustomerWhereUniqueInput
  }

  /**
   * AddCustomer deleteMany
   */
  export type AddCustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddCustomers to delete
     */
    where?: AddCustomerWhereInput
    /**
     * Limit how many AddCustomers to delete.
     */
    limit?: number
  }

  /**
   * AddCustomer without action
   */
  export type AddCustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddCustomer
     */
    select?: AddCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddCustomer
     */
    omit?: AddCustomerOmit<ExtArgs> | null
  }


  /**
   * Model AddCasting
   */

  export type AggregateAddCasting = {
    _count: AddCastingCountAggregateOutputType | null
    _avg: AddCastingAvgAggregateOutputType | null
    _sum: AddCastingSumAggregateOutputType | null
    _min: AddCastingMinAggregateOutputType | null
    _max: AddCastingMaxAggregateOutputType | null
  }

  export type AddCastingAvgAggregateOutputType = {
    id: number | null
  }

  export type AddCastingSumAggregateOutputType = {
    id: number | null
  }

  export type AddCastingMinAggregateOutputType = {
    id: number | null
    name: string | null
    phoneNumber: string | null
    address: string | null
    email: string | null
  }

  export type AddCastingMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phoneNumber: string | null
    address: string | null
    email: string | null
  }

  export type AddCastingCountAggregateOutputType = {
    id: number
    name: number
    phoneNumber: number
    address: number
    email: number
    _all: number
  }


  export type AddCastingAvgAggregateInputType = {
    id?: true
  }

  export type AddCastingSumAggregateInputType = {
    id?: true
  }

  export type AddCastingMinAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    address?: true
    email?: true
  }

  export type AddCastingMaxAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    address?: true
    email?: true
  }

  export type AddCastingCountAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    address?: true
    email?: true
    _all?: true
  }

  export type AddCastingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddCasting to aggregate.
     */
    where?: AddCastingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddCastings to fetch.
     */
    orderBy?: AddCastingOrderByWithRelationInput | AddCastingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddCastingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddCastings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddCastings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AddCastings
    **/
    _count?: true | AddCastingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddCastingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddCastingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddCastingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddCastingMaxAggregateInputType
  }

  export type GetAddCastingAggregateType<T extends AddCastingAggregateArgs> = {
        [P in keyof T & keyof AggregateAddCasting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddCasting[P]>
      : GetScalarType<T[P], AggregateAddCasting[P]>
  }




  export type AddCastingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddCastingWhereInput
    orderBy?: AddCastingOrderByWithAggregationInput | AddCastingOrderByWithAggregationInput[]
    by: AddCastingScalarFieldEnum[] | AddCastingScalarFieldEnum
    having?: AddCastingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddCastingCountAggregateInputType | true
    _avg?: AddCastingAvgAggregateInputType
    _sum?: AddCastingSumAggregateInputType
    _min?: AddCastingMinAggregateInputType
    _max?: AddCastingMaxAggregateInputType
  }

  export type AddCastingGroupByOutputType = {
    id: number
    name: string
    phoneNumber: string
    address: string
    email: string
    _count: AddCastingCountAggregateOutputType | null
    _avg: AddCastingAvgAggregateOutputType | null
    _sum: AddCastingSumAggregateOutputType | null
    _min: AddCastingMinAggregateOutputType | null
    _max: AddCastingMaxAggregateOutputType | null
  }

  type GetAddCastingGroupByPayload<T extends AddCastingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddCastingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddCastingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddCastingGroupByOutputType[P]>
            : GetScalarType<T[P], AddCastingGroupByOutputType[P]>
        }
      >
    >


  export type AddCastingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    address?: boolean
    email?: boolean
    Castings?: boolean | AddCasting$CastingsArgs<ExtArgs>
    _count?: boolean | AddCastingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addCasting"]>



  export type AddCastingSelectScalar = {
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    address?: boolean
    email?: boolean
  }

  export type AddCastingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phoneNumber" | "address" | "email", ExtArgs["result"]["addCasting"]>
  export type AddCastingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Castings?: boolean | AddCasting$CastingsArgs<ExtArgs>
    _count?: boolean | AddCastingCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AddCastingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AddCasting"
    objects: {
      Castings: Prisma.$CastingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phoneNumber: string
      address: string
      email: string
    }, ExtArgs["result"]["addCasting"]>
    composites: {}
  }

  type AddCastingGetPayload<S extends boolean | null | undefined | AddCastingDefaultArgs> = $Result.GetResult<Prisma.$AddCastingPayload, S>

  type AddCastingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddCastingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddCastingCountAggregateInputType | true
    }

  export interface AddCastingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AddCasting'], meta: { name: 'AddCasting' } }
    /**
     * Find zero or one AddCasting that matches the filter.
     * @param {AddCastingFindUniqueArgs} args - Arguments to find a AddCasting
     * @example
     * // Get one AddCasting
     * const addCasting = await prisma.addCasting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddCastingFindUniqueArgs>(args: SelectSubset<T, AddCastingFindUniqueArgs<ExtArgs>>): Prisma__AddCastingClient<$Result.GetResult<Prisma.$AddCastingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AddCasting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddCastingFindUniqueOrThrowArgs} args - Arguments to find a AddCasting
     * @example
     * // Get one AddCasting
     * const addCasting = await prisma.addCasting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddCastingFindUniqueOrThrowArgs>(args: SelectSubset<T, AddCastingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddCastingClient<$Result.GetResult<Prisma.$AddCastingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddCasting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddCastingFindFirstArgs} args - Arguments to find a AddCasting
     * @example
     * // Get one AddCasting
     * const addCasting = await prisma.addCasting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddCastingFindFirstArgs>(args?: SelectSubset<T, AddCastingFindFirstArgs<ExtArgs>>): Prisma__AddCastingClient<$Result.GetResult<Prisma.$AddCastingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddCasting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddCastingFindFirstOrThrowArgs} args - Arguments to find a AddCasting
     * @example
     * // Get one AddCasting
     * const addCasting = await prisma.addCasting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddCastingFindFirstOrThrowArgs>(args?: SelectSubset<T, AddCastingFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddCastingClient<$Result.GetResult<Prisma.$AddCastingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AddCastings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddCastingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AddCastings
     * const addCastings = await prisma.addCasting.findMany()
     * 
     * // Get first 10 AddCastings
     * const addCastings = await prisma.addCasting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addCastingWithIdOnly = await prisma.addCasting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddCastingFindManyArgs>(args?: SelectSubset<T, AddCastingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddCastingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AddCasting.
     * @param {AddCastingCreateArgs} args - Arguments to create a AddCasting.
     * @example
     * // Create one AddCasting
     * const AddCasting = await prisma.addCasting.create({
     *   data: {
     *     // ... data to create a AddCasting
     *   }
     * })
     * 
     */
    create<T extends AddCastingCreateArgs>(args: SelectSubset<T, AddCastingCreateArgs<ExtArgs>>): Prisma__AddCastingClient<$Result.GetResult<Prisma.$AddCastingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AddCastings.
     * @param {AddCastingCreateManyArgs} args - Arguments to create many AddCastings.
     * @example
     * // Create many AddCastings
     * const addCasting = await prisma.addCasting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddCastingCreateManyArgs>(args?: SelectSubset<T, AddCastingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AddCasting.
     * @param {AddCastingDeleteArgs} args - Arguments to delete one AddCasting.
     * @example
     * // Delete one AddCasting
     * const AddCasting = await prisma.addCasting.delete({
     *   where: {
     *     // ... filter to delete one AddCasting
     *   }
     * })
     * 
     */
    delete<T extends AddCastingDeleteArgs>(args: SelectSubset<T, AddCastingDeleteArgs<ExtArgs>>): Prisma__AddCastingClient<$Result.GetResult<Prisma.$AddCastingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AddCasting.
     * @param {AddCastingUpdateArgs} args - Arguments to update one AddCasting.
     * @example
     * // Update one AddCasting
     * const addCasting = await prisma.addCasting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddCastingUpdateArgs>(args: SelectSubset<T, AddCastingUpdateArgs<ExtArgs>>): Prisma__AddCastingClient<$Result.GetResult<Prisma.$AddCastingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AddCastings.
     * @param {AddCastingDeleteManyArgs} args - Arguments to filter AddCastings to delete.
     * @example
     * // Delete a few AddCastings
     * const { count } = await prisma.addCasting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddCastingDeleteManyArgs>(args?: SelectSubset<T, AddCastingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AddCastings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddCastingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AddCastings
     * const addCasting = await prisma.addCasting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddCastingUpdateManyArgs>(args: SelectSubset<T, AddCastingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AddCasting.
     * @param {AddCastingUpsertArgs} args - Arguments to update or create a AddCasting.
     * @example
     * // Update or create a AddCasting
     * const addCasting = await prisma.addCasting.upsert({
     *   create: {
     *     // ... data to create a AddCasting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AddCasting we want to update
     *   }
     * })
     */
    upsert<T extends AddCastingUpsertArgs>(args: SelectSubset<T, AddCastingUpsertArgs<ExtArgs>>): Prisma__AddCastingClient<$Result.GetResult<Prisma.$AddCastingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AddCastings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddCastingCountArgs} args - Arguments to filter AddCastings to count.
     * @example
     * // Count the number of AddCastings
     * const count = await prisma.addCasting.count({
     *   where: {
     *     // ... the filter for the AddCastings we want to count
     *   }
     * })
    **/
    count<T extends AddCastingCountArgs>(
      args?: Subset<T, AddCastingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddCastingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AddCasting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddCastingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddCastingAggregateArgs>(args: Subset<T, AddCastingAggregateArgs>): Prisma.PrismaPromise<GetAddCastingAggregateType<T>>

    /**
     * Group by AddCasting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddCastingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddCastingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddCastingGroupByArgs['orderBy'] }
        : { orderBy?: AddCastingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddCastingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddCastingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AddCasting model
   */
  readonly fields: AddCastingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AddCasting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddCastingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Castings<T extends AddCasting$CastingsArgs<ExtArgs> = {}>(args?: Subset<T, AddCasting$CastingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CastingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AddCasting model
   */
  interface AddCastingFieldRefs {
    readonly id: FieldRef<"AddCasting", 'Int'>
    readonly name: FieldRef<"AddCasting", 'String'>
    readonly phoneNumber: FieldRef<"AddCasting", 'String'>
    readonly address: FieldRef<"AddCasting", 'String'>
    readonly email: FieldRef<"AddCasting", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AddCasting findUnique
   */
  export type AddCastingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddCasting
     */
    select?: AddCastingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddCasting
     */
    omit?: AddCastingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddCastingInclude<ExtArgs> | null
    /**
     * Filter, which AddCasting to fetch.
     */
    where: AddCastingWhereUniqueInput
  }

  /**
   * AddCasting findUniqueOrThrow
   */
  export type AddCastingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddCasting
     */
    select?: AddCastingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddCasting
     */
    omit?: AddCastingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddCastingInclude<ExtArgs> | null
    /**
     * Filter, which AddCasting to fetch.
     */
    where: AddCastingWhereUniqueInput
  }

  /**
   * AddCasting findFirst
   */
  export type AddCastingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddCasting
     */
    select?: AddCastingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddCasting
     */
    omit?: AddCastingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddCastingInclude<ExtArgs> | null
    /**
     * Filter, which AddCasting to fetch.
     */
    where?: AddCastingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddCastings to fetch.
     */
    orderBy?: AddCastingOrderByWithRelationInput | AddCastingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddCastings.
     */
    cursor?: AddCastingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddCastings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddCastings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddCastings.
     */
    distinct?: AddCastingScalarFieldEnum | AddCastingScalarFieldEnum[]
  }

  /**
   * AddCasting findFirstOrThrow
   */
  export type AddCastingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddCasting
     */
    select?: AddCastingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddCasting
     */
    omit?: AddCastingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddCastingInclude<ExtArgs> | null
    /**
     * Filter, which AddCasting to fetch.
     */
    where?: AddCastingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddCastings to fetch.
     */
    orderBy?: AddCastingOrderByWithRelationInput | AddCastingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddCastings.
     */
    cursor?: AddCastingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddCastings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddCastings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddCastings.
     */
    distinct?: AddCastingScalarFieldEnum | AddCastingScalarFieldEnum[]
  }

  /**
   * AddCasting findMany
   */
  export type AddCastingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddCasting
     */
    select?: AddCastingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddCasting
     */
    omit?: AddCastingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddCastingInclude<ExtArgs> | null
    /**
     * Filter, which AddCastings to fetch.
     */
    where?: AddCastingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddCastings to fetch.
     */
    orderBy?: AddCastingOrderByWithRelationInput | AddCastingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AddCastings.
     */
    cursor?: AddCastingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddCastings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddCastings.
     */
    skip?: number
    distinct?: AddCastingScalarFieldEnum | AddCastingScalarFieldEnum[]
  }

  /**
   * AddCasting create
   */
  export type AddCastingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddCasting
     */
    select?: AddCastingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddCasting
     */
    omit?: AddCastingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddCastingInclude<ExtArgs> | null
    /**
     * The data needed to create a AddCasting.
     */
    data: XOR<AddCastingCreateInput, AddCastingUncheckedCreateInput>
  }

  /**
   * AddCasting createMany
   */
  export type AddCastingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AddCastings.
     */
    data: AddCastingCreateManyInput | AddCastingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AddCasting update
   */
  export type AddCastingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddCasting
     */
    select?: AddCastingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddCasting
     */
    omit?: AddCastingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddCastingInclude<ExtArgs> | null
    /**
     * The data needed to update a AddCasting.
     */
    data: XOR<AddCastingUpdateInput, AddCastingUncheckedUpdateInput>
    /**
     * Choose, which AddCasting to update.
     */
    where: AddCastingWhereUniqueInput
  }

  /**
   * AddCasting updateMany
   */
  export type AddCastingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AddCastings.
     */
    data: XOR<AddCastingUpdateManyMutationInput, AddCastingUncheckedUpdateManyInput>
    /**
     * Filter which AddCastings to update
     */
    where?: AddCastingWhereInput
    /**
     * Limit how many AddCastings to update.
     */
    limit?: number
  }

  /**
   * AddCasting upsert
   */
  export type AddCastingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddCasting
     */
    select?: AddCastingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddCasting
     */
    omit?: AddCastingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddCastingInclude<ExtArgs> | null
    /**
     * The filter to search for the AddCasting to update in case it exists.
     */
    where: AddCastingWhereUniqueInput
    /**
     * In case the AddCasting found by the `where` argument doesn't exist, create a new AddCasting with this data.
     */
    create: XOR<AddCastingCreateInput, AddCastingUncheckedCreateInput>
    /**
     * In case the AddCasting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddCastingUpdateInput, AddCastingUncheckedUpdateInput>
  }

  /**
   * AddCasting delete
   */
  export type AddCastingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddCasting
     */
    select?: AddCastingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddCasting
     */
    omit?: AddCastingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddCastingInclude<ExtArgs> | null
    /**
     * Filter which AddCasting to delete.
     */
    where: AddCastingWhereUniqueInput
  }

  /**
   * AddCasting deleteMany
   */
  export type AddCastingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddCastings to delete
     */
    where?: AddCastingWhereInput
    /**
     * Limit how many AddCastings to delete.
     */
    limit?: number
  }

  /**
   * AddCasting.Castings
   */
  export type AddCasting$CastingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casting
     */
    select?: CastingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casting
     */
    omit?: CastingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingInclude<ExtArgs> | null
    where?: CastingWhereInput
    orderBy?: CastingOrderByWithRelationInput | CastingOrderByWithRelationInput[]
    cursor?: CastingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CastingScalarFieldEnum | CastingScalarFieldEnum[]
  }

  /**
   * AddCasting without action
   */
  export type AddCastingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddCasting
     */
    select?: AddCastingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddCasting
     */
    omit?: AddCastingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddCastingInclude<ExtArgs> | null
  }


  /**
   * Model AddFiling
   */

  export type AggregateAddFiling = {
    _count: AddFilingCountAggregateOutputType | null
    _avg: AddFilingAvgAggregateOutputType | null
    _sum: AddFilingSumAggregateOutputType | null
    _min: AddFilingMinAggregateOutputType | null
    _max: AddFilingMaxAggregateOutputType | null
  }

  export type AddFilingAvgAggregateOutputType = {
    id: number | null
  }

  export type AddFilingSumAggregateOutputType = {
    id: number | null
  }

  export type AddFilingMinAggregateOutputType = {
    id: number | null
    name: string | null
    phoneNumber: string | null
    address: string | null
    email: string | null
  }

  export type AddFilingMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phoneNumber: string | null
    address: string | null
    email: string | null
  }

  export type AddFilingCountAggregateOutputType = {
    id: number
    name: number
    phoneNumber: number
    address: number
    email: number
    _all: number
  }


  export type AddFilingAvgAggregateInputType = {
    id?: true
  }

  export type AddFilingSumAggregateInputType = {
    id?: true
  }

  export type AddFilingMinAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    address?: true
    email?: true
  }

  export type AddFilingMaxAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    address?: true
    email?: true
  }

  export type AddFilingCountAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    address?: true
    email?: true
    _all?: true
  }

  export type AddFilingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddFiling to aggregate.
     */
    where?: AddFilingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddFilings to fetch.
     */
    orderBy?: AddFilingOrderByWithRelationInput | AddFilingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddFilingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddFilings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddFilings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AddFilings
    **/
    _count?: true | AddFilingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddFilingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddFilingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddFilingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddFilingMaxAggregateInputType
  }

  export type GetAddFilingAggregateType<T extends AddFilingAggregateArgs> = {
        [P in keyof T & keyof AggregateAddFiling]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddFiling[P]>
      : GetScalarType<T[P], AggregateAddFiling[P]>
  }




  export type AddFilingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddFilingWhereInput
    orderBy?: AddFilingOrderByWithAggregationInput | AddFilingOrderByWithAggregationInput[]
    by: AddFilingScalarFieldEnum[] | AddFilingScalarFieldEnum
    having?: AddFilingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddFilingCountAggregateInputType | true
    _avg?: AddFilingAvgAggregateInputType
    _sum?: AddFilingSumAggregateInputType
    _min?: AddFilingMinAggregateInputType
    _max?: AddFilingMaxAggregateInputType
  }

  export type AddFilingGroupByOutputType = {
    id: number
    name: string
    phoneNumber: string
    address: string
    email: string
    _count: AddFilingCountAggregateOutputType | null
    _avg: AddFilingAvgAggregateOutputType | null
    _sum: AddFilingSumAggregateOutputType | null
    _min: AddFilingMinAggregateOutputType | null
    _max: AddFilingMaxAggregateOutputType | null
  }

  type GetAddFilingGroupByPayload<T extends AddFilingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddFilingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddFilingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddFilingGroupByOutputType[P]>
            : GetScalarType<T[P], AddFilingGroupByOutputType[P]>
        }
      >
    >


  export type AddFilingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    address?: boolean
    email?: boolean
  }, ExtArgs["result"]["addFiling"]>



  export type AddFilingSelectScalar = {
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    address?: boolean
    email?: boolean
  }

  export type AddFilingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phoneNumber" | "address" | "email", ExtArgs["result"]["addFiling"]>

  export type $AddFilingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AddFiling"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phoneNumber: string
      address: string
      email: string
    }, ExtArgs["result"]["addFiling"]>
    composites: {}
  }

  type AddFilingGetPayload<S extends boolean | null | undefined | AddFilingDefaultArgs> = $Result.GetResult<Prisma.$AddFilingPayload, S>

  type AddFilingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddFilingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddFilingCountAggregateInputType | true
    }

  export interface AddFilingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AddFiling'], meta: { name: 'AddFiling' } }
    /**
     * Find zero or one AddFiling that matches the filter.
     * @param {AddFilingFindUniqueArgs} args - Arguments to find a AddFiling
     * @example
     * // Get one AddFiling
     * const addFiling = await prisma.addFiling.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddFilingFindUniqueArgs>(args: SelectSubset<T, AddFilingFindUniqueArgs<ExtArgs>>): Prisma__AddFilingClient<$Result.GetResult<Prisma.$AddFilingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AddFiling that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddFilingFindUniqueOrThrowArgs} args - Arguments to find a AddFiling
     * @example
     * // Get one AddFiling
     * const addFiling = await prisma.addFiling.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddFilingFindUniqueOrThrowArgs>(args: SelectSubset<T, AddFilingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddFilingClient<$Result.GetResult<Prisma.$AddFilingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddFiling that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddFilingFindFirstArgs} args - Arguments to find a AddFiling
     * @example
     * // Get one AddFiling
     * const addFiling = await prisma.addFiling.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddFilingFindFirstArgs>(args?: SelectSubset<T, AddFilingFindFirstArgs<ExtArgs>>): Prisma__AddFilingClient<$Result.GetResult<Prisma.$AddFilingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddFiling that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddFilingFindFirstOrThrowArgs} args - Arguments to find a AddFiling
     * @example
     * // Get one AddFiling
     * const addFiling = await prisma.addFiling.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddFilingFindFirstOrThrowArgs>(args?: SelectSubset<T, AddFilingFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddFilingClient<$Result.GetResult<Prisma.$AddFilingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AddFilings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddFilingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AddFilings
     * const addFilings = await prisma.addFiling.findMany()
     * 
     * // Get first 10 AddFilings
     * const addFilings = await prisma.addFiling.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addFilingWithIdOnly = await prisma.addFiling.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddFilingFindManyArgs>(args?: SelectSubset<T, AddFilingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddFilingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AddFiling.
     * @param {AddFilingCreateArgs} args - Arguments to create a AddFiling.
     * @example
     * // Create one AddFiling
     * const AddFiling = await prisma.addFiling.create({
     *   data: {
     *     // ... data to create a AddFiling
     *   }
     * })
     * 
     */
    create<T extends AddFilingCreateArgs>(args: SelectSubset<T, AddFilingCreateArgs<ExtArgs>>): Prisma__AddFilingClient<$Result.GetResult<Prisma.$AddFilingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AddFilings.
     * @param {AddFilingCreateManyArgs} args - Arguments to create many AddFilings.
     * @example
     * // Create many AddFilings
     * const addFiling = await prisma.addFiling.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddFilingCreateManyArgs>(args?: SelectSubset<T, AddFilingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AddFiling.
     * @param {AddFilingDeleteArgs} args - Arguments to delete one AddFiling.
     * @example
     * // Delete one AddFiling
     * const AddFiling = await prisma.addFiling.delete({
     *   where: {
     *     // ... filter to delete one AddFiling
     *   }
     * })
     * 
     */
    delete<T extends AddFilingDeleteArgs>(args: SelectSubset<T, AddFilingDeleteArgs<ExtArgs>>): Prisma__AddFilingClient<$Result.GetResult<Prisma.$AddFilingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AddFiling.
     * @param {AddFilingUpdateArgs} args - Arguments to update one AddFiling.
     * @example
     * // Update one AddFiling
     * const addFiling = await prisma.addFiling.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddFilingUpdateArgs>(args: SelectSubset<T, AddFilingUpdateArgs<ExtArgs>>): Prisma__AddFilingClient<$Result.GetResult<Prisma.$AddFilingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AddFilings.
     * @param {AddFilingDeleteManyArgs} args - Arguments to filter AddFilings to delete.
     * @example
     * // Delete a few AddFilings
     * const { count } = await prisma.addFiling.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddFilingDeleteManyArgs>(args?: SelectSubset<T, AddFilingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AddFilings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddFilingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AddFilings
     * const addFiling = await prisma.addFiling.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddFilingUpdateManyArgs>(args: SelectSubset<T, AddFilingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AddFiling.
     * @param {AddFilingUpsertArgs} args - Arguments to update or create a AddFiling.
     * @example
     * // Update or create a AddFiling
     * const addFiling = await prisma.addFiling.upsert({
     *   create: {
     *     // ... data to create a AddFiling
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AddFiling we want to update
     *   }
     * })
     */
    upsert<T extends AddFilingUpsertArgs>(args: SelectSubset<T, AddFilingUpsertArgs<ExtArgs>>): Prisma__AddFilingClient<$Result.GetResult<Prisma.$AddFilingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AddFilings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddFilingCountArgs} args - Arguments to filter AddFilings to count.
     * @example
     * // Count the number of AddFilings
     * const count = await prisma.addFiling.count({
     *   where: {
     *     // ... the filter for the AddFilings we want to count
     *   }
     * })
    **/
    count<T extends AddFilingCountArgs>(
      args?: Subset<T, AddFilingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddFilingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AddFiling.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddFilingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddFilingAggregateArgs>(args: Subset<T, AddFilingAggregateArgs>): Prisma.PrismaPromise<GetAddFilingAggregateType<T>>

    /**
     * Group by AddFiling.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddFilingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddFilingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddFilingGroupByArgs['orderBy'] }
        : { orderBy?: AddFilingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddFilingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddFilingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AddFiling model
   */
  readonly fields: AddFilingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AddFiling.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddFilingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AddFiling model
   */
  interface AddFilingFieldRefs {
    readonly id: FieldRef<"AddFiling", 'Int'>
    readonly name: FieldRef<"AddFiling", 'String'>
    readonly phoneNumber: FieldRef<"AddFiling", 'String'>
    readonly address: FieldRef<"AddFiling", 'String'>
    readonly email: FieldRef<"AddFiling", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AddFiling findUnique
   */
  export type AddFilingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddFiling
     */
    select?: AddFilingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddFiling
     */
    omit?: AddFilingOmit<ExtArgs> | null
    /**
     * Filter, which AddFiling to fetch.
     */
    where: AddFilingWhereUniqueInput
  }

  /**
   * AddFiling findUniqueOrThrow
   */
  export type AddFilingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddFiling
     */
    select?: AddFilingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddFiling
     */
    omit?: AddFilingOmit<ExtArgs> | null
    /**
     * Filter, which AddFiling to fetch.
     */
    where: AddFilingWhereUniqueInput
  }

  /**
   * AddFiling findFirst
   */
  export type AddFilingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddFiling
     */
    select?: AddFilingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddFiling
     */
    omit?: AddFilingOmit<ExtArgs> | null
    /**
     * Filter, which AddFiling to fetch.
     */
    where?: AddFilingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddFilings to fetch.
     */
    orderBy?: AddFilingOrderByWithRelationInput | AddFilingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddFilings.
     */
    cursor?: AddFilingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddFilings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddFilings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddFilings.
     */
    distinct?: AddFilingScalarFieldEnum | AddFilingScalarFieldEnum[]
  }

  /**
   * AddFiling findFirstOrThrow
   */
  export type AddFilingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddFiling
     */
    select?: AddFilingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddFiling
     */
    omit?: AddFilingOmit<ExtArgs> | null
    /**
     * Filter, which AddFiling to fetch.
     */
    where?: AddFilingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddFilings to fetch.
     */
    orderBy?: AddFilingOrderByWithRelationInput | AddFilingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddFilings.
     */
    cursor?: AddFilingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddFilings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddFilings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddFilings.
     */
    distinct?: AddFilingScalarFieldEnum | AddFilingScalarFieldEnum[]
  }

  /**
   * AddFiling findMany
   */
  export type AddFilingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddFiling
     */
    select?: AddFilingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddFiling
     */
    omit?: AddFilingOmit<ExtArgs> | null
    /**
     * Filter, which AddFilings to fetch.
     */
    where?: AddFilingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddFilings to fetch.
     */
    orderBy?: AddFilingOrderByWithRelationInput | AddFilingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AddFilings.
     */
    cursor?: AddFilingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddFilings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddFilings.
     */
    skip?: number
    distinct?: AddFilingScalarFieldEnum | AddFilingScalarFieldEnum[]
  }

  /**
   * AddFiling create
   */
  export type AddFilingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddFiling
     */
    select?: AddFilingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddFiling
     */
    omit?: AddFilingOmit<ExtArgs> | null
    /**
     * The data needed to create a AddFiling.
     */
    data: XOR<AddFilingCreateInput, AddFilingUncheckedCreateInput>
  }

  /**
   * AddFiling createMany
   */
  export type AddFilingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AddFilings.
     */
    data: AddFilingCreateManyInput | AddFilingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AddFiling update
   */
  export type AddFilingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddFiling
     */
    select?: AddFilingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddFiling
     */
    omit?: AddFilingOmit<ExtArgs> | null
    /**
     * The data needed to update a AddFiling.
     */
    data: XOR<AddFilingUpdateInput, AddFilingUncheckedUpdateInput>
    /**
     * Choose, which AddFiling to update.
     */
    where: AddFilingWhereUniqueInput
  }

  /**
   * AddFiling updateMany
   */
  export type AddFilingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AddFilings.
     */
    data: XOR<AddFilingUpdateManyMutationInput, AddFilingUncheckedUpdateManyInput>
    /**
     * Filter which AddFilings to update
     */
    where?: AddFilingWhereInput
    /**
     * Limit how many AddFilings to update.
     */
    limit?: number
  }

  /**
   * AddFiling upsert
   */
  export type AddFilingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddFiling
     */
    select?: AddFilingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddFiling
     */
    omit?: AddFilingOmit<ExtArgs> | null
    /**
     * The filter to search for the AddFiling to update in case it exists.
     */
    where: AddFilingWhereUniqueInput
    /**
     * In case the AddFiling found by the `where` argument doesn't exist, create a new AddFiling with this data.
     */
    create: XOR<AddFilingCreateInput, AddFilingUncheckedCreateInput>
    /**
     * In case the AddFiling was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddFilingUpdateInput, AddFilingUncheckedUpdateInput>
  }

  /**
   * AddFiling delete
   */
  export type AddFilingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddFiling
     */
    select?: AddFilingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddFiling
     */
    omit?: AddFilingOmit<ExtArgs> | null
    /**
     * Filter which AddFiling to delete.
     */
    where: AddFilingWhereUniqueInput
  }

  /**
   * AddFiling deleteMany
   */
  export type AddFilingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddFilings to delete
     */
    where?: AddFilingWhereInput
    /**
     * Limit how many AddFilings to delete.
     */
    limit?: number
  }

  /**
   * AddFiling without action
   */
  export type AddFilingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddFiling
     */
    select?: AddFilingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddFiling
     */
    omit?: AddFilingOmit<ExtArgs> | null
  }


  /**
   * Model AddSetting
   */

  export type AggregateAddSetting = {
    _count: AddSettingCountAggregateOutputType | null
    _avg: AddSettingAvgAggregateOutputType | null
    _sum: AddSettingSumAggregateOutputType | null
    _min: AddSettingMinAggregateOutputType | null
    _max: AddSettingMaxAggregateOutputType | null
  }

  export type AddSettingAvgAggregateOutputType = {
    id: number | null
  }

  export type AddSettingSumAggregateOutputType = {
    id: number | null
  }

  export type AddSettingMinAggregateOutputType = {
    id: number | null
    name: string | null
    phoneNumber: string | null
    address: string | null
    email: string | null
  }

  export type AddSettingMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phoneNumber: string | null
    address: string | null
    email: string | null
  }

  export type AddSettingCountAggregateOutputType = {
    id: number
    name: number
    phoneNumber: number
    address: number
    email: number
    _all: number
  }


  export type AddSettingAvgAggregateInputType = {
    id?: true
  }

  export type AddSettingSumAggregateInputType = {
    id?: true
  }

  export type AddSettingMinAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    address?: true
    email?: true
  }

  export type AddSettingMaxAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    address?: true
    email?: true
  }

  export type AddSettingCountAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    address?: true
    email?: true
    _all?: true
  }

  export type AddSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddSetting to aggregate.
     */
    where?: AddSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddSettings to fetch.
     */
    orderBy?: AddSettingOrderByWithRelationInput | AddSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AddSettings
    **/
    _count?: true | AddSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddSettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddSettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddSettingMaxAggregateInputType
  }

  export type GetAddSettingAggregateType<T extends AddSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateAddSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddSetting[P]>
      : GetScalarType<T[P], AggregateAddSetting[P]>
  }




  export type AddSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddSettingWhereInput
    orderBy?: AddSettingOrderByWithAggregationInput | AddSettingOrderByWithAggregationInput[]
    by: AddSettingScalarFieldEnum[] | AddSettingScalarFieldEnum
    having?: AddSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddSettingCountAggregateInputType | true
    _avg?: AddSettingAvgAggregateInputType
    _sum?: AddSettingSumAggregateInputType
    _min?: AddSettingMinAggregateInputType
    _max?: AddSettingMaxAggregateInputType
  }

  export type AddSettingGroupByOutputType = {
    id: number
    name: string
    phoneNumber: string
    address: string
    email: string
    _count: AddSettingCountAggregateOutputType | null
    _avg: AddSettingAvgAggregateOutputType | null
    _sum: AddSettingSumAggregateOutputType | null
    _min: AddSettingMinAggregateOutputType | null
    _max: AddSettingMaxAggregateOutputType | null
  }

  type GetAddSettingGroupByPayload<T extends AddSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddSettingGroupByOutputType[P]>
            : GetScalarType<T[P], AddSettingGroupByOutputType[P]>
        }
      >
    >


  export type AddSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    address?: boolean
    email?: boolean
  }, ExtArgs["result"]["addSetting"]>



  export type AddSettingSelectScalar = {
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    address?: boolean
    email?: boolean
  }

  export type AddSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phoneNumber" | "address" | "email", ExtArgs["result"]["addSetting"]>

  export type $AddSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AddSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phoneNumber: string
      address: string
      email: string
    }, ExtArgs["result"]["addSetting"]>
    composites: {}
  }

  type AddSettingGetPayload<S extends boolean | null | undefined | AddSettingDefaultArgs> = $Result.GetResult<Prisma.$AddSettingPayload, S>

  type AddSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddSettingCountAggregateInputType | true
    }

  export interface AddSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AddSetting'], meta: { name: 'AddSetting' } }
    /**
     * Find zero or one AddSetting that matches the filter.
     * @param {AddSettingFindUniqueArgs} args - Arguments to find a AddSetting
     * @example
     * // Get one AddSetting
     * const addSetting = await prisma.addSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddSettingFindUniqueArgs>(args: SelectSubset<T, AddSettingFindUniqueArgs<ExtArgs>>): Prisma__AddSettingClient<$Result.GetResult<Prisma.$AddSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AddSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddSettingFindUniqueOrThrowArgs} args - Arguments to find a AddSetting
     * @example
     * // Get one AddSetting
     * const addSetting = await prisma.addSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, AddSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddSettingClient<$Result.GetResult<Prisma.$AddSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddSettingFindFirstArgs} args - Arguments to find a AddSetting
     * @example
     * // Get one AddSetting
     * const addSetting = await prisma.addSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddSettingFindFirstArgs>(args?: SelectSubset<T, AddSettingFindFirstArgs<ExtArgs>>): Prisma__AddSettingClient<$Result.GetResult<Prisma.$AddSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddSettingFindFirstOrThrowArgs} args - Arguments to find a AddSetting
     * @example
     * // Get one AddSetting
     * const addSetting = await prisma.addSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, AddSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddSettingClient<$Result.GetResult<Prisma.$AddSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AddSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AddSettings
     * const addSettings = await prisma.addSetting.findMany()
     * 
     * // Get first 10 AddSettings
     * const addSettings = await prisma.addSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addSettingWithIdOnly = await prisma.addSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddSettingFindManyArgs>(args?: SelectSubset<T, AddSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AddSetting.
     * @param {AddSettingCreateArgs} args - Arguments to create a AddSetting.
     * @example
     * // Create one AddSetting
     * const AddSetting = await prisma.addSetting.create({
     *   data: {
     *     // ... data to create a AddSetting
     *   }
     * })
     * 
     */
    create<T extends AddSettingCreateArgs>(args: SelectSubset<T, AddSettingCreateArgs<ExtArgs>>): Prisma__AddSettingClient<$Result.GetResult<Prisma.$AddSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AddSettings.
     * @param {AddSettingCreateManyArgs} args - Arguments to create many AddSettings.
     * @example
     * // Create many AddSettings
     * const addSetting = await prisma.addSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddSettingCreateManyArgs>(args?: SelectSubset<T, AddSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AddSetting.
     * @param {AddSettingDeleteArgs} args - Arguments to delete one AddSetting.
     * @example
     * // Delete one AddSetting
     * const AddSetting = await prisma.addSetting.delete({
     *   where: {
     *     // ... filter to delete one AddSetting
     *   }
     * })
     * 
     */
    delete<T extends AddSettingDeleteArgs>(args: SelectSubset<T, AddSettingDeleteArgs<ExtArgs>>): Prisma__AddSettingClient<$Result.GetResult<Prisma.$AddSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AddSetting.
     * @param {AddSettingUpdateArgs} args - Arguments to update one AddSetting.
     * @example
     * // Update one AddSetting
     * const addSetting = await prisma.addSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddSettingUpdateArgs>(args: SelectSubset<T, AddSettingUpdateArgs<ExtArgs>>): Prisma__AddSettingClient<$Result.GetResult<Prisma.$AddSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AddSettings.
     * @param {AddSettingDeleteManyArgs} args - Arguments to filter AddSettings to delete.
     * @example
     * // Delete a few AddSettings
     * const { count } = await prisma.addSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddSettingDeleteManyArgs>(args?: SelectSubset<T, AddSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AddSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AddSettings
     * const addSetting = await prisma.addSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddSettingUpdateManyArgs>(args: SelectSubset<T, AddSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AddSetting.
     * @param {AddSettingUpsertArgs} args - Arguments to update or create a AddSetting.
     * @example
     * // Update or create a AddSetting
     * const addSetting = await prisma.addSetting.upsert({
     *   create: {
     *     // ... data to create a AddSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AddSetting we want to update
     *   }
     * })
     */
    upsert<T extends AddSettingUpsertArgs>(args: SelectSubset<T, AddSettingUpsertArgs<ExtArgs>>): Prisma__AddSettingClient<$Result.GetResult<Prisma.$AddSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AddSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddSettingCountArgs} args - Arguments to filter AddSettings to count.
     * @example
     * // Count the number of AddSettings
     * const count = await prisma.addSetting.count({
     *   where: {
     *     // ... the filter for the AddSettings we want to count
     *   }
     * })
    **/
    count<T extends AddSettingCountArgs>(
      args?: Subset<T, AddSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AddSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddSettingAggregateArgs>(args: Subset<T, AddSettingAggregateArgs>): Prisma.PrismaPromise<GetAddSettingAggregateType<T>>

    /**
     * Group by AddSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddSettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddSettingGroupByArgs['orderBy'] }
        : { orderBy?: AddSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AddSetting model
   */
  readonly fields: AddSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AddSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AddSetting model
   */
  interface AddSettingFieldRefs {
    readonly id: FieldRef<"AddSetting", 'Int'>
    readonly name: FieldRef<"AddSetting", 'String'>
    readonly phoneNumber: FieldRef<"AddSetting", 'String'>
    readonly address: FieldRef<"AddSetting", 'String'>
    readonly email: FieldRef<"AddSetting", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AddSetting findUnique
   */
  export type AddSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddSetting
     */
    select?: AddSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddSetting
     */
    omit?: AddSettingOmit<ExtArgs> | null
    /**
     * Filter, which AddSetting to fetch.
     */
    where: AddSettingWhereUniqueInput
  }

  /**
   * AddSetting findUniqueOrThrow
   */
  export type AddSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddSetting
     */
    select?: AddSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddSetting
     */
    omit?: AddSettingOmit<ExtArgs> | null
    /**
     * Filter, which AddSetting to fetch.
     */
    where: AddSettingWhereUniqueInput
  }

  /**
   * AddSetting findFirst
   */
  export type AddSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddSetting
     */
    select?: AddSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddSetting
     */
    omit?: AddSettingOmit<ExtArgs> | null
    /**
     * Filter, which AddSetting to fetch.
     */
    where?: AddSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddSettings to fetch.
     */
    orderBy?: AddSettingOrderByWithRelationInput | AddSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddSettings.
     */
    cursor?: AddSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddSettings.
     */
    distinct?: AddSettingScalarFieldEnum | AddSettingScalarFieldEnum[]
  }

  /**
   * AddSetting findFirstOrThrow
   */
  export type AddSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddSetting
     */
    select?: AddSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddSetting
     */
    omit?: AddSettingOmit<ExtArgs> | null
    /**
     * Filter, which AddSetting to fetch.
     */
    where?: AddSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddSettings to fetch.
     */
    orderBy?: AddSettingOrderByWithRelationInput | AddSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddSettings.
     */
    cursor?: AddSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddSettings.
     */
    distinct?: AddSettingScalarFieldEnum | AddSettingScalarFieldEnum[]
  }

  /**
   * AddSetting findMany
   */
  export type AddSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddSetting
     */
    select?: AddSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddSetting
     */
    omit?: AddSettingOmit<ExtArgs> | null
    /**
     * Filter, which AddSettings to fetch.
     */
    where?: AddSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddSettings to fetch.
     */
    orderBy?: AddSettingOrderByWithRelationInput | AddSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AddSettings.
     */
    cursor?: AddSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddSettings.
     */
    skip?: number
    distinct?: AddSettingScalarFieldEnum | AddSettingScalarFieldEnum[]
  }

  /**
   * AddSetting create
   */
  export type AddSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddSetting
     */
    select?: AddSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddSetting
     */
    omit?: AddSettingOmit<ExtArgs> | null
    /**
     * The data needed to create a AddSetting.
     */
    data: XOR<AddSettingCreateInput, AddSettingUncheckedCreateInput>
  }

  /**
   * AddSetting createMany
   */
  export type AddSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AddSettings.
     */
    data: AddSettingCreateManyInput | AddSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AddSetting update
   */
  export type AddSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddSetting
     */
    select?: AddSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddSetting
     */
    omit?: AddSettingOmit<ExtArgs> | null
    /**
     * The data needed to update a AddSetting.
     */
    data: XOR<AddSettingUpdateInput, AddSettingUncheckedUpdateInput>
    /**
     * Choose, which AddSetting to update.
     */
    where: AddSettingWhereUniqueInput
  }

  /**
   * AddSetting updateMany
   */
  export type AddSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AddSettings.
     */
    data: XOR<AddSettingUpdateManyMutationInput, AddSettingUncheckedUpdateManyInput>
    /**
     * Filter which AddSettings to update
     */
    where?: AddSettingWhereInput
    /**
     * Limit how many AddSettings to update.
     */
    limit?: number
  }

  /**
   * AddSetting upsert
   */
  export type AddSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddSetting
     */
    select?: AddSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddSetting
     */
    omit?: AddSettingOmit<ExtArgs> | null
    /**
     * The filter to search for the AddSetting to update in case it exists.
     */
    where: AddSettingWhereUniqueInput
    /**
     * In case the AddSetting found by the `where` argument doesn't exist, create a new AddSetting with this data.
     */
    create: XOR<AddSettingCreateInput, AddSettingUncheckedCreateInput>
    /**
     * In case the AddSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddSettingUpdateInput, AddSettingUncheckedUpdateInput>
  }

  /**
   * AddSetting delete
   */
  export type AddSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddSetting
     */
    select?: AddSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddSetting
     */
    omit?: AddSettingOmit<ExtArgs> | null
    /**
     * Filter which AddSetting to delete.
     */
    where: AddSettingWhereUniqueInput
  }

  /**
   * AddSetting deleteMany
   */
  export type AddSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddSettings to delete
     */
    where?: AddSettingWhereInput
    /**
     * Limit how many AddSettings to delete.
     */
    limit?: number
  }

  /**
   * AddSetting without action
   */
  export type AddSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddSetting
     */
    select?: AddSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddSetting
     */
    omit?: AddSettingOmit<ExtArgs> | null
  }


  /**
   * Model AddBuffing
   */

  export type AggregateAddBuffing = {
    _count: AddBuffingCountAggregateOutputType | null
    _avg: AddBuffingAvgAggregateOutputType | null
    _sum: AddBuffingSumAggregateOutputType | null
    _min: AddBuffingMinAggregateOutputType | null
    _max: AddBuffingMaxAggregateOutputType | null
  }

  export type AddBuffingAvgAggregateOutputType = {
    id: number | null
  }

  export type AddBuffingSumAggregateOutputType = {
    id: number | null
  }

  export type AddBuffingMinAggregateOutputType = {
    id: number | null
    name: string | null
    phoneNumber: string | null
    address: string | null
    email: string | null
  }

  export type AddBuffingMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phoneNumber: string | null
    address: string | null
    email: string | null
  }

  export type AddBuffingCountAggregateOutputType = {
    id: number
    name: number
    phoneNumber: number
    address: number
    email: number
    _all: number
  }


  export type AddBuffingAvgAggregateInputType = {
    id?: true
  }

  export type AddBuffingSumAggregateInputType = {
    id?: true
  }

  export type AddBuffingMinAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    address?: true
    email?: true
  }

  export type AddBuffingMaxAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    address?: true
    email?: true
  }

  export type AddBuffingCountAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    address?: true
    email?: true
    _all?: true
  }

  export type AddBuffingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddBuffing to aggregate.
     */
    where?: AddBuffingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddBuffings to fetch.
     */
    orderBy?: AddBuffingOrderByWithRelationInput | AddBuffingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddBuffingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddBuffings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddBuffings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AddBuffings
    **/
    _count?: true | AddBuffingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddBuffingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddBuffingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddBuffingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddBuffingMaxAggregateInputType
  }

  export type GetAddBuffingAggregateType<T extends AddBuffingAggregateArgs> = {
        [P in keyof T & keyof AggregateAddBuffing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddBuffing[P]>
      : GetScalarType<T[P], AggregateAddBuffing[P]>
  }




  export type AddBuffingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddBuffingWhereInput
    orderBy?: AddBuffingOrderByWithAggregationInput | AddBuffingOrderByWithAggregationInput[]
    by: AddBuffingScalarFieldEnum[] | AddBuffingScalarFieldEnum
    having?: AddBuffingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddBuffingCountAggregateInputType | true
    _avg?: AddBuffingAvgAggregateInputType
    _sum?: AddBuffingSumAggregateInputType
    _min?: AddBuffingMinAggregateInputType
    _max?: AddBuffingMaxAggregateInputType
  }

  export type AddBuffingGroupByOutputType = {
    id: number
    name: string
    phoneNumber: string
    address: string
    email: string
    _count: AddBuffingCountAggregateOutputType | null
    _avg: AddBuffingAvgAggregateOutputType | null
    _sum: AddBuffingSumAggregateOutputType | null
    _min: AddBuffingMinAggregateOutputType | null
    _max: AddBuffingMaxAggregateOutputType | null
  }

  type GetAddBuffingGroupByPayload<T extends AddBuffingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddBuffingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddBuffingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddBuffingGroupByOutputType[P]>
            : GetScalarType<T[P], AddBuffingGroupByOutputType[P]>
        }
      >
    >


  export type AddBuffingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    address?: boolean
    email?: boolean
  }, ExtArgs["result"]["addBuffing"]>



  export type AddBuffingSelectScalar = {
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    address?: boolean
    email?: boolean
  }

  export type AddBuffingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phoneNumber" | "address" | "email", ExtArgs["result"]["addBuffing"]>

  export type $AddBuffingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AddBuffing"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phoneNumber: string
      address: string
      email: string
    }, ExtArgs["result"]["addBuffing"]>
    composites: {}
  }

  type AddBuffingGetPayload<S extends boolean | null | undefined | AddBuffingDefaultArgs> = $Result.GetResult<Prisma.$AddBuffingPayload, S>

  type AddBuffingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddBuffingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddBuffingCountAggregateInputType | true
    }

  export interface AddBuffingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AddBuffing'], meta: { name: 'AddBuffing' } }
    /**
     * Find zero or one AddBuffing that matches the filter.
     * @param {AddBuffingFindUniqueArgs} args - Arguments to find a AddBuffing
     * @example
     * // Get one AddBuffing
     * const addBuffing = await prisma.addBuffing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddBuffingFindUniqueArgs>(args: SelectSubset<T, AddBuffingFindUniqueArgs<ExtArgs>>): Prisma__AddBuffingClient<$Result.GetResult<Prisma.$AddBuffingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AddBuffing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddBuffingFindUniqueOrThrowArgs} args - Arguments to find a AddBuffing
     * @example
     * // Get one AddBuffing
     * const addBuffing = await prisma.addBuffing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddBuffingFindUniqueOrThrowArgs>(args: SelectSubset<T, AddBuffingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddBuffingClient<$Result.GetResult<Prisma.$AddBuffingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddBuffing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddBuffingFindFirstArgs} args - Arguments to find a AddBuffing
     * @example
     * // Get one AddBuffing
     * const addBuffing = await prisma.addBuffing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddBuffingFindFirstArgs>(args?: SelectSubset<T, AddBuffingFindFirstArgs<ExtArgs>>): Prisma__AddBuffingClient<$Result.GetResult<Prisma.$AddBuffingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddBuffing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddBuffingFindFirstOrThrowArgs} args - Arguments to find a AddBuffing
     * @example
     * // Get one AddBuffing
     * const addBuffing = await prisma.addBuffing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddBuffingFindFirstOrThrowArgs>(args?: SelectSubset<T, AddBuffingFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddBuffingClient<$Result.GetResult<Prisma.$AddBuffingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AddBuffings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddBuffingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AddBuffings
     * const addBuffings = await prisma.addBuffing.findMany()
     * 
     * // Get first 10 AddBuffings
     * const addBuffings = await prisma.addBuffing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addBuffingWithIdOnly = await prisma.addBuffing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddBuffingFindManyArgs>(args?: SelectSubset<T, AddBuffingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddBuffingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AddBuffing.
     * @param {AddBuffingCreateArgs} args - Arguments to create a AddBuffing.
     * @example
     * // Create one AddBuffing
     * const AddBuffing = await prisma.addBuffing.create({
     *   data: {
     *     // ... data to create a AddBuffing
     *   }
     * })
     * 
     */
    create<T extends AddBuffingCreateArgs>(args: SelectSubset<T, AddBuffingCreateArgs<ExtArgs>>): Prisma__AddBuffingClient<$Result.GetResult<Prisma.$AddBuffingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AddBuffings.
     * @param {AddBuffingCreateManyArgs} args - Arguments to create many AddBuffings.
     * @example
     * // Create many AddBuffings
     * const addBuffing = await prisma.addBuffing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddBuffingCreateManyArgs>(args?: SelectSubset<T, AddBuffingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AddBuffing.
     * @param {AddBuffingDeleteArgs} args - Arguments to delete one AddBuffing.
     * @example
     * // Delete one AddBuffing
     * const AddBuffing = await prisma.addBuffing.delete({
     *   where: {
     *     // ... filter to delete one AddBuffing
     *   }
     * })
     * 
     */
    delete<T extends AddBuffingDeleteArgs>(args: SelectSubset<T, AddBuffingDeleteArgs<ExtArgs>>): Prisma__AddBuffingClient<$Result.GetResult<Prisma.$AddBuffingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AddBuffing.
     * @param {AddBuffingUpdateArgs} args - Arguments to update one AddBuffing.
     * @example
     * // Update one AddBuffing
     * const addBuffing = await prisma.addBuffing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddBuffingUpdateArgs>(args: SelectSubset<T, AddBuffingUpdateArgs<ExtArgs>>): Prisma__AddBuffingClient<$Result.GetResult<Prisma.$AddBuffingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AddBuffings.
     * @param {AddBuffingDeleteManyArgs} args - Arguments to filter AddBuffings to delete.
     * @example
     * // Delete a few AddBuffings
     * const { count } = await prisma.addBuffing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddBuffingDeleteManyArgs>(args?: SelectSubset<T, AddBuffingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AddBuffings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddBuffingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AddBuffings
     * const addBuffing = await prisma.addBuffing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddBuffingUpdateManyArgs>(args: SelectSubset<T, AddBuffingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AddBuffing.
     * @param {AddBuffingUpsertArgs} args - Arguments to update or create a AddBuffing.
     * @example
     * // Update or create a AddBuffing
     * const addBuffing = await prisma.addBuffing.upsert({
     *   create: {
     *     // ... data to create a AddBuffing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AddBuffing we want to update
     *   }
     * })
     */
    upsert<T extends AddBuffingUpsertArgs>(args: SelectSubset<T, AddBuffingUpsertArgs<ExtArgs>>): Prisma__AddBuffingClient<$Result.GetResult<Prisma.$AddBuffingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AddBuffings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddBuffingCountArgs} args - Arguments to filter AddBuffings to count.
     * @example
     * // Count the number of AddBuffings
     * const count = await prisma.addBuffing.count({
     *   where: {
     *     // ... the filter for the AddBuffings we want to count
     *   }
     * })
    **/
    count<T extends AddBuffingCountArgs>(
      args?: Subset<T, AddBuffingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddBuffingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AddBuffing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddBuffingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddBuffingAggregateArgs>(args: Subset<T, AddBuffingAggregateArgs>): Prisma.PrismaPromise<GetAddBuffingAggregateType<T>>

    /**
     * Group by AddBuffing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddBuffingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddBuffingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddBuffingGroupByArgs['orderBy'] }
        : { orderBy?: AddBuffingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddBuffingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddBuffingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AddBuffing model
   */
  readonly fields: AddBuffingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AddBuffing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddBuffingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AddBuffing model
   */
  interface AddBuffingFieldRefs {
    readonly id: FieldRef<"AddBuffing", 'Int'>
    readonly name: FieldRef<"AddBuffing", 'String'>
    readonly phoneNumber: FieldRef<"AddBuffing", 'String'>
    readonly address: FieldRef<"AddBuffing", 'String'>
    readonly email: FieldRef<"AddBuffing", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AddBuffing findUnique
   */
  export type AddBuffingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddBuffing
     */
    select?: AddBuffingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddBuffing
     */
    omit?: AddBuffingOmit<ExtArgs> | null
    /**
     * Filter, which AddBuffing to fetch.
     */
    where: AddBuffingWhereUniqueInput
  }

  /**
   * AddBuffing findUniqueOrThrow
   */
  export type AddBuffingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddBuffing
     */
    select?: AddBuffingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddBuffing
     */
    omit?: AddBuffingOmit<ExtArgs> | null
    /**
     * Filter, which AddBuffing to fetch.
     */
    where: AddBuffingWhereUniqueInput
  }

  /**
   * AddBuffing findFirst
   */
  export type AddBuffingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddBuffing
     */
    select?: AddBuffingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddBuffing
     */
    omit?: AddBuffingOmit<ExtArgs> | null
    /**
     * Filter, which AddBuffing to fetch.
     */
    where?: AddBuffingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddBuffings to fetch.
     */
    orderBy?: AddBuffingOrderByWithRelationInput | AddBuffingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddBuffings.
     */
    cursor?: AddBuffingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddBuffings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddBuffings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddBuffings.
     */
    distinct?: AddBuffingScalarFieldEnum | AddBuffingScalarFieldEnum[]
  }

  /**
   * AddBuffing findFirstOrThrow
   */
  export type AddBuffingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddBuffing
     */
    select?: AddBuffingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddBuffing
     */
    omit?: AddBuffingOmit<ExtArgs> | null
    /**
     * Filter, which AddBuffing to fetch.
     */
    where?: AddBuffingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddBuffings to fetch.
     */
    orderBy?: AddBuffingOrderByWithRelationInput | AddBuffingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddBuffings.
     */
    cursor?: AddBuffingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddBuffings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddBuffings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddBuffings.
     */
    distinct?: AddBuffingScalarFieldEnum | AddBuffingScalarFieldEnum[]
  }

  /**
   * AddBuffing findMany
   */
  export type AddBuffingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddBuffing
     */
    select?: AddBuffingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddBuffing
     */
    omit?: AddBuffingOmit<ExtArgs> | null
    /**
     * Filter, which AddBuffings to fetch.
     */
    where?: AddBuffingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddBuffings to fetch.
     */
    orderBy?: AddBuffingOrderByWithRelationInput | AddBuffingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AddBuffings.
     */
    cursor?: AddBuffingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddBuffings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddBuffings.
     */
    skip?: number
    distinct?: AddBuffingScalarFieldEnum | AddBuffingScalarFieldEnum[]
  }

  /**
   * AddBuffing create
   */
  export type AddBuffingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddBuffing
     */
    select?: AddBuffingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddBuffing
     */
    omit?: AddBuffingOmit<ExtArgs> | null
    /**
     * The data needed to create a AddBuffing.
     */
    data: XOR<AddBuffingCreateInput, AddBuffingUncheckedCreateInput>
  }

  /**
   * AddBuffing createMany
   */
  export type AddBuffingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AddBuffings.
     */
    data: AddBuffingCreateManyInput | AddBuffingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AddBuffing update
   */
  export type AddBuffingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddBuffing
     */
    select?: AddBuffingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddBuffing
     */
    omit?: AddBuffingOmit<ExtArgs> | null
    /**
     * The data needed to update a AddBuffing.
     */
    data: XOR<AddBuffingUpdateInput, AddBuffingUncheckedUpdateInput>
    /**
     * Choose, which AddBuffing to update.
     */
    where: AddBuffingWhereUniqueInput
  }

  /**
   * AddBuffing updateMany
   */
  export type AddBuffingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AddBuffings.
     */
    data: XOR<AddBuffingUpdateManyMutationInput, AddBuffingUncheckedUpdateManyInput>
    /**
     * Filter which AddBuffings to update
     */
    where?: AddBuffingWhereInput
    /**
     * Limit how many AddBuffings to update.
     */
    limit?: number
  }

  /**
   * AddBuffing upsert
   */
  export type AddBuffingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddBuffing
     */
    select?: AddBuffingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddBuffing
     */
    omit?: AddBuffingOmit<ExtArgs> | null
    /**
     * The filter to search for the AddBuffing to update in case it exists.
     */
    where: AddBuffingWhereUniqueInput
    /**
     * In case the AddBuffing found by the `where` argument doesn't exist, create a new AddBuffing with this data.
     */
    create: XOR<AddBuffingCreateInput, AddBuffingUncheckedCreateInput>
    /**
     * In case the AddBuffing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddBuffingUpdateInput, AddBuffingUncheckedUpdateInput>
  }

  /**
   * AddBuffing delete
   */
  export type AddBuffingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddBuffing
     */
    select?: AddBuffingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddBuffing
     */
    omit?: AddBuffingOmit<ExtArgs> | null
    /**
     * Filter which AddBuffing to delete.
     */
    where: AddBuffingWhereUniqueInput
  }

  /**
   * AddBuffing deleteMany
   */
  export type AddBuffingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddBuffings to delete
     */
    where?: AddBuffingWhereInput
    /**
     * Limit how many AddBuffings to delete.
     */
    limit?: number
  }

  /**
   * AddBuffing without action
   */
  export type AddBuffingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddBuffing
     */
    select?: AddBuffingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddBuffing
     */
    omit?: AddBuffingOmit<ExtArgs> | null
  }


  /**
   * Model AddItem
   */

  export type AggregateAddItem = {
    _count: AddItemCountAggregateOutputType | null
    _avg: AddItemAvgAggregateOutputType | null
    _sum: AddItemSumAggregateOutputType | null
    _min: AddItemMinAggregateOutputType | null
    _max: AddItemMaxAggregateOutputType | null
  }

  export type AddItemAvgAggregateOutputType = {
    id: number | null
  }

  export type AddItemSumAggregateOutputType = {
    id: number | null
  }

  export type AddItemMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type AddItemMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type AddItemCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type AddItemAvgAggregateInputType = {
    id?: true
  }

  export type AddItemSumAggregateInputType = {
    id?: true
  }

  export type AddItemMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type AddItemMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type AddItemCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type AddItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddItem to aggregate.
     */
    where?: AddItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddItems to fetch.
     */
    orderBy?: AddItemOrderByWithRelationInput | AddItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AddItems
    **/
    _count?: true | AddItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddItemMaxAggregateInputType
  }

  export type GetAddItemAggregateType<T extends AddItemAggregateArgs> = {
        [P in keyof T & keyof AggregateAddItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddItem[P]>
      : GetScalarType<T[P], AggregateAddItem[P]>
  }




  export type AddItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddItemWhereInput
    orderBy?: AddItemOrderByWithAggregationInput | AddItemOrderByWithAggregationInput[]
    by: AddItemScalarFieldEnum[] | AddItemScalarFieldEnum
    having?: AddItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddItemCountAggregateInputType | true
    _avg?: AddItemAvgAggregateInputType
    _sum?: AddItemSumAggregateInputType
    _min?: AddItemMinAggregateInputType
    _max?: AddItemMaxAggregateInputType
  }

  export type AddItemGroupByOutputType = {
    id: number
    name: string
    _count: AddItemCountAggregateOutputType | null
    _avg: AddItemAvgAggregateOutputType | null
    _sum: AddItemSumAggregateOutputType | null
    _min: AddItemMinAggregateOutputType | null
    _max: AddItemMaxAggregateOutputType | null
  }

  type GetAddItemGroupByPayload<T extends AddItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddItemGroupByOutputType[P]>
            : GetScalarType<T[P], AddItemGroupByOutputType[P]>
        }
      >
    >


  export type AddItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["addItem"]>



  export type AddItemSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type AddItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["addItem"]>

  export type $AddItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AddItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["addItem"]>
    composites: {}
  }

  type AddItemGetPayload<S extends boolean | null | undefined | AddItemDefaultArgs> = $Result.GetResult<Prisma.$AddItemPayload, S>

  type AddItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddItemCountAggregateInputType | true
    }

  export interface AddItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AddItem'], meta: { name: 'AddItem' } }
    /**
     * Find zero or one AddItem that matches the filter.
     * @param {AddItemFindUniqueArgs} args - Arguments to find a AddItem
     * @example
     * // Get one AddItem
     * const addItem = await prisma.addItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddItemFindUniqueArgs>(args: SelectSubset<T, AddItemFindUniqueArgs<ExtArgs>>): Prisma__AddItemClient<$Result.GetResult<Prisma.$AddItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AddItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddItemFindUniqueOrThrowArgs} args - Arguments to find a AddItem
     * @example
     * // Get one AddItem
     * const addItem = await prisma.addItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddItemFindUniqueOrThrowArgs>(args: SelectSubset<T, AddItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddItemClient<$Result.GetResult<Prisma.$AddItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddItemFindFirstArgs} args - Arguments to find a AddItem
     * @example
     * // Get one AddItem
     * const addItem = await prisma.addItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddItemFindFirstArgs>(args?: SelectSubset<T, AddItemFindFirstArgs<ExtArgs>>): Prisma__AddItemClient<$Result.GetResult<Prisma.$AddItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddItemFindFirstOrThrowArgs} args - Arguments to find a AddItem
     * @example
     * // Get one AddItem
     * const addItem = await prisma.addItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddItemFindFirstOrThrowArgs>(args?: SelectSubset<T, AddItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddItemClient<$Result.GetResult<Prisma.$AddItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AddItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AddItems
     * const addItems = await prisma.addItem.findMany()
     * 
     * // Get first 10 AddItems
     * const addItems = await prisma.addItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addItemWithIdOnly = await prisma.addItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddItemFindManyArgs>(args?: SelectSubset<T, AddItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AddItem.
     * @param {AddItemCreateArgs} args - Arguments to create a AddItem.
     * @example
     * // Create one AddItem
     * const AddItem = await prisma.addItem.create({
     *   data: {
     *     // ... data to create a AddItem
     *   }
     * })
     * 
     */
    create<T extends AddItemCreateArgs>(args: SelectSubset<T, AddItemCreateArgs<ExtArgs>>): Prisma__AddItemClient<$Result.GetResult<Prisma.$AddItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AddItems.
     * @param {AddItemCreateManyArgs} args - Arguments to create many AddItems.
     * @example
     * // Create many AddItems
     * const addItem = await prisma.addItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddItemCreateManyArgs>(args?: SelectSubset<T, AddItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AddItem.
     * @param {AddItemDeleteArgs} args - Arguments to delete one AddItem.
     * @example
     * // Delete one AddItem
     * const AddItem = await prisma.addItem.delete({
     *   where: {
     *     // ... filter to delete one AddItem
     *   }
     * })
     * 
     */
    delete<T extends AddItemDeleteArgs>(args: SelectSubset<T, AddItemDeleteArgs<ExtArgs>>): Prisma__AddItemClient<$Result.GetResult<Prisma.$AddItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AddItem.
     * @param {AddItemUpdateArgs} args - Arguments to update one AddItem.
     * @example
     * // Update one AddItem
     * const addItem = await prisma.addItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddItemUpdateArgs>(args: SelectSubset<T, AddItemUpdateArgs<ExtArgs>>): Prisma__AddItemClient<$Result.GetResult<Prisma.$AddItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AddItems.
     * @param {AddItemDeleteManyArgs} args - Arguments to filter AddItems to delete.
     * @example
     * // Delete a few AddItems
     * const { count } = await prisma.addItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddItemDeleteManyArgs>(args?: SelectSubset<T, AddItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AddItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AddItems
     * const addItem = await prisma.addItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddItemUpdateManyArgs>(args: SelectSubset<T, AddItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AddItem.
     * @param {AddItemUpsertArgs} args - Arguments to update or create a AddItem.
     * @example
     * // Update or create a AddItem
     * const addItem = await prisma.addItem.upsert({
     *   create: {
     *     // ... data to create a AddItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AddItem we want to update
     *   }
     * })
     */
    upsert<T extends AddItemUpsertArgs>(args: SelectSubset<T, AddItemUpsertArgs<ExtArgs>>): Prisma__AddItemClient<$Result.GetResult<Prisma.$AddItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AddItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddItemCountArgs} args - Arguments to filter AddItems to count.
     * @example
     * // Count the number of AddItems
     * const count = await prisma.addItem.count({
     *   where: {
     *     // ... the filter for the AddItems we want to count
     *   }
     * })
    **/
    count<T extends AddItemCountArgs>(
      args?: Subset<T, AddItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AddItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddItemAggregateArgs>(args: Subset<T, AddItemAggregateArgs>): Prisma.PrismaPromise<GetAddItemAggregateType<T>>

    /**
     * Group by AddItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddItemGroupByArgs['orderBy'] }
        : { orderBy?: AddItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AddItem model
   */
  readonly fields: AddItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AddItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AddItem model
   */
  interface AddItemFieldRefs {
    readonly id: FieldRef<"AddItem", 'Int'>
    readonly name: FieldRef<"AddItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AddItem findUnique
   */
  export type AddItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddItem
     */
    select?: AddItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddItem
     */
    omit?: AddItemOmit<ExtArgs> | null
    /**
     * Filter, which AddItem to fetch.
     */
    where: AddItemWhereUniqueInput
  }

  /**
   * AddItem findUniqueOrThrow
   */
  export type AddItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddItem
     */
    select?: AddItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddItem
     */
    omit?: AddItemOmit<ExtArgs> | null
    /**
     * Filter, which AddItem to fetch.
     */
    where: AddItemWhereUniqueInput
  }

  /**
   * AddItem findFirst
   */
  export type AddItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddItem
     */
    select?: AddItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddItem
     */
    omit?: AddItemOmit<ExtArgs> | null
    /**
     * Filter, which AddItem to fetch.
     */
    where?: AddItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddItems to fetch.
     */
    orderBy?: AddItemOrderByWithRelationInput | AddItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddItems.
     */
    cursor?: AddItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddItems.
     */
    distinct?: AddItemScalarFieldEnum | AddItemScalarFieldEnum[]
  }

  /**
   * AddItem findFirstOrThrow
   */
  export type AddItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddItem
     */
    select?: AddItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddItem
     */
    omit?: AddItemOmit<ExtArgs> | null
    /**
     * Filter, which AddItem to fetch.
     */
    where?: AddItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddItems to fetch.
     */
    orderBy?: AddItemOrderByWithRelationInput | AddItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddItems.
     */
    cursor?: AddItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddItems.
     */
    distinct?: AddItemScalarFieldEnum | AddItemScalarFieldEnum[]
  }

  /**
   * AddItem findMany
   */
  export type AddItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddItem
     */
    select?: AddItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddItem
     */
    omit?: AddItemOmit<ExtArgs> | null
    /**
     * Filter, which AddItems to fetch.
     */
    where?: AddItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddItems to fetch.
     */
    orderBy?: AddItemOrderByWithRelationInput | AddItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AddItems.
     */
    cursor?: AddItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddItems.
     */
    skip?: number
    distinct?: AddItemScalarFieldEnum | AddItemScalarFieldEnum[]
  }

  /**
   * AddItem create
   */
  export type AddItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddItem
     */
    select?: AddItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddItem
     */
    omit?: AddItemOmit<ExtArgs> | null
    /**
     * The data needed to create a AddItem.
     */
    data: XOR<AddItemCreateInput, AddItemUncheckedCreateInput>
  }

  /**
   * AddItem createMany
   */
  export type AddItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AddItems.
     */
    data: AddItemCreateManyInput | AddItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AddItem update
   */
  export type AddItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddItem
     */
    select?: AddItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddItem
     */
    omit?: AddItemOmit<ExtArgs> | null
    /**
     * The data needed to update a AddItem.
     */
    data: XOR<AddItemUpdateInput, AddItemUncheckedUpdateInput>
    /**
     * Choose, which AddItem to update.
     */
    where: AddItemWhereUniqueInput
  }

  /**
   * AddItem updateMany
   */
  export type AddItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AddItems.
     */
    data: XOR<AddItemUpdateManyMutationInput, AddItemUncheckedUpdateManyInput>
    /**
     * Filter which AddItems to update
     */
    where?: AddItemWhereInput
    /**
     * Limit how many AddItems to update.
     */
    limit?: number
  }

  /**
   * AddItem upsert
   */
  export type AddItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddItem
     */
    select?: AddItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddItem
     */
    omit?: AddItemOmit<ExtArgs> | null
    /**
     * The filter to search for the AddItem to update in case it exists.
     */
    where: AddItemWhereUniqueInput
    /**
     * In case the AddItem found by the `where` argument doesn't exist, create a new AddItem with this data.
     */
    create: XOR<AddItemCreateInput, AddItemUncheckedCreateInput>
    /**
     * In case the AddItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddItemUpdateInput, AddItemUncheckedUpdateInput>
  }

  /**
   * AddItem delete
   */
  export type AddItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddItem
     */
    select?: AddItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddItem
     */
    omit?: AddItemOmit<ExtArgs> | null
    /**
     * Filter which AddItem to delete.
     */
    where: AddItemWhereUniqueInput
  }

  /**
   * AddItem deleteMany
   */
  export type AddItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddItems to delete
     */
    where?: AddItemWhereInput
    /**
     * Limit how many AddItems to delete.
     */
    limit?: number
  }

  /**
   * AddItem without action
   */
  export type AddItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddItem
     */
    select?: AddItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddItem
     */
    omit?: AddItemOmit<ExtArgs> | null
  }


  /**
   * Model AddPurchaseStock
   */

  export type AggregateAddPurchaseStock = {
    _count: AddPurchaseStockCountAggregateOutputType | null
    _avg: AddPurchaseStockAvgAggregateOutputType | null
    _sum: AddPurchaseStockSumAggregateOutputType | null
    _min: AddPurchaseStockMinAggregateOutputType | null
    _max: AddPurchaseStockMaxAggregateOutputType | null
  }

  export type AddPurchaseStockAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    purchasePrice: number | null
  }

  export type AddPurchaseStockSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    purchasePrice: number | null
  }

  export type AddPurchaseStockMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    item: string | null
    quantity: number | null
    purchasePrice: number | null
    phoneNumber: string | null
  }

  export type AddPurchaseStockMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    item: string | null
    quantity: number | null
    purchasePrice: number | null
    phoneNumber: string | null
  }

  export type AddPurchaseStockCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    item: number
    quantity: number
    purchasePrice: number
    phoneNumber: number
    _all: number
  }


  export type AddPurchaseStockAvgAggregateInputType = {
    id?: true
    quantity?: true
    purchasePrice?: true
  }

  export type AddPurchaseStockSumAggregateInputType = {
    id?: true
    quantity?: true
    purchasePrice?: true
  }

  export type AddPurchaseStockMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    item?: true
    quantity?: true
    purchasePrice?: true
    phoneNumber?: true
  }

  export type AddPurchaseStockMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    item?: true
    quantity?: true
    purchasePrice?: true
    phoneNumber?: true
  }

  export type AddPurchaseStockCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    item?: true
    quantity?: true
    purchasePrice?: true
    phoneNumber?: true
    _all?: true
  }

  export type AddPurchaseStockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddPurchaseStock to aggregate.
     */
    where?: AddPurchaseStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddPurchaseStocks to fetch.
     */
    orderBy?: AddPurchaseStockOrderByWithRelationInput | AddPurchaseStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddPurchaseStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddPurchaseStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddPurchaseStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AddPurchaseStocks
    **/
    _count?: true | AddPurchaseStockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddPurchaseStockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddPurchaseStockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddPurchaseStockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddPurchaseStockMaxAggregateInputType
  }

  export type GetAddPurchaseStockAggregateType<T extends AddPurchaseStockAggregateArgs> = {
        [P in keyof T & keyof AggregateAddPurchaseStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddPurchaseStock[P]>
      : GetScalarType<T[P], AggregateAddPurchaseStock[P]>
  }




  export type AddPurchaseStockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddPurchaseStockWhereInput
    orderBy?: AddPurchaseStockOrderByWithAggregationInput | AddPurchaseStockOrderByWithAggregationInput[]
    by: AddPurchaseStockScalarFieldEnum[] | AddPurchaseStockScalarFieldEnum
    having?: AddPurchaseStockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddPurchaseStockCountAggregateInputType | true
    _avg?: AddPurchaseStockAvgAggregateInputType
    _sum?: AddPurchaseStockSumAggregateInputType
    _min?: AddPurchaseStockMinAggregateInputType
    _max?: AddPurchaseStockMaxAggregateInputType
  }

  export type AddPurchaseStockGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    item: string
    quantity: number
    purchasePrice: number
    phoneNumber: string
    _count: AddPurchaseStockCountAggregateOutputType | null
    _avg: AddPurchaseStockAvgAggregateOutputType | null
    _sum: AddPurchaseStockSumAggregateOutputType | null
    _min: AddPurchaseStockMinAggregateOutputType | null
    _max: AddPurchaseStockMaxAggregateOutputType | null
  }

  type GetAddPurchaseStockGroupByPayload<T extends AddPurchaseStockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddPurchaseStockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddPurchaseStockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddPurchaseStockGroupByOutputType[P]>
            : GetScalarType<T[P], AddPurchaseStockGroupByOutputType[P]>
        }
      >
    >


  export type AddPurchaseStockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    item?: boolean
    quantity?: boolean
    purchasePrice?: boolean
    phoneNumber?: boolean
  }, ExtArgs["result"]["addPurchaseStock"]>



  export type AddPurchaseStockSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    item?: boolean
    quantity?: boolean
    purchasePrice?: boolean
    phoneNumber?: boolean
  }

  export type AddPurchaseStockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "item" | "quantity" | "purchasePrice" | "phoneNumber", ExtArgs["result"]["addPurchaseStock"]>

  export type $AddPurchaseStockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AddPurchaseStock"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      item: string
      quantity: number
      purchasePrice: number
      phoneNumber: string
    }, ExtArgs["result"]["addPurchaseStock"]>
    composites: {}
  }

  type AddPurchaseStockGetPayload<S extends boolean | null | undefined | AddPurchaseStockDefaultArgs> = $Result.GetResult<Prisma.$AddPurchaseStockPayload, S>

  type AddPurchaseStockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddPurchaseStockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddPurchaseStockCountAggregateInputType | true
    }

  export interface AddPurchaseStockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AddPurchaseStock'], meta: { name: 'AddPurchaseStock' } }
    /**
     * Find zero or one AddPurchaseStock that matches the filter.
     * @param {AddPurchaseStockFindUniqueArgs} args - Arguments to find a AddPurchaseStock
     * @example
     * // Get one AddPurchaseStock
     * const addPurchaseStock = await prisma.addPurchaseStock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddPurchaseStockFindUniqueArgs>(args: SelectSubset<T, AddPurchaseStockFindUniqueArgs<ExtArgs>>): Prisma__AddPurchaseStockClient<$Result.GetResult<Prisma.$AddPurchaseStockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AddPurchaseStock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddPurchaseStockFindUniqueOrThrowArgs} args - Arguments to find a AddPurchaseStock
     * @example
     * // Get one AddPurchaseStock
     * const addPurchaseStock = await prisma.addPurchaseStock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddPurchaseStockFindUniqueOrThrowArgs>(args: SelectSubset<T, AddPurchaseStockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddPurchaseStockClient<$Result.GetResult<Prisma.$AddPurchaseStockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddPurchaseStock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddPurchaseStockFindFirstArgs} args - Arguments to find a AddPurchaseStock
     * @example
     * // Get one AddPurchaseStock
     * const addPurchaseStock = await prisma.addPurchaseStock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddPurchaseStockFindFirstArgs>(args?: SelectSubset<T, AddPurchaseStockFindFirstArgs<ExtArgs>>): Prisma__AddPurchaseStockClient<$Result.GetResult<Prisma.$AddPurchaseStockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddPurchaseStock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddPurchaseStockFindFirstOrThrowArgs} args - Arguments to find a AddPurchaseStock
     * @example
     * // Get one AddPurchaseStock
     * const addPurchaseStock = await prisma.addPurchaseStock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddPurchaseStockFindFirstOrThrowArgs>(args?: SelectSubset<T, AddPurchaseStockFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddPurchaseStockClient<$Result.GetResult<Prisma.$AddPurchaseStockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AddPurchaseStocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddPurchaseStockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AddPurchaseStocks
     * const addPurchaseStocks = await prisma.addPurchaseStock.findMany()
     * 
     * // Get first 10 AddPurchaseStocks
     * const addPurchaseStocks = await prisma.addPurchaseStock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addPurchaseStockWithIdOnly = await prisma.addPurchaseStock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddPurchaseStockFindManyArgs>(args?: SelectSubset<T, AddPurchaseStockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddPurchaseStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AddPurchaseStock.
     * @param {AddPurchaseStockCreateArgs} args - Arguments to create a AddPurchaseStock.
     * @example
     * // Create one AddPurchaseStock
     * const AddPurchaseStock = await prisma.addPurchaseStock.create({
     *   data: {
     *     // ... data to create a AddPurchaseStock
     *   }
     * })
     * 
     */
    create<T extends AddPurchaseStockCreateArgs>(args: SelectSubset<T, AddPurchaseStockCreateArgs<ExtArgs>>): Prisma__AddPurchaseStockClient<$Result.GetResult<Prisma.$AddPurchaseStockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AddPurchaseStocks.
     * @param {AddPurchaseStockCreateManyArgs} args - Arguments to create many AddPurchaseStocks.
     * @example
     * // Create many AddPurchaseStocks
     * const addPurchaseStock = await prisma.addPurchaseStock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddPurchaseStockCreateManyArgs>(args?: SelectSubset<T, AddPurchaseStockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AddPurchaseStock.
     * @param {AddPurchaseStockDeleteArgs} args - Arguments to delete one AddPurchaseStock.
     * @example
     * // Delete one AddPurchaseStock
     * const AddPurchaseStock = await prisma.addPurchaseStock.delete({
     *   where: {
     *     // ... filter to delete one AddPurchaseStock
     *   }
     * })
     * 
     */
    delete<T extends AddPurchaseStockDeleteArgs>(args: SelectSubset<T, AddPurchaseStockDeleteArgs<ExtArgs>>): Prisma__AddPurchaseStockClient<$Result.GetResult<Prisma.$AddPurchaseStockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AddPurchaseStock.
     * @param {AddPurchaseStockUpdateArgs} args - Arguments to update one AddPurchaseStock.
     * @example
     * // Update one AddPurchaseStock
     * const addPurchaseStock = await prisma.addPurchaseStock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddPurchaseStockUpdateArgs>(args: SelectSubset<T, AddPurchaseStockUpdateArgs<ExtArgs>>): Prisma__AddPurchaseStockClient<$Result.GetResult<Prisma.$AddPurchaseStockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AddPurchaseStocks.
     * @param {AddPurchaseStockDeleteManyArgs} args - Arguments to filter AddPurchaseStocks to delete.
     * @example
     * // Delete a few AddPurchaseStocks
     * const { count } = await prisma.addPurchaseStock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddPurchaseStockDeleteManyArgs>(args?: SelectSubset<T, AddPurchaseStockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AddPurchaseStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddPurchaseStockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AddPurchaseStocks
     * const addPurchaseStock = await prisma.addPurchaseStock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddPurchaseStockUpdateManyArgs>(args: SelectSubset<T, AddPurchaseStockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AddPurchaseStock.
     * @param {AddPurchaseStockUpsertArgs} args - Arguments to update or create a AddPurchaseStock.
     * @example
     * // Update or create a AddPurchaseStock
     * const addPurchaseStock = await prisma.addPurchaseStock.upsert({
     *   create: {
     *     // ... data to create a AddPurchaseStock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AddPurchaseStock we want to update
     *   }
     * })
     */
    upsert<T extends AddPurchaseStockUpsertArgs>(args: SelectSubset<T, AddPurchaseStockUpsertArgs<ExtArgs>>): Prisma__AddPurchaseStockClient<$Result.GetResult<Prisma.$AddPurchaseStockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AddPurchaseStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddPurchaseStockCountArgs} args - Arguments to filter AddPurchaseStocks to count.
     * @example
     * // Count the number of AddPurchaseStocks
     * const count = await prisma.addPurchaseStock.count({
     *   where: {
     *     // ... the filter for the AddPurchaseStocks we want to count
     *   }
     * })
    **/
    count<T extends AddPurchaseStockCountArgs>(
      args?: Subset<T, AddPurchaseStockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddPurchaseStockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AddPurchaseStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddPurchaseStockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddPurchaseStockAggregateArgs>(args: Subset<T, AddPurchaseStockAggregateArgs>): Prisma.PrismaPromise<GetAddPurchaseStockAggregateType<T>>

    /**
     * Group by AddPurchaseStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddPurchaseStockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddPurchaseStockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddPurchaseStockGroupByArgs['orderBy'] }
        : { orderBy?: AddPurchaseStockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddPurchaseStockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddPurchaseStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AddPurchaseStock model
   */
  readonly fields: AddPurchaseStockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AddPurchaseStock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddPurchaseStockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AddPurchaseStock model
   */
  interface AddPurchaseStockFieldRefs {
    readonly id: FieldRef<"AddPurchaseStock", 'Int'>
    readonly name: FieldRef<"AddPurchaseStock", 'String'>
    readonly createdAt: FieldRef<"AddPurchaseStock", 'DateTime'>
    readonly item: FieldRef<"AddPurchaseStock", 'String'>
    readonly quantity: FieldRef<"AddPurchaseStock", 'Int'>
    readonly purchasePrice: FieldRef<"AddPurchaseStock", 'Int'>
    readonly phoneNumber: FieldRef<"AddPurchaseStock", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AddPurchaseStock findUnique
   */
  export type AddPurchaseStockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddPurchaseStock
     */
    select?: AddPurchaseStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddPurchaseStock
     */
    omit?: AddPurchaseStockOmit<ExtArgs> | null
    /**
     * Filter, which AddPurchaseStock to fetch.
     */
    where: AddPurchaseStockWhereUniqueInput
  }

  /**
   * AddPurchaseStock findUniqueOrThrow
   */
  export type AddPurchaseStockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddPurchaseStock
     */
    select?: AddPurchaseStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddPurchaseStock
     */
    omit?: AddPurchaseStockOmit<ExtArgs> | null
    /**
     * Filter, which AddPurchaseStock to fetch.
     */
    where: AddPurchaseStockWhereUniqueInput
  }

  /**
   * AddPurchaseStock findFirst
   */
  export type AddPurchaseStockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddPurchaseStock
     */
    select?: AddPurchaseStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddPurchaseStock
     */
    omit?: AddPurchaseStockOmit<ExtArgs> | null
    /**
     * Filter, which AddPurchaseStock to fetch.
     */
    where?: AddPurchaseStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddPurchaseStocks to fetch.
     */
    orderBy?: AddPurchaseStockOrderByWithRelationInput | AddPurchaseStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddPurchaseStocks.
     */
    cursor?: AddPurchaseStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddPurchaseStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddPurchaseStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddPurchaseStocks.
     */
    distinct?: AddPurchaseStockScalarFieldEnum | AddPurchaseStockScalarFieldEnum[]
  }

  /**
   * AddPurchaseStock findFirstOrThrow
   */
  export type AddPurchaseStockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddPurchaseStock
     */
    select?: AddPurchaseStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddPurchaseStock
     */
    omit?: AddPurchaseStockOmit<ExtArgs> | null
    /**
     * Filter, which AddPurchaseStock to fetch.
     */
    where?: AddPurchaseStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddPurchaseStocks to fetch.
     */
    orderBy?: AddPurchaseStockOrderByWithRelationInput | AddPurchaseStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddPurchaseStocks.
     */
    cursor?: AddPurchaseStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddPurchaseStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddPurchaseStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddPurchaseStocks.
     */
    distinct?: AddPurchaseStockScalarFieldEnum | AddPurchaseStockScalarFieldEnum[]
  }

  /**
   * AddPurchaseStock findMany
   */
  export type AddPurchaseStockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddPurchaseStock
     */
    select?: AddPurchaseStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddPurchaseStock
     */
    omit?: AddPurchaseStockOmit<ExtArgs> | null
    /**
     * Filter, which AddPurchaseStocks to fetch.
     */
    where?: AddPurchaseStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddPurchaseStocks to fetch.
     */
    orderBy?: AddPurchaseStockOrderByWithRelationInput | AddPurchaseStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AddPurchaseStocks.
     */
    cursor?: AddPurchaseStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddPurchaseStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddPurchaseStocks.
     */
    skip?: number
    distinct?: AddPurchaseStockScalarFieldEnum | AddPurchaseStockScalarFieldEnum[]
  }

  /**
   * AddPurchaseStock create
   */
  export type AddPurchaseStockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddPurchaseStock
     */
    select?: AddPurchaseStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddPurchaseStock
     */
    omit?: AddPurchaseStockOmit<ExtArgs> | null
    /**
     * The data needed to create a AddPurchaseStock.
     */
    data: XOR<AddPurchaseStockCreateInput, AddPurchaseStockUncheckedCreateInput>
  }

  /**
   * AddPurchaseStock createMany
   */
  export type AddPurchaseStockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AddPurchaseStocks.
     */
    data: AddPurchaseStockCreateManyInput | AddPurchaseStockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AddPurchaseStock update
   */
  export type AddPurchaseStockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddPurchaseStock
     */
    select?: AddPurchaseStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddPurchaseStock
     */
    omit?: AddPurchaseStockOmit<ExtArgs> | null
    /**
     * The data needed to update a AddPurchaseStock.
     */
    data: XOR<AddPurchaseStockUpdateInput, AddPurchaseStockUncheckedUpdateInput>
    /**
     * Choose, which AddPurchaseStock to update.
     */
    where: AddPurchaseStockWhereUniqueInput
  }

  /**
   * AddPurchaseStock updateMany
   */
  export type AddPurchaseStockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AddPurchaseStocks.
     */
    data: XOR<AddPurchaseStockUpdateManyMutationInput, AddPurchaseStockUncheckedUpdateManyInput>
    /**
     * Filter which AddPurchaseStocks to update
     */
    where?: AddPurchaseStockWhereInput
    /**
     * Limit how many AddPurchaseStocks to update.
     */
    limit?: number
  }

  /**
   * AddPurchaseStock upsert
   */
  export type AddPurchaseStockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddPurchaseStock
     */
    select?: AddPurchaseStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddPurchaseStock
     */
    omit?: AddPurchaseStockOmit<ExtArgs> | null
    /**
     * The filter to search for the AddPurchaseStock to update in case it exists.
     */
    where: AddPurchaseStockWhereUniqueInput
    /**
     * In case the AddPurchaseStock found by the `where` argument doesn't exist, create a new AddPurchaseStock with this data.
     */
    create: XOR<AddPurchaseStockCreateInput, AddPurchaseStockUncheckedCreateInput>
    /**
     * In case the AddPurchaseStock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddPurchaseStockUpdateInput, AddPurchaseStockUncheckedUpdateInput>
  }

  /**
   * AddPurchaseStock delete
   */
  export type AddPurchaseStockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddPurchaseStock
     */
    select?: AddPurchaseStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddPurchaseStock
     */
    omit?: AddPurchaseStockOmit<ExtArgs> | null
    /**
     * Filter which AddPurchaseStock to delete.
     */
    where: AddPurchaseStockWhereUniqueInput
  }

  /**
   * AddPurchaseStock deleteMany
   */
  export type AddPurchaseStockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddPurchaseStocks to delete
     */
    where?: AddPurchaseStockWhereInput
    /**
     * Limit how many AddPurchaseStocks to delete.
     */
    limit?: number
  }

  /**
   * AddPurchaseStock without action
   */
  export type AddPurchaseStockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddPurchaseStock
     */
    select?: AddPurchaseStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddPurchaseStock
     */
    omit?: AddPurchaseStockOmit<ExtArgs> | null
  }


  /**
   * Model Casting
   */

  export type AggregateCasting = {
    _count: CastingCountAggregateOutputType | null
    _avg: CastingAvgAggregateOutputType | null
    _sum: CastingSumAggregateOutputType | null
    _min: CastingMinAggregateOutputType | null
    _max: CastingMaxAggregateOutputType | null
  }

  export type CastingAvgAggregateOutputType = {
    id: number | null
    givenGold: number | null
    givenTouch: number | null
    purity: number | null
    finalTouch: number | null
    pureValue: number | null
    finalWeight: number | null
    copper: number | null
    castingId: number | null
  }

  export type CastingSumAggregateOutputType = {
    id: number | null
    givenGold: number | null
    givenTouch: number | null
    purity: number | null
    finalTouch: number | null
    pureValue: number | null
    finalWeight: number | null
    copper: number | null
    castingId: number | null
  }

  export type CastingMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    givenGold: number | null
    givenTouch: number | null
    purity: number | null
    finalTouch: number | null
    pureValue: number | null
    finalWeight: number | null
    copper: number | null
    castingId: number | null
  }

  export type CastingMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    givenGold: number | null
    givenTouch: number | null
    purity: number | null
    finalTouch: number | null
    pureValue: number | null
    finalWeight: number | null
    copper: number | null
    castingId: number | null
  }

  export type CastingCountAggregateOutputType = {
    id: number
    createdAt: number
    name: number
    givenGold: number
    givenTouch: number
    purity: number
    finalTouch: number
    pureValue: number
    finalWeight: number
    copper: number
    castingId: number
    _all: number
  }


  export type CastingAvgAggregateInputType = {
    id?: true
    givenGold?: true
    givenTouch?: true
    purity?: true
    finalTouch?: true
    pureValue?: true
    finalWeight?: true
    copper?: true
    castingId?: true
  }

  export type CastingSumAggregateInputType = {
    id?: true
    givenGold?: true
    givenTouch?: true
    purity?: true
    finalTouch?: true
    pureValue?: true
    finalWeight?: true
    copper?: true
    castingId?: true
  }

  export type CastingMinAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    givenGold?: true
    givenTouch?: true
    purity?: true
    finalTouch?: true
    pureValue?: true
    finalWeight?: true
    copper?: true
    castingId?: true
  }

  export type CastingMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    givenGold?: true
    givenTouch?: true
    purity?: true
    finalTouch?: true
    pureValue?: true
    finalWeight?: true
    copper?: true
    castingId?: true
  }

  export type CastingCountAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    givenGold?: true
    givenTouch?: true
    purity?: true
    finalTouch?: true
    pureValue?: true
    finalWeight?: true
    copper?: true
    castingId?: true
    _all?: true
  }

  export type CastingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Casting to aggregate.
     */
    where?: CastingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Castings to fetch.
     */
    orderBy?: CastingOrderByWithRelationInput | CastingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CastingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Castings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Castings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Castings
    **/
    _count?: true | CastingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CastingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CastingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CastingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CastingMaxAggregateInputType
  }

  export type GetCastingAggregateType<T extends CastingAggregateArgs> = {
        [P in keyof T & keyof AggregateCasting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCasting[P]>
      : GetScalarType<T[P], AggregateCasting[P]>
  }




  export type CastingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CastingWhereInput
    orderBy?: CastingOrderByWithAggregationInput | CastingOrderByWithAggregationInput[]
    by: CastingScalarFieldEnum[] | CastingScalarFieldEnum
    having?: CastingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CastingCountAggregateInputType | true
    _avg?: CastingAvgAggregateInputType
    _sum?: CastingSumAggregateInputType
    _min?: CastingMinAggregateInputType
    _max?: CastingMaxAggregateInputType
  }

  export type CastingGroupByOutputType = {
    id: number
    createdAt: Date
    name: string
    givenGold: number
    givenTouch: number
    purity: number
    finalTouch: number
    pureValue: number
    finalWeight: number
    copper: number
    castingId: number
    _count: CastingCountAggregateOutputType | null
    _avg: CastingAvgAggregateOutputType | null
    _sum: CastingSumAggregateOutputType | null
    _min: CastingMinAggregateOutputType | null
    _max: CastingMaxAggregateOutputType | null
  }

  type GetCastingGroupByPayload<T extends CastingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CastingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CastingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CastingGroupByOutputType[P]>
            : GetScalarType<T[P], CastingGroupByOutputType[P]>
        }
      >
    >


  export type CastingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    givenGold?: boolean
    givenTouch?: boolean
    purity?: boolean
    finalTouch?: boolean
    pureValue?: boolean
    finalWeight?: boolean
    copper?: boolean
    castingId?: boolean
    addcasting?: boolean | AddCastingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["casting"]>



  export type CastingSelectScalar = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
    givenGold?: boolean
    givenTouch?: boolean
    purity?: boolean
    finalTouch?: boolean
    pureValue?: boolean
    finalWeight?: boolean
    copper?: boolean
    castingId?: boolean
  }

  export type CastingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "name" | "givenGold" | "givenTouch" | "purity" | "finalTouch" | "pureValue" | "finalWeight" | "copper" | "castingId", ExtArgs["result"]["casting"]>
  export type CastingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addcasting?: boolean | AddCastingDefaultArgs<ExtArgs>
  }

  export type $CastingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Casting"
    objects: {
      addcasting: Prisma.$AddCastingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      name: string
      givenGold: number
      givenTouch: number
      purity: number
      finalTouch: number
      pureValue: number
      finalWeight: number
      copper: number
      castingId: number
    }, ExtArgs["result"]["casting"]>
    composites: {}
  }

  type CastingGetPayload<S extends boolean | null | undefined | CastingDefaultArgs> = $Result.GetResult<Prisma.$CastingPayload, S>

  type CastingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CastingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CastingCountAggregateInputType | true
    }

  export interface CastingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Casting'], meta: { name: 'Casting' } }
    /**
     * Find zero or one Casting that matches the filter.
     * @param {CastingFindUniqueArgs} args - Arguments to find a Casting
     * @example
     * // Get one Casting
     * const casting = await prisma.casting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CastingFindUniqueArgs>(args: SelectSubset<T, CastingFindUniqueArgs<ExtArgs>>): Prisma__CastingClient<$Result.GetResult<Prisma.$CastingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Casting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CastingFindUniqueOrThrowArgs} args - Arguments to find a Casting
     * @example
     * // Get one Casting
     * const casting = await prisma.casting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CastingFindUniqueOrThrowArgs>(args: SelectSubset<T, CastingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CastingClient<$Result.GetResult<Prisma.$CastingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Casting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastingFindFirstArgs} args - Arguments to find a Casting
     * @example
     * // Get one Casting
     * const casting = await prisma.casting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CastingFindFirstArgs>(args?: SelectSubset<T, CastingFindFirstArgs<ExtArgs>>): Prisma__CastingClient<$Result.GetResult<Prisma.$CastingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Casting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastingFindFirstOrThrowArgs} args - Arguments to find a Casting
     * @example
     * // Get one Casting
     * const casting = await prisma.casting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CastingFindFirstOrThrowArgs>(args?: SelectSubset<T, CastingFindFirstOrThrowArgs<ExtArgs>>): Prisma__CastingClient<$Result.GetResult<Prisma.$CastingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Castings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Castings
     * const castings = await prisma.casting.findMany()
     * 
     * // Get first 10 Castings
     * const castings = await prisma.casting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const castingWithIdOnly = await prisma.casting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CastingFindManyArgs>(args?: SelectSubset<T, CastingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CastingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Casting.
     * @param {CastingCreateArgs} args - Arguments to create a Casting.
     * @example
     * // Create one Casting
     * const Casting = await prisma.casting.create({
     *   data: {
     *     // ... data to create a Casting
     *   }
     * })
     * 
     */
    create<T extends CastingCreateArgs>(args: SelectSubset<T, CastingCreateArgs<ExtArgs>>): Prisma__CastingClient<$Result.GetResult<Prisma.$CastingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Castings.
     * @param {CastingCreateManyArgs} args - Arguments to create many Castings.
     * @example
     * // Create many Castings
     * const casting = await prisma.casting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CastingCreateManyArgs>(args?: SelectSubset<T, CastingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Casting.
     * @param {CastingDeleteArgs} args - Arguments to delete one Casting.
     * @example
     * // Delete one Casting
     * const Casting = await prisma.casting.delete({
     *   where: {
     *     // ... filter to delete one Casting
     *   }
     * })
     * 
     */
    delete<T extends CastingDeleteArgs>(args: SelectSubset<T, CastingDeleteArgs<ExtArgs>>): Prisma__CastingClient<$Result.GetResult<Prisma.$CastingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Casting.
     * @param {CastingUpdateArgs} args - Arguments to update one Casting.
     * @example
     * // Update one Casting
     * const casting = await prisma.casting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CastingUpdateArgs>(args: SelectSubset<T, CastingUpdateArgs<ExtArgs>>): Prisma__CastingClient<$Result.GetResult<Prisma.$CastingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Castings.
     * @param {CastingDeleteManyArgs} args - Arguments to filter Castings to delete.
     * @example
     * // Delete a few Castings
     * const { count } = await prisma.casting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CastingDeleteManyArgs>(args?: SelectSubset<T, CastingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Castings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Castings
     * const casting = await prisma.casting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CastingUpdateManyArgs>(args: SelectSubset<T, CastingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Casting.
     * @param {CastingUpsertArgs} args - Arguments to update or create a Casting.
     * @example
     * // Update or create a Casting
     * const casting = await prisma.casting.upsert({
     *   create: {
     *     // ... data to create a Casting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Casting we want to update
     *   }
     * })
     */
    upsert<T extends CastingUpsertArgs>(args: SelectSubset<T, CastingUpsertArgs<ExtArgs>>): Prisma__CastingClient<$Result.GetResult<Prisma.$CastingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Castings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastingCountArgs} args - Arguments to filter Castings to count.
     * @example
     * // Count the number of Castings
     * const count = await prisma.casting.count({
     *   where: {
     *     // ... the filter for the Castings we want to count
     *   }
     * })
    **/
    count<T extends CastingCountArgs>(
      args?: Subset<T, CastingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CastingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Casting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CastingAggregateArgs>(args: Subset<T, CastingAggregateArgs>): Prisma.PrismaPromise<GetCastingAggregateType<T>>

    /**
     * Group by Casting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CastingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CastingGroupByArgs['orderBy'] }
        : { orderBy?: CastingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CastingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCastingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Casting model
   */
  readonly fields: CastingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Casting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CastingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    addcasting<T extends AddCastingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddCastingDefaultArgs<ExtArgs>>): Prisma__AddCastingClient<$Result.GetResult<Prisma.$AddCastingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Casting model
   */
  interface CastingFieldRefs {
    readonly id: FieldRef<"Casting", 'Int'>
    readonly createdAt: FieldRef<"Casting", 'DateTime'>
    readonly name: FieldRef<"Casting", 'String'>
    readonly givenGold: FieldRef<"Casting", 'Float'>
    readonly givenTouch: FieldRef<"Casting", 'Float'>
    readonly purity: FieldRef<"Casting", 'Float'>
    readonly finalTouch: FieldRef<"Casting", 'Float'>
    readonly pureValue: FieldRef<"Casting", 'Float'>
    readonly finalWeight: FieldRef<"Casting", 'Float'>
    readonly copper: FieldRef<"Casting", 'Float'>
    readonly castingId: FieldRef<"Casting", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Casting findUnique
   */
  export type CastingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casting
     */
    select?: CastingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casting
     */
    omit?: CastingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingInclude<ExtArgs> | null
    /**
     * Filter, which Casting to fetch.
     */
    where: CastingWhereUniqueInput
  }

  /**
   * Casting findUniqueOrThrow
   */
  export type CastingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casting
     */
    select?: CastingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casting
     */
    omit?: CastingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingInclude<ExtArgs> | null
    /**
     * Filter, which Casting to fetch.
     */
    where: CastingWhereUniqueInput
  }

  /**
   * Casting findFirst
   */
  export type CastingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casting
     */
    select?: CastingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casting
     */
    omit?: CastingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingInclude<ExtArgs> | null
    /**
     * Filter, which Casting to fetch.
     */
    where?: CastingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Castings to fetch.
     */
    orderBy?: CastingOrderByWithRelationInput | CastingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Castings.
     */
    cursor?: CastingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Castings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Castings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Castings.
     */
    distinct?: CastingScalarFieldEnum | CastingScalarFieldEnum[]
  }

  /**
   * Casting findFirstOrThrow
   */
  export type CastingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casting
     */
    select?: CastingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casting
     */
    omit?: CastingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingInclude<ExtArgs> | null
    /**
     * Filter, which Casting to fetch.
     */
    where?: CastingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Castings to fetch.
     */
    orderBy?: CastingOrderByWithRelationInput | CastingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Castings.
     */
    cursor?: CastingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Castings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Castings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Castings.
     */
    distinct?: CastingScalarFieldEnum | CastingScalarFieldEnum[]
  }

  /**
   * Casting findMany
   */
  export type CastingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casting
     */
    select?: CastingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casting
     */
    omit?: CastingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingInclude<ExtArgs> | null
    /**
     * Filter, which Castings to fetch.
     */
    where?: CastingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Castings to fetch.
     */
    orderBy?: CastingOrderByWithRelationInput | CastingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Castings.
     */
    cursor?: CastingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Castings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Castings.
     */
    skip?: number
    distinct?: CastingScalarFieldEnum | CastingScalarFieldEnum[]
  }

  /**
   * Casting create
   */
  export type CastingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casting
     */
    select?: CastingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casting
     */
    omit?: CastingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingInclude<ExtArgs> | null
    /**
     * The data needed to create a Casting.
     */
    data: XOR<CastingCreateInput, CastingUncheckedCreateInput>
  }

  /**
   * Casting createMany
   */
  export type CastingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Castings.
     */
    data: CastingCreateManyInput | CastingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Casting update
   */
  export type CastingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casting
     */
    select?: CastingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casting
     */
    omit?: CastingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingInclude<ExtArgs> | null
    /**
     * The data needed to update a Casting.
     */
    data: XOR<CastingUpdateInput, CastingUncheckedUpdateInput>
    /**
     * Choose, which Casting to update.
     */
    where: CastingWhereUniqueInput
  }

  /**
   * Casting updateMany
   */
  export type CastingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Castings.
     */
    data: XOR<CastingUpdateManyMutationInput, CastingUncheckedUpdateManyInput>
    /**
     * Filter which Castings to update
     */
    where?: CastingWhereInput
    /**
     * Limit how many Castings to update.
     */
    limit?: number
  }

  /**
   * Casting upsert
   */
  export type CastingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casting
     */
    select?: CastingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casting
     */
    omit?: CastingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingInclude<ExtArgs> | null
    /**
     * The filter to search for the Casting to update in case it exists.
     */
    where: CastingWhereUniqueInput
    /**
     * In case the Casting found by the `where` argument doesn't exist, create a new Casting with this data.
     */
    create: XOR<CastingCreateInput, CastingUncheckedCreateInput>
    /**
     * In case the Casting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CastingUpdateInput, CastingUncheckedUpdateInput>
  }

  /**
   * Casting delete
   */
  export type CastingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casting
     */
    select?: CastingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casting
     */
    omit?: CastingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingInclude<ExtArgs> | null
    /**
     * Filter which Casting to delete.
     */
    where: CastingWhereUniqueInput
  }

  /**
   * Casting deleteMany
   */
  export type CastingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Castings to delete
     */
    where?: CastingWhereInput
    /**
     * Limit how many Castings to delete.
     */
    limit?: number
  }

  /**
   * Casting without action
   */
  export type CastingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casting
     */
    select?: CastingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casting
     */
    omit?: CastingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AddCustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phoneNumber: 'phoneNumber',
    address: 'address',
    email: 'email'
  };

  export type AddCustomerScalarFieldEnum = (typeof AddCustomerScalarFieldEnum)[keyof typeof AddCustomerScalarFieldEnum]


  export const AddCastingScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phoneNumber: 'phoneNumber',
    address: 'address',
    email: 'email'
  };

  export type AddCastingScalarFieldEnum = (typeof AddCastingScalarFieldEnum)[keyof typeof AddCastingScalarFieldEnum]


  export const AddFilingScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phoneNumber: 'phoneNumber',
    address: 'address',
    email: 'email'
  };

  export type AddFilingScalarFieldEnum = (typeof AddFilingScalarFieldEnum)[keyof typeof AddFilingScalarFieldEnum]


  export const AddSettingScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phoneNumber: 'phoneNumber',
    address: 'address',
    email: 'email'
  };

  export type AddSettingScalarFieldEnum = (typeof AddSettingScalarFieldEnum)[keyof typeof AddSettingScalarFieldEnum]


  export const AddBuffingScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phoneNumber: 'phoneNumber',
    address: 'address',
    email: 'email'
  };

  export type AddBuffingScalarFieldEnum = (typeof AddBuffingScalarFieldEnum)[keyof typeof AddBuffingScalarFieldEnum]


  export const AddItemScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type AddItemScalarFieldEnum = (typeof AddItemScalarFieldEnum)[keyof typeof AddItemScalarFieldEnum]


  export const AddPurchaseStockScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    item: 'item',
    quantity: 'quantity',
    purchasePrice: 'purchasePrice',
    phoneNumber: 'phoneNumber'
  };

  export type AddPurchaseStockScalarFieldEnum = (typeof AddPurchaseStockScalarFieldEnum)[keyof typeof AddPurchaseStockScalarFieldEnum]


  export const CastingScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    name: 'name',
    givenGold: 'givenGold',
    givenTouch: 'givenTouch',
    purity: 'purity',
    finalTouch: 'finalTouch',
    pureValue: 'pureValue',
    finalWeight: 'finalWeight',
    copper: 'copper',
    castingId: 'castingId'
  };

  export type CastingScalarFieldEnum = (typeof CastingScalarFieldEnum)[keyof typeof CastingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AddCustomerOrderByRelevanceFieldEnum: {
    name: 'name',
    phoneNumber: 'phoneNumber',
    address: 'address',
    email: 'email'
  };

  export type AddCustomerOrderByRelevanceFieldEnum = (typeof AddCustomerOrderByRelevanceFieldEnum)[keyof typeof AddCustomerOrderByRelevanceFieldEnum]


  export const AddCastingOrderByRelevanceFieldEnum: {
    name: 'name',
    phoneNumber: 'phoneNumber',
    address: 'address',
    email: 'email'
  };

  export type AddCastingOrderByRelevanceFieldEnum = (typeof AddCastingOrderByRelevanceFieldEnum)[keyof typeof AddCastingOrderByRelevanceFieldEnum]


  export const AddFilingOrderByRelevanceFieldEnum: {
    name: 'name',
    phoneNumber: 'phoneNumber',
    address: 'address',
    email: 'email'
  };

  export type AddFilingOrderByRelevanceFieldEnum = (typeof AddFilingOrderByRelevanceFieldEnum)[keyof typeof AddFilingOrderByRelevanceFieldEnum]


  export const AddSettingOrderByRelevanceFieldEnum: {
    name: 'name',
    phoneNumber: 'phoneNumber',
    address: 'address',
    email: 'email'
  };

  export type AddSettingOrderByRelevanceFieldEnum = (typeof AddSettingOrderByRelevanceFieldEnum)[keyof typeof AddSettingOrderByRelevanceFieldEnum]


  export const AddBuffingOrderByRelevanceFieldEnum: {
    name: 'name',
    phoneNumber: 'phoneNumber',
    address: 'address',
    email: 'email'
  };

  export type AddBuffingOrderByRelevanceFieldEnum = (typeof AddBuffingOrderByRelevanceFieldEnum)[keyof typeof AddBuffingOrderByRelevanceFieldEnum]


  export const AddItemOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type AddItemOrderByRelevanceFieldEnum = (typeof AddItemOrderByRelevanceFieldEnum)[keyof typeof AddItemOrderByRelevanceFieldEnum]


  export const AddPurchaseStockOrderByRelevanceFieldEnum: {
    name: 'name',
    item: 'item',
    phoneNumber: 'phoneNumber'
  };

  export type AddPurchaseStockOrderByRelevanceFieldEnum = (typeof AddPurchaseStockOrderByRelevanceFieldEnum)[keyof typeof AddPurchaseStockOrderByRelevanceFieldEnum]


  export const CastingOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type CastingOrderByRelevanceFieldEnum = (typeof CastingOrderByRelevanceFieldEnum)[keyof typeof CastingOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AddCustomerWhereInput = {
    AND?: AddCustomerWhereInput | AddCustomerWhereInput[]
    OR?: AddCustomerWhereInput[]
    NOT?: AddCustomerWhereInput | AddCustomerWhereInput[]
    id?: IntFilter<"AddCustomer"> | number
    name?: StringFilter<"AddCustomer"> | string
    phoneNumber?: StringFilter<"AddCustomer"> | string
    address?: StringFilter<"AddCustomer"> | string
    email?: StringNullableFilter<"AddCustomer"> | string | null
  }

  export type AddCustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrderInput | SortOrder
    _relevance?: AddCustomerOrderByRelevanceInput
  }

  export type AddCustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AddCustomerWhereInput | AddCustomerWhereInput[]
    OR?: AddCustomerWhereInput[]
    NOT?: AddCustomerWhereInput | AddCustomerWhereInput[]
    name?: StringFilter<"AddCustomer"> | string
    phoneNumber?: StringFilter<"AddCustomer"> | string
    address?: StringFilter<"AddCustomer"> | string
  }, "id" | "email">

  export type AddCustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrderInput | SortOrder
    _count?: AddCustomerCountOrderByAggregateInput
    _avg?: AddCustomerAvgOrderByAggregateInput
    _max?: AddCustomerMaxOrderByAggregateInput
    _min?: AddCustomerMinOrderByAggregateInput
    _sum?: AddCustomerSumOrderByAggregateInput
  }

  export type AddCustomerScalarWhereWithAggregatesInput = {
    AND?: AddCustomerScalarWhereWithAggregatesInput | AddCustomerScalarWhereWithAggregatesInput[]
    OR?: AddCustomerScalarWhereWithAggregatesInput[]
    NOT?: AddCustomerScalarWhereWithAggregatesInput | AddCustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AddCustomer"> | number
    name?: StringWithAggregatesFilter<"AddCustomer"> | string
    phoneNumber?: StringWithAggregatesFilter<"AddCustomer"> | string
    address?: StringWithAggregatesFilter<"AddCustomer"> | string
    email?: StringNullableWithAggregatesFilter<"AddCustomer"> | string | null
  }

  export type AddCastingWhereInput = {
    AND?: AddCastingWhereInput | AddCastingWhereInput[]
    OR?: AddCastingWhereInput[]
    NOT?: AddCastingWhereInput | AddCastingWhereInput[]
    id?: IntFilter<"AddCasting"> | number
    name?: StringFilter<"AddCasting"> | string
    phoneNumber?: StringFilter<"AddCasting"> | string
    address?: StringFilter<"AddCasting"> | string
    email?: StringFilter<"AddCasting"> | string
    Castings?: CastingListRelationFilter
  }

  export type AddCastingOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
    Castings?: CastingOrderByRelationAggregateInput
    _relevance?: AddCastingOrderByRelevanceInput
  }

  export type AddCastingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AddCastingWhereInput | AddCastingWhereInput[]
    OR?: AddCastingWhereInput[]
    NOT?: AddCastingWhereInput | AddCastingWhereInput[]
    name?: StringFilter<"AddCasting"> | string
    phoneNumber?: StringFilter<"AddCasting"> | string
    address?: StringFilter<"AddCasting"> | string
    Castings?: CastingListRelationFilter
  }, "id" | "email">

  export type AddCastingOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
    _count?: AddCastingCountOrderByAggregateInput
    _avg?: AddCastingAvgOrderByAggregateInput
    _max?: AddCastingMaxOrderByAggregateInput
    _min?: AddCastingMinOrderByAggregateInput
    _sum?: AddCastingSumOrderByAggregateInput
  }

  export type AddCastingScalarWhereWithAggregatesInput = {
    AND?: AddCastingScalarWhereWithAggregatesInput | AddCastingScalarWhereWithAggregatesInput[]
    OR?: AddCastingScalarWhereWithAggregatesInput[]
    NOT?: AddCastingScalarWhereWithAggregatesInput | AddCastingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AddCasting"> | number
    name?: StringWithAggregatesFilter<"AddCasting"> | string
    phoneNumber?: StringWithAggregatesFilter<"AddCasting"> | string
    address?: StringWithAggregatesFilter<"AddCasting"> | string
    email?: StringWithAggregatesFilter<"AddCasting"> | string
  }

  export type AddFilingWhereInput = {
    AND?: AddFilingWhereInput | AddFilingWhereInput[]
    OR?: AddFilingWhereInput[]
    NOT?: AddFilingWhereInput | AddFilingWhereInput[]
    id?: IntFilter<"AddFiling"> | number
    name?: StringFilter<"AddFiling"> | string
    phoneNumber?: StringFilter<"AddFiling"> | string
    address?: StringFilter<"AddFiling"> | string
    email?: StringFilter<"AddFiling"> | string
  }

  export type AddFilingOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
    _relevance?: AddFilingOrderByRelevanceInput
  }

  export type AddFilingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AddFilingWhereInput | AddFilingWhereInput[]
    OR?: AddFilingWhereInput[]
    NOT?: AddFilingWhereInput | AddFilingWhereInput[]
    name?: StringFilter<"AddFiling"> | string
    phoneNumber?: StringFilter<"AddFiling"> | string
    address?: StringFilter<"AddFiling"> | string
  }, "id" | "email">

  export type AddFilingOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
    _count?: AddFilingCountOrderByAggregateInput
    _avg?: AddFilingAvgOrderByAggregateInput
    _max?: AddFilingMaxOrderByAggregateInput
    _min?: AddFilingMinOrderByAggregateInput
    _sum?: AddFilingSumOrderByAggregateInput
  }

  export type AddFilingScalarWhereWithAggregatesInput = {
    AND?: AddFilingScalarWhereWithAggregatesInput | AddFilingScalarWhereWithAggregatesInput[]
    OR?: AddFilingScalarWhereWithAggregatesInput[]
    NOT?: AddFilingScalarWhereWithAggregatesInput | AddFilingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AddFiling"> | number
    name?: StringWithAggregatesFilter<"AddFiling"> | string
    phoneNumber?: StringWithAggregatesFilter<"AddFiling"> | string
    address?: StringWithAggregatesFilter<"AddFiling"> | string
    email?: StringWithAggregatesFilter<"AddFiling"> | string
  }

  export type AddSettingWhereInput = {
    AND?: AddSettingWhereInput | AddSettingWhereInput[]
    OR?: AddSettingWhereInput[]
    NOT?: AddSettingWhereInput | AddSettingWhereInput[]
    id?: IntFilter<"AddSetting"> | number
    name?: StringFilter<"AddSetting"> | string
    phoneNumber?: StringFilter<"AddSetting"> | string
    address?: StringFilter<"AddSetting"> | string
    email?: StringFilter<"AddSetting"> | string
  }

  export type AddSettingOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
    _relevance?: AddSettingOrderByRelevanceInput
  }

  export type AddSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AddSettingWhereInput | AddSettingWhereInput[]
    OR?: AddSettingWhereInput[]
    NOT?: AddSettingWhereInput | AddSettingWhereInput[]
    name?: StringFilter<"AddSetting"> | string
    phoneNumber?: StringFilter<"AddSetting"> | string
    address?: StringFilter<"AddSetting"> | string
  }, "id" | "email">

  export type AddSettingOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
    _count?: AddSettingCountOrderByAggregateInput
    _avg?: AddSettingAvgOrderByAggregateInput
    _max?: AddSettingMaxOrderByAggregateInput
    _min?: AddSettingMinOrderByAggregateInput
    _sum?: AddSettingSumOrderByAggregateInput
  }

  export type AddSettingScalarWhereWithAggregatesInput = {
    AND?: AddSettingScalarWhereWithAggregatesInput | AddSettingScalarWhereWithAggregatesInput[]
    OR?: AddSettingScalarWhereWithAggregatesInput[]
    NOT?: AddSettingScalarWhereWithAggregatesInput | AddSettingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AddSetting"> | number
    name?: StringWithAggregatesFilter<"AddSetting"> | string
    phoneNumber?: StringWithAggregatesFilter<"AddSetting"> | string
    address?: StringWithAggregatesFilter<"AddSetting"> | string
    email?: StringWithAggregatesFilter<"AddSetting"> | string
  }

  export type AddBuffingWhereInput = {
    AND?: AddBuffingWhereInput | AddBuffingWhereInput[]
    OR?: AddBuffingWhereInput[]
    NOT?: AddBuffingWhereInput | AddBuffingWhereInput[]
    id?: IntFilter<"AddBuffing"> | number
    name?: StringFilter<"AddBuffing"> | string
    phoneNumber?: StringFilter<"AddBuffing"> | string
    address?: StringFilter<"AddBuffing"> | string
    email?: StringFilter<"AddBuffing"> | string
  }

  export type AddBuffingOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
    _relevance?: AddBuffingOrderByRelevanceInput
  }

  export type AddBuffingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AddBuffingWhereInput | AddBuffingWhereInput[]
    OR?: AddBuffingWhereInput[]
    NOT?: AddBuffingWhereInput | AddBuffingWhereInput[]
    name?: StringFilter<"AddBuffing"> | string
    phoneNumber?: StringFilter<"AddBuffing"> | string
    address?: StringFilter<"AddBuffing"> | string
  }, "id" | "email">

  export type AddBuffingOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
    _count?: AddBuffingCountOrderByAggregateInput
    _avg?: AddBuffingAvgOrderByAggregateInput
    _max?: AddBuffingMaxOrderByAggregateInput
    _min?: AddBuffingMinOrderByAggregateInput
    _sum?: AddBuffingSumOrderByAggregateInput
  }

  export type AddBuffingScalarWhereWithAggregatesInput = {
    AND?: AddBuffingScalarWhereWithAggregatesInput | AddBuffingScalarWhereWithAggregatesInput[]
    OR?: AddBuffingScalarWhereWithAggregatesInput[]
    NOT?: AddBuffingScalarWhereWithAggregatesInput | AddBuffingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AddBuffing"> | number
    name?: StringWithAggregatesFilter<"AddBuffing"> | string
    phoneNumber?: StringWithAggregatesFilter<"AddBuffing"> | string
    address?: StringWithAggregatesFilter<"AddBuffing"> | string
    email?: StringWithAggregatesFilter<"AddBuffing"> | string
  }

  export type AddItemWhereInput = {
    AND?: AddItemWhereInput | AddItemWhereInput[]
    OR?: AddItemWhereInput[]
    NOT?: AddItemWhereInput | AddItemWhereInput[]
    id?: IntFilter<"AddItem"> | number
    name?: StringFilter<"AddItem"> | string
  }

  export type AddItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    _relevance?: AddItemOrderByRelevanceInput
  }

  export type AddItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AddItemWhereInput | AddItemWhereInput[]
    OR?: AddItemWhereInput[]
    NOT?: AddItemWhereInput | AddItemWhereInput[]
    name?: StringFilter<"AddItem"> | string
  }, "id">

  export type AddItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: AddItemCountOrderByAggregateInput
    _avg?: AddItemAvgOrderByAggregateInput
    _max?: AddItemMaxOrderByAggregateInput
    _min?: AddItemMinOrderByAggregateInput
    _sum?: AddItemSumOrderByAggregateInput
  }

  export type AddItemScalarWhereWithAggregatesInput = {
    AND?: AddItemScalarWhereWithAggregatesInput | AddItemScalarWhereWithAggregatesInput[]
    OR?: AddItemScalarWhereWithAggregatesInput[]
    NOT?: AddItemScalarWhereWithAggregatesInput | AddItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AddItem"> | number
    name?: StringWithAggregatesFilter<"AddItem"> | string
  }

  export type AddPurchaseStockWhereInput = {
    AND?: AddPurchaseStockWhereInput | AddPurchaseStockWhereInput[]
    OR?: AddPurchaseStockWhereInput[]
    NOT?: AddPurchaseStockWhereInput | AddPurchaseStockWhereInput[]
    id?: IntFilter<"AddPurchaseStock"> | number
    name?: StringFilter<"AddPurchaseStock"> | string
    createdAt?: DateTimeFilter<"AddPurchaseStock"> | Date | string
    item?: StringFilter<"AddPurchaseStock"> | string
    quantity?: IntFilter<"AddPurchaseStock"> | number
    purchasePrice?: IntFilter<"AddPurchaseStock"> | number
    phoneNumber?: StringFilter<"AddPurchaseStock"> | string
  }

  export type AddPurchaseStockOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    item?: SortOrder
    quantity?: SortOrder
    purchasePrice?: SortOrder
    phoneNumber?: SortOrder
    _relevance?: AddPurchaseStockOrderByRelevanceInput
  }

  export type AddPurchaseStockWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AddPurchaseStockWhereInput | AddPurchaseStockWhereInput[]
    OR?: AddPurchaseStockWhereInput[]
    NOT?: AddPurchaseStockWhereInput | AddPurchaseStockWhereInput[]
    name?: StringFilter<"AddPurchaseStock"> | string
    createdAt?: DateTimeFilter<"AddPurchaseStock"> | Date | string
    item?: StringFilter<"AddPurchaseStock"> | string
    quantity?: IntFilter<"AddPurchaseStock"> | number
    purchasePrice?: IntFilter<"AddPurchaseStock"> | number
    phoneNumber?: StringFilter<"AddPurchaseStock"> | string
  }, "id">

  export type AddPurchaseStockOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    item?: SortOrder
    quantity?: SortOrder
    purchasePrice?: SortOrder
    phoneNumber?: SortOrder
    _count?: AddPurchaseStockCountOrderByAggregateInput
    _avg?: AddPurchaseStockAvgOrderByAggregateInput
    _max?: AddPurchaseStockMaxOrderByAggregateInput
    _min?: AddPurchaseStockMinOrderByAggregateInput
    _sum?: AddPurchaseStockSumOrderByAggregateInput
  }

  export type AddPurchaseStockScalarWhereWithAggregatesInput = {
    AND?: AddPurchaseStockScalarWhereWithAggregatesInput | AddPurchaseStockScalarWhereWithAggregatesInput[]
    OR?: AddPurchaseStockScalarWhereWithAggregatesInput[]
    NOT?: AddPurchaseStockScalarWhereWithAggregatesInput | AddPurchaseStockScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AddPurchaseStock"> | number
    name?: StringWithAggregatesFilter<"AddPurchaseStock"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AddPurchaseStock"> | Date | string
    item?: StringWithAggregatesFilter<"AddPurchaseStock"> | string
    quantity?: IntWithAggregatesFilter<"AddPurchaseStock"> | number
    purchasePrice?: IntWithAggregatesFilter<"AddPurchaseStock"> | number
    phoneNumber?: StringWithAggregatesFilter<"AddPurchaseStock"> | string
  }

  export type CastingWhereInput = {
    AND?: CastingWhereInput | CastingWhereInput[]
    OR?: CastingWhereInput[]
    NOT?: CastingWhereInput | CastingWhereInput[]
    id?: IntFilter<"Casting"> | number
    createdAt?: DateTimeFilter<"Casting"> | Date | string
    name?: StringFilter<"Casting"> | string
    givenGold?: FloatFilter<"Casting"> | number
    givenTouch?: FloatFilter<"Casting"> | number
    purity?: FloatFilter<"Casting"> | number
    finalTouch?: FloatFilter<"Casting"> | number
    pureValue?: FloatFilter<"Casting"> | number
    finalWeight?: FloatFilter<"Casting"> | number
    copper?: FloatFilter<"Casting"> | number
    castingId?: IntFilter<"Casting"> | number
    addcasting?: XOR<AddCastingScalarRelationFilter, AddCastingWhereInput>
  }

  export type CastingOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    givenGold?: SortOrder
    givenTouch?: SortOrder
    purity?: SortOrder
    finalTouch?: SortOrder
    pureValue?: SortOrder
    finalWeight?: SortOrder
    copper?: SortOrder
    castingId?: SortOrder
    addcasting?: AddCastingOrderByWithRelationInput
    _relevance?: CastingOrderByRelevanceInput
  }

  export type CastingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CastingWhereInput | CastingWhereInput[]
    OR?: CastingWhereInput[]
    NOT?: CastingWhereInput | CastingWhereInput[]
    createdAt?: DateTimeFilter<"Casting"> | Date | string
    name?: StringFilter<"Casting"> | string
    givenGold?: FloatFilter<"Casting"> | number
    givenTouch?: FloatFilter<"Casting"> | number
    purity?: FloatFilter<"Casting"> | number
    finalTouch?: FloatFilter<"Casting"> | number
    pureValue?: FloatFilter<"Casting"> | number
    finalWeight?: FloatFilter<"Casting"> | number
    copper?: FloatFilter<"Casting"> | number
    castingId?: IntFilter<"Casting"> | number
    addcasting?: XOR<AddCastingScalarRelationFilter, AddCastingWhereInput>
  }, "id">

  export type CastingOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    givenGold?: SortOrder
    givenTouch?: SortOrder
    purity?: SortOrder
    finalTouch?: SortOrder
    pureValue?: SortOrder
    finalWeight?: SortOrder
    copper?: SortOrder
    castingId?: SortOrder
    _count?: CastingCountOrderByAggregateInput
    _avg?: CastingAvgOrderByAggregateInput
    _max?: CastingMaxOrderByAggregateInput
    _min?: CastingMinOrderByAggregateInput
    _sum?: CastingSumOrderByAggregateInput
  }

  export type CastingScalarWhereWithAggregatesInput = {
    AND?: CastingScalarWhereWithAggregatesInput | CastingScalarWhereWithAggregatesInput[]
    OR?: CastingScalarWhereWithAggregatesInput[]
    NOT?: CastingScalarWhereWithAggregatesInput | CastingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Casting"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Casting"> | Date | string
    name?: StringWithAggregatesFilter<"Casting"> | string
    givenGold?: FloatWithAggregatesFilter<"Casting"> | number
    givenTouch?: FloatWithAggregatesFilter<"Casting"> | number
    purity?: FloatWithAggregatesFilter<"Casting"> | number
    finalTouch?: FloatWithAggregatesFilter<"Casting"> | number
    pureValue?: FloatWithAggregatesFilter<"Casting"> | number
    finalWeight?: FloatWithAggregatesFilter<"Casting"> | number
    copper?: FloatWithAggregatesFilter<"Casting"> | number
    castingId?: IntWithAggregatesFilter<"Casting"> | number
  }

  export type AddCustomerCreateInput = {
    name: string
    phoneNumber: string
    address: string
    email?: string | null
  }

  export type AddCustomerUncheckedCreateInput = {
    id?: number
    name: string
    phoneNumber: string
    address: string
    email?: string | null
  }

  export type AddCustomerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddCustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddCustomerCreateManyInput = {
    id?: number
    name: string
    phoneNumber: string
    address: string
    email?: string | null
  }

  export type AddCustomerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddCustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddCastingCreateInput = {
    name: string
    phoneNumber: string
    address: string
    email: string
    Castings?: CastingCreateNestedManyWithoutAddcastingInput
  }

  export type AddCastingUncheckedCreateInput = {
    id?: number
    name: string
    phoneNumber: string
    address: string
    email: string
    Castings?: CastingUncheckedCreateNestedManyWithoutAddcastingInput
  }

  export type AddCastingUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Castings?: CastingUpdateManyWithoutAddcastingNestedInput
  }

  export type AddCastingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Castings?: CastingUncheckedUpdateManyWithoutAddcastingNestedInput
  }

  export type AddCastingCreateManyInput = {
    id?: number
    name: string
    phoneNumber: string
    address: string
    email: string
  }

  export type AddCastingUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AddCastingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AddFilingCreateInput = {
    name: string
    phoneNumber: string
    address: string
    email: string
  }

  export type AddFilingUncheckedCreateInput = {
    id?: number
    name: string
    phoneNumber: string
    address: string
    email: string
  }

  export type AddFilingUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AddFilingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AddFilingCreateManyInput = {
    id?: number
    name: string
    phoneNumber: string
    address: string
    email: string
  }

  export type AddFilingUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AddFilingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AddSettingCreateInput = {
    name: string
    phoneNumber: string
    address: string
    email: string
  }

  export type AddSettingUncheckedCreateInput = {
    id?: number
    name: string
    phoneNumber: string
    address: string
    email: string
  }

  export type AddSettingUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AddSettingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AddSettingCreateManyInput = {
    id?: number
    name: string
    phoneNumber: string
    address: string
    email: string
  }

  export type AddSettingUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AddSettingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AddBuffingCreateInput = {
    name: string
    phoneNumber: string
    address: string
    email: string
  }

  export type AddBuffingUncheckedCreateInput = {
    id?: number
    name: string
    phoneNumber: string
    address: string
    email: string
  }

  export type AddBuffingUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AddBuffingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AddBuffingCreateManyInput = {
    id?: number
    name: string
    phoneNumber: string
    address: string
    email: string
  }

  export type AddBuffingUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AddBuffingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AddItemCreateInput = {
    name: string
  }

  export type AddItemUncheckedCreateInput = {
    id?: number
    name: string
  }

  export type AddItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AddItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AddItemCreateManyInput = {
    id?: number
    name: string
  }

  export type AddItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AddItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AddPurchaseStockCreateInput = {
    name: string
    createdAt?: Date | string
    item: string
    quantity: number
    purchasePrice: number
    phoneNumber: string
  }

  export type AddPurchaseStockUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    item: string
    quantity: number
    purchasePrice: number
    phoneNumber: string
  }

  export type AddPurchaseStockUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    purchasePrice?: IntFieldUpdateOperationsInput | number
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type AddPurchaseStockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    purchasePrice?: IntFieldUpdateOperationsInput | number
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type AddPurchaseStockCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    item: string
    quantity: number
    purchasePrice: number
    phoneNumber: string
  }

  export type AddPurchaseStockUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    purchasePrice?: IntFieldUpdateOperationsInput | number
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type AddPurchaseStockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    purchasePrice?: IntFieldUpdateOperationsInput | number
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type CastingCreateInput = {
    createdAt?: Date | string
    name: string
    givenGold: number
    givenTouch: number
    purity: number
    finalTouch: number
    pureValue: number
    finalWeight: number
    copper: number
    addcasting: AddCastingCreateNestedOneWithoutCastingsInput
  }

  export type CastingUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    name: string
    givenGold: number
    givenTouch: number
    purity: number
    finalTouch: number
    pureValue: number
    finalWeight: number
    copper: number
    castingId: number
  }

  export type CastingUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    givenGold?: FloatFieldUpdateOperationsInput | number
    givenTouch?: FloatFieldUpdateOperationsInput | number
    purity?: FloatFieldUpdateOperationsInput | number
    finalTouch?: FloatFieldUpdateOperationsInput | number
    pureValue?: FloatFieldUpdateOperationsInput | number
    finalWeight?: FloatFieldUpdateOperationsInput | number
    copper?: FloatFieldUpdateOperationsInput | number
    addcasting?: AddCastingUpdateOneRequiredWithoutCastingsNestedInput
  }

  export type CastingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    givenGold?: FloatFieldUpdateOperationsInput | number
    givenTouch?: FloatFieldUpdateOperationsInput | number
    purity?: FloatFieldUpdateOperationsInput | number
    finalTouch?: FloatFieldUpdateOperationsInput | number
    pureValue?: FloatFieldUpdateOperationsInput | number
    finalWeight?: FloatFieldUpdateOperationsInput | number
    copper?: FloatFieldUpdateOperationsInput | number
    castingId?: IntFieldUpdateOperationsInput | number
  }

  export type CastingCreateManyInput = {
    id?: number
    createdAt?: Date | string
    name: string
    givenGold: number
    givenTouch: number
    purity: number
    finalTouch: number
    pureValue: number
    finalWeight: number
    copper: number
    castingId: number
  }

  export type CastingUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    givenGold?: FloatFieldUpdateOperationsInput | number
    givenTouch?: FloatFieldUpdateOperationsInput | number
    purity?: FloatFieldUpdateOperationsInput | number
    finalTouch?: FloatFieldUpdateOperationsInput | number
    pureValue?: FloatFieldUpdateOperationsInput | number
    finalWeight?: FloatFieldUpdateOperationsInput | number
    copper?: FloatFieldUpdateOperationsInput | number
  }

  export type CastingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    givenGold?: FloatFieldUpdateOperationsInput | number
    givenTouch?: FloatFieldUpdateOperationsInput | number
    purity?: FloatFieldUpdateOperationsInput | number
    finalTouch?: FloatFieldUpdateOperationsInput | number
    pureValue?: FloatFieldUpdateOperationsInput | number
    finalWeight?: FloatFieldUpdateOperationsInput | number
    copper?: FloatFieldUpdateOperationsInput | number
    castingId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AddCustomerOrderByRelevanceInput = {
    fields: AddCustomerOrderByRelevanceFieldEnum | AddCustomerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AddCustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
  }

  export type AddCustomerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AddCustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
  }

  export type AddCustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
  }

  export type AddCustomerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CastingListRelationFilter = {
    every?: CastingWhereInput
    some?: CastingWhereInput
    none?: CastingWhereInput
  }

  export type CastingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddCastingOrderByRelevanceInput = {
    fields: AddCastingOrderByRelevanceFieldEnum | AddCastingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AddCastingCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
  }

  export type AddCastingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AddCastingMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
  }

  export type AddCastingMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
  }

  export type AddCastingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AddFilingOrderByRelevanceInput = {
    fields: AddFilingOrderByRelevanceFieldEnum | AddFilingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AddFilingCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
  }

  export type AddFilingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AddFilingMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
  }

  export type AddFilingMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
  }

  export type AddFilingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AddSettingOrderByRelevanceInput = {
    fields: AddSettingOrderByRelevanceFieldEnum | AddSettingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AddSettingCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
  }

  export type AddSettingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AddSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
  }

  export type AddSettingMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
  }

  export type AddSettingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AddBuffingOrderByRelevanceInput = {
    fields: AddBuffingOrderByRelevanceFieldEnum | AddBuffingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AddBuffingCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
  }

  export type AddBuffingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AddBuffingMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
  }

  export type AddBuffingMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
  }

  export type AddBuffingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AddItemOrderByRelevanceInput = {
    fields: AddItemOrderByRelevanceFieldEnum | AddItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AddItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AddItemAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AddItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AddItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AddItemSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AddPurchaseStockOrderByRelevanceInput = {
    fields: AddPurchaseStockOrderByRelevanceFieldEnum | AddPurchaseStockOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AddPurchaseStockCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    item?: SortOrder
    quantity?: SortOrder
    purchasePrice?: SortOrder
    phoneNumber?: SortOrder
  }

  export type AddPurchaseStockAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    purchasePrice?: SortOrder
  }

  export type AddPurchaseStockMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    item?: SortOrder
    quantity?: SortOrder
    purchasePrice?: SortOrder
    phoneNumber?: SortOrder
  }

  export type AddPurchaseStockMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    item?: SortOrder
    quantity?: SortOrder
    purchasePrice?: SortOrder
    phoneNumber?: SortOrder
  }

  export type AddPurchaseStockSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    purchasePrice?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AddCastingScalarRelationFilter = {
    is?: AddCastingWhereInput
    isNot?: AddCastingWhereInput
  }

  export type CastingOrderByRelevanceInput = {
    fields: CastingOrderByRelevanceFieldEnum | CastingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CastingCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    givenGold?: SortOrder
    givenTouch?: SortOrder
    purity?: SortOrder
    finalTouch?: SortOrder
    pureValue?: SortOrder
    finalWeight?: SortOrder
    copper?: SortOrder
    castingId?: SortOrder
  }

  export type CastingAvgOrderByAggregateInput = {
    id?: SortOrder
    givenGold?: SortOrder
    givenTouch?: SortOrder
    purity?: SortOrder
    finalTouch?: SortOrder
    pureValue?: SortOrder
    finalWeight?: SortOrder
    copper?: SortOrder
    castingId?: SortOrder
  }

  export type CastingMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    givenGold?: SortOrder
    givenTouch?: SortOrder
    purity?: SortOrder
    finalTouch?: SortOrder
    pureValue?: SortOrder
    finalWeight?: SortOrder
    copper?: SortOrder
    castingId?: SortOrder
  }

  export type CastingMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    givenGold?: SortOrder
    givenTouch?: SortOrder
    purity?: SortOrder
    finalTouch?: SortOrder
    pureValue?: SortOrder
    finalWeight?: SortOrder
    copper?: SortOrder
    castingId?: SortOrder
  }

  export type CastingSumOrderByAggregateInput = {
    id?: SortOrder
    givenGold?: SortOrder
    givenTouch?: SortOrder
    purity?: SortOrder
    finalTouch?: SortOrder
    pureValue?: SortOrder
    finalWeight?: SortOrder
    copper?: SortOrder
    castingId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CastingCreateNestedManyWithoutAddcastingInput = {
    create?: XOR<CastingCreateWithoutAddcastingInput, CastingUncheckedCreateWithoutAddcastingInput> | CastingCreateWithoutAddcastingInput[] | CastingUncheckedCreateWithoutAddcastingInput[]
    connectOrCreate?: CastingCreateOrConnectWithoutAddcastingInput | CastingCreateOrConnectWithoutAddcastingInput[]
    createMany?: CastingCreateManyAddcastingInputEnvelope
    connect?: CastingWhereUniqueInput | CastingWhereUniqueInput[]
  }

  export type CastingUncheckedCreateNestedManyWithoutAddcastingInput = {
    create?: XOR<CastingCreateWithoutAddcastingInput, CastingUncheckedCreateWithoutAddcastingInput> | CastingCreateWithoutAddcastingInput[] | CastingUncheckedCreateWithoutAddcastingInput[]
    connectOrCreate?: CastingCreateOrConnectWithoutAddcastingInput | CastingCreateOrConnectWithoutAddcastingInput[]
    createMany?: CastingCreateManyAddcastingInputEnvelope
    connect?: CastingWhereUniqueInput | CastingWhereUniqueInput[]
  }

  export type CastingUpdateManyWithoutAddcastingNestedInput = {
    create?: XOR<CastingCreateWithoutAddcastingInput, CastingUncheckedCreateWithoutAddcastingInput> | CastingCreateWithoutAddcastingInput[] | CastingUncheckedCreateWithoutAddcastingInput[]
    connectOrCreate?: CastingCreateOrConnectWithoutAddcastingInput | CastingCreateOrConnectWithoutAddcastingInput[]
    upsert?: CastingUpsertWithWhereUniqueWithoutAddcastingInput | CastingUpsertWithWhereUniqueWithoutAddcastingInput[]
    createMany?: CastingCreateManyAddcastingInputEnvelope
    set?: CastingWhereUniqueInput | CastingWhereUniqueInput[]
    disconnect?: CastingWhereUniqueInput | CastingWhereUniqueInput[]
    delete?: CastingWhereUniqueInput | CastingWhereUniqueInput[]
    connect?: CastingWhereUniqueInput | CastingWhereUniqueInput[]
    update?: CastingUpdateWithWhereUniqueWithoutAddcastingInput | CastingUpdateWithWhereUniqueWithoutAddcastingInput[]
    updateMany?: CastingUpdateManyWithWhereWithoutAddcastingInput | CastingUpdateManyWithWhereWithoutAddcastingInput[]
    deleteMany?: CastingScalarWhereInput | CastingScalarWhereInput[]
  }

  export type CastingUncheckedUpdateManyWithoutAddcastingNestedInput = {
    create?: XOR<CastingCreateWithoutAddcastingInput, CastingUncheckedCreateWithoutAddcastingInput> | CastingCreateWithoutAddcastingInput[] | CastingUncheckedCreateWithoutAddcastingInput[]
    connectOrCreate?: CastingCreateOrConnectWithoutAddcastingInput | CastingCreateOrConnectWithoutAddcastingInput[]
    upsert?: CastingUpsertWithWhereUniqueWithoutAddcastingInput | CastingUpsertWithWhereUniqueWithoutAddcastingInput[]
    createMany?: CastingCreateManyAddcastingInputEnvelope
    set?: CastingWhereUniqueInput | CastingWhereUniqueInput[]
    disconnect?: CastingWhereUniqueInput | CastingWhereUniqueInput[]
    delete?: CastingWhereUniqueInput | CastingWhereUniqueInput[]
    connect?: CastingWhereUniqueInput | CastingWhereUniqueInput[]
    update?: CastingUpdateWithWhereUniqueWithoutAddcastingInput | CastingUpdateWithWhereUniqueWithoutAddcastingInput[]
    updateMany?: CastingUpdateManyWithWhereWithoutAddcastingInput | CastingUpdateManyWithWhereWithoutAddcastingInput[]
    deleteMany?: CastingScalarWhereInput | CastingScalarWhereInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AddCastingCreateNestedOneWithoutCastingsInput = {
    create?: XOR<AddCastingCreateWithoutCastingsInput, AddCastingUncheckedCreateWithoutCastingsInput>
    connectOrCreate?: AddCastingCreateOrConnectWithoutCastingsInput
    connect?: AddCastingWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AddCastingUpdateOneRequiredWithoutCastingsNestedInput = {
    create?: XOR<AddCastingCreateWithoutCastingsInput, AddCastingUncheckedCreateWithoutCastingsInput>
    connectOrCreate?: AddCastingCreateOrConnectWithoutCastingsInput
    upsert?: AddCastingUpsertWithoutCastingsInput
    connect?: AddCastingWhereUniqueInput
    update?: XOR<XOR<AddCastingUpdateToOneWithWhereWithoutCastingsInput, AddCastingUpdateWithoutCastingsInput>, AddCastingUncheckedUpdateWithoutCastingsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CastingCreateWithoutAddcastingInput = {
    createdAt?: Date | string
    name: string
    givenGold: number
    givenTouch: number
    purity: number
    finalTouch: number
    pureValue: number
    finalWeight: number
    copper: number
  }

  export type CastingUncheckedCreateWithoutAddcastingInput = {
    id?: number
    createdAt?: Date | string
    name: string
    givenGold: number
    givenTouch: number
    purity: number
    finalTouch: number
    pureValue: number
    finalWeight: number
    copper: number
  }

  export type CastingCreateOrConnectWithoutAddcastingInput = {
    where: CastingWhereUniqueInput
    create: XOR<CastingCreateWithoutAddcastingInput, CastingUncheckedCreateWithoutAddcastingInput>
  }

  export type CastingCreateManyAddcastingInputEnvelope = {
    data: CastingCreateManyAddcastingInput | CastingCreateManyAddcastingInput[]
    skipDuplicates?: boolean
  }

  export type CastingUpsertWithWhereUniqueWithoutAddcastingInput = {
    where: CastingWhereUniqueInput
    update: XOR<CastingUpdateWithoutAddcastingInput, CastingUncheckedUpdateWithoutAddcastingInput>
    create: XOR<CastingCreateWithoutAddcastingInput, CastingUncheckedCreateWithoutAddcastingInput>
  }

  export type CastingUpdateWithWhereUniqueWithoutAddcastingInput = {
    where: CastingWhereUniqueInput
    data: XOR<CastingUpdateWithoutAddcastingInput, CastingUncheckedUpdateWithoutAddcastingInput>
  }

  export type CastingUpdateManyWithWhereWithoutAddcastingInput = {
    where: CastingScalarWhereInput
    data: XOR<CastingUpdateManyMutationInput, CastingUncheckedUpdateManyWithoutAddcastingInput>
  }

  export type CastingScalarWhereInput = {
    AND?: CastingScalarWhereInput | CastingScalarWhereInput[]
    OR?: CastingScalarWhereInput[]
    NOT?: CastingScalarWhereInput | CastingScalarWhereInput[]
    id?: IntFilter<"Casting"> | number
    createdAt?: DateTimeFilter<"Casting"> | Date | string
    name?: StringFilter<"Casting"> | string
    givenGold?: FloatFilter<"Casting"> | number
    givenTouch?: FloatFilter<"Casting"> | number
    purity?: FloatFilter<"Casting"> | number
    finalTouch?: FloatFilter<"Casting"> | number
    pureValue?: FloatFilter<"Casting"> | number
    finalWeight?: FloatFilter<"Casting"> | number
    copper?: FloatFilter<"Casting"> | number
    castingId?: IntFilter<"Casting"> | number
  }

  export type AddCastingCreateWithoutCastingsInput = {
    name: string
    phoneNumber: string
    address: string
    email: string
  }

  export type AddCastingUncheckedCreateWithoutCastingsInput = {
    id?: number
    name: string
    phoneNumber: string
    address: string
    email: string
  }

  export type AddCastingCreateOrConnectWithoutCastingsInput = {
    where: AddCastingWhereUniqueInput
    create: XOR<AddCastingCreateWithoutCastingsInput, AddCastingUncheckedCreateWithoutCastingsInput>
  }

  export type AddCastingUpsertWithoutCastingsInput = {
    update: XOR<AddCastingUpdateWithoutCastingsInput, AddCastingUncheckedUpdateWithoutCastingsInput>
    create: XOR<AddCastingCreateWithoutCastingsInput, AddCastingUncheckedCreateWithoutCastingsInput>
    where?: AddCastingWhereInput
  }

  export type AddCastingUpdateToOneWithWhereWithoutCastingsInput = {
    where?: AddCastingWhereInput
    data: XOR<AddCastingUpdateWithoutCastingsInput, AddCastingUncheckedUpdateWithoutCastingsInput>
  }

  export type AddCastingUpdateWithoutCastingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AddCastingUncheckedUpdateWithoutCastingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type CastingCreateManyAddcastingInput = {
    id?: number
    createdAt?: Date | string
    name: string
    givenGold: number
    givenTouch: number
    purity: number
    finalTouch: number
    pureValue: number
    finalWeight: number
    copper: number
  }

  export type CastingUpdateWithoutAddcastingInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    givenGold?: FloatFieldUpdateOperationsInput | number
    givenTouch?: FloatFieldUpdateOperationsInput | number
    purity?: FloatFieldUpdateOperationsInput | number
    finalTouch?: FloatFieldUpdateOperationsInput | number
    pureValue?: FloatFieldUpdateOperationsInput | number
    finalWeight?: FloatFieldUpdateOperationsInput | number
    copper?: FloatFieldUpdateOperationsInput | number
  }

  export type CastingUncheckedUpdateWithoutAddcastingInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    givenGold?: FloatFieldUpdateOperationsInput | number
    givenTouch?: FloatFieldUpdateOperationsInput | number
    purity?: FloatFieldUpdateOperationsInput | number
    finalTouch?: FloatFieldUpdateOperationsInput | number
    pureValue?: FloatFieldUpdateOperationsInput | number
    finalWeight?: FloatFieldUpdateOperationsInput | number
    copper?: FloatFieldUpdateOperationsInput | number
  }

  export type CastingUncheckedUpdateManyWithoutAddcastingInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    givenGold?: FloatFieldUpdateOperationsInput | number
    givenTouch?: FloatFieldUpdateOperationsInput | number
    purity?: FloatFieldUpdateOperationsInput | number
    finalTouch?: FloatFieldUpdateOperationsInput | number
    pureValue?: FloatFieldUpdateOperationsInput | number
    finalWeight?: FloatFieldUpdateOperationsInput | number
    copper?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}