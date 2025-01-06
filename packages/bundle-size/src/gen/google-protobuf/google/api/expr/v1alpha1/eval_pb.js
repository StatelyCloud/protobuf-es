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

// source: google/api/expr/v1alpha1/eval.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_api_expr_v1alpha1_value_pb = require('../../../../google/api/expr/v1alpha1/value_pb.js');
goog.object.extend(proto, google_api_expr_v1alpha1_value_pb);
var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js');
goog.object.extend(proto, google_rpc_status_pb);
goog.exportSymbol('proto.google.api.expr.v1alpha1.ErrorSet', null, global);
goog.exportSymbol('proto.google.api.expr.v1alpha1.EvalState', null, global);
goog.exportSymbol('proto.google.api.expr.v1alpha1.EvalState.Result', null, global);
goog.exportSymbol('proto.google.api.expr.v1alpha1.ExprValue', null, global);
goog.exportSymbol('proto.google.api.expr.v1alpha1.ExprValue.KindCase', null, global);
goog.exportSymbol('proto.google.api.expr.v1alpha1.UnknownSet', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.expr.v1alpha1.EvalState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.expr.v1alpha1.EvalState.repeatedFields_, null);
};
goog.inherits(proto.google.api.expr.v1alpha1.EvalState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.expr.v1alpha1.EvalState.displayName = 'proto.google.api.expr.v1alpha1.EvalState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.expr.v1alpha1.EvalState.Result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.api.expr.v1alpha1.EvalState.Result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.expr.v1alpha1.EvalState.Result.displayName = 'proto.google.api.expr.v1alpha1.EvalState.Result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.expr.v1alpha1.ExprValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.api.expr.v1alpha1.ExprValue.oneofGroups_);
};
goog.inherits(proto.google.api.expr.v1alpha1.ExprValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.expr.v1alpha1.ExprValue.displayName = 'proto.google.api.expr.v1alpha1.ExprValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.expr.v1alpha1.ErrorSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.expr.v1alpha1.ErrorSet.repeatedFields_, null);
};
goog.inherits(proto.google.api.expr.v1alpha1.ErrorSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.expr.v1alpha1.ErrorSet.displayName = 'proto.google.api.expr.v1alpha1.ErrorSet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.expr.v1alpha1.UnknownSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.expr.v1alpha1.UnknownSet.repeatedFields_, null);
};
goog.inherits(proto.google.api.expr.v1alpha1.UnknownSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.expr.v1alpha1.UnknownSet.displayName = 'proto.google.api.expr.v1alpha1.UnknownSet';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.api.expr.v1alpha1.EvalState.repeatedFields_ = [1,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.api.expr.v1alpha1.EvalState.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.expr.v1alpha1.EvalState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.expr.v1alpha1.EvalState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.expr.v1alpha1.EvalState.toObject = function(includeInstance, msg) {
  var f, obj = {
valuesList: jspb.Message.toObjectList(msg.getValuesList(),
    proto.google.api.expr.v1alpha1.ExprValue.toObject, includeInstance),
resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.google.api.expr.v1alpha1.EvalState.Result.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.expr.v1alpha1.EvalState}
 */
proto.google.api.expr.v1alpha1.EvalState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.expr.v1alpha1.EvalState;
  return proto.google.api.expr.v1alpha1.EvalState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.expr.v1alpha1.EvalState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.expr.v1alpha1.EvalState}
 */
proto.google.api.expr.v1alpha1.EvalState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.api.expr.v1alpha1.ExprValue;
      reader.readMessage(value,proto.google.api.expr.v1alpha1.ExprValue.deserializeBinaryFromReader);
      msg.addValues(value);
      break;
    case 3:
      var value = new proto.google.api.expr.v1alpha1.EvalState.Result;
      reader.readMessage(value,proto.google.api.expr.v1alpha1.EvalState.Result.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.expr.v1alpha1.EvalState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.expr.v1alpha1.EvalState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.expr.v1alpha1.EvalState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.expr.v1alpha1.EvalState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.api.expr.v1alpha1.ExprValue.serializeBinaryToWriter
    );
  }
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.google.api.expr.v1alpha1.EvalState.Result.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.api.expr.v1alpha1.EvalState.Result.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.expr.v1alpha1.EvalState.Result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.expr.v1alpha1.EvalState.Result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.expr.v1alpha1.EvalState.Result.toObject = function(includeInstance, msg) {
  var f, obj = {
expr: jspb.Message.getFieldWithDefault(msg, 1, 0),
value: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.expr.v1alpha1.EvalState.Result}
 */
proto.google.api.expr.v1alpha1.EvalState.Result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.expr.v1alpha1.EvalState.Result;
  return proto.google.api.expr.v1alpha1.EvalState.Result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.expr.v1alpha1.EvalState.Result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.expr.v1alpha1.EvalState.Result}
 */
proto.google.api.expr.v1alpha1.EvalState.Result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpr(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.expr.v1alpha1.EvalState.Result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.expr.v1alpha1.EvalState.Result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.expr.v1alpha1.EvalState.Result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.expr.v1alpha1.EvalState.Result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExpr();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 expr = 1;
 * @return {number}
 */
proto.google.api.expr.v1alpha1.EvalState.Result.prototype.getExpr = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.api.expr.v1alpha1.EvalState.Result} returns this
 */
proto.google.api.expr.v1alpha1.EvalState.Result.prototype.setExpr = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 value = 2;
 * @return {number}
 */
proto.google.api.expr.v1alpha1.EvalState.Result.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.api.expr.v1alpha1.EvalState.Result} returns this
 */
