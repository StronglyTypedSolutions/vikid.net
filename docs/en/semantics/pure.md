Every pure reactive operator has the following behavior:

```pseudo
input.pure(operator, value).at(Ts) = V1.operator(V2) @ T1.max(T2) if ready else pending
                                     where V1 @ T1 = input.at(Ts)
                                           V2 @ T2 = value.at(Ts)
                                           ready    = T1 > 0 and T2 > 0
                                           pending  = ⊥ @ 0
```

See also: [pure function](https://en.wikipedia.org/wiki/Pure_function)

