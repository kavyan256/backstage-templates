# ${{ values.serviceName }}

${{ values.description }}

## Tech Stack

- **Language:** Node.js
- **Framework:** Express

## Running Locally

```bash
npm install
npm run dev
```

Service runs on port `${{ values.port }}`.

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/` | Service info |
| GET | `/health` | Health check |