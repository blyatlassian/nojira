#!/bin/bash
echo "📦 Running postCreateCommand..."

# Ensure Yarn is set up
# corepack enable
yarn install --immutable

# Wait for Dgraph to be ready
echo "⏳ Waiting for Dgraph to be ready..."
until curl -s http://dgraph:8080/health | grep -q "\"status\":\"healthy\""; do
  sleep 1
done

# Load the schema into Dgraph
echo "🔄 Loading schema into Dgraph..."
curl -X POST dgraph:8080/admin/schema --data-binary '@/workspace/dgraph/schema.graphql'

# Watch for changes in the schema file and reload it
# echo "👀 Watching for changes in schema.graphql..."
# while true; do
#   inotifywait -e modify /workspace/dgraph/schema.graphql
#   echo "🔄 Reloading schema into Dgraph..."
#   curl -X POST -H "Content-Type: application/graphql" -d @/workspace/dgraph/schema.graphql http://dgraph:8080/admin/schema
# done

echo "✅ DevContainer setup complete!"