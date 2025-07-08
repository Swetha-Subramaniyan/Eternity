
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
 * Model AddSupplierItem
 * 
 */
export type AddSupplierItem = $Result.DefaultSelection<Prisma.$AddSupplierItemPayload>
/**
 * Model AddPurchaseStock
 * 
 */
export type AddPurchaseStock = $Result.DefaultSelection<Prisma.$AddPurchaseStockPayload>
/**
 * Model CustomerTransaction
 * 
 */
export type CustomerTransaction = $Result.DefaultSelection<Prisma.$CustomerTransactionPayload>
/**
 * Model AddItem
 * 
 */
export type AddItem = $Result.DefaultSelection<Prisma.$AddItemPayload>
/**
 * Model CastingEntry
 * 
 */
export type CastingEntry = $Result.DefaultSelection<Prisma.$CastingEntryPayload>
/**
 * Model CastingItems
 * 
 */
export type CastingItems = $Result.DefaultSelection<Prisma.$CastingItemsPayload>
/**
 * Model FilingEntry
 * 
 */
export type FilingEntry = $Result.DefaultSelection<Prisma.$FilingEntryPayload>
/**
 * Model SettingEntry
 * 
 */
export type SettingEntry = $Result.DefaultSelection<Prisma.$SettingEntryPayload>
/**
 * Model BuffingEntry
 * 
 */
export type BuffingEntry = $Result.DefaultSelection<Prisma.$BuffingEntryPayload>
/**
 * Model Stock
 * 
 */
export type Stock = $Result.DefaultSelection<Prisma.$StockPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ITEMTYPE: {
  Gold: 'Gold',
  Silver: 'Silver'
};

export type ITEMTYPE = (typeof ITEMTYPE)[keyof typeof ITEMTYPE]


export const CASTINGENTRYTYPE: {
  Items: 'Items',
  ScrapItems: 'ScrapItems'
};

export type CASTINGENTRYTYPE = (typeof CASTINGENTRYTYPE)[keyof typeof CASTINGENTRYTYPE]


export const STONEOPTION: {
  WithStone: 'WithStone',
  WithoutStone: 'WithoutStone'
};

export type STONEOPTION = (typeof STONEOPTION)[keyof typeof STONEOPTION]

}

export type ITEMTYPE = $Enums.ITEMTYPE

export const ITEMTYPE: typeof $Enums.ITEMTYPE

export type CASTINGENTRYTYPE = $Enums.CASTINGENTRYTYPE

export const CASTINGENTRYTYPE: typeof $Enums.CASTINGENTRYTYPE

export type STONEOPTION = $Enums.STONEOPTION

export const STONEOPTION: typeof $Enums.STONEOPTION

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
   * `prisma.addSupplierItem`: Exposes CRUD operations for the **AddSupplierItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AddSupplierItems
    * const addSupplierItems = await prisma.addSupplierItem.findMany()
    * ```
    */
  get addSupplierItem(): Prisma.AddSupplierItemDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.customerTransaction`: Exposes CRUD operations for the **CustomerTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerTransactions
    * const customerTransactions = await prisma.customerTransaction.findMany()
    * ```
    */
  get customerTransaction(): Prisma.CustomerTransactionDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.castingEntry`: Exposes CRUD operations for the **CastingEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CastingEntries
    * const castingEntries = await prisma.castingEntry.findMany()
    * ```
    */
  get castingEntry(): Prisma.CastingEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.castingItems`: Exposes CRUD operations for the **CastingItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CastingItems
    * const castingItems = await prisma.castingItems.findMany()
    * ```
    */
  get castingItems(): Prisma.CastingItemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.filingEntry`: Exposes CRUD operations for the **FilingEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FilingEntries
    * const filingEntries = await prisma.filingEntry.findMany()
    * ```
    */
  get filingEntry(): Prisma.FilingEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.settingEntry`: Exposes CRUD operations for the **SettingEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SettingEntries
    * const settingEntries = await prisma.settingEntry.findMany()
    * ```
    */
  get settingEntry(): Prisma.SettingEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.buffingEntry`: Exposes CRUD operations for the **BuffingEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BuffingEntries
    * const buffingEntries = await prisma.buffingEntry.findMany()
    * ```
    */
  get buffingEntry(): Prisma.BuffingEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stock`: Exposes CRUD operations for the **Stock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stocks
    * const stocks = await prisma.stock.findMany()
    * ```
    */
  get stock(): Prisma.StockDelegate<ExtArgs, ClientOptions>;
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
    AddSupplierItem: 'AddSupplierItem',
    AddPurchaseStock: 'AddPurchaseStock',
    CustomerTransaction: 'CustomerTransaction',
    AddItem: 'AddItem',
    CastingEntry: 'CastingEntry',
    CastingItems: 'CastingItems',
    FilingEntry: 'FilingEntry',
    SettingEntry: 'SettingEntry',
    BuffingEntry: 'BuffingEntry',
    Stock: 'Stock'
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
      modelProps: "addCustomer" | "addCasting" | "addFiling" | "addSetting" | "addBuffing" | "addSupplierItem" | "addPurchaseStock" | "customerTransaction" | "addItem" | "castingEntry" | "castingItems" | "filingEntry" | "settingEntry" | "buffingEntry" | "stock"
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
      AddSupplierItem: {
        payload: Prisma.$AddSupplierItemPayload<ExtArgs>
        fields: Prisma.AddSupplierItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddSupplierItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddSupplierItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddSupplierItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddSupplierItemPayload>
          }
          findFirst: {
            args: Prisma.AddSupplierItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddSupplierItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddSupplierItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddSupplierItemPayload>
          }
          findMany: {
            args: Prisma.AddSupplierItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddSupplierItemPayload>[]
          }
          create: {
            args: Prisma.AddSupplierItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddSupplierItemPayload>
          }
          createMany: {
            args: Prisma.AddSupplierItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AddSupplierItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddSupplierItemPayload>
          }
          update: {
            args: Prisma.AddSupplierItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddSupplierItemPayload>
          }
          deleteMany: {
            args: Prisma.AddSupplierItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddSupplierItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AddSupplierItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddSupplierItemPayload>
          }
          aggregate: {
            args: Prisma.AddSupplierItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddSupplierItem>
          }
          groupBy: {
            args: Prisma.AddSupplierItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddSupplierItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddSupplierItemCountArgs<ExtArgs>
            result: $Utils.Optional<AddSupplierItemCountAggregateOutputType> | number
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
      CustomerTransaction: {
        payload: Prisma.$CustomerTransactionPayload<ExtArgs>
        fields: Prisma.CustomerTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerTransactionPayload>
          }
          findFirst: {
            args: Prisma.CustomerTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerTransactionPayload>
          }
          findMany: {
            args: Prisma.CustomerTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerTransactionPayload>[]
          }
          create: {
            args: Prisma.CustomerTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerTransactionPayload>
          }
          createMany: {
            args: Prisma.CustomerTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CustomerTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerTransactionPayload>
          }
          update: {
            args: Prisma.CustomerTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerTransactionPayload>
          }
          deleteMany: {
            args: Prisma.CustomerTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerTransactionPayload>
          }
          aggregate: {
            args: Prisma.CustomerTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerTransaction>
          }
          groupBy: {
            args: Prisma.CustomerTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerTransactionCountAggregateOutputType> | number
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
      CastingEntry: {
        payload: Prisma.$CastingEntryPayload<ExtArgs>
        fields: Prisma.CastingEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CastingEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastingEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CastingEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastingEntryPayload>
          }
          findFirst: {
            args: Prisma.CastingEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastingEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CastingEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastingEntryPayload>
          }
          findMany: {
            args: Prisma.CastingEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastingEntryPayload>[]
          }
          create: {
            args: Prisma.CastingEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastingEntryPayload>
          }
          createMany: {
            args: Prisma.CastingEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CastingEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastingEntryPayload>
          }
          update: {
            args: Prisma.CastingEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastingEntryPayload>
          }
          deleteMany: {
            args: Prisma.CastingEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CastingEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CastingEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastingEntryPayload>
          }
          aggregate: {
            args: Prisma.CastingEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCastingEntry>
          }
          groupBy: {
            args: Prisma.CastingEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CastingEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CastingEntryCountArgs<ExtArgs>
            result: $Utils.Optional<CastingEntryCountAggregateOutputType> | number
          }
        }
      }
      CastingItems: {
        payload: Prisma.$CastingItemsPayload<ExtArgs>
        fields: Prisma.CastingItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CastingItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastingItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CastingItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastingItemsPayload>
          }
          findFirst: {
            args: Prisma.CastingItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastingItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CastingItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastingItemsPayload>
          }
          findMany: {
            args: Prisma.CastingItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastingItemsPayload>[]
          }
          create: {
            args: Prisma.CastingItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastingItemsPayload>
          }
          createMany: {
            args: Prisma.CastingItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CastingItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastingItemsPayload>
          }
          update: {
            args: Prisma.CastingItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastingItemsPayload>
          }
          deleteMany: {
            args: Prisma.CastingItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CastingItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CastingItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastingItemsPayload>
          }
          aggregate: {
            args: Prisma.CastingItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCastingItems>
          }
          groupBy: {
            args: Prisma.CastingItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CastingItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CastingItemsCountArgs<ExtArgs>
            result: $Utils.Optional<CastingItemsCountAggregateOutputType> | number
          }
        }
      }
      FilingEntry: {
        payload: Prisma.$FilingEntryPayload<ExtArgs>
        fields: Prisma.FilingEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FilingEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilingEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FilingEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilingEntryPayload>
          }
          findFirst: {
            args: Prisma.FilingEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilingEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FilingEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilingEntryPayload>
          }
          findMany: {
            args: Prisma.FilingEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilingEntryPayload>[]
          }
          create: {
            args: Prisma.FilingEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilingEntryPayload>
          }
          createMany: {
            args: Prisma.FilingEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FilingEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilingEntryPayload>
          }
          update: {
            args: Prisma.FilingEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilingEntryPayload>
          }
          deleteMany: {
            args: Prisma.FilingEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FilingEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FilingEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilingEntryPayload>
          }
          aggregate: {
            args: Prisma.FilingEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFilingEntry>
          }
          groupBy: {
            args: Prisma.FilingEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilingEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.FilingEntryCountArgs<ExtArgs>
            result: $Utils.Optional<FilingEntryCountAggregateOutputType> | number
          }
        }
      }
      SettingEntry: {
        payload: Prisma.$SettingEntryPayload<ExtArgs>
        fields: Prisma.SettingEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingEntryPayload>
          }
          findFirst: {
            args: Prisma.SettingEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingEntryPayload>
          }
          findMany: {
            args: Prisma.SettingEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingEntryPayload>[]
          }
          create: {
            args: Prisma.SettingEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingEntryPayload>
          }
          createMany: {
            args: Prisma.SettingEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SettingEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingEntryPayload>
          }
          update: {
            args: Prisma.SettingEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingEntryPayload>
          }
          deleteMany: {
            args: Prisma.SettingEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SettingEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingEntryPayload>
          }
          aggregate: {
            args: Prisma.SettingEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettingEntry>
          }
          groupBy: {
            args: Prisma.SettingEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingEntryCountArgs<ExtArgs>
            result: $Utils.Optional<SettingEntryCountAggregateOutputType> | number
          }
        }
      }
      BuffingEntry: {
        payload: Prisma.$BuffingEntryPayload<ExtArgs>
        fields: Prisma.BuffingEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BuffingEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuffingEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BuffingEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuffingEntryPayload>
          }
          findFirst: {
            args: Prisma.BuffingEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuffingEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BuffingEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuffingEntryPayload>
          }
          findMany: {
            args: Prisma.BuffingEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuffingEntryPayload>[]
          }
          create: {
            args: Prisma.BuffingEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuffingEntryPayload>
          }
          createMany: {
            args: Prisma.BuffingEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BuffingEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuffingEntryPayload>
          }
          update: {
            args: Prisma.BuffingEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuffingEntryPayload>
          }
          deleteMany: {
            args: Prisma.BuffingEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BuffingEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BuffingEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuffingEntryPayload>
          }
          aggregate: {
            args: Prisma.BuffingEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBuffingEntry>
          }
          groupBy: {
            args: Prisma.BuffingEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BuffingEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BuffingEntryCountArgs<ExtArgs>
            result: $Utils.Optional<BuffingEntryCountAggregateOutputType> | number
          }
        }
      }
      Stock: {
        payload: Prisma.$StockPayload<ExtArgs>
        fields: Prisma.StockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          findFirst: {
            args: Prisma.StockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          findMany: {
            args: Prisma.StockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>[]
          }
          create: {
            args: Prisma.StockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          createMany: {
            args: Prisma.StockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          update: {
            args: Prisma.StockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          deleteMany: {
            args: Prisma.StockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          aggregate: {
            args: Prisma.StockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStock>
          }
          groupBy: {
            args: Prisma.StockGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockCountArgs<ExtArgs>
            result: $Utils.Optional<StockCountAggregateOutputType> | number
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
    addSupplierItem?: AddSupplierItemOmit
    addPurchaseStock?: AddPurchaseStockOmit
    customerTransaction?: CustomerTransactionOmit
    addItem?: AddItemOmit
    castingEntry?: CastingEntryOmit
    castingItems?: CastingItemsOmit
    filingEntry?: FilingEntryOmit
    settingEntry?: SettingEntryOmit
    buffingEntry?: BuffingEntryOmit
    stock?: StockOmit
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
   * Count Type AddCustomerCountOutputType
   */

  export type AddCustomerCountOutputType = {
    transactions: number
  }

  export type AddCustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | AddCustomerCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * AddCustomerCountOutputType without action
   */
  export type AddCustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddCustomerCountOutputType
     */
    select?: AddCustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddCustomerCountOutputType without action
   */
  export type AddCustomerCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerTransactionWhereInput
  }


  /**
   * Count Type AddCastingCountOutputType
   */

  export type AddCastingCountOutputType = {
    entries: number
    castingitems: number
    stock: number
  }

  export type AddCastingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | AddCastingCountOutputTypeCountEntriesArgs
    castingitems?: boolean | AddCastingCountOutputTypeCountCastingitemsArgs
    stock?: boolean | AddCastingCountOutputTypeCountStockArgs
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
  export type AddCastingCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CastingEntryWhereInput
  }

  /**
   * AddCastingCountOutputType without action
   */
  export type AddCastingCountOutputTypeCountCastingitemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CastingItemsWhereInput
  }

  /**
   * AddCastingCountOutputType without action
   */
  export type AddCastingCountOutputTypeCountStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockWhereInput
  }


  /**
   * Count Type AddFilingCountOutputType
   */

  export type AddFilingCountOutputType = {
    filings: number
  }

  export type AddFilingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filings?: boolean | AddFilingCountOutputTypeCountFilingsArgs
  }

  // Custom InputTypes
  /**
   * AddFilingCountOutputType without action
   */
  export type AddFilingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddFilingCountOutputType
     */
    select?: AddFilingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddFilingCountOutputType without action
   */
  export type AddFilingCountOutputTypeCountFilingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilingEntryWhereInput
  }


  /**
   * Count Type AddSettingCountOutputType
   */

  export type AddSettingCountOutputType = {
    settings: number
  }

  export type AddSettingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    settings?: boolean | AddSettingCountOutputTypeCountSettingsArgs
  }

  // Custom InputTypes
  /**
   * AddSettingCountOutputType without action
   */
  export type AddSettingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddSettingCountOutputType
     */
    select?: AddSettingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddSettingCountOutputType without action
   */
  export type AddSettingCountOutputTypeCountSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingEntryWhereInput
  }


  /**
   * Count Type AddBuffingCountOutputType
   */

  export type AddBuffingCountOutputType = {
    buffings: number
  }

  export type AddBuffingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buffings?: boolean | AddBuffingCountOutputTypeCountBuffingsArgs
  }

  // Custom InputTypes
  /**
   * AddBuffingCountOutputType without action
   */
  export type AddBuffingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddBuffingCountOutputType
     */
    select?: AddBuffingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddBuffingCountOutputType without action
   */
  export type AddBuffingCountOutputTypeCountBuffingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuffingEntryWhereInput
  }


  /**
   * Count Type AddItemCountOutputType
   */

  export type AddItemCountOutputType = {
    castingItems: number
    stock: number
  }

  export type AddItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    castingItems?: boolean | AddItemCountOutputTypeCountCastingItemsArgs
    stock?: boolean | AddItemCountOutputTypeCountStockArgs
  }

  // Custom InputTypes
  /**
   * AddItemCountOutputType without action
   */
  export type AddItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddItemCountOutputType
     */
    select?: AddItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddItemCountOutputType without action
   */
  export type AddItemCountOutputTypeCountCastingItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CastingItemsWhereInput
  }

  /**
   * AddItemCountOutputType without action
   */
  export type AddItemCountOutputTypeCountStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockWhereInput
  }


  /**
   * Count Type CastingEntryCountOutputType
   */

  export type CastingEntryCountOutputType = {
    items: number
  }

  export type CastingEntryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CastingEntryCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * CastingEntryCountOutputType without action
   */
  export type CastingEntryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CastingEntryCountOutputType
     */
    select?: CastingEntryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CastingEntryCountOutputType without action
   */
  export type CastingEntryCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CastingItemsWhereInput
  }


  /**
   * Count Type CastingItemsCountOutputType
   */

  export type CastingItemsCountOutputType = {
    stock: number
  }

  export type CastingItemsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock?: boolean | CastingItemsCountOutputTypeCountStockArgs
  }

  // Custom InputTypes
  /**
   * CastingItemsCountOutputType without action
   */
  export type CastingItemsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CastingItemsCountOutputType
     */
    select?: CastingItemsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CastingItemsCountOutputType without action
   */
  export type CastingItemsCountOutputTypeCountStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockWhereInput
  }


  /**
   * Count Type FilingEntryCountOutputType
   */

  export type FilingEntryCountOutputType = {
    settingEntry: number
    buffingEntries: number
  }

  export type FilingEntryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    settingEntry?: boolean | FilingEntryCountOutputTypeCountSettingEntryArgs
    buffingEntries?: boolean | FilingEntryCountOutputTypeCountBuffingEntriesArgs
  }

  // Custom InputTypes
  /**
   * FilingEntryCountOutputType without action
   */
  export type FilingEntryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilingEntryCountOutputType
     */
    select?: FilingEntryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FilingEntryCountOutputType without action
   */
  export type FilingEntryCountOutputTypeCountSettingEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingEntryWhereInput
  }

  /**
   * FilingEntryCountOutputType without action
   */
  export type FilingEntryCountOutputTypeCountBuffingEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuffingEntryWhereInput
  }


  /**
   * Count Type SettingEntryCountOutputType
   */

  export type SettingEntryCountOutputType = {
    buffingEntries: number
  }

  export type SettingEntryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buffingEntries?: boolean | SettingEntryCountOutputTypeCountBuffingEntriesArgs
  }

  // Custom InputTypes
  /**
   * SettingEntryCountOutputType without action
   */
  export type SettingEntryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettingEntryCountOutputType
     */
    select?: SettingEntryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SettingEntryCountOutputType without action
   */
  export type SettingEntryCountOutputTypeCountBuffingEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuffingEntryWhereInput
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
    createdAt: Date | null
    name: string | null
    phoneNumber: string | null
    address: string | null
    email: string | null
  }

  export type AddCustomerMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    phoneNumber: string | null
    address: string | null
    email: string | null
  }

  export type AddCustomerCountAggregateOutputType = {
    id: number
    createdAt: number
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
    createdAt?: true
    name?: true
    phoneNumber?: true
    address?: true
    email?: true
  }

  export type AddCustomerMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    phoneNumber?: true
    address?: true
    email?: true
  }

  export type AddCustomerCountAggregateInputType = {
    id?: true
    createdAt?: true
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
    createdAt: Date
    name: string
    phoneNumber: string | null
    address: string | null
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
    createdAt?: boolean
    name?: boolean
    phoneNumber?: boolean
    address?: boolean
    email?: boolean
    transactions?: boolean | AddCustomer$transactionsArgs<ExtArgs>
    _count?: boolean | AddCustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addCustomer"]>



  export type AddCustomerSelectScalar = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
    phoneNumber?: boolean
    address?: boolean
    email?: boolean
  }

  export type AddCustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "name" | "phoneNumber" | "address" | "email", ExtArgs["result"]["addCustomer"]>
  export type AddCustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | AddCustomer$transactionsArgs<ExtArgs>
    _count?: boolean | AddCustomerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AddCustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AddCustomer"
    objects: {
      transactions: Prisma.$CustomerTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      name: string
      phoneNumber: string | null
      address: string | null
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
    transactions<T extends AddCustomer$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, AddCustomer$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly createdAt: FieldRef<"AddCustomer", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddCustomerInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddCustomerInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddCustomerInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddCustomerInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddCustomerInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddCustomerInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddCustomerInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddCustomerInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddCustomerInclude<ExtArgs> | null
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
   * AddCustomer.transactions
   */
  export type AddCustomer$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTransaction
     */
    select?: CustomerTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTransaction
     */
    omit?: CustomerTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTransactionInclude<ExtArgs> | null
    where?: CustomerTransactionWhereInput
    orderBy?: CustomerTransactionOrderByWithRelationInput | CustomerTransactionOrderByWithRelationInput[]
    cursor?: CustomerTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerTransactionScalarFieldEnum | CustomerTransactionScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddCustomerInclude<ExtArgs> | null
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
    createdAt: Date | null
    name: string | null
    phoneNumber: string | null
    address: string | null
    email: string | null
  }

  export type AddCastingMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    phoneNumber: string | null
    address: string | null
    email: string | null
  }

  export type AddCastingCountAggregateOutputType = {
    id: number
    createdAt: number
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
    createdAt?: true
    name?: true
    phoneNumber?: true
    address?: true
    email?: true
  }

  export type AddCastingMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    phoneNumber?: true
    address?: true
    email?: true
  }

  export type AddCastingCountAggregateInputType = {
    id?: true
    createdAt?: true
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
    createdAt: Date
    name: string
    phoneNumber: string | null
    address: string | null
    email: string | null
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
    createdAt?: boolean
    name?: boolean
    phoneNumber?: boolean
    address?: boolean
    email?: boolean
    entries?: boolean | AddCasting$entriesArgs<ExtArgs>
    castingitems?: boolean | AddCasting$castingitemsArgs<ExtArgs>
    stock?: boolean | AddCasting$stockArgs<ExtArgs>
    _count?: boolean | AddCastingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addCasting"]>



  export type AddCastingSelectScalar = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
    phoneNumber?: boolean
    address?: boolean
    email?: boolean
  }

  export type AddCastingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "name" | "phoneNumber" | "address" | "email", ExtArgs["result"]["addCasting"]>
  export type AddCastingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | AddCasting$entriesArgs<ExtArgs>
    castingitems?: boolean | AddCasting$castingitemsArgs<ExtArgs>
    stock?: boolean | AddCasting$stockArgs<ExtArgs>
    _count?: boolean | AddCastingCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AddCastingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AddCasting"
    objects: {
      entries: Prisma.$CastingEntryPayload<ExtArgs>[]
      castingitems: Prisma.$CastingItemsPayload<ExtArgs>[]
      stock: Prisma.$StockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      name: string
      phoneNumber: string | null
      address: string | null
      email: string | null
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
    entries<T extends AddCasting$entriesArgs<ExtArgs> = {}>(args?: Subset<T, AddCasting$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CastingEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    castingitems<T extends AddCasting$castingitemsArgs<ExtArgs> = {}>(args?: Subset<T, AddCasting$castingitemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CastingItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stock<T extends AddCasting$stockArgs<ExtArgs> = {}>(args?: Subset<T, AddCasting$stockArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly createdAt: FieldRef<"AddCasting", 'DateTime'>
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
   * AddCasting.entries
   */
  export type AddCasting$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CastingEntry
     */
    select?: CastingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CastingEntry
     */
    omit?: CastingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingEntryInclude<ExtArgs> | null
    where?: CastingEntryWhereInput
    orderBy?: CastingEntryOrderByWithRelationInput | CastingEntryOrderByWithRelationInput[]
    cursor?: CastingEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CastingEntryScalarFieldEnum | CastingEntryScalarFieldEnum[]
  }

  /**
   * AddCasting.castingitems
   */
  export type AddCasting$castingitemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CastingItems
     */
    select?: CastingItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CastingItems
     */
    omit?: CastingItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingItemsInclude<ExtArgs> | null
    where?: CastingItemsWhereInput
    orderBy?: CastingItemsOrderByWithRelationInput | CastingItemsOrderByWithRelationInput[]
    cursor?: CastingItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CastingItemsScalarFieldEnum | CastingItemsScalarFieldEnum[]
  }

  /**
   * AddCasting.stock
   */
  export type AddCasting$stockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    where?: StockWhereInput
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    cursor?: StockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
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
    createdAt: Date | null
    name: string | null
    phoneNumber: string | null
    address: string | null
    email: string | null
  }

  export type AddFilingMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    phoneNumber: string | null
    address: string | null
    email: string | null
  }

  export type AddFilingCountAggregateOutputType = {
    id: number
    createdAt: number
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
    createdAt?: true
    name?: true
    phoneNumber?: true
    address?: true
    email?: true
  }

  export type AddFilingMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    phoneNumber?: true
    address?: true
    email?: true
  }

  export type AddFilingCountAggregateInputType = {
    id?: true
    createdAt?: true
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
    createdAt: Date
    name: string
    phoneNumber: string | null
    address: string | null
    email: string | null
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
    createdAt?: boolean
    name?: boolean
    phoneNumber?: boolean
    address?: boolean
    email?: boolean
    filings?: boolean | AddFiling$filingsArgs<ExtArgs>
    _count?: boolean | AddFilingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addFiling"]>



  export type AddFilingSelectScalar = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
    phoneNumber?: boolean
    address?: boolean
    email?: boolean
  }

  export type AddFilingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "name" | "phoneNumber" | "address" | "email", ExtArgs["result"]["addFiling"]>
  export type AddFilingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filings?: boolean | AddFiling$filingsArgs<ExtArgs>
    _count?: boolean | AddFilingCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AddFilingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AddFiling"
    objects: {
      filings: Prisma.$FilingEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      name: string
      phoneNumber: string | null
      address: string | null
      email: string | null
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
    filings<T extends AddFiling$filingsArgs<ExtArgs> = {}>(args?: Subset<T, AddFiling$filingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilingEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly createdAt: FieldRef<"AddFiling", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddFilingInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddFilingInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddFilingInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddFilingInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddFilingInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddFilingInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddFilingInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddFilingInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddFilingInclude<ExtArgs> | null
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
   * AddFiling.filings
   */
  export type AddFiling$filingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilingEntry
     */
    select?: FilingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilingEntry
     */
    omit?: FilingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilingEntryInclude<ExtArgs> | null
    where?: FilingEntryWhereInput
    orderBy?: FilingEntryOrderByWithRelationInput | FilingEntryOrderByWithRelationInput[]
    cursor?: FilingEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilingEntryScalarFieldEnum | FilingEntryScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddFilingInclude<ExtArgs> | null
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
    createdAt: Date | null
    name: string | null
    phoneNumber: string | null
    address: string | null
    email: string | null
  }

  export type AddSettingMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    phoneNumber: string | null
    address: string | null
    email: string | null
  }

  export type AddSettingCountAggregateOutputType = {
    id: number
    createdAt: number
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
    createdAt?: true
    name?: true
    phoneNumber?: true
    address?: true
    email?: true
  }

  export type AddSettingMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    phoneNumber?: true
    address?: true
    email?: true
  }

  export type AddSettingCountAggregateInputType = {
    id?: true
    createdAt?: true
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
    createdAt: Date
    name: string
    phoneNumber: string | null
    address: string | null
    email: string | null
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
    createdAt?: boolean
    name?: boolean
    phoneNumber?: boolean
    address?: boolean
    email?: boolean
    settings?: boolean | AddSetting$settingsArgs<ExtArgs>
    _count?: boolean | AddSettingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addSetting"]>



  export type AddSettingSelectScalar = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
    phoneNumber?: boolean
    address?: boolean
    email?: boolean
  }

  export type AddSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "name" | "phoneNumber" | "address" | "email", ExtArgs["result"]["addSetting"]>
  export type AddSettingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    settings?: boolean | AddSetting$settingsArgs<ExtArgs>
    _count?: boolean | AddSettingCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AddSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AddSetting"
    objects: {
      settings: Prisma.$SettingEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      name: string
      phoneNumber: string | null
      address: string | null
      email: string | null
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
    settings<T extends AddSetting$settingsArgs<ExtArgs> = {}>(args?: Subset<T, AddSetting$settingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly createdAt: FieldRef<"AddSetting", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddSettingInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddSettingInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddSettingInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddSettingInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddSettingInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddSettingInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddSettingInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddSettingInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddSettingInclude<ExtArgs> | null
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
   * AddSetting.settings
   */
  export type AddSetting$settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettingEntry
     */
    select?: SettingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SettingEntry
     */
    omit?: SettingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingEntryInclude<ExtArgs> | null
    where?: SettingEntryWhereInput
    orderBy?: SettingEntryOrderByWithRelationInput | SettingEntryOrderByWithRelationInput[]
    cursor?: SettingEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SettingEntryScalarFieldEnum | SettingEntryScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddSettingInclude<ExtArgs> | null
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
    createdAt: Date | null
    name: string | null
    phoneNumber: string | null
    address: string | null
    email: string | null
  }

  export type AddBuffingMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    phoneNumber: string | null
    address: string | null
    email: string | null
  }

  export type AddBuffingCountAggregateOutputType = {
    id: number
    createdAt: number
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
    createdAt?: true
    name?: true
    phoneNumber?: true
    address?: true
    email?: true
  }

  export type AddBuffingMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    phoneNumber?: true
    address?: true
    email?: true
  }

  export type AddBuffingCountAggregateInputType = {
    id?: true
    createdAt?: true
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
    createdAt: Date
    name: string
    phoneNumber: string | null
    address: string | null
    email: string | null
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
    createdAt?: boolean
    name?: boolean
    phoneNumber?: boolean
    address?: boolean
    email?: boolean
    buffings?: boolean | AddBuffing$buffingsArgs<ExtArgs>
    _count?: boolean | AddBuffingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addBuffing"]>



  export type AddBuffingSelectScalar = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
    phoneNumber?: boolean
    address?: boolean
    email?: boolean
  }

  export type AddBuffingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "name" | "phoneNumber" | "address" | "email", ExtArgs["result"]["addBuffing"]>
  export type AddBuffingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buffings?: boolean | AddBuffing$buffingsArgs<ExtArgs>
    _count?: boolean | AddBuffingCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AddBuffingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AddBuffing"
    objects: {
      buffings: Prisma.$BuffingEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      name: string
      phoneNumber: string | null
      address: string | null
      email: string | null
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
    buffings<T extends AddBuffing$buffingsArgs<ExtArgs> = {}>(args?: Subset<T, AddBuffing$buffingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuffingEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly createdAt: FieldRef<"AddBuffing", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddBuffingInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddBuffingInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddBuffingInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddBuffingInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddBuffingInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddBuffingInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddBuffingInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddBuffingInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddBuffingInclude<ExtArgs> | null
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
   * AddBuffing.buffings
   */
  export type AddBuffing$buffingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuffingEntry
     */
    select?: BuffingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuffingEntry
     */
    omit?: BuffingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuffingEntryInclude<ExtArgs> | null
    where?: BuffingEntryWhereInput
    orderBy?: BuffingEntryOrderByWithRelationInput | BuffingEntryOrderByWithRelationInput[]
    cursor?: BuffingEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BuffingEntryScalarFieldEnum | BuffingEntryScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddBuffingInclude<ExtArgs> | null
  }


  /**
   * Model AddSupplierItem
   */

  export type AggregateAddSupplierItem = {
    _count: AddSupplierItemCountAggregateOutputType | null
    _avg: AddSupplierItemAvgAggregateOutputType | null
    _sum: AddSupplierItemSumAggregateOutputType | null
    _min: AddSupplierItemMinAggregateOutputType | null
    _max: AddSupplierItemMaxAggregateOutputType | null
  }

  export type AddSupplierItemAvgAggregateOutputType = {
    id: number | null
  }

  export type AddSupplierItemSumAggregateOutputType = {
    id: number | null
  }

  export type AddSupplierItemMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    address: string | null
  }

  export type AddSupplierItemMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    address: string | null
  }

  export type AddSupplierItemCountAggregateOutputType = {
    id: number
    createdAt: number
    name: number
    email: number
    phoneNumber: number
    address: number
    _all: number
  }


  export type AddSupplierItemAvgAggregateInputType = {
    id?: true
  }

  export type AddSupplierItemSumAggregateInputType = {
    id?: true
  }

  export type AddSupplierItemMinAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    email?: true
    phoneNumber?: true
    address?: true
  }

  export type AddSupplierItemMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    email?: true
    phoneNumber?: true
    address?: true
  }

  export type AddSupplierItemCountAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    email?: true
    phoneNumber?: true
    address?: true
    _all?: true
  }

  export type AddSupplierItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddSupplierItem to aggregate.
     */
    where?: AddSupplierItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddSupplierItems to fetch.
     */
    orderBy?: AddSupplierItemOrderByWithRelationInput | AddSupplierItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddSupplierItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddSupplierItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddSupplierItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AddSupplierItems
    **/
    _count?: true | AddSupplierItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddSupplierItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddSupplierItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddSupplierItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddSupplierItemMaxAggregateInputType
  }

  export type GetAddSupplierItemAggregateType<T extends AddSupplierItemAggregateArgs> = {
        [P in keyof T & keyof AggregateAddSupplierItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddSupplierItem[P]>
      : GetScalarType<T[P], AggregateAddSupplierItem[P]>
  }




  export type AddSupplierItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddSupplierItemWhereInput
    orderBy?: AddSupplierItemOrderByWithAggregationInput | AddSupplierItemOrderByWithAggregationInput[]
    by: AddSupplierItemScalarFieldEnum[] | AddSupplierItemScalarFieldEnum
    having?: AddSupplierItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddSupplierItemCountAggregateInputType | true
    _avg?: AddSupplierItemAvgAggregateInputType
    _sum?: AddSupplierItemSumAggregateInputType
    _min?: AddSupplierItemMinAggregateInputType
    _max?: AddSupplierItemMaxAggregateInputType
  }

  export type AddSupplierItemGroupByOutputType = {
    id: number
    createdAt: Date
    name: string
    email: string | null
    phoneNumber: string | null
    address: string | null
    _count: AddSupplierItemCountAggregateOutputType | null
    _avg: AddSupplierItemAvgAggregateOutputType | null
    _sum: AddSupplierItemSumAggregateOutputType | null
    _min: AddSupplierItemMinAggregateOutputType | null
    _max: AddSupplierItemMaxAggregateOutputType | null
  }

  type GetAddSupplierItemGroupByPayload<T extends AddSupplierItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddSupplierItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddSupplierItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddSupplierItemGroupByOutputType[P]>
            : GetScalarType<T[P], AddSupplierItemGroupByOutputType[P]>
        }
      >
    >


  export type AddSupplierItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    address?: boolean
  }, ExtArgs["result"]["addSupplierItem"]>



  export type AddSupplierItemSelectScalar = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    address?: boolean
  }

  export type AddSupplierItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "name" | "email" | "phoneNumber" | "address", ExtArgs["result"]["addSupplierItem"]>

  export type $AddSupplierItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AddSupplierItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      name: string
      email: string | null
      phoneNumber: string | null
      address: string | null
    }, ExtArgs["result"]["addSupplierItem"]>
    composites: {}
  }

  type AddSupplierItemGetPayload<S extends boolean | null | undefined | AddSupplierItemDefaultArgs> = $Result.GetResult<Prisma.$AddSupplierItemPayload, S>

  type AddSupplierItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddSupplierItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddSupplierItemCountAggregateInputType | true
    }

  export interface AddSupplierItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AddSupplierItem'], meta: { name: 'AddSupplierItem' } }
    /**
     * Find zero or one AddSupplierItem that matches the filter.
     * @param {AddSupplierItemFindUniqueArgs} args - Arguments to find a AddSupplierItem
     * @example
     * // Get one AddSupplierItem
     * const addSupplierItem = await prisma.addSupplierItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddSupplierItemFindUniqueArgs>(args: SelectSubset<T, AddSupplierItemFindUniqueArgs<ExtArgs>>): Prisma__AddSupplierItemClient<$Result.GetResult<Prisma.$AddSupplierItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AddSupplierItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddSupplierItemFindUniqueOrThrowArgs} args - Arguments to find a AddSupplierItem
     * @example
     * // Get one AddSupplierItem
     * const addSupplierItem = await prisma.addSupplierItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddSupplierItemFindUniqueOrThrowArgs>(args: SelectSubset<T, AddSupplierItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddSupplierItemClient<$Result.GetResult<Prisma.$AddSupplierItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddSupplierItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddSupplierItemFindFirstArgs} args - Arguments to find a AddSupplierItem
     * @example
     * // Get one AddSupplierItem
     * const addSupplierItem = await prisma.addSupplierItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddSupplierItemFindFirstArgs>(args?: SelectSubset<T, AddSupplierItemFindFirstArgs<ExtArgs>>): Prisma__AddSupplierItemClient<$Result.GetResult<Prisma.$AddSupplierItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddSupplierItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddSupplierItemFindFirstOrThrowArgs} args - Arguments to find a AddSupplierItem
     * @example
     * // Get one AddSupplierItem
     * const addSupplierItem = await prisma.addSupplierItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddSupplierItemFindFirstOrThrowArgs>(args?: SelectSubset<T, AddSupplierItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddSupplierItemClient<$Result.GetResult<Prisma.$AddSupplierItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AddSupplierItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddSupplierItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AddSupplierItems
     * const addSupplierItems = await prisma.addSupplierItem.findMany()
     * 
     * // Get first 10 AddSupplierItems
     * const addSupplierItems = await prisma.addSupplierItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addSupplierItemWithIdOnly = await prisma.addSupplierItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddSupplierItemFindManyArgs>(args?: SelectSubset<T, AddSupplierItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddSupplierItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AddSupplierItem.
     * @param {AddSupplierItemCreateArgs} args - Arguments to create a AddSupplierItem.
     * @example
     * // Create one AddSupplierItem
     * const AddSupplierItem = await prisma.addSupplierItem.create({
     *   data: {
     *     // ... data to create a AddSupplierItem
     *   }
     * })
     * 
     */
    create<T extends AddSupplierItemCreateArgs>(args: SelectSubset<T, AddSupplierItemCreateArgs<ExtArgs>>): Prisma__AddSupplierItemClient<$Result.GetResult<Prisma.$AddSupplierItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AddSupplierItems.
     * @param {AddSupplierItemCreateManyArgs} args - Arguments to create many AddSupplierItems.
     * @example
     * // Create many AddSupplierItems
     * const addSupplierItem = await prisma.addSupplierItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddSupplierItemCreateManyArgs>(args?: SelectSubset<T, AddSupplierItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AddSupplierItem.
     * @param {AddSupplierItemDeleteArgs} args - Arguments to delete one AddSupplierItem.
     * @example
     * // Delete one AddSupplierItem
     * const AddSupplierItem = await prisma.addSupplierItem.delete({
     *   where: {
     *     // ... filter to delete one AddSupplierItem
     *   }
     * })
     * 
     */
    delete<T extends AddSupplierItemDeleteArgs>(args: SelectSubset<T, AddSupplierItemDeleteArgs<ExtArgs>>): Prisma__AddSupplierItemClient<$Result.GetResult<Prisma.$AddSupplierItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AddSupplierItem.
     * @param {AddSupplierItemUpdateArgs} args - Arguments to update one AddSupplierItem.
     * @example
     * // Update one AddSupplierItem
     * const addSupplierItem = await prisma.addSupplierItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddSupplierItemUpdateArgs>(args: SelectSubset<T, AddSupplierItemUpdateArgs<ExtArgs>>): Prisma__AddSupplierItemClient<$Result.GetResult<Prisma.$AddSupplierItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AddSupplierItems.
     * @param {AddSupplierItemDeleteManyArgs} args - Arguments to filter AddSupplierItems to delete.
     * @example
     * // Delete a few AddSupplierItems
     * const { count } = await prisma.addSupplierItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddSupplierItemDeleteManyArgs>(args?: SelectSubset<T, AddSupplierItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AddSupplierItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddSupplierItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AddSupplierItems
     * const addSupplierItem = await prisma.addSupplierItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddSupplierItemUpdateManyArgs>(args: SelectSubset<T, AddSupplierItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AddSupplierItem.
     * @param {AddSupplierItemUpsertArgs} args - Arguments to update or create a AddSupplierItem.
     * @example
     * // Update or create a AddSupplierItem
     * const addSupplierItem = await prisma.addSupplierItem.upsert({
     *   create: {
     *     // ... data to create a AddSupplierItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AddSupplierItem we want to update
     *   }
     * })
     */
    upsert<T extends AddSupplierItemUpsertArgs>(args: SelectSubset<T, AddSupplierItemUpsertArgs<ExtArgs>>): Prisma__AddSupplierItemClient<$Result.GetResult<Prisma.$AddSupplierItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AddSupplierItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddSupplierItemCountArgs} args - Arguments to filter AddSupplierItems to count.
     * @example
     * // Count the number of AddSupplierItems
     * const count = await prisma.addSupplierItem.count({
     *   where: {
     *     // ... the filter for the AddSupplierItems we want to count
     *   }
     * })
    **/
    count<T extends AddSupplierItemCountArgs>(
      args?: Subset<T, AddSupplierItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddSupplierItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AddSupplierItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddSupplierItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddSupplierItemAggregateArgs>(args: Subset<T, AddSupplierItemAggregateArgs>): Prisma.PrismaPromise<GetAddSupplierItemAggregateType<T>>

    /**
     * Group by AddSupplierItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddSupplierItemGroupByArgs} args - Group by arguments.
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
      T extends AddSupplierItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddSupplierItemGroupByArgs['orderBy'] }
        : { orderBy?: AddSupplierItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddSupplierItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddSupplierItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AddSupplierItem model
   */
  readonly fields: AddSupplierItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AddSupplierItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddSupplierItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AddSupplierItem model
   */
  interface AddSupplierItemFieldRefs {
    readonly id: FieldRef<"AddSupplierItem", 'Int'>
    readonly createdAt: FieldRef<"AddSupplierItem", 'DateTime'>
    readonly name: FieldRef<"AddSupplierItem", 'String'>
    readonly email: FieldRef<"AddSupplierItem", 'String'>
    readonly phoneNumber: FieldRef<"AddSupplierItem", 'String'>
    readonly address: FieldRef<"AddSupplierItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AddSupplierItem findUnique
   */
  export type AddSupplierItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddSupplierItem
     */
    select?: AddSupplierItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddSupplierItem
     */
    omit?: AddSupplierItemOmit<ExtArgs> | null
    /**
     * Filter, which AddSupplierItem to fetch.
     */
    where: AddSupplierItemWhereUniqueInput
  }

  /**
   * AddSupplierItem findUniqueOrThrow
   */
  export type AddSupplierItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddSupplierItem
     */
    select?: AddSupplierItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddSupplierItem
     */
    omit?: AddSupplierItemOmit<ExtArgs> | null
    /**
     * Filter, which AddSupplierItem to fetch.
     */
    where: AddSupplierItemWhereUniqueInput
  }

  /**
   * AddSupplierItem findFirst
   */
  export type AddSupplierItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddSupplierItem
     */
    select?: AddSupplierItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddSupplierItem
     */
    omit?: AddSupplierItemOmit<ExtArgs> | null
    /**
     * Filter, which AddSupplierItem to fetch.
     */
    where?: AddSupplierItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddSupplierItems to fetch.
     */
    orderBy?: AddSupplierItemOrderByWithRelationInput | AddSupplierItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddSupplierItems.
     */
    cursor?: AddSupplierItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddSupplierItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddSupplierItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddSupplierItems.
     */
    distinct?: AddSupplierItemScalarFieldEnum | AddSupplierItemScalarFieldEnum[]
  }

  /**
   * AddSupplierItem findFirstOrThrow
   */
  export type AddSupplierItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddSupplierItem
     */
    select?: AddSupplierItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddSupplierItem
     */
    omit?: AddSupplierItemOmit<ExtArgs> | null
    /**
     * Filter, which AddSupplierItem to fetch.
     */
    where?: AddSupplierItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddSupplierItems to fetch.
     */
    orderBy?: AddSupplierItemOrderByWithRelationInput | AddSupplierItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddSupplierItems.
     */
    cursor?: AddSupplierItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddSupplierItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddSupplierItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddSupplierItems.
     */
    distinct?: AddSupplierItemScalarFieldEnum | AddSupplierItemScalarFieldEnum[]
  }

  /**
   * AddSupplierItem findMany
   */
  export type AddSupplierItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddSupplierItem
     */
    select?: AddSupplierItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddSupplierItem
     */
    omit?: AddSupplierItemOmit<ExtArgs> | null
    /**
     * Filter, which AddSupplierItems to fetch.
     */
    where?: AddSupplierItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddSupplierItems to fetch.
     */
    orderBy?: AddSupplierItemOrderByWithRelationInput | AddSupplierItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AddSupplierItems.
     */
    cursor?: AddSupplierItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddSupplierItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddSupplierItems.
     */
    skip?: number
    distinct?: AddSupplierItemScalarFieldEnum | AddSupplierItemScalarFieldEnum[]
  }

  /**
   * AddSupplierItem create
   */
  export type AddSupplierItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddSupplierItem
     */
    select?: AddSupplierItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddSupplierItem
     */
    omit?: AddSupplierItemOmit<ExtArgs> | null
    /**
     * The data needed to create a AddSupplierItem.
     */
    data: XOR<AddSupplierItemCreateInput, AddSupplierItemUncheckedCreateInput>
  }

  /**
   * AddSupplierItem createMany
   */
  export type AddSupplierItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AddSupplierItems.
     */
    data: AddSupplierItemCreateManyInput | AddSupplierItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AddSupplierItem update
   */
  export type AddSupplierItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddSupplierItem
     */
    select?: AddSupplierItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddSupplierItem
     */
    omit?: AddSupplierItemOmit<ExtArgs> | null
    /**
     * The data needed to update a AddSupplierItem.
     */
    data: XOR<AddSupplierItemUpdateInput, AddSupplierItemUncheckedUpdateInput>
    /**
     * Choose, which AddSupplierItem to update.
     */
    where: AddSupplierItemWhereUniqueInput
  }

  /**
   * AddSupplierItem updateMany
   */
  export type AddSupplierItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AddSupplierItems.
     */
    data: XOR<AddSupplierItemUpdateManyMutationInput, AddSupplierItemUncheckedUpdateManyInput>
    /**
     * Filter which AddSupplierItems to update
     */
    where?: AddSupplierItemWhereInput
    /**
     * Limit how many AddSupplierItems to update.
     */
    limit?: number
  }

  /**
   * AddSupplierItem upsert
   */
  export type AddSupplierItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddSupplierItem
     */
    select?: AddSupplierItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddSupplierItem
     */
    omit?: AddSupplierItemOmit<ExtArgs> | null
    /**
     * The filter to search for the AddSupplierItem to update in case it exists.
     */
    where: AddSupplierItemWhereUniqueInput
    /**
     * In case the AddSupplierItem found by the `where` argument doesn't exist, create a new AddSupplierItem with this data.
     */
    create: XOR<AddSupplierItemCreateInput, AddSupplierItemUncheckedCreateInput>
    /**
     * In case the AddSupplierItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddSupplierItemUpdateInput, AddSupplierItemUncheckedUpdateInput>
  }

  /**
   * AddSupplierItem delete
   */
  export type AddSupplierItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddSupplierItem
     */
    select?: AddSupplierItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddSupplierItem
     */
    omit?: AddSupplierItemOmit<ExtArgs> | null
    /**
     * Filter which AddSupplierItem to delete.
     */
    where: AddSupplierItemWhereUniqueInput
  }

  /**
   * AddSupplierItem deleteMany
   */
  export type AddSupplierItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddSupplierItems to delete
     */
    where?: AddSupplierItemWhereInput
    /**
     * Limit how many AddSupplierItems to delete.
     */
    limit?: number
  }

  /**
   * AddSupplierItem without action
   */
  export type AddSupplierItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddSupplierItem
     */
    select?: AddSupplierItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddSupplierItem
     */
    omit?: AddSupplierItemOmit<ExtArgs> | null
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
    goldWeight: number | null
    goldTouch: number | null
    goldPurity: number | null
    goldRate: number | null
    goldtotalValue: number | null
    silverWeight: number | null
    silverTouch: number | null
    silverPurity: number | null
    silverRate: number | null
    silvertotalValue: number | null
  }

  export type AddPurchaseStockSumAggregateOutputType = {
    id: number | null
    goldWeight: number | null
    goldTouch: number | null
    goldPurity: number | null
    goldRate: number | null
    goldtotalValue: number | null
    silverWeight: number | null
    silverTouch: number | null
    silverPurity: number | null
    silverRate: number | null
    silvertotalValue: number | null
  }

  export type AddPurchaseStockMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    item: $Enums.ITEMTYPE | null
    goldWeight: number | null
    goldTouch: number | null
    goldPurity: number | null
    goldRate: number | null
    goldtotalValue: number | null
    silverWeight: number | null
    silverTouch: number | null
    silverPurity: number | null
    silverRate: number | null
    silvertotalValue: number | null
  }

  export type AddPurchaseStockMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    item: $Enums.ITEMTYPE | null
    goldWeight: number | null
    goldTouch: number | null
    goldPurity: number | null
    goldRate: number | null
    goldtotalValue: number | null
    silverWeight: number | null
    silverTouch: number | null
    silverPurity: number | null
    silverRate: number | null
    silvertotalValue: number | null
  }

  export type AddPurchaseStockCountAggregateOutputType = {
    id: number
    createdAt: number
    name: number
    item: number
    goldWeight: number
    goldTouch: number
    goldPurity: number
    goldRate: number
    goldtotalValue: number
    silverWeight: number
    silverTouch: number
    silverPurity: number
    silverRate: number
    silvertotalValue: number
    _all: number
  }


  export type AddPurchaseStockAvgAggregateInputType = {
    id?: true
    goldWeight?: true
    goldTouch?: true
    goldPurity?: true
    goldRate?: true
    goldtotalValue?: true
    silverWeight?: true
    silverTouch?: true
    silverPurity?: true
    silverRate?: true
    silvertotalValue?: true
  }

  export type AddPurchaseStockSumAggregateInputType = {
    id?: true
    goldWeight?: true
    goldTouch?: true
    goldPurity?: true
    goldRate?: true
    goldtotalValue?: true
    silverWeight?: true
    silverTouch?: true
    silverPurity?: true
    silverRate?: true
    silvertotalValue?: true
  }

  export type AddPurchaseStockMinAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    item?: true
    goldWeight?: true
    goldTouch?: true
    goldPurity?: true
    goldRate?: true
    goldtotalValue?: true
    silverWeight?: true
    silverTouch?: true
    silverPurity?: true
    silverRate?: true
    silvertotalValue?: true
  }

  export type AddPurchaseStockMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    item?: true
    goldWeight?: true
    goldTouch?: true
    goldPurity?: true
    goldRate?: true
    goldtotalValue?: true
    silverWeight?: true
    silverTouch?: true
    silverPurity?: true
    silverRate?: true
    silvertotalValue?: true
  }

  export type AddPurchaseStockCountAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    item?: true
    goldWeight?: true
    goldTouch?: true
    goldPurity?: true
    goldRate?: true
    goldtotalValue?: true
    silverWeight?: true
    silverTouch?: true
    silverPurity?: true
    silverRate?: true
    silvertotalValue?: true
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
    createdAt: Date
    name: string
    item: $Enums.ITEMTYPE
    goldWeight: number | null
    goldTouch: number | null
    goldPurity: number | null
    goldRate: number | null
    goldtotalValue: number | null
    silverWeight: number | null
    silverTouch: number | null
    silverPurity: number | null
    silverRate: number | null
    silvertotalValue: number | null
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
    createdAt?: boolean
    name?: boolean
    item?: boolean
    goldWeight?: boolean
    goldTouch?: boolean
    goldPurity?: boolean
    goldRate?: boolean
    goldtotalValue?: boolean
    silverWeight?: boolean
    silverTouch?: boolean
    silverPurity?: boolean
    silverRate?: boolean
    silvertotalValue?: boolean
  }, ExtArgs["result"]["addPurchaseStock"]>



  export type AddPurchaseStockSelectScalar = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
    item?: boolean
    goldWeight?: boolean
    goldTouch?: boolean
    goldPurity?: boolean
    goldRate?: boolean
    goldtotalValue?: boolean
    silverWeight?: boolean
    silverTouch?: boolean
    silverPurity?: boolean
    silverRate?: boolean
    silvertotalValue?: boolean
  }

  export type AddPurchaseStockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "name" | "item" | "goldWeight" | "goldTouch" | "goldPurity" | "goldRate" | "goldtotalValue" | "silverWeight" | "silverTouch" | "silverPurity" | "silverRate" | "silvertotalValue", ExtArgs["result"]["addPurchaseStock"]>

  export type $AddPurchaseStockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AddPurchaseStock"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      name: string
      item: $Enums.ITEMTYPE
      goldWeight: number | null
      goldTouch: number | null
      goldPurity: number | null
      goldRate: number | null
      goldtotalValue: number | null
      silverWeight: number | null
      silverTouch: number | null
      silverPurity: number | null
      silverRate: number | null
      silvertotalValue: number | null
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
    readonly createdAt: FieldRef<"AddPurchaseStock", 'DateTime'>
    readonly name: FieldRef<"AddPurchaseStock", 'String'>
    readonly item: FieldRef<"AddPurchaseStock", 'ITEMTYPE'>
    readonly goldWeight: FieldRef<"AddPurchaseStock", 'Int'>
    readonly goldTouch: FieldRef<"AddPurchaseStock", 'Float'>
    readonly goldPurity: FieldRef<"AddPurchaseStock", 'Float'>
    readonly goldRate: FieldRef<"AddPurchaseStock", 'Float'>
    readonly goldtotalValue: FieldRef<"AddPurchaseStock", 'Float'>
    readonly silverWeight: FieldRef<"AddPurchaseStock", 'Int'>
    readonly silverTouch: FieldRef<"AddPurchaseStock", 'Float'>
    readonly silverPurity: FieldRef<"AddPurchaseStock", 'Float'>
    readonly silverRate: FieldRef<"AddPurchaseStock", 'Float'>
    readonly silvertotalValue: FieldRef<"AddPurchaseStock", 'Float'>
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
   * Model CustomerTransaction
   */

  export type AggregateCustomerTransaction = {
    _count: CustomerTransactionCountAggregateOutputType | null
    _avg: CustomerTransactionAvgAggregateOutputType | null
    _sum: CustomerTransactionSumAggregateOutputType | null
    _min: CustomerTransactionMinAggregateOutputType | null
    _max: CustomerTransactionMaxAggregateOutputType | null
  }

  export type CustomerTransactionAvgAggregateOutputType = {
    id: number | null
    value: number | null
    touch: number | null
    purity: number | null
    goldRate: number | null
    customerId: number | null
  }

  export type CustomerTransactionSumAggregateOutputType = {
    id: number | null
    value: number | null
    touch: number | null
    purity: number | null
    goldRate: number | null
    customerId: number | null
  }

  export type CustomerTransactionMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    date: Date | null
    value: number | null
    type: string | null
    touch: number | null
    purity: number | null
    goldRate: number | null
    customerId: number | null
  }

  export type CustomerTransactionMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    date: Date | null
    value: number | null
    type: string | null
    touch: number | null
    purity: number | null
    goldRate: number | null
    customerId: number | null
  }

  export type CustomerTransactionCountAggregateOutputType = {
    id: number
    createdAt: number
    date: number
    value: number
    type: number
    touch: number
    purity: number
    goldRate: number
    customerId: number
    _all: number
  }


  export type CustomerTransactionAvgAggregateInputType = {
    id?: true
    value?: true
    touch?: true
    purity?: true
    goldRate?: true
    customerId?: true
  }

  export type CustomerTransactionSumAggregateInputType = {
    id?: true
    value?: true
    touch?: true
    purity?: true
    goldRate?: true
    customerId?: true
  }

  export type CustomerTransactionMinAggregateInputType = {
    id?: true
    createdAt?: true
    date?: true
    value?: true
    type?: true
    touch?: true
    purity?: true
    goldRate?: true
    customerId?: true
  }

  export type CustomerTransactionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    date?: true
    value?: true
    type?: true
    touch?: true
    purity?: true
    goldRate?: true
    customerId?: true
  }

  export type CustomerTransactionCountAggregateInputType = {
    id?: true
    createdAt?: true
    date?: true
    value?: true
    type?: true
    touch?: true
    purity?: true
    goldRate?: true
    customerId?: true
    _all?: true
  }

  export type CustomerTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerTransaction to aggregate.
     */
    where?: CustomerTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerTransactions to fetch.
     */
    orderBy?: CustomerTransactionOrderByWithRelationInput | CustomerTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerTransactions
    **/
    _count?: true | CustomerTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerTransactionMaxAggregateInputType
  }

  export type GetCustomerTransactionAggregateType<T extends CustomerTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerTransaction[P]>
      : GetScalarType<T[P], AggregateCustomerTransaction[P]>
  }




  export type CustomerTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerTransactionWhereInput
    orderBy?: CustomerTransactionOrderByWithAggregationInput | CustomerTransactionOrderByWithAggregationInput[]
    by: CustomerTransactionScalarFieldEnum[] | CustomerTransactionScalarFieldEnum
    having?: CustomerTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerTransactionCountAggregateInputType | true
    _avg?: CustomerTransactionAvgAggregateInputType
    _sum?: CustomerTransactionSumAggregateInputType
    _min?: CustomerTransactionMinAggregateInputType
    _max?: CustomerTransactionMaxAggregateInputType
  }

  export type CustomerTransactionGroupByOutputType = {
    id: number
    createdAt: Date
    date: Date
    value: number
    type: string
    touch: number | null
    purity: number | null
    goldRate: number | null
    customerId: number
    _count: CustomerTransactionCountAggregateOutputType | null
    _avg: CustomerTransactionAvgAggregateOutputType | null
    _sum: CustomerTransactionSumAggregateOutputType | null
    _min: CustomerTransactionMinAggregateOutputType | null
    _max: CustomerTransactionMaxAggregateOutputType | null
  }

  type GetCustomerTransactionGroupByPayload<T extends CustomerTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerTransactionGroupByOutputType[P]>
        }
      >
    >


  export type CustomerTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    date?: boolean
    value?: boolean
    type?: boolean
    touch?: boolean
    purity?: boolean
    goldRate?: boolean
    customerId?: boolean
    customer?: boolean | AddCustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerTransaction"]>



  export type CustomerTransactionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    date?: boolean
    value?: boolean
    type?: boolean
    touch?: boolean
    purity?: boolean
    goldRate?: boolean
    customerId?: boolean
  }

  export type CustomerTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "date" | "value" | "type" | "touch" | "purity" | "goldRate" | "customerId", ExtArgs["result"]["customerTransaction"]>
  export type CustomerTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | AddCustomerDefaultArgs<ExtArgs>
  }

  export type $CustomerTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerTransaction"
    objects: {
      customer: Prisma.$AddCustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      date: Date
      value: number
      type: string
      touch: number | null
      purity: number | null
      goldRate: number | null
      customerId: number
    }, ExtArgs["result"]["customerTransaction"]>
    composites: {}
  }

  type CustomerTransactionGetPayload<S extends boolean | null | undefined | CustomerTransactionDefaultArgs> = $Result.GetResult<Prisma.$CustomerTransactionPayload, S>

  type CustomerTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerTransactionCountAggregateInputType | true
    }

  export interface CustomerTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerTransaction'], meta: { name: 'CustomerTransaction' } }
    /**
     * Find zero or one CustomerTransaction that matches the filter.
     * @param {CustomerTransactionFindUniqueArgs} args - Arguments to find a CustomerTransaction
     * @example
     * // Get one CustomerTransaction
     * const customerTransaction = await prisma.customerTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerTransactionFindUniqueArgs>(args: SelectSubset<T, CustomerTransactionFindUniqueArgs<ExtArgs>>): Prisma__CustomerTransactionClient<$Result.GetResult<Prisma.$CustomerTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomerTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerTransactionFindUniqueOrThrowArgs} args - Arguments to find a CustomerTransaction
     * @example
     * // Get one CustomerTransaction
     * const customerTransaction = await prisma.customerTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerTransactionClient<$Result.GetResult<Prisma.$CustomerTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerTransactionFindFirstArgs} args - Arguments to find a CustomerTransaction
     * @example
     * // Get one CustomerTransaction
     * const customerTransaction = await prisma.customerTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerTransactionFindFirstArgs>(args?: SelectSubset<T, CustomerTransactionFindFirstArgs<ExtArgs>>): Prisma__CustomerTransactionClient<$Result.GetResult<Prisma.$CustomerTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerTransactionFindFirstOrThrowArgs} args - Arguments to find a CustomerTransaction
     * @example
     * // Get one CustomerTransaction
     * const customerTransaction = await prisma.customerTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerTransactionClient<$Result.GetResult<Prisma.$CustomerTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomerTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerTransactions
     * const customerTransactions = await prisma.customerTransaction.findMany()
     * 
     * // Get first 10 CustomerTransactions
     * const customerTransactions = await prisma.customerTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerTransactionWithIdOnly = await prisma.customerTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerTransactionFindManyArgs>(args?: SelectSubset<T, CustomerTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomerTransaction.
     * @param {CustomerTransactionCreateArgs} args - Arguments to create a CustomerTransaction.
     * @example
     * // Create one CustomerTransaction
     * const CustomerTransaction = await prisma.customerTransaction.create({
     *   data: {
     *     // ... data to create a CustomerTransaction
     *   }
     * })
     * 
     */
    create<T extends CustomerTransactionCreateArgs>(args: SelectSubset<T, CustomerTransactionCreateArgs<ExtArgs>>): Prisma__CustomerTransactionClient<$Result.GetResult<Prisma.$CustomerTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomerTransactions.
     * @param {CustomerTransactionCreateManyArgs} args - Arguments to create many CustomerTransactions.
     * @example
     * // Create many CustomerTransactions
     * const customerTransaction = await prisma.customerTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerTransactionCreateManyArgs>(args?: SelectSubset<T, CustomerTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CustomerTransaction.
     * @param {CustomerTransactionDeleteArgs} args - Arguments to delete one CustomerTransaction.
     * @example
     * // Delete one CustomerTransaction
     * const CustomerTransaction = await prisma.customerTransaction.delete({
     *   where: {
     *     // ... filter to delete one CustomerTransaction
     *   }
     * })
     * 
     */
    delete<T extends CustomerTransactionDeleteArgs>(args: SelectSubset<T, CustomerTransactionDeleteArgs<ExtArgs>>): Prisma__CustomerTransactionClient<$Result.GetResult<Prisma.$CustomerTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomerTransaction.
     * @param {CustomerTransactionUpdateArgs} args - Arguments to update one CustomerTransaction.
     * @example
     * // Update one CustomerTransaction
     * const customerTransaction = await prisma.customerTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerTransactionUpdateArgs>(args: SelectSubset<T, CustomerTransactionUpdateArgs<ExtArgs>>): Prisma__CustomerTransactionClient<$Result.GetResult<Prisma.$CustomerTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomerTransactions.
     * @param {CustomerTransactionDeleteManyArgs} args - Arguments to filter CustomerTransactions to delete.
     * @example
     * // Delete a few CustomerTransactions
     * const { count } = await prisma.customerTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerTransactionDeleteManyArgs>(args?: SelectSubset<T, CustomerTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerTransactions
     * const customerTransaction = await prisma.customerTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerTransactionUpdateManyArgs>(args: SelectSubset<T, CustomerTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustomerTransaction.
     * @param {CustomerTransactionUpsertArgs} args - Arguments to update or create a CustomerTransaction.
     * @example
     * // Update or create a CustomerTransaction
     * const customerTransaction = await prisma.customerTransaction.upsert({
     *   create: {
     *     // ... data to create a CustomerTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerTransaction we want to update
     *   }
     * })
     */
    upsert<T extends CustomerTransactionUpsertArgs>(args: SelectSubset<T, CustomerTransactionUpsertArgs<ExtArgs>>): Prisma__CustomerTransactionClient<$Result.GetResult<Prisma.$CustomerTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomerTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerTransactionCountArgs} args - Arguments to filter CustomerTransactions to count.
     * @example
     * // Count the number of CustomerTransactions
     * const count = await prisma.customerTransaction.count({
     *   where: {
     *     // ... the filter for the CustomerTransactions we want to count
     *   }
     * })
    **/
    count<T extends CustomerTransactionCountArgs>(
      args?: Subset<T, CustomerTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerTransactionAggregateArgs>(args: Subset<T, CustomerTransactionAggregateArgs>): Prisma.PrismaPromise<GetCustomerTransactionAggregateType<T>>

    /**
     * Group by CustomerTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerTransactionGroupByArgs} args - Group by arguments.
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
      T extends CustomerTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerTransactionGroupByArgs['orderBy'] }
        : { orderBy?: CustomerTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerTransaction model
   */
  readonly fields: CustomerTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends AddCustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddCustomerDefaultArgs<ExtArgs>>): Prisma__AddCustomerClient<$Result.GetResult<Prisma.$AddCustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CustomerTransaction model
   */
  interface CustomerTransactionFieldRefs {
    readonly id: FieldRef<"CustomerTransaction", 'Int'>
    readonly createdAt: FieldRef<"CustomerTransaction", 'DateTime'>
    readonly date: FieldRef<"CustomerTransaction", 'DateTime'>
    readonly value: FieldRef<"CustomerTransaction", 'Float'>
    readonly type: FieldRef<"CustomerTransaction", 'String'>
    readonly touch: FieldRef<"CustomerTransaction", 'Float'>
    readonly purity: FieldRef<"CustomerTransaction", 'Float'>
    readonly goldRate: FieldRef<"CustomerTransaction", 'Float'>
    readonly customerId: FieldRef<"CustomerTransaction", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CustomerTransaction findUnique
   */
  export type CustomerTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTransaction
     */
    select?: CustomerTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTransaction
     */
    omit?: CustomerTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CustomerTransaction to fetch.
     */
    where: CustomerTransactionWhereUniqueInput
  }

  /**
   * CustomerTransaction findUniqueOrThrow
   */
  export type CustomerTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTransaction
     */
    select?: CustomerTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTransaction
     */
    omit?: CustomerTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CustomerTransaction to fetch.
     */
    where: CustomerTransactionWhereUniqueInput
  }

  /**
   * CustomerTransaction findFirst
   */
  export type CustomerTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTransaction
     */
    select?: CustomerTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTransaction
     */
    omit?: CustomerTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CustomerTransaction to fetch.
     */
    where?: CustomerTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerTransactions to fetch.
     */
    orderBy?: CustomerTransactionOrderByWithRelationInput | CustomerTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerTransactions.
     */
    cursor?: CustomerTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerTransactions.
     */
    distinct?: CustomerTransactionScalarFieldEnum | CustomerTransactionScalarFieldEnum[]
  }

  /**
   * CustomerTransaction findFirstOrThrow
   */
  export type CustomerTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTransaction
     */
    select?: CustomerTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTransaction
     */
    omit?: CustomerTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CustomerTransaction to fetch.
     */
    where?: CustomerTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerTransactions to fetch.
     */
    orderBy?: CustomerTransactionOrderByWithRelationInput | CustomerTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerTransactions.
     */
    cursor?: CustomerTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerTransactions.
     */
    distinct?: CustomerTransactionScalarFieldEnum | CustomerTransactionScalarFieldEnum[]
  }

  /**
   * CustomerTransaction findMany
   */
  export type CustomerTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTransaction
     */
    select?: CustomerTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTransaction
     */
    omit?: CustomerTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CustomerTransactions to fetch.
     */
    where?: CustomerTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerTransactions to fetch.
     */
    orderBy?: CustomerTransactionOrderByWithRelationInput | CustomerTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerTransactions.
     */
    cursor?: CustomerTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerTransactions.
     */
    skip?: number
    distinct?: CustomerTransactionScalarFieldEnum | CustomerTransactionScalarFieldEnum[]
  }

  /**
   * CustomerTransaction create
   */
  export type CustomerTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTransaction
     */
    select?: CustomerTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTransaction
     */
    omit?: CustomerTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomerTransaction.
     */
    data: XOR<CustomerTransactionCreateInput, CustomerTransactionUncheckedCreateInput>
  }

  /**
   * CustomerTransaction createMany
   */
  export type CustomerTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerTransactions.
     */
    data: CustomerTransactionCreateManyInput | CustomerTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerTransaction update
   */
  export type CustomerTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTransaction
     */
    select?: CustomerTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTransaction
     */
    omit?: CustomerTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomerTransaction.
     */
    data: XOR<CustomerTransactionUpdateInput, CustomerTransactionUncheckedUpdateInput>
    /**
     * Choose, which CustomerTransaction to update.
     */
    where: CustomerTransactionWhereUniqueInput
  }

  /**
   * CustomerTransaction updateMany
   */
  export type CustomerTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerTransactions.
     */
    data: XOR<CustomerTransactionUpdateManyMutationInput, CustomerTransactionUncheckedUpdateManyInput>
    /**
     * Filter which CustomerTransactions to update
     */
    where?: CustomerTransactionWhereInput
    /**
     * Limit how many CustomerTransactions to update.
     */
    limit?: number
  }

  /**
   * CustomerTransaction upsert
   */
  export type CustomerTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTransaction
     */
    select?: CustomerTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTransaction
     */
    omit?: CustomerTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomerTransaction to update in case it exists.
     */
    where: CustomerTransactionWhereUniqueInput
    /**
     * In case the CustomerTransaction found by the `where` argument doesn't exist, create a new CustomerTransaction with this data.
     */
    create: XOR<CustomerTransactionCreateInput, CustomerTransactionUncheckedCreateInput>
    /**
     * In case the CustomerTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerTransactionUpdateInput, CustomerTransactionUncheckedUpdateInput>
  }

  /**
   * CustomerTransaction delete
   */
  export type CustomerTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTransaction
     */
    select?: CustomerTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTransaction
     */
    omit?: CustomerTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTransactionInclude<ExtArgs> | null
    /**
     * Filter which CustomerTransaction to delete.
     */
    where: CustomerTransactionWhereUniqueInput
  }

  /**
   * CustomerTransaction deleteMany
   */
  export type CustomerTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerTransactions to delete
     */
    where?: CustomerTransactionWhereInput
    /**
     * Limit how many CustomerTransactions to delete.
     */
    limit?: number
  }

  /**
   * CustomerTransaction without action
   */
  export type CustomerTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTransaction
     */
    select?: CustomerTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTransaction
     */
    omit?: CustomerTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTransactionInclude<ExtArgs> | null
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
    createdAt: Date | null
    name: string | null
  }

  export type AddItemMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
  }

  export type AddItemCountAggregateOutputType = {
    id: number
    createdAt: number
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
    createdAt?: true
    name?: true
  }

  export type AddItemMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
  }

  export type AddItemCountAggregateInputType = {
    id?: true
    createdAt?: true
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
    createdAt: Date
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
    createdAt?: boolean
    name?: boolean
    castingItems?: boolean | AddItem$castingItemsArgs<ExtArgs>
    stock?: boolean | AddItem$stockArgs<ExtArgs>
    _count?: boolean | AddItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addItem"]>



  export type AddItemSelectScalar = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
  }

  export type AddItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "name", ExtArgs["result"]["addItem"]>
  export type AddItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    castingItems?: boolean | AddItem$castingItemsArgs<ExtArgs>
    stock?: boolean | AddItem$stockArgs<ExtArgs>
    _count?: boolean | AddItemCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AddItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AddItem"
    objects: {
      castingItems: Prisma.$CastingItemsPayload<ExtArgs>[]
      stock: Prisma.$StockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
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
    castingItems<T extends AddItem$castingItemsArgs<ExtArgs> = {}>(args?: Subset<T, AddItem$castingItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CastingItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stock<T extends AddItem$stockArgs<ExtArgs> = {}>(args?: Subset<T, AddItem$stockArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly createdAt: FieldRef<"AddItem", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddItemInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddItemInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddItemInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddItemInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddItemInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddItemInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddItemInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddItemInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddItemInclude<ExtArgs> | null
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
   * AddItem.castingItems
   */
  export type AddItem$castingItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CastingItems
     */
    select?: CastingItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CastingItems
     */
    omit?: CastingItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingItemsInclude<ExtArgs> | null
    where?: CastingItemsWhereInput
    orderBy?: CastingItemsOrderByWithRelationInput | CastingItemsOrderByWithRelationInput[]
    cursor?: CastingItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CastingItemsScalarFieldEnum | CastingItemsScalarFieldEnum[]
  }

  /**
   * AddItem.stock
   */
  export type AddItem$stockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    where?: StockWhereInput
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    cursor?: StockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddItemInclude<ExtArgs> | null
  }


  /**
   * Model CastingEntry
   */

  export type AggregateCastingEntry = {
    _count: CastingEntryCountAggregateOutputType | null
    _avg: CastingEntryAvgAggregateOutputType | null
    _sum: CastingEntrySumAggregateOutputType | null
    _min: CastingEntryMinAggregateOutputType | null
    _max: CastingEntryMaxAggregateOutputType | null
  }

  export type CastingEntryAvgAggregateOutputType = {
    id: number | null
    given_gold: number | null
    given_touch: number | null
    purity: number | null
    final_touch: number | null
    pure_value: number | null
    copper: number | null
    final_weight: number | null
    casting_customer_id: number | null
  }

  export type CastingEntrySumAggregateOutputType = {
    id: number | null
    given_gold: number | null
    given_touch: number | null
    purity: number | null
    final_touch: number | null
    pure_value: number | null
    copper: number | null
    final_weight: number | null
    casting_customer_id: number | null
  }

  export type CastingEntryMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    date: Date | null
    given_gold: number | null
    given_touch: number | null
    purity: number | null
    final_touch: number | null
    pure_value: number | null
    copper: number | null
    final_weight: number | null
    casting_customer_id: number | null
  }

  export type CastingEntryMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    date: Date | null
    given_gold: number | null
    given_touch: number | null
    purity: number | null
    final_touch: number | null
    pure_value: number | null
    copper: number | null
    final_weight: number | null
    casting_customer_id: number | null
  }

  export type CastingEntryCountAggregateOutputType = {
    id: number
    createdAt: number
    date: number
    given_gold: number
    given_touch: number
    purity: number
    final_touch: number
    pure_value: number
    copper: number
    final_weight: number
    casting_customer_id: number
    _all: number
  }


  export type CastingEntryAvgAggregateInputType = {
    id?: true
    given_gold?: true
    given_touch?: true
    purity?: true
    final_touch?: true
    pure_value?: true
    copper?: true
    final_weight?: true
    casting_customer_id?: true
  }

  export type CastingEntrySumAggregateInputType = {
    id?: true
    given_gold?: true
    given_touch?: true
    purity?: true
    final_touch?: true
    pure_value?: true
    copper?: true
    final_weight?: true
    casting_customer_id?: true
  }

  export type CastingEntryMinAggregateInputType = {
    id?: true
    createdAt?: true
    date?: true
    given_gold?: true
    given_touch?: true
    purity?: true
    final_touch?: true
    pure_value?: true
    copper?: true
    final_weight?: true
    casting_customer_id?: true
  }

  export type CastingEntryMaxAggregateInputType = {
    id?: true
    createdAt?: true
    date?: true
    given_gold?: true
    given_touch?: true
    purity?: true
    final_touch?: true
    pure_value?: true
    copper?: true
    final_weight?: true
    casting_customer_id?: true
  }

  export type CastingEntryCountAggregateInputType = {
    id?: true
    createdAt?: true
    date?: true
    given_gold?: true
    given_touch?: true
    purity?: true
    final_touch?: true
    pure_value?: true
    copper?: true
    final_weight?: true
    casting_customer_id?: true
    _all?: true
  }

  export type CastingEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CastingEntry to aggregate.
     */
    where?: CastingEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CastingEntries to fetch.
     */
    orderBy?: CastingEntryOrderByWithRelationInput | CastingEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CastingEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CastingEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CastingEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CastingEntries
    **/
    _count?: true | CastingEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CastingEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CastingEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CastingEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CastingEntryMaxAggregateInputType
  }

  export type GetCastingEntryAggregateType<T extends CastingEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateCastingEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCastingEntry[P]>
      : GetScalarType<T[P], AggregateCastingEntry[P]>
  }




  export type CastingEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CastingEntryWhereInput
    orderBy?: CastingEntryOrderByWithAggregationInput | CastingEntryOrderByWithAggregationInput[]
    by: CastingEntryScalarFieldEnum[] | CastingEntryScalarFieldEnum
    having?: CastingEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CastingEntryCountAggregateInputType | true
    _avg?: CastingEntryAvgAggregateInputType
    _sum?: CastingEntrySumAggregateInputType
    _min?: CastingEntryMinAggregateInputType
    _max?: CastingEntryMaxAggregateInputType
  }

  export type CastingEntryGroupByOutputType = {
    id: number
    createdAt: Date
    date: Date
    given_gold: number
    given_touch: number
    purity: number
    final_touch: number
    pure_value: number
    copper: number
    final_weight: number
    casting_customer_id: number
    _count: CastingEntryCountAggregateOutputType | null
    _avg: CastingEntryAvgAggregateOutputType | null
    _sum: CastingEntrySumAggregateOutputType | null
    _min: CastingEntryMinAggregateOutputType | null
    _max: CastingEntryMaxAggregateOutputType | null
  }

  type GetCastingEntryGroupByPayload<T extends CastingEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CastingEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CastingEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CastingEntryGroupByOutputType[P]>
            : GetScalarType<T[P], CastingEntryGroupByOutputType[P]>
        }
      >
    >


  export type CastingEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    date?: boolean
    given_gold?: boolean
    given_touch?: boolean
    purity?: boolean
    final_touch?: boolean
    pure_value?: boolean
    copper?: boolean
    final_weight?: boolean
    casting_customer_id?: boolean
    casting_customer?: boolean | AddCastingDefaultArgs<ExtArgs>
    items?: boolean | CastingEntry$itemsArgs<ExtArgs>
    _count?: boolean | CastingEntryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["castingEntry"]>



  export type CastingEntrySelectScalar = {
    id?: boolean
    createdAt?: boolean
    date?: boolean
    given_gold?: boolean
    given_touch?: boolean
    purity?: boolean
    final_touch?: boolean
    pure_value?: boolean
    copper?: boolean
    final_weight?: boolean
    casting_customer_id?: boolean
  }

  export type CastingEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "date" | "given_gold" | "given_touch" | "purity" | "final_touch" | "pure_value" | "copper" | "final_weight" | "casting_customer_id", ExtArgs["result"]["castingEntry"]>
  export type CastingEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casting_customer?: boolean | AddCastingDefaultArgs<ExtArgs>
    items?: boolean | CastingEntry$itemsArgs<ExtArgs>
    _count?: boolean | CastingEntryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CastingEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CastingEntry"
    objects: {
      casting_customer: Prisma.$AddCastingPayload<ExtArgs>
      items: Prisma.$CastingItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      date: Date
      given_gold: number
      given_touch: number
      purity: number
      final_touch: number
      pure_value: number
      copper: number
      final_weight: number
      casting_customer_id: number
    }, ExtArgs["result"]["castingEntry"]>
    composites: {}
  }

  type CastingEntryGetPayload<S extends boolean | null | undefined | CastingEntryDefaultArgs> = $Result.GetResult<Prisma.$CastingEntryPayload, S>

  type CastingEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CastingEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CastingEntryCountAggregateInputType | true
    }

  export interface CastingEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CastingEntry'], meta: { name: 'CastingEntry' } }
    /**
     * Find zero or one CastingEntry that matches the filter.
     * @param {CastingEntryFindUniqueArgs} args - Arguments to find a CastingEntry
     * @example
     * // Get one CastingEntry
     * const castingEntry = await prisma.castingEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CastingEntryFindUniqueArgs>(args: SelectSubset<T, CastingEntryFindUniqueArgs<ExtArgs>>): Prisma__CastingEntryClient<$Result.GetResult<Prisma.$CastingEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CastingEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CastingEntryFindUniqueOrThrowArgs} args - Arguments to find a CastingEntry
     * @example
     * // Get one CastingEntry
     * const castingEntry = await prisma.castingEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CastingEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, CastingEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CastingEntryClient<$Result.GetResult<Prisma.$CastingEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CastingEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastingEntryFindFirstArgs} args - Arguments to find a CastingEntry
     * @example
     * // Get one CastingEntry
     * const castingEntry = await prisma.castingEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CastingEntryFindFirstArgs>(args?: SelectSubset<T, CastingEntryFindFirstArgs<ExtArgs>>): Prisma__CastingEntryClient<$Result.GetResult<Prisma.$CastingEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CastingEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastingEntryFindFirstOrThrowArgs} args - Arguments to find a CastingEntry
     * @example
     * // Get one CastingEntry
     * const castingEntry = await prisma.castingEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CastingEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, CastingEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CastingEntryClient<$Result.GetResult<Prisma.$CastingEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CastingEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastingEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CastingEntries
     * const castingEntries = await prisma.castingEntry.findMany()
     * 
     * // Get first 10 CastingEntries
     * const castingEntries = await prisma.castingEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const castingEntryWithIdOnly = await prisma.castingEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CastingEntryFindManyArgs>(args?: SelectSubset<T, CastingEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CastingEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CastingEntry.
     * @param {CastingEntryCreateArgs} args - Arguments to create a CastingEntry.
     * @example
     * // Create one CastingEntry
     * const CastingEntry = await prisma.castingEntry.create({
     *   data: {
     *     // ... data to create a CastingEntry
     *   }
     * })
     * 
     */
    create<T extends CastingEntryCreateArgs>(args: SelectSubset<T, CastingEntryCreateArgs<ExtArgs>>): Prisma__CastingEntryClient<$Result.GetResult<Prisma.$CastingEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CastingEntries.
     * @param {CastingEntryCreateManyArgs} args - Arguments to create many CastingEntries.
     * @example
     * // Create many CastingEntries
     * const castingEntry = await prisma.castingEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CastingEntryCreateManyArgs>(args?: SelectSubset<T, CastingEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CastingEntry.
     * @param {CastingEntryDeleteArgs} args - Arguments to delete one CastingEntry.
     * @example
     * // Delete one CastingEntry
     * const CastingEntry = await prisma.castingEntry.delete({
     *   where: {
     *     // ... filter to delete one CastingEntry
     *   }
     * })
     * 
     */
    delete<T extends CastingEntryDeleteArgs>(args: SelectSubset<T, CastingEntryDeleteArgs<ExtArgs>>): Prisma__CastingEntryClient<$Result.GetResult<Prisma.$CastingEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CastingEntry.
     * @param {CastingEntryUpdateArgs} args - Arguments to update one CastingEntry.
     * @example
     * // Update one CastingEntry
     * const castingEntry = await prisma.castingEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CastingEntryUpdateArgs>(args: SelectSubset<T, CastingEntryUpdateArgs<ExtArgs>>): Prisma__CastingEntryClient<$Result.GetResult<Prisma.$CastingEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CastingEntries.
     * @param {CastingEntryDeleteManyArgs} args - Arguments to filter CastingEntries to delete.
     * @example
     * // Delete a few CastingEntries
     * const { count } = await prisma.castingEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CastingEntryDeleteManyArgs>(args?: SelectSubset<T, CastingEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CastingEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastingEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CastingEntries
     * const castingEntry = await prisma.castingEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CastingEntryUpdateManyArgs>(args: SelectSubset<T, CastingEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CastingEntry.
     * @param {CastingEntryUpsertArgs} args - Arguments to update or create a CastingEntry.
     * @example
     * // Update or create a CastingEntry
     * const castingEntry = await prisma.castingEntry.upsert({
     *   create: {
     *     // ... data to create a CastingEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CastingEntry we want to update
     *   }
     * })
     */
    upsert<T extends CastingEntryUpsertArgs>(args: SelectSubset<T, CastingEntryUpsertArgs<ExtArgs>>): Prisma__CastingEntryClient<$Result.GetResult<Prisma.$CastingEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CastingEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastingEntryCountArgs} args - Arguments to filter CastingEntries to count.
     * @example
     * // Count the number of CastingEntries
     * const count = await prisma.castingEntry.count({
     *   where: {
     *     // ... the filter for the CastingEntries we want to count
     *   }
     * })
    **/
    count<T extends CastingEntryCountArgs>(
      args?: Subset<T, CastingEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CastingEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CastingEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastingEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CastingEntryAggregateArgs>(args: Subset<T, CastingEntryAggregateArgs>): Prisma.PrismaPromise<GetCastingEntryAggregateType<T>>

    /**
     * Group by CastingEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastingEntryGroupByArgs} args - Group by arguments.
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
      T extends CastingEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CastingEntryGroupByArgs['orderBy'] }
        : { orderBy?: CastingEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CastingEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCastingEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CastingEntry model
   */
  readonly fields: CastingEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CastingEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CastingEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    casting_customer<T extends AddCastingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddCastingDefaultArgs<ExtArgs>>): Prisma__AddCastingClient<$Result.GetResult<Prisma.$AddCastingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends CastingEntry$itemsArgs<ExtArgs> = {}>(args?: Subset<T, CastingEntry$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CastingItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CastingEntry model
   */
  interface CastingEntryFieldRefs {
    readonly id: FieldRef<"CastingEntry", 'Int'>
    readonly createdAt: FieldRef<"CastingEntry", 'DateTime'>
    readonly date: FieldRef<"CastingEntry", 'DateTime'>
    readonly given_gold: FieldRef<"CastingEntry", 'Float'>
    readonly given_touch: FieldRef<"CastingEntry", 'Float'>
    readonly purity: FieldRef<"CastingEntry", 'Float'>
    readonly final_touch: FieldRef<"CastingEntry", 'Float'>
    readonly pure_value: FieldRef<"CastingEntry", 'Float'>
    readonly copper: FieldRef<"CastingEntry", 'Float'>
    readonly final_weight: FieldRef<"CastingEntry", 'Float'>
    readonly casting_customer_id: FieldRef<"CastingEntry", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CastingEntry findUnique
   */
  export type CastingEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CastingEntry
     */
    select?: CastingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CastingEntry
     */
    omit?: CastingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingEntryInclude<ExtArgs> | null
    /**
     * Filter, which CastingEntry to fetch.
     */
    where: CastingEntryWhereUniqueInput
  }

  /**
   * CastingEntry findUniqueOrThrow
   */
  export type CastingEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CastingEntry
     */
    select?: CastingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CastingEntry
     */
    omit?: CastingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingEntryInclude<ExtArgs> | null
    /**
     * Filter, which CastingEntry to fetch.
     */
    where: CastingEntryWhereUniqueInput
  }

  /**
   * CastingEntry findFirst
   */
  export type CastingEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CastingEntry
     */
    select?: CastingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CastingEntry
     */
    omit?: CastingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingEntryInclude<ExtArgs> | null
    /**
     * Filter, which CastingEntry to fetch.
     */
    where?: CastingEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CastingEntries to fetch.
     */
    orderBy?: CastingEntryOrderByWithRelationInput | CastingEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CastingEntries.
     */
    cursor?: CastingEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CastingEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CastingEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CastingEntries.
     */
    distinct?: CastingEntryScalarFieldEnum | CastingEntryScalarFieldEnum[]
  }

  /**
   * CastingEntry findFirstOrThrow
   */
  export type CastingEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CastingEntry
     */
    select?: CastingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CastingEntry
     */
    omit?: CastingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingEntryInclude<ExtArgs> | null
    /**
     * Filter, which CastingEntry to fetch.
     */
    where?: CastingEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CastingEntries to fetch.
     */
    orderBy?: CastingEntryOrderByWithRelationInput | CastingEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CastingEntries.
     */
    cursor?: CastingEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CastingEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CastingEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CastingEntries.
     */
    distinct?: CastingEntryScalarFieldEnum | CastingEntryScalarFieldEnum[]
  }

  /**
   * CastingEntry findMany
   */
  export type CastingEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CastingEntry
     */
    select?: CastingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CastingEntry
     */
    omit?: CastingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingEntryInclude<ExtArgs> | null
    /**
     * Filter, which CastingEntries to fetch.
     */
    where?: CastingEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CastingEntries to fetch.
     */
    orderBy?: CastingEntryOrderByWithRelationInput | CastingEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CastingEntries.
     */
    cursor?: CastingEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CastingEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CastingEntries.
     */
    skip?: number
    distinct?: CastingEntryScalarFieldEnum | CastingEntryScalarFieldEnum[]
  }

  /**
   * CastingEntry create
   */
  export type CastingEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CastingEntry
     */
    select?: CastingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CastingEntry
     */
    omit?: CastingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a CastingEntry.
     */
    data: XOR<CastingEntryCreateInput, CastingEntryUncheckedCreateInput>
  }

  /**
   * CastingEntry createMany
   */
  export type CastingEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CastingEntries.
     */
    data: CastingEntryCreateManyInput | CastingEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CastingEntry update
   */
  export type CastingEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CastingEntry
     */
    select?: CastingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CastingEntry
     */
    omit?: CastingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a CastingEntry.
     */
    data: XOR<CastingEntryUpdateInput, CastingEntryUncheckedUpdateInput>
    /**
     * Choose, which CastingEntry to update.
     */
    where: CastingEntryWhereUniqueInput
  }

  /**
   * CastingEntry updateMany
   */
  export type CastingEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CastingEntries.
     */
    data: XOR<CastingEntryUpdateManyMutationInput, CastingEntryUncheckedUpdateManyInput>
    /**
     * Filter which CastingEntries to update
     */
    where?: CastingEntryWhereInput
    /**
     * Limit how many CastingEntries to update.
     */
    limit?: number
  }

  /**
   * CastingEntry upsert
   */
  export type CastingEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CastingEntry
     */
    select?: CastingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CastingEntry
     */
    omit?: CastingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the CastingEntry to update in case it exists.
     */
    where: CastingEntryWhereUniqueInput
    /**
     * In case the CastingEntry found by the `where` argument doesn't exist, create a new CastingEntry with this data.
     */
    create: XOR<CastingEntryCreateInput, CastingEntryUncheckedCreateInput>
    /**
     * In case the CastingEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CastingEntryUpdateInput, CastingEntryUncheckedUpdateInput>
  }

  /**
   * CastingEntry delete
   */
  export type CastingEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CastingEntry
     */
    select?: CastingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CastingEntry
     */
    omit?: CastingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingEntryInclude<ExtArgs> | null
    /**
     * Filter which CastingEntry to delete.
     */
    where: CastingEntryWhereUniqueInput
  }

  /**
   * CastingEntry deleteMany
   */
  export type CastingEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CastingEntries to delete
     */
    where?: CastingEntryWhereInput
    /**
     * Limit how many CastingEntries to delete.
     */
    limit?: number
  }

  /**
   * CastingEntry.items
   */
  export type CastingEntry$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CastingItems
     */
    select?: CastingItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CastingItems
     */
    omit?: CastingItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingItemsInclude<ExtArgs> | null
    where?: CastingItemsWhereInput
    orderBy?: CastingItemsOrderByWithRelationInput | CastingItemsOrderByWithRelationInput[]
    cursor?: CastingItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CastingItemsScalarFieldEnum | CastingItemsScalarFieldEnum[]
  }

  /**
   * CastingEntry without action
   */
  export type CastingEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CastingEntry
     */
    select?: CastingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CastingEntry
     */
    omit?: CastingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingEntryInclude<ExtArgs> | null
  }


  /**
   * Model CastingItems
   */

  export type AggregateCastingItems = {
    _count: CastingItemsCountAggregateOutputType | null
    _avg: CastingItemsAvgAggregateOutputType | null
    _sum: CastingItemsSumAggregateOutputType | null
    _min: CastingItemsMinAggregateOutputType | null
    _max: CastingItemsMaxAggregateOutputType | null
  }

  export type CastingItemsAvgAggregateOutputType = {
    id: number | null
    item_id: number | null
    weight: number | null
    touch: number | null
    item_purity: number | null
    after_weight: number | null
    scrap_weight: number | null
    scrap_wastage: number | null
    casting_entry_id: number | null
    casting_customer_id: number | null
  }

  export type CastingItemsSumAggregateOutputType = {
    id: number | null
    item_id: number | null
    weight: number | null
    touch: number | null
    item_purity: number | null
    after_weight: number | null
    scrap_weight: number | null
    scrap_wastage: number | null
    casting_entry_id: number | null
    casting_customer_id: number | null
  }

  export type CastingItemsMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    type: $Enums.CASTINGENTRYTYPE | null
    item_id: number | null
    weight: number | null
    touch: number | null
    item_purity: number | null
    remarks: string | null
    after_weight: number | null
    scrap_weight: number | null
    scrap_wastage: number | null
    casting_entry_id: number | null
    casting_customer_id: number | null
  }

  export type CastingItemsMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    type: $Enums.CASTINGENTRYTYPE | null
    item_id: number | null
    weight: number | null
    touch: number | null
    item_purity: number | null
    remarks: string | null
    after_weight: number | null
    scrap_weight: number | null
    scrap_wastage: number | null
    casting_entry_id: number | null
    casting_customer_id: number | null
  }

  export type CastingItemsCountAggregateOutputType = {
    id: number
    createdAt: number
    type: number
    item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks: number
    after_weight: number
    scrap_weight: number
    scrap_wastage: number
    casting_entry_id: number
    casting_customer_id: number
    _all: number
  }


  export type CastingItemsAvgAggregateInputType = {
    id?: true
    item_id?: true
    weight?: true
    touch?: true
    item_purity?: true
    after_weight?: true
    scrap_weight?: true
    scrap_wastage?: true
    casting_entry_id?: true
    casting_customer_id?: true
  }

  export type CastingItemsSumAggregateInputType = {
    id?: true
    item_id?: true
    weight?: true
    touch?: true
    item_purity?: true
    after_weight?: true
    scrap_weight?: true
    scrap_wastage?: true
    casting_entry_id?: true
    casting_customer_id?: true
  }

  export type CastingItemsMinAggregateInputType = {
    id?: true
    createdAt?: true
    type?: true
    item_id?: true
    weight?: true
    touch?: true
    item_purity?: true
    remarks?: true
    after_weight?: true
    scrap_weight?: true
    scrap_wastage?: true
    casting_entry_id?: true
    casting_customer_id?: true
  }

  export type CastingItemsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    type?: true
    item_id?: true
    weight?: true
    touch?: true
    item_purity?: true
    remarks?: true
    after_weight?: true
    scrap_weight?: true
    scrap_wastage?: true
    casting_entry_id?: true
    casting_customer_id?: true
  }

  export type CastingItemsCountAggregateInputType = {
    id?: true
    createdAt?: true
    type?: true
    item_id?: true
    weight?: true
    touch?: true
    item_purity?: true
    remarks?: true
    after_weight?: true
    scrap_weight?: true
    scrap_wastage?: true
    casting_entry_id?: true
    casting_customer_id?: true
    _all?: true
  }

  export type CastingItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CastingItems to aggregate.
     */
    where?: CastingItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CastingItems to fetch.
     */
    orderBy?: CastingItemsOrderByWithRelationInput | CastingItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CastingItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CastingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CastingItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CastingItems
    **/
    _count?: true | CastingItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CastingItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CastingItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CastingItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CastingItemsMaxAggregateInputType
  }

  export type GetCastingItemsAggregateType<T extends CastingItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateCastingItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCastingItems[P]>
      : GetScalarType<T[P], AggregateCastingItems[P]>
  }




  export type CastingItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CastingItemsWhereInput
    orderBy?: CastingItemsOrderByWithAggregationInput | CastingItemsOrderByWithAggregationInput[]
    by: CastingItemsScalarFieldEnum[] | CastingItemsScalarFieldEnum
    having?: CastingItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CastingItemsCountAggregateInputType | true
    _avg?: CastingItemsAvgAggregateInputType
    _sum?: CastingItemsSumAggregateInputType
    _min?: CastingItemsMinAggregateInputType
    _max?: CastingItemsMaxAggregateInputType
  }

  export type CastingItemsGroupByOutputType = {
    id: number
    createdAt: Date
    type: $Enums.CASTINGENTRYTYPE
    item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks: string | null
    after_weight: number | null
    scrap_weight: number | null
    scrap_wastage: number | null
    casting_entry_id: number
    casting_customer_id: number
    _count: CastingItemsCountAggregateOutputType | null
    _avg: CastingItemsAvgAggregateOutputType | null
    _sum: CastingItemsSumAggregateOutputType | null
    _min: CastingItemsMinAggregateOutputType | null
    _max: CastingItemsMaxAggregateOutputType | null
  }

  type GetCastingItemsGroupByPayload<T extends CastingItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CastingItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CastingItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CastingItemsGroupByOutputType[P]>
            : GetScalarType<T[P], CastingItemsGroupByOutputType[P]>
        }
      >
    >


  export type CastingItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    type?: boolean
    item_id?: boolean
    weight?: boolean
    touch?: boolean
    item_purity?: boolean
    remarks?: boolean
    after_weight?: boolean
    scrap_weight?: boolean
    scrap_wastage?: boolean
    casting_entry_id?: boolean
    casting_customer_id?: boolean
    item?: boolean | AddItemDefaultArgs<ExtArgs>
    castingEntry?: boolean | CastingEntryDefaultArgs<ExtArgs>
    filingEntry?: boolean | CastingItems$filingEntryArgs<ExtArgs>
    settingEntry?: boolean | CastingItems$settingEntryArgs<ExtArgs>
    buffingEntry?: boolean | CastingItems$buffingEntryArgs<ExtArgs>
    stock?: boolean | CastingItems$stockArgs<ExtArgs>
    casting_customer?: boolean | AddCastingDefaultArgs<ExtArgs>
    _count?: boolean | CastingItemsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["castingItems"]>



  export type CastingItemsSelectScalar = {
    id?: boolean
    createdAt?: boolean
    type?: boolean
    item_id?: boolean
    weight?: boolean
    touch?: boolean
    item_purity?: boolean
    remarks?: boolean
    after_weight?: boolean
    scrap_weight?: boolean
    scrap_wastage?: boolean
    casting_entry_id?: boolean
    casting_customer_id?: boolean
  }

  export type CastingItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "type" | "item_id" | "weight" | "touch" | "item_purity" | "remarks" | "after_weight" | "scrap_weight" | "scrap_wastage" | "casting_entry_id" | "casting_customer_id", ExtArgs["result"]["castingItems"]>
  export type CastingItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | AddItemDefaultArgs<ExtArgs>
    castingEntry?: boolean | CastingEntryDefaultArgs<ExtArgs>
    filingEntry?: boolean | CastingItems$filingEntryArgs<ExtArgs>
    settingEntry?: boolean | CastingItems$settingEntryArgs<ExtArgs>
    buffingEntry?: boolean | CastingItems$buffingEntryArgs<ExtArgs>
    stock?: boolean | CastingItems$stockArgs<ExtArgs>
    casting_customer?: boolean | AddCastingDefaultArgs<ExtArgs>
    _count?: boolean | CastingItemsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CastingItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CastingItems"
    objects: {
      item: Prisma.$AddItemPayload<ExtArgs>
      castingEntry: Prisma.$CastingEntryPayload<ExtArgs>
      filingEntry: Prisma.$FilingEntryPayload<ExtArgs> | null
      settingEntry: Prisma.$SettingEntryPayload<ExtArgs> | null
      buffingEntry: Prisma.$BuffingEntryPayload<ExtArgs> | null
      stock: Prisma.$StockPayload<ExtArgs>[]
      casting_customer: Prisma.$AddCastingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      type: $Enums.CASTINGENTRYTYPE
      item_id: number
      weight: number
      touch: number
      item_purity: number
      remarks: string | null
      after_weight: number | null
      scrap_weight: number | null
      scrap_wastage: number | null
      casting_entry_id: number
      casting_customer_id: number
    }, ExtArgs["result"]["castingItems"]>
    composites: {}
  }

  type CastingItemsGetPayload<S extends boolean | null | undefined | CastingItemsDefaultArgs> = $Result.GetResult<Prisma.$CastingItemsPayload, S>

  type CastingItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CastingItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CastingItemsCountAggregateInputType | true
    }

  export interface CastingItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CastingItems'], meta: { name: 'CastingItems' } }
    /**
     * Find zero or one CastingItems that matches the filter.
     * @param {CastingItemsFindUniqueArgs} args - Arguments to find a CastingItems
     * @example
     * // Get one CastingItems
     * const castingItems = await prisma.castingItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CastingItemsFindUniqueArgs>(args: SelectSubset<T, CastingItemsFindUniqueArgs<ExtArgs>>): Prisma__CastingItemsClient<$Result.GetResult<Prisma.$CastingItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CastingItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CastingItemsFindUniqueOrThrowArgs} args - Arguments to find a CastingItems
     * @example
     * // Get one CastingItems
     * const castingItems = await prisma.castingItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CastingItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, CastingItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CastingItemsClient<$Result.GetResult<Prisma.$CastingItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CastingItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastingItemsFindFirstArgs} args - Arguments to find a CastingItems
     * @example
     * // Get one CastingItems
     * const castingItems = await prisma.castingItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CastingItemsFindFirstArgs>(args?: SelectSubset<T, CastingItemsFindFirstArgs<ExtArgs>>): Prisma__CastingItemsClient<$Result.GetResult<Prisma.$CastingItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CastingItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastingItemsFindFirstOrThrowArgs} args - Arguments to find a CastingItems
     * @example
     * // Get one CastingItems
     * const castingItems = await prisma.castingItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CastingItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, CastingItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CastingItemsClient<$Result.GetResult<Prisma.$CastingItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CastingItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastingItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CastingItems
     * const castingItems = await prisma.castingItems.findMany()
     * 
     * // Get first 10 CastingItems
     * const castingItems = await prisma.castingItems.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const castingItemsWithIdOnly = await prisma.castingItems.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CastingItemsFindManyArgs>(args?: SelectSubset<T, CastingItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CastingItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CastingItems.
     * @param {CastingItemsCreateArgs} args - Arguments to create a CastingItems.
     * @example
     * // Create one CastingItems
     * const CastingItems = await prisma.castingItems.create({
     *   data: {
     *     // ... data to create a CastingItems
     *   }
     * })
     * 
     */
    create<T extends CastingItemsCreateArgs>(args: SelectSubset<T, CastingItemsCreateArgs<ExtArgs>>): Prisma__CastingItemsClient<$Result.GetResult<Prisma.$CastingItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CastingItems.
     * @param {CastingItemsCreateManyArgs} args - Arguments to create many CastingItems.
     * @example
     * // Create many CastingItems
     * const castingItems = await prisma.castingItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CastingItemsCreateManyArgs>(args?: SelectSubset<T, CastingItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CastingItems.
     * @param {CastingItemsDeleteArgs} args - Arguments to delete one CastingItems.
     * @example
     * // Delete one CastingItems
     * const CastingItems = await prisma.castingItems.delete({
     *   where: {
     *     // ... filter to delete one CastingItems
     *   }
     * })
     * 
     */
    delete<T extends CastingItemsDeleteArgs>(args: SelectSubset<T, CastingItemsDeleteArgs<ExtArgs>>): Prisma__CastingItemsClient<$Result.GetResult<Prisma.$CastingItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CastingItems.
     * @param {CastingItemsUpdateArgs} args - Arguments to update one CastingItems.
     * @example
     * // Update one CastingItems
     * const castingItems = await prisma.castingItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CastingItemsUpdateArgs>(args: SelectSubset<T, CastingItemsUpdateArgs<ExtArgs>>): Prisma__CastingItemsClient<$Result.GetResult<Prisma.$CastingItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CastingItems.
     * @param {CastingItemsDeleteManyArgs} args - Arguments to filter CastingItems to delete.
     * @example
     * // Delete a few CastingItems
     * const { count } = await prisma.castingItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CastingItemsDeleteManyArgs>(args?: SelectSubset<T, CastingItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CastingItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastingItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CastingItems
     * const castingItems = await prisma.castingItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CastingItemsUpdateManyArgs>(args: SelectSubset<T, CastingItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CastingItems.
     * @param {CastingItemsUpsertArgs} args - Arguments to update or create a CastingItems.
     * @example
     * // Update or create a CastingItems
     * const castingItems = await prisma.castingItems.upsert({
     *   create: {
     *     // ... data to create a CastingItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CastingItems we want to update
     *   }
     * })
     */
    upsert<T extends CastingItemsUpsertArgs>(args: SelectSubset<T, CastingItemsUpsertArgs<ExtArgs>>): Prisma__CastingItemsClient<$Result.GetResult<Prisma.$CastingItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CastingItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastingItemsCountArgs} args - Arguments to filter CastingItems to count.
     * @example
     * // Count the number of CastingItems
     * const count = await prisma.castingItems.count({
     *   where: {
     *     // ... the filter for the CastingItems we want to count
     *   }
     * })
    **/
    count<T extends CastingItemsCountArgs>(
      args?: Subset<T, CastingItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CastingItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CastingItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastingItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CastingItemsAggregateArgs>(args: Subset<T, CastingItemsAggregateArgs>): Prisma.PrismaPromise<GetCastingItemsAggregateType<T>>

    /**
     * Group by CastingItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastingItemsGroupByArgs} args - Group by arguments.
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
      T extends CastingItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CastingItemsGroupByArgs['orderBy'] }
        : { orderBy?: CastingItemsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CastingItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCastingItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CastingItems model
   */
  readonly fields: CastingItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CastingItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CastingItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends AddItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddItemDefaultArgs<ExtArgs>>): Prisma__AddItemClient<$Result.GetResult<Prisma.$AddItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    castingEntry<T extends CastingEntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CastingEntryDefaultArgs<ExtArgs>>): Prisma__CastingEntryClient<$Result.GetResult<Prisma.$CastingEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    filingEntry<T extends CastingItems$filingEntryArgs<ExtArgs> = {}>(args?: Subset<T, CastingItems$filingEntryArgs<ExtArgs>>): Prisma__FilingEntryClient<$Result.GetResult<Prisma.$FilingEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    settingEntry<T extends CastingItems$settingEntryArgs<ExtArgs> = {}>(args?: Subset<T, CastingItems$settingEntryArgs<ExtArgs>>): Prisma__SettingEntryClient<$Result.GetResult<Prisma.$SettingEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    buffingEntry<T extends CastingItems$buffingEntryArgs<ExtArgs> = {}>(args?: Subset<T, CastingItems$buffingEntryArgs<ExtArgs>>): Prisma__BuffingEntryClient<$Result.GetResult<Prisma.$BuffingEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    stock<T extends CastingItems$stockArgs<ExtArgs> = {}>(args?: Subset<T, CastingItems$stockArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    casting_customer<T extends AddCastingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddCastingDefaultArgs<ExtArgs>>): Prisma__AddCastingClient<$Result.GetResult<Prisma.$AddCastingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CastingItems model
   */
  interface CastingItemsFieldRefs {
    readonly id: FieldRef<"CastingItems", 'Int'>
    readonly createdAt: FieldRef<"CastingItems", 'DateTime'>
    readonly type: FieldRef<"CastingItems", 'CASTINGENTRYTYPE'>
    readonly item_id: FieldRef<"CastingItems", 'Int'>
    readonly weight: FieldRef<"CastingItems", 'Float'>
    readonly touch: FieldRef<"CastingItems", 'Float'>
    readonly item_purity: FieldRef<"CastingItems", 'Float'>
    readonly remarks: FieldRef<"CastingItems", 'String'>
    readonly after_weight: FieldRef<"CastingItems", 'Float'>
    readonly scrap_weight: FieldRef<"CastingItems", 'Float'>
    readonly scrap_wastage: FieldRef<"CastingItems", 'Float'>
    readonly casting_entry_id: FieldRef<"CastingItems", 'Int'>
    readonly casting_customer_id: FieldRef<"CastingItems", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CastingItems findUnique
   */
  export type CastingItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CastingItems
     */
    select?: CastingItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CastingItems
     */
    omit?: CastingItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingItemsInclude<ExtArgs> | null
    /**
     * Filter, which CastingItems to fetch.
     */
    where: CastingItemsWhereUniqueInput
  }

  /**
   * CastingItems findUniqueOrThrow
   */
  export type CastingItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CastingItems
     */
    select?: CastingItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CastingItems
     */
    omit?: CastingItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingItemsInclude<ExtArgs> | null
    /**
     * Filter, which CastingItems to fetch.
     */
    where: CastingItemsWhereUniqueInput
  }

  /**
   * CastingItems findFirst
   */
  export type CastingItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CastingItems
     */
    select?: CastingItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CastingItems
     */
    omit?: CastingItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingItemsInclude<ExtArgs> | null
    /**
     * Filter, which CastingItems to fetch.
     */
    where?: CastingItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CastingItems to fetch.
     */
    orderBy?: CastingItemsOrderByWithRelationInput | CastingItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CastingItems.
     */
    cursor?: CastingItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CastingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CastingItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CastingItems.
     */
    distinct?: CastingItemsScalarFieldEnum | CastingItemsScalarFieldEnum[]
  }

  /**
   * CastingItems findFirstOrThrow
   */
  export type CastingItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CastingItems
     */
    select?: CastingItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CastingItems
     */
    omit?: CastingItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingItemsInclude<ExtArgs> | null
    /**
     * Filter, which CastingItems to fetch.
     */
    where?: CastingItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CastingItems to fetch.
     */
    orderBy?: CastingItemsOrderByWithRelationInput | CastingItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CastingItems.
     */
    cursor?: CastingItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CastingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CastingItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CastingItems.
     */
    distinct?: CastingItemsScalarFieldEnum | CastingItemsScalarFieldEnum[]
  }

  /**
   * CastingItems findMany
   */
  export type CastingItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CastingItems
     */
    select?: CastingItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CastingItems
     */
    omit?: CastingItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingItemsInclude<ExtArgs> | null
    /**
     * Filter, which CastingItems to fetch.
     */
    where?: CastingItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CastingItems to fetch.
     */
    orderBy?: CastingItemsOrderByWithRelationInput | CastingItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CastingItems.
     */
    cursor?: CastingItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CastingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CastingItems.
     */
    skip?: number
    distinct?: CastingItemsScalarFieldEnum | CastingItemsScalarFieldEnum[]
  }

  /**
   * CastingItems create
   */
  export type CastingItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CastingItems
     */
    select?: CastingItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CastingItems
     */
    omit?: CastingItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a CastingItems.
     */
    data: XOR<CastingItemsCreateInput, CastingItemsUncheckedCreateInput>
  }

  /**
   * CastingItems createMany
   */
  export type CastingItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CastingItems.
     */
    data: CastingItemsCreateManyInput | CastingItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CastingItems update
   */
  export type CastingItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CastingItems
     */
    select?: CastingItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CastingItems
     */
    omit?: CastingItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a CastingItems.
     */
    data: XOR<CastingItemsUpdateInput, CastingItemsUncheckedUpdateInput>
    /**
     * Choose, which CastingItems to update.
     */
    where: CastingItemsWhereUniqueInput
  }

  /**
   * CastingItems updateMany
   */
  export type CastingItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CastingItems.
     */
    data: XOR<CastingItemsUpdateManyMutationInput, CastingItemsUncheckedUpdateManyInput>
    /**
     * Filter which CastingItems to update
     */
    where?: CastingItemsWhereInput
    /**
     * Limit how many CastingItems to update.
     */
    limit?: number
  }

  /**
   * CastingItems upsert
   */
  export type CastingItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CastingItems
     */
    select?: CastingItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CastingItems
     */
    omit?: CastingItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the CastingItems to update in case it exists.
     */
    where: CastingItemsWhereUniqueInput
    /**
     * In case the CastingItems found by the `where` argument doesn't exist, create a new CastingItems with this data.
     */
    create: XOR<CastingItemsCreateInput, CastingItemsUncheckedCreateInput>
    /**
     * In case the CastingItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CastingItemsUpdateInput, CastingItemsUncheckedUpdateInput>
  }

  /**
   * CastingItems delete
   */
  export type CastingItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CastingItems
     */
    select?: CastingItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CastingItems
     */
    omit?: CastingItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingItemsInclude<ExtArgs> | null
    /**
     * Filter which CastingItems to delete.
     */
    where: CastingItemsWhereUniqueInput
  }

  /**
   * CastingItems deleteMany
   */
  export type CastingItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CastingItems to delete
     */
    where?: CastingItemsWhereInput
    /**
     * Limit how many CastingItems to delete.
     */
    limit?: number
  }

  /**
   * CastingItems.filingEntry
   */
  export type CastingItems$filingEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilingEntry
     */
    select?: FilingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilingEntry
     */
    omit?: FilingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilingEntryInclude<ExtArgs> | null
    where?: FilingEntryWhereInput
  }

  /**
   * CastingItems.settingEntry
   */
  export type CastingItems$settingEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettingEntry
     */
    select?: SettingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SettingEntry
     */
    omit?: SettingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingEntryInclude<ExtArgs> | null
    where?: SettingEntryWhereInput
  }

  /**
   * CastingItems.buffingEntry
   */
  export type CastingItems$buffingEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuffingEntry
     */
    select?: BuffingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuffingEntry
     */
    omit?: BuffingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuffingEntryInclude<ExtArgs> | null
    where?: BuffingEntryWhereInput
  }

  /**
   * CastingItems.stock
   */
  export type CastingItems$stockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    where?: StockWhereInput
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    cursor?: StockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * CastingItems without action
   */
  export type CastingItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CastingItems
     */
    select?: CastingItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CastingItems
     */
    omit?: CastingItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastingItemsInclude<ExtArgs> | null
  }


  /**
   * Model FilingEntry
   */

  export type AggregateFilingEntry = {
    _count: FilingEntryCountAggregateOutputType | null
    _avg: FilingEntryAvgAggregateOutputType | null
    _sum: FilingEntrySumAggregateOutputType | null
    _min: FilingEntryMinAggregateOutputType | null
    _max: FilingEntryMaxAggregateOutputType | null
  }

  export type FilingEntryAvgAggregateOutputType = {
    id: number | null
    filing_person_id: number | null
    casting_item_id: number | null
    weight: number | null
    touch: number | null
    item_purity: number | null
    after_weight: number | null
  }

  export type FilingEntrySumAggregateOutputType = {
    id: number | null
    filing_person_id: number | null
    casting_item_id: number | null
    weight: number | null
    touch: number | null
    item_purity: number | null
    after_weight: number | null
  }

  export type FilingEntryMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    filing_person_id: number | null
    casting_item_id: number | null
    weight: number | null
    touch: number | null
    item_purity: number | null
    remarks: string | null
    after_weight: number | null
    stone_option: $Enums.STONEOPTION | null
  }

  export type FilingEntryMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    filing_person_id: number | null
    casting_item_id: number | null
    weight: number | null
    touch: number | null
    item_purity: number | null
    remarks: string | null
    after_weight: number | null
    stone_option: $Enums.STONEOPTION | null
  }

  export type FilingEntryCountAggregateOutputType = {
    id: number
    createdAt: number
    filing_person_id: number
    casting_item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks: number
    after_weight: number
    stone_option: number
    _all: number
  }


  export type FilingEntryAvgAggregateInputType = {
    id?: true
    filing_person_id?: true
    casting_item_id?: true
    weight?: true
    touch?: true
    item_purity?: true
    after_weight?: true
  }

  export type FilingEntrySumAggregateInputType = {
    id?: true
    filing_person_id?: true
    casting_item_id?: true
    weight?: true
    touch?: true
    item_purity?: true
    after_weight?: true
  }

  export type FilingEntryMinAggregateInputType = {
    id?: true
    createdAt?: true
    filing_person_id?: true
    casting_item_id?: true
    weight?: true
    touch?: true
    item_purity?: true
    remarks?: true
    after_weight?: true
    stone_option?: true
  }

  export type FilingEntryMaxAggregateInputType = {
    id?: true
    createdAt?: true
    filing_person_id?: true
    casting_item_id?: true
    weight?: true
    touch?: true
    item_purity?: true
    remarks?: true
    after_weight?: true
    stone_option?: true
  }

  export type FilingEntryCountAggregateInputType = {
    id?: true
    createdAt?: true
    filing_person_id?: true
    casting_item_id?: true
    weight?: true
    touch?: true
    item_purity?: true
    remarks?: true
    after_weight?: true
    stone_option?: true
    _all?: true
  }

  export type FilingEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FilingEntry to aggregate.
     */
    where?: FilingEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilingEntries to fetch.
     */
    orderBy?: FilingEntryOrderByWithRelationInput | FilingEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FilingEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilingEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilingEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FilingEntries
    **/
    _count?: true | FilingEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FilingEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FilingEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilingEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilingEntryMaxAggregateInputType
  }

  export type GetFilingEntryAggregateType<T extends FilingEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateFilingEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilingEntry[P]>
      : GetScalarType<T[P], AggregateFilingEntry[P]>
  }




  export type FilingEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilingEntryWhereInput
    orderBy?: FilingEntryOrderByWithAggregationInput | FilingEntryOrderByWithAggregationInput[]
    by: FilingEntryScalarFieldEnum[] | FilingEntryScalarFieldEnum
    having?: FilingEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilingEntryCountAggregateInputType | true
    _avg?: FilingEntryAvgAggregateInputType
    _sum?: FilingEntrySumAggregateInputType
    _min?: FilingEntryMinAggregateInputType
    _max?: FilingEntryMaxAggregateInputType
  }

  export type FilingEntryGroupByOutputType = {
    id: number
    createdAt: Date
    filing_person_id: number
    casting_item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks: string | null
    after_weight: number | null
    stone_option: $Enums.STONEOPTION
    _count: FilingEntryCountAggregateOutputType | null
    _avg: FilingEntryAvgAggregateOutputType | null
    _sum: FilingEntrySumAggregateOutputType | null
    _min: FilingEntryMinAggregateOutputType | null
    _max: FilingEntryMaxAggregateOutputType | null
  }

  type GetFilingEntryGroupByPayload<T extends FilingEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilingEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilingEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilingEntryGroupByOutputType[P]>
            : GetScalarType<T[P], FilingEntryGroupByOutputType[P]>
        }
      >
    >


  export type FilingEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    filing_person_id?: boolean
    casting_item_id?: boolean
    weight?: boolean
    touch?: boolean
    item_purity?: boolean
    remarks?: boolean
    after_weight?: boolean
    stone_option?: boolean
    filing_person?: boolean | AddFilingDefaultArgs<ExtArgs>
    castingItem?: boolean | CastingItemsDefaultArgs<ExtArgs>
    settingEntry?: boolean | FilingEntry$settingEntryArgs<ExtArgs>
    buffingEntries?: boolean | FilingEntry$buffingEntriesArgs<ExtArgs>
    _count?: boolean | FilingEntryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["filingEntry"]>



  export type FilingEntrySelectScalar = {
    id?: boolean
    createdAt?: boolean
    filing_person_id?: boolean
    casting_item_id?: boolean
    weight?: boolean
    touch?: boolean
    item_purity?: boolean
    remarks?: boolean
    after_weight?: boolean
    stone_option?: boolean
  }

  export type FilingEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "filing_person_id" | "casting_item_id" | "weight" | "touch" | "item_purity" | "remarks" | "after_weight" | "stone_option", ExtArgs["result"]["filingEntry"]>
  export type FilingEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filing_person?: boolean | AddFilingDefaultArgs<ExtArgs>
    castingItem?: boolean | CastingItemsDefaultArgs<ExtArgs>
    settingEntry?: boolean | FilingEntry$settingEntryArgs<ExtArgs>
    buffingEntries?: boolean | FilingEntry$buffingEntriesArgs<ExtArgs>
    _count?: boolean | FilingEntryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FilingEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FilingEntry"
    objects: {
      filing_person: Prisma.$AddFilingPayload<ExtArgs>
      castingItem: Prisma.$CastingItemsPayload<ExtArgs>
      settingEntry: Prisma.$SettingEntryPayload<ExtArgs>[]
      buffingEntries: Prisma.$BuffingEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      filing_person_id: number
      casting_item_id: number
      weight: number
      touch: number
      item_purity: number
      remarks: string | null
      after_weight: number | null
      stone_option: $Enums.STONEOPTION
    }, ExtArgs["result"]["filingEntry"]>
    composites: {}
  }

  type FilingEntryGetPayload<S extends boolean | null | undefined | FilingEntryDefaultArgs> = $Result.GetResult<Prisma.$FilingEntryPayload, S>

  type FilingEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FilingEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilingEntryCountAggregateInputType | true
    }

  export interface FilingEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FilingEntry'], meta: { name: 'FilingEntry' } }
    /**
     * Find zero or one FilingEntry that matches the filter.
     * @param {FilingEntryFindUniqueArgs} args - Arguments to find a FilingEntry
     * @example
     * // Get one FilingEntry
     * const filingEntry = await prisma.filingEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FilingEntryFindUniqueArgs>(args: SelectSubset<T, FilingEntryFindUniqueArgs<ExtArgs>>): Prisma__FilingEntryClient<$Result.GetResult<Prisma.$FilingEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FilingEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FilingEntryFindUniqueOrThrowArgs} args - Arguments to find a FilingEntry
     * @example
     * // Get one FilingEntry
     * const filingEntry = await prisma.filingEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FilingEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, FilingEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FilingEntryClient<$Result.GetResult<Prisma.$FilingEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FilingEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilingEntryFindFirstArgs} args - Arguments to find a FilingEntry
     * @example
     * // Get one FilingEntry
     * const filingEntry = await prisma.filingEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FilingEntryFindFirstArgs>(args?: SelectSubset<T, FilingEntryFindFirstArgs<ExtArgs>>): Prisma__FilingEntryClient<$Result.GetResult<Prisma.$FilingEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FilingEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilingEntryFindFirstOrThrowArgs} args - Arguments to find a FilingEntry
     * @example
     * // Get one FilingEntry
     * const filingEntry = await prisma.filingEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FilingEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, FilingEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__FilingEntryClient<$Result.GetResult<Prisma.$FilingEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FilingEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilingEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FilingEntries
     * const filingEntries = await prisma.filingEntry.findMany()
     * 
     * // Get first 10 FilingEntries
     * const filingEntries = await prisma.filingEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filingEntryWithIdOnly = await prisma.filingEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FilingEntryFindManyArgs>(args?: SelectSubset<T, FilingEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilingEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FilingEntry.
     * @param {FilingEntryCreateArgs} args - Arguments to create a FilingEntry.
     * @example
     * // Create one FilingEntry
     * const FilingEntry = await prisma.filingEntry.create({
     *   data: {
     *     // ... data to create a FilingEntry
     *   }
     * })
     * 
     */
    create<T extends FilingEntryCreateArgs>(args: SelectSubset<T, FilingEntryCreateArgs<ExtArgs>>): Prisma__FilingEntryClient<$Result.GetResult<Prisma.$FilingEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FilingEntries.
     * @param {FilingEntryCreateManyArgs} args - Arguments to create many FilingEntries.
     * @example
     * // Create many FilingEntries
     * const filingEntry = await prisma.filingEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FilingEntryCreateManyArgs>(args?: SelectSubset<T, FilingEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FilingEntry.
     * @param {FilingEntryDeleteArgs} args - Arguments to delete one FilingEntry.
     * @example
     * // Delete one FilingEntry
     * const FilingEntry = await prisma.filingEntry.delete({
     *   where: {
     *     // ... filter to delete one FilingEntry
     *   }
     * })
     * 
     */
    delete<T extends FilingEntryDeleteArgs>(args: SelectSubset<T, FilingEntryDeleteArgs<ExtArgs>>): Prisma__FilingEntryClient<$Result.GetResult<Prisma.$FilingEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FilingEntry.
     * @param {FilingEntryUpdateArgs} args - Arguments to update one FilingEntry.
     * @example
     * // Update one FilingEntry
     * const filingEntry = await prisma.filingEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FilingEntryUpdateArgs>(args: SelectSubset<T, FilingEntryUpdateArgs<ExtArgs>>): Prisma__FilingEntryClient<$Result.GetResult<Prisma.$FilingEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FilingEntries.
     * @param {FilingEntryDeleteManyArgs} args - Arguments to filter FilingEntries to delete.
     * @example
     * // Delete a few FilingEntries
     * const { count } = await prisma.filingEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FilingEntryDeleteManyArgs>(args?: SelectSubset<T, FilingEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FilingEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilingEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FilingEntries
     * const filingEntry = await prisma.filingEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FilingEntryUpdateManyArgs>(args: SelectSubset<T, FilingEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FilingEntry.
     * @param {FilingEntryUpsertArgs} args - Arguments to update or create a FilingEntry.
     * @example
     * // Update or create a FilingEntry
     * const filingEntry = await prisma.filingEntry.upsert({
     *   create: {
     *     // ... data to create a FilingEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FilingEntry we want to update
     *   }
     * })
     */
    upsert<T extends FilingEntryUpsertArgs>(args: SelectSubset<T, FilingEntryUpsertArgs<ExtArgs>>): Prisma__FilingEntryClient<$Result.GetResult<Prisma.$FilingEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FilingEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilingEntryCountArgs} args - Arguments to filter FilingEntries to count.
     * @example
     * // Count the number of FilingEntries
     * const count = await prisma.filingEntry.count({
     *   where: {
     *     // ... the filter for the FilingEntries we want to count
     *   }
     * })
    **/
    count<T extends FilingEntryCountArgs>(
      args?: Subset<T, FilingEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilingEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FilingEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilingEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FilingEntryAggregateArgs>(args: Subset<T, FilingEntryAggregateArgs>): Prisma.PrismaPromise<GetFilingEntryAggregateType<T>>

    /**
     * Group by FilingEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilingEntryGroupByArgs} args - Group by arguments.
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
      T extends FilingEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilingEntryGroupByArgs['orderBy'] }
        : { orderBy?: FilingEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FilingEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilingEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FilingEntry model
   */
  readonly fields: FilingEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FilingEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FilingEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    filing_person<T extends AddFilingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddFilingDefaultArgs<ExtArgs>>): Prisma__AddFilingClient<$Result.GetResult<Prisma.$AddFilingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    castingItem<T extends CastingItemsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CastingItemsDefaultArgs<ExtArgs>>): Prisma__CastingItemsClient<$Result.GetResult<Prisma.$CastingItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    settingEntry<T extends FilingEntry$settingEntryArgs<ExtArgs> = {}>(args?: Subset<T, FilingEntry$settingEntryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    buffingEntries<T extends FilingEntry$buffingEntriesArgs<ExtArgs> = {}>(args?: Subset<T, FilingEntry$buffingEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuffingEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FilingEntry model
   */
  interface FilingEntryFieldRefs {
    readonly id: FieldRef<"FilingEntry", 'Int'>
    readonly createdAt: FieldRef<"FilingEntry", 'DateTime'>
    readonly filing_person_id: FieldRef<"FilingEntry", 'Int'>
    readonly casting_item_id: FieldRef<"FilingEntry", 'Int'>
    readonly weight: FieldRef<"FilingEntry", 'Float'>
    readonly touch: FieldRef<"FilingEntry", 'Float'>
    readonly item_purity: FieldRef<"FilingEntry", 'Float'>
    readonly remarks: FieldRef<"FilingEntry", 'String'>
    readonly after_weight: FieldRef<"FilingEntry", 'Float'>
    readonly stone_option: FieldRef<"FilingEntry", 'STONEOPTION'>
  }
    

  // Custom InputTypes
  /**
   * FilingEntry findUnique
   */
  export type FilingEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilingEntry
     */
    select?: FilingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilingEntry
     */
    omit?: FilingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilingEntryInclude<ExtArgs> | null
    /**
     * Filter, which FilingEntry to fetch.
     */
    where: FilingEntryWhereUniqueInput
  }

  /**
   * FilingEntry findUniqueOrThrow
   */
  export type FilingEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilingEntry
     */
    select?: FilingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilingEntry
     */
    omit?: FilingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilingEntryInclude<ExtArgs> | null
    /**
     * Filter, which FilingEntry to fetch.
     */
    where: FilingEntryWhereUniqueInput
  }

  /**
   * FilingEntry findFirst
   */
  export type FilingEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilingEntry
     */
    select?: FilingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilingEntry
     */
    omit?: FilingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilingEntryInclude<ExtArgs> | null
    /**
     * Filter, which FilingEntry to fetch.
     */
    where?: FilingEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilingEntries to fetch.
     */
    orderBy?: FilingEntryOrderByWithRelationInput | FilingEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FilingEntries.
     */
    cursor?: FilingEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilingEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilingEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FilingEntries.
     */
    distinct?: FilingEntryScalarFieldEnum | FilingEntryScalarFieldEnum[]
  }

  /**
   * FilingEntry findFirstOrThrow
   */
  export type FilingEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilingEntry
     */
    select?: FilingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilingEntry
     */
    omit?: FilingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilingEntryInclude<ExtArgs> | null
    /**
     * Filter, which FilingEntry to fetch.
     */
    where?: FilingEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilingEntries to fetch.
     */
    orderBy?: FilingEntryOrderByWithRelationInput | FilingEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FilingEntries.
     */
    cursor?: FilingEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilingEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilingEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FilingEntries.
     */
    distinct?: FilingEntryScalarFieldEnum | FilingEntryScalarFieldEnum[]
  }

  /**
   * FilingEntry findMany
   */
  export type FilingEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilingEntry
     */
    select?: FilingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilingEntry
     */
    omit?: FilingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilingEntryInclude<ExtArgs> | null
    /**
     * Filter, which FilingEntries to fetch.
     */
    where?: FilingEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilingEntries to fetch.
     */
    orderBy?: FilingEntryOrderByWithRelationInput | FilingEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FilingEntries.
     */
    cursor?: FilingEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilingEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilingEntries.
     */
    skip?: number
    distinct?: FilingEntryScalarFieldEnum | FilingEntryScalarFieldEnum[]
  }

  /**
   * FilingEntry create
   */
  export type FilingEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilingEntry
     */
    select?: FilingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilingEntry
     */
    omit?: FilingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilingEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a FilingEntry.
     */
    data: XOR<FilingEntryCreateInput, FilingEntryUncheckedCreateInput>
  }

  /**
   * FilingEntry createMany
   */
  export type FilingEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FilingEntries.
     */
    data: FilingEntryCreateManyInput | FilingEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FilingEntry update
   */
  export type FilingEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilingEntry
     */
    select?: FilingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilingEntry
     */
    omit?: FilingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilingEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a FilingEntry.
     */
    data: XOR<FilingEntryUpdateInput, FilingEntryUncheckedUpdateInput>
    /**
     * Choose, which FilingEntry to update.
     */
    where: FilingEntryWhereUniqueInput
  }

  /**
   * FilingEntry updateMany
   */
  export type FilingEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FilingEntries.
     */
    data: XOR<FilingEntryUpdateManyMutationInput, FilingEntryUncheckedUpdateManyInput>
    /**
     * Filter which FilingEntries to update
     */
    where?: FilingEntryWhereInput
    /**
     * Limit how many FilingEntries to update.
     */
    limit?: number
  }

  /**
   * FilingEntry upsert
   */
  export type FilingEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilingEntry
     */
    select?: FilingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilingEntry
     */
    omit?: FilingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilingEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the FilingEntry to update in case it exists.
     */
    where: FilingEntryWhereUniqueInput
    /**
     * In case the FilingEntry found by the `where` argument doesn't exist, create a new FilingEntry with this data.
     */
    create: XOR<FilingEntryCreateInput, FilingEntryUncheckedCreateInput>
    /**
     * In case the FilingEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FilingEntryUpdateInput, FilingEntryUncheckedUpdateInput>
  }

  /**
   * FilingEntry delete
   */
  export type FilingEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilingEntry
     */
    select?: FilingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilingEntry
     */
    omit?: FilingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilingEntryInclude<ExtArgs> | null
    /**
     * Filter which FilingEntry to delete.
     */
    where: FilingEntryWhereUniqueInput
  }

  /**
   * FilingEntry deleteMany
   */
  export type FilingEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FilingEntries to delete
     */
    where?: FilingEntryWhereInput
    /**
     * Limit how many FilingEntries to delete.
     */
    limit?: number
  }

  /**
   * FilingEntry.settingEntry
   */
  export type FilingEntry$settingEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettingEntry
     */
    select?: SettingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SettingEntry
     */
    omit?: SettingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingEntryInclude<ExtArgs> | null
    where?: SettingEntryWhereInput
    orderBy?: SettingEntryOrderByWithRelationInput | SettingEntryOrderByWithRelationInput[]
    cursor?: SettingEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SettingEntryScalarFieldEnum | SettingEntryScalarFieldEnum[]
  }

  /**
   * FilingEntry.buffingEntries
   */
  export type FilingEntry$buffingEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuffingEntry
     */
    select?: BuffingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuffingEntry
     */
    omit?: BuffingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuffingEntryInclude<ExtArgs> | null
    where?: BuffingEntryWhereInput
    orderBy?: BuffingEntryOrderByWithRelationInput | BuffingEntryOrderByWithRelationInput[]
    cursor?: BuffingEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BuffingEntryScalarFieldEnum | BuffingEntryScalarFieldEnum[]
  }

  /**
   * FilingEntry without action
   */
  export type FilingEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilingEntry
     */
    select?: FilingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilingEntry
     */
    omit?: FilingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilingEntryInclude<ExtArgs> | null
  }


  /**
   * Model SettingEntry
   */

  export type AggregateSettingEntry = {
    _count: SettingEntryCountAggregateOutputType | null
    _avg: SettingEntryAvgAggregateOutputType | null
    _sum: SettingEntrySumAggregateOutputType | null
    _min: SettingEntryMinAggregateOutputType | null
    _max: SettingEntryMaxAggregateOutputType | null
  }

  export type SettingEntryAvgAggregateOutputType = {
    id: number | null
    setting_person_id: number | null
    casting_item_id: number | null
    weight: number | null
    touch: number | null
    item_purity: number | null
    after_weight: number | null
    filing_entry_id: number | null
  }

  export type SettingEntrySumAggregateOutputType = {
    id: number | null
    setting_person_id: number | null
    casting_item_id: number | null
    weight: number | null
    touch: number | null
    item_purity: number | null
    after_weight: number | null
    filing_entry_id: number | null
  }

  export type SettingEntryMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    setting_person_id: number | null
    casting_item_id: number | null
    weight: number | null
    touch: number | null
    item_purity: number | null
    remarks: string | null
    after_weight: number | null
    filing_entry_id: number | null
  }

  export type SettingEntryMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    setting_person_id: number | null
    casting_item_id: number | null
    weight: number | null
    touch: number | null
    item_purity: number | null
    remarks: string | null
    after_weight: number | null
    filing_entry_id: number | null
  }

  export type SettingEntryCountAggregateOutputType = {
    id: number
    createdAt: number
    setting_person_id: number
    casting_item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks: number
    after_weight: number
    filing_entry_id: number
    _all: number
  }


  export type SettingEntryAvgAggregateInputType = {
    id?: true
    setting_person_id?: true
    casting_item_id?: true
    weight?: true
    touch?: true
    item_purity?: true
    after_weight?: true
    filing_entry_id?: true
  }

  export type SettingEntrySumAggregateInputType = {
    id?: true
    setting_person_id?: true
    casting_item_id?: true
    weight?: true
    touch?: true
    item_purity?: true
    after_weight?: true
    filing_entry_id?: true
  }

  export type SettingEntryMinAggregateInputType = {
    id?: true
    createdAt?: true
    setting_person_id?: true
    casting_item_id?: true
    weight?: true
    touch?: true
    item_purity?: true
    remarks?: true
    after_weight?: true
    filing_entry_id?: true
  }

  export type SettingEntryMaxAggregateInputType = {
    id?: true
    createdAt?: true
    setting_person_id?: true
    casting_item_id?: true
    weight?: true
    touch?: true
    item_purity?: true
    remarks?: true
    after_weight?: true
    filing_entry_id?: true
  }

  export type SettingEntryCountAggregateInputType = {
    id?: true
    createdAt?: true
    setting_person_id?: true
    casting_item_id?: true
    weight?: true
    touch?: true
    item_purity?: true
    remarks?: true
    after_weight?: true
    filing_entry_id?: true
    _all?: true
  }

  export type SettingEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SettingEntry to aggregate.
     */
    where?: SettingEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SettingEntries to fetch.
     */
    orderBy?: SettingEntryOrderByWithRelationInput | SettingEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SettingEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SettingEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SettingEntries
    **/
    _count?: true | SettingEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingEntryMaxAggregateInputType
  }

  export type GetSettingEntryAggregateType<T extends SettingEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateSettingEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettingEntry[P]>
      : GetScalarType<T[P], AggregateSettingEntry[P]>
  }




  export type SettingEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingEntryWhereInput
    orderBy?: SettingEntryOrderByWithAggregationInput | SettingEntryOrderByWithAggregationInput[]
    by: SettingEntryScalarFieldEnum[] | SettingEntryScalarFieldEnum
    having?: SettingEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingEntryCountAggregateInputType | true
    _avg?: SettingEntryAvgAggregateInputType
    _sum?: SettingEntrySumAggregateInputType
    _min?: SettingEntryMinAggregateInputType
    _max?: SettingEntryMaxAggregateInputType
  }

  export type SettingEntryGroupByOutputType = {
    id: number
    createdAt: Date
    setting_person_id: number
    casting_item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks: string | null
    after_weight: number | null
    filing_entry_id: number
    _count: SettingEntryCountAggregateOutputType | null
    _avg: SettingEntryAvgAggregateOutputType | null
    _sum: SettingEntrySumAggregateOutputType | null
    _min: SettingEntryMinAggregateOutputType | null
    _max: SettingEntryMaxAggregateOutputType | null
  }

  type GetSettingEntryGroupByPayload<T extends SettingEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingEntryGroupByOutputType[P]>
            : GetScalarType<T[P], SettingEntryGroupByOutputType[P]>
        }
      >
    >


  export type SettingEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    setting_person_id?: boolean
    casting_item_id?: boolean
    weight?: boolean
    touch?: boolean
    item_purity?: boolean
    remarks?: boolean
    after_weight?: boolean
    filing_entry_id?: boolean
    setting_person?: boolean | AddSettingDefaultArgs<ExtArgs>
    castingItem?: boolean | CastingItemsDefaultArgs<ExtArgs>
    filingEntry?: boolean | FilingEntryDefaultArgs<ExtArgs>
    buffingEntries?: boolean | SettingEntry$buffingEntriesArgs<ExtArgs>
    _count?: boolean | SettingEntryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settingEntry"]>



  export type SettingEntrySelectScalar = {
    id?: boolean
    createdAt?: boolean
    setting_person_id?: boolean
    casting_item_id?: boolean
    weight?: boolean
    touch?: boolean
    item_purity?: boolean
    remarks?: boolean
    after_weight?: boolean
    filing_entry_id?: boolean
  }

  export type SettingEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "setting_person_id" | "casting_item_id" | "weight" | "touch" | "item_purity" | "remarks" | "after_weight" | "filing_entry_id", ExtArgs["result"]["settingEntry"]>
  export type SettingEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    setting_person?: boolean | AddSettingDefaultArgs<ExtArgs>
    castingItem?: boolean | CastingItemsDefaultArgs<ExtArgs>
    filingEntry?: boolean | FilingEntryDefaultArgs<ExtArgs>
    buffingEntries?: boolean | SettingEntry$buffingEntriesArgs<ExtArgs>
    _count?: boolean | SettingEntryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SettingEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SettingEntry"
    objects: {
      setting_person: Prisma.$AddSettingPayload<ExtArgs>
      castingItem: Prisma.$CastingItemsPayload<ExtArgs>
      filingEntry: Prisma.$FilingEntryPayload<ExtArgs>
      buffingEntries: Prisma.$BuffingEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      setting_person_id: number
      casting_item_id: number
      weight: number
      touch: number
      item_purity: number
      remarks: string | null
      after_weight: number | null
      filing_entry_id: number
    }, ExtArgs["result"]["settingEntry"]>
    composites: {}
  }

  type SettingEntryGetPayload<S extends boolean | null | undefined | SettingEntryDefaultArgs> = $Result.GetResult<Prisma.$SettingEntryPayload, S>

  type SettingEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingEntryCountAggregateInputType | true
    }

  export interface SettingEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SettingEntry'], meta: { name: 'SettingEntry' } }
    /**
     * Find zero or one SettingEntry that matches the filter.
     * @param {SettingEntryFindUniqueArgs} args - Arguments to find a SettingEntry
     * @example
     * // Get one SettingEntry
     * const settingEntry = await prisma.settingEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingEntryFindUniqueArgs>(args: SelectSubset<T, SettingEntryFindUniqueArgs<ExtArgs>>): Prisma__SettingEntryClient<$Result.GetResult<Prisma.$SettingEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SettingEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingEntryFindUniqueOrThrowArgs} args - Arguments to find a SettingEntry
     * @example
     * // Get one SettingEntry
     * const settingEntry = await prisma.settingEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingEntryClient<$Result.GetResult<Prisma.$SettingEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SettingEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingEntryFindFirstArgs} args - Arguments to find a SettingEntry
     * @example
     * // Get one SettingEntry
     * const settingEntry = await prisma.settingEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingEntryFindFirstArgs>(args?: SelectSubset<T, SettingEntryFindFirstArgs<ExtArgs>>): Prisma__SettingEntryClient<$Result.GetResult<Prisma.$SettingEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SettingEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingEntryFindFirstOrThrowArgs} args - Arguments to find a SettingEntry
     * @example
     * // Get one SettingEntry
     * const settingEntry = await prisma.settingEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingEntryClient<$Result.GetResult<Prisma.$SettingEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SettingEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SettingEntries
     * const settingEntries = await prisma.settingEntry.findMany()
     * 
     * // Get first 10 SettingEntries
     * const settingEntries = await prisma.settingEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingEntryWithIdOnly = await prisma.settingEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingEntryFindManyArgs>(args?: SelectSubset<T, SettingEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SettingEntry.
     * @param {SettingEntryCreateArgs} args - Arguments to create a SettingEntry.
     * @example
     * // Create one SettingEntry
     * const SettingEntry = await prisma.settingEntry.create({
     *   data: {
     *     // ... data to create a SettingEntry
     *   }
     * })
     * 
     */
    create<T extends SettingEntryCreateArgs>(args: SelectSubset<T, SettingEntryCreateArgs<ExtArgs>>): Prisma__SettingEntryClient<$Result.GetResult<Prisma.$SettingEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SettingEntries.
     * @param {SettingEntryCreateManyArgs} args - Arguments to create many SettingEntries.
     * @example
     * // Create many SettingEntries
     * const settingEntry = await prisma.settingEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingEntryCreateManyArgs>(args?: SelectSubset<T, SettingEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SettingEntry.
     * @param {SettingEntryDeleteArgs} args - Arguments to delete one SettingEntry.
     * @example
     * // Delete one SettingEntry
     * const SettingEntry = await prisma.settingEntry.delete({
     *   where: {
     *     // ... filter to delete one SettingEntry
     *   }
     * })
     * 
     */
    delete<T extends SettingEntryDeleteArgs>(args: SelectSubset<T, SettingEntryDeleteArgs<ExtArgs>>): Prisma__SettingEntryClient<$Result.GetResult<Prisma.$SettingEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SettingEntry.
     * @param {SettingEntryUpdateArgs} args - Arguments to update one SettingEntry.
     * @example
     * // Update one SettingEntry
     * const settingEntry = await prisma.settingEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingEntryUpdateArgs>(args: SelectSubset<T, SettingEntryUpdateArgs<ExtArgs>>): Prisma__SettingEntryClient<$Result.GetResult<Prisma.$SettingEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SettingEntries.
     * @param {SettingEntryDeleteManyArgs} args - Arguments to filter SettingEntries to delete.
     * @example
     * // Delete a few SettingEntries
     * const { count } = await prisma.settingEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingEntryDeleteManyArgs>(args?: SelectSubset<T, SettingEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SettingEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SettingEntries
     * const settingEntry = await prisma.settingEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingEntryUpdateManyArgs>(args: SelectSubset<T, SettingEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SettingEntry.
     * @param {SettingEntryUpsertArgs} args - Arguments to update or create a SettingEntry.
     * @example
     * // Update or create a SettingEntry
     * const settingEntry = await prisma.settingEntry.upsert({
     *   create: {
     *     // ... data to create a SettingEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SettingEntry we want to update
     *   }
     * })
     */
    upsert<T extends SettingEntryUpsertArgs>(args: SelectSubset<T, SettingEntryUpsertArgs<ExtArgs>>): Prisma__SettingEntryClient<$Result.GetResult<Prisma.$SettingEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SettingEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingEntryCountArgs} args - Arguments to filter SettingEntries to count.
     * @example
     * // Count the number of SettingEntries
     * const count = await prisma.settingEntry.count({
     *   where: {
     *     // ... the filter for the SettingEntries we want to count
     *   }
     * })
    **/
    count<T extends SettingEntryCountArgs>(
      args?: Subset<T, SettingEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SettingEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingEntryAggregateArgs>(args: Subset<T, SettingEntryAggregateArgs>): Prisma.PrismaPromise<GetSettingEntryAggregateType<T>>

    /**
     * Group by SettingEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingEntryGroupByArgs} args - Group by arguments.
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
      T extends SettingEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingEntryGroupByArgs['orderBy'] }
        : { orderBy?: SettingEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SettingEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SettingEntry model
   */
  readonly fields: SettingEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SettingEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    setting_person<T extends AddSettingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddSettingDefaultArgs<ExtArgs>>): Prisma__AddSettingClient<$Result.GetResult<Prisma.$AddSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    castingItem<T extends CastingItemsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CastingItemsDefaultArgs<ExtArgs>>): Prisma__CastingItemsClient<$Result.GetResult<Prisma.$CastingItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    filingEntry<T extends FilingEntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FilingEntryDefaultArgs<ExtArgs>>): Prisma__FilingEntryClient<$Result.GetResult<Prisma.$FilingEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    buffingEntries<T extends SettingEntry$buffingEntriesArgs<ExtArgs> = {}>(args?: Subset<T, SettingEntry$buffingEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuffingEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SettingEntry model
   */
  interface SettingEntryFieldRefs {
    readonly id: FieldRef<"SettingEntry", 'Int'>
    readonly createdAt: FieldRef<"SettingEntry", 'DateTime'>
    readonly setting_person_id: FieldRef<"SettingEntry", 'Int'>
    readonly casting_item_id: FieldRef<"SettingEntry", 'Int'>
    readonly weight: FieldRef<"SettingEntry", 'Float'>
    readonly touch: FieldRef<"SettingEntry", 'Float'>
    readonly item_purity: FieldRef<"SettingEntry", 'Float'>
    readonly remarks: FieldRef<"SettingEntry", 'String'>
    readonly after_weight: FieldRef<"SettingEntry", 'Float'>
    readonly filing_entry_id: FieldRef<"SettingEntry", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SettingEntry findUnique
   */
  export type SettingEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettingEntry
     */
    select?: SettingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SettingEntry
     */
    omit?: SettingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingEntryInclude<ExtArgs> | null
    /**
     * Filter, which SettingEntry to fetch.
     */
    where: SettingEntryWhereUniqueInput
  }

  /**
   * SettingEntry findUniqueOrThrow
   */
  export type SettingEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettingEntry
     */
    select?: SettingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SettingEntry
     */
    omit?: SettingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingEntryInclude<ExtArgs> | null
    /**
     * Filter, which SettingEntry to fetch.
     */
    where: SettingEntryWhereUniqueInput
  }

  /**
   * SettingEntry findFirst
   */
  export type SettingEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettingEntry
     */
    select?: SettingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SettingEntry
     */
    omit?: SettingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingEntryInclude<ExtArgs> | null
    /**
     * Filter, which SettingEntry to fetch.
     */
    where?: SettingEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SettingEntries to fetch.
     */
    orderBy?: SettingEntryOrderByWithRelationInput | SettingEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SettingEntries.
     */
    cursor?: SettingEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SettingEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SettingEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SettingEntries.
     */
    distinct?: SettingEntryScalarFieldEnum | SettingEntryScalarFieldEnum[]
  }

  /**
   * SettingEntry findFirstOrThrow
   */
  export type SettingEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettingEntry
     */
    select?: SettingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SettingEntry
     */
    omit?: SettingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingEntryInclude<ExtArgs> | null
    /**
     * Filter, which SettingEntry to fetch.
     */
    where?: SettingEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SettingEntries to fetch.
     */
    orderBy?: SettingEntryOrderByWithRelationInput | SettingEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SettingEntries.
     */
    cursor?: SettingEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SettingEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SettingEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SettingEntries.
     */
    distinct?: SettingEntryScalarFieldEnum | SettingEntryScalarFieldEnum[]
  }

  /**
   * SettingEntry findMany
   */
  export type SettingEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettingEntry
     */
    select?: SettingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SettingEntry
     */
    omit?: SettingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingEntryInclude<ExtArgs> | null
    /**
     * Filter, which SettingEntries to fetch.
     */
    where?: SettingEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SettingEntries to fetch.
     */
    orderBy?: SettingEntryOrderByWithRelationInput | SettingEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SettingEntries.
     */
    cursor?: SettingEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SettingEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SettingEntries.
     */
    skip?: number
    distinct?: SettingEntryScalarFieldEnum | SettingEntryScalarFieldEnum[]
  }

  /**
   * SettingEntry create
   */
  export type SettingEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettingEntry
     */
    select?: SettingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SettingEntry
     */
    omit?: SettingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a SettingEntry.
     */
    data: XOR<SettingEntryCreateInput, SettingEntryUncheckedCreateInput>
  }

  /**
   * SettingEntry createMany
   */
  export type SettingEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SettingEntries.
     */
    data: SettingEntryCreateManyInput | SettingEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SettingEntry update
   */
  export type SettingEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettingEntry
     */
    select?: SettingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SettingEntry
     */
    omit?: SettingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a SettingEntry.
     */
    data: XOR<SettingEntryUpdateInput, SettingEntryUncheckedUpdateInput>
    /**
     * Choose, which SettingEntry to update.
     */
    where: SettingEntryWhereUniqueInput
  }

  /**
   * SettingEntry updateMany
   */
  export type SettingEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SettingEntries.
     */
    data: XOR<SettingEntryUpdateManyMutationInput, SettingEntryUncheckedUpdateManyInput>
    /**
     * Filter which SettingEntries to update
     */
    where?: SettingEntryWhereInput
    /**
     * Limit how many SettingEntries to update.
     */
    limit?: number
  }

  /**
   * SettingEntry upsert
   */
  export type SettingEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettingEntry
     */
    select?: SettingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SettingEntry
     */
    omit?: SettingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the SettingEntry to update in case it exists.
     */
    where: SettingEntryWhereUniqueInput
    /**
     * In case the SettingEntry found by the `where` argument doesn't exist, create a new SettingEntry with this data.
     */
    create: XOR<SettingEntryCreateInput, SettingEntryUncheckedCreateInput>
    /**
     * In case the SettingEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingEntryUpdateInput, SettingEntryUncheckedUpdateInput>
  }

  /**
   * SettingEntry delete
   */
  export type SettingEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettingEntry
     */
    select?: SettingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SettingEntry
     */
    omit?: SettingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingEntryInclude<ExtArgs> | null
    /**
     * Filter which SettingEntry to delete.
     */
    where: SettingEntryWhereUniqueInput
  }

  /**
   * SettingEntry deleteMany
   */
  export type SettingEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SettingEntries to delete
     */
    where?: SettingEntryWhereInput
    /**
     * Limit how many SettingEntries to delete.
     */
    limit?: number
  }

  /**
   * SettingEntry.buffingEntries
   */
  export type SettingEntry$buffingEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuffingEntry
     */
    select?: BuffingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuffingEntry
     */
    omit?: BuffingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuffingEntryInclude<ExtArgs> | null
    where?: BuffingEntryWhereInput
    orderBy?: BuffingEntryOrderByWithRelationInput | BuffingEntryOrderByWithRelationInput[]
    cursor?: BuffingEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BuffingEntryScalarFieldEnum | BuffingEntryScalarFieldEnum[]
  }

  /**
   * SettingEntry without action
   */
  export type SettingEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettingEntry
     */
    select?: SettingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SettingEntry
     */
    omit?: SettingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingEntryInclude<ExtArgs> | null
  }


  /**
   * Model BuffingEntry
   */

  export type AggregateBuffingEntry = {
    _count: BuffingEntryCountAggregateOutputType | null
    _avg: BuffingEntryAvgAggregateOutputType | null
    _sum: BuffingEntrySumAggregateOutputType | null
    _min: BuffingEntryMinAggregateOutputType | null
    _max: BuffingEntryMaxAggregateOutputType | null
  }

  export type BuffingEntryAvgAggregateOutputType = {
    id: number | null
    buffing_person_id: number | null
    casting_item_id: number | null
    weight: number | null
    touch: number | null
    item_purity: number | null
    after_weight: number | null
    setting_entry_id: number | null
    filing_entry_id: number | null
  }

  export type BuffingEntrySumAggregateOutputType = {
    id: number | null
    buffing_person_id: number | null
    casting_item_id: number | null
    weight: number | null
    touch: number | null
    item_purity: number | null
    after_weight: number | null
    setting_entry_id: number | null
    filing_entry_id: number | null
  }

  export type BuffingEntryMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    buffing_person_id: number | null
    casting_item_id: number | null
    weight: number | null
    touch: number | null
    item_purity: number | null
    remarks: string | null
    after_weight: number | null
    setting_entry_id: number | null
    filing_entry_id: number | null
    type: $Enums.STONEOPTION | null
  }

  export type BuffingEntryMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    buffing_person_id: number | null
    casting_item_id: number | null
    weight: number | null
    touch: number | null
    item_purity: number | null
    remarks: string | null
    after_weight: number | null
    setting_entry_id: number | null
    filing_entry_id: number | null
    type: $Enums.STONEOPTION | null
  }

  export type BuffingEntryCountAggregateOutputType = {
    id: number
    createdAt: number
    buffing_person_id: number
    casting_item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks: number
    after_weight: number
    setting_entry_id: number
    filing_entry_id: number
    type: number
    _all: number
  }


  export type BuffingEntryAvgAggregateInputType = {
    id?: true
    buffing_person_id?: true
    casting_item_id?: true
    weight?: true
    touch?: true
    item_purity?: true
    after_weight?: true
    setting_entry_id?: true
    filing_entry_id?: true
  }

  export type BuffingEntrySumAggregateInputType = {
    id?: true
    buffing_person_id?: true
    casting_item_id?: true
    weight?: true
    touch?: true
    item_purity?: true
    after_weight?: true
    setting_entry_id?: true
    filing_entry_id?: true
  }

  export type BuffingEntryMinAggregateInputType = {
    id?: true
    createdAt?: true
    buffing_person_id?: true
    casting_item_id?: true
    weight?: true
    touch?: true
    item_purity?: true
    remarks?: true
    after_weight?: true
    setting_entry_id?: true
    filing_entry_id?: true
    type?: true
  }

  export type BuffingEntryMaxAggregateInputType = {
    id?: true
    createdAt?: true
    buffing_person_id?: true
    casting_item_id?: true
    weight?: true
    touch?: true
    item_purity?: true
    remarks?: true
    after_weight?: true
    setting_entry_id?: true
    filing_entry_id?: true
    type?: true
  }

  export type BuffingEntryCountAggregateInputType = {
    id?: true
    createdAt?: true
    buffing_person_id?: true
    casting_item_id?: true
    weight?: true
    touch?: true
    item_purity?: true
    remarks?: true
    after_weight?: true
    setting_entry_id?: true
    filing_entry_id?: true
    type?: true
    _all?: true
  }

  export type BuffingEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BuffingEntry to aggregate.
     */
    where?: BuffingEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuffingEntries to fetch.
     */
    orderBy?: BuffingEntryOrderByWithRelationInput | BuffingEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BuffingEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuffingEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuffingEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BuffingEntries
    **/
    _count?: true | BuffingEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BuffingEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BuffingEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BuffingEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BuffingEntryMaxAggregateInputType
  }

  export type GetBuffingEntryAggregateType<T extends BuffingEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateBuffingEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuffingEntry[P]>
      : GetScalarType<T[P], AggregateBuffingEntry[P]>
  }




  export type BuffingEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuffingEntryWhereInput
    orderBy?: BuffingEntryOrderByWithAggregationInput | BuffingEntryOrderByWithAggregationInput[]
    by: BuffingEntryScalarFieldEnum[] | BuffingEntryScalarFieldEnum
    having?: BuffingEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BuffingEntryCountAggregateInputType | true
    _avg?: BuffingEntryAvgAggregateInputType
    _sum?: BuffingEntrySumAggregateInputType
    _min?: BuffingEntryMinAggregateInputType
    _max?: BuffingEntryMaxAggregateInputType
  }

  export type BuffingEntryGroupByOutputType = {
    id: number
    createdAt: Date
    buffing_person_id: number
    casting_item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks: string | null
    after_weight: number | null
    setting_entry_id: number
    filing_entry_id: number
    type: $Enums.STONEOPTION
    _count: BuffingEntryCountAggregateOutputType | null
    _avg: BuffingEntryAvgAggregateOutputType | null
    _sum: BuffingEntrySumAggregateOutputType | null
    _min: BuffingEntryMinAggregateOutputType | null
    _max: BuffingEntryMaxAggregateOutputType | null
  }

  type GetBuffingEntryGroupByPayload<T extends BuffingEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BuffingEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BuffingEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BuffingEntryGroupByOutputType[P]>
            : GetScalarType<T[P], BuffingEntryGroupByOutputType[P]>
        }
      >
    >


  export type BuffingEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    buffing_person_id?: boolean
    casting_item_id?: boolean
    weight?: boolean
    touch?: boolean
    item_purity?: boolean
    remarks?: boolean
    after_weight?: boolean
    setting_entry_id?: boolean
    filing_entry_id?: boolean
    type?: boolean
    buffing_person?: boolean | AddBuffingDefaultArgs<ExtArgs>
    castingItem?: boolean | CastingItemsDefaultArgs<ExtArgs>
    settingEntry?: boolean | SettingEntryDefaultArgs<ExtArgs>
    filingEntry?: boolean | FilingEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buffingEntry"]>



  export type BuffingEntrySelectScalar = {
    id?: boolean
    createdAt?: boolean
    buffing_person_id?: boolean
    casting_item_id?: boolean
    weight?: boolean
    touch?: boolean
    item_purity?: boolean
    remarks?: boolean
    after_weight?: boolean
    setting_entry_id?: boolean
    filing_entry_id?: boolean
    type?: boolean
  }

  export type BuffingEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "buffing_person_id" | "casting_item_id" | "weight" | "touch" | "item_purity" | "remarks" | "after_weight" | "setting_entry_id" | "filing_entry_id" | "type", ExtArgs["result"]["buffingEntry"]>
  export type BuffingEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buffing_person?: boolean | AddBuffingDefaultArgs<ExtArgs>
    castingItem?: boolean | CastingItemsDefaultArgs<ExtArgs>
    settingEntry?: boolean | SettingEntryDefaultArgs<ExtArgs>
    filingEntry?: boolean | FilingEntryDefaultArgs<ExtArgs>
  }

  export type $BuffingEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BuffingEntry"
    objects: {
      buffing_person: Prisma.$AddBuffingPayload<ExtArgs>
      castingItem: Prisma.$CastingItemsPayload<ExtArgs>
      settingEntry: Prisma.$SettingEntryPayload<ExtArgs>
      filingEntry: Prisma.$FilingEntryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      buffing_person_id: number
      casting_item_id: number
      weight: number
      touch: number
      item_purity: number
      remarks: string | null
      after_weight: number | null
      setting_entry_id: number
      filing_entry_id: number
      type: $Enums.STONEOPTION
    }, ExtArgs["result"]["buffingEntry"]>
    composites: {}
  }

  type BuffingEntryGetPayload<S extends boolean | null | undefined | BuffingEntryDefaultArgs> = $Result.GetResult<Prisma.$BuffingEntryPayload, S>

  type BuffingEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BuffingEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BuffingEntryCountAggregateInputType | true
    }

  export interface BuffingEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BuffingEntry'], meta: { name: 'BuffingEntry' } }
    /**
     * Find zero or one BuffingEntry that matches the filter.
     * @param {BuffingEntryFindUniqueArgs} args - Arguments to find a BuffingEntry
     * @example
     * // Get one BuffingEntry
     * const buffingEntry = await prisma.buffingEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BuffingEntryFindUniqueArgs>(args: SelectSubset<T, BuffingEntryFindUniqueArgs<ExtArgs>>): Prisma__BuffingEntryClient<$Result.GetResult<Prisma.$BuffingEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BuffingEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BuffingEntryFindUniqueOrThrowArgs} args - Arguments to find a BuffingEntry
     * @example
     * // Get one BuffingEntry
     * const buffingEntry = await prisma.buffingEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BuffingEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, BuffingEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BuffingEntryClient<$Result.GetResult<Prisma.$BuffingEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BuffingEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuffingEntryFindFirstArgs} args - Arguments to find a BuffingEntry
     * @example
     * // Get one BuffingEntry
     * const buffingEntry = await prisma.buffingEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BuffingEntryFindFirstArgs>(args?: SelectSubset<T, BuffingEntryFindFirstArgs<ExtArgs>>): Prisma__BuffingEntryClient<$Result.GetResult<Prisma.$BuffingEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BuffingEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuffingEntryFindFirstOrThrowArgs} args - Arguments to find a BuffingEntry
     * @example
     * // Get one BuffingEntry
     * const buffingEntry = await prisma.buffingEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BuffingEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, BuffingEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__BuffingEntryClient<$Result.GetResult<Prisma.$BuffingEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BuffingEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuffingEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BuffingEntries
     * const buffingEntries = await prisma.buffingEntry.findMany()
     * 
     * // Get first 10 BuffingEntries
     * const buffingEntries = await prisma.buffingEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const buffingEntryWithIdOnly = await prisma.buffingEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BuffingEntryFindManyArgs>(args?: SelectSubset<T, BuffingEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuffingEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BuffingEntry.
     * @param {BuffingEntryCreateArgs} args - Arguments to create a BuffingEntry.
     * @example
     * // Create one BuffingEntry
     * const BuffingEntry = await prisma.buffingEntry.create({
     *   data: {
     *     // ... data to create a BuffingEntry
     *   }
     * })
     * 
     */
    create<T extends BuffingEntryCreateArgs>(args: SelectSubset<T, BuffingEntryCreateArgs<ExtArgs>>): Prisma__BuffingEntryClient<$Result.GetResult<Prisma.$BuffingEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BuffingEntries.
     * @param {BuffingEntryCreateManyArgs} args - Arguments to create many BuffingEntries.
     * @example
     * // Create many BuffingEntries
     * const buffingEntry = await prisma.buffingEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BuffingEntryCreateManyArgs>(args?: SelectSubset<T, BuffingEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BuffingEntry.
     * @param {BuffingEntryDeleteArgs} args - Arguments to delete one BuffingEntry.
     * @example
     * // Delete one BuffingEntry
     * const BuffingEntry = await prisma.buffingEntry.delete({
     *   where: {
     *     // ... filter to delete one BuffingEntry
     *   }
     * })
     * 
     */
    delete<T extends BuffingEntryDeleteArgs>(args: SelectSubset<T, BuffingEntryDeleteArgs<ExtArgs>>): Prisma__BuffingEntryClient<$Result.GetResult<Prisma.$BuffingEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BuffingEntry.
     * @param {BuffingEntryUpdateArgs} args - Arguments to update one BuffingEntry.
     * @example
     * // Update one BuffingEntry
     * const buffingEntry = await prisma.buffingEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BuffingEntryUpdateArgs>(args: SelectSubset<T, BuffingEntryUpdateArgs<ExtArgs>>): Prisma__BuffingEntryClient<$Result.GetResult<Prisma.$BuffingEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BuffingEntries.
     * @param {BuffingEntryDeleteManyArgs} args - Arguments to filter BuffingEntries to delete.
     * @example
     * // Delete a few BuffingEntries
     * const { count } = await prisma.buffingEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BuffingEntryDeleteManyArgs>(args?: SelectSubset<T, BuffingEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BuffingEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuffingEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BuffingEntries
     * const buffingEntry = await prisma.buffingEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BuffingEntryUpdateManyArgs>(args: SelectSubset<T, BuffingEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BuffingEntry.
     * @param {BuffingEntryUpsertArgs} args - Arguments to update or create a BuffingEntry.
     * @example
     * // Update or create a BuffingEntry
     * const buffingEntry = await prisma.buffingEntry.upsert({
     *   create: {
     *     // ... data to create a BuffingEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BuffingEntry we want to update
     *   }
     * })
     */
    upsert<T extends BuffingEntryUpsertArgs>(args: SelectSubset<T, BuffingEntryUpsertArgs<ExtArgs>>): Prisma__BuffingEntryClient<$Result.GetResult<Prisma.$BuffingEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BuffingEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuffingEntryCountArgs} args - Arguments to filter BuffingEntries to count.
     * @example
     * // Count the number of BuffingEntries
     * const count = await prisma.buffingEntry.count({
     *   where: {
     *     // ... the filter for the BuffingEntries we want to count
     *   }
     * })
    **/
    count<T extends BuffingEntryCountArgs>(
      args?: Subset<T, BuffingEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BuffingEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BuffingEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuffingEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BuffingEntryAggregateArgs>(args: Subset<T, BuffingEntryAggregateArgs>): Prisma.PrismaPromise<GetBuffingEntryAggregateType<T>>

    /**
     * Group by BuffingEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuffingEntryGroupByArgs} args - Group by arguments.
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
      T extends BuffingEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BuffingEntryGroupByArgs['orderBy'] }
        : { orderBy?: BuffingEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BuffingEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuffingEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BuffingEntry model
   */
  readonly fields: BuffingEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BuffingEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BuffingEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buffing_person<T extends AddBuffingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddBuffingDefaultArgs<ExtArgs>>): Prisma__AddBuffingClient<$Result.GetResult<Prisma.$AddBuffingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    castingItem<T extends CastingItemsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CastingItemsDefaultArgs<ExtArgs>>): Prisma__CastingItemsClient<$Result.GetResult<Prisma.$CastingItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    settingEntry<T extends SettingEntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SettingEntryDefaultArgs<ExtArgs>>): Prisma__SettingEntryClient<$Result.GetResult<Prisma.$SettingEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    filingEntry<T extends FilingEntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FilingEntryDefaultArgs<ExtArgs>>): Prisma__FilingEntryClient<$Result.GetResult<Prisma.$FilingEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BuffingEntry model
   */
  interface BuffingEntryFieldRefs {
    readonly id: FieldRef<"BuffingEntry", 'Int'>
    readonly createdAt: FieldRef<"BuffingEntry", 'DateTime'>
    readonly buffing_person_id: FieldRef<"BuffingEntry", 'Int'>
    readonly casting_item_id: FieldRef<"BuffingEntry", 'Int'>
    readonly weight: FieldRef<"BuffingEntry", 'Float'>
    readonly touch: FieldRef<"BuffingEntry", 'Float'>
    readonly item_purity: FieldRef<"BuffingEntry", 'Float'>
    readonly remarks: FieldRef<"BuffingEntry", 'String'>
    readonly after_weight: FieldRef<"BuffingEntry", 'Float'>
    readonly setting_entry_id: FieldRef<"BuffingEntry", 'Int'>
    readonly filing_entry_id: FieldRef<"BuffingEntry", 'Int'>
    readonly type: FieldRef<"BuffingEntry", 'STONEOPTION'>
  }
    

  // Custom InputTypes
  /**
   * BuffingEntry findUnique
   */
  export type BuffingEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuffingEntry
     */
    select?: BuffingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuffingEntry
     */
    omit?: BuffingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuffingEntryInclude<ExtArgs> | null
    /**
     * Filter, which BuffingEntry to fetch.
     */
    where: BuffingEntryWhereUniqueInput
  }

  /**
   * BuffingEntry findUniqueOrThrow
   */
  export type BuffingEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuffingEntry
     */
    select?: BuffingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuffingEntry
     */
    omit?: BuffingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuffingEntryInclude<ExtArgs> | null
    /**
     * Filter, which BuffingEntry to fetch.
     */
    where: BuffingEntryWhereUniqueInput
  }

  /**
   * BuffingEntry findFirst
   */
  export type BuffingEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuffingEntry
     */
    select?: BuffingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuffingEntry
     */
    omit?: BuffingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuffingEntryInclude<ExtArgs> | null
    /**
     * Filter, which BuffingEntry to fetch.
     */
    where?: BuffingEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuffingEntries to fetch.
     */
    orderBy?: BuffingEntryOrderByWithRelationInput | BuffingEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BuffingEntries.
     */
    cursor?: BuffingEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuffingEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuffingEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BuffingEntries.
     */
    distinct?: BuffingEntryScalarFieldEnum | BuffingEntryScalarFieldEnum[]
  }

  /**
   * BuffingEntry findFirstOrThrow
   */
  export type BuffingEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuffingEntry
     */
    select?: BuffingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuffingEntry
     */
    omit?: BuffingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuffingEntryInclude<ExtArgs> | null
    /**
     * Filter, which BuffingEntry to fetch.
     */
    where?: BuffingEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuffingEntries to fetch.
     */
    orderBy?: BuffingEntryOrderByWithRelationInput | BuffingEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BuffingEntries.
     */
    cursor?: BuffingEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuffingEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuffingEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BuffingEntries.
     */
    distinct?: BuffingEntryScalarFieldEnum | BuffingEntryScalarFieldEnum[]
  }

  /**
   * BuffingEntry findMany
   */
  export type BuffingEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuffingEntry
     */
    select?: BuffingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuffingEntry
     */
    omit?: BuffingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuffingEntryInclude<ExtArgs> | null
    /**
     * Filter, which BuffingEntries to fetch.
     */
    where?: BuffingEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuffingEntries to fetch.
     */
    orderBy?: BuffingEntryOrderByWithRelationInput | BuffingEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BuffingEntries.
     */
    cursor?: BuffingEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuffingEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuffingEntries.
     */
    skip?: number
    distinct?: BuffingEntryScalarFieldEnum | BuffingEntryScalarFieldEnum[]
  }

  /**
   * BuffingEntry create
   */
  export type BuffingEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuffingEntry
     */
    select?: BuffingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuffingEntry
     */
    omit?: BuffingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuffingEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a BuffingEntry.
     */
    data: XOR<BuffingEntryCreateInput, BuffingEntryUncheckedCreateInput>
  }

  /**
   * BuffingEntry createMany
   */
  export type BuffingEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BuffingEntries.
     */
    data: BuffingEntryCreateManyInput | BuffingEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BuffingEntry update
   */
  export type BuffingEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuffingEntry
     */
    select?: BuffingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuffingEntry
     */
    omit?: BuffingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuffingEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a BuffingEntry.
     */
    data: XOR<BuffingEntryUpdateInput, BuffingEntryUncheckedUpdateInput>
    /**
     * Choose, which BuffingEntry to update.
     */
    where: BuffingEntryWhereUniqueInput
  }

  /**
   * BuffingEntry updateMany
   */
  export type BuffingEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BuffingEntries.
     */
    data: XOR<BuffingEntryUpdateManyMutationInput, BuffingEntryUncheckedUpdateManyInput>
    /**
     * Filter which BuffingEntries to update
     */
    where?: BuffingEntryWhereInput
    /**
     * Limit how many BuffingEntries to update.
     */
    limit?: number
  }

  /**
   * BuffingEntry upsert
   */
  export type BuffingEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuffingEntry
     */
    select?: BuffingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuffingEntry
     */
    omit?: BuffingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuffingEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the BuffingEntry to update in case it exists.
     */
    where: BuffingEntryWhereUniqueInput
    /**
     * In case the BuffingEntry found by the `where` argument doesn't exist, create a new BuffingEntry with this data.
     */
    create: XOR<BuffingEntryCreateInput, BuffingEntryUncheckedCreateInput>
    /**
     * In case the BuffingEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BuffingEntryUpdateInput, BuffingEntryUncheckedUpdateInput>
  }

  /**
   * BuffingEntry delete
   */
  export type BuffingEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuffingEntry
     */
    select?: BuffingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuffingEntry
     */
    omit?: BuffingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuffingEntryInclude<ExtArgs> | null
    /**
     * Filter which BuffingEntry to delete.
     */
    where: BuffingEntryWhereUniqueInput
  }

  /**
   * BuffingEntry deleteMany
   */
  export type BuffingEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BuffingEntries to delete
     */
    where?: BuffingEntryWhereInput
    /**
     * Limit how many BuffingEntries to delete.
     */
    limit?: number
  }

  /**
   * BuffingEntry without action
   */
  export type BuffingEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuffingEntry
     */
    select?: BuffingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuffingEntry
     */
    omit?: BuffingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuffingEntryInclude<ExtArgs> | null
  }


  /**
   * Model Stock
   */

  export type AggregateStock = {
    _count: StockCountAggregateOutputType | null
    _avg: StockAvgAggregateOutputType | null
    _sum: StockSumAggregateOutputType | null
    _min: StockMinAggregateOutputType | null
    _max: StockMaxAggregateOutputType | null
  }

  export type StockAvgAggregateOutputType = {
    id: number | null
    casting_item_id: number | null
    item_id: number | null
    weight: number | null
    touch: number | null
    item_purity: number | null
    scrap_weight: number | null
    scrap_wastage: number | null
    casting_customer_id: number | null
  }

  export type StockSumAggregateOutputType = {
    id: number | null
    casting_item_id: number | null
    item_id: number | null
    weight: number | null
    touch: number | null
    item_purity: number | null
    scrap_weight: number | null
    scrap_wastage: number | null
    casting_customer_id: number | null
  }

  export type StockMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    casting_item_id: number | null
    item_id: number | null
    weight: number | null
    touch: number | null
    item_purity: number | null
    remarks: string | null
    scrap_weight: number | null
    scrap_wastage: number | null
    casting_customer_id: number | null
  }

  export type StockMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    casting_item_id: number | null
    item_id: number | null
    weight: number | null
    touch: number | null
    item_purity: number | null
    remarks: string | null
    scrap_weight: number | null
    scrap_wastage: number | null
    casting_customer_id: number | null
  }

  export type StockCountAggregateOutputType = {
    id: number
    createdAt: number
    casting_item_id: number
    item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks: number
    scrap_weight: number
    scrap_wastage: number
    casting_customer_id: number
    _all: number
  }


  export type StockAvgAggregateInputType = {
    id?: true
    casting_item_id?: true
    item_id?: true
    weight?: true
    touch?: true
    item_purity?: true
    scrap_weight?: true
    scrap_wastage?: true
    casting_customer_id?: true
  }

  export type StockSumAggregateInputType = {
    id?: true
    casting_item_id?: true
    item_id?: true
    weight?: true
    touch?: true
    item_purity?: true
    scrap_weight?: true
    scrap_wastage?: true
    casting_customer_id?: true
  }

  export type StockMinAggregateInputType = {
    id?: true
    createdAt?: true
    casting_item_id?: true
    item_id?: true
    weight?: true
    touch?: true
    item_purity?: true
    remarks?: true
    scrap_weight?: true
    scrap_wastage?: true
    casting_customer_id?: true
  }

  export type StockMaxAggregateInputType = {
    id?: true
    createdAt?: true
    casting_item_id?: true
    item_id?: true
    weight?: true
    touch?: true
    item_purity?: true
    remarks?: true
    scrap_weight?: true
    scrap_wastage?: true
    casting_customer_id?: true
  }

  export type StockCountAggregateInputType = {
    id?: true
    createdAt?: true
    casting_item_id?: true
    item_id?: true
    weight?: true
    touch?: true
    item_purity?: true
    remarks?: true
    scrap_weight?: true
    scrap_wastage?: true
    casting_customer_id?: true
    _all?: true
  }

  export type StockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stock to aggregate.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stocks
    **/
    _count?: true | StockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockMaxAggregateInputType
  }

  export type GetStockAggregateType<T extends StockAggregateArgs> = {
        [P in keyof T & keyof AggregateStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStock[P]>
      : GetScalarType<T[P], AggregateStock[P]>
  }




  export type StockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockWhereInput
    orderBy?: StockOrderByWithAggregationInput | StockOrderByWithAggregationInput[]
    by: StockScalarFieldEnum[] | StockScalarFieldEnum
    having?: StockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockCountAggregateInputType | true
    _avg?: StockAvgAggregateInputType
    _sum?: StockSumAggregateInputType
    _min?: StockMinAggregateInputType
    _max?: StockMaxAggregateInputType
  }

  export type StockGroupByOutputType = {
    id: number
    createdAt: Date
    casting_item_id: number
    item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks: string | null
    scrap_weight: number | null
    scrap_wastage: number | null
    casting_customer_id: number
    _count: StockCountAggregateOutputType | null
    _avg: StockAvgAggregateOutputType | null
    _sum: StockSumAggregateOutputType | null
    _min: StockMinAggregateOutputType | null
    _max: StockMaxAggregateOutputType | null
  }

  type GetStockGroupByPayload<T extends StockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockGroupByOutputType[P]>
            : GetScalarType<T[P], StockGroupByOutputType[P]>
        }
      >
    >


  export type StockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    casting_item_id?: boolean
    item_id?: boolean
    weight?: boolean
    touch?: boolean
    item_purity?: boolean
    remarks?: boolean
    scrap_weight?: boolean
    scrap_wastage?: boolean
    casting_customer_id?: boolean
    castingItem?: boolean | CastingItemsDefaultArgs<ExtArgs>
    item?: boolean | AddItemDefaultArgs<ExtArgs>
    casting_customer?: boolean | AddCastingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock"]>



  export type StockSelectScalar = {
    id?: boolean
    createdAt?: boolean
    casting_item_id?: boolean
    item_id?: boolean
    weight?: boolean
    touch?: boolean
    item_purity?: boolean
    remarks?: boolean
    scrap_weight?: boolean
    scrap_wastage?: boolean
    casting_customer_id?: boolean
  }

  export type StockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "casting_item_id" | "item_id" | "weight" | "touch" | "item_purity" | "remarks" | "scrap_weight" | "scrap_wastage" | "casting_customer_id", ExtArgs["result"]["stock"]>
  export type StockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    castingItem?: boolean | CastingItemsDefaultArgs<ExtArgs>
    item?: boolean | AddItemDefaultArgs<ExtArgs>
    casting_customer?: boolean | AddCastingDefaultArgs<ExtArgs>
  }

  export type $StockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stock"
    objects: {
      castingItem: Prisma.$CastingItemsPayload<ExtArgs>
      item: Prisma.$AddItemPayload<ExtArgs>
      casting_customer: Prisma.$AddCastingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      casting_item_id: number
      item_id: number
      weight: number
      touch: number
      item_purity: number
      remarks: string | null
      scrap_weight: number | null
      scrap_wastage: number | null
      casting_customer_id: number
    }, ExtArgs["result"]["stock"]>
    composites: {}
  }

  type StockGetPayload<S extends boolean | null | undefined | StockDefaultArgs> = $Result.GetResult<Prisma.$StockPayload, S>

  type StockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockCountAggregateInputType | true
    }

  export interface StockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stock'], meta: { name: 'Stock' } }
    /**
     * Find zero or one Stock that matches the filter.
     * @param {StockFindUniqueArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockFindUniqueArgs>(args: SelectSubset<T, StockFindUniqueArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockFindUniqueOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockFindUniqueOrThrowArgs>(args: SelectSubset<T, StockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindFirstArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockFindFirstArgs>(args?: SelectSubset<T, StockFindFirstArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindFirstOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockFindFirstOrThrowArgs>(args?: SelectSubset<T, StockFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stocks
     * const stocks = await prisma.stock.findMany()
     * 
     * // Get first 10 Stocks
     * const stocks = await prisma.stock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockWithIdOnly = await prisma.stock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockFindManyArgs>(args?: SelectSubset<T, StockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stock.
     * @param {StockCreateArgs} args - Arguments to create a Stock.
     * @example
     * // Create one Stock
     * const Stock = await prisma.stock.create({
     *   data: {
     *     // ... data to create a Stock
     *   }
     * })
     * 
     */
    create<T extends StockCreateArgs>(args: SelectSubset<T, StockCreateArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stocks.
     * @param {StockCreateManyArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stock = await prisma.stock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockCreateManyArgs>(args?: SelectSubset<T, StockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Stock.
     * @param {StockDeleteArgs} args - Arguments to delete one Stock.
     * @example
     * // Delete one Stock
     * const Stock = await prisma.stock.delete({
     *   where: {
     *     // ... filter to delete one Stock
     *   }
     * })
     * 
     */
    delete<T extends StockDeleteArgs>(args: SelectSubset<T, StockDeleteArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stock.
     * @param {StockUpdateArgs} args - Arguments to update one Stock.
     * @example
     * // Update one Stock
     * const stock = await prisma.stock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockUpdateArgs>(args: SelectSubset<T, StockUpdateArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stocks.
     * @param {StockDeleteManyArgs} args - Arguments to filter Stocks to delete.
     * @example
     * // Delete a few Stocks
     * const { count } = await prisma.stock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockDeleteManyArgs>(args?: SelectSubset<T, StockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stocks
     * const stock = await prisma.stock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockUpdateManyArgs>(args: SelectSubset<T, StockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Stock.
     * @param {StockUpsertArgs} args - Arguments to update or create a Stock.
     * @example
     * // Update or create a Stock
     * const stock = await prisma.stock.upsert({
     *   create: {
     *     // ... data to create a Stock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stock we want to update
     *   }
     * })
     */
    upsert<T extends StockUpsertArgs>(args: SelectSubset<T, StockUpsertArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockCountArgs} args - Arguments to filter Stocks to count.
     * @example
     * // Count the number of Stocks
     * const count = await prisma.stock.count({
     *   where: {
     *     // ... the filter for the Stocks we want to count
     *   }
     * })
    **/
    count<T extends StockCountArgs>(
      args?: Subset<T, StockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StockAggregateArgs>(args: Subset<T, StockAggregateArgs>): Prisma.PrismaPromise<GetStockAggregateType<T>>

    /**
     * Group by Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockGroupByArgs} args - Group by arguments.
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
      T extends StockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockGroupByArgs['orderBy'] }
        : { orderBy?: StockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stock model
   */
  readonly fields: StockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    castingItem<T extends CastingItemsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CastingItemsDefaultArgs<ExtArgs>>): Prisma__CastingItemsClient<$Result.GetResult<Prisma.$CastingItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item<T extends AddItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddItemDefaultArgs<ExtArgs>>): Prisma__AddItemClient<$Result.GetResult<Prisma.$AddItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    casting_customer<T extends AddCastingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddCastingDefaultArgs<ExtArgs>>): Prisma__AddCastingClient<$Result.GetResult<Prisma.$AddCastingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Stock model
   */
  interface StockFieldRefs {
    readonly id: FieldRef<"Stock", 'Int'>
    readonly createdAt: FieldRef<"Stock", 'DateTime'>
    readonly casting_item_id: FieldRef<"Stock", 'Int'>
    readonly item_id: FieldRef<"Stock", 'Int'>
    readonly weight: FieldRef<"Stock", 'Float'>
    readonly touch: FieldRef<"Stock", 'Float'>
    readonly item_purity: FieldRef<"Stock", 'Float'>
    readonly remarks: FieldRef<"Stock", 'String'>
    readonly scrap_weight: FieldRef<"Stock", 'Float'>
    readonly scrap_wastage: FieldRef<"Stock", 'Float'>
    readonly casting_customer_id: FieldRef<"Stock", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Stock findUnique
   */
  export type StockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock findUniqueOrThrow
   */
  export type StockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock findFirst
   */
  export type StockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stocks.
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * Stock findFirstOrThrow
   */
  export type StockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stocks.
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * Stock findMany
   */
  export type StockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stocks to fetch.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stocks.
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * Stock create
   */
  export type StockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * The data needed to create a Stock.
     */
    data: XOR<StockCreateInput, StockUncheckedCreateInput>
  }

  /**
   * Stock createMany
   */
  export type StockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stocks.
     */
    data: StockCreateManyInput | StockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stock update
   */
  export type StockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * The data needed to update a Stock.
     */
    data: XOR<StockUpdateInput, StockUncheckedUpdateInput>
    /**
     * Choose, which Stock to update.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock updateMany
   */
  export type StockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stocks.
     */
    data: XOR<StockUpdateManyMutationInput, StockUncheckedUpdateManyInput>
    /**
     * Filter which Stocks to update
     */
    where?: StockWhereInput
    /**
     * Limit how many Stocks to update.
     */
    limit?: number
  }

  /**
   * Stock upsert
   */
  export type StockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * The filter to search for the Stock to update in case it exists.
     */
    where: StockWhereUniqueInput
    /**
     * In case the Stock found by the `where` argument doesn't exist, create a new Stock with this data.
     */
    create: XOR<StockCreateInput, StockUncheckedCreateInput>
    /**
     * In case the Stock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockUpdateInput, StockUncheckedUpdateInput>
  }

  /**
   * Stock delete
   */
  export type StockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter which Stock to delete.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock deleteMany
   */
  export type StockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stocks to delete
     */
    where?: StockWhereInput
    /**
     * Limit how many Stocks to delete.
     */
    limit?: number
  }

  /**
   * Stock without action
   */
  export type StockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
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
    createdAt: 'createdAt',
    name: 'name',
    phoneNumber: 'phoneNumber',
    address: 'address',
    email: 'email'
  };

  export type AddCustomerScalarFieldEnum = (typeof AddCustomerScalarFieldEnum)[keyof typeof AddCustomerScalarFieldEnum]


  export const AddCastingScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    name: 'name',
    phoneNumber: 'phoneNumber',
    address: 'address',
    email: 'email'
  };

  export type AddCastingScalarFieldEnum = (typeof AddCastingScalarFieldEnum)[keyof typeof AddCastingScalarFieldEnum]


  export const AddFilingScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    name: 'name',
    phoneNumber: 'phoneNumber',
    address: 'address',
    email: 'email'
  };

  export type AddFilingScalarFieldEnum = (typeof AddFilingScalarFieldEnum)[keyof typeof AddFilingScalarFieldEnum]


  export const AddSettingScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    name: 'name',
    phoneNumber: 'phoneNumber',
    address: 'address',
    email: 'email'
  };

  export type AddSettingScalarFieldEnum = (typeof AddSettingScalarFieldEnum)[keyof typeof AddSettingScalarFieldEnum]


  export const AddBuffingScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    name: 'name',
    phoneNumber: 'phoneNumber',
    address: 'address',
    email: 'email'
  };

  export type AddBuffingScalarFieldEnum = (typeof AddBuffingScalarFieldEnum)[keyof typeof AddBuffingScalarFieldEnum]


  export const AddSupplierItemScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber',
    address: 'address'
  };

  export type AddSupplierItemScalarFieldEnum = (typeof AddSupplierItemScalarFieldEnum)[keyof typeof AddSupplierItemScalarFieldEnum]


  export const AddPurchaseStockScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    name: 'name',
    item: 'item',
    goldWeight: 'goldWeight',
    goldTouch: 'goldTouch',
    goldPurity: 'goldPurity',
    goldRate: 'goldRate',
    goldtotalValue: 'goldtotalValue',
    silverWeight: 'silverWeight',
    silverTouch: 'silverTouch',
    silverPurity: 'silverPurity',
    silverRate: 'silverRate',
    silvertotalValue: 'silvertotalValue'
  };

  export type AddPurchaseStockScalarFieldEnum = (typeof AddPurchaseStockScalarFieldEnum)[keyof typeof AddPurchaseStockScalarFieldEnum]


  export const CustomerTransactionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    date: 'date',
    value: 'value',
    type: 'type',
    touch: 'touch',
    purity: 'purity',
    goldRate: 'goldRate',
    customerId: 'customerId'
  };

  export type CustomerTransactionScalarFieldEnum = (typeof CustomerTransactionScalarFieldEnum)[keyof typeof CustomerTransactionScalarFieldEnum]


  export const AddItemScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    name: 'name'
  };

  export type AddItemScalarFieldEnum = (typeof AddItemScalarFieldEnum)[keyof typeof AddItemScalarFieldEnum]


  export const CastingEntryScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    date: 'date',
    given_gold: 'given_gold',
    given_touch: 'given_touch',
    purity: 'purity',
    final_touch: 'final_touch',
    pure_value: 'pure_value',
    copper: 'copper',
    final_weight: 'final_weight',
    casting_customer_id: 'casting_customer_id'
  };

  export type CastingEntryScalarFieldEnum = (typeof CastingEntryScalarFieldEnum)[keyof typeof CastingEntryScalarFieldEnum]


  export const CastingItemsScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    type: 'type',
    item_id: 'item_id',
    weight: 'weight',
    touch: 'touch',
    item_purity: 'item_purity',
    remarks: 'remarks',
    after_weight: 'after_weight',
    scrap_weight: 'scrap_weight',
    scrap_wastage: 'scrap_wastage',
    casting_entry_id: 'casting_entry_id',
    casting_customer_id: 'casting_customer_id'
  };

  export type CastingItemsScalarFieldEnum = (typeof CastingItemsScalarFieldEnum)[keyof typeof CastingItemsScalarFieldEnum]


  export const FilingEntryScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    filing_person_id: 'filing_person_id',
    casting_item_id: 'casting_item_id',
    weight: 'weight',
    touch: 'touch',
    item_purity: 'item_purity',
    remarks: 'remarks',
    after_weight: 'after_weight',
    stone_option: 'stone_option'
  };

  export type FilingEntryScalarFieldEnum = (typeof FilingEntryScalarFieldEnum)[keyof typeof FilingEntryScalarFieldEnum]


  export const SettingEntryScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    setting_person_id: 'setting_person_id',
    casting_item_id: 'casting_item_id',
    weight: 'weight',
    touch: 'touch',
    item_purity: 'item_purity',
    remarks: 'remarks',
    after_weight: 'after_weight',
    filing_entry_id: 'filing_entry_id'
  };

  export type SettingEntryScalarFieldEnum = (typeof SettingEntryScalarFieldEnum)[keyof typeof SettingEntryScalarFieldEnum]


  export const BuffingEntryScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    buffing_person_id: 'buffing_person_id',
    casting_item_id: 'casting_item_id',
    weight: 'weight',
    touch: 'touch',
    item_purity: 'item_purity',
    remarks: 'remarks',
    after_weight: 'after_weight',
    setting_entry_id: 'setting_entry_id',
    filing_entry_id: 'filing_entry_id',
    type: 'type'
  };

  export type BuffingEntryScalarFieldEnum = (typeof BuffingEntryScalarFieldEnum)[keyof typeof BuffingEntryScalarFieldEnum]


  export const StockScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    casting_item_id: 'casting_item_id',
    item_id: 'item_id',
    weight: 'weight',
    touch: 'touch',
    item_purity: 'item_purity',
    remarks: 'remarks',
    scrap_weight: 'scrap_weight',
    scrap_wastage: 'scrap_wastage',
    casting_customer_id: 'casting_customer_id'
  };

  export type StockScalarFieldEnum = (typeof StockScalarFieldEnum)[keyof typeof StockScalarFieldEnum]


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


  export const AddSupplierItemOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber',
    address: 'address'
  };

  export type AddSupplierItemOrderByRelevanceFieldEnum = (typeof AddSupplierItemOrderByRelevanceFieldEnum)[keyof typeof AddSupplierItemOrderByRelevanceFieldEnum]


  export const AddPurchaseStockOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type AddPurchaseStockOrderByRelevanceFieldEnum = (typeof AddPurchaseStockOrderByRelevanceFieldEnum)[keyof typeof AddPurchaseStockOrderByRelevanceFieldEnum]


  export const CustomerTransactionOrderByRelevanceFieldEnum: {
    type: 'type'
  };

  export type CustomerTransactionOrderByRelevanceFieldEnum = (typeof CustomerTransactionOrderByRelevanceFieldEnum)[keyof typeof CustomerTransactionOrderByRelevanceFieldEnum]


  export const AddItemOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type AddItemOrderByRelevanceFieldEnum = (typeof AddItemOrderByRelevanceFieldEnum)[keyof typeof AddItemOrderByRelevanceFieldEnum]


  export const CastingItemsOrderByRelevanceFieldEnum: {
    remarks: 'remarks'
  };

  export type CastingItemsOrderByRelevanceFieldEnum = (typeof CastingItemsOrderByRelevanceFieldEnum)[keyof typeof CastingItemsOrderByRelevanceFieldEnum]


  export const FilingEntryOrderByRelevanceFieldEnum: {
    remarks: 'remarks'
  };

  export type FilingEntryOrderByRelevanceFieldEnum = (typeof FilingEntryOrderByRelevanceFieldEnum)[keyof typeof FilingEntryOrderByRelevanceFieldEnum]


  export const SettingEntryOrderByRelevanceFieldEnum: {
    remarks: 'remarks'
  };

  export type SettingEntryOrderByRelevanceFieldEnum = (typeof SettingEntryOrderByRelevanceFieldEnum)[keyof typeof SettingEntryOrderByRelevanceFieldEnum]


  export const BuffingEntryOrderByRelevanceFieldEnum: {
    remarks: 'remarks'
  };

  export type BuffingEntryOrderByRelevanceFieldEnum = (typeof BuffingEntryOrderByRelevanceFieldEnum)[keyof typeof BuffingEntryOrderByRelevanceFieldEnum]


  export const StockOrderByRelevanceFieldEnum: {
    remarks: 'remarks'
  };

  export type StockOrderByRelevanceFieldEnum = (typeof StockOrderByRelevanceFieldEnum)[keyof typeof StockOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'ITEMTYPE'
   */
  export type EnumITEMTYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ITEMTYPE'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'CASTINGENTRYTYPE'
   */
  export type EnumCASTINGENTRYTYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CASTINGENTRYTYPE'>
    


  /**
   * Reference to a field of type 'STONEOPTION'
   */
  export type EnumSTONEOPTIONFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'STONEOPTION'>
    
  /**
   * Deep Input Types
   */


  export type AddCustomerWhereInput = {
    AND?: AddCustomerWhereInput | AddCustomerWhereInput[]
    OR?: AddCustomerWhereInput[]
    NOT?: AddCustomerWhereInput | AddCustomerWhereInput[]
    id?: IntFilter<"AddCustomer"> | number
    createdAt?: DateTimeFilter<"AddCustomer"> | Date | string
    name?: StringFilter<"AddCustomer"> | string
    phoneNumber?: StringNullableFilter<"AddCustomer"> | string | null
    address?: StringNullableFilter<"AddCustomer"> | string | null
    email?: StringNullableFilter<"AddCustomer"> | string | null
    transactions?: CustomerTransactionListRelationFilter
  }

  export type AddCustomerOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    transactions?: CustomerTransactionOrderByRelationAggregateInput
    _relevance?: AddCustomerOrderByRelevanceInput
  }

  export type AddCustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AddCustomerWhereInput | AddCustomerWhereInput[]
    OR?: AddCustomerWhereInput[]
    NOT?: AddCustomerWhereInput | AddCustomerWhereInput[]
    createdAt?: DateTimeFilter<"AddCustomer"> | Date | string
    name?: StringFilter<"AddCustomer"> | string
    phoneNumber?: StringNullableFilter<"AddCustomer"> | string | null
    address?: StringNullableFilter<"AddCustomer"> | string | null
    email?: StringNullableFilter<"AddCustomer"> | string | null
    transactions?: CustomerTransactionListRelationFilter
  }, "id">

  export type AddCustomerOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
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
    createdAt?: DateTimeWithAggregatesFilter<"AddCustomer"> | Date | string
    name?: StringWithAggregatesFilter<"AddCustomer"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"AddCustomer"> | string | null
    address?: StringNullableWithAggregatesFilter<"AddCustomer"> | string | null
    email?: StringNullableWithAggregatesFilter<"AddCustomer"> | string | null
  }

  export type AddCastingWhereInput = {
    AND?: AddCastingWhereInput | AddCastingWhereInput[]
    OR?: AddCastingWhereInput[]
    NOT?: AddCastingWhereInput | AddCastingWhereInput[]
    id?: IntFilter<"AddCasting"> | number
    createdAt?: DateTimeFilter<"AddCasting"> | Date | string
    name?: StringFilter<"AddCasting"> | string
    phoneNumber?: StringNullableFilter<"AddCasting"> | string | null
    address?: StringNullableFilter<"AddCasting"> | string | null
    email?: StringNullableFilter<"AddCasting"> | string | null
    entries?: CastingEntryListRelationFilter
    castingitems?: CastingItemsListRelationFilter
    stock?: StockListRelationFilter
  }

  export type AddCastingOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    entries?: CastingEntryOrderByRelationAggregateInput
    castingitems?: CastingItemsOrderByRelationAggregateInput
    stock?: StockOrderByRelationAggregateInput
    _relevance?: AddCastingOrderByRelevanceInput
  }

  export type AddCastingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AddCastingWhereInput | AddCastingWhereInput[]
    OR?: AddCastingWhereInput[]
    NOT?: AddCastingWhereInput | AddCastingWhereInput[]
    createdAt?: DateTimeFilter<"AddCasting"> | Date | string
    name?: StringFilter<"AddCasting"> | string
    phoneNumber?: StringNullableFilter<"AddCasting"> | string | null
    address?: StringNullableFilter<"AddCasting"> | string | null
    email?: StringNullableFilter<"AddCasting"> | string | null
    entries?: CastingEntryListRelationFilter
    castingitems?: CastingItemsListRelationFilter
    stock?: StockListRelationFilter
  }, "id">

  export type AddCastingOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
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
    createdAt?: DateTimeWithAggregatesFilter<"AddCasting"> | Date | string
    name?: StringWithAggregatesFilter<"AddCasting"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"AddCasting"> | string | null
    address?: StringNullableWithAggregatesFilter<"AddCasting"> | string | null
    email?: StringNullableWithAggregatesFilter<"AddCasting"> | string | null
  }

  export type AddFilingWhereInput = {
    AND?: AddFilingWhereInput | AddFilingWhereInput[]
    OR?: AddFilingWhereInput[]
    NOT?: AddFilingWhereInput | AddFilingWhereInput[]
    id?: IntFilter<"AddFiling"> | number
    createdAt?: DateTimeFilter<"AddFiling"> | Date | string
    name?: StringFilter<"AddFiling"> | string
    phoneNumber?: StringNullableFilter<"AddFiling"> | string | null
    address?: StringNullableFilter<"AddFiling"> | string | null
    email?: StringNullableFilter<"AddFiling"> | string | null
    filings?: FilingEntryListRelationFilter
  }

  export type AddFilingOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    filings?: FilingEntryOrderByRelationAggregateInput
    _relevance?: AddFilingOrderByRelevanceInput
  }

  export type AddFilingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AddFilingWhereInput | AddFilingWhereInput[]
    OR?: AddFilingWhereInput[]
    NOT?: AddFilingWhereInput | AddFilingWhereInput[]
    createdAt?: DateTimeFilter<"AddFiling"> | Date | string
    name?: StringFilter<"AddFiling"> | string
    phoneNumber?: StringNullableFilter<"AddFiling"> | string | null
    address?: StringNullableFilter<"AddFiling"> | string | null
    email?: StringNullableFilter<"AddFiling"> | string | null
    filings?: FilingEntryListRelationFilter
  }, "id">

  export type AddFilingOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
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
    createdAt?: DateTimeWithAggregatesFilter<"AddFiling"> | Date | string
    name?: StringWithAggregatesFilter<"AddFiling"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"AddFiling"> | string | null
    address?: StringNullableWithAggregatesFilter<"AddFiling"> | string | null
    email?: StringNullableWithAggregatesFilter<"AddFiling"> | string | null
  }

  export type AddSettingWhereInput = {
    AND?: AddSettingWhereInput | AddSettingWhereInput[]
    OR?: AddSettingWhereInput[]
    NOT?: AddSettingWhereInput | AddSettingWhereInput[]
    id?: IntFilter<"AddSetting"> | number
    createdAt?: DateTimeFilter<"AddSetting"> | Date | string
    name?: StringFilter<"AddSetting"> | string
    phoneNumber?: StringNullableFilter<"AddSetting"> | string | null
    address?: StringNullableFilter<"AddSetting"> | string | null
    email?: StringNullableFilter<"AddSetting"> | string | null
    settings?: SettingEntryListRelationFilter
  }

  export type AddSettingOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    settings?: SettingEntryOrderByRelationAggregateInput
    _relevance?: AddSettingOrderByRelevanceInput
  }

  export type AddSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AddSettingWhereInput | AddSettingWhereInput[]
    OR?: AddSettingWhereInput[]
    NOT?: AddSettingWhereInput | AddSettingWhereInput[]
    createdAt?: DateTimeFilter<"AddSetting"> | Date | string
    name?: StringFilter<"AddSetting"> | string
    phoneNumber?: StringNullableFilter<"AddSetting"> | string | null
    address?: StringNullableFilter<"AddSetting"> | string | null
    email?: StringNullableFilter<"AddSetting"> | string | null
    settings?: SettingEntryListRelationFilter
  }, "id">

  export type AddSettingOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
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
    createdAt?: DateTimeWithAggregatesFilter<"AddSetting"> | Date | string
    name?: StringWithAggregatesFilter<"AddSetting"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"AddSetting"> | string | null
    address?: StringNullableWithAggregatesFilter<"AddSetting"> | string | null
    email?: StringNullableWithAggregatesFilter<"AddSetting"> | string | null
  }

  export type AddBuffingWhereInput = {
    AND?: AddBuffingWhereInput | AddBuffingWhereInput[]
    OR?: AddBuffingWhereInput[]
    NOT?: AddBuffingWhereInput | AddBuffingWhereInput[]
    id?: IntFilter<"AddBuffing"> | number
    createdAt?: DateTimeFilter<"AddBuffing"> | Date | string
    name?: StringFilter<"AddBuffing"> | string
    phoneNumber?: StringNullableFilter<"AddBuffing"> | string | null
    address?: StringNullableFilter<"AddBuffing"> | string | null
    email?: StringNullableFilter<"AddBuffing"> | string | null
    buffings?: BuffingEntryListRelationFilter
  }

  export type AddBuffingOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    buffings?: BuffingEntryOrderByRelationAggregateInput
    _relevance?: AddBuffingOrderByRelevanceInput
  }

  export type AddBuffingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AddBuffingWhereInput | AddBuffingWhereInput[]
    OR?: AddBuffingWhereInput[]
    NOT?: AddBuffingWhereInput | AddBuffingWhereInput[]
    createdAt?: DateTimeFilter<"AddBuffing"> | Date | string
    name?: StringFilter<"AddBuffing"> | string
    phoneNumber?: StringNullableFilter<"AddBuffing"> | string | null
    address?: StringNullableFilter<"AddBuffing"> | string | null
    email?: StringNullableFilter<"AddBuffing"> | string | null
    buffings?: BuffingEntryListRelationFilter
  }, "id">

  export type AddBuffingOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
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
    createdAt?: DateTimeWithAggregatesFilter<"AddBuffing"> | Date | string
    name?: StringWithAggregatesFilter<"AddBuffing"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"AddBuffing"> | string | null
    address?: StringNullableWithAggregatesFilter<"AddBuffing"> | string | null
    email?: StringNullableWithAggregatesFilter<"AddBuffing"> | string | null
  }

  export type AddSupplierItemWhereInput = {
    AND?: AddSupplierItemWhereInput | AddSupplierItemWhereInput[]
    OR?: AddSupplierItemWhereInput[]
    NOT?: AddSupplierItemWhereInput | AddSupplierItemWhereInput[]
    id?: IntFilter<"AddSupplierItem"> | number
    createdAt?: DateTimeFilter<"AddSupplierItem"> | Date | string
    name?: StringFilter<"AddSupplierItem"> | string
    email?: StringNullableFilter<"AddSupplierItem"> | string | null
    phoneNumber?: StringNullableFilter<"AddSupplierItem"> | string | null
    address?: StringNullableFilter<"AddSupplierItem"> | string | null
  }

  export type AddSupplierItemOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    _relevance?: AddSupplierItemOrderByRelevanceInput
  }

  export type AddSupplierItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AddSupplierItemWhereInput | AddSupplierItemWhereInput[]
    OR?: AddSupplierItemWhereInput[]
    NOT?: AddSupplierItemWhereInput | AddSupplierItemWhereInput[]
    createdAt?: DateTimeFilter<"AddSupplierItem"> | Date | string
    name?: StringFilter<"AddSupplierItem"> | string
    email?: StringNullableFilter<"AddSupplierItem"> | string | null
    phoneNumber?: StringNullableFilter<"AddSupplierItem"> | string | null
    address?: StringNullableFilter<"AddSupplierItem"> | string | null
  }, "id">

  export type AddSupplierItemOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    _count?: AddSupplierItemCountOrderByAggregateInput
    _avg?: AddSupplierItemAvgOrderByAggregateInput
    _max?: AddSupplierItemMaxOrderByAggregateInput
    _min?: AddSupplierItemMinOrderByAggregateInput
    _sum?: AddSupplierItemSumOrderByAggregateInput
  }

  export type AddSupplierItemScalarWhereWithAggregatesInput = {
    AND?: AddSupplierItemScalarWhereWithAggregatesInput | AddSupplierItemScalarWhereWithAggregatesInput[]
    OR?: AddSupplierItemScalarWhereWithAggregatesInput[]
    NOT?: AddSupplierItemScalarWhereWithAggregatesInput | AddSupplierItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AddSupplierItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AddSupplierItem"> | Date | string
    name?: StringWithAggregatesFilter<"AddSupplierItem"> | string
    email?: StringNullableWithAggregatesFilter<"AddSupplierItem"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"AddSupplierItem"> | string | null
    address?: StringNullableWithAggregatesFilter<"AddSupplierItem"> | string | null
  }

  export type AddPurchaseStockWhereInput = {
    AND?: AddPurchaseStockWhereInput | AddPurchaseStockWhereInput[]
    OR?: AddPurchaseStockWhereInput[]
    NOT?: AddPurchaseStockWhereInput | AddPurchaseStockWhereInput[]
    id?: IntFilter<"AddPurchaseStock"> | number
    createdAt?: DateTimeFilter<"AddPurchaseStock"> | Date | string
    name?: StringFilter<"AddPurchaseStock"> | string
    item?: EnumITEMTYPEFilter<"AddPurchaseStock"> | $Enums.ITEMTYPE
    goldWeight?: IntNullableFilter<"AddPurchaseStock"> | number | null
    goldTouch?: FloatNullableFilter<"AddPurchaseStock"> | number | null
    goldPurity?: FloatNullableFilter<"AddPurchaseStock"> | number | null
    goldRate?: FloatNullableFilter<"AddPurchaseStock"> | number | null
    goldtotalValue?: FloatNullableFilter<"AddPurchaseStock"> | number | null
    silverWeight?: IntNullableFilter<"AddPurchaseStock"> | number | null
    silverTouch?: FloatNullableFilter<"AddPurchaseStock"> | number | null
    silverPurity?: FloatNullableFilter<"AddPurchaseStock"> | number | null
    silverRate?: FloatNullableFilter<"AddPurchaseStock"> | number | null
    silvertotalValue?: FloatNullableFilter<"AddPurchaseStock"> | number | null
  }

  export type AddPurchaseStockOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    item?: SortOrder
    goldWeight?: SortOrderInput | SortOrder
    goldTouch?: SortOrderInput | SortOrder
    goldPurity?: SortOrderInput | SortOrder
    goldRate?: SortOrderInput | SortOrder
    goldtotalValue?: SortOrderInput | SortOrder
    silverWeight?: SortOrderInput | SortOrder
    silverTouch?: SortOrderInput | SortOrder
    silverPurity?: SortOrderInput | SortOrder
    silverRate?: SortOrderInput | SortOrder
    silvertotalValue?: SortOrderInput | SortOrder
    _relevance?: AddPurchaseStockOrderByRelevanceInput
  }

  export type AddPurchaseStockWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AddPurchaseStockWhereInput | AddPurchaseStockWhereInput[]
    OR?: AddPurchaseStockWhereInput[]
    NOT?: AddPurchaseStockWhereInput | AddPurchaseStockWhereInput[]
    createdAt?: DateTimeFilter<"AddPurchaseStock"> | Date | string
    name?: StringFilter<"AddPurchaseStock"> | string
    item?: EnumITEMTYPEFilter<"AddPurchaseStock"> | $Enums.ITEMTYPE
    goldWeight?: IntNullableFilter<"AddPurchaseStock"> | number | null
    goldTouch?: FloatNullableFilter<"AddPurchaseStock"> | number | null
    goldPurity?: FloatNullableFilter<"AddPurchaseStock"> | number | null
    goldRate?: FloatNullableFilter<"AddPurchaseStock"> | number | null
    goldtotalValue?: FloatNullableFilter<"AddPurchaseStock"> | number | null
    silverWeight?: IntNullableFilter<"AddPurchaseStock"> | number | null
    silverTouch?: FloatNullableFilter<"AddPurchaseStock"> | number | null
    silverPurity?: FloatNullableFilter<"AddPurchaseStock"> | number | null
    silverRate?: FloatNullableFilter<"AddPurchaseStock"> | number | null
    silvertotalValue?: FloatNullableFilter<"AddPurchaseStock"> | number | null
  }, "id">

  export type AddPurchaseStockOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    item?: SortOrder
    goldWeight?: SortOrderInput | SortOrder
    goldTouch?: SortOrderInput | SortOrder
    goldPurity?: SortOrderInput | SortOrder
    goldRate?: SortOrderInput | SortOrder
    goldtotalValue?: SortOrderInput | SortOrder
    silverWeight?: SortOrderInput | SortOrder
    silverTouch?: SortOrderInput | SortOrder
    silverPurity?: SortOrderInput | SortOrder
    silverRate?: SortOrderInput | SortOrder
    silvertotalValue?: SortOrderInput | SortOrder
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
    createdAt?: DateTimeWithAggregatesFilter<"AddPurchaseStock"> | Date | string
    name?: StringWithAggregatesFilter<"AddPurchaseStock"> | string
    item?: EnumITEMTYPEWithAggregatesFilter<"AddPurchaseStock"> | $Enums.ITEMTYPE
    goldWeight?: IntNullableWithAggregatesFilter<"AddPurchaseStock"> | number | null
    goldTouch?: FloatNullableWithAggregatesFilter<"AddPurchaseStock"> | number | null
    goldPurity?: FloatNullableWithAggregatesFilter<"AddPurchaseStock"> | number | null
    goldRate?: FloatNullableWithAggregatesFilter<"AddPurchaseStock"> | number | null
    goldtotalValue?: FloatNullableWithAggregatesFilter<"AddPurchaseStock"> | number | null
    silverWeight?: IntNullableWithAggregatesFilter<"AddPurchaseStock"> | number | null
    silverTouch?: FloatNullableWithAggregatesFilter<"AddPurchaseStock"> | number | null
    silverPurity?: FloatNullableWithAggregatesFilter<"AddPurchaseStock"> | number | null
    silverRate?: FloatNullableWithAggregatesFilter<"AddPurchaseStock"> | number | null
    silvertotalValue?: FloatNullableWithAggregatesFilter<"AddPurchaseStock"> | number | null
  }

  export type CustomerTransactionWhereInput = {
    AND?: CustomerTransactionWhereInput | CustomerTransactionWhereInput[]
    OR?: CustomerTransactionWhereInput[]
    NOT?: CustomerTransactionWhereInput | CustomerTransactionWhereInput[]
    id?: IntFilter<"CustomerTransaction"> | number
    createdAt?: DateTimeFilter<"CustomerTransaction"> | Date | string
    date?: DateTimeFilter<"CustomerTransaction"> | Date | string
    value?: FloatFilter<"CustomerTransaction"> | number
    type?: StringFilter<"CustomerTransaction"> | string
    touch?: FloatNullableFilter<"CustomerTransaction"> | number | null
    purity?: FloatNullableFilter<"CustomerTransaction"> | number | null
    goldRate?: FloatNullableFilter<"CustomerTransaction"> | number | null
    customerId?: IntFilter<"CustomerTransaction"> | number
    customer?: XOR<AddCustomerScalarRelationFilter, AddCustomerWhereInput>
  }

  export type CustomerTransactionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    date?: SortOrder
    value?: SortOrder
    type?: SortOrder
    touch?: SortOrderInput | SortOrder
    purity?: SortOrderInput | SortOrder
    goldRate?: SortOrderInput | SortOrder
    customerId?: SortOrder
    customer?: AddCustomerOrderByWithRelationInput
    _relevance?: CustomerTransactionOrderByRelevanceInput
  }

  export type CustomerTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CustomerTransactionWhereInput | CustomerTransactionWhereInput[]
    OR?: CustomerTransactionWhereInput[]
    NOT?: CustomerTransactionWhereInput | CustomerTransactionWhereInput[]
    createdAt?: DateTimeFilter<"CustomerTransaction"> | Date | string
    date?: DateTimeFilter<"CustomerTransaction"> | Date | string
    value?: FloatFilter<"CustomerTransaction"> | number
    type?: StringFilter<"CustomerTransaction"> | string
    touch?: FloatNullableFilter<"CustomerTransaction"> | number | null
    purity?: FloatNullableFilter<"CustomerTransaction"> | number | null
    goldRate?: FloatNullableFilter<"CustomerTransaction"> | number | null
    customerId?: IntFilter<"CustomerTransaction"> | number
    customer?: XOR<AddCustomerScalarRelationFilter, AddCustomerWhereInput>
  }, "id">

  export type CustomerTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    date?: SortOrder
    value?: SortOrder
    type?: SortOrder
    touch?: SortOrderInput | SortOrder
    purity?: SortOrderInput | SortOrder
    goldRate?: SortOrderInput | SortOrder
    customerId?: SortOrder
    _count?: CustomerTransactionCountOrderByAggregateInput
    _avg?: CustomerTransactionAvgOrderByAggregateInput
    _max?: CustomerTransactionMaxOrderByAggregateInput
    _min?: CustomerTransactionMinOrderByAggregateInput
    _sum?: CustomerTransactionSumOrderByAggregateInput
  }

  export type CustomerTransactionScalarWhereWithAggregatesInput = {
    AND?: CustomerTransactionScalarWhereWithAggregatesInput | CustomerTransactionScalarWhereWithAggregatesInput[]
    OR?: CustomerTransactionScalarWhereWithAggregatesInput[]
    NOT?: CustomerTransactionScalarWhereWithAggregatesInput | CustomerTransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CustomerTransaction"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CustomerTransaction"> | Date | string
    date?: DateTimeWithAggregatesFilter<"CustomerTransaction"> | Date | string
    value?: FloatWithAggregatesFilter<"CustomerTransaction"> | number
    type?: StringWithAggregatesFilter<"CustomerTransaction"> | string
    touch?: FloatNullableWithAggregatesFilter<"CustomerTransaction"> | number | null
    purity?: FloatNullableWithAggregatesFilter<"CustomerTransaction"> | number | null
    goldRate?: FloatNullableWithAggregatesFilter<"CustomerTransaction"> | number | null
    customerId?: IntWithAggregatesFilter<"CustomerTransaction"> | number
  }

  export type AddItemWhereInput = {
    AND?: AddItemWhereInput | AddItemWhereInput[]
    OR?: AddItemWhereInput[]
    NOT?: AddItemWhereInput | AddItemWhereInput[]
    id?: IntFilter<"AddItem"> | number
    createdAt?: DateTimeFilter<"AddItem"> | Date | string
    name?: StringFilter<"AddItem"> | string
    castingItems?: CastingItemsListRelationFilter
    stock?: StockListRelationFilter
  }

  export type AddItemOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    castingItems?: CastingItemsOrderByRelationAggregateInput
    stock?: StockOrderByRelationAggregateInput
    _relevance?: AddItemOrderByRelevanceInput
  }

  export type AddItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AddItemWhereInput | AddItemWhereInput[]
    OR?: AddItemWhereInput[]
    NOT?: AddItemWhereInput | AddItemWhereInput[]
    createdAt?: DateTimeFilter<"AddItem"> | Date | string
    name?: StringFilter<"AddItem"> | string
    castingItems?: CastingItemsListRelationFilter
    stock?: StockListRelationFilter
  }, "id">

  export type AddItemOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
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
    createdAt?: DateTimeWithAggregatesFilter<"AddItem"> | Date | string
    name?: StringWithAggregatesFilter<"AddItem"> | string
  }

  export type CastingEntryWhereInput = {
    AND?: CastingEntryWhereInput | CastingEntryWhereInput[]
    OR?: CastingEntryWhereInput[]
    NOT?: CastingEntryWhereInput | CastingEntryWhereInput[]
    id?: IntFilter<"CastingEntry"> | number
    createdAt?: DateTimeFilter<"CastingEntry"> | Date | string
    date?: DateTimeFilter<"CastingEntry"> | Date | string
    given_gold?: FloatFilter<"CastingEntry"> | number
    given_touch?: FloatFilter<"CastingEntry"> | number
    purity?: FloatFilter<"CastingEntry"> | number
    final_touch?: FloatFilter<"CastingEntry"> | number
    pure_value?: FloatFilter<"CastingEntry"> | number
    copper?: FloatFilter<"CastingEntry"> | number
    final_weight?: FloatFilter<"CastingEntry"> | number
    casting_customer_id?: IntFilter<"CastingEntry"> | number
    casting_customer?: XOR<AddCastingScalarRelationFilter, AddCastingWhereInput>
    items?: CastingItemsListRelationFilter
  }

  export type CastingEntryOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    date?: SortOrder
    given_gold?: SortOrder
    given_touch?: SortOrder
    purity?: SortOrder
    final_touch?: SortOrder
    pure_value?: SortOrder
    copper?: SortOrder
    final_weight?: SortOrder
    casting_customer_id?: SortOrder
    casting_customer?: AddCastingOrderByWithRelationInput
    items?: CastingItemsOrderByRelationAggregateInput
  }

  export type CastingEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CastingEntryWhereInput | CastingEntryWhereInput[]
    OR?: CastingEntryWhereInput[]
    NOT?: CastingEntryWhereInput | CastingEntryWhereInput[]
    createdAt?: DateTimeFilter<"CastingEntry"> | Date | string
    date?: DateTimeFilter<"CastingEntry"> | Date | string
    given_gold?: FloatFilter<"CastingEntry"> | number
    given_touch?: FloatFilter<"CastingEntry"> | number
    purity?: FloatFilter<"CastingEntry"> | number
    final_touch?: FloatFilter<"CastingEntry"> | number
    pure_value?: FloatFilter<"CastingEntry"> | number
    copper?: FloatFilter<"CastingEntry"> | number
    final_weight?: FloatFilter<"CastingEntry"> | number
    casting_customer_id?: IntFilter<"CastingEntry"> | number
    casting_customer?: XOR<AddCastingScalarRelationFilter, AddCastingWhereInput>
    items?: CastingItemsListRelationFilter
  }, "id">

  export type CastingEntryOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    date?: SortOrder
    given_gold?: SortOrder
    given_touch?: SortOrder
    purity?: SortOrder
    final_touch?: SortOrder
    pure_value?: SortOrder
    copper?: SortOrder
    final_weight?: SortOrder
    casting_customer_id?: SortOrder
    _count?: CastingEntryCountOrderByAggregateInput
    _avg?: CastingEntryAvgOrderByAggregateInput
    _max?: CastingEntryMaxOrderByAggregateInput
    _min?: CastingEntryMinOrderByAggregateInput
    _sum?: CastingEntrySumOrderByAggregateInput
  }

  export type CastingEntryScalarWhereWithAggregatesInput = {
    AND?: CastingEntryScalarWhereWithAggregatesInput | CastingEntryScalarWhereWithAggregatesInput[]
    OR?: CastingEntryScalarWhereWithAggregatesInput[]
    NOT?: CastingEntryScalarWhereWithAggregatesInput | CastingEntryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CastingEntry"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CastingEntry"> | Date | string
    date?: DateTimeWithAggregatesFilter<"CastingEntry"> | Date | string
    given_gold?: FloatWithAggregatesFilter<"CastingEntry"> | number
    given_touch?: FloatWithAggregatesFilter<"CastingEntry"> | number
    purity?: FloatWithAggregatesFilter<"CastingEntry"> | number
    final_touch?: FloatWithAggregatesFilter<"CastingEntry"> | number
    pure_value?: FloatWithAggregatesFilter<"CastingEntry"> | number
    copper?: FloatWithAggregatesFilter<"CastingEntry"> | number
    final_weight?: FloatWithAggregatesFilter<"CastingEntry"> | number
    casting_customer_id?: IntWithAggregatesFilter<"CastingEntry"> | number
  }

  export type CastingItemsWhereInput = {
    AND?: CastingItemsWhereInput | CastingItemsWhereInput[]
    OR?: CastingItemsWhereInput[]
    NOT?: CastingItemsWhereInput | CastingItemsWhereInput[]
    id?: IntFilter<"CastingItems"> | number
    createdAt?: DateTimeFilter<"CastingItems"> | Date | string
    type?: EnumCASTINGENTRYTYPEFilter<"CastingItems"> | $Enums.CASTINGENTRYTYPE
    item_id?: IntFilter<"CastingItems"> | number
    weight?: FloatFilter<"CastingItems"> | number
    touch?: FloatFilter<"CastingItems"> | number
    item_purity?: FloatFilter<"CastingItems"> | number
    remarks?: StringNullableFilter<"CastingItems"> | string | null
    after_weight?: FloatNullableFilter<"CastingItems"> | number | null
    scrap_weight?: FloatNullableFilter<"CastingItems"> | number | null
    scrap_wastage?: FloatNullableFilter<"CastingItems"> | number | null
    casting_entry_id?: IntFilter<"CastingItems"> | number
    casting_customer_id?: IntFilter<"CastingItems"> | number
    item?: XOR<AddItemScalarRelationFilter, AddItemWhereInput>
    castingEntry?: XOR<CastingEntryScalarRelationFilter, CastingEntryWhereInput>
    filingEntry?: XOR<FilingEntryNullableScalarRelationFilter, FilingEntryWhereInput> | null
    settingEntry?: XOR<SettingEntryNullableScalarRelationFilter, SettingEntryWhereInput> | null
    buffingEntry?: XOR<BuffingEntryNullableScalarRelationFilter, BuffingEntryWhereInput> | null
    stock?: StockListRelationFilter
    casting_customer?: XOR<AddCastingScalarRelationFilter, AddCastingWhereInput>
  }

  export type CastingItemsOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    type?: SortOrder
    item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    remarks?: SortOrderInput | SortOrder
    after_weight?: SortOrderInput | SortOrder
    scrap_weight?: SortOrderInput | SortOrder
    scrap_wastage?: SortOrderInput | SortOrder
    casting_entry_id?: SortOrder
    casting_customer_id?: SortOrder
    item?: AddItemOrderByWithRelationInput
    castingEntry?: CastingEntryOrderByWithRelationInput
    filingEntry?: FilingEntryOrderByWithRelationInput
    settingEntry?: SettingEntryOrderByWithRelationInput
    buffingEntry?: BuffingEntryOrderByWithRelationInput
    stock?: StockOrderByRelationAggregateInput
    casting_customer?: AddCastingOrderByWithRelationInput
    _relevance?: CastingItemsOrderByRelevanceInput
  }

  export type CastingItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CastingItemsWhereInput | CastingItemsWhereInput[]
    OR?: CastingItemsWhereInput[]
    NOT?: CastingItemsWhereInput | CastingItemsWhereInput[]
    createdAt?: DateTimeFilter<"CastingItems"> | Date | string
    type?: EnumCASTINGENTRYTYPEFilter<"CastingItems"> | $Enums.CASTINGENTRYTYPE
    item_id?: IntFilter<"CastingItems"> | number
    weight?: FloatFilter<"CastingItems"> | number
    touch?: FloatFilter<"CastingItems"> | number
    item_purity?: FloatFilter<"CastingItems"> | number
    remarks?: StringNullableFilter<"CastingItems"> | string | null
    after_weight?: FloatNullableFilter<"CastingItems"> | number | null
    scrap_weight?: FloatNullableFilter<"CastingItems"> | number | null
    scrap_wastage?: FloatNullableFilter<"CastingItems"> | number | null
    casting_entry_id?: IntFilter<"CastingItems"> | number
    casting_customer_id?: IntFilter<"CastingItems"> | number
    item?: XOR<AddItemScalarRelationFilter, AddItemWhereInput>
    castingEntry?: XOR<CastingEntryScalarRelationFilter, CastingEntryWhereInput>
    filingEntry?: XOR<FilingEntryNullableScalarRelationFilter, FilingEntryWhereInput> | null
    settingEntry?: XOR<SettingEntryNullableScalarRelationFilter, SettingEntryWhereInput> | null
    buffingEntry?: XOR<BuffingEntryNullableScalarRelationFilter, BuffingEntryWhereInput> | null
    stock?: StockListRelationFilter
    casting_customer?: XOR<AddCastingScalarRelationFilter, AddCastingWhereInput>
  }, "id">

  export type CastingItemsOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    type?: SortOrder
    item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    remarks?: SortOrderInput | SortOrder
    after_weight?: SortOrderInput | SortOrder
    scrap_weight?: SortOrderInput | SortOrder
    scrap_wastage?: SortOrderInput | SortOrder
    casting_entry_id?: SortOrder
    casting_customer_id?: SortOrder
    _count?: CastingItemsCountOrderByAggregateInput
    _avg?: CastingItemsAvgOrderByAggregateInput
    _max?: CastingItemsMaxOrderByAggregateInput
    _min?: CastingItemsMinOrderByAggregateInput
    _sum?: CastingItemsSumOrderByAggregateInput
  }

  export type CastingItemsScalarWhereWithAggregatesInput = {
    AND?: CastingItemsScalarWhereWithAggregatesInput | CastingItemsScalarWhereWithAggregatesInput[]
    OR?: CastingItemsScalarWhereWithAggregatesInput[]
    NOT?: CastingItemsScalarWhereWithAggregatesInput | CastingItemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CastingItems"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CastingItems"> | Date | string
    type?: EnumCASTINGENTRYTYPEWithAggregatesFilter<"CastingItems"> | $Enums.CASTINGENTRYTYPE
    item_id?: IntWithAggregatesFilter<"CastingItems"> | number
    weight?: FloatWithAggregatesFilter<"CastingItems"> | number
    touch?: FloatWithAggregatesFilter<"CastingItems"> | number
    item_purity?: FloatWithAggregatesFilter<"CastingItems"> | number
    remarks?: StringNullableWithAggregatesFilter<"CastingItems"> | string | null
    after_weight?: FloatNullableWithAggregatesFilter<"CastingItems"> | number | null
    scrap_weight?: FloatNullableWithAggregatesFilter<"CastingItems"> | number | null
    scrap_wastage?: FloatNullableWithAggregatesFilter<"CastingItems"> | number | null
    casting_entry_id?: IntWithAggregatesFilter<"CastingItems"> | number
    casting_customer_id?: IntWithAggregatesFilter<"CastingItems"> | number
  }

  export type FilingEntryWhereInput = {
    AND?: FilingEntryWhereInput | FilingEntryWhereInput[]
    OR?: FilingEntryWhereInput[]
    NOT?: FilingEntryWhereInput | FilingEntryWhereInput[]
    id?: IntFilter<"FilingEntry"> | number
    createdAt?: DateTimeFilter<"FilingEntry"> | Date | string
    filing_person_id?: IntFilter<"FilingEntry"> | number
    casting_item_id?: IntFilter<"FilingEntry"> | number
    weight?: FloatFilter<"FilingEntry"> | number
    touch?: FloatFilter<"FilingEntry"> | number
    item_purity?: FloatFilter<"FilingEntry"> | number
    remarks?: StringNullableFilter<"FilingEntry"> | string | null
    after_weight?: FloatNullableFilter<"FilingEntry"> | number | null
    stone_option?: EnumSTONEOPTIONFilter<"FilingEntry"> | $Enums.STONEOPTION
    filing_person?: XOR<AddFilingScalarRelationFilter, AddFilingWhereInput>
    castingItem?: XOR<CastingItemsScalarRelationFilter, CastingItemsWhereInput>
    settingEntry?: SettingEntryListRelationFilter
    buffingEntries?: BuffingEntryListRelationFilter
  }

  export type FilingEntryOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    filing_person_id?: SortOrder
    casting_item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    remarks?: SortOrderInput | SortOrder
    after_weight?: SortOrderInput | SortOrder
    stone_option?: SortOrder
    filing_person?: AddFilingOrderByWithRelationInput
    castingItem?: CastingItemsOrderByWithRelationInput
    settingEntry?: SettingEntryOrderByRelationAggregateInput
    buffingEntries?: BuffingEntryOrderByRelationAggregateInput
    _relevance?: FilingEntryOrderByRelevanceInput
  }

  export type FilingEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    casting_item_id?: number
    AND?: FilingEntryWhereInput | FilingEntryWhereInput[]
    OR?: FilingEntryWhereInput[]
    NOT?: FilingEntryWhereInput | FilingEntryWhereInput[]
    createdAt?: DateTimeFilter<"FilingEntry"> | Date | string
    filing_person_id?: IntFilter<"FilingEntry"> | number
    weight?: FloatFilter<"FilingEntry"> | number
    touch?: FloatFilter<"FilingEntry"> | number
    item_purity?: FloatFilter<"FilingEntry"> | number
    remarks?: StringNullableFilter<"FilingEntry"> | string | null
    after_weight?: FloatNullableFilter<"FilingEntry"> | number | null
    stone_option?: EnumSTONEOPTIONFilter<"FilingEntry"> | $Enums.STONEOPTION
    filing_person?: XOR<AddFilingScalarRelationFilter, AddFilingWhereInput>
    castingItem?: XOR<CastingItemsScalarRelationFilter, CastingItemsWhereInput>
    settingEntry?: SettingEntryListRelationFilter
    buffingEntries?: BuffingEntryListRelationFilter
  }, "id" | "casting_item_id">

  export type FilingEntryOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    filing_person_id?: SortOrder
    casting_item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    remarks?: SortOrderInput | SortOrder
    after_weight?: SortOrderInput | SortOrder
    stone_option?: SortOrder
    _count?: FilingEntryCountOrderByAggregateInput
    _avg?: FilingEntryAvgOrderByAggregateInput
    _max?: FilingEntryMaxOrderByAggregateInput
    _min?: FilingEntryMinOrderByAggregateInput
    _sum?: FilingEntrySumOrderByAggregateInput
  }

  export type FilingEntryScalarWhereWithAggregatesInput = {
    AND?: FilingEntryScalarWhereWithAggregatesInput | FilingEntryScalarWhereWithAggregatesInput[]
    OR?: FilingEntryScalarWhereWithAggregatesInput[]
    NOT?: FilingEntryScalarWhereWithAggregatesInput | FilingEntryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FilingEntry"> | number
    createdAt?: DateTimeWithAggregatesFilter<"FilingEntry"> | Date | string
    filing_person_id?: IntWithAggregatesFilter<"FilingEntry"> | number
    casting_item_id?: IntWithAggregatesFilter<"FilingEntry"> | number
    weight?: FloatWithAggregatesFilter<"FilingEntry"> | number
    touch?: FloatWithAggregatesFilter<"FilingEntry"> | number
    item_purity?: FloatWithAggregatesFilter<"FilingEntry"> | number
    remarks?: StringNullableWithAggregatesFilter<"FilingEntry"> | string | null
    after_weight?: FloatNullableWithAggregatesFilter<"FilingEntry"> | number | null
    stone_option?: EnumSTONEOPTIONWithAggregatesFilter<"FilingEntry"> | $Enums.STONEOPTION
  }

  export type SettingEntryWhereInput = {
    AND?: SettingEntryWhereInput | SettingEntryWhereInput[]
    OR?: SettingEntryWhereInput[]
    NOT?: SettingEntryWhereInput | SettingEntryWhereInput[]
    id?: IntFilter<"SettingEntry"> | number
    createdAt?: DateTimeFilter<"SettingEntry"> | Date | string
    setting_person_id?: IntFilter<"SettingEntry"> | number
    casting_item_id?: IntFilter<"SettingEntry"> | number
    weight?: FloatFilter<"SettingEntry"> | number
    touch?: FloatFilter<"SettingEntry"> | number
    item_purity?: FloatFilter<"SettingEntry"> | number
    remarks?: StringNullableFilter<"SettingEntry"> | string | null
    after_weight?: FloatNullableFilter<"SettingEntry"> | number | null
    filing_entry_id?: IntFilter<"SettingEntry"> | number
    setting_person?: XOR<AddSettingScalarRelationFilter, AddSettingWhereInput>
    castingItem?: XOR<CastingItemsScalarRelationFilter, CastingItemsWhereInput>
    filingEntry?: XOR<FilingEntryScalarRelationFilter, FilingEntryWhereInput>
    buffingEntries?: BuffingEntryListRelationFilter
  }

  export type SettingEntryOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    setting_person_id?: SortOrder
    casting_item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    remarks?: SortOrderInput | SortOrder
    after_weight?: SortOrderInput | SortOrder
    filing_entry_id?: SortOrder
    setting_person?: AddSettingOrderByWithRelationInput
    castingItem?: CastingItemsOrderByWithRelationInput
    filingEntry?: FilingEntryOrderByWithRelationInput
    buffingEntries?: BuffingEntryOrderByRelationAggregateInput
    _relevance?: SettingEntryOrderByRelevanceInput
  }

  export type SettingEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    casting_item_id?: number
    AND?: SettingEntryWhereInput | SettingEntryWhereInput[]
    OR?: SettingEntryWhereInput[]
    NOT?: SettingEntryWhereInput | SettingEntryWhereInput[]
    createdAt?: DateTimeFilter<"SettingEntry"> | Date | string
    setting_person_id?: IntFilter<"SettingEntry"> | number
    weight?: FloatFilter<"SettingEntry"> | number
    touch?: FloatFilter<"SettingEntry"> | number
    item_purity?: FloatFilter<"SettingEntry"> | number
    remarks?: StringNullableFilter<"SettingEntry"> | string | null
    after_weight?: FloatNullableFilter<"SettingEntry"> | number | null
    filing_entry_id?: IntFilter<"SettingEntry"> | number
    setting_person?: XOR<AddSettingScalarRelationFilter, AddSettingWhereInput>
    castingItem?: XOR<CastingItemsScalarRelationFilter, CastingItemsWhereInput>
    filingEntry?: XOR<FilingEntryScalarRelationFilter, FilingEntryWhereInput>
    buffingEntries?: BuffingEntryListRelationFilter
  }, "id" | "casting_item_id">

  export type SettingEntryOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    setting_person_id?: SortOrder
    casting_item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    remarks?: SortOrderInput | SortOrder
    after_weight?: SortOrderInput | SortOrder
    filing_entry_id?: SortOrder
    _count?: SettingEntryCountOrderByAggregateInput
    _avg?: SettingEntryAvgOrderByAggregateInput
    _max?: SettingEntryMaxOrderByAggregateInput
    _min?: SettingEntryMinOrderByAggregateInput
    _sum?: SettingEntrySumOrderByAggregateInput
  }

  export type SettingEntryScalarWhereWithAggregatesInput = {
    AND?: SettingEntryScalarWhereWithAggregatesInput | SettingEntryScalarWhereWithAggregatesInput[]
    OR?: SettingEntryScalarWhereWithAggregatesInput[]
    NOT?: SettingEntryScalarWhereWithAggregatesInput | SettingEntryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SettingEntry"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SettingEntry"> | Date | string
    setting_person_id?: IntWithAggregatesFilter<"SettingEntry"> | number
    casting_item_id?: IntWithAggregatesFilter<"SettingEntry"> | number
    weight?: FloatWithAggregatesFilter<"SettingEntry"> | number
    touch?: FloatWithAggregatesFilter<"SettingEntry"> | number
    item_purity?: FloatWithAggregatesFilter<"SettingEntry"> | number
    remarks?: StringNullableWithAggregatesFilter<"SettingEntry"> | string | null
    after_weight?: FloatNullableWithAggregatesFilter<"SettingEntry"> | number | null
    filing_entry_id?: IntWithAggregatesFilter<"SettingEntry"> | number
  }

  export type BuffingEntryWhereInput = {
    AND?: BuffingEntryWhereInput | BuffingEntryWhereInput[]
    OR?: BuffingEntryWhereInput[]
    NOT?: BuffingEntryWhereInput | BuffingEntryWhereInput[]
    id?: IntFilter<"BuffingEntry"> | number
    createdAt?: DateTimeFilter<"BuffingEntry"> | Date | string
    buffing_person_id?: IntFilter<"BuffingEntry"> | number
    casting_item_id?: IntFilter<"BuffingEntry"> | number
    weight?: FloatFilter<"BuffingEntry"> | number
    touch?: FloatFilter<"BuffingEntry"> | number
    item_purity?: FloatFilter<"BuffingEntry"> | number
    remarks?: StringNullableFilter<"BuffingEntry"> | string | null
    after_weight?: FloatNullableFilter<"BuffingEntry"> | number | null
    setting_entry_id?: IntFilter<"BuffingEntry"> | number
    filing_entry_id?: IntFilter<"BuffingEntry"> | number
    type?: EnumSTONEOPTIONFilter<"BuffingEntry"> | $Enums.STONEOPTION
    buffing_person?: XOR<AddBuffingScalarRelationFilter, AddBuffingWhereInput>
    castingItem?: XOR<CastingItemsScalarRelationFilter, CastingItemsWhereInput>
    settingEntry?: XOR<SettingEntryScalarRelationFilter, SettingEntryWhereInput>
    filingEntry?: XOR<FilingEntryScalarRelationFilter, FilingEntryWhereInput>
  }

  export type BuffingEntryOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    buffing_person_id?: SortOrder
    casting_item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    remarks?: SortOrderInput | SortOrder
    after_weight?: SortOrderInput | SortOrder
    setting_entry_id?: SortOrder
    filing_entry_id?: SortOrder
    type?: SortOrder
    buffing_person?: AddBuffingOrderByWithRelationInput
    castingItem?: CastingItemsOrderByWithRelationInput
    settingEntry?: SettingEntryOrderByWithRelationInput
    filingEntry?: FilingEntryOrderByWithRelationInput
    _relevance?: BuffingEntryOrderByRelevanceInput
  }

  export type BuffingEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    casting_item_id?: number
    AND?: BuffingEntryWhereInput | BuffingEntryWhereInput[]
    OR?: BuffingEntryWhereInput[]
    NOT?: BuffingEntryWhereInput | BuffingEntryWhereInput[]
    createdAt?: DateTimeFilter<"BuffingEntry"> | Date | string
    buffing_person_id?: IntFilter<"BuffingEntry"> | number
    weight?: FloatFilter<"BuffingEntry"> | number
    touch?: FloatFilter<"BuffingEntry"> | number
    item_purity?: FloatFilter<"BuffingEntry"> | number
    remarks?: StringNullableFilter<"BuffingEntry"> | string | null
    after_weight?: FloatNullableFilter<"BuffingEntry"> | number | null
    setting_entry_id?: IntFilter<"BuffingEntry"> | number
    filing_entry_id?: IntFilter<"BuffingEntry"> | number
    type?: EnumSTONEOPTIONFilter<"BuffingEntry"> | $Enums.STONEOPTION
    buffing_person?: XOR<AddBuffingScalarRelationFilter, AddBuffingWhereInput>
    castingItem?: XOR<CastingItemsScalarRelationFilter, CastingItemsWhereInput>
    settingEntry?: XOR<SettingEntryScalarRelationFilter, SettingEntryWhereInput>
    filingEntry?: XOR<FilingEntryScalarRelationFilter, FilingEntryWhereInput>
  }, "id" | "casting_item_id">

  export type BuffingEntryOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    buffing_person_id?: SortOrder
    casting_item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    remarks?: SortOrderInput | SortOrder
    after_weight?: SortOrderInput | SortOrder
    setting_entry_id?: SortOrder
    filing_entry_id?: SortOrder
    type?: SortOrder
    _count?: BuffingEntryCountOrderByAggregateInput
    _avg?: BuffingEntryAvgOrderByAggregateInput
    _max?: BuffingEntryMaxOrderByAggregateInput
    _min?: BuffingEntryMinOrderByAggregateInput
    _sum?: BuffingEntrySumOrderByAggregateInput
  }

  export type BuffingEntryScalarWhereWithAggregatesInput = {
    AND?: BuffingEntryScalarWhereWithAggregatesInput | BuffingEntryScalarWhereWithAggregatesInput[]
    OR?: BuffingEntryScalarWhereWithAggregatesInput[]
    NOT?: BuffingEntryScalarWhereWithAggregatesInput | BuffingEntryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BuffingEntry"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BuffingEntry"> | Date | string
    buffing_person_id?: IntWithAggregatesFilter<"BuffingEntry"> | number
    casting_item_id?: IntWithAggregatesFilter<"BuffingEntry"> | number
    weight?: FloatWithAggregatesFilter<"BuffingEntry"> | number
    touch?: FloatWithAggregatesFilter<"BuffingEntry"> | number
    item_purity?: FloatWithAggregatesFilter<"BuffingEntry"> | number
    remarks?: StringNullableWithAggregatesFilter<"BuffingEntry"> | string | null
    after_weight?: FloatNullableWithAggregatesFilter<"BuffingEntry"> | number | null
    setting_entry_id?: IntWithAggregatesFilter<"BuffingEntry"> | number
    filing_entry_id?: IntWithAggregatesFilter<"BuffingEntry"> | number
    type?: EnumSTONEOPTIONWithAggregatesFilter<"BuffingEntry"> | $Enums.STONEOPTION
  }

  export type StockWhereInput = {
    AND?: StockWhereInput | StockWhereInput[]
    OR?: StockWhereInput[]
    NOT?: StockWhereInput | StockWhereInput[]
    id?: IntFilter<"Stock"> | number
    createdAt?: DateTimeFilter<"Stock"> | Date | string
    casting_item_id?: IntFilter<"Stock"> | number
    item_id?: IntFilter<"Stock"> | number
    weight?: FloatFilter<"Stock"> | number
    touch?: FloatFilter<"Stock"> | number
    item_purity?: FloatFilter<"Stock"> | number
    remarks?: StringNullableFilter<"Stock"> | string | null
    scrap_weight?: FloatNullableFilter<"Stock"> | number | null
    scrap_wastage?: FloatNullableFilter<"Stock"> | number | null
    casting_customer_id?: IntFilter<"Stock"> | number
    castingItem?: XOR<CastingItemsScalarRelationFilter, CastingItemsWhereInput>
    item?: XOR<AddItemScalarRelationFilter, AddItemWhereInput>
    casting_customer?: XOR<AddCastingScalarRelationFilter, AddCastingWhereInput>
  }

  export type StockOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    casting_item_id?: SortOrder
    item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    remarks?: SortOrderInput | SortOrder
    scrap_weight?: SortOrderInput | SortOrder
    scrap_wastage?: SortOrderInput | SortOrder
    casting_customer_id?: SortOrder
    castingItem?: CastingItemsOrderByWithRelationInput
    item?: AddItemOrderByWithRelationInput
    casting_customer?: AddCastingOrderByWithRelationInput
    _relevance?: StockOrderByRelevanceInput
  }

  export type StockWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StockWhereInput | StockWhereInput[]
    OR?: StockWhereInput[]
    NOT?: StockWhereInput | StockWhereInput[]
    createdAt?: DateTimeFilter<"Stock"> | Date | string
    casting_item_id?: IntFilter<"Stock"> | number
    item_id?: IntFilter<"Stock"> | number
    weight?: FloatFilter<"Stock"> | number
    touch?: FloatFilter<"Stock"> | number
    item_purity?: FloatFilter<"Stock"> | number
    remarks?: StringNullableFilter<"Stock"> | string | null
    scrap_weight?: FloatNullableFilter<"Stock"> | number | null
    scrap_wastage?: FloatNullableFilter<"Stock"> | number | null
    casting_customer_id?: IntFilter<"Stock"> | number
    castingItem?: XOR<CastingItemsScalarRelationFilter, CastingItemsWhereInput>
    item?: XOR<AddItemScalarRelationFilter, AddItemWhereInput>
    casting_customer?: XOR<AddCastingScalarRelationFilter, AddCastingWhereInput>
  }, "id">

  export type StockOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    casting_item_id?: SortOrder
    item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    remarks?: SortOrderInput | SortOrder
    scrap_weight?: SortOrderInput | SortOrder
    scrap_wastage?: SortOrderInput | SortOrder
    casting_customer_id?: SortOrder
    _count?: StockCountOrderByAggregateInput
    _avg?: StockAvgOrderByAggregateInput
    _max?: StockMaxOrderByAggregateInput
    _min?: StockMinOrderByAggregateInput
    _sum?: StockSumOrderByAggregateInput
  }

  export type StockScalarWhereWithAggregatesInput = {
    AND?: StockScalarWhereWithAggregatesInput | StockScalarWhereWithAggregatesInput[]
    OR?: StockScalarWhereWithAggregatesInput[]
    NOT?: StockScalarWhereWithAggregatesInput | StockScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Stock"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Stock"> | Date | string
    casting_item_id?: IntWithAggregatesFilter<"Stock"> | number
    item_id?: IntWithAggregatesFilter<"Stock"> | number
    weight?: FloatWithAggregatesFilter<"Stock"> | number
    touch?: FloatWithAggregatesFilter<"Stock"> | number
    item_purity?: FloatWithAggregatesFilter<"Stock"> | number
    remarks?: StringNullableWithAggregatesFilter<"Stock"> | string | null
    scrap_weight?: FloatNullableWithAggregatesFilter<"Stock"> | number | null
    scrap_wastage?: FloatNullableWithAggregatesFilter<"Stock"> | number | null
    casting_customer_id?: IntWithAggregatesFilter<"Stock"> | number
  }

  export type AddCustomerCreateInput = {
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    address?: string | null
    email?: string | null
    transactions?: CustomerTransactionCreateNestedManyWithoutCustomerInput
  }

  export type AddCustomerUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    address?: string | null
    email?: string | null
    transactions?: CustomerTransactionUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type AddCustomerUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    transactions?: CustomerTransactionUpdateManyWithoutCustomerNestedInput
  }

  export type AddCustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    transactions?: CustomerTransactionUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type AddCustomerCreateManyInput = {
    id?: number
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    address?: string | null
    email?: string | null
  }

  export type AddCustomerUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddCustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddCastingCreateInput = {
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    address?: string | null
    email?: string | null
    entries?: CastingEntryCreateNestedManyWithoutCasting_customerInput
    castingitems?: CastingItemsCreateNestedManyWithoutCasting_customerInput
    stock?: StockCreateNestedManyWithoutCasting_customerInput
  }

  export type AddCastingUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    address?: string | null
    email?: string | null
    entries?: CastingEntryUncheckedCreateNestedManyWithoutCasting_customerInput
    castingitems?: CastingItemsUncheckedCreateNestedManyWithoutCasting_customerInput
    stock?: StockUncheckedCreateNestedManyWithoutCasting_customerInput
  }

  export type AddCastingUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    entries?: CastingEntryUpdateManyWithoutCasting_customerNestedInput
    castingitems?: CastingItemsUpdateManyWithoutCasting_customerNestedInput
    stock?: StockUpdateManyWithoutCasting_customerNestedInput
  }

  export type AddCastingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    entries?: CastingEntryUncheckedUpdateManyWithoutCasting_customerNestedInput
    castingitems?: CastingItemsUncheckedUpdateManyWithoutCasting_customerNestedInput
    stock?: StockUncheckedUpdateManyWithoutCasting_customerNestedInput
  }

  export type AddCastingCreateManyInput = {
    id?: number
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    address?: string | null
    email?: string | null
  }

  export type AddCastingUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddCastingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddFilingCreateInput = {
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    address?: string | null
    email?: string | null
    filings?: FilingEntryCreateNestedManyWithoutFiling_personInput
  }

  export type AddFilingUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    address?: string | null
    email?: string | null
    filings?: FilingEntryUncheckedCreateNestedManyWithoutFiling_personInput
  }

  export type AddFilingUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    filings?: FilingEntryUpdateManyWithoutFiling_personNestedInput
  }

  export type AddFilingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    filings?: FilingEntryUncheckedUpdateManyWithoutFiling_personNestedInput
  }

  export type AddFilingCreateManyInput = {
    id?: number
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    address?: string | null
    email?: string | null
  }

  export type AddFilingUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddFilingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddSettingCreateInput = {
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    address?: string | null
    email?: string | null
    settings?: SettingEntryCreateNestedManyWithoutSetting_personInput
  }

  export type AddSettingUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    address?: string | null
    email?: string | null
    settings?: SettingEntryUncheckedCreateNestedManyWithoutSetting_personInput
  }

  export type AddSettingUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: SettingEntryUpdateManyWithoutSetting_personNestedInput
  }

  export type AddSettingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: SettingEntryUncheckedUpdateManyWithoutSetting_personNestedInput
  }

  export type AddSettingCreateManyInput = {
    id?: number
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    address?: string | null
    email?: string | null
  }

  export type AddSettingUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddSettingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddBuffingCreateInput = {
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    address?: string | null
    email?: string | null
    buffings?: BuffingEntryCreateNestedManyWithoutBuffing_personInput
  }

  export type AddBuffingUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    address?: string | null
    email?: string | null
    buffings?: BuffingEntryUncheckedCreateNestedManyWithoutBuffing_personInput
  }

  export type AddBuffingUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    buffings?: BuffingEntryUpdateManyWithoutBuffing_personNestedInput
  }

  export type AddBuffingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    buffings?: BuffingEntryUncheckedUpdateManyWithoutBuffing_personNestedInput
  }

  export type AddBuffingCreateManyInput = {
    id?: number
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    address?: string | null
    email?: string | null
  }

  export type AddBuffingUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddBuffingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddSupplierItemCreateInput = {
    createdAt?: Date | string
    name: string
    email?: string | null
    phoneNumber?: string | null
    address?: string | null
  }

  export type AddSupplierItemUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    name: string
    email?: string | null
    phoneNumber?: string | null
    address?: string | null
  }

  export type AddSupplierItemUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddSupplierItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddSupplierItemCreateManyInput = {
    id?: number
    createdAt?: Date | string
    name: string
    email?: string | null
    phoneNumber?: string | null
    address?: string | null
  }

  export type AddSupplierItemUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddSupplierItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddPurchaseStockCreateInput = {
    createdAt?: Date | string
    name: string
    item: $Enums.ITEMTYPE
    goldWeight?: number | null
    goldTouch?: number | null
    goldPurity?: number | null
    goldRate?: number | null
    goldtotalValue?: number | null
    silverWeight?: number | null
    silverTouch?: number | null
    silverPurity?: number | null
    silverRate?: number | null
    silvertotalValue?: number | null
  }

  export type AddPurchaseStockUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    name: string
    item: $Enums.ITEMTYPE
    goldWeight?: number | null
    goldTouch?: number | null
    goldPurity?: number | null
    goldRate?: number | null
    goldtotalValue?: number | null
    silverWeight?: number | null
    silverTouch?: number | null
    silverPurity?: number | null
    silverRate?: number | null
    silvertotalValue?: number | null
  }

  export type AddPurchaseStockUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    item?: EnumITEMTYPEFieldUpdateOperationsInput | $Enums.ITEMTYPE
    goldWeight?: NullableIntFieldUpdateOperationsInput | number | null
    goldTouch?: NullableFloatFieldUpdateOperationsInput | number | null
    goldPurity?: NullableFloatFieldUpdateOperationsInput | number | null
    goldRate?: NullableFloatFieldUpdateOperationsInput | number | null
    goldtotalValue?: NullableFloatFieldUpdateOperationsInput | number | null
    silverWeight?: NullableIntFieldUpdateOperationsInput | number | null
    silverTouch?: NullableFloatFieldUpdateOperationsInput | number | null
    silverPurity?: NullableFloatFieldUpdateOperationsInput | number | null
    silverRate?: NullableFloatFieldUpdateOperationsInput | number | null
    silvertotalValue?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AddPurchaseStockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    item?: EnumITEMTYPEFieldUpdateOperationsInput | $Enums.ITEMTYPE
    goldWeight?: NullableIntFieldUpdateOperationsInput | number | null
    goldTouch?: NullableFloatFieldUpdateOperationsInput | number | null
    goldPurity?: NullableFloatFieldUpdateOperationsInput | number | null
    goldRate?: NullableFloatFieldUpdateOperationsInput | number | null
    goldtotalValue?: NullableFloatFieldUpdateOperationsInput | number | null
    silverWeight?: NullableIntFieldUpdateOperationsInput | number | null
    silverTouch?: NullableFloatFieldUpdateOperationsInput | number | null
    silverPurity?: NullableFloatFieldUpdateOperationsInput | number | null
    silverRate?: NullableFloatFieldUpdateOperationsInput | number | null
    silvertotalValue?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AddPurchaseStockCreateManyInput = {
    id?: number
    createdAt?: Date | string
    name: string
    item: $Enums.ITEMTYPE
    goldWeight?: number | null
    goldTouch?: number | null
    goldPurity?: number | null
    goldRate?: number | null
    goldtotalValue?: number | null
    silverWeight?: number | null
    silverTouch?: number | null
    silverPurity?: number | null
    silverRate?: number | null
    silvertotalValue?: number | null
  }

  export type AddPurchaseStockUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    item?: EnumITEMTYPEFieldUpdateOperationsInput | $Enums.ITEMTYPE
    goldWeight?: NullableIntFieldUpdateOperationsInput | number | null
    goldTouch?: NullableFloatFieldUpdateOperationsInput | number | null
    goldPurity?: NullableFloatFieldUpdateOperationsInput | number | null
    goldRate?: NullableFloatFieldUpdateOperationsInput | number | null
    goldtotalValue?: NullableFloatFieldUpdateOperationsInput | number | null
    silverWeight?: NullableIntFieldUpdateOperationsInput | number | null
    silverTouch?: NullableFloatFieldUpdateOperationsInput | number | null
    silverPurity?: NullableFloatFieldUpdateOperationsInput | number | null
    silverRate?: NullableFloatFieldUpdateOperationsInput | number | null
    silvertotalValue?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AddPurchaseStockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    item?: EnumITEMTYPEFieldUpdateOperationsInput | $Enums.ITEMTYPE
    goldWeight?: NullableIntFieldUpdateOperationsInput | number | null
    goldTouch?: NullableFloatFieldUpdateOperationsInput | number | null
    goldPurity?: NullableFloatFieldUpdateOperationsInput | number | null
    goldRate?: NullableFloatFieldUpdateOperationsInput | number | null
    goldtotalValue?: NullableFloatFieldUpdateOperationsInput | number | null
    silverWeight?: NullableIntFieldUpdateOperationsInput | number | null
    silverTouch?: NullableFloatFieldUpdateOperationsInput | number | null
    silverPurity?: NullableFloatFieldUpdateOperationsInput | number | null
    silverRate?: NullableFloatFieldUpdateOperationsInput | number | null
    silvertotalValue?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type CustomerTransactionCreateInput = {
    createdAt?: Date | string
    date: Date | string
    value: number
    type: string
    touch?: number | null
    purity?: number | null
    goldRate?: number | null
    customer: AddCustomerCreateNestedOneWithoutTransactionsInput
  }

  export type CustomerTransactionUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    date: Date | string
    value: number
    type: string
    touch?: number | null
    purity?: number | null
    goldRate?: number | null
    customerId: number
  }

  export type CustomerTransactionUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    touch?: NullableFloatFieldUpdateOperationsInput | number | null
    purity?: NullableFloatFieldUpdateOperationsInput | number | null
    goldRate?: NullableFloatFieldUpdateOperationsInput | number | null
    customer?: AddCustomerUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type CustomerTransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    touch?: NullableFloatFieldUpdateOperationsInput | number | null
    purity?: NullableFloatFieldUpdateOperationsInput | number | null
    goldRate?: NullableFloatFieldUpdateOperationsInput | number | null
    customerId?: IntFieldUpdateOperationsInput | number
  }

  export type CustomerTransactionCreateManyInput = {
    id?: number
    createdAt?: Date | string
    date: Date | string
    value: number
    type: string
    touch?: number | null
    purity?: number | null
    goldRate?: number | null
    customerId: number
  }

  export type CustomerTransactionUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    touch?: NullableFloatFieldUpdateOperationsInput | number | null
    purity?: NullableFloatFieldUpdateOperationsInput | number | null
    goldRate?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type CustomerTransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    touch?: NullableFloatFieldUpdateOperationsInput | number | null
    purity?: NullableFloatFieldUpdateOperationsInput | number | null
    goldRate?: NullableFloatFieldUpdateOperationsInput | number | null
    customerId?: IntFieldUpdateOperationsInput | number
  }

  export type AddItemCreateInput = {
    createdAt?: Date | string
    name: string
    castingItems?: CastingItemsCreateNestedManyWithoutItemInput
    stock?: StockCreateNestedManyWithoutItemInput
  }

  export type AddItemUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    name: string
    castingItems?: CastingItemsUncheckedCreateNestedManyWithoutItemInput
    stock?: StockUncheckedCreateNestedManyWithoutItemInput
  }

  export type AddItemUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    castingItems?: CastingItemsUpdateManyWithoutItemNestedInput
    stock?: StockUpdateManyWithoutItemNestedInput
  }

  export type AddItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    castingItems?: CastingItemsUncheckedUpdateManyWithoutItemNestedInput
    stock?: StockUncheckedUpdateManyWithoutItemNestedInput
  }

  export type AddItemCreateManyInput = {
    id?: number
    createdAt?: Date | string
    name: string
  }

  export type AddItemUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AddItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CastingEntryCreateInput = {
    createdAt?: Date | string
    date: Date | string
    given_gold: number
    given_touch: number
    purity: number
    final_touch: number
    pure_value: number
    copper: number
    final_weight: number
    casting_customer: AddCastingCreateNestedOneWithoutEntriesInput
    items?: CastingItemsCreateNestedManyWithoutCastingEntryInput
  }

  export type CastingEntryUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    date: Date | string
    given_gold: number
    given_touch: number
    purity: number
    final_touch: number
    pure_value: number
    copper: number
    final_weight: number
    casting_customer_id: number
    items?: CastingItemsUncheckedCreateNestedManyWithoutCastingEntryInput
  }

  export type CastingEntryUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    given_gold?: FloatFieldUpdateOperationsInput | number
    given_touch?: FloatFieldUpdateOperationsInput | number
    purity?: FloatFieldUpdateOperationsInput | number
    final_touch?: FloatFieldUpdateOperationsInput | number
    pure_value?: FloatFieldUpdateOperationsInput | number
    copper?: FloatFieldUpdateOperationsInput | number
    final_weight?: FloatFieldUpdateOperationsInput | number
    casting_customer?: AddCastingUpdateOneRequiredWithoutEntriesNestedInput
    items?: CastingItemsUpdateManyWithoutCastingEntryNestedInput
  }

  export type CastingEntryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    given_gold?: FloatFieldUpdateOperationsInput | number
    given_touch?: FloatFieldUpdateOperationsInput | number
    purity?: FloatFieldUpdateOperationsInput | number
    final_touch?: FloatFieldUpdateOperationsInput | number
    pure_value?: FloatFieldUpdateOperationsInput | number
    copper?: FloatFieldUpdateOperationsInput | number
    final_weight?: FloatFieldUpdateOperationsInput | number
    casting_customer_id?: IntFieldUpdateOperationsInput | number
    items?: CastingItemsUncheckedUpdateManyWithoutCastingEntryNestedInput
  }

  export type CastingEntryCreateManyInput = {
    id?: number
    createdAt?: Date | string
    date: Date | string
    given_gold: number
    given_touch: number
    purity: number
    final_touch: number
    pure_value: number
    copper: number
    final_weight: number
    casting_customer_id: number
  }

  export type CastingEntryUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    given_gold?: FloatFieldUpdateOperationsInput | number
    given_touch?: FloatFieldUpdateOperationsInput | number
    purity?: FloatFieldUpdateOperationsInput | number
    final_touch?: FloatFieldUpdateOperationsInput | number
    pure_value?: FloatFieldUpdateOperationsInput | number
    copper?: FloatFieldUpdateOperationsInput | number
    final_weight?: FloatFieldUpdateOperationsInput | number
  }

  export type CastingEntryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    given_gold?: FloatFieldUpdateOperationsInput | number
    given_touch?: FloatFieldUpdateOperationsInput | number
    purity?: FloatFieldUpdateOperationsInput | number
    final_touch?: FloatFieldUpdateOperationsInput | number
    pure_value?: FloatFieldUpdateOperationsInput | number
    copper?: FloatFieldUpdateOperationsInput | number
    final_weight?: FloatFieldUpdateOperationsInput | number
    casting_customer_id?: IntFieldUpdateOperationsInput | number
  }

  export type CastingItemsCreateInput = {
    createdAt?: Date | string
    type: $Enums.CASTINGENTRYTYPE
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    scrap_weight?: number | null
    scrap_wastage?: number | null
    item: AddItemCreateNestedOneWithoutCastingItemsInput
    castingEntry: CastingEntryCreateNestedOneWithoutItemsInput
    filingEntry?: FilingEntryCreateNestedOneWithoutCastingItemInput
    settingEntry?: SettingEntryCreateNestedOneWithoutCastingItemInput
    buffingEntry?: BuffingEntryCreateNestedOneWithoutCastingItemInput
    stock?: StockCreateNestedManyWithoutCastingItemInput
    casting_customer: AddCastingCreateNestedOneWithoutCastingitemsInput
  }

  export type CastingItemsUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    type: $Enums.CASTINGENTRYTYPE
    item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    scrap_weight?: number | null
    scrap_wastage?: number | null
    casting_entry_id: number
    casting_customer_id: number
    filingEntry?: FilingEntryUncheckedCreateNestedOneWithoutCastingItemInput
    settingEntry?: SettingEntryUncheckedCreateNestedOneWithoutCastingItemInput
    buffingEntry?: BuffingEntryUncheckedCreateNestedOneWithoutCastingItemInput
    stock?: StockUncheckedCreateNestedManyWithoutCastingItemInput
  }

  export type CastingItemsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumCASTINGENTRYTYPEFieldUpdateOperationsInput | $Enums.CASTINGENTRYTYPE
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
    item?: AddItemUpdateOneRequiredWithoutCastingItemsNestedInput
    castingEntry?: CastingEntryUpdateOneRequiredWithoutItemsNestedInput
    filingEntry?: FilingEntryUpdateOneWithoutCastingItemNestedInput
    settingEntry?: SettingEntryUpdateOneWithoutCastingItemNestedInput
    buffingEntry?: BuffingEntryUpdateOneWithoutCastingItemNestedInput
    stock?: StockUpdateManyWithoutCastingItemNestedInput
    casting_customer?: AddCastingUpdateOneRequiredWithoutCastingitemsNestedInput
  }

  export type CastingItemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumCASTINGENTRYTYPEFieldUpdateOperationsInput | $Enums.CASTINGENTRYTYPE
    item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
    casting_entry_id?: IntFieldUpdateOperationsInput | number
    casting_customer_id?: IntFieldUpdateOperationsInput | number
    filingEntry?: FilingEntryUncheckedUpdateOneWithoutCastingItemNestedInput
    settingEntry?: SettingEntryUncheckedUpdateOneWithoutCastingItemNestedInput
    buffingEntry?: BuffingEntryUncheckedUpdateOneWithoutCastingItemNestedInput
    stock?: StockUncheckedUpdateManyWithoutCastingItemNestedInput
  }

  export type CastingItemsCreateManyInput = {
    id?: number
    createdAt?: Date | string
    type: $Enums.CASTINGENTRYTYPE
    item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    scrap_weight?: number | null
    scrap_wastage?: number | null
    casting_entry_id: number
    casting_customer_id: number
  }

  export type CastingItemsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumCASTINGENTRYTYPEFieldUpdateOperationsInput | $Enums.CASTINGENTRYTYPE
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type CastingItemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumCASTINGENTRYTYPEFieldUpdateOperationsInput | $Enums.CASTINGENTRYTYPE
    item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
    casting_entry_id?: IntFieldUpdateOperationsInput | number
    casting_customer_id?: IntFieldUpdateOperationsInput | number
  }

  export type FilingEntryCreateInput = {
    createdAt?: Date | string
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    stone_option: $Enums.STONEOPTION
    filing_person: AddFilingCreateNestedOneWithoutFilingsInput
    castingItem: CastingItemsCreateNestedOneWithoutFilingEntryInput
    settingEntry?: SettingEntryCreateNestedManyWithoutFilingEntryInput
    buffingEntries?: BuffingEntryCreateNestedManyWithoutFilingEntryInput
  }

  export type FilingEntryUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    filing_person_id: number
    casting_item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    stone_option: $Enums.STONEOPTION
    settingEntry?: SettingEntryUncheckedCreateNestedManyWithoutFilingEntryInput
    buffingEntries?: BuffingEntryUncheckedCreateNestedManyWithoutFilingEntryInput
  }

  export type FilingEntryUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    stone_option?: EnumSTONEOPTIONFieldUpdateOperationsInput | $Enums.STONEOPTION
    filing_person?: AddFilingUpdateOneRequiredWithoutFilingsNestedInput
    castingItem?: CastingItemsUpdateOneRequiredWithoutFilingEntryNestedInput
    settingEntry?: SettingEntryUpdateManyWithoutFilingEntryNestedInput
    buffingEntries?: BuffingEntryUpdateManyWithoutFilingEntryNestedInput
  }

  export type FilingEntryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filing_person_id?: IntFieldUpdateOperationsInput | number
    casting_item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    stone_option?: EnumSTONEOPTIONFieldUpdateOperationsInput | $Enums.STONEOPTION
    settingEntry?: SettingEntryUncheckedUpdateManyWithoutFilingEntryNestedInput
    buffingEntries?: BuffingEntryUncheckedUpdateManyWithoutFilingEntryNestedInput
  }

  export type FilingEntryCreateManyInput = {
    id?: number
    createdAt?: Date | string
    filing_person_id: number
    casting_item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    stone_option: $Enums.STONEOPTION
  }

  export type FilingEntryUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    stone_option?: EnumSTONEOPTIONFieldUpdateOperationsInput | $Enums.STONEOPTION
  }

  export type FilingEntryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filing_person_id?: IntFieldUpdateOperationsInput | number
    casting_item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    stone_option?: EnumSTONEOPTIONFieldUpdateOperationsInput | $Enums.STONEOPTION
  }

  export type SettingEntryCreateInput = {
    createdAt?: Date | string
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    setting_person: AddSettingCreateNestedOneWithoutSettingsInput
    castingItem: CastingItemsCreateNestedOneWithoutSettingEntryInput
    filingEntry: FilingEntryCreateNestedOneWithoutSettingEntryInput
    buffingEntries?: BuffingEntryCreateNestedManyWithoutSettingEntryInput
  }

  export type SettingEntryUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    setting_person_id: number
    casting_item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    filing_entry_id: number
    buffingEntries?: BuffingEntryUncheckedCreateNestedManyWithoutSettingEntryInput
  }

  export type SettingEntryUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    setting_person?: AddSettingUpdateOneRequiredWithoutSettingsNestedInput
    castingItem?: CastingItemsUpdateOneRequiredWithoutSettingEntryNestedInput
    filingEntry?: FilingEntryUpdateOneRequiredWithoutSettingEntryNestedInput
    buffingEntries?: BuffingEntryUpdateManyWithoutSettingEntryNestedInput
  }

  export type SettingEntryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setting_person_id?: IntFieldUpdateOperationsInput | number
    casting_item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    filing_entry_id?: IntFieldUpdateOperationsInput | number
    buffingEntries?: BuffingEntryUncheckedUpdateManyWithoutSettingEntryNestedInput
  }

  export type SettingEntryCreateManyInput = {
    id?: number
    createdAt?: Date | string
    setting_person_id: number
    casting_item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    filing_entry_id: number
  }

  export type SettingEntryUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SettingEntryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setting_person_id?: IntFieldUpdateOperationsInput | number
    casting_item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    filing_entry_id?: IntFieldUpdateOperationsInput | number
  }

  export type BuffingEntryCreateInput = {
    createdAt?: Date | string
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    type: $Enums.STONEOPTION
    buffing_person: AddBuffingCreateNestedOneWithoutBuffingsInput
    castingItem: CastingItemsCreateNestedOneWithoutBuffingEntryInput
    settingEntry: SettingEntryCreateNestedOneWithoutBuffingEntriesInput
    filingEntry: FilingEntryCreateNestedOneWithoutBuffingEntriesInput
  }

  export type BuffingEntryUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    buffing_person_id: number
    casting_item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    setting_entry_id: number
    filing_entry_id: number
    type: $Enums.STONEOPTION
  }

  export type BuffingEntryUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: EnumSTONEOPTIONFieldUpdateOperationsInput | $Enums.STONEOPTION
    buffing_person?: AddBuffingUpdateOneRequiredWithoutBuffingsNestedInput
    castingItem?: CastingItemsUpdateOneRequiredWithoutBuffingEntryNestedInput
    settingEntry?: SettingEntryUpdateOneRequiredWithoutBuffingEntriesNestedInput
    filingEntry?: FilingEntryUpdateOneRequiredWithoutBuffingEntriesNestedInput
  }

  export type BuffingEntryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buffing_person_id?: IntFieldUpdateOperationsInput | number
    casting_item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    setting_entry_id?: IntFieldUpdateOperationsInput | number
    filing_entry_id?: IntFieldUpdateOperationsInput | number
    type?: EnumSTONEOPTIONFieldUpdateOperationsInput | $Enums.STONEOPTION
  }

  export type BuffingEntryCreateManyInput = {
    id?: number
    createdAt?: Date | string
    buffing_person_id: number
    casting_item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    setting_entry_id: number
    filing_entry_id: number
    type: $Enums.STONEOPTION
  }

  export type BuffingEntryUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: EnumSTONEOPTIONFieldUpdateOperationsInput | $Enums.STONEOPTION
  }

  export type BuffingEntryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buffing_person_id?: IntFieldUpdateOperationsInput | number
    casting_item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    setting_entry_id?: IntFieldUpdateOperationsInput | number
    filing_entry_id?: IntFieldUpdateOperationsInput | number
    type?: EnumSTONEOPTIONFieldUpdateOperationsInput | $Enums.STONEOPTION
  }

  export type StockCreateInput = {
    createdAt?: Date | string
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    scrap_weight?: number | null
    scrap_wastage?: number | null
    castingItem: CastingItemsCreateNestedOneWithoutStockInput
    item: AddItemCreateNestedOneWithoutStockInput
    casting_customer: AddCastingCreateNestedOneWithoutStockInput
  }

  export type StockUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    casting_item_id: number
    item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    scrap_weight?: number | null
    scrap_wastage?: number | null
    casting_customer_id: number
  }

  export type StockUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
    castingItem?: CastingItemsUpdateOneRequiredWithoutStockNestedInput
    item?: AddItemUpdateOneRequiredWithoutStockNestedInput
    casting_customer?: AddCastingUpdateOneRequiredWithoutStockNestedInput
  }

  export type StockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casting_item_id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
    casting_customer_id?: IntFieldUpdateOperationsInput | number
  }

  export type StockCreateManyInput = {
    id?: number
    createdAt?: Date | string
    casting_item_id: number
    item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    scrap_weight?: number | null
    scrap_wastage?: number | null
    casting_customer_id: number
  }

  export type StockUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type StockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casting_item_id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
    casting_customer_id?: IntFieldUpdateOperationsInput | number
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

  export type CustomerTransactionListRelationFilter = {
    every?: CustomerTransactionWhereInput
    some?: CustomerTransactionWhereInput
    none?: CustomerTransactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CustomerTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddCustomerOrderByRelevanceInput = {
    fields: AddCustomerOrderByRelevanceFieldEnum | AddCustomerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AddCustomerCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
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
    createdAt?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
  }

  export type AddCustomerMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
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

  export type CastingEntryListRelationFilter = {
    every?: CastingEntryWhereInput
    some?: CastingEntryWhereInput
    none?: CastingEntryWhereInput
  }

  export type CastingItemsListRelationFilter = {
    every?: CastingItemsWhereInput
    some?: CastingItemsWhereInput
    none?: CastingItemsWhereInput
  }

  export type StockListRelationFilter = {
    every?: StockWhereInput
    some?: StockWhereInput
    none?: StockWhereInput
  }

  export type CastingEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CastingItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddCastingOrderByRelevanceInput = {
    fields: AddCastingOrderByRelevanceFieldEnum | AddCastingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AddCastingCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
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
    createdAt?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
  }

  export type AddCastingMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
  }

  export type AddCastingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FilingEntryListRelationFilter = {
    every?: FilingEntryWhereInput
    some?: FilingEntryWhereInput
    none?: FilingEntryWhereInput
  }

  export type FilingEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddFilingOrderByRelevanceInput = {
    fields: AddFilingOrderByRelevanceFieldEnum | AddFilingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AddFilingCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
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
    createdAt?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
  }

  export type AddFilingMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
  }

  export type AddFilingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SettingEntryListRelationFilter = {
    every?: SettingEntryWhereInput
    some?: SettingEntryWhereInput
    none?: SettingEntryWhereInput
  }

  export type SettingEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddSettingOrderByRelevanceInput = {
    fields: AddSettingOrderByRelevanceFieldEnum | AddSettingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AddSettingCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
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
    createdAt?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
  }

  export type AddSettingMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
  }

  export type AddSettingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BuffingEntryListRelationFilter = {
    every?: BuffingEntryWhereInput
    some?: BuffingEntryWhereInput
    none?: BuffingEntryWhereInput
  }

  export type BuffingEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddBuffingOrderByRelevanceInput = {
    fields: AddBuffingOrderByRelevanceFieldEnum | AddBuffingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AddBuffingCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
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
    createdAt?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
  }

  export type AddBuffingMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
  }

  export type AddBuffingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AddSupplierItemOrderByRelevanceInput = {
    fields: AddSupplierItemOrderByRelevanceFieldEnum | AddSupplierItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AddSupplierItemCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
  }

  export type AddSupplierItemAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AddSupplierItemMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
  }

  export type AddSupplierItemMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
  }

  export type AddSupplierItemSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumITEMTYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.ITEMTYPE | EnumITEMTYPEFieldRefInput<$PrismaModel>
    in?: $Enums.ITEMTYPE[]
    notIn?: $Enums.ITEMTYPE[]
    not?: NestedEnumITEMTYPEFilter<$PrismaModel> | $Enums.ITEMTYPE
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type AddPurchaseStockOrderByRelevanceInput = {
    fields: AddPurchaseStockOrderByRelevanceFieldEnum | AddPurchaseStockOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AddPurchaseStockCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    item?: SortOrder
    goldWeight?: SortOrder
    goldTouch?: SortOrder
    goldPurity?: SortOrder
    goldRate?: SortOrder
    goldtotalValue?: SortOrder
    silverWeight?: SortOrder
    silverTouch?: SortOrder
    silverPurity?: SortOrder
    silverRate?: SortOrder
    silvertotalValue?: SortOrder
  }

  export type AddPurchaseStockAvgOrderByAggregateInput = {
    id?: SortOrder
    goldWeight?: SortOrder
    goldTouch?: SortOrder
    goldPurity?: SortOrder
    goldRate?: SortOrder
    goldtotalValue?: SortOrder
    silverWeight?: SortOrder
    silverTouch?: SortOrder
    silverPurity?: SortOrder
    silverRate?: SortOrder
    silvertotalValue?: SortOrder
  }

  export type AddPurchaseStockMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    item?: SortOrder
    goldWeight?: SortOrder
    goldTouch?: SortOrder
    goldPurity?: SortOrder
    goldRate?: SortOrder
    goldtotalValue?: SortOrder
    silverWeight?: SortOrder
    silverTouch?: SortOrder
    silverPurity?: SortOrder
    silverRate?: SortOrder
    silvertotalValue?: SortOrder
  }

  export type AddPurchaseStockMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    item?: SortOrder
    goldWeight?: SortOrder
    goldTouch?: SortOrder
    goldPurity?: SortOrder
    goldRate?: SortOrder
    goldtotalValue?: SortOrder
    silverWeight?: SortOrder
    silverTouch?: SortOrder
    silverPurity?: SortOrder
    silverRate?: SortOrder
    silvertotalValue?: SortOrder
  }

  export type AddPurchaseStockSumOrderByAggregateInput = {
    id?: SortOrder
    goldWeight?: SortOrder
    goldTouch?: SortOrder
    goldPurity?: SortOrder
    goldRate?: SortOrder
    goldtotalValue?: SortOrder
    silverWeight?: SortOrder
    silverTouch?: SortOrder
    silverPurity?: SortOrder
    silverRate?: SortOrder
    silvertotalValue?: SortOrder
  }

  export type EnumITEMTYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ITEMTYPE | EnumITEMTYPEFieldRefInput<$PrismaModel>
    in?: $Enums.ITEMTYPE[]
    notIn?: $Enums.ITEMTYPE[]
    not?: NestedEnumITEMTYPEWithAggregatesFilter<$PrismaModel> | $Enums.ITEMTYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumITEMTYPEFilter<$PrismaModel>
    _max?: NestedEnumITEMTYPEFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type AddCustomerScalarRelationFilter = {
    is?: AddCustomerWhereInput
    isNot?: AddCustomerWhereInput
  }

  export type CustomerTransactionOrderByRelevanceInput = {
    fields: CustomerTransactionOrderByRelevanceFieldEnum | CustomerTransactionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CustomerTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    date?: SortOrder
    value?: SortOrder
    type?: SortOrder
    touch?: SortOrder
    purity?: SortOrder
    goldRate?: SortOrder
    customerId?: SortOrder
  }

  export type CustomerTransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    touch?: SortOrder
    purity?: SortOrder
    goldRate?: SortOrder
    customerId?: SortOrder
  }

  export type CustomerTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    date?: SortOrder
    value?: SortOrder
    type?: SortOrder
    touch?: SortOrder
    purity?: SortOrder
    goldRate?: SortOrder
    customerId?: SortOrder
  }

  export type CustomerTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    date?: SortOrder
    value?: SortOrder
    type?: SortOrder
    touch?: SortOrder
    purity?: SortOrder
    goldRate?: SortOrder
    customerId?: SortOrder
  }

  export type CustomerTransactionSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    touch?: SortOrder
    purity?: SortOrder
    goldRate?: SortOrder
    customerId?: SortOrder
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

  export type AddItemOrderByRelevanceInput = {
    fields: AddItemOrderByRelevanceFieldEnum | AddItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AddItemCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
  }

  export type AddItemAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AddItemMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
  }

  export type AddItemMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
  }

  export type AddItemSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AddCastingScalarRelationFilter = {
    is?: AddCastingWhereInput
    isNot?: AddCastingWhereInput
  }

  export type CastingEntryCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    date?: SortOrder
    given_gold?: SortOrder
    given_touch?: SortOrder
    purity?: SortOrder
    final_touch?: SortOrder
    pure_value?: SortOrder
    copper?: SortOrder
    final_weight?: SortOrder
    casting_customer_id?: SortOrder
  }

  export type CastingEntryAvgOrderByAggregateInput = {
    id?: SortOrder
    given_gold?: SortOrder
    given_touch?: SortOrder
    purity?: SortOrder
    final_touch?: SortOrder
    pure_value?: SortOrder
    copper?: SortOrder
    final_weight?: SortOrder
    casting_customer_id?: SortOrder
  }

  export type CastingEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    date?: SortOrder
    given_gold?: SortOrder
    given_touch?: SortOrder
    purity?: SortOrder
    final_touch?: SortOrder
    pure_value?: SortOrder
    copper?: SortOrder
    final_weight?: SortOrder
    casting_customer_id?: SortOrder
  }

  export type CastingEntryMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    date?: SortOrder
    given_gold?: SortOrder
    given_touch?: SortOrder
    purity?: SortOrder
    final_touch?: SortOrder
    pure_value?: SortOrder
    copper?: SortOrder
    final_weight?: SortOrder
    casting_customer_id?: SortOrder
  }

  export type CastingEntrySumOrderByAggregateInput = {
    id?: SortOrder
    given_gold?: SortOrder
    given_touch?: SortOrder
    purity?: SortOrder
    final_touch?: SortOrder
    pure_value?: SortOrder
    copper?: SortOrder
    final_weight?: SortOrder
    casting_customer_id?: SortOrder
  }

  export type EnumCASTINGENTRYTYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.CASTINGENTRYTYPE | EnumCASTINGENTRYTYPEFieldRefInput<$PrismaModel>
    in?: $Enums.CASTINGENTRYTYPE[]
    notIn?: $Enums.CASTINGENTRYTYPE[]
    not?: NestedEnumCASTINGENTRYTYPEFilter<$PrismaModel> | $Enums.CASTINGENTRYTYPE
  }

  export type AddItemScalarRelationFilter = {
    is?: AddItemWhereInput
    isNot?: AddItemWhereInput
  }

  export type CastingEntryScalarRelationFilter = {
    is?: CastingEntryWhereInput
    isNot?: CastingEntryWhereInput
  }

  export type FilingEntryNullableScalarRelationFilter = {
    is?: FilingEntryWhereInput | null
    isNot?: FilingEntryWhereInput | null
  }

  export type SettingEntryNullableScalarRelationFilter = {
    is?: SettingEntryWhereInput | null
    isNot?: SettingEntryWhereInput | null
  }

  export type BuffingEntryNullableScalarRelationFilter = {
    is?: BuffingEntryWhereInput | null
    isNot?: BuffingEntryWhereInput | null
  }

  export type CastingItemsOrderByRelevanceInput = {
    fields: CastingItemsOrderByRelevanceFieldEnum | CastingItemsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CastingItemsCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    type?: SortOrder
    item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    remarks?: SortOrder
    after_weight?: SortOrder
    scrap_weight?: SortOrder
    scrap_wastage?: SortOrder
    casting_entry_id?: SortOrder
    casting_customer_id?: SortOrder
  }

  export type CastingItemsAvgOrderByAggregateInput = {
    id?: SortOrder
    item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    after_weight?: SortOrder
    scrap_weight?: SortOrder
    scrap_wastage?: SortOrder
    casting_entry_id?: SortOrder
    casting_customer_id?: SortOrder
  }

  export type CastingItemsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    type?: SortOrder
    item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    remarks?: SortOrder
    after_weight?: SortOrder
    scrap_weight?: SortOrder
    scrap_wastage?: SortOrder
    casting_entry_id?: SortOrder
    casting_customer_id?: SortOrder
  }

  export type CastingItemsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    type?: SortOrder
    item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    remarks?: SortOrder
    after_weight?: SortOrder
    scrap_weight?: SortOrder
    scrap_wastage?: SortOrder
    casting_entry_id?: SortOrder
    casting_customer_id?: SortOrder
  }

  export type CastingItemsSumOrderByAggregateInput = {
    id?: SortOrder
    item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    after_weight?: SortOrder
    scrap_weight?: SortOrder
    scrap_wastage?: SortOrder
    casting_entry_id?: SortOrder
    casting_customer_id?: SortOrder
  }

  export type EnumCASTINGENTRYTYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CASTINGENTRYTYPE | EnumCASTINGENTRYTYPEFieldRefInput<$PrismaModel>
    in?: $Enums.CASTINGENTRYTYPE[]
    notIn?: $Enums.CASTINGENTRYTYPE[]
    not?: NestedEnumCASTINGENTRYTYPEWithAggregatesFilter<$PrismaModel> | $Enums.CASTINGENTRYTYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCASTINGENTRYTYPEFilter<$PrismaModel>
    _max?: NestedEnumCASTINGENTRYTYPEFilter<$PrismaModel>
  }

  export type EnumSTONEOPTIONFilter<$PrismaModel = never> = {
    equals?: $Enums.STONEOPTION | EnumSTONEOPTIONFieldRefInput<$PrismaModel>
    in?: $Enums.STONEOPTION[]
    notIn?: $Enums.STONEOPTION[]
    not?: NestedEnumSTONEOPTIONFilter<$PrismaModel> | $Enums.STONEOPTION
  }

  export type AddFilingScalarRelationFilter = {
    is?: AddFilingWhereInput
    isNot?: AddFilingWhereInput
  }

  export type CastingItemsScalarRelationFilter = {
    is?: CastingItemsWhereInput
    isNot?: CastingItemsWhereInput
  }

  export type FilingEntryOrderByRelevanceInput = {
    fields: FilingEntryOrderByRelevanceFieldEnum | FilingEntryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FilingEntryCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    filing_person_id?: SortOrder
    casting_item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    remarks?: SortOrder
    after_weight?: SortOrder
    stone_option?: SortOrder
  }

  export type FilingEntryAvgOrderByAggregateInput = {
    id?: SortOrder
    filing_person_id?: SortOrder
    casting_item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    after_weight?: SortOrder
  }

  export type FilingEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    filing_person_id?: SortOrder
    casting_item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    remarks?: SortOrder
    after_weight?: SortOrder
    stone_option?: SortOrder
  }

  export type FilingEntryMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    filing_person_id?: SortOrder
    casting_item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    remarks?: SortOrder
    after_weight?: SortOrder
    stone_option?: SortOrder
  }

  export type FilingEntrySumOrderByAggregateInput = {
    id?: SortOrder
    filing_person_id?: SortOrder
    casting_item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    after_weight?: SortOrder
  }

  export type EnumSTONEOPTIONWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.STONEOPTION | EnumSTONEOPTIONFieldRefInput<$PrismaModel>
    in?: $Enums.STONEOPTION[]
    notIn?: $Enums.STONEOPTION[]
    not?: NestedEnumSTONEOPTIONWithAggregatesFilter<$PrismaModel> | $Enums.STONEOPTION
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSTONEOPTIONFilter<$PrismaModel>
    _max?: NestedEnumSTONEOPTIONFilter<$PrismaModel>
  }

  export type AddSettingScalarRelationFilter = {
    is?: AddSettingWhereInput
    isNot?: AddSettingWhereInput
  }

  export type FilingEntryScalarRelationFilter = {
    is?: FilingEntryWhereInput
    isNot?: FilingEntryWhereInput
  }

  export type SettingEntryOrderByRelevanceInput = {
    fields: SettingEntryOrderByRelevanceFieldEnum | SettingEntryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SettingEntryCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    setting_person_id?: SortOrder
    casting_item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    remarks?: SortOrder
    after_weight?: SortOrder
    filing_entry_id?: SortOrder
  }

  export type SettingEntryAvgOrderByAggregateInput = {
    id?: SortOrder
    setting_person_id?: SortOrder
    casting_item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    after_weight?: SortOrder
    filing_entry_id?: SortOrder
  }

  export type SettingEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    setting_person_id?: SortOrder
    casting_item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    remarks?: SortOrder
    after_weight?: SortOrder
    filing_entry_id?: SortOrder
  }

  export type SettingEntryMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    setting_person_id?: SortOrder
    casting_item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    remarks?: SortOrder
    after_weight?: SortOrder
    filing_entry_id?: SortOrder
  }

  export type SettingEntrySumOrderByAggregateInput = {
    id?: SortOrder
    setting_person_id?: SortOrder
    casting_item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    after_weight?: SortOrder
    filing_entry_id?: SortOrder
  }

  export type AddBuffingScalarRelationFilter = {
    is?: AddBuffingWhereInput
    isNot?: AddBuffingWhereInput
  }

  export type SettingEntryScalarRelationFilter = {
    is?: SettingEntryWhereInput
    isNot?: SettingEntryWhereInput
  }

  export type BuffingEntryOrderByRelevanceInput = {
    fields: BuffingEntryOrderByRelevanceFieldEnum | BuffingEntryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BuffingEntryCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    buffing_person_id?: SortOrder
    casting_item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    remarks?: SortOrder
    after_weight?: SortOrder
    setting_entry_id?: SortOrder
    filing_entry_id?: SortOrder
    type?: SortOrder
  }

  export type BuffingEntryAvgOrderByAggregateInput = {
    id?: SortOrder
    buffing_person_id?: SortOrder
    casting_item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    after_weight?: SortOrder
    setting_entry_id?: SortOrder
    filing_entry_id?: SortOrder
  }

  export type BuffingEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    buffing_person_id?: SortOrder
    casting_item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    remarks?: SortOrder
    after_weight?: SortOrder
    setting_entry_id?: SortOrder
    filing_entry_id?: SortOrder
    type?: SortOrder
  }

  export type BuffingEntryMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    buffing_person_id?: SortOrder
    casting_item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    remarks?: SortOrder
    after_weight?: SortOrder
    setting_entry_id?: SortOrder
    filing_entry_id?: SortOrder
    type?: SortOrder
  }

  export type BuffingEntrySumOrderByAggregateInput = {
    id?: SortOrder
    buffing_person_id?: SortOrder
    casting_item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    after_weight?: SortOrder
    setting_entry_id?: SortOrder
    filing_entry_id?: SortOrder
  }

  export type StockOrderByRelevanceInput = {
    fields: StockOrderByRelevanceFieldEnum | StockOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StockCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    casting_item_id?: SortOrder
    item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    remarks?: SortOrder
    scrap_weight?: SortOrder
    scrap_wastage?: SortOrder
    casting_customer_id?: SortOrder
  }

  export type StockAvgOrderByAggregateInput = {
    id?: SortOrder
    casting_item_id?: SortOrder
    item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    scrap_weight?: SortOrder
    scrap_wastage?: SortOrder
    casting_customer_id?: SortOrder
  }

  export type StockMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    casting_item_id?: SortOrder
    item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    remarks?: SortOrder
    scrap_weight?: SortOrder
    scrap_wastage?: SortOrder
    casting_customer_id?: SortOrder
  }

  export type StockMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    casting_item_id?: SortOrder
    item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    remarks?: SortOrder
    scrap_weight?: SortOrder
    scrap_wastage?: SortOrder
    casting_customer_id?: SortOrder
  }

  export type StockSumOrderByAggregateInput = {
    id?: SortOrder
    casting_item_id?: SortOrder
    item_id?: SortOrder
    weight?: SortOrder
    touch?: SortOrder
    item_purity?: SortOrder
    scrap_weight?: SortOrder
    scrap_wastage?: SortOrder
    casting_customer_id?: SortOrder
  }

  export type CustomerTransactionCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerTransactionCreateWithoutCustomerInput, CustomerTransactionUncheckedCreateWithoutCustomerInput> | CustomerTransactionCreateWithoutCustomerInput[] | CustomerTransactionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerTransactionCreateOrConnectWithoutCustomerInput | CustomerTransactionCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerTransactionCreateManyCustomerInputEnvelope
    connect?: CustomerTransactionWhereUniqueInput | CustomerTransactionWhereUniqueInput[]
  }

  export type CustomerTransactionUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerTransactionCreateWithoutCustomerInput, CustomerTransactionUncheckedCreateWithoutCustomerInput> | CustomerTransactionCreateWithoutCustomerInput[] | CustomerTransactionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerTransactionCreateOrConnectWithoutCustomerInput | CustomerTransactionCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerTransactionCreateManyCustomerInputEnvelope
    connect?: CustomerTransactionWhereUniqueInput | CustomerTransactionWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CustomerTransactionUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerTransactionCreateWithoutCustomerInput, CustomerTransactionUncheckedCreateWithoutCustomerInput> | CustomerTransactionCreateWithoutCustomerInput[] | CustomerTransactionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerTransactionCreateOrConnectWithoutCustomerInput | CustomerTransactionCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerTransactionUpsertWithWhereUniqueWithoutCustomerInput | CustomerTransactionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerTransactionCreateManyCustomerInputEnvelope
    set?: CustomerTransactionWhereUniqueInput | CustomerTransactionWhereUniqueInput[]
    disconnect?: CustomerTransactionWhereUniqueInput | CustomerTransactionWhereUniqueInput[]
    delete?: CustomerTransactionWhereUniqueInput | CustomerTransactionWhereUniqueInput[]
    connect?: CustomerTransactionWhereUniqueInput | CustomerTransactionWhereUniqueInput[]
    update?: CustomerTransactionUpdateWithWhereUniqueWithoutCustomerInput | CustomerTransactionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerTransactionUpdateManyWithWhereWithoutCustomerInput | CustomerTransactionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerTransactionScalarWhereInput | CustomerTransactionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CustomerTransactionUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerTransactionCreateWithoutCustomerInput, CustomerTransactionUncheckedCreateWithoutCustomerInput> | CustomerTransactionCreateWithoutCustomerInput[] | CustomerTransactionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerTransactionCreateOrConnectWithoutCustomerInput | CustomerTransactionCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerTransactionUpsertWithWhereUniqueWithoutCustomerInput | CustomerTransactionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerTransactionCreateManyCustomerInputEnvelope
    set?: CustomerTransactionWhereUniqueInput | CustomerTransactionWhereUniqueInput[]
    disconnect?: CustomerTransactionWhereUniqueInput | CustomerTransactionWhereUniqueInput[]
    delete?: CustomerTransactionWhereUniqueInput | CustomerTransactionWhereUniqueInput[]
    connect?: CustomerTransactionWhereUniqueInput | CustomerTransactionWhereUniqueInput[]
    update?: CustomerTransactionUpdateWithWhereUniqueWithoutCustomerInput | CustomerTransactionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerTransactionUpdateManyWithWhereWithoutCustomerInput | CustomerTransactionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerTransactionScalarWhereInput | CustomerTransactionScalarWhereInput[]
  }

  export type CastingEntryCreateNestedManyWithoutCasting_customerInput = {
    create?: XOR<CastingEntryCreateWithoutCasting_customerInput, CastingEntryUncheckedCreateWithoutCasting_customerInput> | CastingEntryCreateWithoutCasting_customerInput[] | CastingEntryUncheckedCreateWithoutCasting_customerInput[]
    connectOrCreate?: CastingEntryCreateOrConnectWithoutCasting_customerInput | CastingEntryCreateOrConnectWithoutCasting_customerInput[]
    createMany?: CastingEntryCreateManyCasting_customerInputEnvelope
    connect?: CastingEntryWhereUniqueInput | CastingEntryWhereUniqueInput[]
  }

  export type CastingItemsCreateNestedManyWithoutCasting_customerInput = {
    create?: XOR<CastingItemsCreateWithoutCasting_customerInput, CastingItemsUncheckedCreateWithoutCasting_customerInput> | CastingItemsCreateWithoutCasting_customerInput[] | CastingItemsUncheckedCreateWithoutCasting_customerInput[]
    connectOrCreate?: CastingItemsCreateOrConnectWithoutCasting_customerInput | CastingItemsCreateOrConnectWithoutCasting_customerInput[]
    createMany?: CastingItemsCreateManyCasting_customerInputEnvelope
    connect?: CastingItemsWhereUniqueInput | CastingItemsWhereUniqueInput[]
  }

  export type StockCreateNestedManyWithoutCasting_customerInput = {
    create?: XOR<StockCreateWithoutCasting_customerInput, StockUncheckedCreateWithoutCasting_customerInput> | StockCreateWithoutCasting_customerInput[] | StockUncheckedCreateWithoutCasting_customerInput[]
    connectOrCreate?: StockCreateOrConnectWithoutCasting_customerInput | StockCreateOrConnectWithoutCasting_customerInput[]
    createMany?: StockCreateManyCasting_customerInputEnvelope
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
  }

  export type CastingEntryUncheckedCreateNestedManyWithoutCasting_customerInput = {
    create?: XOR<CastingEntryCreateWithoutCasting_customerInput, CastingEntryUncheckedCreateWithoutCasting_customerInput> | CastingEntryCreateWithoutCasting_customerInput[] | CastingEntryUncheckedCreateWithoutCasting_customerInput[]
    connectOrCreate?: CastingEntryCreateOrConnectWithoutCasting_customerInput | CastingEntryCreateOrConnectWithoutCasting_customerInput[]
    createMany?: CastingEntryCreateManyCasting_customerInputEnvelope
    connect?: CastingEntryWhereUniqueInput | CastingEntryWhereUniqueInput[]
  }

  export type CastingItemsUncheckedCreateNestedManyWithoutCasting_customerInput = {
    create?: XOR<CastingItemsCreateWithoutCasting_customerInput, CastingItemsUncheckedCreateWithoutCasting_customerInput> | CastingItemsCreateWithoutCasting_customerInput[] | CastingItemsUncheckedCreateWithoutCasting_customerInput[]
    connectOrCreate?: CastingItemsCreateOrConnectWithoutCasting_customerInput | CastingItemsCreateOrConnectWithoutCasting_customerInput[]
    createMany?: CastingItemsCreateManyCasting_customerInputEnvelope
    connect?: CastingItemsWhereUniqueInput | CastingItemsWhereUniqueInput[]
  }

  export type StockUncheckedCreateNestedManyWithoutCasting_customerInput = {
    create?: XOR<StockCreateWithoutCasting_customerInput, StockUncheckedCreateWithoutCasting_customerInput> | StockCreateWithoutCasting_customerInput[] | StockUncheckedCreateWithoutCasting_customerInput[]
    connectOrCreate?: StockCreateOrConnectWithoutCasting_customerInput | StockCreateOrConnectWithoutCasting_customerInput[]
    createMany?: StockCreateManyCasting_customerInputEnvelope
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
  }

  export type CastingEntryUpdateManyWithoutCasting_customerNestedInput = {
    create?: XOR<CastingEntryCreateWithoutCasting_customerInput, CastingEntryUncheckedCreateWithoutCasting_customerInput> | CastingEntryCreateWithoutCasting_customerInput[] | CastingEntryUncheckedCreateWithoutCasting_customerInput[]
    connectOrCreate?: CastingEntryCreateOrConnectWithoutCasting_customerInput | CastingEntryCreateOrConnectWithoutCasting_customerInput[]
    upsert?: CastingEntryUpsertWithWhereUniqueWithoutCasting_customerInput | CastingEntryUpsertWithWhereUniqueWithoutCasting_customerInput[]
    createMany?: CastingEntryCreateManyCasting_customerInputEnvelope
    set?: CastingEntryWhereUniqueInput | CastingEntryWhereUniqueInput[]
    disconnect?: CastingEntryWhereUniqueInput | CastingEntryWhereUniqueInput[]
    delete?: CastingEntryWhereUniqueInput | CastingEntryWhereUniqueInput[]
    connect?: CastingEntryWhereUniqueInput | CastingEntryWhereUniqueInput[]
    update?: CastingEntryUpdateWithWhereUniqueWithoutCasting_customerInput | CastingEntryUpdateWithWhereUniqueWithoutCasting_customerInput[]
    updateMany?: CastingEntryUpdateManyWithWhereWithoutCasting_customerInput | CastingEntryUpdateManyWithWhereWithoutCasting_customerInput[]
    deleteMany?: CastingEntryScalarWhereInput | CastingEntryScalarWhereInput[]
  }

  export type CastingItemsUpdateManyWithoutCasting_customerNestedInput = {
    create?: XOR<CastingItemsCreateWithoutCasting_customerInput, CastingItemsUncheckedCreateWithoutCasting_customerInput> | CastingItemsCreateWithoutCasting_customerInput[] | CastingItemsUncheckedCreateWithoutCasting_customerInput[]
    connectOrCreate?: CastingItemsCreateOrConnectWithoutCasting_customerInput | CastingItemsCreateOrConnectWithoutCasting_customerInput[]
    upsert?: CastingItemsUpsertWithWhereUniqueWithoutCasting_customerInput | CastingItemsUpsertWithWhereUniqueWithoutCasting_customerInput[]
    createMany?: CastingItemsCreateManyCasting_customerInputEnvelope
    set?: CastingItemsWhereUniqueInput | CastingItemsWhereUniqueInput[]
    disconnect?: CastingItemsWhereUniqueInput | CastingItemsWhereUniqueInput[]
    delete?: CastingItemsWhereUniqueInput | CastingItemsWhereUniqueInput[]
    connect?: CastingItemsWhereUniqueInput | CastingItemsWhereUniqueInput[]
    update?: CastingItemsUpdateWithWhereUniqueWithoutCasting_customerInput | CastingItemsUpdateWithWhereUniqueWithoutCasting_customerInput[]
    updateMany?: CastingItemsUpdateManyWithWhereWithoutCasting_customerInput | CastingItemsUpdateManyWithWhereWithoutCasting_customerInput[]
    deleteMany?: CastingItemsScalarWhereInput | CastingItemsScalarWhereInput[]
  }

  export type StockUpdateManyWithoutCasting_customerNestedInput = {
    create?: XOR<StockCreateWithoutCasting_customerInput, StockUncheckedCreateWithoutCasting_customerInput> | StockCreateWithoutCasting_customerInput[] | StockUncheckedCreateWithoutCasting_customerInput[]
    connectOrCreate?: StockCreateOrConnectWithoutCasting_customerInput | StockCreateOrConnectWithoutCasting_customerInput[]
    upsert?: StockUpsertWithWhereUniqueWithoutCasting_customerInput | StockUpsertWithWhereUniqueWithoutCasting_customerInput[]
    createMany?: StockCreateManyCasting_customerInputEnvelope
    set?: StockWhereUniqueInput | StockWhereUniqueInput[]
    disconnect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    delete?: StockWhereUniqueInput | StockWhereUniqueInput[]
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    update?: StockUpdateWithWhereUniqueWithoutCasting_customerInput | StockUpdateWithWhereUniqueWithoutCasting_customerInput[]
    updateMany?: StockUpdateManyWithWhereWithoutCasting_customerInput | StockUpdateManyWithWhereWithoutCasting_customerInput[]
    deleteMany?: StockScalarWhereInput | StockScalarWhereInput[]
  }

  export type CastingEntryUncheckedUpdateManyWithoutCasting_customerNestedInput = {
    create?: XOR<CastingEntryCreateWithoutCasting_customerInput, CastingEntryUncheckedCreateWithoutCasting_customerInput> | CastingEntryCreateWithoutCasting_customerInput[] | CastingEntryUncheckedCreateWithoutCasting_customerInput[]
    connectOrCreate?: CastingEntryCreateOrConnectWithoutCasting_customerInput | CastingEntryCreateOrConnectWithoutCasting_customerInput[]
    upsert?: CastingEntryUpsertWithWhereUniqueWithoutCasting_customerInput | CastingEntryUpsertWithWhereUniqueWithoutCasting_customerInput[]
    createMany?: CastingEntryCreateManyCasting_customerInputEnvelope
    set?: CastingEntryWhereUniqueInput | CastingEntryWhereUniqueInput[]
    disconnect?: CastingEntryWhereUniqueInput | CastingEntryWhereUniqueInput[]
    delete?: CastingEntryWhereUniqueInput | CastingEntryWhereUniqueInput[]
    connect?: CastingEntryWhereUniqueInput | CastingEntryWhereUniqueInput[]
    update?: CastingEntryUpdateWithWhereUniqueWithoutCasting_customerInput | CastingEntryUpdateWithWhereUniqueWithoutCasting_customerInput[]
    updateMany?: CastingEntryUpdateManyWithWhereWithoutCasting_customerInput | CastingEntryUpdateManyWithWhereWithoutCasting_customerInput[]
    deleteMany?: CastingEntryScalarWhereInput | CastingEntryScalarWhereInput[]
  }

  export type CastingItemsUncheckedUpdateManyWithoutCasting_customerNestedInput = {
    create?: XOR<CastingItemsCreateWithoutCasting_customerInput, CastingItemsUncheckedCreateWithoutCasting_customerInput> | CastingItemsCreateWithoutCasting_customerInput[] | CastingItemsUncheckedCreateWithoutCasting_customerInput[]
    connectOrCreate?: CastingItemsCreateOrConnectWithoutCasting_customerInput | CastingItemsCreateOrConnectWithoutCasting_customerInput[]
    upsert?: CastingItemsUpsertWithWhereUniqueWithoutCasting_customerInput | CastingItemsUpsertWithWhereUniqueWithoutCasting_customerInput[]
    createMany?: CastingItemsCreateManyCasting_customerInputEnvelope
    set?: CastingItemsWhereUniqueInput | CastingItemsWhereUniqueInput[]
    disconnect?: CastingItemsWhereUniqueInput | CastingItemsWhereUniqueInput[]
    delete?: CastingItemsWhereUniqueInput | CastingItemsWhereUniqueInput[]
    connect?: CastingItemsWhereUniqueInput | CastingItemsWhereUniqueInput[]
    update?: CastingItemsUpdateWithWhereUniqueWithoutCasting_customerInput | CastingItemsUpdateWithWhereUniqueWithoutCasting_customerInput[]
    updateMany?: CastingItemsUpdateManyWithWhereWithoutCasting_customerInput | CastingItemsUpdateManyWithWhereWithoutCasting_customerInput[]
    deleteMany?: CastingItemsScalarWhereInput | CastingItemsScalarWhereInput[]
  }

  export type StockUncheckedUpdateManyWithoutCasting_customerNestedInput = {
    create?: XOR<StockCreateWithoutCasting_customerInput, StockUncheckedCreateWithoutCasting_customerInput> | StockCreateWithoutCasting_customerInput[] | StockUncheckedCreateWithoutCasting_customerInput[]
    connectOrCreate?: StockCreateOrConnectWithoutCasting_customerInput | StockCreateOrConnectWithoutCasting_customerInput[]
    upsert?: StockUpsertWithWhereUniqueWithoutCasting_customerInput | StockUpsertWithWhereUniqueWithoutCasting_customerInput[]
    createMany?: StockCreateManyCasting_customerInputEnvelope
    set?: StockWhereUniqueInput | StockWhereUniqueInput[]
    disconnect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    delete?: StockWhereUniqueInput | StockWhereUniqueInput[]
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    update?: StockUpdateWithWhereUniqueWithoutCasting_customerInput | StockUpdateWithWhereUniqueWithoutCasting_customerInput[]
    updateMany?: StockUpdateManyWithWhereWithoutCasting_customerInput | StockUpdateManyWithWhereWithoutCasting_customerInput[]
    deleteMany?: StockScalarWhereInput | StockScalarWhereInput[]
  }

  export type FilingEntryCreateNestedManyWithoutFiling_personInput = {
    create?: XOR<FilingEntryCreateWithoutFiling_personInput, FilingEntryUncheckedCreateWithoutFiling_personInput> | FilingEntryCreateWithoutFiling_personInput[] | FilingEntryUncheckedCreateWithoutFiling_personInput[]
    connectOrCreate?: FilingEntryCreateOrConnectWithoutFiling_personInput | FilingEntryCreateOrConnectWithoutFiling_personInput[]
    createMany?: FilingEntryCreateManyFiling_personInputEnvelope
    connect?: FilingEntryWhereUniqueInput | FilingEntryWhereUniqueInput[]
  }

  export type FilingEntryUncheckedCreateNestedManyWithoutFiling_personInput = {
    create?: XOR<FilingEntryCreateWithoutFiling_personInput, FilingEntryUncheckedCreateWithoutFiling_personInput> | FilingEntryCreateWithoutFiling_personInput[] | FilingEntryUncheckedCreateWithoutFiling_personInput[]
    connectOrCreate?: FilingEntryCreateOrConnectWithoutFiling_personInput | FilingEntryCreateOrConnectWithoutFiling_personInput[]
    createMany?: FilingEntryCreateManyFiling_personInputEnvelope
    connect?: FilingEntryWhereUniqueInput | FilingEntryWhereUniqueInput[]
  }

  export type FilingEntryUpdateManyWithoutFiling_personNestedInput = {
    create?: XOR<FilingEntryCreateWithoutFiling_personInput, FilingEntryUncheckedCreateWithoutFiling_personInput> | FilingEntryCreateWithoutFiling_personInput[] | FilingEntryUncheckedCreateWithoutFiling_personInput[]
    connectOrCreate?: FilingEntryCreateOrConnectWithoutFiling_personInput | FilingEntryCreateOrConnectWithoutFiling_personInput[]
    upsert?: FilingEntryUpsertWithWhereUniqueWithoutFiling_personInput | FilingEntryUpsertWithWhereUniqueWithoutFiling_personInput[]
    createMany?: FilingEntryCreateManyFiling_personInputEnvelope
    set?: FilingEntryWhereUniqueInput | FilingEntryWhereUniqueInput[]
    disconnect?: FilingEntryWhereUniqueInput | FilingEntryWhereUniqueInput[]
    delete?: FilingEntryWhereUniqueInput | FilingEntryWhereUniqueInput[]
    connect?: FilingEntryWhereUniqueInput | FilingEntryWhereUniqueInput[]
    update?: FilingEntryUpdateWithWhereUniqueWithoutFiling_personInput | FilingEntryUpdateWithWhereUniqueWithoutFiling_personInput[]
    updateMany?: FilingEntryUpdateManyWithWhereWithoutFiling_personInput | FilingEntryUpdateManyWithWhereWithoutFiling_personInput[]
    deleteMany?: FilingEntryScalarWhereInput | FilingEntryScalarWhereInput[]
  }

  export type FilingEntryUncheckedUpdateManyWithoutFiling_personNestedInput = {
    create?: XOR<FilingEntryCreateWithoutFiling_personInput, FilingEntryUncheckedCreateWithoutFiling_personInput> | FilingEntryCreateWithoutFiling_personInput[] | FilingEntryUncheckedCreateWithoutFiling_personInput[]
    connectOrCreate?: FilingEntryCreateOrConnectWithoutFiling_personInput | FilingEntryCreateOrConnectWithoutFiling_personInput[]
    upsert?: FilingEntryUpsertWithWhereUniqueWithoutFiling_personInput | FilingEntryUpsertWithWhereUniqueWithoutFiling_personInput[]
    createMany?: FilingEntryCreateManyFiling_personInputEnvelope
    set?: FilingEntryWhereUniqueInput | FilingEntryWhereUniqueInput[]
    disconnect?: FilingEntryWhereUniqueInput | FilingEntryWhereUniqueInput[]
    delete?: FilingEntryWhereUniqueInput | FilingEntryWhereUniqueInput[]
    connect?: FilingEntryWhereUniqueInput | FilingEntryWhereUniqueInput[]
    update?: FilingEntryUpdateWithWhereUniqueWithoutFiling_personInput | FilingEntryUpdateWithWhereUniqueWithoutFiling_personInput[]
    updateMany?: FilingEntryUpdateManyWithWhereWithoutFiling_personInput | FilingEntryUpdateManyWithWhereWithoutFiling_personInput[]
    deleteMany?: FilingEntryScalarWhereInput | FilingEntryScalarWhereInput[]
  }

  export type SettingEntryCreateNestedManyWithoutSetting_personInput = {
    create?: XOR<SettingEntryCreateWithoutSetting_personInput, SettingEntryUncheckedCreateWithoutSetting_personInput> | SettingEntryCreateWithoutSetting_personInput[] | SettingEntryUncheckedCreateWithoutSetting_personInput[]
    connectOrCreate?: SettingEntryCreateOrConnectWithoutSetting_personInput | SettingEntryCreateOrConnectWithoutSetting_personInput[]
    createMany?: SettingEntryCreateManySetting_personInputEnvelope
    connect?: SettingEntryWhereUniqueInput | SettingEntryWhereUniqueInput[]
  }

  export type SettingEntryUncheckedCreateNestedManyWithoutSetting_personInput = {
    create?: XOR<SettingEntryCreateWithoutSetting_personInput, SettingEntryUncheckedCreateWithoutSetting_personInput> | SettingEntryCreateWithoutSetting_personInput[] | SettingEntryUncheckedCreateWithoutSetting_personInput[]
    connectOrCreate?: SettingEntryCreateOrConnectWithoutSetting_personInput | SettingEntryCreateOrConnectWithoutSetting_personInput[]
    createMany?: SettingEntryCreateManySetting_personInputEnvelope
    connect?: SettingEntryWhereUniqueInput | SettingEntryWhereUniqueInput[]
  }

  export type SettingEntryUpdateManyWithoutSetting_personNestedInput = {
    create?: XOR<SettingEntryCreateWithoutSetting_personInput, SettingEntryUncheckedCreateWithoutSetting_personInput> | SettingEntryCreateWithoutSetting_personInput[] | SettingEntryUncheckedCreateWithoutSetting_personInput[]
    connectOrCreate?: SettingEntryCreateOrConnectWithoutSetting_personInput | SettingEntryCreateOrConnectWithoutSetting_personInput[]
    upsert?: SettingEntryUpsertWithWhereUniqueWithoutSetting_personInput | SettingEntryUpsertWithWhereUniqueWithoutSetting_personInput[]
    createMany?: SettingEntryCreateManySetting_personInputEnvelope
    set?: SettingEntryWhereUniqueInput | SettingEntryWhereUniqueInput[]
    disconnect?: SettingEntryWhereUniqueInput | SettingEntryWhereUniqueInput[]
    delete?: SettingEntryWhereUniqueInput | SettingEntryWhereUniqueInput[]
    connect?: SettingEntryWhereUniqueInput | SettingEntryWhereUniqueInput[]
    update?: SettingEntryUpdateWithWhereUniqueWithoutSetting_personInput | SettingEntryUpdateWithWhereUniqueWithoutSetting_personInput[]
    updateMany?: SettingEntryUpdateManyWithWhereWithoutSetting_personInput | SettingEntryUpdateManyWithWhereWithoutSetting_personInput[]
    deleteMany?: SettingEntryScalarWhereInput | SettingEntryScalarWhereInput[]
  }

  export type SettingEntryUncheckedUpdateManyWithoutSetting_personNestedInput = {
    create?: XOR<SettingEntryCreateWithoutSetting_personInput, SettingEntryUncheckedCreateWithoutSetting_personInput> | SettingEntryCreateWithoutSetting_personInput[] | SettingEntryUncheckedCreateWithoutSetting_personInput[]
    connectOrCreate?: SettingEntryCreateOrConnectWithoutSetting_personInput | SettingEntryCreateOrConnectWithoutSetting_personInput[]
    upsert?: SettingEntryUpsertWithWhereUniqueWithoutSetting_personInput | SettingEntryUpsertWithWhereUniqueWithoutSetting_personInput[]
    createMany?: SettingEntryCreateManySetting_personInputEnvelope
    set?: SettingEntryWhereUniqueInput | SettingEntryWhereUniqueInput[]
    disconnect?: SettingEntryWhereUniqueInput | SettingEntryWhereUniqueInput[]
    delete?: SettingEntryWhereUniqueInput | SettingEntryWhereUniqueInput[]
    connect?: SettingEntryWhereUniqueInput | SettingEntryWhereUniqueInput[]
    update?: SettingEntryUpdateWithWhereUniqueWithoutSetting_personInput | SettingEntryUpdateWithWhereUniqueWithoutSetting_personInput[]
    updateMany?: SettingEntryUpdateManyWithWhereWithoutSetting_personInput | SettingEntryUpdateManyWithWhereWithoutSetting_personInput[]
    deleteMany?: SettingEntryScalarWhereInput | SettingEntryScalarWhereInput[]
  }

  export type BuffingEntryCreateNestedManyWithoutBuffing_personInput = {
    create?: XOR<BuffingEntryCreateWithoutBuffing_personInput, BuffingEntryUncheckedCreateWithoutBuffing_personInput> | BuffingEntryCreateWithoutBuffing_personInput[] | BuffingEntryUncheckedCreateWithoutBuffing_personInput[]
    connectOrCreate?: BuffingEntryCreateOrConnectWithoutBuffing_personInput | BuffingEntryCreateOrConnectWithoutBuffing_personInput[]
    createMany?: BuffingEntryCreateManyBuffing_personInputEnvelope
    connect?: BuffingEntryWhereUniqueInput | BuffingEntryWhereUniqueInput[]
  }

  export type BuffingEntryUncheckedCreateNestedManyWithoutBuffing_personInput = {
    create?: XOR<BuffingEntryCreateWithoutBuffing_personInput, BuffingEntryUncheckedCreateWithoutBuffing_personInput> | BuffingEntryCreateWithoutBuffing_personInput[] | BuffingEntryUncheckedCreateWithoutBuffing_personInput[]
    connectOrCreate?: BuffingEntryCreateOrConnectWithoutBuffing_personInput | BuffingEntryCreateOrConnectWithoutBuffing_personInput[]
    createMany?: BuffingEntryCreateManyBuffing_personInputEnvelope
    connect?: BuffingEntryWhereUniqueInput | BuffingEntryWhereUniqueInput[]
  }

  export type BuffingEntryUpdateManyWithoutBuffing_personNestedInput = {
    create?: XOR<BuffingEntryCreateWithoutBuffing_personInput, BuffingEntryUncheckedCreateWithoutBuffing_personInput> | BuffingEntryCreateWithoutBuffing_personInput[] | BuffingEntryUncheckedCreateWithoutBuffing_personInput[]
    connectOrCreate?: BuffingEntryCreateOrConnectWithoutBuffing_personInput | BuffingEntryCreateOrConnectWithoutBuffing_personInput[]
    upsert?: BuffingEntryUpsertWithWhereUniqueWithoutBuffing_personInput | BuffingEntryUpsertWithWhereUniqueWithoutBuffing_personInput[]
    createMany?: BuffingEntryCreateManyBuffing_personInputEnvelope
    set?: BuffingEntryWhereUniqueInput | BuffingEntryWhereUniqueInput[]
    disconnect?: BuffingEntryWhereUniqueInput | BuffingEntryWhereUniqueInput[]
    delete?: BuffingEntryWhereUniqueInput | BuffingEntryWhereUniqueInput[]
    connect?: BuffingEntryWhereUniqueInput | BuffingEntryWhereUniqueInput[]
    update?: BuffingEntryUpdateWithWhereUniqueWithoutBuffing_personInput | BuffingEntryUpdateWithWhereUniqueWithoutBuffing_personInput[]
    updateMany?: BuffingEntryUpdateManyWithWhereWithoutBuffing_personInput | BuffingEntryUpdateManyWithWhereWithoutBuffing_personInput[]
    deleteMany?: BuffingEntryScalarWhereInput | BuffingEntryScalarWhereInput[]
  }

  export type BuffingEntryUncheckedUpdateManyWithoutBuffing_personNestedInput = {
    create?: XOR<BuffingEntryCreateWithoutBuffing_personInput, BuffingEntryUncheckedCreateWithoutBuffing_personInput> | BuffingEntryCreateWithoutBuffing_personInput[] | BuffingEntryUncheckedCreateWithoutBuffing_personInput[]
    connectOrCreate?: BuffingEntryCreateOrConnectWithoutBuffing_personInput | BuffingEntryCreateOrConnectWithoutBuffing_personInput[]
    upsert?: BuffingEntryUpsertWithWhereUniqueWithoutBuffing_personInput | BuffingEntryUpsertWithWhereUniqueWithoutBuffing_personInput[]
    createMany?: BuffingEntryCreateManyBuffing_personInputEnvelope
    set?: BuffingEntryWhereUniqueInput | BuffingEntryWhereUniqueInput[]
    disconnect?: BuffingEntryWhereUniqueInput | BuffingEntryWhereUniqueInput[]
    delete?: BuffingEntryWhereUniqueInput | BuffingEntryWhereUniqueInput[]
    connect?: BuffingEntryWhereUniqueInput | BuffingEntryWhereUniqueInput[]
    update?: BuffingEntryUpdateWithWhereUniqueWithoutBuffing_personInput | BuffingEntryUpdateWithWhereUniqueWithoutBuffing_personInput[]
    updateMany?: BuffingEntryUpdateManyWithWhereWithoutBuffing_personInput | BuffingEntryUpdateManyWithWhereWithoutBuffing_personInput[]
    deleteMany?: BuffingEntryScalarWhereInput | BuffingEntryScalarWhereInput[]
  }

  export type EnumITEMTYPEFieldUpdateOperationsInput = {
    set?: $Enums.ITEMTYPE
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AddCustomerCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<AddCustomerCreateWithoutTransactionsInput, AddCustomerUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: AddCustomerCreateOrConnectWithoutTransactionsInput
    connect?: AddCustomerWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AddCustomerUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<AddCustomerCreateWithoutTransactionsInput, AddCustomerUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: AddCustomerCreateOrConnectWithoutTransactionsInput
    upsert?: AddCustomerUpsertWithoutTransactionsInput
    connect?: AddCustomerWhereUniqueInput
    update?: XOR<XOR<AddCustomerUpdateToOneWithWhereWithoutTransactionsInput, AddCustomerUpdateWithoutTransactionsInput>, AddCustomerUncheckedUpdateWithoutTransactionsInput>
  }

  export type CastingItemsCreateNestedManyWithoutItemInput = {
    create?: XOR<CastingItemsCreateWithoutItemInput, CastingItemsUncheckedCreateWithoutItemInput> | CastingItemsCreateWithoutItemInput[] | CastingItemsUncheckedCreateWithoutItemInput[]
    connectOrCreate?: CastingItemsCreateOrConnectWithoutItemInput | CastingItemsCreateOrConnectWithoutItemInput[]
    createMany?: CastingItemsCreateManyItemInputEnvelope
    connect?: CastingItemsWhereUniqueInput | CastingItemsWhereUniqueInput[]
  }

  export type StockCreateNestedManyWithoutItemInput = {
    create?: XOR<StockCreateWithoutItemInput, StockUncheckedCreateWithoutItemInput> | StockCreateWithoutItemInput[] | StockUncheckedCreateWithoutItemInput[]
    connectOrCreate?: StockCreateOrConnectWithoutItemInput | StockCreateOrConnectWithoutItemInput[]
    createMany?: StockCreateManyItemInputEnvelope
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
  }

  export type CastingItemsUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<CastingItemsCreateWithoutItemInput, CastingItemsUncheckedCreateWithoutItemInput> | CastingItemsCreateWithoutItemInput[] | CastingItemsUncheckedCreateWithoutItemInput[]
    connectOrCreate?: CastingItemsCreateOrConnectWithoutItemInput | CastingItemsCreateOrConnectWithoutItemInput[]
    createMany?: CastingItemsCreateManyItemInputEnvelope
    connect?: CastingItemsWhereUniqueInput | CastingItemsWhereUniqueInput[]
  }

  export type StockUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<StockCreateWithoutItemInput, StockUncheckedCreateWithoutItemInput> | StockCreateWithoutItemInput[] | StockUncheckedCreateWithoutItemInput[]
    connectOrCreate?: StockCreateOrConnectWithoutItemInput | StockCreateOrConnectWithoutItemInput[]
    createMany?: StockCreateManyItemInputEnvelope
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
  }

  export type CastingItemsUpdateManyWithoutItemNestedInput = {
    create?: XOR<CastingItemsCreateWithoutItemInput, CastingItemsUncheckedCreateWithoutItemInput> | CastingItemsCreateWithoutItemInput[] | CastingItemsUncheckedCreateWithoutItemInput[]
    connectOrCreate?: CastingItemsCreateOrConnectWithoutItemInput | CastingItemsCreateOrConnectWithoutItemInput[]
    upsert?: CastingItemsUpsertWithWhereUniqueWithoutItemInput | CastingItemsUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: CastingItemsCreateManyItemInputEnvelope
    set?: CastingItemsWhereUniqueInput | CastingItemsWhereUniqueInput[]
    disconnect?: CastingItemsWhereUniqueInput | CastingItemsWhereUniqueInput[]
    delete?: CastingItemsWhereUniqueInput | CastingItemsWhereUniqueInput[]
    connect?: CastingItemsWhereUniqueInput | CastingItemsWhereUniqueInput[]
    update?: CastingItemsUpdateWithWhereUniqueWithoutItemInput | CastingItemsUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: CastingItemsUpdateManyWithWhereWithoutItemInput | CastingItemsUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: CastingItemsScalarWhereInput | CastingItemsScalarWhereInput[]
  }

  export type StockUpdateManyWithoutItemNestedInput = {
    create?: XOR<StockCreateWithoutItemInput, StockUncheckedCreateWithoutItemInput> | StockCreateWithoutItemInput[] | StockUncheckedCreateWithoutItemInput[]
    connectOrCreate?: StockCreateOrConnectWithoutItemInput | StockCreateOrConnectWithoutItemInput[]
    upsert?: StockUpsertWithWhereUniqueWithoutItemInput | StockUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: StockCreateManyItemInputEnvelope
    set?: StockWhereUniqueInput | StockWhereUniqueInput[]
    disconnect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    delete?: StockWhereUniqueInput | StockWhereUniqueInput[]
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    update?: StockUpdateWithWhereUniqueWithoutItemInput | StockUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: StockUpdateManyWithWhereWithoutItemInput | StockUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: StockScalarWhereInput | StockScalarWhereInput[]
  }

  export type CastingItemsUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<CastingItemsCreateWithoutItemInput, CastingItemsUncheckedCreateWithoutItemInput> | CastingItemsCreateWithoutItemInput[] | CastingItemsUncheckedCreateWithoutItemInput[]
    connectOrCreate?: CastingItemsCreateOrConnectWithoutItemInput | CastingItemsCreateOrConnectWithoutItemInput[]
    upsert?: CastingItemsUpsertWithWhereUniqueWithoutItemInput | CastingItemsUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: CastingItemsCreateManyItemInputEnvelope
    set?: CastingItemsWhereUniqueInput | CastingItemsWhereUniqueInput[]
    disconnect?: CastingItemsWhereUniqueInput | CastingItemsWhereUniqueInput[]
    delete?: CastingItemsWhereUniqueInput | CastingItemsWhereUniqueInput[]
    connect?: CastingItemsWhereUniqueInput | CastingItemsWhereUniqueInput[]
    update?: CastingItemsUpdateWithWhereUniqueWithoutItemInput | CastingItemsUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: CastingItemsUpdateManyWithWhereWithoutItemInput | CastingItemsUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: CastingItemsScalarWhereInput | CastingItemsScalarWhereInput[]
  }

  export type StockUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<StockCreateWithoutItemInput, StockUncheckedCreateWithoutItemInput> | StockCreateWithoutItemInput[] | StockUncheckedCreateWithoutItemInput[]
    connectOrCreate?: StockCreateOrConnectWithoutItemInput | StockCreateOrConnectWithoutItemInput[]
    upsert?: StockUpsertWithWhereUniqueWithoutItemInput | StockUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: StockCreateManyItemInputEnvelope
    set?: StockWhereUniqueInput | StockWhereUniqueInput[]
    disconnect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    delete?: StockWhereUniqueInput | StockWhereUniqueInput[]
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    update?: StockUpdateWithWhereUniqueWithoutItemInput | StockUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: StockUpdateManyWithWhereWithoutItemInput | StockUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: StockScalarWhereInput | StockScalarWhereInput[]
  }

  export type AddCastingCreateNestedOneWithoutEntriesInput = {
    create?: XOR<AddCastingCreateWithoutEntriesInput, AddCastingUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: AddCastingCreateOrConnectWithoutEntriesInput
    connect?: AddCastingWhereUniqueInput
  }

  export type CastingItemsCreateNestedManyWithoutCastingEntryInput = {
    create?: XOR<CastingItemsCreateWithoutCastingEntryInput, CastingItemsUncheckedCreateWithoutCastingEntryInput> | CastingItemsCreateWithoutCastingEntryInput[] | CastingItemsUncheckedCreateWithoutCastingEntryInput[]
    connectOrCreate?: CastingItemsCreateOrConnectWithoutCastingEntryInput | CastingItemsCreateOrConnectWithoutCastingEntryInput[]
    createMany?: CastingItemsCreateManyCastingEntryInputEnvelope
    connect?: CastingItemsWhereUniqueInput | CastingItemsWhereUniqueInput[]
  }

  export type CastingItemsUncheckedCreateNestedManyWithoutCastingEntryInput = {
    create?: XOR<CastingItemsCreateWithoutCastingEntryInput, CastingItemsUncheckedCreateWithoutCastingEntryInput> | CastingItemsCreateWithoutCastingEntryInput[] | CastingItemsUncheckedCreateWithoutCastingEntryInput[]
    connectOrCreate?: CastingItemsCreateOrConnectWithoutCastingEntryInput | CastingItemsCreateOrConnectWithoutCastingEntryInput[]
    createMany?: CastingItemsCreateManyCastingEntryInputEnvelope
    connect?: CastingItemsWhereUniqueInput | CastingItemsWhereUniqueInput[]
  }

  export type AddCastingUpdateOneRequiredWithoutEntriesNestedInput = {
    create?: XOR<AddCastingCreateWithoutEntriesInput, AddCastingUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: AddCastingCreateOrConnectWithoutEntriesInput
    upsert?: AddCastingUpsertWithoutEntriesInput
    connect?: AddCastingWhereUniqueInput
    update?: XOR<XOR<AddCastingUpdateToOneWithWhereWithoutEntriesInput, AddCastingUpdateWithoutEntriesInput>, AddCastingUncheckedUpdateWithoutEntriesInput>
  }

  export type CastingItemsUpdateManyWithoutCastingEntryNestedInput = {
    create?: XOR<CastingItemsCreateWithoutCastingEntryInput, CastingItemsUncheckedCreateWithoutCastingEntryInput> | CastingItemsCreateWithoutCastingEntryInput[] | CastingItemsUncheckedCreateWithoutCastingEntryInput[]
    connectOrCreate?: CastingItemsCreateOrConnectWithoutCastingEntryInput | CastingItemsCreateOrConnectWithoutCastingEntryInput[]
    upsert?: CastingItemsUpsertWithWhereUniqueWithoutCastingEntryInput | CastingItemsUpsertWithWhereUniqueWithoutCastingEntryInput[]
    createMany?: CastingItemsCreateManyCastingEntryInputEnvelope
    set?: CastingItemsWhereUniqueInput | CastingItemsWhereUniqueInput[]
    disconnect?: CastingItemsWhereUniqueInput | CastingItemsWhereUniqueInput[]
    delete?: CastingItemsWhereUniqueInput | CastingItemsWhereUniqueInput[]
    connect?: CastingItemsWhereUniqueInput | CastingItemsWhereUniqueInput[]
    update?: CastingItemsUpdateWithWhereUniqueWithoutCastingEntryInput | CastingItemsUpdateWithWhereUniqueWithoutCastingEntryInput[]
    updateMany?: CastingItemsUpdateManyWithWhereWithoutCastingEntryInput | CastingItemsUpdateManyWithWhereWithoutCastingEntryInput[]
    deleteMany?: CastingItemsScalarWhereInput | CastingItemsScalarWhereInput[]
  }

  export type CastingItemsUncheckedUpdateManyWithoutCastingEntryNestedInput = {
    create?: XOR<CastingItemsCreateWithoutCastingEntryInput, CastingItemsUncheckedCreateWithoutCastingEntryInput> | CastingItemsCreateWithoutCastingEntryInput[] | CastingItemsUncheckedCreateWithoutCastingEntryInput[]
    connectOrCreate?: CastingItemsCreateOrConnectWithoutCastingEntryInput | CastingItemsCreateOrConnectWithoutCastingEntryInput[]
    upsert?: CastingItemsUpsertWithWhereUniqueWithoutCastingEntryInput | CastingItemsUpsertWithWhereUniqueWithoutCastingEntryInput[]
    createMany?: CastingItemsCreateManyCastingEntryInputEnvelope
    set?: CastingItemsWhereUniqueInput | CastingItemsWhereUniqueInput[]
    disconnect?: CastingItemsWhereUniqueInput | CastingItemsWhereUniqueInput[]
    delete?: CastingItemsWhereUniqueInput | CastingItemsWhereUniqueInput[]
    connect?: CastingItemsWhereUniqueInput | CastingItemsWhereUniqueInput[]
    update?: CastingItemsUpdateWithWhereUniqueWithoutCastingEntryInput | CastingItemsUpdateWithWhereUniqueWithoutCastingEntryInput[]
    updateMany?: CastingItemsUpdateManyWithWhereWithoutCastingEntryInput | CastingItemsUpdateManyWithWhereWithoutCastingEntryInput[]
    deleteMany?: CastingItemsScalarWhereInput | CastingItemsScalarWhereInput[]
  }

  export type AddItemCreateNestedOneWithoutCastingItemsInput = {
    create?: XOR<AddItemCreateWithoutCastingItemsInput, AddItemUncheckedCreateWithoutCastingItemsInput>
    connectOrCreate?: AddItemCreateOrConnectWithoutCastingItemsInput
    connect?: AddItemWhereUniqueInput
  }

  export type CastingEntryCreateNestedOneWithoutItemsInput = {
    create?: XOR<CastingEntryCreateWithoutItemsInput, CastingEntryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CastingEntryCreateOrConnectWithoutItemsInput
    connect?: CastingEntryWhereUniqueInput
  }

  export type FilingEntryCreateNestedOneWithoutCastingItemInput = {
    create?: XOR<FilingEntryCreateWithoutCastingItemInput, FilingEntryUncheckedCreateWithoutCastingItemInput>
    connectOrCreate?: FilingEntryCreateOrConnectWithoutCastingItemInput
    connect?: FilingEntryWhereUniqueInput
  }

  export type SettingEntryCreateNestedOneWithoutCastingItemInput = {
    create?: XOR<SettingEntryCreateWithoutCastingItemInput, SettingEntryUncheckedCreateWithoutCastingItemInput>
    connectOrCreate?: SettingEntryCreateOrConnectWithoutCastingItemInput
    connect?: SettingEntryWhereUniqueInput
  }

  export type BuffingEntryCreateNestedOneWithoutCastingItemInput = {
    create?: XOR<BuffingEntryCreateWithoutCastingItemInput, BuffingEntryUncheckedCreateWithoutCastingItemInput>
    connectOrCreate?: BuffingEntryCreateOrConnectWithoutCastingItemInput
    connect?: BuffingEntryWhereUniqueInput
  }

  export type StockCreateNestedManyWithoutCastingItemInput = {
    create?: XOR<StockCreateWithoutCastingItemInput, StockUncheckedCreateWithoutCastingItemInput> | StockCreateWithoutCastingItemInput[] | StockUncheckedCreateWithoutCastingItemInput[]
    connectOrCreate?: StockCreateOrConnectWithoutCastingItemInput | StockCreateOrConnectWithoutCastingItemInput[]
    createMany?: StockCreateManyCastingItemInputEnvelope
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
  }

  export type AddCastingCreateNestedOneWithoutCastingitemsInput = {
    create?: XOR<AddCastingCreateWithoutCastingitemsInput, AddCastingUncheckedCreateWithoutCastingitemsInput>
    connectOrCreate?: AddCastingCreateOrConnectWithoutCastingitemsInput
    connect?: AddCastingWhereUniqueInput
  }

  export type FilingEntryUncheckedCreateNestedOneWithoutCastingItemInput = {
    create?: XOR<FilingEntryCreateWithoutCastingItemInput, FilingEntryUncheckedCreateWithoutCastingItemInput>
    connectOrCreate?: FilingEntryCreateOrConnectWithoutCastingItemInput
    connect?: FilingEntryWhereUniqueInput
  }

  export type SettingEntryUncheckedCreateNestedOneWithoutCastingItemInput = {
    create?: XOR<SettingEntryCreateWithoutCastingItemInput, SettingEntryUncheckedCreateWithoutCastingItemInput>
    connectOrCreate?: SettingEntryCreateOrConnectWithoutCastingItemInput
    connect?: SettingEntryWhereUniqueInput
  }

  export type BuffingEntryUncheckedCreateNestedOneWithoutCastingItemInput = {
    create?: XOR<BuffingEntryCreateWithoutCastingItemInput, BuffingEntryUncheckedCreateWithoutCastingItemInput>
    connectOrCreate?: BuffingEntryCreateOrConnectWithoutCastingItemInput
    connect?: BuffingEntryWhereUniqueInput
  }

  export type StockUncheckedCreateNestedManyWithoutCastingItemInput = {
    create?: XOR<StockCreateWithoutCastingItemInput, StockUncheckedCreateWithoutCastingItemInput> | StockCreateWithoutCastingItemInput[] | StockUncheckedCreateWithoutCastingItemInput[]
    connectOrCreate?: StockCreateOrConnectWithoutCastingItemInput | StockCreateOrConnectWithoutCastingItemInput[]
    createMany?: StockCreateManyCastingItemInputEnvelope
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
  }

  export type EnumCASTINGENTRYTYPEFieldUpdateOperationsInput = {
    set?: $Enums.CASTINGENTRYTYPE
  }

  export type AddItemUpdateOneRequiredWithoutCastingItemsNestedInput = {
    create?: XOR<AddItemCreateWithoutCastingItemsInput, AddItemUncheckedCreateWithoutCastingItemsInput>
    connectOrCreate?: AddItemCreateOrConnectWithoutCastingItemsInput
    upsert?: AddItemUpsertWithoutCastingItemsInput
    connect?: AddItemWhereUniqueInput
    update?: XOR<XOR<AddItemUpdateToOneWithWhereWithoutCastingItemsInput, AddItemUpdateWithoutCastingItemsInput>, AddItemUncheckedUpdateWithoutCastingItemsInput>
  }

  export type CastingEntryUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<CastingEntryCreateWithoutItemsInput, CastingEntryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CastingEntryCreateOrConnectWithoutItemsInput
    upsert?: CastingEntryUpsertWithoutItemsInput
    connect?: CastingEntryWhereUniqueInput
    update?: XOR<XOR<CastingEntryUpdateToOneWithWhereWithoutItemsInput, CastingEntryUpdateWithoutItemsInput>, CastingEntryUncheckedUpdateWithoutItemsInput>
  }

  export type FilingEntryUpdateOneWithoutCastingItemNestedInput = {
    create?: XOR<FilingEntryCreateWithoutCastingItemInput, FilingEntryUncheckedCreateWithoutCastingItemInput>
    connectOrCreate?: FilingEntryCreateOrConnectWithoutCastingItemInput
    upsert?: FilingEntryUpsertWithoutCastingItemInput
    disconnect?: FilingEntryWhereInput | boolean
    delete?: FilingEntryWhereInput | boolean
    connect?: FilingEntryWhereUniqueInput
    update?: XOR<XOR<FilingEntryUpdateToOneWithWhereWithoutCastingItemInput, FilingEntryUpdateWithoutCastingItemInput>, FilingEntryUncheckedUpdateWithoutCastingItemInput>
  }

  export type SettingEntryUpdateOneWithoutCastingItemNestedInput = {
    create?: XOR<SettingEntryCreateWithoutCastingItemInput, SettingEntryUncheckedCreateWithoutCastingItemInput>
    connectOrCreate?: SettingEntryCreateOrConnectWithoutCastingItemInput
    upsert?: SettingEntryUpsertWithoutCastingItemInput
    disconnect?: SettingEntryWhereInput | boolean
    delete?: SettingEntryWhereInput | boolean
    connect?: SettingEntryWhereUniqueInput
    update?: XOR<XOR<SettingEntryUpdateToOneWithWhereWithoutCastingItemInput, SettingEntryUpdateWithoutCastingItemInput>, SettingEntryUncheckedUpdateWithoutCastingItemInput>
  }

  export type BuffingEntryUpdateOneWithoutCastingItemNestedInput = {
    create?: XOR<BuffingEntryCreateWithoutCastingItemInput, BuffingEntryUncheckedCreateWithoutCastingItemInput>
    connectOrCreate?: BuffingEntryCreateOrConnectWithoutCastingItemInput
    upsert?: BuffingEntryUpsertWithoutCastingItemInput
    disconnect?: BuffingEntryWhereInput | boolean
    delete?: BuffingEntryWhereInput | boolean
    connect?: BuffingEntryWhereUniqueInput
    update?: XOR<XOR<BuffingEntryUpdateToOneWithWhereWithoutCastingItemInput, BuffingEntryUpdateWithoutCastingItemInput>, BuffingEntryUncheckedUpdateWithoutCastingItemInput>
  }

  export type StockUpdateManyWithoutCastingItemNestedInput = {
    create?: XOR<StockCreateWithoutCastingItemInput, StockUncheckedCreateWithoutCastingItemInput> | StockCreateWithoutCastingItemInput[] | StockUncheckedCreateWithoutCastingItemInput[]
    connectOrCreate?: StockCreateOrConnectWithoutCastingItemInput | StockCreateOrConnectWithoutCastingItemInput[]
    upsert?: StockUpsertWithWhereUniqueWithoutCastingItemInput | StockUpsertWithWhereUniqueWithoutCastingItemInput[]
    createMany?: StockCreateManyCastingItemInputEnvelope
    set?: StockWhereUniqueInput | StockWhereUniqueInput[]
    disconnect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    delete?: StockWhereUniqueInput | StockWhereUniqueInput[]
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    update?: StockUpdateWithWhereUniqueWithoutCastingItemInput | StockUpdateWithWhereUniqueWithoutCastingItemInput[]
    updateMany?: StockUpdateManyWithWhereWithoutCastingItemInput | StockUpdateManyWithWhereWithoutCastingItemInput[]
    deleteMany?: StockScalarWhereInput | StockScalarWhereInput[]
  }

  export type AddCastingUpdateOneRequiredWithoutCastingitemsNestedInput = {
    create?: XOR<AddCastingCreateWithoutCastingitemsInput, AddCastingUncheckedCreateWithoutCastingitemsInput>
    connectOrCreate?: AddCastingCreateOrConnectWithoutCastingitemsInput
    upsert?: AddCastingUpsertWithoutCastingitemsInput
    connect?: AddCastingWhereUniqueInput
    update?: XOR<XOR<AddCastingUpdateToOneWithWhereWithoutCastingitemsInput, AddCastingUpdateWithoutCastingitemsInput>, AddCastingUncheckedUpdateWithoutCastingitemsInput>
  }

  export type FilingEntryUncheckedUpdateOneWithoutCastingItemNestedInput = {
    create?: XOR<FilingEntryCreateWithoutCastingItemInput, FilingEntryUncheckedCreateWithoutCastingItemInput>
    connectOrCreate?: FilingEntryCreateOrConnectWithoutCastingItemInput
    upsert?: FilingEntryUpsertWithoutCastingItemInput
    disconnect?: FilingEntryWhereInput | boolean
    delete?: FilingEntryWhereInput | boolean
    connect?: FilingEntryWhereUniqueInput
    update?: XOR<XOR<FilingEntryUpdateToOneWithWhereWithoutCastingItemInput, FilingEntryUpdateWithoutCastingItemInput>, FilingEntryUncheckedUpdateWithoutCastingItemInput>
  }

  export type SettingEntryUncheckedUpdateOneWithoutCastingItemNestedInput = {
    create?: XOR<SettingEntryCreateWithoutCastingItemInput, SettingEntryUncheckedCreateWithoutCastingItemInput>
    connectOrCreate?: SettingEntryCreateOrConnectWithoutCastingItemInput
    upsert?: SettingEntryUpsertWithoutCastingItemInput
    disconnect?: SettingEntryWhereInput | boolean
    delete?: SettingEntryWhereInput | boolean
    connect?: SettingEntryWhereUniqueInput
    update?: XOR<XOR<SettingEntryUpdateToOneWithWhereWithoutCastingItemInput, SettingEntryUpdateWithoutCastingItemInput>, SettingEntryUncheckedUpdateWithoutCastingItemInput>
  }

  export type BuffingEntryUncheckedUpdateOneWithoutCastingItemNestedInput = {
    create?: XOR<BuffingEntryCreateWithoutCastingItemInput, BuffingEntryUncheckedCreateWithoutCastingItemInput>
    connectOrCreate?: BuffingEntryCreateOrConnectWithoutCastingItemInput
    upsert?: BuffingEntryUpsertWithoutCastingItemInput
    disconnect?: BuffingEntryWhereInput | boolean
    delete?: BuffingEntryWhereInput | boolean
    connect?: BuffingEntryWhereUniqueInput
    update?: XOR<XOR<BuffingEntryUpdateToOneWithWhereWithoutCastingItemInput, BuffingEntryUpdateWithoutCastingItemInput>, BuffingEntryUncheckedUpdateWithoutCastingItemInput>
  }

  export type StockUncheckedUpdateManyWithoutCastingItemNestedInput = {
    create?: XOR<StockCreateWithoutCastingItemInput, StockUncheckedCreateWithoutCastingItemInput> | StockCreateWithoutCastingItemInput[] | StockUncheckedCreateWithoutCastingItemInput[]
    connectOrCreate?: StockCreateOrConnectWithoutCastingItemInput | StockCreateOrConnectWithoutCastingItemInput[]
    upsert?: StockUpsertWithWhereUniqueWithoutCastingItemInput | StockUpsertWithWhereUniqueWithoutCastingItemInput[]
    createMany?: StockCreateManyCastingItemInputEnvelope
    set?: StockWhereUniqueInput | StockWhereUniqueInput[]
    disconnect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    delete?: StockWhereUniqueInput | StockWhereUniqueInput[]
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    update?: StockUpdateWithWhereUniqueWithoutCastingItemInput | StockUpdateWithWhereUniqueWithoutCastingItemInput[]
    updateMany?: StockUpdateManyWithWhereWithoutCastingItemInput | StockUpdateManyWithWhereWithoutCastingItemInput[]
    deleteMany?: StockScalarWhereInput | StockScalarWhereInput[]
  }

  export type AddFilingCreateNestedOneWithoutFilingsInput = {
    create?: XOR<AddFilingCreateWithoutFilingsInput, AddFilingUncheckedCreateWithoutFilingsInput>
    connectOrCreate?: AddFilingCreateOrConnectWithoutFilingsInput
    connect?: AddFilingWhereUniqueInput
  }

  export type CastingItemsCreateNestedOneWithoutFilingEntryInput = {
    create?: XOR<CastingItemsCreateWithoutFilingEntryInput, CastingItemsUncheckedCreateWithoutFilingEntryInput>
    connectOrCreate?: CastingItemsCreateOrConnectWithoutFilingEntryInput
    connect?: CastingItemsWhereUniqueInput
  }

  export type SettingEntryCreateNestedManyWithoutFilingEntryInput = {
    create?: XOR<SettingEntryCreateWithoutFilingEntryInput, SettingEntryUncheckedCreateWithoutFilingEntryInput> | SettingEntryCreateWithoutFilingEntryInput[] | SettingEntryUncheckedCreateWithoutFilingEntryInput[]
    connectOrCreate?: SettingEntryCreateOrConnectWithoutFilingEntryInput | SettingEntryCreateOrConnectWithoutFilingEntryInput[]
    createMany?: SettingEntryCreateManyFilingEntryInputEnvelope
    connect?: SettingEntryWhereUniqueInput | SettingEntryWhereUniqueInput[]
  }

  export type BuffingEntryCreateNestedManyWithoutFilingEntryInput = {
    create?: XOR<BuffingEntryCreateWithoutFilingEntryInput, BuffingEntryUncheckedCreateWithoutFilingEntryInput> | BuffingEntryCreateWithoutFilingEntryInput[] | BuffingEntryUncheckedCreateWithoutFilingEntryInput[]
    connectOrCreate?: BuffingEntryCreateOrConnectWithoutFilingEntryInput | BuffingEntryCreateOrConnectWithoutFilingEntryInput[]
    createMany?: BuffingEntryCreateManyFilingEntryInputEnvelope
    connect?: BuffingEntryWhereUniqueInput | BuffingEntryWhereUniqueInput[]
  }

  export type SettingEntryUncheckedCreateNestedManyWithoutFilingEntryInput = {
    create?: XOR<SettingEntryCreateWithoutFilingEntryInput, SettingEntryUncheckedCreateWithoutFilingEntryInput> | SettingEntryCreateWithoutFilingEntryInput[] | SettingEntryUncheckedCreateWithoutFilingEntryInput[]
    connectOrCreate?: SettingEntryCreateOrConnectWithoutFilingEntryInput | SettingEntryCreateOrConnectWithoutFilingEntryInput[]
    createMany?: SettingEntryCreateManyFilingEntryInputEnvelope
    connect?: SettingEntryWhereUniqueInput | SettingEntryWhereUniqueInput[]
  }

  export type BuffingEntryUncheckedCreateNestedManyWithoutFilingEntryInput = {
    create?: XOR<BuffingEntryCreateWithoutFilingEntryInput, BuffingEntryUncheckedCreateWithoutFilingEntryInput> | BuffingEntryCreateWithoutFilingEntryInput[] | BuffingEntryUncheckedCreateWithoutFilingEntryInput[]
    connectOrCreate?: BuffingEntryCreateOrConnectWithoutFilingEntryInput | BuffingEntryCreateOrConnectWithoutFilingEntryInput[]
    createMany?: BuffingEntryCreateManyFilingEntryInputEnvelope
    connect?: BuffingEntryWhereUniqueInput | BuffingEntryWhereUniqueInput[]
  }

  export type EnumSTONEOPTIONFieldUpdateOperationsInput = {
    set?: $Enums.STONEOPTION
  }

  export type AddFilingUpdateOneRequiredWithoutFilingsNestedInput = {
    create?: XOR<AddFilingCreateWithoutFilingsInput, AddFilingUncheckedCreateWithoutFilingsInput>
    connectOrCreate?: AddFilingCreateOrConnectWithoutFilingsInput
    upsert?: AddFilingUpsertWithoutFilingsInput
    connect?: AddFilingWhereUniqueInput
    update?: XOR<XOR<AddFilingUpdateToOneWithWhereWithoutFilingsInput, AddFilingUpdateWithoutFilingsInput>, AddFilingUncheckedUpdateWithoutFilingsInput>
  }

  export type CastingItemsUpdateOneRequiredWithoutFilingEntryNestedInput = {
    create?: XOR<CastingItemsCreateWithoutFilingEntryInput, CastingItemsUncheckedCreateWithoutFilingEntryInput>
    connectOrCreate?: CastingItemsCreateOrConnectWithoutFilingEntryInput
    upsert?: CastingItemsUpsertWithoutFilingEntryInput
    connect?: CastingItemsWhereUniqueInput
    update?: XOR<XOR<CastingItemsUpdateToOneWithWhereWithoutFilingEntryInput, CastingItemsUpdateWithoutFilingEntryInput>, CastingItemsUncheckedUpdateWithoutFilingEntryInput>
  }

  export type SettingEntryUpdateManyWithoutFilingEntryNestedInput = {
    create?: XOR<SettingEntryCreateWithoutFilingEntryInput, SettingEntryUncheckedCreateWithoutFilingEntryInput> | SettingEntryCreateWithoutFilingEntryInput[] | SettingEntryUncheckedCreateWithoutFilingEntryInput[]
    connectOrCreate?: SettingEntryCreateOrConnectWithoutFilingEntryInput | SettingEntryCreateOrConnectWithoutFilingEntryInput[]
    upsert?: SettingEntryUpsertWithWhereUniqueWithoutFilingEntryInput | SettingEntryUpsertWithWhereUniqueWithoutFilingEntryInput[]
    createMany?: SettingEntryCreateManyFilingEntryInputEnvelope
    set?: SettingEntryWhereUniqueInput | SettingEntryWhereUniqueInput[]
    disconnect?: SettingEntryWhereUniqueInput | SettingEntryWhereUniqueInput[]
    delete?: SettingEntryWhereUniqueInput | SettingEntryWhereUniqueInput[]
    connect?: SettingEntryWhereUniqueInput | SettingEntryWhereUniqueInput[]
    update?: SettingEntryUpdateWithWhereUniqueWithoutFilingEntryInput | SettingEntryUpdateWithWhereUniqueWithoutFilingEntryInput[]
    updateMany?: SettingEntryUpdateManyWithWhereWithoutFilingEntryInput | SettingEntryUpdateManyWithWhereWithoutFilingEntryInput[]
    deleteMany?: SettingEntryScalarWhereInput | SettingEntryScalarWhereInput[]
  }

  export type BuffingEntryUpdateManyWithoutFilingEntryNestedInput = {
    create?: XOR<BuffingEntryCreateWithoutFilingEntryInput, BuffingEntryUncheckedCreateWithoutFilingEntryInput> | BuffingEntryCreateWithoutFilingEntryInput[] | BuffingEntryUncheckedCreateWithoutFilingEntryInput[]
    connectOrCreate?: BuffingEntryCreateOrConnectWithoutFilingEntryInput | BuffingEntryCreateOrConnectWithoutFilingEntryInput[]
    upsert?: BuffingEntryUpsertWithWhereUniqueWithoutFilingEntryInput | BuffingEntryUpsertWithWhereUniqueWithoutFilingEntryInput[]
    createMany?: BuffingEntryCreateManyFilingEntryInputEnvelope
    set?: BuffingEntryWhereUniqueInput | BuffingEntryWhereUniqueInput[]
    disconnect?: BuffingEntryWhereUniqueInput | BuffingEntryWhereUniqueInput[]
    delete?: BuffingEntryWhereUniqueInput | BuffingEntryWhereUniqueInput[]
    connect?: BuffingEntryWhereUniqueInput | BuffingEntryWhereUniqueInput[]
    update?: BuffingEntryUpdateWithWhereUniqueWithoutFilingEntryInput | BuffingEntryUpdateWithWhereUniqueWithoutFilingEntryInput[]
    updateMany?: BuffingEntryUpdateManyWithWhereWithoutFilingEntryInput | BuffingEntryUpdateManyWithWhereWithoutFilingEntryInput[]
    deleteMany?: BuffingEntryScalarWhereInput | BuffingEntryScalarWhereInput[]
  }

  export type SettingEntryUncheckedUpdateManyWithoutFilingEntryNestedInput = {
    create?: XOR<SettingEntryCreateWithoutFilingEntryInput, SettingEntryUncheckedCreateWithoutFilingEntryInput> | SettingEntryCreateWithoutFilingEntryInput[] | SettingEntryUncheckedCreateWithoutFilingEntryInput[]
    connectOrCreate?: SettingEntryCreateOrConnectWithoutFilingEntryInput | SettingEntryCreateOrConnectWithoutFilingEntryInput[]
    upsert?: SettingEntryUpsertWithWhereUniqueWithoutFilingEntryInput | SettingEntryUpsertWithWhereUniqueWithoutFilingEntryInput[]
    createMany?: SettingEntryCreateManyFilingEntryInputEnvelope
    set?: SettingEntryWhereUniqueInput | SettingEntryWhereUniqueInput[]
    disconnect?: SettingEntryWhereUniqueInput | SettingEntryWhereUniqueInput[]
    delete?: SettingEntryWhereUniqueInput | SettingEntryWhereUniqueInput[]
    connect?: SettingEntryWhereUniqueInput | SettingEntryWhereUniqueInput[]
    update?: SettingEntryUpdateWithWhereUniqueWithoutFilingEntryInput | SettingEntryUpdateWithWhereUniqueWithoutFilingEntryInput[]
    updateMany?: SettingEntryUpdateManyWithWhereWithoutFilingEntryInput | SettingEntryUpdateManyWithWhereWithoutFilingEntryInput[]
    deleteMany?: SettingEntryScalarWhereInput | SettingEntryScalarWhereInput[]
  }

  export type BuffingEntryUncheckedUpdateManyWithoutFilingEntryNestedInput = {
    create?: XOR<BuffingEntryCreateWithoutFilingEntryInput, BuffingEntryUncheckedCreateWithoutFilingEntryInput> | BuffingEntryCreateWithoutFilingEntryInput[] | BuffingEntryUncheckedCreateWithoutFilingEntryInput[]
    connectOrCreate?: BuffingEntryCreateOrConnectWithoutFilingEntryInput | BuffingEntryCreateOrConnectWithoutFilingEntryInput[]
    upsert?: BuffingEntryUpsertWithWhereUniqueWithoutFilingEntryInput | BuffingEntryUpsertWithWhereUniqueWithoutFilingEntryInput[]
    createMany?: BuffingEntryCreateManyFilingEntryInputEnvelope
    set?: BuffingEntryWhereUniqueInput | BuffingEntryWhereUniqueInput[]
    disconnect?: BuffingEntryWhereUniqueInput | BuffingEntryWhereUniqueInput[]
    delete?: BuffingEntryWhereUniqueInput | BuffingEntryWhereUniqueInput[]
    connect?: BuffingEntryWhereUniqueInput | BuffingEntryWhereUniqueInput[]
    update?: BuffingEntryUpdateWithWhereUniqueWithoutFilingEntryInput | BuffingEntryUpdateWithWhereUniqueWithoutFilingEntryInput[]
    updateMany?: BuffingEntryUpdateManyWithWhereWithoutFilingEntryInput | BuffingEntryUpdateManyWithWhereWithoutFilingEntryInput[]
    deleteMany?: BuffingEntryScalarWhereInput | BuffingEntryScalarWhereInput[]
  }

  export type AddSettingCreateNestedOneWithoutSettingsInput = {
    create?: XOR<AddSettingCreateWithoutSettingsInput, AddSettingUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: AddSettingCreateOrConnectWithoutSettingsInput
    connect?: AddSettingWhereUniqueInput
  }

  export type CastingItemsCreateNestedOneWithoutSettingEntryInput = {
    create?: XOR<CastingItemsCreateWithoutSettingEntryInput, CastingItemsUncheckedCreateWithoutSettingEntryInput>
    connectOrCreate?: CastingItemsCreateOrConnectWithoutSettingEntryInput
    connect?: CastingItemsWhereUniqueInput
  }

  export type FilingEntryCreateNestedOneWithoutSettingEntryInput = {
    create?: XOR<FilingEntryCreateWithoutSettingEntryInput, FilingEntryUncheckedCreateWithoutSettingEntryInput>
    connectOrCreate?: FilingEntryCreateOrConnectWithoutSettingEntryInput
    connect?: FilingEntryWhereUniqueInput
  }

  export type BuffingEntryCreateNestedManyWithoutSettingEntryInput = {
    create?: XOR<BuffingEntryCreateWithoutSettingEntryInput, BuffingEntryUncheckedCreateWithoutSettingEntryInput> | BuffingEntryCreateWithoutSettingEntryInput[] | BuffingEntryUncheckedCreateWithoutSettingEntryInput[]
    connectOrCreate?: BuffingEntryCreateOrConnectWithoutSettingEntryInput | BuffingEntryCreateOrConnectWithoutSettingEntryInput[]
    createMany?: BuffingEntryCreateManySettingEntryInputEnvelope
    connect?: BuffingEntryWhereUniqueInput | BuffingEntryWhereUniqueInput[]
  }

  export type BuffingEntryUncheckedCreateNestedManyWithoutSettingEntryInput = {
    create?: XOR<BuffingEntryCreateWithoutSettingEntryInput, BuffingEntryUncheckedCreateWithoutSettingEntryInput> | BuffingEntryCreateWithoutSettingEntryInput[] | BuffingEntryUncheckedCreateWithoutSettingEntryInput[]
    connectOrCreate?: BuffingEntryCreateOrConnectWithoutSettingEntryInput | BuffingEntryCreateOrConnectWithoutSettingEntryInput[]
    createMany?: BuffingEntryCreateManySettingEntryInputEnvelope
    connect?: BuffingEntryWhereUniqueInput | BuffingEntryWhereUniqueInput[]
  }

  export type AddSettingUpdateOneRequiredWithoutSettingsNestedInput = {
    create?: XOR<AddSettingCreateWithoutSettingsInput, AddSettingUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: AddSettingCreateOrConnectWithoutSettingsInput
    upsert?: AddSettingUpsertWithoutSettingsInput
    connect?: AddSettingWhereUniqueInput
    update?: XOR<XOR<AddSettingUpdateToOneWithWhereWithoutSettingsInput, AddSettingUpdateWithoutSettingsInput>, AddSettingUncheckedUpdateWithoutSettingsInput>
  }

  export type CastingItemsUpdateOneRequiredWithoutSettingEntryNestedInput = {
    create?: XOR<CastingItemsCreateWithoutSettingEntryInput, CastingItemsUncheckedCreateWithoutSettingEntryInput>
    connectOrCreate?: CastingItemsCreateOrConnectWithoutSettingEntryInput
    upsert?: CastingItemsUpsertWithoutSettingEntryInput
    connect?: CastingItemsWhereUniqueInput
    update?: XOR<XOR<CastingItemsUpdateToOneWithWhereWithoutSettingEntryInput, CastingItemsUpdateWithoutSettingEntryInput>, CastingItemsUncheckedUpdateWithoutSettingEntryInput>
  }

  export type FilingEntryUpdateOneRequiredWithoutSettingEntryNestedInput = {
    create?: XOR<FilingEntryCreateWithoutSettingEntryInput, FilingEntryUncheckedCreateWithoutSettingEntryInput>
    connectOrCreate?: FilingEntryCreateOrConnectWithoutSettingEntryInput
    upsert?: FilingEntryUpsertWithoutSettingEntryInput
    connect?: FilingEntryWhereUniqueInput
    update?: XOR<XOR<FilingEntryUpdateToOneWithWhereWithoutSettingEntryInput, FilingEntryUpdateWithoutSettingEntryInput>, FilingEntryUncheckedUpdateWithoutSettingEntryInput>
  }

  export type BuffingEntryUpdateManyWithoutSettingEntryNestedInput = {
    create?: XOR<BuffingEntryCreateWithoutSettingEntryInput, BuffingEntryUncheckedCreateWithoutSettingEntryInput> | BuffingEntryCreateWithoutSettingEntryInput[] | BuffingEntryUncheckedCreateWithoutSettingEntryInput[]
    connectOrCreate?: BuffingEntryCreateOrConnectWithoutSettingEntryInput | BuffingEntryCreateOrConnectWithoutSettingEntryInput[]
    upsert?: BuffingEntryUpsertWithWhereUniqueWithoutSettingEntryInput | BuffingEntryUpsertWithWhereUniqueWithoutSettingEntryInput[]
    createMany?: BuffingEntryCreateManySettingEntryInputEnvelope
    set?: BuffingEntryWhereUniqueInput | BuffingEntryWhereUniqueInput[]
    disconnect?: BuffingEntryWhereUniqueInput | BuffingEntryWhereUniqueInput[]
    delete?: BuffingEntryWhereUniqueInput | BuffingEntryWhereUniqueInput[]
    connect?: BuffingEntryWhereUniqueInput | BuffingEntryWhereUniqueInput[]
    update?: BuffingEntryUpdateWithWhereUniqueWithoutSettingEntryInput | BuffingEntryUpdateWithWhereUniqueWithoutSettingEntryInput[]
    updateMany?: BuffingEntryUpdateManyWithWhereWithoutSettingEntryInput | BuffingEntryUpdateManyWithWhereWithoutSettingEntryInput[]
    deleteMany?: BuffingEntryScalarWhereInput | BuffingEntryScalarWhereInput[]
  }

  export type BuffingEntryUncheckedUpdateManyWithoutSettingEntryNestedInput = {
    create?: XOR<BuffingEntryCreateWithoutSettingEntryInput, BuffingEntryUncheckedCreateWithoutSettingEntryInput> | BuffingEntryCreateWithoutSettingEntryInput[] | BuffingEntryUncheckedCreateWithoutSettingEntryInput[]
    connectOrCreate?: BuffingEntryCreateOrConnectWithoutSettingEntryInput | BuffingEntryCreateOrConnectWithoutSettingEntryInput[]
    upsert?: BuffingEntryUpsertWithWhereUniqueWithoutSettingEntryInput | BuffingEntryUpsertWithWhereUniqueWithoutSettingEntryInput[]
    createMany?: BuffingEntryCreateManySettingEntryInputEnvelope
    set?: BuffingEntryWhereUniqueInput | BuffingEntryWhereUniqueInput[]
    disconnect?: BuffingEntryWhereUniqueInput | BuffingEntryWhereUniqueInput[]
    delete?: BuffingEntryWhereUniqueInput | BuffingEntryWhereUniqueInput[]
    connect?: BuffingEntryWhereUniqueInput | BuffingEntryWhereUniqueInput[]
    update?: BuffingEntryUpdateWithWhereUniqueWithoutSettingEntryInput | BuffingEntryUpdateWithWhereUniqueWithoutSettingEntryInput[]
    updateMany?: BuffingEntryUpdateManyWithWhereWithoutSettingEntryInput | BuffingEntryUpdateManyWithWhereWithoutSettingEntryInput[]
    deleteMany?: BuffingEntryScalarWhereInput | BuffingEntryScalarWhereInput[]
  }

  export type AddBuffingCreateNestedOneWithoutBuffingsInput = {
    create?: XOR<AddBuffingCreateWithoutBuffingsInput, AddBuffingUncheckedCreateWithoutBuffingsInput>
    connectOrCreate?: AddBuffingCreateOrConnectWithoutBuffingsInput
    connect?: AddBuffingWhereUniqueInput
  }

  export type CastingItemsCreateNestedOneWithoutBuffingEntryInput = {
    create?: XOR<CastingItemsCreateWithoutBuffingEntryInput, CastingItemsUncheckedCreateWithoutBuffingEntryInput>
    connectOrCreate?: CastingItemsCreateOrConnectWithoutBuffingEntryInput
    connect?: CastingItemsWhereUniqueInput
  }

  export type SettingEntryCreateNestedOneWithoutBuffingEntriesInput = {
    create?: XOR<SettingEntryCreateWithoutBuffingEntriesInput, SettingEntryUncheckedCreateWithoutBuffingEntriesInput>
    connectOrCreate?: SettingEntryCreateOrConnectWithoutBuffingEntriesInput
    connect?: SettingEntryWhereUniqueInput
  }

  export type FilingEntryCreateNestedOneWithoutBuffingEntriesInput = {
    create?: XOR<FilingEntryCreateWithoutBuffingEntriesInput, FilingEntryUncheckedCreateWithoutBuffingEntriesInput>
    connectOrCreate?: FilingEntryCreateOrConnectWithoutBuffingEntriesInput
    connect?: FilingEntryWhereUniqueInput
  }

  export type AddBuffingUpdateOneRequiredWithoutBuffingsNestedInput = {
    create?: XOR<AddBuffingCreateWithoutBuffingsInput, AddBuffingUncheckedCreateWithoutBuffingsInput>
    connectOrCreate?: AddBuffingCreateOrConnectWithoutBuffingsInput
    upsert?: AddBuffingUpsertWithoutBuffingsInput
    connect?: AddBuffingWhereUniqueInput
    update?: XOR<XOR<AddBuffingUpdateToOneWithWhereWithoutBuffingsInput, AddBuffingUpdateWithoutBuffingsInput>, AddBuffingUncheckedUpdateWithoutBuffingsInput>
  }

  export type CastingItemsUpdateOneRequiredWithoutBuffingEntryNestedInput = {
    create?: XOR<CastingItemsCreateWithoutBuffingEntryInput, CastingItemsUncheckedCreateWithoutBuffingEntryInput>
    connectOrCreate?: CastingItemsCreateOrConnectWithoutBuffingEntryInput
    upsert?: CastingItemsUpsertWithoutBuffingEntryInput
    connect?: CastingItemsWhereUniqueInput
    update?: XOR<XOR<CastingItemsUpdateToOneWithWhereWithoutBuffingEntryInput, CastingItemsUpdateWithoutBuffingEntryInput>, CastingItemsUncheckedUpdateWithoutBuffingEntryInput>
  }

  export type SettingEntryUpdateOneRequiredWithoutBuffingEntriesNestedInput = {
    create?: XOR<SettingEntryCreateWithoutBuffingEntriesInput, SettingEntryUncheckedCreateWithoutBuffingEntriesInput>
    connectOrCreate?: SettingEntryCreateOrConnectWithoutBuffingEntriesInput
    upsert?: SettingEntryUpsertWithoutBuffingEntriesInput
    connect?: SettingEntryWhereUniqueInput
    update?: XOR<XOR<SettingEntryUpdateToOneWithWhereWithoutBuffingEntriesInput, SettingEntryUpdateWithoutBuffingEntriesInput>, SettingEntryUncheckedUpdateWithoutBuffingEntriesInput>
  }

  export type FilingEntryUpdateOneRequiredWithoutBuffingEntriesNestedInput = {
    create?: XOR<FilingEntryCreateWithoutBuffingEntriesInput, FilingEntryUncheckedCreateWithoutBuffingEntriesInput>
    connectOrCreate?: FilingEntryCreateOrConnectWithoutBuffingEntriesInput
    upsert?: FilingEntryUpsertWithoutBuffingEntriesInput
    connect?: FilingEntryWhereUniqueInput
    update?: XOR<XOR<FilingEntryUpdateToOneWithWhereWithoutBuffingEntriesInput, FilingEntryUpdateWithoutBuffingEntriesInput>, FilingEntryUncheckedUpdateWithoutBuffingEntriesInput>
  }

  export type CastingItemsCreateNestedOneWithoutStockInput = {
    create?: XOR<CastingItemsCreateWithoutStockInput, CastingItemsUncheckedCreateWithoutStockInput>
    connectOrCreate?: CastingItemsCreateOrConnectWithoutStockInput
    connect?: CastingItemsWhereUniqueInput
  }

  export type AddItemCreateNestedOneWithoutStockInput = {
    create?: XOR<AddItemCreateWithoutStockInput, AddItemUncheckedCreateWithoutStockInput>
    connectOrCreate?: AddItemCreateOrConnectWithoutStockInput
    connect?: AddItemWhereUniqueInput
  }

  export type AddCastingCreateNestedOneWithoutStockInput = {
    create?: XOR<AddCastingCreateWithoutStockInput, AddCastingUncheckedCreateWithoutStockInput>
    connectOrCreate?: AddCastingCreateOrConnectWithoutStockInput
    connect?: AddCastingWhereUniqueInput
  }

  export type CastingItemsUpdateOneRequiredWithoutStockNestedInput = {
    create?: XOR<CastingItemsCreateWithoutStockInput, CastingItemsUncheckedCreateWithoutStockInput>
    connectOrCreate?: CastingItemsCreateOrConnectWithoutStockInput
    upsert?: CastingItemsUpsertWithoutStockInput
    connect?: CastingItemsWhereUniqueInput
    update?: XOR<XOR<CastingItemsUpdateToOneWithWhereWithoutStockInput, CastingItemsUpdateWithoutStockInput>, CastingItemsUncheckedUpdateWithoutStockInput>
  }

  export type AddItemUpdateOneRequiredWithoutStockNestedInput = {
    create?: XOR<AddItemCreateWithoutStockInput, AddItemUncheckedCreateWithoutStockInput>
    connectOrCreate?: AddItemCreateOrConnectWithoutStockInput
    upsert?: AddItemUpsertWithoutStockInput
    connect?: AddItemWhereUniqueInput
    update?: XOR<XOR<AddItemUpdateToOneWithWhereWithoutStockInput, AddItemUpdateWithoutStockInput>, AddItemUncheckedUpdateWithoutStockInput>
  }

  export type AddCastingUpdateOneRequiredWithoutStockNestedInput = {
    create?: XOR<AddCastingCreateWithoutStockInput, AddCastingUncheckedCreateWithoutStockInput>
    connectOrCreate?: AddCastingCreateOrConnectWithoutStockInput
    upsert?: AddCastingUpsertWithoutStockInput
    connect?: AddCastingWhereUniqueInput
    update?: XOR<XOR<AddCastingUpdateToOneWithWhereWithoutStockInput, AddCastingUpdateWithoutStockInput>, AddCastingUncheckedUpdateWithoutStockInput>
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

  export type NestedEnumITEMTYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.ITEMTYPE | EnumITEMTYPEFieldRefInput<$PrismaModel>
    in?: $Enums.ITEMTYPE[]
    notIn?: $Enums.ITEMTYPE[]
    not?: NestedEnumITEMTYPEFilter<$PrismaModel> | $Enums.ITEMTYPE
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumITEMTYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ITEMTYPE | EnumITEMTYPEFieldRefInput<$PrismaModel>
    in?: $Enums.ITEMTYPE[]
    notIn?: $Enums.ITEMTYPE[]
    not?: NestedEnumITEMTYPEWithAggregatesFilter<$PrismaModel> | $Enums.ITEMTYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumITEMTYPEFilter<$PrismaModel>
    _max?: NestedEnumITEMTYPEFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type NestedEnumCASTINGENTRYTYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.CASTINGENTRYTYPE | EnumCASTINGENTRYTYPEFieldRefInput<$PrismaModel>
    in?: $Enums.CASTINGENTRYTYPE[]
    notIn?: $Enums.CASTINGENTRYTYPE[]
    not?: NestedEnumCASTINGENTRYTYPEFilter<$PrismaModel> | $Enums.CASTINGENTRYTYPE
  }

  export type NestedEnumCASTINGENTRYTYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CASTINGENTRYTYPE | EnumCASTINGENTRYTYPEFieldRefInput<$PrismaModel>
    in?: $Enums.CASTINGENTRYTYPE[]
    notIn?: $Enums.CASTINGENTRYTYPE[]
    not?: NestedEnumCASTINGENTRYTYPEWithAggregatesFilter<$PrismaModel> | $Enums.CASTINGENTRYTYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCASTINGENTRYTYPEFilter<$PrismaModel>
    _max?: NestedEnumCASTINGENTRYTYPEFilter<$PrismaModel>
  }

  export type NestedEnumSTONEOPTIONFilter<$PrismaModel = never> = {
    equals?: $Enums.STONEOPTION | EnumSTONEOPTIONFieldRefInput<$PrismaModel>
    in?: $Enums.STONEOPTION[]
    notIn?: $Enums.STONEOPTION[]
    not?: NestedEnumSTONEOPTIONFilter<$PrismaModel> | $Enums.STONEOPTION
  }

  export type NestedEnumSTONEOPTIONWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.STONEOPTION | EnumSTONEOPTIONFieldRefInput<$PrismaModel>
    in?: $Enums.STONEOPTION[]
    notIn?: $Enums.STONEOPTION[]
    not?: NestedEnumSTONEOPTIONWithAggregatesFilter<$PrismaModel> | $Enums.STONEOPTION
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSTONEOPTIONFilter<$PrismaModel>
    _max?: NestedEnumSTONEOPTIONFilter<$PrismaModel>
  }

  export type CustomerTransactionCreateWithoutCustomerInput = {
    createdAt?: Date | string
    date: Date | string
    value: number
    type: string
    touch?: number | null
    purity?: number | null
    goldRate?: number | null
  }

  export type CustomerTransactionUncheckedCreateWithoutCustomerInput = {
    id?: number
    createdAt?: Date | string
    date: Date | string
    value: number
    type: string
    touch?: number | null
    purity?: number | null
    goldRate?: number | null
  }

  export type CustomerTransactionCreateOrConnectWithoutCustomerInput = {
    where: CustomerTransactionWhereUniqueInput
    create: XOR<CustomerTransactionCreateWithoutCustomerInput, CustomerTransactionUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerTransactionCreateManyCustomerInputEnvelope = {
    data: CustomerTransactionCreateManyCustomerInput | CustomerTransactionCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type CustomerTransactionUpsertWithWhereUniqueWithoutCustomerInput = {
    where: CustomerTransactionWhereUniqueInput
    update: XOR<CustomerTransactionUpdateWithoutCustomerInput, CustomerTransactionUncheckedUpdateWithoutCustomerInput>
    create: XOR<CustomerTransactionCreateWithoutCustomerInput, CustomerTransactionUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerTransactionUpdateWithWhereUniqueWithoutCustomerInput = {
    where: CustomerTransactionWhereUniqueInput
    data: XOR<CustomerTransactionUpdateWithoutCustomerInput, CustomerTransactionUncheckedUpdateWithoutCustomerInput>
  }

  export type CustomerTransactionUpdateManyWithWhereWithoutCustomerInput = {
    where: CustomerTransactionScalarWhereInput
    data: XOR<CustomerTransactionUpdateManyMutationInput, CustomerTransactionUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerTransactionScalarWhereInput = {
    AND?: CustomerTransactionScalarWhereInput | CustomerTransactionScalarWhereInput[]
    OR?: CustomerTransactionScalarWhereInput[]
    NOT?: CustomerTransactionScalarWhereInput | CustomerTransactionScalarWhereInput[]
    id?: IntFilter<"CustomerTransaction"> | number
    createdAt?: DateTimeFilter<"CustomerTransaction"> | Date | string
    date?: DateTimeFilter<"CustomerTransaction"> | Date | string
    value?: FloatFilter<"CustomerTransaction"> | number
    type?: StringFilter<"CustomerTransaction"> | string
    touch?: FloatNullableFilter<"CustomerTransaction"> | number | null
    purity?: FloatNullableFilter<"CustomerTransaction"> | number | null
    goldRate?: FloatNullableFilter<"CustomerTransaction"> | number | null
    customerId?: IntFilter<"CustomerTransaction"> | number
  }

  export type CastingEntryCreateWithoutCasting_customerInput = {
    createdAt?: Date | string
    date: Date | string
    given_gold: number
    given_touch: number
    purity: number
    final_touch: number
    pure_value: number
    copper: number
    final_weight: number
    items?: CastingItemsCreateNestedManyWithoutCastingEntryInput
  }

  export type CastingEntryUncheckedCreateWithoutCasting_customerInput = {
    id?: number
    createdAt?: Date | string
    date: Date | string
    given_gold: number
    given_touch: number
    purity: number
    final_touch: number
    pure_value: number
    copper: number
    final_weight: number
    items?: CastingItemsUncheckedCreateNestedManyWithoutCastingEntryInput
  }

  export type CastingEntryCreateOrConnectWithoutCasting_customerInput = {
    where: CastingEntryWhereUniqueInput
    create: XOR<CastingEntryCreateWithoutCasting_customerInput, CastingEntryUncheckedCreateWithoutCasting_customerInput>
  }

  export type CastingEntryCreateManyCasting_customerInputEnvelope = {
    data: CastingEntryCreateManyCasting_customerInput | CastingEntryCreateManyCasting_customerInput[]
    skipDuplicates?: boolean
  }

  export type CastingItemsCreateWithoutCasting_customerInput = {
    createdAt?: Date | string
    type: $Enums.CASTINGENTRYTYPE
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    scrap_weight?: number | null
    scrap_wastage?: number | null
    item: AddItemCreateNestedOneWithoutCastingItemsInput
    castingEntry: CastingEntryCreateNestedOneWithoutItemsInput
    filingEntry?: FilingEntryCreateNestedOneWithoutCastingItemInput
    settingEntry?: SettingEntryCreateNestedOneWithoutCastingItemInput
    buffingEntry?: BuffingEntryCreateNestedOneWithoutCastingItemInput
    stock?: StockCreateNestedManyWithoutCastingItemInput
  }

  export type CastingItemsUncheckedCreateWithoutCasting_customerInput = {
    id?: number
    createdAt?: Date | string
    type: $Enums.CASTINGENTRYTYPE
    item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    scrap_weight?: number | null
    scrap_wastage?: number | null
    casting_entry_id: number
    filingEntry?: FilingEntryUncheckedCreateNestedOneWithoutCastingItemInput
    settingEntry?: SettingEntryUncheckedCreateNestedOneWithoutCastingItemInput
    buffingEntry?: BuffingEntryUncheckedCreateNestedOneWithoutCastingItemInput
    stock?: StockUncheckedCreateNestedManyWithoutCastingItemInput
  }

  export type CastingItemsCreateOrConnectWithoutCasting_customerInput = {
    where: CastingItemsWhereUniqueInput
    create: XOR<CastingItemsCreateWithoutCasting_customerInput, CastingItemsUncheckedCreateWithoutCasting_customerInput>
  }

  export type CastingItemsCreateManyCasting_customerInputEnvelope = {
    data: CastingItemsCreateManyCasting_customerInput | CastingItemsCreateManyCasting_customerInput[]
    skipDuplicates?: boolean
  }

  export type StockCreateWithoutCasting_customerInput = {
    createdAt?: Date | string
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    scrap_weight?: number | null
    scrap_wastage?: number | null
    castingItem: CastingItemsCreateNestedOneWithoutStockInput
    item: AddItemCreateNestedOneWithoutStockInput
  }

  export type StockUncheckedCreateWithoutCasting_customerInput = {
    id?: number
    createdAt?: Date | string
    casting_item_id: number
    item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    scrap_weight?: number | null
    scrap_wastage?: number | null
  }

  export type StockCreateOrConnectWithoutCasting_customerInput = {
    where: StockWhereUniqueInput
    create: XOR<StockCreateWithoutCasting_customerInput, StockUncheckedCreateWithoutCasting_customerInput>
  }

  export type StockCreateManyCasting_customerInputEnvelope = {
    data: StockCreateManyCasting_customerInput | StockCreateManyCasting_customerInput[]
    skipDuplicates?: boolean
  }

  export type CastingEntryUpsertWithWhereUniqueWithoutCasting_customerInput = {
    where: CastingEntryWhereUniqueInput
    update: XOR<CastingEntryUpdateWithoutCasting_customerInput, CastingEntryUncheckedUpdateWithoutCasting_customerInput>
    create: XOR<CastingEntryCreateWithoutCasting_customerInput, CastingEntryUncheckedCreateWithoutCasting_customerInput>
  }

  export type CastingEntryUpdateWithWhereUniqueWithoutCasting_customerInput = {
    where: CastingEntryWhereUniqueInput
    data: XOR<CastingEntryUpdateWithoutCasting_customerInput, CastingEntryUncheckedUpdateWithoutCasting_customerInput>
  }

  export type CastingEntryUpdateManyWithWhereWithoutCasting_customerInput = {
    where: CastingEntryScalarWhereInput
    data: XOR<CastingEntryUpdateManyMutationInput, CastingEntryUncheckedUpdateManyWithoutCasting_customerInput>
  }

  export type CastingEntryScalarWhereInput = {
    AND?: CastingEntryScalarWhereInput | CastingEntryScalarWhereInput[]
    OR?: CastingEntryScalarWhereInput[]
    NOT?: CastingEntryScalarWhereInput | CastingEntryScalarWhereInput[]
    id?: IntFilter<"CastingEntry"> | number
    createdAt?: DateTimeFilter<"CastingEntry"> | Date | string
    date?: DateTimeFilter<"CastingEntry"> | Date | string
    given_gold?: FloatFilter<"CastingEntry"> | number
    given_touch?: FloatFilter<"CastingEntry"> | number
    purity?: FloatFilter<"CastingEntry"> | number
    final_touch?: FloatFilter<"CastingEntry"> | number
    pure_value?: FloatFilter<"CastingEntry"> | number
    copper?: FloatFilter<"CastingEntry"> | number
    final_weight?: FloatFilter<"CastingEntry"> | number
    casting_customer_id?: IntFilter<"CastingEntry"> | number
  }

  export type CastingItemsUpsertWithWhereUniqueWithoutCasting_customerInput = {
    where: CastingItemsWhereUniqueInput
    update: XOR<CastingItemsUpdateWithoutCasting_customerInput, CastingItemsUncheckedUpdateWithoutCasting_customerInput>
    create: XOR<CastingItemsCreateWithoutCasting_customerInput, CastingItemsUncheckedCreateWithoutCasting_customerInput>
  }

  export type CastingItemsUpdateWithWhereUniqueWithoutCasting_customerInput = {
    where: CastingItemsWhereUniqueInput
    data: XOR<CastingItemsUpdateWithoutCasting_customerInput, CastingItemsUncheckedUpdateWithoutCasting_customerInput>
  }

  export type CastingItemsUpdateManyWithWhereWithoutCasting_customerInput = {
    where: CastingItemsScalarWhereInput
    data: XOR<CastingItemsUpdateManyMutationInput, CastingItemsUncheckedUpdateManyWithoutCasting_customerInput>
  }

  export type CastingItemsScalarWhereInput = {
    AND?: CastingItemsScalarWhereInput | CastingItemsScalarWhereInput[]
    OR?: CastingItemsScalarWhereInput[]
    NOT?: CastingItemsScalarWhereInput | CastingItemsScalarWhereInput[]
    id?: IntFilter<"CastingItems"> | number
    createdAt?: DateTimeFilter<"CastingItems"> | Date | string
    type?: EnumCASTINGENTRYTYPEFilter<"CastingItems"> | $Enums.CASTINGENTRYTYPE
    item_id?: IntFilter<"CastingItems"> | number
    weight?: FloatFilter<"CastingItems"> | number
    touch?: FloatFilter<"CastingItems"> | number
    item_purity?: FloatFilter<"CastingItems"> | number
    remarks?: StringNullableFilter<"CastingItems"> | string | null
    after_weight?: FloatNullableFilter<"CastingItems"> | number | null
    scrap_weight?: FloatNullableFilter<"CastingItems"> | number | null
    scrap_wastage?: FloatNullableFilter<"CastingItems"> | number | null
    casting_entry_id?: IntFilter<"CastingItems"> | number
    casting_customer_id?: IntFilter<"CastingItems"> | number
  }

  export type StockUpsertWithWhereUniqueWithoutCasting_customerInput = {
    where: StockWhereUniqueInput
    update: XOR<StockUpdateWithoutCasting_customerInput, StockUncheckedUpdateWithoutCasting_customerInput>
    create: XOR<StockCreateWithoutCasting_customerInput, StockUncheckedCreateWithoutCasting_customerInput>
  }

  export type StockUpdateWithWhereUniqueWithoutCasting_customerInput = {
    where: StockWhereUniqueInput
    data: XOR<StockUpdateWithoutCasting_customerInput, StockUncheckedUpdateWithoutCasting_customerInput>
  }

  export type StockUpdateManyWithWhereWithoutCasting_customerInput = {
    where: StockScalarWhereInput
    data: XOR<StockUpdateManyMutationInput, StockUncheckedUpdateManyWithoutCasting_customerInput>
  }

  export type StockScalarWhereInput = {
    AND?: StockScalarWhereInput | StockScalarWhereInput[]
    OR?: StockScalarWhereInput[]
    NOT?: StockScalarWhereInput | StockScalarWhereInput[]
    id?: IntFilter<"Stock"> | number
    createdAt?: DateTimeFilter<"Stock"> | Date | string
    casting_item_id?: IntFilter<"Stock"> | number
    item_id?: IntFilter<"Stock"> | number
    weight?: FloatFilter<"Stock"> | number
    touch?: FloatFilter<"Stock"> | number
    item_purity?: FloatFilter<"Stock"> | number
    remarks?: StringNullableFilter<"Stock"> | string | null
    scrap_weight?: FloatNullableFilter<"Stock"> | number | null
    scrap_wastage?: FloatNullableFilter<"Stock"> | number | null
    casting_customer_id?: IntFilter<"Stock"> | number
  }

  export type FilingEntryCreateWithoutFiling_personInput = {
    createdAt?: Date | string
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    stone_option: $Enums.STONEOPTION
    castingItem: CastingItemsCreateNestedOneWithoutFilingEntryInput
    settingEntry?: SettingEntryCreateNestedManyWithoutFilingEntryInput
    buffingEntries?: BuffingEntryCreateNestedManyWithoutFilingEntryInput
  }

  export type FilingEntryUncheckedCreateWithoutFiling_personInput = {
    id?: number
    createdAt?: Date | string
    casting_item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    stone_option: $Enums.STONEOPTION
    settingEntry?: SettingEntryUncheckedCreateNestedManyWithoutFilingEntryInput
    buffingEntries?: BuffingEntryUncheckedCreateNestedManyWithoutFilingEntryInput
  }

  export type FilingEntryCreateOrConnectWithoutFiling_personInput = {
    where: FilingEntryWhereUniqueInput
    create: XOR<FilingEntryCreateWithoutFiling_personInput, FilingEntryUncheckedCreateWithoutFiling_personInput>
  }

  export type FilingEntryCreateManyFiling_personInputEnvelope = {
    data: FilingEntryCreateManyFiling_personInput | FilingEntryCreateManyFiling_personInput[]
    skipDuplicates?: boolean
  }

  export type FilingEntryUpsertWithWhereUniqueWithoutFiling_personInput = {
    where: FilingEntryWhereUniqueInput
    update: XOR<FilingEntryUpdateWithoutFiling_personInput, FilingEntryUncheckedUpdateWithoutFiling_personInput>
    create: XOR<FilingEntryCreateWithoutFiling_personInput, FilingEntryUncheckedCreateWithoutFiling_personInput>
  }

  export type FilingEntryUpdateWithWhereUniqueWithoutFiling_personInput = {
    where: FilingEntryWhereUniqueInput
    data: XOR<FilingEntryUpdateWithoutFiling_personInput, FilingEntryUncheckedUpdateWithoutFiling_personInput>
  }

  export type FilingEntryUpdateManyWithWhereWithoutFiling_personInput = {
    where: FilingEntryScalarWhereInput
    data: XOR<FilingEntryUpdateManyMutationInput, FilingEntryUncheckedUpdateManyWithoutFiling_personInput>
  }

  export type FilingEntryScalarWhereInput = {
    AND?: FilingEntryScalarWhereInput | FilingEntryScalarWhereInput[]
    OR?: FilingEntryScalarWhereInput[]
    NOT?: FilingEntryScalarWhereInput | FilingEntryScalarWhereInput[]
    id?: IntFilter<"FilingEntry"> | number
    createdAt?: DateTimeFilter<"FilingEntry"> | Date | string
    filing_person_id?: IntFilter<"FilingEntry"> | number
    casting_item_id?: IntFilter<"FilingEntry"> | number
    weight?: FloatFilter<"FilingEntry"> | number
    touch?: FloatFilter<"FilingEntry"> | number
    item_purity?: FloatFilter<"FilingEntry"> | number
    remarks?: StringNullableFilter<"FilingEntry"> | string | null
    after_weight?: FloatNullableFilter<"FilingEntry"> | number | null
    stone_option?: EnumSTONEOPTIONFilter<"FilingEntry"> | $Enums.STONEOPTION
  }

  export type SettingEntryCreateWithoutSetting_personInput = {
    createdAt?: Date | string
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    castingItem: CastingItemsCreateNestedOneWithoutSettingEntryInput
    filingEntry: FilingEntryCreateNestedOneWithoutSettingEntryInput
    buffingEntries?: BuffingEntryCreateNestedManyWithoutSettingEntryInput
  }

  export type SettingEntryUncheckedCreateWithoutSetting_personInput = {
    id?: number
    createdAt?: Date | string
    casting_item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    filing_entry_id: number
    buffingEntries?: BuffingEntryUncheckedCreateNestedManyWithoutSettingEntryInput
  }

  export type SettingEntryCreateOrConnectWithoutSetting_personInput = {
    where: SettingEntryWhereUniqueInput
    create: XOR<SettingEntryCreateWithoutSetting_personInput, SettingEntryUncheckedCreateWithoutSetting_personInput>
  }

  export type SettingEntryCreateManySetting_personInputEnvelope = {
    data: SettingEntryCreateManySetting_personInput | SettingEntryCreateManySetting_personInput[]
    skipDuplicates?: boolean
  }

  export type SettingEntryUpsertWithWhereUniqueWithoutSetting_personInput = {
    where: SettingEntryWhereUniqueInput
    update: XOR<SettingEntryUpdateWithoutSetting_personInput, SettingEntryUncheckedUpdateWithoutSetting_personInput>
    create: XOR<SettingEntryCreateWithoutSetting_personInput, SettingEntryUncheckedCreateWithoutSetting_personInput>
  }

  export type SettingEntryUpdateWithWhereUniqueWithoutSetting_personInput = {
    where: SettingEntryWhereUniqueInput
    data: XOR<SettingEntryUpdateWithoutSetting_personInput, SettingEntryUncheckedUpdateWithoutSetting_personInput>
  }

  export type SettingEntryUpdateManyWithWhereWithoutSetting_personInput = {
    where: SettingEntryScalarWhereInput
    data: XOR<SettingEntryUpdateManyMutationInput, SettingEntryUncheckedUpdateManyWithoutSetting_personInput>
  }

  export type SettingEntryScalarWhereInput = {
    AND?: SettingEntryScalarWhereInput | SettingEntryScalarWhereInput[]
    OR?: SettingEntryScalarWhereInput[]
    NOT?: SettingEntryScalarWhereInput | SettingEntryScalarWhereInput[]
    id?: IntFilter<"SettingEntry"> | number
    createdAt?: DateTimeFilter<"SettingEntry"> | Date | string
    setting_person_id?: IntFilter<"SettingEntry"> | number
    casting_item_id?: IntFilter<"SettingEntry"> | number
    weight?: FloatFilter<"SettingEntry"> | number
    touch?: FloatFilter<"SettingEntry"> | number
    item_purity?: FloatFilter<"SettingEntry"> | number
    remarks?: StringNullableFilter<"SettingEntry"> | string | null
    after_weight?: FloatNullableFilter<"SettingEntry"> | number | null
    filing_entry_id?: IntFilter<"SettingEntry"> | number
  }

  export type BuffingEntryCreateWithoutBuffing_personInput = {
    createdAt?: Date | string
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    type: $Enums.STONEOPTION
    castingItem: CastingItemsCreateNestedOneWithoutBuffingEntryInput
    settingEntry: SettingEntryCreateNestedOneWithoutBuffingEntriesInput
    filingEntry: FilingEntryCreateNestedOneWithoutBuffingEntriesInput
  }

  export type BuffingEntryUncheckedCreateWithoutBuffing_personInput = {
    id?: number
    createdAt?: Date | string
    casting_item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    setting_entry_id: number
    filing_entry_id: number
    type: $Enums.STONEOPTION
  }

  export type BuffingEntryCreateOrConnectWithoutBuffing_personInput = {
    where: BuffingEntryWhereUniqueInput
    create: XOR<BuffingEntryCreateWithoutBuffing_personInput, BuffingEntryUncheckedCreateWithoutBuffing_personInput>
  }

  export type BuffingEntryCreateManyBuffing_personInputEnvelope = {
    data: BuffingEntryCreateManyBuffing_personInput | BuffingEntryCreateManyBuffing_personInput[]
    skipDuplicates?: boolean
  }

  export type BuffingEntryUpsertWithWhereUniqueWithoutBuffing_personInput = {
    where: BuffingEntryWhereUniqueInput
    update: XOR<BuffingEntryUpdateWithoutBuffing_personInput, BuffingEntryUncheckedUpdateWithoutBuffing_personInput>
    create: XOR<BuffingEntryCreateWithoutBuffing_personInput, BuffingEntryUncheckedCreateWithoutBuffing_personInput>
  }

  export type BuffingEntryUpdateWithWhereUniqueWithoutBuffing_personInput = {
    where: BuffingEntryWhereUniqueInput
    data: XOR<BuffingEntryUpdateWithoutBuffing_personInput, BuffingEntryUncheckedUpdateWithoutBuffing_personInput>
  }

  export type BuffingEntryUpdateManyWithWhereWithoutBuffing_personInput = {
    where: BuffingEntryScalarWhereInput
    data: XOR<BuffingEntryUpdateManyMutationInput, BuffingEntryUncheckedUpdateManyWithoutBuffing_personInput>
  }

  export type BuffingEntryScalarWhereInput = {
    AND?: BuffingEntryScalarWhereInput | BuffingEntryScalarWhereInput[]
    OR?: BuffingEntryScalarWhereInput[]
    NOT?: BuffingEntryScalarWhereInput | BuffingEntryScalarWhereInput[]
    id?: IntFilter<"BuffingEntry"> | number
    createdAt?: DateTimeFilter<"BuffingEntry"> | Date | string
    buffing_person_id?: IntFilter<"BuffingEntry"> | number
    casting_item_id?: IntFilter<"BuffingEntry"> | number
    weight?: FloatFilter<"BuffingEntry"> | number
    touch?: FloatFilter<"BuffingEntry"> | number
    item_purity?: FloatFilter<"BuffingEntry"> | number
    remarks?: StringNullableFilter<"BuffingEntry"> | string | null
    after_weight?: FloatNullableFilter<"BuffingEntry"> | number | null
    setting_entry_id?: IntFilter<"BuffingEntry"> | number
    filing_entry_id?: IntFilter<"BuffingEntry"> | number
    type?: EnumSTONEOPTIONFilter<"BuffingEntry"> | $Enums.STONEOPTION
  }

  export type AddCustomerCreateWithoutTransactionsInput = {
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    address?: string | null
    email?: string | null
  }

  export type AddCustomerUncheckedCreateWithoutTransactionsInput = {
    id?: number
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    address?: string | null
    email?: string | null
  }

  export type AddCustomerCreateOrConnectWithoutTransactionsInput = {
    where: AddCustomerWhereUniqueInput
    create: XOR<AddCustomerCreateWithoutTransactionsInput, AddCustomerUncheckedCreateWithoutTransactionsInput>
  }

  export type AddCustomerUpsertWithoutTransactionsInput = {
    update: XOR<AddCustomerUpdateWithoutTransactionsInput, AddCustomerUncheckedUpdateWithoutTransactionsInput>
    create: XOR<AddCustomerCreateWithoutTransactionsInput, AddCustomerUncheckedCreateWithoutTransactionsInput>
    where?: AddCustomerWhereInput
  }

  export type AddCustomerUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: AddCustomerWhereInput
    data: XOR<AddCustomerUpdateWithoutTransactionsInput, AddCustomerUncheckedUpdateWithoutTransactionsInput>
  }

  export type AddCustomerUpdateWithoutTransactionsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddCustomerUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CastingItemsCreateWithoutItemInput = {
    createdAt?: Date | string
    type: $Enums.CASTINGENTRYTYPE
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    scrap_weight?: number | null
    scrap_wastage?: number | null
    castingEntry: CastingEntryCreateNestedOneWithoutItemsInput
    filingEntry?: FilingEntryCreateNestedOneWithoutCastingItemInput
    settingEntry?: SettingEntryCreateNestedOneWithoutCastingItemInput
    buffingEntry?: BuffingEntryCreateNestedOneWithoutCastingItemInput
    stock?: StockCreateNestedManyWithoutCastingItemInput
    casting_customer: AddCastingCreateNestedOneWithoutCastingitemsInput
  }

  export type CastingItemsUncheckedCreateWithoutItemInput = {
    id?: number
    createdAt?: Date | string
    type: $Enums.CASTINGENTRYTYPE
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    scrap_weight?: number | null
    scrap_wastage?: number | null
    casting_entry_id: number
    casting_customer_id: number
    filingEntry?: FilingEntryUncheckedCreateNestedOneWithoutCastingItemInput
    settingEntry?: SettingEntryUncheckedCreateNestedOneWithoutCastingItemInput
    buffingEntry?: BuffingEntryUncheckedCreateNestedOneWithoutCastingItemInput
    stock?: StockUncheckedCreateNestedManyWithoutCastingItemInput
  }

  export type CastingItemsCreateOrConnectWithoutItemInput = {
    where: CastingItemsWhereUniqueInput
    create: XOR<CastingItemsCreateWithoutItemInput, CastingItemsUncheckedCreateWithoutItemInput>
  }

  export type CastingItemsCreateManyItemInputEnvelope = {
    data: CastingItemsCreateManyItemInput | CastingItemsCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type StockCreateWithoutItemInput = {
    createdAt?: Date | string
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    scrap_weight?: number | null
    scrap_wastage?: number | null
    castingItem: CastingItemsCreateNestedOneWithoutStockInput
    casting_customer: AddCastingCreateNestedOneWithoutStockInput
  }

  export type StockUncheckedCreateWithoutItemInput = {
    id?: number
    createdAt?: Date | string
    casting_item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    scrap_weight?: number | null
    scrap_wastage?: number | null
    casting_customer_id: number
  }

  export type StockCreateOrConnectWithoutItemInput = {
    where: StockWhereUniqueInput
    create: XOR<StockCreateWithoutItemInput, StockUncheckedCreateWithoutItemInput>
  }

  export type StockCreateManyItemInputEnvelope = {
    data: StockCreateManyItemInput | StockCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type CastingItemsUpsertWithWhereUniqueWithoutItemInput = {
    where: CastingItemsWhereUniqueInput
    update: XOR<CastingItemsUpdateWithoutItemInput, CastingItemsUncheckedUpdateWithoutItemInput>
    create: XOR<CastingItemsCreateWithoutItemInput, CastingItemsUncheckedCreateWithoutItemInput>
  }

  export type CastingItemsUpdateWithWhereUniqueWithoutItemInput = {
    where: CastingItemsWhereUniqueInput
    data: XOR<CastingItemsUpdateWithoutItemInput, CastingItemsUncheckedUpdateWithoutItemInput>
  }

  export type CastingItemsUpdateManyWithWhereWithoutItemInput = {
    where: CastingItemsScalarWhereInput
    data: XOR<CastingItemsUpdateManyMutationInput, CastingItemsUncheckedUpdateManyWithoutItemInput>
  }

  export type StockUpsertWithWhereUniqueWithoutItemInput = {
    where: StockWhereUniqueInput
    update: XOR<StockUpdateWithoutItemInput, StockUncheckedUpdateWithoutItemInput>
    create: XOR<StockCreateWithoutItemInput, StockUncheckedCreateWithoutItemInput>
  }

  export type StockUpdateWithWhereUniqueWithoutItemInput = {
    where: StockWhereUniqueInput
    data: XOR<StockUpdateWithoutItemInput, StockUncheckedUpdateWithoutItemInput>
  }

  export type StockUpdateManyWithWhereWithoutItemInput = {
    where: StockScalarWhereInput
    data: XOR<StockUpdateManyMutationInput, StockUncheckedUpdateManyWithoutItemInput>
  }

  export type AddCastingCreateWithoutEntriesInput = {
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    address?: string | null
    email?: string | null
    castingitems?: CastingItemsCreateNestedManyWithoutCasting_customerInput
    stock?: StockCreateNestedManyWithoutCasting_customerInput
  }

  export type AddCastingUncheckedCreateWithoutEntriesInput = {
    id?: number
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    address?: string | null
    email?: string | null
    castingitems?: CastingItemsUncheckedCreateNestedManyWithoutCasting_customerInput
    stock?: StockUncheckedCreateNestedManyWithoutCasting_customerInput
  }

  export type AddCastingCreateOrConnectWithoutEntriesInput = {
    where: AddCastingWhereUniqueInput
    create: XOR<AddCastingCreateWithoutEntriesInput, AddCastingUncheckedCreateWithoutEntriesInput>
  }

  export type CastingItemsCreateWithoutCastingEntryInput = {
    createdAt?: Date | string
    type: $Enums.CASTINGENTRYTYPE
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    scrap_weight?: number | null
    scrap_wastage?: number | null
    item: AddItemCreateNestedOneWithoutCastingItemsInput
    filingEntry?: FilingEntryCreateNestedOneWithoutCastingItemInput
    settingEntry?: SettingEntryCreateNestedOneWithoutCastingItemInput
    buffingEntry?: BuffingEntryCreateNestedOneWithoutCastingItemInput
    stock?: StockCreateNestedManyWithoutCastingItemInput
    casting_customer: AddCastingCreateNestedOneWithoutCastingitemsInput
  }

  export type CastingItemsUncheckedCreateWithoutCastingEntryInput = {
    id?: number
    createdAt?: Date | string
    type: $Enums.CASTINGENTRYTYPE
    item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    scrap_weight?: number | null
    scrap_wastage?: number | null
    casting_customer_id: number
    filingEntry?: FilingEntryUncheckedCreateNestedOneWithoutCastingItemInput
    settingEntry?: SettingEntryUncheckedCreateNestedOneWithoutCastingItemInput
    buffingEntry?: BuffingEntryUncheckedCreateNestedOneWithoutCastingItemInput
    stock?: StockUncheckedCreateNestedManyWithoutCastingItemInput
  }

  export type CastingItemsCreateOrConnectWithoutCastingEntryInput = {
    where: CastingItemsWhereUniqueInput
    create: XOR<CastingItemsCreateWithoutCastingEntryInput, CastingItemsUncheckedCreateWithoutCastingEntryInput>
  }

  export type CastingItemsCreateManyCastingEntryInputEnvelope = {
    data: CastingItemsCreateManyCastingEntryInput | CastingItemsCreateManyCastingEntryInput[]
    skipDuplicates?: boolean
  }

  export type AddCastingUpsertWithoutEntriesInput = {
    update: XOR<AddCastingUpdateWithoutEntriesInput, AddCastingUncheckedUpdateWithoutEntriesInput>
    create: XOR<AddCastingCreateWithoutEntriesInput, AddCastingUncheckedCreateWithoutEntriesInput>
    where?: AddCastingWhereInput
  }

  export type AddCastingUpdateToOneWithWhereWithoutEntriesInput = {
    where?: AddCastingWhereInput
    data: XOR<AddCastingUpdateWithoutEntriesInput, AddCastingUncheckedUpdateWithoutEntriesInput>
  }

  export type AddCastingUpdateWithoutEntriesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    castingitems?: CastingItemsUpdateManyWithoutCasting_customerNestedInput
    stock?: StockUpdateManyWithoutCasting_customerNestedInput
  }

  export type AddCastingUncheckedUpdateWithoutEntriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    castingitems?: CastingItemsUncheckedUpdateManyWithoutCasting_customerNestedInput
    stock?: StockUncheckedUpdateManyWithoutCasting_customerNestedInput
  }

  export type CastingItemsUpsertWithWhereUniqueWithoutCastingEntryInput = {
    where: CastingItemsWhereUniqueInput
    update: XOR<CastingItemsUpdateWithoutCastingEntryInput, CastingItemsUncheckedUpdateWithoutCastingEntryInput>
    create: XOR<CastingItemsCreateWithoutCastingEntryInput, CastingItemsUncheckedCreateWithoutCastingEntryInput>
  }

  export type CastingItemsUpdateWithWhereUniqueWithoutCastingEntryInput = {
    where: CastingItemsWhereUniqueInput
    data: XOR<CastingItemsUpdateWithoutCastingEntryInput, CastingItemsUncheckedUpdateWithoutCastingEntryInput>
  }

  export type CastingItemsUpdateManyWithWhereWithoutCastingEntryInput = {
    where: CastingItemsScalarWhereInput
    data: XOR<CastingItemsUpdateManyMutationInput, CastingItemsUncheckedUpdateManyWithoutCastingEntryInput>
  }

  export type AddItemCreateWithoutCastingItemsInput = {
    createdAt?: Date | string
    name: string
    stock?: StockCreateNestedManyWithoutItemInput
  }

  export type AddItemUncheckedCreateWithoutCastingItemsInput = {
    id?: number
    createdAt?: Date | string
    name: string
    stock?: StockUncheckedCreateNestedManyWithoutItemInput
  }

  export type AddItemCreateOrConnectWithoutCastingItemsInput = {
    where: AddItemWhereUniqueInput
    create: XOR<AddItemCreateWithoutCastingItemsInput, AddItemUncheckedCreateWithoutCastingItemsInput>
  }

  export type CastingEntryCreateWithoutItemsInput = {
    createdAt?: Date | string
    date: Date | string
    given_gold: number
    given_touch: number
    purity: number
    final_touch: number
    pure_value: number
    copper: number
    final_weight: number
    casting_customer: AddCastingCreateNestedOneWithoutEntriesInput
  }

  export type CastingEntryUncheckedCreateWithoutItemsInput = {
    id?: number
    createdAt?: Date | string
    date: Date | string
    given_gold: number
    given_touch: number
    purity: number
    final_touch: number
    pure_value: number
    copper: number
    final_weight: number
    casting_customer_id: number
  }

  export type CastingEntryCreateOrConnectWithoutItemsInput = {
    where: CastingEntryWhereUniqueInput
    create: XOR<CastingEntryCreateWithoutItemsInput, CastingEntryUncheckedCreateWithoutItemsInput>
  }

  export type FilingEntryCreateWithoutCastingItemInput = {
    createdAt?: Date | string
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    stone_option: $Enums.STONEOPTION
    filing_person: AddFilingCreateNestedOneWithoutFilingsInput
    settingEntry?: SettingEntryCreateNestedManyWithoutFilingEntryInput
    buffingEntries?: BuffingEntryCreateNestedManyWithoutFilingEntryInput
  }

  export type FilingEntryUncheckedCreateWithoutCastingItemInput = {
    id?: number
    createdAt?: Date | string
    filing_person_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    stone_option: $Enums.STONEOPTION
    settingEntry?: SettingEntryUncheckedCreateNestedManyWithoutFilingEntryInput
    buffingEntries?: BuffingEntryUncheckedCreateNestedManyWithoutFilingEntryInput
  }

  export type FilingEntryCreateOrConnectWithoutCastingItemInput = {
    where: FilingEntryWhereUniqueInput
    create: XOR<FilingEntryCreateWithoutCastingItemInput, FilingEntryUncheckedCreateWithoutCastingItemInput>
  }

  export type SettingEntryCreateWithoutCastingItemInput = {
    createdAt?: Date | string
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    setting_person: AddSettingCreateNestedOneWithoutSettingsInput
    filingEntry: FilingEntryCreateNestedOneWithoutSettingEntryInput
    buffingEntries?: BuffingEntryCreateNestedManyWithoutSettingEntryInput
  }

  export type SettingEntryUncheckedCreateWithoutCastingItemInput = {
    id?: number
    createdAt?: Date | string
    setting_person_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    filing_entry_id: number
    buffingEntries?: BuffingEntryUncheckedCreateNestedManyWithoutSettingEntryInput
  }

  export type SettingEntryCreateOrConnectWithoutCastingItemInput = {
    where: SettingEntryWhereUniqueInput
    create: XOR<SettingEntryCreateWithoutCastingItemInput, SettingEntryUncheckedCreateWithoutCastingItemInput>
  }

  export type BuffingEntryCreateWithoutCastingItemInput = {
    createdAt?: Date | string
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    type: $Enums.STONEOPTION
    buffing_person: AddBuffingCreateNestedOneWithoutBuffingsInput
    settingEntry: SettingEntryCreateNestedOneWithoutBuffingEntriesInput
    filingEntry: FilingEntryCreateNestedOneWithoutBuffingEntriesInput
  }

  export type BuffingEntryUncheckedCreateWithoutCastingItemInput = {
    id?: number
    createdAt?: Date | string
    buffing_person_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    setting_entry_id: number
    filing_entry_id: number
    type: $Enums.STONEOPTION
  }

  export type BuffingEntryCreateOrConnectWithoutCastingItemInput = {
    where: BuffingEntryWhereUniqueInput
    create: XOR<BuffingEntryCreateWithoutCastingItemInput, BuffingEntryUncheckedCreateWithoutCastingItemInput>
  }

  export type StockCreateWithoutCastingItemInput = {
    createdAt?: Date | string
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    scrap_weight?: number | null
    scrap_wastage?: number | null
    item: AddItemCreateNestedOneWithoutStockInput
    casting_customer: AddCastingCreateNestedOneWithoutStockInput
  }

  export type StockUncheckedCreateWithoutCastingItemInput = {
    id?: number
    createdAt?: Date | string
    item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    scrap_weight?: number | null
    scrap_wastage?: number | null
    casting_customer_id: number
  }

  export type StockCreateOrConnectWithoutCastingItemInput = {
    where: StockWhereUniqueInput
    create: XOR<StockCreateWithoutCastingItemInput, StockUncheckedCreateWithoutCastingItemInput>
  }

  export type StockCreateManyCastingItemInputEnvelope = {
    data: StockCreateManyCastingItemInput | StockCreateManyCastingItemInput[]
    skipDuplicates?: boolean
  }

  export type AddCastingCreateWithoutCastingitemsInput = {
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    address?: string | null
    email?: string | null
    entries?: CastingEntryCreateNestedManyWithoutCasting_customerInput
    stock?: StockCreateNestedManyWithoutCasting_customerInput
  }

  export type AddCastingUncheckedCreateWithoutCastingitemsInput = {
    id?: number
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    address?: string | null
    email?: string | null
    entries?: CastingEntryUncheckedCreateNestedManyWithoutCasting_customerInput
    stock?: StockUncheckedCreateNestedManyWithoutCasting_customerInput
  }

  export type AddCastingCreateOrConnectWithoutCastingitemsInput = {
    where: AddCastingWhereUniqueInput
    create: XOR<AddCastingCreateWithoutCastingitemsInput, AddCastingUncheckedCreateWithoutCastingitemsInput>
  }

  export type AddItemUpsertWithoutCastingItemsInput = {
    update: XOR<AddItemUpdateWithoutCastingItemsInput, AddItemUncheckedUpdateWithoutCastingItemsInput>
    create: XOR<AddItemCreateWithoutCastingItemsInput, AddItemUncheckedCreateWithoutCastingItemsInput>
    where?: AddItemWhereInput
  }

  export type AddItemUpdateToOneWithWhereWithoutCastingItemsInput = {
    where?: AddItemWhereInput
    data: XOR<AddItemUpdateWithoutCastingItemsInput, AddItemUncheckedUpdateWithoutCastingItemsInput>
  }

  export type AddItemUpdateWithoutCastingItemsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    stock?: StockUpdateManyWithoutItemNestedInput
  }

  export type AddItemUncheckedUpdateWithoutCastingItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    stock?: StockUncheckedUpdateManyWithoutItemNestedInput
  }

  export type CastingEntryUpsertWithoutItemsInput = {
    update: XOR<CastingEntryUpdateWithoutItemsInput, CastingEntryUncheckedUpdateWithoutItemsInput>
    create: XOR<CastingEntryCreateWithoutItemsInput, CastingEntryUncheckedCreateWithoutItemsInput>
    where?: CastingEntryWhereInput
  }

  export type CastingEntryUpdateToOneWithWhereWithoutItemsInput = {
    where?: CastingEntryWhereInput
    data: XOR<CastingEntryUpdateWithoutItemsInput, CastingEntryUncheckedUpdateWithoutItemsInput>
  }

  export type CastingEntryUpdateWithoutItemsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    given_gold?: FloatFieldUpdateOperationsInput | number
    given_touch?: FloatFieldUpdateOperationsInput | number
    purity?: FloatFieldUpdateOperationsInput | number
    final_touch?: FloatFieldUpdateOperationsInput | number
    pure_value?: FloatFieldUpdateOperationsInput | number
    copper?: FloatFieldUpdateOperationsInput | number
    final_weight?: FloatFieldUpdateOperationsInput | number
    casting_customer?: AddCastingUpdateOneRequiredWithoutEntriesNestedInput
  }

  export type CastingEntryUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    given_gold?: FloatFieldUpdateOperationsInput | number
    given_touch?: FloatFieldUpdateOperationsInput | number
    purity?: FloatFieldUpdateOperationsInput | number
    final_touch?: FloatFieldUpdateOperationsInput | number
    pure_value?: FloatFieldUpdateOperationsInput | number
    copper?: FloatFieldUpdateOperationsInput | number
    final_weight?: FloatFieldUpdateOperationsInput | number
    casting_customer_id?: IntFieldUpdateOperationsInput | number
  }

  export type FilingEntryUpsertWithoutCastingItemInput = {
    update: XOR<FilingEntryUpdateWithoutCastingItemInput, FilingEntryUncheckedUpdateWithoutCastingItemInput>
    create: XOR<FilingEntryCreateWithoutCastingItemInput, FilingEntryUncheckedCreateWithoutCastingItemInput>
    where?: FilingEntryWhereInput
  }

  export type FilingEntryUpdateToOneWithWhereWithoutCastingItemInput = {
    where?: FilingEntryWhereInput
    data: XOR<FilingEntryUpdateWithoutCastingItemInput, FilingEntryUncheckedUpdateWithoutCastingItemInput>
  }

  export type FilingEntryUpdateWithoutCastingItemInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    stone_option?: EnumSTONEOPTIONFieldUpdateOperationsInput | $Enums.STONEOPTION
    filing_person?: AddFilingUpdateOneRequiredWithoutFilingsNestedInput
    settingEntry?: SettingEntryUpdateManyWithoutFilingEntryNestedInput
    buffingEntries?: BuffingEntryUpdateManyWithoutFilingEntryNestedInput
  }

  export type FilingEntryUncheckedUpdateWithoutCastingItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filing_person_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    stone_option?: EnumSTONEOPTIONFieldUpdateOperationsInput | $Enums.STONEOPTION
    settingEntry?: SettingEntryUncheckedUpdateManyWithoutFilingEntryNestedInput
    buffingEntries?: BuffingEntryUncheckedUpdateManyWithoutFilingEntryNestedInput
  }

  export type SettingEntryUpsertWithoutCastingItemInput = {
    update: XOR<SettingEntryUpdateWithoutCastingItemInput, SettingEntryUncheckedUpdateWithoutCastingItemInput>
    create: XOR<SettingEntryCreateWithoutCastingItemInput, SettingEntryUncheckedCreateWithoutCastingItemInput>
    where?: SettingEntryWhereInput
  }

  export type SettingEntryUpdateToOneWithWhereWithoutCastingItemInput = {
    where?: SettingEntryWhereInput
    data: XOR<SettingEntryUpdateWithoutCastingItemInput, SettingEntryUncheckedUpdateWithoutCastingItemInput>
  }

  export type SettingEntryUpdateWithoutCastingItemInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    setting_person?: AddSettingUpdateOneRequiredWithoutSettingsNestedInput
    filingEntry?: FilingEntryUpdateOneRequiredWithoutSettingEntryNestedInput
    buffingEntries?: BuffingEntryUpdateManyWithoutSettingEntryNestedInput
  }

  export type SettingEntryUncheckedUpdateWithoutCastingItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setting_person_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    filing_entry_id?: IntFieldUpdateOperationsInput | number
    buffingEntries?: BuffingEntryUncheckedUpdateManyWithoutSettingEntryNestedInput
  }

  export type BuffingEntryUpsertWithoutCastingItemInput = {
    update: XOR<BuffingEntryUpdateWithoutCastingItemInput, BuffingEntryUncheckedUpdateWithoutCastingItemInput>
    create: XOR<BuffingEntryCreateWithoutCastingItemInput, BuffingEntryUncheckedCreateWithoutCastingItemInput>
    where?: BuffingEntryWhereInput
  }

  export type BuffingEntryUpdateToOneWithWhereWithoutCastingItemInput = {
    where?: BuffingEntryWhereInput
    data: XOR<BuffingEntryUpdateWithoutCastingItemInput, BuffingEntryUncheckedUpdateWithoutCastingItemInput>
  }

  export type BuffingEntryUpdateWithoutCastingItemInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: EnumSTONEOPTIONFieldUpdateOperationsInput | $Enums.STONEOPTION
    buffing_person?: AddBuffingUpdateOneRequiredWithoutBuffingsNestedInput
    settingEntry?: SettingEntryUpdateOneRequiredWithoutBuffingEntriesNestedInput
    filingEntry?: FilingEntryUpdateOneRequiredWithoutBuffingEntriesNestedInput
  }

  export type BuffingEntryUncheckedUpdateWithoutCastingItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buffing_person_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    setting_entry_id?: IntFieldUpdateOperationsInput | number
    filing_entry_id?: IntFieldUpdateOperationsInput | number
    type?: EnumSTONEOPTIONFieldUpdateOperationsInput | $Enums.STONEOPTION
  }

  export type StockUpsertWithWhereUniqueWithoutCastingItemInput = {
    where: StockWhereUniqueInput
    update: XOR<StockUpdateWithoutCastingItemInput, StockUncheckedUpdateWithoutCastingItemInput>
    create: XOR<StockCreateWithoutCastingItemInput, StockUncheckedCreateWithoutCastingItemInput>
  }

  export type StockUpdateWithWhereUniqueWithoutCastingItemInput = {
    where: StockWhereUniqueInput
    data: XOR<StockUpdateWithoutCastingItemInput, StockUncheckedUpdateWithoutCastingItemInput>
  }

  export type StockUpdateManyWithWhereWithoutCastingItemInput = {
    where: StockScalarWhereInput
    data: XOR<StockUpdateManyMutationInput, StockUncheckedUpdateManyWithoutCastingItemInput>
  }

  export type AddCastingUpsertWithoutCastingitemsInput = {
    update: XOR<AddCastingUpdateWithoutCastingitemsInput, AddCastingUncheckedUpdateWithoutCastingitemsInput>
    create: XOR<AddCastingCreateWithoutCastingitemsInput, AddCastingUncheckedCreateWithoutCastingitemsInput>
    where?: AddCastingWhereInput
  }

  export type AddCastingUpdateToOneWithWhereWithoutCastingitemsInput = {
    where?: AddCastingWhereInput
    data: XOR<AddCastingUpdateWithoutCastingitemsInput, AddCastingUncheckedUpdateWithoutCastingitemsInput>
  }

  export type AddCastingUpdateWithoutCastingitemsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    entries?: CastingEntryUpdateManyWithoutCasting_customerNestedInput
    stock?: StockUpdateManyWithoutCasting_customerNestedInput
  }

  export type AddCastingUncheckedUpdateWithoutCastingitemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    entries?: CastingEntryUncheckedUpdateManyWithoutCasting_customerNestedInput
    stock?: StockUncheckedUpdateManyWithoutCasting_customerNestedInput
  }

  export type AddFilingCreateWithoutFilingsInput = {
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    address?: string | null
    email?: string | null
  }

  export type AddFilingUncheckedCreateWithoutFilingsInput = {
    id?: number
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    address?: string | null
    email?: string | null
  }

  export type AddFilingCreateOrConnectWithoutFilingsInput = {
    where: AddFilingWhereUniqueInput
    create: XOR<AddFilingCreateWithoutFilingsInput, AddFilingUncheckedCreateWithoutFilingsInput>
  }

  export type CastingItemsCreateWithoutFilingEntryInput = {
    createdAt?: Date | string
    type: $Enums.CASTINGENTRYTYPE
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    scrap_weight?: number | null
    scrap_wastage?: number | null
    item: AddItemCreateNestedOneWithoutCastingItemsInput
    castingEntry: CastingEntryCreateNestedOneWithoutItemsInput
    settingEntry?: SettingEntryCreateNestedOneWithoutCastingItemInput
    buffingEntry?: BuffingEntryCreateNestedOneWithoutCastingItemInput
    stock?: StockCreateNestedManyWithoutCastingItemInput
    casting_customer: AddCastingCreateNestedOneWithoutCastingitemsInput
  }

  export type CastingItemsUncheckedCreateWithoutFilingEntryInput = {
    id?: number
    createdAt?: Date | string
    type: $Enums.CASTINGENTRYTYPE
    item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    scrap_weight?: number | null
    scrap_wastage?: number | null
    casting_entry_id: number
    casting_customer_id: number
    settingEntry?: SettingEntryUncheckedCreateNestedOneWithoutCastingItemInput
    buffingEntry?: BuffingEntryUncheckedCreateNestedOneWithoutCastingItemInput
    stock?: StockUncheckedCreateNestedManyWithoutCastingItemInput
  }

  export type CastingItemsCreateOrConnectWithoutFilingEntryInput = {
    where: CastingItemsWhereUniqueInput
    create: XOR<CastingItemsCreateWithoutFilingEntryInput, CastingItemsUncheckedCreateWithoutFilingEntryInput>
  }

  export type SettingEntryCreateWithoutFilingEntryInput = {
    createdAt?: Date | string
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    setting_person: AddSettingCreateNestedOneWithoutSettingsInput
    castingItem: CastingItemsCreateNestedOneWithoutSettingEntryInput
    buffingEntries?: BuffingEntryCreateNestedManyWithoutSettingEntryInput
  }

  export type SettingEntryUncheckedCreateWithoutFilingEntryInput = {
    id?: number
    createdAt?: Date | string
    setting_person_id: number
    casting_item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    buffingEntries?: BuffingEntryUncheckedCreateNestedManyWithoutSettingEntryInput
  }

  export type SettingEntryCreateOrConnectWithoutFilingEntryInput = {
    where: SettingEntryWhereUniqueInput
    create: XOR<SettingEntryCreateWithoutFilingEntryInput, SettingEntryUncheckedCreateWithoutFilingEntryInput>
  }

  export type SettingEntryCreateManyFilingEntryInputEnvelope = {
    data: SettingEntryCreateManyFilingEntryInput | SettingEntryCreateManyFilingEntryInput[]
    skipDuplicates?: boolean
  }

  export type BuffingEntryCreateWithoutFilingEntryInput = {
    createdAt?: Date | string
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    type: $Enums.STONEOPTION
    buffing_person: AddBuffingCreateNestedOneWithoutBuffingsInput
    castingItem: CastingItemsCreateNestedOneWithoutBuffingEntryInput
    settingEntry: SettingEntryCreateNestedOneWithoutBuffingEntriesInput
  }

  export type BuffingEntryUncheckedCreateWithoutFilingEntryInput = {
    id?: number
    createdAt?: Date | string
    buffing_person_id: number
    casting_item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    setting_entry_id: number
    type: $Enums.STONEOPTION
  }

  export type BuffingEntryCreateOrConnectWithoutFilingEntryInput = {
    where: BuffingEntryWhereUniqueInput
    create: XOR<BuffingEntryCreateWithoutFilingEntryInput, BuffingEntryUncheckedCreateWithoutFilingEntryInput>
  }

  export type BuffingEntryCreateManyFilingEntryInputEnvelope = {
    data: BuffingEntryCreateManyFilingEntryInput | BuffingEntryCreateManyFilingEntryInput[]
    skipDuplicates?: boolean
  }

  export type AddFilingUpsertWithoutFilingsInput = {
    update: XOR<AddFilingUpdateWithoutFilingsInput, AddFilingUncheckedUpdateWithoutFilingsInput>
    create: XOR<AddFilingCreateWithoutFilingsInput, AddFilingUncheckedCreateWithoutFilingsInput>
    where?: AddFilingWhereInput
  }

  export type AddFilingUpdateToOneWithWhereWithoutFilingsInput = {
    where?: AddFilingWhereInput
    data: XOR<AddFilingUpdateWithoutFilingsInput, AddFilingUncheckedUpdateWithoutFilingsInput>
  }

  export type AddFilingUpdateWithoutFilingsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddFilingUncheckedUpdateWithoutFilingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CastingItemsUpsertWithoutFilingEntryInput = {
    update: XOR<CastingItemsUpdateWithoutFilingEntryInput, CastingItemsUncheckedUpdateWithoutFilingEntryInput>
    create: XOR<CastingItemsCreateWithoutFilingEntryInput, CastingItemsUncheckedCreateWithoutFilingEntryInput>
    where?: CastingItemsWhereInput
  }

  export type CastingItemsUpdateToOneWithWhereWithoutFilingEntryInput = {
    where?: CastingItemsWhereInput
    data: XOR<CastingItemsUpdateWithoutFilingEntryInput, CastingItemsUncheckedUpdateWithoutFilingEntryInput>
  }

  export type CastingItemsUpdateWithoutFilingEntryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumCASTINGENTRYTYPEFieldUpdateOperationsInput | $Enums.CASTINGENTRYTYPE
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
    item?: AddItemUpdateOneRequiredWithoutCastingItemsNestedInput
    castingEntry?: CastingEntryUpdateOneRequiredWithoutItemsNestedInput
    settingEntry?: SettingEntryUpdateOneWithoutCastingItemNestedInput
    buffingEntry?: BuffingEntryUpdateOneWithoutCastingItemNestedInput
    stock?: StockUpdateManyWithoutCastingItemNestedInput
    casting_customer?: AddCastingUpdateOneRequiredWithoutCastingitemsNestedInput
  }

  export type CastingItemsUncheckedUpdateWithoutFilingEntryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumCASTINGENTRYTYPEFieldUpdateOperationsInput | $Enums.CASTINGENTRYTYPE
    item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
    casting_entry_id?: IntFieldUpdateOperationsInput | number
    casting_customer_id?: IntFieldUpdateOperationsInput | number
    settingEntry?: SettingEntryUncheckedUpdateOneWithoutCastingItemNestedInput
    buffingEntry?: BuffingEntryUncheckedUpdateOneWithoutCastingItemNestedInput
    stock?: StockUncheckedUpdateManyWithoutCastingItemNestedInput
  }

  export type SettingEntryUpsertWithWhereUniqueWithoutFilingEntryInput = {
    where: SettingEntryWhereUniqueInput
    update: XOR<SettingEntryUpdateWithoutFilingEntryInput, SettingEntryUncheckedUpdateWithoutFilingEntryInput>
    create: XOR<SettingEntryCreateWithoutFilingEntryInput, SettingEntryUncheckedCreateWithoutFilingEntryInput>
  }

  export type SettingEntryUpdateWithWhereUniqueWithoutFilingEntryInput = {
    where: SettingEntryWhereUniqueInput
    data: XOR<SettingEntryUpdateWithoutFilingEntryInput, SettingEntryUncheckedUpdateWithoutFilingEntryInput>
  }

  export type SettingEntryUpdateManyWithWhereWithoutFilingEntryInput = {
    where: SettingEntryScalarWhereInput
    data: XOR<SettingEntryUpdateManyMutationInput, SettingEntryUncheckedUpdateManyWithoutFilingEntryInput>
  }

  export type BuffingEntryUpsertWithWhereUniqueWithoutFilingEntryInput = {
    where: BuffingEntryWhereUniqueInput
    update: XOR<BuffingEntryUpdateWithoutFilingEntryInput, BuffingEntryUncheckedUpdateWithoutFilingEntryInput>
    create: XOR<BuffingEntryCreateWithoutFilingEntryInput, BuffingEntryUncheckedCreateWithoutFilingEntryInput>
  }

  export type BuffingEntryUpdateWithWhereUniqueWithoutFilingEntryInput = {
    where: BuffingEntryWhereUniqueInput
    data: XOR<BuffingEntryUpdateWithoutFilingEntryInput, BuffingEntryUncheckedUpdateWithoutFilingEntryInput>
  }

  export type BuffingEntryUpdateManyWithWhereWithoutFilingEntryInput = {
    where: BuffingEntryScalarWhereInput
    data: XOR<BuffingEntryUpdateManyMutationInput, BuffingEntryUncheckedUpdateManyWithoutFilingEntryInput>
  }

  export type AddSettingCreateWithoutSettingsInput = {
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    address?: string | null
    email?: string | null
  }

  export type AddSettingUncheckedCreateWithoutSettingsInput = {
    id?: number
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    address?: string | null
    email?: string | null
  }

  export type AddSettingCreateOrConnectWithoutSettingsInput = {
    where: AddSettingWhereUniqueInput
    create: XOR<AddSettingCreateWithoutSettingsInput, AddSettingUncheckedCreateWithoutSettingsInput>
  }

  export type CastingItemsCreateWithoutSettingEntryInput = {
    createdAt?: Date | string
    type: $Enums.CASTINGENTRYTYPE
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    scrap_weight?: number | null
    scrap_wastage?: number | null
    item: AddItemCreateNestedOneWithoutCastingItemsInput
    castingEntry: CastingEntryCreateNestedOneWithoutItemsInput
    filingEntry?: FilingEntryCreateNestedOneWithoutCastingItemInput
    buffingEntry?: BuffingEntryCreateNestedOneWithoutCastingItemInput
    stock?: StockCreateNestedManyWithoutCastingItemInput
    casting_customer: AddCastingCreateNestedOneWithoutCastingitemsInput
  }

  export type CastingItemsUncheckedCreateWithoutSettingEntryInput = {
    id?: number
    createdAt?: Date | string
    type: $Enums.CASTINGENTRYTYPE
    item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    scrap_weight?: number | null
    scrap_wastage?: number | null
    casting_entry_id: number
    casting_customer_id: number
    filingEntry?: FilingEntryUncheckedCreateNestedOneWithoutCastingItemInput
    buffingEntry?: BuffingEntryUncheckedCreateNestedOneWithoutCastingItemInput
    stock?: StockUncheckedCreateNestedManyWithoutCastingItemInput
  }

  export type CastingItemsCreateOrConnectWithoutSettingEntryInput = {
    where: CastingItemsWhereUniqueInput
    create: XOR<CastingItemsCreateWithoutSettingEntryInput, CastingItemsUncheckedCreateWithoutSettingEntryInput>
  }

  export type FilingEntryCreateWithoutSettingEntryInput = {
    createdAt?: Date | string
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    stone_option: $Enums.STONEOPTION
    filing_person: AddFilingCreateNestedOneWithoutFilingsInput
    castingItem: CastingItemsCreateNestedOneWithoutFilingEntryInput
    buffingEntries?: BuffingEntryCreateNestedManyWithoutFilingEntryInput
  }

  export type FilingEntryUncheckedCreateWithoutSettingEntryInput = {
    id?: number
    createdAt?: Date | string
    filing_person_id: number
    casting_item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    stone_option: $Enums.STONEOPTION
    buffingEntries?: BuffingEntryUncheckedCreateNestedManyWithoutFilingEntryInput
  }

  export type FilingEntryCreateOrConnectWithoutSettingEntryInput = {
    where: FilingEntryWhereUniqueInput
    create: XOR<FilingEntryCreateWithoutSettingEntryInput, FilingEntryUncheckedCreateWithoutSettingEntryInput>
  }

  export type BuffingEntryCreateWithoutSettingEntryInput = {
    createdAt?: Date | string
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    type: $Enums.STONEOPTION
    buffing_person: AddBuffingCreateNestedOneWithoutBuffingsInput
    castingItem: CastingItemsCreateNestedOneWithoutBuffingEntryInput
    filingEntry: FilingEntryCreateNestedOneWithoutBuffingEntriesInput
  }

  export type BuffingEntryUncheckedCreateWithoutSettingEntryInput = {
    id?: number
    createdAt?: Date | string
    buffing_person_id: number
    casting_item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    filing_entry_id: number
    type: $Enums.STONEOPTION
  }

  export type BuffingEntryCreateOrConnectWithoutSettingEntryInput = {
    where: BuffingEntryWhereUniqueInput
    create: XOR<BuffingEntryCreateWithoutSettingEntryInput, BuffingEntryUncheckedCreateWithoutSettingEntryInput>
  }

  export type BuffingEntryCreateManySettingEntryInputEnvelope = {
    data: BuffingEntryCreateManySettingEntryInput | BuffingEntryCreateManySettingEntryInput[]
    skipDuplicates?: boolean
  }

  export type AddSettingUpsertWithoutSettingsInput = {
    update: XOR<AddSettingUpdateWithoutSettingsInput, AddSettingUncheckedUpdateWithoutSettingsInput>
    create: XOR<AddSettingCreateWithoutSettingsInput, AddSettingUncheckedCreateWithoutSettingsInput>
    where?: AddSettingWhereInput
  }

  export type AddSettingUpdateToOneWithWhereWithoutSettingsInput = {
    where?: AddSettingWhereInput
    data: XOR<AddSettingUpdateWithoutSettingsInput, AddSettingUncheckedUpdateWithoutSettingsInput>
  }

  export type AddSettingUpdateWithoutSettingsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddSettingUncheckedUpdateWithoutSettingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CastingItemsUpsertWithoutSettingEntryInput = {
    update: XOR<CastingItemsUpdateWithoutSettingEntryInput, CastingItemsUncheckedUpdateWithoutSettingEntryInput>
    create: XOR<CastingItemsCreateWithoutSettingEntryInput, CastingItemsUncheckedCreateWithoutSettingEntryInput>
    where?: CastingItemsWhereInput
  }

  export type CastingItemsUpdateToOneWithWhereWithoutSettingEntryInput = {
    where?: CastingItemsWhereInput
    data: XOR<CastingItemsUpdateWithoutSettingEntryInput, CastingItemsUncheckedUpdateWithoutSettingEntryInput>
  }

  export type CastingItemsUpdateWithoutSettingEntryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumCASTINGENTRYTYPEFieldUpdateOperationsInput | $Enums.CASTINGENTRYTYPE
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
    item?: AddItemUpdateOneRequiredWithoutCastingItemsNestedInput
    castingEntry?: CastingEntryUpdateOneRequiredWithoutItemsNestedInput
    filingEntry?: FilingEntryUpdateOneWithoutCastingItemNestedInput
    buffingEntry?: BuffingEntryUpdateOneWithoutCastingItemNestedInput
    stock?: StockUpdateManyWithoutCastingItemNestedInput
    casting_customer?: AddCastingUpdateOneRequiredWithoutCastingitemsNestedInput
  }

  export type CastingItemsUncheckedUpdateWithoutSettingEntryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumCASTINGENTRYTYPEFieldUpdateOperationsInput | $Enums.CASTINGENTRYTYPE
    item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
    casting_entry_id?: IntFieldUpdateOperationsInput | number
    casting_customer_id?: IntFieldUpdateOperationsInput | number
    filingEntry?: FilingEntryUncheckedUpdateOneWithoutCastingItemNestedInput
    buffingEntry?: BuffingEntryUncheckedUpdateOneWithoutCastingItemNestedInput
    stock?: StockUncheckedUpdateManyWithoutCastingItemNestedInput
  }

  export type FilingEntryUpsertWithoutSettingEntryInput = {
    update: XOR<FilingEntryUpdateWithoutSettingEntryInput, FilingEntryUncheckedUpdateWithoutSettingEntryInput>
    create: XOR<FilingEntryCreateWithoutSettingEntryInput, FilingEntryUncheckedCreateWithoutSettingEntryInput>
    where?: FilingEntryWhereInput
  }

  export type FilingEntryUpdateToOneWithWhereWithoutSettingEntryInput = {
    where?: FilingEntryWhereInput
    data: XOR<FilingEntryUpdateWithoutSettingEntryInput, FilingEntryUncheckedUpdateWithoutSettingEntryInput>
  }

  export type FilingEntryUpdateWithoutSettingEntryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    stone_option?: EnumSTONEOPTIONFieldUpdateOperationsInput | $Enums.STONEOPTION
    filing_person?: AddFilingUpdateOneRequiredWithoutFilingsNestedInput
    castingItem?: CastingItemsUpdateOneRequiredWithoutFilingEntryNestedInput
    buffingEntries?: BuffingEntryUpdateManyWithoutFilingEntryNestedInput
  }

  export type FilingEntryUncheckedUpdateWithoutSettingEntryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filing_person_id?: IntFieldUpdateOperationsInput | number
    casting_item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    stone_option?: EnumSTONEOPTIONFieldUpdateOperationsInput | $Enums.STONEOPTION
    buffingEntries?: BuffingEntryUncheckedUpdateManyWithoutFilingEntryNestedInput
  }

  export type BuffingEntryUpsertWithWhereUniqueWithoutSettingEntryInput = {
    where: BuffingEntryWhereUniqueInput
    update: XOR<BuffingEntryUpdateWithoutSettingEntryInput, BuffingEntryUncheckedUpdateWithoutSettingEntryInput>
    create: XOR<BuffingEntryCreateWithoutSettingEntryInput, BuffingEntryUncheckedCreateWithoutSettingEntryInput>
  }

  export type BuffingEntryUpdateWithWhereUniqueWithoutSettingEntryInput = {
    where: BuffingEntryWhereUniqueInput
    data: XOR<BuffingEntryUpdateWithoutSettingEntryInput, BuffingEntryUncheckedUpdateWithoutSettingEntryInput>
  }

  export type BuffingEntryUpdateManyWithWhereWithoutSettingEntryInput = {
    where: BuffingEntryScalarWhereInput
    data: XOR<BuffingEntryUpdateManyMutationInput, BuffingEntryUncheckedUpdateManyWithoutSettingEntryInput>
  }

  export type AddBuffingCreateWithoutBuffingsInput = {
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    address?: string | null
    email?: string | null
  }

  export type AddBuffingUncheckedCreateWithoutBuffingsInput = {
    id?: number
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    address?: string | null
    email?: string | null
  }

  export type AddBuffingCreateOrConnectWithoutBuffingsInput = {
    where: AddBuffingWhereUniqueInput
    create: XOR<AddBuffingCreateWithoutBuffingsInput, AddBuffingUncheckedCreateWithoutBuffingsInput>
  }

  export type CastingItemsCreateWithoutBuffingEntryInput = {
    createdAt?: Date | string
    type: $Enums.CASTINGENTRYTYPE
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    scrap_weight?: number | null
    scrap_wastage?: number | null
    item: AddItemCreateNestedOneWithoutCastingItemsInput
    castingEntry: CastingEntryCreateNestedOneWithoutItemsInput
    filingEntry?: FilingEntryCreateNestedOneWithoutCastingItemInput
    settingEntry?: SettingEntryCreateNestedOneWithoutCastingItemInput
    stock?: StockCreateNestedManyWithoutCastingItemInput
    casting_customer: AddCastingCreateNestedOneWithoutCastingitemsInput
  }

  export type CastingItemsUncheckedCreateWithoutBuffingEntryInput = {
    id?: number
    createdAt?: Date | string
    type: $Enums.CASTINGENTRYTYPE
    item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    scrap_weight?: number | null
    scrap_wastage?: number | null
    casting_entry_id: number
    casting_customer_id: number
    filingEntry?: FilingEntryUncheckedCreateNestedOneWithoutCastingItemInput
    settingEntry?: SettingEntryUncheckedCreateNestedOneWithoutCastingItemInput
    stock?: StockUncheckedCreateNestedManyWithoutCastingItemInput
  }

  export type CastingItemsCreateOrConnectWithoutBuffingEntryInput = {
    where: CastingItemsWhereUniqueInput
    create: XOR<CastingItemsCreateWithoutBuffingEntryInput, CastingItemsUncheckedCreateWithoutBuffingEntryInput>
  }

  export type SettingEntryCreateWithoutBuffingEntriesInput = {
    createdAt?: Date | string
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    setting_person: AddSettingCreateNestedOneWithoutSettingsInput
    castingItem: CastingItemsCreateNestedOneWithoutSettingEntryInput
    filingEntry: FilingEntryCreateNestedOneWithoutSettingEntryInput
  }

  export type SettingEntryUncheckedCreateWithoutBuffingEntriesInput = {
    id?: number
    createdAt?: Date | string
    setting_person_id: number
    casting_item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    filing_entry_id: number
  }

  export type SettingEntryCreateOrConnectWithoutBuffingEntriesInput = {
    where: SettingEntryWhereUniqueInput
    create: XOR<SettingEntryCreateWithoutBuffingEntriesInput, SettingEntryUncheckedCreateWithoutBuffingEntriesInput>
  }

  export type FilingEntryCreateWithoutBuffingEntriesInput = {
    createdAt?: Date | string
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    stone_option: $Enums.STONEOPTION
    filing_person: AddFilingCreateNestedOneWithoutFilingsInput
    castingItem: CastingItemsCreateNestedOneWithoutFilingEntryInput
    settingEntry?: SettingEntryCreateNestedManyWithoutFilingEntryInput
  }

  export type FilingEntryUncheckedCreateWithoutBuffingEntriesInput = {
    id?: number
    createdAt?: Date | string
    filing_person_id: number
    casting_item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    stone_option: $Enums.STONEOPTION
    settingEntry?: SettingEntryUncheckedCreateNestedManyWithoutFilingEntryInput
  }

  export type FilingEntryCreateOrConnectWithoutBuffingEntriesInput = {
    where: FilingEntryWhereUniqueInput
    create: XOR<FilingEntryCreateWithoutBuffingEntriesInput, FilingEntryUncheckedCreateWithoutBuffingEntriesInput>
  }

  export type AddBuffingUpsertWithoutBuffingsInput = {
    update: XOR<AddBuffingUpdateWithoutBuffingsInput, AddBuffingUncheckedUpdateWithoutBuffingsInput>
    create: XOR<AddBuffingCreateWithoutBuffingsInput, AddBuffingUncheckedCreateWithoutBuffingsInput>
    where?: AddBuffingWhereInput
  }

  export type AddBuffingUpdateToOneWithWhereWithoutBuffingsInput = {
    where?: AddBuffingWhereInput
    data: XOR<AddBuffingUpdateWithoutBuffingsInput, AddBuffingUncheckedUpdateWithoutBuffingsInput>
  }

  export type AddBuffingUpdateWithoutBuffingsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddBuffingUncheckedUpdateWithoutBuffingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CastingItemsUpsertWithoutBuffingEntryInput = {
    update: XOR<CastingItemsUpdateWithoutBuffingEntryInput, CastingItemsUncheckedUpdateWithoutBuffingEntryInput>
    create: XOR<CastingItemsCreateWithoutBuffingEntryInput, CastingItemsUncheckedCreateWithoutBuffingEntryInput>
    where?: CastingItemsWhereInput
  }

  export type CastingItemsUpdateToOneWithWhereWithoutBuffingEntryInput = {
    where?: CastingItemsWhereInput
    data: XOR<CastingItemsUpdateWithoutBuffingEntryInput, CastingItemsUncheckedUpdateWithoutBuffingEntryInput>
  }

  export type CastingItemsUpdateWithoutBuffingEntryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumCASTINGENTRYTYPEFieldUpdateOperationsInput | $Enums.CASTINGENTRYTYPE
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
    item?: AddItemUpdateOneRequiredWithoutCastingItemsNestedInput
    castingEntry?: CastingEntryUpdateOneRequiredWithoutItemsNestedInput
    filingEntry?: FilingEntryUpdateOneWithoutCastingItemNestedInput
    settingEntry?: SettingEntryUpdateOneWithoutCastingItemNestedInput
    stock?: StockUpdateManyWithoutCastingItemNestedInput
    casting_customer?: AddCastingUpdateOneRequiredWithoutCastingitemsNestedInput
  }

  export type CastingItemsUncheckedUpdateWithoutBuffingEntryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumCASTINGENTRYTYPEFieldUpdateOperationsInput | $Enums.CASTINGENTRYTYPE
    item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
    casting_entry_id?: IntFieldUpdateOperationsInput | number
    casting_customer_id?: IntFieldUpdateOperationsInput | number
    filingEntry?: FilingEntryUncheckedUpdateOneWithoutCastingItemNestedInput
    settingEntry?: SettingEntryUncheckedUpdateOneWithoutCastingItemNestedInput
    stock?: StockUncheckedUpdateManyWithoutCastingItemNestedInput
  }

  export type SettingEntryUpsertWithoutBuffingEntriesInput = {
    update: XOR<SettingEntryUpdateWithoutBuffingEntriesInput, SettingEntryUncheckedUpdateWithoutBuffingEntriesInput>
    create: XOR<SettingEntryCreateWithoutBuffingEntriesInput, SettingEntryUncheckedCreateWithoutBuffingEntriesInput>
    where?: SettingEntryWhereInput
  }

  export type SettingEntryUpdateToOneWithWhereWithoutBuffingEntriesInput = {
    where?: SettingEntryWhereInput
    data: XOR<SettingEntryUpdateWithoutBuffingEntriesInput, SettingEntryUncheckedUpdateWithoutBuffingEntriesInput>
  }

  export type SettingEntryUpdateWithoutBuffingEntriesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    setting_person?: AddSettingUpdateOneRequiredWithoutSettingsNestedInput
    castingItem?: CastingItemsUpdateOneRequiredWithoutSettingEntryNestedInput
    filingEntry?: FilingEntryUpdateOneRequiredWithoutSettingEntryNestedInput
  }

  export type SettingEntryUncheckedUpdateWithoutBuffingEntriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setting_person_id?: IntFieldUpdateOperationsInput | number
    casting_item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    filing_entry_id?: IntFieldUpdateOperationsInput | number
  }

  export type FilingEntryUpsertWithoutBuffingEntriesInput = {
    update: XOR<FilingEntryUpdateWithoutBuffingEntriesInput, FilingEntryUncheckedUpdateWithoutBuffingEntriesInput>
    create: XOR<FilingEntryCreateWithoutBuffingEntriesInput, FilingEntryUncheckedCreateWithoutBuffingEntriesInput>
    where?: FilingEntryWhereInput
  }

  export type FilingEntryUpdateToOneWithWhereWithoutBuffingEntriesInput = {
    where?: FilingEntryWhereInput
    data: XOR<FilingEntryUpdateWithoutBuffingEntriesInput, FilingEntryUncheckedUpdateWithoutBuffingEntriesInput>
  }

  export type FilingEntryUpdateWithoutBuffingEntriesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    stone_option?: EnumSTONEOPTIONFieldUpdateOperationsInput | $Enums.STONEOPTION
    filing_person?: AddFilingUpdateOneRequiredWithoutFilingsNestedInput
    castingItem?: CastingItemsUpdateOneRequiredWithoutFilingEntryNestedInput
    settingEntry?: SettingEntryUpdateManyWithoutFilingEntryNestedInput
  }

  export type FilingEntryUncheckedUpdateWithoutBuffingEntriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filing_person_id?: IntFieldUpdateOperationsInput | number
    casting_item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    stone_option?: EnumSTONEOPTIONFieldUpdateOperationsInput | $Enums.STONEOPTION
    settingEntry?: SettingEntryUncheckedUpdateManyWithoutFilingEntryNestedInput
  }

  export type CastingItemsCreateWithoutStockInput = {
    createdAt?: Date | string
    type: $Enums.CASTINGENTRYTYPE
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    scrap_weight?: number | null
    scrap_wastage?: number | null
    item: AddItemCreateNestedOneWithoutCastingItemsInput
    castingEntry: CastingEntryCreateNestedOneWithoutItemsInput
    filingEntry?: FilingEntryCreateNestedOneWithoutCastingItemInput
    settingEntry?: SettingEntryCreateNestedOneWithoutCastingItemInput
    buffingEntry?: BuffingEntryCreateNestedOneWithoutCastingItemInput
    casting_customer: AddCastingCreateNestedOneWithoutCastingitemsInput
  }

  export type CastingItemsUncheckedCreateWithoutStockInput = {
    id?: number
    createdAt?: Date | string
    type: $Enums.CASTINGENTRYTYPE
    item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    scrap_weight?: number | null
    scrap_wastage?: number | null
    casting_entry_id: number
    casting_customer_id: number
    filingEntry?: FilingEntryUncheckedCreateNestedOneWithoutCastingItemInput
    settingEntry?: SettingEntryUncheckedCreateNestedOneWithoutCastingItemInput
    buffingEntry?: BuffingEntryUncheckedCreateNestedOneWithoutCastingItemInput
  }

  export type CastingItemsCreateOrConnectWithoutStockInput = {
    where: CastingItemsWhereUniqueInput
    create: XOR<CastingItemsCreateWithoutStockInput, CastingItemsUncheckedCreateWithoutStockInput>
  }

  export type AddItemCreateWithoutStockInput = {
    createdAt?: Date | string
    name: string
    castingItems?: CastingItemsCreateNestedManyWithoutItemInput
  }

  export type AddItemUncheckedCreateWithoutStockInput = {
    id?: number
    createdAt?: Date | string
    name: string
    castingItems?: CastingItemsUncheckedCreateNestedManyWithoutItemInput
  }

  export type AddItemCreateOrConnectWithoutStockInput = {
    where: AddItemWhereUniqueInput
    create: XOR<AddItemCreateWithoutStockInput, AddItemUncheckedCreateWithoutStockInput>
  }

  export type AddCastingCreateWithoutStockInput = {
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    address?: string | null
    email?: string | null
    entries?: CastingEntryCreateNestedManyWithoutCasting_customerInput
    castingitems?: CastingItemsCreateNestedManyWithoutCasting_customerInput
  }

  export type AddCastingUncheckedCreateWithoutStockInput = {
    id?: number
    createdAt?: Date | string
    name: string
    phoneNumber?: string | null
    address?: string | null
    email?: string | null
    entries?: CastingEntryUncheckedCreateNestedManyWithoutCasting_customerInput
    castingitems?: CastingItemsUncheckedCreateNestedManyWithoutCasting_customerInput
  }

  export type AddCastingCreateOrConnectWithoutStockInput = {
    where: AddCastingWhereUniqueInput
    create: XOR<AddCastingCreateWithoutStockInput, AddCastingUncheckedCreateWithoutStockInput>
  }

  export type CastingItemsUpsertWithoutStockInput = {
    update: XOR<CastingItemsUpdateWithoutStockInput, CastingItemsUncheckedUpdateWithoutStockInput>
    create: XOR<CastingItemsCreateWithoutStockInput, CastingItemsUncheckedCreateWithoutStockInput>
    where?: CastingItemsWhereInput
  }

  export type CastingItemsUpdateToOneWithWhereWithoutStockInput = {
    where?: CastingItemsWhereInput
    data: XOR<CastingItemsUpdateWithoutStockInput, CastingItemsUncheckedUpdateWithoutStockInput>
  }

  export type CastingItemsUpdateWithoutStockInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumCASTINGENTRYTYPEFieldUpdateOperationsInput | $Enums.CASTINGENTRYTYPE
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
    item?: AddItemUpdateOneRequiredWithoutCastingItemsNestedInput
    castingEntry?: CastingEntryUpdateOneRequiredWithoutItemsNestedInput
    filingEntry?: FilingEntryUpdateOneWithoutCastingItemNestedInput
    settingEntry?: SettingEntryUpdateOneWithoutCastingItemNestedInput
    buffingEntry?: BuffingEntryUpdateOneWithoutCastingItemNestedInput
    casting_customer?: AddCastingUpdateOneRequiredWithoutCastingitemsNestedInput
  }

  export type CastingItemsUncheckedUpdateWithoutStockInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumCASTINGENTRYTYPEFieldUpdateOperationsInput | $Enums.CASTINGENTRYTYPE
    item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
    casting_entry_id?: IntFieldUpdateOperationsInput | number
    casting_customer_id?: IntFieldUpdateOperationsInput | number
    filingEntry?: FilingEntryUncheckedUpdateOneWithoutCastingItemNestedInput
    settingEntry?: SettingEntryUncheckedUpdateOneWithoutCastingItemNestedInput
    buffingEntry?: BuffingEntryUncheckedUpdateOneWithoutCastingItemNestedInput
  }

  export type AddItemUpsertWithoutStockInput = {
    update: XOR<AddItemUpdateWithoutStockInput, AddItemUncheckedUpdateWithoutStockInput>
    create: XOR<AddItemCreateWithoutStockInput, AddItemUncheckedCreateWithoutStockInput>
    where?: AddItemWhereInput
  }

  export type AddItemUpdateToOneWithWhereWithoutStockInput = {
    where?: AddItemWhereInput
    data: XOR<AddItemUpdateWithoutStockInput, AddItemUncheckedUpdateWithoutStockInput>
  }

  export type AddItemUpdateWithoutStockInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    castingItems?: CastingItemsUpdateManyWithoutItemNestedInput
  }

  export type AddItemUncheckedUpdateWithoutStockInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    castingItems?: CastingItemsUncheckedUpdateManyWithoutItemNestedInput
  }

  export type AddCastingUpsertWithoutStockInput = {
    update: XOR<AddCastingUpdateWithoutStockInput, AddCastingUncheckedUpdateWithoutStockInput>
    create: XOR<AddCastingCreateWithoutStockInput, AddCastingUncheckedCreateWithoutStockInput>
    where?: AddCastingWhereInput
  }

  export type AddCastingUpdateToOneWithWhereWithoutStockInput = {
    where?: AddCastingWhereInput
    data: XOR<AddCastingUpdateWithoutStockInput, AddCastingUncheckedUpdateWithoutStockInput>
  }

  export type AddCastingUpdateWithoutStockInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    entries?: CastingEntryUpdateManyWithoutCasting_customerNestedInput
    castingitems?: CastingItemsUpdateManyWithoutCasting_customerNestedInput
  }

  export type AddCastingUncheckedUpdateWithoutStockInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    entries?: CastingEntryUncheckedUpdateManyWithoutCasting_customerNestedInput
    castingitems?: CastingItemsUncheckedUpdateManyWithoutCasting_customerNestedInput
  }

  export type CustomerTransactionCreateManyCustomerInput = {
    id?: number
    createdAt?: Date | string
    date: Date | string
    value: number
    type: string
    touch?: number | null
    purity?: number | null
    goldRate?: number | null
  }

  export type CustomerTransactionUpdateWithoutCustomerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    touch?: NullableFloatFieldUpdateOperationsInput | number | null
    purity?: NullableFloatFieldUpdateOperationsInput | number | null
    goldRate?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type CustomerTransactionUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    touch?: NullableFloatFieldUpdateOperationsInput | number | null
    purity?: NullableFloatFieldUpdateOperationsInput | number | null
    goldRate?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type CustomerTransactionUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    touch?: NullableFloatFieldUpdateOperationsInput | number | null
    purity?: NullableFloatFieldUpdateOperationsInput | number | null
    goldRate?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type CastingEntryCreateManyCasting_customerInput = {
    id?: number
    createdAt?: Date | string
    date: Date | string
    given_gold: number
    given_touch: number
    purity: number
    final_touch: number
    pure_value: number
    copper: number
    final_weight: number
  }

  export type CastingItemsCreateManyCasting_customerInput = {
    id?: number
    createdAt?: Date | string
    type: $Enums.CASTINGENTRYTYPE
    item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    scrap_weight?: number | null
    scrap_wastage?: number | null
    casting_entry_id: number
  }

  export type StockCreateManyCasting_customerInput = {
    id?: number
    createdAt?: Date | string
    casting_item_id: number
    item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    scrap_weight?: number | null
    scrap_wastage?: number | null
  }

  export type CastingEntryUpdateWithoutCasting_customerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    given_gold?: FloatFieldUpdateOperationsInput | number
    given_touch?: FloatFieldUpdateOperationsInput | number
    purity?: FloatFieldUpdateOperationsInput | number
    final_touch?: FloatFieldUpdateOperationsInput | number
    pure_value?: FloatFieldUpdateOperationsInput | number
    copper?: FloatFieldUpdateOperationsInput | number
    final_weight?: FloatFieldUpdateOperationsInput | number
    items?: CastingItemsUpdateManyWithoutCastingEntryNestedInput
  }

  export type CastingEntryUncheckedUpdateWithoutCasting_customerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    given_gold?: FloatFieldUpdateOperationsInput | number
    given_touch?: FloatFieldUpdateOperationsInput | number
    purity?: FloatFieldUpdateOperationsInput | number
    final_touch?: FloatFieldUpdateOperationsInput | number
    pure_value?: FloatFieldUpdateOperationsInput | number
    copper?: FloatFieldUpdateOperationsInput | number
    final_weight?: FloatFieldUpdateOperationsInput | number
    items?: CastingItemsUncheckedUpdateManyWithoutCastingEntryNestedInput
  }

  export type CastingEntryUncheckedUpdateManyWithoutCasting_customerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    given_gold?: FloatFieldUpdateOperationsInput | number
    given_touch?: FloatFieldUpdateOperationsInput | number
    purity?: FloatFieldUpdateOperationsInput | number
    final_touch?: FloatFieldUpdateOperationsInput | number
    pure_value?: FloatFieldUpdateOperationsInput | number
    copper?: FloatFieldUpdateOperationsInput | number
    final_weight?: FloatFieldUpdateOperationsInput | number
  }

  export type CastingItemsUpdateWithoutCasting_customerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumCASTINGENTRYTYPEFieldUpdateOperationsInput | $Enums.CASTINGENTRYTYPE
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
    item?: AddItemUpdateOneRequiredWithoutCastingItemsNestedInput
    castingEntry?: CastingEntryUpdateOneRequiredWithoutItemsNestedInput
    filingEntry?: FilingEntryUpdateOneWithoutCastingItemNestedInput
    settingEntry?: SettingEntryUpdateOneWithoutCastingItemNestedInput
    buffingEntry?: BuffingEntryUpdateOneWithoutCastingItemNestedInput
    stock?: StockUpdateManyWithoutCastingItemNestedInput
  }

  export type CastingItemsUncheckedUpdateWithoutCasting_customerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumCASTINGENTRYTYPEFieldUpdateOperationsInput | $Enums.CASTINGENTRYTYPE
    item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
    casting_entry_id?: IntFieldUpdateOperationsInput | number
    filingEntry?: FilingEntryUncheckedUpdateOneWithoutCastingItemNestedInput
    settingEntry?: SettingEntryUncheckedUpdateOneWithoutCastingItemNestedInput
    buffingEntry?: BuffingEntryUncheckedUpdateOneWithoutCastingItemNestedInput
    stock?: StockUncheckedUpdateManyWithoutCastingItemNestedInput
  }

  export type CastingItemsUncheckedUpdateManyWithoutCasting_customerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumCASTINGENTRYTYPEFieldUpdateOperationsInput | $Enums.CASTINGENTRYTYPE
    item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
    casting_entry_id?: IntFieldUpdateOperationsInput | number
  }

  export type StockUpdateWithoutCasting_customerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
    castingItem?: CastingItemsUpdateOneRequiredWithoutStockNestedInput
    item?: AddItemUpdateOneRequiredWithoutStockNestedInput
  }

  export type StockUncheckedUpdateWithoutCasting_customerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casting_item_id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type StockUncheckedUpdateManyWithoutCasting_customerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casting_item_id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type FilingEntryCreateManyFiling_personInput = {
    id?: number
    createdAt?: Date | string
    casting_item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    stone_option: $Enums.STONEOPTION
  }

  export type FilingEntryUpdateWithoutFiling_personInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    stone_option?: EnumSTONEOPTIONFieldUpdateOperationsInput | $Enums.STONEOPTION
    castingItem?: CastingItemsUpdateOneRequiredWithoutFilingEntryNestedInput
    settingEntry?: SettingEntryUpdateManyWithoutFilingEntryNestedInput
    buffingEntries?: BuffingEntryUpdateManyWithoutFilingEntryNestedInput
  }

  export type FilingEntryUncheckedUpdateWithoutFiling_personInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casting_item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    stone_option?: EnumSTONEOPTIONFieldUpdateOperationsInput | $Enums.STONEOPTION
    settingEntry?: SettingEntryUncheckedUpdateManyWithoutFilingEntryNestedInput
    buffingEntries?: BuffingEntryUncheckedUpdateManyWithoutFilingEntryNestedInput
  }

  export type FilingEntryUncheckedUpdateManyWithoutFiling_personInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casting_item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    stone_option?: EnumSTONEOPTIONFieldUpdateOperationsInput | $Enums.STONEOPTION
  }

  export type SettingEntryCreateManySetting_personInput = {
    id?: number
    createdAt?: Date | string
    casting_item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    filing_entry_id: number
  }

  export type SettingEntryUpdateWithoutSetting_personInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    castingItem?: CastingItemsUpdateOneRequiredWithoutSettingEntryNestedInput
    filingEntry?: FilingEntryUpdateOneRequiredWithoutSettingEntryNestedInput
    buffingEntries?: BuffingEntryUpdateManyWithoutSettingEntryNestedInput
  }

  export type SettingEntryUncheckedUpdateWithoutSetting_personInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casting_item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    filing_entry_id?: IntFieldUpdateOperationsInput | number
    buffingEntries?: BuffingEntryUncheckedUpdateManyWithoutSettingEntryNestedInput
  }

  export type SettingEntryUncheckedUpdateManyWithoutSetting_personInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casting_item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    filing_entry_id?: IntFieldUpdateOperationsInput | number
  }

  export type BuffingEntryCreateManyBuffing_personInput = {
    id?: number
    createdAt?: Date | string
    casting_item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    setting_entry_id: number
    filing_entry_id: number
    type: $Enums.STONEOPTION
  }

  export type BuffingEntryUpdateWithoutBuffing_personInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: EnumSTONEOPTIONFieldUpdateOperationsInput | $Enums.STONEOPTION
    castingItem?: CastingItemsUpdateOneRequiredWithoutBuffingEntryNestedInput
    settingEntry?: SettingEntryUpdateOneRequiredWithoutBuffingEntriesNestedInput
    filingEntry?: FilingEntryUpdateOneRequiredWithoutBuffingEntriesNestedInput
  }

  export type BuffingEntryUncheckedUpdateWithoutBuffing_personInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casting_item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    setting_entry_id?: IntFieldUpdateOperationsInput | number
    filing_entry_id?: IntFieldUpdateOperationsInput | number
    type?: EnumSTONEOPTIONFieldUpdateOperationsInput | $Enums.STONEOPTION
  }

  export type BuffingEntryUncheckedUpdateManyWithoutBuffing_personInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casting_item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    setting_entry_id?: IntFieldUpdateOperationsInput | number
    filing_entry_id?: IntFieldUpdateOperationsInput | number
    type?: EnumSTONEOPTIONFieldUpdateOperationsInput | $Enums.STONEOPTION
  }

  export type CastingItemsCreateManyItemInput = {
    id?: number
    createdAt?: Date | string
    type: $Enums.CASTINGENTRYTYPE
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    scrap_weight?: number | null
    scrap_wastage?: number | null
    casting_entry_id: number
    casting_customer_id: number
  }

  export type StockCreateManyItemInput = {
    id?: number
    createdAt?: Date | string
    casting_item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    scrap_weight?: number | null
    scrap_wastage?: number | null
    casting_customer_id: number
  }

  export type CastingItemsUpdateWithoutItemInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumCASTINGENTRYTYPEFieldUpdateOperationsInput | $Enums.CASTINGENTRYTYPE
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
    castingEntry?: CastingEntryUpdateOneRequiredWithoutItemsNestedInput
    filingEntry?: FilingEntryUpdateOneWithoutCastingItemNestedInput
    settingEntry?: SettingEntryUpdateOneWithoutCastingItemNestedInput
    buffingEntry?: BuffingEntryUpdateOneWithoutCastingItemNestedInput
    stock?: StockUpdateManyWithoutCastingItemNestedInput
    casting_customer?: AddCastingUpdateOneRequiredWithoutCastingitemsNestedInput
  }

  export type CastingItemsUncheckedUpdateWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumCASTINGENTRYTYPEFieldUpdateOperationsInput | $Enums.CASTINGENTRYTYPE
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
    casting_entry_id?: IntFieldUpdateOperationsInput | number
    casting_customer_id?: IntFieldUpdateOperationsInput | number
    filingEntry?: FilingEntryUncheckedUpdateOneWithoutCastingItemNestedInput
    settingEntry?: SettingEntryUncheckedUpdateOneWithoutCastingItemNestedInput
    buffingEntry?: BuffingEntryUncheckedUpdateOneWithoutCastingItemNestedInput
    stock?: StockUncheckedUpdateManyWithoutCastingItemNestedInput
  }

  export type CastingItemsUncheckedUpdateManyWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumCASTINGENTRYTYPEFieldUpdateOperationsInput | $Enums.CASTINGENTRYTYPE
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
    casting_entry_id?: IntFieldUpdateOperationsInput | number
    casting_customer_id?: IntFieldUpdateOperationsInput | number
  }

  export type StockUpdateWithoutItemInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
    castingItem?: CastingItemsUpdateOneRequiredWithoutStockNestedInput
    casting_customer?: AddCastingUpdateOneRequiredWithoutStockNestedInput
  }

  export type StockUncheckedUpdateWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casting_item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
    casting_customer_id?: IntFieldUpdateOperationsInput | number
  }

  export type StockUncheckedUpdateManyWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casting_item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
    casting_customer_id?: IntFieldUpdateOperationsInput | number
  }

  export type CastingItemsCreateManyCastingEntryInput = {
    id?: number
    createdAt?: Date | string
    type: $Enums.CASTINGENTRYTYPE
    item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    scrap_weight?: number | null
    scrap_wastage?: number | null
    casting_customer_id: number
  }

  export type CastingItemsUpdateWithoutCastingEntryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumCASTINGENTRYTYPEFieldUpdateOperationsInput | $Enums.CASTINGENTRYTYPE
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
    item?: AddItemUpdateOneRequiredWithoutCastingItemsNestedInput
    filingEntry?: FilingEntryUpdateOneWithoutCastingItemNestedInput
    settingEntry?: SettingEntryUpdateOneWithoutCastingItemNestedInput
    buffingEntry?: BuffingEntryUpdateOneWithoutCastingItemNestedInput
    stock?: StockUpdateManyWithoutCastingItemNestedInput
    casting_customer?: AddCastingUpdateOneRequiredWithoutCastingitemsNestedInput
  }

  export type CastingItemsUncheckedUpdateWithoutCastingEntryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumCASTINGENTRYTYPEFieldUpdateOperationsInput | $Enums.CASTINGENTRYTYPE
    item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
    casting_customer_id?: IntFieldUpdateOperationsInput | number
    filingEntry?: FilingEntryUncheckedUpdateOneWithoutCastingItemNestedInput
    settingEntry?: SettingEntryUncheckedUpdateOneWithoutCastingItemNestedInput
    buffingEntry?: BuffingEntryUncheckedUpdateOneWithoutCastingItemNestedInput
    stock?: StockUncheckedUpdateManyWithoutCastingItemNestedInput
  }

  export type CastingItemsUncheckedUpdateManyWithoutCastingEntryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumCASTINGENTRYTYPEFieldUpdateOperationsInput | $Enums.CASTINGENTRYTYPE
    item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
    casting_customer_id?: IntFieldUpdateOperationsInput | number
  }

  export type StockCreateManyCastingItemInput = {
    id?: number
    createdAt?: Date | string
    item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    scrap_weight?: number | null
    scrap_wastage?: number | null
    casting_customer_id: number
  }

  export type StockUpdateWithoutCastingItemInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
    item?: AddItemUpdateOneRequiredWithoutStockNestedInput
    casting_customer?: AddCastingUpdateOneRequiredWithoutStockNestedInput
  }

  export type StockUncheckedUpdateWithoutCastingItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
    casting_customer_id?: IntFieldUpdateOperationsInput | number
  }

  export type StockUncheckedUpdateManyWithoutCastingItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    scrap_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    scrap_wastage?: NullableFloatFieldUpdateOperationsInput | number | null
    casting_customer_id?: IntFieldUpdateOperationsInput | number
  }

  export type SettingEntryCreateManyFilingEntryInput = {
    id?: number
    createdAt?: Date | string
    setting_person_id: number
    casting_item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
  }

  export type BuffingEntryCreateManyFilingEntryInput = {
    id?: number
    createdAt?: Date | string
    buffing_person_id: number
    casting_item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    setting_entry_id: number
    type: $Enums.STONEOPTION
  }

  export type SettingEntryUpdateWithoutFilingEntryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    setting_person?: AddSettingUpdateOneRequiredWithoutSettingsNestedInput
    castingItem?: CastingItemsUpdateOneRequiredWithoutSettingEntryNestedInput
    buffingEntries?: BuffingEntryUpdateManyWithoutSettingEntryNestedInput
  }

  export type SettingEntryUncheckedUpdateWithoutFilingEntryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setting_person_id?: IntFieldUpdateOperationsInput | number
    casting_item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    buffingEntries?: BuffingEntryUncheckedUpdateManyWithoutSettingEntryNestedInput
  }

  export type SettingEntryUncheckedUpdateManyWithoutFilingEntryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setting_person_id?: IntFieldUpdateOperationsInput | number
    casting_item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type BuffingEntryUpdateWithoutFilingEntryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: EnumSTONEOPTIONFieldUpdateOperationsInput | $Enums.STONEOPTION
    buffing_person?: AddBuffingUpdateOneRequiredWithoutBuffingsNestedInput
    castingItem?: CastingItemsUpdateOneRequiredWithoutBuffingEntryNestedInput
    settingEntry?: SettingEntryUpdateOneRequiredWithoutBuffingEntriesNestedInput
  }

  export type BuffingEntryUncheckedUpdateWithoutFilingEntryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buffing_person_id?: IntFieldUpdateOperationsInput | number
    casting_item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    setting_entry_id?: IntFieldUpdateOperationsInput | number
    type?: EnumSTONEOPTIONFieldUpdateOperationsInput | $Enums.STONEOPTION
  }

  export type BuffingEntryUncheckedUpdateManyWithoutFilingEntryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buffing_person_id?: IntFieldUpdateOperationsInput | number
    casting_item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    setting_entry_id?: IntFieldUpdateOperationsInput | number
    type?: EnumSTONEOPTIONFieldUpdateOperationsInput | $Enums.STONEOPTION
  }

  export type BuffingEntryCreateManySettingEntryInput = {
    id?: number
    createdAt?: Date | string
    buffing_person_id: number
    casting_item_id: number
    weight: number
    touch: number
    item_purity: number
    remarks?: string | null
    after_weight?: number | null
    filing_entry_id: number
    type: $Enums.STONEOPTION
  }

  export type BuffingEntryUpdateWithoutSettingEntryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: EnumSTONEOPTIONFieldUpdateOperationsInput | $Enums.STONEOPTION
    buffing_person?: AddBuffingUpdateOneRequiredWithoutBuffingsNestedInput
    castingItem?: CastingItemsUpdateOneRequiredWithoutBuffingEntryNestedInput
    filingEntry?: FilingEntryUpdateOneRequiredWithoutBuffingEntriesNestedInput
  }

  export type BuffingEntryUncheckedUpdateWithoutSettingEntryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buffing_person_id?: IntFieldUpdateOperationsInput | number
    casting_item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    filing_entry_id?: IntFieldUpdateOperationsInput | number
    type?: EnumSTONEOPTIONFieldUpdateOperationsInput | $Enums.STONEOPTION
  }

  export type BuffingEntryUncheckedUpdateManyWithoutSettingEntryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buffing_person_id?: IntFieldUpdateOperationsInput | number
    casting_item_id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    touch?: FloatFieldUpdateOperationsInput | number
    item_purity?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    after_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    filing_entry_id?: IntFieldUpdateOperationsInput | number
    type?: EnumSTONEOPTIONFieldUpdateOperationsInput | $Enums.STONEOPTION
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