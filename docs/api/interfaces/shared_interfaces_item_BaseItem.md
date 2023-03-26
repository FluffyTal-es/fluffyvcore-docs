---
title: AthenaShared.interfaces.item.BaseItem
outline: [1,3]
order: 0
---

# {{ $frontmatter.title }}


[shared/interfaces/item](../modules/shared_interfaces_item.md).BaseItem

The BaseItem is used as a way for the main items to point towards item information.
This item stored in the database is used to construct front facing item information.

**`Export`**

**`Interface`**

BaseItem

## Type parameters

| Name | Type |
| :------ | :------ |
| `Behavior` | [`DefaultItemBehavior`](shared_interfaces_item_DefaultItemBehavior.md) |
| `CustomData` | {} |

## Hierarchy

- [`SharedItem`](shared_interfaces_item_SharedItem.md)<`CustomData`\>

  ↳ **`BaseItem`**

## Properties

### \_id

• `Optional` **\_id**: `unknown`

Database entry for item. Do not add / append.

**`Memberof`**

BaseItem

#### Defined in

[shared/interfaces/item.ts:292](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/shared/interfaces/item.ts#L292)

___

### behavior

• `Optional` **behavior**: `Behavior`

Behavior associated with this item.

**`Memberof`**

BaseItem

#### Defined in

[shared/interfaces/item.ts:333](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/shared/interfaces/item.ts#L333)

___

### consumableEventToCall

• `Optional` **consumableEventToCall**: `string` \| `string`[]

The event to call when this item is consumed.

**`Memberof`**

BaseItem

#### Defined in

[shared/interfaces/item.ts:341](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/shared/interfaces/item.ts#L341)

___

### customEventsToCall

• `Optional` **customEventsToCall**: [`CustomContextAction`](shared_interfaces_item_CustomContextAction.md)[]

Custom context actions in addition to the standard consumable event.

**`Memberof`**

BaseItem

#### Defined in

[shared/interfaces/item.ts:349](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/shared/interfaces/item.ts#L349)

___

### data

• **data**: `CustomData`

Any custom data assigned to this item.

**`Memberof`**

SharedItem

#### Inherited from

[SharedItem](shared_interfaces_item_SharedItem.md).[data](shared_interfaces_item_SharedItem.md#data)

#### Defined in

[shared/interfaces/item.ts:204](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/shared/interfaces/item.ts#L204)

___

### dbName

• **dbName**: `string`

The matching database name for this item.

**`Memberof`**

SharedItem

#### Inherited from

[SharedItem](shared_interfaces_item_SharedItem.md).[dbName](shared_interfaces_item_SharedItem.md#dbName)

#### Defined in

[shared/interfaces/item.ts:196](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/shared/interfaces/item.ts#L196)

___

### icon

• **icon**: `string`

A client-side icon name.
They are specified and created by you.

**`Memberof`**

BaseItem

#### Defined in

[shared/interfaces/item.ts:309](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/shared/interfaces/item.ts#L309)

___

### maxStack

• `Optional` **maxStack**: `number`

If this value is defined it will be used as the maximum stack size for the item.

**`Memberof`**

BaseItem

#### Defined in

[shared/interfaces/item.ts:317](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/shared/interfaces/item.ts#L317)

___

### model

• `Optional` **model**: `string`

The drop model of this item when it is on the ground.
If not defined it will default to a box of some sort.

**`Memberof`**

BaseItem

#### Defined in

[shared/interfaces/item.ts:358](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/shared/interfaces/item.ts#L358)

___

### msTimeout

• `Optional` **msTimeout**: `number`

An expiration time in milliseconds before the item drop is cleared.
Stored items come with an expiration date.

**`Memberof`**

BaseItem

#### Defined in

[shared/interfaces/item.ts:367](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/shared/interfaces/item.ts#L367)

___

### name

• **name**: `string`

The name of this item.

**`Memberof`**

BaseItem

#### Defined in

[shared/interfaces/item.ts:300](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/shared/interfaces/item.ts#L300)

___

### version

• `Optional` **version**: `number`

The version of this item it is based upon.

**`Memberof`**

SharedItem

#### Inherited from

[SharedItem](shared_interfaces_item_SharedItem.md).[version](shared_interfaces_item_SharedItem.md#version)

#### Defined in

[shared/interfaces/item.ts:212](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/shared/interfaces/item.ts#L212)

___

### weight

• `Optional` **weight**: `number`

The weight of this item.

**`Memberof`**

BaseItem

#### Defined in

[shared/interfaces/item.ts:325](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/shared/interfaces/item.ts#L325)