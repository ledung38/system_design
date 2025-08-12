// Utility types
// 1.1 keyof
type ObjectType = {
  obj1: string;
  obj2: number;
};

type keyOfObjectType = keyof ObjectType & string;

const key1: keyOfObjectType = "obj1";

// 1.2 valueof
type ValueType = {
  0: "I am 0";
  1: "I am 1";
  p: "c";
  pp1: "d";
};
type valueOfValueTypeReturn = ValueType[0];
type valueOfValueType = ValueType[keyof ValueType];

// 1.3
type obj1 = "a" | "b" | "c";
type obj2 = "a" | "b" | "d";

type obj3 = obj1 & obj2;
type obj4 = obj1 | obj2;

// 1.4

type obj11 = {
  a: string;
  b: number;
  c: boolean;
  d: string;
  e: number;
  f: boolean;
};
type obj22 = obj11 & {
  g: string;
  h: number;
  i: boolean;
};

const value22: obj22 = {
  a: "a",
  b: 1,
  c: true,
  d: "d",
  e: 1,
  f: true,
  g: "g",
  h: 1,
  i: true,
};

// 1.5
type obj5 = {
  a: string;
  b: number;
  c: boolean;
};

type SameObj5 = {
  [key in "a" | "b" | "c"]: string | number | boolean;
};

// 1.6 Partial
type obj6 = {
  a: string;
  b: number;
  c: boolean;
};

type PartialObj6 = Partial<obj6>;

// 1.7 Readonly
type obj7 = {
  a: string;
  b: number;
  c: boolean;
};

type ReadonlyObj7 = Readonly<obj7>;

// 1.8 Record
type RecordObj8 = Record<"a" | "b" | "c", string | number | boolean>;

// 1.9 Pick
type PickObj9 = Pick<obj6, "a" | "b">;

// 1.10 Omit
type OmitObj10 = Omit<obj6, "c">;

// 1.11 Exclude
type ExcludeObj11 = Exclude<"a" | "b" | "c", "a">;

// 1.12 Extract
type ExtractObj12 = Extract<"a" | "b" | "c", "a">;

// 1.13 NonNullable
type NonNullableObj13 = NonNullable<"a" | "b" | "c" | null | undefined>;

// 1.14 ReturnType
type ReturnTypeObj14 = ReturnType<() => string>;

// 1.15 Awaited
type AwaitedObj15 = Awaited<Promise<string>>;

// 1.16 Parameters
type ParametersObj16 = Parameters<(a: number, b: string) => void>;

// 1.17 ConstructorParameters
type ConstructorParametersObj17 = ConstructorParameters<ErrorConstructor>;

// 1.18 InstanceType
type InstanceTypeObj18 = InstanceType<ErrorConstructor>;

// 1.19 ThisType
type ThisTypeObj19 = ThisType<ErrorConstructor>;

// 1.20 Uppercase
type UppercaseObj20 = Uppercase<"a" | "b" | "c">;

// 1.21 Lowercase
type LowercaseObj21 = Lowercase<"A" | "B" | "C">;

// Generic types

type Book = {
  title: string;
  author: string;
  price: number;
};

type ActionBook = `update-${keyof Book}`;

type Action<T, K extends keyof T> = {
  type: ActionBook;
  payload: T[K];
};

type UpdateTitleAction = Action<Book, "price">;

// Generic constraints

type Linked<T> = {
  value: T;
  next?: Linked<T>;
};

const linked: Linked<number> = {
  value: 1,
  next: {
    value: 2,
  },
};

const buildLinked = <T>(value: T): Linked<T> => ({
  value,
});

const stringLinked = buildLinked<string>("a");
const numberLinked = buildLinked<number>(1);
