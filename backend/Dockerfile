FROM node:22-bookworm-slim

RUN apt-get update \
    && apt-get install -y --no-install-recommends python3 python3-pip \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY disease_model/requirements.txt disease_model/requirements.txt
RUN pip3 install --no-cache-dir --break-system-packages -r disease_model/requirements.txt

COPY . .
RUN chmod +x start_all.sh

ENV NODE_ENV=production
ENV PYTHONUNBUFFERED=1
ENV PIP_NO_CACHE_DIR=1

CMD ["bash", "start_all.sh"]
