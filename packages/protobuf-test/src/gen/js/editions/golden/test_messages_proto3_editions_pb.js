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
// @generated from file editions/golden/test_messages_proto3_editions.proto (package protobuf_test_messages.editions.proto3, edition 2023)
// option features.field_presence = IMPLICIT;
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";
import { file_google_protobuf_any, file_google_protobuf_duration, file_google_protobuf_field_mask, file_google_protobuf_struct, file_google_protobuf_timestamp, file_google_protobuf_wrappers } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file editions/golden/test_messages_proto3_editions.proto.
 */
export const file_editions_golden_test_messages_proto3_editions = /*@__PURE__*/
  fileDesc("CjNlZGl0aW9ucy9nb2xkZW4vdGVzdF9tZXNzYWdlc19wcm90bzNfZWRpdGlvbnMucHJvdG8SJnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbnMucHJvdG8zIvtHChJUZXN0QWxsVHlwZXNQcm90bzMSFgoOb3B0aW9uYWxfaW50MzIYASABKAUSFgoOb3B0aW9uYWxfaW50NjQYAiABKAMSFwoPb3B0aW9uYWxfdWludDMyGAMgASgNEhcKD29wdGlvbmFsX3VpbnQ2NBgEIAEoBBIXCg9vcHRpb25hbF9zaW50MzIYBSABKBESFwoPb3B0aW9uYWxfc2ludDY0GAYgASgSEhgKEG9wdGlvbmFsX2ZpeGVkMzIYByABKAcSGAoQb3B0aW9uYWxfZml4ZWQ2NBgIIAEoBhIZChFvcHRpb25hbF9zZml4ZWQzMhgJIAEoDxIZChFvcHRpb25hbF9zZml4ZWQ2NBgKIAEoEBIWCg5vcHRpb25hbF9mbG9hdBgLIAEoAhIXCg9vcHRpb25hbF9kb3VibGUYDCABKAESFQoNb3B0aW9uYWxfYm9vbBgNIAEoCBIXCg9vcHRpb25hbF9zdHJpbmcYDiABKAkSFgoOb3B0aW9uYWxfYnl0ZXMYDyABKAwSaQoXb3B0aW9uYWxfbmVzdGVkX21lc3NhZ2UYEiABKAsySC5wcm90b2J1Zl90ZXN0X21lc3NhZ2VzLmVkaXRpb25zLnByb3RvMy5UZXN0QWxsVHlwZXNQcm90bzMuTmVzdGVkTWVzc2FnZRJYChhvcHRpb25hbF9mb3JlaWduX21lc3NhZ2UYEyABKAsyNi5wcm90b2J1Zl90ZXN0X21lc3NhZ2VzLmVkaXRpb25zLnByb3RvMy5Gb3JlaWduTWVzc2FnZRJjChRvcHRpb25hbF9uZXN0ZWRfZW51bRgVIAEoDjJFLnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbnMucHJvdG8zLlRlc3RBbGxUeXBlc1Byb3RvMy5OZXN0ZWRFbnVtElIKFW9wdGlvbmFsX2ZvcmVpZ25fZW51bRgWIAEoDjIzLnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbnMucHJvdG8zLkZvcmVpZ25FbnVtEmUKFW9wdGlvbmFsX2FsaWFzZWRfZW51bRgXIAEoDjJGLnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbnMucHJvdG8zLlRlc3RBbGxUeXBlc1Byb3RvMy5BbGlhc2VkRW51bRIhChVvcHRpb25hbF9zdHJpbmdfcGllY2UYGCABKAlCAggCEhkKDW9wdGlvbmFsX2NvcmQYGSABKAlCAggBElUKEXJlY3Vyc2l2ZV9tZXNzYWdlGBsgASgLMjoucHJvdG9idWZfdGVzdF9tZXNzYWdlcy5lZGl0aW9ucy5wcm90bzMuVGVzdEFsbFR5cGVzUHJvdG8zEhYKDnJlcGVhdGVkX2ludDMyGB8gAygFEhYKDnJlcGVhdGVkX2ludDY0GCAgAygDEhcKD3JlcGVhdGVkX3VpbnQzMhghIAMoDRIXCg9yZXBlYXRlZF91aW50NjQYIiADKAQSFwoPcmVwZWF0ZWRfc2ludDMyGCMgAygREhcKD3JlcGVhdGVkX3NpbnQ2NBgkIAMoEhIYChByZXBlYXRlZF9maXhlZDMyGCUgAygHEhgKEHJlcGVhdGVkX2ZpeGVkNjQYJiADKAYSGQoRcmVwZWF0ZWRfc2ZpeGVkMzIYJyADKA8SGQoRcmVwZWF0ZWRfc2ZpeGVkNjQYKCADKBASFgoOcmVwZWF0ZWRfZmxvYXQYKSADKAISFwoPcmVwZWF0ZWRfZG91YmxlGCogAygBEhUKDXJlcGVhdGVkX2Jvb2wYKyADKAgSFwoPcmVwZWF0ZWRfc3RyaW5nGCwgAygJEhYKDnJlcGVhdGVkX2J5dGVzGC0gAygMEmkKF3JlcGVhdGVkX25lc3RlZF9tZXNzYWdlGDAgAygLMkgucHJvdG9idWZfdGVzdF9tZXNzYWdlcy5lZGl0aW9ucy5wcm90bzMuVGVzdEFsbFR5cGVzUHJvdG8zLk5lc3RlZE1lc3NhZ2USWAoYcmVwZWF0ZWRfZm9yZWlnbl9tZXNzYWdlGDEgAygLMjYucHJvdG9idWZfdGVzdF9tZXNzYWdlcy5lZGl0aW9ucy5wcm90bzMuRm9yZWlnbk1lc3NhZ2USYwoUcmVwZWF0ZWRfbmVzdGVkX2VudW0YMyADKA4yRS5wcm90b2J1Zl90ZXN0X21lc3NhZ2VzLmVkaXRpb25zLnByb3RvMy5UZXN0QWxsVHlwZXNQcm90bzMuTmVzdGVkRW51bRJSChVyZXBlYXRlZF9mb3JlaWduX2VudW0YNCADKA4yMy5wcm90b2J1Zl90ZXN0X21lc3NhZ2VzLmVkaXRpb25zLnByb3RvMy5Gb3JlaWduRW51bRIhChVyZXBlYXRlZF9zdHJpbmdfcGllY2UYNiADKAlCAggCEhkKDXJlcGVhdGVkX2NvcmQYNyADKAlCAggBEhQKDHBhY2tlZF9pbnQzMhhLIAMoBRIUCgxwYWNrZWRfaW50NjQYTCADKAMSFQoNcGFja2VkX3VpbnQzMhhNIAMoDRIVCg1wYWNrZWRfdWludDY0GE4gAygEEhUKDXBhY2tlZF9zaW50MzIYTyADKBESFQoNcGFja2VkX3NpbnQ2NBhQIAMoEhIWCg5wYWNrZWRfZml4ZWQzMhhRIAMoBxIWCg5wYWNrZWRfZml4ZWQ2NBhSIAMoBhIXCg9wYWNrZWRfc2ZpeGVkMzIYUyADKA8SFwoPcGFja2VkX3NmaXhlZDY0GFQgAygQEhQKDHBhY2tlZF9mbG9hdBhVIAMoAhIVCg1wYWNrZWRfZG91YmxlGFYgAygBEhMKC3BhY2tlZF9ib29sGFcgAygIEmEKEnBhY2tlZF9uZXN0ZWRfZW51bRhYIAMoDjJFLnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbnMucHJvdG8zLlRlc3RBbGxUeXBlc1Byb3RvMy5OZXN0ZWRFbnVtEh0KDnVucGFja2VkX2ludDMyGFkgAygFQgWqAQIYAhIdCg51bnBhY2tlZF9pbnQ2NBhaIAMoA0IFqgECGAISHgoPdW5wYWNrZWRfdWludDMyGFsgAygNQgWqAQIYAhIeCg91bnBhY2tlZF91aW50NjQYXCADKARCBaoBAhgCEh4KD3VucGFja2VkX3NpbnQzMhhdIAMoEUIFqgECGAISHgoPdW5wYWNrZWRfc2ludDY0GF4gAygSQgWqAQIYAhIfChB1bnBhY2tlZF9maXhlZDMyGF8gAygHQgWqAQIYAhIfChB1bnBhY2tlZF9maXhlZDY0GGAgAygGQgWqAQIYAhIgChF1bnBhY2tlZF9zZml4ZWQzMhhhIAMoD0IFqgECGAISIAoRdW5wYWNrZWRfc2ZpeGVkNjQYYiADKBBCBaoBAhgCEh0KDnVucGFja2VkX2Zsb2F0GGMgAygCQgWqAQIYAhIeCg91bnBhY2tlZF9kb3VibGUYZCADKAFCBaoBAhgCEhwKDXVucGFja2VkX2Jvb2wYZSADKAhCBaoBAhgCEmoKFHVucGFja2VkX25lc3RlZF9lbnVtGGYgAygOMkUucHJvdG9idWZfdGVzdF9tZXNzYWdlcy5lZGl0aW9ucy5wcm90bzMuVGVzdEFsbFR5cGVzUHJvdG8zLk5lc3RlZEVudW1CBaoBAhgCEmYKD21hcF9pbnQzMl9pbnQzMhg4IAMoCzJNLnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbnMucHJvdG8zLlRlc3RBbGxUeXBlc1Byb3RvMy5NYXBJbnQzMkludDMyRW50cnkSZgoPbWFwX2ludDY0X2ludDY0GDkgAygLMk0ucHJvdG9idWZfdGVzdF9tZXNzYWdlcy5lZGl0aW9ucy5wcm90bzMuVGVzdEFsbFR5cGVzUHJvdG8zLk1hcEludDY0SW50NjRFbnRyeRJqChFtYXBfdWludDMyX3VpbnQzMhg6IAMoCzJPLnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbnMucHJvdG8zLlRlc3RBbGxUeXBlc1Byb3RvMy5NYXBVaW50MzJVaW50MzJFbnRyeRJqChFtYXBfdWludDY0X3VpbnQ2NBg7IAMoCzJPLnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbnMucHJvdG8zLlRlc3RBbGxUeXBlc1Byb3RvMy5NYXBVaW50NjRVaW50NjRFbnRyeRJqChFtYXBfc2ludDMyX3NpbnQzMhg8IAMoCzJPLnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbnMucHJvdG8zLlRlc3RBbGxUeXBlc1Byb3RvMy5NYXBTaW50MzJTaW50MzJFbnRyeRJqChFtYXBfc2ludDY0X3NpbnQ2NBg9IAMoCzJPLnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbnMucHJvdG8zLlRlc3RBbGxUeXBlc1Byb3RvMy5NYXBTaW50NjRTaW50NjRFbnRyeRJuChNtYXBfZml4ZWQzMl9maXhlZDMyGD4gAygLMlEucHJvdG9idWZfdGVzdF9tZXNzYWdlcy5lZGl0aW9ucy5wcm90bzMuVGVzdEFsbFR5cGVzUHJvdG8zLk1hcEZpeGVkMzJGaXhlZDMyRW50cnkSbgoTbWFwX2ZpeGVkNjRfZml4ZWQ2NBg/IAMoCzJRLnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbnMucHJvdG8zLlRlc3RBbGxUeXBlc1Byb3RvMy5NYXBGaXhlZDY0Rml4ZWQ2NEVudHJ5EnIKFW1hcF9zZml4ZWQzMl9zZml4ZWQzMhhAIAMoCzJTLnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbnMucHJvdG8zLlRlc3RBbGxUeXBlc1Byb3RvMy5NYXBTZml4ZWQzMlNmaXhlZDMyRW50cnkScgoVbWFwX3NmaXhlZDY0X3NmaXhlZDY0GEEgAygLMlMucHJvdG9idWZfdGVzdF9tZXNzYWdlcy5lZGl0aW9ucy5wcm90bzMuVGVzdEFsbFR5cGVzUHJvdG8zLk1hcFNmaXhlZDY0U2ZpeGVkNjRFbnRyeRJmCg9tYXBfaW50MzJfZmxvYXQYQiADKAsyTS5wcm90b2J1Zl90ZXN0X21lc3NhZ2VzLmVkaXRpb25zLnByb3RvMy5UZXN0QWxsVHlwZXNQcm90bzMuTWFwSW50MzJGbG9hdEVudHJ5EmgKEG1hcF9pbnQzMl9kb3VibGUYQyADKAsyTi5wcm90b2J1Zl90ZXN0X21lc3NhZ2VzLmVkaXRpb25zLnByb3RvMy5UZXN0QWxsVHlwZXNQcm90bzMuTWFwSW50MzJEb3VibGVFbnRyeRJiCg1tYXBfYm9vbF9ib29sGEQgAygLMksucHJvdG9idWZfdGVzdF9tZXNzYWdlcy5lZGl0aW9ucy5wcm90bzMuVGVzdEFsbFR5cGVzUHJvdG8zLk1hcEJvb2xCb29sRW50cnkSagoRbWFwX3N0cmluZ19zdHJpbmcYRSADKAsyTy5wcm90b2J1Zl90ZXN0X21lc3NhZ2VzLmVkaXRpb25zLnByb3RvMy5UZXN0QWxsVHlwZXNQcm90bzMuTWFwU3RyaW5nU3RyaW5nRW50cnkSaAoQbWFwX3N0cmluZ19ieXRlcxhGIAMoCzJOLnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbnMucHJvdG8zLlRlc3RBbGxUeXBlc1Byb3RvMy5NYXBTdHJpbmdCeXRlc0VudHJ5EnkKGW1hcF9zdHJpbmdfbmVzdGVkX21lc3NhZ2UYRyADKAsyVi5wcm90b2J1Zl90ZXN0X21lc3NhZ2VzLmVkaXRpb25zLnByb3RvMy5UZXN0QWxsVHlwZXNQcm90bzMuTWFwU3RyaW5nTmVzdGVkTWVzc2FnZUVudHJ5EnsKGm1hcF9zdHJpbmdfZm9yZWlnbl9tZXNzYWdlGEggAygLMlcucHJvdG9idWZfdGVzdF9tZXNzYWdlcy5lZGl0aW9ucy5wcm90bzMuVGVzdEFsbFR5cGVzUHJvdG8zLk1hcFN0cmluZ0ZvcmVpZ25NZXNzYWdlRW50cnkScwoWbWFwX3N0cmluZ19uZXN0ZWRfZW51bRhJIAMoCzJTLnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbnMucHJvdG8zLlRlc3RBbGxUeXBlc1Byb3RvMy5NYXBTdHJpbmdOZXN0ZWRFbnVtRW50cnkSdQoXbWFwX3N0cmluZ19mb3JlaWduX2VudW0YSiADKAsyVC5wcm90b2J1Zl90ZXN0X21lc3NhZ2VzLmVkaXRpb25zLnByb3RvMy5UZXN0QWxsVHlwZXNQcm90bzMuTWFwU3RyaW5nRm9yZWlnbkVudW1FbnRyeRIWCgxvbmVvZl91aW50MzIYbyABKA1IABJoChRvbmVvZl9uZXN0ZWRfbWVzc2FnZRhwIAEoCzJILnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbnMucHJvdG8zLlRlc3RBbGxUeXBlc1Byb3RvMy5OZXN0ZWRNZXNzYWdlSAASFgoMb25lb2Zfc3RyaW5nGHEgASgJSAASFQoLb25lb2ZfYnl0ZXMYciABKAxIABIUCgpvbmVvZl9ib29sGHMgASgISAASFgoMb25lb2ZfdWludDY0GHQgASgESAASFQoLb25lb2ZfZmxvYXQYdSABKAJIABIWCgxvbmVvZl9kb3VibGUYdiABKAFIABJbCgpvbmVvZl9lbnVtGHcgASgOMkUucHJvdG9idWZfdGVzdF9tZXNzYWdlcy5lZGl0aW9ucy5wcm90bzMuVGVzdEFsbFR5cGVzUHJvdG8zLk5lc3RlZEVudW1IABI2ChBvbmVvZl9udWxsX3ZhbHVlGHggASgOMhouZ29vZ2xlLnByb3RvYnVmLk51bGxWYWx1ZUgAEjoKFW9wdGlvbmFsX2Jvb2xfd3JhcHBlchjJASABKAsyGi5nb29nbGUucHJvdG9idWYuQm9vbFZhbHVlEjwKFm9wdGlvbmFsX2ludDMyX3dyYXBwZXIYygEgASgLMhsuZ29vZ2xlLnByb3RvYnVmLkludDMyVmFsdWUSPAoWb3B0aW9uYWxfaW50NjRfd3JhcHBlchjLASABKAsyGy5nb29nbGUucHJvdG9idWYuSW50NjRWYWx1ZRI+ChdvcHRpb25hbF91aW50MzJfd3JhcHBlchjMASABKAsyHC5nb29nbGUucHJvdG9idWYuVUludDMyVmFsdWUSPgoXb3B0aW9uYWxfdWludDY0X3dyYXBwZXIYzQEgASgLMhwuZ29vZ2xlLnByb3RvYnVmLlVJbnQ2NFZhbHVlEjwKFm9wdGlvbmFsX2Zsb2F0X3dyYXBwZXIYzgEgASgLMhsuZ29vZ2xlLnByb3RvYnVmLkZsb2F0VmFsdWUSPgoXb3B0aW9uYWxfZG91YmxlX3dyYXBwZXIYzwEgASgLMhwuZ29vZ2xlLnByb3RvYnVmLkRvdWJsZVZhbHVlEj4KF29wdGlvbmFsX3N0cmluZ193cmFwcGVyGNABIAEoCzIcLmdvb2dsZS5wcm90b2J1Zi5TdHJpbmdWYWx1ZRI8ChZvcHRpb25hbF9ieXRlc193cmFwcGVyGNEBIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5CeXRlc1ZhbHVlEjoKFXJlcGVhdGVkX2Jvb2xfd3JhcHBlchjTASADKAsyGi5nb29nbGUucHJvdG9idWYuQm9vbFZhbHVlEjwKFnJlcGVhdGVkX2ludDMyX3dyYXBwZXIY1AEgAygLMhsuZ29vZ2xlLnByb3RvYnVmLkludDMyVmFsdWUSPAoWcmVwZWF0ZWRfaW50NjRfd3JhcHBlchjVASADKAsyGy5nb29nbGUucHJvdG9idWYuSW50NjRWYWx1ZRI+ChdyZXBlYXRlZF91aW50MzJfd3JhcHBlchjWASADKAsyHC5nb29nbGUucHJvdG9idWYuVUludDMyVmFsdWUSPgoXcmVwZWF0ZWRfdWludDY0X3dyYXBwZXIY1wEgAygLMhwuZ29vZ2xlLnByb3RvYnVmLlVJbnQ2NFZhbHVlEjwKFnJlcGVhdGVkX2Zsb2F0X3dyYXBwZXIY2AEgAygLMhsuZ29vZ2xlLnByb3RvYnVmLkZsb2F0VmFsdWUSPgoXcmVwZWF0ZWRfZG91YmxlX3dyYXBwZXIY2QEgAygLMhwuZ29vZ2xlLnByb3RvYnVmLkRvdWJsZVZhbHVlEj4KF3JlcGVhdGVkX3N0cmluZ193cmFwcGVyGNoBIAMoCzIcLmdvb2dsZS5wcm90b2J1Zi5TdHJpbmdWYWx1ZRI8ChZyZXBlYXRlZF9ieXRlc193cmFwcGVyGNsBIAMoCzIbLmdvb2dsZS5wcm90b2J1Zi5CeXRlc1ZhbHVlEjUKEW9wdGlvbmFsX2R1cmF0aW9uGK0CIAEoCzIZLmdvb2dsZS5wcm90b2J1Zi5EdXJhdGlvbhI3ChJvcHRpb25hbF90aW1lc3RhbXAYrgIgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBI4ChNvcHRpb25hbF9maWVsZF9tYXNrGK8CIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5GaWVsZE1hc2sSMQoPb3B0aW9uYWxfc3RydWN0GLACIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3QSKwoMb3B0aW9uYWxfYW55GLECIAEoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSLwoOb3B0aW9uYWxfdmFsdWUYsgIgASgLMhYuZ29vZ2xlLnByb3RvYnVmLlZhbHVlEjgKE29wdGlvbmFsX251bGxfdmFsdWUYswIgASgOMhouZ29vZ2xlLnByb3RvYnVmLk51bGxWYWx1ZRI1ChFyZXBlYXRlZF9kdXJhdGlvbhi3AiADKAsyGS5nb29nbGUucHJvdG9idWYuRHVyYXRpb24SNwoScmVwZWF0ZWRfdGltZXN0YW1wGLgCIAMoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASNwoScmVwZWF0ZWRfZmllbGRtYXNrGLkCIAMoCzIaLmdvb2dsZS5wcm90b2J1Zi5GaWVsZE1hc2sSMQoPcmVwZWF0ZWRfc3RydWN0GMQCIAMoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3QSKwoMcmVwZWF0ZWRfYW55GLsCIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSLwoOcmVwZWF0ZWRfdmFsdWUYvAIgAygLMhYuZ29vZ2xlLnByb3RvYnVmLlZhbHVlEjgKE3JlcGVhdGVkX2xpc3RfdmFsdWUYvQIgAygLMhouZ29vZ2xlLnByb3RvYnVmLkxpc3RWYWx1ZRITCgpmaWVsZG5hbWUxGJEDIAEoBRIUCgtmaWVsZF9uYW1lMhiSAyABKAUSFQoMX2ZpZWxkX25hbWUzGJMDIAEoBRIWCg1maWVsZF9fbmFtZTRfGJQDIAEoBRIUCgtmaWVsZDBuYW1lNRiVAyABKAUSFgoNZmllbGRfMF9uYW1lNhiWAyABKAUSEwoKZmllbGROYW1lNxiXAyABKAUSEwoKRmllbGROYW1lOBiYAyABKAUSFAoLZmllbGRfTmFtZTkYmQMgASgFEhUKDEZpZWxkX05hbWUxMBiaAyABKAUSFQoMRklFTERfTkFNRTExGJsDIAEoBRIVCgxGSUVMRF9uYW1lMTIYnAMgASgFEhcKDl9fZmllbGRfbmFtZTEzGJ0DIAEoBRIXCg5fX0ZpZWxkX25hbWUxNBieAyABKAUSFgoNZmllbGRfX25hbWUxNRifAyABKAUSFgoNZmllbGRfX05hbWUxNhigAyABKAUSFwoOZmllbGRfbmFtZTE3X18YoQMgASgFEhcKDkZpZWxkX25hbWUxOF9fGKIDIAEoBRprCg1OZXN0ZWRNZXNzYWdlEgkKAWEYASABKAUSTwoLY29yZWN1cnNpdmUYAiABKAsyOi5wcm90b2J1Zl90ZXN0X21lc3NhZ2VzLmVkaXRpb25zLnByb3RvMy5UZXN0QWxsVHlwZXNQcm90bzMaNAoSTWFwSW50MzJJbnQzMkVudHJ5EgsKA2tleRgBIAEoBRINCgV2YWx1ZRgCIAEoBToCOAEaNAoSTWFwSW50NjRJbnQ2NEVudHJ5EgsKA2tleRgBIAEoAxINCgV2YWx1ZRgCIAEoAzoCOAEaNgoUTWFwVWludDMyVWludDMyRW50cnkSCwoDa2V5GAEgASgNEg0KBXZhbHVlGAIgASgNOgI4ARo2ChRNYXBVaW50NjRVaW50NjRFbnRyeRILCgNrZXkYASABKAQSDQoFdmFsdWUYAiABKAQ6AjgBGjYKFE1hcFNpbnQzMlNpbnQzMkVudHJ5EgsKA2tleRgBIAEoERINCgV2YWx1ZRgCIAEoEToCOAEaNgoUTWFwU2ludDY0U2ludDY0RW50cnkSCwoDa2V5GAEgASgSEg0KBXZhbHVlGAIgASgSOgI4ARo4ChZNYXBGaXhlZDMyRml4ZWQzMkVudHJ5EgsKA2tleRgBIAEoBxINCgV2YWx1ZRgCIAEoBzoCOAEaOAoWTWFwRml4ZWQ2NEZpeGVkNjRFbnRyeRILCgNrZXkYASABKAYSDQoFdmFsdWUYAiABKAY6AjgBGjoKGE1hcFNmaXhlZDMyU2ZpeGVkMzJFbnRyeRILCgNrZXkYASABKA8SDQoFdmFsdWUYAiABKA86AjgBGjoKGE1hcFNmaXhlZDY0U2ZpeGVkNjRFbnRyeRILCgNrZXkYASABKBASDQoFdmFsdWUYAiABKBA6AjgBGjQKEk1hcEludDMyRmxvYXRFbnRyeRILCgNrZXkYASABKAUSDQoFdmFsdWUYAiABKAI6AjgBGjUKE01hcEludDMyRG91YmxlRW50cnkSCwoDa2V5GAEgASgFEg0KBXZhbHVlGAIgASgBOgI4ARoyChBNYXBCb29sQm9vbEVudHJ5EgsKA2tleRgBIAEoCBINCgV2YWx1ZRgCIAEoCDoCOAEaNgoUTWFwU3RyaW5nU3RyaW5nRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJOgI4ARo1ChNNYXBTdHJpbmdCeXRlc0VudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoDDoCOAEahwEKG01hcFN0cmluZ05lc3RlZE1lc3NhZ2VFbnRyeRILCgNrZXkYASABKAkSVwoFdmFsdWUYAiABKAsySC5wcm90b2J1Zl90ZXN0X21lc3NhZ2VzLmVkaXRpb25zLnByb3RvMy5UZXN0QWxsVHlwZXNQcm90bzMuTmVzdGVkTWVzc2FnZToCOAEadgocTWFwU3RyaW5nRm9yZWlnbk1lc3NhZ2VFbnRyeRILCgNrZXkYASABKAkSRQoFdmFsdWUYAiABKAsyNi5wcm90b2J1Zl90ZXN0X21lc3NhZ2VzLmVkaXRpb25zLnByb3RvMy5Gb3JlaWduTWVzc2FnZToCOAEagQEKGE1hcFN0cmluZ05lc3RlZEVudW1FbnRyeRILCgNrZXkYASABKAkSVAoFdmFsdWUYAiABKA4yRS5wcm90b2J1Zl90ZXN0X21lc3NhZ2VzLmVkaXRpb25zLnByb3RvMy5UZXN0QWxsVHlwZXNQcm90bzMuTmVzdGVkRW51bToCOAEacAoZTWFwU3RyaW5nRm9yZWlnbkVudW1FbnRyeRILCgNrZXkYASABKAkSQgoFdmFsdWUYAiABKA4yMy5wcm90b2J1Zl90ZXN0X21lc3NhZ2VzLmVkaXRpb25zLnByb3RvMy5Gb3JlaWduRW51bToCOAEiOQoKTmVzdGVkRW51bRIHCgNGT08QABIHCgNCQVIQARIHCgNCQVoQAhIQCgNORUcQ////////////ASJZCgtBbGlhc2VkRW51bRINCglBTElBU19GT08QABINCglBTElBU19CQVIQARINCglBTElBU19CQVoQAhIHCgNNT08QAhIHCgNtb28QAhIHCgNiQXoQAhoCEAFCDQoLb25lb2ZfZmllbGRKBgj1AxD/AyIbCg5Gb3JlaWduTWVzc2FnZRIJCgFjGAEgASgFIhYKFE51bGxIeXBvdGhlc2lzUHJvdG8zIi8KDkVudW1Pbmx5UHJvdG8zIh0KBEJvb2wSCgoGa0ZhbHNlEAASCQoFa1RydWUQASpACgtGb3JlaWduRW51bRIPCgtGT1JFSUdOX0ZPTxAAEg8KC0ZPUkVJR05fQkFSEAESDwoLRk9SRUlHTl9CQVoQAkJOCjFjb20uZ29vZ2xlLnByb3RvYnVmX3Rlc3RfbWVzc2FnZXMuZWRpdGlvbnMucHJvdG8zSAH4AQGiAg5FZGl0aW9uc1Byb3RvM5IDAggCYghlZGl0aW9uc3DoBw", [file_google_protobuf_any, file_google_protobuf_duration, file_google_protobuf_field_mask, file_google_protobuf_struct, file_google_protobuf_timestamp, file_google_protobuf_wrappers]);

