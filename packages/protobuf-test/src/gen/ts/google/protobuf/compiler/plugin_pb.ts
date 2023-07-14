// Protocol Buffers - Google's data interchange format
// Copyright 2008 Google Inc.  All rights reserved.
// https://developers.google.com/protocol-buffers/
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//     * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

// Author: kenton@google.com (Kenton Varda)
//
// protoc (aka the Protocol Compiler) can be extended via plugins.  A plugin is
// just a program that reads a CodeGeneratorRequest from stdin and writes a
// CodeGeneratorResponse to stdout.
//
// Plugins written using C++ can use google/protobuf/compiler/plugin.h instead
// of dealing with the raw protocol defined here.
//
// A plugin executable needs only to be placed somewhere in the path.  The
// plugin should be named "protoc-gen-$NAME", and will then be used when the
// flag "--${NAME}_out" is passed to protoc.

// @generated by protoc-gen-es v1.3.0 with parameter "ts_nocheck=false,target=ts"
// @generated from file google/protobuf/compiler/plugin.proto (package google.protobuf.compiler, syntax proto2)
/* eslint-disable */

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto2 } from "@bufbuild/protobuf";
import { FileDescriptorProto, GeneratedCodeInfo } from "../descriptor_pb.js";

/**
 * The version number of protocol compiler.
 *
 * @generated from message google.protobuf.compiler.Version
 */
export class Version extends Message<Version> {
  /**
   * @generated from field: optional int32 major = 1;
   */
  major?: number;

  /**
   * @generated from field: optional int32 minor = 2;
   */
  minor?: number;

  /**
   * @generated from field: optional int32 patch = 3;
   */
  patch?: number;

  /**
   * A suffix for alpha, beta or rc release, e.g., "alpha-1", "rc2". It should
   * be empty for mainline stable releases.
   *
   * @generated from field: optional string suffix = 4;
   */
  suffix?: string;

