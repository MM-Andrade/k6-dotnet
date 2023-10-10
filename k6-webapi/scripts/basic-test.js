import http from 'k6/http';
import { sleep } from 'k6';

export default function() {
    http.get('https://localhost:7182/api/string/reverse?input=emosewa%C2%A0si%C2%A0ezamedoc');
    sleep(1);
}