/**
 * Describes the message protobuf_test_messages.editions.proto3.TestAllTypesProto3.
 * Use `create(TestAllTypesProto3Schema)` to create a new message.
 */
export const TestAllTypesProto3Schema = /*@__PURE__*/
  messageDesc(file_editions_golden_test_messages_proto3_editions, 0);

/**
 * Describes the message protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedMessage.
 * Use `create(TestAllTypesProto3_NestedMessageSchema)` to create a new message.
 */
export const TestAllTypesProto3_NestedMessageSchema = /*@__PURE__*/
  messageDesc(file_editions_golden_test_messages_proto3_editions, 0, 0);

/**
 * Describes the enum protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedEnum.
 */
export const TestAllTypesProto3_NestedEnumSchema = /*@__PURE__*/
  enumDesc(file_editions_golden_test_messages_proto3_editions, 0, 0);

/**
 * @generated from enum protobuf_test_messages.editions.proto3.TestAllTypesProto3.NestedEnum
 */
export const TestAllTypesProto3_NestedEnum = /*@__PURE__*/
  tsEnum(TestAllTypesProto3_NestedEnumSchema);

/**
 * Describes the enum protobuf_test_messages.editions.proto3.TestAllTypesProto3.AliasedEnum.
 */
export const TestAllTypesProto3_AliasedEnumSchema = /*@__PURE__*/
  enumDesc(file_editions_golden_test_messages_proto3_editions, 0, 1);