proto.google.api.expr.v1alpha1.EvalState.Result.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated ExprValue values = 1;
 * @return {!Array<!proto.google.api.expr.v1alpha1.ExprValue>}
 */
proto.google.api.expr.v1alpha1.EvalState.prototype.getValuesList = function() {
  return /** @type{!Array<!proto.google.api.expr.v1alpha1.ExprValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.api.expr.v1alpha1.ExprValue, 1));
};


/**
 * @param {!Array<!proto.google.api.expr.v1alpha1.ExprValue>} value
 * @return {!proto.google.api.expr.v1alpha1.EvalState} returns this
*/
proto.google.api.expr.v1alpha1.EvalState.prototype.setValuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.api.expr.v1alpha1.ExprValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.expr.v1alpha1.ExprValue}
 */
proto.google.api.expr.v1alpha1.EvalState.prototype.addValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.api.expr.v1alpha1.ExprValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.api.expr.v1alpha1.EvalState} returns this
 */
proto.google.api.expr.v1alpha1.EvalState.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};


/**
 * repeated Result results = 3;
 * @return {!Array<!proto.google.api.expr.v1alpha1.EvalState.Result>}
 */
proto.google.api.expr.v1alpha1.EvalState.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.google.api.expr.v1alpha1.EvalState.Result>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.api.expr.v1alpha1.EvalState.Result, 3));
};


/**
 * @param {!Array<!proto.google.api.expr.v1alpha1.EvalState.Result>} value
 * @return {!proto.google.api.expr.v1alpha1.EvalState} returns this
*/
proto.google.api.expr.v1alpha1.EvalState.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.api.expr.v1alpha1.EvalState.Result=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.expr.v1alpha1.EvalState.Result}
 */
proto.google.api.expr.v1alpha1.EvalState.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.api.expr.v1alpha1.EvalState.Result, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.api.expr.v1alpha1.EvalState} returns this
 */
proto.google.api.expr.v1alpha1.EvalState.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.api.expr.v1alpha1.ExprValue.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.google.api.expr.v1alpha1.ExprValue.KindCase = {
  KIND_NOT_SET: 0,
  VALUE: 1,
  ERROR: 2,
  UNKNOWN: 3
};

/**
 * @return {proto.google.api.expr.v1alpha1.ExprValue.KindCase}
 */
