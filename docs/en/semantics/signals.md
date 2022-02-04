In ViKiD, every `parameter` is a `signal`.

Intuitively, a `signal` is a variable that has a `value` and `timestamp`.
The variable might not be `ready` yet; then it is `pending` aka `uninitialized`.
E.g. the result of an exam is not known before it is graded; the result is `pending`.

Mathematically, a `signal` is a sequence of `(Value,Timestamp)` pairs, written as `V @ T`.
The first pair is always `pending = ⊥ @ 0`, where `⊥` means `undefined`.
The timestamp of all other pairs is monotonically increasing.

```pseudo
signal = [ ⊥ @ 0, V1 @ T1, V2 @ T2, ... ] where ∀ i > 0: Ti > 0 and Ti > T(i-1)
```

Sampling a signal `at` a timestamp `Ts` returns the pair `Vi @ Ti` closest to `Ts`, so no other `Vj @ Tj` exists in the signal between `Ti` and `Ts`:

```pseudo
signal.at(Ts) = Vi @ Ti where ¬ Ǝ Vj @ Tj ∈ signal: Ti ≤ Tj ≤ Ts
```
