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

// @generated by protoc-gen-es v2.1.0 with parameter "target=js+dts,import_extension=js"
// @generated from file google/protobuf/unittest_proto3_optional.proto (package protobuf_unittest, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenExtension, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { MessageOptions } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file google/protobuf/unittest_proto3_optional.proto.
 */
export declare const file_google_protobuf_unittest_proto3_optional: GenFile;

/**
 * @generated from message protobuf_unittest.TestProto3Optional
 */
export declare type TestProto3Optional = Message<"protobuf_unittest.TestProto3Optional"> & {
  /**
   * Singular
   *
   * @generated from field: optional int32 optional_int32 = 1;
   */
  optionalInt32?: number;

  /**
   * @generated from field: optional int64 optional_int64 = 2;
   */
  optionalInt64?: bigint;

  /**
   * @generated from field: optional uint32 optional_uint32 = 3;
   */
  optionalUint32?: number;

  /**
   * @generated from field: optional uint64 optional_uint64 = 4;
   */
  optionalUint64?: bigint;

  /**
   * @generated from field: optional sint32 optional_sint32 = 5;
   */
  optionalSint32?: number;

  /**
   * @generated from field: optional sint64 optional_sint64 = 6;
   */
  optionalSint64?: bigint;

  /**
   * @generated from field: optional fixed32 optional_fixed32 = 7;
   */
  optionalFixed32?: number;

  /**
   * @generated from field: optional fixed64 optional_fixed64 = 8;
   */
  optionalFixed64?: bigint;

  /**
   * @generated from field: optional sfixed32 optional_sfixed32 = 9;
   */
  optionalSfixed32?: number;

  /**
   * @generated from field: optional sfixed64 optional_sfixed64 = 10;
   */
  optionalSfixed64?: bigint;

  /**
   * @generated from field: optional float optional_float = 11;
   */
  optionalFloat?: number;

  /**
   * @generated from field: optional double optional_double = 12;
   */
  optionalDouble?: number;

  /**
   * @generated from field: optional bool optional_bool = 13;
   */
  optionalBool?: boolean;

  /**
   * @generated from field: optional string optional_string = 14;
   */
  optionalString?: string;

  /**
   * @generated from field: optional bytes optional_bytes = 15;
   */
  optionalBytes?: Uint8Array;

  /**
   * @generated from field: optional string optional_cord = 16;
   */
  optionalCord?: string;

  /**
   * @generated from field: optional protobuf_unittest.TestProto3Optional.NestedMessage optional_nested_message = 18;
   */
  optionalNestedMessage?: TestProto3Optional_NestedMessage;

  /**
   * @generated from field: optional protobuf_unittest.TestProto3Optional.NestedMessage lazy_nested_message = 19;
   */
  lazyNestedMessage?: TestProto3Optional_NestedMessage;

  /**
   * @generated from field: optional protobuf_unittest.TestProto3Optional.NestedEnum optional_nested_enum = 21;
   */
  optionalNestedEnum?: TestProto3Optional_NestedEnum;

  /**
   * Add some non-optional fields to verify we can mix them.
   *
   * @generated from field: int32 singular_int32 = 22;
   */
  singularInt32: number;

  /**
   * @generated from field: int64 singular_int64 = 23;
   */
  singularInt64: bigint;
};

/**
 * Describes the message protobuf_unittest.TestProto3Optional.
 * Use `create(TestProto3OptionalSchema)` to create a new message.
 */
export declare const TestProto3OptionalSchema: GenMessage<TestProto3Optional>;

/**
 * @generated from message protobuf_unittest.TestProto3Optional.NestedMessage
 */
export declare type TestProto3Optional_NestedMessage = Message<"protobuf_unittest.TestProto3Optional.NestedMessage"> & {
  /**
   * The field name "b" fails to compile in proto1 because it conflicts with
   * a local variable named "b" in one of the generated methods.  Doh.
   * This file needs to compile in proto1 to test backwards-compatibility.
   *
   * @generated from field: optional int32 bb = 1;
   */
  bb?: number;
};

/**
 * Describes the message protobuf_unittest.TestProto3Optional.NestedMessage.
 * Use `create(TestProto3Optional_NestedMessageSchema)` to create a new message.
 */
export declare const TestProto3Optional_NestedMessageSchema: GenMessage<TestProto3Optional_NestedMessage>;

/**
 * @generated from enum protobuf_unittest.TestProto3Optional.NestedEnum
 */
export enum TestProto3Optional_NestedEnum {
  /**
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: FOO = 1;
   */
  FOO = 1,

  /**
   * @generated from enum value: BAR = 2;
   */
  BAR = 2,

  /**
   * @generated from enum value: BAZ = 3;
   */
  BAZ = 3,

  /**
   * Intentionally negative.
   *
   * @generated from enum value: NEG = -1;
   */
  NEG = -1,
}

/**
 * Describes the enum protobuf_unittest.TestProto3Optional.NestedEnum.
 */
export declare const TestProto3Optional_NestedEnumSchema: GenEnum<TestProto3Optional_NestedEnum>;

/**
 * @generated from message protobuf_unittest.TestProto3OptionalMessage
 */
export declare type TestProto3OptionalMessage = Message<"protobuf_unittest.TestProto3OptionalMessage"> & {
  /**
   * @generated from field: protobuf_unittest.TestProto3OptionalMessage.NestedMessage nested_message = 1;
   */
  nestedMessage?: TestProto3OptionalMessage_NestedMessage;

  /**
   * @generated from field: optional protobuf_unittest.TestProto3OptionalMessage.NestedMessage optional_nested_message = 2;
   */
  optionalNestedMessage?: TestProto3OptionalMessage_NestedMessage;
};

/**
 * Describes the message protobuf_unittest.TestProto3OptionalMessage.
 * Use `create(TestProto3OptionalMessageSchema)` to create a new message.
 */
export declare const TestProto3OptionalMessageSchema: GenMessage<TestProto3OptionalMessage>;

/**
 * @generated from message protobuf_unittest.TestProto3OptionalMessage.NestedMessage
 */
export declare type TestProto3OptionalMessage_NestedMessage = Message<"protobuf_unittest.TestProto3OptionalMessage.NestedMessage"> & {
  /**
   * @generated from field: string s = 1;
   */
  s: string;
};

/**
 * Describes the message protobuf_unittest.TestProto3OptionalMessage.NestedMessage.
 * Use `create(TestProto3OptionalMessage_NestedMessageSchema)` to create a new message.
 */
export declare const TestProto3OptionalMessage_NestedMessageSchema: GenMessage<TestProto3OptionalMessage_NestedMessage>;

/**
 * @generated from message protobuf_unittest.Proto3OptionalExtensions
 */
export declare type Proto3OptionalExtensions = Message<"protobuf_unittest.Proto3OptionalExtensions"> & {
};

/**
 * Describes the message protobuf_unittest.Proto3OptionalExtensions.
 * Use `create(Proto3OptionalExtensionsSchema)` to create a new message.
 */
export declare const Proto3OptionalExtensionsSchema: GenMessage<Proto3OptionalExtensions>;

/**
 * @generated from extension: int32 ext_no_optional = 355886728;
 */
export declare const Proto3OptionalExtensions_ext_no_optional: GenExtension<MessageOptions, number>;

/**
 * @generated from extension: optional int32 ext_with_optional = 355886729;
 */
export declare const Proto3OptionalExtensions_ext_with_optional: GenExtension<MessageOptions, number>;