proto.google.api.expr.v1alpha1.ExprValue.prototype.getKindCase = function() {
  return /** @type {proto.google.api.expr.v1alpha1.ExprValue.KindCase} */(jspb.Message.computeOneofCase(this, proto.google.api.expr.v1alpha1.ExprValue.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.api.expr.v1alpha1.ExprValue.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.expr.v1alpha1.ExprValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.expr.v1alpha1.ExprValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.expr.v1alpha1.ExprValue.toObject = function(includeInstance, msg) {
  var f, obj = {
value: (f = msg.getValue()) && google_api_expr_v1alpha1_value_pb.Value.toObject(includeInstance, f),
error: (f = msg.getError()) && proto.google.api.expr.v1alpha1.ErrorSet.toObject(includeInstance, f),
unknown: (f = msg.getUnknown()) && proto.google.api.expr.v1alpha1.UnknownSet.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.expr.v1alpha1.ExprValue}
 */
proto.google.api.expr.v1alpha1.ExprValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.expr.v1alpha1.ExprValue;
  return proto.google.api.expr.v1alpha1.ExprValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.expr.v1alpha1.ExprValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.expr.v1alpha1.ExprValue}
 */
proto.google.api.expr.v1alpha1.ExprValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_api_expr_v1alpha1_value_pb.Value;
      reader.readMessage(value,google_api_expr_v1alpha1_value_pb.Value.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    case 2:
      var value = new proto.google.api.expr.v1alpha1.ErrorSet;
      reader.readMessage(value,proto.google.api.expr.v1alpha1.ErrorSet.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 3:
      var value = new proto.google.api.expr.v1alpha1.UnknownSet;
      reader.readMessage(value,proto.google.api.expr.v1alpha1.UnknownSet.deserializeBinaryFromReader);
      msg.setUnknown(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.expr.v1alpha1.ExprValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.expr.v1alpha1.ExprValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.expr.v1alpha1.ExprValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.expr.v1alpha1.ExprValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_api_expr_v1alpha1_value_pb.Value.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.api.expr.v1alpha1.ErrorSet.serializeBinaryToWriter
    );
  }
  f = message.getUnknown();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.api.expr.v1alpha1.UnknownSet.serializeBinaryToWriter
    );
  }
};


/**
 * optional Value value = 1;
 * @return {?proto.google.api.expr.v1alpha1.Value}
 */
proto.google.api.expr.v1alpha1.ExprValue.prototype.getValue = function() {
  return /** @type{?proto.google.api.expr.v1alpha1.Value} */ (
    jspb.Message.getWrapperField(this, google_api_expr_v1alpha1_value_pb.Value, 1));
};


/**
 * @param {?proto.google.api.expr.v1alpha1.Value|undefined} value
 * @return {!proto.google.api.expr.v1alpha1.ExprValue} returns this
*/
proto.google.api.expr.v1alpha1.ExprValue.prototype.setValue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.google.api.expr.v1alpha1.ExprValue.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.api.expr.v1alpha1.ExprValue} returns this
 */
proto.google.api.expr.v1alpha1.ExprValue.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.api.expr.v1alpha1.ExprValue.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ErrorSet error = 2;
 * @return {?proto.google.api.expr.v1alpha1.ErrorSet}
 */
proto.google.api.expr.v1alpha1.ExprValue.prototype.getError = function() {
  return /** @type{?proto.google.api.expr.v1alpha1.ErrorSet} */ (
    jspb.Message.getWrapperField(this, proto.google.api.expr.v1alpha1.ErrorSet, 2));
};


/**
 * @param {?proto.google.api.expr.v1alpha1.ErrorSet|undefined} value
 * @return {!proto.google.api.expr.v1alpha1.ExprValue} returns this
*/
proto.google.api.expr.v1alpha1.ExprValue.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.google.api.expr.v1alpha1.ExprValue.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.api.expr.v1alpha1.ExprValue} returns this
 */
proto.google.api.expr.v1alpha1.ExprValue.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.api.expr.v1alpha1.ExprValue.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional UnknownSet unknown = 3;
 * @return {?proto.google.api.expr.v1alpha1.UnknownSet}
 */
proto.google.api.expr.v1alpha1.ExprValue.prototype.getUnknown = function() {
  return /** @type{?proto.google.api.expr.v1alpha1.UnknownSet} */ (
    jspb.Message.getWrapperField(this, proto.google.api.expr.v1alpha1.UnknownSet, 3));
};


