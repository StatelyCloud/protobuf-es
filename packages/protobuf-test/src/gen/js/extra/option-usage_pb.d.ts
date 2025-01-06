// Copyright 2021-2025 Buf Technologies, Inc.
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

// @generated by protoc-gen-es v2.2.3 with parameter "target=js+dts,import_extension=js"
// @generated from file extra/option-usage.proto (package spec, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file extra/option-usage.proto.
 */
export declare const file_extra_option_usage: GenFile;

/**
 * @generated from message spec.MessageWithOptions
 */
export declare type MessageWithOptions = Message<"spec.MessageWithOptions"> & {
  /**
   * @generated from field: int32 field = 1;
   */
  field: number;

  /**
   * @generated from oneof spec.MessageWithOptions.kind
   */
  kind: {
    /**
     * @generated from field: int32 oneof_field = 2;
     */
    value: number;
    case: "oneofField";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message spec.MessageWithOptions.
 * Use `create(MessageWithOptionsSchema)` to create a new message.
 */
export declare const MessageWithOptionsSchema: GenMessage<MessageWithOptions>;

/**
 * @generated from enum spec.EnumWithOptions
 */
export enum EnumWithOptions {
  /**
   * @generated from enum value: ENUM_WITH_OPTIONS_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,
}

/**
 * Describes the enum spec.EnumWithOptions.
 */
export declare const EnumWithOptionsSchema: GenEnum<EnumWithOptions>;

/**
 * @generated from service spec.ServiceWithOptions
 */
export declare const ServiceWithOptions: GenService<{
  /**
   * @generated from rpc spec.ServiceWithOptions.Foo
   */
  foo: {
    methodKind: "unary";
    input: typeof MessageWithOptionsSchema;
    output: typeof MessageWithOptionsSchema;
  },
}>;

