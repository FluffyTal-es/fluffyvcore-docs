---
title: AthenaClient.rmlui.menu3d
outline: [1,3]
order: 0
---

# {{ $frontmatter.title }}


## Functions

### close

▸ **close**(): `Promise`<`void`\>

Call this function to close the menu.
Make sure to wait for it to close before opening a new menu.

#### Returns

`Promise`<`void`\>

#### Defined in

[client/rmlui/menu3d/index.ts:192](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/rmlui/menu3d/index.ts#L192)

___

### create

▸ **create**(`pos`, `options`, `maxDistance?`): `void`

Create an in-world 3D menu with maximum options.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `pos` | `IVector3` | `undefined` |
| `options` | [`OptionFor3DMenu`](../interfaces/client_rmlui_menu3d_menu3DInterfaces_OptionFor3DMenu.md)[] | `undefined` |
| `maxDistance` | `number` | `8` |

#### Returns

`void`

#### Defined in

[client/rmlui/menu3d/index.ts:166](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/rmlui/menu3d/index.ts#L166)