  constructor(data?: PartialMessage<Version>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "google.protobuf.compiler.Version";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 1, name: "major", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 2, name: "minor", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 3, name: "patch", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 4, name: "suffix", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Version {
    return new Version().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Version {
    return new Version().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Version {
    return new Version().fromJsonString(jsonString, options);
  }

  static equals(a: Version | PlainMessage<Version> | undefined, b: Version | PlainMessage<Version> | undefined): boolean {
    return proto2.util.equals(Version, a, b);
  }
}

/**
 * An encoded CodeGeneratorRequest is written to the plugin's stdin.
 *
 * @generated from message google.protobuf.compiler.CodeGeneratorRequest
 */
export class CodeGeneratorRequest extends Message<CodeGeneratorRequest> {
  /**
   * The .proto files that were explicitly listed on the command-line.  The
   * code generator should generate code only for these files.  Each file's
   * descriptor will be included in proto_file, below.
   *
   * @generated from field: repeated string file_to_generate = 1;
   */
  fileToGenerate: string[] = [];

  /**
   * The generator parameter passed on the command-line.
   *
   * @generated from field: optional string parameter = 2;
   */
  parameter?: string;

  /**
   * FileDescriptorProtos for all files in files_to_generate and everything
   * they import.  The files will appear in topological order, so each file
   * appears before any file that imports it.
   *
   * protoc guarantees that all proto_files will be written after
   * the fields above, even though this is not technically guaranteed by the
   * protobuf wire format.  This theoretically could allow a plugin to stream
   * in the FileDescriptorProtos and handle them one by one rather than read
   * the entire set into memory at once.  However, as of this writing, this
   * is not similarly optimized on protoc's end -- it will store all fields in
   * memory at once before sending them to the plugin.
   *
   * Type names of fields and extensions in the FileDescriptorProto are always
   * fully qualified.
   *
   * @generated from field: repeated google.protobuf.FileDescriptorProto proto_file = 15;
   */
  protoFile: FileDescriptorProto[] = [];

  /**
   * The version number of protocol compiler.
   *
   * @generated from field: optional google.protobuf.compiler.Version compiler_version = 3;
   */
  compilerVersion?: Version;

  constructor(data?: PartialMessage<CodeGeneratorRequest>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "google.protobuf.compiler.CodeGeneratorRequest";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 1, name: "file_to_generate", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "parameter", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 15, name: "proto_file", kind: "message", T: FileDescriptorProto, repeated: true },
    { no: 3, name: "compiler_version", kind: "message", T: Version, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CodeGeneratorRequest {
    return new CodeGeneratorRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CodeGeneratorRequest {
    return new CodeGeneratorRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CodeGeneratorRequest {
    return new CodeGeneratorRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CodeGeneratorRequest | PlainMessage<CodeGeneratorRequest> | undefined, b: CodeGeneratorRequest | PlainMessage<CodeGeneratorRequest> | undefined): boolean {
    return proto2.util.equals(CodeGeneratorRequest, a, b);
  }
}

/**
 * The plugin writes an encoded CodeGeneratorResponse to stdout.
 *
 * @generated from message google.protobuf.compiler.CodeGeneratorResponse
 */
export class CodeGeneratorResponse extends Message<CodeGeneratorResponse> {
  /**
   * Error message.  If non-empty, code generation failed.  The plugin process
   * should exit with status code zero even if it reports an error in this way.
   *
   * This should be used to indicate errors in .proto files which prevent the
   * code generator from generating correct code.  Errors which indicate a
   * problem in protoc itself -- such as the input CodeGeneratorRequest being
   * unparseable -- should be reported by writing a message to stderr and
   * exiting with a non-zero status code.
   *
   * @generated from field: optional string error = 1;
   */
  error?: string;

  /**
   * A bitmask of supported features that the code generator supports.
   * This is a bitwise "or" of values from the Feature enum.
   *
   * @generated from field: optional uint64 supported_features = 2;
   */
  supportedFeatures?: bigint;

  /**
   * @generated from field: repeated google.protobuf.compiler.CodeGeneratorResponse.File file = 15;
   */
  file: CodeGeneratorResponse_File[] = [];

  constructor(data?: PartialMessage<CodeGeneratorResponse>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "google.protobuf.compiler.CodeGeneratorResponse";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 1, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "supported_features", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 15, name: "file", kind: "message", T: CodeGeneratorResponse_File, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CodeGeneratorResponse {
    return new CodeGeneratorResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CodeGeneratorResponse {
    return new CodeGeneratorResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CodeGeneratorResponse {
    return new CodeGeneratorResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CodeGeneratorResponse | PlainMessage<CodeGeneratorResponse> | undefined, b: CodeGeneratorResponse | PlainMessage<CodeGeneratorResponse> | undefined): boolean {
    return proto2.util.equals(CodeGeneratorResponse, a, b);
  }
}

/**
 * Sync with code_generator.h.
 *
 * @generated from enum google.protobuf.compiler.CodeGeneratorResponse.Feature
 */
export enum CodeGeneratorResponse_Feature {
  /**
   * @generated from enum value: FEATURE_NONE = 0;
   */
  NONE = 0,

  /**
   * @generated from enum value: FEATURE_PROTO3_OPTIONAL = 1;
   */
  PROTO3_OPTIONAL = 1,
}
// Retrieve enum metadata with: proto2.getEnumType(CodeGeneratorResponse_Feature)
proto2.util.setEnumType(CodeGeneratorResponse_Feature, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [
  { no: 0, name: "FEATURE_NONE" },
  { no: 1, name: "FEATURE_PROTO3_OPTIONAL" },
]);

/**
 * Represents a single generated file.
 *
 * @generated from message google.protobuf.compiler.CodeGeneratorResponse.File
 */
export class CodeGeneratorResponse_File extends Message<CodeGeneratorResponse_File> {
  /**
   * The file name, relative to the output directory.  The name must not
   * contain "." or ".." components and must be relative, not be absolute (so,
   * the file cannot lie outside the output directory).  "/" must be used as
   * the path separator, not "\".
   *
   * If the name is omitted, the content will be appended to the previous
   * file.  This allows the generator to break large files into small chunks,
   * and allows the generated text to be streamed back to protoc so that large
   * files need not reside completely in memory at one time.  Note that as of
   * this writing protoc does not optimize for this -- it will read the entire
   * CodeGeneratorResponse before writing files to disk.
   *
   * @generated from field: optional string name = 1;
   */
  name?: string;

  /**
   * If non-empty, indicates that the named file should already exist, and the
   * content here is to be inserted into that file at a defined insertion
   * point.  This feature allows a code generator to extend the output
   * produced by another code generator.  The original generator may provide
   * insertion points by placing special annotations in the file that look
   * like:
   *   @@protoc_insertion_point(NAME)
   * The annotation can have arbitrary text before and after it on the line,
   * which allows it to be placed in a comment.  NAME should be replaced with
   * an identifier naming the point -- this is what other generators will use
   * as the insertion_point.  Code inserted at this point will be placed
   * immediately above the line containing the insertion point (thus multiple
   * insertions to the same point will come out in the order they were added).
   * The double-@ is intended to make it unlikely that the generated code
   * could contain things that look like insertion points by accident.
   *
   * For example, the C++ code generator places the following line in the
   * .pb.h files that it generates:
   *   // @@protoc_insertion_point(namespace_scope)
   * This line appears within the scope of the file's package namespace, but
   * outside of any particular class.  Another plugin can then specify the
   * insertion_point "namespace_scope" to generate additional classes or
   * other declarations that should be placed in this scope.
   *
   * Note that if the line containing the insertion point begins with
   * whitespace, the same whitespace will be added to every line of the
   * inserted text.  This is useful for languages like Python, where
   * indentation matters.  In these languages, the insertion point comment
   * should be indented the same amount as any inserted code will need to be
   * in order to work correctly in that context.
   *
   * The code generator that generates the initial file and the one which
   * inserts into it must both run as part of a single invocation of protoc.
   * Code generators are executed in the order in which they appear on the
   * command line.
   *
   * If |insertion_point| is present, |name| must also be present.
   *
   * @generated from field: optional string insertion_point = 2;
   */
  insertionPoint?: string;

  /**
   * The file contents.
   *
   * @generated from field: optional string content = 15;
   */
  content?: string;

  /**
   * Information describing the file content being inserted. If an insertion
   * point is used, this information will be appropriately offset and inserted
   * into the code generation metadata for the generated files.
   *
   * @generated from field: optional google.protobuf.GeneratedCodeInfo generated_code_info = 16;
   */
  generatedCodeInfo?: GeneratedCodeInfo;

  constructor(data?: PartialMessage<CodeGeneratorResponse_File>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "google.protobuf.compiler.CodeGeneratorResponse.File";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "insertion_point", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 15, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 16, name: "generated_code_info", kind: "message", T: GeneratedCodeInfo, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CodeGeneratorResponse_File {
    return new CodeGeneratorResponse_File().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CodeGeneratorResponse_File {
    return new CodeGeneratorResponse_File().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CodeGeneratorResponse_File {
    return new CodeGeneratorResponse_File().fromJsonString(jsonString, options);
  }

  static equals(a: CodeGeneratorResponse_File | PlainMessage<CodeGeneratorResponse_File> | undefined, b: CodeGeneratorResponse_File | PlainMessage<CodeGeneratorResponse_File> | undefined): boolean {
    return proto2.util.equals(CodeGeneratorResponse_File, a, b);
  }
}

