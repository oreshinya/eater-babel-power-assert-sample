import assert from 'power-assert';
import { test } from 'eater/runner';

test('1 equals 2', (done) => {
  assert(1===2);
  done();
});

test('unko equals chinko', (done) => {
  assert("unko"==="chinko");
  done();
});

test('test is success', (done) => {
  assert(true);
  done();
});