/**
 * @generated from enum protobuf_test_messages.editions.proto3.TestAllTypesProto3.AliasedEnum
 */
export const TestAllTypesProto3_AliasedEnum = /*@__PURE__*/
  tsEnum(TestAllTypesProto3_AliasedEnumSchema);

/**
 * Describes the message protobuf_test_messages.editions.proto3.ForeignMessage.
 * Use `create(ForeignMessageSchema)` to create a new message.
 */
export const ForeignMessageSchema = /*@__PURE__*/
  messageDesc(file_editions_golden_test_messages_proto3_editions, 1);

/**
 * Describes the message protobuf_test_messages.editions.proto3.NullHypothesisProto3.
 * Use `create(NullHypothesisProto3Schema)` to create a new message.
 */
export const NullHypothesisProto3Schema = /*@__PURE__*/
  messageDesc(file_editions_golden_test_messages_proto3_editions, 2);

/**
 * Describes the message protobuf_test_messages.editions.proto3.EnumOnlyProto3.
 * Use `create(EnumOnlyProto3Schema)` to create a new message.
 */
export const EnumOnlyProto3Schema = /*@__PURE__*/
  messageDesc(file_editions_golden_test_messages_proto3_editions, 3);

/**
 * Describes the enum protobuf_test_messages.editions.proto3.EnumOnlyProto3.Bool.
 */
export const EnumOnlyProto3_BoolSchema = /*@__PURE__*/
  enumDesc(file_editions_golden_test_messages_proto3_editions, 3, 0);

/**
 * @generated from enum protobuf_test_messages.editions.proto3.EnumOnlyProto3.Bool
 */
export const EnumOnlyProto3_Bool = /*@__PURE__*/
  tsEnum(EnumOnlyProto3_BoolSchema);

/**
 * Describes the enum protobuf_test_messages.editions.proto3.ForeignEnum.
 */
export const ForeignEnumSchema = /*@__PURE__*/
  enumDesc(file_editions_golden_test_messages_proto3_editions, 0);

/**
 * @generated from enum protobuf_test_messages.editions.proto3.ForeignEnum
 */
export const ForeignEnum = /*@__PURE__*/
  tsEnum(ForeignEnumSchema);

