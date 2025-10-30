#!/bin/bash
GO_PATH=$(go env GOPATH)
GO_BIN=$GO_PATH/bin/air

if [ ! -f $GO_BIN ]; then
    echo "❌ Air not found. Please install it first:"
    echo "   go install github.com/air-verse/air@latest"
    exit 1
fi

echo "🚀 Starting Air..."
$GO_BIN
