---
title: AthenaClient.rmlui.sprites
outline: [1,3]
order: 0
---

# {{ $frontmatter.title }}


## Interfaces

- [SpriteInfo](../interfaces/client_rmlui_sprites_SpriteInfo.md)

## Functions

### create

▸ **create**(`sprite`): `void`

Create a sprite. Create a JavaScript object to start building the sprite.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sprite` | [`SpriteInfo`](../interfaces/client_rmlui_sprites_SpriteInfo.md) |

#### Returns

`void`

#### Defined in

[client/rmlui/sprites/index.ts:222](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/rmlui/sprites/index.ts#L222)

___

### remove

▸ **remove**(`uid`): `void`

Remove a sprite by `uid` and stop it from updating entirely.

#### Parameters

| Name | Type |
| :------ | :------ |
| `uid` | `string` |

#### Returns

`void`

#### Defined in

[client/rmlui/sprites/index.ts:246](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/rmlui/sprites/index.ts#L246)

___

### update

▸ **update**(`uid`, `sprite`): `void`

Updates the sprite data.
Use this to update position of the sprite dynamically.
Requires the `uid` specified to update it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `uid` | `string` |
| `sprite` | [`Partial`](server_controllers_textlabel_Internal.md#Partial)<[`SpriteInfo`](../interfaces/client_rmlui_sprites_SpriteInfo.md)\> |

#### Returns

`void`

#### Defined in

[client/rmlui/sprites/index.ts:263](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/rmlui/sprites/index.ts#L263)