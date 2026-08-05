import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 50 },  // Ramp up to 50 virtual users
    { duration: '1m', target: 100 },  // Stay at 100 VUs
    { duration: '30s', target: 0 },   // Ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<200'], // 95% of requests must complete below 200ms
    http_req_failed: ['rate<0.01'],   // Error rate below 1%
  },
};

export default function () {
  const res = http.get('http://localhost:8000/api/v1/status');
  check(res, {
    'status is 200': (r) => r.status === 200,
    'version is v1': (r) => r.json().version === 'v1',
  });
  sleep(1);
}
