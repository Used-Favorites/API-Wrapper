
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model supplier
 * 
 */
export type supplier = $Result.DefaultSelection<Prisma.$supplierPayload>
/**
 * Model Products
 * 
 */
export type Products = $Result.DefaultSelection<Prisma.$ProductsPayload>
/**
 * Model Andreess
 * 
 */
export type Andreess = $Result.DefaultSelection<Prisma.$AndreessPayload>
/**
 * Model Datasheets
 * 
 */
export type Datasheets = $Result.DefaultSelection<Prisma.$DatasheetsPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Cart
 * 
 */
export type Cart = $Result.DefaultSelection<Prisma.$CartPayload>
/**
 * Model AuditTrail
 * 
 */
export type AuditTrail = $Result.DefaultSelection<Prisma.$AuditTrailPayload>
/**
 * Model Yolo
 * 
 */
export type Yolo = $Result.DefaultSelection<Prisma.$YoloPayload>
/**
 * Model YoloTraining
 * 
 */
export type YoloTraining = $Result.DefaultSelection<Prisma.$YoloTrainingPayload>
/**
 * Model YoloImages
 * 
 */
export type YoloImages = $Result.DefaultSelection<Prisma.$YoloImagesPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.supplierDelegate<ExtArgs>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **Products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.ProductsDelegate<ExtArgs>;

  /**
   * `prisma.andreess`: Exposes CRUD operations for the **Andreess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Andreesses
    * const andreesses = await prisma.andreess.findMany()
    * ```
    */
  get andreess(): Prisma.AndreessDelegate<ExtArgs>;

  /**
   * `prisma.datasheets`: Exposes CRUD operations for the **Datasheets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Datasheets
    * const datasheets = await prisma.datasheets.findMany()
    * ```
    */
  get datasheets(): Prisma.DatasheetsDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **Cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.CartDelegate<ExtArgs>;

  /**
   * `prisma.auditTrail`: Exposes CRUD operations for the **AuditTrail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditTrails
    * const auditTrails = await prisma.auditTrail.findMany()
    * ```
    */
  get auditTrail(): Prisma.AuditTrailDelegate<ExtArgs>;

  /**
   * `prisma.yolo`: Exposes CRUD operations for the **Yolo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Yolos
    * const yolos = await prisma.yolo.findMany()
    * ```
    */
  get yolo(): Prisma.YoloDelegate<ExtArgs>;

  /**
   * `prisma.yoloTraining`: Exposes CRUD operations for the **YoloTraining** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more YoloTrainings
    * const yoloTrainings = await prisma.yoloTraining.findMany()
    * ```
    */
  get yoloTraining(): Prisma.YoloTrainingDelegate<ExtArgs>;

  /**
   * `prisma.yoloImages`: Exposes CRUD operations for the **YoloImages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more YoloImages
    * const yoloImages = await prisma.yoloImages.findMany()
    * ```
    */
  get yoloImages(): Prisma.YoloImagesDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.15.0
   * Query Engine version: 12e25d8d06f6ea5a0252864dd9a03b1bb51f3022
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    supplier: 'supplier',
    Products: 'Products',
    Andreess: 'Andreess',
    Datasheets: 'Datasheets',
    Category: 'Category',
    Cart: 'Cart',
    AuditTrail: 'AuditTrail',
    Yolo: 'Yolo',
    YoloTraining: 'YoloTraining',
    YoloImages: 'YoloImages'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'supplier' | 'products' | 'andreess' | 'datasheets' | 'category' | 'cart' | 'auditTrail' | 'yolo' | 'yoloTraining' | 'yoloImages'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      supplier: {
        payload: Prisma.$supplierPayload<ExtArgs>
        fields: Prisma.supplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.supplierFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$supplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.supplierFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          findFirst: {
            args: Prisma.supplierFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$supplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.supplierFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          findMany: {
            args: Prisma.supplierFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>[]
          }
          create: {
            args: Prisma.supplierCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          createMany: {
            args: Prisma.supplierCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.supplierDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          update: {
            args: Prisma.supplierUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          deleteMany: {
            args: Prisma.supplierDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.supplierUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.supplierUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.supplierGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.supplierCountArgs<ExtArgs>,
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      Products: {
        payload: Prisma.$ProductsPayload<ExtArgs>
        fields: Prisma.ProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findFirst: {
            args: Prisma.ProductsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findMany: {
            args: Prisma.ProductsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          create: {
            args: Prisma.ProductsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          createMany: {
            args: Prisma.ProductsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          update: {
            args: Prisma.ProductsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          deleteMany: {
            args: Prisma.ProductsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.ProductsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      Andreess: {
        payload: Prisma.$AndreessPayload<ExtArgs>
        fields: Prisma.AndreessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AndreessFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AndreessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AndreessFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AndreessPayload>
          }
          findFirst: {
            args: Prisma.AndreessFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AndreessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AndreessFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AndreessPayload>
          }
          findMany: {
            args: Prisma.AndreessFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AndreessPayload>[]
          }
          create: {
            args: Prisma.AndreessCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AndreessPayload>
          }
          createMany: {
            args: Prisma.AndreessCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AndreessDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AndreessPayload>
          }
          update: {
            args: Prisma.AndreessUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AndreessPayload>
          }
          deleteMany: {
            args: Prisma.AndreessDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AndreessUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AndreessUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AndreessPayload>
          }
          aggregate: {
            args: Prisma.AndreessAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAndreess>
          }
          groupBy: {
            args: Prisma.AndreessGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AndreessGroupByOutputType>[]
          }
          count: {
            args: Prisma.AndreessCountArgs<ExtArgs>,
            result: $Utils.Optional<AndreessCountAggregateOutputType> | number
          }
        }
      }
      Datasheets: {
        payload: Prisma.$DatasheetsPayload<ExtArgs>
        fields: Prisma.DatasheetsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DatasheetsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatasheetsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DatasheetsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatasheetsPayload>
          }
          findFirst: {
            args: Prisma.DatasheetsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatasheetsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DatasheetsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatasheetsPayload>
          }
          findMany: {
            args: Prisma.DatasheetsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatasheetsPayload>[]
          }
          create: {
            args: Prisma.DatasheetsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatasheetsPayload>
          }
          createMany: {
            args: Prisma.DatasheetsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DatasheetsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatasheetsPayload>
          }
          update: {
            args: Prisma.DatasheetsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatasheetsPayload>
          }
          deleteMany: {
            args: Prisma.DatasheetsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DatasheetsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DatasheetsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatasheetsPayload>
          }
          aggregate: {
            args: Prisma.DatasheetsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDatasheets>
          }
          groupBy: {
            args: Prisma.DatasheetsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DatasheetsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DatasheetsCountArgs<ExtArgs>,
            result: $Utils.Optional<DatasheetsCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Cart: {
        payload: Prisma.$CartPayload<ExtArgs>
        fields: Prisma.CartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findFirst: {
            args: Prisma.CartFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findMany: {
            args: Prisma.CartFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          create: {
            args: Prisma.CartCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          createMany: {
            args: Prisma.CartCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CartDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          update: {
            args: Prisma.CartUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          deleteMany: {
            args: Prisma.CartDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CartUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CartUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.CartGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartCountArgs<ExtArgs>,
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      AuditTrail: {
        payload: Prisma.$AuditTrailPayload<ExtArgs>
        fields: Prisma.AuditTrailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditTrailFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditTrailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditTrailFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditTrailPayload>
          }
          findFirst: {
            args: Prisma.AuditTrailFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditTrailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditTrailFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditTrailPayload>
          }
          findMany: {
            args: Prisma.AuditTrailFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditTrailPayload>[]
          }
          create: {
            args: Prisma.AuditTrailCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditTrailPayload>
          }
          createMany: {
            args: Prisma.AuditTrailCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AuditTrailDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditTrailPayload>
          }
          update: {
            args: Prisma.AuditTrailUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditTrailPayload>
          }
          deleteMany: {
            args: Prisma.AuditTrailDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AuditTrailUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AuditTrailUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditTrailPayload>
          }
          aggregate: {
            args: Prisma.AuditTrailAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAuditTrail>
          }
          groupBy: {
            args: Prisma.AuditTrailGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AuditTrailGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditTrailCountArgs<ExtArgs>,
            result: $Utils.Optional<AuditTrailCountAggregateOutputType> | number
          }
        }
      }
      Yolo: {
        payload: Prisma.$YoloPayload<ExtArgs>
        fields: Prisma.YoloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.YoloFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YoloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.YoloFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YoloPayload>
          }
          findFirst: {
            args: Prisma.YoloFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YoloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.YoloFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YoloPayload>
          }
          findMany: {
            args: Prisma.YoloFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YoloPayload>[]
          }
          create: {
            args: Prisma.YoloCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YoloPayload>
          }
          createMany: {
            args: Prisma.YoloCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.YoloDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YoloPayload>
          }
          update: {
            args: Prisma.YoloUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YoloPayload>
          }
          deleteMany: {
            args: Prisma.YoloDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.YoloUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.YoloUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YoloPayload>
          }
          aggregate: {
            args: Prisma.YoloAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateYolo>
          }
          groupBy: {
            args: Prisma.YoloGroupByArgs<ExtArgs>,
            result: $Utils.Optional<YoloGroupByOutputType>[]
          }
          count: {
            args: Prisma.YoloCountArgs<ExtArgs>,
            result: $Utils.Optional<YoloCountAggregateOutputType> | number
          }
        }
      }
      YoloTraining: {
        payload: Prisma.$YoloTrainingPayload<ExtArgs>
        fields: Prisma.YoloTrainingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.YoloTrainingFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YoloTrainingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.YoloTrainingFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YoloTrainingPayload>
          }
          findFirst: {
            args: Prisma.YoloTrainingFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YoloTrainingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.YoloTrainingFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YoloTrainingPayload>
          }
          findMany: {
            args: Prisma.YoloTrainingFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YoloTrainingPayload>[]
          }
          create: {
            args: Prisma.YoloTrainingCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YoloTrainingPayload>
          }
          createMany: {
            args: Prisma.YoloTrainingCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.YoloTrainingDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YoloTrainingPayload>
          }
          update: {
            args: Prisma.YoloTrainingUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YoloTrainingPayload>
          }
          deleteMany: {
            args: Prisma.YoloTrainingDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.YoloTrainingUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.YoloTrainingUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YoloTrainingPayload>
          }
          aggregate: {
            args: Prisma.YoloTrainingAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateYoloTraining>
          }
          groupBy: {
            args: Prisma.YoloTrainingGroupByArgs<ExtArgs>,
            result: $Utils.Optional<YoloTrainingGroupByOutputType>[]
          }
          count: {
            args: Prisma.YoloTrainingCountArgs<ExtArgs>,
            result: $Utils.Optional<YoloTrainingCountAggregateOutputType> | number
          }
        }
      }
      YoloImages: {
        payload: Prisma.$YoloImagesPayload<ExtArgs>
        fields: Prisma.YoloImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.YoloImagesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YoloImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.YoloImagesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YoloImagesPayload>
          }
          findFirst: {
            args: Prisma.YoloImagesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YoloImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.YoloImagesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YoloImagesPayload>
          }
          findMany: {
            args: Prisma.YoloImagesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YoloImagesPayload>[]
          }
          create: {
            args: Prisma.YoloImagesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YoloImagesPayload>
          }
          createMany: {
            args: Prisma.YoloImagesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.YoloImagesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YoloImagesPayload>
          }
          update: {
            args: Prisma.YoloImagesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YoloImagesPayload>
          }
          deleteMany: {
            args: Prisma.YoloImagesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.YoloImagesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.YoloImagesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YoloImagesPayload>
          }
          aggregate: {
            args: Prisma.YoloImagesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateYoloImages>
          }
          groupBy: {
            args: Prisma.YoloImagesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<YoloImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.YoloImagesCountArgs<ExtArgs>,
            result: $Utils.Optional<YoloImagesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    cart: number
    productsBought: number
    productsSold: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | UserCountOutputTypeCountCartArgs
    productsBought?: boolean | UserCountOutputTypeCountProductsBoughtArgs
    productsSold?: boolean | UserCountOutputTypeCountProductsSoldArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProductsBoughtArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProductsSoldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }


  /**
   * Count Type SupplierCountOutputType
   */

  export type SupplierCountOutputType = {
    andreess: number
  }

  export type SupplierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    andreess?: boolean | SupplierCountOutputTypeCountAndreessArgs
  }

  // Custom InputTypes
  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierCountOutputType
     */
    select?: SupplierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountAndreessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AndreessWhereInput
  }


  /**
   * Count Type DatasheetsCountOutputType
   */

  export type DatasheetsCountOutputType = {
    products: number
  }

  export type DatasheetsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | DatasheetsCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * DatasheetsCountOutputType without action
   */
  export type DatasheetsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasheetsCountOutputType
     */
    select?: DatasheetsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DatasheetsCountOutputType without action
   */
  export type DatasheetsCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }


  /**
   * Count Type CartCountOutputType
   */

  export type CartCountOutputType = {
    product: number
  }

  export type CartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | CartCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartCountOutputType
     */
    select?: CartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    andreessId: number | null
    AuditTrailId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    andreessId: number | null
    AuditTrailId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    andreessId: number | null
    phone: string | null
    date_birth: Date | null
    AuditTrailId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    andreessId: number | null
    phone: string | null
    date_birth: Date | null
    AuditTrailId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    andreessId: number
    phone: number
    date_birth: number
    AuditTrailId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    andreessId?: true
    AuditTrailId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    andreessId?: true
    AuditTrailId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    andreessId?: true
    phone?: true
    date_birth?: true
    AuditTrailId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    andreessId?: true
    phone?: true
    date_birth?: true
    AuditTrailId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    andreessId?: true
    phone?: true
    date_birth?: true
    AuditTrailId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string
    andreessId: number | null
    phone: string | null
    date_birth: Date
    AuditTrailId: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    andreessId?: boolean
    phone?: boolean
    date_birth?: boolean
    AuditTrailId?: boolean
    andreess?: boolean | User$andreessArgs<ExtArgs>
    AuditTrail?: boolean | User$AuditTrailArgs<ExtArgs>
    cart?: boolean | User$cartArgs<ExtArgs>
    productsBought?: boolean | User$productsBoughtArgs<ExtArgs>
    productsSold?: boolean | User$productsSoldArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    andreessId?: boolean
    phone?: boolean
    date_birth?: boolean
    AuditTrailId?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    andreess?: boolean | User$andreessArgs<ExtArgs>
    AuditTrail?: boolean | User$AuditTrailArgs<ExtArgs>
    cart?: boolean | User$cartArgs<ExtArgs>
    productsBought?: boolean | User$productsBoughtArgs<ExtArgs>
    productsSold?: boolean | User$productsSoldArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      andreess: Prisma.$AndreessPayload<ExtArgs> | null
      AuditTrail: Prisma.$AuditTrailPayload<ExtArgs> | null
      cart: Prisma.$CartPayload<ExtArgs>[]
      productsBought: Prisma.$ProductsPayload<ExtArgs>[]
      productsSold: Prisma.$ProductsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string
      andreessId: number | null
      phone: string | null
      date_birth: Date
      AuditTrailId: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    andreess<T extends User$andreessArgs<ExtArgs> = {}>(args?: Subset<T, User$andreessArgs<ExtArgs>>): Prisma__AndreessClient<$Result.GetResult<Prisma.$AndreessPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    AuditTrail<T extends User$AuditTrailArgs<ExtArgs> = {}>(args?: Subset<T, User$AuditTrailArgs<ExtArgs>>): Prisma__AuditTrailClient<$Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    cart<T extends User$cartArgs<ExtArgs> = {}>(args?: Subset<T, User$cartArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, 'findMany'> | Null>;

    productsBought<T extends User$productsBoughtArgs<ExtArgs> = {}>(args?: Subset<T, User$productsBoughtArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'findMany'> | Null>;

    productsSold<T extends User$productsSoldArgs<ExtArgs> = {}>(args?: Subset<T, User$productsSoldArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly andreessId: FieldRef<"User", 'Int'>
    readonly phone: FieldRef<"User", 'String'>
    readonly date_birth: FieldRef<"User", 'DateTime'>
    readonly AuditTrailId: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.andreess
   */
  export type User$andreessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Andreess
     */
    select?: AndreessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AndreessInclude<ExtArgs> | null
    where?: AndreessWhereInput
  }

  /**
   * User.AuditTrail
   */
  export type User$AuditTrailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTrail
     */
    select?: AuditTrailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTrailInclude<ExtArgs> | null
    where?: AuditTrailWhereInput
  }

  /**
   * User.cart
   */
  export type User$cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    where?: CartWhereInput
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    cursor?: CartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * User.productsBought
   */
  export type User$productsBoughtArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * User.productsSold
   */
  export type User$productsSoldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierAvgAggregateOutputType = {
    id: number | null
  }

  export type SupplierSumAggregateOutputType = {
    id: number | null
  }

  export type SupplierMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    _all: number
  }


  export type SupplierAvgAggregateInputType = {
    id?: true
  }

  export type SupplierSumAggregateInputType = {
    id?: true
  }

  export type SupplierMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which supplier to aggregate.
     */
    where?: supplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: supplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type supplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: supplierWhereInput
    orderBy?: supplierOrderByWithAggregationInput | supplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: supplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _avg?: SupplierAvgAggregateInputType
    _sum?: SupplierSumAggregateInputType
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends supplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type supplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    andreess?: boolean | supplier$andreessArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>


  export type supplierSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
  }

  export type supplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    andreess?: boolean | supplier$andreessArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $supplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "supplier"
    objects: {
      andreess: Prisma.$AndreessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type supplierGetPayload<S extends boolean | null | undefined | supplierDefaultArgs> = $Result.GetResult<Prisma.$supplierPayload, S>

  type supplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<supplierFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface supplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['supplier'], meta: { name: 'supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {supplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends supplierFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, supplierFindUniqueArgs<ExtArgs>>
    ): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {supplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends supplierFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, supplierFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends supplierFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, supplierFindFirstArgs<ExtArgs>>
    ): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends supplierFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, supplierFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends supplierFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, supplierFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Supplier.
     * @param {supplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
    **/
    create<T extends supplierCreateArgs<ExtArgs>>(
      args: SelectSubset<T, supplierCreateArgs<ExtArgs>>
    ): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Suppliers.
     * @param {supplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends supplierCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, supplierCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Supplier.
     * @param {supplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
    **/
    delete<T extends supplierDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, supplierDeleteArgs<ExtArgs>>
    ): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Supplier.
     * @param {supplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends supplierUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, supplierUpdateArgs<ExtArgs>>
    ): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Suppliers.
     * @param {supplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends supplierDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, supplierDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends supplierUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, supplierUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Supplier.
     * @param {supplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
    **/
    upsert<T extends supplierUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, supplierUpsertArgs<ExtArgs>>
    ): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends supplierCountArgs>(
      args?: Subset<T, supplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierGroupByArgs} args - Group by arguments.
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
      T extends supplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: supplierGroupByArgs['orderBy'] }
        : { orderBy?: supplierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, supplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the supplier model
   */
  readonly fields: supplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__supplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    andreess<T extends supplier$andreessArgs<ExtArgs> = {}>(args?: Subset<T, supplier$andreessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AndreessPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the supplier model
   */ 
  interface supplierFieldRefs {
    readonly id: FieldRef<"supplier", 'Int'>
    readonly name: FieldRef<"supplier", 'String'>
    readonly email: FieldRef<"supplier", 'String'>
    readonly phone: FieldRef<"supplier", 'String'>
  }
    

  // Custom InputTypes
  /**
   * supplier findUnique
   */
  export type supplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * Filter, which supplier to fetch.
     */
    where: supplierWhereUniqueInput
  }

  /**
   * supplier findUniqueOrThrow
   */
  export type supplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * Filter, which supplier to fetch.
     */
    where: supplierWhereUniqueInput
  }

  /**
   * supplier findFirst
   */
  export type supplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * Filter, which supplier to fetch.
     */
    where?: supplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for suppliers.
     */
    cursor?: supplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * supplier findFirstOrThrow
   */
  export type supplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * Filter, which supplier to fetch.
     */
    where?: supplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for suppliers.
     */
    cursor?: supplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * supplier findMany
   */
  export type supplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * Filter, which suppliers to fetch.
     */
    where?: supplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing suppliers.
     */
    cursor?: supplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * supplier create
   */
  export type supplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * The data needed to create a supplier.
     */
    data: XOR<supplierCreateInput, supplierUncheckedCreateInput>
  }

  /**
   * supplier createMany
   */
  export type supplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many suppliers.
     */
    data: supplierCreateManyInput | supplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * supplier update
   */
  export type supplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * The data needed to update a supplier.
     */
    data: XOR<supplierUpdateInput, supplierUncheckedUpdateInput>
    /**
     * Choose, which supplier to update.
     */
    where: supplierWhereUniqueInput
  }

  /**
   * supplier updateMany
   */
  export type supplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update suppliers.
     */
    data: XOR<supplierUpdateManyMutationInput, supplierUncheckedUpdateManyInput>
    /**
     * Filter which suppliers to update
     */
    where?: supplierWhereInput
  }

  /**
   * supplier upsert
   */
  export type supplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * The filter to search for the supplier to update in case it exists.
     */
    where: supplierWhereUniqueInput
    /**
     * In case the supplier found by the `where` argument doesn't exist, create a new supplier with this data.
     */
    create: XOR<supplierCreateInput, supplierUncheckedCreateInput>
    /**
     * In case the supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<supplierUpdateInput, supplierUncheckedUpdateInput>
  }

  /**
   * supplier delete
   */
  export type supplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * Filter which supplier to delete.
     */
    where: supplierWhereUniqueInput
  }

  /**
   * supplier deleteMany
   */
  export type supplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which suppliers to delete
     */
    where?: supplierWhereInput
  }

  /**
   * supplier.andreess
   */
  export type supplier$andreessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Andreess
     */
    select?: AndreessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AndreessInclude<ExtArgs> | null
    where?: AndreessWhereInput
    orderBy?: AndreessOrderByWithRelationInput | AndreessOrderByWithRelationInput[]
    cursor?: AndreessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AndreessScalarFieldEnum | AndreessScalarFieldEnum[]
  }

  /**
   * supplier without action
   */
  export type supplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
  }


  /**
   * Model Products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    sellerId: number | null
    buyerId: number | null
    datasheetsId: number | null
    price: number | null
    auditTrailId: number | null
    size: number | null
    salePrice: Decimal | null
    repairCost: Decimal | null
    finalPrice: Decimal | null
    interestedParties: number | null
    supplierId: number | null
    cartId: number | null
  }

  export type ProductsSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    sellerId: number | null
    buyerId: number | null
    datasheetsId: number | null
    price: number | null
    auditTrailId: number | null
    size: number | null
    salePrice: Decimal | null
    repairCost: Decimal | null
    finalPrice: Decimal | null
    interestedParties: number | null
    supplierId: number | null
    cartId: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: number | null
    categoryId: number | null
    sellerId: number | null
    buyerId: number | null
    datasheetsId: number | null
    name: string | null
    price: number | null
    description: string | null
    image: string | null
    auditTrailId: number | null
    size: number | null
    salePrice: Decimal | null
    repairCost: Decimal | null
    finalPrice: Decimal | null
    repaired: boolean | null
    lastModified: Date | null
    interestedParties: number | null
    brand: string | null
    model: string | null
    condition: string | null
    supplierId: number | null
    cartId: number | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: number | null
    categoryId: number | null
    sellerId: number | null
    buyerId: number | null
    datasheetsId: number | null
    name: string | null
    price: number | null
    description: string | null
    image: string | null
    auditTrailId: number | null
    size: number | null
    salePrice: Decimal | null
    repairCost: Decimal | null
    finalPrice: Decimal | null
    repaired: boolean | null
    lastModified: Date | null
    interestedParties: number | null
    brand: string | null
    model: string | null
    condition: string | null
    supplierId: number | null
    cartId: number | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    categoryId: number
    sellerId: number
    buyerId: number
    datasheetsId: number
    name: number
    price: number
    description: number
    image: number
    auditTrailId: number
    size: number
    salePrice: number
    repairCost: number
    finalPrice: number
    repaired: number
    lastModified: number
    interestedParties: number
    brand: number
    model: number
    condition: number
    supplierId: number
    cartId: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
    categoryId?: true
    sellerId?: true
    buyerId?: true
    datasheetsId?: true
    price?: true
    auditTrailId?: true
    size?: true
    salePrice?: true
    repairCost?: true
    finalPrice?: true
    interestedParties?: true
    supplierId?: true
    cartId?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
    categoryId?: true
    sellerId?: true
    buyerId?: true
    datasheetsId?: true
    price?: true
    auditTrailId?: true
    size?: true
    salePrice?: true
    repairCost?: true
    finalPrice?: true
    interestedParties?: true
    supplierId?: true
    cartId?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    categoryId?: true
    sellerId?: true
    buyerId?: true
    datasheetsId?: true
    name?: true
    price?: true
    description?: true
    image?: true
    auditTrailId?: true
    size?: true
    salePrice?: true
    repairCost?: true
    finalPrice?: true
    repaired?: true
    lastModified?: true
    interestedParties?: true
    brand?: true
    model?: true
    condition?: true
    supplierId?: true
    cartId?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    categoryId?: true
    sellerId?: true
    buyerId?: true
    datasheetsId?: true
    name?: true
    price?: true
    description?: true
    image?: true
    auditTrailId?: true
    size?: true
    salePrice?: true
    repairCost?: true
    finalPrice?: true
    repaired?: true
    lastModified?: true
    interestedParties?: true
    brand?: true
    model?: true
    condition?: true
    supplierId?: true
    cartId?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    categoryId?: true
    sellerId?: true
    buyerId?: true
    datasheetsId?: true
    name?: true
    price?: true
    description?: true
    image?: true
    auditTrailId?: true
    size?: true
    salePrice?: true
    repairCost?: true
    finalPrice?: true
    repaired?: true
    lastModified?: true
    interestedParties?: true
    brand?: true
    model?: true
    condition?: true
    supplierId?: true
    cartId?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to aggregate.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithAggregationInput | ProductsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: ProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: number
    categoryId: number | null
    sellerId: number
    buyerId: number
    datasheetsId: number | null
    name: string
    price: number
    description: string
    image: string
    auditTrailId: number
    size: number
    salePrice: Decimal
    repairCost: Decimal
    finalPrice: Decimal
    repaired: boolean
    lastModified: Date
    interestedParties: number
    brand: string
    model: string
    condition: string
    supplierId: number
    cartId: number | null
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type ProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    sellerId?: boolean
    buyerId?: boolean
    datasheetsId?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    image?: boolean
    auditTrailId?: boolean
    size?: boolean
    salePrice?: boolean
    repairCost?: boolean
    finalPrice?: boolean
    repaired?: boolean
    lastModified?: boolean
    interestedParties?: boolean
    brand?: boolean
    model?: boolean
    condition?: boolean
    supplierId?: boolean
    cartId?: boolean
    auditTrail?: boolean | AuditTrailDefaultArgs<ExtArgs>
    datasheet?: boolean | Products$datasheetArgs<ExtArgs>
    category?: boolean | Products$categoryArgs<ExtArgs>
    seller?: boolean | Products$sellerArgs<ExtArgs>
    buyer?: boolean | Products$buyerArgs<ExtArgs>
    cart?: boolean | Products$cartArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>


  export type ProductsSelectScalar = {
    id?: boolean
    categoryId?: boolean
    sellerId?: boolean
    buyerId?: boolean
    datasheetsId?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    image?: boolean
    auditTrailId?: boolean
    size?: boolean
    salePrice?: boolean
    repairCost?: boolean
    finalPrice?: boolean
    repaired?: boolean
    lastModified?: boolean
    interestedParties?: boolean
    brand?: boolean
    model?: boolean
    condition?: boolean
    supplierId?: boolean
    cartId?: boolean
  }

  export type ProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditTrail?: boolean | AuditTrailDefaultArgs<ExtArgs>
    datasheet?: boolean | Products$datasheetArgs<ExtArgs>
    category?: boolean | Products$categoryArgs<ExtArgs>
    seller?: boolean | Products$sellerArgs<ExtArgs>
    buyer?: boolean | Products$buyerArgs<ExtArgs>
    cart?: boolean | Products$cartArgs<ExtArgs>
  }

  export type $ProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Products"
    objects: {
      auditTrail: Prisma.$AuditTrailPayload<ExtArgs>
      datasheet: Prisma.$DatasheetsPayload<ExtArgs> | null
      category: Prisma.$CategoryPayload<ExtArgs> | null
      seller: Prisma.$UserPayload<ExtArgs> | null
      buyer: Prisma.$UserPayload<ExtArgs> | null
      cart: Prisma.$CartPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      categoryId: number | null
      sellerId: number
      buyerId: number
      datasheetsId: number | null
      name: string
      price: number
      description: string
      image: string
      auditTrailId: number
      size: number
      salePrice: Prisma.Decimal
      repairCost: Prisma.Decimal
      finalPrice: Prisma.Decimal
      repaired: boolean
      lastModified: Date
      interestedParties: number
      brand: string
      model: string
      condition: string
      supplierId: number
      cartId: number | null
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type ProductsGetPayload<S extends boolean | null | undefined | ProductsDefaultArgs> = $Result.GetResult<Prisma.$ProductsPayload, S>

  type ProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface ProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Products'], meta: { name: 'Products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {ProductsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductsFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductsFindFirstArgs<ExtArgs>>
    ): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Products.
     * @param {ProductsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
    **/
    create<T extends ProductsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductsCreateArgs<ExtArgs>>
    ): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products.
     * @param {ProductsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ProductsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Products.
     * @param {ProductsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
    **/
    delete<T extends ProductsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductsDeleteArgs<ExtArgs>>
    ): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Products.
     * @param {ProductsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductsUpdateArgs<ExtArgs>>
    ): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Products.
     * @param {ProductsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
    **/
    upsert<T extends ProductsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductsUpsertArgs<ExtArgs>>
    ): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductsCountArgs>(
      args?: Subset<T, ProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
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
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Products model
   */
  readonly fields: ProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    auditTrail<T extends AuditTrailDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuditTrailDefaultArgs<ExtArgs>>): Prisma__AuditTrailClient<$Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    datasheet<T extends Products$datasheetArgs<ExtArgs> = {}>(args?: Subset<T, Products$datasheetArgs<ExtArgs>>): Prisma__DatasheetsClient<$Result.GetResult<Prisma.$DatasheetsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    category<T extends Products$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Products$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    seller<T extends Products$sellerArgs<ExtArgs> = {}>(args?: Subset<T, Products$sellerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    buyer<T extends Products$buyerArgs<ExtArgs> = {}>(args?: Subset<T, Products$buyerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    cart<T extends Products$cartArgs<ExtArgs> = {}>(args?: Subset<T, Products$cartArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Products model
   */ 
  interface ProductsFieldRefs {
    readonly id: FieldRef<"Products", 'Int'>
    readonly categoryId: FieldRef<"Products", 'Int'>
    readonly sellerId: FieldRef<"Products", 'Int'>
    readonly buyerId: FieldRef<"Products", 'Int'>
    readonly datasheetsId: FieldRef<"Products", 'Int'>
    readonly name: FieldRef<"Products", 'String'>
    readonly price: FieldRef<"Products", 'Float'>
    readonly description: FieldRef<"Products", 'String'>
    readonly image: FieldRef<"Products", 'String'>
    readonly auditTrailId: FieldRef<"Products", 'Int'>
    readonly size: FieldRef<"Products", 'Float'>
    readonly salePrice: FieldRef<"Products", 'Decimal'>
    readonly repairCost: FieldRef<"Products", 'Decimal'>
    readonly finalPrice: FieldRef<"Products", 'Decimal'>
    readonly repaired: FieldRef<"Products", 'Boolean'>
    readonly lastModified: FieldRef<"Products", 'DateTime'>
    readonly interestedParties: FieldRef<"Products", 'Int'>
    readonly brand: FieldRef<"Products", 'String'>
    readonly model: FieldRef<"Products", 'String'>
    readonly condition: FieldRef<"Products", 'String'>
    readonly supplierId: FieldRef<"Products", 'Int'>
    readonly cartId: FieldRef<"Products", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Products findUnique
   */
  export type ProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findUniqueOrThrow
   */
  export type ProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findFirst
   */
  export type ProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findFirstOrThrow
   */
  export type ProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findMany
   */
  export type ProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products create
   */
  export type ProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a Products.
     */
    data: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
  }

  /**
   * Products createMany
   */
  export type ProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products update
   */
  export type ProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a Products.
     */
    data: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
    /**
     * Choose, which Products to update.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products updateMany
   */
  export type ProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
  }

  /**
   * Products upsert
   */
  export type ProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the Products to update in case it exists.
     */
    where: ProductsWhereUniqueInput
    /**
     * In case the Products found by the `where` argument doesn't exist, create a new Products with this data.
     */
    create: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
    /**
     * In case the Products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
  }

  /**
   * Products delete
   */
  export type ProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter which Products to delete.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products deleteMany
   */
  export type ProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductsWhereInput
  }

  /**
   * Products.datasheet
   */
  export type Products$datasheetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datasheets
     */
    select?: DatasheetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasheetsInclude<ExtArgs> | null
    where?: DatasheetsWhereInput
  }

  /**
   * Products.category
   */
  export type Products$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Products.seller
   */
  export type Products$sellerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Products.buyer
   */
  export type Products$buyerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Products.cart
   */
  export type Products$cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    where?: CartWhereInput
  }

  /**
   * Products without action
   */
  export type ProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
  }


  /**
   * Model Andreess
   */

  export type AggregateAndreess = {
    _count: AndreessCountAggregateOutputType | null
    _avg: AndreessAvgAggregateOutputType | null
    _sum: AndreessSumAggregateOutputType | null
    _min: AndreessMinAggregateOutputType | null
    _max: AndreessMaxAggregateOutputType | null
  }

  export type AndreessAvgAggregateOutputType = {
    id: number | null
    supplierId: number | null
  }

  export type AndreessSumAggregateOutputType = {
    id: number | null
    supplierId: number | null
  }

  export type AndreessMinAggregateOutputType = {
    id: number | null
    street: string | null
    number: string | null
    city: string | null
    state: string | null
    cep: string | null
    supplierId: number | null
  }

  export type AndreessMaxAggregateOutputType = {
    id: number | null
    street: string | null
    number: string | null
    city: string | null
    state: string | null
    cep: string | null
    supplierId: number | null
  }

  export type AndreessCountAggregateOutputType = {
    id: number
    street: number
    number: number
    city: number
    state: number
    cep: number
    supplierId: number
    _all: number
  }


  export type AndreessAvgAggregateInputType = {
    id?: true
    supplierId?: true
  }

  export type AndreessSumAggregateInputType = {
    id?: true
    supplierId?: true
  }

  export type AndreessMinAggregateInputType = {
    id?: true
    street?: true
    number?: true
    city?: true
    state?: true
    cep?: true
    supplierId?: true
  }

  export type AndreessMaxAggregateInputType = {
    id?: true
    street?: true
    number?: true
    city?: true
    state?: true
    cep?: true
    supplierId?: true
  }

  export type AndreessCountAggregateInputType = {
    id?: true
    street?: true
    number?: true
    city?: true
    state?: true
    cep?: true
    supplierId?: true
    _all?: true
  }

  export type AndreessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Andreess to aggregate.
     */
    where?: AndreessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Andreesses to fetch.
     */
    orderBy?: AndreessOrderByWithRelationInput | AndreessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AndreessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Andreesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Andreesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Andreesses
    **/
    _count?: true | AndreessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AndreessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AndreessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AndreessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AndreessMaxAggregateInputType
  }

  export type GetAndreessAggregateType<T extends AndreessAggregateArgs> = {
        [P in keyof T & keyof AggregateAndreess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAndreess[P]>
      : GetScalarType<T[P], AggregateAndreess[P]>
  }




  export type AndreessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AndreessWhereInput
    orderBy?: AndreessOrderByWithAggregationInput | AndreessOrderByWithAggregationInput[]
    by: AndreessScalarFieldEnum[] | AndreessScalarFieldEnum
    having?: AndreessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AndreessCountAggregateInputType | true
    _avg?: AndreessAvgAggregateInputType
    _sum?: AndreessSumAggregateInputType
    _min?: AndreessMinAggregateInputType
    _max?: AndreessMaxAggregateInputType
  }

  export type AndreessGroupByOutputType = {
    id: number
    street: string
    number: string
    city: string
    state: string
    cep: string
    supplierId: number | null
    _count: AndreessCountAggregateOutputType | null
    _avg: AndreessAvgAggregateOutputType | null
    _sum: AndreessSumAggregateOutputType | null
    _min: AndreessMinAggregateOutputType | null
    _max: AndreessMaxAggregateOutputType | null
  }

  type GetAndreessGroupByPayload<T extends AndreessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AndreessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AndreessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AndreessGroupByOutputType[P]>
            : GetScalarType<T[P], AndreessGroupByOutputType[P]>
        }
      >
    >


  export type AndreessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    number?: boolean
    city?: boolean
    state?: boolean
    cep?: boolean
    supplierId?: boolean
    supplier?: boolean | Andreess$supplierArgs<ExtArgs>
    User?: boolean | Andreess$UserArgs<ExtArgs>
  }, ExtArgs["result"]["andreess"]>


  export type AndreessSelectScalar = {
    id?: boolean
    street?: boolean
    number?: boolean
    city?: boolean
    state?: boolean
    cep?: boolean
    supplierId?: boolean
  }

  export type AndreessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | Andreess$supplierArgs<ExtArgs>
    User?: boolean | Andreess$UserArgs<ExtArgs>
  }

  export type $AndreessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Andreess"
    objects: {
      supplier: Prisma.$supplierPayload<ExtArgs> | null
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      street: string
      number: string
      city: string
      state: string
      cep: string
      supplierId: number | null
    }, ExtArgs["result"]["andreess"]>
    composites: {}
  }

  type AndreessGetPayload<S extends boolean | null | undefined | AndreessDefaultArgs> = $Result.GetResult<Prisma.$AndreessPayload, S>

  type AndreessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AndreessFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AndreessCountAggregateInputType | true
    }

  export interface AndreessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Andreess'], meta: { name: 'Andreess' } }
    /**
     * Find zero or one Andreess that matches the filter.
     * @param {AndreessFindUniqueArgs} args - Arguments to find a Andreess
     * @example
     * // Get one Andreess
     * const andreess = await prisma.andreess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AndreessFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AndreessFindUniqueArgs<ExtArgs>>
    ): Prisma__AndreessClient<$Result.GetResult<Prisma.$AndreessPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Andreess that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AndreessFindUniqueOrThrowArgs} args - Arguments to find a Andreess
     * @example
     * // Get one Andreess
     * const andreess = await prisma.andreess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AndreessFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AndreessFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AndreessClient<$Result.GetResult<Prisma.$AndreessPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Andreess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AndreessFindFirstArgs} args - Arguments to find a Andreess
     * @example
     * // Get one Andreess
     * const andreess = await prisma.andreess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AndreessFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AndreessFindFirstArgs<ExtArgs>>
    ): Prisma__AndreessClient<$Result.GetResult<Prisma.$AndreessPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Andreess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AndreessFindFirstOrThrowArgs} args - Arguments to find a Andreess
     * @example
     * // Get one Andreess
     * const andreess = await prisma.andreess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AndreessFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AndreessFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AndreessClient<$Result.GetResult<Prisma.$AndreessPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Andreesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AndreessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Andreesses
     * const andreesses = await prisma.andreess.findMany()
     * 
     * // Get first 10 Andreesses
     * const andreesses = await prisma.andreess.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const andreessWithIdOnly = await prisma.andreess.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AndreessFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AndreessFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AndreessPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Andreess.
     * @param {AndreessCreateArgs} args - Arguments to create a Andreess.
     * @example
     * // Create one Andreess
     * const Andreess = await prisma.andreess.create({
     *   data: {
     *     // ... data to create a Andreess
     *   }
     * })
     * 
    **/
    create<T extends AndreessCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AndreessCreateArgs<ExtArgs>>
    ): Prisma__AndreessClient<$Result.GetResult<Prisma.$AndreessPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Andreesses.
     * @param {AndreessCreateManyArgs} args - Arguments to create many Andreesses.
     * @example
     * // Create many Andreesses
     * const andreess = await prisma.andreess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends AndreessCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AndreessCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Andreess.
     * @param {AndreessDeleteArgs} args - Arguments to delete one Andreess.
     * @example
     * // Delete one Andreess
     * const Andreess = await prisma.andreess.delete({
     *   where: {
     *     // ... filter to delete one Andreess
     *   }
     * })
     * 
    **/
    delete<T extends AndreessDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AndreessDeleteArgs<ExtArgs>>
    ): Prisma__AndreessClient<$Result.GetResult<Prisma.$AndreessPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Andreess.
     * @param {AndreessUpdateArgs} args - Arguments to update one Andreess.
     * @example
     * // Update one Andreess
     * const andreess = await prisma.andreess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AndreessUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AndreessUpdateArgs<ExtArgs>>
    ): Prisma__AndreessClient<$Result.GetResult<Prisma.$AndreessPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Andreesses.
     * @param {AndreessDeleteManyArgs} args - Arguments to filter Andreesses to delete.
     * @example
     * // Delete a few Andreesses
     * const { count } = await prisma.andreess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AndreessDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AndreessDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Andreesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AndreessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Andreesses
     * const andreess = await prisma.andreess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AndreessUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AndreessUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Andreess.
     * @param {AndreessUpsertArgs} args - Arguments to update or create a Andreess.
     * @example
     * // Update or create a Andreess
     * const andreess = await prisma.andreess.upsert({
     *   create: {
     *     // ... data to create a Andreess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Andreess we want to update
     *   }
     * })
    **/
    upsert<T extends AndreessUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AndreessUpsertArgs<ExtArgs>>
    ): Prisma__AndreessClient<$Result.GetResult<Prisma.$AndreessPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Andreesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AndreessCountArgs} args - Arguments to filter Andreesses to count.
     * @example
     * // Count the number of Andreesses
     * const count = await prisma.andreess.count({
     *   where: {
     *     // ... the filter for the Andreesses we want to count
     *   }
     * })
    **/
    count<T extends AndreessCountArgs>(
      args?: Subset<T, AndreessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AndreessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Andreess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AndreessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AndreessAggregateArgs>(args: Subset<T, AndreessAggregateArgs>): Prisma.PrismaPromise<GetAndreessAggregateType<T>>

    /**
     * Group by Andreess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AndreessGroupByArgs} args - Group by arguments.
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
      T extends AndreessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AndreessGroupByArgs['orderBy'] }
        : { orderBy?: AndreessGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AndreessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAndreessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Andreess model
   */
  readonly fields: AndreessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Andreess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AndreessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    supplier<T extends Andreess$supplierArgs<ExtArgs> = {}>(args?: Subset<T, Andreess$supplierArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    User<T extends Andreess$UserArgs<ExtArgs> = {}>(args?: Subset<T, Andreess$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Andreess model
   */ 
  interface AndreessFieldRefs {
    readonly id: FieldRef<"Andreess", 'Int'>
    readonly street: FieldRef<"Andreess", 'String'>
    readonly number: FieldRef<"Andreess", 'String'>
    readonly city: FieldRef<"Andreess", 'String'>
    readonly state: FieldRef<"Andreess", 'String'>
    readonly cep: FieldRef<"Andreess", 'String'>
    readonly supplierId: FieldRef<"Andreess", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Andreess findUnique
   */
  export type AndreessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Andreess
     */
    select?: AndreessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AndreessInclude<ExtArgs> | null
    /**
     * Filter, which Andreess to fetch.
     */
    where: AndreessWhereUniqueInput
  }

  /**
   * Andreess findUniqueOrThrow
   */
  export type AndreessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Andreess
     */
    select?: AndreessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AndreessInclude<ExtArgs> | null
    /**
     * Filter, which Andreess to fetch.
     */
    where: AndreessWhereUniqueInput
  }

  /**
   * Andreess findFirst
   */
  export type AndreessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Andreess
     */
    select?: AndreessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AndreessInclude<ExtArgs> | null
    /**
     * Filter, which Andreess to fetch.
     */
    where?: AndreessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Andreesses to fetch.
     */
    orderBy?: AndreessOrderByWithRelationInput | AndreessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Andreesses.
     */
    cursor?: AndreessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Andreesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Andreesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Andreesses.
     */
    distinct?: AndreessScalarFieldEnum | AndreessScalarFieldEnum[]
  }

  /**
   * Andreess findFirstOrThrow
   */
  export type AndreessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Andreess
     */
    select?: AndreessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AndreessInclude<ExtArgs> | null
    /**
     * Filter, which Andreess to fetch.
     */
    where?: AndreessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Andreesses to fetch.
     */
    orderBy?: AndreessOrderByWithRelationInput | AndreessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Andreesses.
     */
    cursor?: AndreessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Andreesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Andreesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Andreesses.
     */
    distinct?: AndreessScalarFieldEnum | AndreessScalarFieldEnum[]
  }

  /**
   * Andreess findMany
   */
  export type AndreessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Andreess
     */
    select?: AndreessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AndreessInclude<ExtArgs> | null
    /**
     * Filter, which Andreesses to fetch.
     */
    where?: AndreessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Andreesses to fetch.
     */
    orderBy?: AndreessOrderByWithRelationInput | AndreessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Andreesses.
     */
    cursor?: AndreessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Andreesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Andreesses.
     */
    skip?: number
    distinct?: AndreessScalarFieldEnum | AndreessScalarFieldEnum[]
  }

  /**
   * Andreess create
   */
  export type AndreessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Andreess
     */
    select?: AndreessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AndreessInclude<ExtArgs> | null
    /**
     * The data needed to create a Andreess.
     */
    data: XOR<AndreessCreateInput, AndreessUncheckedCreateInput>
  }

  /**
   * Andreess createMany
   */
  export type AndreessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Andreesses.
     */
    data: AndreessCreateManyInput | AndreessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Andreess update
   */
  export type AndreessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Andreess
     */
    select?: AndreessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AndreessInclude<ExtArgs> | null
    /**
     * The data needed to update a Andreess.
     */
    data: XOR<AndreessUpdateInput, AndreessUncheckedUpdateInput>
    /**
     * Choose, which Andreess to update.
     */
    where: AndreessWhereUniqueInput
  }

  /**
   * Andreess updateMany
   */
  export type AndreessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Andreesses.
     */
    data: XOR<AndreessUpdateManyMutationInput, AndreessUncheckedUpdateManyInput>
    /**
     * Filter which Andreesses to update
     */
    where?: AndreessWhereInput
  }

  /**
   * Andreess upsert
   */
  export type AndreessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Andreess
     */
    select?: AndreessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AndreessInclude<ExtArgs> | null
    /**
     * The filter to search for the Andreess to update in case it exists.
     */
    where: AndreessWhereUniqueInput
    /**
     * In case the Andreess found by the `where` argument doesn't exist, create a new Andreess with this data.
     */
    create: XOR<AndreessCreateInput, AndreessUncheckedCreateInput>
    /**
     * In case the Andreess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AndreessUpdateInput, AndreessUncheckedUpdateInput>
  }

  /**
   * Andreess delete
   */
  export type AndreessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Andreess
     */
    select?: AndreessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AndreessInclude<ExtArgs> | null
    /**
     * Filter which Andreess to delete.
     */
    where: AndreessWhereUniqueInput
  }

  /**
   * Andreess deleteMany
   */
  export type AndreessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Andreesses to delete
     */
    where?: AndreessWhereInput
  }

  /**
   * Andreess.supplier
   */
  export type Andreess$supplierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    where?: supplierWhereInput
  }

  /**
   * Andreess.User
   */
  export type Andreess$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Andreess without action
   */
  export type AndreessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Andreess
     */
    select?: AndreessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AndreessInclude<ExtArgs> | null
  }


  /**
   * Model Datasheets
   */

  export type AggregateDatasheets = {
    _count: DatasheetsCountAggregateOutputType | null
    _avg: DatasheetsAvgAggregateOutputType | null
    _sum: DatasheetsSumAggregateOutputType | null
    _min: DatasheetsMinAggregateOutputType | null
    _max: DatasheetsMaxAggregateOutputType | null
  }

  export type DatasheetsAvgAggregateOutputType = {
    id: number | null
  }

  export type DatasheetsSumAggregateOutputType = {
    id: number | null
  }

  export type DatasheetsMinAggregateOutputType = {
    id: number | null
    description: string | null
  }

  export type DatasheetsMaxAggregateOutputType = {
    id: number | null
    description: string | null
  }

  export type DatasheetsCountAggregateOutputType = {
    id: number
    description: number
    _all: number
  }


  export type DatasheetsAvgAggregateInputType = {
    id?: true
  }

  export type DatasheetsSumAggregateInputType = {
    id?: true
  }

  export type DatasheetsMinAggregateInputType = {
    id?: true
    description?: true
  }

  export type DatasheetsMaxAggregateInputType = {
    id?: true
    description?: true
  }

  export type DatasheetsCountAggregateInputType = {
    id?: true
    description?: true
    _all?: true
  }

  export type DatasheetsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Datasheets to aggregate.
     */
    where?: DatasheetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datasheets to fetch.
     */
    orderBy?: DatasheetsOrderByWithRelationInput | DatasheetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DatasheetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datasheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datasheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Datasheets
    **/
    _count?: true | DatasheetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DatasheetsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DatasheetsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatasheetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatasheetsMaxAggregateInputType
  }

  export type GetDatasheetsAggregateType<T extends DatasheetsAggregateArgs> = {
        [P in keyof T & keyof AggregateDatasheets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatasheets[P]>
      : GetScalarType<T[P], AggregateDatasheets[P]>
  }




  export type DatasheetsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatasheetsWhereInput
    orderBy?: DatasheetsOrderByWithAggregationInput | DatasheetsOrderByWithAggregationInput[]
    by: DatasheetsScalarFieldEnum[] | DatasheetsScalarFieldEnum
    having?: DatasheetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatasheetsCountAggregateInputType | true
    _avg?: DatasheetsAvgAggregateInputType
    _sum?: DatasheetsSumAggregateInputType
    _min?: DatasheetsMinAggregateInputType
    _max?: DatasheetsMaxAggregateInputType
  }

  export type DatasheetsGroupByOutputType = {
    id: number
    description: string | null
    _count: DatasheetsCountAggregateOutputType | null
    _avg: DatasheetsAvgAggregateOutputType | null
    _sum: DatasheetsSumAggregateOutputType | null
    _min: DatasheetsMinAggregateOutputType | null
    _max: DatasheetsMaxAggregateOutputType | null
  }

  type GetDatasheetsGroupByPayload<T extends DatasheetsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DatasheetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatasheetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatasheetsGroupByOutputType[P]>
            : GetScalarType<T[P], DatasheetsGroupByOutputType[P]>
        }
      >
    >


  export type DatasheetsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    products?: boolean | Datasheets$productsArgs<ExtArgs>
    _count?: boolean | DatasheetsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["datasheets"]>


  export type DatasheetsSelectScalar = {
    id?: boolean
    description?: boolean
  }

  export type DatasheetsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Datasheets$productsArgs<ExtArgs>
    _count?: boolean | DatasheetsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DatasheetsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Datasheets"
    objects: {
      products: Prisma.$ProductsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string | null
    }, ExtArgs["result"]["datasheets"]>
    composites: {}
  }

  type DatasheetsGetPayload<S extends boolean | null | undefined | DatasheetsDefaultArgs> = $Result.GetResult<Prisma.$DatasheetsPayload, S>

  type DatasheetsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DatasheetsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DatasheetsCountAggregateInputType | true
    }

  export interface DatasheetsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Datasheets'], meta: { name: 'Datasheets' } }
    /**
     * Find zero or one Datasheets that matches the filter.
     * @param {DatasheetsFindUniqueArgs} args - Arguments to find a Datasheets
     * @example
     * // Get one Datasheets
     * const datasheets = await prisma.datasheets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DatasheetsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DatasheetsFindUniqueArgs<ExtArgs>>
    ): Prisma__DatasheetsClient<$Result.GetResult<Prisma.$DatasheetsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Datasheets that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DatasheetsFindUniqueOrThrowArgs} args - Arguments to find a Datasheets
     * @example
     * // Get one Datasheets
     * const datasheets = await prisma.datasheets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DatasheetsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DatasheetsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DatasheetsClient<$Result.GetResult<Prisma.$DatasheetsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Datasheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasheetsFindFirstArgs} args - Arguments to find a Datasheets
     * @example
     * // Get one Datasheets
     * const datasheets = await prisma.datasheets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DatasheetsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DatasheetsFindFirstArgs<ExtArgs>>
    ): Prisma__DatasheetsClient<$Result.GetResult<Prisma.$DatasheetsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Datasheets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasheetsFindFirstOrThrowArgs} args - Arguments to find a Datasheets
     * @example
     * // Get one Datasheets
     * const datasheets = await prisma.datasheets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DatasheetsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DatasheetsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DatasheetsClient<$Result.GetResult<Prisma.$DatasheetsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Datasheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasheetsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Datasheets
     * const datasheets = await prisma.datasheets.findMany()
     * 
     * // Get first 10 Datasheets
     * const datasheets = await prisma.datasheets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const datasheetsWithIdOnly = await prisma.datasheets.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DatasheetsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DatasheetsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasheetsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Datasheets.
     * @param {DatasheetsCreateArgs} args - Arguments to create a Datasheets.
     * @example
     * // Create one Datasheets
     * const Datasheets = await prisma.datasheets.create({
     *   data: {
     *     // ... data to create a Datasheets
     *   }
     * })
     * 
    **/
    create<T extends DatasheetsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DatasheetsCreateArgs<ExtArgs>>
    ): Prisma__DatasheetsClient<$Result.GetResult<Prisma.$DatasheetsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Datasheets.
     * @param {DatasheetsCreateManyArgs} args - Arguments to create many Datasheets.
     * @example
     * // Create many Datasheets
     * const datasheets = await prisma.datasheets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends DatasheetsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DatasheetsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Datasheets.
     * @param {DatasheetsDeleteArgs} args - Arguments to delete one Datasheets.
     * @example
     * // Delete one Datasheets
     * const Datasheets = await prisma.datasheets.delete({
     *   where: {
     *     // ... filter to delete one Datasheets
     *   }
     * })
     * 
    **/
    delete<T extends DatasheetsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DatasheetsDeleteArgs<ExtArgs>>
    ): Prisma__DatasheetsClient<$Result.GetResult<Prisma.$DatasheetsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Datasheets.
     * @param {DatasheetsUpdateArgs} args - Arguments to update one Datasheets.
     * @example
     * // Update one Datasheets
     * const datasheets = await prisma.datasheets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DatasheetsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DatasheetsUpdateArgs<ExtArgs>>
    ): Prisma__DatasheetsClient<$Result.GetResult<Prisma.$DatasheetsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Datasheets.
     * @param {DatasheetsDeleteManyArgs} args - Arguments to filter Datasheets to delete.
     * @example
     * // Delete a few Datasheets
     * const { count } = await prisma.datasheets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DatasheetsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DatasheetsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Datasheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasheetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Datasheets
     * const datasheets = await prisma.datasheets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DatasheetsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DatasheetsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Datasheets.
     * @param {DatasheetsUpsertArgs} args - Arguments to update or create a Datasheets.
     * @example
     * // Update or create a Datasheets
     * const datasheets = await prisma.datasheets.upsert({
     *   create: {
     *     // ... data to create a Datasheets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Datasheets we want to update
     *   }
     * })
    **/
    upsert<T extends DatasheetsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DatasheetsUpsertArgs<ExtArgs>>
    ): Prisma__DatasheetsClient<$Result.GetResult<Prisma.$DatasheetsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Datasheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasheetsCountArgs} args - Arguments to filter Datasheets to count.
     * @example
     * // Count the number of Datasheets
     * const count = await prisma.datasheets.count({
     *   where: {
     *     // ... the filter for the Datasheets we want to count
     *   }
     * })
    **/
    count<T extends DatasheetsCountArgs>(
      args?: Subset<T, DatasheetsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatasheetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Datasheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasheetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DatasheetsAggregateArgs>(args: Subset<T, DatasheetsAggregateArgs>): Prisma.PrismaPromise<GetDatasheetsAggregateType<T>>

    /**
     * Group by Datasheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasheetsGroupByArgs} args - Group by arguments.
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
      T extends DatasheetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DatasheetsGroupByArgs['orderBy'] }
        : { orderBy?: DatasheetsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DatasheetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatasheetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Datasheets model
   */
  readonly fields: DatasheetsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Datasheets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DatasheetsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    products<T extends Datasheets$productsArgs<ExtArgs> = {}>(args?: Subset<T, Datasheets$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Datasheets model
   */ 
  interface DatasheetsFieldRefs {
    readonly id: FieldRef<"Datasheets", 'Int'>
    readonly description: FieldRef<"Datasheets", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Datasheets findUnique
   */
  export type DatasheetsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datasheets
     */
    select?: DatasheetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasheetsInclude<ExtArgs> | null
    /**
     * Filter, which Datasheets to fetch.
     */
    where: DatasheetsWhereUniqueInput
  }

  /**
   * Datasheets findUniqueOrThrow
   */
  export type DatasheetsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datasheets
     */
    select?: DatasheetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasheetsInclude<ExtArgs> | null
    /**
     * Filter, which Datasheets to fetch.
     */
    where: DatasheetsWhereUniqueInput
  }

  /**
   * Datasheets findFirst
   */
  export type DatasheetsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datasheets
     */
    select?: DatasheetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasheetsInclude<ExtArgs> | null
    /**
     * Filter, which Datasheets to fetch.
     */
    where?: DatasheetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datasheets to fetch.
     */
    orderBy?: DatasheetsOrderByWithRelationInput | DatasheetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Datasheets.
     */
    cursor?: DatasheetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datasheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datasheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Datasheets.
     */
    distinct?: DatasheetsScalarFieldEnum | DatasheetsScalarFieldEnum[]
  }

  /**
   * Datasheets findFirstOrThrow
   */
  export type DatasheetsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datasheets
     */
    select?: DatasheetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasheetsInclude<ExtArgs> | null
    /**
     * Filter, which Datasheets to fetch.
     */
    where?: DatasheetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datasheets to fetch.
     */
    orderBy?: DatasheetsOrderByWithRelationInput | DatasheetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Datasheets.
     */
    cursor?: DatasheetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datasheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datasheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Datasheets.
     */
    distinct?: DatasheetsScalarFieldEnum | DatasheetsScalarFieldEnum[]
  }

  /**
   * Datasheets findMany
   */
  export type DatasheetsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datasheets
     */
    select?: DatasheetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasheetsInclude<ExtArgs> | null
    /**
     * Filter, which Datasheets to fetch.
     */
    where?: DatasheetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datasheets to fetch.
     */
    orderBy?: DatasheetsOrderByWithRelationInput | DatasheetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Datasheets.
     */
    cursor?: DatasheetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datasheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datasheets.
     */
    skip?: number
    distinct?: DatasheetsScalarFieldEnum | DatasheetsScalarFieldEnum[]
  }

  /**
   * Datasheets create
   */
  export type DatasheetsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datasheets
     */
    select?: DatasheetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasheetsInclude<ExtArgs> | null
    /**
     * The data needed to create a Datasheets.
     */
    data?: XOR<DatasheetsCreateInput, DatasheetsUncheckedCreateInput>
  }

  /**
   * Datasheets createMany
   */
  export type DatasheetsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Datasheets.
     */
    data: DatasheetsCreateManyInput | DatasheetsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Datasheets update
   */
  export type DatasheetsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datasheets
     */
    select?: DatasheetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasheetsInclude<ExtArgs> | null
    /**
     * The data needed to update a Datasheets.
     */
    data: XOR<DatasheetsUpdateInput, DatasheetsUncheckedUpdateInput>
    /**
     * Choose, which Datasheets to update.
     */
    where: DatasheetsWhereUniqueInput
  }

  /**
   * Datasheets updateMany
   */
  export type DatasheetsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Datasheets.
     */
    data: XOR<DatasheetsUpdateManyMutationInput, DatasheetsUncheckedUpdateManyInput>
    /**
     * Filter which Datasheets to update
     */
    where?: DatasheetsWhereInput
  }

  /**
   * Datasheets upsert
   */
  export type DatasheetsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datasheets
     */
    select?: DatasheetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasheetsInclude<ExtArgs> | null
    /**
     * The filter to search for the Datasheets to update in case it exists.
     */
    where: DatasheetsWhereUniqueInput
    /**
     * In case the Datasheets found by the `where` argument doesn't exist, create a new Datasheets with this data.
     */
    create: XOR<DatasheetsCreateInput, DatasheetsUncheckedCreateInput>
    /**
     * In case the Datasheets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DatasheetsUpdateInput, DatasheetsUncheckedUpdateInput>
  }

  /**
   * Datasheets delete
   */
  export type DatasheetsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datasheets
     */
    select?: DatasheetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasheetsInclude<ExtArgs> | null
    /**
     * Filter which Datasheets to delete.
     */
    where: DatasheetsWhereUniqueInput
  }

  /**
   * Datasheets deleteMany
   */
  export type DatasheetsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Datasheets to delete
     */
    where?: DatasheetsWhereInput
  }

  /**
   * Datasheets.products
   */
  export type Datasheets$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Datasheets without action
   */
  export type DatasheetsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datasheets
     */
    select?: DatasheetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasheetsInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>


  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      products: Prisma.$ProductsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CartSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CartMinAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CartMaxAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CartCountAggregateOutputType = {
    id: number
    userId: number
    _all: number
  }


  export type CartAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CartSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CartMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CartMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CartCountAggregateInputType = {
    id?: true
    userId?: true
    _all?: true
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cart to aggregate.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type CartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
    orderBy?: CartOrderByWithAggregationInput | CartOrderByWithAggregationInput[]
    by: CartScalarFieldEnum[] | CartScalarFieldEnum
    having?: CartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _avg?: CartAvgAggregateInputType
    _sum?: CartSumAggregateInputType
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }

  export type CartGroupByOutputType = {
    id: number
    userId: number
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends CartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type CartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    product?: boolean | Cart$productArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>


  export type CartSelectScalar = {
    id?: boolean
    userId?: boolean
  }

  export type CartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | Cart$productArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cart"
    objects: {
      product: Prisma.$ProductsPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
    }, ExtArgs["result"]["cart"]>
    composites: {}
  }

  type CartGetPayload<S extends boolean | null | undefined | CartDefaultArgs> = $Result.GetResult<Prisma.$CartPayload, S>

  type CartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CartFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface CartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cart'], meta: { name: 'Cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {CartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CartFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CartFindUniqueArgs<ExtArgs>>
    ): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Cart that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CartFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CartFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CartFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CartFindFirstArgs<ExtArgs>>
    ): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CartFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CartFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartWithIdOnly = await prisma.cart.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CartFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CartFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Cart.
     * @param {CartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
    **/
    create<T extends CartCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CartCreateArgs<ExtArgs>>
    ): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Carts.
     * @param {CartCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CartCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CartCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cart.
     * @param {CartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
    **/
    delete<T extends CartDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CartDeleteArgs<ExtArgs>>
    ): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Cart.
     * @param {CartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CartUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CartUpdateArgs<ExtArgs>>
    ): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Carts.
     * @param {CartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CartDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CartDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CartUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CartUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cart.
     * @param {CartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
    **/
    upsert<T extends CartUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CartUpsertArgs<ExtArgs>>
    ): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends CartCountArgs>(
      args?: Subset<T, CartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartGroupByArgs} args - Group by arguments.
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
      T extends CartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartGroupByArgs['orderBy'] }
        : { orderBy?: CartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cart model
   */
  readonly fields: CartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends Cart$productArgs<ExtArgs> = {}>(args?: Subset<T, Cart$productArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Cart model
   */ 
  interface CartFieldRefs {
    readonly id: FieldRef<"Cart", 'Int'>
    readonly userId: FieldRef<"Cart", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Cart findUnique
   */
  export type CartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findUniqueOrThrow
   */
  export type CartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findFirst
   */
  export type CartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findFirstOrThrow
   */
  export type CartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findMany
   */
  export type CartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart create
   */
  export type CartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to create a Cart.
     */
    data: XOR<CartCreateInput, CartUncheckedCreateInput>
  }

  /**
   * Cart createMany
   */
  export type CartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cart update
   */
  export type CartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to update a Cart.
     */
    data: XOR<CartUpdateInput, CartUncheckedUpdateInput>
    /**
     * Choose, which Cart to update.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart updateMany
   */
  export type CartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
  }

  /**
   * Cart upsert
   */
  export type CartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The filter to search for the Cart to update in case it exists.
     */
    where: CartWhereUniqueInput
    /**
     * In case the Cart found by the `where` argument doesn't exist, create a new Cart with this data.
     */
    create: XOR<CartCreateInput, CartUncheckedCreateInput>
    /**
     * In case the Cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartUpdateInput, CartUncheckedUpdateInput>
  }

  /**
   * Cart delete
   */
  export type CartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter which Cart to delete.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart deleteMany
   */
  export type CartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to delete
     */
    where?: CartWhereInput
  }

  /**
   * Cart.product
   */
  export type Cart$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Cart without action
   */
  export type CartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
  }


  /**
   * Model AuditTrail
   */

  export type AggregateAuditTrail = {
    _count: AuditTrailCountAggregateOutputType | null
    _avg: AuditTrailAvgAggregateOutputType | null
    _sum: AuditTrailSumAggregateOutputType | null
    _min: AuditTrailMinAggregateOutputType | null
    _max: AuditTrailMaxAggregateOutputType | null
  }

  export type AuditTrailAvgAggregateOutputType = {
    id: number | null
  }

  export type AuditTrailSumAggregateOutputType = {
    id: number | null
  }

  export type AuditTrailMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AuditTrailMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AuditTrailCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AuditTrailAvgAggregateInputType = {
    id?: true
  }

  export type AuditTrailSumAggregateInputType = {
    id?: true
  }

  export type AuditTrailMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
  }

  export type AuditTrailMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
  }

  export type AuditTrailCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AuditTrailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditTrail to aggregate.
     */
    where?: AuditTrailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditTrails to fetch.
     */
    orderBy?: AuditTrailOrderByWithRelationInput | AuditTrailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditTrailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditTrails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditTrails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditTrails
    **/
    _count?: true | AuditTrailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditTrailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditTrailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditTrailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditTrailMaxAggregateInputType
  }

  export type GetAuditTrailAggregateType<T extends AuditTrailAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditTrail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditTrail[P]>
      : GetScalarType<T[P], AggregateAuditTrail[P]>
  }




  export type AuditTrailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditTrailWhereInput
    orderBy?: AuditTrailOrderByWithAggregationInput | AuditTrailOrderByWithAggregationInput[]
    by: AuditTrailScalarFieldEnum[] | AuditTrailScalarFieldEnum
    having?: AuditTrailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditTrailCountAggregateInputType | true
    _avg?: AuditTrailAvgAggregateInputType
    _sum?: AuditTrailSumAggregateInputType
    _min?: AuditTrailMinAggregateInputType
    _max?: AuditTrailMaxAggregateInputType
  }

  export type AuditTrailGroupByOutputType = {
    id: number
    created_at: Date
    updated_at: Date
    _count: AuditTrailCountAggregateOutputType | null
    _avg: AuditTrailAvgAggregateOutputType | null
    _sum: AuditTrailSumAggregateOutputType | null
    _min: AuditTrailMinAggregateOutputType | null
    _max: AuditTrailMaxAggregateOutputType | null
  }

  type GetAuditTrailGroupByPayload<T extends AuditTrailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditTrailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditTrailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditTrailGroupByOutputType[P]>
            : GetScalarType<T[P], AuditTrailGroupByOutputType[P]>
        }
      >
    >


  export type AuditTrailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    Products?: boolean | AuditTrail$ProductsArgs<ExtArgs>
    User?: boolean | AuditTrail$UserArgs<ExtArgs>
  }, ExtArgs["result"]["auditTrail"]>


  export type AuditTrailSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AuditTrailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | AuditTrail$ProductsArgs<ExtArgs>
    User?: boolean | AuditTrail$UserArgs<ExtArgs>
  }

  export type $AuditTrailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditTrail"
    objects: {
      Products: Prisma.$ProductsPayload<ExtArgs> | null
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["auditTrail"]>
    composites: {}
  }

  type AuditTrailGetPayload<S extends boolean | null | undefined | AuditTrailDefaultArgs> = $Result.GetResult<Prisma.$AuditTrailPayload, S>

  type AuditTrailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuditTrailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuditTrailCountAggregateInputType | true
    }

  export interface AuditTrailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditTrail'], meta: { name: 'AuditTrail' } }
    /**
     * Find zero or one AuditTrail that matches the filter.
     * @param {AuditTrailFindUniqueArgs} args - Arguments to find a AuditTrail
     * @example
     * // Get one AuditTrail
     * const auditTrail = await prisma.auditTrail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AuditTrailFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AuditTrailFindUniqueArgs<ExtArgs>>
    ): Prisma__AuditTrailClient<$Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AuditTrail that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuditTrailFindUniqueOrThrowArgs} args - Arguments to find a AuditTrail
     * @example
     * // Get one AuditTrail
     * const auditTrail = await prisma.auditTrail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AuditTrailFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditTrailFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AuditTrailClient<$Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AuditTrail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditTrailFindFirstArgs} args - Arguments to find a AuditTrail
     * @example
     * // Get one AuditTrail
     * const auditTrail = await prisma.auditTrail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AuditTrailFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditTrailFindFirstArgs<ExtArgs>>
    ): Prisma__AuditTrailClient<$Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AuditTrail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditTrailFindFirstOrThrowArgs} args - Arguments to find a AuditTrail
     * @example
     * // Get one AuditTrail
     * const auditTrail = await prisma.auditTrail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AuditTrailFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditTrailFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AuditTrailClient<$Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AuditTrails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditTrailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditTrails
     * const auditTrails = await prisma.auditTrail.findMany()
     * 
     * // Get first 10 AuditTrails
     * const auditTrails = await prisma.auditTrail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditTrailWithIdOnly = await prisma.auditTrail.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AuditTrailFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditTrailFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AuditTrail.
     * @param {AuditTrailCreateArgs} args - Arguments to create a AuditTrail.
     * @example
     * // Create one AuditTrail
     * const AuditTrail = await prisma.auditTrail.create({
     *   data: {
     *     // ... data to create a AuditTrail
     *   }
     * })
     * 
    **/
    create<T extends AuditTrailCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AuditTrailCreateArgs<ExtArgs>>
    ): Prisma__AuditTrailClient<$Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AuditTrails.
     * @param {AuditTrailCreateManyArgs} args - Arguments to create many AuditTrails.
     * @example
     * // Create many AuditTrails
     * const auditTrail = await prisma.auditTrail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends AuditTrailCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditTrailCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AuditTrail.
     * @param {AuditTrailDeleteArgs} args - Arguments to delete one AuditTrail.
     * @example
     * // Delete one AuditTrail
     * const AuditTrail = await prisma.auditTrail.delete({
     *   where: {
     *     // ... filter to delete one AuditTrail
     *   }
     * })
     * 
    **/
    delete<T extends AuditTrailDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AuditTrailDeleteArgs<ExtArgs>>
    ): Prisma__AuditTrailClient<$Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AuditTrail.
     * @param {AuditTrailUpdateArgs} args - Arguments to update one AuditTrail.
     * @example
     * // Update one AuditTrail
     * const auditTrail = await prisma.auditTrail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AuditTrailUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AuditTrailUpdateArgs<ExtArgs>>
    ): Prisma__AuditTrailClient<$Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AuditTrails.
     * @param {AuditTrailDeleteManyArgs} args - Arguments to filter AuditTrails to delete.
     * @example
     * // Delete a few AuditTrails
     * const { count } = await prisma.auditTrail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AuditTrailDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditTrailDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditTrails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditTrailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditTrails
     * const auditTrail = await prisma.auditTrail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AuditTrailUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AuditTrailUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditTrail.
     * @param {AuditTrailUpsertArgs} args - Arguments to update or create a AuditTrail.
     * @example
     * // Update or create a AuditTrail
     * const auditTrail = await prisma.auditTrail.upsert({
     *   create: {
     *     // ... data to create a AuditTrail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditTrail we want to update
     *   }
     * })
    **/
    upsert<T extends AuditTrailUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AuditTrailUpsertArgs<ExtArgs>>
    ): Prisma__AuditTrailClient<$Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AuditTrails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditTrailCountArgs} args - Arguments to filter AuditTrails to count.
     * @example
     * // Count the number of AuditTrails
     * const count = await prisma.auditTrail.count({
     *   where: {
     *     // ... the filter for the AuditTrails we want to count
     *   }
     * })
    **/
    count<T extends AuditTrailCountArgs>(
      args?: Subset<T, AuditTrailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditTrailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditTrail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditTrailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditTrailAggregateArgs>(args: Subset<T, AuditTrailAggregateArgs>): Prisma.PrismaPromise<GetAuditTrailAggregateType<T>>

    /**
     * Group by AuditTrail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditTrailGroupByArgs} args - Group by arguments.
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
      T extends AuditTrailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditTrailGroupByArgs['orderBy'] }
        : { orderBy?: AuditTrailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditTrailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditTrailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditTrail model
   */
  readonly fields: AuditTrailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditTrail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditTrailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Products<T extends AuditTrail$ProductsArgs<ExtArgs> = {}>(args?: Subset<T, AuditTrail$ProductsArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    User<T extends AuditTrail$UserArgs<ExtArgs> = {}>(args?: Subset<T, AuditTrail$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AuditTrail model
   */ 
  interface AuditTrailFieldRefs {
    readonly id: FieldRef<"AuditTrail", 'Int'>
    readonly created_at: FieldRef<"AuditTrail", 'DateTime'>
    readonly updated_at: FieldRef<"AuditTrail", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditTrail findUnique
   */
  export type AuditTrailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTrail
     */
    select?: AuditTrailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTrailInclude<ExtArgs> | null
    /**
     * Filter, which AuditTrail to fetch.
     */
    where: AuditTrailWhereUniqueInput
  }

  /**
   * AuditTrail findUniqueOrThrow
   */
  export type AuditTrailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTrail
     */
    select?: AuditTrailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTrailInclude<ExtArgs> | null
    /**
     * Filter, which AuditTrail to fetch.
     */
    where: AuditTrailWhereUniqueInput
  }

  /**
   * AuditTrail findFirst
   */
  export type AuditTrailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTrail
     */
    select?: AuditTrailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTrailInclude<ExtArgs> | null
    /**
     * Filter, which AuditTrail to fetch.
     */
    where?: AuditTrailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditTrails to fetch.
     */
    orderBy?: AuditTrailOrderByWithRelationInput | AuditTrailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditTrails.
     */
    cursor?: AuditTrailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditTrails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditTrails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditTrails.
     */
    distinct?: AuditTrailScalarFieldEnum | AuditTrailScalarFieldEnum[]
  }

  /**
   * AuditTrail findFirstOrThrow
   */
  export type AuditTrailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTrail
     */
    select?: AuditTrailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTrailInclude<ExtArgs> | null
    /**
     * Filter, which AuditTrail to fetch.
     */
    where?: AuditTrailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditTrails to fetch.
     */
    orderBy?: AuditTrailOrderByWithRelationInput | AuditTrailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditTrails.
     */
    cursor?: AuditTrailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditTrails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditTrails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditTrails.
     */
    distinct?: AuditTrailScalarFieldEnum | AuditTrailScalarFieldEnum[]
  }

  /**
   * AuditTrail findMany
   */
  export type AuditTrailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTrail
     */
    select?: AuditTrailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTrailInclude<ExtArgs> | null
    /**
     * Filter, which AuditTrails to fetch.
     */
    where?: AuditTrailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditTrails to fetch.
     */
    orderBy?: AuditTrailOrderByWithRelationInput | AuditTrailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditTrails.
     */
    cursor?: AuditTrailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditTrails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditTrails.
     */
    skip?: number
    distinct?: AuditTrailScalarFieldEnum | AuditTrailScalarFieldEnum[]
  }

  /**
   * AuditTrail create
   */
  export type AuditTrailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTrail
     */
    select?: AuditTrailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTrailInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditTrail.
     */
    data?: XOR<AuditTrailCreateInput, AuditTrailUncheckedCreateInput>
  }

  /**
   * AuditTrail createMany
   */
  export type AuditTrailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditTrails.
     */
    data: AuditTrailCreateManyInput | AuditTrailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditTrail update
   */
  export type AuditTrailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTrail
     */
    select?: AuditTrailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTrailInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditTrail.
     */
    data: XOR<AuditTrailUpdateInput, AuditTrailUncheckedUpdateInput>
    /**
     * Choose, which AuditTrail to update.
     */
    where: AuditTrailWhereUniqueInput
  }

  /**
   * AuditTrail updateMany
   */
  export type AuditTrailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditTrails.
     */
    data: XOR<AuditTrailUpdateManyMutationInput, AuditTrailUncheckedUpdateManyInput>
    /**
     * Filter which AuditTrails to update
     */
    where?: AuditTrailWhereInput
  }

  /**
   * AuditTrail upsert
   */
  export type AuditTrailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTrail
     */
    select?: AuditTrailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTrailInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditTrail to update in case it exists.
     */
    where: AuditTrailWhereUniqueInput
    /**
     * In case the AuditTrail found by the `where` argument doesn't exist, create a new AuditTrail with this data.
     */
    create: XOR<AuditTrailCreateInput, AuditTrailUncheckedCreateInput>
    /**
     * In case the AuditTrail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditTrailUpdateInput, AuditTrailUncheckedUpdateInput>
  }

  /**
   * AuditTrail delete
   */
  export type AuditTrailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTrail
     */
    select?: AuditTrailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTrailInclude<ExtArgs> | null
    /**
     * Filter which AuditTrail to delete.
     */
    where: AuditTrailWhereUniqueInput
  }

  /**
   * AuditTrail deleteMany
   */
  export type AuditTrailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditTrails to delete
     */
    where?: AuditTrailWhereInput
  }

  /**
   * AuditTrail.Products
   */
  export type AuditTrail$ProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
  }

  /**
   * AuditTrail.User
   */
  export type AuditTrail$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AuditTrail without action
   */
  export type AuditTrailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTrail
     */
    select?: AuditTrailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTrailInclude<ExtArgs> | null
  }


  /**
   * Model Yolo
   */

  export type AggregateYolo = {
    _count: YoloCountAggregateOutputType | null
    _avg: YoloAvgAggregateOutputType | null
    _sum: YoloSumAggregateOutputType | null
    _min: YoloMinAggregateOutputType | null
    _max: YoloMaxAggregateOutputType | null
  }

  export type YoloAvgAggregateOutputType = {
    id: number | null
    x: number | null
    y: number | null
    height: number | null
    width: number | null
  }

  export type YoloSumAggregateOutputType = {
    id: number | null
    x: number | null
    y: number | null
    height: number | null
    width: number | null
  }

  export type YoloMinAggregateOutputType = {
    id: number | null
    x: number | null
    y: number | null
    height: number | null
    width: number | null
    classes: string | null
  }

  export type YoloMaxAggregateOutputType = {
    id: number | null
    x: number | null
    y: number | null
    height: number | null
    width: number | null
    classes: string | null
  }

  export type YoloCountAggregateOutputType = {
    id: number
    x: number
    y: number
    height: number
    width: number
    classes: number
    _all: number
  }


  export type YoloAvgAggregateInputType = {
    id?: true
    x?: true
    y?: true
    height?: true
    width?: true
  }

  export type YoloSumAggregateInputType = {
    id?: true
    x?: true
    y?: true
    height?: true
    width?: true
  }

  export type YoloMinAggregateInputType = {
    id?: true
    x?: true
    y?: true
    height?: true
    width?: true
    classes?: true
  }

  export type YoloMaxAggregateInputType = {
    id?: true
    x?: true
    y?: true
    height?: true
    width?: true
    classes?: true
  }

  export type YoloCountAggregateInputType = {
    id?: true
    x?: true
    y?: true
    height?: true
    width?: true
    classes?: true
    _all?: true
  }

  export type YoloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Yolo to aggregate.
     */
    where?: YoloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Yolos to fetch.
     */
    orderBy?: YoloOrderByWithRelationInput | YoloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: YoloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Yolos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Yolos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Yolos
    **/
    _count?: true | YoloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: YoloAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: YoloSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: YoloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: YoloMaxAggregateInputType
  }

  export type GetYoloAggregateType<T extends YoloAggregateArgs> = {
        [P in keyof T & keyof AggregateYolo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYolo[P]>
      : GetScalarType<T[P], AggregateYolo[P]>
  }




  export type YoloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YoloWhereInput
    orderBy?: YoloOrderByWithAggregationInput | YoloOrderByWithAggregationInput[]
    by: YoloScalarFieldEnum[] | YoloScalarFieldEnum
    having?: YoloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: YoloCountAggregateInputType | true
    _avg?: YoloAvgAggregateInputType
    _sum?: YoloSumAggregateInputType
    _min?: YoloMinAggregateInputType
    _max?: YoloMaxAggregateInputType
  }

  export type YoloGroupByOutputType = {
    id: number
    x: number
    y: number
    height: number
    width: number
    classes: string
    _count: YoloCountAggregateOutputType | null
    _avg: YoloAvgAggregateOutputType | null
    _sum: YoloSumAggregateOutputType | null
    _min: YoloMinAggregateOutputType | null
    _max: YoloMaxAggregateOutputType | null
  }

  type GetYoloGroupByPayload<T extends YoloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<YoloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof YoloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], YoloGroupByOutputType[P]>
            : GetScalarType<T[P], YoloGroupByOutputType[P]>
        }
      >
    >


  export type YoloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    x?: boolean
    y?: boolean
    height?: boolean
    width?: boolean
    classes?: boolean
  }, ExtArgs["result"]["yolo"]>


  export type YoloSelectScalar = {
    id?: boolean
    x?: boolean
    y?: boolean
    height?: boolean
    width?: boolean
    classes?: boolean
  }


  export type $YoloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Yolo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      x: number
      y: number
      height: number
      width: number
      classes: string
    }, ExtArgs["result"]["yolo"]>
    composites: {}
  }

  type YoloGetPayload<S extends boolean | null | undefined | YoloDefaultArgs> = $Result.GetResult<Prisma.$YoloPayload, S>

  type YoloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<YoloFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: YoloCountAggregateInputType | true
    }

  export interface YoloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Yolo'], meta: { name: 'Yolo' } }
    /**
     * Find zero or one Yolo that matches the filter.
     * @param {YoloFindUniqueArgs} args - Arguments to find a Yolo
     * @example
     * // Get one Yolo
     * const yolo = await prisma.yolo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends YoloFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, YoloFindUniqueArgs<ExtArgs>>
    ): Prisma__YoloClient<$Result.GetResult<Prisma.$YoloPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Yolo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {YoloFindUniqueOrThrowArgs} args - Arguments to find a Yolo
     * @example
     * // Get one Yolo
     * const yolo = await prisma.yolo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends YoloFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, YoloFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__YoloClient<$Result.GetResult<Prisma.$YoloPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Yolo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoloFindFirstArgs} args - Arguments to find a Yolo
     * @example
     * // Get one Yolo
     * const yolo = await prisma.yolo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends YoloFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, YoloFindFirstArgs<ExtArgs>>
    ): Prisma__YoloClient<$Result.GetResult<Prisma.$YoloPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Yolo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoloFindFirstOrThrowArgs} args - Arguments to find a Yolo
     * @example
     * // Get one Yolo
     * const yolo = await prisma.yolo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends YoloFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, YoloFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__YoloClient<$Result.GetResult<Prisma.$YoloPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Yolos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Yolos
     * const yolos = await prisma.yolo.findMany()
     * 
     * // Get first 10 Yolos
     * const yolos = await prisma.yolo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const yoloWithIdOnly = await prisma.yolo.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends YoloFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, YoloFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YoloPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Yolo.
     * @param {YoloCreateArgs} args - Arguments to create a Yolo.
     * @example
     * // Create one Yolo
     * const Yolo = await prisma.yolo.create({
     *   data: {
     *     // ... data to create a Yolo
     *   }
     * })
     * 
    **/
    create<T extends YoloCreateArgs<ExtArgs>>(
      args: SelectSubset<T, YoloCreateArgs<ExtArgs>>
    ): Prisma__YoloClient<$Result.GetResult<Prisma.$YoloPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Yolos.
     * @param {YoloCreateManyArgs} args - Arguments to create many Yolos.
     * @example
     * // Create many Yolos
     * const yolo = await prisma.yolo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends YoloCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, YoloCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Yolo.
     * @param {YoloDeleteArgs} args - Arguments to delete one Yolo.
     * @example
     * // Delete one Yolo
     * const Yolo = await prisma.yolo.delete({
     *   where: {
     *     // ... filter to delete one Yolo
     *   }
     * })
     * 
    **/
    delete<T extends YoloDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, YoloDeleteArgs<ExtArgs>>
    ): Prisma__YoloClient<$Result.GetResult<Prisma.$YoloPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Yolo.
     * @param {YoloUpdateArgs} args - Arguments to update one Yolo.
     * @example
     * // Update one Yolo
     * const yolo = await prisma.yolo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends YoloUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, YoloUpdateArgs<ExtArgs>>
    ): Prisma__YoloClient<$Result.GetResult<Prisma.$YoloPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Yolos.
     * @param {YoloDeleteManyArgs} args - Arguments to filter Yolos to delete.
     * @example
     * // Delete a few Yolos
     * const { count } = await prisma.yolo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends YoloDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, YoloDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Yolos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Yolos
     * const yolo = await prisma.yolo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends YoloUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, YoloUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Yolo.
     * @param {YoloUpsertArgs} args - Arguments to update or create a Yolo.
     * @example
     * // Update or create a Yolo
     * const yolo = await prisma.yolo.upsert({
     *   create: {
     *     // ... data to create a Yolo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Yolo we want to update
     *   }
     * })
    **/
    upsert<T extends YoloUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, YoloUpsertArgs<ExtArgs>>
    ): Prisma__YoloClient<$Result.GetResult<Prisma.$YoloPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Yolos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoloCountArgs} args - Arguments to filter Yolos to count.
     * @example
     * // Count the number of Yolos
     * const count = await prisma.yolo.count({
     *   where: {
     *     // ... the filter for the Yolos we want to count
     *   }
     * })
    **/
    count<T extends YoloCountArgs>(
      args?: Subset<T, YoloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], YoloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Yolo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends YoloAggregateArgs>(args: Subset<T, YoloAggregateArgs>): Prisma.PrismaPromise<GetYoloAggregateType<T>>

    /**
     * Group by Yolo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoloGroupByArgs} args - Group by arguments.
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
      T extends YoloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: YoloGroupByArgs['orderBy'] }
        : { orderBy?: YoloGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, YoloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYoloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Yolo model
   */
  readonly fields: YoloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Yolo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__YoloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Yolo model
   */ 
  interface YoloFieldRefs {
    readonly id: FieldRef<"Yolo", 'Int'>
    readonly x: FieldRef<"Yolo", 'Int'>
    readonly y: FieldRef<"Yolo", 'Int'>
    readonly height: FieldRef<"Yolo", 'Float'>
    readonly width: FieldRef<"Yolo", 'Float'>
    readonly classes: FieldRef<"Yolo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Yolo findUnique
   */
  export type YoloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yolo
     */
    select?: YoloSelect<ExtArgs> | null
    /**
     * Filter, which Yolo to fetch.
     */
    where: YoloWhereUniqueInput
  }

  /**
   * Yolo findUniqueOrThrow
   */
  export type YoloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yolo
     */
    select?: YoloSelect<ExtArgs> | null
    /**
     * Filter, which Yolo to fetch.
     */
    where: YoloWhereUniqueInput
  }

  /**
   * Yolo findFirst
   */
  export type YoloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yolo
     */
    select?: YoloSelect<ExtArgs> | null
    /**
     * Filter, which Yolo to fetch.
     */
    where?: YoloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Yolos to fetch.
     */
    orderBy?: YoloOrderByWithRelationInput | YoloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Yolos.
     */
    cursor?: YoloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Yolos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Yolos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Yolos.
     */
    distinct?: YoloScalarFieldEnum | YoloScalarFieldEnum[]
  }

  /**
   * Yolo findFirstOrThrow
   */
  export type YoloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yolo
     */
    select?: YoloSelect<ExtArgs> | null
    /**
     * Filter, which Yolo to fetch.
     */
    where?: YoloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Yolos to fetch.
     */
    orderBy?: YoloOrderByWithRelationInput | YoloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Yolos.
     */
    cursor?: YoloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Yolos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Yolos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Yolos.
     */
    distinct?: YoloScalarFieldEnum | YoloScalarFieldEnum[]
  }

  /**
   * Yolo findMany
   */
  export type YoloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yolo
     */
    select?: YoloSelect<ExtArgs> | null
    /**
     * Filter, which Yolos to fetch.
     */
    where?: YoloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Yolos to fetch.
     */
    orderBy?: YoloOrderByWithRelationInput | YoloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Yolos.
     */
    cursor?: YoloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Yolos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Yolos.
     */
    skip?: number
    distinct?: YoloScalarFieldEnum | YoloScalarFieldEnum[]
  }

  /**
   * Yolo create
   */
  export type YoloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yolo
     */
    select?: YoloSelect<ExtArgs> | null
    /**
     * The data needed to create a Yolo.
     */
    data: XOR<YoloCreateInput, YoloUncheckedCreateInput>
  }

  /**
   * Yolo createMany
   */
  export type YoloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Yolos.
     */
    data: YoloCreateManyInput | YoloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Yolo update
   */
  export type YoloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yolo
     */
    select?: YoloSelect<ExtArgs> | null
    /**
     * The data needed to update a Yolo.
     */
    data: XOR<YoloUpdateInput, YoloUncheckedUpdateInput>
    /**
     * Choose, which Yolo to update.
     */
    where: YoloWhereUniqueInput
  }

  /**
   * Yolo updateMany
   */
  export type YoloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Yolos.
     */
    data: XOR<YoloUpdateManyMutationInput, YoloUncheckedUpdateManyInput>
    /**
     * Filter which Yolos to update
     */
    where?: YoloWhereInput
  }

  /**
   * Yolo upsert
   */
  export type YoloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yolo
     */
    select?: YoloSelect<ExtArgs> | null
    /**
     * The filter to search for the Yolo to update in case it exists.
     */
    where: YoloWhereUniqueInput
    /**
     * In case the Yolo found by the `where` argument doesn't exist, create a new Yolo with this data.
     */
    create: XOR<YoloCreateInput, YoloUncheckedCreateInput>
    /**
     * In case the Yolo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<YoloUpdateInput, YoloUncheckedUpdateInput>
  }

  /**
   * Yolo delete
   */
  export type YoloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yolo
     */
    select?: YoloSelect<ExtArgs> | null
    /**
     * Filter which Yolo to delete.
     */
    where: YoloWhereUniqueInput
  }

  /**
   * Yolo deleteMany
   */
  export type YoloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Yolos to delete
     */
    where?: YoloWhereInput
  }

  /**
   * Yolo without action
   */
  export type YoloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yolo
     */
    select?: YoloSelect<ExtArgs> | null
  }


  /**
   * Model YoloTraining
   */

  export type AggregateYoloTraining = {
    _count: YoloTrainingCountAggregateOutputType | null
    _avg: YoloTrainingAvgAggregateOutputType | null
    _sum: YoloTrainingSumAggregateOutputType | null
    _min: YoloTrainingMinAggregateOutputType | null
    _max: YoloTrainingMaxAggregateOutputType | null
  }

  export type YoloTrainingAvgAggregateOutputType = {
    id: number | null
  }

  export type YoloTrainingSumAggregateOutputType = {
    id: number | null
  }

  export type YoloTrainingMinAggregateOutputType = {
    id: number | null
    vectors: string | null
  }

  export type YoloTrainingMaxAggregateOutputType = {
    id: number | null
    vectors: string | null
  }

  export type YoloTrainingCountAggregateOutputType = {
    id: number
    vectors: number
    _all: number
  }


  export type YoloTrainingAvgAggregateInputType = {
    id?: true
  }

  export type YoloTrainingSumAggregateInputType = {
    id?: true
  }

  export type YoloTrainingMinAggregateInputType = {
    id?: true
    vectors?: true
  }

  export type YoloTrainingMaxAggregateInputType = {
    id?: true
    vectors?: true
  }

  export type YoloTrainingCountAggregateInputType = {
    id?: true
    vectors?: true
    _all?: true
  }

  export type YoloTrainingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which YoloTraining to aggregate.
     */
    where?: YoloTrainingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YoloTrainings to fetch.
     */
    orderBy?: YoloTrainingOrderByWithRelationInput | YoloTrainingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: YoloTrainingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YoloTrainings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YoloTrainings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned YoloTrainings
    **/
    _count?: true | YoloTrainingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: YoloTrainingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: YoloTrainingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: YoloTrainingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: YoloTrainingMaxAggregateInputType
  }

  export type GetYoloTrainingAggregateType<T extends YoloTrainingAggregateArgs> = {
        [P in keyof T & keyof AggregateYoloTraining]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYoloTraining[P]>
      : GetScalarType<T[P], AggregateYoloTraining[P]>
  }




  export type YoloTrainingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YoloTrainingWhereInput
    orderBy?: YoloTrainingOrderByWithAggregationInput | YoloTrainingOrderByWithAggregationInput[]
    by: YoloTrainingScalarFieldEnum[] | YoloTrainingScalarFieldEnum
    having?: YoloTrainingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: YoloTrainingCountAggregateInputType | true
    _avg?: YoloTrainingAvgAggregateInputType
    _sum?: YoloTrainingSumAggregateInputType
    _min?: YoloTrainingMinAggregateInputType
    _max?: YoloTrainingMaxAggregateInputType
  }

  export type YoloTrainingGroupByOutputType = {
    id: number
    vectors: string
    _count: YoloTrainingCountAggregateOutputType | null
    _avg: YoloTrainingAvgAggregateOutputType | null
    _sum: YoloTrainingSumAggregateOutputType | null
    _min: YoloTrainingMinAggregateOutputType | null
    _max: YoloTrainingMaxAggregateOutputType | null
  }

  type GetYoloTrainingGroupByPayload<T extends YoloTrainingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<YoloTrainingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof YoloTrainingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], YoloTrainingGroupByOutputType[P]>
            : GetScalarType<T[P], YoloTrainingGroupByOutputType[P]>
        }
      >
    >


  export type YoloTrainingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vectors?: boolean
  }, ExtArgs["result"]["yoloTraining"]>


  export type YoloTrainingSelectScalar = {
    id?: boolean
    vectors?: boolean
  }


  export type $YoloTrainingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "YoloTraining"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      vectors: string
    }, ExtArgs["result"]["yoloTraining"]>
    composites: {}
  }

  type YoloTrainingGetPayload<S extends boolean | null | undefined | YoloTrainingDefaultArgs> = $Result.GetResult<Prisma.$YoloTrainingPayload, S>

  type YoloTrainingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<YoloTrainingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: YoloTrainingCountAggregateInputType | true
    }

  export interface YoloTrainingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['YoloTraining'], meta: { name: 'YoloTraining' } }
    /**
     * Find zero or one YoloTraining that matches the filter.
     * @param {YoloTrainingFindUniqueArgs} args - Arguments to find a YoloTraining
     * @example
     * // Get one YoloTraining
     * const yoloTraining = await prisma.yoloTraining.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends YoloTrainingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, YoloTrainingFindUniqueArgs<ExtArgs>>
    ): Prisma__YoloTrainingClient<$Result.GetResult<Prisma.$YoloTrainingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one YoloTraining that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {YoloTrainingFindUniqueOrThrowArgs} args - Arguments to find a YoloTraining
     * @example
     * // Get one YoloTraining
     * const yoloTraining = await prisma.yoloTraining.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends YoloTrainingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, YoloTrainingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__YoloTrainingClient<$Result.GetResult<Prisma.$YoloTrainingPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first YoloTraining that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoloTrainingFindFirstArgs} args - Arguments to find a YoloTraining
     * @example
     * // Get one YoloTraining
     * const yoloTraining = await prisma.yoloTraining.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends YoloTrainingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, YoloTrainingFindFirstArgs<ExtArgs>>
    ): Prisma__YoloTrainingClient<$Result.GetResult<Prisma.$YoloTrainingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first YoloTraining that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoloTrainingFindFirstOrThrowArgs} args - Arguments to find a YoloTraining
     * @example
     * // Get one YoloTraining
     * const yoloTraining = await prisma.yoloTraining.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends YoloTrainingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, YoloTrainingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__YoloTrainingClient<$Result.GetResult<Prisma.$YoloTrainingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more YoloTrainings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoloTrainingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all YoloTrainings
     * const yoloTrainings = await prisma.yoloTraining.findMany()
     * 
     * // Get first 10 YoloTrainings
     * const yoloTrainings = await prisma.yoloTraining.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const yoloTrainingWithIdOnly = await prisma.yoloTraining.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends YoloTrainingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, YoloTrainingFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YoloTrainingPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a YoloTraining.
     * @param {YoloTrainingCreateArgs} args - Arguments to create a YoloTraining.
     * @example
     * // Create one YoloTraining
     * const YoloTraining = await prisma.yoloTraining.create({
     *   data: {
     *     // ... data to create a YoloTraining
     *   }
     * })
     * 
    **/
    create<T extends YoloTrainingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, YoloTrainingCreateArgs<ExtArgs>>
    ): Prisma__YoloTrainingClient<$Result.GetResult<Prisma.$YoloTrainingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many YoloTrainings.
     * @param {YoloTrainingCreateManyArgs} args - Arguments to create many YoloTrainings.
     * @example
     * // Create many YoloTrainings
     * const yoloTraining = await prisma.yoloTraining.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends YoloTrainingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, YoloTrainingCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a YoloTraining.
     * @param {YoloTrainingDeleteArgs} args - Arguments to delete one YoloTraining.
     * @example
     * // Delete one YoloTraining
     * const YoloTraining = await prisma.yoloTraining.delete({
     *   where: {
     *     // ... filter to delete one YoloTraining
     *   }
     * })
     * 
    **/
    delete<T extends YoloTrainingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, YoloTrainingDeleteArgs<ExtArgs>>
    ): Prisma__YoloTrainingClient<$Result.GetResult<Prisma.$YoloTrainingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one YoloTraining.
     * @param {YoloTrainingUpdateArgs} args - Arguments to update one YoloTraining.
     * @example
     * // Update one YoloTraining
     * const yoloTraining = await prisma.yoloTraining.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends YoloTrainingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, YoloTrainingUpdateArgs<ExtArgs>>
    ): Prisma__YoloTrainingClient<$Result.GetResult<Prisma.$YoloTrainingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more YoloTrainings.
     * @param {YoloTrainingDeleteManyArgs} args - Arguments to filter YoloTrainings to delete.
     * @example
     * // Delete a few YoloTrainings
     * const { count } = await prisma.yoloTraining.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends YoloTrainingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, YoloTrainingDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more YoloTrainings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoloTrainingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many YoloTrainings
     * const yoloTraining = await prisma.yoloTraining.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends YoloTrainingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, YoloTrainingUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one YoloTraining.
     * @param {YoloTrainingUpsertArgs} args - Arguments to update or create a YoloTraining.
     * @example
     * // Update or create a YoloTraining
     * const yoloTraining = await prisma.yoloTraining.upsert({
     *   create: {
     *     // ... data to create a YoloTraining
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the YoloTraining we want to update
     *   }
     * })
    **/
    upsert<T extends YoloTrainingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, YoloTrainingUpsertArgs<ExtArgs>>
    ): Prisma__YoloTrainingClient<$Result.GetResult<Prisma.$YoloTrainingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of YoloTrainings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoloTrainingCountArgs} args - Arguments to filter YoloTrainings to count.
     * @example
     * // Count the number of YoloTrainings
     * const count = await prisma.yoloTraining.count({
     *   where: {
     *     // ... the filter for the YoloTrainings we want to count
     *   }
     * })
    **/
    count<T extends YoloTrainingCountArgs>(
      args?: Subset<T, YoloTrainingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], YoloTrainingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a YoloTraining.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoloTrainingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends YoloTrainingAggregateArgs>(args: Subset<T, YoloTrainingAggregateArgs>): Prisma.PrismaPromise<GetYoloTrainingAggregateType<T>>

    /**
     * Group by YoloTraining.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoloTrainingGroupByArgs} args - Group by arguments.
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
      T extends YoloTrainingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: YoloTrainingGroupByArgs['orderBy'] }
        : { orderBy?: YoloTrainingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, YoloTrainingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYoloTrainingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the YoloTraining model
   */
  readonly fields: YoloTrainingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for YoloTraining.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__YoloTrainingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the YoloTraining model
   */ 
  interface YoloTrainingFieldRefs {
    readonly id: FieldRef<"YoloTraining", 'Int'>
    readonly vectors: FieldRef<"YoloTraining", 'String'>
  }
    

  // Custom InputTypes
  /**
   * YoloTraining findUnique
   */
  export type YoloTrainingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoloTraining
     */
    select?: YoloTrainingSelect<ExtArgs> | null
    /**
     * Filter, which YoloTraining to fetch.
     */
    where: YoloTrainingWhereUniqueInput
  }

  /**
   * YoloTraining findUniqueOrThrow
   */
  export type YoloTrainingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoloTraining
     */
    select?: YoloTrainingSelect<ExtArgs> | null
    /**
     * Filter, which YoloTraining to fetch.
     */
    where: YoloTrainingWhereUniqueInput
  }

  /**
   * YoloTraining findFirst
   */
  export type YoloTrainingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoloTraining
     */
    select?: YoloTrainingSelect<ExtArgs> | null
    /**
     * Filter, which YoloTraining to fetch.
     */
    where?: YoloTrainingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YoloTrainings to fetch.
     */
    orderBy?: YoloTrainingOrderByWithRelationInput | YoloTrainingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for YoloTrainings.
     */
    cursor?: YoloTrainingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YoloTrainings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YoloTrainings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YoloTrainings.
     */
    distinct?: YoloTrainingScalarFieldEnum | YoloTrainingScalarFieldEnum[]
  }

  /**
   * YoloTraining findFirstOrThrow
   */
  export type YoloTrainingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoloTraining
     */
    select?: YoloTrainingSelect<ExtArgs> | null
    /**
     * Filter, which YoloTraining to fetch.
     */
    where?: YoloTrainingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YoloTrainings to fetch.
     */
    orderBy?: YoloTrainingOrderByWithRelationInput | YoloTrainingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for YoloTrainings.
     */
    cursor?: YoloTrainingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YoloTrainings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YoloTrainings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YoloTrainings.
     */
    distinct?: YoloTrainingScalarFieldEnum | YoloTrainingScalarFieldEnum[]
  }

  /**
   * YoloTraining findMany
   */
  export type YoloTrainingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoloTraining
     */
    select?: YoloTrainingSelect<ExtArgs> | null
    /**
     * Filter, which YoloTrainings to fetch.
     */
    where?: YoloTrainingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YoloTrainings to fetch.
     */
    orderBy?: YoloTrainingOrderByWithRelationInput | YoloTrainingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing YoloTrainings.
     */
    cursor?: YoloTrainingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YoloTrainings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YoloTrainings.
     */
    skip?: number
    distinct?: YoloTrainingScalarFieldEnum | YoloTrainingScalarFieldEnum[]
  }

  /**
   * YoloTraining create
   */
  export type YoloTrainingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoloTraining
     */
    select?: YoloTrainingSelect<ExtArgs> | null
    /**
     * The data needed to create a YoloTraining.
     */
    data: XOR<YoloTrainingCreateInput, YoloTrainingUncheckedCreateInput>
  }

  /**
   * YoloTraining createMany
   */
  export type YoloTrainingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many YoloTrainings.
     */
    data: YoloTrainingCreateManyInput | YoloTrainingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * YoloTraining update
   */
  export type YoloTrainingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoloTraining
     */
    select?: YoloTrainingSelect<ExtArgs> | null
    /**
     * The data needed to update a YoloTraining.
     */
    data: XOR<YoloTrainingUpdateInput, YoloTrainingUncheckedUpdateInput>
    /**
     * Choose, which YoloTraining to update.
     */
    where: YoloTrainingWhereUniqueInput
  }

  /**
   * YoloTraining updateMany
   */
  export type YoloTrainingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update YoloTrainings.
     */
    data: XOR<YoloTrainingUpdateManyMutationInput, YoloTrainingUncheckedUpdateManyInput>
    /**
     * Filter which YoloTrainings to update
     */
    where?: YoloTrainingWhereInput
  }

  /**
   * YoloTraining upsert
   */
  export type YoloTrainingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoloTraining
     */
    select?: YoloTrainingSelect<ExtArgs> | null
    /**
     * The filter to search for the YoloTraining to update in case it exists.
     */
    where: YoloTrainingWhereUniqueInput
    /**
     * In case the YoloTraining found by the `where` argument doesn't exist, create a new YoloTraining with this data.
     */
    create: XOR<YoloTrainingCreateInput, YoloTrainingUncheckedCreateInput>
    /**
     * In case the YoloTraining was found with the provided `where` argument, update it with this data.
     */
    update: XOR<YoloTrainingUpdateInput, YoloTrainingUncheckedUpdateInput>
  }

  /**
   * YoloTraining delete
   */
  export type YoloTrainingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoloTraining
     */
    select?: YoloTrainingSelect<ExtArgs> | null
    /**
     * Filter which YoloTraining to delete.
     */
    where: YoloTrainingWhereUniqueInput
  }

  /**
   * YoloTraining deleteMany
   */
  export type YoloTrainingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which YoloTrainings to delete
     */
    where?: YoloTrainingWhereInput
  }

  /**
   * YoloTraining without action
   */
  export type YoloTrainingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoloTraining
     */
    select?: YoloTrainingSelect<ExtArgs> | null
  }


  /**
   * Model YoloImages
   */

  export type AggregateYoloImages = {
    _count: YoloImagesCountAggregateOutputType | null
    _avg: YoloImagesAvgAggregateOutputType | null
    _sum: YoloImagesSumAggregateOutputType | null
    _min: YoloImagesMinAggregateOutputType | null
    _max: YoloImagesMaxAggregateOutputType | null
  }

  export type YoloImagesAvgAggregateOutputType = {
    id: number | null
    imageId: number | null
  }

  export type YoloImagesSumAggregateOutputType = {
    id: number | null
    imageId: number | null
  }

  export type YoloImagesMinAggregateOutputType = {
    id: number | null
    imageId: number | null
    textToImage: string | null
  }

  export type YoloImagesMaxAggregateOutputType = {
    id: number | null
    imageId: number | null
    textToImage: string | null
  }

  export type YoloImagesCountAggregateOutputType = {
    id: number
    imageId: number
    textToImage: number
    _all: number
  }


  export type YoloImagesAvgAggregateInputType = {
    id?: true
    imageId?: true
  }

  export type YoloImagesSumAggregateInputType = {
    id?: true
    imageId?: true
  }

  export type YoloImagesMinAggregateInputType = {
    id?: true
    imageId?: true
    textToImage?: true
  }

  export type YoloImagesMaxAggregateInputType = {
    id?: true
    imageId?: true
    textToImage?: true
  }

  export type YoloImagesCountAggregateInputType = {
    id?: true
    imageId?: true
    textToImage?: true
    _all?: true
  }

  export type YoloImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which YoloImages to aggregate.
     */
    where?: YoloImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YoloImages to fetch.
     */
    orderBy?: YoloImagesOrderByWithRelationInput | YoloImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: YoloImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YoloImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YoloImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned YoloImages
    **/
    _count?: true | YoloImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: YoloImagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: YoloImagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: YoloImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: YoloImagesMaxAggregateInputType
  }

  export type GetYoloImagesAggregateType<T extends YoloImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateYoloImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYoloImages[P]>
      : GetScalarType<T[P], AggregateYoloImages[P]>
  }




  export type YoloImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YoloImagesWhereInput
    orderBy?: YoloImagesOrderByWithAggregationInput | YoloImagesOrderByWithAggregationInput[]
    by: YoloImagesScalarFieldEnum[] | YoloImagesScalarFieldEnum
    having?: YoloImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: YoloImagesCountAggregateInputType | true
    _avg?: YoloImagesAvgAggregateInputType
    _sum?: YoloImagesSumAggregateInputType
    _min?: YoloImagesMinAggregateInputType
    _max?: YoloImagesMaxAggregateInputType
  }

  export type YoloImagesGroupByOutputType = {
    id: number
    imageId: number
    textToImage: string
    _count: YoloImagesCountAggregateOutputType | null
    _avg: YoloImagesAvgAggregateOutputType | null
    _sum: YoloImagesSumAggregateOutputType | null
    _min: YoloImagesMinAggregateOutputType | null
    _max: YoloImagesMaxAggregateOutputType | null
  }

  type GetYoloImagesGroupByPayload<T extends YoloImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<YoloImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof YoloImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], YoloImagesGroupByOutputType[P]>
            : GetScalarType<T[P], YoloImagesGroupByOutputType[P]>
        }
      >
    >


  export type YoloImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageId?: boolean
    textToImage?: boolean
  }, ExtArgs["result"]["yoloImages"]>


  export type YoloImagesSelectScalar = {
    id?: boolean
    imageId?: boolean
    textToImage?: boolean
  }


  export type $YoloImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "YoloImages"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      imageId: number
      textToImage: string
    }, ExtArgs["result"]["yoloImages"]>
    composites: {}
  }

  type YoloImagesGetPayload<S extends boolean | null | undefined | YoloImagesDefaultArgs> = $Result.GetResult<Prisma.$YoloImagesPayload, S>

  type YoloImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<YoloImagesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: YoloImagesCountAggregateInputType | true
    }

  export interface YoloImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['YoloImages'], meta: { name: 'YoloImages' } }
    /**
     * Find zero or one YoloImages that matches the filter.
     * @param {YoloImagesFindUniqueArgs} args - Arguments to find a YoloImages
     * @example
     * // Get one YoloImages
     * const yoloImages = await prisma.yoloImages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends YoloImagesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, YoloImagesFindUniqueArgs<ExtArgs>>
    ): Prisma__YoloImagesClient<$Result.GetResult<Prisma.$YoloImagesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one YoloImages that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {YoloImagesFindUniqueOrThrowArgs} args - Arguments to find a YoloImages
     * @example
     * // Get one YoloImages
     * const yoloImages = await prisma.yoloImages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends YoloImagesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, YoloImagesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__YoloImagesClient<$Result.GetResult<Prisma.$YoloImagesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first YoloImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoloImagesFindFirstArgs} args - Arguments to find a YoloImages
     * @example
     * // Get one YoloImages
     * const yoloImages = await prisma.yoloImages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends YoloImagesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, YoloImagesFindFirstArgs<ExtArgs>>
    ): Prisma__YoloImagesClient<$Result.GetResult<Prisma.$YoloImagesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first YoloImages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoloImagesFindFirstOrThrowArgs} args - Arguments to find a YoloImages
     * @example
     * // Get one YoloImages
     * const yoloImages = await prisma.yoloImages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends YoloImagesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, YoloImagesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__YoloImagesClient<$Result.GetResult<Prisma.$YoloImagesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more YoloImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoloImagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all YoloImages
     * const yoloImages = await prisma.yoloImages.findMany()
     * 
     * // Get first 10 YoloImages
     * const yoloImages = await prisma.yoloImages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const yoloImagesWithIdOnly = await prisma.yoloImages.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends YoloImagesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, YoloImagesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YoloImagesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a YoloImages.
     * @param {YoloImagesCreateArgs} args - Arguments to create a YoloImages.
     * @example
     * // Create one YoloImages
     * const YoloImages = await prisma.yoloImages.create({
     *   data: {
     *     // ... data to create a YoloImages
     *   }
     * })
     * 
    **/
    create<T extends YoloImagesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, YoloImagesCreateArgs<ExtArgs>>
    ): Prisma__YoloImagesClient<$Result.GetResult<Prisma.$YoloImagesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many YoloImages.
     * @param {YoloImagesCreateManyArgs} args - Arguments to create many YoloImages.
     * @example
     * // Create many YoloImages
     * const yoloImages = await prisma.yoloImages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends YoloImagesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, YoloImagesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a YoloImages.
     * @param {YoloImagesDeleteArgs} args - Arguments to delete one YoloImages.
     * @example
     * // Delete one YoloImages
     * const YoloImages = await prisma.yoloImages.delete({
     *   where: {
     *     // ... filter to delete one YoloImages
     *   }
     * })
     * 
    **/
    delete<T extends YoloImagesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, YoloImagesDeleteArgs<ExtArgs>>
    ): Prisma__YoloImagesClient<$Result.GetResult<Prisma.$YoloImagesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one YoloImages.
     * @param {YoloImagesUpdateArgs} args - Arguments to update one YoloImages.
     * @example
     * // Update one YoloImages
     * const yoloImages = await prisma.yoloImages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends YoloImagesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, YoloImagesUpdateArgs<ExtArgs>>
    ): Prisma__YoloImagesClient<$Result.GetResult<Prisma.$YoloImagesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more YoloImages.
     * @param {YoloImagesDeleteManyArgs} args - Arguments to filter YoloImages to delete.
     * @example
     * // Delete a few YoloImages
     * const { count } = await prisma.yoloImages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends YoloImagesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, YoloImagesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more YoloImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoloImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many YoloImages
     * const yoloImages = await prisma.yoloImages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends YoloImagesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, YoloImagesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one YoloImages.
     * @param {YoloImagesUpsertArgs} args - Arguments to update or create a YoloImages.
     * @example
     * // Update or create a YoloImages
     * const yoloImages = await prisma.yoloImages.upsert({
     *   create: {
     *     // ... data to create a YoloImages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the YoloImages we want to update
     *   }
     * })
    **/
    upsert<T extends YoloImagesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, YoloImagesUpsertArgs<ExtArgs>>
    ): Prisma__YoloImagesClient<$Result.GetResult<Prisma.$YoloImagesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of YoloImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoloImagesCountArgs} args - Arguments to filter YoloImages to count.
     * @example
     * // Count the number of YoloImages
     * const count = await prisma.yoloImages.count({
     *   where: {
     *     // ... the filter for the YoloImages we want to count
     *   }
     * })
    **/
    count<T extends YoloImagesCountArgs>(
      args?: Subset<T, YoloImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], YoloImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a YoloImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoloImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends YoloImagesAggregateArgs>(args: Subset<T, YoloImagesAggregateArgs>): Prisma.PrismaPromise<GetYoloImagesAggregateType<T>>

    /**
     * Group by YoloImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoloImagesGroupByArgs} args - Group by arguments.
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
      T extends YoloImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: YoloImagesGroupByArgs['orderBy'] }
        : { orderBy?: YoloImagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, YoloImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYoloImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the YoloImages model
   */
  readonly fields: YoloImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for YoloImages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__YoloImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the YoloImages model
   */ 
  interface YoloImagesFieldRefs {
    readonly id: FieldRef<"YoloImages", 'Int'>
    readonly imageId: FieldRef<"YoloImages", 'Int'>
    readonly textToImage: FieldRef<"YoloImages", 'String'>
  }
    

  // Custom InputTypes
  /**
   * YoloImages findUnique
   */
  export type YoloImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoloImages
     */
    select?: YoloImagesSelect<ExtArgs> | null
    /**
     * Filter, which YoloImages to fetch.
     */
    where: YoloImagesWhereUniqueInput
  }

  /**
   * YoloImages findUniqueOrThrow
   */
  export type YoloImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoloImages
     */
    select?: YoloImagesSelect<ExtArgs> | null
    /**
     * Filter, which YoloImages to fetch.
     */
    where: YoloImagesWhereUniqueInput
  }

  /**
   * YoloImages findFirst
   */
  export type YoloImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoloImages
     */
    select?: YoloImagesSelect<ExtArgs> | null
    /**
     * Filter, which YoloImages to fetch.
     */
    where?: YoloImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YoloImages to fetch.
     */
    orderBy?: YoloImagesOrderByWithRelationInput | YoloImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for YoloImages.
     */
    cursor?: YoloImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YoloImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YoloImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YoloImages.
     */
    distinct?: YoloImagesScalarFieldEnum | YoloImagesScalarFieldEnum[]
  }

  /**
   * YoloImages findFirstOrThrow
   */
  export type YoloImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoloImages
     */
    select?: YoloImagesSelect<ExtArgs> | null
    /**
     * Filter, which YoloImages to fetch.
     */
    where?: YoloImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YoloImages to fetch.
     */
    orderBy?: YoloImagesOrderByWithRelationInput | YoloImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for YoloImages.
     */
    cursor?: YoloImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YoloImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YoloImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YoloImages.
     */
    distinct?: YoloImagesScalarFieldEnum | YoloImagesScalarFieldEnum[]
  }

  /**
   * YoloImages findMany
   */
  export type YoloImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoloImages
     */
    select?: YoloImagesSelect<ExtArgs> | null
    /**
     * Filter, which YoloImages to fetch.
     */
    where?: YoloImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YoloImages to fetch.
     */
    orderBy?: YoloImagesOrderByWithRelationInput | YoloImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing YoloImages.
     */
    cursor?: YoloImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YoloImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YoloImages.
     */
    skip?: number
    distinct?: YoloImagesScalarFieldEnum | YoloImagesScalarFieldEnum[]
  }

  /**
   * YoloImages create
   */
  export type YoloImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoloImages
     */
    select?: YoloImagesSelect<ExtArgs> | null
    /**
     * The data needed to create a YoloImages.
     */
    data: XOR<YoloImagesCreateInput, YoloImagesUncheckedCreateInput>
  }

  /**
   * YoloImages createMany
   */
  export type YoloImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many YoloImages.
     */
    data: YoloImagesCreateManyInput | YoloImagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * YoloImages update
   */
  export type YoloImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoloImages
     */
    select?: YoloImagesSelect<ExtArgs> | null
    /**
     * The data needed to update a YoloImages.
     */
    data: XOR<YoloImagesUpdateInput, YoloImagesUncheckedUpdateInput>
    /**
     * Choose, which YoloImages to update.
     */
    where: YoloImagesWhereUniqueInput
  }

  /**
   * YoloImages updateMany
   */
  export type YoloImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update YoloImages.
     */
    data: XOR<YoloImagesUpdateManyMutationInput, YoloImagesUncheckedUpdateManyInput>
    /**
     * Filter which YoloImages to update
     */
    where?: YoloImagesWhereInput
  }

  /**
   * YoloImages upsert
   */
  export type YoloImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoloImages
     */
    select?: YoloImagesSelect<ExtArgs> | null
    /**
     * The filter to search for the YoloImages to update in case it exists.
     */
    where: YoloImagesWhereUniqueInput
    /**
     * In case the YoloImages found by the `where` argument doesn't exist, create a new YoloImages with this data.
     */
    create: XOR<YoloImagesCreateInput, YoloImagesUncheckedCreateInput>
    /**
     * In case the YoloImages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<YoloImagesUpdateInput, YoloImagesUncheckedUpdateInput>
  }

  /**
   * YoloImages delete
   */
  export type YoloImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoloImages
     */
    select?: YoloImagesSelect<ExtArgs> | null
    /**
     * Filter which YoloImages to delete.
     */
    where: YoloImagesWhereUniqueInput
  }

  /**
   * YoloImages deleteMany
   */
  export type YoloImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which YoloImages to delete
     */
    where?: YoloImagesWhereInput
  }

  /**
   * YoloImages without action
   */
  export type YoloImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoloImages
     */
    select?: YoloImagesSelect<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    andreessId: 'andreessId',
    phone: 'phone',
    date_birth: 'date_birth',
    AuditTrailId: 'AuditTrailId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    sellerId: 'sellerId',
    buyerId: 'buyerId',
    datasheetsId: 'datasheetsId',
    name: 'name',
    price: 'price',
    description: 'description',
    image: 'image',
    auditTrailId: 'auditTrailId',
    size: 'size',
    salePrice: 'salePrice',
    repairCost: 'repairCost',
    finalPrice: 'finalPrice',
    repaired: 'repaired',
    lastModified: 'lastModified',
    interestedParties: 'interestedParties',
    brand: 'brand',
    model: 'model',
    condition: 'condition',
    supplierId: 'supplierId',
    cartId: 'cartId'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const AndreessScalarFieldEnum: {
    id: 'id',
    street: 'street',
    number: 'number',
    city: 'city',
    state: 'state',
    cep: 'cep',
    supplierId: 'supplierId'
  };

  export type AndreessScalarFieldEnum = (typeof AndreessScalarFieldEnum)[keyof typeof AndreessScalarFieldEnum]


  export const DatasheetsScalarFieldEnum: {
    id: 'id',
    description: 'description'
  };

  export type DatasheetsScalarFieldEnum = (typeof DatasheetsScalarFieldEnum)[keyof typeof DatasheetsScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const CartScalarFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const AuditTrailScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AuditTrailScalarFieldEnum = (typeof AuditTrailScalarFieldEnum)[keyof typeof AuditTrailScalarFieldEnum]


  export const YoloScalarFieldEnum: {
    id: 'id',
    x: 'x',
    y: 'y',
    height: 'height',
    width: 'width',
    classes: 'classes'
  };

  export type YoloScalarFieldEnum = (typeof YoloScalarFieldEnum)[keyof typeof YoloScalarFieldEnum]


  export const YoloTrainingScalarFieldEnum: {
    id: 'id',
    vectors: 'vectors'
  };

  export type YoloTrainingScalarFieldEnum = (typeof YoloTrainingScalarFieldEnum)[keyof typeof YoloTrainingScalarFieldEnum]


  export const YoloImagesScalarFieldEnum: {
    id: 'id',
    imageId: 'imageId',
    textToImage: 'textToImage'
  };

  export type YoloImagesScalarFieldEnum = (typeof YoloImagesScalarFieldEnum)[keyof typeof YoloImagesScalarFieldEnum]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    andreessId?: IntNullableFilter<"User"> | number | null
    phone?: StringNullableFilter<"User"> | string | null
    date_birth?: DateTimeFilter<"User"> | Date | string
    AuditTrailId?: IntNullableFilter<"User"> | number | null
    andreess?: XOR<AndreessNullableRelationFilter, AndreessWhereInput> | null
    AuditTrail?: XOR<AuditTrailNullableRelationFilter, AuditTrailWhereInput> | null
    cart?: CartListRelationFilter
    productsBought?: ProductsListRelationFilter
    productsSold?: ProductsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    andreessId?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    date_birth?: SortOrder
    AuditTrailId?: SortOrderInput | SortOrder
    andreess?: AndreessOrderByWithRelationInput
    AuditTrail?: AuditTrailOrderByWithRelationInput
    cart?: CartOrderByRelationAggregateInput
    productsBought?: ProductsOrderByRelationAggregateInput
    productsSold?: ProductsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    andreessId?: number
    AuditTrailId?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    date_birth?: DateTimeFilter<"User"> | Date | string
    andreess?: XOR<AndreessNullableRelationFilter, AndreessWhereInput> | null
    AuditTrail?: XOR<AuditTrailNullableRelationFilter, AuditTrailWhereInput> | null
    cart?: CartListRelationFilter
    productsBought?: ProductsListRelationFilter
    productsSold?: ProductsListRelationFilter
  }, "id" | "email" | "andreessId" | "AuditTrailId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    andreessId?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    date_birth?: SortOrder
    AuditTrailId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    andreessId?: IntNullableWithAggregatesFilter<"User"> | number | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    date_birth?: DateTimeWithAggregatesFilter<"User"> | Date | string
    AuditTrailId?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type supplierWhereInput = {
    AND?: supplierWhereInput | supplierWhereInput[]
    OR?: supplierWhereInput[]
    NOT?: supplierWhereInput | supplierWhereInput[]
    id?: IntFilter<"supplier"> | number
    name?: StringFilter<"supplier"> | string
    email?: StringFilter<"supplier"> | string
    phone?: StringFilter<"supplier"> | string
    andreess?: AndreessListRelationFilter
  }

  export type supplierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    andreess?: AndreessOrderByRelationAggregateInput
  }

  export type supplierWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: supplierWhereInput | supplierWhereInput[]
    OR?: supplierWhereInput[]
    NOT?: supplierWhereInput | supplierWhereInput[]
    name?: StringFilter<"supplier"> | string
    email?: StringFilter<"supplier"> | string
    phone?: StringFilter<"supplier"> | string
    andreess?: AndreessListRelationFilter
  }, "id">

  export type supplierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    _count?: supplierCountOrderByAggregateInput
    _avg?: supplierAvgOrderByAggregateInput
    _max?: supplierMaxOrderByAggregateInput
    _min?: supplierMinOrderByAggregateInput
    _sum?: supplierSumOrderByAggregateInput
  }

  export type supplierScalarWhereWithAggregatesInput = {
    AND?: supplierScalarWhereWithAggregatesInput | supplierScalarWhereWithAggregatesInput[]
    OR?: supplierScalarWhereWithAggregatesInput[]
    NOT?: supplierScalarWhereWithAggregatesInput | supplierScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"supplier"> | number
    name?: StringWithAggregatesFilter<"supplier"> | string
    email?: StringWithAggregatesFilter<"supplier"> | string
    phone?: StringWithAggregatesFilter<"supplier"> | string
  }

  export type ProductsWhereInput = {
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    id?: IntFilter<"Products"> | number
    categoryId?: IntNullableFilter<"Products"> | number | null
    sellerId?: IntFilter<"Products"> | number
    buyerId?: IntFilter<"Products"> | number
    datasheetsId?: IntNullableFilter<"Products"> | number | null
    name?: StringFilter<"Products"> | string
    price?: FloatFilter<"Products"> | number
    description?: StringFilter<"Products"> | string
    image?: StringFilter<"Products"> | string
    auditTrailId?: IntFilter<"Products"> | number
    size?: FloatFilter<"Products"> | number
    salePrice?: DecimalFilter<"Products"> | Decimal | DecimalJsLike | number | string
    repairCost?: DecimalFilter<"Products"> | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFilter<"Products"> | Decimal | DecimalJsLike | number | string
    repaired?: BoolFilter<"Products"> | boolean
    lastModified?: DateTimeFilter<"Products"> | Date | string
    interestedParties?: IntFilter<"Products"> | number
    brand?: StringFilter<"Products"> | string
    model?: StringFilter<"Products"> | string
    condition?: StringFilter<"Products"> | string
    supplierId?: IntFilter<"Products"> | number
    cartId?: IntNullableFilter<"Products"> | number | null
    auditTrail?: XOR<AuditTrailRelationFilter, AuditTrailWhereInput>
    datasheet?: XOR<DatasheetsNullableRelationFilter, DatasheetsWhereInput> | null
    category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    seller?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    buyer?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    cart?: XOR<CartNullableRelationFilter, CartWhereInput> | null
  }

  export type ProductsOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    sellerId?: SortOrder
    buyerId?: SortOrder
    datasheetsId?: SortOrderInput | SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    image?: SortOrder
    auditTrailId?: SortOrder
    size?: SortOrder
    salePrice?: SortOrder
    repairCost?: SortOrder
    finalPrice?: SortOrder
    repaired?: SortOrder
    lastModified?: SortOrder
    interestedParties?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    condition?: SortOrder
    supplierId?: SortOrder
    cartId?: SortOrderInput | SortOrder
    auditTrail?: AuditTrailOrderByWithRelationInput
    datasheet?: DatasheetsOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    seller?: UserOrderByWithRelationInput
    buyer?: UserOrderByWithRelationInput
    cart?: CartOrderByWithRelationInput
  }

  export type ProductsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    datasheetsId?: number
    auditTrailId?: number
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    categoryId?: IntNullableFilter<"Products"> | number | null
    sellerId?: IntFilter<"Products"> | number
    buyerId?: IntFilter<"Products"> | number
    name?: StringFilter<"Products"> | string
    price?: FloatFilter<"Products"> | number
    description?: StringFilter<"Products"> | string
    image?: StringFilter<"Products"> | string
    size?: FloatFilter<"Products"> | number
    salePrice?: DecimalFilter<"Products"> | Decimal | DecimalJsLike | number | string
    repairCost?: DecimalFilter<"Products"> | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFilter<"Products"> | Decimal | DecimalJsLike | number | string
    repaired?: BoolFilter<"Products"> | boolean
    lastModified?: DateTimeFilter<"Products"> | Date | string
    interestedParties?: IntFilter<"Products"> | number
    brand?: StringFilter<"Products"> | string
    model?: StringFilter<"Products"> | string
    condition?: StringFilter<"Products"> | string
    supplierId?: IntFilter<"Products"> | number
    cartId?: IntNullableFilter<"Products"> | number | null
    auditTrail?: XOR<AuditTrailRelationFilter, AuditTrailWhereInput>
    datasheet?: XOR<DatasheetsNullableRelationFilter, DatasheetsWhereInput> | null
    category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    seller?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    buyer?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    cart?: XOR<CartNullableRelationFilter, CartWhereInput> | null
  }, "id" | "datasheetsId" | "auditTrailId">

  export type ProductsOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    sellerId?: SortOrder
    buyerId?: SortOrder
    datasheetsId?: SortOrderInput | SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    image?: SortOrder
    auditTrailId?: SortOrder
    size?: SortOrder
    salePrice?: SortOrder
    repairCost?: SortOrder
    finalPrice?: SortOrder
    repaired?: SortOrder
    lastModified?: SortOrder
    interestedParties?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    condition?: SortOrder
    supplierId?: SortOrder
    cartId?: SortOrderInput | SortOrder
    _count?: ProductsCountOrderByAggregateInput
    _avg?: ProductsAvgOrderByAggregateInput
    _max?: ProductsMaxOrderByAggregateInput
    _min?: ProductsMinOrderByAggregateInput
    _sum?: ProductsSumOrderByAggregateInput
  }

  export type ProductsScalarWhereWithAggregatesInput = {
    AND?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    OR?: ProductsScalarWhereWithAggregatesInput[]
    NOT?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Products"> | number
    categoryId?: IntNullableWithAggregatesFilter<"Products"> | number | null
    sellerId?: IntWithAggregatesFilter<"Products"> | number
    buyerId?: IntWithAggregatesFilter<"Products"> | number
    datasheetsId?: IntNullableWithAggregatesFilter<"Products"> | number | null
    name?: StringWithAggregatesFilter<"Products"> | string
    price?: FloatWithAggregatesFilter<"Products"> | number
    description?: StringWithAggregatesFilter<"Products"> | string
    image?: StringWithAggregatesFilter<"Products"> | string
    auditTrailId?: IntWithAggregatesFilter<"Products"> | number
    size?: FloatWithAggregatesFilter<"Products"> | number
    salePrice?: DecimalWithAggregatesFilter<"Products"> | Decimal | DecimalJsLike | number | string
    repairCost?: DecimalWithAggregatesFilter<"Products"> | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalWithAggregatesFilter<"Products"> | Decimal | DecimalJsLike | number | string
    repaired?: BoolWithAggregatesFilter<"Products"> | boolean
    lastModified?: DateTimeWithAggregatesFilter<"Products"> | Date | string
    interestedParties?: IntWithAggregatesFilter<"Products"> | number
    brand?: StringWithAggregatesFilter<"Products"> | string
    model?: StringWithAggregatesFilter<"Products"> | string
    condition?: StringWithAggregatesFilter<"Products"> | string
    supplierId?: IntWithAggregatesFilter<"Products"> | number
    cartId?: IntNullableWithAggregatesFilter<"Products"> | number | null
  }

  export type AndreessWhereInput = {
    AND?: AndreessWhereInput | AndreessWhereInput[]
    OR?: AndreessWhereInput[]
    NOT?: AndreessWhereInput | AndreessWhereInput[]
    id?: IntFilter<"Andreess"> | number
    street?: StringFilter<"Andreess"> | string
    number?: StringFilter<"Andreess"> | string
    city?: StringFilter<"Andreess"> | string
    state?: StringFilter<"Andreess"> | string
    cep?: StringFilter<"Andreess"> | string
    supplierId?: IntNullableFilter<"Andreess"> | number | null
    supplier?: XOR<SupplierNullableRelationFilter, supplierWhereInput> | null
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type AndreessOrderByWithRelationInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    city?: SortOrder
    state?: SortOrder
    cep?: SortOrder
    supplierId?: SortOrderInput | SortOrder
    supplier?: supplierOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type AndreessWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AndreessWhereInput | AndreessWhereInput[]
    OR?: AndreessWhereInput[]
    NOT?: AndreessWhereInput | AndreessWhereInput[]
    street?: StringFilter<"Andreess"> | string
    number?: StringFilter<"Andreess"> | string
    city?: StringFilter<"Andreess"> | string
    state?: StringFilter<"Andreess"> | string
    cep?: StringFilter<"Andreess"> | string
    supplierId?: IntNullableFilter<"Andreess"> | number | null
    supplier?: XOR<SupplierNullableRelationFilter, supplierWhereInput> | null
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type AndreessOrderByWithAggregationInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    city?: SortOrder
    state?: SortOrder
    cep?: SortOrder
    supplierId?: SortOrderInput | SortOrder
    _count?: AndreessCountOrderByAggregateInput
    _avg?: AndreessAvgOrderByAggregateInput
    _max?: AndreessMaxOrderByAggregateInput
    _min?: AndreessMinOrderByAggregateInput
    _sum?: AndreessSumOrderByAggregateInput
  }

  export type AndreessScalarWhereWithAggregatesInput = {
    AND?: AndreessScalarWhereWithAggregatesInput | AndreessScalarWhereWithAggregatesInput[]
    OR?: AndreessScalarWhereWithAggregatesInput[]
    NOT?: AndreessScalarWhereWithAggregatesInput | AndreessScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Andreess"> | number
    street?: StringWithAggregatesFilter<"Andreess"> | string
    number?: StringWithAggregatesFilter<"Andreess"> | string
    city?: StringWithAggregatesFilter<"Andreess"> | string
    state?: StringWithAggregatesFilter<"Andreess"> | string
    cep?: StringWithAggregatesFilter<"Andreess"> | string
    supplierId?: IntNullableWithAggregatesFilter<"Andreess"> | number | null
  }

  export type DatasheetsWhereInput = {
    AND?: DatasheetsWhereInput | DatasheetsWhereInput[]
    OR?: DatasheetsWhereInput[]
    NOT?: DatasheetsWhereInput | DatasheetsWhereInput[]
    id?: IntFilter<"Datasheets"> | number
    description?: StringNullableFilter<"Datasheets"> | string | null
    products?: ProductsListRelationFilter
  }

  export type DatasheetsOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    products?: ProductsOrderByRelationAggregateInput
  }

  export type DatasheetsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DatasheetsWhereInput | DatasheetsWhereInput[]
    OR?: DatasheetsWhereInput[]
    NOT?: DatasheetsWhereInput | DatasheetsWhereInput[]
    description?: StringNullableFilter<"Datasheets"> | string | null
    products?: ProductsListRelationFilter
  }, "id">

  export type DatasheetsOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: DatasheetsCountOrderByAggregateInput
    _avg?: DatasheetsAvgOrderByAggregateInput
    _max?: DatasheetsMaxOrderByAggregateInput
    _min?: DatasheetsMinOrderByAggregateInput
    _sum?: DatasheetsSumOrderByAggregateInput
  }

  export type DatasheetsScalarWhereWithAggregatesInput = {
    AND?: DatasheetsScalarWhereWithAggregatesInput | DatasheetsScalarWhereWithAggregatesInput[]
    OR?: DatasheetsScalarWhereWithAggregatesInput[]
    NOT?: DatasheetsScalarWhereWithAggregatesInput | DatasheetsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Datasheets"> | number
    description?: StringNullableWithAggregatesFilter<"Datasheets"> | string | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    products?: ProductsListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    products?: ProductsOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    products?: ProductsListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type CartWhereInput = {
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    id?: IntFilter<"Cart"> | number
    userId?: IntFilter<"Cart"> | number
    product?: ProductsListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CartOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    product?: ProductsOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type CartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    product?: ProductsListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type CartOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    _count?: CartCountOrderByAggregateInput
    _avg?: CartAvgOrderByAggregateInput
    _max?: CartMaxOrderByAggregateInput
    _min?: CartMinOrderByAggregateInput
    _sum?: CartSumOrderByAggregateInput
  }

  export type CartScalarWhereWithAggregatesInput = {
    AND?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    OR?: CartScalarWhereWithAggregatesInput[]
    NOT?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cart"> | number
    userId?: IntWithAggregatesFilter<"Cart"> | number
  }

  export type AuditTrailWhereInput = {
    AND?: AuditTrailWhereInput | AuditTrailWhereInput[]
    OR?: AuditTrailWhereInput[]
    NOT?: AuditTrailWhereInput | AuditTrailWhereInput[]
    id?: IntFilter<"AuditTrail"> | number
    created_at?: DateTimeFilter<"AuditTrail"> | Date | string
    updated_at?: DateTimeFilter<"AuditTrail"> | Date | string
    Products?: XOR<ProductsNullableRelationFilter, ProductsWhereInput> | null
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type AuditTrailOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    Products?: ProductsOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type AuditTrailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AuditTrailWhereInput | AuditTrailWhereInput[]
    OR?: AuditTrailWhereInput[]
    NOT?: AuditTrailWhereInput | AuditTrailWhereInput[]
    created_at?: DateTimeFilter<"AuditTrail"> | Date | string
    updated_at?: DateTimeFilter<"AuditTrail"> | Date | string
    Products?: XOR<ProductsNullableRelationFilter, ProductsWhereInput> | null
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type AuditTrailOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AuditTrailCountOrderByAggregateInput
    _avg?: AuditTrailAvgOrderByAggregateInput
    _max?: AuditTrailMaxOrderByAggregateInput
    _min?: AuditTrailMinOrderByAggregateInput
    _sum?: AuditTrailSumOrderByAggregateInput
  }

  export type AuditTrailScalarWhereWithAggregatesInput = {
    AND?: AuditTrailScalarWhereWithAggregatesInput | AuditTrailScalarWhereWithAggregatesInput[]
    OR?: AuditTrailScalarWhereWithAggregatesInput[]
    NOT?: AuditTrailScalarWhereWithAggregatesInput | AuditTrailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AuditTrail"> | number
    created_at?: DateTimeWithAggregatesFilter<"AuditTrail"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"AuditTrail"> | Date | string
  }

  export type YoloWhereInput = {
    AND?: YoloWhereInput | YoloWhereInput[]
    OR?: YoloWhereInput[]
    NOT?: YoloWhereInput | YoloWhereInput[]
    id?: IntFilter<"Yolo"> | number
    x?: IntFilter<"Yolo"> | number
    y?: IntFilter<"Yolo"> | number
    height?: FloatFilter<"Yolo"> | number
    width?: FloatFilter<"Yolo"> | number
    classes?: StringFilter<"Yolo"> | string
  }

  export type YoloOrderByWithRelationInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    height?: SortOrder
    width?: SortOrder
    classes?: SortOrder
  }

  export type YoloWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: YoloWhereInput | YoloWhereInput[]
    OR?: YoloWhereInput[]
    NOT?: YoloWhereInput | YoloWhereInput[]
    x?: IntFilter<"Yolo"> | number
    y?: IntFilter<"Yolo"> | number
    height?: FloatFilter<"Yolo"> | number
    width?: FloatFilter<"Yolo"> | number
    classes?: StringFilter<"Yolo"> | string
  }, "id">

  export type YoloOrderByWithAggregationInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    height?: SortOrder
    width?: SortOrder
    classes?: SortOrder
    _count?: YoloCountOrderByAggregateInput
    _avg?: YoloAvgOrderByAggregateInput
    _max?: YoloMaxOrderByAggregateInput
    _min?: YoloMinOrderByAggregateInput
    _sum?: YoloSumOrderByAggregateInput
  }

  export type YoloScalarWhereWithAggregatesInput = {
    AND?: YoloScalarWhereWithAggregatesInput | YoloScalarWhereWithAggregatesInput[]
    OR?: YoloScalarWhereWithAggregatesInput[]
    NOT?: YoloScalarWhereWithAggregatesInput | YoloScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Yolo"> | number
    x?: IntWithAggregatesFilter<"Yolo"> | number
    y?: IntWithAggregatesFilter<"Yolo"> | number
    height?: FloatWithAggregatesFilter<"Yolo"> | number
    width?: FloatWithAggregatesFilter<"Yolo"> | number
    classes?: StringWithAggregatesFilter<"Yolo"> | string
  }

  export type YoloTrainingWhereInput = {
    AND?: YoloTrainingWhereInput | YoloTrainingWhereInput[]
    OR?: YoloTrainingWhereInput[]
    NOT?: YoloTrainingWhereInput | YoloTrainingWhereInput[]
    id?: IntFilter<"YoloTraining"> | number
    vectors?: StringFilter<"YoloTraining"> | string
  }

  export type YoloTrainingOrderByWithRelationInput = {
    id?: SortOrder
    vectors?: SortOrder
  }

  export type YoloTrainingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: YoloTrainingWhereInput | YoloTrainingWhereInput[]
    OR?: YoloTrainingWhereInput[]
    NOT?: YoloTrainingWhereInput | YoloTrainingWhereInput[]
    vectors?: StringFilter<"YoloTraining"> | string
  }, "id">

  export type YoloTrainingOrderByWithAggregationInput = {
    id?: SortOrder
    vectors?: SortOrder
    _count?: YoloTrainingCountOrderByAggregateInput
    _avg?: YoloTrainingAvgOrderByAggregateInput
    _max?: YoloTrainingMaxOrderByAggregateInput
    _min?: YoloTrainingMinOrderByAggregateInput
    _sum?: YoloTrainingSumOrderByAggregateInput
  }

  export type YoloTrainingScalarWhereWithAggregatesInput = {
    AND?: YoloTrainingScalarWhereWithAggregatesInput | YoloTrainingScalarWhereWithAggregatesInput[]
    OR?: YoloTrainingScalarWhereWithAggregatesInput[]
    NOT?: YoloTrainingScalarWhereWithAggregatesInput | YoloTrainingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"YoloTraining"> | number
    vectors?: StringWithAggregatesFilter<"YoloTraining"> | string
  }

  export type YoloImagesWhereInput = {
    AND?: YoloImagesWhereInput | YoloImagesWhereInput[]
    OR?: YoloImagesWhereInput[]
    NOT?: YoloImagesWhereInput | YoloImagesWhereInput[]
    id?: IntFilter<"YoloImages"> | number
    imageId?: IntFilter<"YoloImages"> | number
    textToImage?: StringFilter<"YoloImages"> | string
  }

  export type YoloImagesOrderByWithRelationInput = {
    id?: SortOrder
    imageId?: SortOrder
    textToImage?: SortOrder
  }

  export type YoloImagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: YoloImagesWhereInput | YoloImagesWhereInput[]
    OR?: YoloImagesWhereInput[]
    NOT?: YoloImagesWhereInput | YoloImagesWhereInput[]
    imageId?: IntFilter<"YoloImages"> | number
    textToImage?: StringFilter<"YoloImages"> | string
  }, "id">

  export type YoloImagesOrderByWithAggregationInput = {
    id?: SortOrder
    imageId?: SortOrder
    textToImage?: SortOrder
    _count?: YoloImagesCountOrderByAggregateInput
    _avg?: YoloImagesAvgOrderByAggregateInput
    _max?: YoloImagesMaxOrderByAggregateInput
    _min?: YoloImagesMinOrderByAggregateInput
    _sum?: YoloImagesSumOrderByAggregateInput
  }

  export type YoloImagesScalarWhereWithAggregatesInput = {
    AND?: YoloImagesScalarWhereWithAggregatesInput | YoloImagesScalarWhereWithAggregatesInput[]
    OR?: YoloImagesScalarWhereWithAggregatesInput[]
    NOT?: YoloImagesScalarWhereWithAggregatesInput | YoloImagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"YoloImages"> | number
    imageId?: IntWithAggregatesFilter<"YoloImages"> | number
    textToImage?: StringWithAggregatesFilter<"YoloImages"> | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    name: string
    phone?: string | null
    date_birth: Date | string
    andreess?: AndreessCreateNestedOneWithoutUserInput
    AuditTrail?: AuditTrailCreateNestedOneWithoutUserInput
    cart?: CartCreateNestedManyWithoutUserInput
    productsBought?: ProductsCreateNestedManyWithoutBuyerInput
    productsSold?: ProductsCreateNestedManyWithoutSellerInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
    andreessId?: number | null
    phone?: string | null
    date_birth: Date | string
    AuditTrailId?: number | null
    cart?: CartUncheckedCreateNestedManyWithoutUserInput
    productsBought?: ProductsUncheckedCreateNestedManyWithoutBuyerInput
    productsSold?: ProductsUncheckedCreateNestedManyWithoutSellerInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    date_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    andreess?: AndreessUpdateOneWithoutUserNestedInput
    AuditTrail?: AuditTrailUpdateOneWithoutUserNestedInput
    cart?: CartUpdateManyWithoutUserNestedInput
    productsBought?: ProductsUpdateManyWithoutBuyerNestedInput
    productsSold?: ProductsUpdateManyWithoutSellerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    andreessId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    date_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    AuditTrailId?: NullableIntFieldUpdateOperationsInput | number | null
    cart?: CartUncheckedUpdateManyWithoutUserNestedInput
    productsBought?: ProductsUncheckedUpdateManyWithoutBuyerNestedInput
    productsSold?: ProductsUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    name: string
    andreessId?: number | null
    phone?: string | null
    date_birth: Date | string
    AuditTrailId?: number | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    date_birth?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    andreessId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    date_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    AuditTrailId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type supplierCreateInput = {
    name: string
    email: string
    phone: string
    andreess?: AndreessCreateNestedManyWithoutSupplierInput
  }

  export type supplierUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    andreess?: AndreessUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type supplierUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    andreess?: AndreessUpdateManyWithoutSupplierNestedInput
  }

  export type supplierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    andreess?: AndreessUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type supplierCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
  }

  export type supplierUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type supplierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type ProductsCreateInput = {
    name: string
    price: number
    description: string
    image: string
    size: number
    salePrice: Decimal | DecimalJsLike | number | string
    repairCost: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    repaired: boolean
    lastModified: Date | string
    interestedParties: number
    brand: string
    model: string
    condition: string
    supplierId: number
    auditTrail: AuditTrailCreateNestedOneWithoutProductsInput
    datasheet?: DatasheetsCreateNestedOneWithoutProductsInput
    category?: CategoryCreateNestedOneWithoutProductsInput
    seller?: UserCreateNestedOneWithoutProductsSoldInput
    buyer?: UserCreateNestedOneWithoutProductsBoughtInput
    cart?: CartCreateNestedOneWithoutProductInput
  }

  export type ProductsUncheckedCreateInput = {
    id?: number
    categoryId?: number | null
    sellerId: number
    buyerId: number
    datasheetsId?: number | null
    name: string
    price: number
    description: string
    image: string
    auditTrailId: number
    size: number
    salePrice: Decimal | DecimalJsLike | number | string
    repairCost: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    repaired: boolean
    lastModified: Date | string
    interestedParties: number
    brand: string
    model: string
    condition: string
    supplierId: number
    cartId?: number | null
  }

  export type ProductsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repairCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repaired?: BoolFieldUpdateOperationsInput | boolean
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    interestedParties?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    supplierId?: IntFieldUpdateOperationsInput | number
    auditTrail?: AuditTrailUpdateOneRequiredWithoutProductsNestedInput
    datasheet?: DatasheetsUpdateOneWithoutProductsNestedInput
    category?: CategoryUpdateOneWithoutProductsNestedInput
    seller?: UserUpdateOneWithoutProductsSoldNestedInput
    buyer?: UserUpdateOneWithoutProductsBoughtNestedInput
    cart?: CartUpdateOneWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    sellerId?: IntFieldUpdateOperationsInput | number
    buyerId?: IntFieldUpdateOperationsInput | number
    datasheetsId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    auditTrailId?: IntFieldUpdateOperationsInput | number
    size?: FloatFieldUpdateOperationsInput | number
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repairCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repaired?: BoolFieldUpdateOperationsInput | boolean
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    interestedParties?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    supplierId?: IntFieldUpdateOperationsInput | number
    cartId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductsCreateManyInput = {
    id?: number
    categoryId?: number | null
    sellerId: number
    buyerId: number
    datasheetsId?: number | null
    name: string
    price: number
    description: string
    image: string
    auditTrailId: number
    size: number
    salePrice: Decimal | DecimalJsLike | number | string
    repairCost: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    repaired: boolean
    lastModified: Date | string
    interestedParties: number
    brand: string
    model: string
    condition: string
    supplierId: number
    cartId?: number | null
  }

  export type ProductsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repairCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repaired?: BoolFieldUpdateOperationsInput | boolean
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    interestedParties?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    supplierId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    sellerId?: IntFieldUpdateOperationsInput | number
    buyerId?: IntFieldUpdateOperationsInput | number
    datasheetsId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    auditTrailId?: IntFieldUpdateOperationsInput | number
    size?: FloatFieldUpdateOperationsInput | number
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repairCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repaired?: BoolFieldUpdateOperationsInput | boolean
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    interestedParties?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    supplierId?: IntFieldUpdateOperationsInput | number
    cartId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AndreessCreateInput = {
    street: string
    number: string
    city: string
    state: string
    cep: string
    supplier?: supplierCreateNestedOneWithoutAndreessInput
    User?: UserCreateNestedOneWithoutAndreessInput
  }

  export type AndreessUncheckedCreateInput = {
    id?: number
    street: string
    number: string
    city: string
    state: string
    cep: string
    supplierId?: number | null
    User?: UserUncheckedCreateNestedOneWithoutAndreessInput
  }

  export type AndreessUpdateInput = {
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    supplier?: supplierUpdateOneWithoutAndreessNestedInput
    User?: UserUpdateOneWithoutAndreessNestedInput
  }

  export type AndreessUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableIntFieldUpdateOperationsInput | number | null
    User?: UserUncheckedUpdateOneWithoutAndreessNestedInput
  }

  export type AndreessCreateManyInput = {
    id?: number
    street: string
    number: string
    city: string
    state: string
    cep: string
    supplierId?: number | null
  }

  export type AndreessUpdateManyMutationInput = {
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
  }

  export type AndreessUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DatasheetsCreateInput = {
    description?: string | null
    products?: ProductsCreateNestedManyWithoutDatasheetInput
  }

  export type DatasheetsUncheckedCreateInput = {
    id?: number
    description?: string | null
    products?: ProductsUncheckedCreateNestedManyWithoutDatasheetInput
  }

  export type DatasheetsUpdateInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductsUpdateManyWithoutDatasheetNestedInput
  }

  export type DatasheetsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductsUncheckedUpdateManyWithoutDatasheetNestedInput
  }

  export type DatasheetsCreateManyInput = {
    id?: number
    description?: string | null
  }

  export type DatasheetsUpdateManyMutationInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DatasheetsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryCreateInput = {
    name: string
    products?: ProductsCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    products?: ProductsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductsUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CartCreateInput = {
    product?: ProductsCreateNestedManyWithoutCartInput
    user: UserCreateNestedOneWithoutCartInput
  }

  export type CartUncheckedCreateInput = {
    id?: number
    userId: number
    product?: ProductsUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartUpdateInput = {
    product?: ProductsUpdateManyWithoutCartNestedInput
    user?: UserUpdateOneRequiredWithoutCartNestedInput
  }

  export type CartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    product?: ProductsUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartCreateManyInput = {
    id?: number
    userId: number
  }

  export type CartUpdateManyMutationInput = {

  }

  export type CartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AuditTrailCreateInput = {
    created_at?: Date | string
    updated_at?: Date | string
    Products?: ProductsCreateNestedOneWithoutAuditTrailInput
    User?: UserCreateNestedOneWithoutAuditTrailInput
  }

  export type AuditTrailUncheckedCreateInput = {
    id?: number
    created_at?: Date | string
    updated_at?: Date | string
    Products?: ProductsUncheckedCreateNestedOneWithoutAuditTrailInput
    User?: UserUncheckedCreateNestedOneWithoutAuditTrailInput
  }

  export type AuditTrailUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Products?: ProductsUpdateOneWithoutAuditTrailNestedInput
    User?: UserUpdateOneWithoutAuditTrailNestedInput
  }

  export type AuditTrailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Products?: ProductsUncheckedUpdateOneWithoutAuditTrailNestedInput
    User?: UserUncheckedUpdateOneWithoutAuditTrailNestedInput
  }

  export type AuditTrailCreateManyInput = {
    id?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AuditTrailUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditTrailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YoloCreateInput = {
    x: number
    y: number
    height: number
    width: number
    classes: string
  }

  export type YoloUncheckedCreateInput = {
    id?: number
    x: number
    y: number
    height: number
    width: number
    classes: string
  }

  export type YoloUpdateInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    classes?: StringFieldUpdateOperationsInput | string
  }

  export type YoloUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    classes?: StringFieldUpdateOperationsInput | string
  }

  export type YoloCreateManyInput = {
    id?: number
    x: number
    y: number
    height: number
    width: number
    classes: string
  }

  export type YoloUpdateManyMutationInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    classes?: StringFieldUpdateOperationsInput | string
  }

  export type YoloUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    classes?: StringFieldUpdateOperationsInput | string
  }

  export type YoloTrainingCreateInput = {
    vectors: string
  }

  export type YoloTrainingUncheckedCreateInput = {
    id?: number
    vectors: string
  }

  export type YoloTrainingUpdateInput = {
    vectors?: StringFieldUpdateOperationsInput | string
  }

  export type YoloTrainingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vectors?: StringFieldUpdateOperationsInput | string
  }

  export type YoloTrainingCreateManyInput = {
    id?: number
    vectors: string
  }

  export type YoloTrainingUpdateManyMutationInput = {
    vectors?: StringFieldUpdateOperationsInput | string
  }

  export type YoloTrainingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vectors?: StringFieldUpdateOperationsInput | string
  }

  export type YoloImagesCreateInput = {
    imageId: number
    textToImage: string
  }

  export type YoloImagesUncheckedCreateInput = {
    id?: number
    imageId: number
    textToImage: string
  }

  export type YoloImagesUpdateInput = {
    imageId?: IntFieldUpdateOperationsInput | number
    textToImage?: StringFieldUpdateOperationsInput | string
  }

  export type YoloImagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    textToImage?: StringFieldUpdateOperationsInput | string
  }

  export type YoloImagesCreateManyInput = {
    id?: number
    imageId: number
    textToImage: string
  }

  export type YoloImagesUpdateManyMutationInput = {
    imageId?: IntFieldUpdateOperationsInput | number
    textToImage?: StringFieldUpdateOperationsInput | string
  }

  export type YoloImagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    textToImage?: StringFieldUpdateOperationsInput | string
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type AndreessNullableRelationFilter = {
    is?: AndreessWhereInput | null
    isNot?: AndreessWhereInput | null
  }

  export type AuditTrailNullableRelationFilter = {
    is?: AuditTrailWhereInput | null
    isNot?: AuditTrailWhereInput | null
  }

  export type CartListRelationFilter = {
    every?: CartWhereInput
    some?: CartWhereInput
    none?: CartWhereInput
  }

  export type ProductsListRelationFilter = {
    every?: ProductsWhereInput
    some?: ProductsWhereInput
    none?: ProductsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    andreessId?: SortOrder
    phone?: SortOrder
    date_birth?: SortOrder
    AuditTrailId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    andreessId?: SortOrder
    AuditTrailId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    andreessId?: SortOrder
    phone?: SortOrder
    date_birth?: SortOrder
    AuditTrailId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    andreessId?: SortOrder
    phone?: SortOrder
    date_birth?: SortOrder
    AuditTrailId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    andreessId?: SortOrder
    AuditTrailId?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type AndreessListRelationFilter = {
    every?: AndreessWhereInput
    some?: AndreessWhereInput
    none?: AndreessWhereInput
  }

  export type AndreessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type supplierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type supplierAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type supplierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type supplierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type supplierSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AuditTrailRelationFilter = {
    is?: AuditTrailWhereInput
    isNot?: AuditTrailWhereInput
  }

  export type DatasheetsNullableRelationFilter = {
    is?: DatasheetsWhereInput | null
    isNot?: DatasheetsWhereInput | null
  }

  export type CategoryNullableRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CartNullableRelationFilter = {
    is?: CartWhereInput | null
    isNot?: CartWhereInput | null
  }

  export type ProductsCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    sellerId?: SortOrder
    buyerId?: SortOrder
    datasheetsId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    image?: SortOrder
    auditTrailId?: SortOrder
    size?: SortOrder
    salePrice?: SortOrder
    repairCost?: SortOrder
    finalPrice?: SortOrder
    repaired?: SortOrder
    lastModified?: SortOrder
    interestedParties?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    condition?: SortOrder
    supplierId?: SortOrder
    cartId?: SortOrder
  }

  export type ProductsAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    sellerId?: SortOrder
    buyerId?: SortOrder
    datasheetsId?: SortOrder
    price?: SortOrder
    auditTrailId?: SortOrder
    size?: SortOrder
    salePrice?: SortOrder
    repairCost?: SortOrder
    finalPrice?: SortOrder
    interestedParties?: SortOrder
    supplierId?: SortOrder
    cartId?: SortOrder
  }

  export type ProductsMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    sellerId?: SortOrder
    buyerId?: SortOrder
    datasheetsId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    image?: SortOrder
    auditTrailId?: SortOrder
    size?: SortOrder
    salePrice?: SortOrder
    repairCost?: SortOrder
    finalPrice?: SortOrder
    repaired?: SortOrder
    lastModified?: SortOrder
    interestedParties?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    condition?: SortOrder
    supplierId?: SortOrder
    cartId?: SortOrder
  }

  export type ProductsMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    sellerId?: SortOrder
    buyerId?: SortOrder
    datasheetsId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    image?: SortOrder
    auditTrailId?: SortOrder
    size?: SortOrder
    salePrice?: SortOrder
    repairCost?: SortOrder
    finalPrice?: SortOrder
    repaired?: SortOrder
    lastModified?: SortOrder
    interestedParties?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    condition?: SortOrder
    supplierId?: SortOrder
    cartId?: SortOrder
  }

  export type ProductsSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    sellerId?: SortOrder
    buyerId?: SortOrder
    datasheetsId?: SortOrder
    price?: SortOrder
    auditTrailId?: SortOrder
    size?: SortOrder
    salePrice?: SortOrder
    repairCost?: SortOrder
    finalPrice?: SortOrder
    interestedParties?: SortOrder
    supplierId?: SortOrder
    cartId?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SupplierNullableRelationFilter = {
    is?: supplierWhereInput | null
    isNot?: supplierWhereInput | null
  }

  export type AndreessCountOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    city?: SortOrder
    state?: SortOrder
    cep?: SortOrder
    supplierId?: SortOrder
  }

  export type AndreessAvgOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
  }

  export type AndreessMaxOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    city?: SortOrder
    state?: SortOrder
    cep?: SortOrder
    supplierId?: SortOrder
  }

  export type AndreessMinOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    city?: SortOrder
    state?: SortOrder
    cep?: SortOrder
    supplierId?: SortOrder
  }

  export type AndreessSumOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
  }

  export type DatasheetsCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
  }

  export type DatasheetsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DatasheetsMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
  }

  export type DatasheetsMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
  }

  export type DatasheetsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CartCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CartAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CartMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CartMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CartSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProductsNullableRelationFilter = {
    is?: ProductsWhereInput | null
    isNot?: ProductsWhereInput | null
  }

  export type AuditTrailCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AuditTrailAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AuditTrailMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AuditTrailMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AuditTrailSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type YoloCountOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    height?: SortOrder
    width?: SortOrder
    classes?: SortOrder
  }

  export type YoloAvgOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    height?: SortOrder
    width?: SortOrder
  }

  export type YoloMaxOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    height?: SortOrder
    width?: SortOrder
    classes?: SortOrder
  }

  export type YoloMinOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    height?: SortOrder
    width?: SortOrder
    classes?: SortOrder
  }

  export type YoloSumOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    height?: SortOrder
    width?: SortOrder
  }

  export type YoloTrainingCountOrderByAggregateInput = {
    id?: SortOrder
    vectors?: SortOrder
  }

  export type YoloTrainingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type YoloTrainingMaxOrderByAggregateInput = {
    id?: SortOrder
    vectors?: SortOrder
  }

  export type YoloTrainingMinOrderByAggregateInput = {
    id?: SortOrder
    vectors?: SortOrder
  }

  export type YoloTrainingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type YoloImagesCountOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
    textToImage?: SortOrder
  }

  export type YoloImagesAvgOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
  }

  export type YoloImagesMaxOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
    textToImage?: SortOrder
  }

  export type YoloImagesMinOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
    textToImage?: SortOrder
  }

  export type YoloImagesSumOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
  }

  export type AndreessCreateNestedOneWithoutUserInput = {
    create?: XOR<AndreessCreateWithoutUserInput, AndreessUncheckedCreateWithoutUserInput>
    connectOrCreate?: AndreessCreateOrConnectWithoutUserInput
    connect?: AndreessWhereUniqueInput
  }

  export type AuditTrailCreateNestedOneWithoutUserInput = {
    create?: XOR<AuditTrailCreateWithoutUserInput, AuditTrailUncheckedCreateWithoutUserInput>
    connectOrCreate?: AuditTrailCreateOrConnectWithoutUserInput
    connect?: AuditTrailWhereUniqueInput
  }

  export type CartCreateNestedManyWithoutUserInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput> | CartCreateWithoutUserInput[] | CartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartCreateOrConnectWithoutUserInput | CartCreateOrConnectWithoutUserInput[]
    createMany?: CartCreateManyUserInputEnvelope
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
  }

  export type ProductsCreateNestedManyWithoutBuyerInput = {
    create?: XOR<ProductsCreateWithoutBuyerInput, ProductsUncheckedCreateWithoutBuyerInput> | ProductsCreateWithoutBuyerInput[] | ProductsUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutBuyerInput | ProductsCreateOrConnectWithoutBuyerInput[]
    createMany?: ProductsCreateManyBuyerInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsCreateNestedManyWithoutSellerInput = {
    create?: XOR<ProductsCreateWithoutSellerInput, ProductsUncheckedCreateWithoutSellerInput> | ProductsCreateWithoutSellerInput[] | ProductsUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutSellerInput | ProductsCreateOrConnectWithoutSellerInput[]
    createMany?: ProductsCreateManySellerInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type CartUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput> | CartCreateWithoutUserInput[] | CartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartCreateOrConnectWithoutUserInput | CartCreateOrConnectWithoutUserInput[]
    createMany?: CartCreateManyUserInputEnvelope
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
  }

  export type ProductsUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<ProductsCreateWithoutBuyerInput, ProductsUncheckedCreateWithoutBuyerInput> | ProductsCreateWithoutBuyerInput[] | ProductsUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutBuyerInput | ProductsCreateOrConnectWithoutBuyerInput[]
    createMany?: ProductsCreateManyBuyerInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<ProductsCreateWithoutSellerInput, ProductsUncheckedCreateWithoutSellerInput> | ProductsCreateWithoutSellerInput[] | ProductsUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutSellerInput | ProductsCreateOrConnectWithoutSellerInput[]
    createMany?: ProductsCreateManySellerInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AndreessUpdateOneWithoutUserNestedInput = {
    create?: XOR<AndreessCreateWithoutUserInput, AndreessUncheckedCreateWithoutUserInput>
    connectOrCreate?: AndreessCreateOrConnectWithoutUserInput
    upsert?: AndreessUpsertWithoutUserInput
    disconnect?: AndreessWhereInput | boolean
    delete?: AndreessWhereInput | boolean
    connect?: AndreessWhereUniqueInput
    update?: XOR<XOR<AndreessUpdateToOneWithWhereWithoutUserInput, AndreessUpdateWithoutUserInput>, AndreessUncheckedUpdateWithoutUserInput>
  }

  export type AuditTrailUpdateOneWithoutUserNestedInput = {
    create?: XOR<AuditTrailCreateWithoutUserInput, AuditTrailUncheckedCreateWithoutUserInput>
    connectOrCreate?: AuditTrailCreateOrConnectWithoutUserInput
    upsert?: AuditTrailUpsertWithoutUserInput
    disconnect?: AuditTrailWhereInput | boolean
    delete?: AuditTrailWhereInput | boolean
    connect?: AuditTrailWhereUniqueInput
    update?: XOR<XOR<AuditTrailUpdateToOneWithWhereWithoutUserInput, AuditTrailUpdateWithoutUserInput>, AuditTrailUncheckedUpdateWithoutUserInput>
  }

  export type CartUpdateManyWithoutUserNestedInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput> | CartCreateWithoutUserInput[] | CartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartCreateOrConnectWithoutUserInput | CartCreateOrConnectWithoutUserInput[]
    upsert?: CartUpsertWithWhereUniqueWithoutUserInput | CartUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CartCreateManyUserInputEnvelope
    set?: CartWhereUniqueInput | CartWhereUniqueInput[]
    disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    delete?: CartWhereUniqueInput | CartWhereUniqueInput[]
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    update?: CartUpdateWithWhereUniqueWithoutUserInput | CartUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CartUpdateManyWithWhereWithoutUserInput | CartUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CartScalarWhereInput | CartScalarWhereInput[]
  }

  export type ProductsUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<ProductsCreateWithoutBuyerInput, ProductsUncheckedCreateWithoutBuyerInput> | ProductsCreateWithoutBuyerInput[] | ProductsUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutBuyerInput | ProductsCreateOrConnectWithoutBuyerInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutBuyerInput | ProductsUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: ProductsCreateManyBuyerInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutBuyerInput | ProductsUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutBuyerInput | ProductsUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type ProductsUpdateManyWithoutSellerNestedInput = {
    create?: XOR<ProductsCreateWithoutSellerInput, ProductsUncheckedCreateWithoutSellerInput> | ProductsCreateWithoutSellerInput[] | ProductsUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutSellerInput | ProductsCreateOrConnectWithoutSellerInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutSellerInput | ProductsUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: ProductsCreateManySellerInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutSellerInput | ProductsUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutSellerInput | ProductsUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CartUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput> | CartCreateWithoutUserInput[] | CartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartCreateOrConnectWithoutUserInput | CartCreateOrConnectWithoutUserInput[]
    upsert?: CartUpsertWithWhereUniqueWithoutUserInput | CartUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CartCreateManyUserInputEnvelope
    set?: CartWhereUniqueInput | CartWhereUniqueInput[]
    disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    delete?: CartWhereUniqueInput | CartWhereUniqueInput[]
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    update?: CartUpdateWithWhereUniqueWithoutUserInput | CartUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CartUpdateManyWithWhereWithoutUserInput | CartUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CartScalarWhereInput | CartScalarWhereInput[]
  }

  export type ProductsUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<ProductsCreateWithoutBuyerInput, ProductsUncheckedCreateWithoutBuyerInput> | ProductsCreateWithoutBuyerInput[] | ProductsUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutBuyerInput | ProductsCreateOrConnectWithoutBuyerInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutBuyerInput | ProductsUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: ProductsCreateManyBuyerInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutBuyerInput | ProductsUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutBuyerInput | ProductsUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type ProductsUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<ProductsCreateWithoutSellerInput, ProductsUncheckedCreateWithoutSellerInput> | ProductsCreateWithoutSellerInput[] | ProductsUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutSellerInput | ProductsCreateOrConnectWithoutSellerInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutSellerInput | ProductsUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: ProductsCreateManySellerInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutSellerInput | ProductsUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutSellerInput | ProductsUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type AndreessCreateNestedManyWithoutSupplierInput = {
    create?: XOR<AndreessCreateWithoutSupplierInput, AndreessUncheckedCreateWithoutSupplierInput> | AndreessCreateWithoutSupplierInput[] | AndreessUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: AndreessCreateOrConnectWithoutSupplierInput | AndreessCreateOrConnectWithoutSupplierInput[]
    createMany?: AndreessCreateManySupplierInputEnvelope
    connect?: AndreessWhereUniqueInput | AndreessWhereUniqueInput[]
  }

  export type AndreessUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<AndreessCreateWithoutSupplierInput, AndreessUncheckedCreateWithoutSupplierInput> | AndreessCreateWithoutSupplierInput[] | AndreessUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: AndreessCreateOrConnectWithoutSupplierInput | AndreessCreateOrConnectWithoutSupplierInput[]
    createMany?: AndreessCreateManySupplierInputEnvelope
    connect?: AndreessWhereUniqueInput | AndreessWhereUniqueInput[]
  }

  export type AndreessUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<AndreessCreateWithoutSupplierInput, AndreessUncheckedCreateWithoutSupplierInput> | AndreessCreateWithoutSupplierInput[] | AndreessUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: AndreessCreateOrConnectWithoutSupplierInput | AndreessCreateOrConnectWithoutSupplierInput[]
    upsert?: AndreessUpsertWithWhereUniqueWithoutSupplierInput | AndreessUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: AndreessCreateManySupplierInputEnvelope
    set?: AndreessWhereUniqueInput | AndreessWhereUniqueInput[]
    disconnect?: AndreessWhereUniqueInput | AndreessWhereUniqueInput[]
    delete?: AndreessWhereUniqueInput | AndreessWhereUniqueInput[]
    connect?: AndreessWhereUniqueInput | AndreessWhereUniqueInput[]
    update?: AndreessUpdateWithWhereUniqueWithoutSupplierInput | AndreessUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: AndreessUpdateManyWithWhereWithoutSupplierInput | AndreessUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: AndreessScalarWhereInput | AndreessScalarWhereInput[]
  }

  export type AndreessUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<AndreessCreateWithoutSupplierInput, AndreessUncheckedCreateWithoutSupplierInput> | AndreessCreateWithoutSupplierInput[] | AndreessUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: AndreessCreateOrConnectWithoutSupplierInput | AndreessCreateOrConnectWithoutSupplierInput[]
    upsert?: AndreessUpsertWithWhereUniqueWithoutSupplierInput | AndreessUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: AndreessCreateManySupplierInputEnvelope
    set?: AndreessWhereUniqueInput | AndreessWhereUniqueInput[]
    disconnect?: AndreessWhereUniqueInput | AndreessWhereUniqueInput[]
    delete?: AndreessWhereUniqueInput | AndreessWhereUniqueInput[]
    connect?: AndreessWhereUniqueInput | AndreessWhereUniqueInput[]
    update?: AndreessUpdateWithWhereUniqueWithoutSupplierInput | AndreessUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: AndreessUpdateManyWithWhereWithoutSupplierInput | AndreessUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: AndreessScalarWhereInput | AndreessScalarWhereInput[]
  }

  export type AuditTrailCreateNestedOneWithoutProductsInput = {
    create?: XOR<AuditTrailCreateWithoutProductsInput, AuditTrailUncheckedCreateWithoutProductsInput>
    connectOrCreate?: AuditTrailCreateOrConnectWithoutProductsInput
    connect?: AuditTrailWhereUniqueInput
  }

  export type DatasheetsCreateNestedOneWithoutProductsInput = {
    create?: XOR<DatasheetsCreateWithoutProductsInput, DatasheetsUncheckedCreateWithoutProductsInput>
    connectOrCreate?: DatasheetsCreateOrConnectWithoutProductsInput
    connect?: DatasheetsWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProductsSoldInput = {
    create?: XOR<UserCreateWithoutProductsSoldInput, UserUncheckedCreateWithoutProductsSoldInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductsSoldInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProductsBoughtInput = {
    create?: XOR<UserCreateWithoutProductsBoughtInput, UserUncheckedCreateWithoutProductsBoughtInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductsBoughtInput
    connect?: UserWhereUniqueInput
  }

  export type CartCreateNestedOneWithoutProductInput = {
    create?: XOR<CartCreateWithoutProductInput, CartUncheckedCreateWithoutProductInput>
    connectOrCreate?: CartCreateOrConnectWithoutProductInput
    connect?: CartWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AuditTrailUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<AuditTrailCreateWithoutProductsInput, AuditTrailUncheckedCreateWithoutProductsInput>
    connectOrCreate?: AuditTrailCreateOrConnectWithoutProductsInput
    upsert?: AuditTrailUpsertWithoutProductsInput
    connect?: AuditTrailWhereUniqueInput
    update?: XOR<XOR<AuditTrailUpdateToOneWithWhereWithoutProductsInput, AuditTrailUpdateWithoutProductsInput>, AuditTrailUncheckedUpdateWithoutProductsInput>
  }

  export type DatasheetsUpdateOneWithoutProductsNestedInput = {
    create?: XOR<DatasheetsCreateWithoutProductsInput, DatasheetsUncheckedCreateWithoutProductsInput>
    connectOrCreate?: DatasheetsCreateOrConnectWithoutProductsInput
    upsert?: DatasheetsUpsertWithoutProductsInput
    disconnect?: DatasheetsWhereInput | boolean
    delete?: DatasheetsWhereInput | boolean
    connect?: DatasheetsWhereUniqueInput
    update?: XOR<XOR<DatasheetsUpdateToOneWithWhereWithoutProductsInput, DatasheetsUpdateWithoutProductsInput>, DatasheetsUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateOneWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type UserUpdateOneWithoutProductsSoldNestedInput = {
    create?: XOR<UserCreateWithoutProductsSoldInput, UserUncheckedCreateWithoutProductsSoldInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductsSoldInput
    upsert?: UserUpsertWithoutProductsSoldInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProductsSoldInput, UserUpdateWithoutProductsSoldInput>, UserUncheckedUpdateWithoutProductsSoldInput>
  }

  export type UserUpdateOneWithoutProductsBoughtNestedInput = {
    create?: XOR<UserCreateWithoutProductsBoughtInput, UserUncheckedCreateWithoutProductsBoughtInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductsBoughtInput
    upsert?: UserUpsertWithoutProductsBoughtInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProductsBoughtInput, UserUpdateWithoutProductsBoughtInput>, UserUncheckedUpdateWithoutProductsBoughtInput>
  }

  export type CartUpdateOneWithoutProductNestedInput = {
    create?: XOR<CartCreateWithoutProductInput, CartUncheckedCreateWithoutProductInput>
    connectOrCreate?: CartCreateOrConnectWithoutProductInput
    upsert?: CartUpsertWithoutProductInput
    disconnect?: CartWhereInput | boolean
    delete?: CartWhereInput | boolean
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutProductInput, CartUpdateWithoutProductInput>, CartUncheckedUpdateWithoutProductInput>
  }

  export type supplierCreateNestedOneWithoutAndreessInput = {
    create?: XOR<supplierCreateWithoutAndreessInput, supplierUncheckedCreateWithoutAndreessInput>
    connectOrCreate?: supplierCreateOrConnectWithoutAndreessInput
    connect?: supplierWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAndreessInput = {
    create?: XOR<UserCreateWithoutAndreessInput, UserUncheckedCreateWithoutAndreessInput>
    connectOrCreate?: UserCreateOrConnectWithoutAndreessInput
    connect?: UserWhereUniqueInput
  }

  export type UserUncheckedCreateNestedOneWithoutAndreessInput = {
    create?: XOR<UserCreateWithoutAndreessInput, UserUncheckedCreateWithoutAndreessInput>
    connectOrCreate?: UserCreateOrConnectWithoutAndreessInput
    connect?: UserWhereUniqueInput
  }

  export type supplierUpdateOneWithoutAndreessNestedInput = {
    create?: XOR<supplierCreateWithoutAndreessInput, supplierUncheckedCreateWithoutAndreessInput>
    connectOrCreate?: supplierCreateOrConnectWithoutAndreessInput
    upsert?: supplierUpsertWithoutAndreessInput
    disconnect?: supplierWhereInput | boolean
    delete?: supplierWhereInput | boolean
    connect?: supplierWhereUniqueInput
    update?: XOR<XOR<supplierUpdateToOneWithWhereWithoutAndreessInput, supplierUpdateWithoutAndreessInput>, supplierUncheckedUpdateWithoutAndreessInput>
  }

  export type UserUpdateOneWithoutAndreessNestedInput = {
    create?: XOR<UserCreateWithoutAndreessInput, UserUncheckedCreateWithoutAndreessInput>
    connectOrCreate?: UserCreateOrConnectWithoutAndreessInput
    upsert?: UserUpsertWithoutAndreessInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAndreessInput, UserUpdateWithoutAndreessInput>, UserUncheckedUpdateWithoutAndreessInput>
  }

  export type UserUncheckedUpdateOneWithoutAndreessNestedInput = {
    create?: XOR<UserCreateWithoutAndreessInput, UserUncheckedCreateWithoutAndreessInput>
    connectOrCreate?: UserCreateOrConnectWithoutAndreessInput
    upsert?: UserUpsertWithoutAndreessInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAndreessInput, UserUpdateWithoutAndreessInput>, UserUncheckedUpdateWithoutAndreessInput>
  }

  export type ProductsCreateNestedManyWithoutDatasheetInput = {
    create?: XOR<ProductsCreateWithoutDatasheetInput, ProductsUncheckedCreateWithoutDatasheetInput> | ProductsCreateWithoutDatasheetInput[] | ProductsUncheckedCreateWithoutDatasheetInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutDatasheetInput | ProductsCreateOrConnectWithoutDatasheetInput[]
    createMany?: ProductsCreateManyDatasheetInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUncheckedCreateNestedManyWithoutDatasheetInput = {
    create?: XOR<ProductsCreateWithoutDatasheetInput, ProductsUncheckedCreateWithoutDatasheetInput> | ProductsCreateWithoutDatasheetInput[] | ProductsUncheckedCreateWithoutDatasheetInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutDatasheetInput | ProductsCreateOrConnectWithoutDatasheetInput[]
    createMany?: ProductsCreateManyDatasheetInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUpdateManyWithoutDatasheetNestedInput = {
    create?: XOR<ProductsCreateWithoutDatasheetInput, ProductsUncheckedCreateWithoutDatasheetInput> | ProductsCreateWithoutDatasheetInput[] | ProductsUncheckedCreateWithoutDatasheetInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutDatasheetInput | ProductsCreateOrConnectWithoutDatasheetInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutDatasheetInput | ProductsUpsertWithWhereUniqueWithoutDatasheetInput[]
    createMany?: ProductsCreateManyDatasheetInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutDatasheetInput | ProductsUpdateWithWhereUniqueWithoutDatasheetInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutDatasheetInput | ProductsUpdateManyWithWhereWithoutDatasheetInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type ProductsUncheckedUpdateManyWithoutDatasheetNestedInput = {
    create?: XOR<ProductsCreateWithoutDatasheetInput, ProductsUncheckedCreateWithoutDatasheetInput> | ProductsCreateWithoutDatasheetInput[] | ProductsUncheckedCreateWithoutDatasheetInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutDatasheetInput | ProductsCreateOrConnectWithoutDatasheetInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutDatasheetInput | ProductsUpsertWithWhereUniqueWithoutDatasheetInput[]
    createMany?: ProductsCreateManyDatasheetInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutDatasheetInput | ProductsUpdateWithWhereUniqueWithoutDatasheetInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutDatasheetInput | ProductsUpdateManyWithWhereWithoutDatasheetInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type ProductsCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCategoryInput | ProductsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCategoryInput | ProductsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCategoryInput | ProductsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type ProductsUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCategoryInput | ProductsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCategoryInput | ProductsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCategoryInput | ProductsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type ProductsCreateNestedManyWithoutCartInput = {
    create?: XOR<ProductsCreateWithoutCartInput, ProductsUncheckedCreateWithoutCartInput> | ProductsCreateWithoutCartInput[] | ProductsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCartInput | ProductsCreateOrConnectWithoutCartInput[]
    createMany?: ProductsCreateManyCartInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCartInput = {
    create?: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartInput
    connect?: UserWhereUniqueInput
  }

  export type ProductsUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<ProductsCreateWithoutCartInput, ProductsUncheckedCreateWithoutCartInput> | ProductsCreateWithoutCartInput[] | ProductsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCartInput | ProductsCreateOrConnectWithoutCartInput[]
    createMany?: ProductsCreateManyCartInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUpdateManyWithoutCartNestedInput = {
    create?: XOR<ProductsCreateWithoutCartInput, ProductsUncheckedCreateWithoutCartInput> | ProductsCreateWithoutCartInput[] | ProductsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCartInput | ProductsCreateOrConnectWithoutCartInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCartInput | ProductsUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: ProductsCreateManyCartInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCartInput | ProductsUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCartInput | ProductsUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutCartNestedInput = {
    create?: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartInput
    upsert?: UserUpsertWithoutCartInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCartInput, UserUpdateWithoutCartInput>, UserUncheckedUpdateWithoutCartInput>
  }

  export type ProductsUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<ProductsCreateWithoutCartInput, ProductsUncheckedCreateWithoutCartInput> | ProductsCreateWithoutCartInput[] | ProductsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCartInput | ProductsCreateOrConnectWithoutCartInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCartInput | ProductsUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: ProductsCreateManyCartInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCartInput | ProductsUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCartInput | ProductsUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type ProductsCreateNestedOneWithoutAuditTrailInput = {
    create?: XOR<ProductsCreateWithoutAuditTrailInput, ProductsUncheckedCreateWithoutAuditTrailInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutAuditTrailInput
    connect?: ProductsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAuditTrailInput = {
    create?: XOR<UserCreateWithoutAuditTrailInput, UserUncheckedCreateWithoutAuditTrailInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditTrailInput
    connect?: UserWhereUniqueInput
  }

  export type ProductsUncheckedCreateNestedOneWithoutAuditTrailInput = {
    create?: XOR<ProductsCreateWithoutAuditTrailInput, ProductsUncheckedCreateWithoutAuditTrailInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutAuditTrailInput
    connect?: ProductsWhereUniqueInput
  }

  export type UserUncheckedCreateNestedOneWithoutAuditTrailInput = {
    create?: XOR<UserCreateWithoutAuditTrailInput, UserUncheckedCreateWithoutAuditTrailInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditTrailInput
    connect?: UserWhereUniqueInput
  }

  export type ProductsUpdateOneWithoutAuditTrailNestedInput = {
    create?: XOR<ProductsCreateWithoutAuditTrailInput, ProductsUncheckedCreateWithoutAuditTrailInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutAuditTrailInput
    upsert?: ProductsUpsertWithoutAuditTrailInput
    disconnect?: ProductsWhereInput | boolean
    delete?: ProductsWhereInput | boolean
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutAuditTrailInput, ProductsUpdateWithoutAuditTrailInput>, ProductsUncheckedUpdateWithoutAuditTrailInput>
  }

  export type UserUpdateOneWithoutAuditTrailNestedInput = {
    create?: XOR<UserCreateWithoutAuditTrailInput, UserUncheckedCreateWithoutAuditTrailInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditTrailInput
    upsert?: UserUpsertWithoutAuditTrailInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditTrailInput, UserUpdateWithoutAuditTrailInput>, UserUncheckedUpdateWithoutAuditTrailInput>
  }

  export type ProductsUncheckedUpdateOneWithoutAuditTrailNestedInput = {
    create?: XOR<ProductsCreateWithoutAuditTrailInput, ProductsUncheckedCreateWithoutAuditTrailInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutAuditTrailInput
    upsert?: ProductsUpsertWithoutAuditTrailInput
    disconnect?: ProductsWhereInput | boolean
    delete?: ProductsWhereInput | boolean
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutAuditTrailInput, ProductsUpdateWithoutAuditTrailInput>, ProductsUncheckedUpdateWithoutAuditTrailInput>
  }

  export type UserUncheckedUpdateOneWithoutAuditTrailNestedInput = {
    create?: XOR<UserCreateWithoutAuditTrailInput, UserUncheckedCreateWithoutAuditTrailInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditTrailInput
    upsert?: UserUpsertWithoutAuditTrailInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditTrailInput, UserUpdateWithoutAuditTrailInput>, UserUncheckedUpdateWithoutAuditTrailInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AndreessCreateWithoutUserInput = {
    street: string
    number: string
    city: string
    state: string
    cep: string
    supplier?: supplierCreateNestedOneWithoutAndreessInput
  }

  export type AndreessUncheckedCreateWithoutUserInput = {
    id?: number
    street: string
    number: string
    city: string
    state: string
    cep: string
    supplierId?: number | null
  }

  export type AndreessCreateOrConnectWithoutUserInput = {
    where: AndreessWhereUniqueInput
    create: XOR<AndreessCreateWithoutUserInput, AndreessUncheckedCreateWithoutUserInput>
  }

  export type AuditTrailCreateWithoutUserInput = {
    created_at?: Date | string
    updated_at?: Date | string
    Products?: ProductsCreateNestedOneWithoutAuditTrailInput
  }

  export type AuditTrailUncheckedCreateWithoutUserInput = {
    id?: number
    created_at?: Date | string
    updated_at?: Date | string
    Products?: ProductsUncheckedCreateNestedOneWithoutAuditTrailInput
  }

  export type AuditTrailCreateOrConnectWithoutUserInput = {
    where: AuditTrailWhereUniqueInput
    create: XOR<AuditTrailCreateWithoutUserInput, AuditTrailUncheckedCreateWithoutUserInput>
  }

  export type CartCreateWithoutUserInput = {
    product?: ProductsCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateWithoutUserInput = {
    id?: number
    product?: ProductsUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartCreateOrConnectWithoutUserInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
  }

  export type CartCreateManyUserInputEnvelope = {
    data: CartCreateManyUserInput | CartCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProductsCreateWithoutBuyerInput = {
    name: string
    price: number
    description: string
    image: string
    size: number
    salePrice: Decimal | DecimalJsLike | number | string
    repairCost: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    repaired: boolean
    lastModified: Date | string
    interestedParties: number
    brand: string
    model: string
    condition: string
    supplierId: number
    auditTrail: AuditTrailCreateNestedOneWithoutProductsInput
    datasheet?: DatasheetsCreateNestedOneWithoutProductsInput
    category?: CategoryCreateNestedOneWithoutProductsInput
    seller?: UserCreateNestedOneWithoutProductsSoldInput
    cart?: CartCreateNestedOneWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutBuyerInput = {
    id?: number
    categoryId?: number | null
    sellerId: number
    datasheetsId?: number | null
    name: string
    price: number
    description: string
    image: string
    auditTrailId: number
    size: number
    salePrice: Decimal | DecimalJsLike | number | string
    repairCost: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    repaired: boolean
    lastModified: Date | string
    interestedParties: number
    brand: string
    model: string
    condition: string
    supplierId: number
    cartId?: number | null
  }

  export type ProductsCreateOrConnectWithoutBuyerInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutBuyerInput, ProductsUncheckedCreateWithoutBuyerInput>
  }

  export type ProductsCreateManyBuyerInputEnvelope = {
    data: ProductsCreateManyBuyerInput | ProductsCreateManyBuyerInput[]
    skipDuplicates?: boolean
  }

  export type ProductsCreateWithoutSellerInput = {
    name: string
    price: number
    description: string
    image: string
    size: number
    salePrice: Decimal | DecimalJsLike | number | string
    repairCost: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    repaired: boolean
    lastModified: Date | string
    interestedParties: number
    brand: string
    model: string
    condition: string
    supplierId: number
    auditTrail: AuditTrailCreateNestedOneWithoutProductsInput
    datasheet?: DatasheetsCreateNestedOneWithoutProductsInput
    category?: CategoryCreateNestedOneWithoutProductsInput
    buyer?: UserCreateNestedOneWithoutProductsBoughtInput
    cart?: CartCreateNestedOneWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutSellerInput = {
    id?: number
    categoryId?: number | null
    buyerId: number
    datasheetsId?: number | null
    name: string
    price: number
    description: string
    image: string
    auditTrailId: number
    size: number
    salePrice: Decimal | DecimalJsLike | number | string
    repairCost: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    repaired: boolean
    lastModified: Date | string
    interestedParties: number
    brand: string
    model: string
    condition: string
    supplierId: number
    cartId?: number | null
  }

  export type ProductsCreateOrConnectWithoutSellerInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutSellerInput, ProductsUncheckedCreateWithoutSellerInput>
  }

  export type ProductsCreateManySellerInputEnvelope = {
    data: ProductsCreateManySellerInput | ProductsCreateManySellerInput[]
    skipDuplicates?: boolean
  }

  export type AndreessUpsertWithoutUserInput = {
    update: XOR<AndreessUpdateWithoutUserInput, AndreessUncheckedUpdateWithoutUserInput>
    create: XOR<AndreessCreateWithoutUserInput, AndreessUncheckedCreateWithoutUserInput>
    where?: AndreessWhereInput
  }

  export type AndreessUpdateToOneWithWhereWithoutUserInput = {
    where?: AndreessWhereInput
    data: XOR<AndreessUpdateWithoutUserInput, AndreessUncheckedUpdateWithoutUserInput>
  }

  export type AndreessUpdateWithoutUserInput = {
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    supplier?: supplierUpdateOneWithoutAndreessNestedInput
  }

  export type AndreessUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AuditTrailUpsertWithoutUserInput = {
    update: XOR<AuditTrailUpdateWithoutUserInput, AuditTrailUncheckedUpdateWithoutUserInput>
    create: XOR<AuditTrailCreateWithoutUserInput, AuditTrailUncheckedCreateWithoutUserInput>
    where?: AuditTrailWhereInput
  }

  export type AuditTrailUpdateToOneWithWhereWithoutUserInput = {
    where?: AuditTrailWhereInput
    data: XOR<AuditTrailUpdateWithoutUserInput, AuditTrailUncheckedUpdateWithoutUserInput>
  }

  export type AuditTrailUpdateWithoutUserInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Products?: ProductsUpdateOneWithoutAuditTrailNestedInput
  }

  export type AuditTrailUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Products?: ProductsUncheckedUpdateOneWithoutAuditTrailNestedInput
  }

  export type CartUpsertWithWhereUniqueWithoutUserInput = {
    where: CartWhereUniqueInput
    update: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>
    create: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
  }

  export type CartUpdateWithWhereUniqueWithoutUserInput = {
    where: CartWhereUniqueInput
    data: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>
  }

  export type CartUpdateManyWithWhereWithoutUserInput = {
    where: CartScalarWhereInput
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyWithoutUserInput>
  }

  export type CartScalarWhereInput = {
    AND?: CartScalarWhereInput | CartScalarWhereInput[]
    OR?: CartScalarWhereInput[]
    NOT?: CartScalarWhereInput | CartScalarWhereInput[]
    id?: IntFilter<"Cart"> | number
    userId?: IntFilter<"Cart"> | number
  }

  export type ProductsUpsertWithWhereUniqueWithoutBuyerInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutBuyerInput, ProductsUncheckedUpdateWithoutBuyerInput>
    create: XOR<ProductsCreateWithoutBuyerInput, ProductsUncheckedCreateWithoutBuyerInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutBuyerInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutBuyerInput, ProductsUncheckedUpdateWithoutBuyerInput>
  }

  export type ProductsUpdateManyWithWhereWithoutBuyerInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutBuyerInput>
  }

  export type ProductsScalarWhereInput = {
    AND?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    OR?: ProductsScalarWhereInput[]
    NOT?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    id?: IntFilter<"Products"> | number
    categoryId?: IntNullableFilter<"Products"> | number | null
    sellerId?: IntFilter<"Products"> | number
    buyerId?: IntFilter<"Products"> | number
    datasheetsId?: IntNullableFilter<"Products"> | number | null
    name?: StringFilter<"Products"> | string
    price?: FloatFilter<"Products"> | number
    description?: StringFilter<"Products"> | string
    image?: StringFilter<"Products"> | string
    auditTrailId?: IntFilter<"Products"> | number
    size?: FloatFilter<"Products"> | number
    salePrice?: DecimalFilter<"Products"> | Decimal | DecimalJsLike | number | string
    repairCost?: DecimalFilter<"Products"> | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFilter<"Products"> | Decimal | DecimalJsLike | number | string
    repaired?: BoolFilter<"Products"> | boolean
    lastModified?: DateTimeFilter<"Products"> | Date | string
    interestedParties?: IntFilter<"Products"> | number
    brand?: StringFilter<"Products"> | string
    model?: StringFilter<"Products"> | string
    condition?: StringFilter<"Products"> | string
    supplierId?: IntFilter<"Products"> | number
    cartId?: IntNullableFilter<"Products"> | number | null
  }

  export type ProductsUpsertWithWhereUniqueWithoutSellerInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutSellerInput, ProductsUncheckedUpdateWithoutSellerInput>
    create: XOR<ProductsCreateWithoutSellerInput, ProductsUncheckedCreateWithoutSellerInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutSellerInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutSellerInput, ProductsUncheckedUpdateWithoutSellerInput>
  }

  export type ProductsUpdateManyWithWhereWithoutSellerInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutSellerInput>
  }

  export type AndreessCreateWithoutSupplierInput = {
    street: string
    number: string
    city: string
    state: string
    cep: string
    User?: UserCreateNestedOneWithoutAndreessInput
  }

  export type AndreessUncheckedCreateWithoutSupplierInput = {
    id?: number
    street: string
    number: string
    city: string
    state: string
    cep: string
    User?: UserUncheckedCreateNestedOneWithoutAndreessInput
  }

  export type AndreessCreateOrConnectWithoutSupplierInput = {
    where: AndreessWhereUniqueInput
    create: XOR<AndreessCreateWithoutSupplierInput, AndreessUncheckedCreateWithoutSupplierInput>
  }

  export type AndreessCreateManySupplierInputEnvelope = {
    data: AndreessCreateManySupplierInput | AndreessCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type AndreessUpsertWithWhereUniqueWithoutSupplierInput = {
    where: AndreessWhereUniqueInput
    update: XOR<AndreessUpdateWithoutSupplierInput, AndreessUncheckedUpdateWithoutSupplierInput>
    create: XOR<AndreessCreateWithoutSupplierInput, AndreessUncheckedCreateWithoutSupplierInput>
  }

  export type AndreessUpdateWithWhereUniqueWithoutSupplierInput = {
    where: AndreessWhereUniqueInput
    data: XOR<AndreessUpdateWithoutSupplierInput, AndreessUncheckedUpdateWithoutSupplierInput>
  }

  export type AndreessUpdateManyWithWhereWithoutSupplierInput = {
    where: AndreessScalarWhereInput
    data: XOR<AndreessUpdateManyMutationInput, AndreessUncheckedUpdateManyWithoutSupplierInput>
  }

  export type AndreessScalarWhereInput = {
    AND?: AndreessScalarWhereInput | AndreessScalarWhereInput[]
    OR?: AndreessScalarWhereInput[]
    NOT?: AndreessScalarWhereInput | AndreessScalarWhereInput[]
    id?: IntFilter<"Andreess"> | number
    street?: StringFilter<"Andreess"> | string
    number?: StringFilter<"Andreess"> | string
    city?: StringFilter<"Andreess"> | string
    state?: StringFilter<"Andreess"> | string
    cep?: StringFilter<"Andreess"> | string
    supplierId?: IntNullableFilter<"Andreess"> | number | null
  }

  export type AuditTrailCreateWithoutProductsInput = {
    created_at?: Date | string
    updated_at?: Date | string
    User?: UserCreateNestedOneWithoutAuditTrailInput
  }

  export type AuditTrailUncheckedCreateWithoutProductsInput = {
    id?: number
    created_at?: Date | string
    updated_at?: Date | string
    User?: UserUncheckedCreateNestedOneWithoutAuditTrailInput
  }

  export type AuditTrailCreateOrConnectWithoutProductsInput = {
    where: AuditTrailWhereUniqueInput
    create: XOR<AuditTrailCreateWithoutProductsInput, AuditTrailUncheckedCreateWithoutProductsInput>
  }

  export type DatasheetsCreateWithoutProductsInput = {
    description?: string | null
  }

  export type DatasheetsUncheckedCreateWithoutProductsInput = {
    id?: number
    description?: string | null
  }

  export type DatasheetsCreateOrConnectWithoutProductsInput = {
    where: DatasheetsWhereUniqueInput
    create: XOR<DatasheetsCreateWithoutProductsInput, DatasheetsUncheckedCreateWithoutProductsInput>
  }

  export type CategoryCreateWithoutProductsInput = {
    name: string
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type UserCreateWithoutProductsSoldInput = {
    email: string
    password: string
    name: string
    phone?: string | null
    date_birth: Date | string
    andreess?: AndreessCreateNestedOneWithoutUserInput
    AuditTrail?: AuditTrailCreateNestedOneWithoutUserInput
    cart?: CartCreateNestedManyWithoutUserInput
    productsBought?: ProductsCreateNestedManyWithoutBuyerInput
  }

  export type UserUncheckedCreateWithoutProductsSoldInput = {
    id?: number
    email: string
    password: string
    name: string
    andreessId?: number | null
    phone?: string | null
    date_birth: Date | string
    AuditTrailId?: number | null
    cart?: CartUncheckedCreateNestedManyWithoutUserInput
    productsBought?: ProductsUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type UserCreateOrConnectWithoutProductsSoldInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProductsSoldInput, UserUncheckedCreateWithoutProductsSoldInput>
  }

  export type UserCreateWithoutProductsBoughtInput = {
    email: string
    password: string
    name: string
    phone?: string | null
    date_birth: Date | string
    andreess?: AndreessCreateNestedOneWithoutUserInput
    AuditTrail?: AuditTrailCreateNestedOneWithoutUserInput
    cart?: CartCreateNestedManyWithoutUserInput
    productsSold?: ProductsCreateNestedManyWithoutSellerInput
  }

  export type UserUncheckedCreateWithoutProductsBoughtInput = {
    id?: number
    email: string
    password: string
    name: string
    andreessId?: number | null
    phone?: string | null
    date_birth: Date | string
    AuditTrailId?: number | null
    cart?: CartUncheckedCreateNestedManyWithoutUserInput
    productsSold?: ProductsUncheckedCreateNestedManyWithoutSellerInput
  }

  export type UserCreateOrConnectWithoutProductsBoughtInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProductsBoughtInput, UserUncheckedCreateWithoutProductsBoughtInput>
  }

  export type CartCreateWithoutProductInput = {
    user: UserCreateNestedOneWithoutCartInput
  }

  export type CartUncheckedCreateWithoutProductInput = {
    id?: number
    userId: number
  }

  export type CartCreateOrConnectWithoutProductInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutProductInput, CartUncheckedCreateWithoutProductInput>
  }

  export type AuditTrailUpsertWithoutProductsInput = {
    update: XOR<AuditTrailUpdateWithoutProductsInput, AuditTrailUncheckedUpdateWithoutProductsInput>
    create: XOR<AuditTrailCreateWithoutProductsInput, AuditTrailUncheckedCreateWithoutProductsInput>
    where?: AuditTrailWhereInput
  }

  export type AuditTrailUpdateToOneWithWhereWithoutProductsInput = {
    where?: AuditTrailWhereInput
    data: XOR<AuditTrailUpdateWithoutProductsInput, AuditTrailUncheckedUpdateWithoutProductsInput>
  }

  export type AuditTrailUpdateWithoutProductsInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutAuditTrailNestedInput
  }

  export type AuditTrailUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateOneWithoutAuditTrailNestedInput
  }

  export type DatasheetsUpsertWithoutProductsInput = {
    update: XOR<DatasheetsUpdateWithoutProductsInput, DatasheetsUncheckedUpdateWithoutProductsInput>
    create: XOR<DatasheetsCreateWithoutProductsInput, DatasheetsUncheckedCreateWithoutProductsInput>
    where?: DatasheetsWhereInput
  }

  export type DatasheetsUpdateToOneWithWhereWithoutProductsInput = {
    where?: DatasheetsWhereInput
    data: XOR<DatasheetsUpdateWithoutProductsInput, DatasheetsUncheckedUpdateWithoutProductsInput>
  }

  export type DatasheetsUpdateWithoutProductsInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DatasheetsUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutProductsSoldInput = {
    update: XOR<UserUpdateWithoutProductsSoldInput, UserUncheckedUpdateWithoutProductsSoldInput>
    create: XOR<UserCreateWithoutProductsSoldInput, UserUncheckedCreateWithoutProductsSoldInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProductsSoldInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProductsSoldInput, UserUncheckedUpdateWithoutProductsSoldInput>
  }

  export type UserUpdateWithoutProductsSoldInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    date_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    andreess?: AndreessUpdateOneWithoutUserNestedInput
    AuditTrail?: AuditTrailUpdateOneWithoutUserNestedInput
    cart?: CartUpdateManyWithoutUserNestedInput
    productsBought?: ProductsUpdateManyWithoutBuyerNestedInput
  }

  export type UserUncheckedUpdateWithoutProductsSoldInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    andreessId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    date_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    AuditTrailId?: NullableIntFieldUpdateOperationsInput | number | null
    cart?: CartUncheckedUpdateManyWithoutUserNestedInput
    productsBought?: ProductsUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type UserUpsertWithoutProductsBoughtInput = {
    update: XOR<UserUpdateWithoutProductsBoughtInput, UserUncheckedUpdateWithoutProductsBoughtInput>
    create: XOR<UserCreateWithoutProductsBoughtInput, UserUncheckedCreateWithoutProductsBoughtInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProductsBoughtInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProductsBoughtInput, UserUncheckedUpdateWithoutProductsBoughtInput>
  }

  export type UserUpdateWithoutProductsBoughtInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    date_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    andreess?: AndreessUpdateOneWithoutUserNestedInput
    AuditTrail?: AuditTrailUpdateOneWithoutUserNestedInput
    cart?: CartUpdateManyWithoutUserNestedInput
    productsSold?: ProductsUpdateManyWithoutSellerNestedInput
  }

  export type UserUncheckedUpdateWithoutProductsBoughtInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    andreessId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    date_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    AuditTrailId?: NullableIntFieldUpdateOperationsInput | number | null
    cart?: CartUncheckedUpdateManyWithoutUserNestedInput
    productsSold?: ProductsUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type CartUpsertWithoutProductInput = {
    update: XOR<CartUpdateWithoutProductInput, CartUncheckedUpdateWithoutProductInput>
    create: XOR<CartCreateWithoutProductInput, CartUncheckedCreateWithoutProductInput>
    where?: CartWhereInput
  }

  export type CartUpdateToOneWithWhereWithoutProductInput = {
    where?: CartWhereInput
    data: XOR<CartUpdateWithoutProductInput, CartUncheckedUpdateWithoutProductInput>
  }

  export type CartUpdateWithoutProductInput = {
    user?: UserUpdateOneRequiredWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type supplierCreateWithoutAndreessInput = {
    name: string
    email: string
    phone: string
  }

  export type supplierUncheckedCreateWithoutAndreessInput = {
    id?: number
    name: string
    email: string
    phone: string
  }

  export type supplierCreateOrConnectWithoutAndreessInput = {
    where: supplierWhereUniqueInput
    create: XOR<supplierCreateWithoutAndreessInput, supplierUncheckedCreateWithoutAndreessInput>
  }

  export type UserCreateWithoutAndreessInput = {
    email: string
    password: string
    name: string
    phone?: string | null
    date_birth: Date | string
    AuditTrail?: AuditTrailCreateNestedOneWithoutUserInput
    cart?: CartCreateNestedManyWithoutUserInput
    productsBought?: ProductsCreateNestedManyWithoutBuyerInput
    productsSold?: ProductsCreateNestedManyWithoutSellerInput
  }

  export type UserUncheckedCreateWithoutAndreessInput = {
    id?: number
    email: string
    password: string
    name: string
    phone?: string | null
    date_birth: Date | string
    AuditTrailId?: number | null
    cart?: CartUncheckedCreateNestedManyWithoutUserInput
    productsBought?: ProductsUncheckedCreateNestedManyWithoutBuyerInput
    productsSold?: ProductsUncheckedCreateNestedManyWithoutSellerInput
  }

  export type UserCreateOrConnectWithoutAndreessInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAndreessInput, UserUncheckedCreateWithoutAndreessInput>
  }

  export type supplierUpsertWithoutAndreessInput = {
    update: XOR<supplierUpdateWithoutAndreessInput, supplierUncheckedUpdateWithoutAndreessInput>
    create: XOR<supplierCreateWithoutAndreessInput, supplierUncheckedCreateWithoutAndreessInput>
    where?: supplierWhereInput
  }

  export type supplierUpdateToOneWithWhereWithoutAndreessInput = {
    where?: supplierWhereInput
    data: XOR<supplierUpdateWithoutAndreessInput, supplierUncheckedUpdateWithoutAndreessInput>
  }

  export type supplierUpdateWithoutAndreessInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type supplierUncheckedUpdateWithoutAndreessInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutAndreessInput = {
    update: XOR<UserUpdateWithoutAndreessInput, UserUncheckedUpdateWithoutAndreessInput>
    create: XOR<UserCreateWithoutAndreessInput, UserUncheckedCreateWithoutAndreessInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAndreessInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAndreessInput, UserUncheckedUpdateWithoutAndreessInput>
  }

  export type UserUpdateWithoutAndreessInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    date_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    AuditTrail?: AuditTrailUpdateOneWithoutUserNestedInput
    cart?: CartUpdateManyWithoutUserNestedInput
    productsBought?: ProductsUpdateManyWithoutBuyerNestedInput
    productsSold?: ProductsUpdateManyWithoutSellerNestedInput
  }

  export type UserUncheckedUpdateWithoutAndreessInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    date_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    AuditTrailId?: NullableIntFieldUpdateOperationsInput | number | null
    cart?: CartUncheckedUpdateManyWithoutUserNestedInput
    productsBought?: ProductsUncheckedUpdateManyWithoutBuyerNestedInput
    productsSold?: ProductsUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type ProductsCreateWithoutDatasheetInput = {
    name: string
    price: number
    description: string
    image: string
    size: number
    salePrice: Decimal | DecimalJsLike | number | string
    repairCost: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    repaired: boolean
    lastModified: Date | string
    interestedParties: number
    brand: string
    model: string
    condition: string
    supplierId: number
    auditTrail: AuditTrailCreateNestedOneWithoutProductsInput
    category?: CategoryCreateNestedOneWithoutProductsInput
    seller?: UserCreateNestedOneWithoutProductsSoldInput
    buyer?: UserCreateNestedOneWithoutProductsBoughtInput
    cart?: CartCreateNestedOneWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutDatasheetInput = {
    id?: number
    categoryId?: number | null
    sellerId: number
    buyerId: number
    name: string
    price: number
    description: string
    image: string
    auditTrailId: number
    size: number
    salePrice: Decimal | DecimalJsLike | number | string
    repairCost: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    repaired: boolean
    lastModified: Date | string
    interestedParties: number
    brand: string
    model: string
    condition: string
    supplierId: number
    cartId?: number | null
  }

  export type ProductsCreateOrConnectWithoutDatasheetInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutDatasheetInput, ProductsUncheckedCreateWithoutDatasheetInput>
  }

  export type ProductsCreateManyDatasheetInputEnvelope = {
    data: ProductsCreateManyDatasheetInput | ProductsCreateManyDatasheetInput[]
    skipDuplicates?: boolean
  }

  export type ProductsUpsertWithWhereUniqueWithoutDatasheetInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutDatasheetInput, ProductsUncheckedUpdateWithoutDatasheetInput>
    create: XOR<ProductsCreateWithoutDatasheetInput, ProductsUncheckedCreateWithoutDatasheetInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutDatasheetInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutDatasheetInput, ProductsUncheckedUpdateWithoutDatasheetInput>
  }

  export type ProductsUpdateManyWithWhereWithoutDatasheetInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutDatasheetInput>
  }

  export type ProductsCreateWithoutCategoryInput = {
    name: string
    price: number
    description: string
    image: string
    size: number
    salePrice: Decimal | DecimalJsLike | number | string
    repairCost: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    repaired: boolean
    lastModified: Date | string
    interestedParties: number
    brand: string
    model: string
    condition: string
    supplierId: number
    auditTrail: AuditTrailCreateNestedOneWithoutProductsInput
    datasheet?: DatasheetsCreateNestedOneWithoutProductsInput
    seller?: UserCreateNestedOneWithoutProductsSoldInput
    buyer?: UserCreateNestedOneWithoutProductsBoughtInput
    cart?: CartCreateNestedOneWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutCategoryInput = {
    id?: number
    sellerId: number
    buyerId: number
    datasheetsId?: number | null
    name: string
    price: number
    description: string
    image: string
    auditTrailId: number
    size: number
    salePrice: Decimal | DecimalJsLike | number | string
    repairCost: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    repaired: boolean
    lastModified: Date | string
    interestedParties: number
    brand: string
    model: string
    condition: string
    supplierId: number
    cartId?: number | null
  }

  export type ProductsCreateOrConnectWithoutCategoryInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput>
  }

  export type ProductsCreateManyCategoryInputEnvelope = {
    data: ProductsCreateManyCategoryInput | ProductsCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductsUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutCategoryInput, ProductsUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutCategoryInput, ProductsUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductsUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductsCreateWithoutCartInput = {
    name: string
    price: number
    description: string
    image: string
    size: number
    salePrice: Decimal | DecimalJsLike | number | string
    repairCost: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    repaired: boolean
    lastModified: Date | string
    interestedParties: number
    brand: string
    model: string
    condition: string
    supplierId: number
    auditTrail: AuditTrailCreateNestedOneWithoutProductsInput
    datasheet?: DatasheetsCreateNestedOneWithoutProductsInput
    category?: CategoryCreateNestedOneWithoutProductsInput
    seller?: UserCreateNestedOneWithoutProductsSoldInput
    buyer?: UserCreateNestedOneWithoutProductsBoughtInput
  }

  export type ProductsUncheckedCreateWithoutCartInput = {
    id?: number
    categoryId?: number | null
    sellerId: number
    buyerId: number
    datasheetsId?: number | null
    name: string
    price: number
    description: string
    image: string
    auditTrailId: number
    size: number
    salePrice: Decimal | DecimalJsLike | number | string
    repairCost: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    repaired: boolean
    lastModified: Date | string
    interestedParties: number
    brand: string
    model: string
    condition: string
    supplierId: number
  }

  export type ProductsCreateOrConnectWithoutCartInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutCartInput, ProductsUncheckedCreateWithoutCartInput>
  }

  export type ProductsCreateManyCartInputEnvelope = {
    data: ProductsCreateManyCartInput | ProductsCreateManyCartInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCartInput = {
    email: string
    password: string
    name: string
    phone?: string | null
    date_birth: Date | string
    andreess?: AndreessCreateNestedOneWithoutUserInput
    AuditTrail?: AuditTrailCreateNestedOneWithoutUserInput
    productsBought?: ProductsCreateNestedManyWithoutBuyerInput
    productsSold?: ProductsCreateNestedManyWithoutSellerInput
  }

  export type UserUncheckedCreateWithoutCartInput = {
    id?: number
    email: string
    password: string
    name: string
    andreessId?: number | null
    phone?: string | null
    date_birth: Date | string
    AuditTrailId?: number | null
    productsBought?: ProductsUncheckedCreateNestedManyWithoutBuyerInput
    productsSold?: ProductsUncheckedCreateNestedManyWithoutSellerInput
  }

  export type UserCreateOrConnectWithoutCartInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
  }

  export type ProductsUpsertWithWhereUniqueWithoutCartInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutCartInput, ProductsUncheckedUpdateWithoutCartInput>
    create: XOR<ProductsCreateWithoutCartInput, ProductsUncheckedCreateWithoutCartInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutCartInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutCartInput, ProductsUncheckedUpdateWithoutCartInput>
  }

  export type ProductsUpdateManyWithWhereWithoutCartInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutCartInput>
  }

  export type UserUpsertWithoutCartInput = {
    update: XOR<UserUpdateWithoutCartInput, UserUncheckedUpdateWithoutCartInput>
    create: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCartInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCartInput, UserUncheckedUpdateWithoutCartInput>
  }

  export type UserUpdateWithoutCartInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    date_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    andreess?: AndreessUpdateOneWithoutUserNestedInput
    AuditTrail?: AuditTrailUpdateOneWithoutUserNestedInput
    productsBought?: ProductsUpdateManyWithoutBuyerNestedInput
    productsSold?: ProductsUpdateManyWithoutSellerNestedInput
  }

  export type UserUncheckedUpdateWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    andreessId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    date_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    AuditTrailId?: NullableIntFieldUpdateOperationsInput | number | null
    productsBought?: ProductsUncheckedUpdateManyWithoutBuyerNestedInput
    productsSold?: ProductsUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type ProductsCreateWithoutAuditTrailInput = {
    name: string
    price: number
    description: string
    image: string
    size: number
    salePrice: Decimal | DecimalJsLike | number | string
    repairCost: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    repaired: boolean
    lastModified: Date | string
    interestedParties: number
    brand: string
    model: string
    condition: string
    supplierId: number
    datasheet?: DatasheetsCreateNestedOneWithoutProductsInput
    category?: CategoryCreateNestedOneWithoutProductsInput
    seller?: UserCreateNestedOneWithoutProductsSoldInput
    buyer?: UserCreateNestedOneWithoutProductsBoughtInput
    cart?: CartCreateNestedOneWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutAuditTrailInput = {
    id?: number
    categoryId?: number | null
    sellerId: number
    buyerId: number
    datasheetsId?: number | null
    name: string
    price: number
    description: string
    image: string
    size: number
    salePrice: Decimal | DecimalJsLike | number | string
    repairCost: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    repaired: boolean
    lastModified: Date | string
    interestedParties: number
    brand: string
    model: string
    condition: string
    supplierId: number
    cartId?: number | null
  }

  export type ProductsCreateOrConnectWithoutAuditTrailInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutAuditTrailInput, ProductsUncheckedCreateWithoutAuditTrailInput>
  }

  export type UserCreateWithoutAuditTrailInput = {
    email: string
    password: string
    name: string
    phone?: string | null
    date_birth: Date | string
    andreess?: AndreessCreateNestedOneWithoutUserInput
    cart?: CartCreateNestedManyWithoutUserInput
    productsBought?: ProductsCreateNestedManyWithoutBuyerInput
    productsSold?: ProductsCreateNestedManyWithoutSellerInput
  }

  export type UserUncheckedCreateWithoutAuditTrailInput = {
    id?: number
    email: string
    password: string
    name: string
    andreessId?: number | null
    phone?: string | null
    date_birth: Date | string
    cart?: CartUncheckedCreateNestedManyWithoutUserInput
    productsBought?: ProductsUncheckedCreateNestedManyWithoutBuyerInput
    productsSold?: ProductsUncheckedCreateNestedManyWithoutSellerInput
  }

  export type UserCreateOrConnectWithoutAuditTrailInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditTrailInput, UserUncheckedCreateWithoutAuditTrailInput>
  }

  export type ProductsUpsertWithoutAuditTrailInput = {
    update: XOR<ProductsUpdateWithoutAuditTrailInput, ProductsUncheckedUpdateWithoutAuditTrailInput>
    create: XOR<ProductsCreateWithoutAuditTrailInput, ProductsUncheckedCreateWithoutAuditTrailInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutAuditTrailInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutAuditTrailInput, ProductsUncheckedUpdateWithoutAuditTrailInput>
  }

  export type ProductsUpdateWithoutAuditTrailInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repairCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repaired?: BoolFieldUpdateOperationsInput | boolean
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    interestedParties?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    supplierId?: IntFieldUpdateOperationsInput | number
    datasheet?: DatasheetsUpdateOneWithoutProductsNestedInput
    category?: CategoryUpdateOneWithoutProductsNestedInput
    seller?: UserUpdateOneWithoutProductsSoldNestedInput
    buyer?: UserUpdateOneWithoutProductsBoughtNestedInput
    cart?: CartUpdateOneWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutAuditTrailInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    sellerId?: IntFieldUpdateOperationsInput | number
    buyerId?: IntFieldUpdateOperationsInput | number
    datasheetsId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repairCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repaired?: BoolFieldUpdateOperationsInput | boolean
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    interestedParties?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    supplierId?: IntFieldUpdateOperationsInput | number
    cartId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUpsertWithoutAuditTrailInput = {
    update: XOR<UserUpdateWithoutAuditTrailInput, UserUncheckedUpdateWithoutAuditTrailInput>
    create: XOR<UserCreateWithoutAuditTrailInput, UserUncheckedCreateWithoutAuditTrailInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditTrailInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditTrailInput, UserUncheckedUpdateWithoutAuditTrailInput>
  }

  export type UserUpdateWithoutAuditTrailInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    date_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    andreess?: AndreessUpdateOneWithoutUserNestedInput
    cart?: CartUpdateManyWithoutUserNestedInput
    productsBought?: ProductsUpdateManyWithoutBuyerNestedInput
    productsSold?: ProductsUpdateManyWithoutSellerNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditTrailInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    andreessId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    date_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: CartUncheckedUpdateManyWithoutUserNestedInput
    productsBought?: ProductsUncheckedUpdateManyWithoutBuyerNestedInput
    productsSold?: ProductsUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type CartCreateManyUserInput = {
    id?: number
  }

  export type ProductsCreateManyBuyerInput = {
    id?: number
    categoryId?: number | null
    sellerId: number
    datasheetsId?: number | null
    name: string
    price: number
    description: string
    image: string
    auditTrailId: number
    size: number
    salePrice: Decimal | DecimalJsLike | number | string
    repairCost: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    repaired: boolean
    lastModified: Date | string
    interestedParties: number
    brand: string
    model: string
    condition: string
    supplierId: number
    cartId?: number | null
  }

  export type ProductsCreateManySellerInput = {
    id?: number
    categoryId?: number | null
    buyerId: number
    datasheetsId?: number | null
    name: string
    price: number
    description: string
    image: string
    auditTrailId: number
    size: number
    salePrice: Decimal | DecimalJsLike | number | string
    repairCost: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    repaired: boolean
    lastModified: Date | string
    interestedParties: number
    brand: string
    model: string
    condition: string
    supplierId: number
    cartId?: number | null
  }

  export type CartUpdateWithoutUserInput = {
    product?: ProductsUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    product?: ProductsUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type ProductsUpdateWithoutBuyerInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repairCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repaired?: BoolFieldUpdateOperationsInput | boolean
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    interestedParties?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    supplierId?: IntFieldUpdateOperationsInput | number
    auditTrail?: AuditTrailUpdateOneRequiredWithoutProductsNestedInput
    datasheet?: DatasheetsUpdateOneWithoutProductsNestedInput
    category?: CategoryUpdateOneWithoutProductsNestedInput
    seller?: UserUpdateOneWithoutProductsSoldNestedInput
    cart?: CartUpdateOneWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    sellerId?: IntFieldUpdateOperationsInput | number
    datasheetsId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    auditTrailId?: IntFieldUpdateOperationsInput | number
    size?: FloatFieldUpdateOperationsInput | number
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repairCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repaired?: BoolFieldUpdateOperationsInput | boolean
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    interestedParties?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    supplierId?: IntFieldUpdateOperationsInput | number
    cartId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductsUncheckedUpdateManyWithoutBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    sellerId?: IntFieldUpdateOperationsInput | number
    datasheetsId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    auditTrailId?: IntFieldUpdateOperationsInput | number
    size?: FloatFieldUpdateOperationsInput | number
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repairCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repaired?: BoolFieldUpdateOperationsInput | boolean
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    interestedParties?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    supplierId?: IntFieldUpdateOperationsInput | number
    cartId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductsUpdateWithoutSellerInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repairCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repaired?: BoolFieldUpdateOperationsInput | boolean
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    interestedParties?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    supplierId?: IntFieldUpdateOperationsInput | number
    auditTrail?: AuditTrailUpdateOneRequiredWithoutProductsNestedInput
    datasheet?: DatasheetsUpdateOneWithoutProductsNestedInput
    category?: CategoryUpdateOneWithoutProductsNestedInput
    buyer?: UserUpdateOneWithoutProductsBoughtNestedInput
    cart?: CartUpdateOneWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutSellerInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    buyerId?: IntFieldUpdateOperationsInput | number
    datasheetsId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    auditTrailId?: IntFieldUpdateOperationsInput | number
    size?: FloatFieldUpdateOperationsInput | number
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repairCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repaired?: BoolFieldUpdateOperationsInput | boolean
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    interestedParties?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    supplierId?: IntFieldUpdateOperationsInput | number
    cartId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductsUncheckedUpdateManyWithoutSellerInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    buyerId?: IntFieldUpdateOperationsInput | number
    datasheetsId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    auditTrailId?: IntFieldUpdateOperationsInput | number
    size?: FloatFieldUpdateOperationsInput | number
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repairCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repaired?: BoolFieldUpdateOperationsInput | boolean
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    interestedParties?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    supplierId?: IntFieldUpdateOperationsInput | number
    cartId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AndreessCreateManySupplierInput = {
    id?: number
    street: string
    number: string
    city: string
    state: string
    cep: string
  }

  export type AndreessUpdateWithoutSupplierInput = {
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneWithoutAndreessNestedInput
  }

  export type AndreessUncheckedUpdateWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    User?: UserUncheckedUpdateOneWithoutAndreessNestedInput
  }

  export type AndreessUncheckedUpdateManyWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
  }

  export type ProductsCreateManyDatasheetInput = {
    id?: number
    categoryId?: number | null
    sellerId: number
    buyerId: number
    name: string
    price: number
    description: string
    image: string
    auditTrailId: number
    size: number
    salePrice: Decimal | DecimalJsLike | number | string
    repairCost: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    repaired: boolean
    lastModified: Date | string
    interestedParties: number
    brand: string
    model: string
    condition: string
    supplierId: number
    cartId?: number | null
  }

  export type ProductsUpdateWithoutDatasheetInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repairCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repaired?: BoolFieldUpdateOperationsInput | boolean
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    interestedParties?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    supplierId?: IntFieldUpdateOperationsInput | number
    auditTrail?: AuditTrailUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoryUpdateOneWithoutProductsNestedInput
    seller?: UserUpdateOneWithoutProductsSoldNestedInput
    buyer?: UserUpdateOneWithoutProductsBoughtNestedInput
    cart?: CartUpdateOneWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutDatasheetInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    sellerId?: IntFieldUpdateOperationsInput | number
    buyerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    auditTrailId?: IntFieldUpdateOperationsInput | number
    size?: FloatFieldUpdateOperationsInput | number
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repairCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repaired?: BoolFieldUpdateOperationsInput | boolean
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    interestedParties?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    supplierId?: IntFieldUpdateOperationsInput | number
    cartId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductsUncheckedUpdateManyWithoutDatasheetInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    sellerId?: IntFieldUpdateOperationsInput | number
    buyerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    auditTrailId?: IntFieldUpdateOperationsInput | number
    size?: FloatFieldUpdateOperationsInput | number
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repairCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repaired?: BoolFieldUpdateOperationsInput | boolean
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    interestedParties?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    supplierId?: IntFieldUpdateOperationsInput | number
    cartId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductsCreateManyCategoryInput = {
    id?: number
    sellerId: number
    buyerId: number
    datasheetsId?: number | null
    name: string
    price: number
    description: string
    image: string
    auditTrailId: number
    size: number
    salePrice: Decimal | DecimalJsLike | number | string
    repairCost: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    repaired: boolean
    lastModified: Date | string
    interestedParties: number
    brand: string
    model: string
    condition: string
    supplierId: number
    cartId?: number | null
  }

  export type ProductsUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repairCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repaired?: BoolFieldUpdateOperationsInput | boolean
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    interestedParties?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    supplierId?: IntFieldUpdateOperationsInput | number
    auditTrail?: AuditTrailUpdateOneRequiredWithoutProductsNestedInput
    datasheet?: DatasheetsUpdateOneWithoutProductsNestedInput
    seller?: UserUpdateOneWithoutProductsSoldNestedInput
    buyer?: UserUpdateOneWithoutProductsBoughtNestedInput
    cart?: CartUpdateOneWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    sellerId?: IntFieldUpdateOperationsInput | number
    buyerId?: IntFieldUpdateOperationsInput | number
    datasheetsId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    auditTrailId?: IntFieldUpdateOperationsInput | number
    size?: FloatFieldUpdateOperationsInput | number
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repairCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repaired?: BoolFieldUpdateOperationsInput | boolean
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    interestedParties?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    supplierId?: IntFieldUpdateOperationsInput | number
    cartId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductsUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    sellerId?: IntFieldUpdateOperationsInput | number
    buyerId?: IntFieldUpdateOperationsInput | number
    datasheetsId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    auditTrailId?: IntFieldUpdateOperationsInput | number
    size?: FloatFieldUpdateOperationsInput | number
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repairCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repaired?: BoolFieldUpdateOperationsInput | boolean
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    interestedParties?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    supplierId?: IntFieldUpdateOperationsInput | number
    cartId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductsCreateManyCartInput = {
    id?: number
    categoryId?: number | null
    sellerId: number
    buyerId: number
    datasheetsId?: number | null
    name: string
    price: number
    description: string
    image: string
    auditTrailId: number
    size: number
    salePrice: Decimal | DecimalJsLike | number | string
    repairCost: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    repaired: boolean
    lastModified: Date | string
    interestedParties: number
    brand: string
    model: string
    condition: string
    supplierId: number
  }

  export type ProductsUpdateWithoutCartInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repairCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repaired?: BoolFieldUpdateOperationsInput | boolean
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    interestedParties?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    supplierId?: IntFieldUpdateOperationsInput | number
    auditTrail?: AuditTrailUpdateOneRequiredWithoutProductsNestedInput
    datasheet?: DatasheetsUpdateOneWithoutProductsNestedInput
    category?: CategoryUpdateOneWithoutProductsNestedInput
    seller?: UserUpdateOneWithoutProductsSoldNestedInput
    buyer?: UserUpdateOneWithoutProductsBoughtNestedInput
  }

  export type ProductsUncheckedUpdateWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    sellerId?: IntFieldUpdateOperationsInput | number
    buyerId?: IntFieldUpdateOperationsInput | number
    datasheetsId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    auditTrailId?: IntFieldUpdateOperationsInput | number
    size?: FloatFieldUpdateOperationsInput | number
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repairCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repaired?: BoolFieldUpdateOperationsInput | boolean
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    interestedParties?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    supplierId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductsUncheckedUpdateManyWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    sellerId?: IntFieldUpdateOperationsInput | number
    buyerId?: IntFieldUpdateOperationsInput | number
    datasheetsId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    auditTrailId?: IntFieldUpdateOperationsInput | number
    size?: FloatFieldUpdateOperationsInput | number
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repairCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    repaired?: BoolFieldUpdateOperationsInput | boolean
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    interestedParties?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    supplierId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupplierCountOutputTypeDefaultArgs instead
     */
    export type SupplierCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupplierCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DatasheetsCountOutputTypeDefaultArgs instead
     */
    export type DatasheetsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DatasheetsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CartCountOutputTypeDefaultArgs instead
     */
    export type CartCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CartCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use supplierDefaultArgs instead
     */
    export type supplierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = supplierDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductsDefaultArgs instead
     */
    export type ProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AndreessDefaultArgs instead
     */
    export type AndreessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AndreessDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DatasheetsDefaultArgs instead
     */
    export type DatasheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DatasheetsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CartDefaultArgs instead
     */
    export type CartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CartDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuditTrailDefaultArgs instead
     */
    export type AuditTrailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuditTrailDefaultArgs<ExtArgs>
    /**
     * @deprecated Use YoloDefaultArgs instead
     */
    export type YoloArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = YoloDefaultArgs<ExtArgs>
    /**
     * @deprecated Use YoloTrainingDefaultArgs instead
     */
    export type YoloTrainingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = YoloTrainingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use YoloImagesDefaultArgs instead
     */
    export type YoloImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = YoloImagesDefaultArgs<ExtArgs>

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