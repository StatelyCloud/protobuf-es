// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v2.2.1 with parameter "target=js+dts,import_extension=js"
// @generated from file extra/json_types.proto (package spec, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { JsonObject, Message } from "@bufbuild/protobuf";
import type { Any, Duration, Empty, FieldMask, ListValue, NullValue, Timestamp, Value } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file extra/json_types.proto.
 */
export declare const file_extra_json_types: GenFile;

/**
 * @generated from message spec.JsonTypesMessage
 */
export declare type JsonTypesMessage = Message<"spec.JsonTypesMessage"> & {
  /**
   * @generated from field: bool bool_field = 1 [json_name = "booleanFieldWithCustomName"];
   */
  boolField: boolean;

  /**
   * @generated from field: double double_field = 2;
   */
  doubleField: number;

  /**
   * @generated from field: bytes bytes_field = 3;
   */
  bytesField: Uint8Array;

  /**
   * @generated from field: int64 int64_field = 4;
   */
  int64Field: bigint;

  /**
   * @generated from field: spec.JsonTypeEnum enum_field = 5;
   */
  enumField: JsonTypeEnum;

  /**
   * @generated from field: spec.JsonTypesMessage message_field = 6;
   */
  messageField?: JsonTypesMessage;

  /**
   * @generated from field: google.protobuf.Any any_field = 7;
   */
  anyField?: Any;

  /**
   * @generated from field: google.protobuf.Duration duration_field = 8;
   */
  durationField?: Duration;

  /**
   * @generated from field: google.protobuf.Empty empty_field = 9;
   */
  emptyField?: Empty;

  /**
   * @generated from field: google.protobuf.FieldMask field_mask_field = 10;
   */
  fieldMaskField?: FieldMask;

  /**
   * @generated from field: google.protobuf.Struct struct_field = 11;
   */
  structField?: JsonObject;

  /**
   * @generated from field: google.protobuf.Value value_field = 12;
   */
  valueField?: Value;

  /**
   * @generated from field: google.protobuf.ListValue list_value_field = 13;
   */
  listValueField?: ListValue;

  /**
   * @generated from field: google.protobuf.NullValue null_value_field = 14;
   */
  nullValueField: NullValue;

  /**
   * @generated from field: google.protobuf.Timestamp timestamp_field = 15;
   */
  timestampField?: Timestamp;

  /**
   * @generated from field: google.protobuf.DoubleValue wrapped_double_field = 16;
   */
  wrappedDoubleField?: number;

  /**
   * @generated from field: google.protobuf.FloatValue wrapped_float_field = 17;
   */
  wrappedFloatField?: number;

  /**
   * @generated from field: google.protobuf.Int64Value wrapped_int64_field = 18;
   */
  wrappedInt64Field?: bigint;

  /**
   * @generated from field: google.protobuf.UInt64Value wrapped_uint64_field = 19;
   */
  wrappedUint64Field?: bigint;

  /**
   * @generated from field: google.protobuf.Int32Value wrapped_int32_field = 20;
   */
  wrappedInt32Field?: number;

  /**
   * @generated from field: google.protobuf.UInt32Value wrapped_uint32_field = 21;
   */
  wrappedUint32Field?: number;

  /**
   * @generated from field: google.protobuf.BoolValue wrapped_bool_field = 22;
   */
  wrappedBoolField?: boolean;

  /**
   * @generated from field: google.protobuf.StringValue wrapped_string_field = 23;
   */
  wrappedStringField?: string;

  /**
   * @generated from field: google.protobuf.BytesValue wrapped_bytes_field = 24;
   */
  wrappedBytesField?: Uint8Array;

  /**
   * @generated from field: repeated spec.JsonTypeEnum repeated_enum_field = 25;
   */
  repeatedEnumField: JsonTypeEnum[];

  /**
   * @generated from field: map<bool, spec.JsonTypeEnum> map_bool_enum_field = 26;
   */
  mapBoolEnumField: { [key: string]: JsonTypeEnum };

  /**
   * @generated from field: bool json_name_ok = 27 [json_name = "Foo123_bar$"];
   */
  jsonNameOk: boolean;

  /**
   * @generated from field: bool json_name_at = 28 [json_name = "foo@"];
   */
  jsonNameAt: boolean;

  /**
   * @generated from field: bool json_name_hyphen = 29 [json_name = "foo-bar"];
   */
  jsonNameHyphen: boolean;

  /**
   * @generated from field: bool json_name_start_with_digit = 30 [json_name = "1foo"];
   */
  jsonNameStartWithDigit: boolean;

  /**
   * @generated from field: bool json_name_space = 31 [json_name = "foo bar"];
   */
  jsonNameSpace: boolean;

  /**
   * @generated from field: bool json_name_tab = 32 [json_name = "foo	bar"];
   */
  jsonNameTab: boolean;

  /**
   * @generated from field: bool json_name_non_ascii = 33 [json_name = "你好"];
   */
  jsonNameNonAscii: boolean;

  /**
   * @generated from field: bool json_name_escape = 34 [json_name = "foo
   * bar\n"];
   */
  jsonNameEscape: boolean;
};

/**
 * Describes the message spec.JsonTypesMessage.
 * Use `create(JsonTypesMessageSchema)` to create a new message.
 */
export declare const JsonTypesMessageSchema: GenMessage<JsonTypesMessage>;

/**
 * @generated from enum spec.JsonTypeEnum
 */
export enum JsonTypeEnum {
  /**
   * @generated from enum value: JSON_TYPE_ENUM_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: JSON_TYPE_ENUM_YES = 1;
   */
  YES = 1,

  /**
   * @generated from enum value: JSON_TYPE_ENUM_NO = 2;
   */
  NO = 2,
}

/**
 * Describes the enum spec.JsonTypeEnum.
 */
export declare const JsonTypeEnumSchema: GenEnum<JsonTypeEnum>;

