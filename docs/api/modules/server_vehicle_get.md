---
title: Athena.vehicle.get
outline: [1,3]
order: 0
---

# {{ $frontmatter.title }}


## Functions

### ownedVehicles

▸ **ownedVehicles**(): `alt.Vehicle`[]

Get all owned vehicles.

**`Example`**

```ts
const vehicles = Athena.vehicle.get.ownedVehicles();
```

**`Export`**

#### Returns

`alt.Vehicle`[]

An array of owned vehicles.

#### Defined in

[server/vehicle/get.ts:32](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/vehicle/get.ts#L32)

___

### playerOwnedVehicles

▸ **playerOwnedVehicles**(`player`): `any`

Takes a player instance, or `_id` and returns all spawned & owned vehicles

**`Example`**

```ts
function something(player: alt.Player) {
    const vehicles = Athena.vehicle.get.playerOwnedVehicles(player);
}
```

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `any` |

#### Returns

`any`

An array of vehicles owned and spawned by a player.

#### Defined in

[server/vehicle/get.ts:52](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/vehicle/get.ts#L52)

___

### temporaryVehicles

▸ **temporaryVehicles**(): `alt.Vehicle`[]

Get all temporary vehicles.

**`Example`**

```ts
const vehicles = Athena.vehicle.get.temporaryVehicles();
```

**`Export`**

#### Returns

`alt.Vehicle`[]

An array of temporary vehicles.

#### Defined in

[server/vehicle/get.ts:15](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/vehicle/get.ts#L15)