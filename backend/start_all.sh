#!/usr/bin/env bash
set -e

cd "$(dirname "$0")"

PYTHON_BIN="${PYTHON_BIN:-python3}"
if [[ -f "../.venv/Scripts/python.exe" ]]; then
  PYTHON_BIN="../.venv/Scripts/python.exe"
fi

# Run Flask privately inside the same service.
export MODEL_PORT="${MODEL_PORT:-5000}"
"$PYTHON_BIN" disease_model/model_server.py &
MODEL_PID=$!

for attempt in {1..30}; do
  if ! kill -0 "$MODEL_PID" 2>/dev/null; then
    echo "Model service stopped before becoming healthy."
    exit 1
  fi

  if "$PYTHON_BIN" -c "import urllib.request; urllib.request.urlopen('http://127.0.0.1:${MODEL_PORT}/health', timeout=1).read()" >/dev/null 2>&1; then
    echo "Model service is healthy."
    break
  fi

  if [[ "$attempt" == "30" ]]; then
    echo "Model service did not become healthy in time."
    exit 1
  fi
  sleep 1
done

cleanup() {
  kill "$MODEL_PID" 2>/dev/null || true
}
trap cleanup EXIT INT TERM

# Express owns Render's public PORT and proxies prediction requests to Flask.
exec npm start
