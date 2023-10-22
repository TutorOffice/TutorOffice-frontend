declare type AppDispatch = ReturnType<
  typeof import('./index').createStore
>['dispatch']
declare type RootState = ReturnType<
  ReturnType<typeof import('./index').createStore>['getState']
>
