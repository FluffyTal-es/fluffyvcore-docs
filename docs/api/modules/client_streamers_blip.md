---
title: AthenaClient.streamers.blip
outline: [1,3]
order: 0
---

# {{ $frontmatter.title }}


## Functions

### append

▸ **append**(`blipData`): `alt.PointBlip`

Adds a blip manually to the blip controller.

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `blipData` | `Blip` |

#### Returns

`alt.PointBlip`

#### Defined in

[client/streamers/blip.ts:46](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/streamers/blip.ts#L46)

___

### remove

▸ **remove**(`uid`): `void`

Remove a blip from the list of added blips.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uid` | `string` | The unique identifier of the blip. |

#### Returns

`void`

The blip object.

#### Defined in

[client/streamers/blip.ts:68](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/client/streamers/blip.ts#L68)