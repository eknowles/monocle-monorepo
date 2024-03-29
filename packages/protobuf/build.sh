#!/bin/bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

# Path to this plugin, Note this must be an absolute path on Windows (see #15)
PROTOC_GEN_TS_PATH="${SCRIPT_DIR}/../../node_modules/.bin/protoc-gen-ts_proto"

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="./generated"

rm -rf $OUT_DIR

mkdir $OUT_DIR

protoc \
    --plugin="${PROTOC_GEN_TS_PATH}" \
    --ts_proto_out="${OUT_DIR}" \
    --ts_proto_opt=outputClientImpl=grpc-web,addGrpcMetadata=true,returnObservable=true,esModuleInterop=true,forceLong=string,env=browser \
    ./monocle.proto --experimental_allow_proto3_optional