/**
 * @param {?proto.google.api.expr.v1alpha1.UnknownSet|undefined} value
 * @return {!proto.google.api.expr.v1alpha1.ExprValue} returns this
*/
proto.google.api.expr.v1alpha1.ExprValue.prototype.setUnknown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.google.api.expr.v1alpha1.ExprValue.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.api.expr.v1alpha1.ExprValue} returns this
 */
proto.google.api.expr.v1alpha1.ExprValue.prototype.clearUnknown = function() {
  return this.setUnknown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.api.expr.v1alpha1.ExprValue.prototype.hasUnknown = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.api.expr.v1alpha1.ErrorSet.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.api.expr.v1alpha1.ErrorSet.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.expr.v1alpha1.ErrorSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.expr.v1alpha1.ErrorSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.expr.v1alpha1.ErrorSet.toObject = function(includeInstance, msg) {
  var f, obj = {
errorsList: jspb.Message.toObjectList(msg.getErrorsList(),
    google_rpc_status_pb.Status.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.expr.v1alpha1.ErrorSet}
 */
proto.google.api.expr.v1alpha1.ErrorSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.expr.v1alpha1.ErrorSet;
  return proto.google.api.expr.v1alpha1.ErrorSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.expr.v1alpha1.ErrorSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.expr.v1alpha1.ErrorSet}
 */
proto.google.api.expr.v1alpha1.ErrorSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_rpc_status_pb.Status;
      reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader);
      msg.addErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.expr.v1alpha1.ErrorSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.expr.v1alpha1.ErrorSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.expr.v1alpha1.ErrorSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.expr.v1alpha1.ErrorSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_rpc_status_pb.Status.serializeBinaryToWriter
    );
  }
};


/**
 * repeated google.rpc.Status errors = 1;
 * @return {!Array<!proto.google.rpc.Status>}
 */
proto.google.api.expr.v1alpha1.ErrorSet.prototype.getErrorsList = function() {
  return /** @type{!Array<!proto.google.rpc.Status>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_rpc_status_pb.Status, 1));
};


/**
 * @param {!Array<!proto.google.rpc.Status>} value
 * @return {!proto.google.api.expr.v1alpha1.ErrorSet} returns this
*/
proto.google.api.expr.v1alpha1.ErrorSet.prototype.setErrorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.rpc.Status=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.rpc.Status}
 */
proto.google.api.expr.v1alpha1.ErrorSet.prototype.addErrors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.rpc.Status, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.api.expr.v1alpha1.ErrorSet} returns this
 */
proto.google.api.expr.v1alpha1.ErrorSet.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.api.expr.v1alpha1.UnknownSet.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.api.expr.v1alpha1.UnknownSet.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.expr.v1alpha1.UnknownSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.expr.v1alpha1.UnknownSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.expr.v1alpha1.UnknownSet.toObject = function(includeInstance, msg) {
  var f, obj = {
exprsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.expr.v1alpha1.UnknownSet}
 */
proto.google.api.expr.v1alpha1.UnknownSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.expr.v1alpha1.UnknownSet;
  return proto.google.api.expr.v1alpha1.UnknownSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.expr.v1alpha1.UnknownSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.expr.v1alpha1.UnknownSet}
 */
proto.google.api.expr.v1alpha1.UnknownSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addExprs(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.expr.v1alpha1.UnknownSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.expr.v1alpha1.UnknownSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.expr.v1alpha1.UnknownSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.expr.v1alpha1.UnknownSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExprsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      1,
      f
    );
  }
};


/**
 * repeated int64 exprs = 1;
 * @return {!Array<number>}
 */
proto.google.api.expr.v1alpha1.UnknownSet.prototype.getExprsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.google.api.expr.v1alpha1.UnknownSet} returns this
 */
proto.google.api.expr.v1alpha1.UnknownSet.prototype.setExprsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.google.api.expr.v1alpha1.UnknownSet} returns this
 */
proto.google.api.expr.v1alpha1.UnknownSet.prototype.addExprs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.api.expr.v1alpha1.UnknownSet} returns this
 */
proto.google.api.expr.v1alpha1.UnknownSet.prototype.clearExprsList = function() {
  return this.setExprsList([]);
};


goog.object.extend(exports, proto.google.api.expr.v1alpha1);
