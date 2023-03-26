---
title: Athena.utility.restrict
outline: [1,3]
order: 0
---

# {{ $frontmatter.title }}


## Interfaces

- [Restrictions](../interfaces/server_utility_restrict_Restrictions.md)

## Functions

### create

▸ **create**<`T`\>(`handler`, `restrictions`): `T`

Wraps a function and creates restrictions on that function.

Always call the restricted function to invoke an automatic check against given permission strategy.

First argument of the handler must always be a player.

```ts
function doPoliceWork(player: alt.Player) {
  // Restricted to characters who have 'police' permission
  // OR
  // Restricted to accounts who have 'admin' permission
}

const doPoliceWorkRestricted = Athena.utility.restrict.create(doPoliceWork, {
    strategy: 'hasOne',
    permissions: { account: ['admin'], character: ['police'] },
    notify: 'You are not part of the police force.',
});

alt.onClient('something-from-a-client', doPoliceWorkRestricted);
```

**`Export`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | (`player`: `Player`, ...`args`: `any`[]) => `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | `T` |
| `restrictions` | [`Restrictions`](../interfaces/server_utility_restrict_Restrictions.md) |

#### Returns

`T`

#### Defined in

[server/utility/restrict.ts:109](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/utility/restrict.ts#L109)

___

### override

▸ **override**(`functionName`, `callback`): `any`

Used to override restrict utility funcs

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"create"`` |
| `callback` | <T\>(`handler`: `T`, `restrictions`: [`Restrictions`](../interfaces/server_utility_restrict_Restrictions.md)) => `T` |

#### Returns

`any`

#### Defined in

[server/utility/restrict.ts:139](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/utility/restrict.ts#L139)