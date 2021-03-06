export declare type KeysOfUnion<T> = T extends any ? keyof T : never;
export declare type ChangeToCheck<T_State extends {
    [key: string]: any;
}, T_ItemType extends string> = {
    types?: [T_ItemType];
    names?: string[];
    props?: KeysOfUnion<NonNullable<T_State[T_ItemType]>[keyof T_State[T_ItemType]]>[];
    addedOrRemoved?: boolean;
} | {
    types?: T_ItemType;
    names?: string[];
    props?: KeysOfUnion<NonNullable<T_State[T_ItemType]>[keyof T_State[T_ItemType]]>[];
    addedOrRemoved?: boolean;
};
export declare type DeepReadonly<T> = T extends AnyFunction | Primitive ? T : T extends ReadonlyArray<infer R> ? T : T extends ReadonlyMap<infer K, infer V> ? IDRMap<K, V> : T extends ReadonlySet<infer ItemType> ? ReadonlySetDeep<ItemType> : T extends object ? DeepReadonlyObject<T> : T;
export declare type Primitive = null | undefined | string | number | boolean | symbol | bigint;
export declare type AnyFunction = (...args: any[]) => any;
declare type DeepReadonlyObject<T> = {
    readonly [P in keyof T]: DeepReadonly<T[P]>;
};
interface IDRMap<K, V> extends ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>> {
}
interface ReadonlySetDeep<ItemType> extends ReadonlySet<DeepReadonly<ItemType>> {
}
declare type WithoutB<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export declare type XOR<T, U> = T | U extends object ? (WithoutB<T, U> & U) | (WithoutB<U, T> & T) : T | U;
export declare type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};
export declare type GetPartialState<T_State> = {
    [P_Type in keyof T_State]?: {
        [P_Name in keyof T_State[P_Type]]?: {
            [P_Property in keyof T_State[P_Type][P_Name]]?: P_Property extends keyof T_State[P_Type][P_Name] ? T_State[P_Type][P_Name][P_Property] : never;
        };
    };
};
export declare type ExtendsString<T> = T extends string ? T : never;
export declare type PietemCallback = (frameDuration: number, frameTime: number) => any;
export declare type SetPietemState<T_State> = (newState: GetPartialState<T_State> | ((state: DeepReadonly<T_State>) => GetPartialState<T_State>), callback?: PietemCallback) => void;
export declare type Phase = "subscribe" | "derive";
export {};
