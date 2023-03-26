---
title: Athena.controllers.admin
outline: [1,3]
order: 0
---

# {{ $frontmatter.title }}


## Functions

### banPlayer

▸ **banPlayer**(`player`, `reason`): `Promise`<`boolean`\>

Used to ban a player from the server.

**`Example`**

```ts
Athena.controllers.admin.banPlayer(player, 'was a bad person :(')
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `Player` |
| `reason` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[server/controllers/admin.ts:21](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/controllers/admin.ts#L21)

___

### override

▸ **override**(`functionName`, `callback`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"banPlayer"`` |
| `callback` | (`player`: `Player`, `reason`: `string`) => `Promise`<`boolean`\> |

#### Returns

`any`

#### Defined in

[server/controllers/admin.ts:78](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/controllers/admin.ts#L78)

▸ **override**(`functionName`, `callback`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"unbanPlayerByDiscord"`` |
| `callback` | (`discord`: `string`) => `Promise`<`boolean`\> |

#### Returns

`any`

#### Defined in

[server/controllers/admin.ts:79](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/controllers/admin.ts#L79)

___

### unbanPlayerByDiscord

▸ **unbanPlayerByDiscord**(`discord`): `Promise`<`boolean`\>

Used to unban a player from the server.

**`Example`**

```ts
Athena.controllers.admin.unbanPlayerByDiscord('202685967935471617');
```

**`Memberof`**

AdminController

#### Parameters

| Name | Type |
| :------ | :------ |
| `discord` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[server/controllers/admin.ts:52](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/controllers/admin.ts#L52)