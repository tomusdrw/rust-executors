# Rust-executors
## A set of utilities to abstract tasks execution.

Tasks can be executed in the same thread, multiple threads (pool) or you can
control when and in which thread the tasks are consumed.

[Docs](https://tomusdrw.github.io/rust-executors)

## Examples
```rust
// given
let e = Executors::same_thread();
//let e = Executors::thread_pool(1);

// when
let future: Future<usize, ()> = e.execute(Executors::task(|| Ok(4)));

// then
assert_eq!(4, future.await().unwrap());
```

```rust
// Manual executor (use `consume`)
let e = Executors::test_executor();

let future = e.execute(Executors::task(|| Ok(4)));
let future2 = e.execute(Executors::task(|| Ok(5)));
let future3 = e.execute(Executors::task(|| Err(6)));
assert_eq!(3, e.queued());
e.consume(3);

assert_eq!(4, future.await().unwrap());
assert_eq!(5, future2.await().unwrap());
assert_eq!(6, future3.await().unwrap_err().unwrap());
```

