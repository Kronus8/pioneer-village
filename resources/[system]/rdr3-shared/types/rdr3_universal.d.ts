declare function AbortAnimScene(animScene: number, p1: boolean): void;

declare function Absf(value: number): number;

declare function Absi(value: number): number;

declare function Acos(p0: number): number;

declare function ActivateDamageTrackerOnNetworkId(netID: number, toggle: boolean): void;

declare function ActivateInteriorEntitySet(interior: number, entitySetName: string, p2: number): void;

declare function ActivatePhysics(entity: number): void;

/**
 * addReason:
 * enum eAddItemReason : Hash
 * {
 * ADD_REASON_AWARDS = 0xB784AD1E,
 * ADD_REASON_CREATE_CHARACTER = 0xE2C4FF71,
 * ADD_REASON_DEBUG = 0x5C05C64D,
 * ADD_REASON_DEFAULT = 0x2CD419DC,
 * ADD_REASON_GET_INVENTORY = 0xD8188685,
 * ADD_REASON_INCENTIVE = 0x8ADC2E95,
 * ADD_REASON_LOADOUT = 0xCA3454E6,
 * ADD_REASON_LOAD_SAVEGAME = 0x56212906,
 * ADD_REASON_LOOTED = 0xCA806A55,
 * ADD_REASON_MELEE = 0x7B9BDCE7,
 * ADD_REASON_MP_MISSION = 0xEC0E0194,
 * ADD_REASON_NOTIFICATION = 0xC56292D2,
 * ADD_REASON_PICKUP = 0x1A770E22,
 * ADD_REASON_PURCHASED = 0x4A6726C9,
 * ADD_REASON_SET_AMOUNT = 0x4504731E,
 * ADD_REASON_SYNCING = 0x8D4B4FF4,
 * ADD_REASON_USE_FAILED = 0xD385B670
 * };
 */
declare function AddAmmoToPed(
  ped: number,
  weaponHash: string | number,
  amount: number,
  addReason: string | number,
): void;

/**
 * addReason: see _ADD_AMMO_TO_PED
 */
declare function AddAmmoToPedByType(
  ped: number,
  ammoType: string | number,
  amount: number,
  addReason: string | number,
): void;

/**
 * Same as SET_PED_ARMOUR, but ADDS 'amount' to the armor the Ped already has.
 */
declare function AddArmourToPed(ped: number, amount: number): void;

/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 */
declare function AddAttributePoints(ped: number, attributeIndex: number, p2: number): void;

declare function AddBloodPool(x: number, y: number, z: number, unused: boolean): void;

declare function AddBloodPool_2(
  x: number,
  y: number,
  z: number,
  p3: number,
  size: number,
  p5: number,
  permanent: boolean,
  p7: number,
  p8: boolean,
): void;

declare function AddBoxVolumeToVolumeAggregate(
  aggregate: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

/**
 * p7 (length) determines the length of the spline, affects camera path and duration of transition between previous node and this one
 * p8 big values ~100 will slow down the camera movement before reaching this node
 * p9 != 0 seems to override the rotation/pitch (bool?)
 */
declare function AddCamSplineNode(
  camera: number,
  x: number,
  y: number,
  z: number,
  xRot: number,
  yRot: number,
  zRot: number,
  length: number,
  p8: number,
  p9: number,
): void;

declare function AddCoverBlockingArea(
  playerX: number,
  playerY: number,
  playerZ: number,
  radiusX: number,
  radiusY: number,
  radiusZ: number,
  p6: boolean,
  p7: boolean,
  p8: boolean,
  p9: boolean,
): void;

declare function AddCoverPoint(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: boolean,
): number;

declare function AddCustomFormationLocation(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function AddCylinderVolumeToVolumeAggregate(
  aggregate: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function AddDecal(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
  p15: number,
  p16: number,
  p17: number,
  p18: number,
  p19: number,
  p20: number,
  p21: number,
): number;

declare function AddDispatchSpawnBlockingArea(volume: number): number;

declare function AddDoorToSystemNew(
  doorHash: string | number,
  p1: boolean,
  p2: boolean,
  p3: boolean,
  threadId: number,
  p5: number,
  p6: boolean,
): void;

declare function AddEntityToAudioMixGroup(entity: number, groupName: string, p2: number): void;

declare function AddEntityToEntityMask(entity: number, mask: number): void;

declare function AddEntityToEntityMaskWithIntensity(entity: number, mask: number, intensity: number): void;

/**
 * explosionType:
 * enum eExplosionTag
 * {
 * EXP_TAG_DONTCARE = -1,
 * EXP_TAG_GRENADE,
 * EXP_TAG_STICKYBOMB,
 * EXP_TAG_MOLOTOV,
 * EXP_TAG_MOLOTOV_VOLATILE,
 * EXP_TAG_HI_OCTANE,
 * EXP_TAG_CAR,
 * EXP_TAG_PLANE,
 * EXP_TAG_PETROL_PUMP,
 * EXP_TAG_DIR_STEAM,
 * EXP_TAG_DIR_FLAME,
 * EXP_TAG_DIR_WATER_HYDRANT,
 * EXP_TAG_BOAT,
 * EXP_TAG_BULLET,
 * EXP_TAG_SMOKEGRENADE,
 * EXP_TAG_BZGAS,
 * EXP_TAG_GAS_CANISTER,
 * EXP_TAG_EXTINGUISHER,
 * EXP_TAG_TRAIN,
 * EXP_TAG_DIR_FLAME_EXPLODE,
 * EXP_TAG_VEHICLE_BULLET,
 * EXP_TAG_BIRD_CRAP,
 * EXP_TAG_FIREWORK,
 * EXP_TAG_TORPEDO,
 * EXP_TAG_TORPEDO_UNDERWATER,
 * EXP_TAG_LANTERN,
 * EXP_TAG_DYNAMITE,
 * EXP_TAG_DYNAMITESTACK,
 * EXP_TAG_DYNAMITE_VOLATILE,
 * EXP_TAG_RIVER_BLAST,
 * EXP_TAG_PLACED_DYNAMITE,
 * EXP_TAG_FIRE_ARROW,
 * EXP_TAG_DYNAMITE_ARROW,
 * EXP_TAG_PHOSPHOROUS_BULLET,
 * EXP_TAG_LIGHTNING_STRIKE,
 * EXP_TAG_TRACKING_ARROW,
 * EXP_TAG_POISON_BOTTLE
 * };
 */
declare function AddExplosion(
  x: number,
  y: number,
  z: number,
  explosionType: number,
  damageScale: number,
  isAudible: boolean,
  isInvisible: boolean,
  cameraShake: number,
): void;

/**
 * explosionType: see ADD_EXPLOSION
 */
declare function AddExplosionWithUserVfx(
  x: number,
  y: number,
  z: number,
  explosionType: number,
  explosionFx: string | number,
  damageScale: number,
  isAudible: boolean,
  isInvisible: boolean,
  cameraShake: number,
): void;

declare function AddFormationLocation(p0: number, p1: number, p2: number, p3: number): number;

/**
 * Some light propsets hashes: 1475377277, 280720199
 */
declare function AddLightPropSetToVehicle(vehicle: number, lightPropset: string | number): void;

/**
 * Loads a minimap overlay from a GFx file in the current resource.
 * @param name The path to a `.gfx` file in the current resource. It has to be specified as a `file`.
 * @return A minimap overlay ID.
 */
declare function AddMinimapOverlay(name: string): number;

declare function AddNavmeshBlockingObject(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: boolean,
  p8: number,
): number;

declare function AddNavmeshBlockingVolume(volume: number, flags: number): boolean;

declare function AddNavmeshRequiredRegion(x: number, y: number, radius: number): void;

/**
 * explosionType: see ADD_EXPLOSION
 */
declare function AddOwnedExplosion(
  ped: number,
  x: number,
  y: number,
  z: number,
  explosionType: number,
  damageScale: number,
  isAudible: boolean,
  isInvisible: boolean,
  cameraShake: number,
): void;

declare function AddPatrolRouteLink(p0: number, p1: number): void;

declare function AddPatrolRouteNode(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function AddPedStayOutVolume(ped: number, volume: number): boolean;

declare function AddPedToConversation(p0: string, ped: number, p2: string): void;

declare function AddPedToFlock(p0: number, ped: number): void;

declare function AddPetrolTrailDecalInfo(x: number, y: number, z: number, p3: number): void;

declare function AddPointToGpsMultiRoute(x: number, y: number, z: number, p3: boolean): void;

declare function AddPopMultiplierArea(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
  p6: number,
  p7: number,
  p8: boolean,
  p9: boolean,
): number;

/**
 * Can't select void. This function returns nothing. The hash of the created relationship group is output in the second parameter.
 */
declare function AddRelationshipGroup(name: string, groupHash?: number): [number, number];

/**
 * Experimental natives, please do not use in a live environment.
 */
declare function AddReplaceTexture(origTxd: string, origTxn: string, newTxd: string, newTxn: string): void;

declare function AddRoadNodeSpeedZone(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): number;

declare function AddRope(
  x: number,
  y: number,
  z: number,
  rotX: number,
  rotY: number,
  rotZ: number,
  length: number,
  ropeType: number,
  maxLength: number,
  minLength: number,
  p10: boolean,
  p11: boolean,
  p12: boolean,
  rigid: boolean,
  p14: number,
  breakWhenShot: boolean,
  p17: boolean,
): [number, number];

declare function AddRope_2(
  x: number,
  y: number,
  z: number,
  rotX: number,
  rotY: number,
  rotZ: number,
  length: number,
  ropeType: number,
  isNetworked: boolean,
  p9: number,
  p10: number,
): number;

declare function AddScenarioBlockingArea(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): number;

declare function AddScriptedCoverPoint(data: number): [number, number];

/**
 * eventType: https://alloc8or.re/rdr3/doc/enums/eEventType.txt
 */
declare function AddShockingEventAtPosition(
  eventType: string | number,
  x: number,
  y: number,
  z: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): number;

/**
 * eventType: https://alloc8or.re/rdr3/doc/enums/eEventType.txt
 */
declare function AddShockingEventForEntity(
  eventType: string | number,
  entity: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: boolean,
  p9: boolean,
  p10: number,
  p11: number,
): number;

declare function AddSphereVolumeToVolumeAggregate(
  aggregate: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function AddTacticalAnalysisPoint(p0: number, p1: number, p2: number, p3: number): void;

declare function AddTextEntry(entryKey: string, entryText: string): void;

declare function AddTextEntryByHash(entryKey: string | number, entryText: string): void;

declare function AddTextureLayer(
  textureId: number,
  albedoHash: string | number,
  normalHash: string | number,
  materialHash: string | number,
  blendType: number,
  texAlpha: number,
  sheetGridIndex: number,
): number;

declare function AddTimeToDateTime(): [number, number, number];

declare function AddToClockTime(hours: number, minutes: number, seconds: number): void;

declare function AddToItemset(itemset: number, p1: number): boolean;

declare function AddVegModifierSphere(
  x: number,
  y: number,
  z: number,
  radius: number,
  modType: number,
  flags: number,
  p6: number,
): number;

declare function AddVolumeToVolumeAggregate(
  aggregate: number,
  typeHash: string | number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function AdvanceClockTimeTo(hour: number, minute: number, second: number): void;

declare function AllowPauseMenuWhenDeadThisFrame(): void;

declare function AllowPickupLightSync(pickupObject: number, allow: boolean): void;

declare function AllowSonarBlips(toggle: boolean): void;

declare function AnalyticsPlaytimeFreemodeEnd(): void;

declare function AnalyticsPlaytimeFreemodeStart(): void;

declare function AnimSceneToNet(animScene: number): number;

declare function AnimateGameplayCamZoom(p0: number, distance: number): void;

declare function AnimpostfxHasEventTriggeredByStackhash(
  effectNameHash: string | number,
  p1: number,
  p2: boolean,
): [boolean, any /* actually bool */];

declare function AnimpostfxIsPreloadingByStackhash(effectNameHash: string | number): boolean;

declare function AnimpostfxIsRunning(effectName: string): boolean;

declare function AnimpostfxPlay(effectName: string): void;

declare function AnimpostfxPlayTimed(effectName: string, duration: number): void;

declare function AnimpostfxStop(effectName: string): void;

declare function AnimpostfxStopAll(): void;

/**
 * damages a ped with the given amount
 */
declare function ApplyDamageToPed(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function ApplyForceToEntity(
  entity: number,
  forceFlags: number,
  x: number,
  y: number,
  z: number,
  offX: number,
  offY: number,
  offZ: number,
  boneIndex: number,
  isDirectionRel: boolean,
  ignoreUpVec: boolean,
  isForceRel: boolean,
  p12: boolean,
  p13: boolean,
): void;

/**
 * p6/relative - makes the xyz force not relative to world coords, but to something else
 * p7/highForce - setting false will make the force really low
 */
declare function ApplyForceToEntityCenterOfMass(
  entity: number,
  forceType: number,
  x: number,
  y: number,
  z: number,
  p5: boolean,
  isDirectionRel: boolean,
  isForceRel: boolean,
  p8: boolean,
): void;

declare function ApplyPedBloodSpecific(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8?: number,
): number;

declare function ApplyPedDamagePack(ped: number, damagePack: string, damage: number, mult: number): void;

declare function ApplyPedMetapedOutfit(requestId: number, ped: number, p2: boolean, p3: boolean): boolean;

declare function ApplyShopItemToPed(
  ped: number,
  componentHash: string | number,
  immediately: boolean,
  isMp: boolean,
  p4: boolean,
): void;

declare function AreAllAmbientPedReservationsReady(): boolean;

/**
 * Returns false if every seat is occupied.
 */
declare function AreAnyVehicleSeatsFree(vehicle: number): boolean;

declare function AreNodesLoadedForArea(x1: number, y1: number, x2: number, y2: number): boolean;

declare function AreStringsEqual(string1: string, string2: string): boolean;

declare function AreWitnessesActive(p0: number): boolean;

declare function Asin(p0: number): number;

declare function AssistedMovementIsRouteLoaded(route: string): boolean;

declare function AssistedMovementRemoveRoute(route: string): void;

declare function AssistedMovementSetRouteProperties(route: string, props: number): void;

declare function Atan(p0: number): number;

declare function Atan2(p0: number, p1: number): number;

declare function AttachAnimSceneToEntity(animScene: number, entity: number, p2: number): void;

declare function AttachAnimSceneToEntityPreservingLocation(animScene: number, entity: number, p2: number): void;

/**
 * Last param determines if its relative to the Entity
 */
declare function AttachCamToEntity(
  cam: number,
  entity: number,
  xOffset: number,
  yOffset: number,
  zOffset: number,
  isRelative: boolean,
): void;

declare function AttachCamToPedBone(
  cam: number,
  ped: number,
  boneIndex: number,
  x: number,
  y: number,
  z: number,
  heading: boolean,
): void;

/**
 * Attaches entity 1 to entity 2.
 */
declare function AttachEntitiesToRope(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
  p15: number,
  p16: number,
  p17: number,
  p18: number,
  p19: number,
  p20: number,
): void;

/**
 * Attaches entity1 to bone (boneIndex) of entity2.
 * boneIndex - this is different to boneID, use GET_PED_BONE_INDEX to get the index from the ID. use the index for attaching to specific bones. entity1 will be attached to entity2's centre if bone index given doesn't correspond to bone indexes for that entity type.
 * useSoftPinning - if set to false attached entity will not detach when fixed
 * collision - controls collision between the two entities (FALSE disables collision).
 * isPed - pitch doesnt work when false and roll will only work on negative numbers (only peds)
 * vertexIndex - position of vertex
 * fixedRot - if false it ignores entity vector
 */
declare function AttachEntityToEntity(
  entity1: number,
  entity2: number,
  boneIndex: number,
  xPos: number,
  yPos: number,
  zPos: number,
  xRot: number,
  yRot: number,
  zRot: number,
  p9: boolean,
  useSoftPinning: boolean,
  collision: boolean,
  isPed: boolean,
  vertexIndex: number,
  fixedRot: boolean,
  p15: boolean,
  p16: boolean,
): void;

declare function AttachEntityToEntityPhysically(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
  p15: number,
  p16: number,
  p17: number,
  p18: number,
  p19: number,
  p20: number,
  p21: number,
): void;

declare function AttachPortablePickupToPed(pickupObject: number, ped: number): void;

declare function AttachTvAudioToEntity(entity: number): void;

declare function AudioIsScriptedMusicPlaying(): boolean;

declare function BailToLandingPage(bailCode: number): void;

declare function BailWithPassThroughParams(params: string): void;

declare function BeginSrl(): void;

declare function BeginTakeHighQualityPhoto(): boolean;

/**
 * Note: you must use VAR_STRING
 */
declare function BgDisplayText(text: number, x: number, y: number): void;

/**
 * Deletes the given context from the background scripts context map.
 */
declare function BgEndContext(contextName: string): void;

/**
 * Hashed version of BG_END_CONTEXT
 */
declare function BgEndContextHash(contextHash: string | number): void;

declare function BgReloadAllBackgroundScripts(): void;

declare function BgSetTextColor(red: number, green: number, blue: number, alpha: number): void;

declare function BgSetTextScale(scaleX: number, scaleY: number): void;

/**
 * Inserts the given context into the background scripts context map.
 */
declare function BgStartContext(contextName: string): void;

/**
 * Hashed version of BG_START_CONTEXT
 */
declare function BgStartContextHash(contextHash: string | number): void;

declare function BlipAddForArea(
  blipHash: string | number,
  x: number,
  y: number,
  z: number,
  scaleX: number,
  scaleY: number,
  scaleZ: number,
  p7: number,
): number;

declare function BlipAddForCoords(blipHash: string | number, x: number, y: number, z: number): number;

declare function BlipAddForEntity(blipHash: string | number, entity: number): number;

declare function BlipAddForPickupPlacement(blipHash: string | number, p1: number): number;

declare function BlipAddForRadius(blipHash: string | number, x: number, y: number, z: number, radius: number): number;

declare function BlipAddForVolume(blipHash: string | number, volume: number): number;

/**
 * https://alloc8or.re/rdr3/doc/enums/eBlipModifier.txt
 * Old name: _BLIP_SET_MODIFIER
 */
declare function BlipAddModifier(blip: number, modifierHash: string | number): boolean;

/**
 * If modifierHash is 0, ALL modifiers will be removed.
 */
declare function BlipRemoveModifier(blip: number, modifierHash: string | number): boolean;

/**
 * Removes any existing modifiers and sets the style.
 */
declare function BlipSetStyle(blip: number, styleHash: string | number): boolean;

declare function BlockAnimSceneFadingNextFrame(p0: boolean, p1: boolean): void;

/**
 * dispatchService: see ENABLE_DISPATCH_SERVICE
 */
declare function BlockDispatchServiceResourceCreation(dispatchService: number, toggle: boolean): void;

declare function BlockPickupFromPlayerCollection(p0: number, p1: number): void;

declare function BlockPickupObjectLight(pickupObject: number, toggle: boolean): void;

declare function BlockPickupPlacementLight(pickup: number, toggle: boolean): void;

declare function BoostPlayerHorseSpeedForTime(player: number, speedBoost: number, duration: number): void;

declare function BountyCancelLegendaryMission(): void;

declare function BountyCancelWantedPoster(): void;

declare function BountyClearBeingBountyHunter(): void;

declare function BountyClearBeingTarget(): void;

declare function BountyGetBountyOnPlayer(): [boolean, number, number];

declare function BountyGetCooldownCollection(p0: number): [number, number];

declare function BountyGetLegendaryTarget(p0: number, p1?: number): [boolean, number];

declare function BountyGetWantedPosterSlot(p0: string | number, p1: string | number, p2?: number): [boolean, number];

declare function BountyIsRequestPending(rpcGuid: number): [boolean, number];

declare function BountyRequestBecomeTargetOfCharacterBountyHunt(outRpcGuid: number): [boolean, number];

declare function BountyRequestBeginLegendaryMission(p1: number, p2: number): [boolean, number];

declare function BountyRequestBeginLegendaryMissionForPosse(p1: number, p2: number): [boolean, number];

declare function BountyRequestBeginWantedPoster(p1: number): [boolean, number];

declare function BountyRequestBribeJailGuard(p1: number): [boolean, number];

declare function BountyRequestClaimCharacterBounty(p1: number): [boolean, number, number];

declare function BountyRequestCompleteLegendaryMission(): [boolean, number, number];

declare function BountyRequestCompleteSplitWantedPoster(): [boolean, number, number];

declare function BountyRequestCompleteWantedPoster(): [boolean, number, number];

declare function BountyRequestEscapedCharacterBountyHunt(outRpcGuid: number): [boolean, number];

declare function BountyRequestPayOffBounty(outRpcGuid: number): [boolean, number];

declare function BountyRequestPayOffBountyEx(p1: string | number, costType: string | number): [boolean, number];

declare function BountyRequestPosseLeaderClaimCharacterBounty(p1: number): [boolean, number, number];

declare function BountyRequestPosseLeaderEscapedCharacterBountyHunt(outRpcGuid: number): [boolean, number];

declare function BountyRequestPosseMemberClaimCharacterBountyShare(): [boolean, number, number];

declare function BountyRequestPosseMemberEscapedCharacterBountyHunt(outRpcGuid: number): [boolean, number];

declare function BountyRequestSelfReportCrime(crimeType: string | number, p2: boolean): [boolean, number];

declare function BountyRequestSelfReportKilledByBountyHunter(outRpcGuid: number): [boolean, number];

declare function BountyRequestServedFullJailSentence(outRpcGuid: number): [boolean, number];

declare function BreakAllObjectFragmentBones(object: number): void;

declare function BreakEntityGlass(
  entity: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: boolean,
): void;

declare function BreakObjectFragmentChild(p0: number, p1: number, p2: boolean): void;

declare function BreakOffVehicleWheel(vehicle: number, wheelIndex: number): number;

/**
 * This native makes the vehicle stop immediately
 * distance defines how far it will travel until stopping.
 */
declare function BringVehicleToHalt(vehicle: number, distance: number, duration: number, unknown: boolean): void;

declare function BusyspinnerIsOn(): boolean;

/**
 * Removes the loading prompt at the bottom right of the screen.
 */
declare function BusyspinnerOff(): void;

declare function BusyspinnerSetText(text: string): void;

/**
 * This is similar to the PushScaleformMovieFunction natives, except it calls in the `TIMELINE` of a minimap overlay.
 * @param miniMap The minimap overlay ID.
 * @param fnName A function in the overlay's TIMELINE.
 */
declare function CallMinimapScaleformFunction(miniMap: number, fnName: string): boolean;

declare function CanAnchorBoatHere(vehicle: number): boolean;

declare function CanKnockPedOffVehicle(ped: number): boolean;

declare function CanLaunchUiappByHash(appNameHash: string | number): boolean;

declare function CanLaunchUiappByHashWithEntry(appNameHash: string | number, entryHash: string | number): boolean;

declare function CanPedBeMounted(ped: number): boolean;

declare function CanPedInCombatSeeTarget(ped: number, target: number): boolean;

declare function CanPedRagdoll(ped: number): boolean;

/**
 * Returns:
 * 0 - CTR_CANNOT_TARGET
 * 1 - CTR_CAN_TARGET
 * 2 - CTR_NOT_SURE_YET
 */
declare function CanPedSeeEntity(ped: number, targetEntity: number, p2: boolean, p3: boolean): number;

declare function CanPedSeePedCached(ped: number, targetPed: number, p2: boolean): number;

declare function CanPedSpeak(ped: number, speechName: string, unk: boolean): boolean;

declare function CanPlayerStartMission(player: number): boolean;

declare function CanRegisterMissionEntities(
  ped_amt: number,
  vehicle_amt: number,
  object_amt: number,
  pickup_amt: number,
): boolean;

declare function CanRegisterMissionObjects(amount: number): boolean;

declare function CanRegisterMissionPeds(amount: number): boolean;

declare function CanRegisterMissionPickups(amount: number): boolean;

declare function CanRegisterMissionVehicles(amount: number): boolean;

/**
 * seatIndex: see CREATE_PED_INSIDE_VEHICLE
 */
declare function CanShuffleSeat(vehicle: number, seatIndex: number): boolean;

declare function CanStartItemInteraction(
  ped: number,
  itemHash: string | number,
  interactionHash: string | number,
  p3: number,
): boolean;

declare function CanWeaponUseAmmoWithType(weaponHash: string | number, ammoHash: string | number): boolean;

/**
 * Cancels the currently executing event.
 */
declare function CancelEvent(): void;

declare function CancelMusicEvent(eventName: string): boolean;

declare function CancelOnscreenKeyboard(): void;

declare function CascadeShadowsClearShadowSampleType(): void;

/**
 * When this is set to ON, shadows only draw as you get nearer.
 * When OFF, they draw from a further distance.
 */
declare function CascadeShadowsEnableEntityTracker(toggle: boolean): void;

declare function CascadeShadowsSetCascadeBounds(
  p0: number,
  p1: boolean,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: boolean,
  p7: number,
): void;

/**
 * Possible values:
 * "CSM_ST_POINT"
 * "CSM_ST_LINEAR"
 * "CSM_ST_BOX3x3"
 * "CSM_ST_BOX4x4"
 * "CSM_ST_DITHER2_LINEAR"
 * "CSM_ST_CUBIC"
 * "CSM_ST_POISSON16"
 * "CSM_ST_SOFT8"
 * "CSM_ST_SOFT16"
 * "CSM_ST_SOFT32"
 * "CSM_ST_DITHER16_RPDB"
 * "CSM_ST_POISSON16_RPDB_GNORM"
 * "CSM_ST_HIGHRES_BOX4x4"
 * "CSM_ST_ESM"
 */
declare function CascadeShadowsSetShadowSampleType(_type: string): void;

declare function CashinventoryInitSessionIsFaulted(): boolean;

declare function CashinventoryInitSessionStatus(): [boolean, number, number];

declare function CashinventoryIsConnectionFaulted(): boolean;

declare function CashinventoryIsSessionReady(): boolean;

declare function CashinventoryTransactionAddAward(id: number, hash: string | number): [boolean, number, number];

declare function CashinventoryTransactionCheckout(id: number): boolean;

declare function CashinventoryTransactionCheckoutStatus(id: number, status?: number): [boolean, number];

declare function CashinventoryTransactionDelete(id: number): boolean;

declare function CashinventoryTransactionFireAndForgetItem(
  actionHash: string | number,
  p3: number,
): [boolean, number, number];

declare function CashinventoryTransactionGetAction(id: number): number;

declare function CashinventoryTransactionGetBasketIsValid(id: number): boolean;

declare function CashinventoryTransactionGetItemInfo(id: number, index: number, itemInfo?: number): [boolean, number];

declare function CashinventoryTransactionGetNumOfItems(id: number): number;

declare function CashinventoryTransactionResponseGetItemInfo(
  id: number,
  index: number,
  itemInfo?: number,
): [boolean, number];

declare function CashinventoryTransactionStart(_type: string | number, actionHash: string | number): [boolean, number];

declare function CashinventoryTransactionValidateItem(p0: number, p1: number): number;

/**
 * I'm guessing this rounds a float value up to the next whole number, and FLOOR rounds it down
 */
declare function Ceil(value: number): number;

declare function ChalAchievementGetProgressInt(p0: string | number, p1: string | number): number;

declare function ChalAchievementIsComplete(p0: string | number, p1: string | number): boolean;

declare function ChalAddGoalProgressFloat(chalHash: string | number, goalHash: string | number, value: number): void;

declare function ChalAddGoalProgressFloatByScoreId(p0: string | number, value: number): void;

declare function ChalAddGoalProgressInt(chalHash: string | number, goalHash: string | number, value: number): void;

declare function ChalAddGoalProgressIntByScoreId(p0: string | number, value: number): void;

declare function ChalGetMaxRanks(chalHash: string | number): number;

declare function ChalGetNumRanksCompleted(chalHash: string | number): number;

declare function ChalIsGoalActive(chalHash: string | number, goalHash: string | number): boolean;

declare function ChalMissionAddGoalProgressInt(
  missionHash: string | number,
  goalHash: string | number,
  value: number,
): void;

declare function ChalMissionGetNumGoals(missionHash: string | number): number;

declare function ChalMissionGetNumGoalsComplete(missionHash: string | number): number;

declare function ChalMissionIsGoalComplete(missionHash: string | number, goalHash: string | number): boolean;

declare function ChalNetStartChal(chalHash: string | number): void;

declare function ChalNetStartGoal(chalHash: string | number, goalHash: string | number): void;

declare function ChalNetStopChal(chalHash: string | number): void;

declare function ChalNetStopGoal(chalHash: string | number, goalHash: string | number): void;

declare function ChalSetGoalDisabled(chalHash: string | number, goalHash: string | number, disabled: boolean): void;

declare function ChalSetGoalProgressInt(chalHash: string | number, goalHash: string | number, value: number): void;

/**
 * Alters entity's health by 'amount'. Can be negative (to drain health).
 * In the scripts entity2 and weaponHash are unused (zero).
 */
declare function ChangeEntityHealth(
  entity: number,
  amount: number,
  entity2: number,
  weaponHash: string | number,
): boolean;

/**
 * Alters entity's stamina by 'amount'. Can be negative (to drain stamina).
 */
declare function ChangePedStamina(ped: number, amount: number): boolean;

declare function CheckOwnershipOfAnimScene(animScene: number): boolean;

declare function CinematicLocationStopScriptedShotEvent(p0: number, p1: number, p2: number): void;

declare function CinematicLocationTriggerScriptedShotEvent(p0: number, p1: number, p2: number, p3: number): void;

/**
 * minimum: Degrees between -90f and 90f.
 * maximum: Degrees between -90f and 90f.
 * Clamps the gameplay camera's current pitch.
 * Eg. _CLAMP_GAMEPLAY_CAM_PITCH(0.0f, 0.0f) will set the vertical angle directly behind the player.
 */
declare function ClampGameplayCamPitch(minimum: number, maximum: number): void;

/**
 * minimum: Degrees between -180f and 180f.
 * maximum: Degrees between -180f and 180f.
 * Clamps the gameplay camera's current yaw.
 * Eg. _CLAMP_GAMEPLAY_CAM_YAW(0.0f, 0.0f) will set the horizontal angle directly behind the player.
 */
declare function ClampGameplayCamYaw(minimum: number, maximum: number): void;

declare function CleanItemset(itemset: number): void;

declare function ClearAllHelpMessages(): void;

declare function ClearAllPlayerBits(value: number): void;

declare function ClearAmbientZoneListState(p1: boolean): number;

declare function ClearAmbientZoneState(zoneName: string, p1: boolean): void;

declare function ClearAngledAreaOfVehicles(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function ClearAnimSceneWasSkipped(animScene: number): void;

declare function ClearArea(x: number, y: number, z: number, radius: number, p4: number): void;

declare function ClearBit(offset: number): number;

declare function ClearConversationHistory(): void;

declare function ClearDrivebyTaskUnderneathDrivingTask(ped: number): void;

declare function ClearEntityLastDamageEntity(entity: number): void;

declare function ClearFacialIdleAnimOverride(ped: number): void;

declare function ClearFocus(): void;

declare function ClearGpsCustomRoute(): void;

/**
 * Clears the GPS flags.
 */
declare function ClearGpsFlags(): void;

/**
 * Does the same as SET_GPS_MULTI_ROUTE_RENDER(false);
 */
declare function ClearGpsMultiRoute(): void;

declare function ClearGpsPlayerWaypoint(): void;

declare function ClearHdArea(): void;

declare function ClearItemset(itemset: number): void;

declare function ClearLastDrivenVehicle(): void;

declare function ClearLaunchParam(paramName: string): void;

declare function ClearLaunchParams(): void;

declare function ClearOverrideWeather(): void;

declare function ClearPedBloodDamage(ped: number): void;

declare function ClearPedBloodDamageByZone(ped: number, p1: number): void;

declare function ClearPedBloodDamageFacial(ped: number, p1: number): void;

declare function ClearPedDamageDecalByZone(ped: number, p1: number, p2: string): void;

declare function ClearPedDecorations(ped: number): void;

declare function ClearPedEnvDirt(ped: number): void;

declare function ClearPedLastDamageBone(ped: number): void;

declare function ClearPedLastWeaponDamage(ped: number): void;

declare function ClearPedNonCreationArea(): void;

declare function ClearPedSecondaryTask(ped: number): void;

declare function ClearPedTasks(ped: number, p1: boolean, p2: boolean): void;

/**
 * Immediately stops the pedestrian from whatever it's doing. They stop fighting, animations, etc. they forget what they were doing.
 */
declare function ClearPedTasksImmediately(ped: number, p1: boolean, p2: boolean): void;

/**
 * It clears the wetness of the selected Ped/Player. Clothes have to be wet to notice the difference.
 */
declare function ClearPedWetness(ped: number): void;

declare function ClearPlayerBitAtIndex(bitIndex: number): number;

declare function ClearPlayerHasDamagedAtLeastOneNonAnimalPed(player: number): void;

declare function ClearPlayerHasDamagedAtLeastOnePed(player: number): void;

/**
 * nullsub, doesn't do anything
 */
declare function ClearPlayerWantedLevel(player: number): void;

/**
 * flags: see SET_RAGDOLL_BLOCKING_FLAGS
 */
declare function ClearRagdollBlockingFlags(ped: number, flags: number): void;

declare function ClearRelationshipBetweenGroups(
  relationship: number,
  group1: string | number,
  group2: string | number,
): void;

declare function ClearRoomForEntity(entity: number): void;

declare function ClearRoomForGameViewport(): void;

declare function ClearSequenceTask(): number;

declare function ClearSpawnerInfoPriority(p0: string | number, p1: string | number): void;

declare function ClearTacticalAnalysisPoints(): void;

declare function ClearTimecycleModifier(): void;

declare function ClearWeatherTypePersist(): void;

declare function ClearWeatherTypePersistOvertime(milliseconds: number): void;

declare function ClearWeatherVariation(weatherType: string, p1: boolean): void;

declare function ClonePed(ped: number, isNetwork: boolean, bScriptHostPed: boolean, copyHeadBlendFlag: boolean): number;

/**
 * Copies ped's components and props to targetPed.
 */
declare function ClonePedToTarget(ped: number, targetPed: number): void;

declare function CloseAllUiapps(): void;

declare function CloseAllUiappsImmediate(): void;

declare function ClosePatrolRoute(): void;

declare function CloseSequenceTask(taskSequenceId: number): void;

declare function CloseUiapp(appName: string): void;

declare function CloseUiappByHash(appNameHash: string | number): void;

declare function CloseUiappByHashImmediate(appNameHash: string | number): void;

declare function CloseUiappImmediate(appName: string): void;

/**
 * Hardcoded to return true.
 */
declare function CloseVideoEditor(p0: number): boolean;

declare function CloudDidRequestSucceed(id: number): boolean;

declare function CloudHasRequestCompleted(id: number): boolean;

declare function CollectableCategorySetHasReceivedList(p0: number, p1: number, p2: number): void;

declare function CollectableGetCategoryItemSetBuyAward(p0: string | number, p1: string | number): number;

/**
 * Commits the backing pixels to the specified runtime texture.
 * @param tex The runtime texture handle.
 */
declare function CommitRuntimeTexture(tex: number): void;

declare function CompareStrings(str1: string, str2: string, matchCase: boolean, maxLength: number): number;

declare function CompendiumAnimalGetSampleInventoryItem(p0: number): number;

declare function CompendiumAnimalHasSample(p0: number): number;

declare function CompendiumAnimalHasStamp(p0: number): number;

declare function CompendiumAnimalObservedByStatName(p0: number, p1: number): void;

declare function CompendiumAnimalSetDiscovered(p0: number): void;

declare function CompendiumFishCaught(p0: number, p1: number): void;

declare function CompendiumFishGetLureSuitabilityByStatItem(p0: number, p1: number): number;

declare function CompendiumGangAmbushSurvived(p0: number): void;

declare function CompendiumGangBountyCaptured(p0: number): void;

declare function CompendiumGangCampFound(p0: number, p1: number): void;

declare function CompendiumGangEncountered(p0: number): void;

declare function CompendiumGangHideoutFound(p0: number, p1: number): void;

declare function CompendiumGangMemberKilled(p0: number): void;

declare function CompendiumGetEntryByIndexInSubcategory(p0: number, p1: number, p2: number): number;

declare function CompendiumGetEntryByStatItem(p0: number, p1: number): number;

declare function CompendiumGetMapDiscoverableFromStatItem(p0: number, p1: number, p2: number, p3: number): number;

declare function CompendiumGetNumEntriesInSubcategory(p0: number, p1: number): number;

declare function CompendiumGetShortDescriptionFromPed(p0: number): number;

declare function CompendiumGetSubcategorySampleToastDescComplete(p0: number, p1: number): number;

declare function CompendiumGetSubcategorySampleToastDescProgress(p0: number, p1: number): number;

declare function CompendiumGetSubcategorySampleToastTitle(p0: number, p1: number): number;

declare function CompendiumGetSubcategoryToastAppId(p0: number, p1: number): number;

/**
 * herbType: https://alloc8or.re/rdr3/doc/enums/eHerbType.txt
 */
declare function CompendiumHerbPicked(herbType: string | number, x: number, y: number, z: number): void;

declare function CompendiumHorseBonding(p0: number, p1: number): void;

declare function CompendiumHorseObserved(p0: number, p1: number): void;

declare function CompendiumHorseWildBroken(p0: number): void;

declare function ComputeSatchelItemForPedDamage(p0: number, p1: number, p2: number): number;

/**
 * Takes the specified time and writes it to the structure specified in the second argument.
 * struct date_time
 * {
 * int year;
 * int PADDING1;
 * int month;
 * int PADDING2;
 * int day;
 * int PADDING3;
 * int hour;
 * int PADDING4;
 * int minute;
 * int PADDING5;
 * int second;
 * int PADDING6;
 * };
 */
declare function ConvertPosixTime(posixTime: number, timeStructure?: number): number;

declare function CopyMemory(size: number): [number, number];

/**
 * Copies sourceVehicle's damage (broken bumpers, broken lights, etc.) to targetVehicle.
 */
declare function CopyVehicleDamages(sourceVehicle: number, targetVehicle: number): void;

declare function Cos(value: number): number;

declare function CouldAnimSceneEntityReachExitNextFrame(
  animScene: number,
  entityName: string,
  p2: number,
  p3: number,
): boolean;

declare function CountParticipantBits(value: number): [number, number];

declare function CountPlayerBits(value: number): [number, number];

declare function CreateAmbientPickup(
  pickupHash: string | number,
  x: number,
  y: number,
  z: number,
  flags: number,
  value: number,
  modelHash: string | number,
  p7: boolean,
  p8: boolean,
  p9: number,
  p10: number,
): number;

declare function CreateAnimScene(
  animDict: string,
  flags: number,
  playbackListName: string,
  p3: boolean,
  p4: boolean,
): number;

/**
 * Creates blood decals from ped in some interval for few seconds. Float args are guessed, not sure what they really do (but decal size really changes).
 */
declare function CreateBloodPoolsFromPed(ped: number, sizeX: number, sizeY: number, sizeZ: number): void;

declare function CreateCam(camName: string, p1: boolean): number;

declare function CreateCamWithParams(
  camName: string,
  posX: number,
  posY: number,
  posZ: number,
  rotX: number,
  rotY: number,
  rotZ: number,
  fov: number,
  p8: boolean,
  p9: number,
): number;

declare function CreateCamera(camHash: string | number, p1: boolean): number;

declare function CreateCameraWithParams(
  camHash: string | number,
  posX: number,
  posY: number,
  posZ: number,
  rotX: number,
  rotY: number,
  rotZ: number,
  fov: number,
  p8: boolean,
  p9: number,
): number;

declare function CreateCheckpointWithNamehash(
  typeHash: string | number,
  posX1: number,
  posY1: number,
  posZ1: number,
  posX2: number,
  posY2: number,
  posZ2: number,
  radius: number,
  red: number,
  green: number,
  blue: number,
  alpha: number,
  reserved: number,
): number;

/**
 * Returns a formatted string (0x%x)
 */
declare function CreateColorString(rgb: number): string;

declare function CreateDraftVehicle(
  modelHash: string | number,
  x: number,
  y: number,
  z: number,
  heading: number,
  isNetwork: boolean,
  bScriptHostVeh: boolean,
  p7: boolean,
  numHorses: number,
  p9: boolean,
): number;

/**
 * Creates a DUI browser. This can be used to draw on a runtime texture using CREATE_RUNTIME_TEXTURE_FROM_DUI_HANDLE.
 * @param url The initial URL to load in the browser.
 * @param width The width of the backing surface.
 * @param height The height of the backing surface.
 * @return A DUI object.
 */
declare function CreateDui(url: string, width: number, height: number): number;

declare function CreateFakeMpGamerTag(
  ped: number,
  username: string,
  pointedClanTag: boolean,
  isRockstarClan: boolean,
  clanTag: string,
  p5: number,
): number;

declare function CreateForcedObject(
  x: number,
  y: number,
  z: number,
  p3: number,
  modelHash: string | number,
  p5: boolean,
): void;

/**
 * Creates a new ped group.
 * Groups can contain up to 8 peds.
 * The parameter is unused.
 * Returns a handle to the created group, or 0 if a group couldn't be created.
 */
declare function CreateGroup(unused: number): number;

declare function CreateGuardZone(name: string): void;

declare function CreateHerd(): number;

/**
 * dispatchService: see ENABLE_DISPATCH_SERVICE
 */
declare function CreateIncident(
  dispatchService: number,
  x: number,
  y: number,
  z: number,
  numUnits: number,
  radius: number,
  p7: number,
  p8: number,
): [boolean, number];

/**
 * dispatchService: see ENABLE_DISPATCH_SERVICE
 * The entities must be added to itemSet.
 */
declare function CreateIncidentWithEntities(
  dispatchService: number,
  x: number,
  y: number,
  z: number,
  itemSet: number,
  radius: number,
  outIncidentID?: number,
): [boolean, number];

declare function CreateItemset(p0: boolean): number;

/**
 * configHash: https://alloc8or.re/rdr3/doc/enums/eTrainConfig.txt
 * For more information, see trainconfigs.ymt
 */
declare function CreateMissionTrain(
  configHash: string | number,
  x: number,
  y: number,
  z: number,
  p4: boolean,
  passengers: boolean,
  p6: boolean,
  p7: boolean,
): number;

declare function CreateModelHide(
  x: number,
  y: number,
  z: number,
  radius: number,
  model: string | number,
  p5: boolean,
): void;

declare function CreateModelHideExcludingScriptObjects(
  x: number,
  y: number,
  z: number,
  radius: number,
  model: string | number,
  p5: boolean,
): void;

/**
 * Only works with objects!
 */
declare function CreateModelSwap(
  x: number,
  y: number,
  z: number,
  radius: number,
  originalModel: string | number,
  newModel: string | number,
  p6: boolean,
): void;

declare function CreateMpGamerTag(
  player: number,
  username: string,
  pointedClanTag: boolean,
  isRockstarClan: boolean,
  clanTag: string,
  p5: number,
): number;

declare function CreateMpGamerTagOnEntity(entity: number, text: string): number;

declare function CreateNewScriptedConversation(p0: string): boolean;

declare function CreateObject(
  modelHash: string | number,
  x: number,
  y: number,
  z: number,
  isNetwork: boolean,
  bScriptHostObj: boolean,
  dynamic: boolean,
  p7: boolean,
  p8: boolean,
): number;

declare function CreateObjectNoOffset(
  modelHash: string | number,
  x: number,
  y: number,
  z: number,
  isNetwork: boolean,
  bScriptHostObj: boolean,
  dynamic: boolean,
  p7: boolean,
): number;

declare function CreateObjectSkeleton(object: number): boolean;

declare function CreatePatrolRoute(): void;

declare function CreatePed(
  modelHash: string | number,
  x: number,
  y: number,
  z: number,
  heading: number,
  isNetwork: boolean,
  bScriptHostPed: boolean,
  p7: boolean,
  p8: boolean,
): number;

/**
 * seatIndex:
 * enum eVehicleSeat
 * {
 * VS_ANY_PASSENGER = -2,
 * VS_DRIVER,
 * VS_FRONT_RIGHT,
 * VS_BACK_LEFT,
 * VS_BACK_RIGHT,
 * VS_EXTRA_LEFT_1,
 * VS_EXTRA_RIGHT_1,
 * VS_EXTRA_LEFT_2,
 * VS_EXTRA_RIGHT_2,
 * VS_EXTRA_LEFT_3,
 * VS_EXTRA_RIGHT_3,
 * VS_NUM_SEATS
 * };
 */
declare function CreatePedInsideVehicle(
  vehicle: number,
  modelHash: string | number,
  seatIndex: number,
  p3: boolean,
  p4: boolean,
  p5: boolean,
): number;

declare function CreatePedOnMount(
  mount: number,
  modelHash: string | number,
  index: number,
  p3: boolean,
  p4: boolean,
  p5: boolean,
  p6: boolean,
): number;

declare function CreatePersistentCharacter(hash: string | number): number;

declare function CreatePickup(
  pickupHash: string | number,
  x: number,
  y: number,
  z: number,
  flags: number,
  p5: number,
  p6: boolean,
  modelHash: string | number,
  p8: number,
  p9: number,
  p10: number,
): number;

declare function CreatePickupRotate(
  pickupHash: string | number,
  posX: number,
  posY: number,
  posZ: number,
  rotX: number,
  rotY: number,
  rotZ: number,
  flags: number,
  p8: number,
  p9: number,
  p10: boolean,
  modelHash: string | number,
  p12: number,
  p13: number,
  p14: number,
): number;

declare function CreatePopzoneFromVolume(volume: number): number;

declare function CreatePortablePickup(
  pickupHash: string | number,
  x: number,
  y: number,
  z: number,
  placeOnGround: boolean,
  modelHash: string | number,
): number;

declare function CreatePropSet(
  hash: string | number,
  x: number,
  y: number,
  z: number,
  p4: number,
  p5: number,
  p6: number,
  p7: boolean,
  p8: boolean,
): number;

declare function CreatePropSetInstanceAttachedToEntity(
  hash: string | number,
  x: number,
  y: number,
  z: number,
  entity: number,
  p5: number,
  p6: boolean,
  p7: number,
  p8: boolean,
): number;

/**
 * Same as _CREATE_PROP_SET
 */
declare function CreatePropSet_2(
  hash: string | number,
  x: number,
  y: number,
  z: number,
  p4: number,
  p5: number,
  p6: number,
  p7: boolean,
  p8: boolean,
): number;

/**
 * Same as CREATE_PROP_SET_INSTANCE_ATTACHED_TO_ENTITY
 */
declare function CreatePropSet_4(
  hash: string | number,
  x: number,
  y: number,
  z: number,
  entity: number,
  p5: number,
  p6: boolean,
  p7: number,
  p8: boolean,
): number;

/**
 * Creates a blank runtime texture.
 * @param txd A handle to the runtime TXD to create the runtime texture in.
 * @param txn The name for the texture in the runtime texture dictionary.
 * @param width The width of the new texture.
 * @param height The height of the new texture.
 * @return A runtime texture handle.
 */
declare function CreateRuntimeTexture(txd: number, txn: string, width: number, height: number): number;

/**
 * Creates a runtime texture from a DUI handle.
 * @param txd A handle to the runtime TXD to create the runtime texture in.
 * @param txn The name for the texture in the runtime texture dictionary.
 * @param duiHandle The DUI handle returned from GET_DUI_HANDLE.
 * @return The runtime texture handle.
 */
declare function CreateRuntimeTextureFromDuiHandle(txd: number, txn: string, duiHandle: string): number;

/**
 * Creates a runtime texture from the specified file in the current resource.
 * @param txd A handle to the runtime TXD to create the runtime texture in.
 * @param txn The name for the texture in the runtime texture dictionary.
 * @param fileName The file name of an image to load. This should preferably be a PNG, and has to be specified as a `file` in the resource manifest.
 * @return A runtime texture handle.
 */
declare function CreateRuntimeTextureFromImage(txd: number, txn: string, fileName: string): number;

/**
 * Creates a runtime texture dictionary with the specified name.
 * Example:
 * ```lua
 * local txd = CreateRuntimeTxd('meow')
 * ```
 * @param name The name for the runtime TXD.
 * @return A handle to the runtime TXD.
 */
declare function CreateRuntimeTxd(name: string): number;

declare function CreateScenarioPointHash(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): number;

declare function CreateScenarioPointHashAttachedToEntity(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): number;

declare function CreateShockingEvent(args: number): [number, number];

declare function CreateSpeedVolume(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
): number;

declare function CreateSwatchTextureDict(slots: number): boolean;

/**
 * Creates a tracked point, useful for checking the visibility of a 3D point on screen.
 */
declare function CreateTrackedPoint(): number;

declare function CreateVehicle(
  modelHash: string | number,
  x: number,
  y: number,
  z: number,
  heading: number,
  isNetwork: boolean,
  bScriptHostVeh: boolean,
  p7: boolean,
  p8: boolean,
): number;

declare function CreateVolumeAggregate(): number;

declare function CreateVolumeAggregateWithCustomName(name: string): number;

declare function CreateVolumeBox(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): number;

declare function CreateVolumeBoxWithCustomName(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): number;

declare function CreateVolumeByHash(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): number;

declare function CreateVolumeByHashWithCustomName(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  name: string,
): number;

declare function CreateVolumeCylinder(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): number;

declare function CreateVolumeCylinderWithCustomName(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): number;

declare function CreateVolumeSphere(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): number;

declare function CreateVolumeSphereWithCustomName(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): number;

declare function CreateWalkAndTalkVolume(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
): number;

declare function CreateWeaponObject(
  weaponHash: string | number,
  ammoCount: number,
  x: number,
  y: number,
  z: number,
  showWorldModel: boolean,
  scale: number,
): number;

declare function DataarrayGetBool(arrayIndex: number): [boolean, number];

declare function DataarrayGetCount(arrayData: number): [number, number];

declare function DataarrayGetDict(arrayIndex: number): [number, number];

declare function DataarrayGetFloat(arrayIndex: number): [number, number];

declare function DataarrayGetInt(arrayIndex: number): [number, number];

declare function DataarrayGetString(arrayIndex: number): [string, number];

/**
 * Types:
 * 1 = Boolean
 * 2 = Integer
 * 3 = Float
 * 4 = String
 * 5 = Vector3
 * 6 = Object
 * 7 = Array
 */
declare function DataarrayGetType(arrayIndex: number): [number, number];

declare function DataarrayGetVector(arrayIndex: number): [number[], number];

declare function DatabindingAddDataBool(p0: number, p1: number | string, p2: boolean): number;

declare function DatabindingAddDataBoolByHash(p0: number, p1: number, p2: number): number;

declare function DatabindingAddDataBoolFromPath(p0: number, p1: number, p2: number): number;

declare function DatabindingAddDataContainer(p0: number, p1: number | string): number;

declare function DatabindingAddDataContainerByHash(p0: number, p1: number): number;

declare function DatabindingAddDataContainerFromPath(p0: number | string, p1: number | string): number;

declare function DatabindingAddDataFloat(p0: number, p1: number | string, p2: number): number;

declare function DatabindingAddDataGangId(p0: number, p1: number, p2: number): number;

declare function DatabindingAddDataHash(p0: number, p1: number | string, p2: number | string): number;

declare function DatabindingAddDataHashByHash(p0: number, p1: number, p2: number): number;

declare function DatabindingAddDataInt(p0: number, p1: number | string, p2: number): number;

declare function DatabindingAddDataIntByHash(p0: number, p1: number, p2: number): number;

declare function DatabindingAddDataString(p0: number, p1: number | string, p2: number | string): number;

declare function DatabindingAddDataStringByHash(p0: number, p1: number, p2: number): number;

declare function DatabindingAddDataStringFromPath(p0: string, p1: string, p2: string): number;

declare function DatabindingAddHashArray(p0: number, p1: number): number;

declare function DatabindingAddStringArray(p0: number, p1: number): number;

declare function DatabindingAddUiItemList(p0: number, p1: string): number;

declare function DatabindingAddUiItemListByHash(p0: number, p1: number): number;

declare function DatabindingAddUiItemListFromPath(p0: number, p1: number): number;

declare function DatabindingClearBindingArray(p0: number): void;

declare function DatabindingGetArrayCount(p0: number): number;

declare function DatabindingGetDataContainerFromChildIndex(p0: number, p1: number): number;

declare function DatabindingGetDataContainerFromPath(p0: number): number;

declare function DatabindingGetItemContextByIndex(p0: number, p1: number): number;

declare function DatabindingInsertUiItemToListFromContextHashAlias(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function DatabindingInsertUiItemToListFromContextStringAlias(
  p0: number,
  p1: number,
  p2: string,
  p3: number,
): void;

declare function DatabindingInsertUiItemToListFromPathStringAlias(p0: number, p1: number, p2: number, p3: number): void;

declare function DatabindingIsEntryValid(entryId: string | number): boolean;

declare function DatabindingReadDataBool(p0: number): number;

declare function DatabindingReadDataBoolFromParent(p0: number, p1: number): number;

declare function DatabindingReadDataBoolFromParentByHash(p0: number, p1: number): number;

declare function DatabindingReadDataHashStringFromParent(p0: number, p1: number): number;

declare function DatabindingReadDataHashStringFromParentByHash(p0: number, p1: number): number;

declare function DatabindingReadDataIntFromParent(p0: number, p1: number): number;

declare function DatabindingReadDataIntFromParentByHash(p0: number, p1: number): number;

declare function DatabindingReadDataString(p0: number): number;

declare function DatabindingReadDataStringFromParent(p0: number, p1: number): number;

declare function DatabindingReadInt(p0: number): number;

declare function DatabindingRemoveBindingArrayItemByDataContextId(p0: number, p1: number): void;

declare function DatabindingRemoveDataEntry(p0: number): void;

declare function DatabindingSetTemplatedUiItemHashAlias(p0: number, p1: number, p2: number): void;

declare function DatabindingSetTemplatedUiItemListSize(p0: number, p1: number): void;

declare function DatabindingWriteDataBool(p0: number, p1: boolean): void;

declare function DatabindingWriteDataBoolFromParent(p0: number, p1: number, p2: number): void;

declare function DatabindingWriteDataFloat(p0: number, p1: number): void;

declare function DatabindingWriteDataHashString(p0: number, p1: number | string): void;

declare function DatabindingWriteDataHashStringFromParent(p0: number, p1: number, p2: number): void;

declare function DatabindingWriteDataHashStringFromParentByHash(p0: number, p1: number, p2: number): void;

declare function DatabindingWriteDataInt(p0: number, p1: number): void;

declare function DatabindingWriteDataIntFromParent(p0: number, p1: number, p2: number): void;

declare function DatabindingWriteDataIntFromParentByHash(p0: number, p1: number, p2: number): void;

declare function DatabindingWriteDataScriptVariables(p0: number, p1: number): void;

declare function DatabindingWriteDataString(p0: number, p1: number | string): void;

declare function DatabindingWriteStringFromParent(p0: number, p1: number, p2: number): void;

declare function DatadictGetArray(key: string): [number, number];

declare function DatadictGetBool(key: string): [boolean, number];

declare function DatadictGetDict(key: string): [number, number];

declare function DatadictGetFloat(key: string): [number, number];

declare function DatadictGetInt(key: string): [number, number];

declare function DatadictGetString(key: string): [string, number];

/**
 * Types:
 * 1 = Boolean
 * 2 = Integer
 * 3 = Float
 * 4 = String
 * 5 = Vector3
 * 6 = Object
 * 7 = Array
 */
declare function DatadictGetType(key: string): [number, number];

declare function DatadictGetVector(key: string): [number[], number];

declare function DatadictIsArrayValid(p0: number): boolean;

declare function DatadictIsDictValid(p0: number): boolean;

declare function DatadictSetInt(key: string, value: number): number;

declare function DatafileCreate(index: number): void;

declare function DatafileDelete(index: number): void;

declare function DatafileDeleteRequestedFile(p0: number): boolean;

declare function DatafileGetFileDict(index: number): string;

declare function DatafileGetNumChildren(p0: number, p1: number): number;

declare function DatafileGetNumNodes(p0: number): number;

declare function DatafileHasLoadedFileData(p0: number): boolean;

declare function DatafileHasValidFileData(p0: number): boolean;

declare function DatafileRegisterQuery(p0: number, p1: number, p2: number): number;

declare function DatafileSelectActiveFile(p0: number, p1: number): boolean;

declare function DatafileUgcSelectData(p0: number, p1: number, p2: number): number;

declare function DatafileUnload(p0: number): void;

/**
 * Adds the given request ID to the watch list.
 */
declare function DatafileWatchRequestId(id: number): void;

declare function DeactivateInteriorEntitySet(interior: number, entitySetName: string, p2: boolean): void;

/**
 * Returns whether or not the specified property is set for the entity.
 */
declare function DecorExistOn(entity: number, propertyName: string): boolean;

declare function DecorGetBool(entity: number, propertyName: string): boolean;

declare function DecorGetFloat(entity: number, propertyName: string): number;

declare function DecorGetInt(entity: number, propertyName: string): number;

declare function DecorGetUint8(entity: number, propertyName: string): number;

/**
 * type: see DECOR_REGISTER
 */
declare function DecorIsRegisteredAsType(propertyName: string, _type: number): boolean;

declare function DecorRegister(propertyName: string, _type: number): void;

declare function DecorRegister_2(propertyName: string, _type: number, p2: boolean): void;

declare function DecorRemove(entity: number, propertyName: string): boolean;

declare function DecorRemoveAll(entity: number): boolean;

/**
 * This function sets metadata of type bool to specified entity.
 */
declare function DecorSetBool(entity: number, propertyName: string, value: boolean): boolean;

declare function DecorSetFloat(entity: number, propertyName: string, value: number): boolean;

/**
 * Sets property to int.
 */
declare function DecorSetInt(entity: number, propertyName: string, value: number): boolean;

declare function DecorSetString(entity: number, propertyName: string, value: string): boolean;

declare function DecorSetUint8(entity: number, propertyName: string, value: number): boolean;

declare function DeleteAllTrains(): void;

declare function DeleteAnimScene(animScene: number): void;

declare function DeleteCarriable(entity: number): void;

declare function DeleteCheckpoint(checkpoint: number): void;

declare function DeleteChildRope(ropeId: number): void;

/**
 * Deletes the specified entity, then sets the handle pointed to by the pointer to NULL.
 */
declare function DeleteEntity(entity: number): void;

/**
 * Must be called from a background script, otherwise it will do nothing.
 */
declare function DeleteEntity_2(entity: number): void;

declare function DeleteFunctionReference(referenceIdentity: string): void;

/**
 * Delete an incident with a given id.
 */
declare function DeleteIncident(incidentId: number): void;

declare function DeleteMissionTrain(train: number): void;

/**
 * Deletes the specified object, then sets the handle pointed to by the pointer to NULL.
 */
declare function DeleteObject(object: number): void;

declare function DeletePatrolRoute(patrolRoute: string): void;

/**
 * Deletes the specified ped, then sets the handle pointed to by the pointer to NULL.
 */
declare function DeletePed(ped: number): void;

declare function DeletePropSet(propSet: number, p1: boolean, p2: boolean): void;

declare function DeleteResourceKvp(key: string): void;

declare function DeleteRope(ropeId: number): void;

declare function DeleteScenarioPoint(scenario: number): void;

declare function DeleteScriptPopzone(popZone: number): void;

/**
 * Deletes a vehicle.
 * The vehicle must be a mission entity to delete, so call this before deleting: SET_ENTITY_AS_MISSION_ENTITY(vehicle, true, true);
 * eg how to use:
 * SET_ENTITY_AS_MISSION_ENTITY(vehicle, true, true);
 * DELETE_VEHICLE(&vehicle);
 * Deletes the specified vehicle, then sets the handle pointed to by the pointer to NULL.
 */
declare function DeleteVehicle(vehicle: number): void;

declare function DeleteVolume(volume: number): void;

/**
 * BOOL param indicates whether the cam should be destroyed if it belongs to the calling script.
 */
declare function DestroyAllCams(p0: boolean): void;

/**
 * BOOL param indicates whether the cam should be destroyed if it belongs to the calling script.
 */
declare function DestroyCam(cam: number, p1: boolean): void;

/**
 * Destroys a DUI browser.
 * @param duiObject The DUI browser handle.
 */
declare function DestroyDui(duiObject: number): void;

declare function DestroyItemset(itemset: number): void;

declare function DestroySwatchTextureDict(): void;

declare function DestroyTrackedPoint(point: number): void;

declare function DetachAnimScene(animScene: number): void;

declare function DetachAnimScenePreservingLocation(animScene: number): void;

declare function DetachCam(cam: number): void;

declare function DetachCarriableEntity(entity: number, p1: boolean, p2: boolean): void;

declare function DetachEntity(entity: number, p1: boolean, collision: boolean): void;

declare function DetachPortablePickupFromPed(pickupObject: number): void;

declare function DetachRopeFromEntity(ropeId: number, entity: number): void;

declare function DisableAllControlActions(padIndex: number): void;

declare function DisableAllLookAtRequests(ped: number, p1: number): void;

declare function DisableAmbientLookAtRequests(p0: number, p1: number): void;

declare function DisableAmbientRoadPopulation(unk: boolean): void;

declare function DisableAmmoTypeForPed(ped: number, ammoHash: string | number): void;

declare function DisableAmmoTypeForPedWeapon(ped: number, weaponHash: string | number, ammoHash: string | number): void;

/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 */
declare function DisableAttributeOverpower(ped: number, attributeIndex: number): void;

declare function DisableCamCollisionForEntity(entity: number): void;

declare function DisableCamCollisionForObject(entity: number): void;

declare function DisableControlAction(padIndex: number, control: string | number, disable: boolean): void;

declare function DisableEntitymask(): void;

declare function DisableFirstPersonCamThisFrame(): void;

/**
 * Does the same as 0x9C473089A934C930
 */
declare function DisableFirstPersonCamThisFrame_2(): void;

declare function DisableFrontendThisFrame(): void;

declare function DisableGuardZone(name: string): void;

declare function DisableInterior(interior: number, toggle: boolean): void;

declare function DisableLootingCompositeLootableThisFrame(composite: number, p1: boolean): void;

declare function DisablePedPainAudio(ped: number, toggle: boolean): void;

/**
 * Inhibits the player from using any method of combat including melee and firearms.
 * NOTE: Only disables the firing for one frame
 */
declare function DisablePlayerFiring(player: number, toggle: boolean): void;

declare function DisableScriptBrainSet(brainSet: number): void;

declare function DisableStaticVegModifier(p0: string | number): void;

declare function DisableVehicleFirstPersonCamThisFrame(): void;

declare function DisableVehicleWeapon(
  disabled: boolean,
  weaponHash: string | number,
  vehicle: number,
  owner: number,
): void;

/**
 * Must be called every frame to take full effect.
 */
declare function DisableWaterLookup(): void;

/**
 * If Hud should be displayed
 */
declare function DisplayHud(toggle: boolean): void;

declare function DisableHudContext(component: string | number): void;

declare function DisplayLoadingScreens(
  p0: string | number,
  p1: string | number,
  p2: string | number,
  gamemodeName: string,
  title: string,
  subtitle: string,
): void;

/**
 * enum eOnscreenKeyboardTextType
 * {
 * KTEXTTYPE_INVALID = -1,
 * KTEXTTYPE_DEFAULT,
 * KTEXTTYPE_EMAIL,
 * KTEXTTYPE_PASSWORD,
 * KTEXTTYPE_NUMERIC,
 * KTEXTTYPE_ALPHABET,
 * KTEXTTYPE_GAMERTAG,
 * KTEXTTYPE_FILENAME,
 * KTEXTTYPE_COUNT
 * };
 */
declare function DisplayOnscreenKeyboard(
  textType: number,
  windowTitle: string,
  p2: string,
  defaultText: string,
  defaultConcat1: string,
  defaultConcat2: string,
  defaultConcat3: string,
  maxInputLength: number,
): void;

/**
 * If Minimap / Radar should be displayed.
 */
declare function DisplayRadar(toggle: boolean): void;

/**
 * Note: you must use VAR_STRING
 * This native does nothing since build 1436, use _BG_DISPLAY_TEXT (0x16794E044C9EFB58) instead.
 */
declare function DisplayText(text: number, xPos: number, yPos: number): void;

/**
 * Fades the screen in.
 * duration: The time the fade should take, in milliseconds.
 */
declare function DoScreenFadeIn(duration: number): void;

/**
 * Fades the screen out.
 * duration: The time the fade should take, in milliseconds.
 */
declare function DoScreenFadeOut(duration: number): void;

declare function DoesAnimDictExist(animDict: string): boolean;

declare function DoesAnimSceneExist(animScene: number): boolean;

declare function DoesBlipExist(blip: number): boolean;

/**
 * Returns whether or not the passed camera handle exists.
 */
declare function DoesCamExist(cam: number): boolean;

declare function DoesCompressedGlobalBlockBufferExist(index: number): boolean;

declare function DoesEntityBelongToThisScript(entity: number, p1: boolean): boolean;

/**
 * Checks if the Entity exists
 */
declare function DoesEntityExist(entity: number): boolean;

declare function DoesEntityHaveBlip(entity: number): boolean;

declare function DoesEntityHaveDrawable(entity: number): boolean;

declare function DoesEntityHavePhysics(entity: number): boolean;

declare function DoesEntityWithIdExistInAnimScene(animScene: number, entityId: string): boolean;

declare function DoesExtraExist(vehicle: number, extraId: number): boolean;

declare function DoesGroupExist(groupId: number): boolean;

declare function DoesItemHaveValidBase(item: number): boolean;

declare function DoesMetapedOutfitExistForPedModel(outfit: string | number, model: string | number): boolean;

declare function DoesNavmeshBlockingObjectExist(p0: number): boolean;

declare function DoesNavmeshBlockingVolumeExist(volume: number): boolean;

declare function DoesObjectOfTypeExistAtCoords(
  x: number,
  y: number,
  z: number,
  radius: number,
  hash: string | number,
  p5: boolean,
): boolean;

declare function DoesParticleFxLoopedExist(ptfxHandle: number): boolean;

declare function DoesPickupExist(pickup: number): boolean;

declare function DoesPickupObjectExist(pickupObject: number): boolean;

declare function DoesPickupOfTypeExistInArea(
  pickupHash: string | number,
  x: number,
  y: number,
  z: number,
  radius: number,
): boolean;

declare function DoesPopMultiplierAreaExist(id: number): boolean;

declare function DoesPropSetExist(propSet: number): boolean;

declare function DoesPropSetOfTypeExistNearCoords(
  propsetHash: string | number,
  x: number,
  y: number,
  z: number,
): boolean;

declare function DoesRayfireMapObjectExist(object: number): boolean;

declare function DoesRopeExist(ropeId: number): boolean;

declare function DoesScenarioExistInArea(
  x: number,
  y: number,
  z: number,
  radius: number,
  p4: boolean,
  p5: number,
  p6: boolean,
): boolean;

declare function DoesScenarioGroupExist(scenarioGroup: string): boolean;

declare function DoesScenarioGroupExistHash(scenarioGroup: string | number): boolean;

declare function DoesScenarioOfTypeExistInAreaHash(
  x: number,
  y: number,
  z: number,
  typeHash: string | number,
  radius: number,
  p5: boolean,
): boolean;

declare function DoesScenarioPointExist(scenario: number): boolean;

declare function DoesScriptExist(scriptName: string): boolean;

declare function DoesScriptWithNameHashExist(scriptHash: string | number): boolean;

/**
 * Checks if there is a cover point at position
 */
declare function DoesScriptedCoverPointExistAtCoords(p0: number, p1: number, p2: number, p3: number): boolean;

declare function DoesStreamedTextureDictExist(textureDict: string): boolean;

declare function DoesStreamedTxdExist(txdHash: string | number): boolean;

declare function DoesStringExistInString(string1: string, string2: string): boolean;

declare function DoesTextBlockExist(textDatabase: string): boolean;

/**
 * Checks if the passed gxt name exists in the game files.
 */
declare function DoesTextLabelExist(label: string): boolean;

declare function DoesThreadExist(threadId: number): boolean;

declare function DoesVehicleHaveAnyLightPropSet(vehicle: number): boolean;

declare function DoesVehicleHaveAnyPropSet(vehicle: number): boolean;

declare function DoesVolumeCollideWithAnyVolumeLock(
  x: number,
  y: number,
  z: number,
  radius: number,
  p4: boolean,
  p5: number,
  p6: number,
): boolean;

declare function DoesVolumeExist(volume: number): boolean;

declare function DominoesBuyIn(p0: number): number;

declare function DominoesPlaceDomino(p0: number, p1: number): number;

declare function DominoesRequestValidPlacements(p0: number): number;

/**
 * Returns a list of door system entries: a door system hash (see [ADD_DOOR_TO_SYSTEM](#\_0x6F8838D03D1DC226)) and its object handle.
 * The data returned adheres to the following layout:
 * ```
 * [{doorHash1, doorHandle1}, ..., {doorHashN, doorHandleN}]
 * ```
 * @return An object containing a list of door system entries.
 */
declare function DoorSystemGetActive(): any;

declare function DoorSystemGetDoorState(doorHash: string | number): number;

declare function DoorSystemGetOpenRatio(doorHash: string | number): number;

declare function DoorSystemGetSize(): number;

declare function DoorSystemSetAutomaticDistance(doorHash: string | number, distance: number): void;

declare function DoorSystemSetAutomaticRate(doorHash: string | number, rate: number): void;

/**
 * Door lock states:
 * enum eDoorState
 * {
 * DOORSTATE_INVALID = -1,
 * DOORSTATE_UNLOCKED,
 * DOORSTATE_LOCKED_UNBREAKABLE,
 * DOORSTATE_LOCKED_BREAKABLE,
 * DOORSTATE_HOLD_OPEN_POSITIVE,
 * DOORSTATE_HOLD_OPEN_NEGATIVE
 * };
 */
declare function DoorSystemSetDoorState(doorHash: string | number, state: number): void;

/**
 * Sets the ajar angle of a door.
 * Ranges from -1.0 to 1.0, and 0.0 is closed / default.
 */
declare function DoorSystemSetOpenRatio(doorHash: string | number, ajar: number, forceUpdate: boolean): void;

declare function DrawLightWithRange(
  posX: number,
  posY: number,
  posZ: number,
  colorR: number,
  colorG: number,
  colorB: number,
  range: number,
  intensity: number,
): void;

declare function DrawLowQualityPhotoToPhone(p0: boolean, p1: boolean): void;

declare function DrawMarker(
  _type: string | number,
  posX: number,
  posY: number,
  posZ: number,
  dirX: number,
  dirY: number,
  dirZ: number,
  rotX: number,
  rotY: number,
  rotZ: number,
  scaleX: number,
  scaleY: number,
  scaleZ: number,
  red: number,
  green: number,
  blue: number,
  alpha: number,
  bobUpAndDown: boolean,
  faceCamera: boolean,
  p19: number,
  rotate: boolean,
  textureDict: string,
  textureName: string,
  drawOnEnts: boolean,
): void;

/**
 * Draws a rectangle on the screen.
 * -x: The relative X point of the center of the rectangle. (0.0-1.0, 0.0 is the left edge of the screen, 1.0 is the right edge of the screen)
 * -y: The relative Y point of the center of the rectangle. (0.0-1.0, 0.0 is the top edge of the screen, 1.0 is the bottom edge of the screen)
 * -width: The relative width of the rectangle. (0.0-1.0, 1.0 means the whole screen width)
 * -height: The relative height of the rectangle. (0.0-1.0, 1.0 means the whole screen height)
 * -R: Red part of the color. (0-255)
 * -G: Green part of the color. (0-255)
 * -B: Blue part of the color. (0-255)
 * -A: Alpha part of the color. (0-255, 0 means totally transparent, 255 means totally opaque)
 */
declare function DrawRect(
  x: number,
  y: number,
  width: number,
  height: number,
  red: number,
  green: number,
  blue: number,
  alpha: number,
  p8: boolean,
  p9: boolean,
): void;

/**
 * Draws a 2D sprite on the screen.
 * Parameters:
 * textureDict - Name of texture dictionary to load texture from
 * textureName - Name of texture to load from texture dictionary
 * screenX/Y - Screen offset (0.5 = center)
 * scaleX/Y - Texture scaling. Negative values can be used to flip the texture on that axis. (0.5 = half)
 * heading - Texture rotation in degrees (default = 0.0) positive is clockwise, measured in degrees
 * red,green,blue - Sprite color (default = 255/255/255)
 * alpha - opacity level
 */
declare function DrawSprite(
  textureDict: string,
  textureName: string,
  screenX: number,
  screenY: number,
  width: number,
  height: number,
  heading: number,
  red: number,
  green: number,
  blue: number,
  alpha: number,
  p11: boolean,
): void;

declare function DrawTvChannel(
  xPos: number,
  yPos: number,
  xScale: number,
  yScale: number,
  rotation: number,
  red: number,
  green: number,
  blue: number,
  alpha: number,
): void;

declare function DropCurrentPedWeapon(ped: number, p1: boolean, p2: boolean, p3: boolean, p4: boolean): number;

declare function DuplicateFunctionReference(referenceIdentity: string): string;

declare function EagleEyeSetCustomEntityTint(entity: number, red: number, green: number, blue: number): void;

declare function EnableAmbientRoadPopulation(): void;

declare function EnableAmmoTypeForPed(ped: number, weaponHash: string | number): void;

declare function EnableAmmoTypeForPedWeapon(ped: number, weaponHash: string | number, ammoHash: string | number): void;

/**
 * coreIndex: see _SET_ATTRIBUTE_CORE_VALUE
 * Previously incorrectly named ENABLE_ATTRIBUTE_OVERPOWER
 */
declare function EnableAttributeCoreOverpower(ped: number, coreIndex: number, value: number, makeSound: boolean): void;

/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 * Old name: _SET_ATTRIBUTE_OVERPOWER_VALUE
 */
declare function EnableAttributeOverpower(ped: number, attributeIndex: number, value: number, makeSound: boolean): void;

declare function EnableControlAction(padIndex: number, control: string | number, enable: boolean): void;

/**
 * enum DispatchType
 * {
 * DT_Invalid,
 * DT_PoliceAutomobile,
 * DT_PoliceHelicopter,
 * DT_FireDepartment,
 * DT_SwatAutomobile,
 * DT_AmbulanceDepartment,
 * DT_PoliceRiders,
 * DT_PoliceVehicleRequest,
 * DT_PoliceRoadBlock,
 * DT_PoliceAutomobileWaitPulledOver,
 * DT_PoliceAutomobileWaitCruising,
 * DT_Gangs,
 * DT_SwatHelicopter,
 * DT_PoliceBoat,
 * DT_ArmyVehicle,
 * DT_OnFoot,
 * DT_PoliceDogs
 * };
 */
declare function EnableDispatchService(dispatchService: number, toggle: boolean): void;

declare function EnableEntitymask(): void;

/**
 * nullsub, doesn't do anything
 */
declare function EnableMovieSubtitles(toggle: boolean): void;

declare function EnableScriptBrainSet(brainSet: number): void;

declare function EnableStaticVegModifier(p0: string | number): void;

declare function EnableWaterLookup(): void;

declare function EndFindKvp(handle: number): void;

declare function EndFindObject(findHandle: number): void;

declare function EndFindPed(findHandle: number): void;

declare function EndFindPickup(findHandle: number): void;

declare function EndFindVehicle(findHandle: number): void;

declare function EndPetrolTrailDecals(): void;

declare function EndSrl(): void;

declare function EventQueueIsEmpty(hash: string | number): boolean;

declare function EventQueuePop(hash: string | number): void;

/**
 * eventData:
 * struct UI_SCRIPT_EVENT
 * {
 * alignas(8) eUIScriptEventType eventType; // https://alloc8or.re/rdr3/doc/enums/eUIScriptEventType.txt
 * alignas(8) int intParam;
 * alignas(8) Hash hashParam;
 * alignas(8) Hash datastoreParam;
 * };
 * Old name: _EVENT_MANAGER_GET_EVENT
 */
declare function EventsUiGetMessage(hash: string | number, eventData?: number): [boolean, number];

/**
 * Old name: _EVENT_MANAGER_IS_EVENT_PENDING
 */
declare function EventsUiIsPending(hash: string | number): boolean;

/**
 * eventData: see EVENTS_UI_GET_MESSAGE
 * Old name: _EVENT_MANAGER_PEEK_EVENT
 */
declare function EventsUiPeekMessage(hash: string | number, eventData: DataView): boolean;

/**
 * Old name: _EVENT_MANAGER_POP_EVENT
 */
declare function EventsUiPopMessage(hash: string | number): void;

declare function ExecuteCommand(commandString: string): void;

/**
 * This native is not implemented.
 */
declare function ExperimentalLoadCloneCreate(data: string, objectId: number, tree: string): number;

/**
 * This native is not implemented.
 */
declare function ExperimentalLoadCloneSync(entity: number, data: string): void;

/**
 * This native is not implemented.
 */
declare function ExperimentalSaveCloneCreate(entity: number): string;

/**
 * This native is not implemented.
 */
declare function ExperimentalSaveCloneSync(entity: number): string;

/**
 * Forces the ped to fall back and kills it.
 * It doesn't really explode the ped's head but it kills the ped
 */
declare function ExplodePedHead(ped: number, weaponHash: string | number): void;

/**
 * Explodes a selected vehicle.
 * Vehicle vehicle = Vehicle you want to explode.
 * BOOL isAudible = If explosion makes a sound.
 * BOOL isInvisible = If the explosion is invisible or not.
 * First BOOL does not give any visual explosion, the vehicle just falls apart completely but slowly and starts to burn.
 */
declare function ExplodeVehicle(
  vehicle: number,
  isAudible: boolean,
  isInvisible: boolean,
  p3: number,
  p4: number,
): void;

declare function FadeAndDestroyPed(ped: number): void;

declare function FadeAnimSceneAudioIn(animScene: number, p1: number): void;

declare function FadeAnimSceneAudioOut(animScene: number, p1: number): void;

declare function FindAllAttachedCarriableEntities(ped: number, itemset: number): void;

declare function FindAnimEventPhase(animDictionary: string, animName: string, p2: string): [boolean, number, number];

declare function FindClosestGpsPosition(x: number, y: number, z: number): [boolean, number[]];

declare function FindFirstObject(outEntity: number): [number, number];

declare function FindFirstPed(outEntity: number): [number, number];

declare function FindFirstPickup(outEntity: number): [number, number];

declare function FindFirstVehicle(outEntity: number): [number, number];

declare function FindKvp(handle: number): string;

declare function FindNextObject(findHandle: number, outEntity?: number): [boolean, number];

declare function FindNextPed(findHandle: number, outEntity?: number): [boolean, number];

declare function FindNextPickup(findHandle: number, outEntity?: number): [boolean, number];

declare function FindNextVehicle(findHandle: number, outEntity?: number): [boolean, number];

declare function FindScenarioOfTypeHash(
  xPos: number,
  yPos: number,
  zPos: number,
  scenarioType: string | number,
  distance: number,
  p5: number,
  p6: boolean,
): number;

declare function FireSingleBullet(args: number): void;

declare function Floor(value: number): number;

declare function ForceCinematicRenderingThisUpdate(p0: boolean): void;

declare function ForceCleanup(cleanupFlags: number): void;

declare function ForceCleanupForAllThreadsWithThisName(name: string, cleanupFlags: number): void;

declare function ForceCleanupForThreadWithThisId(id: number, cleanupFlags: number): void;

declare function ForceEntityAiAndAnimationUpdate(entity: number, p1: boolean): void;

/**
 * creates single lightning+thunder at random position
 */
declare function ForceLightningFlash(): void;

/**
 * p3 is always -1.0f in the scripts
 */
declare function ForceLightningFlashAtCoords(x: number, y: number, z: number): void;

declare function ForcePedAiAndAnimationUpdate(ped: number, p1: boolean, p2: boolean): void;

/**
 * motionStateHash:
 * enum eMotionState : Hash
 * {
 * MotionState_ActionMode_Idle = 0xDA40A0DC,
 * MotionState_ActionMode_Run = 0x31BADE14,
 * MotionState_ActionMode_Walk = 0xD2905EA7,
 * MotionState_Aiming = 0x3F67C6AF,
 * MotionState_Crouch_Idle = 0x43FB099E,
 * MotionState_Crouch_Jog = 0x6CB208A0,
 * MotionState_Crouch_Run = 0x3593CF09,
 * MotionState_Crouch_Walk = 0x08C31A98,
 * MotionState_Diving_Idle = 0x4848CDED,
 * MotionState_Idle = 0x9072A713,
 * MotionState_Jog = 0xABA49932,
 * MotionState_None = 0xEE717723,
 * MotionState_Run = 0xFFF7E7A4,
 * MotionState_RunStop = 0xECB32E00,
 * MotionState_Sprint = 0xBD8817DB,
 * MotionState_SprintStop = 0xDEBA9A6E,
 * MotionState_Swimming_TreadWater = 0xD1BF11C7,
 * MotionState_Walk = 0xD827C3DB,
 * MotionState_WalkStop = 0x3DFCD7A3
 * };
 */
declare function ForcePedMotionState(
  ped: number,
  motionStateHash: string | number,
  p2: boolean,
  p3: number,
  p4: boolean,
): boolean;

declare function ForcePickupRegenerate(p0: number): void;

/**
 * Often called after START_PLAYBACK_RECORDED_VEHICLE and SKIP_TIME_IN_PLAYBACK_RECORDED_VEHICLE; similar in use to FORCE_ENTITY_AI_AND_ANIMATION_UPDATE.
 */
declare function ForcePlaybackRecordedVehicleUpdate(vehicle: number, p1: boolean): void;

declare function ForceRoomForEntity(entity: number, interior: number, roomHashKey: string | number): void;

declare function ForceRoomForGameViewport(interiorID: number, roomHashKey: string | number): void;

declare function ForceScenarioGroupPriority(p0: number, p1: number): void;

/**
 * Doesn't actually return anything.
 */
declare function ForceSonarBlipsThisFrame(): number;

declare function ForceVehicleEngineAudio(vehicle: number, audioName: string): void;

declare function FormatPlayerNameString(_string: string): string;

declare function FreeMemoryForHighQualityPhoto(): void;

declare function FreeMemoryForLowQualityPhoto(): void;

declare function FreeMemoryForMissionCreatorPhoto(): void;

declare function FreezeEntityPosition(entity: number, toggle: boolean): void;

declare function FreezeGameplayCamThisFrame(): void;

declare function FreezePedCameraRotation(ped: number): void;

declare function GameFrameworkManagerGetMode(): number;

declare function GameFrameworkManagerInit(transitionMode: string | number): boolean;

declare function GameFrameworkManagerShutdown(): void;

/**
 * Example:
 * local hash = GetHashKey("CLOTHING_ITEM_M_EYES_001_TINT_001")
 * _GENERATE_SWATCH_TEXTURE(0, hash, 0, true)
 */
declare function GenerateSwatchTexture(slotId: number, componentHash: string | number, p2: number, p3: boolean): void;

/**
 * Example: https://pastebin.com/tTgpER9A
 */
declare function GenerateSwatchTextureDirectly(slot: number, p1: number): void;

/**
 * Returns all player indices for 'active' physical players known to the client.
 * The data returned adheres to the following layout:
 * ```
 * [127, 42, 13, 37]
 * ```
 * @return An object containing a list of player indices.
 */
declare function GetActivePlayers(): any;

declare function GetActiveVehicleMissionType(vehicle: number): number;

/**
 * Returns all rope handles. The data returned adheres to the following layout:
 * ```
 * [ 770, 1026, 1282, 1538, 1794, 2050, 2306, 2562, 2818, 3074, 3330, 3586, 3842, 4098, 4354, 4610, ...]
 * ```
 * @return An object containing a list of all rope handles.
 */
declare function GetAllRopes(): any;

declare function GetAllowDualWield(ped: number): boolean;

declare function GetAmmoInClip(ped: number, weaponHash: string | number): [boolean, number];

declare function GetAmmoInClipByInventoryUid(ped: number): [boolean, number, number];

declare function GetAmmoInPedWeapon(ped: number, weaponHash: string | number): number;

declare function GetAmmoTypeForWeapon(weaponHash: string | number): number;

declare function GetAngleBetween_2dVectors(x1: number, y1: number, x2: number, y2: number): number;

declare function GetAnimDuration(animDict: string, animName: string): number;

declare function GetAnimInitialOffsetPosition(
  animDict: string,
  animName: string,
  x: number,
  y: number,
  z: number,
  xRot: number,
  yRot: number,
  zRot: number,
  p8: number,
  p9: number,
): number[];

declare function GetAnimInitialOffsetRotation(
  animDict: string,
  animName: string,
  x: number,
  y: number,
  z: number,
  xRot: number,
  yRot: number,
  zRot: number,
  p8: number,
  p9: number,
): number[];

declare function GetAnimSceneBool(animScene: number, name: string): boolean;

declare function GetAnimSceneCurrentActiveCameraCount(animScene: number): number;

declare function GetAnimSceneDuration(animScene: number): number;

declare function GetAnimSceneEntityLocationData(
  animScene: number,
  entityName: string,
  p3: boolean,
  playbackListName: string,
  p5: number,
): [boolean, number[]];

declare function GetAnimSceneFloat(animScene: number, name: string): number;

declare function GetAnimSceneInt(animScene: number, name: string): number;

declare function GetAnimSceneObject(animScene: number, name: string, isNetwork: boolean): number;

declare function GetAnimSceneOrigin(animScene: number, order: number): [number[], number[]];

declare function GetAnimScenePed(animScene: number, name: string, isNetwork: boolean): number;

declare function GetAnimScenePhase(animScene: number): number;

declare function GetAnimSceneRate(animScene: number): number;

declare function GetAnimSceneTime(animScene: number): number;

declare function GetAnimSceneVehicle(animScene: number, name: string, isNetwork: boolean): number;

/**
 * enum eAnimalRarityLevel
 * {
 * ARL_COMMON,
 * ARL_RARE,
 * ARL_LEGENDARY,
 * ARL_NUMRARITYLEVELS
 * };
 */
declare function GetAnimalRarity(ped: number): number;

declare function GetAnimalTuningBoolParam(animal: number, p1: number): boolean;

declare function GetAnimalTuningFloatParam(animal: number, p1: number): number;

/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 */
declare function GetAttributeBaseRank(ped: number, attributeIndex: number): number;

/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 */
declare function GetAttributeBonusRank(ped: number, coreIndex: number): number;

declare function GetAttributeCoreOverpowerSecondsLeft(ped: number, coreIndex: number): number;

/**
 * Gets the ped's core value on a scale of 0 to 100.
 * coreIndex: see _SET_ATTRIBUTE_CORE_VALUE
 */
declare function GetAttributeCoreValue(ped: number, coreIndex: number): number;

declare function GetAttributeOverpowerSecondsLeft(ped: number, attributeIndex: number): number;

/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 */
declare function GetAttributePoints(ped: number, attributeIndex: number): number;

/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 */
declare function GetAttributeRank(ped: number, attributeIndex: number): number;

/**
 * Returns value of the '-benchmarkIterations' command line option.
 */
declare function GetBenchmarkIterationsFromCommandLine(): number;

/**
 * Returns value of the '-benchmarkPass' command line option.
 */
declare function GetBenchmarkPassFromCommandLine(): number;

declare function GetBenchmarkTime(): number;

declare function GetBestPedShortarmGuid(ped: number, p2: boolean, p3: boolean): number;

declare function GetBestPedWeapon(ped: number, p1: boolean, p2: boolean): number;

declare function GetBitsInRange(_var: number, rangeStart: number, rangeEnd: number): number;

declare function GetBlipCoords(blip: number): number[];

/**
 * Returns the Blip handle of given Entity.
 */
declare function GetBlipFromEntity(entity: number): number;

declare function GetBlockOfPlayerBits(p1: number): [number, number];

declare function GetBountyForPlayer(player: number): number;

declare function GetBreakableVehicleLockObject(vehicle: number, index: number): number;

declare function GetBreakableVehicleLocksState(vehicle: number): number;

declare function GetCamCoord(cam: number): number[];

declare function GetCamFov(cam: number): number;

/**
 * Returns the world matrix of the specified camera. To turn this into a view matrix, calculate the inverse.
 */
declare function GetCamMatrix(camera: number): [number[], number[], number[], number[]];

declare function GetCamRot(cam: number, rotationOrder: number): number[];

/**
 * Can use this with SET_CAM_SPLINE_PHASE to set the float it this native returns.
 * (returns 1.0f when no nodes has been added, reached end of non existing spline)
 */
declare function GetCamSplinePhase(cam: number): number;

/**
 * enum eCarriableState
 * {
 * CARRIABLE_STATE_NONE,
 * CARRIABLE_STATE_TRANSITIONING_TO_HOGTIED,
 * CARRIABLE_STATE_CARRIABLE_INTRO,
 * CARRIABLE_STATE_CARRIABLE,
 * CARRIABLE_STATE_BEING_PICKED_UP_FROM_GROUND,
 * CARRIABLE_STATE_CARRIED_BY_HUMAN,
 * CARRIABLE_STATE_BEING_PLACED_ON_GROUND,
 * CARRIABLE_STATE_CARRIED_BY_MOUNT,
 * CARRIABLE_STATE_BEING_PLACED_ON_MOUNT,
 * CARRIABLE_STATE_BEING_PICKED_UP_FROM_MOUNT,
 * CARRIABLE_STATE_BEING_CUT_FREE,
 * CARRIABLE_STATE_BEING_PLACED_ON_GROUND_ESCAPE,
 * CARRIABLE_STATE_BEING_PLACED_IN_VEHICLE
 * };
 */
declare function GetCarriableEntityState(entity: number): number;

declare function GetCarriedAttachedInfoForSlot(p0: number, p1: number, p2: number, p3: number): number;

declare function GetCarrierAsHuman(entity: number): number;

declare function GetCarrierAsMount(entity: number): number;

declare function GetCarrierAsPed(entity: number): number;

declare function GetCauseOfMostRecentForceCleanup(): number;

declare function GetClockDayOfMonth(): number;

/**
 * Gets the current day of the week.
 * 0: Sunday
 * 1: Monday
 * 2: Tuesday
 * 3: Wednesday
 * 4: Thursday
 * 5: Friday
 * 6: Saturday
 */
declare function GetClockDayOfWeek(): number;

/**
 * Gets the current ingame hour, expressed without zeros. (09:34 will be represented as 9)
 */
declare function GetClockHours(): number;

/**
 * Gets the current ingame clock minute.
 */
declare function GetClockMinutes(): number;

declare function GetClockMonth(): number;

/**
 * Gets the current ingame clock second. Note that ingame clock seconds change really fast since a day in RDR is only 48 minutes in real life.
 */
declare function GetClockSeconds(): number;

declare function GetClockYear(): number;

declare function GetClosestFirePos(x: number, y: number, z: number): [boolean, number[]];

/**
 * isMission - if true doesn't return mission objects
 */
declare function GetClosestObjectOfType(
  x: number,
  y: number,
  z: number,
  radius: number,
  modelHash: string | number,
  isMission: boolean,
  p6: boolean,
  p7: boolean,
): number;

/**
 * Gets the closest ped in a radius.
 */
declare function GetClosestPed(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): boolean;

declare function GetClosestRoad(
  x: number,
  y: number,
  z: number,
  p3: number,
  p4: number,
  p10: boolean,
): [number, number[], number[], number, number, number];

declare function GetClosestVehicle(
  x: number,
  y: number,
  z: number,
  radius: number,
  modelHash: string | number,
  flags: number,
): number;

declare function GetClosestVehicleNode(
  x: number,
  y: number,
  z: number,
  nodeType: number,
  p5: number,
  p6: number,
): [boolean, number[]];

declare function GetClosestVehicleNodeWithHeading(
  x: number,
  y: number,
  z: number,
  nodeType: number,
  p6: number,
  p7: number,
): [boolean, number[], number];

declare function GetCloudTimeAsInt(): number;

/**
 * colorNameHash: https://alloc8or.re/rdr3/doc/enums/eColor.txt
 */
declare function GetColorFromName(colorNameHash: string | number): [number, number, number, number];

declare function GetCombatFloat(ped: number, p1: number): number;

declare function GetControlNormal(padIndex: number, control: string | number): number;

declare function GetControlUnboundNormal(padIndex: number, control: string | number): number;

declare function GetControlValue(padIndex: number, control: string | number): number;

declare function GetConvar(varName: string, default_: string): string;

declare function GetConvarInt(varName: string, default_: number): number;

declare function GetCoordsOfProjectileTypeWithinDistance(
  ped: number,
  weaponHash: string | number,
  distance: number,
  p4: boolean,
  mustBeOwnedByThisPed: boolean,
): [boolean, number[]];

/**
 * This native returns the currently used game's name.
 * @return The game name as a string, one of the following values: gta4, gta5, rdr3
 */
declare function GetCurrentGameName(): string;

/**
 * 0 = american (en-US)
 * 1 = french (fr-FR)
 * 2 = german (de-DE)
 * 3 = italian (it-IT)
 * 4 = spanish (es-ES)
 * 5 = brazilian (pt-BR)
 * 6 = polish (pl-PL)
 * 7 = russian (ru-RU)
 * 8 = korean (ko-KR)
 * 9 = chinesetrad (zh-TW)
 * 10 = japanese (ja-JP)
 * 11 = mexican (es-MX)
 * 12 = chinesesimp (zh-CN)
 */
declare function GetCurrentLanguage(): number;

declare function GetCurrentNumberOfLocalPhotos(): number;

declare function GetCurrentPedVehicleWeapon(ped: number, weaponHash?: number): [boolean, number];

/**
 * attachPoint: see SET_CURRENT_PED_WEAPON
 */
declare function GetCurrentPedWeapon(ped: number, p2: boolean, attachPoint: number, p4: boolean): [boolean, number];

declare function GetCurrentPedWeaponEntityIndex(ped: number, p1: number): number;

/**
 * Returns the name of the currently executing resource.
 * @return The name of the resource.
 */
declare function GetCurrentResourceName(): string;

declare function GetCurrentScriptedConversationLine(p0: string): number;

/**
 * Returns the peer address of the remote game server that the user is currently connected to.
 * @return The peer address of the game server (e.g. `127.0.0.1:30120`), or NULL if not available.
 */
declare function GetCurrentServerEndpoint(): string;

declare function GetCurrentStationForTrain(train: number): number;

declare function GetCurrentTargetForPed(ped: number): number;

declare function GetDeadPedPickupCoords(ped: number, p1: number, p2: number): number[];

declare function GetDeadeyeAbilityLevel(player: number): number;

/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 */
declare function GetDefaultAttributePointsNeededForRank(
  modelHash: string | number,
  attributeIndex: number,
  rank: number,
): number;

/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 */
declare function GetDefaultAttributeRank(ped: number, attributeIndex: number): number;

/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 */
declare function GetDefaultMaxAttributeRank(ped: number, attributeIndex: number): number;

declare function GetDefaultRelationshipGroupHash(modelHash: string | number): number;

declare function GetDisabledControlNormal(padIndex: number, control: string | number): number;

declare function GetDisabledControlUnboundNormal(padIndex: number, control: string | number): number;

declare function GetDiscoverableNameHashAndTypeForEntity(p0: number, p1: number): number;

/**
 * If useZ is false, only the 2D plane (X-Y) will be considered for calculating the distance.
 * Consider using this faster native instead: SYSTEM::VDIST - DVIST always takes in consideration the 3D coordinates.
 */
declare function GetDistanceBetweenCoords(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
  useZ: boolean,
): number;

declare function GetDraftAnimalCount(vehicle: number): [boolean, number, number];

/**
 * Returns rage::NumericLimits<float>::kMax (3.402823466e+38) if vehicle is not a valid vehicle of type VEHICLE_TYPE_DRAFT.
 */
declare function GetDraftVehicleDesiredSpeed(vehicle: number): number;

declare function GetDriverOfVehicle(vehicle: number): number;

/**
 * Returns the NUI window handle for a specified DUI browser object.
 * @param duiObject The DUI browser handle.
 * @return The NUI window handle, for use in e.g. CREATE_RUNTIME_TEXTURE_FROM_DUI_HANDLE.
 */
declare function GetDuiHandle(duiObject: number): string;

declare function GetEntitiesFromPropSet(propSet: number, itemSet: number, p2: number, p3: boolean, p4: boolean): number;

declare function GetEntityAlpha(entity: number): number;

declare function GetEntityAnimCurrentTime(entity: number, animDict: string, animName: string): number;

declare function GetEntityAttachedTo(entity: number): number;

declare function GetEntityBoneIndexByName(entity: number, boneName: string): number;

declare function GetEntityCanBeDamaged(entity: number): boolean;

/**
 * Returns zero if the entity is not a carriable
 */
declare function GetEntityCarryConfig(entity: number): number;

/**
 * flagId: see _SET_ENTITY_CARRYING_FLAG
 */
declare function GetEntityCarryingFlag(entity: number, flagId: number): boolean;

declare function GetEntityCollisionDisabled(entity: number): boolean;

/**
 * Gets the current coordinates for a specified entity.
 * `entity` = The entity to get the coordinates from.
 * `alive` = Unused by the game, potentially used by debug builds in order to assert whether or not an entity was alive.
 * If entity is a ped and it's in a vehicle or on a mount the coords of that entity are returned. Set 'realCoords' to true when you need the true ped coords.
 */
declare function GetEntityCoords(entity: number, alive?: boolean, realCoords?: boolean): number[];

/**
 * Gets the entity's forward vector.
 */
declare function GetEntityForwardVector(entity: string | number): number[];

/**
 * Gets the X-component of the entity's forward vector.
 */
declare function GetEntityForwardX(entity: number): number;

/**
 * Gets the Y-component of the entity's forward vector.
 */
declare function GetEntityForwardY(entity: number): number;

declare function GetEntityFromItem(item: number): number;

/**
 * Returns the heading of the entity in degrees. Also know as the "Yaw" of an entity.
 */
declare function GetEntityHeading(entity: number): number;

declare function GetEntityHealth(entity: number): number;

declare function GetEntityHealthFloat(entity: number): number;

declare function GetEntityHeight(
  entity: number,
  X: number,
  Y: number,
  Z: number,
  atTop: boolean,
  inWorldCoords: boolean,
): number;

declare function GetEntityHeightAboveGround(entity: number): number;

/**
 * explosionType: see ADD_EXPLOSION
 */
declare function GetEntityInsideExplosionArea(
  explosionType: number,
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
  radius: number,
): number;

/**
 * Returns the LOD distance of an entity.
 */
declare function GetEntityLodDist(entity: number): number;

declare function GetEntityMatrix(entity: number): [number[], number[], number[], number[]];

declare function GetEntityMaxHealth(entity: number, p1: boolean): number;

/**
 * Returns the model hash from the entity
 */
declare function GetEntityModel(entity: number): number;

declare function GetEntityPitch(entity: number): number;

declare function GetEntityPlayerIsFreeAimingAt(player: number, entity?: number): [boolean, number];

declare function GetEntityPopulationType(entity: number): number;

/**
 * Note: this native was removed in 1232 but added back in 1311
 */
declare function GetEntityProofs(entity: number): number;

/**
 * Displays the current ROLL axis of the entity [-180.0000/180.0000+]
 * (Sideways Roll) such as a vehicle tipped on its side
 */
declare function GetEntityRoll(entity: number): number;

declare function GetEntityRotation(entity: number, rotationOrder: number): number[];

declare function GetEntityScenarioPointIsAttachedTo(scenario: number): number;

declare function GetEntityScript(entity: number, argStruct?: number): [number, number];

/**
 * Result is in meters per second (m/s)
 */
declare function GetEntitySpeed(entity: number): number;

declare function GetEntitySpeedVector(entity: number, relative: boolean): number[];

/**
 * Get how much of the entity is submerged.  1.0f is whole entity.
 */
declare function GetEntitySubmergedLevel(entity: number): number;

/**
 * Returns:
 * 0 = no entity
 * 1 = ped
 * 2 = vehicle
 * 3 = object
 */
declare function GetEntityType(entity: number): number;

declare function GetEntityUprightValue(entity: number): number;

declare function GetEntityVelocity(p0: number, p1: number): number[];

/**
 * eventGroup: 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork), 2 = unk, 3 = unk, 4 = SCRIPT_EVENT_QUEUE_SCRIPT_ERRORS (CEventGroupScriptErrors)
 * Returns event name hash: https://alloc8or.re/rdr3/doc/enums/eEventType.txt
 */
declare function GetEventAtIndex(eventGroup: number, eventIndex: number): number;

/**
 * eventGroup: 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork), 2 = unk, 3 = unk, 4 = SCRIPT_EVENT_QUEUE_SCRIPT_ERRORS (CEventGroupScriptErrors)
 * Note: eventDataSize is NOT the size in bytes, it is the size determined by the SIZE_OF operator (RAGE Script operator, not C/C++ sizeof). That is, the size in bytes divided by 8 (script variables are always 8-byte aligned!).
 */
declare function GetEventData(
  eventGroup: number,
  eventIndex: number,
  eventData: DataView,
  eventDataSize: number,
): [boolean, number];

/**
 * eventGroup: 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork), 2 = unk, 3 = unk, 4 = SCRIPT_EVENT_QUEUE_SCRIPT_ERRORS (CEventGroupScriptErrors)
 */
declare function GetEventExists(eventGroup: number, eventIndex: number): boolean;

/**
 * A getter for [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938), but for a specified resource.
 * @param resource The resource to fetch from.
 * @param key The key to fetch
 * @return A float that contains the value stored in the Kvp or nil/null if none.
 */
declare function GetExternalKvpFloat(resource: string, key: string): number;

/**
 * A getter for [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8), but for a specified resource.
 * @param resource The resource to fetch from.
 * @param key The key to fetch
 * @return A int that contains the value stored in the Kvp or nil/null if none.
 */
declare function GetExternalKvpInt(resource: string, key: string): number;

/**
 * A getter for [SET_RESOURCE_KVP](#\_0x21C7A35B), but for a specified resource.
 * @param resource The resource to fetch from.
 * @param key The key to fetch
 * @return A string that contains the value stored in the Kvp or nil/null if none.
 */
declare function GetExternalKvpString(resource: string, key: string): string;

declare function GetFinalRenderedCamCoord(): number[];

declare function GetFinalRenderedCamFov(): number;

declare function GetFinalRenderedCamRot(rotationOrder: number): number[];

declare function GetFirstEntityPedIsCarrying(ped: number): number;

declare function GetFirstPersonAimCamZoomFactor(): number;

declare function GetFrameCount(): number;

declare function GetFrameTime(): number;

/**
 * Returns the internal build number of the current game being executed.
 * Possible values:
 * *   FiveM
 * *   1604
 * *   2060
 * *   2189
 * *   2372
 * *   RedM
 * *   1311
 * *   1355
 * *   1436
 * *   LibertyM
 * *   43
 * *   FXServer
 * *   0
 * @return The build number, or **0** if no build number is known.
 */
declare function GetGameBuildNumber(): number;

/**
 * Return example: 1207.69_dev_pc
 */
declare function GetGameBuildString(): string;

/**
 * Returns the current game being executed.
 * Possible values:
 * | Return value | Meaning                        |
 * | ------------ | ------------------------------ |
 * | `fxserver`   | Server-side code ('Duplicity') |
 * | `fivem`      | FiveM for GTA V                |
 * | `libertym`   | LibertyM for GTA IV            |
 * | `redm`       | RedM for Red Dead Redemption 2 |
 * @return The game the script environment is running in.
 */
declare function GetGameName(): string;

/**
 * Returns all pool handles for the given pool name; the data returned adheres to the following layout:
 * ```
 * [ 770, 1026, 1282, 1538, 1794, 2050, 2306, 2562, 2818, 3074, 3330, 3586, 3842, 4098, 4354, 4610, ...]
 * ```
 * ### Supported Pools
 * **1**: CPed\
 * **2**: CObject\
 * **3**: CVehicle\
 * **4**: CPickup
 * @return An object containing a list of all pool handles
 */
declare function GetGamePool(poolname: string): any;

declare function GetGameTimer(): number;

/**
 * Returns rage::fwTimer::sm_nonScaledClippedTime
 */
declare function GetGameTimerNonScaledClipped(): number;

declare function GetGameplayCamCoord(): number[];

declare function GetGameplayCamFov(): number;

declare function GetGameplayCamRelativeHeading(): number;

declare function GetGameplayCamRelativePitch(): number;

declare function GetGameplayCamRot(rotationOrder: number): number[];

declare function GetGlobalBlockCanBeAccessed(index: number): boolean;

declare function GetGpsBlipRouteFound(): boolean;

declare function GetGpsBlipRouteLength(): number;

declare function GetGroundZAndNormalFor_3dCoord(x: number, y: number, z: number): [boolean, number, number[]];

declare function GetGroundZFor_3dCoord(x: number, y: number, z: number, p4: boolean): [boolean, number];

declare function GetGroupFormation(groupId: number): number;

declare function GetGroupSize(groupID: number): [any /* actually bool */, number];

declare function GetHasPlayerDiscoveredCharacterNameMp(p0: number): boolean;

/**
 * Computes a hash for the given string. It is hashed using Jenkins' One-at-a-Time hash algorithm (https://en.wikipedia.org/wiki/Jenkins_hash_function)
 * Note: this implementation is case-insensitive.
 */
declare function GetHashKey(_string: string): number;

declare function GetHashOfThisScriptName(): number;

declare function GetHashOfThread(threadId: number): number;

/**
 * dx = x1 - x2
 * dy = y1 - y2
 */
declare function GetHeadingFromVector_2d(dx: number, dy: number): number;

declare function GetHeightmapBottomZForPosition(left: number, right: number): number;

/**
 * See _REPORT_CRIME
 */
declare function GetHudPlayerCrimeType(player: number): number;

declare function GetHudScreenPositionFromWorldPosition(
  worldX: number,
  worldY: number,
  worldZ: number,
): [boolean, number, number];

declare function GetIdOfThisThread(): number;

declare function GetImapPositionAndHeading(imapHash: string | number): [boolean, number[], number];

declare function GetIndexedItemInItemset(itemset: number, p1: number): number;

declare function GetIndexedScenarioPointIndexInItemset(itemset: number, p1: number): number;

declare function GetInstanceId(): number;

declare function GetInteriorAtCoords(x: number, y: number, z: number): number;

declare function GetInteriorAtCoordsWithType(x: number, y: number, z: number, interiorType: string): number;

/**
 * Hashed version of GET_INTERIOR_AT_COORDS_WITH_TYPE
 */
declare function GetInteriorAtCoordsWithTypehash(x: number, y: number, z: number, typeHash: string | number): number;

declare function GetInteriorEntitiesExtents(interiorId: number): [number, number, number, number, number, number];

declare function GetInteriorFromCollision(x: number, y: number, z: number): number;

/**
 * Returns the handle of the interior that the entity is in. Returns 0 if outside.
 */
declare function GetInteriorFromEntity(entity: number): number;

declare function GetInteriorFromGameViewport(): number;

declare function GetInteriorInfo(interior: number): [number[], number];

declare function GetInteriorMinimapHash(interior: number): number;

declare function GetInteriorPortalCornerPosition(
  interiorId: number,
  portalIndex: number,
  cornerIndex: number,
): [number, number, number];

declare function GetInteriorPortalCount(interiorId: number): number;

declare function GetInteriorPortalFlag(interiorId: number, portalIndex: number): number;

declare function GetInteriorPortalRoomFrom(interiorId: number, portalIndex: number): number;

declare function GetInteriorPortalRoomTo(interiorId: number, portalIndex: number): number;

declare function GetInteriorPosition(interiorId: number): [number, number, number];

declare function GetInteriorPosition(interior: number): number[];

declare function GetInteriorRoomCount(interiorId: number): number;

declare function GetInteriorRoomExtents(
  interiorId: number,
  roomIndex: number,
): [number, number, number, number, number, number];

declare function GetInteriorRoomFlag(interiorId: number, roomIndex: number): number;

declare function GetInteriorRoomIndexByHash(interiorId: number, roomHash: number): number;

declare function GetInteriorRoomName(interiorId: number, roomIndex: number): string;

declare function GetInteriorRoomTimecycle(interiorId: number, roomIndex: number): number;

declare function GetInteriorRotation(interiorId: number): [number, number, number, number];

declare function GetInvokingResource(): string;

declare function GetIsAnimal(entity: number): boolean;

declare function GetIsBird(entity: number): boolean;

declare function GetIsCarriableEntity(entity: number): boolean;

declare function GetIsCarriablePelt(entity: number): boolean;

declare function GetIsLoadingScreenActive(): boolean;

declare function GetIsPedAimingInTheAir(ped: number): boolean;

declare function GetIsPlayerUiPromptActive(player: number, p1: number): boolean;

declare function GetIsPredator(entity: number): boolean;

declare function GetIsTaskActive(ped: number, taskIndex: number): boolean;

declare function GetIsWaypointRecordingLoaded(name: string): boolean;

declare function GetItemInteractionFromPed(ped: number): number;

/**
 * 0 = invalid
 * 1 = CEntity
 * 2 = rage::volBase
 * 3 = rage::volSphere
 * 4 = rage::volBox
 * 5 = rage::volAggregate
 * 6 = rage::volCylinder
 * 7 = CScriptedCoverPoint
 * 8 = rage::ptfxScriptInfo
 * 9 = CPed
 * 10 = CVehicle
 * 11 = CObject
 * 12 = CItemSet
 * 13 = CPersistentCharacter
 */
declare function GetItemType(handle: number): number;

declare function GetItemsetSize(itemset: number): number;

declare function GetJackTarget(ped: number): number;

/**
 * Seems to do the exact same as INTERIOR::GET_ROOM_KEY_FROM_ENTITY
 */
declare function GetKeyForEntityInRoom(entity: number): number;

/**
 * Gets a string literal from a label name.
 */
declare function GetLabelText(labelName: string): string;

declare function GetLabelText_2(label: string): string;

declare function GetLassoTarget(ped: number): number;

declare function GetLassoerOfPed(ped: number): number;

declare function GetLastDrivenVehicle(): number;

declare function GetLastMount(ped: number): number;

/**
 * seatIndex: see CREATE_PED_INSIDE_VEHICLE
 */
declare function GetLastPedInVehicleSeat(vehicle: number, seatIndex: number): number;

declare function GetLastVehicleDraftHorseWasAttachedTo(horse: number): number;

declare function GetLaunchParamExists(paramName: string): boolean;

declare function GetLaunchParamString(): string;

declare function GetLaunchParamValue(paramName: string): string;

declare function GetLedHorseFromPed(ped: number): number;

/**
 * Returns the length of the string passed (much like strlen).
 */
declare function GetLengthOfLiteralString(_string: string): number;

declare function GetLengthOfLiteralStringInBytes(_string: string): number;

/**
 * Event names in the scripts: MGBegin, MGEnd, ReadyForCut
 */
declare function GetLootingEventHasFired(ped: number, eventName: string): boolean;

/**
 * lootFlag: see SET_LOOTING_FLAG
 */
declare function GetLootingFlag(ped: number, lootFlag: number): boolean;

declare function GetLootingPickupTargetEntity(ped: number): number;

declare function GetMainPlayerBlipId(): number;

/**
 * Returns name hash, see common:/data/levels/rdr3/mapzones.meta
 * type (-1 matches any type):
 * class CMapZone
 * {
 * public:
 * enum class Type
 * {
 * STATE,
 * TOWN,
 * LAKE,
 * RIVER,
 * OIL_SPILL,
 * SWAMP,
 * OCEAN,
 * CREEK,
 * POND,
 * GLACIER,
 * DISTRICT,
 * TEXT_PRINTED,
 * TEXT_WRITTEN
 * };
 * };
 */
declare function GetMapZoneAtCoords(x: number, y: number, z: number, _type: number): number;

/**
 * Returns the zoom level data by index from mapzoomdata.meta file.
 * @param index Zoom level index.
 * @param zoomScale fZoomScale value.
 * @param zoomSpeed fZoomSpeed value.
 * @param scrollSpeed fScrollSpeed value.
 * @param tilesX vTiles X.
 * @param tilesY vTiles Y.
 * @return A boolean indicating TRUE if the data was received successfully.
 */
declare function GetMapZoomDataLevel(index: number): [boolean, number, number, number, number, number];

declare function GetMatchingEntities(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function GetMaxAmmo(ped: number, weaponHash: string | number): [boolean, number];

declare function GetMaxAmmoInClip(ped: number, weaponHash: string | number, p2: boolean): number;

/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 */
declare function GetMaxAttributePoints(ped: number, attributeIndex: number): number;

/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 */
declare function GetMaxAttributeRank(ped: number, attributeIndex: number): number;

declare function GetMaxNumInstructions(): number;

/**
 * Always returns 60
 */
declare function GetMaxNumNetworkObjects(): number;

/**
 * Always returns 110
 */
declare function GetMaxNumNetworkPeds(): number;

/**
 * Always returns 80
 */
declare function GetMaxNumNetworkPickups(): number;

/**
 * Always returns 40
 */
declare function GetMaxNumNetworkVehicles(): number;

/**
 * Always returns 200.
 */
declare function GetMaxNumberOfLocalPhotos(): number;

/**
 * Gets the maximum wanted level the player can get.
 * Ranges from 0 to 5.
 */
declare function GetMaxWantedLevel(): number;

declare function GetMeleeTargetForPed(ped: number): number;

declare function GetMetaPedAssetGuids(ped: number, index: number): [number, number, number, number];

declare function GetMetaPedAssetTint(ped: number, index: number): [number, number, number, number];

/**
 * enum eMetaPedType
 * {
 * MPT_MALE,
 * MPT_FEMALE,
 * MPT_TEEN,
 * MPT_ANIMAL,
 * MPT_NONE
 * };
 */
declare function GetMetaPedType(ped: number): number;

declare function GetMillisecondsPerGameMinute(): number;

declare function GetMissionFlag(): boolean;

declare function GetModelDimensions(modelHash: string | number): [number[], number[]];

declare function GetMount(ped: number): number;

declare function GetMountOwnedByPlayer(player: number): number;

declare function GetMusicPlaytime(): number;

declare function GetNamedRendertargetRenderId(name: string): number;

declare function GetNearestParticipantToEntity(entity: number): number;

declare function GetNearestPlayerToEntity(entity: number, playerPedToIgnore: number, flags: number): number;

declare function GetNearestPlayerToEntityOnTeam(
  entity: number,
  team: number,
  playerPedToIgnore: number,
  flags: number,
): number;

declare function GetNearestTrainTrackPosition(x: number, y: number, z: number): number[];

declare function GetNetworkTime(): number;

declare function GetNetworkTimeAccurate(): number;

declare function GetNextWeatherTypeHashName(): number;

declare function GetNoLoadingScreen(): boolean;

declare function GetNthClosestVehicleNode(
  x: number,
  y: number,
  z: number,
  nthClosest: number,
  unknown1: number,
  unknown2: number,
  unknown3: number,
): [boolean, number[]];

declare function GetNthClosestVehicleNodeFavourDirection(
  x: number,
  y: number,
  z: number,
  desiredX: number,
  desiredY: number,
  desiredZ: number,
  nthClosest: number,
  nodetype: number,
  p10: number,
  p11: number,
): [boolean, number[], number];

declare function GetNthClosestVehicleNodeId(
  x: number,
  y: number,
  z: number,
  nth: number,
  nodetype: number,
  p5: number,
  p6: number,
): number;

declare function GetNthClosestVehicleNodeIdWithHeading(
  x: number,
  y: number,
  z: number,
  nthClosest: number,
  outHeading: number,
  p6: number,
  p7: number,
  p8: number,
): [boolean, number[]];

declare function GetNthClosestVehicleNodeWithHeading(
  x: number,
  y: number,
  z: number,
  nthClosest: number,
  unknown2: number,
  unknown3: number,
  unknown4: number,
): [boolean, number[], number, number];

declare function GetNuiCursorPosition(): [number, number];

declare function GetNumBreakableVehicleLockObjects(vehicle: number): number;

declare function GetNumComponentsInPed(ped: number): number;

declare function GetNumCreatedMissionObjects(p0: boolean): number;

declare function GetNumCreatedMissionPeds(p0: boolean): number;

declare function GetNumCreatedMissionPickups(p0: boolean): number;

declare function GetNumCreatedMissionVehicles(p0: boolean): number;

declare function GetNumFreeSlotsInPedPool(): number;

declare function GetNumMetaPedOutfits(ped: number): number;

declare function GetNumModelsInPopulationSet(popSetHash: string | number): number;

/**
 * Note: this native was added in build 1311.16
 */
declare function GetNumPeerNegotiationResponses(): number;

declare function GetNumReservedAmbientPedsDesired(): number;

declare function GetNumReservedAmbientPedsReady(): number;

/**
 * p0 appears to be for MP
 */
declare function GetNumReservedMissionObjects(p0: boolean): number;

/**
 * p0 appears to be for MP
 */
declare function GetNumReservedMissionPeds(p0: boolean): number;

declare function GetNumReservedMissionPickups(p0: boolean): number;

/**
 * p0 appears to be for MP
 */
declare function GetNumReservedMissionVehicles(p0: boolean): number;

/**
 * Gets the amount of metadata values with the specified key existing in the specified resource's manifest.
 * See also: [Resource manifest](https://docs.fivem.net/resources/manifest/)
 * @param resourceName The resource name.
 * @param metadataKey The key to look up in the resource manifest.
 */
declare function GetNumResourceMetadata(resourceName: string, metadataKey: string): number;

declare function GetNumResources(): number;

/**
 * eventGroup: 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork), 2 = unk, 3 = unk, 4 = SCRIPT_EVENT_QUEUE_ERRORS (CEventGroupScriptErrors)
 */
declare function GetNumberOfEvents(eventGroup: number): number;

declare function GetNumberOfFiresInRange(x: number, y: number, z: number, radius: number): number;

declare function GetNumberOfFreeStacksOfThisSize(stackSize: number): number;

declare function GetNumberOfInstructions(): number;

declare function GetNumberOfMicrosecondsSinceLastCall(): number;

/**
 * Gets the number of instances of the specified script is currently running.
 * Actually returns numRefs - 1.
 * if (program)
 * v3 = rage::scrProgram::GetNumRefs(program) - 1;
 * return v3;
 */
declare function GetNumberOfReferencesOfScriptWithNameHash(scriptHash: string | number): number;

declare function GetNumberOfStreamingRequests(): number;

declare function GetObjectFragmentDamageHealth(p0: number, p1: boolean): number;

declare function GetObjectFromIndexedItem(item: number): number;

/**
 * Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
 */
declare function GetObjectIndexFromEntityIndex(entity: number): number;

declare function GetObjectOffsetFromCoords(
  xPos: number,
  yPos: number,
  zPos: number,
  heading: number,
  xOffset: number,
  yOffset: number,
  zOffset: number,
): number[];

declare function GetOffsetFromEntityGivenWorldCoords(
  entity: number,
  posX: number,
  posY: number,
  posZ: number,
): number[];

/**
 * Offset values are relative to the entity.
 * x = left/right
 * y = forward/backward
 * z = up/down
 */
declare function GetOffsetFromEntityInWorldCoords(
  entity: number,
  offsetX: number,
  offsetY: number,
  offsetZ: number,
): number[];

/**
 * Returns NULL unless UPDATE_ONSCREEN_KEYBOARD() returns 1 in the same tick.
 */
declare function GetOnscreenKeyboardResult(): string;

/**
 * Valid indices: 0 - 3
 * Index 1 always returns a `hogtied` config, doesn't matter the entity.
 * It's for humans only and the ped must be resurrected first if it's dead.
 */
declare function GetOptimalCarryConfig(entity: number, index: number): number;

declare function GetPedAccuracy(ped: number): number;

declare function GetPedAmmoByType(ped: number, ammoType: string | number): number;

/**
 * Returns the current ammo type of the specified ped's specified weapon.
 */
declare function GetPedAmmoTypeFromWeapon(ped: number, weaponHash: string | number): number;

/**
 * Returns the ped's animal type hash: https://alloc8or.re/rdr3/doc/enums/eAnimalType.txt
 */
declare function GetPedAnimalType(ped: number): number;

declare function GetPedAsGroupLeader(groupID: number): number;

declare function GetPedAsGroupMember(groupID: number, memberNumber: number): number;

declare function GetPedBackupWeapon(ped: number, p1: boolean): number;

declare function GetPedBlackboardScriptBool(ped: number, variableName: string): boolean;

declare function GetPedBlackboardScriptFloat(ped: number, variableName: string): number;

declare function GetPedBlackboardScriptInt(ped: number, variableName: string): number;

/**
 * Gets the position of the specified bone of the specified ped.
 * ped: The ped to get the position of a bone from.
 * boneId: The ID of the bone to get the position from. This is NOT the index.
 * offsetX: The X-component of the offset to add to the position relative to the bone's rotation.
 * offsetY: The Y-component of the offset to add to the position relative to the bone's rotation.
 * offsetZ: The Z-component of the offset to add to the position relative to the bone's rotation.
 */
declare function GetPedBoneCoords(
  ped: number,
  boneId: number,
  offsetX: number,
  offsetY: number,
  offsetZ: number,
): number[];

/**
 * no bone = -1
 */
declare function GetPedBoneIndex(ped: number, boneId: number): number;

declare function GetPedBrawlingStyle(ped: number): number;

declare function GetPedCanBeIncapacitatedThisFrame(ped: number): boolean;

/**
 * Returns the hash of the weapon/model/object that killed the ped.
 */
declare function GetPedCauseOfDeath(ped: number): number;

declare function GetPedCombatMovement(ped: number): number;

declare function GetShopItemComponentAtIndex(
  ped: number,
  index: number,
  p2: boolean,
  p3: DataView,
  p4: DataView,
): number;

declare function GetPedComponentCategory(componentHash: string | number, metapedType: number, isMP: boolean): number;

/**
 * flagId: see SET_PED_CONFIG_FLAG
 */
declare function GetPedConfigFlag(ped: number, flagId: number, p2?: boolean): boolean;

declare function GetPedCrouchMovement(ped: number): boolean;

declare function GetPedCurrentMovementSpeed(ped: number): [boolean, number, number];

/**
 * enum ePedDamageCleanliness
 * {
 * PED_DAMAGE_CLEANLINESS_POOR,
 * PED_DAMAGE_CLEANLINESS_GOOD,
 * PED_DAMAGE_CLEANLINESS_PERFECT
 * };
 */
declare function GetPedDamageCleanliness(ped: number): number;

/**
 * Returns true if _GET_PED_DAMAGE_CLEANLINESS was ever lower than 2
 */
declare function GetPedDamaged(ped: number): boolean;

declare function GetPedDefensiveAreaPosition(ped: number, p1: boolean): number[];

declare function GetPedDesiredMoveBlendRatio(ped: number): number;

/**
 * A getter for [\_SET_PED_EYE_COLOR](#\_0x50B56988B170AFDF). Returns -1 if fails to get.
 * @param ped The target ped
 * @return Returns ped's eye colour, or -1 if fails to get.
 */
declare function GetPedEyeColor(ped: number): number;

declare function GetPedFaceFeature(ped: number, index: number): number;

/**
 * A getter for [\_SET_PED_FACE_FEATURE](#\_0x71A5C1DBA060049E). Returns 0.0 if fails to get.
 * @param ped The target ped
 * @param index Face feature index
 * @return Returns ped's face feature value, or 0.0 if fails to get.
 */
declare function GetPedFaceFeature(ped: number, index: number): number;

declare function GetPedFromIndexedItem(item: number): number;

declare function GetPedGrappleState(ped: number): number;

/**
 * Returns the group id of which the specified ped is a member of.
 */
declare function GetPedGroupIndex(ped: number): number;

/**
 * A getter for [\_SET_PED_HAIR_COLOR](#\_0x4CFFC65454C93A49). Returns -1 if fails to get.
 * @param ped The target ped
 * @return Returns ped's primary hair colour.
 */
declare function GetPedHairColor(ped: number): number;

/**
 * A getter for [\_SET_PED_HAIR_COLOR](#\_0x4CFFC65454C93A49). Returns -1 if fails to get.
 * @param ped The target ped
 * @return Returns ped's secondary hair colour.
 */
declare function GetPedHairHighlightColor(ped: number): number;

/**
 * A getter for [SET_PED_HEAD_OVERLAY](#\_0x48F44967FA05CC1E) and [\_SET_PED_HEAD_OVERLAY_COLOR](#\_0x497BF74A7B9CB952) natives.
 * @param ped The target ped
 * @param index Overlay index
 * @param overlayValue Overlay value pointer
 * @param colourType Colour type pointer
 * @param firstColour First colour pointer
 * @param secondColour Second colour pointer
 * @param overlayOpacity Opacity pointer
 * @return Returns ped's head overlay data.
 */
declare function GetPedHeadOverlayData(ped: number, index: number): [boolean, number, number, number, number, number];

declare function GetPedHeight(ped: number): number;

declare function GetPedHogtieWeapon(ped: number): number;

declare function GetPedIdRange(ped: number): number;

/**
 * enum eDraftHarness
 * {
 * DRAFT_HARNESS_LR,
 * DRAFT_HARNESS_RR,
 * DRAFT_HARNESS_LM,
 * DRAFT_HARNESS_RM,
 * DRAFT_HARNESS_LF,
 * DRAFT_HARNESS_RF,
 * DRAFT_HARNESS_COUNT
 * };
 */
declare function GetPedInDraftHarness(vehicle: number, harnessIdx: number): number;

/**
 * seatIndex: see CREATE_PED_INSIDE_VEHICLE
 */
declare function GetPedInVehicleSeat(vehicle: number, seatIndex: number): number;

/**
 * Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
 */
declare function GetPedIndexFromEntityIndex(entity: number): number;

declare function GetPedIsBeingGrappled(ped: number): boolean;

declare function GetPedIsDoingCombatRoll(ped: number): boolean;

declare function GetPedIsGrappling(ped: number): boolean;

declare function GetPedLastDamageBone(ped: number, outBone?: number): [boolean, number];

declare function GetPedLastDroppedHat(ped: number): number;

declare function GetPedLastWeaponImpactCoord(ped: number): [boolean, number[]];

/**
 * enum ePedLootStatus
 * {
 * PLS_NONE,
 * PLS_PRE_LOOT,
 * PLS_SAMPLING,
 * PLS_SKINNING
 * };
 */
declare function GetPedLootStatusMp(ped: number): number;

declare function GetPedMaxHealth(ped: number): number;

declare function GetPedMaxStamina(ped: number): number;

declare function GetPedMeleeActionPhase(ped: number): number;

declare function GetPedMetaOutfitHash(ped: number): number;

declare function GetPedModelNameInPopulationSet(popSetHash: string | number, index: number): number;

declare function GetPedMoney(ped: number): number;

declare function GetPedMotionFocusEntity(ped: number): number;

declare function GetPedNearbyPeds(ped: number, ignoredPedType: number, p3: number): [number, number];

declare function GetPedNearbyVehicles(ped: number, sizeAndVehs?: number): [number, number];

/**
 * enum ePedQuality
 * {
 * PQ_INVALID = -1,
 * PQ_LOW,
 * PQ_MEDIUM,
 * PQ_HIGH,
 * PQ_MAX
 * };
 */
declare function GetPedQuality(ped: number): number;

declare function GetPedRelationshipGroupDefaultHash(ped: number): number;

declare function GetPedRelationshipGroupHash(ped: number): number;

/**
 * normalized / non normalized
 * 0.0        / 1000.0         STARTED IN WRITHE STAGE
 * 1.0        / 0.0            END OF WRITHE, DEAD
 * -1.0                        DEAD
 * Returns some value from AI task 562 (unknown).
 */
declare function GetPedRemainingRevivalTime(ped: number, normalized: boolean): number;

declare function GetPedResetFlag(ped: number, flagId: number): boolean;

declare function GetPedSizeFromModel(modelHash: string | number): number;

/**
 * Returns the Entity (Ped, Vehicle, or ?Object?) that killed the 'ped'
 * Is best to check if the Ped is dead before asking for its killer.
 */
declare function GetPedSourceOfDeath(ped: number): number;

declare function GetPedStamina(ped: number): number;

/**
 * Returns whether the entity is in stealth mode
 */
declare function GetPedStealthMovement(ped: number): boolean;

declare function GetPedTimeOfDeath(ped: number): number;

declare function GetPedToPlayerWeaponDamageModifier(ped: number): number;

declare function GetPedType(ped: number): number;

declare function GetPedUsingScenarioPoint(scenario: number): number;

declare function GetPedWaypointDistance(p0: number): number;

declare function GetPedWaypointOverrideSpeed(p0: number): number;

declare function GetPedWaypointProgress(ped: number): number;

declare function GetPedWeaponGuidAtAttachPoint(
  ped: number,
  attachPoint: number,
  weaponGuid?: number,
): [boolean, number];

declare function GetPedWorstWeapon(ped: number, p1: boolean, p2: boolean, p3: boolean): number;

declare function GetPedsJacker(ped: number): number;

declare function GetPhotoModeContrast(): number;

declare function GetPhotoModeDof(): number;

declare function GetPhotoModeExposure(): number;

declare function GetPhotoModeFocalLength(): number;

declare function GetPhotoModeFocusDistance(): number;

declare function GetPickupCoords(pickup: number): number[];

declare function GetPickupHash(pickupHash: string | number): number;

declare function GetPickupObject(pickup: number): number;

declare function GetPlayerCurrentStealthNoise(player: number): number;

declare function GetPlayerFromServerId(serverId: number): number;

/**
 * Returns the group ID the player is member of.
 */
declare function GetPlayerGroup(player: number): number;

declare function GetPlayerHealth(player: number): number;

/**
 * Returns the same as PLAYER_ID and NETWORK_PLAYER_ID_TO_INT
 */
declare function GetPlayerIndex(): number;

declare function GetPlayerInteractionTargetEntity(player: number, p2: boolean, p3: boolean): [boolean, number];

/**
 * Returns the player's invincibility status.
 */
declare function GetPlayerInvincible(player: number): boolean;

/**
 * Unlike [GET_PLAYER_INVINCIBLE](#\_0xB721981B2B939E07) this native gets both [SET_PLAYER_INVINCIBLE_KEEP_RAGDOLL_ENABLED](#\_0x6BC97F4F4BB3C04B) and [SET_PLAYER_INVINCIBLE](#\_0x239528EACDC3E7DE) invincibility state.
 * @param player The player id
 * @return A boolean to tell if the player is invincible.
 */
declare function GetPlayerInvincible_2(player: number): boolean;

declare function GetPlayerName(player: number): string;

declare function GetPlayerOwnerOfMount(mount: number): number;

declare function GetPlayerOwnerOfVehicle(vehicle: number): number;

declare function GetPlayerPed(player: number): number;

declare function GetPlayerPedIsFollowing(ped: number): number;

/**
 * Does the same like PLAYER::GET_PLAYER_PED
 */
declare function GetPlayerPedScriptIndex(player: number): number;

declare function GetPlayerPed_2(player: number): number;

declare function GetPlayerRegisteredCrime(p0: number, p1: number, p2: number): number;

declare function GetPlayerServerId(player: number): number;

declare function GetPlayerStamina(player: number): number;

declare function GetPlayerTargetEntity(player: number, entity?: number): [boolean, number];

/**
 * Gets the player's team.
 * Returns -1 in singleplayer.
 */
declare function GetPlayerTeam(player: number): number;

declare function GetPlayerWantedLevel(player: number): number;

declare function GetPlayersLastVehicle(): number;

declare function GetPopulationBudgetMultiplier(): number;

/**
 * This native does no interpolation between pathpoints. The same position will be returned for all times up to the next pathpoint in the recording.
 * See REQUEST_VEHICLE_RECORDING
 */
declare function GetPositionOfVehicleRecordingAtTime(recording: number, time: number, script: string): number[];

declare function GetPosixTime(): [number, number, number, number, number, number];

/**
 * Same as GET_POSIX_TIME except that it takes a single pointer to a struct.
 */
declare function GetPosixTimeStruct(outTime: number): void;

declare function GetPrevWeatherTypeHashName(): number;

/**
 * GET_PROJECTILE_*
 */
declare function GetProjectileNearPed(
  ped: number,
  weaponHash: string | number,
  distance: number,
  p5: boolean,
  mustBeOwnedByThisPed: boolean,
): [boolean, number[], number];

declare function GetPropSetAtCoords(propsetHash: string | number, x: number, y: number, z: number): number;

declare function GetPropSetModel(propSet: number): number;

declare function GetRainLevel(): number;

declare function GetRandomEventFlag(): boolean;

declare function GetRandomFloatInRange(startRange: number, endRange: number): number;

declare function GetRandomIntInRange(startRange: number, endRange: number): number;

declare function GetRandomModelFromPopulationSet(
  popSetHash: string | number,
  flags: number,
  p2: string | number,
  p3: boolean,
  p4: boolean,
  x: number,
  y: number,
  z: number,
): number;

declare function GetRandomVehicleNode(
  x: number,
  y: number,
  z: number,
  radius: number,
  p4: boolean,
  p5: boolean,
  p6: boolean,
): [boolean, number[], number];

declare function GetRandomWeatherType(): number;

declare function GetRansackScenarioPointPedIsUsing(ped: number): number;

declare function GetRayfireMapObject(x: number, y: number, z: number, radius: number, name: string): number;

declare function GetRayfireMapObjectAnimPhase(object: number): number;

/**
 * Returns all commands that are registered in the command system.
 * The data returned adheres to the following layout:
 * ```
 * [
 * {
 * "name": "cmdlist"
 * },
 * {
 * "name": "command1"
 * }
 * ]
 * ```
 * @return An object containing registered commands.
 */
declare function GetRegisteredCommands(): any;

declare function GetRelationshipBetweenGroups(group1: string | number, group2: string | number): number;

declare function GetRelationshipBetweenPeds(ped1: number, ped2: number): number;

declare function GetRenderingCam(): number;

declare function GetResourceByFindIndex(findIndex: number): string;

/**
 * A getter for [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938).
 * @param key The key to fetch
 * @return A float that contains the value stored in the Kvp or nil/null if none.
 */
declare function GetResourceKvpFloat(key: string): number;

/**
 * A getter for [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8).
 * @param key The key to fetch
 * @return A int that contains the value stored in the Kvp or nil/null if none.
 */
declare function GetResourceKvpInt(key: string): number;

/**
 * A getter for [SET_RESOURCE_KVP](#\_0x21C7A35B).
 * @param key The key to fetch
 * @return A string that contains the value stored in the Kvp or nil/null if none.
 */
declare function GetResourceKvpString(key: string): string;

/**
 * Gets the metadata value at a specified key/index from a resource's manifest.
 * See also: [Resource manifest](https://docs.fivem.net/resources/manifest/)
 * @param resourceName The resource name.
 * @param metadataKey The key in the resource manifest.
 * @param index The value index, in a range from \[0..GET_NUM_RESOURCE_METDATA-1].
 */
declare function GetResourceMetadata(resourceName: string, metadataKey: string, index: number): string;

/**
 * Returns the current state of the specified resource.
 * @param resourceName The name of the resource.
 * @return The resource state. One of `"missing", "started", "starting", "stopped", "stopping", "uninitialized" or "unknown"`.
 */
declare function GetResourceState(resourceName: string): string;

declare function GetRiderOfMount(mount: number, p1?: boolean): number;

/**
 * Gets the room hash key from the room that the specified entity is in. Each room in every interior has a unique key. Returns 0 if the entity is outside.
 */
declare function GetRoomKeyFromEntity(entity: number): number;

/**
 * cpp
 * enum eRopeFlags
 * {
 * DrawShadowEnabled = 2,
 * Breakable = 4,
 * RopeUnwindingFront = 8,
 * RopeWinding = 32
 * }
 * @param rope The rope to get the flags for.
 * @return The rope's flags.
 */
declare function GetRopeFlags(rope: number): number;

declare function GetRopeLastVertexCoord(ropeId: number): number[];

declare function GetRopeLengthChangeRate(rope: number): number;

declare function GetRopeTimeMultiplier(rope: number): number;

declare function GetRopeUpdateOrder(rope: number): number;

declare function GetRopeVertexCoord(ropeId: number, vertex: number): number[];

declare function GetRopeVertexCount(ropeId: number): number;

/**
 * This native does no interpolation between pathpoints. The same rotation will be returned for all times up to the next pathpoint in the recording.
 * See REQUEST_VEHICLE_RECORDING
 */
declare function GetRotationOfVehicleRecordingAtTime(recording: number, time: number, script: string): number[];

declare function GetRowingOars(vehicle: number): [number, number];

/**
 * Gets the height of the specified runtime texture.
 * @param tex A handle to the runtime texture.
 * @return The height in pixels.
 */
declare function GetRuntimeTextureHeight(tex: number): number;

/**
 * Gets the row pitch of the specified runtime texture, for use when creating data for `SET_RUNTIME_TEXTURE_ARGB_DATA`.
 * @param tex A handle to the runtime texture.
 * @return The row pitch in bytes.
 */
declare function GetRuntimeTexturePitch(tex: number): number;

/**
 * Gets the width of the specified runtime texture.
 * @param tex A handle to the runtime texture.
 * @return The width in pixels.
 */
declare function GetRuntimeTextureWidth(tex: number): number;

declare function GetSaddleHorseForPlayer(player: number): number;

declare function GetSafeCoordForPed(
  x: number,
  y: number,
  z: number,
  onGround: boolean,
  flags: number,
): [boolean, number[]];

declare function GetSafePickupCoords(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number[];

/**
 * p1 is always true
 */
declare function GetScenarioPointCoords(scenario: number, p1: boolean): number[];

declare function GetScenarioPointEntity(scenarioPoint: number, name: string): number;

/**
 * p1 is always true
 */
declare function GetScenarioPointHeading(Scenario: number, p1: boolean): number;

declare function GetScenarioPointPedIsUsing(ped: number, p1: boolean): number;

declare function GetScenarioPointType(scenario: number): number;

declare function GetScenarioPointTypePedIsUsing(ped: number): number;

declare function GetScenarioPointsInArea(
  posX: number,
  posY: number,
  posZ: number,
  radius: number,
  size: number,
): [number, number];

declare function GetScreenCoordFromWorldCoord(
  worldX: number,
  worldY: number,
  worldZ: number,
): [boolean, number, number];

/**
 * Hardcoded to always set x to 1280 and y to 720.
 */
declare function GetScreenResolution(): [number, number];

/**
 * Gets the status of a script-assigned task.
 * taskHash: https://alloc8or.re/rdr3/doc/enums/eScriptTaskHash.txt
 */
declare function GetScriptTaskStatus(ped: number, taskHash: string | number, p2: boolean): number;

declare function GetScriptTimeWithinFrameInMicroseconds(): number;

declare function GetScriptedCoverPointCoords(coverpoint: number): number[];

declare function GetSeatPedIsTryingToEnter(ped: number): number;

declare function GetSeatPedIsUsing(ped: number): number;

/**
 * Base year is 1898.
 */
declare function GetSecondsSinceBaseYear(): number;

/**
 * returned values:
 * 0 to 7 = task that's currently in progress, 0 meaning the first one.
 * -1 no task sequence in progress.
 */
declare function GetSequenceProgress(ped: number): number;

/**
 * Returns the result of a shape test: 0 if the handle is invalid, 1 if the shape test is still pending, or 2 if the shape test has completed, and the handle should be invalidated.
 * When used with an asynchronous shape test, this native should be looped until returning 0 or 2, after which the handle is invalidated.
 */
declare function GetShapeTestResult(
  shapeTestHandle: number,
): [number, boolean, [number, number, number], [number, number, number], number];

declare function GetSnowLevel(): number;

declare function GetSocialMatchmakingAllowed(): boolean;

declare function GetSoundId(): number;

declare function GetSpecialEditionCashCampBonusEnabled(): boolean;

declare function GetSpecialEditionCoreStatsBonusEnabled(): boolean;

declare function GetSpeciesTuningFloatParam(p0: string | number, p1: number, p2: number): number;

/**
 * Returns the value of a state bag key.
 * @return Value.
 */
declare function GetStateBagValue(bagName: string, key: string): any;

declare function GetStateOfRayfireMapObject(object: number): number;

declare function GetStatusOfLoadMissionCreatorPhoto(p0: number): [number, number];

declare function GetStatusOfSaveHighQualityPhoto(): number;

/**
 * Only 0 and 1 are valid for p0, higher values causes the native to return 2.
 */
declare function GetStatusOfSavegameOperation(p0: number): number;

declare function GetStatusOfSortedListOperation(): number;

declare function GetStatusOfTakeHighQualityPhoto(): number;

/**
 * 0 = succeeded
 * 1 = pending
 * 2 = failed
 */
declare function GetStatusOfTextureDownload(p0: number): number;

declare function GetStringFromBool(value: boolean): string;

declare function GetStringFromFloat(value: number, digits: number): string;

/**
 * Returns the label text given the hash.
 * Old name: _GET_LABEL_TEXT_BY_HASH
 */
declare function GetStringFromHashKey(labelHash: string | number): string;

declare function GetStringFromVector(x: number, y: number, z: number): string;

declare function GetSystemTime(): number;

declare function GetTargetCharacterNameForLocalPlayer(ped: number): number;

declare function GetTargetCharacterNameScriptOverrideHash(ped: number): number;

declare function GetTargetCharacterNameScriptOverrideRawString(ped: number): string;

declare function GetTaskMoveNetworkEvent(ped: number, eventName: string): boolean;

/**
 * Returns hash of the underlying move network def, see move_networks.xml
 * https://alloc8or.re/rdr3/doc/misc/move_networks.txt
 */
declare function GetTaskMoveNetworkId(ped: number): number;

declare function GetTaskMoveNetworkState(ped: number): string;

declare function GetTemperatureAtCoords(x: number, y: number, z: number): number;

declare function GetTextSubstring(text: string, position: number, length: number): string;

declare function GetTextSubstring_2(text: string, length: number): string;

declare function GetThreadExistenceDetails(threadId: number): [any /* actually bool */, any /* actually bool */];

/**
 * enum eThreadExitReason
 * {
 * THREAD_EXIT_REASON_NONE,
 * THREAD_EXIT_REASON_BACKGROUND_THREAD_STOPPED,
 * THREAD_EXIT_REASON_SESSION_MERGE,
 * THREAD_EXIT_REASON_SCENARIO_OUT_OF_SCOPE,
 * THREAD_EXIT_REASON_REQUESTED_BY_SCRIPT
 * };
 */
declare function GetThreadExitReason(): number;

/**
 * Subtracts the second argument from the first.
 */
declare function GetTimeDifference(timeA: number, timeB: number): number;

/**
 * Adds the first argument to the second.
 */
declare function GetTimeOffset(timeA: number, timeB: number): number;

declare function GetTimePositionInRecording(vehicle: number): number;

declare function GetTimecycleModifierIndex(): number;

declare function GetTimecycleTransitionModifierIndex(): number;

declare function GetTogglePausedRenderphasesStatus(): boolean;

declare function GetTrackIndexOfTrain(train: number): number;

declare function GetTrainCarriage(train: number, trailerNumber: number): number;

declare function GetTrainCurrentTrackNode(train: number): number;

/**
 * Gets the door count for the specified train.
 * @param train The train to obtain the door count for.
 * @return The door count.
 */
declare function GetTrainDoorCount(train: number): number;

/**
 * Gets the ratio that a door is open for on a train.
 * @param train The train to obtain the door ratio for.
 * @param doorIndex Zero-based door index.
 * @return A value between 0.0 (fully closed) and 1.0 (fully open).
 */
declare function GetTrainDoorOpenRatio(train: number, doorIndex: number): number;

/**
 * flagId: see SET_TRANSPORT_CONFIG_FLAG
 */
declare function GetTransportConfigFlag(transportEntity: number, flagId: number, p2: boolean): boolean;

declare function GetTransportPedIsSeatedOn(ped: number): number;

/**
 * See _SET_TRANSPORT_USAGE_FLAGS
 */
declare function GetTransportUsageFlags(transportEntity: number, flags?: number): [number, number];

declare function GetTvChannel(): number;

declare function GetUiappCurrentActivityByHash(appNameHash: string | number): number;

declare function GetUniqueIntForPlayer(player: number): number;

declare function GetVehicleAlarmTimeLeft(vehicle: number): number;

/**
 * Seems related to vehicle health, like the one in IV.
 * Max 1000, min 0.
 * Vehicle does not necessarily explode or become undrivable at 0.
 */
declare function GetVehicleBodyHealth(vehicle: number): number;

/**
 * A getter for [SET_VEHICLE_CHEAT_POWER_INCREASE](#\_0xB59E4BD37AE292DB).
 * @param vehicle The target vehicle.
 * @return Returns vehicle's cheat power increase modifier value.
 */
declare function GetVehicleCheatPowerIncrease(vehicle: number): number;

declare function GetVehicleClutch(vehicle: number): number;

declare function GetVehicleCurrentGear(vehicle: number): number;

declare function GetVehicleCurrentRpm(vehicle: number): number;

declare function GetVehicleDashboardSpeed(vehicle: number): number;

declare function GetVehicleDoorLockStatus(vehicle: number): number;

declare function GetVehicleDoorsLockedForPlayer(vehicle: number, player: number): boolean;

declare function GetVehicleDoorsLockedForTeam(vehicle: number, team: number): boolean;

declare function GetVehicleDraftHorseIsAttachedTo(horse: number): number;

/**
 * Gets a vehicle's multiplier used with a wheel's GET_VEHICLE_WHEEL_STEERING_ANGLE to determine the angle the wheel is rendered.
 */
declare function GetVehicleDrawnWheelAngleMult(vehicle: number): number;

/**
 * Returns 1000.0 if the function is unable to get the address of the specified vehicle or if it's not a vehicle.
 * Minimum: -4000
 * Maximum: 1000
 * -4000: Engine is destroyed
 * 0 and below: Engine catches fire and health rapidly declines
 * 300: Engine is smoking and losing functionality
 * 1000: Engine is perfect
 */
declare function GetVehicleEngineHealth(vehicle: number): number;

declare function GetVehicleEngineTemperature(vehicle: number): number;

declare function GetVehicleEstimatedMaxSpeed(vehicle: number): number;

declare function GetVehicleFromIndexedItem(item: number): number;

declare function GetVehicleFuelLevel(vehicle: number): number;

declare function GetVehicleGravityAmount(vehicle: number): number;

declare function GetVehicleHandbrake(vehicle: number): boolean;

/**
 * Returns the effective handling data of a vehicle as a floating-point value.
 * Example: `local fSteeringLock = GetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock')`
 * @param vehicle The vehicle to obtain data for.
 * @param class_ The handling class to get. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to get. These match the keys in `handling.meta`.
 * @return A floating-point value.
 */
declare function GetVehicleHandlingFloat(vehicle: number, class_: string, fieldName: string): number;

/**
 * Returns the effective handling data of a vehicle as an integer value.
 * Example: `local modelFlags = GetVehicleHandlingInt(vehicle, 'CHandlingData', 'strModelFlags')`
 * @param vehicle The vehicle to obtain data for.
 * @param class_ The handling class to get. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to get. These match the keys in `handling.meta`.
 * @return An integer.
 */
declare function GetVehicleHandlingInt(vehicle: number, class_: string, fieldName: string): number;

/**
 * Returns the effective handling data of a vehicle as a vector value.
 * Example: `local inertiaMultiplier = GetVehicleHandlingVector(vehicle, 'CHandlingData', 'vecInertiaMultiplier')`
 * @param vehicle The vehicle to obtain data for.
 * @param class_ The handling class to get. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to get. These match the keys in `handling.meta`.
 * @return An integer.
 */
declare function GetVehicleHandlingVector(vehicle: number, class_: string, fieldName: string): number[];

declare function GetVehicleHighGear(vehicle: number): number;

/**
 * Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
 */
declare function GetVehicleIndexFromEntityIndex(entity: number): number;

/**
 * Gets the vehicle indicator light state. 0 = off, 1 = left, 2 = right, 3 = both
 * @return An integer.
 */
declare function GetVehicleIndicatorLights(vehicle: number): number;

declare function GetVehicleLightMultiplier(vehicle: number): number;

declare function GetVehicleLightPropSet(vehicle: number): number;

declare function GetVehicleLivery(vehicle: number): number;

declare function GetVehicleMaxNumberOfPassengers(vehicle: number): number;

declare function GetVehicleModelNumberOfSeats(modelHash: string | number): number;

declare function GetVehicleNextGear(vehicle: number): number;

declare function GetVehicleNodeIsSwitchedOff(nodeID: number): boolean;

declare function GetVehicleNodePosition(nodeId: number): number[];

/**
 * Gets the number of passengers, NOT including the driver. Use IS_VEHICLE_SEAT_FREE(Vehicle, -1) to also check for the driver
 */
declare function GetVehicleNumberOfPassengers(vehicle: number): number;

declare function GetVehicleNumberOfWheels(vehicle: number): number;

declare function GetVehicleOilLevel(vehicle: number): number;

declare function GetVehicleOwnedByPlayer(player: number): number;

declare function GetVehicleOwner(vehicle: number): number;

declare function GetVehiclePedIsEntering(ped: number): number;

/**
 * Gets the vehicle the specified Ped is in.
 * If the Ped is not in a vehicle and includeLastVehicle is true, the vehicle they were last in is returned.
 */
declare function GetVehiclePedIsIn(ped: number, lastVehicle: boolean): number;

declare function GetVehiclePedIsUsing(ped: number): number;

/**
 * 1000 is max health
 */
declare function GetVehiclePetrolTankHealth(vehicle: number): number;

declare function GetVehiclePropSet(vehicle: number): number;

declare function GetVehiclePropSetHash(vehicle: number): number;

declare function GetVehicleSteeringAngle(vehicle: number): number;

declare function GetVehicleSteeringScale(vehicle: number): number;

declare function GetVehicleThrottleOffset(vehicle: number): number;
declare function GetVehicleCurrentAcceleration(vehicle: number): number;

declare function GetVehicleTint(vehicle: number): number;

/**
 * A getter for [MODIFY_VEHICLE_TOP_SPEED](#\_0x93A3996368C94158). Returns -1.0 if a modifier is not set.
 * @param vehicle The target vehicle.
 * @return Returns vehicle's modified top speed.
 */
declare function GetVehicleTopSpeedModifier(vehicle: number): number;

/**
 * Gets the trailer of a vehicle and puts it into the trailer parameter.
 */
declare function GetVehicleTrailerVehicle(vehicle: number, trailer?: number): [boolean, number];

declare function GetVehicleTurboPressure(vehicle: number): number;

declare function GetVehicleTurretSeat(vehicle: number, seatIndex?: number): [boolean, number];

declare function GetVehicleWaypointPlaybackOverrideSpeed(p0: number): number;

declare function GetVehicleWaypointProgress(vehicle: number): number;

declare function GetVehicleWaypointTargetPoint(vehicle: number): number;

/**
 * Gets brake pressure of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * Normal values around 1.0f when braking.
 */
declare function GetVehicleWheelBrakePressure(vehicle: number, wheelIndex: number): number;

/**
 * Gets the flags of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @return An unsigned int containing bit flags.
 */
declare function GetVehicleWheelFlags(vehicle: number, wheelIndex: number): number;

declare function GetVehicleWheelHealth(vehicle: number, wheelIndex: number): number;

/**
 * Gets whether the wheel is powered.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * This is a shortcut to a flag in GET_VEHICLE_WHEEL_FLAGS.
 */
declare function GetVehicleWheelIsPowered(vehicle: number, wheelIndex: number): boolean;

/**
 * Gets power being sent to a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 */
declare function GetVehicleWheelPower(vehicle: number, wheelIndex: number): number;

declare function GetVehicleWheelRimColliderSize(vehicle: number, wheelIndex: number): number;

/**
 * Gets the rotation speed of a wheel.
 * This is used internally to calcuate GET_VEHICLE_WHEEL_SPEED.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @return The angular velocity of the wheel.
 */
declare function GetVehicleWheelRotationSpeed(vehicle: number, wheelIndex: number): number;

/**
 * Returns vehicle's wheels' size (size is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels (returns 0 in case of default wheels).
 * @param vehicle The vehicle to obtain data for.
 * @return Float representing size of the wheel (usually between 0.5 and 1.5)
 */
declare function GetVehicleWheelSize(vehicle: number): number;

/**
 * Gets speed of a wheel at the tyre.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @return An integer.
 */
declare function GetVehicleWheelSpeed(vehicle: number, wheelIndex: number): number;

/**
 * Gets steering angle of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @return The steering angle of the wheel, with 0 being straight.
 */
declare function GetVehicleWheelSteeringAngle(vehicle: number, wheelIndex: number): number;

declare function GetVehicleWheelSurfaceMaterial(vehicle: number, wheelIndex: number): number;

/**
 * Gets the current suspension compression of a wheel.
 * Returns a positive value. 0 means the suspension is fully extended, the wheel is off the ground.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @return The current compression of the wheel's suspension.
 */
declare function GetVehicleWheelSuspensionCompression(vehicle: number, wheelIndex: number): number;

declare function GetVehicleWheelTireColliderSize(vehicle: number, wheelIndex: number): number;

declare function GetVehicleWheelTireColliderWidth(vehicle: number, wheelIndex: number): number;

/**
 * Gets the traction vector length of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 */
declare function GetVehicleWheelTractionVectorLength(vehicle: number, wheelIndex: number): number;

/**
 * Returns vehicle's wheels' width (width is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels (returns 0 in case of default wheels).
 * @param vehicle The vehicle to obtain data for.
 * @return Float representing width of the wheel (usually between 0.1 and 1.5)
 */
declare function GetVehicleWheelWidth(vehicle: number): number;

/**
 * Returns the offset of the specified wheel relative to the wheel's axle center.
 */
declare function GetVehicleWheelXOffset(vehicle: number, wheelIndex: number): number;

declare function GetVehicleWheelYRotation(vehicle: number, wheelIndex: number): number;
declare function GetVehicleWheelXrot(vehicle: number, wheelIndex: number): number;

/**
 * List of known states:
 * ```
 * 1: Not wheeling.
 * 65: Vehicle is ready to do wheelie (burnouting).
 * 129: Vehicle is doing wheelie.
 * ```
 * @param vehicle Vehicle
 * @return Vehicle's current wheelie state.
 */
declare function GetVehicleWheelieState(vehicle: number): number;

declare function GetVolumeBounds(volume: number): [number[], number[]];

declare function GetVolumeCoords(volume: number): number[];

/**
 * enum eVolumeLockRequestStatus
 * {
 * VOLUME_LOCK_REQUEST_STATUS_INVALID,
 * VOLUME_LOCK_REQUEST_STATUS_READY,
 * VOLUME_LOCK_REQUEST_STATUS_IN_PROGRESS,
 * VOLUME_LOCK_REQUEST_STATUS_SUCCEEDED,
 * VOLUME_LOCK_REQUEST_STATUS_FAILED
 * };
 */
declare function GetVolumeLockRequestStatus(volLockRequestId: number): number;

declare function GetVolumeRotation(volume: number): number[];

declare function GetVolumeScale(volume: number): number[];

declare function GetWantedIntensityForPlayer(player: number): number;

declare function GetWantedLevelRadius(p0: number): number;

declare function GetWantedLevelThreshold(wantedLevel: number): number;

declare function GetWaterHeight(x: number, y: number, z: number, height?: number): [boolean, number];

declare function GetWaterHeightNoWaves(x: number, y: number, z: number, height?: number): [boolean, number];

/**
 * Returns the zone's name hash if its type matches one of the following:
 * - LAKE
 * - RIVER
 * - OIL_SPILL
 * - SWAMP
 * - OCEAN
 * - CREEK
 * - POND
 * - GLACIER
 */
declare function GetWaterMapZoneAtCoords(x: number, y: number, z: number): number;

declare function GetWaypointCoords(): number[];

declare function GetWaypointDistanceAlongRoute(p0: string, p1: number): number;

declare function GetWeaponClipSize(weaponHash: string | number): number;

declare function GetWeaponComponentTypeModel(componentHash: string | number): number;

/**
 * Related to weapon visual damage, not actual damage.
 */
declare function GetWeaponDamage(weaponObject: number): number;

/**
 * A getter for [\_SET_WEAPON_DAMAGE_MODIFIER](#\_0x4757F00BC6323CFE).
 * @param weaponHash Weapon name hash.
 * @return A weapon damage modifier.
 */
declare function GetWeaponDamageModifier(weaponHash: string | number): number;

/**
 * 0.0: GOOD CONDITION 1.0: POOR CONDITION
 */
declare function GetWeaponDegradation(weaponObject: number): number;

declare function GetWeaponDirt(weaponObject: number): number;

/**
 * Returns "WNS_INVALID" if the weapon is invalid/doesn't exist.
 */
declare function GetWeaponName(weaponHash: string | number): string;

declare function GetWeaponNameWithPermanentDegradation(
  weaponHash: string | number,
  permanentDegradationLevel: number,
): string;

declare function GetWeaponName_2(weaponHash: string | number): string;

declare function GetWeaponPermanentDegradation(weaponObject: number): number;

declare function GetWeaponScale(weaponObject: number): number;

declare function GetWeaponSoot(weaponObject: number): number;

declare function GetWeaponStatId(weaponHash: string | number): number;

declare function GetWeaponTypeFromAmmoType(ammoType: string | number): number;

declare function GetWeaponTypeFromPickupType(pickupHash: string | number): number;

declare function GetWeaponUnlock(weaponHash: string | number): number;

declare function GetWeapontypeGroup(weaponHash: string | number): number;

/**
 * Gets the model hash from the weapon hash.
 */
declare function GetWeapontypeModel(weaponHash: string | number): number;

declare function GetWeatherTypeTransition(): [number, number, number];

declare function GetWindDirection(): number[];

declare function GetWindSpeed(): number;

/**
 * Returns the coordinates of an entity-bone.
 */
declare function GetWorldPositionOfEntityBone(entity: number, boneIndex: number): number[];

declare function GetWorldWaterType(): number;

/**
 * addReason: see _ADD_AMMO_TO_PED
 */
declare function GiveDelayedWeaponToPed(
  ped: number,
  weaponHash: string | number,
  p2: number,
  p3: boolean,
  addReason: string | number,
): void;

declare function GivePedHashScenarioProp(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): boolean;

/**
 * entity can be a ped or weapon object.
 */
declare function GiveWeaponComponentToEntity(
  entity: number,
  componentHash: string | number,
  weaponHash: string | number,
  p3: boolean,
): void;

declare function GiveWeaponComponentToWeaponObject(ped: number, componentHash: string | number, p3: boolean): number;

/**
 * Gives the ped the weapon.
 * For a list of weapon groups, here is a weapons enum by Mooshe with all weapon-related hashes: https://pastebin.com/n72eW6zd
 * attachPoint: see SET_CURRENT_PED_WEAPON
 * addReason: see _ADD_AMMO_TO_PED
 */
declare function GiveWeaponToPed(
  ped: number,
  weaponHash: string | number,
  ammoCount: number,
  bForceInHand: boolean,
  bForceInHolster: boolean,
  attachPoint: number,
  bAllowMultipleCopies: boolean,
  p7: number,
  p8: number,
  addReason: string | number,
  bIgnoreUnlocks: boolean,
  p11: number,
  p12: boolean,
): number;

declare function GiveWeaponToPedWithOptions(ped: number): [boolean, number, number];

declare function GoogleAnalyticsEndEvent(): boolean;

declare function GoogleAnalyticsPopPage(pageName: string): void;

declare function GoogleAnalyticsPushPage(pageName: string): void;

declare function GoogleAnalyticsStartEvent(
  eventCategory: string,
  eventAction: string,
  eventLabel: string,
  eventValue: number,
): boolean;

declare function HasAnimDictLoaded(animDict: string): boolean;

declare function HasAnimEventFired(entity: number, actionHash: string | number): boolean;

declare function HasAnimSceneExited(animScene: number, p1: boolean): boolean;

/**
 * p3 - possibly radius?
 */
declare function HasBulletImpactedInArea(
  x: number,
  y: number,
  z: number,
  p3: number,
  p4: boolean,
  p5: boolean,
): boolean;

declare function HasBulletImpactedInBox(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: boolean,
  p7: boolean,
): boolean;

/**
 * Alias for HAS_ANIM_SET_LOADED.
 */
declare function HasClipSetLoaded(clipSet: string): boolean;

declare function HasClosestObjectOfTypeBeenBroken(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  modelHash: string | number,
  p5: number,
): boolean;

declare function HasCollisionForModelLoaded(model: string | number): boolean;

declare function HasCollisionLoadedAroundEntity(entity: number): boolean;

declare function HasCollisionLoadedAtCoord(x: number, y: number, z: number): boolean;

declare function HasEntityAnimFinished(entity: number, animDict: string, animName: string, p3: number): boolean;

declare function HasEntityBeenDamagedByAnyObject(entity: number): boolean;

declare function HasEntityBeenDamagedByAnyPed(entity: number): boolean;

declare function HasEntityBeenDamagedByAnyVehicle(entity: number): boolean;

declare function HasEntityBeenDamagedByEntity(p0: number, p1: number, p2: number, p3: number): boolean;

declare function HasEntityBeenDamagedByWeapon(entity: number, weaponName: string | number, weaponType: number): boolean;

declare function HasEntityClearLosToCoord(entity: number, x: number, y: number, z: number, flags: number): boolean;

declare function HasEntityClearLosToEntity(entity1: number, entity2: number, traceType: number): boolean;

/**
 * Has the entity1 got a clear line of sight to the other entity2 from the direction entity1 is facing.
 */
declare function HasEntityClearLosToEntityInFront(p0: number, p1: number, p2: number): boolean;

declare function HasEntityCollidedWithAnything(entity: number): boolean;

declare function HasEntityExitedAnimScene(animScene: number, entityName: string): boolean;

/**
 * HAS_*
 */
declare function HasFilledVehiclePopulation(): boolean;

declare function HasForceCleanupOccurred(cleanupFlags: number): boolean;

/**
 * Returns whether or not the specific minimap overlay has loaded.
 * @param id A minimap overlay ID.
 * @return A boolean indicating load status.
 */
declare function HasMinimapOverlayLoaded(id: number): boolean;

/**
 * Checks if the specified model has loaded into memory.
 */
declare function HasModelLoaded(model: string | number): boolean;

declare function HasMotionTypeAssetLoaded(nameHash: string | number, ped: number): boolean;

declare function HasMoveNetworkDefLoaded(name: string): boolean;

declare function HasNamedPtfxAssetLoaded(fxNameHash: string | number): boolean;

declare function HasNetworkTimeStarted(): boolean;

declare function HasObjectBeenBroken(p0: number): boolean;

/**
 * See _REQUEST_PED_EMOTIONAL_PRESET
 */
declare function HasPedEmotionalPresetLoaded(ped: number, name: string): boolean;

declare function HasPedGotWeapon(ped: number, weaponHash: string | number, p2: number, p3: boolean): boolean;

declare function HasPedGotWeaponComponent(
  ped: number,
  componentHash: string | number,
  weaponHash: string | number,
): boolean;

declare function HasPickupBeenCollected(pickup: number): boolean;

declare function HasPlayerBeenSpottedInStolenVehicle(player: number): boolean;

declare function HasPlayerDamagedAtLeastOneNonAnimalPed(player: number): boolean;

declare function HasPlayerDamagedAtLeastOnePed(player: number): boolean;

declare function HasPropSetLoaded(hash: string | number): boolean;

/**
 * Same as _HAS_PROP_SET_LOADED
 */
declare function HasPropSetLoaded_2(hash: string | number): boolean;

declare function HasPtfxAssetLoaded(): boolean;

declare function HasScenarioTypeLoaded(scenarioType: string | number, p1: boolean): boolean;

/**
 * Returns if a script has been loaded into the game. Used to see if a script was loaded after requesting.
 */
declare function HasScriptLoaded(scriptName: string): boolean;

declare function HasScriptWithNameHashLoaded(scriptHash: string | number): boolean;

declare function HasStreamedTextureDictLoaded(textureDict: string): boolean;

declare function HasStreamedTxdLoaded(txdHash: string | number): boolean;

declare function HasVehicleAssetLoaded(vehicleAsset: number): boolean;

/**
 * See REQUEST_VEHICLE_RECORDING
 */
declare function HasVehicleRecordingBeenLoaded(recording: number, script: string): boolean;

declare function HasWeaponAssetLoaded(weaponHash: string | number): boolean;

declare function HasWeaponGotWeaponComponent(weapon: number, addonHash: string | number): boolean;

declare function HideActivePointsOfInterest(): void;

declare function HideHudAndRadarThisFrame(): void;

declare function EnableHudContext(component: string | number): void;

declare function HideLoadingOnFadeThisFrame(): void;

/**
 * Hides the ped's weapon during a cutscene.
 */
declare function HidePedWeaponForScriptedCutscene(ped: number, toggle: boolean): void;

/**
 * Unequip current weapon and set current weapon to WEAPON_UNARMED.
 * p0 usually 2 in R* scripts. Doesn't seem to have any effect if changed....
 * immediately: if true it will instantly switch to unarmed
 */
declare function HidePedWeapons(ped: number, p0: number, immediately: boolean): void;

declare function HidePickupObject(pickupObject: number, toggle: boolean): void;

declare function HolsterPedWeapons(ped: number, p1: boolean, p2: boolean, p3: boolean, immediately: boolean): void;

declare function IgnoreNextRestart(toggle: boolean): void;

declare function IncapacitatedRevive(ped: number, ped2: number): void;

declare function InstantlyFillPedPopulation(): void;

declare function InstantlyFillVehiclePopulation(): void;

/**
 * Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
 */
declare function IntToParticipantindex(value: number): number;

/**
 * Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
 */
declare function IntToPlayerindex(value: number): number;

/**
 * Note: the buffer should be exactly 32 bytes long
 */
declare function IntToString(value: number, format: string, buffer: string): void;

declare function InvalidateVehicleIdleCam(): void;

/**
 * inventoryId: see _INVENTORY_GET_PED_INVENTORY_ID
 */
declare function InventoryAreLocalChangesAllowed(inventoryId: number): boolean;

declare function InventoryCopyMpInventoryToMissionInventory(
  p0: boolean,
  p1: boolean,
  bCopySatchelItems: boolean,
  bCopyEmotes: boolean,
  bCopyHorse: boolean,
  p5: boolean,
): void;

declare function InventoryCreateItemCollection(
  inventoryId: number,
  filterName: string,
  slotId: string | number,
  p3?: number,
): [number, number];

declare function InventoryCreateItemCollectionWithFilter(inventoryId: number): [number, number, number];

declare function InventoryDisableMissionInventoryPickups(): void;

declare function InventoryFitsSlotId(item: string | number, slotId: string | number): boolean;

declare function InventoryGetChildrenInSlotCount(p0: number, p1: number, p2: number): number;

declare function InventoryGetGuidFromItemid(p0: number, p1: number, p2: number, p3: number, p4: number): boolean;

/**
 * Returns a unique inventory ID for this ped.
 * For the local player ped, it is an eInventories value.
 * For other peds, it is the inventory address casted to unsigned int.
 * enum eInventories
 * {
 * INVENTORY_INVALID,
 * INVENTORY_SP_PLAYER,
 * INVENTORY_MP_PLAYER,
 * INVENTORY_MP_MISSION,
 * INVENTORY_SECOND_SCREEN,
 * INVENTORY_SP_BACKUP,
 * INVENTORY_SP_SNAPSHOT,
 * INVENTORY_0xDE2AE452,
 * INVENTORY_0x399D9B3A,
 * INVENTORY_0x4BD43FA7,
 * INVENTORY_0x9529D251,
 * INVENTORY_0xA75776AC,
 * INVENTORY_MAX_ID = 11,
 * INVENTORY_IDS_COUNT
 * };
 */
declare function InventoryGetInventoryIdFromPed(ped: number): number;

declare function InventoryGetInventoryItem(p0: number, p1: number, p2: number, p3: number): boolean;

declare function InventoryGetItemExpiryTime(itemGUID: number): [number, number];

declare function InventoryGetItemFromCollectionIndex(
  collectionIndex: number,
  itemIndex: number,
  itemData?: number,
): [boolean, number];

declare function InventoryIsGuidValid(guid: number): [boolean, number];

declare function InventoryIsItemExpired(itemGUID: number): [boolean, number];

declare function InventoryIsPlayerInventoryMirroringTransactions(): boolean;

declare function InventoryReleaseItemCollection(p0: number): boolean;

declare function InventoryUseMissionInventory(enable: boolean, mirrorTransactions: boolean): void;

declare function InvokeFunctionReference(
  referenceIdentity: string,
  argsSerialized: string,
  argsLength: number,
  retvalLength?: number,
): [string, number];

declare function IsAceAllowed(object: string): boolean;

declare function IsAimCamActive(): boolean;

declare function IsAmbientSpeechDisabled(ped: number): boolean;

declare function IsAmbientSpeechPlaying(ped: number): boolean;

declare function IsAmmoValid(ammoHash: string | number): boolean;

declare function IsAnEntity(handle: number): boolean;

declare function IsAnimSceneExitingThisFrame(animScene: number): boolean;

declare function IsAnimSceneFinished(animScene: number, p1: boolean): boolean;

declare function IsAnimSceneInSection(animScene: number, sectionName: string, p2: boolean): boolean;

declare function IsAnimSceneLoaded(animScene: number, p1: boolean, p2: boolean): boolean;

declare function IsAnimSceneLoading(animScene: number, p1: boolean): boolean;

declare function IsAnimSceneMetadataLoaded(animScene: number, p1: boolean): boolean;

declare function IsAnimScenePaused(animScene: number): boolean;

declare function IsAnimSceneRunning(animScene: number, p1: boolean): boolean;

declare function IsAnimalInteractionPossible(p0: number, p1: number): boolean;

declare function IsAnimalVocalizationPlaying(pedHandle: number): boolean;

declare function IsAnyHostilePedNearPoint(ped: number, x: number, y: number, z: number, radius: number): boolean;

declare function IsAnyPedNearPoint(x: number, y: number, z: number, radius: number): boolean;

declare function IsAnyPedShootingInArea(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
  p6: boolean,
  p7: boolean,
): boolean;

declare function IsAnySpeechPlaying(ped: number): boolean;

declare function IsAnyUiappActive(): boolean;

declare function IsAnyUiappRunning(): boolean;

declare function IsAnyVehicleNearPoint(x: number, y: number, z: number, radius: number): boolean;

declare function IsAttributeCoreOverpowered(ped: number, coreIndex: number): boolean;

/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 */
declare function IsAttributeOverpowered(ped: number, attributeIndex: number): boolean;

declare function IsAudioSceneActive(scene: string): boolean;

declare function IsBackgroundScript(threadId: number): boolean;

declare function IsBaseACoverPoint(handle: number): boolean;

declare function IsBaseAPersistentCharacter(handle: number): boolean;

/**
 * <!-- Native implemented by Disquse. 0xFFF65C63 -->
 * Returns true if the minimap is currently expanded. False if it's the normal minimap state.
 * Use [`IsBigmapFull`](#\_0x66EE14B2) to check if the full map is currently revealed on the minimap.
 * @return A bool indicating if the minimap is currently expanded or normal state.
 */
declare function IsBigmapActive(): boolean;

/**
 * <!-- Native implemented by Disquse. 0x66EE14B2 -->
 * @return Returns true if the full map is currently revealed on the minimap.
Use [`IsBigmapActive`](#\_0xFFF65C63) to check if the minimap is currently expanded or in it's normal state.
 */
declare function IsBigmapFull(): boolean;

declare function IsBitSet(address: number, offset: number): boolean;

declare function IsBlipAttachedToAnyEntity(blip: number): boolean;

declare function IsBlipOnMinimap(blip: number): boolean;

declare function IsBulletInAngledArea(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: boolean,
): boolean;

declare function IsBulletInArea(p0: number, p1: number, p2: number, p3: number, p4: boolean): boolean;

declare function IsBulletInBox(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: boolean,
): boolean;

/**
 * Returns whether or not the passed camera handle is active.
 */
declare function IsCamActive(cam: number): boolean;

declare function IsCamInterpolating(cam: number): boolean;

declare function IsCamRendering(cam: number): boolean;

declare function IsCamShaking(cam: number): boolean;

declare function IsCinematicCamRendering(): boolean;

/**
 * Returns true if the collision at the specified coords is marked as being outside (false if there's an interior)
 */
declare function IsCollisionMarkedOutside(x: number, y: number, z: number): boolean;

declare function IsControlActionValid(control: string | number, padIndex: number): boolean;

declare function IsControlEnabled(padIndex: number, control: string | number): boolean;

declare function IsControlJustPressed(padIndex: number, control: string | number): boolean;

declare function IsControlJustReleased(padIndex: number, control: string | number): boolean;

declare function IsControlPressed(padIndex: number, control: string | number): boolean;

declare function IsControlReleased(padIndex: number, control: string | number): boolean;

declare function IsDamageTrackerActiveOnNetworkId(netID: number): boolean;

declare function IsDeadeyeAbilityLocked(player: number, abilityType: number): boolean;

declare function IsDeathFailCameraRunning(): boolean;

declare function IsDecalAlive(decal: number): boolean;

declare function IsDisabledControlJustPressed(padIndex: number, control: string | number): boolean;

declare function IsDisabledControlJustReleased(padIndex: number, control: string | number): boolean;

declare function IsDisabledControlPressed(padIndex: number, control: string | number): boolean;

declare function IsDlcPresent(dlcHash: string | number): boolean;

declare function IsDoorClosed(doorHash: string | number): boolean;

declare function IsDoorRegisteredWithNetwork(doorHash: string | number): boolean;

declare function IsDoorRegisteredWithSystem(doorHash: string | number): boolean;

declare function IsDraftVehicle(vehicle: number): boolean;

declare function IsDrivebyTaskUnderneathDrivingTask(ped: number): boolean;

/**
 * Returns whether or not a browser is created for a specified DUI browser object.
 * @param duiObject The DUI browser handle.
 * @return A boolean indicating TRUE if the browser is created.
 */
declare function IsDuiAvailable(duiObject: number): boolean;

/**
 * Gets whether or not this is the CitizenFX server.
 * @return A boolean value.
 */
declare function IsDuplicityVersion(): boolean;

/**
 * Hardcoded to return false.
 */
declare function IsDurangoVersion(): boolean;

declare function IsEmoteTaskRunning(p0: number, p1: number): boolean;

declare function IsEntityAMissionEntity(entity: number): boolean;

declare function IsEntityAPed(entity: number): boolean;

declare function IsEntityAVehicle(entity: number): boolean;

declare function IsEntityAnObject(entity: number): boolean;

/**
 * Checks if entity is within x/y/zSize distance of x/y/z.
 * Last three are unknown ints, almost always p7 = 0, p8 = 1, p9 = 0
 */
declare function IsEntityAtCoord(
  entity: number,
  xPos: number,
  yPos: number,
  zPos: number,
  xSize: number,
  ySize: number,
  zSize: number,
  p7: boolean,
  p8: boolean,
  p9: number,
): boolean;

/**
 * Checks if entity1 is within the box defined by x/y/zSize of entity2.
 * Last three parameters are almost alwasy p5 = 0, p6 = 1, p7 = 0
 */
declare function IsEntityAtEntity(
  entity1: number,
  entity2: number,
  xSize: number,
  ySize: number,
  zSize: number,
  p5: boolean,
  p6: boolean,
  p7: number,
): boolean;

declare function IsEntityAttached(entity: number): boolean;

declare function IsEntityAttachedToAnyObject(entity: number): boolean;

declare function IsEntityAttachedToAnyPed(entity: number): boolean;

declare function IsEntityAttachedToAnyVehicle(entity: number): boolean;

declare function IsEntityAttachedToEntity(_from: number, to: number): boolean;

declare function IsEntityConsumedByFire(entity: number): boolean;

declare function IsEntityDead(entity: number): boolean;

declare function IsEntityExitingAnimSceneThisFrame(animScene: number, entityName: string): boolean;

declare function IsEntityFocus(entity: number): boolean;

/**
 * Getter for FREEZE_ENTITY_POSITION
 */
declare function IsEntityFrozen(entity: number): boolean;

declare function IsEntityFullyLooted(entity: number): boolean;

declare function IsEntityGhostedToLocalPlayer(entity: number): boolean;

declare function IsEntityInAir(entity: number, p1: number): boolean;

/**
 * Creates a spherical cone at origin that extends to surface with the angle specified. Then returns true if the entity is inside the spherical cone
 * Angle is measured in degrees.
 */
declare function IsEntityInAngledArea(
  entity: number,
  originX: number,
  originY: number,
  originZ: number,
  edgeX: number,
  edgeY: number,
  edgeZ: number,
  angle: number,
  p8: boolean,
  p9: boolean,
  p10: number,
): boolean;

declare function IsEntityInArea(
  entity: number,
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
  p7: boolean,
  p8: boolean,
  p9: number,
): boolean;

declare function IsEntityInVolume(entity: number, volume: number, p2: boolean, p3: number): boolean;

declare function IsEntityInWater(entity: number): boolean;

declare function IsEntityOccluded(entity: number): boolean;

declare function IsEntityOnFire(entity: number): boolean;

declare function IsEntityOnScreen(entity: number): boolean;

declare function IsEntityOnTrainTrack(entity: number): boolean;

declare function IsEntityOwnedByPersistenceSystem(entity: number): boolean;

declare function IsEntityPlayingAnim(entity: number, animDict: string, animName: string, taskFlag: number): boolean;

declare function IsEntityPlayingAnimScene(entity: number, animScene: number): boolean;

declare function IsEntityStatic(entity: number): boolean;

declare function IsEntityTouchingEntity(entity: number, targetEntity: number): boolean;

declare function IsEntityTouchingModel(entity: number, modelHash: string | number): boolean;

declare function IsEntityUnderwater(entity: number, p1: boolean): boolean;

declare function IsEntityUpright(entity: number, angle: number): boolean;

declare function IsEntityUpsidedown(entity: number): boolean;

declare function IsEntityVisible(entity: number): boolean;

declare function IsEntityVisibleToScript(entity: number): boolean;

declare function IsEntityWaitingForWorldCollision(entity: number): boolean;

declare function IsEventInQueue(ped: number, eventType: string | number): boolean;

/**
 * explosionType: see ADD_EXPLOSION
 */
declare function IsExplosionActiveInArea(
  explosionType: number,
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
): boolean;

/**
 * explosionType: see ADD_EXPLOSION
 */
declare function IsExplosionInAngledArea(
  explosionType: number,
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
  angle: number,
): boolean;

/**
 * explosionType: see ADD_EXPLOSION
 */
declare function IsExplosionInArea(
  explosionType: number,
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
): boolean;

/**
 * explosionType: see ADD_EXPLOSION
 */
declare function IsExplosionInSphere(explosionType: number, x: number, y: number, z: number, radius: number): boolean;

/**
 * explosionType: see ADD_EXPLOSION
 */
declare function IsExplosionInVolume(explosionType: number, volume: number): boolean;

declare function IsFirstPersonAimCamActive(): boolean;

declare function IsFirstPersonCameraActive(p0: number, p1: number, p2: number): boolean;

declare function IsFollowVehicleCamActive(): boolean;

declare function IsGameSessionStateMachineIdle(): boolean;

declare function IsGameplayCamLookingBehind(): boolean;

declare function IsGameplayCamRendering(): boolean;

declare function IsGameplayCamShaking(): boolean;

declare function IsGameplayHintActive(): boolean;

declare function IsGlobalBlockValid(index: number): boolean;

/**
 * Checks whether the horn of a vehicle is currently played.
 */
declare function IsHornActive(vehicle: number): boolean;

declare function IsHudHidden(): boolean;

declare function IsInItemset(itemset: number, p1: number): boolean;

declare function IsIncidentValid(incidentId: number): boolean;

declare function IsInteriorEntitySetActive(interior: number, entitySetName: string): boolean;

declare function IsInteriorEntitySetValid(interior: number, entitySetName: string): boolean;

declare function IsInteriorReady(interior: number): boolean;

/**
 * Hardcoded to return false.
 */
declare function IsInteriorRenderingDisabled(): boolean;

declare function IsInteriorScene(): boolean;

/**
 * Old name: _IS_IMAP_ACTIVE_2
 */
declare function IsIplActiveByHash(imapHash: string | number): boolean;

/**
 * Old name: _IS_IMAP_ACTIVE
 */
declare function IsIplActiveHash(imapHash: string | number): boolean;

declare function IsItemsetValid(itemset: number): boolean;

declare function IsLawIncidentActive(player: number): boolean;

declare function IsLoadSceneActive(): boolean;

declare function IsLoadSceneLoaded(): boolean;

/**
 * Same as GET_IS_LOADING_SCREEN_ACTIVE
 */
declare function IsLoadingScreenVisible(): boolean;

declare function IsLocationSpawnSafe(p0: number, p1: number): boolean;

declare function IsLookInverted(): boolean;

/**
 * Hardcoded to return false.
 */
declare function IsMagDemo_1Active(): boolean;

declare function IsMapEntityPinned(p0: number): boolean;

declare function IsMetapedOutfitRequestValid(requestId: number): boolean;

declare function IsMetapedUsingComponent(ped: number, component: string | number): boolean;

declare function IsMinigameInProgress(): boolean;

declare function IsMissionCreatorActive(): boolean;

declare function IsModelAPed(model: string | number): boolean;

/**
 * Returns whether the specified model represents a vehicle.
 */
declare function IsModelAVehicle(model: string | number): boolean;

declare function IsModelAnObject(model: string | number): boolean;

/**
 * Returns whether the specified model exists in the game.
 */
declare function IsModelInCdimage(model: string | number): boolean;

/**
 * Returns whether the specified model is valid
 */
declare function IsModelValid(model: string | number): boolean;

declare function IsMountSeatFree(mount: number, seat: number): boolean;

declare function IsMountedWeaponTaskUnderneathDrivingTask(ped: number): boolean;

declare function IsMoveBlendRatioRunning(ped: number): boolean;

declare function IsMoveBlendRatioSprinting(ped: number): boolean;

declare function IsMoveBlendRatioStill(ped: number): boolean;

declare function IsMoveBlendRatioWalking(ped: number): boolean;

declare function IsMpGamerTagActive(gamerTagId: number): boolean;

declare function IsMpGamerTagActiveOnEntity(gamerTagId: number, entity: number): boolean;

declare function IsNamedRendertargetLinked(modelHash: string | number): boolean;

declare function IsNamedRendertargetRegistered(name: string): boolean;

/**
 * Returns whether navmesh for the region is loaded.
 */
declare function IsNavmeshLoadedInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;

declare function IsNetworkIdOwnedByParticipant(netId: number): boolean;

/**
 * Checks if keyboard input is enabled during NUI focus using `SET_NUI_FOCUS_KEEP_INPUT`.
 * @return True or false.
 */
declare function IsNuiFocusKeepingInput(): boolean;

/**
 * Returns the current NUI focus state previously set with `SET_NUI_FOCUS`.
 * @return True or false.
 */
declare function IsNuiFocused(): boolean;

declare function IsObjectAPickup(object: number): boolean;

/**
 * Note: this native was added in build 1311.16
 */
declare function IsObjectReassignmentInProgress(): boolean;

declare function IsObjectVisible(object: number): boolean;

/**
 * Hardcoded to return false.
 */
declare function IsOrbisVersion(): boolean;

declare function IsPauseMenuActive(): boolean;

/**
 * Hardcoded to return true.
 */
declare function IsPcVersion(): boolean;

declare function IsPedAPlayer(ped: number): boolean;

declare function IsPedActiveInScenario(p0: number, p1: number): boolean;

declare function IsPedAimingFromCover(ped: number): boolean;

declare function IsPedArmed(ped: number, flags: number): boolean;

declare function IsPedArrestingAnyPed(ped: number): boolean;

/**
 * This function is hard-coded to always return false.
 */
declare function IsPedBeingArrested(ped: number): boolean;

declare function IsPedBeingDragged(ped: number): boolean;

declare function IsPedBeingHogtied(ped: number): boolean;

declare function IsPedBeingJacked(ped: number): boolean;

declare function IsPedBeingStealthKilled(ped: number): boolean;

declare function IsPedBeingStunned(ped: number, p1: number): boolean;

declare function IsPedCarryingSomething(ped: number): boolean;

declare function IsPedCarryingWeapon(ped: number, weaponHash: string | number): boolean;

declare function IsPedChild(ped: number): boolean;

declare function IsPedClimbing(ped: number): boolean;

declare function IsPedClimbingLadder(ped: number): boolean;

declare function IsPedCuffed(ped: number): boolean;

declare function IsPedDeadOrDying(ped: number, p1: boolean): boolean;

declare function IsPedDecomposed(ped: number): boolean;

declare function IsPedDefensiveAreaActive(ped: number, p1: boolean): boolean;

declare function IsPedDiving(ped: number): boolean;

declare function IsPedDragging(ped: number): boolean;

declare function IsPedDrunk(ped: number): boolean;

declare function IsPedDuelling(ped: number): boolean;

declare function IsPedEnteringAnyTransport(ped: number): boolean;

declare function IsPedEnteringTransport(ped: number, transportEntity: number, p2: boolean): boolean;

/**
 * Presumably returns the Entity that the Ped is currently diving out of the way of.
 */
declare function IsPedEvasiveDiving(ped: number, evadingEntity?: number): [boolean, number];

declare function IsPedExclusiveDriverOfVehicle(ped: number, vehicle: number, outIndex?: number): [boolean, number];

declare function IsPedExitingScenario(ped: number, p1: boolean): boolean;

declare function IsPedExitingTransport(ped: number, transportEntity: number): boolean;

/**
 * angle is ped's view cone
 */
declare function IsPedFacingPed(ped: number, otherPed: number, angle: number): boolean;

declare function IsPedFalling(ped: number): boolean;

declare function IsPedFallingOver(ped: number): boolean;

/**
 * Gets a value indicating whether this ped's health is below its fatally injured threshold. The default threshold is 100.
 * If the handle is invalid, the function returns true.
 */
declare function IsPedFatallyInjured(ped: number): boolean;

declare function IsPedFleeing(ped: number): boolean;

declare function IsPedFullyOnMount(ped: number, p1: boolean): boolean;

declare function IsPedGettingIntoAVehicle(ped: number): boolean;

declare function IsPedGettingUp(ped: number): boolean;

declare function IsPedGoingIntoCover(ped: number): boolean;

declare function IsPedGroupLeader(ped: number, groupId: number): boolean;

declare function IsPedGroupMember(p0: number, p1: number, p2: number): boolean;

declare function IsPedHangingOnToVehicle(ped: number): boolean;

declare function IsPedHeadingTowardsPosition(ped: number, x: number, y: number, z: number, p4: number): boolean;

declare function IsPedHeadtrackingEntity(ped: number, entity: number): boolean;

declare function IsPedHeadtrackingPed(ped1: number, ped2: number): boolean;

declare function IsPedHogtied(ped: number): boolean;

declare function IsPedHogtying(ped: number): boolean;

/**
 * Returns true/false if the ped is/isn't humanoid.
 */
declare function IsPedHuman(ped: number): boolean;

declare function IsPedInAnyBoat(ped: number): boolean;

declare function IsPedInAnyHeli(ped: number): boolean;

declare function IsPedInAnyPlane(ped: number): boolean;

declare function IsPedInAnyTaxi(ped: number): boolean;

declare function IsPedInAnyTrain(ped: number): boolean;

/**
 * Gets a value indicating whether the specified ped is in any vehicle.
 */
declare function IsPedInAnyVehicle(ped: number, atGetIn: boolean): boolean;

declare function IsPedInCombat(ped: number, target: number): boolean;

declare function IsPedInCover(ped: number, p1: boolean, p2: boolean): boolean;

declare function IsPedInCoverFacingLeft(ped: number): boolean;

declare function IsPedInCurrentConversation(p0: number, p1: number, p2: number): boolean;

declare function IsPedInFlyingVehicle(ped: number): boolean;

declare function IsPedInGroup(ped: number): boolean;

declare function IsPedInHitReact(ped: number): boolean;

/**
 * Notes: The function only returns true while the ped is:
 * A.) Swinging a random melee attack (including pistol-whipping)
 * B.) Reacting to being hit by a melee attack (including pistol-whipping)
 * C.) Is locked-on to an enemy (arms up, strafing/skipping in the default fighting-stance, ready to dodge+counter).
 * You don't have to be holding the melee-targetting button to be in this stance; you stay in it by default for a few seconds after swinging at someone. If you do a sprinting punch, it returns true for the duration of the punch animation and then returns false again, even if you've punched and made-angry many peds
 */
declare function IsPedInMeleeCombat(ped: number): boolean;

declare function IsPedInModel(ped: number, modelHash: string | number): boolean;

/**
 * Gets a value indicating whether the specified ped is in the specified vehicle.
 */
declare function IsPedInVehicle(ped: number, vehicle: number, atGetIn: boolean): boolean;

/**
 * This native checks if a ped is on the ground, in pain from a (gunshot) wound.
 */
declare function IsPedInWrithe(ped: number): boolean;

declare function IsPedIncapacitated(ped: number): boolean;

/**
 * Gets a value indicating whether this ped's health is below its injured threshold.
 * The default threshold is 100.
 */
declare function IsPedInjured(ped: number): boolean;

declare function IsPedJacking(ped: number): boolean;

declare function IsPedJumping(ped: number): boolean;

declare function IsPedLassoed(ped: number): boolean;

declare function IsPedLeadingHorse(ped: number): boolean;

/**
 * Returns true/false if the ped is/isn't male.
 */
declare function IsPedMale(ped: number): boolean;

declare function IsPedModel(ped: number, modelHash: string | number): boolean;

declare function IsPedModelSuppressed(model: string | number): boolean;

declare function IsPedOnFoot(ped: number): boolean;

declare function IsPedOnMount(ped: number): boolean;

declare function IsPedOnSpecificVehicle(ped: number, vehicle: number): boolean;

/**
 * Gets a value indicating whether the specified ped is on top of any vehicle.
 * Return 1 when ped is on vehicle.
 * Return 0 when ped is not on a vehicle.
 */
declare function IsPedOnVehicle(ped: number, p1: boolean): boolean;

/**
 * Returns true if the ped is currently opening a door (CTaskOpenDoor).
 */
declare function IsPedOpeningADoor(ped: number): boolean;

declare function IsPedPerformingMeleeAction(p0: number, p1: number, p2: number): boolean;

declare function IsPedPlantingBomb(ped: number): boolean;

declare function IsPedProne(ped: number): boolean;

/**
 * If the ped handle passed through the parenthesis is in a ragdoll state this will return true.
 */
declare function IsPedRagdoll(ped: number): boolean;

declare function IsPedReadyToRender(ped: number): boolean;

/**
 * Returns whether the specified ped is reloading.
 */
declare function IsPedReloading(ped: number): boolean;

/**
 * eventType: https://alloc8or.re/rdr3/doc/enums/eEventType.txt
 */
declare function IsPedRespondingToEvent(ped: number, eventType: string | number): boolean;

declare function IsPedRespondingToThreat(ped: number): boolean;

declare function IsPedRunning(ped: number): boolean;

declare function IsPedRunningInspectionTask(ped: number): boolean;

declare function IsPedRunningMobilePhoneTask(ped: number): boolean;

declare function IsPedRunningRagdollTask(ped: number): boolean;

declare function IsPedRunningTaskItemInteraction(ped: number): boolean;

declare function IsPedScenarioReactLooking(ped: number, p1: boolean): boolean;

/**
 * Returns whether the specified ped is shooting.
 */
declare function IsPedShooting(ped: number): boolean;

declare function IsPedSitting(ped: number): boolean;

/**
 * Detect if ped is in any vehicle
 * [True/False]
 */
declare function IsPedSittingInAnyVehicle(ped: number): boolean;

/**
 * Detect if ped is sitting in the specified vehicle
 * [True/False]
 */
declare function IsPedSittingInVehicle(ped: number, vehicle: number): boolean;

declare function IsPedSliding(ped: number): boolean;

declare function IsPedSprinting(ped: number): boolean;

declare function IsPedStill(ped: number): boolean;

declare function IsPedStopped(ped: number): boolean;

declare function IsPedSwimming(ped: number): boolean;

declare function IsPedSwimmingUnderWater(ped: number): boolean;

declare function IsPedUsingActionMode(ped: number): boolean;

declare function IsPedUsingAnyScenario(ped: number): boolean;

/**
 * Equivalent to IS_PED_USING_SCENARIO from V but takes a hash instead of a string.
 */
declare function IsPedUsingScenarioHash(ped: number, scenarioHash: string | number): boolean;

declare function IsPedUsingThisScenario(ped: number, scenario: number): boolean;

declare function IsPedVaulting(ped: number): boolean;

declare function IsPedWalking(ped: number): boolean;

declare function IsPedWeaponReadyToShoot(ped: number): boolean;

declare function IsPersistentCharacterDead(persChar: number): boolean;

declare function IsPersistentCharacterValid(persChar: number): boolean;

declare function IsPickupTypeValid(pickupHash: string | number): boolean;

declare function IsPlaybackGoingOnForVehicle(vehicle: number): boolean;

declare function IsPlaybackUsingAiGoingOnForVehicle(vehicle: number): boolean;

/**
 * Return true while player is being arrested / busted.
 * If atArresting is set to 1, this function will return 1 when player is being arrested (while player is putting his hand up, but still have control)
 * If atArresting is set to 0, this function will return 1 only when the busted screen is shown.
 */
declare function IsPlayerBeingArrested(player: number, atArresting: boolean): boolean;

/**
 * Returns TRUE if the player ('s ped) is climbing at the moment.
 */
declare function IsPlayerClimbing(player: number): boolean;

/**
 * Returns whether the player can control himself.
 */
declare function IsPlayerControlOn(player: number): boolean;

declare function IsPlayerDead(player: number): boolean;

/**
 * Gets a value indicating whether the specified player is currently aiming freely.
 */
declare function IsPlayerFreeAiming(player: number): boolean;

/**
 * Gets a value indicating whether the specified player is currently aiming freely at the specified entity.
 */
declare function IsPlayerFreeAimingAtEntity(player: number, entity: number): boolean;

declare function IsPlayerFreeFocusing(player: number): boolean;

/**
 * Checks whether the specified player has a Ped, the Ped is not dead, is not injured and is not arrested.
 */
declare function IsPlayerPlaying(player: number): boolean;

declare function IsPlayerReadyForCutscene(player: number): boolean;

/**
 * Returns true if the player is riding a train.
 */
declare function IsPlayerRidingTrain(player: number): boolean;

declare function IsPlayerScriptControlOn(player: number): boolean;

declare function IsPlayerSwitchInProgress(): boolean;

declare function IsPlayerTargettingAnything(player: number): boolean;

declare function IsPlayerTargettingEntity(player: number, entity: number, p2: boolean): boolean;

declare function IsPlayerTeleportActive(): boolean;

declare function IsPlayerWantedLevelGreater(player: number, wantedLevel: number): boolean;

declare function IsPointInAngledArea(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: boolean,
  p11: boolean,
): boolean;

/**
 * Old name: _IS_POSITION_INSIDE_VOLUME
 */
declare function IsPointInVolume(volume: number, x: number, y: number, z: number): boolean;

/**
 * Gets a value indicating whether the specified position is on a road.
 */
declare function IsPointOnRoad(x: number, y: number, z: number, vehicle: number): boolean;

declare function IsPopzoneValid(popZone: number): boolean;

declare function IsPositionInsideImapStreamingExtents(
  imapHash: string | number,
  x: number,
  y: number,
  z: number,
): boolean;

declare function IsPositionOccupied(
  x: number,
  y: number,
  z: number,
  range: number,
  p4: boolean,
  p5: boolean,
  p6: boolean,
  p7: boolean,
  p8: boolean,
  p9: number,
  p10: boolean,
): boolean;

declare function IsPrincipalAceAllowed(principal: string, object: string): boolean;

/**
 * Determines whether there is a projectile within the specified coordinates. The coordinates form a rectangle.
 * ownedByPlayer = only projectiles fired by the player will be detected.
 */
declare function IsProjectileInArea(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
  ownedByPlayer: boolean,
): boolean;

declare function IsProjectileTypeInAngledArea(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: boolean,
): boolean;

/**
 * Determines whether there is a projectile of a specific type within the specified coordinates. The coordinates form a rectangle.
 */
declare function IsProjectileTypeInArea(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
  _type: number,
  p7: boolean,
): boolean;

declare function IsProjectileTypeWithinDistance(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: boolean,
): boolean;

declare function IsPropSetFullyLoaded(propSet: number): boolean;

declare function IsPropSetVisible(propSet: number): boolean;

declare function IsRadarHidden(): boolean;

declare function IsRadarHiddenByScript(): boolean;

declare function IsRadarPreferenceSwitchedOn(): boolean;

declare function IsRenderedSceneLoaded(): boolean;

declare function IsScenarioGroupEnabled(scenarioGroup: string): boolean;

declare function IsScenarioGroupEnabledHash(scenarioGroup: string | number): boolean;

declare function IsScenarioOccupied(p0: number, p1: number, p2: number, p3: number, p4: boolean): boolean;

declare function IsScenarioPointActive(scenario: number): boolean;

declare function IsScenarioPointFlagSet(scenario: number, flag: number): boolean;

declare function IsScenarioTypeEnabled(scenarioType: string): boolean;

declare function IsScreenFadedIn(): boolean;

declare function IsScreenFadedOut(): boolean;

declare function IsScreenFadingIn(): boolean;

declare function IsScreenFadingOut(): boolean;

declare function IsScriptedConversationLoaded(p0: string): boolean;

declare function IsScriptedConversationPlaying(p0: string): boolean;

declare function IsScriptedSpeechPlaying(p0: number): boolean;

/**
 * seatIndex: see CREATE_PED_INSIDE_VEHICLE
 */
declare function IsSeatWarpOnly(vehicle: number, seatIndex: number): boolean;

/**
 * eventType: https://alloc8or.re/rdr3/doc/enums/eEventType.txt
 */
declare function IsShockingEventInSphere(
  eventType: string | number,
  x: number,
  y: number,
  z: number,
  radius: number,
): boolean;

declare function IsSphereVisible(x: number, y: number, z: number, radius: number): boolean;

declare function IsSphereVisibleToAnotherMachine(p0: number, p1: number, p2: number, p3: number, p4: number): boolean;

declare function IsSphereVisibleToPlayer(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): boolean;

declare function IsSrlLoaded(): boolean;

/**
 * Hardcoded to return false.
 */
declare function IsStadiaVersion(): boolean;

declare function IsStaticVegModifierEnabled(p0: string | number): boolean;

declare function IsStreamPlaying(p0: number): boolean;

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * Returns whether an asynchronous streaming file registration completed.
 * @param registerAs The file name to check, for example `asset.ydr`.
 * @return Whether or not the streaming file has been registered.
 */
declare function IsStreamingFileReady(registerAs: string): boolean;

declare function IsStringNull(_string: string): boolean;

declare function IsStringNullOrEmpty(_string: string): boolean;

/**
 * Returns true if the entire string consists only of space characters.
 */
declare function IsStringNullOrEmptyOrSpaces(_string: string): boolean;

declare function IsSubtitlePreferenceSwitchedOn(): boolean;

declare function IsSystemUiBeingDisplayed(): boolean;

declare function IsTargetPedConstrainedByPedUsingBolas(ped: number, targetPed: number): boolean;

declare function IsTaskMoveNetworkActive(ped: number): boolean;

declare function IsTaskMoveNetworkReadyForTransition(ped: number): boolean;

declare function IsTeamCarriableEntity(p0: number, p1: number): boolean;

declare function IsTextureValid(textureId: number): boolean;

declare function IsThisModelABoat(model: string | number): boolean;

declare function IsThisModelAHorse(model: string | number): boolean;

declare function IsThisModelATrain(model: string | number): boolean;

declare function IsThreadActive(threadId: number, p1: boolean): boolean;

declare function IsThreadExitRequested(): boolean;

declare function IsThreadExitRequestedForThreadWithThisId(threadId: number): boolean;

/**
 * Subtracts the second argument from the first, then returns whether the result is negative.
 */
declare function IsTimeLessThan(timeA: number, timeB: number): boolean;

/**
 * Subtracts the first argument from the second, then returns whether the result is negative.
 */
declare function IsTimeMoreThan(timeA: number, timeB: number): boolean;

/**
 * returns whether or not a ped is visible within your FOV, not this check auto's to false after a certain distance.
 * Target needs to be tracked.. won't work otherwise.
 */
declare function IsTrackedPedVisible(ped: number): boolean;

declare function IsTrackedPointValid(point: number): boolean;

declare function IsTrackedPointVisible(point: number): boolean;

declare function IsTrainWaitingAtStation(train: number): boolean;

/**
 * IS_*
 */
declare function IsTvPlaylistItemPlaying(videoCliphash: string | number): boolean;

declare function IsUiappActiveByHash(appNameHash: string | number): boolean;

declare function IsUiappRunning(appName: string): boolean;

declare function IsUiappRunningByHash(appNameHash: string | number): boolean;

declare function IsUiappTransitioningByHash(appNameHash: string | number): boolean;

/**
 * padIndex is not used
 */
declare function IsUsingKeyboard(padIndex: number): boolean;

declare function IsValidInterior(interior: number): boolean;

declare function IsVehicleAlarmSet(vehicle: number): boolean;

declare function IsVehicleDoorBroken(vehicle: number, doorIndex: number): boolean;

/**
 * doorIndex:
 * 0 = Front Left Door
 * 1 = Front Right Door
 * 2 = Back Left Door
 * 3 = Back Right Door
 * 4 = Hood
 * 5 = Trunk
 * 6 = Trunk2
 */
declare function IsVehicleDoorFullyOpen(vehicle: number, doorIndex: number): boolean;

declare function IsVehicleDriveable(vehicle: number, p1: boolean, p2: boolean): boolean;

declare function IsVehicleEngineStarting(vehicle: number): boolean;

declare function IsVehicleExtraTurnedOn(vehicle: number, extraId: number): boolean;

declare function IsVehicleInBurnout(vehicle: number): boolean;

declare function IsVehicleInteriorLightOn(vehicle: number): boolean;

declare function IsVehicleModel(vehicle: number, model: string | number): boolean;

declare function IsVehicleNeedsToBeHotwired(vehicle: number): boolean;

/**
 * Returns true if the id is non zero.
 */
declare function IsVehicleNodeIdValid(vehicleNodeId: number): boolean;

declare function IsVehicleOnAllWheels(vehicle: number): boolean;

declare function IsVehiclePreviouslyOwnedByPlayer(vehicle: number): boolean;

declare function IsVehicleSeatAccessible(
  ped: number,
  vehicle: number,
  seatIndex: number,
  side: boolean,
  onEnter: boolean,
): boolean;

/**
 * Check if a vehicle seat is free.
 * -1 being the driver seat.
 * Use GET_VEHICLE_MAX_NUMBER_OF_PASSENGERS(vehicle) - 1 for last seat index.
 */
declare function IsVehicleSeatFree(vehicle: number, seatIndex: number): boolean;

/**
 * Returns true if the vehicle's current speed is less than, or equal to 0.0025f.
 * For some vehicles it returns true if the current speed is <= 0.00039999999.
 */
declare function IsVehicleStopped(vehicle: number): boolean;

declare function IsVehicleStuckTimerUp(vehicle: number, p1: number, p2: number): boolean;

/**
 * Requires a visibility tracker on the vehicle (TRACK_VEHICLE_VISIBILITY)
 */
declare function IsVehicleVisible(vehicle: number): boolean;

declare function IsVehicleWanted(vehicle: number): boolean;

declare function IsVehicleWindowIntact(vehicle: number, windowIndex: number): boolean;

declare function IsVehicleWrecked(vehicle: number): boolean;

/**
 * Hardcoded to return false.
 */
declare function IsVideoEditorRunning(): boolean;

declare function IsVolumeLockRequestValid(volLockRequestId: number): boolean;

declare function IsWaypointActive(): boolean;

declare function IsWaypointPlaybackGoingOnForPed(p0: number, p1: number): boolean;

declare function IsWaypointPlaybackGoingOnForVehicle(p0: number, p1: number): boolean;

declare function IsWeaponAGun(weaponHash: string | number): boolean;

declare function IsWeaponBinoculars(weaponHash: string | number): boolean;

declare function IsWeaponBow(weaponHash: string | number): boolean;

declare function IsWeaponKnife(weaponHash: string | number): boolean;

declare function IsWeaponLantern(weaponHash: string | number): boolean;

declare function IsWeaponLasso(weaponHash: string | number): boolean;

declare function IsWeaponMeleeWeapon(weaponHash: string | number): boolean;

declare function IsWeaponOneHanded(weaponHash: string | number): boolean;

declare function IsWeaponPistol(weaponHash: string | number): boolean;

declare function IsWeaponRepeater(weaponHash: string | number): boolean;

declare function IsWeaponRevolver(weaponHash: string | number): boolean;

declare function IsWeaponRifle(weaponHash: string | number): boolean;

declare function IsWeaponShotgun(weaponHash: string | number): boolean;

declare function IsWeaponSilent(weaponHash: string | number): boolean;

declare function IsWeaponSniper(weaponHash: string | number): boolean;

declare function IsWeaponThrowable(weaponHash: string | number): boolean;

declare function IsWeaponTorch(weaponHash: string | number): boolean;

declare function IsWeaponTwoHanded(weaponHash: string | number): boolean;

declare function IsWeaponValid(weaponHash: string | number): boolean;

declare function ItemdatabaseCanEquipItemOnCategory(p0: number, p1: number, p2: number): number;

declare function ItemdatabaseCreateItemCollection(p0: number, p1: number, p2: number): number;

declare function ItemdatabaseDoesItemHaveTag(p0: number, p1: number, p2: number): number;

declare function ItemdatabaseFilloutAcquireCost(p0: number, p1: number, p2: number): number;

declare function ItemdatabaseFilloutBuyAwardAcquireCosts(p0: number, p1: number, p2: number, p3: number): number;

declare function ItemdatabaseFilloutItemByName(p0: number, p1: number): number;

declare function ItemdatabaseFilloutItemEffectIdInfo(p0: number, p1: number): number;

declare function ItemdatabaseFilloutItemEffectIds(p0: number, p1: number): number;

declare function ItemdatabaseFilloutItemInfo(p0: number, p1: DataView): number;

declare function ItemdatabaseFilloutModifier(p0: number, p1: number, p2: number): number;

declare function ItemdatabaseFilloutPriceModifierByKey(p0: number, p1: number): number;

declare function ItemdatabaseFilloutSatchelData(p0: number, p1: number): number;

declare function ItemdatabaseFilloutSellPrice(p0: number, p1: number, p2: number): number;

declare function ItemdatabaseFilloutTagData(p0: number, p1: DataView, p2: DataView, p3: number): number;

declare function ItemdatabaseFilloutUiData(p0: number, p1: DataView): number;

declare function ItemdatabaseGetAcquireCost(p0: number, p1: number, p2: number): number;

declare function ItemdatabaseGetAcquireCostsCount(p0: number): number;

declare function ItemdatabaseGetBundleId(p0: number): number;

declare function ItemdatabaseGetBundleItemCount(p0: number, p1: number): number;

declare function ItemdatabaseGetBundleItemInfo(p0: number, p1: number, p2: number, p3: number): number;

declare function ItemdatabaseGetFitsSlotCount(p0: number): number;

declare function ItemdatabaseGetFitsSlotInfo(p0: number, p1: number, p2: number): number;

declare function ItemdatabaseGetHasSlotCount(p0: number): number;

declare function ItemdatabaseGetHasSlotInfo(p0: number, p1: number, p2: number): number;

declare function ItemdatabaseGetItemPathset(item: number, p1: number): number;

declare function ItemdatabaseGetItemPriceModifiers(p0: number, p1: number): number;

declare function ItemdatabaseGetItemTagType(p0: number, p1: number): number;

declare function ItemdatabaseGetModifiedPrice(p0: number, p1: number): number;

declare function ItemdatabaseGetNumberOfModifiedPrices(p0: number): number;

declare function ItemdatabaseGetNumberOfModifiers(p0: number): number;

declare function ItemdatabaseGetShopInventoriesItemInfo(p0: number, p1: number, p2: number): number;

declare function ItemdatabaseGetShopInventoriesItemInfoByKey(p0: number, p1: number, p2: number): number;

declare function ItemdatabaseGetShopInventoriesItemsCount(p0: number): number;

declare function ItemdatabaseGetShopInventoriesRequirementGroupInfo(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function ItemdatabaseGetShopInventoriesRequirementInfo(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function ItemdatabaseGetShopLayoutInfo(p0: number, p1: number): number;

declare function ItemdatabaseGetShopLayoutMenuInfoById(p0: number, p1: number, p2: number): number;

declare function ItemdatabaseGetShopLayoutMenuInfoByIndex(p0: number, p1: number, p2: number, p3: number): number;

declare function ItemdatabaseGetShopLayoutMenuPageKey(p0: number, p1: number, p2: number, p3: number): number;

declare function ItemdatabaseGetShopLayoutPageInfoByKey(p0: number, p1: number, p2: number): number;

declare function ItemdatabaseGetShopLayoutPageItemKey(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function ItemdatabaseGetShopLayoutRootMenuInfo(p0: number, p1: number, p2: number): number;

declare function ItemdatabaseIsBuyableAwardValid(p0: number): number;

declare function ItemdatabaseIsIntrinsicItem(p0: number): number;

declare function ItemdatabaseIsKeyValid(p0: number, p1: number): number;

declare function ItemdatabaseIsOverpoweredItem(p0: number): number;

declare function ItemdatabaseIsShopKeyValid(p0: number): number;

declare function ItemdatabaseIsShopLayoutKeyValid(p0: number): number;

declare function ItemdatabaseLocalizationGetNumLabelTypes(p0: number): number;

declare function ItemdatabaseLocalizationGetNumValues(p0: number, p1: number): number;

declare function ItemdatabaseLocalizationGetType(p0: number, p1: number): number;

declare function ItemdatabaseLocalizationGetValue(p0: number, p1: number, p2: number): number;

declare function ItemdatabaseReleaseItemCollection(collection: number): boolean;

declare function JournalCanWriteEntry(p0: number): number;

declare function JournalClearAllProgress(): void;

declare function JournalGetEntryAtIndex(p0: number): number;

declare function JournalGetEntryCount(): number;

declare function JournalGetEntryInfo(p0: number, p1: number): number;

declare function JournalGetGrimeAtIndex(p0: number): number;

declare function JournalGetTextureWithLayout(p0: number, p1: number, p2: number): number;

declare function JournalMarkRead(p0: number): void;

declare function JournalWriteEntry(p0: number): void;

declare function KeepNetworkIdInFastInstance(netId: number, p1: boolean, p2: number): void;

declare function KnockOffPedProp(ped: number, p1: boolean, p2: boolean, p3: boolean, p4: boolean): void;

declare function KnockPedOffVehicle(ped: number): void;

declare function LaunchUiappByHash(appNameHash: string | number): number;

declare function LaunchUiappByHashWithEntry(appNameHash: string | number, entryHash: string | number): number;

declare function LaunchUiappWithEntry(appName: string, entry: string): number;

declare function LinkNamedRendertarget(modelHash: string | number): void;

declare function ListenProjectileHitEvents(listen: boolean): void;

declare function LoadAnimScene(animScene: number): void;

declare function LoadMissionCreatorPhoto(p1: number, p2: number, p3: number): [boolean, number];

/**
 * Reads the contents of a text file in a specified resource.
 * If executed on the client, this file has to be included in `files` in the resource manifest.
 * Example: `local data = LoadResourceFile("devtools", "data.json")`
 * @param resourceName The resource name.
 * @param fileName The file in the resource.
 * @return The file contents
 */
declare function LoadResourceFile(resourceName: string, fileName: string): string;

declare function LoadSceneStart(
  posX: number,
  posY: number,
  posZ: number,
  offsetX: number,
  offsetY: number,
  offsetZ: number,
  radius: number,
  p7: number,
): boolean;

declare function LoadSceneStartSphere(x: number, y: number, z: number, radius: number, p4: number): boolean;

declare function LoadSceneStop(): void;

declare function LoadStream(streamName: string, soundSet: string): boolean;

declare function LocalPlayerPedshotTextureDownloadRequest(p0: number, p1: number): number;

/**
 * Possible return values: 0, 1, 2
 */
declare function LocalizationGetSystemDateFormat(): number;

/**
 * Same return values as GET_CURRENT_LANGUAGE
 */
declare function LocalizationGetSystemLanguage(): number;

/**
 * Locks the minimap to the specified angle in integer degrees.
 * angle: The angle in whole degrees. If less than 0 or greater than 360, unlocks the angle.
 */
declare function LockMinimapAngle(angle: number): void;

declare function Log10(value: number): number;

declare function MakeObjectCarriable(object: number): void;

declare function MakeObjectNotCarriable(object: number): void;

declare function MakePedReload(ped: number): number;

declare function MapDisableRegionBlip(regionHash: string | number): void;

declare function MapDiscoverySetEnabled(discoveryHash: string | number): void;

/**
 * Example:
 * local regionHash = GetHashKey('REGION_ROA_ANNESBURG')
 * local styleHash = GetHashKey('BLIP_STYLE_WANTED_REGION')
 * _MAP_ENABLE_REGION_BLIP(regionHash, styleHash)
 */
declare function MapEnableRegionBlip(regionHash: string | number, styleHash: string | number): void;

declare function MapIsDiscoveryActive(discoveryHash: string | number): boolean;

declare function MapIsRegionHighlightedWithStyle(regionHash: string | number, styleHash: string | number): boolean;

declare function MarkObjectForDeletion(object: number): void;

declare function MinigameGetNextEvent(p0: number, p1: number): number;

declare function MinigameGetNextEventType(): number;

declare function MinigameIsConnectedToServer(p0: number): number;

declare function MinigameIsRequestPending(p0: number): number;

declare function MinigameLeaveTable(p0: number): number;

declare function MinigamePopNextEvent(): void;

declare function MinigameRequestSeatAtTable(data: number): [boolean, number];

declare function MissiondataGetCatagory(p0: number): number;

declare function MissiondataGetHighScore(p0: number): number;

declare function MissiondataGetRating(p0: number): number;

declare function MissiondataGetReplayState(p0: number): number;

declare function MissiondataGetTextureName(p0: number): number;

declare function MissiondataGetTextureTxd(p0: number): number;

declare function MissiondataIsRequiredStoryMission(p0: number): number;

declare function MissiondataIsValid(p0: number): boolean;

declare function MissiondataSetHighScore(p0: number, p1: number): void;

declare function MissiondataSetRatingScores(p0: number, p1: number, p2: number, p3: number): void;

declare function MissiondataSetReplayLockedForCategory(p0: string | number, locked: boolean): void;

declare function MissiondataTimecycleBoxDelete(): void;

declare function MissiondataTimecycleBoxExists(): boolean;

declare function MissiondataTimecycleBoxSetModifier(timecycleName: string): void;

declare function MissiondataWasCompleted(p0: number): number;

declare function ModifyVehicleTopSpeed(vehicle: number, value: number): void;

declare function MoneyDecrementCashBalance(amount: number): boolean;

declare function MoneyGetCashBalance(): number;

declare function MoneyIncrementCashBalance(amount: number, p1: string | number): boolean;

declare function MpGamerTagDisableReviveTopIcon(gamerTagId: number): void;

declare function MpGamerTagEnableReviveTopIcon(gamerTagId: number): void;

declare function MugshotTextureDownloadRequest(p1: number, name: string, p3: boolean): [number, number];

/**
 * Starts listening to the specified channel, when available.
 * @param channel A game voice channel ID.
 */
declare function MumbleAddVoiceChannelListen(channel: number): void;

/**
 * Adds the specified channel to the target list for the specified Mumble voice target ID.
 * @param targetId A Mumble voice target ID, ranging from 1..30 (inclusive).
 * @param channel A game voice channel ID.
 */
declare function MumbleAddVoiceTargetChannel(targetId: number, channel: number): void;

/**
 * Adds the specified player to the target list for the specified Mumble voice target ID.
 * @param targetId A Mumble voice target ID, ranging from 1..30 (inclusive).
 * @param player A game player index.
 */
declare function MumbleAddVoiceTargetPlayer(targetId: number, player: number): void;

/**
 * Adds the specified player to the target list for the specified Mumble voice target ID.
 * @param targetId A Mumble voice target ID, ranging from 1..30 (inclusive).
 * @param serverId The player's server id.
 */
declare function MumbleAddVoiceTargetPlayerByServerId(targetId: number, serverId: number): void;

/**
 * Clears the target list for the specified Mumble voice target ID.
 * @param targetId A Mumble voice target ID, ranging from 1..30 (inclusive).
 */
declare function MumbleClearVoiceTarget(targetId: number): void;

/**
 * Clears channels from the target list for the specified Mumble voice target ID.
 * @param targetId A Mumble voice target ID, ranging from 1..30 (inclusive).
 */
declare function MumbleClearVoiceTargetChannels(targetId: number): void;

/**
 * Clears players from the target list for the specified Mumble voice target ID.
 * @param targetId A Mumble voice target ID, ranging from 1..30 (inclusive).
 */
declare function MumbleClearVoiceTargetPlayers(targetId: number): void;

/**
 * Returns the mumble voice channel from a player's server id.
 * @param serverId The player's server id.
 * @return Int representing the identifier of the voice channel.
 */
declare function MumbleGetVoiceChannelFromServerId(serverId: number): number;

/**
 * This native will return true if the user succesfully connected to the voice server.
 * If the user disabled the voice-chat setting it will return false.
 * @return True if the player is connected to a mumble server.
 */
declare function MumbleIsConnected(): boolean;

/**
 * Stops listening to the specified channel.
 * @param channel A game voice channel ID.
 */
declare function MumbleRemoveVoiceChannelListen(channel: number): void;

/**
 * Sets the current input distance. The player will be able to talk to other players within this distance.
 * @param distance The input distance.
 */
declare function MumbleSetAudioInputDistance(distance: number): void;

/**
 * Sets the current output distance. The player will be able to hear other players talking within this distance.
 * @param distance The output distance.
 */
declare function MumbleSetAudioOutputDistance(distance: number): void;

/**
 * Changes the Mumble server address to connect to, and reconnects to the new address.
 * @param address The address of the mumble server.
 * @param port The port of the mumble server.
 */
declare function MumbleSetServerAddress(address: string, port: number): void;

/**
 * Sets the current Mumble voice target ID to broadcast voice to.
 * @param targetId A Mumble voice target ID, ranging from 1..30 (inclusive). 0 disables voice targets, and 31 is server loopback.
 */
declare function MumbleSetVoiceTarget(targetId: number): void;

/**
 * Overrides the output volume for a particular player on Mumble. This will also bypass 3D audio and distance calculations. -1.0 to reset the override.
 * Set to -1.0 to reset the Volume override.
 * @param player A game player index.
 * @param volume The volume, ranging from 0.0 to 1.0 (or above).
 */
declare function MumbleSetVolumeOverride(player: number, volume: number): void;

/**
 * Overrides the output volume for a particular player with the specified server id and player name on Mumble. This will also bypass 3D audio and distance calculations. -1.0 to reset the override.
 * @param serverId The player's server id.
 * @param volume The volume, ranging from 0.0 to 1.0 (or above).
 */
declare function MumbleSetVolumeOverrideByServerId(serverId: number, volume: number): void;

declare function N_0x0000a8acdc2e1b6a(p0: number, p1: number): void;

declare function N_0x000fa7a4a8443af7(p0: number): void;

declare function N_0x002aac783ed323ed(p0: number, p1: number): void;

declare function N_0x002babe0b7d53136(p0: number): void;

declare function N_0x0060b31968e60e41(p0: number): number;

declare function N_0x007aac783ed323ed(p0: number, p1: number, p2: number): void;

declare function N_0x009cf9a29972c298(p0: number): void;

declare function N_0x00b156afebcc5ae0(p0: number): void;

declare function N_0x00b380ff2df6ab7a(p0: number, p1: number): void;

declare function N_0x00ba333da05adc23(p0: number, p1: number): void;

declare function N_0x00bbf7ceae8c666a(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0x00db0bc05e3faa4e(p0: number, p1: number): void;

declare function N_0x00eb5a760638db55(p0: number, p1: number, p2: number): void;

declare function N_0x00ee08603eadee92(p0: number): void;

declare function N_0x00f611a794a3c36e(p0: number): void;

declare function N_0x00ffe0f85253c572(p0: number): number;

declare function N_0x0105fee8f9091255(p0: number, p1: number): number;

declare function N_0x011a42fd923d41ca(p0: number): number;

declare function N_0x012027c28f421f46(p0: number, p1: number): number;

declare function N_0x012701ed938b85de(p0: number, p1: number): void;

declare function N_0x013a7ba5015c1372(p0: number, p1: number): void;

declare function N_0x01708e8dd3ff8c65(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0x017492b2201e3428(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x018abe833ca64d2a(p0: number, p1: number): void;

declare function N_0x018f30d762e62df8(p0: number, p1: number): number;

declare function N_0x01af8a3729231a43(p0: number): number;

declare function N_0x01b928ca2e198b01(p0: number): number;

declare function N_0x01f661bb9c71b465(p0: number, p1: number, p2: number): void;

declare function N_0x024ec9b649111915(p0: number, p1: number): void;

declare function N_0x025a1b1fb03fbf61(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0x025e98e317652cdd(p0: number): void;

declare function N_0x0286617c8fc50a53(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x028e7b3bba0bd2fc(p0: number): void;

declare function N_0x029884fb65821b07(p0: number): number;

declare function N_0x02aa2096fe00f3e1(p0: number, p1: number): number;

declare function N_0x02b21b6beedd83cc(p0: number, p1: number): number;

/**
 * Note: this native was added in build 1311.16
 * GET_NUM_*
 */
declare function N_0x02b3cdd652b3cdd6(): number;

declare function N_0x02c4c6c2900d84df(p0: number, p1: number): void;

declare function N_0x02e741e19e39628c(p0: number, p1: number): void;

declare function N_0x02ebbb3989b7e695(p0: number): number;

declare function N_0x032a14d082a9b269(p0: number): void;

declare function N_0x0348469daa17576c(p0: number): void;

declare function N_0x0349404a22736740(p0: number, p1: number, p2: number): void;

declare function N_0x0355fe37240e2c77(p0: number, p1: number): void;

declare function N_0x0358b8a41916c613(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x0365000d8bf86531(p0: number): number;

/**
 * Note: this native was added in build 1311.23
 */
declare function N_0x039ad6b57d5179ff(): number;

/**
 * Note: this native was added in build 1311.23
 */
declare function N_0x039b692b3318fab6(p0: boolean): number;

declare function N_0x03b4b759a8990505(p0: number): number;

declare function N_0x03c03abbabbef752(p0: string): number;

declare function N_0x03d741cb4052e26c(p0: number): number;

declare function N_0x03ddbf2d73799f9e(p0: number): void;

declare function N_0x04084490cc302cfb(): void;

declare function N_0x040ee319efd1d3b5(): void;

declare function N_0x0455546f23ff08e4(p0: number): number;

declare function N_0x049d2196d9d11184(p0: number, p1: string, p2: string): boolean;

declare function N_0x04aa59ca40571c2e(p0: number, p1: number): number;

declare function N_0x04d1d4e411ce52d0(p0: number, p1: number): void;

declare function N_0x04d7f33640662fa2(p0: number): number;

declare function N_0x04f0579dbdd32f34(p0: number): void;

declare function N_0x0501d52d24ea8934(p0: number): number;

declare function N_0x0516fae561276efc(p0: number): number;

declare function N_0x052d4ac0922af91a(p0: number, p1: number): void;

declare function N_0x054473164c012699(player: number): number;

declare function N_0x0546b117bb17548b(): void;

declare function GetLoadedStreamIdFromCreation(streamName: string, streamSet: string): number;

declare function N_0x05a0100ea714db68(p0: number, p1: number): number;

declare function N_0x05ac9e1e02975afb(p0: number, p1: number, p2: number): void;

declare function N_0x05bd5e4088b30a66(p0: number, p1: number): void;

declare function N_0x05ce6af4df071d23(p0: number, p1: number): void;

declare function N_0x05d6195fb4d428f4(p0: number): number;

declare function N_0x05dd384f39de1c8c(p0: number, p1: number): number;

declare function N_0x06087579e7aa85a9(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): boolean;

declare function N_0x060bbad634c2b44b(p0: string, p1?: number): [boolean, number];

/**
 * Note: this native was added in build 1311.23
 */
declare function N_0x062842d61d0d53fd(): boolean;

declare function N_0x062b4a4a3396351d(p0: number): void;

/**
 * FORCE_*
 */
declare function N_0x062d5ead4da2fa6a(): void;

declare function N_0x06557f6d96c86881(): void;

declare function N_0x065887b694359799(p0: number): void;

declare function N_0x065d03a9d6b2c6b5(p0: number, p1: number): void;

declare function N_0x066167c63111d8cf(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x066725a9d52b3641(): number;

declare function N_0x069eddf1fd4deb0a(p0: number, p1: number): void;

declare function N_0x06a09a6e0c6d2a84(p0: number, p1: number): void;

declare function N_0x06a10b4d7f50b0c3(p0: number): number;

declare function N_0x06aade17334f7a40(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x06c3db00b69d5435(p0: number, p1: number): void;

declare function N_0x06c5df5ee444bc6b(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x06d26a96ca1bca75(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x06e1fb78b1e59ca5(p0: number, p1: number): void;

declare function N_0x06ecf3925bc2abae(p0: number, p1: number): void;

declare function N_0x06fa94c835787c64(p0: number): number;

declare function N_0x070a3841406c43d5(p0: number, p1: number): void;

declare function N_0x071769bcb24379e5(): number;

declare function N_0x0730e518486deec3(p0: number): void;

declare function ModifyPlayerUiPrompt(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x07559b29950301ff(p0: number, p1: number): void;

/**
 * Returns true if the given player has a valid ped.
 */
declare function N_0x0760d6f70ebcc05c(player: number): boolean;

declare function N_0x07706c4cc9c6cc9e(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x0772f87d7b07719a(p0: number, p1: number, p2: number): number;

declare function N_0x078076ab50fb117f(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0x078f77fd1a43eab3(p0: number, p1: number): void;

declare function N_0x0790473eee1977d3(p0: number): number;

declare function N_0x0794199b25e499e1(p0: number, p1: number): void;

declare function N_0x07ad9e43fd478527(p0: number, p1: number): boolean;

declare function N_0x07e1c35f0078c3f9(p0: number, p1: number): number;

declare function N_0x07e2e21e799080a0(p0: number, p1: number): void;

declare function N_0x07e8b8b20570271c(p0: number): void;

declare function N_0x07ea5b053fa60ac7(p0: number, p1: number): void;

declare function N_0x0816c31480764ab0(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x082c043c7afc3747(p0: number, p1: number): void;

declare function N_0x085c5b61a0114f32(p0: number, p1: number): void;

declare function N_0x086549f3b0381cb1(p0: number, p1: number): void;

declare function N_0x0869d499a7848309(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function N_0x0876326238914a3f(): void;

declare function N_0x08797a8c03868cb8(p0: number): void;

declare function N_0x08892122769770d5(popZone: number, p1: boolean): void;

/**
 * Used to be incorrectly named SET_VEHICLE_EXCLUSIVE_DRIVER
 * Likely SET_VEHICLE_ALLOW_*
 * Jenkins hash may be wrong, unsure at this time.
 */
declare function N_0x0893dafbfa67110e(vehicle: number, toggle: boolean): void;

declare function N_0x08c5825a2932ea7b(p0: number): number;

declare function N_0x08e22898a6af4905(p0: number, p1: number): void;

declare function N_0x08fc896d2cb31fcc(p0: number, p1: number): number;

declare function N_0x08ff1099ed2e6e21(p0: number): number;

declare function N_0x09034479e6e3e269(p0: number, p1: number, p2: number): number;

declare function N_0x09171a6f8fde5dc1(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x0939e773925c4719(): void;

declare function N_0x0943113e02322164(p0: number, p1: number): number;

declare function N_0x095c2277fed731db(p0: number): number;

declare function N_0x0961b089947ba6d0(p0: number): void;

declare function N_0x098036cab8373d36(p0: number): void;

declare function N_0x098caa6dbe7d8d82(p0: number, p1: number): void;

declare function N_0x09937eb0cebc2f9f(p0: string): boolean;

declare function N_0x099d4a855d53b03b(p0: number, p1: number, p2: number): void;

declare function N_0x09a1c7dfdce54fbc(p0: number): void;

declare function N_0x09c970ae59abf6b2(vehicle: number, p1: boolean): void;

declare function N_0x09d7afd3716da8e1(p0: number, p1: number): number;

declare function N_0x09e378c52b1433b5(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x09ee00b8f858e0be(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0x09fbf15d73efc900(): void;

declare function N_0x0a2ab7b7abc055f4(p0: number): number;

declare function N_0x0a4618ffd517e24d(p0: number, p1: number): void;

declare function N_0x0a487cc74a517fb5(p0: number): void;

declare function N_0x0a5a4f1979abb40e(p0: number): void;

declare function N_0x0a79c81c418f5d38(p0: number, p1: number): number;

declare function N_0x0a8fd91ede7b328a(p0: number, p1: number): void;

declare function N_0x0a98a362c5a19a43(p0: number): number;

declare function N_0x0ada3ec589e1736e(): void;

declare function N_0x0b0f914459731f60(p0: number, p1: number): void;

declare function N_0x0b3a99ab6713aa52(p0: number): void;

declare function N_0x0b6b4507ac5ea8b8(): number;

/**
 * Hardcoded to return zero/false.
 */
declare function N_0x0b7803f6f7bb43e0(): number;

declare function N_0x0b787a37eedd226f(p0: number, p1: number): void;

declare function N_0x0b7cb1300cbfe19c(p0: number, p1: number): number;

declare function N_0x0b9f7a01ec50448d(p0: number, p1: number): void;

declare function N_0x0ba4250d20007c2e(p0: number): number;

declare function N_0x0bb6de7d23c60626(p0: number): number;

declare function N_0x0bcd4091c8eaba42(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): number;

declare function N_0x0bdfebcf40a5f7e3(p0: number): number;

declare function N_0x0bf90cbb6b72977b(): void;

declare function N_0x0bfa1bd465cdfefd(p0: number): void;

declare function N_0x0c093c1787f18519(p0: number, p1: number): number;

declare function N_0x0c0a373d181bf900(p0: number): void;

declare function N_0x0c31c51168e80365(p0: number): number;

declare function N_0x0c392db374655176(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x0c6a00dae896614c(p0: number, p1: number): void;

declare function N_0x0c6b89876262a99d(p0: number, p1: number): void;

declare function N_0x0cadc3a977997472(p0: number, p1: number): number;

declare function N_0x0cb16d05e03fb525(p0: number): void;

declare function N_0x0cb3d1919e8d7cba(p0: number): number;

/**
 * nullsub, doesn't do anything
 */
declare function N_0x0cc28c08613ba9e5(p0: number): void;

declare function N_0x0ccefc6c2c95da2a(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x0cd7914d17a970ab(p0: number, p1: number): void;

declare function N_0x0ceeb6f4780b1f2f(p0: number, p1: number): number;

declare function N_0x0d0ae5081f88cfe1(p0: number): number;

/**
 * Note: this native was added in build 1311.23
 */
declare function N_0x0d183d8490ee4366(p0: number, p1: number): void;

declare function N_0x0d322aef8878b8fe(p0: number, p1: number): void;

declare function N_0x0d3b1568917ebda0(p0: number, p1: number): number;

declare function N_0x0d497aa69059fe40(p0: number, p1: number): void;

declare function N_0x0d4b77e862475ed3(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0x0d5b19c34068fee7(p0: number): void;

declare function N_0x0d5fdf0d36fa10cd(p0: number): void;

declare function N_0x0d7fd6a55fd63aef(p0: number, p1: number, p2: number): void;

declare function RemoveShopItemFromPed(ped: number, componentHash: number, p2: number, p3: boolean): void;

declare function N_0x0db41d59e0f1502b(p0: number): void;

declare function N_0x0dbaca9c38c9a686(p0: number): number;

declare function N_0x0dcec6a92e497e17(p0: number, p1: number): void;

declare function N_0x0de02da3c0f66955(p0: number, p1: number): void;

declare function N_0x0de0944eccb3df5d(p0: number): number;

declare function N_0x0ded260a1958a82e(p0: number): number;

declare function N_0x0df57f86fe71dbe5(p0: number, p1: number): number;

declare function RemovePedBlackboardHash(ped: number, name: string): void;

declare function N_0x0e184495b27bb57d(): void;

declare function N_0x0e1db1f8f5b561dc(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0x0e2f43516f998269(p0: number): number;

declare function N_0x0e3bdeed21beb945(p0: number, p1: number): void;

declare function N_0x0e3bf7ed4169ec43(p0: number): number;

declare function N_0x0e53530d9b2db01d(p0: number, p1: number, p2: number): void;

declare function N_0x0e54d4da6018ff8e(): number;

declare function N_0x0e558d3a49d759d6(p0: number, p1: number): number;

declare function N_0x0e5c9fb9ed5dff1c(p0: number): number;

declare function N_0x0e6846476906c9dd(p0: number, p1: number): number;

declare function N_0x0e9057a9da78d0f8(p0: number, p1: number): void;

declare function N_0x0e94c95ec3185fa9(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0x0e9e95fdedcc9d35(p0: number, p1: number, p2: number): void;

declare function N_0x0ea9eacba3b01601(p0: number, p1: number, p2: number): number;

declare function N_0x0eabf182fbb63d72(p0: number, p1: number, p2: number): void;

declare function N_0x0eaf918f751f27ba(p0: number): number;

declare function N_0x0eb78c2b156635b1(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): number;

declare function N_0x0ee3f0d7feccc54f(): number;

declare function N_0x0eef7a81c17679db(p0: number): number;

declare function N_0x0f1861101c9a9944(popZone: number, p1: boolean): void;

declare function N_0x0f1cd8ca9e65d5f6(p0: number, p1: number): void;

declare function N_0x0f1ffef5d54ae832(): void;

declare function N_0x0f230de0ddbe3649(p0: number): number;

declare function N_0x0f44a5c78d114922(sessionRequestId: number): [boolean, number];

declare function N_0x0f4eaf69da41af43(p0: number): number;

declare function N_0x0f4f6c4ce471259d(p0: number, p1: number): void;

declare function N_0x0f7f603bde08c4d3(p0: number): void;

declare function N_0x0f967019cc853bcc(p0: number, p1: number): void;

declare function N_0x0f9cf06986300875(p0: number): void;

declare function N_0x0f9e754ebe8fdbfa(p0: number): void;

declare function N_0x0faf7171bf613b80(p0: number): void;

declare function N_0x0faf95d71ed67ade(p0: number, p1: number): void;

declare function N_0x0fb1ba7ff73b41e1(p0: number, p1: number, p2: number): void;

declare function N_0x0fd07141ad048aae(p0: number, p1: number): number;

declare function N_0x0fd3ecf9d0c8655f(p0: string): void;

declare function N_0x0fd7d7c232876e72(p0: number): void;

declare function N_0x0fddee66e3465726(p0: number): number;

declare function N_0x0fe797dd9f70dfa6(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x0fee2561120f3333(p0: number): void;

declare function N_0x0ff7125f07deb84f(p0: number, p1: number): void;

declare function N_0x0ffdf937e5c11382(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0x100157d6d7fe32ca(p0: number, p1: number): number;

declare function N_0x101b45c5f56d970f(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x10342cc82e8356e9(p0: number, p1: number): number;

declare function N_0x104080ca9e519b00(p0: number, p1: number): number;

declare function N_0x104d9a7b1c0d0783(p0: number, p1: number): void;

/**
 * Note: this native was added in build 1311.23
 */
declare function N_0x106cbdd5077dede1(p0: boolean): number;

declare function N_0x107f2a66e1c4c83a(p0: number): void;

declare function N_0x10827b5a0aac56a7(p0: number, p1: number, p2: number): void;

declare function N_0x1096603b519c905f(p0: number): void;

declare function N_0x1098cda477890165(p0: number, p1: number): void;

declare function N_0x10adfdf07b7dffba(p0: number, p1: number, p2: number): number;

declare function N_0x10c1767b93257480(p0: number, p1: number, p2: number): void;

declare function N_0x10c44f633e2d6d9e(p0: number): void;

declare function N_0x10daa76cb8a201a1(p0: number): void;

declare function N_0x10f96086123b939f(p0: number, p1: number, p2: number): void;

declare function N_0x1121b07088ed3013(p0: number): number;

declare function N_0x112bca290d2eb53c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): number;

declare function N_0x112ddf56300bc6e5(p0: number): number;

declare function N_0x113857d66a9cabe6(p0: number): number;

declare function N_0x113ef458ab6cda67(p0: number, p1: number): void;

declare function N_0x1148f706cf4ebdda(p0: number, p1: number, p2: number): number;

declare function N_0x1180a2974d251b7b(p0: number): number;

declare function N_0x11820d1ae80dea39(p0: number, p1: number): number;

declare function N_0x118d476a6f1a13f1(p0: number): number;

declare function N_0x119a5714578f4e05(p0: number, p1: number): void;

declare function N_0x11a7ff918ef6bc66(p0: number, p1: number): void;

declare function N_0x11b0a0b282fa9b10(p0: number): void;

declare function N_0x11c7ce1ae38911b5(p0: number): number;

declare function N_0x11cd066f54da0133(p0: number): number;

/**
 * Note: this native was added in build 1232.40
 */
declare function N_0x11e6b9629c46d6ec(ped: number, p1: boolean): void;

declare function N_0x11e73195e735b25b(p0: number): number;

declare function N_0x11ea52cad1b55910(p0: number, p1: string): boolean;

declare function N_0x120376c23f019c6c(p0: number, p1: number): number;

declare function N_0x1204eb53a5fbc63d(): number;

declare function N_0x121d2005dd64496b(p0: number, p1: number, p2: number): number;

/**
 * SET_VEHICLE_AL*
 */
declare function N_0x1240e8596a8308b9(p0: number, p1: number): void;

declare function N_0x1252c029fc8ebb4d(): number;

declare function N_0x126cbebba46693cf(p0: number, p1: number, p2: number): number;

/**
 * nullsub, doesn't do anything
 */
declare function N_0x128fc3a893bf853a(p0: number): void;

declare function N_0x1298b3d8e4c2409f(p0: number): void;

declare function N_0x12990818c1d35886(p0: number, p1: number, p2: number): void;

declare function N_0x12df9c58201dd19a(p0: number): number;

declare function N_0x12e09e278c6c29b7(p0: number): void;

declare function N_0x12eb4e31f092c9b3(p0: number): number;

declare function N_0x12f2d161bf4031fc(p0: number, p1: number): void;

declare function N_0x12f6c6ed3eff42de(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x131e294ef60160df(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0x131ec9247e7a2903(p0: number): number;

declare function N_0x13430d3d5a45f14b(p0: number): number;

declare function N_0x134775b093ad5c38(ped: number): number;

declare function N_0x138398153824e332(): void;

declare function N_0x138adb94f8b90616(): void;

declare function N_0x1392105da88bbffb(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x139a4b9df2d26cbf(p0: number, p1: number): void;

declare function N_0x13a210949fcbd92b(p0: number, p1: number): void;

declare function N_0x13aaecda43318bfe(p0: number, p1: number): number;

declare function N_0x13c190302369308b(p0: number): number;

declare function N_0x13e7320c762f0477(p0: number): void;

declare function N_0x13eb275bf81636d1(p0: number, p1: number): void;

declare function N_0x13f138225c202f66(p0: number, p1: number): void;

declare function N_0x13f592fc3bf0ea84(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x1407f5115fb9583e(p0: number, p1: number): number;

declare function N_0x140b3cb1d424a945(p0: number, p1: number): void;

declare function N_0x1413b6bf27ab7a95(): number;

declare function N_0x141bc64c8d7c5529(vehicle: number): void;

declare function N_0x1431540bca1a1bd2(): number;

declare function N_0x1460b644397453eb(): void;

declare function N_0x1461df6db886be3f(p0: number): void;

declare function N_0x148e7ac8141c9e64(p0: number): number;

declare function N_0x149aee66f0cb3a99(p0: number, p1: number): void;

declare function N_0x14c4a49e36c29e49(): number;

/**
 * nullsub, doesn't do anything
 */
declare function N_0x14d29bb12d47f68c(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x14da8c4bc2ccd90a(p0: number): number;

declare function N_0x14e57f88ba0a07fc(p0: number): void;

declare function N_0x14ff0c2545527f9b(horse: number, weaponHash: number | string, ped: number): void;

declare function N_0x1520626ffafffa8f(p0: number, p1: number): void;

declare function N_0x15206e88ff7617df(p0: number, p1: number): void;

declare function N_0x152664aa3188b193(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0x152ed1b56e8f1f50(p0: number, p1: number): number;

declare function N_0x154340e87d8cc178(p0: number): void;

declare function N_0x154b7e841ac7412f(p0: number, p1: number): void;

declare function N_0x155b2fbe72d7d1d0(p0: number): number;

declare function N_0x159ef5b6edce00e8(p0: number, p1: number): number;

declare function N_0x15abd5004cad2d99(p0: number): void;

declare function N_0x15cc8c33d7ffcc4a(p0: number, p1: number): void;

declare function N_0x15e90b6a993017aa(): number;

declare function N_0x15f4732c357b1d6d(p0: number, p1: number, p2: number): void;

declare function N_0x160825dadf1b04b3(): void;

declare function N_0x160c1b5ab48ab87c(p0: number, p1: number): void;

/**
 * nullsub, doesn't do anything
 */
declare function N_0x160f0ce6d76a39c9(): number;

declare function N_0x162c23ca83ed0a62(p0: number): boolean;

declare function N_0x1632eb9386cdbe64(p0: number, p1: number): void;

declare function N_0x164cecc59e70df86(p0: number, p1: number): number;

declare function N_0x165be2001e5e4b75(p0: number): void;

declare function N_0x16752daa7e6d3f72(player: number): void;

declare function N_0x16802c32b2fca06b(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x16908e859c3ab698(p0: number, p1: number, p2: number, p3: number, p4: number): void;

/**
 * nullsub, doesn't do anything
 */
declare function N_0x1694a053dfb61a34(p0: string): void;

declare function N_0x16b23d4f7a1f50d9(p0: number, p1: number, p2: number): void;

declare function N_0x16b86a49e072aa85(): void;

declare function N_0x16d9841a85fa627e(p0: number, p1: number): void;

declare function N_0x16e9abdd34ddd931(): void;

declare function N_0x16efb123c4451032(p0: number, p1: number): number;

declare function N_0x16f2c8c084ab2092(p0: number): number;

declare function N_0x16f798a05bb9e3b5(p0: number): void;

declare function N_0x1710bc33cfb83634(p0: number): void;

declare function N_0x171c18e994c1a395(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x1726963e6049db53(p0: number): void;

declare function N_0x172e9dd35858dcd7(p0: number): void;

declare function N_0x1740e3dee0ae4d27(p0: number, p1: number): void;

declare function N_0x17721003a66c72bf(p0: number, p1: number, p2: number): number;

declare function N_0x179a6f0ee2e79026(p0: number): number;

declare function N_0x17e3e5c46eccd308(p0: number, p1: number, p2: number): void;

declare function N_0x1811a02277a9e49d(): boolean;

declare function N_0x18262cafebb5fbe1(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0x183672fe838a661b(p0: number): void;

declare function N_0x183ce355115b6e75(p0: number, p1: number): void;

declare function N_0x1854217c640b39ec(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function N_0x186608a2ac6f9e88(p0: number, p1: number): void;

declare function N_0x18714953cced17d3(p0: number): number;

declare function N_0x187d65f3aec5d679(p0: number, p1: number): void;

declare function N_0x188313616d184213(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x188736456d1dede6(p0: number, p1: number): number;

declare function SetScenarioContainerOpeningState(entity: number, open: boolean): void;

declare function N_0x18a0d48df9211c07(): void;

declare function N_0x18b94666cf610aeb(): number;

declare function N_0x18c3dfac458783bb(): void;

declare function N_0x18d6869fbffec0f8(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x18e93ebfc1fcfa48(p0: number, p1: number, p2: number): number;

declare function N_0x190f7da1ac09a8ef(): number;

declare function N_0x19173c3f15367b54(p0: number, p1: number, p2: number): void;

declare function N_0x1919d59e60fd516e(p0: number, p1: number, p2: number): void;

/**
 * Note: this native was added in build 1311.23
 */
declare function N_0x19447fcae97704dc(ctx: string | number, ec: number, ex: boolean, ro: boolean): void;

declare function N_0x1948bbe561a2375a(p0: number): number;

declare function N_0x196d3acbeba4a44b(p0: number): void;

declare function N_0x19870c40c7ee15be(p0: number, p1: number): number;

declare function N_0x198b85cc3c7a4593(p0: number, p1: number): number;

/**
 * nullsub, doesn't do anything
 */
declare function N_0x19abcc581d28e6f9(p0: number): void;

declare function N_0x19b14e04b009e28b(p0: number, p1: number): void;

declare function N_0x19b2c7a6c34fad54(p0: number, p1: number): number;

declare function N_0x19b4f71703902238(p0: number): void;

declare function N_0x19b52c20b5c4757c(): void;

declare function N_0x19bc99c678fba139(p0: number, p1: number, p2: number): void;

declare function N_0x19c975b81be53c28(p0: number, p1: number): void;

declare function N_0x1a52076d26e09004(p0: number, p1: number): void;

declare function N_0x1a5c5d350068a673(p0: number, p1: number): void;

declare function N_0x1a6e84f13c952094(p0: number, p1: number, p2: number): number;

declare function N_0x1a7a802b2301edc0(p0: number): void;

declare function N_0x1a7d63cb1b0bb223(p0: number): void;

declare function N_0x1a861f899ebbe17c(p0: number, p1: number): void;

/**
 * 0 = Normal
 * 1 = Trees flickering
 */
declare function N_0x1a9f09ab458d49c6(p0: boolean): void;

declare function N_0x1ac5a8ab50cfaa33(p0: number): number;

declare function N_0x1acbc313966c21f3(p0: number): number;

declare function N_0x1ad896bf43619551(): void;

declare function N_0x1ad8ad999c27f44a(p0: number): void;

declare function N_0x1ad922ab5038def3(p0: number): void;

declare function N_0x1b3c2d961f5fc0e1(p0: number): void;

declare function N_0x1b710e6f4ab69341(p0: number): number;

/**
 * SET_CAM_*
 */
declare function N_0x1b8f3ce5a6001298(cam: number, p1: boolean): void;

declare function N_0x1bc47a9dedc8df5d(p0: number, p1: number): void;

declare function N_0x1bdb56db258f052d(p0: string, p2: string): [boolean, number];

declare function N_0x1bdb5a07307f6929(p0: number, p1: number): void;

declare function N_0x1bfbafcc6760ff02(p0: number, p1: number): void;

declare function N_0x1c38c3577901af1f(): void;

declare function N_0x1c5d33a4293e6dde(p0: number, p1: number): number;

declare function N_0x1c5eb3c27f7508cb(p0: number, p1: number): void;

declare function N_0x1c6306e5bc25c29c(): void;

declare function N_0x1c65cc931c0f946f(p0: number, p1: number, p2: number): void;

declare function N_0x1ce875505d45338a(p0: number, p1: number, p2: number): void;

declare function N_0x1cfa0219d8e1cf25(p0: number, p1: number): number;

declare function N_0x1cfb749ad4317bde(): void;

declare function N_0x1d125814ebc517eb(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x1d1b448d719415ab(p0: number): number;

declare function N_0x1d23d3f70606d788(p0: number, p1: number): void;

declare function N_0x1d256eed194f5b58(p0: number): void;

declare function N_0x1d4636c90bbefacb(p0: number, p1: number): void;

declare function N_0x1d77b47afa584e90(player: number, p1: number, p2: boolean): void;

declare function N_0x1d931b7cc0ee3956(p0: number, p1: number, p2: number): number;

declare function N_0x1d97da8acb5d2582(p0: number, p1: number): void;

declare function N_0x1d9f72dd4fd9a9d7(p0: number): void;

declare function N_0x1da5c5b0923e1b85(p0: number): number;

declare function N_0x1da6cb02071055d5(p0: number): number[];

declare function N_0x1dd95a8d6b24a0c9(p0: boolean): void;

declare function N_0x1e017404784aa6a3(p0: number, p1: number): number;

/**
 * Note: this native was added in build 1311.23
 */
declare function N_0x1e4e097d71d449fb(p0: boolean): number;

declare function N_0x1e6f9a9fe1a99f36(p0: number): void;

declare function N_0x1e7384ab5d4f4581(p0: number): number;

declare function N_0x1e804ea9b12030a4(entity: number, p1?: number): [boolean, number];

declare function N_0x1e8099f449abb0ba(p0: number): number;

declare function N_0x1e8a921112891651(p0: number): number[];

declare function N_0x1ecf56c040fd839c(p0: number, p1: number): void;

declare function N_0x1ef36558fbde2daa(vehicle: number): void;

declare function N_0x1f0e3a4434565f8f(p0: number, p1: number): void;

declare function N_0x1f0e401031e20146(p0: number, p1: number): number;

declare function N_0x1f11702ddbd915c6(p0: number, p1: number): number;

declare function N_0x1f1dd794908c2bfa(p0: number): number[];

declare function N_0x1f1fabfe9b2a1254(p0: number, p1: number): void;

declare function N_0x1f298c7bd30d1240(p0: number): void;

declare function N_0x1f44b7e283c09ede(p0: number, p1: number, p2: number): void;

declare function N_0x1f488807bc8e0630(p0: number): void;

declare function N_0x1f56fb3fdb4eaf65(p0: number): number;

declare function N_0x1f5e07e14a86fafc(p0: number): void;

declare function N_0x1f6ebd94680252ce(p0: number, p1: number): void;

declare function N_0x1f7a9a9c38c13a56(p0: number): number;

declare function N_0x1f8215d0e446f593(p0: number, p1: number, p2: number): void;

declare function N_0x1fa132cbcd7cb239(p0: number, p1: number): void;

declare function N_0x1fbf7f5ba7e4be3a(p0: number): void;

declare function N_0x1fc25aeb5f76b38d(p0: number, p1: number, p2: number): number;

declare function N_0x1fc6c727d30ffdde(p0: number): void;

declare function N_0x1fc92bdba1106bd2(p0: number, p1: number): void;

declare function N_0x1fda57e8908f2609(p0: number, p1: number, p2: number): void;

declare function N_0x1ff8731be1dfc0c0(p0: number, p1: number): void;

declare function N_0x200114e99552462b(p0: number, p1: number, p2: number): void;

declare function N_0x2001687f9562fd9d(p0: number): void;

declare function N_0x2009f8ab7a5e9d6d(p0: number): number;

declare function N_0x20135af9c10d2a3d(p0: number): number;

declare function N_0x201b8ed4ff7fe9f5(p0: number): void;

declare function N_0x20389408f0e93b9a(): number;

declare function N_0x2045429505158d1a(p0: number): number;

declare function N_0x2064b33f6e6b92d4(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x20c5459379d75c1c(p0: number, p1: number): void;

declare function N_0x20d504994fdc4412(iplName1: string, iplName2: string): void;

declare function N_0x20e54854def6a54a(p0: number, p1: number): void;

declare function N_0x20faee47427a4497(): void;

declare function N_0x21091b4beb6376ee(p0: number): number;

declare function N_0x21213b833ef4dae7(p0: number, p1: number, p2: number): void;

declare function N_0x2161278c6322f740(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0x216343750545a486(p0: number, p1: number, p2: number): void;

declare function N_0x216bc0d3d2e413d2(p0: number, p1: number): void;

declare function N_0x218f7710a139d012(): void;

declare function N_0x21a99a72b00d8002(p0: number, p1: number): number;

declare function N_0x21d0890d88dfb0b0(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function N_0x21f00e08cbb5f37b(p0: number): void;

declare function N_0x2200ab13cbd10f4e(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0x22031584496cfb70(p0: number, p1: number): void;

declare function N_0x221f4d9912b7fe86(p0: number, p1: number): void;

/**
 * Returns true if GtaThread+0x77C is equal to 1.
 */
declare function N_0x2238ec3ec631ab1f(): boolean;

declare function N_0x225640e09effdc3f(): number;

declare function N_0x226c6a4e3346d288(p0: number, p1: number): void;

declare function N_0x22741652985c84d0(p0: number, p1: number): void;

declare function N_0x227522fd59ddb7e8(p0: number, p1: number, p2: number): number;

declare function N_0x22b3cabeddb538b2(player: number, p1: number): void;

declare function N_0x22c8b10802301381(p0: number, p1: number): void;

declare function N_0x22cd23bb0c45e0cd(p0: number): number;

declare function N_0x22cd2c33ed4467a1(p0: number): number;

declare function N_0x22cdbf317c40a122(p0: number): void;

declare function N_0x22e590f108289a9d(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x22f2a386d43048a9(p0: number): number;

declare function N_0x2302c0264ea58d31(): void;

declare function N_0x232e1eb23cdb313c(): number;

declare function N_0x235c863da77bd88d(p0: number, p1: number, p2: number): number;

declare function N_0x236321f1178a5446(p0: number, p1: number, p2: number): number;

declare function N_0x2371c39d4f91c288(p0: number): void;

declare function N_0x23767d80c7eed7c6(p0: number, p1: number): void;

declare function N_0x2387d6e9c6b478aa(p0: number): number;

declare function N_0x23a3ab86e0807721(vehicle: number, toggle: boolean): void;

declare function N_0x23b5e9c5160bc04f(p0: number): number;

declare function N_0x23bde06596a22cec(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x23bf601a42f329a0(p0: number): number;

declare function N_0x23ccab8f40b9cbee(x: number, y: number, z: number): boolean;

declare function N_0x23e33cb9f4a3f547(p0: number, p1: number): number;

declare function N_0x23f66c36f8e5eaab(p0: number, p1: number): void;

declare function N_0x2412216fcc7b4e3e(p0: number): void;

declare function N_0x2416ec2f31f75266(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x242edf85d4e87b65(p0: number): number;

declare function N_0x243cede8f916b994(): void;

declare function N_0x244430c13ba5258e(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x244e8c282188e40f(p0: number, p1: number): void;

declare function N_0x245d07651b1d183b(p0: number, p1: number): number;

declare function N_0x247f86595d396344(p0: number): void;

declare function N_0x2498035289b5688f(p0: number, p1: number): void;

declare function N_0x249cd6b7285536f2(p0: number, p1: number, p2: number): void;

declare function N_0x24c82ef607105faa(p0: number, p1: number): void;

declare function N_0x24cd8faea1368379(p0: number, p1: number, p2: number): number;

declare function N_0x24db6b9f2b719043(p0: number): void;

declare function N_0x250c75eb1728cc0d(blip: number): void;

declare function N_0x250ebb11e81a10be(p0: number): number;

declare function N_0x251241caec707106(): boolean;

declare function N_0x25189f9908e9cd65(): number;

declare function N_0x2533f2ab0eb9c6f9(p0: number, p1: number): void;

declare function N_0x254b0241e964b450(p0: number, p1: number): number;

declare function N_0x256edd55c6be1482(p0: number): number;

declare function N_0x259acc5b52a2b2d9(p0: number, p1: number): void;

declare function N_0x25ca89b2a39dcc69(): number;

declare function N_0x26054eb81ac0893b(p0: number): number;

declare function N_0x263d69767f76059c(p0: number, p1: number): void;

declare function N_0x264e9a5cd78c338f(p0: number): void;

declare function N_0x2651ddc0ea269073(p0: number, p1: number): void;

declare function N_0x2660e7720edc4bd0(p0: number, p1: number, p2: number): void;

declare function N_0x2686bd9566b65eda(p0: number, p1: number, p2: number): void;

declare function N_0x268b3aebf032a88d(p0: number): number;

declare function N_0x26934083d3f2579c(p0: number): number;

declare function N_0x26a867c0b7a456d1(p0: number): number;

/**
 * effectName2, p2 and p3 are unused
 * ANIMPOSTFX_*
 */
declare function N_0x26dd2fb0a88cc412(effectName: string, effectName2: string, p2: number, p3: number): void;

declare function N_0x26f6bbea2ce3e3dc(): void;

declare function N_0x2703efb583f0949a(p0: number, p1: number): void;

declare function N_0x2705d18c11b61046(p0: number): void;

declare function N_0x271f95e55c663b8b(p0: number, p1: number): number;

declare function N_0x27219300c36a8d40(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0x2728c77fbc4b9796(p0: number): void;

declare function N_0x273915ce30780986(p0: number, p1: number): number;

declare function N_0x273e04a3a7ad1f2d(): number;

declare function N_0x276aaf0f1c7f2494(p0: number, p1: number): void;

declare function N_0x277251c161b4c3f4(p0: number, p1: number, p2: number): void;

declare function N_0x277865a734918ae6(): number;

declare function N_0x27ad7162d3fed01e(p0: number, p1: number): number;

declare function N_0x27af48c62b281341(): number;

declare function N_0x27b1ae4d8c652f08(p0: number): number;

declare function N_0x27d3a0e1fe090a43(p0: number): [boolean, number];

declare function N_0x27e3f2b57209fa54(p0: number, p1: number): void;

declare function N_0x27e8a84c12b0b7d1(p0: number, p1: number, p2: number): number;

declare function N_0x28508173c6a7cc18(p0: number): void;

declare function N_0x285438c26c732f9d(): number;

declare function N_0x285d36c5c72b0569(p0: number): number;

declare function N_0x288cbb414c3c2fbb(p0: number): number;

declare function N_0x2890418b39bc8fff(p0: number, p1: number): void;

declare function N_0x28a13bf6b05c3d83(ped: number, toggle: boolean): void;

declare function N_0x28ae29d909c8fdce(p0: number): number;

declare function N_0x28ef780bdea8a639(p0: number, p1: number): void;

declare function N_0x290b2e6ccde532e1(p0: number): number;

declare function N_0x2916b30dc6c41179(p0: number): void;

declare function N_0x2917e634206b9e17(p0: number, p1: number): void;

declare function N_0x291cc21d1fb6790e(p0: number): void;

declare function N_0x292ad61a33a7a485(): void;

declare function N_0x292f0b6edc82e3a4(p0: number, p1: number): void;

declare function N_0x2942457417a5fd24(p0: number): number;

declare function N_0x2948235db2058e99(p0: number, p1: number): void;

declare function N_0x294af5323f44b053(p0: number, p1: number, p2: number): number;

declare function N_0x295859eb18f48d82(p0: number): number;

/**
 * Sets an unknown value related to timecycles.
 */
declare function N_0x297b72e2af094742(unk: number): void;

declare function N_0x29924eb8ee9db926(p0: number, p1: number): void;

declare function N_0x29ba9f78321e5a6c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
): number;

/**
 * nullsub, doesn't do anything
 */
declare function N_0x29c733459a9011eb(p0: string | number, p1: string): void;

declare function N_0x29cd4896ecb66c12(): void;

declare function N_0x29e6655df3590b0d(p0: number): void;

declare function N_0x29f3539189d3e277(p0: number, p1: number): void;

declare function N_0x29fb4ce89472c3cb(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function N_0x29fce825613fefca(p0: number, p1: number): number;

declare function N_0x2a10538d0a005e81(p0: number, p1: number): void;

declare function N_0x2a1625858887d4e6(p0: number): void;

declare function N_0x2a31d13c5f021d0d(p0: number): void;

declare function N_0x2a4765812202e671(): number;

declare function N_0x2a48d9567940598f(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x2a6d1daab9ebb262(p0: number): number;

declare function N_0x2a7413168f6cd5a8(): void;

declare function N_0x2a77ef9bec8518f4(p0: number): number;

declare function N_0x2ab7c81b3f70570c(): number;

declare function N_0x2af423d6ecb2c485(p0: number, p1: number): void;

declare function N_0x2b101ad9f651243a(): number;

declare function N_0x2b12b6fc8b8772ab(p0: number, p1: number): void;

declare function N_0x2b32b11520626229(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0x2b4ce170de09f346(p0: number, p1: number): void;

declare function N_0x2b8af29a78024bd3(p0: number): void;

/**
 * Returns true if player is moving mouse while cursor is active
 */
declare function N_0x2b8b605f2a9e64bf(): boolean;

declare function N_0x2b9c37c01bf25edb(p0: number): number;

declare function N_0x2ba9d7bf629f920c(p0: number): number;

declare function N_0x2bae4880dcdd560b(p0: number, p1: number): number;

declare function N_0x2bb2b5bcf0df8008(p0: number, p1: number): void;

declare function N_0x2bb8d58e88777499(p0: number): void;

declare function N_0x2beed53b912537d0(p0: number, p1: number, p2: number): void;

declare function N_0x2bf1953c0c21ac88(p0: number): number;

declare function N_0x2c24af8eeeef8a55(p0: number, p1: number, p2: number): void;

declare function N_0x2c2d287748e8e9b7(p0: boolean): void;

declare function N_0x2c41d93f550d5e37(p0: number, p1: number, p2: number): void;

declare function N_0x2c46d2a591d8c322(p0: number, p1: number, p2: number): number;

declare function N_0x2c497bdef897c6df(p0: number): number;

/**
 * nullsub, doesn't do anything
 */
declare function N_0x2c4e98dda475364f(p0: string): void;

declare function N_0x2c4fec3d0efa9fc0(p0: number): number;

declare function N_0x2c76fa0e01681f8d(p0: number, p1: number): number;

/**
 * nullsub, doesn't do anything
 */
declare function N_0x2cd41ac000e6f611(): void;

declare function N_0x2d053ea815702dd1(p0: number, p1: number): number;

declare function N_0x2d3ace3de0a2b622(p0: number, p1: number): void;

declare function N_0x2d40bcbfe9305dea(p0: number, p1: number): void;

/**
 * ANIMPOSTFX_*
 */
declare function N_0x2d4f9c852ce8a253(effectName: string): boolean;

declare function N_0x2d5dc831176d0114(p0: number): boolean;

declare function N_0x2d657b10f211c572(p0: number, p1: number): number;

declare function N_0x2d976dbdc731df80(p0: number): void;

declare function N_0x2db524750dc41ed4(): number;

declare function N_0x2dbbf0c5e19383ee(p0: number): number;

declare function N_0x2dc0e8dcbd3546e9(p0: number): number;

declare function N_0x2dd3149dc34a3f4c(p0: number): void;

declare function N_0x2dd42fad06e6f19e(p0: number, p1: number, p2: number): number;

declare function N_0x2dd4e0e26dfad97d(p0: number, p1: number, p2: number): number;

declare function N_0x2df3d457d86f8e57(p0: number, p1: number): void;

declare function N_0x2df89cd2ed1d0bde(p0: number, p1: number): void;

declare function N_0x2e036f0480b8bf02(): number;

declare function N_0x2e1abe627c95ed9b(): number;

declare function N_0x2e1cdc1ff3b8473e(p0: number, p1: number): number;

declare function N_0x2e1d6d87346bb7d2(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x2e20878fd208a68e(p0: number, p1: number): void;

declare function N_0x2e24c27b112b5b12(p0: number): void;

declare function N_0x2e2e06023d07631e(p0: number, p1: number): number;

declare function N_0x2e31aca7477cf00f(p0: number, p1: number, p2: number): void;

declare function N_0x2e399eafbeea74d5(): void;

declare function N_0x2e545965df98d476(p0: number): number;

declare function N_0x2e5b5d1f1453e08e(p0: number, p1: number): void;

declare function N_0x2e67707bec52ca4b(p0: number): void;

declare function N_0x2e78d822208e740a(p0: number): number;

declare function N_0x2e957aa81f2c61c9(): void;

declare function N_0x2eb75fb86c41f026(p0: number, p1: number, p2: number): void;

declare function N_0x2eb977293923c723(p0: number, p1: number): void;

declare function N_0x2ebf70e1d8c06683(p0: number, p1: number): void;

declare function N_0x2f4d53023f826ff0(): number;

/**
 * nullsub, doesn't do anything
 */
declare function N_0x2f7bb105144acf30(): void;

declare function N_0x2f7eb8b6f6afe79c(p0: number): number;

declare function N_0x2f82cab262c8ae26(p0: number): number;

declare function N_0x2f901291ef177b02(p0: number, p1: number): void;

declare function N_0x2f994cc29caa9d22(p0: number): void;

declare function N_0x2fa568bfa725f8d6(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x2fcd528a397e5c88(p0: number, p1: number): void;

declare function N_0x2fff4a78384affdf(p0: number): number;

declare function N_0x30146c25686b7836(p0: number, p1: number): number;

declare function N_0x302e71c1d9ee75b9(p0: number, p1: number, p2: number): number;

declare function N_0x3034c77c79a58880(p0: number): void;

declare function N_0x3053064f909b5f42(p0: number, p1: number): void;

declare function N_0x30b391915538ebe2(p0: number): void;

declare function N_0x30d86b2b7622d0eb(p0: number): number;

declare function N_0x310ce349e0c0ec4b(player: number, ped: number, p2: number): void;

declare function N_0x31108bb5715d035f(): void;

declare function N_0x3112adb9d5f3426b(p0: number, p1: number): void;

declare function N_0x31160ec47e7c9549(p0: number, p1: number): void;

declare function N_0x3137edc899e6dae4(p0: number, p1: number): void;

declare function N_0x3138582e0a13bfab(hash: string | number): string;

declare function N_0x3145044f3990d321(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

/**
 * nullsub, doesn't do anything
 */
declare function N_0x3168ba5d6dece323(): void;

declare function N_0x316cdb5b6e8f4110(p0: number, p1: number, p2: number): number;

/**
 * Note: this native was added in build 1311.23
 */
declare function N_0x316fd416c432c761(): boolean;

declare function N_0x317d9c9560529cc2(p0: number): void;

declare function N_0x318f0f9a4426cfa2(p0: number, p1: number): number;

declare function N_0x31b2e7f2e3c58b89(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x31bb338f64d5c861(p0: number, p1: number): void;

declare function N_0x31c70a716cae1fee(p0: number): number;

declare function N_0x31dad2cd6d49546e(p0: number): number;

declare function N_0x31f343383f19c987(p0: number, p1: number, p2: number): void;

declare function N_0x31fef6a20f00b963(p0: number): number;

declare function N_0x3210bcb36af7621b(p0: number): void;

declare function N_0x3233c4ec0514c7ec(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0x32348719dced2969(p0: number): number;

declare function N_0x32417cb860a3bdc4(p0: number, p1: number): number;

declare function N_0x324ab2a68ad8aee5(): void;

declare function N_0x325434c68358d282(toggle: boolean): void;

declare function N_0x326f7951ef0d7f75(p0: number, p1: number): number;

declare function N_0x329772c47dbb2fbc(p0: number): void;

declare function N_0x32a1e3b83d501096(p0: number): number;

declare function N_0x32a7c216344d623b(p0: number, p1: number, p2: number): number;

declare function N_0x32ccad8a981b53d3(p0: number): void;

declare function N_0x32ceda9a0ab4cef7(p0: number, p1: number, p2: number): void;

declare function N_0x32d5898c4898cd95(): void;

declare function N_0x32de2bffda43e62a(): void;

declare function N_0x32f4dbfdfcccc735(p0: number, p1: number, p2: number): void;

/**
 * Does nothing, it's a nullsub.
 */
declare function N_0x330029e121380ceb(args: number): void;

declare function N_0x330ca55a3647fa1c(p0: number, p1: number): void;

declare function N_0x331550b212014b92(p0: number, p1: number): number;

declare function N_0x331cbd247fc5daa8(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0x331d349e0380b097(p0: number): void;

/**
 * Note: this native was added in build 1311.23
 */
declare function N_0x335af56613ca0f49(p0: number): void;

declare function N_0x336b3d200ab007cb(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0x337f1cc8ee895601(p0: number, p1: number): number;

declare function N_0x33825a7388a6b9f6(p0: number, p1: number): number;

declare function N_0x3397cd4e0353dfba(p0: number): number;

declare function N_0x33982467b1e349ef(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0x33992a808df1c1ba(vehicle: number, p1: boolean): void;

declare function N_0x33c1d63e55fa4284(p0: string): boolean;

declare function N_0x33fa048675821da7(p0: number, p1: number): number;

declare function N_0x341cdd17efc2472e(p0: number, p1: number): void;

declare function N_0x345c9f993a8ab4a4(p0: number, p1: number): void;

declare function N_0x34a0671be613d3d0(p0: number): number;

declare function N_0x34ae85c7ca4857aa(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function N_0x34b5ceac180a5d6e(p0: number, p1: number, p2: number): void;

declare function N_0x34b9c4d86df2c2f3(p0: number): number;

declare function N_0x34bc1e79546ba543(p0: number): void;

declare function N_0x34bcf6209b9668a7(p0: number, p1: number): void;

declare function N_0x34c0010188d7c54a(p0: number, p1: number): void;

declare function N_0x34c11114887150fd(p0: number, p1: number): void;

declare function N_0x34c9af25649172d0(p0: number): void;

declare function N_0x34eddd59364ad74a(p0: number, p1: number): void;

declare function N_0x350e9211074955af(p0: number, p1: number): number;

declare function N_0x35165c658077cd0b(): number;

declare function N_0x3519cc3525319a96(p0: string, p2: string): [boolean, number];

declare function N_0x351d71b8b72b858b(p0: number): number;

declare function N_0x351f74ed6177ebe7(): number;

declare function N_0x354ca4dddeec397a(p0: number): number;

declare function N_0x356135b9b10a2a82(p0: number): number;

declare function N_0x356f9fb0698c1feb(p0: number, p1: number): number;

declare function N_0x35815f372d43e1e5(name: string, p1: number): void;

declare function N_0x358a1a751b335a11(p0: number): void;

declare function N_0x35a33783ec3c3448(p0: number): void;

declare function N_0x35b8c070e0c16e2f(p0: number, p1: number): void;

declare function N_0x35d302397e524939(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number[];

declare function N_0x35dc1877312fba0f(p0: number): void;

declare function N_0x35defecae36d4fae(p0: number, p1: number): void;

declare function N_0x35e5e21f9159849c(p0: number): number;

declare function N_0x36040772df5e59a0(): number;

declare function N_0x362086b911657b1a(p0: number, p1: number): void;

declare function N_0x3641fcd53e59b335(p0: number, p1: number, p2: number): void;

declare function N_0x36486af7da93a464(p0: number): number;

declare function N_0x36513affc703c60d(p0: number): void;

declare function N_0x36559148b78853b3(p0: number, p1: number, p2: number): void;

declare function N_0x3660bcab3a6bb734(p0: number): void;

declare function N_0x36d0f2ba2c0d9bde(p0: number, p1: number): number;

declare function N_0x36d188aecb26094b(p0: number): void;

declare function N_0x36e4b61dc56de77c(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x36eb4d34d4a092c5(p0: number, p1: number): void;

declare function N_0x370a973252741ac4(p0: number, p1: number): void;

declare function N_0x370f57c47f68ebca(p0: number): number;

declare function N_0x371d179701d9c082(p0: number): void;

declare function N_0x3738b784ddd35cc6(p0: number, p1: number, p2: number): number;

declare function N_0x3743ce6948194349(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x374f0e716bfcde82(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x378d3b1b11d9385b(p0: number): void;

declare function N_0x3799efcc3c8cd5e1(p0: number): number;

declare function N_0x37aa282163b0d2c4(p0: number, p1: number): void;

declare function N_0x37b01666bae8f7ef(p0: number): number;

declare function N_0x37ceb637ba3b1a47(p0: number): void;

declare function N_0x37d238be69f7378a(p0: number): number;

/**
 * ANIMPOSTFX_*
 */
declare function N_0x37d7bdba89f13959(effectName: string): void;

declare function N_0x380a2e353ad30917(p0: number, p1: number, p2: number): void;

declare function N_0x380ffa15b72408fb(p0: number): number;

declare function N_0x3813e11a378958a5(p0: number): number;

declare function N_0x383f64263f946e45(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0x38497f139981c5c9(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x3852237a3d9df145(p0: number): void;

declare function N_0x38640a8c2def011b(p0: number): number;

declare function N_0x388088bff3681189(p0: number, p1: number): number;

declare function N_0x38c0c9cae1544500(p0: number): void;

declare function N_0x38c2bf94d15f464d(p0: number): number;

/**
 * ANIMPOSTFX_*
 */
declare function N_0x38d9d50f2085e9b3(effectNameHash: string | number): void;

declare function N_0x38e7dd70a242d5cb(p0: number, p1: number): void;

declare function N_0x38f1e09224eeca09(p0: number): void;

declare function N_0x3900491c0d61ed4b(p0: number, p1: number): void;

declare function N_0x390710d2dafa6bff(p0: number, p1: number): void;

declare function N_0x39073da4eddbc91d(p0: number): void;

declare function N_0x3923ec958249657d(p0: number, p1: number, p2: number): void;

declare function N_0x3946fc742ac305cd(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function N_0x39654e1f68b78287(): number;

declare function N_0x3972f78a78b5d9df(p0: number): void;

declare function N_0x398066f893149856(p0: number, p1: number, p2: number): number;

declare function N_0x398fab9c96a81924(p0: number, p1: number): void;

declare function N_0x399657ed871b3a6c(p0: number, p1: number): void;

declare function N_0x39a2fc5af55a52b1(p0: number, p1: number): void;

declare function N_0x39bed552db46ffa9(p0: number, p1: number): void;

declare function N_0x39d6dace323a20b6(p0: number): number;

declare function N_0x39d8d7082bc34b72(p0: number): void;

declare function N_0x3a00d87b20a2a5e4(p0: number, p1: number): void;

declare function N_0x3a0b667abff87f6e(p0: number, p1: number, p2: number): number;

declare function N_0x3a0f82f6ee2291c8(p0: number): number;

declare function N_0x3a3be6b920525237(p0: number, p1: number): void;

declare function N_0x3a50753042b6891b(p0: number, p1: number): void;

declare function N_0x3a5697b80fed5ebe(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x3a65f4844913a047(p0: number, p1: number): number;

declare function N_0x3a66f1963b223f61(p0: string): boolean;

declare function N_0x3a6ae4eee30370fe(p0: number, p1: number): number;

declare function N_0x3a77dae8b4fd7586(p0: number, p1: number): void;

declare function N_0x3a8611bd7bde84f7(p0: number, p1: number): void;

declare function N_0x3a87fda8f1b6cdfb(p0: number, p1: number, p2: number): void;

declare function N_0x3aa0cdc63696166d(p0: number): number;

declare function N_0x3ab3a77672f6473f(p0: number, p1: number, p2: number, p3: number): number[];

declare function N_0x3abfa128f5bf5a70(p0: number, p1: number, p2: number): void;

declare function N_0x3acac8832e77bc93(p0: number, p1: number): void;

declare function N_0x3acc128510142b9d(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x3acce14dfa6ba8c2(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0x3ad212429e095efb(p0: number, p1: number): void;

declare function N_0x3adc71a66356d706(): number;

declare function N_0x3ae3552e7c207cc5(p0: number, p1: number, p2: number): void;

declare function N_0x3ae451860f03ca8a(p0: number, p1: number): number;

declare function N_0x3aeabae3f3c7600c(): number;

declare function N_0x3aec4a410ecaf30d(p0: number): number;

declare function N_0x3b005ff0538ed2a9(p0: number): number;

/**
 * nullsub, doesn't do anything
 */
declare function N_0x3b296934db026873(p0: number, p1: number): void;

declare function N_0x3b31732fade5baf3(): number;

declare function N_0x3b393716c3fd8237(p0: number): number;

declare function N_0x3b8e3ad9677ce12b(p0: number, p1: number, p2: number): void;

declare function N_0x3bb84f812e052c90(p0: number): void;

declare function N_0x3bbdd6143ff16f98(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0x3bbeecc5b8f35318(p0: number, p1: number): void;

declare function N_0x3bf0767cf33fcc88(p0: number): void;

declare function N_0x3c3c7b1b5ec08764(): void;

declare function N_0x3c486e334520579d(): void;

declare function N_0x3c4ae8506638c7e2(p0: number, p1: number): void;

declare function N_0x3c529a827998f9b3(p0: number, p1: number, p2: number): void;

declare function N_0x3c61b52b00848c26(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x3c6490d940ff5d0b(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x3c7a9c2c953128fe(p0: number): void;

declare function N_0x3c8f74e8fe751614(): void;

declare function N_0x3c9628a811cbd724(p0: number): number;

declare function N_0x3ca5e58c9731a16b(p0: number, p1: number): void;

declare function N_0x3caad93fa5b9579a(p0: number, p1: number, p2: number): void;

declare function N_0x3cb8859f04763c78(p0: number, p1: number): number;

/**
 * Note: this native was added in build 1311.23
 */
declare function N_0x3cbd6565d9c3b133(p0: number, p1: number, p2: number): void;

declare function N_0x3cf96e16265b7dc8(p0: number): number;

declare function N_0x3d0bbccf401b5fdb(): void;

declare function N_0x3d10d7179d7034af(p0: number, p1: number, p2: number): number;

declare function N_0x3d2674828a4e6b3c(): number;

declare function N_0x3d69537039f8d824(p0: number): number;

declare function N_0x3d86997a86feef0d(p0: number, p1: number): void;

declare function N_0x3d9da5c9efd20d88(p0: number, p1: number): void;

declare function N_0x3d9f958834ab9c30(p0: number): number;

/**
 * ANIMPOSTFX_*
 */
declare function N_0x3da7a10583a4bec0(): boolean;

declare function N_0x3daabe78a23694bc(p0: number, p1: number): void;

declare function N_0x3df1a0a58498e209(p0: number, p1: number): void;

declare function N_0x3df7ee3a76185108(): void;

declare function N_0x3e2616e7ea539480(p0: number): number;

declare function N_0x3e2fddbe435a8787(): void;

declare function N_0x3e4a16bc669e71b3(): number;

declare function N_0x3e4e811480b3ae79(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x3e593df9c2962ec6(p0: number): number;

declare function N_0x3e74a687a73979c6(p0: number): void;

declare function N_0x3e8cce6769db5f34(p0: number): number;

declare function N_0x3e93dddcbb6111e4(p0: number, p1: number): void;

declare function N_0x3e98ac9d8c56c62c(p0: number): void;

declare function N_0x3ea62e56f386c997(p0: number, p1: number): void;

declare function N_0x3eb2791a1fbc8a42(p0: number, p1: number): void;

declare function N_0x3ec28da1ffac9ddd(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x3eecaadab0d9fe29(): number;

declare function N_0x3efabb21e14a6bd1(p0: number, p1: number, p2: number): void;

declare function N_0x3efed081b4834ba1(p0: number): void;

declare function N_0x3f08c6163a4ab1d6(p0: number): void;

declare function N_0x3f0abae38a0515ad(p0: number, p1: number): void;

declare function N_0x3f2ee18a3e294801(p0: number): number;

declare function N_0x3f4fd4bed07ab8c4(p0: number): number;

declare function N_0x3f6fd87d2030adc6(): number;

declare function N_0x3f8387db1b9f31b7(p0: number, p1: number): number;

declare function N_0x3f9fddba79117c69(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x3fa09dd57b93c0de(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0x3faa928a79591761(p0: number): number;

declare function N_0x3fcbb5fcfd968698(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0x3fd91f1a148a0468(p0: number, p1: number): number;

declare function N_0x3fdbb99efd8ce4af(p0: number, p1: number, p2: number): void;

declare function N_0x3fdcc1f8c17e303e(p0: number, p1: number, p2: number): void;

declare function N_0x3fe4fb41ef7d2196(p0: number): void;

declare function N_0x3feb770d8ed9047a(p0: number): number;

declare function N_0x3ffcd7bba074cc80(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function N_0x3ffe60dd8a936551(p0: number, p1: number): number;

declare function N_0x402e1a61d2587fcd(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0x404514d231db27a0(p0: number, p1: number): void;

declare function N_0x404527bc03da0e6c(p0: number): number;

declare function N_0x4046493d2eeaca0e(): void;

declare function N_0x405180b14da5a935(p0: number, p1: number): void;

declare function N_0x405ddefb1f531b18(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x406808610220405b(p0: number): void;

declare function SetPedDrunkness(ped: number, enabled: boolean, drunkness: number): void;

declare function N_0x40851bcc33acd9ab(p0: number): number;

declare function N_0x408cf580c5e96d49(p0: number, p1: number): void;

declare function N_0x408d1149c5e39c1e(p0: number, p1: number): void;

declare function N_0x409fe0ca6a4d1d49(p0: number, p1: number, p2: number): number;

declare function N_0x40ab73092c95b5f5(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x40c3524d4ed83554(p0: number, p1: number): void;

declare function N_0x40c9155af8bc13f3(p0: number): number;

declare function N_0x40ca665ab9d8d505(p0: number, p1: number): void;

declare function N_0x40f769d31a00d5a0(p0: number, p1: number): number;

/**
 * Note: this native was added in build 1355.30
 */
declare function N_0x40fedb13870042f1(): void;

declare function RemovePedBlackboardFloat(ped: number, name: string): void;

declare function N_0x41323f4e0c4ae94b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0x41365db586cd9e8e(p0: number, p1: number): void;

declare function N_0x413697ec260aabbf(p0: number, p1: number, p2: number): void;

declare function N_0x4138ee36bc3dc0a7(p0: number, p1: number): number;

declare function N_0x41452e8a3b9c0c4b(): number;

declare function N_0x41503629d1139abc(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x4161648394262fdf(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x41afa5f228b0b6b0(): void;

declare function N_0x41b87a6495ee13dd(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): number;

declare function N_0x41c23a8e6b344867(p0: number, p1: number): void;

declare function N_0x41cda90ee3450921(p0: number): void;

declare function N_0x41d1331afad5a091(p0: number, p1: number, p2: number): void;

declare function N_0x41e452a3c580d1a7(): void;

declare function N_0x41f0b254ddf71473(p0: number): void;

declare function N_0x41f88a85a579a61d(p0: number): void;

declare function N_0x422179c7f6ad9304(p0: number, p1: number): void;

/**
 * Note: this native was added in build 1355.30
 */
declare function N_0x422f9d6d6c7bc290(p0: number): void;

declare function N_0x423c6b1f3786d28b(p0: number, p1: number): void;

declare function N_0x42404d57d621601a(p0: number): number;

declare function N_0x4248ab2eeb3c75ad(p0: number, p1: number, p2: number): void;

declare function N_0x424ffcb9f0d2d4b5(p0: number, p1: number): void;

declare function N_0x42688e94e96fd9b4(p0: number, p1: number, p2: number): number;

declare function N_0x427c919e9809e370(p0: number, p1: number): void;

declare function N_0x4285804fd65d8066(p0: number, p1: number): void;

declare function N_0x4293b44a855f82cc(p0: number, p1: number, p2: number): number;

declare function N_0x42a429cdfed6d99d(p0: number, p1: number, p2: number): void;

declare function N_0x42cfd8fd8cc8dc69(p0: number, p1: number): void;

declare function N_0x42ed56b02e05d109(p0: number, p1: boolean): void;

declare function N_0x43037abfe214a851(): void;

declare function N_0x4308812a6e9ca62e(p0: number, p1: number): number;

declare function N_0x430f8319ae56c8a9(p0: number, p1: number): number[];

declare function N_0x431240a58484d5d0(p0: number, p1: number): void;

declare function N_0x4358bcf14c91761c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function N_0x43ab9d5a7d415478(): boolean;

declare function N_0x43ca928e892cfdb8(p0: number, p1: number): void;

declare function N_0x43cf999205084b4b(): void;

declare function N_0x43e4da469541a9c9(p0: number): number;

declare function N_0x43f35ddb2905d945(p0: number, p1: number): number;

declare function N_0x43f50a7cd2482156(p0: number, p1: number): void;

declare function N_0x43ff27fc1829c202(p0: number, p1: number): number;

declare function N_0x4402960666000e62(p0: number, p1: number): number;

declare function N_0x443174c20b8b9e7f(p0: number, p1: number, p2: number): void;

declare function N_0x4440fee3efe78f54(toggle: boolean): void;

declare function N_0x445d7d8ea66e373e(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
  p15: number,
): void;

declare function N_0x4465c3d1475bd3fd(p0: number): void;

declare function N_0x44813684f72b563c(p0: number, p1: number): void;

declare function N_0x448f2647dd6f2e27(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x449995ea846d3fc2(p0: number): void;

declare function N_0x44a5eef54f62e823(p0: number): number;

declare function N_0x44b09a23d728045a(p0: number): number;

declare function N_0x44b3a36933ac009c(p0: number, p1: number, p2: number): number;

declare function N_0x44c8f4908f1b2622(p0: number, p1: number): number;

declare function N_0x44d59ec597bbf348(p0: number, p1: number): void;

declare function N_0x450080ddedb91258(p0: number, p1: number): void;

declare function N_0x450769c833d58844(): number;

/**
 * Returns the entity associated with the given network ID.
 */
declare function N_0x4538ee7c321590bc(networkId: number): number;

declare function N_0x453d16d41fc51d3e(p0: number): void;

declare function N_0x454ad4da6c41b5bd(p0: number): number;

declare function N_0x455156f47dc6b78c(p0: number): void;

declare function N_0x455ecca0715c507f(): void;

declare function N_0x457b16951ad77c1b(p0: number): void;

declare function N_0x45853f4e17d847d5(p0: number): number;

declare function N_0x45ab66d02b601fa7(p0: number): number;

/**
 * Returns true if the current language is american, french, german, italian, spanish, brazilian or mexican.
 */
declare function N_0x45d50415e4d885ff(): boolean;

declare function N_0x45e57fdd531c9477(p0: number, p1: number): void;

declare function N_0x45ef176b532ca851(p0: number, p1: number): void;

declare function N_0x45fea6d5539bd474(p0: number, p1: number): void;

declare function N_0x461fcbdeb4d06717(p0: number, p1: number): void;

declare function N_0x462ff2a432733a44(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function N_0x4642182a298187d0(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0x4647842fe8f31c1e(p0: number, p1: number): void;

declare function N_0x465f04f68ad38197(p0: number, p1: number, p2: number): number;

declare function N_0x46743bbfedbc859e(p0: number, p1: number, p2: number): void;

declare function N_0x4687e69d258bbe41(p0: number): number;

declare function N_0x46bf2a810679d6e6(p0: number, p1: number): number;

declare function N_0x46cbcf0e98a4e156(p0: number, p1: number): void;

declare function N_0x46d42883e873c1d7(p0: number): number;

declare function N_0x46db71883ee9d5af(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x46f032b8ddf46cde(p0: number): number;

declare function N_0x46fa0ae18f4c7fa9(p0: number): number;

declare function N_0x4707e9c23d8ca3fe(p0: number, p1: number): void;

declare function N_0x4735e2a4bb83d9da(p0: number): number;

declare function N_0x478f6b9920446ce2(p0: number, p1: number): void;

declare function N_0x4791899615d70fa2(p0: number, p1: number, p2: number): void;

declare function N_0x4820a6939d7cef28(p0: number, p1: number): void;

declare function N_0x48229ce0c7938237(p0: number): number;

declare function N_0x4823f13a21f51964(p0: number, p1: number): number;

/**
 * Note: this native was added in build 1311.23
 */
declare function N_0x4835413ea6f9c9cd(p0: boolean): number;

declare function N_0x483d4e917b0d35a9(p0: number, p1: number): void;

declare function N_0x4845e7e7643a908c(p0: number, p1: number): void;

/**
 * Sets bit 0 in GtaThread+0x784
 */
declare function N_0x4858148e3b8a75d0(): void;

declare function N_0x485b05ef05b9aee9(p0: number, p1: number): void;

declare function N_0x486c96a0dcd2bc92(p0: number, p1: number): number;

declare function N_0x48d82c83987e18e4(p0: number): number;

declare function N_0x48e4d50f87a96aa5(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0x48fe0db54045b975(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0x4907d0e4fb26ee65(p0: number): void;

declare function N_0x491439aef410a2fc(p0: number): void;

declare function N_0x494a9874f17a7d50(p0: number): boolean;

declare function N_0x495a04caec263af8(p0: number, p1: number): number;

declare function N_0x49623bcfc3a3d829(p0: number, p1: number): number;

declare function N_0x497a18f8f88aa9d8(): void;

declare function N_0x497a6539bb0e8787(p0: number, p1: number, p2: number): void;

declare function N_0x498f2e77982d6945(p0: number, p1: number): number;

declare function N_0x49a8c2cd97815215(p0: number): number;

declare function N_0x49c44fe78a135a1d(p0: number): void;

declare function N_0x49c63fdf69744a27(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function N_0x49cf17a564918e8d(): void;

declare function N_0x49dadfc4cd808b0a(p0: number, p1: number, p2: number): void;

/**
 * Returns true when the weapon passed is either the fishingrod, a lasso, the camera or the binoculars
 */
declare function N_0x49e40483948af062(weaponHash: string | number): boolean;

declare function N_0x49f3241c28ebbfbc(p0: number): void;

declare function N_0x4a056257802dd3e5(player: number, toggle: boolean): void;

declare function N_0x4a7d73989f52eb37(p0: number, p1: number): void;

declare function N_0x4a8fefc43fd8ac9b(p0: number, p1: number, p2: number): void;

declare function N_0x4a98e228a936dbcc(p0: number): number;

declare function N_0x4aa5ea1edfb25786(p0: number): void;

declare function N_0x4ae07eba3462c5d5(p0: number, p1: number): void;

/**
 * BG_*
 */
declare function N_0x4ae1dff337a86fde(scriptIndex: number, p1: string): boolean;

declare function N_0x4aef1fb5b9011d75(p0: number): number;

declare function N_0x4afc7288c77238b3(p0: number): number;

declare function N_0x4b0501a468b749f8(): void;

declare function N_0x4b101dbcc9482f2d(p0: number): number;

declare function N_0x4b19f171450e0d4f(p0: number): number;

declare function N_0x4b2b1a891d437ca7(p0: number): void;

declare function N_0x4b436bac8cbe9b07(entity: number, p1: number, p2: boolean): void;

declare function N_0x4b52bf96e225d230(p0: number): void;

declare function N_0x4b6c9a43f7d9109b(p0: number, p1: number): void;

declare function N_0x4b85b3cf91972222(p0: number): number;

declare function N_0x4b9668db91dc39b8(p0: number): void;

declare function N_0x4ba972d0e5ad8122(p0: number, p1: number): void;

declare function N_0x4bd66b4e3427689b(p0: number): void;

declare function N_0x4bdebea5702b97a9(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0x4be3ec91c01f0fe8(): void;

declare function N_0x4c05b42a8d937796(): void;

declare function N_0x4c11ccacb7c02b6e(p0: number): number;

declare function N_0x4c39c95ae5db1329(p0: number, p1: number, p2: number): number;

declare function N_0x4c543d5dfcd2dafd(p0: number, p1: number): number;

declare function N_0x4c57f27d1554e6b0(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): number;

declare function N_0x4c60c333f9cca2b6(p0: number, p1: number): void;

declare function N_0x4cdffe3189ebdbd0(p0: number): number;

declare function N_0x4cfa2b7fae115ecb(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0x4d0d2e3d8bc000eb(p0: number, p1: number, p2: number): number;

declare function N_0x4d107406667423be(prompt: number, p1: number): void;

declare function N_0x4d1699543b1c023c(p0: number, p1: number): void;

declare function N_0x4d2f46d1b28d90fb(p0: number, p1: number): void;

declare function N_0x4d5c9cc7e7e23e09(): void;

declare function N_0x4d8611dfe1126478(p0: number): number;

declare function N_0x4dac398297981b87(p0: number): number;

declare function N_0x4db9d03ac4e1fa84(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x4dbc4873707e8fd6(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x4e42ca5bcd45444a(): void;

declare function N_0x4e4507cc5e4db869(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x4e463a3cdefffe96(): void;

declare function N_0x4e68c7ef706df35d(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0x4e806a395d43a458(p0: number): void;

declare function N_0x4e88a65968a55c78(p0: number, p1: number): number;

declare function N_0x4ea69188fbce6a7d(p0: number, p1: number): void;

declare function N_0x4ec4ea2f72b36358(p0: number, p1: number): void;

declare function N_0x4ec8be63b8a5d4ef(p0: number, p1: number): void;

declare function N_0x4eccc2815ca79ae2(p0: number): number;

declare function N_0x4eddd9e9ca5af985(p0: number): number;

declare function N_0x4efc1f8ff1ad94de(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0x4f0d2256aae94eda(p0: number): void;

declare function N_0x4f27603e44a8e4c0(p0: number, p1: number, p2: number): void;

declare function N_0x4f2d5fa23db992de(): void;

declare function N_0x4f57397388e1dff8(): void;

declare function N_0x4f5ebe70081e5a20(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): number;

declare function N_0x4f63433ce3c08230(p0: number, p1: number): void;

declare function N_0x4f81ead1de8fa19b(p0: number): void;

declare function N_0x4f89dad4156ba145(p0: number): number;

declare function N_0x4f9e3ed7617123ac(p0: number): number;

declare function N_0x4fb5869e2b37fc00(): void;

declare function N_0x4fb67d172c4476f3(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x4fcbcc0584cd08e9(p0: number): void;

declare function ClearPedDesiredLocoForModel(ped: number): void;

declare function N_0x4ff3c2b4e6a196c1(p0: number, p1: number, p2: number): number;

declare function N_0x5006c36652d6ec56(p0: number, p1: number): void;

declare function N_0x503703ec1781b7d6(p0: number, p1: string, p2: number): void;

declare function N_0x503941f65dba24ec(p0: number): void;

declare function N_0x5060fa977cea4455(): number;

declare function N_0x506ce71fb6e8cf5e(p0: number, p1: number): void;

declare function N_0x508f5053e3f6f0c4(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0x50aa09a0da64e73c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0x50b72a754ee64a71(p0: number): void;

declare function N_0x5102307ce88798eb(p0: number): number;

declare function N_0x51139d8c17b16fbc(p0: number): number;

/**
 * GET_*
 */
declare function N_0x511f1a683387c7e2(ped: number): number;

/**
 * Hardcoded to return zero.
 */
declare function N_0x5133cf81924f1129(): number;

declare function N_0x51345ae20f22c261(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x5136b284b67b35c7(p0: number): number;

declare function N_0x517d01bf27b682d1(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0x51951de06c0d1c40(p0: number, p1: number): void;

declare function N_0x519928df02eb5101(p0: number): void;

/**
 * ANIMPOSTFX_*
 */
declare function N_0x5199405eabfbd7f0(effectName: string): void;

declare function N_0x51c5ef47086aa0d7(): number;

declare function N_0x51c7694e140fae43(p0: number): number;

declare function N_0x51d99497abf3f451(p0: number): void;

declare function N_0x51e52c9687fcdeec(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0x5203038ff8bae577(p0: number, p1: number, p2: number): number;

declare function N_0x5217b7b6db78e1f3(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x52250b92ea70be3d(p0: number): number;

declare function N_0x522f74636df10201(p0: number, p1: number): void;

declare function N_0x522fa3f490e2f7ac(p0: number, p1: number, p2: number): void;

declare function N_0x5230bf34eb0ec645(p0: number): void;

declare function N_0x52572b331e693aed(p0: number, p1: number, p2: number): void;

declare function N_0x5288b7f0690f7c1f(p0: number): number;

declare function N_0x529b9ccd0972af4d(p0: number, p1: number): void;

declare function N_0x529b9ccd0972af4e(p0: number, p1: number): void;

declare function N_0x52a24d8a1da89658(p0: number, p1: number, p2: number): void;

declare function N_0x52c68e92d6e23add(p0: number): void;

declare function N_0x52fc26d2d2fc2987(p0: number, p1: number, p2: number): number;

declare function N_0x53187e563f938e76(p0: number): number;

declare function N_0x531a78d6bf27014b(p0: number): void;

declare function N_0x535a66aad2bf68f9(p0: number, p1: number): void;

declare function N_0x535ed4605f89ab6e(p0: number, p1: number): void;

declare function N_0x53764309c4618087(p0: number): number;

declare function N_0x537a0555f62ca01a(p0: number, p1: number): number;

declare function N_0x53a94294fddcf98c(p0: number, p1: number): number;

declare function N_0x53ba7d96b9a421d9(p0: number, p1: number): void;

declare function N_0x53cb3970ba02e3cc(p0: number): void;

declare function N_0x53ce46c01a089da1(p0: number, p1: number): void;

declare function N_0x53d05d60e5f5b40c(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x53e4d0c079ca6855(p0: number): number;

declare function N_0x53ed07bf368eda59(): void;

declare function N_0x5407b7288d0478b7(p0: number, p1: number): number;

declare function N_0x541e5b41dca45828(p0: number, p1: number, p2: number): void;

declare function N_0x5420d398a42917fc(p0: number, p1: number): number;

declare function N_0x543dfe14be720027(p0: number, p1: number, p2: number): void;

declare function N_0x5461c821d00fe15a(p0: number, p1: number): number;

declare function N_0x5463c962bc7777c3(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0x54b187f111d9c6f8(p0: number, p1: number): number;

declare function N_0x54cbdd6e1b4cb4df(p0: number): void;

declare function N_0x54d3cd482742c482(p0: number, p2: number): void;

declare function N_0x54f4d7b6670fbb5a(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0x550cb89dd7f4fa3d(p0: number, p1: number): number;

declare function N_0x55285f885f662169(): void;

declare function N_0x553d67295ddd2309(p0: number): void;

declare function N_0x55546004a244302a(p0: number, p1: number): void;

declare function N_0x559fc1d310813031(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): number;

/**
 * BG_*
 */
declare function N_0x55c40b7592bad213(scriptIndex: number, p1: string): number;

declare function N_0x55cd5fddd4335c1e(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0x55f37f5f3f2475e1(): void;

declare function N_0x56076667e7c2dcd6(p0: number, p1: number): void;

declare function N_0x5639fbea922788da(p0: number): void;

declare function N_0x564552c6af1eeab1(): void;

declare function N_0x564837d4a9ede296(p0: number): void;

declare function N_0x5651516d947abc53(): void;

declare function N_0x566ceb0542ef5ecf(p0: number, p1: number): number;

declare function N_0x569abc36e28ddeaa(): void;

declare function N_0x569f1e1237508deb(p0: number): number;

declare function N_0x56b3410626a473e7(p0: number): void;

declare function N_0x56e0735d6273b227(p0: number, p1: number): void;

declare function N_0x56e4bad93d33453c(p0: number, p1: number): number;

declare function N_0x56e58d4d118fb45e(p0: number, p1: number): number;

declare function N_0x56e9c26cd29d1ed6(p0: number, p1: number): void;

declare function N_0x57028fd99886f6f9(): number;

declare function N_0x5708edd71b50c008(p0: number, p1: number, p2: number): void;

declare function N_0x570a13a4ca2799bb(p0: number, p1: number): void;

declare function N_0x5744562e973e33cd(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0x5758b1ee0c3fd4ac(p0: number, p1: number): void;

declare function N_0x5759160ac17c13ce(p0: number, p1: number): void;

declare function N_0x57779b55b83e2bea(p0: number): number;

declare function N_0x577c60ba06d0ea64(ped: number): boolean;

declare function N_0x578907f59ba01b6d(p0: number): number;

declare function N_0x578e2fa64e847c60(popZone: number, p1: number): void;

declare function N_0x57c242543b7b8fb9(p0: number, p1: number): void;

/**
 * nullsub, doesn't do anything
 */
declare function N_0x57c6525034e76eb0(): void;

declare function N_0x57d9991dc1334151(p0: number): number;

declare function N_0x57f35552e771be9d(p0: number, p1: number): void;

declare function N_0x5801be2df2af07ec(p0: number): void;

declare function N_0x580d71dfe0088e34(p0: number, p1: number): number;

declare function N_0x580f34c726387226(p0: number, p1: number): number;

declare function N_0x58125b691f6827d5(p0: number): void;

declare function N_0x5826efd6d73c4de5(p0: number): void;

declare function N_0x5827be85a87b073d(p0: number): void;

declare function N_0x582f73acfe969571(p0: number, p1: number, p2: number): number;

declare function N_0x583ae9af9cee0958(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x58425fca3d3a2d15(p0: number): number;

declare function N_0x58521e6dcde97d74(p0: number, p1: number, p2: number): void;

declare function N_0x585ce159db46fadb(p0: number, p1: number): void;

declare function N_0x58d32261ae0f0843(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function N_0x58d378af2c8765b7(p0: number): number;

declare function N_0x58d3803fa639a3bb(p0: number): number;

declare function N_0x58de624fa7fb0e7f(p0: number): number;

declare function N_0x58e0b01d45ca7357(p0: number): void;

declare function ClearPedDesiredLocoMotionType(ped: number): void;

declare function N_0x592f58bc4d2a2cf3(p0: number, p1: number): number;

declare function N_0x5952dfa38fa529fe(): number;

declare function N_0x595478b3bbc3076d(): number;

declare function N_0x595550376b7ea230(p0: number): number;

declare function N_0x597f571ddee3ffac(p0: number): void;

declare function N_0x59872ea4cbd11c56(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): number;

declare function N_0x59ae5ca4ffb4e378(p0: number, p1: number): number;

declare function N_0x59aea4dc640814b9(p0: number, p1: number): void;

declare function N_0x59b57c4b06531e1e(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function RefreshMetaPedShopItems(ped: number, p1: number): void;

declare function N_0x59c7ad6fea2ac449(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x59f0aff3e0a1b019(p0: number, p1: number, p2: number): void;

declare function N_0x59fa676177dbe4c9(p0: number): number;

declare function N_0x5a10d6506b2f2c63(p0: number, p1: number): void;

declare function N_0x5a13586a9447931f(p0: number): number;

declare function N_0x5a1a929c8b729b4a(p0: number): void;

declare function N_0x5a34cd9c3c5bec44(p0: number): boolean;

declare function N_0x5a3b54addf5472a3(p0: string): number;

declare function N_0x5a40040bb5ae3ea2(p0: number): void;

declare function N_0x5a498fca232f71e1(p0: number, p1: number): void;

declare function N_0x5a4e1a41e3a02ad0(p0: number, p1: number, p2: number): void;

declare function N_0x5a695bd328586b44(p0: number, p1: number): number;

declare function N_0x5a79220f6d38d7c3(p0: number): number;

declare function N_0x5a91bcef74944e93(p0: number, p1: number): void;

declare function N_0x5a989b7ee3672a56(p0: number, p1: number): void;

declare function N_0x5aadc7bbbb1bceeb(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x5ac6e0fa028369de(): void;

declare function N_0x5ae0cb5f35f034fd(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function N_0x5af24ca9c974e51a(p0: number, p1: number): void;

declare function N_0x5affa9ddc87846f8(p0: number): number;

declare function N_0x5b1a26bb18e7d451(p0: number): number;

declare function N_0x5b235f24472f2c3b(p0: number, p1: number): number;

declare function N_0x5b23dff8e0948bb2(p0: number, p1: number): void;

declare function N_0x5b4a8121a47d844d(p0: number): number;

declare function N_0x5b4bbe80ad5972dc(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): number;

declare function N_0x5b637d6f3b67716a(p0: number): void;

declare function N_0x5b68d0007d9c92eb(p0: number, p1: number): void;

declare function N_0x5b73975b4f12f7f3(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x5b7b97e99f84138b(p0: number): number;

declare function N_0x5b9813ecf7633fe8(p0: number): void;

declare function N_0x5b9c6ac118fd4774(): void;

declare function N_0x5bb04bc74a474b47(p0: number, p1: number): void;

declare function N_0x5bc885ebd75faa7d(p0: number, p1: number): void;

declare function N_0x5bcf0b79d4f5dba3(p0: number, p1: number): void;

declare function N_0x5bd616735f16bf5c(entity: number, interior: number): void;

declare function N_0x5bd7457221cc5ff4(p0: number, p1: number): void;

declare function N_0x5bf0b9d9a8e227a0(p0: number): number;

declare function N_0x5c2e5e3caeeb1f58(p0: number, p1: number, p2: number): void;

/**
 * nullsub, doesn't do anything
 */
declare function N_0x5c497525f803486b(): void;

declare function N_0x5c674eb487891f6b(): number;

declare function N_0x5c6c7c70ca302801(p0: number): number;

declare function N_0x5c885e0978b6ad60(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x5c90e20c25e6d83c(p0: number): void;

declare function N_0x5c9c3a466b3296a8(p0: number): number;

declare function N_0x5ca20fbe49891bbd(p0: number, p1: number): void;

declare function N_0x5ca6bbd4a7d8145e(p0: number): number;

declare function N_0x5ca7fb7d6de49dcc(player: number): number;

declare function N_0x5cb2ebb467be3ed6(p0: number, p2: number): void;

declare function N_0x5cb8b0c846d0f30b(p0: number): void;

declare function N_0x5cd3aad8ff9ed121(p0: number): void;

declare function N_0x5cd6a2cce5087161(p0: number): void;

declare function N_0x5ce5cacc01d0f985(): void;

declare function N_0x5d1c5d8e62e8ee1c(p0: number): number;

declare function N_0x5d3c528b7a7df836(p0: number): void;

declare function N_0x5d4cd22a8c82a81a(p0: number, p1: number): void;

declare function N_0x5d5e2102b174b8d2(): number;

declare function N_0x5d6182f3bce1333b(p0: number, p1: number): number;

declare function N_0x5d7bfda2290b4e39(p0: number): number;

declare function N_0x5d9b0baaf04cf65b(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x5da36cccb63c0895(p0: number, p1: number, p2: number): number;

declare function N_0x5e214112806591ea(p0: number, p1: number): number[];

declare function N_0x5e3ccf03995388b5(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x5e5d96be25e9df68(p0: number): number;

declare function N_0x5e6f375ca101c108(p0: number, p1: number): void;

declare function N_0x5e71e72a94985214(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function N_0x5e981c764df33117(p0: number, p1: number): void;

declare function N_0x5e9faf6c513347b4(p0: number, p1: number): number;

declare function N_0x5ea655f01d93667a(p0: number): number;

declare function N_0x5ed39da62beb1330(p0: number): number;

declare function N_0x5ee6fccc9c832ca2(p0: number): number[];

declare function N_0x5efa8a3d8a60d662(p0: number, p1: number): number;

declare function N_0x5f0e99071582deca(p0: number, p1: number, p2: number): number;

declare function N_0x5f217bc1190503d8(p0: number, p1: number): void;

/**
 * Note: this native was added in build 1311.23
 */
declare function N_0x5f328fc909f0e0ff(p0: number, p1: number, p2: number, p3: number): boolean;

declare function N_0x5f5b1b7e8e8f94c6(p0: number): number;

declare function N_0x5f8e0303c229c84b(p0: number, p1: number): void;

declare function N_0x5fcf25d584065bfd(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x5fe444eb67c70ad4(p0: number): number;

/**
 * Not implemented.
 */
declare function N_0x600bbdd29820370c(ped: number): void;

declare function N_0x603469298a4308af(p0: number): void;

declare function N_0x6035e8fbca32ac5e(): void;

declare function N_0x604190f0cf0df158(p0: number, p1: number): void;

declare function N_0x604e1010e3162e86(p0: number, p1: number, p2: number): void;

declare function N_0x6052b4de6657684f(p0: number): number;

/**
 * Not implemented.
 */
declare function N_0x606d529dada3c940(ped: number, p1: number): void;

declare function N_0x6072b7420a83a03f(): number;

declare function N_0x6076213101a47b3b(p0: number): void;

declare function N_0x608ad36a644a97fe(p0: number, p1: number, p2: number): void;

declare function N_0x6090a031c69f384e(p0: number, p1: number): void;

declare function N_0x6098139150dcc745(p0: number, p1: number): number;

declare function N_0x60b7d1dcc312697d(p0: number): number;

declare function N_0x6102830f764b3de1(p0: number): number;

declare function N_0x610438375e5d1801(p0: number): number;

declare function N_0x6123e2832c34243d(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x614d0b4533f842d3(p0: number): number;

declare function N_0x615b3b8e73634509(p0: number, p1: number): void;

declare function N_0x615dc4a82e90bb48(p0: number, p1: number, p2: number): void;

declare function N_0x617d3494ad58200f(p0: number): number;

declare function N_0x61b2aaef645ddaf0(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0x61b98367d93f012f(p0: number): void;

declare function N_0x61bda07407754a5c(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x61befba3ce7a3bc8(p0: number, p1: number): number;

declare function N_0x61bfbaa795e712ad(): void;

/**
 * Returns true if player is holding LMB while cursor is active
 */
declare function N_0x61cae9d1fd055e44(): boolean;

declare function N_0x621d1b289caf5978(p0: number): number;

declare function N_0x62377977e4f08668(p0: number): number;

declare function N_0x6243635af2f1b826(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x627b68d9ce6ee8de(p0: number): number;

declare function N_0x627f7f3a0c4c51ff(p0: number, p1: number): void;

declare function N_0x628e742fe1f79c4a(p0: number, p1: number): void;

declare function N_0x62b384fefde06817(p0: number): boolean;

declare function N_0x62b9f9a1272aed80(p0: number): void;

declare function N_0x62cab7db62ead434(p0: number, p1: number): number;

declare function N_0x62d5f0588915b277(): void;

declare function N_0x62fdf4e678e40cc6(p0: number, p1: number): number;

/**
 * ANIMPOSTFX_*
 */
declare function N_0x63011d0c7c6519e0(
  effectName: string,
  p1: number,
  red: number,
  green: number,
  blue: number,
  alpha: number,
): void;

declare function N_0x630e7b01f091a197(p0: number, p1: number): number;

declare function N_0x6318fb3be37e11b3(p0: number, p1: number): void;

declare function N_0x631cd2d77fdc0316(p0: number): void;

declare function N_0x6329c34bee5bff4b(p0: number, p1: number): number;

declare function N_0x632be8d84846fa56(): void;

declare function N_0x63342c50ec115ce8(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
): number;

declare function N_0x6339c1ea3979b5f7(p0: number, p1: number): number;

declare function N_0x633f83b301c87994(p0: number, p1: number): void;

declare function N_0x63509ddf102e08e8(p0: number, p1: number): void;

declare function N_0x635423d55ca84fc8(p0: number): number;

declare function N_0x6355602c02edc6df(p0: number, p1: number): void;

declare function N_0x6378a235374b852f(p0: number, p1: number): void;

declare function N_0x638fcfc6042a9473(p0: number, p1: number): void;

declare function N_0x63aa2b8eb087886a(p0: number, p1: number): void;

declare function N_0x63b83a526329afbc(p0: number): void;

declare function N_0x63dc1f22c903b709(vehicle: number, p1: boolean): void;

declare function N_0x63e39f09310f481f(p0: number, p1: number): void;

declare function N_0x63e5841a9264d016(p0: number): void;

declare function N_0x63e9dcbc8b0931ed(p0: number, p1: number, p2: number): number;

declare function N_0x640a602946a8c972(p0: number): number;

declare function N_0x641092322a8852ab(): void;

declare function N_0x641351e9ad103890(p0: number, p1: number): void;

declare function N_0x642720d8d69328b6(p0: number, p1: number): void;

declare function N_0x64340dc208d671d5(p0: number): void;

declare function N_0x643fd1556f621772(p0: number, p1: number, p2: number): number;

declare function N_0x644439b5387ee57e(p0: number, p1: number): number;

declare function N_0x644e02f24f9d4e98(p0: number, p1: number): number;

declare function N_0x6452b1d357d81742(p0: number, p1: number): number;

declare function N_0x6480723d3be535b6(p0: number): void;

declare function N_0x64a36ba85ce01a81(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x64b956f4e761df5c(p0: number): void;

declare function N_0x64f765d9a1f8f02c(p0: number, p1: number, p2: number): void;

declare function N_0x64ff4bf9af59e139(p0: number, p1: number): void;

declare function N_0x6507ac3bd7c99009(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x6519238858af5479(p0: number): void;

declare function N_0x651f0530083c0e5a(p0: number, p1: number): void;

declare function N_0x6554ecce226f2a2a(p0: number): number;

declare function N_0x6571e4327390ec0b(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0x6579860a5558524a(p0: number, p1: number): void;

declare function N_0x65887eac535a0b0c(p0: number): void;

declare function N_0x65a5f70f4a292ebe(p0: number, p1: number, p2: number): void;

declare function N_0x65a8196b8d7f5e0b(p0: number): number;

declare function N_0x65b205bf30c13ddb(p0: number): void;

declare function N_0x65c75fdccac86464(p0: number): number;

declare function N_0x65d281985f2bdfc2(p0: number, p1: number): void;

declare function N_0x65dc4ac5b96614cb(p0: number): number;

declare function N_0x65f040d91001ed4b(p0: number): void;

declare function N_0x660a8f876df1d4f8(p0: number): void;

declare function N_0x6614f9039bd31931(p0: number, p1: number, p2: number): number;

declare function N_0x661bb1e1ff77742d(p0: number): number;

declare function N_0x6647c5f6f5792496(ped: number, p1: boolean): void;

declare function N_0x665161d250850a9f(p0: number): number;

declare function N_0x6652b0c8f3d414d0(p0: number): void;

declare function N_0x665b21666351cb37(p0: number, p1: number, p2: number): number;

declare function N_0x666c2f53abefc952(p0: number): number;

declare function N_0x669655ffb29ef1a9(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x669c25840c6f7ae2(p0: number, p1: number): void;

declare function UpdateShopItemWearableState(
  ped: number,
  componentHash: number,
  wearableState: number,
  p3: number,
  p4: boolean,
  p5: number,
): void;

declare function N_0x66bc28e50e85270e(p0: number): number;

declare function N_0x66c047719b0e80e1(p0: number, p1: number): void;

declare function N_0x66daa3a9274e8e82(): void;

declare function N_0x66f9eb44342bb4c5(p0: number, p1: number): void;

declare function N_0x66ff395445a88a6e(p0: number, p1: number, p2: number): void;

declare function N_0x6703872ec09bc158(p0: number, p1: number): void;

declare function N_0x6718f40313a2b5a6(p0: number): number;

declare function N_0x671a07c9a1cd50a5(p0: number): number;

declare function N_0x6734f0a6a52c371c(p0: number, p1: number): void;

declare function N_0x673a8779d229ba5a(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0x6759bee6762e140b(p0: number): void;

declare function N_0x67659a8f248e0141(p0: number, p1: number): void;

declare function N_0x678d3226cf70b9c8(p0: number, p1: number): number;

declare function N_0x67995318f5faa496(p0: number): number;

declare function N_0x67a43ea3f6fe0076(p0: number): void;

declare function N_0x67b0778c62e74423(p0: number): void;

declare function N_0x67ccdf74c4df7169(): number;

declare function N_0x67f7ceac2391e114(p0: number, p1: number): void;

declare function N_0x68103e2247887242(): void;

declare function N_0x6818d1a194e29983(): number;

declare function N_0x68319452c5064aba(p0: number, p1: number): void;

declare function N_0x6835afea10e186f4(p0: number, p1: number): void;

declare function N_0x6852288340b43239(p0: number, p1: number): number;

declare function N_0x6862e4d93f64cf01(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x68821369a2ceadd5(p0: number, p1: number): number;

declare function N_0x68830738a6bfb370(p0: number, p1: number): void;

declare function N_0x68a0389e0718ac8f(p0: number): number;

declare function N_0x68f6a75fdf5a70d6(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x691e4de5309eaefc(p0: number, p1: number): void;

declare function N_0x693126b5d0457d0d(p0: number): number;

declare function N_0x694ffa4308060cd1(p0: number, p1: number): void;

declare function N_0x695dac2db928f308(p0: number, p1: number): void;

declare function N_0x6968ce7ac32f6788(p0: number): void;

declare function N_0x69786495c92a3044(p0: number): number;

declare function N_0x697df68f3a761a50(p0: number): void;

declare function N_0x69c810b72291d831(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0x69d65e89ffd72313(p0: number, p1: number): void;

declare function N_0x6a190b94c2541a99(p0: number): void;

declare function N_0x6a1af481407bf6e9(p0: number): void;

declare function N_0x6a4404bdfa62ce2c(p0: number, p1: number): void;

declare function N_0x6a489892e813951a(p0: number): void;

declare function N_0x6a4d224fc7643941(p0: number): void;

declare function N_0x6a564540fac12211(p0: number, p1: number): void;

declare function N_0x6a6e79fbe8678c98(): void;

declare function N_0x6ab944df68b512d3(p0: number): void;

/**
 * Returns true when the weapon passed is either a lasso, the camera or the binoculars
 */
declare function N_0x6abad7b0a854f8fb(weaponHash: string | number): boolean;

declare function N_0x6abc50979655bee7(p0: number, p1: number, p2: number): void;

declare function N_0x6ac4af46a6b8dfb2(p0: number): void;

declare function N_0x6adf821fbf21920e(p0: number, p1: number): void;

declare function N_0x6afd84aeaa3ea538(p0: number): number;

declare function N_0x6afda2264925bd11(p0: number): void;

declare function N_0x6b34be961f639e21(p0: number, p1: number): void;

declare function N_0x6b53f4b811e583d2(p0: number, p1: number): void;

declare function N_0x6b5ddfb967e5073d(p0: number, p1: number): void;

declare function N_0x6b67320e0d57856a(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x6b7a88a61b41e589(p0: number): void;

declare function N_0x6b89faa36fc909a3(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x6b9c5c38838fb6e6(p0: number): void;

declare function N_0x6ba606ab3a83bc4d(p0: number): number;

declare function N_0x6bab7aced1017204(p0: number, p1: number): number;

declare function N_0x6bcf5f3d8ffe988d(p0: number, p1: number): void;

declare function N_0x6bcf7b5cd338281a(p0: number, p1: number, p2: number): void;

declare function N_0x6bed40493a1afdb8(p0: number, p1: number): void;

declare function HasCollisionLoadedAroundPosition(x: number, y: number, z: number): number;

/**
 * nullsub, doesn't do anything
 */
declare function N_0x6bff5f84102df80a(player: number): void;

declare function N_0x6bffb7c276866996(p0: number): number;

declare function N_0x6c03118e9e5c1a14(p0: number): void;

declare function N_0x6c1053c433a573cf(p0: number): void;

declare function N_0x6c269f673c47031e(p0: number): number;

declare function N_0x6c27442a225a241a(p0: number): number;

declare function N_0x6c31b06e91518269(p0: number, p1: number): void;

declare function N_0x6c3f12eceb6d2e2a(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function N_0x6c50b9dccca70023(p0: number): number;

declare function N_0x6c54e69516cc56bd(p0: number): number;

declare function N_0x6c57bea886a20c6b(p0: number, p1: number): void;

declare function N_0x6c7b68d3ce60e8de(p0: number): number;

declare function N_0x6c7e04e9de451789(): void;

declare function N_0x6c87f49bfa181db5(p0: number, p1: number, p2: number): number;

declare function N_0x6ca484c9a7377e4f(p0: number, p1: number): number;

declare function N_0x6cab0ba160b168d2(): void;

declare function N_0x6cd79468a1e595c6(padIndex: number): boolean;

declare function N_0x6cee2e30021daec6(): void;

declare function N_0x6cf82a7f65a5ad5f(p0: number, p1: number): number;

declare function N_0x6d07b371e9439019(p0: number): void;

declare function N_0x6d2f987736a42d4c(p0: number, p1: number, p2: number): void;

declare function N_0x6d58167f62238284(p0: number): number;

declare function N_0x6d5f9e69ba1be783(p0: number): void;

declare function N_0x6d85126f6ccf02c9(p0: number, p1: number, p2: number): void;

declare function N_0x6d87ba8ef15226cd(): number;

declare function N_0x6da15746d5cc1a92(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0x6dac799857ef3f11(p0: number, p1: number): number;

declare function N_0x6dad6630ae4a74cb(p0: number, p1: number): void;

declare function N_0x6db875afc584fa32(p0: number, p1: number): number;

declare function N_0x6dbf2d78709ad70b(p0: number, p1: number): void;

declare function N_0x6de072ac8a95ffc1(p0: number, p1: number): void;

declare function N_0x6df942c4179be5ab(p0: number, p1: number): number;

declare function N_0x6dfd37e586d4f44f(): number;

declare function N_0x6e0d3c3f828da773(p0: number, p1: number): void;

declare function N_0x6e2aa80bb0c03728(p0: number, p1: number): number;

declare function N_0x6e585a616abb8401(p0: number): number;

declare function N_0x6e5cbcb3941d7d08(p0: number, p1: number): number;

declare function N_0x6e8b87139854022d(p0: number, p1: number): void;

declare function N_0x6e8eb45a4f4460eb(p0: number): void;

declare function N_0x6e969927cf632608(p0: number): void;

declare function N_0x6ea0e93cffa472cc(p0: number): void;

declare function N_0x6ea1273d525427f4(p0: number, p1: number, p2: number): void;

declare function N_0x6ecfc621a168424c(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x6edb5d08cb03e763(p0: number, p1: number): void;

declare function N_0x6ef4e31b4d5d2da0(p0: number, p1: number): number;

declare function N_0x6f02b5e50511721e(p0: number): number;

declare function N_0x6f43c351a5d51e2f(p0: number, p1: number): number;

declare function N_0x6f46f8acb44c4fc1(p0: number): number;

declare function N_0x6f62fae266dcfc81(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0x6f700a4bf7c3331b(p0: number): void;

declare function N_0x6fa957d1b55941c1(p0: number, p1: number): void;

declare function N_0x6fb76442469abd68(p0: number): number;

declare function N_0x6fd7bdf10304363a(p0: number, p1: number): void;

/**
 * nullsub, doesn't do anything
 */
declare function N_0x6fd992c4a1c1b986(): number;

declare function N_0x7020839c7302d8ac(p0: number): number;

declare function N_0x703d4fb366da4452(p0: number, p1: number): void;

declare function N_0x704c908e9c405136(p0: number): void;

declare function N_0x704f92b3af20d857(p0: number): void;

declare function N_0x70605812abc9ff0f(p0: number, p1: number): void;

declare function N_0x706b434fefad6a24(p0: number): void;

declare function N_0x708df841b8f27aa2(p0: string): void;

declare function N_0x709ba8c08c5c008d(): void;

declare function N_0x70a6658d476c6187(): void;

declare function N_0x70e3a884ed000a01(p0: number, p1: number): number;

declare function N_0x70f7a1eab1ae3aa8(p0: number, p1: number): void;

declare function N_0x710448d44a64c213(p0: number): void;

declare function N_0x712b2c2b2471b493(p0: number, p1: number): void;

declare function N_0x714a0ea7de1167be(p0: number, p1: number): number;

declare function N_0x717da2281df90855(p0: number): number;

/**
 * ANIMPOSTFX_*
 */
declare function N_0x71845905bccde781(effectNameHash: string | number): void;

declare function N_0x718c6ecf5e8cbdd4(): void;

declare function N_0x718eb706b6e998a0(p0: number): void;

declare function N_0x71d71e08a7ed5bd7(p0: number): void;

declare function N_0x71fa2d1880c48032(p0: number): void;

declare function N_0x722d6a49200174fe(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x722fbe08ef5b87bd(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0x725d52f21a5e9e22(p0: number): number;

declare function N_0x725d52f21a5e9ef6(p0: number): number;

declare function N_0x7264f9ca87a9830b(p0: number): number;

declare function N_0x7274f84b1501b523(p0: number): void;

declare function N_0x728491fb3dffef99(p0: number): void;

declare function N_0x729d52461aea9e22(p0: number): number;

declare function N_0x729d52f61a5a9e22(p0: number): number;

declare function N_0x72ad59f7b7fb6e24(p0: number, p1: number): number;

declare function N_0x72b2e00c9bac6789(p0: number, p1: number): number;

declare function N_0x72b7f65f11fc8896(p0: number): void;

declare function N_0x72e4d1c4639bc465(p0: number, p1: number): number;

declare function N_0x73118a3ee9c9b6db(p0: number, p1: number, p2: number): void;

declare function N_0x733077295ab51304(p0: number): void;

declare function N_0x733c87d4ce22bea2(p0: number): void;

declare function N_0x734311e2852760d0(p0: number, p1: number, p2: number): number;

declare function N_0x7351da734f989f4e(p0: number): number;

declare function N_0x735662994e60a710(p0: number, p1: number): void;

declare function N_0x735762e8d7573e42(p0: number, p1: number, p2: number): void;

declare function N_0x73616e64696c132e(p0: number, p1: number): number;

declare function N_0x73b6f907b913c860(p0: number, p1: number): void;

declare function N_0x73bad7b2f2db50de(p0: number, p1: number): void;

declare function N_0x73eb2ef2e92d23bf(): boolean;

declare function N_0x73f0d0327bfa0812(p0: number): number;

declare function N_0x73ff6be63dc18819(): number;

declare function N_0x7406c71f4ac2ffcc(p0: number): void;

declare function N_0x7408b5c66ba31adb(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function N_0x7409669c5ed50144(p0: number): number;

/**
 * Note: this native was added in build 1311.23
 */
declare function N_0x744bfbb0ca908161(p0: boolean): number;

declare function N_0x7455cd705f7e933e(): void;

declare function N_0x745808bb01cec6b9(p0: number): void;

declare function N_0x747257807b8721ce(p0: number, p1: number): number;

/**
 * nullsub, doesn't do anything
 */
declare function N_0x748c5f51a18cb8f0(p0: number): void;

declare function N_0x748d5e0d2a1a4c61(p0: number, p1: number, p2: number): void;

declare function N_0x74aca66484cebaf0(p0: number): void;

/**
 * nullsub, doesn't do anything
 */
declare function N_0x74bcceb233ad95b2(p0: string | number, p1: number): void;

declare function N_0x74c2365fdd1bb48f(p0: number, p1: number): void;

declare function N_0x74c2b3dc0b294102(p0: number): void;

declare function N_0x74c333e34df74e8a(action: string): void;

declare function N_0x74c3b1093728d263(p0: number, p1: number): number;

declare function N_0x74c8000fdd1bb111(p0: number, p1: number): number;

declare function N_0x74c8000fdd1bb222(p0: number, p1: number): number;

declare function N_0x74c9080fdd1bb48e(p0: number, p1: number): void;

declare function N_0x74c9080fdd1bb48f(p0: number, p1: number): void;

declare function N_0x74c90aaacc1dd48f(p0: number): void;

declare function N_0x74f0209674864cbd(): number;

declare function N_0x74f1d22efa71fab8(): number;

/**
 * Hardcoded to return zero.
 * ==== PS4 specific info ====
 * Returns some sort of unavailable reason:
 * -1 = REASON_INVALID
 * 0 = REASON_OTHER
 * 1 = REASON_SYSTEM_UPDATE
 * 2 = REASON_GAME_UPDATE
 * 3 = REASON_SIGNED_OUT
 * 4 = REASON_AGE
 * 5 = REASON_CONNECTION
 * =================================
 */
declare function N_0x74fb3e29e6d10fa9(): number;

declare function N_0x750d42c013f64ae7(p0: number, p1: number): void;

declare function N_0x751df00eeff122e3(p0: number): void;

declare function N_0x753b15ad0fd6f3e3(p0: number): number;

declare function N_0x754937c28271bc65(p0: number): void;

declare function N_0x7549b9e841940695(vehicle: number, p1: boolean): void;

declare function N_0x755901c7598b97bc(p0: number, p1: number): number;

declare function N_0x7563cbca99253d1a(p0: number, p1: number): void;

declare function N_0x756c7b4c43df0422(p0: number): number;

declare function N_0x7583a9d35248b83f(p0: number): number;

declare function N_0x758f081db204ddde(p0: number): number;

declare function N_0x75a082563b4452e5(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x75b49acd73617437(vehicle: number, p1: boolean): void;

/**
 * REQUEST_*
 */
declare function N_0x75ba1cb3b7d40caf(ped: number, p1: boolean): void;

declare function N_0x75cbf20ba47e4f89(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x75cfac49301e134e(p0: number, p1: number, p2: number): void;

declare function N_0x75cfac49301e134f(p0: number, p1: number, p2: number): void;

declare function N_0x75d3333409cd33ce(p0: number, p1: number, p2: number): void;

declare function N_0x75d568607909333e(p0: number): void;

declare function N_0x75f90e4051cc084c(p0: number, p1: number): void;

declare function N_0x75fc34a2ba345bd1(entity: number, player: number, p2?: number): [boolean, number];

declare function N_0x762fdc4c19e5a981(p0: number, p1: number): void;

declare function N_0x763637f9b838b0a7(p0: number, p1: number, p2: number): void;

declare function N_0x763fa8a9d76ee3a7(p0: number): number;

declare function N_0x764db5a48390fbad(p0: number, p1: number): void;

declare function N_0x765e60a1dcb8b1ce(): void;

declare function N_0x76610d12a838ebde(p0: number): number;

declare function N_0x766315a564594401(p0: number, p1: number, p2: number): void;

/**
 * Note: this native was added in build 1311.23
 */
declare function N_0x7673c0d2c5cdac55(): void;

declare function N_0x7678fe0455ed1145(p0: number, p1: number, p2: number): number;

declare function N_0x767931c727df2ed7(p0: number, p1: number): number;

declare function N_0x7681b677400c7071(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x768e81ae285a4b67(p0: number, p1: number): void;

declare function N_0x769bb7626b8cdb06(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0x76bad9d538bca1aa(p0: number, p1: number): void;

declare function N_0x76cbcd9eadc00955(): void;

declare function N_0x76cf93d4b416b288(p0: number): number;

declare function N_0x76f7e1bcd623a429(p0: number): void;

declare function N_0x771dfcb24d19c2f6(p0: number): number;

declare function N_0x77243ed4f7caaa55(p0: number): number;

declare function N_0x775b2ed944e44973(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0x775fa1fc87666847(p0: number, p1: number): number;

declare function N_0x7761a30432c91297(p0: number, p1: number, p2: number): void;

declare function N_0x77a6e4ad0c496f81(p0: number): number;

/**
 * nullsub, doesn't do anything
 */
declare function N_0x77b0b6d17a3ac9aa(p0: number, p1: number): void;

declare function N_0x77b299e8799b1332(p0: number, p1: number, p2: number): number;

/**
 * nullsub, doesn't do anything
 */
declare function N_0x77d65669a05d1a1a(): void;

declare function N_0x77e83c315a3b31ca(p0: number): void;

declare function N_0x7803436e68c32b26(): void;

declare function N_0x780a13f780a13f1b(p0: number): void;

declare function N_0x7840576c50a13dba(p0: number, p1: number): void;

declare function N_0x785639d89f8451ab(p0: number, p1: number): number[];

declare function N_0x787e43477746876f(p0: number): void;

declare function N_0x78815fc52832b690(p0: number, p1: number): void;

declare function N_0x7883aa809df43d98(p0: number, p1: number): void;

declare function N_0x789dabd18e9024db(p0: number, p1: number, p2: number): void;

declare function N_0x78b3d19af6391a55(p0: number, p1: number): void;

declare function N_0x78d8c1d4eb80c588(p0: number): number;

declare function N_0x79197f7d2bb5e73a(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0x7933754f260b428a(p0: number): number;

declare function N_0x796085220adcc847(): number;

declare function N_0x796eecff0c6d39be(p0: number, p1: number, p2: number): number;

declare function N_0x797b3d4d92e56094(p0: number, p1: number): number;

declare function N_0x7981037a96e7d174(ped: number): void;

declare function N_0x798be43c9393632b(p0: number): void;

declare function N_0x799fcd53358ed5fa(p0: number, p1: number): number;

declare function N_0x79b1a6e780266db0(p0: number): number;

declare function N_0x79c2bec82cfd7f7f(p0: number): number;

declare function N_0x79f478ff5f9f4f05(p0: number): void;

declare function N_0x79f9c57b8d0dfe90(p0: number, p1: number): number;

declare function N_0x7a17b7981560ffa5(p0: number): void;

declare function N_0x7a1bd123e5cdb6e5(): void;

declare function N_0x7a1fdcf35eaa140f(p0: number): void;

declare function N_0x7a35a72a692be9db(p0: number): number;

declare function N_0x7a49d40de437bc8d(p0: number, p1: number): void;

declare function N_0x7a54d82227a139db(p0: number, p1: number): void;

declare function N_0x7a76104cc2cc69e8(p0: number, p1: number, p2: number): number;

declare function N_0x7a8e8df782b47eb0(p0: number, p1: number, p2: number): number;

declare function N_0x7abbd9e449e0db00(p0: number, p1: number): void;

declare function N_0x7ae93c45ec14a166(p0: number, p1: number): number;

/**
 * Hardcoded to return false.
 */
declare function N_0x7af1bb4504ea5ed9(): boolean;

declare function N_0x7b0279170961a73f(p0: number): void;

declare function N_0x7b204f88f6c3d287(p0: number): void;

declare function N_0x7b3ff2d193628126(p0: number): void;

declare function N_0x7b5c293238ee4f20(p0: number): number;

declare function N_0x7b8c2b846c05e5ad(): number;

declare function N_0x7b98500614c8e8b8(p0: number, p1: number, p2: number): number;

declare function N_0x7baa30c9bbe8aee7(p0: number, p1: number): number;

declare function N_0x7bb810e8b343ac7b(p0: number): number;

declare function N_0x7bca0a3972708436(p0: number, p1: number): number;

declare function N_0x7be0746539def0c8(p0: number, p1: number): number;

declare function N_0x7be607daff382fd2(p0: number, p1: number, p2: number): number;

declare function N_0x7c00cfc48a782dc0(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function N_0x7c015d8bcec72cf4(p0: number, p1: number): void;

declare function N_0x7c08e7cb8d951b70(p0: number, p1: number): void;

declare function N_0x7c10221ce718aa72(p0: number, p1: number): void;

declare function N_0x7c1c2062cfad06fe(unlockHash: string | number, data?: number): number;

declare function N_0x7c2abf6e556b21fc(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x7c32191d9fb2bdea(p0: number): void;

declare function N_0x7c511e91738a0828(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x7c680ff55617f82f(): boolean;

declare function N_0x7c709c01d43d94cd(): void;

declare function N_0x7c7e4ab748ea3b07(): number;

declare function N_0x7c8aa850617651d9(p0: number, p1: number): number;

declare function N_0x7c907e8a725e5fd2(p0: boolean): void;

declare function N_0x7c981de05a7403a0(p0: number, p1: string, p2?: number): [boolean, number];

declare function N_0x7c9e45a4ced2e8da(p0: number, p1: number): void;

declare function N_0x7c9f4cdf402ca82a(): void;

declare function N_0x7cb99fadde73cd1b(p0: number): number;

declare function N_0x7cc2186c32d3540a(p0: number, p1: number): number;

declare function N_0x7ce9dc58e3e4755f(): number;

declare function N_0x7cf96f1250ef3221(p0: number): number;

declare function N_0x7d0f2014db28dd01(p0: number, p1: number, p2: number): number;

declare function N_0x7d4411d6736cd295(p0: number, p1: number): number;

declare function N_0x7d654266025e921b(p0: number): void;

declare function N_0x7dd7fb3480d8083e(p0: number): void;

declare function N_0x7e002a36aefcfb55(): void;

declare function N_0x7e02e4218d916b94(p0: number, p1: number, p2: number): number;

declare function N_0x7e176c676f8652a9(p0: number): void;

declare function N_0x7e2c766adb2c5f1a(p0: number, p1: number): void;

declare function N_0x7e300b5b86ab1d1a(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
): void;

declare function N_0x7e40a01b11398fcb(): void;

declare function N_0x7e5185b979706210(p0: number, p1: number): void;

declare function N_0x7e6bc0b94f5928f0(popZone: number, p1: number, p2: number): void;

declare function N_0x7e7b19a4355fee13(p0: number, p1: number): number;

declare function N_0x7e8f9949b7aabbf0(p0: number, p1: number, p2: number): void;

declare function N_0x7ec0d68233e391ac(p0: number): number;

declare function N_0x7edb3c766b0d073f(p0: number): void;

declare function N_0x7ee3a8660f38797e(p0: number): number;

declare function N_0x7ef2a2fe38d74456(p0: number, p1: number): void;

declare function N_0x7efacc589b98c488(p0: number): number;

declare function N_0x7f090958ae95b61b(p0: number, p1: number): number;

declare function N_0x7f20092547b4ddea(p0: number): void;

declare function N_0x7f458b543006c8fe(p0: number, p1: number): void;

declare function N_0x7f4ce164d9a11dfe(): number;

declare function N_0x7f8e2b131e1dca6c(p0: number, p1: boolean): void;

declare function N_0x7fa58ced69405f9a(p0: number, p1: number): void;

declare function N_0x7fb0088e8769cddb(p0: number, p1: number): void;

declare function N_0x7fb78b2199c10e92(p0: number): void;

declare function N_0x7fc60c94c83c5cd7(p0: number, p1: number, p2: number): void;

declare function N_0x7fc667f6ddfbcdcc(p0: number): number;

declare function N_0x7fc84e85d98f063d(p0: number): number;

declare function N_0x7fcd49388bc9b775(p0: number, p1: number): void;

declare function N_0x7fd78dfd0c5d7b9b(p0: number): number;

declare function N_0x7ff72de061df55e2(p0: number, p1: number, p2: number): void;

declare function N_0x801917e7d7bce418(p0: number): void;

declare function N_0x801bd27403f3cba0(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x804425c4bbd00883(p0: number): number;

declare function N_0x8049b17bec937662(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0x806862e5d266cf38(p0: number, p1: number, p2: number): number;

declare function N_0x80a02d9f948a8bca(p0: number, p1: number): number;

declare function N_0x80b3e0597366adf1(): void;

declare function N_0x80bb243789008a82(p0: number, p1: number): number;

declare function N_0x80d7a3e39b120bc4(): number;

declare function N_0x80e9c316ef84dd81(p0: number): number;

declare function N_0x80fdeb3a9e9aa578(p0: number, p1: number): void;

declare function N_0x8101ba1c0b462412(p0: number, p1: number): void;

declare function N_0x811a748b1be231ba(p0: number): number;

declare function N_0x812c1563185c6fb2(): void;

declare function N_0x814729078aed6d30(): void;

declare function N_0x814d453fcfdf119f(p0: number, p1: number, p2: number): void;

declare function N_0x815653a42c5abe76(): void;

declare function N_0x815c0074a1bc0d93(p0: number, p1: number): void;

declare function N_0x816a3acd265e2297(p0: number, p1: number): void;

declare function N_0x81801291806dbc50(p0: number): number;

declare function N_0x818241b3eda84191(p0: number, p1: number): void;

declare function N_0x81847c2134039bdc(p0: number): [boolean, number];

declare function N_0x819add5ef1742f47(p0: number, p1: number): void;

declare function RemovePedBlackboardInt(ped: number, name: string): void;

declare function N_0x81d7183e7a8eca72(p0: number): number;

declare function N_0x81dcfd13cf39920e(): number;

declare function N_0x81f4e92be3958364(p0: number, p1: number, p2: number): void;

declare function N_0x821c32c728b24477(p0: number, p1: number, p2: number): void;

declare function N_0x822a001bcea5bd81(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x8245c1f3262f4ac2(p0: number): void;

declare function N_0x825f6dd559a0895b(p0: number): number;

declare function N_0x827a58ced9d4d5b4(p0: number, p1: number): void;

/**
 * BG_*
 */
declare function N_0x829cd22e043a2577(p0: string | number): number;

declare function N_0x82cb0f3f0c7785e5(p0: number): number;

declare function N_0x82ed59f095056550(p0: number, p1: number): void;

declare function N_0x82f11e1296996574(p0: number): void;

declare function N_0x8301d87b1b89e219(p0: number, p1: number): void;

declare function N_0x8312f09c56149a8a(p0: number): void;

declare function N_0x8314fc2013ece2da(p0: number, p1: number, p2: number): number;

declare function N_0x831bf01c56149a8a(p0: number): void;

declare function N_0x833d8268d51b4522(p0: number): number;

declare function N_0x8360c47380b6f351(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x8370d34bd2e60b73(): void;

declare function N_0x8379e05871ad24e0(): void;

declare function N_0x839c9f124be74d94(p0: number, p1: number, p2: number, p3: number, p4: number): void;

/**
 * GET_C*
 */
declare function N_0x83acc65d9acec5ef(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: boolean,
): number[];

declare function N_0x83c989d5b5b5b466(p0: number, p1: number): void;

declare function N_0x83d43f0fd5276e4d(p0: number, p1: number): number;

declare function N_0x83fcd6921fc8fd05(p0: number, p1: number): void;

declare function N_0x83fe8d7229593017(): void;

declare function N_0x8425c5f057012dab(p0: number): number;

/**
 * ANIMPOSTFX_*
 * Known effects: MP_Trans_SceneToPhoto
 * MP_Trans_WinLose
 * SpectateFilter
 * MP_CharacterCreatorPhoto
 * MP_Trans_PhotoToScene
 * InterrogationHit
 */
declare function N_0x842ccc9491ffcd9b(effectName: string): number;

declare function N_0x8433e1954be323fc(p0: number): number;

declare function N_0x84481018e668e1b8(p0: number, p1: number, p2: number): void;

declare function N_0x844ceee428ea35b0(p0: number, p1: number): number;

declare function N_0x8459b3e64257b21d(p0: number): void;

declare function N_0x847748ae5d7b1071(p0: number): number;

declare function N_0x84848e1c0fc67dbb(p0: number): number;

declare function N_0x849791ebbdba0362(p0: number): number;

declare function N_0x8505e05fc8822843(p0: number): void;

/**
 * SET_ENTITY_R*
 */
declare function N_0x850c940ee3e7b8b5(entity: number, toggle: boolean): void;

declare function N_0x850ce59dec2028f3(p0: number, p1: number): void;

declare function N_0x851966e1e35af491(p0: number, p1: number): void;

declare function N_0x856ce8fde2416602(p0: number): number;

/**
 * SET_PLAYER_S/T*
 */
declare function N_0x8591ee69cc3ed257(player: number, toggle: boolean): void;

declare function N_0x8593a8cb0ed2c3b4(p0: number): number;

declare function N_0x85b8f04555ab49b8(p0: number): number;

declare function N_0x85d39f5e3b6d7eb0(p0: number, p1: number, p2: number): number;

declare function N_0x85ea0bec7b1f7622(p0: string, p1: string): boolean;

declare function N_0x85f500f4e24ca43e(p0: number, p1: number): void;

declare function N_0x86076ae35cbbe55f(): number;

declare function N_0x86147d05fa831d3a(p0: number, p1: number): number;

declare function N_0x862c5040f4888741(p0: number, p1: number): number;

/**
 * Not implemented.
 */
declare function N_0x864a842b86993851(ped: number): void;

declare function N_0x865732725536ee39(p0: number): number[];

declare function N_0x8674d138391ffb1b(p0: number, p1: number): void;

declare function N_0x869a7015bd4606e9(p0: number): void;

declare function N_0x86afc343cf7f0b34(p0: number, p1: number, p2: number, p3: number): [boolean, number];

declare function N_0x86ec5f83867c4b70(p0: number): number;

declare function N_0x86f0b6730c32ac14(p0: number, p1: number): void;

declare function N_0x86fafc18e3d4380c(p0: number, p1: number): void;

declare function N_0x8702d9150d9fbb3d(p0: number, p1: number): number;

declare function N_0x870634493cb4372c(p0: number, p1: number): void;

declare function N_0x870e9981ed27c815(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0x87247bc60b60bed8(p0: number): void;

declare function N_0x87344305778e5415(p0: number, p1: number): void;

declare function N_0x873aaf600cc36dac(p0: number): void;

declare function N_0x873c792e07a32c8b(p0: number, p1: number): void;

declare function N_0x8750f69a720c2e41(p0: number, p1: number, p2: number): number;

declare function N_0x877ea24eb1614495(p0: number, p1: number, p2: number): number;

declare function N_0x878e8104fa27cdae(p0: number, p1: number): void;

declare function N_0x8798cf6815b8fe0f(p0: number, p1: number): void;

declare function N_0x87b974e54c71ba7b(p0: number, p1: number): void;

declare function N_0x87c2724a56f66020(p0: number): void;

declare function N_0x87e6302fc61208cc(p0: number): void;

declare function N_0x87f005c969ef1563(p0: number): boolean;

declare function N_0x8800776e410eb669(p0: number): number;

declare function N_0x880a7202301e282b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0x8822f124788b8d0a(p0: number, p1: number): void;

declare function N_0x8822f139408b8d0a(p0: number): number;

declare function N_0x88544c0e3291dcae(p0: number): void;

declare function N_0x885d19ac2b6fbff4(p0: number, p1: number): void;

declare function N_0x886171a12f400b89(volume: number, itemSet: number, entityType: number): number;

declare function FindObjectsInVolume(volume: number, itemSet: number, entityType: number): number;

declare function N_0x886657c5b3d8ede3(p0: number): number;

declare function N_0x8870895ba5ed9385(p0: number, p1: number, p2: number): number;

declare function N_0x8878ff3eee2868a9(p0: number, p1: number): void;

declare function N_0x88a5564b19c15391(p0: number): number;

declare function N_0x88a95bb640fc186f(p0: number): void;

declare function N_0x88ad6cc10d8d35b2(p0: number): number;

declare function N_0x88b2026a3b0be33d(p0: number, p1: number): void;

declare function N_0x88b58b83a43a8cab(p0: number, p1: number, p2: number): number;

declare function N_0x88bc5f4aef77fc4e(p0: number, p1: number): void;

declare function N_0x88d9d76d78065487(p0: number): number;

declare function N_0x88fd60d846d9cd63(p0: number): void;

declare function N_0x8910c24b7e0046ec(): void;

declare function N_0x894b5ecab45d2342(p0: number, p1: number): void;

declare function N_0x8952e857696b8a79(p0: number): void;

declare function N_0x89783fddf079c88d(p0: number): void;

declare function N_0x897934e868eddd6c(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x89816b58c3466262(p0: number): number;

declare function N_0x898586729db5221d(p0: number): void;

declare function N_0x8996fa6ad9fe4e90(p0: number): void;

declare function N_0x899a04afcc725d04(p0: number, p1: number): void;

declare function N_0x899dfa0009ac93de(p0: number, p1: number): void;

declare function N_0x89bfdf6d53145545(p0: number): number;

declare function N_0x89d9bde7334b110f(p0: string): boolean;

declare function N_0x89e005b1662f6e48(p0: number, p1: number, p2: number): number;

declare function N_0x89e59dbd15e21177(p0: number, p1: number): void;

declare function N_0x89ec2fc89ecb1005(): number;

declare function SetPedDesiredLocoMotionType(p0: number, p1: string): void;

declare function N_0x8a59d44189af2bc5(p0: number, p1: number): void;

declare function N_0x8a779706da5ca3dd(p0: number, p1: number, p2: number): void;

declare function N_0x8ac1d721b2097b6e(p0: number, p1: number, p2: number): void;

declare function N_0x8acc0506743a8a5c(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x8ae4efa464dae42d(p0: number, p1: number): void;

declare function N_0x8af46e5159a5b620(p0: number, p1: number): void;

declare function N_0x8af8e647d6b2a649(p0: number, p1: number): number;

declare function N_0x8afccc0f18d70018(p0: number, p1: number): void;

declare function N_0x8b1a5fe7e41e52b2(): number;

declare function N_0x8b1e8e35a6e814ea(p0: number, p1: number, p2: number): void;

declare function N_0x8b1fdf63c3193eda(p0: number, p1: number): void;

declare function N_0x8b25a18e390f75bf(p0: number): number;

declare function N_0x8b3296278328b5eb(p0: number): void;

declare function N_0x8b3b71c80a29a4bb(p0: number, p1: number, p2: number): void;

declare function N_0x8b3cb08158e98481(p0: number, p1: number): void;

declare function N_0x8b44273a92cd406c(p0: number): void;

declare function N_0x8b55b324a9123f6b(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0x8ba0c65ac15a7d33(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x8ba3d7b1e83ef803(p0: number): number;

declare function N_0x8bb283a7888ad1ad(p0: number, p1: number, p2: number): void;

declare function N_0x8bb99b85444544d9(p0: number, p1: number): number;

declare function N_0x8bc555034a5a5e8c(p0: number, p1: number): void;

declare function N_0x8be24d74d74c6e9b(p0: number): number;

declare function N_0x8bf907833be275de(p0: number, p1: number): void;

/**
 * Returns false if entity is not a ped or object.
 */
declare function N_0x8c03cd6b5e0e85e8(entity: number, p1: string | number): boolean;

declare function N_0x8c0f6a3d7236deeb(p0: number, p1: number): void;

declare function N_0x8c109958c9bb559d(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0x8c598a930f471938(name: string, p1: number): void;

declare function N_0x8c6d9a399126c194(p0: number, p1: number): void;

declare function N_0x8c8371edfaf014a0(p0: number, p1: number): void;

declare function N_0x8c889e4cbb4b2356(p0: number, p1: number): void;

declare function N_0x8cb2553c559102c1(p0: number, p1: number, p2: number): void;

declare function N_0x8cbe916cfc64ad5c(p0: number): number;

declare function N_0x8d029948ca29409b(p0: number, p1: number, p2: number): number;

declare function N_0x8d29fdf565ded9ae(p0: number, p1: number, p2: number): void;

declare function N_0x8d3230a0ed7de39f(vehicle: number, p1: boolean): void;

declare function N_0x8d56bda343d9519f(p0: number): number;

declare function N_0x8d59079c37c21d78(p0: number, p1: number): void;

declare function N_0x8d913e493bafe0a3(p0: number): number;

declare function N_0x8d9bfce3352de47f(p0: number): number;

declare function N_0x8d9db115fba8e23d(p0: number): void;

declare function N_0x8db104ccebcd58c5(p0: number, p1: number): number;

declare function N_0x8dccc98dc0dbf9e4(p0: number): void;

declare function N_0x8de104bec243a73b(p0: number): void;

declare function N_0x8de82bc774f3b862(p0: number): void;

declare function N_0x8decd262602548b9(p0: number, p1: number): void;

declare function N_0x8df5f6a19f99f0d5(p0: number, p1: number): number;

declare function N_0x8e036b41c37d0e5f(p0: number): void;

declare function N_0x8e10df0ffa63fb65(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0x8e1dde26d270cc5e(p0: number, p1: number): void;

declare function N_0x8e2143144b8e188d(p0: number): number;

declare function N_0x8e462db1eaa9c47c(p0: number): number;

declare function N_0x8e46e18aa828334f(p0: number, p1: number, p2: number): number;

declare function N_0x8e5da070bad3279e(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x8e6aff353c09652e(p0: number): void;

declare function N_0x8e84119a23c16623(p0: number, p1: number, p2: number): number;

declare function N_0x8e8ffb9e4ad051d2(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x8e901b65206c2d3e(p0: number): void;

declare function N_0x8ec7cd701f872f87(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0x8eedfd8921389928(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function N_0x8f2a81c09da9124a(p0: number): void;

declare function N_0x8f3333f0a6900b3c(p0: number, p1: number): number;

declare function N_0x8f44ebb3ba8f6d44(p0: number, p1: number): void;

declare function N_0x8f4f050054005c27(p0: number, p1: number): number;

/**
 * SET_VEHICLE_LI*
 */
declare function N_0x8f75941c86eebfca(vehicle: number, p1: boolean): void;

declare function N_0x8f8c84363810691a(p0: number, p1: number): void;

declare function N_0x8fb98b719aa0075a(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x8fbf9edb378ccb8c(p0: number, p1: number): void;

declare function N_0x900ca00ce703e1e2(p0: number): number;

declare function N_0x9044835be9d9dbfe(p0: number, p1: number): void;

declare function N_0x9050df2c53801208(p0: number, p1: number): void;

declare function N_0x90703a8f75ee4abd(p0: number, p1: number): number;

declare function N_0x9073ec5456651a90(p0: number, p1: number): void;

declare function N_0x9078fb0557364099(p0: number): void;

declare function N_0x907b16b3834c69e2(p0: number, p1: number): void;

declare function N_0x908bb14bce85c80e(p0: number): number;

declare function N_0x908d4b72854c8f62(p0: number): void;

declare function N_0x909ad9e9a92a10df(p0: number): number;

declare function N_0x90da5ba5c2635416(): number;

declare function N_0x90e9a5dadbabc918(p0: number): void;

declare function N_0x910b088e51a511ac(): number;

declare function N_0x910e260aead855de(): void;

declare function N_0x913d04a5176f84c9(p0: number): number;

declare function N_0x914071ff93af2692(p0: number, p1: number): void;

declare function N_0x917760cfe7a0e0f1(p0: number): number;

/**
 * Note: this native was added in build 1311.23
 */
declare function N_0x917ad74bdcf8b6e9(p0: boolean): number;

declare function N_0x9184788bff1edad7(p0: number, p1: number): void;

declare function N_0x919af2d93e9aa89d(p0: number): number;

declare function N_0x91a4f58e01ed5e4c(p0: number, p1: number): void;

declare function N_0x91a5f9cbebb9d936(p0: number): number;

declare function N_0x91bab9e064f036cd(p0: number, p1: number): void;

declare function N_0x91c9e2a0f9dd6dd4(p0: number, p1: string, p2?: number): [boolean, number];

declare function N_0x91cb5e431f579ba1(p0: number): number[];

/**
 * nullsub, doesn't do anything
 */
declare function N_0x91d657230bc208d2(p0: string, p1: string): void;

declare function N_0x91ded5dd64bb2691(p0: number): void;

declare function N_0x91fe941f9fcfb702(p0: number, p1: number): number;

declare function N_0x920684be432875b1(p0: number): number;

declare function N_0x9229ed770975bd9e(): void;

declare function N_0x922a79cd4a033b8b(p0: number): number;

declare function N_0x923346025512dfb7(p0: number): number;

/**
 * Seems to set the ped's loco type.
 * Values used in the scripts:
 * algie
 * angry_female
 * arthur_healthy
 * cowboy
 * cowboy_f
 * default
 * default_female
 * free_slave_01
 * free_slave_02
 * gold_panner
 * guard_lantern
 * injured_general
 * john_marston
 * lilly_millet
 * lone_prisoner
 * lost_man
 * mp_ova_hunter
 * mp_ova_hunter_female
 * murfree
 * old_female
 * primate
 * rally
 * waiter
 * war_veteran
 */
declare function SetPedDesiredLocoForModel(ped: number, p1: string): void;

declare function N_0x9238a3d970bbb0a9(p0: number, p1: number): void;

declare function N_0x92690b0822493ce0(): void;

declare function N_0x927861b2c08dbea5(p0: number): number;

declare function N_0x927b810e43e99932(p0: number): number;

declare function N_0x929ddd5538f3df1f(p0: number, p1: number): void;

declare function N_0x92a1b55a59720395(p0: number, p1: number): void;

declare function N_0x92a32ba29622763f(id: number, index: number, p2?: number): [boolean, number];

declare function N_0x92c8eaca29f6bed6(p0: number): number;

declare function N_0x932786ce3c76477c(p0: number, p1: number): void;

declare function N_0x9337183fda2e9035(p0: number, p1: number): number;

declare function N_0x935a30aa88fb1014(p0: number): number[];

declare function N_0x935cf6e42baf7f4d(p0: number): void;

declare function N_0x935dbd96d4a3da1f(p0: number, p1: number): number;

declare function N_0x93624b36e8851b42(p0: number): void;

declare function N_0x93759a83d0d844e7(p0: boolean): void;

declare function N_0x93f2e7b5db85657b(p0: number, p1: number): number;

declare function N_0x93f499cae53fcd05(p0: number, p1: number, p2: number): void;

declare function N_0x93ffd92f05ec32fd(p0: number): number;

declare function N_0x9409c62504a8f9e9(p0: number, p1: number): void;

declare function N_0x94132d7c8d3575c4(p0: number): number;

declare function N_0x9420fb11b8d77948(p0: number): number;

declare function N_0x9422743a5ba50e10(p0: number): number;

declare function N_0x9428447ded71fc7e(p0: number): void;

declare function N_0x9461a8fab0378e5b(p0: number, p1: number): void;

declare function N_0x946d46cd6dfb9742(p0: number, p1: number, p2: number): void;

declare function N_0x947e43f544b6ab34(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x94995829ed15a598(p0: number): number[];

declare function N_0x949b2f9ed2917f5d(p0: number, p1: number): void;

/**
 * nullsub, doesn't do anything
 */
declare function N_0x94b261f1f35293e1(p0: number): void;

declare function N_0x94e8ca3dee952789(p0: number, p1: number): number;

declare function N_0x94f3d956bfaeae18(p0: number, p1: number, p2: number): void;

declare function N_0x94fcadcf9f0c368e(p0: number): void;

declare function N_0x950acd8f05b7b9df(p0: number): number;

declare function N_0x951847cef3d829ff(p0: number, p1: number, p2: number): void;

declare function N_0x9520175b35e2268d(p0: number, p1: number): void;

declare function N_0x954451ea2d2120fb(p0: number, p1: number): void;

/**
 * Appears to make the local player wanted immediately.
 * Likely FORCE_*
 */
declare function N_0x956510f8c36b5c64(): void;

declare function N_0x957d7e750216d74b(p0: number): number;

declare function N_0x958278b97c4affd8(p0: number, p1: number): void;

declare function N_0x9585ff23c4b8ede0(p0: number, p1: number): void;

declare function N_0x95878b13e272ef1f(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0x95b8e397b8f4360f(p0: number): number;

declare function N_0x95ca12e2c68043e5(p0: number, p1: number): number;

declare function N_0x95ee1dee1dcd9070(p0: number, p1: number): void;

declare function N_0x96282005c5c6801f(p0: number, p1: number): void;

declare function N_0x9629faf6460d35cb(p0: number, p1: number): void;

declare function N_0x9641a9a20310f6b8(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): number;

declare function N_0x96595b36d6a2279b(p0: number, p1: number): void;

declare function N_0x9667cce29bfa0780(p0: number): void;

declare function N_0x966de09688a1de39(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x96722257e5381e00(player: number): void;

declare function N_0x967ff5bc0cfe6d26(p0: number, p1: number): void;

declare function N_0x96c6ed22fb742c3e(p0: number, p1: number): number;

declare function N_0x96c7b659854de629(p0: number, p1: number): void;

declare function N_0x970339efa4fde518(p0: number, p1: number, p2: number): number;

declare function N_0x974da3408dec4e79(p0: number): number;

declare function N_0x975f6ebb62632fe3(): number;

declare function N_0x9772395cc73e8d1f(p0: number, p1: number): void;

declare function N_0x97764e8ac6487a9a(p0: number, p1: number): number;

declare function N_0x978aa2323ed32209(p0: number, p1: number): void;

/**
 * Must be called from a background script, otherwise it will do nothing.
 */
declare function N_0x979765465a6f25fc(entity: number, p1: boolean): void;

declare function N_0x97a3646645727f42(p0: number): number;

declare function N_0x97a38b65ebda3d50(p0: number, p1: number): void;

declare function N_0x97b06669ac569003(p0: number, p1: number): void;

declare function N_0x97bce4c4b3191228(): void;

declare function N_0x97c475212b327666(p0: number, p1: number): void;

declare function N_0x97f6f158cc5b5ca2(p0: number, p1: number): void;

declare function N_0x98082246107a6acf(p0: number, p1: number): number;

declare function N_0x981146e5c9ce9250(p0: number): number;

declare function N_0x981c7d863980fa51(): void;

declare function N_0x9821b68cd3e05f2b(p0: number, p1: number, p2: number, p3: number): void;

/**
 * Note: this native was added in build 1311.23
 */
declare function N_0x982d7ad755b8f62c(p0: boolean): number;

declare function N_0x9851de7aec10b4e1(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0x98539fc453aea639(p0: number, p1: number): number;

declare function N_0x985767f5fa45bc44(p0: number): void;

/**
 * nullsub, doesn't do anything
 */
declare function N_0x9868c0d0134855f7(p0: number): void;

declare function N_0x986f7a51ee3e1f92(p0: number, p1: number): void;

declare function N_0x987be590fb9d41e5(p0: number): void;

declare function N_0x988c9045531b9fce(p0: number, p1: number): void;

declare function N_0x98a7598c579ee871(p0: number, p1: number, p2: number): void;

declare function N_0x98a7cd5ea379a854(): void;

declare function N_0x98cd760de43b612e(p0: number, p1: number): void;

declare function N_0x98d2d9c053a1f449(p0: number, p1: number): void;

declare function N_0x9911f4a24485f653(p0: boolean): void;

declare function N_0x991e3346d788f20f(p0: number, p1: number): void;

declare function N_0x992187d975635df5(p0: number, p1: number): void;

declare function N_0x99230691875fc218(p0: number, p1: number, p2: number, p3: number, p4: number): void;

/**
 * nullsub, doesn't do anything
 */
declare function N_0x9935f76407c32539(p0: string): void;

declare function N_0x9937facbbf267244(p0: number): void;

declare function N_0x9945a3e2528a02e8(p0: number): number;

declare function N_0x9963681a8bc69bf3(p0: number, p1: string, p2: number): void;

declare function N_0x9970ae8c3d706139(): number;

declare function N_0x998202b206872672(p0: number): void;

declare function N_0x9993f1e11944a3dd(p0: number, p1: number): number;

declare function N_0x99a6e246c315bf60(p0: number, p1: number): number;

declare function N_0x99b2a2e3655deaf1(p0: number, p1: number): void;

declare function N_0x99c6ea66dfe73757(p0: number, p1: number, p2: number): number;

declare function N_0x99df2639da76c1dc(p0: number, p1: number, p2: number): number;

declare function N_0x99f92061efe908ba(): number;

declare function N_0x9a03f22ad446eeac(p0: number): number;

declare function N_0x9a113c660aea3832(p0: number, p1: number, p2: number): void;

declare function N_0x9a252aa23d7098f2(): void;

declare function N_0x9a4ac116cc1eee14(p0: number): void;

declare function N_0x9a74a9cadfa8a598(p0: number): void;

declare function N_0x9a77dfd295e29b09(p0: number, p1: boolean): void;

declare function N_0x9a957912ce2eabd1(p0: number, p1: number, p2: number): void;

declare function N_0x9aae3c1148a09bca(p0: number): number;

declare function N_0x9ab33cb5834885b3(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x9ac53cb6907b4428(p0: number, p1: number, p2: number): number;

declare function N_0x9ac65a36d3c0c189(p0: number): void;

declare function N_0x9addbb9242179d56(p0: number, p1: number): void;

declare function N_0x9adee485726025d4(p0: number): number;

declare function N_0x9afcf9fe1884bf62(p0: number, p1: number): void;

declare function N_0x9b0c7fa063e67629(ped: number, bait: string, withoutBuoy: boolean, instantly: boolean): void;

declare function N_0x9b39b0555cc692b5(): void;

declare function N_0x9b47971234169990(p0: number, p1: number): void;

declare function N_0x9b4c564bfa7cff37(p0: number): void;

declare function N_0x9b4e793b1cb6550a(): void;

declare function N_0x9b4f7e3e4f9c77b3(p0: number, p1: number): number;

declare function N_0x9b65444c07b782bf(p0: number, p1: number): void;

declare function N_0x9b657550df55ec96(p0: number, p1: number): number;

declare function N_0x9b6808ec46be849b(p0: number, p1: number): void;

declare function N_0x9b6a58fdb0024f12(p0: number, p1: number): void;

/**
 * ANIMPOSTFX_*
 */
declare function N_0x9b8d5d4cb8af58b3(effectNameHash: string | number): void;

declare function GetCategoryOfComponentAtIndex(ped: number, index: number, p2?: number): number;

declare function N_0x9b9b9fa0ea283e3d(p0: number, p1: number): void;

declare function N_0x9bb83c4dd7be0802(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x9bbdcb8df789ebc1(p0: number, p1: number): void;

declare function N_0x9bbeaf8b0c007f1e(p0: number, p1: number): void;

declare function N_0x9bee018a63fffad9(p0: number): void;

declare function N_0x9bf2c0c568c61641(p0: number): void;

declare function N_0x9c113883487fd53c(p0: number, p1: number): void;

declare function N_0x9c24846d0a4a2776(p0: number): void;

declare function N_0x9c409bbc492cb5b1(): number;

declare function N_0x9c4352134b2835fb(p0: number, p1: number): void;

declare function N_0x9c5bd8c562565ce6(p0: number): void;

declare function N_0x9c6906ef8cb20c5f(p0: number): void;

declare function N_0x9c7f95946e304778(p0: number, p1: number): number;

declare function N_0x9c81338b2e62ce0a(p0: number, p1: number, p2: number): number;

declare function N_0x9c8a2bf37e966464(p0: number, p1: number): void;

declare function N_0x9c8f42a5d1859dc1(p0: number): void;

declare function N_0x9c902084f48d2e6c(p0: number): void;

declare function N_0x9cc94a948eaf5372(p0: number, p1: number): number;

declare function N_0x9cca3131e6b53c68(p0: number, p1: number, p2: number): number;

declare function N_0x9d0f5d2e1951cd84(): number;

declare function N_0x9d12796ef4bf9ea9(p0: number): void;

declare function N_0x9d1b0b5066205692(): void;

declare function N_0x9d1eca9337be9fc3(p0: number, p1: number): number;

declare function N_0x9d21b185abc2dbc4(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x9d21b185abc2dbc5(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x9d37eb5003e0f2cf(p0: number, p1: number): void;

declare function N_0x9d5c9a5a3321b128(p0: number): number;

declare function N_0x9d6dec9791a4e501(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x9d746964e0cf2c5f(p0: number, p1: number): void;

declare function N_0x9d8dfe2de9cb4dfc(p0: number): void;

declare function N_0x9dae1380cc5c6451(p0: number, p1: number): void;

declare function N_0x9dd95b405ab4983e(p0: number, p1: number): number;

declare function N_0x9ddc222d85d5af2a(p0: number, p1: number): void;

declare function N_0x9e036d5204ffbbc8(p0: number, p1: number): number;

declare function N_0x9e13acc38ba8f9c3(p0: number, p1: number): number;

declare function N_0x9e2d5d6bc97a5f1e(p0: number, p1: number, p2: number): number;

declare function N_0x9e3842e5dad69f80(volume: number): void;

declare function N_0x9e58207b194488ac(p0: number, p1: number): void;

/**
 * Note: this native was added in build 1311.23
 */
declare function N_0x9e5a47744c0f0376(p0: number): boolean;

declare function N_0x9e66708b2b41f14a(p0: number, p1: number): void;

declare function N_0x9e8711c81aa17876(p0: number, p1: number): void;

declare function N_0x9eb779765e68c52e(p0: number, p1: number): void;

declare function N_0x9ebd34958ab6f824(p0: number): void;

declare function N_0x9ed3108d6847760a(p0: number, p1: number): void;

declare function N_0x9eefd670f10656d7(p0: number, p1: number): number;

declare function N_0x9ef07cfbb19a9733(): number;

declare function N_0x9eff3c91df38304f(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x9f0e1892c7f228a8(p0: number): number;

declare function N_0x9f0f28b42c4ee80a(p0: number, p2: number): void;

declare function N_0x9f130129ebc31b34(p0: number, p1: number, p2: number): void;

declare function N_0x9f158a49b0d84c3c(p0: number): void;

declare function N_0x9f348de670423460(p0: number): void;

declare function N_0x9f52ad67d1a91bad(p0: number, p1: number): number;

declare function N_0x9f678782720349e4(p0: number): number;

declare function N_0x9f67929d98e7c6e8(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x9f6d859c80708b26(p0: number, p1: number): void;

declare function N_0x9f6dcd0c939c71e9(p0: string, p1: string): boolean;

declare function N_0x9f933e0985e12c51(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x9f97e85ec142255e(p0: number, p1: number): void;

declare function N_0x9f9a829c6751f3c7(p0: number, p1: number, p2: number): void;

declare function N_0x9fc5a003fb76edbd(p0: number, p1: number): void;

declare function N_0x9ff5f9b24e870748(p0: number): number;

declare function N_0xa00df706c60173d1(p0: number): number;

declare function N_0xa021095c983f20d8(): number;

declare function N_0xa03a6812529ad9c8(): void;

declare function N_0xa04ef43030593abc(p0: number, p1: number): void;

declare function N_0xa052608a12559bbb(p0: number, p1: number): void;

declare function N_0xa064bbabb064446f(p0: number): void;

declare function N_0xa0774e388ce4a679(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0xa079ff7cfb9ac8bd(p0: number, p1: number): void;

declare function N_0xa08111b053d84b4d(p0: number): void;

declare function N_0xa0ae7653e8181725(p0: number): number;

declare function N_0xa0b7094629724974(p0: number, p1: number): number;

declare function N_0xa0c683284df027c7(p0: number, p1: number, p2: number): void;

declare function N_0xa0cefcea390aab9b(p0: number): void;

declare function N_0xa0f4d12d6042f6d5(p0: number, p1: number): void;

declare function N_0xa1300de03e5d1973(p0: number): number;

declare function N_0xa13028e22564a1bd(p0: number, p1: number): void;

declare function N_0xa14d5fe82bcb1d9e(): number;

declare function N_0xa15ccab8ad038291(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xa180fbd502a03125(p0: number, p1: number, p2: number): number;

declare function N_0xa1a86055792fb249(p0: number): void;

declare function N_0xa1b0e6301e2e02a6(name: string, p1: number): void;

declare function N_0xa1cfb35069d23c23(p0: number): void;

declare function N_0xa1eb5d029e0191d3(p0: number, p1: number, p2: number): void;

declare function N_0xa1fbac56d38563e2(p0: number): number;

/**
 * ANIMPOSTFX_*
 */
declare function N_0xa201a3d0ac087c37(effectName: string): void;

declare function N_0xa20398536b7f1134(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0xa2091482ed42ef85(p0: number, p1: number): number;

declare function N_0xa2116c1e4ed85c24(p0: number, p1: number): void;

declare function N_0xa218d2bbcaa7388c(p0: number, p1: number): number;

declare function N_0xa21aa2f0c2180125(p0: number, p1: number): void;

declare function N_0xa21af60c9f99ccc5(): void;

declare function N_0xa21e3bad0a42d199(): number;

declare function N_0xa22712e8471aa08e(p0: number, p1: number, p2: number): void;

declare function N_0xa22c46f16359471c(): number;

declare function N_0xa230a5dde12ed374(p0: number): void;

declare function N_0xa2323a2eae32a290(p0: number, p1: number, p2: number): void;

declare function N_0xa263adbbc8056214(p0: number, p1: number): void;

declare function N_0xa274f51ef7e34b95(p0: number, p1: number): number;

declare function N_0xa28056cd1b04b250(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function N_0xa2837a5e21fb5a58(p0: number): number;

declare function N_0xa2a51869bded733b(p0: number, p1: number): number;

declare function N_0xa2b18ff8d39f6d87(p0: number): void;

declare function N_0xa2b1c7ef759a63ce(): number;

declare function N_0xa2b851605748ad0e(): void;

declare function N_0xa2b8e47442c76cec(p0: number, p1: number): void;

declare function N_0xa2cac9def0195e6f(p0: number): number;

declare function N_0xa2db3c6270c122e3(p0: number, p1: number): number;

declare function N_0xa2e2bea4e83f6270(p0: number): number;

declare function N_0xa2f8b3b5fedfc100(p0: number, p1: number): void;

declare function N_0xa31013798fadcadc(p0: number, p1: number, p2: number): void;

declare function N_0xa31d350d66fa1855(p0: number): number;

declare function N_0xa32b0b05eff75730(): void;

declare function N_0xa33914b00ca55756(p0: string, p1: number): number;

declare function N_0xa33f5069b0cb89b8(): void;

declare function N_0xa342495f93b7b838(p0: number, p1: number): void;

declare function N_0xa35e7bf20fa269e0(p0: number): void;

declare function N_0xa3716a77dcf17424(p0: number, p1: number, p2: number): void;

declare function N_0xa3791b915b8b84c6(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0xa3a8926951471c82(): void;

declare function N_0xa3b8d31c13cb4239(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0xa3bd6ff95e713ee5(p0: number, p1: number, p2: number): void;

declare function N_0xa3c53cde922bc78b(p0: number, p1: number): void;

declare function ModifyPlayerUiPromptForPed(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xa3eec0a5aff3fc5b(p0: number): number;

declare function N_0xa3f2149aa24f3d8e(p0: number, p1: number, p2: number): void;

declare function N_0xa405bf9f01960c16(p0: number): void;

declare function N_0xa42dc7919159cccf(p0: number): void;

declare function N_0xa42edf1e88734a7e(): number;

declare function N_0xa4454592dcf7c992(p0: number): number;

declare function N_0xa454d234e45bb6e5(p0: number, p1: number): number;

declare function N_0xa4550fe9c512e3dd(p0: number): number;

declare function N_0xa46fd001d1be896c(): string;

declare function N_0xa47d48d06aa5a188(): number;

declare function N_0xa48e4801debdf7e4(p0: number, p1: number): void;

declare function N_0xa49d6d503e3ea847(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xa4ac05b1a364ebc5(p0: number, p1: number, p2: number): number;

declare function N_0xa4b6432e3880f2f9(p0: number): number;

declare function N_0xa4dcb3f0dd7488bd(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xa520c7b05fa4eb2a(p0: number, p1: number): void;

declare function N_0xa54000d4bfd90bde(p0: number): number;

declare function N_0xa54d643d0773eb65(p0: number, p1: number, p2: number): void;

declare function N_0xa59590050f80ff2e(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xa596890cf55b5095(p0: number, p1: number): void;

declare function N_0xa5bae410b03e7371(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xa622e66eee92a08d(p0: number): number;

declare function N_0xa62bbaae67a05bb0(p0: number): number;

declare function N_0xa63cd20f19b961ab(p0: number, p1: number, p2: number): number;

declare function N_0xa63e4f050f20021f(): void;

declare function N_0xa63fcad3a6fec6d2(p0: number, p1: number): void;

/**
 * hash can be the hash of "guarma" or "world".
 */
declare function N_0xa657ec9dbc6cc900(hash: string | number): void;

declare function N_0xa67f0b039d9cd513(p0: boolean): boolean;

declare function N_0xa6847bba4fcdd13f(p0: number, p1: number): void;

declare function N_0xa691c10054275290(p0: number, p1: number, p2: number): void;

declare function N_0xa69899995997a63b(p0: number, p1: number): void;

declare function N_0xa6a3a3f96b8b030e(): number;

declare function N_0xa6a76d666a281f2d(p0: number, p1: number): void;

declare function N_0xa6ac35db4a7957a8(p0: number): void;

declare function N_0xa6bf569956c60a60(p0: number, p1: number): number;

declare function N_0xa6d6f03095c88f59(p0: number): void;

declare function N_0xa6f1baabff6ad7b9(p0: number): void;

declare function RemovePedBlackboardBool(ped: number, name: string): void;

declare function N_0xa710dc5d25f8b942(p0: number, p1: number): number;

declare function N_0xa72b1bf3857b94d7(p0: number, p1: number): void;

declare function N_0xa73f50e8796150d5(p0: number, p1: number): void;

declare function N_0xa7479fb665361edb(p0: number, p1: number): void;

/**
 * Note: this native was added in build 1311.23
 */
declare function N_0xa7670f7991099680(p0: number): void;

declare function N_0xa769d753922b031b(p0: number, p1: number, p2: number): void;

declare function N_0xa7966807953a18ee(p0: number, p1: number): void;

declare function N_0xa7a806677f8de138(p0: number): void;

declare function N_0xa7dc9266ed6a4e51(p0: number): void;

declare function N_0xa7ecebafbaf997a5(p0: number): number;

declare function N_0xa8120ebeaf290c7a(p0: number): number;

declare function N_0xa81d24ae0af99a5e(p0: number): number;

declare function N_0xa82964b9d8d6a983(): number;

declare function N_0xa8432a14d4dc2101(p0: number, p1: number, p2: number): void;

declare function N_0xa844feb5c22c2c74(): void;

declare function N_0xa86b0ee9b39d15d6(p0: number): void;

declare function N_0xa881f5c77a560906(p0: number): void;

declare function N_0xa88e1d7fa1e20080(p0: number): number;

declare function N_0xa88e215ceb0435c0(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0xa8a74aa79fb67159(name: string, p1: number): void;

declare function N_0xa8a95cecb1906ea2(p0: number, p1: number): void;

declare function N_0xa8ba2e0204d8486f(): void;

declare function N_0xa8c406c2a56edc16(p0: number): void;

/**
 * nullsub, doesn't do anything
 */
declare function N_0xa8d970d8a72640a6(): number;

declare function N_0xa9016536015de29d(p0: number, p1: number): number;

declare function N_0xa90684ed185ccb4b(p0: number, p1: number, p2: number, p3: number): void;

/**
 * nullsub, doesn't do anything
 */
declare function N_0xa9342743b634a462(p0: number): void;

declare function N_0xa93f925f1942e434(p0: number, p1: number): void;

declare function N_0xa94ece191d90637a(): number;

declare function N_0xa95470da137587f5(p0: number): void;

declare function N_0xa96619fe85159ed2(p0: number): number;

declare function N_0xa967d6a8ed2d713b(p0: number, p1: number): void;

declare function N_0xa97ee5e4589fcf5a(p0: number, p1: number): number;

declare function N_0xa9ceae8d6637fbad(p0: number): void;

declare function N_0xa9e185d498b9ac67(p0: number, p1: number): number;

declare function N_0xa9e6d8f2ddfc4db9(p0: number, p1: number): void;

declare function N_0xa9e7672f8c6c6f74(p0: number): number;

declare function N_0xaa0af6025160243a(p0: number, p1: number): void;

declare function N_0xaa235e2f2c09e952(p0: number): number;

declare function N_0xaa29a5f13b2c20b2(p0: number, p1: number): number;

declare function N_0xaa35fd9abab490a3(p0: number): number;

declare function N_0xaa6c49ae90a32299(p0: number, p1: number): void;

declare function N_0xaa9ee2aafc717623(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0xaaacb74442c1bed3(p0: number): number;

declare function N_0xaaacf33cbf9b990a(p0: number, p1: number): void;

declare function N_0xaab050da48b57978(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xaab86462966168ce(p0: number, p1: boolean): number;

declare function N_0xaac0ee3b4999abb5(p0: number, p1: number): void;

declare function N_0xaaed694ce814817f(p0: number): number;

declare function N_0xab26deee120fd3fd(p0: number, p1: number): void;

declare function N_0xab3773e7aa1e9dcc(p0: number): number;

declare function N_0xab591ae6b48b913e(p0: number, p1: number): void;

declare function N_0xab5f12746a099a0e(p0: number, p1: number): number;

declare function N_0xab643407d0b26f07(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0xab6a04cec428258b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12?: number,
): [boolean, number];

declare function N_0xab7993ba61a4674f(p0: number, p1: number): number;

declare function N_0xabc18a28bad4b46f(p0: number, p1: number): number;

declare function N_0xabdb4863d3d72021(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xac22aa6df4d1c1de(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0xac355980681a7f89(p0: number): void;

declare function N_0xac5045ab7f1a34fd(p0: number): number;

declare function N_0xac67098a1e54abb0(p0: number, p1: number, p2: number): void;

declare function N_0xac77757c05de9e5a(p0: number): void;

declare function N_0xac84686c06184b0d(p0: number, p1: number): number;

declare function N_0xac8fab22a914ae34(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xac9ae68f0a463752(p0: number): void;

declare function N_0xaca45ddcef6071c4(p0: number, p1: number): void;

/**
 * nullsub, doesn't do anything
 */
declare function N_0xacc44768af229042(): void;

declare function N_0xacd4f9831dfad7f5(p0: number): number;

/**
 * nullsub, doesn't do anything
 */
declare function N_0xacf9cb705befa8cb(): number;

declare function N_0xad17a18215dd23d6(p0: number, p1: number, p2: number): number;

declare function N_0xad22ab64fa428df3(p0: number): void;

declare function N_0xad3330e3c3e98007(p0: number, p1: number): void;

declare function N_0xad3e07c37a7c1adc(name: string, p1: number): void;

declare function N_0xad44856a1cd29635(p0: number, p1: number, p2: number): void;

declare function N_0xad73b614df26cf8a(p0: number, p1: number, p2: number, p3: number): number;

/**
 * ANIMPOSTFX_*
 */
declare function N_0xad74c22a541ab987(effectName: string): void;

declare function N_0xad8f2424c6e1e3a8(p0: number): void;

declare function N_0xadb56322eedfbdc9(p0: number, p1: number, p2: number): number;

declare function N_0xadc45010bc17af0e(p0: number, p1: number): void;

declare function N_0xadd31a5c7a5faa73(p0: number, p1: number): void;

declare function N_0xaddd1e7c0ecf7d95(p0: number, p1: number): number;

declare function N_0xae00387e53b1e9fc(): void;

declare function N_0xae4bcc79c587ebbf(p0: number, p1: number, p2: number): void;

declare function N_0xae5ada4fe3e21adc(p0: number): number;

declare function N_0xae637bb8ef017875(p0: number, p1: number): void;

declare function N_0xae6b68a83abbe7c0(p0: number): void;

declare function N_0xae6de22de0ed4554(p0: number, p1: number): void;

declare function N_0xae7bf7ca9e4ba48d(p0: number): void;

declare function N_0xae7e66a61e7c17a5(p0: number, p1: number): void;

declare function N_0xaeb97d84cdf3c00b(p0: number, p1: number): void;

/**
 * nullsub, doesn't do anything
 */
declare function N_0xaedf1bc1c133d6e3(): number;

declare function N_0xaee6c800e124cfe1(p0: number, p1: number): void;

declare function N_0xaf041c10756c30fb(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xaf2ef28ce3084505(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xaf341032e97fb061(p0: number, p1: number): void;

declare function N_0xaf3a84c7de6a1dc5(p0: number, p1: number): void;

declare function N_0xaf4d239b8903fcbe(): void;

/**
 * Hardcoded to return one/true.
 */
declare function N_0xaf530e56505d1bd6(p0: number): number;

declare function N_0xaf61b3cd8c3b82c3(p0: number): number;

declare function N_0xaf6e67d073d2dce2(): number;

declare function N_0xaf72ec7e1b54539b(p0: number): number;

declare function N_0xaf787e081ac4a8ee(p0: number): number;

/**
 * SET_ENTITY_LO*
 */
declare function N_0xaf7f3099b9feb535(entity: number, p1: number, p2: number, p3: number): void;

declare function N_0xaf9d167a5656d6a6(p0: number, p1: number): number;

declare function N_0xafa14f98327791ce(sessionRequestId: number): [boolean, number];

declare function N_0xafa87a7d41ee346a(p0: number): void;

declare function N_0xafd3599a3cc5637d(): number;

declare function N_0xafe2ae66f6251c66(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function N_0xaff5be9ba496ce40(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0xaffd0ccf31f469b8(p0: number): number;

declare function N_0xb00ce33465b5406d(p0: number, p1: number): number;

/**
 * nullsub, doesn't do anything
 */
declare function N_0xb03140014aca6c40(p0: number, p1: number): void;

declare function N_0xb032c085d9a03907(): void;

declare function N_0xb03944057fd735ba(p0: number, p1: number, p2: number): void;

declare function N_0xb05cc690cde8a4a9(p0: number, p1: number): number;

declare function N_0xb06f5f1def417216(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xb086c8c0f5701d14(p0: number): number;

declare function N_0xb08c4fa25bc29db9(p0: number): void;

declare function N_0xb0b2c6d170b0e8e5(p0: number): number;

declare function N_0xb0e8599243b3f568(p0: number): number;

declare function N_0xb0fb9b196a3d13f0(p0: number, p1: number, p2: number): void;

declare function N_0xb112b9262ec29c20(p0: number, p1: number): number;

declare function N_0xb131e686bd97b3f8(): void;

declare function N_0xb138ca787f3dd858(p0: number, p1: number, p2: number): void;

declare function N_0xb15cd2f9932c9ab5(p0: number): number;

declare function N_0xb16223cb7da965f0(p0: number): number;

declare function N_0xb16c780c51e51e2b(p0: number): number;

/**
 * nullsub, doesn't do anything
 */
declare function N_0xb16fc7b364d86585(): void;

declare function N_0xb173599d61faeb31(): void;

declare function N_0xb18fec133c7c6c69(p0: number): number;

declare function N_0xb1a196bafe650402(p0: number, p1: number): void;

declare function N_0xb1dd74a1f5536622(p0: number, p1: number): number;

declare function N_0xb1f6665aa54dcd5c(p0: number): number;

declare function GetScenarioContainerOpeningState(entity: number): boolean;

declare function N_0xb223249b7798eeed(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xb22b1d9f74095382(p0: number): void;

declare function N_0xb249ebcb30dd88e0(p0: number, p1: number, p2: number): number;

declare function N_0xb25b5a375be5be26(p0: number, p1: number): void;

declare function N_0xb285ad0ec870b2df(p0: number, p1: number): void;

declare function N_0xb292203008ebbaac(p0: number): number;

declare function N_0xb29c553ba582d09e(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xb2b42607f7867576(p0: number, p1: number, p2: number): number;

declare function N_0xb2d15d3551fe4fae(p0: number): void;

declare function N_0xb2de3aebe31150e2(p0: number, p1: number): number;

declare function N_0xb2f47a1afdfcc595(p0: number, p1: number): void;

declare function N_0xb331d8a73f9d2bdf(p0: number, p1: number): number;

declare function N_0xb346c85d49cc998e(p0: number, p1: number): number;

declare function N_0xb34a6009a0db80b8(p0: number): void;

declare function N_0xb35370d5353995cb(p0: number, p1: number, p2: number): void;

declare function N_0xb36d3ec70963be60(p0: number, p1: number): number;

declare function N_0xb389289f031f059a(): number;

declare function N_0xb38a29ccd5447783(p0: number, p1: number, p2: number): void;

declare function N_0xb38c256498748413(): void;

declare function N_0xb3b1546d23df8de1(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xb3e8841f6bdaf83e(): void;

declare function N_0xb40ea9e0d2e2f7f3(p0: number, p1: number): void;

declare function N_0xb4158c8c9a3b5dce(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xb4241ad8f5aee9ed(p0: number): number;

declare function N_0xb427911ea6dffef3(p0: number, p1: number): void;

declare function N_0xb42c87521d1bdd2f(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xb440f4e35393fc39(p0: number, p1: number): void;

declare function N_0xb4411d4d6b81438e(p0: string, p1?: number): [boolean, number];

declare function N_0xb469cfd9e065eb99(p0: number, p1: number): void;

declare function N_0xb4b7c92fce7347b7(p0: number): void;

declare function N_0xb520dbda7fcf573f(p0: number): number;

declare function N_0xb527099d1e1eed49(p0: number, p1: number, p2: number): number;

declare function N_0xb542632693d53408(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xb56d41a694e42e86(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0xb5c4b18b12a2af23(p0: number, p1: number): number;

declare function N_0xb5e2eda2135e0fa1(p0: number, p1: number, p2: number): number;

declare function N_0xb5ef6fef2dc9ebed(interior: number): number;

declare function N_0xb65927f861e7ae39(p0: number, p1: number): number;

declare function N_0xb65e7f733956cf25(p0: number): void;

declare function N_0xb6a80e1e3a5444f1(): number;

declare function N_0xb6e1a185c2b9319a(p0: number, p1: number, p2: number): number;

declare function N_0xb6e79850b759a30e(p0: number, p1: number): void;

declare function N_0xb6f4557060ef0fb4(p0: number, p1: number): number;

declare function N_0xb6f4825153920582(): void;

/**
 * nullsub, doesn't do anything
 */
declare function N_0xb6fd96420c0126a1(p0: string | number, p1: boolean): void;

declare function N_0xb7017da4d498269f(p0: number, p1: number): void;

declare function N_0xb7079f4c72896756(p0: number, p1: number, p2: number, p3: number, p4: number): void;

/**
 * nullsub, doesn't do anything
 */
declare function N_0xb711eb4bc8d06013(): void;

declare function N_0xb7223b91cd6b7e07(p0: number): number;

declare function N_0xb727a847862cb00a(p0: number): number;

declare function N_0xb72999d3120599df(p0: number, p1: number, p2: number): number;

declare function N_0xb7469cb9ac3c0fd4(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function N_0xb779f4fa19269aec(p0: number): void;

declare function N_0xb783f75940b23014(p0: number, p1: number): void;

declare function N_0xb79817db31ff72b9(p0: number, p1: number): void;

declare function N_0xb7dbb2986b87e230(p0: number, p1: number): number;

declare function N_0xb7df150605eedc9b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function N_0xb7e0590c86e1711f(p0: number): number;

declare function N_0xb7e52a058b07c7e2(p0: number, p1: number, p2: number): void;

declare function N_0xb832f1a686b9b810(p0: number, p1: number, p2: number): void;

declare function N_0xb85c13e0bf1f2a1c(p0: number): void;

declare function N_0xb8ab265426cfe6dd(p0: number, p1: number): void;

declare function N_0xb8b207c34285e978(p0: number): void;

declare function N_0xb8b6430ead2d2437(p0: number, p1: number): void;

declare function N_0xb8de69d9473b7593(p0: number, p1: number): void;

declare function N_0xb8e213d02f37947d(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0xb8e2d655e1d5bd39(p0: number): number;

declare function N_0xb8e3486d107f4194(p0: number, p1: number): void;

declare function N_0xb8f52a3f84a7cc59(p0: number): number;

declare function N_0xb9020ec89c07df04(p0: number, p1: number, p2: number): number;

declare function N_0xb909149f2bb5f6da(p0: number, p1: number): void;

declare function N_0xb91ab3be7f655d49(p0: number): number;

declare function N_0xb93a769b8b726950(p0: number, p1: number): void;

declare function N_0xb9467e41dab1cf2c(p0: number, p1: number, p2: number, p3: number): number;

/**
 * ANIMPOSTFX_*
 */
declare function N_0xb958d97a0dfaa0c2(effectName: string): boolean;

declare function N_0xb961dd799a837bd7(): void;

declare function N_0xb991fe166faf84fd(p0: number, p1: number, p2: number): number;

/**
 * Sorts some unknown data.
 * Likely SORT_*
 */
declare function N_0xb9b9e47edb9d63db(): void;

declare function N_0xb9bdfae609dfb7c5(p0: number, p1: number, p2: number): void;

declare function N_0xb9c92616929cc25d(p0: number, p1: number): void;

declare function N_0xb9d5bdda88e1bb66(p0: number): number;

declare function N_0xba208a8d6399a3ac(p0: number, p1: number): number;

declare function N_0xba2a089e60ed1163(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0xba2c49ea6a8d24ff(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0xba5ca1feb5de0df6(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

/**
 * SCRIPT_RACE_*
 */
declare function N_0xba62b4d80fa66bd6(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xba958f68031ddbfc(p0: number, p1: number): number[];

declare function N_0xbaab791aa72c2821(p0: number, p1: number): void;

declare function N_0xbad2a311667a50d7(p0: number, p1: number): void;

declare function N_0xbae08f00021bffb2(p0: number, p1: number): void;

/**
 * Note: this native was added in build 1311.23
 */
declare function N_0xbaf7e2979442b29f(p0: boolean): number;

declare function N_0xbb1e41dd3d3c6250(p0: number, p1: number, p2: number): void;

declare function N_0xbb1ec8c2eef33baa(p0: number): void;

declare function N_0xbb282cf5d2333fb8(p0: number, p1: number): void;

declare function N_0xbb3e5370ebb6be28(p0: number, p1: number): number;

declare function N_0xbb3e9b073e66c3c9(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xbb68908cd11aebdc(p0: number): void;

declare function N_0xbb68d4d3ca3de402(p0: number, p1: number): void;

declare function N_0xbb697756309d77ee(p0: number): number;

/**
 * SET_TRA*
 */
declare function N_0xbb6c707f20d955d4(p0: number): void;

declare function N_0xbb6ea5d59e926095(p0: number, p1: number): void;

declare function N_0xbb7f4273c186bc4b(p0: number, p1: number): void;

declare function N_0xbb7f968675b34b0c(p0: number, p1: number, p2: number): number;

declare function N_0xbba140062b15a8ac(player: number): void;

declare function N_0xbbadfb5e5e5766fb(p0: number, p1: number): void;

declare function N_0xbbe5b63effb08e68(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0xbbf6d1d07c02d00a(p0: number, p1: number): void;

declare function N_0xbc016635d6a73b31(p0: number, p1: number, p2: number): void;

declare function N_0xbc02b3d151d3859f(p0: number, p1: number): void;

declare function N_0xbc07ca8fd710e7fd(p0: number, p1: number): void;

declare function N_0xbc0df006a4952c68(p0: number, p1: number, p2: number): void;

declare function N_0xbc1dc48270468444(p0: number): void;

declare function N_0xbc3f847ae2c3dc65(p0: number, p1: number): void;

declare function SetMetaPedTag(
  ped: number,
  drawable: number | string,
  albedo: number | string,
  normal: number | string,
  material: number | string,
  palette: number | string,
  tint0: number,
  tint1: number,
  tint2: number,
): void;

declare function N_0xbc781d24aa11f179(p0: number): void;

declare function N_0xbc7d36946d19e60e(p0: number): void;

declare function N_0xbc864a70ad55e0c1(p0: number, p1: number): number;

declare function N_0xbc9444f2ff94a9c0(p0: number): number;

declare function N_0xbcc6dc59e32a2bdc(p0: number): void;

declare function N_0xbcc76708e5677e1d(p0: number, p1: number): void;

declare function N_0xbcda0ba8762facb9(p0: number): void;

declare function N_0xbd090f5b1db82189(p0: number, p1: number): void;

declare function N_0xbd0e4f52f6d95242(p0: number): number;

declare function N_0xbd1c3c0f271c39d3(p0: number, p1: number): void;

declare function AddVegModifierZone(volume: number, modType: number, flags: number, p3: number): number;

declare function N_0xbd3c4a2ed509205e(p0: number): number;

declare function N_0xbd629c1c4f501c80(p0: number): number;

declare function N_0xbd62d98799a3daf0(p0: number, p1: number): number;

declare function N_0xbd6b242b8bd5543a(p0: number): number;

declare function N_0xbd70108d01875299(p0: number): number;

declare function N_0xbd75500141e4725c(p0: number, p1: number): void;

declare function N_0xbd861ae8a5181ed7(p0: number, p1: number): void;

declare function N_0xbd944a3d36e992de(): void;

declare function N_0xbd94cecfb2d65119(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0xbd96185264ddaaea(p0: number, p1: number): void;

declare function N_0xbdcc671b911040f9(p0: number): void;

declare function N_0xbdd9c235d8d1052e(p0: number): number;

declare function N_0xbdda0c290c228159(p0: number, p1: number, p2: number): void;

declare function N_0xbdda142759307528(p0: number): void;

declare function N_0xbded916a9f9b0604(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0xbdfeeb7600bcd938(p0: number): void;

declare function N_0xbe012571b25f5aca(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0xbe0c524970892d41(p0: number, p1: number): void;

declare function N_0xbe28db99556ff8d9(p0: number): number;

declare function N_0xbe551c2cc421185d(p0: number, p1: number): void;

declare function N_0xbe66b26b6529e943(p0: number, p1: number, p2: number): void;

declare function N_0xbe711b14a159e84f(p0: number, p1: number): void;

declare function N_0xbe8daa9d8d01da6a(p0: number, p1: number, p2: number): void;

declare function N_0xbea3a6e5f5f79a6f(p0: number, p1: number): number;

declare function N_0xbea7d3cb47e1479c(): number;

declare function N_0xbec65c6049b3219d(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0xbed386157f65942c(p0: number, p1: number): void;

declare function N_0xbedbe39b5fd98fd6(p0: number): number;

declare function N_0xbeefbb608d2aa68a(p0: number): void;

declare function N_0xbefed69ce8317f91(p0: number): number;

/**
 * ANIMPOSTFX_*
 */
declare function N_0xbf2dd155b2adcd0a(effectName: string): boolean;

/**
 * Something like UPDATE_PED_*
 */
declare function N_0xbf4dc1784be94dfa(ped: number, p1: boolean, hash: string | number): void;

declare function N_0xbf4f34a85ca2970d(): void;

declare function N_0xbf567df2bef211a6(p0: number, p1: number): void;

declare function N_0xbf5987e1cde63501(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xbf5e791bbbf90a3c(p0: number, p1: number): number;

declare function N_0xbf6583e926d13890(p0: number, p1: number): void;

declare function N_0xbf8276e51761f9da(): number;

declare function N_0xbfa6b7731c3baf02(): void;

declare function N_0xbfc83da249befcc9(p0: number, p1: number, p2: number): void;

declare function N_0xbfca7afabf9d7967(p0: number, p1: number): number;

declare function N_0xbfcb17895bb99e4e(p0: number, p1: number): void;

/**
 * nullsub, doesn't do anything
 */
declare function N_0xbfff81e12a745a5f(): void;

declare function N_0xc028b3f52c707c49(p0: number): number;

declare function N_0xc0474c8bcf6787ad(p0: number): number;

declare function N_0xc04f47d488ef9eba(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xc06cff658b2e51da(p0: number, p1: number, p2: number): number;

declare function N_0xc06f2f45a73eabcd(p0: number): void;

declare function N_0xc07b91b996c1de89(p0: number, p1: number): void;

declare function N_0xc07cff658b2e51da(p0: number, p1: number): number;

declare function N_0xc080ff658b2e51da(p0: number): number;

declare function N_0xc084ff658b2e52da(p0: number): number;

declare function N_0xc084ff658b2e53da(): number;

declare function N_0xc084ff658b2e54da(p0: number): number;

declare function N_0xc084ff658b2e55da(p0: number, p1: number): number;

declare function N_0xc084ff658b2e61da(p0: number): number;

declare function N_0xc084ff658b2e71da(p0: number, p1: number, p2: number): number;

declare function N_0xc084ff658b2e81da(p0: number, p1: number, p2: number): number;

declare function N_0xc086ff658b2e51da(p0: number): number;

declare function N_0xc086ff658b2e51db(): number;

declare function N_0xc087ff658b2e51da(p0: number, p1: number): number;

declare function N_0xc089ff658b2e51da(p0: number, p1: number): number;

declare function N_0xc08aff658b2e51da(p0: number): void;

declare function N_0xc08aff658b2e51db(p0: number): void;

declare function N_0xc08bff658b2e51da(p0: number): number;

declare function N_0xc08cff658b2e51da(p0: number, p1: number): number;

declare function N_0xc08def658b2e51da(p0: number): number;

declare function N_0xc08dff658b2e51da(): number;

declare function N_0xc08dff658b2e51db(p0: number): number;

declare function N_0xc08e804c91f47c80(p0: number, p1: number): number;

declare function N_0xc08eff658b2e51db(p0: number, p1: number): number;

declare function N_0xc08fff658b2e51da(): number;

declare function N_0xc08fff658b2e51db(p0: number): number;

declare function N_0xc0940ac858c1e126(p0: number): number;

declare function N_0xc09cff658b2e51da(p0: number, p1: number, p2: number): number;

declare function N_0xc0abf784590798a9(p0: number): void;

declare function N_0xc0b1c05b313693d1(p0: number, p1: number): void;

declare function N_0xc0b21f235c02139c(p0: number): void;

declare function N_0xc0cffda87c2c163d(p0: number, p1: number, p2: number): number;

declare function N_0xc0df161950fb101e(p0: number): number;

/**
 * SET_ENTITY_A*
 */
declare function N_0xc0edef16d90661ee(entity: number, p1: number): void;

declare function N_0xc1193521e3b9fadd(p0: number, p1: number): void;

declare function N_0xc163dac52ac975d3(p0: number, p1: number): void;

declare function N_0xc177c827cefc0aa4(p0: number, p1: number): void;

declare function N_0xc17a94cc8fc3c61a(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xc1842f40fd501da2(p0: number, p1: boolean): void;

declare function N_0xc184ff658b2e55da(p0: number, p1: number): number;

/**
 * Note: this native was added in build 1311.23
 */
declare function N_0xc1968045eeb563b7(p0: number): void;

declare function N_0xc1ab7eefd3e6ee49(p0: number, p1: number): void;

declare function N_0xc1e1a3d5ed7617b8(p0: number, p1: number): void;

declare function N_0xc205b3c54c6a4e37(p0: number): void;

declare function N_0xc2266aa617668ad3(p0: number, p1: number): void;

declare function N_0xc22aa08a8adb87d4(p0: number): number;

declare function N_0xc252c0cc969af79a(p0: number): void;

declare function N_0xc2722b252c79e641(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xc2745d9261664901(p0: number, p1: number): void;

declare function N_0xc276fe69dda22bad(p0: number): number;

declare function N_0xc284ff658b2e55da(p0: number, p1: number, p2: number): number;

declare function N_0xc285fd21294a1c49(p0: number): number;

declare function N_0xc28f62ac9774fc1b(): number;

declare function N_0xc29996a337bdd099(p0: number): number;

declare function N_0xc2b8164c3be871a4(): void;

declare function N_0xc2c05defe85a0b64(): boolean;

declare function N_0xc2e62678d602853c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0xc2e71d7e0a7b4c89(p0: number): number;

declare function N_0xc2ef407645beecdc(p0: number): number;

declare function N_0xc310239acccf5579(): void;

/**
 * nullsub, doesn't do anything
 */
declare function N_0xc31c44c43b48fde3(p0: number, p1: number): void;

declare function N_0xc325a6baa62cf8a2(p0: number, p1: number): void;

declare function N_0xc351394b932a6a50(p0: number): void;

declare function N_0xc369e2234e34a0ca(p0: number, p1: number): number;

declare function N_0xc372b6a88f6e4ad8(p0: number, p1: number, p2: number): void;

declare function N_0xc3742f1fdf0a6824(): void;

/**
 * Doesn't actually return anything.
 * ANIMPOSTFX_*
 */
declare function N_0xc37792a3f9c90771(): number;

declare function N_0xc38b4952b728397a(p0: number, p1: number): void;

declare function N_0xc394ff658b2e55da(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xc395355843be134b(p0: number): number;

declare function N_0xc3995d396f1d97b6(p0: number, p1: number, p2: number): number;

declare function N_0xc399cc89fba05da0(p0: number, p1: number): void;

declare function N_0xc3abcfbc7d74afa5(p0: number, p1: number, p2: number): void;

declare function N_0xc3adf4880784fa9c(p0: number): void;

declare function N_0xc3aebb276825a359(p0: number, p1: number, p2: number): number;

declare function N_0xc3ca424e1f12ed0c(p0: number, p1: number): number;

declare function N_0xc3d581a34bc0a1f0(p0: number, p1: number): void;

declare function N_0xc3e9e5d4f413b773(p0: number, p1: number): void;

declare function N_0xc4019cf9ae8e931a(p0: number): number[];

declare function N_0xc412aa1c73111fe0(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xc4146375d8a0b374(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xc4533e3e87125c9e(p0: number): void;

declare function N_0xc47d9080a9a8856a(p0: number, p1: number): void;

declare function N_0xc484ff658b2e55da(p0: number): void;

declare function N_0xc4873b053054c04b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function N_0xc488b8c0e52560d8(p0: number): number;

declare function N_0xc489fe31ac726512(p0: number, p1: number): void;

declare function N_0xc48af420371c7407(p0: number, p1: number): number;

declare function N_0xc494c76a34266e82(p0: number, p1: number): void;

declare function N_0xc4a2c11fc0d41916(p0: number, p1: number): void;

declare function N_0xc4ac39719c1bb559(p0: number, p1: number): number;

declare function N_0xc4b67ef3fd65622d(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0xc4cfce4c656ef480(p0: number): void;

declare function N_0xc5303f460a40d21d(p0: number, p1: number): number;

declare function N_0xc584ff658b2e55da(p0: number): void;

declare function N_0xc5899c4cd2e2495d(p0: number): void;

declare function N_0xc58ce6824e604dec(p0: number): void;

declare function N_0xc5b78e41dcf8227c(p0: number, p1: number): void;

declare function N_0xc5bf29f4035277c2(p0: number): number;

declare function N_0xc5c7a2f6567fccbc(): void;

/**
 * ANIMPOSTFX_*
 */
declare function N_0xc5cb91d65852ed7e(effectName: string): void;

declare function N_0xc5eb2755fa25f1e9(p0: number): void;

declare function N_0xc6136b40fffb778b(p0: number): void;

declare function N_0xc6170856e54557b2(p0: number, p1: number, p2: number): void;

declare function N_0xc61e2fd926dbb406(): void;

declare function N_0xc61edebf16cd9668(p0: number, p1: number, p2: number): void;

declare function N_0xc63540aef8384732(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function N_0xc63540aef8384769(): void;

declare function N_0xc6366a585659d15c(p0: number, p1: number): void;

declare function N_0xc64abc0676af262b(): void;

declare function N_0xc64e7a62632ad2fe(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function N_0xc67a4910425f11f1(p0: number, p1: number): void;

declare function N_0xc684ff658b2e55da(p0: number): void;

declare function N_0xc685b014ce3d988b(p0: number): number;

declare function N_0xc687a23e166dcf68(p0: number): number;

declare function N_0xc68c02de259c927c(p0: number): number;

declare function N_0xc6981aff6d2a71c2(p0: number): void;

declare function N_0xc6a1a3d63f122de7(p0: number, p1: number): void;

declare function N_0xc6a6789bb405d11c(p0: number, p1: number): number;

declare function N_0xc6a7dc546e94fed5(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xc6c4e15cf7d52fea(p0: number, p1: number): void;

declare function N_0xc70041408e16be2d(p0: number, p1: number, p2: number): void;

declare function N_0xc70041408e16be2e(p0: number, p1: number, p2: number): void;

declare function N_0xc71d07c96946e263(p0: number, p1: number): void;

declare function N_0xc72ce37081dae625(p0: number, p1: number, p2: number, p3: number): void;

/**
 * Hardcoded to return zero/false.
 */
declare function N_0xc74eb3f2ec169f6b(p0: number): number;

declare function N_0xc76e94a78127412b(p0: number, p1: number, p2: number): void;

declare function N_0xc76f252371150d9a(p0: number): void;

/**
 * ANIMPOSTFX_*
 */
declare function N_0xc76fc4c2fc5f4405(effectNameHash: string | number): void;

declare function N_0xc7dc5a0a7df608cb(p0: number): number;

declare function N_0xc805eb785824f712(p0: number): void;

declare function N_0xc81a9e2c8efd28d5(p0: number): void;

declare function N_0xc84e138448507567(vehicle: number, p1: boolean): void;

declare function N_0xc886cd666add42e1(p0: number, p1: number): void;

declare function N_0xc89e7410a93ac19a(p0: number, p1: number): void;

declare function N_0xc8b6d18e22484643(): void;

declare function N_0xc8ccdb712fbcba92(p0: number): number;

declare function N_0xc8d0611d9a0cf5d3(p0: number): void;

declare function N_0xc8fc3b2432e8229d(p0: string, p1: string, p2: string): boolean;

declare function N_0xc900a465364a85d6(p0: number): void;

declare function N_0xc900cec8a172375b(p0: number, p1: number, p2: number): void;

declare function N_0xc9151483cc06a414(p0: number): void;

declare function N_0xc93a9a45430d484e(p0: number): number;

declare function N_0xc95611869e14f8af(p0: number, p1: number, p2: number, p3: number): void;

/**
 * nullsub, doesn't do anything
 */
declare function N_0xc964fcd3d1720697(): number;

declare function N_0xc97e0d2302382211(p0: number, p1: number, p2: number): number;

/**
 * Not implemented.
 */
declare function N_0xc991ef46fe323867(ped: number, p1: number): void;

declare function N_0xc99f104bdf8c7f5a(p0: number, p1: number): void;

declare function EnableHudContextThisFrame(component: number): void;

declare function N_0xc9ea26893c9e4024(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xca0bac376c541978(p0: string): void;

declare function N_0xca1f0b5103936891(p0: number): number;

declare function N_0xca27a86caa4e98ed(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0xca41e86545413b5b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0xca56dd6ab7a39f64(p0: number): number;

declare function N_0xca58d4fd20d70f24(p0: number): number;

declare function N_0xca59808e51fd67c4(p0: number, p1: number): void;

declare function N_0xca5c90d40665d5ce(p0: number, p1: number): number;

declare function N_0xca95924c893a0c91(p0: number, p1: number): number;

declare function N_0xca95c156c14b2054(p0: number, p1: number): void;

declare function N_0xca9e42f437625a85(p0: number, p1: number, p2: number): void;

declare function N_0xcaaf2bccfef37f77(p0: number, p1: number): void;

/**
 * ANIMPOSTFX_*
 */
declare function N_0xcab4dd2d5b2b7246(effectName: string, strength: number): void;

declare function N_0xcac43d060099ea72(p0: number): void;

declare function N_0xcacab2b123bbdbd6(p0: number, p1: number, p2: number): number;

declare function N_0xcad4fe9398820d24(p0: number, p1: number): number;

declare function N_0xcaf4ca2f87779f8f(p0: number, p1: number): number;

declare function N_0xcaf50048c8d0fba0(p0: number, p1: number): number;

declare function N_0xcaff2c9747103c02(p0: number, p1: number, p2: number): number;

/**
 * nullsub, doesn't do anything
 */
declare function N_0xcb0360efefb2580d(padIndex: number): void;

declare function N_0xcb0b9506bc91e441(p0: number, p1: number): void;

declare function N_0xcb1a3864c524f784(p0: number, p1: number): void;

declare function N_0xcb2ca620c48bc875(p0: number, p1: number): number;

declare function N_0xcb5d11f9508a928d(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0xcb61a63aa53d7d22(p0: number, p1: number): void;

declare function N_0xcb86d3e3e3708901(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0xcb8f4c9343ebe240(p0: number, p1: number, p2: number): number;

declare function N_0xcbac13f065c47596(): number;

declare function N_0xcbb54cc7ffffab86(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xcbc7b6f9a56b79f6(p0: number, p1: number): void;

declare function N_0xcbcfff805f1b4596(p0: number, p1: number): void;

declare function N_0xcbd9ec60495c728c(p0: number): void;

declare function N_0xcbde59c48f2b06f5(p0: number, p1: number, p2: number): void;

declare function N_0xcbf2bebb468a34f3(p0: number): void;

declare function N_0xcbf743c984695cf3(): boolean;

declare function N_0xcbf88256e44d5d39(p0: number, p1: number): void;

declare function N_0xcbfb4951f2e3934c(p0: number, p1: number): void;

declare function N_0xcbfbd38f2e0a263b(p0: number, p1: number): void;

declare function N_0xcc1baf72d571db8d(p0: number, p1: number, p2: number): number;

declare function N_0xcc2b20596e29e4e3(p0: number, p1: number): number;

declare function N_0xcc3b787e73e64160(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xcc3edc5614b03f61(p0: number): void;

declare function N_0xcc4e72c339461ed1(): number;

declare function N_0xcc61d8d6c19d9f14(p0: number): void;

declare function N_0xcc6b5aafc87bfc7b(p0: number, p1: number, p2: number): void;

/**
 * nullsub, doesn't do anything
 */
declare function N_0xcc7fc854b956a128(p0: string, p1: string): void;

/**
 * nullsub, doesn't do anything
 */
declare function N_0xccb4635a071fb62d(): void;

declare function N_0xccb97b51893c662f(p0: number, p1: number): number;

declare function N_0xccd9b77f70d31c9d(p0: number): number;

declare function N_0xccf71fcfa0070b1a(): number;

declare function N_0xcd278b6bfbdbdc22(p0: number, p1: number): number;

declare function N_0xcd284e2f6ac27ee9(p0: number): void;

declare function N_0xcd356b42c57bfe01(p0: number, p1: number): number;

declare function N_0xcd53e6cbf609c012(p0: number): number;

declare function N_0xcd6f8a0335d821f9(p0: number): void;

declare function N_0xcd7ca3013fd12749(p0: number, p1: number): void;

declare function N_0xcd954f330693f5f2(): number;

declare function N_0xcd9a485f2b383b44(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xcd9e5f94a2f38683(p0: number, p1: number): void;

declare function N_0xcdb682bb47c02f0a(p0: number, p1: number): void;

declare function N_0xcdcd7b2d49aee73a(p0: number): void;

declare function N_0xcddd4b74660e2335(p0: number, p1: number, p2: number): void;

declare function N_0xcdfb8c04d4c95d9b(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xce0d2f5586627cce(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xce1531927ad6c9f8(p0: number, p1: number): void;

declare function N_0xce27824b5968b79a(p0: number, p1: number): void;

declare function N_0xce285a4413b00b7f(p0: number, p1: number): void;

declare function N_0xce4e669400e5f8aa(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xce54c9abe6fbc6db(p0: number): number;

declare function N_0xce5d0ffe83939af1(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xce5e79d9e303628e(): number;

declare function N_0xce71c2f9baa3f975(p0: number, p1: number): void;

declare function N_0xce7a6c1d5cde1f9d(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xceab54f4632c6ef6(p0: number, p1: number): void;

declare function N_0xceb1f1eed484a5b4(p0: number, p1: number): void;

declare function N_0xceb40b678e403759(p0: number): number;

declare function N_0xcec4ca2cab8fa98c(vehicle: number, p1: boolean): void;

declare function N_0xcedc16930526f728(p0: number): void;

declare function N_0xcf0b19806473d324(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xcf213a5fc3abfc08(p0: number, p1: number, p2: number): void;

declare function N_0xcf23ab5bd47b384d(p0: number): void;

declare function N_0xcf342503ca4c8df1(p0: number, p1: number): void;

declare function N_0xcf69ea05cd9c33c9(): void;

declare function N_0xcf9da72002fc16bf(p0: number, p1: number, p2: number): void;

declare function N_0xcfad2c8cd1054523(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xcfb2eed4fcb7bd77(p0: number, p1: number, p2: number): void;

declare function N_0xcfc0bd09bb1b73ff(p0: number): number;

declare function N_0xcfda2518f322d836(p0: number): number;

declare function N_0xcfe122ec635cc2b2(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xcffc3eccd7a5cceb(p0: number, p1: number, p2: number): void;

declare function N_0xd0116df21e6c7b36(p0: number, p1: number): number;

declare function N_0xd049920cd29f6cc8(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xd049fdaf089fddb0(p0: number, p1: number, p2: number): void;

declare function N_0xd05a460328560477(p0: number): number;

declare function N_0xd05ad61f242c626b(p0: number, p1: number): void;

declare function N_0xd0730c1fa40348d9(p0: number): number;

declare function N_0xd076db9b96faadf1(p0: number, p1: number): number;

declare function N_0xd08685ba892dbfab(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xd0aabe5b9f8fa589(p0: number, p1: number): void;

declare function N_0xd0abc4ea3b5e21a0(p0: number, p1: number): number;

declare function N_0xd0b0b044112bf424(player: number): void;

declare function N_0xd0b7aeb56229d317(p0: number): number;

declare function N_0xd0ba1853d76683c8(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xd1031b83ac093bc7(p0: number): void;

declare function N_0xd103f6dbb5442be8(p0: number, p1: number): void;

declare function N_0xd1472aff30c103d6(p0: number): void;

declare function N_0xd1555fbc96c88444(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0xd1806fb3eded6d11(p0: number, p1: number): number;

declare function N_0xd1a226f2e05e58fc(p0: number, p1: number): void;

declare function N_0xd1a70c1e8d1031fe(p0: number, p1: number): void;

/**
 * Returns true if player is in first person
 */
declare function N_0xd1ba66940e94c547(): boolean;

declare function N_0xd1df5e54f4acbe1a(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0xd1efa8d68bf5d63d(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xd1f6b912785bfd35(p0: number): number;

declare function N_0xd1ffb246f4e088ac(p0: number): number;

declare function N_0xd21a3d421e7f09f7(p0: number, p1: number): void;

declare function N_0xd21c7418c590bb40(p0: number): number;

declare function N_0xd2209866b0cb72ea(p0: number, p1: number): number;

declare function N_0xd2866cba797e872e(p0: number): number;

declare function N_0xd288e02e364972d2(p0: number, p1: number, p2: number): void;

declare function N_0xd297f68928a58130(p0: number, p1: number): number;

declare function N_0xd2d74f89df844a50(p0: number): void;

declare function N_0xd2dfc9cca5596a11(p0: number): void;

declare function N_0xd2f0fe8805d91647(p0: number, p1: number): void;

declare function N_0xd346248c1dce0d76(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xd355e2f1bb41087e(p0: number, p1: number): number;

declare function N_0xd389a2549c4efb30(p0: number): number;

declare function N_0xd39a72ae5ebd57e5(): void;

declare function N_0xd39d32eb3b52dd83(p0: number): number;

declare function N_0xd3a3c8b9f3bdef81(): number;

/**
 * Note: this native was added in build 1311.23
 */
declare function N_0xd3b6ebc6c3d77d44(p0: number): void;

declare function N_0xd3f58e9316b7fc2a(p0: number): void;

declare function N_0xd3f7445cea2e5035(p0: number): number;

declare function N_0xd3f943b88f55376a(p0: number): void;

declare function N_0xd4022c7286b0dfa2(p0: number, p1: number, p2: number): number;

declare function N_0xd42514c182121c23(p0: number): number;

declare function N_0xd428c3f92fc3f6f8(p0: number, p1: number): void;

declare function N_0xd42c543f73233041(p0: number): void;

declare function N_0xd45bb89b53fc0cfd(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function N_0xd460135c98940274(p0: number, p1: number): void;

declare function N_0xd4636c2edb0dea8a(p0: number): number;

declare function N_0xd46bf94c4c66fab0(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xd470725e0703d22f(p0: number): number;

declare function N_0xd47d47efbf103fb8(p0: number, p1: number): void;

declare function N_0xd48227263e3d06ae(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function N_0xd48993a61938c64d(p0: number, p1: number): number;

declare function N_0xd4907ef4334c7602(p0: number, p1: number): void;

declare function N_0xd4b614179bcd0654(p0: number): void;

declare function N_0xd4c6e24d955ff061(p0: number): void;

declare function N_0xd4d403ea031f351c(p0: number): number;

declare function N_0xd4fa73fe628fec63(p0: number, p1: number): void;

declare function N_0xd503d6f0986d58bc(p0: number, p1: number): void;

declare function N_0xd508fa229f1c4900(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0xd52d20b0c76bb26d(p0: number, p1: number): number;

declare function N_0xd52df30355ea7c8e(p0: number, p1: number, p2: number): void;

declare function N_0xd53846b9c931c181(p0: number, p1: number, p2: number): void;

declare function N_0xd543487a1f12828f(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xd55a871e1ce3481b(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xd55db4466d00a258(p0: number): number;

declare function N_0xd5910ecf81a2278c(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xd5bd1b5318a81994(p0: number, p1: number): void;

declare function N_0xd5d72f1624f3ba7c(p0: number): void;

declare function N_0xd61fcf9fcfd515b7(p0: number, p1: number, p2: number): void;

declare function N_0xd635df6baa5a6017(): number;

declare function N_0xd637d327080cd86e(p0: number): void;

declare function N_0xd63b4ba3a02a99e0(p0: number, p1: number): void;

declare function N_0xd64dbc8b0424135f(p0: number, p1: number): void;

declare function N_0xd65fdc686a031c83(p0: number, p1: number, p2: number): void;

declare function N_0xd699e688b49c0fd2(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xd6a67e2ff373d0e3(p0: number): number;

declare function N_0xd6bd313cfa41e57a(p0: number): number;

declare function N_0xd6c0a8c7c0b2f82c(p0: number, p1: number): void;

declare function N_0xd6e39dc5d46df4ab(p0: number): number;

declare function N_0xd70c7a30412f8fa0(p0: number): number;

declare function N_0xd730281e496621fb(p0: number, p1: number): void;

declare function N_0xd733528b6c35647a(p0: number, p1: number): void;

declare function N_0xd740f11fbc8aef43(p0: number, p1: number, p2: number): void;

declare function N_0xd743c4293f47afad(p0: number): number;

declare function N_0xd747979c053efa7a(p0: number): void;

declare function N_0xd7494ded50c6ef52(p0: number, p1: number, p2: number): void;

declare function N_0xd785864798258032(entity: number, toggle: boolean): void;

declare function N_0xd78a26024bb13e08(p0: number): void;

declare function N_0xd798df5db67b1659(p0: number): number;

declare function N_0xd7ad3c7ebaf88c92(p0: number): number;

declare function N_0xd7bad4062074b9c1(p0: number): number;

declare function N_0xd7d0df27cb1765b5(p0: number): number;

declare function N_0xd7d22f5592aed8ba(p0: number): number;

declare function N_0xd7d2f45c56a4f4df(p0: number, p1: number, p2: number): void;

declare function N_0xd7db94ab78e8ebe4(p0: number, p1: number): number;

declare function N_0xd80a8854db5cfba5(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xd80faf919a2e56ea(p0: number, p1: number): void;

declare function N_0xd826690b5cf3beff(p0: number, p1: number): void;

declare function N_0xd840c130d7aacfa5(p0: number, p1: number, p2: number): void;

declare function N_0xd8544f6260f5f01e(p0: number, p1: number): void;

declare function N_0xd8736efda38edc5c(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xd882c5b3991575b7(p0: number, p1: number, p2: number, p3: number, p4: number): number[];

declare function N_0xd89504d9d7d5057d(p0: number): number;

declare function N_0xd8c7162ab2e2af45(p0: number): void;

declare function N_0xd8ceeed54c672b5d(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0xd8e3d22aa4f0e0a5(p0: string): boolean;

declare function N_0xd91e55b6c005eb09(p0: number, p1: number): number;

declare function N_0xd95d777f828b2bbb(p0: number): void;

declare function N_0xd95f04a4e73be85e(p0: number, p1: number): number;

declare function N_0xd97bc27ac039f681(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xd97d8d905f1562f2(p0: number): number;

declare function N_0xd999e379265a4501(p0: number, p1: number, p2: number): void;

declare function N_0xd9bc98b55bcfaa9b(p0: number): void;

declare function N_0xd9bf3ed8efb67ea3(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0xd9c24f53631f2372(p0: number, p1: number, p2: number): number;

declare function N_0xd9f2ff4af394d926(): void;

declare function N_0xda05310ea94dc8c6(p0: string, p1: string): void;

declare function N_0xda0a30153fcc0ffd(): void;

declare function N_0xda1a9adc4e3d4b16(p0: number, p1: number, p2: number): void;

declare function N_0xda1bfed8582f61f0(): number;

declare function N_0xda26263c07cce9c2(p0: number): void;

declare function N_0xda26263c87cce9c1(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xda4d8eb04e8e2928(p0: number): void;

declare function N_0xda7fdeff4de86839(): number;

declare function N_0xda801f7f6a5278d3(p0: number): number;

declare function N_0xda9d7be231fe865f(p0: number, p1: number, p2: number): number;

declare function N_0xdab6a2fc56b7de65(p0: number): number;

declare function N_0xdabfe48ba0d457aa(): number;

declare function N_0xdad6cd07caa4f382(): void;

/**
 * crimeType: see _REPORT_CRIME
 */
declare function N_0xdaefdfdb2aeece37(crimeType: string | number, p1: number): number;

declare function N_0xdb382fe20c2da222(p0: number): void;

declare function N_0xdb622ecd3dcbe078(player: number): number;

declare function N_0xdbbf12ea7c1029b2(p0: number, p1: number): void;

declare function N_0xdbc4b552b2ae9a83(p0: number, p1: number): number;

declare function N_0xdbc754cb6ccb9378(): number;

declare function N_0xdbda48ec456ed908(): void;

declare function N_0xdbeada0df5f9ab9f(p0: number, p1: number, p2: number): number;

declare function N_0xdc0556d0f484ecaa(p0: number): void;

/**
 * Hardcoded to return one/true.
 */
declare function N_0xdc057b86fc157031(): number;

declare function N_0xdc0a1f0ecec9f0c0(p0: number, p1: number): void;

declare function N_0xdc2f83a0612ca34d(p0: number): number;

declare function N_0xdc416ca762bc4f43(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0xdc44f405a6b98d03(p0: number, p1: number): number;

declare function N_0xdc5e09d012d759c4(p0: number, p1: number, p2: number): void;

declare function N_0xdc62cd70658e7a02(): number;

declare function N_0xdc68829bb3f37023(p0: number, p1: number): void;

declare function N_0xdc69f6913cca0b99(p0: number, p1: number): void;

declare function N_0xdc6ad5c046f33ab4(p0: number, p1: number): void;

declare function N_0xdc88d06719070c39(p0: number): number;

declare function N_0xdc91f22f09bc6c2f(p0: number, p1: number): void;

declare function N_0xdc9273d95976ba22(p0: number): number;

declare function N_0xdc93f0948f2c28f4(p0: number): void;

declare function N_0xdc9655d47dec0353(p0: number): number;

declare function N_0xdc9b361cb7776673(p0: number): void;

declare function N_0xdca4a74135e1dea5(p0: number): number;

declare function N_0xdca6abdb9288fbe4(player: number, toggle: boolean): void;

declare function N_0xdcc4b7f7112e8ab7(p0: number): number;

declare function N_0xdccaa7c3bfd88862(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0xdcf12b89624aac96(p0: number): void;

declare function N_0xdcf5ba95bbf0faba(
  p0: number,
  p1: string,
  posX: number,
  posY: number,
  posZ: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function N_0xdd03fc2089ad093c(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xdd0b7c5ae58f721d(p0: number): number;

declare function N_0xdd100ce1ebbf37e3(p0: number, p1: number): void;

declare function N_0xdd33a82352c4652f(p0: number, p1: number, p2: number): void;

declare function N_0xdd560abef5d3784c(p0: number, p1: number): void;

declare function N_0xdd9540e7b1c9714f(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xdd9dc1ab63d513ce(p0: number, p1: number, p2: number): void;

declare function N_0xddaeb478e58f8dea(p0: number, p1: number): number;

declare function N_0xddbd560745b1ee98(p0: number, p1: number, p2: number): number;

declare function N_0xddce8e960d1de240(p0: number): void;

declare function N_0xddceb0f26c89c00f(p0: number): number;

declare function N_0xddfad4deaa7fa362(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xde0c8b145ea466ff(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0xde116ecffdd4b997(p0: number, p1: number): void;

declare function N_0xde1b1907a83a1550(p0: number, p1: number): void;

declare function N_0xde2c3b74d2b3705c(p0: number, p1: number): void;

declare function N_0xde5faa741a781f73(p0: number, p1: number): void;

declare function N_0xde6c85975f9d4894(p0: number): number;

declare function N_0xde8c5b9f65017fa1(p0: number): number;

declare function N_0xdea083c16bb91345(): void;

declare function N_0xdeb369f6ad168c58(p0: number, p1: number): void;

declare function N_0xdedbed3020da49dc(p0: number): void;

declare function N_0xdede679ed29dd4e7(p0: number, p1: number): void;

declare function N_0xdee7b3c76ed664be(p0: number, p1: number): number;

declare function N_0xdee80fedfdd43c9b(p0: number, p1: number): void;

declare function N_0xdee8d30aa5c2e28d(p0: number, p1: number, p2: number): void;

declare function N_0xdeede7c41742e011(p0: number): void;

declare function N_0xdeee1f265b7ecef5(): void;

declare function N_0xdf56a2b50c04dea4(p0: number, p1: number): number;

declare function N_0xdf66a37936d5f3d9(p0: number): number;

declare function N_0xdf728c5ae137fc14(p0: number, p1: number, p2: number): number;

declare function N_0xdf7f5be9150e47e4(p0: number): void;

declare function N_0xdf8a5855b9f9a97b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
  p15: number,
  p16: number,
  p17: number,
): void;

/**
 * Hardcoded to return zero/false.
 */
declare function N_0xdf8e49ea89a01db1(p0: number, p1: number, p2: number): number;

declare function N_0xdf93973251fb2ca5(p0: number, p1: number): void;

declare function N_0xdf947fe0d551684e(p0: number, p1: number): number;

declare function N_0xdf94844d474f31e5(p0: number): void;

declare function N_0xdf95df488a645ce7(): void;

declare function N_0xdfa1237f5228263f(p0: number, p1: number): void;

declare function N_0xdfc2b226d56d85f6(p0: number, p1: number): number;

declare function N_0xdfc85c5199045026(p0: number, p1: number): void;

declare function N_0xdfce8ce9f3ebe93f(p0: number): void;

declare function N_0xdfe332a5da6fe7c9(p0: number): number;

declare function N_0xe01c8dc8edd28d31(p0: number, p1: number): void;

declare function N_0xe01f55b2896f6b37(p0: number, p1: number): void;

declare function N_0xe022cc1b545f1d9f(p0: number): number;

declare function N_0xe057fea9a22eb3ee(p0: number): void;

declare function N_0xe05a5d39be6e93af(p0: number): void;

declare function N_0xe083beda81709891(p0: number): number;

declare function N_0xe0961aed72642b80(p0: number): void;

declare function N_0xe0b45e983bfc0768(): void;

declare function N_0xe0b61ed8bb37712f(p0: number): void;

declare function N_0xe0cb4ab15cb32710(p0: number, p1: number, p2: number): void;

declare function N_0xe0d6c2a146a5c993(p0: number, p1: number): void;

declare function N_0xe0e65e0d261f7507(p0: number): void;

declare function N_0xe0fa74aa3cce650b(p0: number, p1: number): void;

declare function N_0xe0fe107ab174d64a(p0: number, p1: number): void;

declare function N_0xe10f2d7715ababec(p0: number): number;

declare function N_0xe1103300f3456de7(p0: number, p1: number, p2: number): void;

declare function N_0xe116f6f2da2d777e(p0: number): number[];

declare function N_0xe12d7b4b959644cd(): void;

/**
 * Most likely the getter for 0x4B436BAC8CBE9B07.
 */
declare function N_0xe12f56cb25d9ce23(entity: number): number;

declare function N_0xe12f5ed49f44d40d(p0: number): void;

declare function N_0xe133c1ec5300f740(p0: number, p1: number, p2: number): void;

declare function N_0xe13634bb6baf0734(p0: number, p1: number): number;

declare function N_0xe141f6b40b1e3683(p0: number, p1: number): void;

declare function N_0xe145864decc34219(p0: number): number;

declare function N_0xe157a8a336c7f04a(p0: number, p1: number): void;

declare function N_0xe19035eb65ab2932(p0: number, p1: number): void;

declare function N_0xe1a83d4a3b5d7938(p0: number): number;

declare function N_0xe1aadd0055d76603(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function N_0xe1b3be07d3aadded(p0: number, p1: number, p2: number): void;

declare function N_0xe1c0f8781bf130c2(p0: number, p1: number): number;

declare function N_0xe1c105e6bba48270(): number;

declare function N_0xe1c708ba4885796b(p0: number, p1: number): void;

declare function N_0xe1d356f5a66d0ffa(p0: number): number;

declare function N_0xe1f365c4c8f259d8(p0: number, p1: number, p2: number): number;

declare function N_0xe1f45a67a9f0dcbc(p0: number): void;

declare function N_0xe20027b414bfe6c7(p0: number, p1: number): void;

declare function N_0xe225cef1901f6108(p0: number, p1: number): void;

declare function N_0xe24c64d9aded2ef5(p0: number, p1: number): number;

declare function N_0xe258570e0c116a66(): boolean;

declare function N_0xe28d7fc9fd32abeb(p0: number, p1: number, p2: number): void;

declare function N_0xe28f73212a813e82(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xe296208c273bd7f0(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0xe29d8cd66553dbaa(p0: number): void;

declare function N_0xe2b3b852b537c398(p0: number): void;

declare function N_0xe2bb2d6a9fe2ecde(p0: number): void;

declare function N_0xe2c2fbb7825ffc66(): void;

declare function N_0xe2c3cec3c0903a00(p0: number): number;

declare function N_0xe2cf104add49d4bf(p0: number): void;

/**
 * p1 ranges from 0.0 to 1.0
 */
declare function N_0xe3144b932dfdff65(ped: number, p1: number, p2: number, p3: boolean, p4: boolean): void;

declare function N_0xe31a04513237dc89(entity: number): void;

declare function N_0xe31fc20319874cb3(p0: number, p1: number, p2: number): number;

declare function N_0xe33f98bd76490abc(p0: number, p1: number, p2: number): number;

declare function N_0xe348d1404bd80146(p0: number): number;

declare function N_0xe3639db78b3b5400(p0: number): void;

declare function N_0xe36d2cb540597ef7(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function N_0xe36d4a38d28d9cfb(p0: number): void;

declare function N_0xe37287ee358939c3(p0: number): number;

declare function N_0xe37acee15ac50c7e(p0: number, p1: number): void;

declare function N_0xe39600e50d608693(p0: number, p1: number): number;

declare function N_0xe3a46370f70f3607(p0: number, p1: number): void;

declare function N_0xe3ab5eefcb6671a2(p0: number): void;

declare function N_0xe42d1042f09865fe(p0: number): number;

declare function N_0xe47dd64b9f02677d(p0: number): number;

declare function N_0xe4abe20dce7c7cfe(p0: number, p1: number, p2: number): void;

declare function N_0xe4b7945ef4f1bfb2(p0: number, p1: number): void;

declare function N_0xe4c51a8a3bd1664c(p0: number): number;

declare function N_0xe4c64cd37cb176aa(p0: number): number;

declare function N_0xe4c95e0ae31c6512(p0: number, p1: number): void;

declare function N_0xe4d6e45f491a66cb(p0: number, p1: number): number;

declare function N_0xe4e2c581f127a11c(p0: number, p1: number): void;

declare function N_0xe4ef4382e22c780c(p0: number): void;

declare function N_0xe4efb315bcd2a838(p0: number, p1: number): void;

declare function N_0xe50a67c33514a390(p0: number, p1: number): number;

declare function N_0xe50c9816b3f22d8b(p0: number, p1: number, p2: number): void;

declare function N_0xe525878a35b9eebd(p0: number, p1: number): number;

declare function N_0xe53a308ac35877a8(): number;

declare function N_0xe54bf2ce6c7d23a9(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xe55478c5edf70ac2(p0: number): number;

declare function N_0xe5634491a58c2703(p0: number): void;

declare function N_0xe5831aa1e2fd147c(p0: number): void;

declare function N_0xe59f4924bd3a718d(p0: number): number;

declare function N_0xe5a3dd2ff84e1a4b(p0: number): void;

declare function N_0xe5a680a5d8b1f687(p0: number): void;

declare function N_0xe5b76e5b56cd77dd(): number;

declare function N_0xe5d3eb37abc1eb03(p0: number): void;

declare function N_0xe5ef9de716ff737e(p0: number, p1: number, p2: number): void;

declare function N_0xe5ff65cff5160752(): void;

declare function N_0xe600f61f54a444a6(): number;

declare function N_0xe62754d09354f6cf(p0: number): number;

declare function N_0xe631eaf35828fa67(p0: number): number;

declare function N_0xe63d68f455ca0b47(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0xe67af24c5a3b6058(p0: number, p1: number, p2: number): void;

declare function N_0xe682002db1f30669(p0: number): void;

declare function N_0xe69fda40aac3efc0(p0: number, p1: number): void;

declare function N_0xe6a151364c600b24(p0: number): number;

declare function N_0xe6aab897120492d6(p0: number, p1: number): number;

declare function N_0xe6aab897120492d7(p0: number, p1: number, p2: number): void;

declare function N_0xe6bd7dd3fd474415(p0: number, p1: number): void;

declare function N_0xe6c5e2125eb210c1(p0: number, p1: number, p2: number): void;

declare function N_0xe6cb36f43a95d75f(p0: number): void;

declare function N_0xe6d4e435b56d5bd0(p0: number, p1: number): void;

declare function N_0xe6f364de6c2fdefe(): void;

declare function N_0xe704838f36f93b7b(p0: number): number;

declare function N_0xe7282390542f570d(p0: number): number;

declare function N_0xe72e234b30da7b7a(p0: number): boolean;

declare function N_0xe735a7da22e88359(p0: number): void;

declare function N_0xe737d5f14304a2ec(p0: number, p1: number, p2: number): void;

/**
 * ANIMPOSTFX_*
 */
declare function N_0xe75cddebf618c8ff(effectNameHash: string | number): boolean;

declare function N_0xe75eea8db59a9f39(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0xe76687023d8c8505(p0: number, p1: number): number;

declare function N_0xe7687eb2f634abf0(p0: number): number;

declare function N_0xe777ddf3e78397e8(p0: number): number;

declare function N_0xe787f05dfc977bde(p0: number, p1: number, p2: number): number;

declare function N_0xe78993ff9022c064(p0: number): void;

declare function N_0xe79ba3bc265895da(p0: number): number;

declare function N_0xe7bbc4e56b989449(p0: number, p1: number, p2: number): number;

declare function N_0xe7e6cb8b713ed190(): void;

declare function N_0xe7f8707269544b29(p0: number, p1: number): number;

declare function N_0xe7fa07624574b79a(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function N_0xe80e50bee276a54a(p0: number, p1: number): number;

declare function N_0xe8126623008372aa(): void;

declare function N_0xe81d0378a384e755(p0: number, p1: number): number;

declare function N_0xe824ce7d13fcb300(p0: number, p1: number): void;

declare function N_0xe8346e62fd7fb962(): void;

declare function N_0xe843d21a8e2498aa(p0: number, p1: number): number;

declare function N_0xe84aac1b22a73e99(p0: number, p1: number): void;

declare function N_0xe891504b2f0e2dba(p0: number, p1: number): void;

declare function N_0xe8a8378bf651079c(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0xe8abe3b73fc7fe17(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xe8d1ccb9375c101b(p0: number, p1: number): number;

declare function N_0xe8e633215471bb5d(p0: number): number;

declare function N_0xe8eaff7b41edd291(p0: number, p1: number, p2: number): void;

declare function N_0xe8f1a5b4ced3725a(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xe910932f4b30be23(p0: number): void;

declare function N_0xe92012611461a42a(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xe9225354fb7437a7(p0: number, p1: number): void;

declare function N_0xe92261bd28c0878f(p0: number): number;

declare function N_0xe93415b3307208e5(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): number;

declare function N_0xe94b5e938619712e(): void;

declare function N_0xe956c2340a76272e(p0: number): number;

declare function N_0xe9694b2d6cb87b06(p0: number, p1: number): void;

declare function N_0xe98d55c5983f2509(p0: number): number;

declare function N_0xe9a6400d1a0e7a55(p0: number): number;

declare function N_0xe9ac8466abe484bb(p0: number, p1: number): void;

declare function N_0xe9b3fec825668291(p0: number, p1: number, p2: number): void;

declare function N_0xe9bd19f8121ade3e(ped: number, weaponHash: number | string): void;

declare function N_0xe9cd9a67834985a7(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function N_0xe9e06ea514a69061(p0: number, p1: number): void;

declare function N_0xe9e7a0bac7f57746(p0: number, p1: number): void;

declare function N_0xe9eb79cbf9c0f58a(p0: number): number;

declare function N_0xea113bf9b0c0c5d7(p0: number, p1: number, p2: number): number;

declare function N_0xea31f199a73801d3(p0: number): number;

declare function N_0xea41d44a8d42057b(): number;

declare function N_0xea522f991e120d45(p0: number): number;

declare function N_0xea546c31fd45f8cd(p0: number): void;

declare function N_0xea8763e505afd49a(p0: number, p1: number, p2: number): void;

declare function N_0xea8f168a76a0b9bc(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xeaa8242c8479c27d(p0: number, p1: number): void;

declare function N_0xeab3d91d30a344f1(p0: number): void;

declare function N_0xeacebaae0a33fb3f(p0: number): void;

declare function N_0xeae3b5b019c8d23f(p0: number, p1: number): void;

declare function N_0xeaf529446488eb18(p0: number): void;

declare function N_0xeaf682a14f8e5f53(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): number;

declare function N_0xeaf87da2be78a15b(p0: number, p1: number): void;

declare function N_0xeb2bfe5d009f0331(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
): void;

declare function N_0xeb2ed1dc3aec0654(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xeb48ce48eec41fd4(p0: number): void;

declare function N_0xeb4d592620b8c209(p0: number): void;

declare function N_0xeb6027fd1b4600d5(p0: number, p1: number, p2: number): void;

declare function N_0xeb67d4e056c85a81(p0: number): number;

declare function N_0xeb6f1a9b5510a5d2(p0: number, p1: boolean): void;

declare function N_0xeb8886e1065654cd(p0: number, p1: number, p2: number, p3: number): void;

/**
 * Not implemented.
 */
declare function N_0xeb946b9e579729ad(ped: number, p1: number): void;

declare function N_0xeba2081e0a5f4d17(p0: number): void;

declare function N_0xeba314768fb35d58(p0: number): number;

declare function N_0xeba51a294c73292e(p0: number): void;

declare function N_0xeba87b9273835cf3(p0: number, p1: number): void;

declare function N_0xebaac9a750e7563b(ped: number): boolean;

declare function N_0xebb208d6ae712c03(p0: number): number;

declare function N_0xebb6e27ac2ff32da(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xebd49472bccf7642(p0: number, p1: number): void;

declare function N_0xebdc12861d079aba(p0: number, p1: number): void;

declare function N_0xebfa8d50addc54c4(p0: number): boolean;

declare function N_0xebff94328ff7a18a(p0: number, p1: number): void;

/**
 * nullsub, doesn't do anything
 */
declare function N_0xec089f84a9c16c62(): number;

declare function N_0xec0bd8736dcaf841(p0: number): void;

declare function N_0xec116edb683ad479(p0: number): void;

declare function N_0xec254c2c9b0f08f1(p0: number, p1: number): number;

declare function N_0xec3959e9950bf56b(p0: number): number;

declare function N_0xec3d8c228fe553d7(p0: number): number;

declare function N_0xec3f7f24eeeb3ba3(): void;

declare function N_0xec43c2ffb70e3f30(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xec4b4b3b9908052a(ped: number, unk: number): void;

declare function N_0xec516fe805d2cb2d(p0: number): void;

declare function N_0xec60d1d225bc50aa(p0: number, p1: number): void;

declare function N_0xec819d612038ef4b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): number;

declare function N_0xec8703e4536a9952(): void;

declare function N_0xec97101a8f311282(p0: number): number;

declare function N_0xecbb26529a737ef6(p0: number): void;

declare function N_0xecd67e9fa677cccf(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xece3c34b270428d5(): number;

declare function N_0xed1c764997a86d5a(p0: number, p1: number): void;

declare function N_0xed4413cee1bf142c(p0: number): number;

declare function N_0xed4b0c1057892b2e(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xed591cb17c8ba216(p0: number, p1: number, p2: number): void;

/**
 * ANIMPOSTFX_*
 */
declare function N_0xeda5cbecf56e1386(effectNameHash: string | number): void;

declare function N_0xedfc6c1fd1c964f5(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function N_0xee1d6ff54caf7714(p0: number, p1: number): number;

declare function N_0xee2d5c819a65bf26(p0: number): number;

declare function N_0xee360cfc80c8b2bc(p0: number): number;

declare function N_0xee4f20004d0288b7(): void;

/**
 * SET_PED_CAN_*
 */
declare function N_0xee9df765990e8d1d(ped: number, toggle: boolean): void;

declare function N_0xeed08a3a98b847e2(p0: number, p1: number, p2: number): void;

declare function N_0xeedc9b29314b2733(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

/**
 * ANIMPOSTFX_*
 */
declare function N_0xeef83a759ae06a27(effectNameHash: string | number): boolean;

declare function N_0xef1a8a484118735e(): void;

declare function N_0xef254f1a4c08b7e6(p0: number): number;

declare function N_0xef259aa1e097e0ad(p0: number, p1: number): void;

declare function N_0xef28a614b4b264b8(p0: number, p1: number): void;

declare function N_0xef2d9ed7ce684f08(p0: number): number;

declare function N_0xef2e6f870783369b(p0: number, p1: number): number;

declare function N_0xef371232bc6053e1(p0: number): void;

declare function N_0xef3c68f56bad7b69(p0: number, p1: number): void;

/**
 * RESET_*
 */
declare function N_0xef42f56f69877125(): void;

declare function N_0xef50e344a8f93784(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xef51242e35242b47(p0: number): void;

declare function N_0xef5a3d2285d8924b(p0: number, p1: number): void;

declare function N_0xef6f2a35faaf2ed7(p0: number): number;

/**
 * nullsub, doesn't do anything
 */
declare function N_0xef7ab1a0e8c86170(p0: number, p1: number): void;

declare function N_0xef9a3132a0aa6b19(): number;

declare function N_0xefb5f34cc0953b27(p0: number): void;

declare function N_0xefc535c9faf563b3(p0: number): number;

declare function N_0xefc5c6670e0b99ba(): void;

declare function N_0xefd875c2791ebefd(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xf01c570e0a0a1e67(p0: number): number;

declare function N_0xf01d21df39554115(p0: number): void;

declare function N_0xf05dfaf1adfef2cd(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0xf06cbb8ccca823c0(p0: number, p1: number): void;

declare function N_0xf08d8feb455f2c8c(p0: number, p1: number): void;

declare function N_0xf08e42bfa46bdff8(p0: number, p1: number): number;

declare function N_0xf092b6030d6fd49c(p0: number, p1: number): void;

declare function N_0xf0b67bad53c35bd9(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0xf0d545c1eead614a(): boolean;

declare function N_0xf0d54e0651dd7e07(): void;

declare function N_0xf0ee69f500952fa5(p0: number): number;

declare function N_0xf0fbf193f1f5c0ea(p0: number): void;

declare function N_0xf0fbfb9ab15f7734(p0: number, p1: number, p2: number): number;

declare function N_0xf103823ffe72bb49(p0: number): number;

declare function N_0xf11d7cb962fcd747(p0: number): void;

declare function N_0xf184b3ece36219cf(p0: number, p1: number): number;

declare function N_0xf18af483df70bbde(p0: number): number;

declare function N_0xf19706b1f8ffa88f(p0: number, p1: number): void;

declare function N_0xf1a6feedf3776ef9(): void;

declare function N_0xf1c5310feaa36b48(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0xf1e6979c0b779985(p0: number): void;

declare function N_0xf1e9045f5aa9e428(p0: number, p1: number, p2: number): number;

declare function N_0xf1ea2a881eb7f2cd(p0: number, p1: number): void;

declare function N_0xf21a5d66874fcedd(p0: number, p1: number, p2: number): void;

declare function N_0xf21c7a3f3ffba629(p0: number): void;

declare function N_0xf232c2c546ac16d0(p0: number): void;

declare function N_0xf239400e16c23e08(p0: number, p1: number): void;

declare function N_0xf23a6d6c11d8ec15(p0: number): number;

declare function N_0xf23d6475640d29eb(p0: number): number;

declare function N_0xf252a85b8f3f8c58(p0: number, p1: number): number;

declare function N_0xf260af6f43953316(p0: number): number;

declare function N_0xf2753d691bcda314(p0: number, p1: number, p2: number): number;

declare function N_0xf27f01bbf5acd3f3(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xf27f1a8de4f50a1b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0xf2a2177ac848b3a8(p0: number, p1: number, p2: number): void;

declare function N_0xf2b5abde09958689(p0: number, p1: number, p2: number): void;

declare function N_0xf2cca7b68cfab2b9(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
): void;

declare function N_0xf2f543d48f319a3a(): void;

declare function N_0xf2f585411e748b9c(p0: number, p1: number): number;

/**
 * Returns the entity's network ID.
 */
declare function N_0xf302ab9d978352ee(entity: number): number;

declare function N_0xf336e9f989b3518f(p0: number): number;

declare function N_0xf342f6bd0a8287d5(p0: number): void;

declare function N_0xf3735acd11acd500(p0: number, p1: DataView): number;

declare function N_0xf3735acd11acd501(p0: number, p1: DataView): number;

declare function N_0xf383e96c4904df0c(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xf3a2fba5985c8cd5(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xf3b1620b920d1708(p0: number, p1: number): number;

declare function N_0xf3c3503276f4a034(p0: number, p1: number): void;

declare function N_0xf3c873ed0c595109(p0: number): number;

/**
 * ANIMPOSTFX_*
 */
declare function N_0xf3e039322bfbd4d8(effectNameHash: string | number): void;

declare function N_0xf3fda9a617a15145(entity: number): [number[], number[]];

declare function N_0xf40a109b4b79a848(p0: number, p1: number, p2: number): void;

declare function N_0xf40ab58d83c35027(p0: number): void;

declare function N_0xf40ef49b3099e98e(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0xf41e2979d5bc5370(p0: number): void;

declare function N_0xf45e46deecf7df6e(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xf4601c1203b1a78d(p0: number, p1: number): number;

declare function N_0xf46108c50a22b029(): number;

declare function N_0xf47a1eb2a538a3a3(): number;

declare function N_0xf47d54b986f0a346(p0: number, p1: number): void;

declare function N_0xf47e33f8d2523825(p0: number, p1: number): number;

declare function N_0xf4860514ad354226(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0xf48664e9c83825e3(p0: number, p1: number): void;

declare function N_0xf489f94bfee12bb0(p0: number, p1: number): void;

declare function N_0xf49574e2332a8f06(p0: number, p1: number): void;

declare function N_0xf4a5c4509bf923b1(p0: number, p1: number): void;

declare function N_0xf4cb347d7b5eb0fd(): number;

declare function N_0xf540239f9937033b(p0: number, p1: number): number;

declare function N_0xf5622fa6acfca7db(p0: number, p1: number): void;

declare function N_0xf569e33fb72ed28e(): void;

declare function N_0xf5793bb386e1ff9c(p0: number): void;

declare function N_0xf57db8e83dcd8349(p0: number): number;

declare function N_0xf59fde7b4d31a630(p0: number): number;

declare function N_0xf5e45cb1cf965d2d(p0: number, p1: number, p2: number): void;

declare function N_0xf5ea41c1408695fb(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xf5ead898ef387e73(p0: number): void;

declare function N_0xf5ffb08976911b50(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xf611de44aeb36a1d(p0: number, p1: number): void;

declare function N_0xf61cfedeab627bfa(p0: number): number;

declare function N_0xf620f47b4f4a78c4(p0: number, p1: number): void;

declare function N_0xf634e2892220ef34(p0: number, p1: number): void;

declare function N_0xf63fa29d4a9aca86(p0: number, p1: number): void;

declare function N_0xf64034d533ce8aac(p0: number, p1: number, p2: number): void;

declare function N_0xf650dcf5d6f312c1(p0: number): void;

declare function N_0xf65ede5d02a7a760(p0: number, p1: number): void;

declare function N_0xf666ef30f4f0ac4e(p0: number): void;

declare function N_0xf6a8a652a6b186cd(p0: number): number;

declare function N_0xf6a8c4b4a11ae89c(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0xf6ce6f9c3897804e(p0: number): number;

declare function N_0xf6d9e1f3560cbf8e(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0xf6de98516fd3ac9b(): void;

declare function N_0xf6e3d38869d0f7ad(p0: number): void;

declare function N_0xf6e88489b4e6ebe5(p0: number, p1: number): void;

declare function N_0xf6f5447d418daa82(p0: number): number;

declare function N_0xf718931a82eeb898(): void;

declare function N_0xf7327acc7a89aef1(p0: number, p1: number, p2: number): number;

declare function GetEntityByDoorhash(doorHash: number | string, p1?: number): number;

declare function N_0xf74e134f40192884(p0: number, p1: number): void;

/**
 * Returns true when player releases LMB if cursor is active
 */
declare function N_0xf7f51a57349739f2(): boolean;

declare function N_0xf8181b5ef156862c(p0: number): void;

declare function N_0xf81c53561d15f330(): number;

declare function N_0xf8204ef17410bf43(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xf824530b612fe0ce(): number;

declare function N_0xf83d3dda4d3c8169(p0: number): number;

declare function N_0xf8938cf3984092a5(p0: number): void;

declare function N_0xf8bcc5eca33ac9c1(): number;

declare function N_0xf8c20282b237e3f7(p0: number): void;

declare function N_0xf8ca39d5c0d1d9a1(p0: number, p1: number): void;

declare function N_0xf8d09ef8ce61d7bf(p0: number, p1: number): number;

declare function N_0xf8d1d2dab6007eef(p0: number, p1: number): number;

/**
 * Note: this native was added in build 1311.23
 */
declare function N_0xf8dc69dc1ad19072(p0: boolean): number;

declare function N_0xf8de7154f7d1458f(p0: number): number;

declare function N_0xf8f7da13cfbd4532(p0: number, p1: number): void;

declare function N_0xf917f92bf22ecbab(p0: number): void;

declare function N_0xf92099527db8e2a7(p0: number, p1: number): void;

declare function N_0xf92fa8890dececf6(p0: number, p1: number): void;

declare function N_0xf9331b3a314eb49d(p0: number): number;

declare function N_0xf948f4356f010f11(p0: number, p1: number, p2: number): void;

/**
 * ANIMPOSTFX_*
 */
declare function N_0xf972f0ab16dc5260(effectName: string, p1: number, p2: number): void;

declare function N_0xf97c34c33487d569(p0: number, p1: number): number;

declare function N_0xf97f462779b31786(p0: number): number;

declare function N_0xf9933164965533b7(p0: number, p1: number): number;

declare function N_0xf993373285053d77(p0: number, p1: number, p2: number): void;

/**
 * Actual name begins with 'S'
 */
declare function N_0xf9acf4a08098ea25(ped: number, p1: boolean): void;

declare function N_0xf9c1681347c8bd15(object: number): void;

declare function N_0xf9cbd46433e36713(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function N_0xf9cff5bb70e8a2cb(p0: number, p1: number): void;

declare function N_0xf9e951a1e5517c06(): void;

declare function N_0xf9f0b3028431967b(p0: number, p1: number): number;

declare function N_0xf9f14080d80937bd(p0: number): void;

declare function N_0xfa0d206b489a6846(p0: number, p1: number, p2: number, p3: number, p4: number): void;

/**
 * nullsub, doesn't do anything
 */
declare function N_0xfa15c9a320e707b0(): void;

declare function N_0xfa30e2254461adeb(p0: number, p1: number): void;

declare function N_0xfa3b61ec249b4674(p0: number): number;

declare function N_0xfa437fa0738c370c(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xfa742b82d093d848(p0: number, p1: number, p2: number): void;

declare function N_0xfa7c5b7e087a4ceb(): number;

declare function N_0xfa7daae3959e6c7b(p0: number, p1: number): void;

declare function N_0xfa821997794f48e7(p0: number, p1: number, p2: number): void;

declare function N_0xfa8c10dce0706d43(p0: number): number;

declare function N_0xfa91736933ab3d93(p0: number): void;

declare function N_0xfa99e8e575f2fef8(p0: number): number;

declare function N_0xfb0e622b401884d3(p0: number): void;

declare function N_0xfb16f08f47b83b4c(p0: number): void;

/**
 * Note: this native was added in build 1311.23
 */
declare function N_0xfb3205788f8afa3f(): number;

declare function N_0xfb680a9b33d0edbe(p0: number): void;

/**
 * GET_PLAYER_*
 */
declare function N_0xfb6eb8785f808551(player: number, p1: number, p2: boolean): boolean;

declare function N_0xfb7cf1de938a3e22(p0: number): number;

declare function N_0xfb9153a54ac713e8(p0: number, p1: number): void;

declare function N_0xfb9eced5b68f3b78(p0: number): number;

declare function N_0xfbc30b70b3cdb87e(): number;

/**
 * ANIMPOSTFX_*
 */
declare function N_0xfbf161fcfec8589e(effectName: string, p1: number, p2: boolean): [boolean, any /* actually bool */];

declare function N_0xfc23348f0f4e245f(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xfc3b580c4380b5b7(p0: number): number;

declare function N_0xfc3f638be2b6bb02(): void;

declare function N_0xfc464598f6ee97b0(): number;

declare function N_0xfc4f15a7dddc47b1(p0: number, p1: number): void;

declare function N_0xfc6ecb9170145ece(): void;

/**
 * nullsub, doesn't do anything
 */
declare function N_0xfc6fcf4c03f1bbf6(): void;

declare function N_0xfc77c5b44d5ff7c0(p0: number): void;

declare function N_0xfc79dcc94d0a5897(p0: number, p1: number, p2: number): void;

declare function N_0xfc7f71cf49f70b6b(p0: number): void;

declare function N_0xfc832b06127d8e99(p0: number, p1: number): number;

declare function N_0xfc9806da9a460093(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0xfc9b53c072f418e0(): number;

declare function N_0xfcc6db8dbe709bc8(p0: number): void;

declare function N_0xfcdec42b1c78b7f8(p0: number, p1: number): void;

declare function N_0xfd010a2154b40676(p0: number, p1: number): void;

declare function N_0xfd05b1dde83749fa(p0: number): number;

declare function N_0xfd0759658268fd8e(p0: number): number;

declare function N_0xfd1ac0b3858f224c(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xfd3c31a2e45671e7(p0: number, p1: number): void;

declare function N_0xfd41d1d4350f6413(p0: number): void;

declare function N_0xfd4272a137703449(): void;

declare function N_0xfd461d0aba5559b1(p0: number, p1: number): void;

declare function N_0xfd5bb35aab83fd48(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

/**
 * SET_PED_CAN_*
 */
declare function N_0xfd6943b6df77e449(ped: number, toggle: boolean): void;

/**
 * Note: this native was added in build 1311.23
 */
declare function N_0xfd8112109a96877c(): void;

declare function N_0xfd8e853f0bc2e942(p0: number, p1: number): void;

declare function N_0xfdb008b3bcf5992f(p0: number, p1: number, p2: number): void;

declare function N_0xfdecca06e8b81346(p0: number): number;

declare function N_0xfdf38e2b711bf78e(p0: number, p1: number): number;

declare function N_0xfdfc14799373283f(p0: number): number;

declare function N_0xfdfecc6ee4491e11(p0: number): void;

declare function N_0xfe0304050261442c(p0: number, p1: number): number;

declare function N_0xfe2b3d5500b1b2e4(p0: number, p1: number): void;

declare function N_0xfe53b1f8d43f19bf(p0: number, p1: number): number;

declare function N_0xfe5c6177064bd390(p0: number): number;

declare function N_0xfe5d28b9b7837cc1(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xfe691e89c08937b6(p0: number, p1: number): number;

declare function N_0xfe7c9cf376d23342(p0: number, p1: number): void;

declare function N_0xfea6126c34df2532(p0: number, p1: number): void;

declare function N_0xfeb8646818294c75(p0: number, p1: number): void;

declare function N_0xfec85339aaca2a35(p0: number, p1: number): void;

declare function N_0xfeca2081f61ed2cd(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xfefddc6e8fdf8a75(p0: number, p1: number): void;

declare function N_0xfeff01b5725bcd22(p0: number): number;

declare function N_0xff1e339ce40eaaaf(p0: number, p1: number): void;

/**
 * nullsub, doesn't do anything
 */
declare function N_0xff252e2bafb7330f(p0: number): void;

declare function N_0xff2b1f59fb892f14(p0: number): void;

declare function N_0xff36f36b07e69059(p0: number): void;

/**
 * Returns whether the 'killFX' setting is enabled.
 * ANIMPOSTFX_*
 */
declare function N_0xff584f097c17fa8f(): boolean;

declare function N_0xff745b0346e19e2c(p0: number): void;

declare function N_0xff8018c778349234(p0: number): void;

declare function N_0xff83af534156b399(p0: number, p1: number): void;

declare function N_0xff8afca532b500d4(p0: number, p1: number): void;

/**
 * SET_ENTITY_LO*
 */
declare function N_0xff9965c47fa404da(entity: number, toggle: boolean): void;

declare function N_0xffa1594703ed27ca(p0: number, p1: number): void;

declare function N_0xffb520a3e16f7b7b(p0: number, p1: number): void;

declare function N_0xffb99ffd17f65889(p0: number, p1: number): void;

declare function N_0xffcc2db2d9953401(p0: number, p1: number, p2: number): number;

declare function N_0xffddf802279be128(p0: number, p1: number, p2: number): void;

declare function N_0xffde295662405b25(p0: number): number;

declare function N_0xffe9c53deea3db0b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0xffebe5aa96bc2e4e(p0: number, p1: number, p2: number): number;

declare function N_0xffec4b0a1a3ed515(p0: number, p1: number): number;

declare function N_0xfffe15b433300b8c(p0: number, p1: number, p2: number): void;

declare function NavmeshActivateSwap(name: string): boolean;

declare function NavmeshAssignNavmeshToVehicle(vehicle: number, navMeshName: string): boolean;

declare function NavmeshDeactivateSwap(name: string): boolean;

declare function NavmeshDoesSwapExist(name: string): boolean;

declare function NavmeshIsSwapActive(name: string): boolean;

declare function NavmeshRequestPath(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): number;

/**
 * Returns "INVALID_NET_RPC_GUID" if netRpcGuid is invalid.
 */
declare function NetRpcGuidToString(netRpcGuid: number): [string, number];

declare function NetToAnimScene(netId: number): number;

/**
 * gets the entity id of a network id
 */
declare function NetToEnt(netHandle: number): number;

/**
 * gets the object id of a network id
 */
declare function NetToObj(netHandle: number): number;

/**
 * gets the ped id of a network id
 */
declare function NetToPed(netHandle: number): number;

declare function NetToPropset(netId: number): number;

declare function NetToVeh(netHandle: number): number;

declare function NetworkAcceptRsInvite(p0: number): number;

declare function NetworkAccessTunableBool(tunableContext: string | number, tunableName: string | number): boolean;

declare function NetworkAccessTunableInt(
  tunableContext: string | number,
  tunableName: string | number,
  value?: number,
): [boolean, number];

declare function NetworkActionPlatformInvite(): boolean;

declare function NetworkActivityResetToIdle(): void;

declare function NetworkActivitySetCurrent(p0: number): void;

declare function NetworkAddFriend(message: string): [boolean, number];

declare function NetworkAddPlayerToRecentGamersList(player: number, p1: number): void;

declare function NetworkAlert(ctx: string | number, lh: string | number, ec: number, h: number): void;

declare function NetworkAllowAllEntityFadingForInstances(toggle: boolean): void;

declare function NetworkAllowEntityFadingForInstances(entity: number, toggle: boolean): void;

declare function NetworkAllowLocalEntityAttachment(entity: number, toggle: boolean): void;

declare function NetworkAreHandlesTheSame(): [boolean, number, number];

/**
 * Returns value of fwuiCachedSetting "general.onlineNotificationsInStoryMode"
 */
declare function NetworkAreOnlineNotificationsShownInStoryMode(): boolean;

declare function NetworkAutoSessionCanSplitSession(p0: number): [boolean, number];

declare function NetworkAutoSessionFinishInstance(): void;

declare function NetworkAutoSessionIsAllowedToMerge(): boolean;

declare function NetworkAutoSessionIsObjectCreationPaused(): boolean;

declare function NetworkAutoSessionSetAllowedToMerge(toggle: boolean, p2: number): number;

declare function NetworkAutoSessionSetAllowedToSplit(toggle: boolean): void;

declare function NetworkAutoSessionSplitSession(
  playersToTake: number,
  maxInstancePlayers: number,
  sessionFlags: number,
  bucketId: number,
): boolean;

declare function NetworkAwardHasReachedMaxclaim(p0: number): boolean;

declare function NetworkCanAccessMultiplayer(loadingState: number): [boolean, number];

/**
 * On PC this returns true if networkHandle is a valid handle.
 */
declare function NetworkCanAddFriend(networkHandle: number): [boolean, number];

declare function NetworkCanRefreshFriendPage(): boolean;

declare function NetworkCanSessionEnd(): boolean;

declare function NetworkCanViewGamerUserContent(gamerHandle: number): [boolean, number];

declare function NetworkCheckAccessAndAlertIfFail(): boolean;

declare function NetworkCheckCommunicationPrivileges(p0: number): boolean;

declare function NetworkCheckUserContentPrivileges(p0: number): boolean;

declare function NetworkClanGetLocalMembershipsCount(): number;

declare function NetworkClanGetMembershipDesc(p1: number): [boolean, number];

declare function NetworkClanIsEmblemReady(p0: number, p1?: number): [boolean, number];

declare function NetworkClanPlayerGetDesc(bufferSize: number): [boolean, number, number];

declare function NetworkClanPlayerIsActive(networkHandle: number): [boolean, number];

declare function NetworkClanReleaseEmblem(p0: number): void;

declare function NetworkClanRequestEmblem(p0: number): boolean;

declare function NetworkClanServiceIsValid(): boolean;

declare function NetworkClearClockTimeOverride(): void;

declare function NetworkClearFoundGamers(): void;

declare function NetworkClearGetGamerStatus(): void;

declare function NetworkClearPlatformInvite(): void;

declare function NetworkClockTimeOverride(
  hour: number,
  minute: number,
  second: number,
  transitionTime: number,
  pauseClock: boolean,
): void;

declare function NetworkClockTimeOverride_2(
  hour: number,
  minute: number,
  second: number,
  transitionTime: number,
  pauseClock: boolean,
  clockwise: boolean,
): void;

declare function NetworkConcealPlayer(player: number, toggle: boolean): void;

/**
 * Must be called from a background script, otherwise it will do nothing.
 */
declare function NetworkDebugRequestEntityPosition(p0: number): void;

declare function NetworkDidFindGamersSucceed(): boolean;

declare function NetworkDidGetGamerStatusSucceed(): boolean;

declare function NetworkDidRecentGamerNamesRequestSucceed(): boolean;

declare function NetworkDisableLeaveRemotePedBehind(toggle: boolean): void;

declare function NetworkDisableProximityMigration(netID: number): void;

declare function NetworkDisableRealtimeMultiplayer(): void;

/**
 * Hardcoded to return -1.
 */
declare function NetworkDisplaynamesFromHandlesStart(p1: number): [number, number];

declare function NetworkDoesNetworkIdExist(netID: number): boolean;

declare function NetworkDoesTunableExist(tunableContext: string | number, tunableName: string | number): boolean;

declare function NetworkEndTutorialSession(): void;

declare function NetworkFindGamersInCrew(p0: number): boolean;

declare function NetworkGetAverageLatencyForPlayer(player: number): number;

/**
 * Same as _NETWORK_GET_AVERAGE_LATENCY_FOR_PLAYER (0xD414BE129BB81B32)
 */
declare function NetworkGetAverageLatencyForPlayer_2(player: number): number;

declare function NetworkGetAveragePacketLossForPlayer(player: number): number;

declare function NetworkGetCashBalance(): number;

declare function NetworkGetDestroyerOfEntity(p0: number, p1: number, weaponHash?: number): [boolean, number];

declare function NetworkGetDestroyerOfNetworkId(netId: number, weaponHash?: number): [number, number];

/**
 * Example:
 * char displayName[64];
 * if (_NETWORK_GET_DISPLAY_NAME_FROM_HANDLE(handle, displayName))
 * {
 * // use displayName
 * }
 */
declare function NetworkGetDisplayNameFromHandle(displayName: string): [boolean, number];

/**
 * Hardcoded to return zero.
 */
declare function NetworkGetDisplaynamesFromHandles(p0: number, p1: number, p2: number): number;

declare function NetworkGetEntityFromNetworkId(netId: number): number;

declare function NetworkGetEntityIsNetworked(entity: number): boolean;

declare function NetworkGetEntityKillerOfPlayer(player: number, weaponHash?: number): [number, number];

/**
 * Returns the owner ID of the specified entity.
 * @param entity The entity to get the owner for.
 * @return On the server, the server ID of the entity owner. On the client, returns the player/slot ID of the entity owner.
 */
declare function NetworkGetEntityOwner(entity: number): number;

declare function NetworkGetGamerSessionFromHandle(count: number): [boolean, number];

declare function NetworkGetGamertagFromFriend(networkHandle: number): [string, number];

/**
 * Always returns a null string.
 */
declare function NetworkGetGamertagFromHandle(netHandle: number): [string, number];

declare function NetworkGetGangId(player: number): number;

declare function NetworkGetGangLeader(gangId: number): number;

declare function NetworkGetGangLeaderHandle(gangId: number, gamerHandle?: number): [boolean, number];

declare function NetworkGetGangMembers(gangId: number, memberHandles?: number): [number, number];

declare function NetworkGetGangSize(gangId: number): number;

declare function NetworkGetGlobalClock(): [boolean, number, number, number];

declare function NetworkGetGlobalEntityFlags(entity: number): number;

declare function NetworkGetGlobalMultiplayerClock(): [number, number, number];

declare function NetworkGetHostOfScript(scriptName: string, p1: number, p2: number): number;

declare function NetworkGetHostOfThisScript(): number;

declare function NetworkGetHostOfThread(threadId: number): number;

declare function NetworkGetInstanceIdOfThisScript(): number;

declare function NetworkGetLocalHandle(netHandle: number): void;

/**
 * Seems to always return 0, but it's used in quite a few loops.
 * for (num3 = 0; num3 < NETWORK::0xCCD8C02D(); num3++)
 * {
 * if (NETWORK::NETWORK_IS_PARTICIPANT_ACTIVE(PLAYER::0x98F3B274(num3)) != 0)
 * {
 * var num5 = NETWORK::NETWORK_GET_PLAYER_INDEX(PLAYER::0x98F3B274(num3));
 */
declare function NetworkGetMaxNumParticipants(): number;

declare function NetworkGetNetworkIdFromEntity(entity: number): number;

declare function NetworkGetNetworkIdFromRope(ropeId: number): number;

/**
 * Returns the amount of players connected in the current session. Only works when connected to a session/server.
 */
declare function NetworkGetNumConnectedPlayers(): number;

declare function NetworkGetNumGangMembers(gangId: number): number;

declare function NetworkGetNumParticipants(): number;

declare function NetworkGetNumRecentGamers(): number;

declare function NetworkGetNumScriptParticipants(p1: number, p2: number): [number, number];

declare function NetworkGetNumUnackedForPlayer(player: number): number;

declare function NetworkGetOldestResendCountForPlayer(player: number): number;

declare function NetworkGetParticipantIndex(index: number): number;

declare function NetworkGetPlatformInviteId(): number;

declare function NetworkGetPlayerFastInstanceId(player: number): number;

declare function NetworkGetPlayerFromGamerHandle(networkHandle: number): [number, number];

declare function NetworkGetPlayerIndex(player: number): number;

/**
 * Returns the Player associated to a given Ped when in an online session.
 */
declare function NetworkGetPlayerIndexFromPed(ped: number): number;

declare function NetworkGetPlayerOwnerOfNetworkId(netId: number): number;

declare function NetworkGetPrimaryClanDataClear(): number;

declare function NetworkGetPrimaryClanDataNew(): [boolean, number, number];

declare function NetworkGetPrimaryClanDataPending(): number;

declare function NetworkGetPrimaryClanDataStart(p1: number): [boolean, number];

declare function NetworkGetPrimaryClanDataSuccess(): number;

/**
 * Hardcoded to return zero.
 */
declare function NetworkGetPromotionDlgSeenCount(): number;

declare function NetworkGetRandomIntRanged(rangeStart: number, rangeEnd: number): number;

declare function NetworkGetRank(): number;

declare function NetworkGetRecentGamerNames(p0: number, p1: number, dataSize: number): [boolean, number];

declare function NetworkGetRopeFromNetworkId(netId: number): number;

/**
 * Returns CGameConfig->ConfigOnlineServices->RosTitleName (see gameconfig.xml)
 */
declare function NetworkGetRosTitleName(): string;

declare function NetworkGetScriptStatus(): number;

declare function NetworkGetSessionHost(): number;

declare function NetworkGetSizeOfHostBroadcastDataStorage(p0: number): [number, number];

declare function NetworkGetSizeOfPlayerBroadcastDataStorage(p0: number): [number, number];

declare function NetworkGetStringCashBalance(): string;

declare function NetworkGetThisScriptIsNetworkScript(): boolean;

declare function NetworkGetTimeoutTime(): number;

declare function NetworkGetTotalNumFriends(): number;

declare function NetworkGetTotalNumPlayers(): number;

declare function NetworkGetTunableCloudCrc(): number;

declare function NetworkGetUnreliableResendCountForPlayer(player: number): number;

declare function NetworkGetXp(): number;

declare function NetworkHandleFromFriend(friendIndex: number, netHandle?: number): number;

declare function NetworkHandleFromPlayer(player: number, netHandle?: number): number;

declare function NetworkHasCompletedMpIntroFlowOnCurrentSlot(): boolean;

declare function NetworkHasControlOfAnimScene(animScene: number): boolean;

declare function NetworkHasControlOfEntity(entity: number): boolean;

declare function NetworkHasControlOfNetworkId(netId: number): boolean;

declare function NetworkHasControlOfPickup(pickup: number): boolean;

declare function NetworkHasControlOfPickupPlacement(p0: number): boolean;

declare function NetworkHasEntityBeenRegisteredWithThisThread(entity: number): boolean;

declare function NetworkHasPendingInviteFailure(): boolean;

declare function NetworkHasReceivedHostBroadcastData(): boolean;

declare function NetworkHasRosPrivilege(index: number): boolean;

declare function NetworkHasSocialClubAccount(): boolean;

/**
 * Returns whether the signed-in user has valid Rockstar Online Services (ROS) credentials.
 */
declare function NetworkHasValidRosCredentials(): boolean;

declare function NetworkHashFromPlayerHandle(player: number): number;

declare function NetworkHaveOnlinePrivileges(): boolean;

declare function NetworkHaveRosBannedPriv(): boolean;

declare function NetworkIsAimCamActive(player: number): boolean;

declare function NetworkIsClockTimeOverridden(): boolean;

declare function NetworkIsCloudAvailable(): boolean;

declare function NetworkIsConnectionEndpointRelayServer(player: number): boolean;

/**
 * Hardcoded to return false.
 */
declare function NetworkIsCustomUpsellEnabled(): boolean;

declare function NetworkIsFeatureSupported(featureId: number): boolean;

declare function NetworkIsFindingGamers(): boolean;

declare function NetworkIsFriend(networkHandle: number): [boolean, number];

declare function NetworkIsGameInProgress(): boolean;

declare function NetworkIsGamerInMySession(networkHandle: number): [boolean, number];

declare function NetworkIsGangActive(gangId: number): boolean;

declare function NetworkIsGangIdValid(gangId: number): boolean;

declare function NetworkIsGangInSession(gangId: number): boolean;

declare function NetworkIsGangLeader(player: number): boolean;

declare function NetworkIsGangMember(gangId: number, player: number): boolean;

declare function NetworkIsGangOpen(gangId: number): boolean;

declare function NetworkIsHandleValid(netHandle: number): [boolean, number];

/**
 * If you are host, returns true else returns false.
 */
declare function NetworkIsHost(): boolean;

declare function NetworkIsHostOfThisScript(): boolean;

declare function NetworkIsInMpCutscene(): boolean;

declare function NetworkIsInMyGang(player: number): boolean;

/**
 * Hardcoded to return false.
 */
declare function NetworkIsInPlatformParty(): boolean;

/**
 * Hardcoded to return false.
 */
declare function NetworkIsInPlatformPartyChat(): boolean;

declare function NetworkIsInSameGang(player1: number, player2: number): boolean;

declare function NetworkIsInSession(): boolean;

/**
 * Hardcoded to return false.
 */
declare function NetworkIsInSessionLobby(): boolean;

declare function NetworkIsInSpectatorMode(): boolean;

declare function NetworkIsInTutorialSession(): boolean;

declare function NetworkIsMoneyBalanceNotLessThan(cashBalance: number, goldBarBalance: number): boolean;

declare function NetworkIsParticipantActive(p0: number): boolean;

/**
 * Hardcoded to return false.
 */
declare function NetworkIsPendingFriend(networkHandle: number): [boolean, number];

declare function NetworkIsPlatformInvitePending(): boolean;

declare function NetworkIsPlayerAParticipant(player: number): boolean;

declare function NetworkIsPlayerAParticipantOnScript(p0: number, p2: number): [boolean, number];

declare function NetworkIsPlayerActive(player: number): boolean;

declare function NetworkIsPlayerConcealed(player: number): boolean;

declare function NetworkIsPlayerConnected(player: number): boolean;

/**
 * NETWORK_ARE_*
 */
declare function NetworkIsPlayerEqualToIndex(player: number, index: number): boolean;

/**
 * Note: scripts seem to indicate that this was renamed to NETWORK_IS_PLAYER_IN_MP_FAST_INSTANCE
 */
declare function NetworkIsPlayerInMpCutscene(player: number): boolean;

declare function NetworkIsPlayerInSpectatorMode(player: number): boolean;

/**
 * Returns true if the passed value is less than 32.
 */
declare function NetworkIsPlayerIndexValid(player: number): boolean;

/**
 * Hardcoded to return false.
 */
declare function NetworkIsPromotionEnabled(): boolean;

declare function NetworkIsRecentGamerNamesRequestInProgress(): boolean;

declare function NetworkIsResettingPopulation(): boolean;

declare function NetworkIsScriptActive(scriptName: string, p1: number, p2: boolean, p3: number): boolean;

declare function NetworkIsScriptActiveByHash(scriptHash: string | number, p1: number, p2: boolean, p3: number): boolean;

declare function NetworkIsSessionActive(): boolean;

declare function NetworkIsSessionStarted(): boolean;

declare function NetworkIsSignedOnline(): boolean;

declare function NetworkIsTunableCloudRequestPending(): boolean;

declare function NetworkIsTutorialSessionChangePending(): boolean;

declare function NetworkKickGangMember(player: number, banTimeSeconds: number): void;

declare function NetworkLeaveGang(disband: boolean): void;

/**
 * Does exactly the same thing as PLAYER_ID()
 */
declare function NetworkPlayerIdToInt(): number;

declare function NetworkRefreshCurrentFriendPage(): boolean;

declare function NetworkRegisterEntityAsNetworked(entity: number): void;

declare function NetworkRegisterHostBroadcastVariables(p0: number, p1: number, p2: number): void;

declare function NetworkRegisterPlayerBroadcastVariables(p0: number, p1: number, p2: number): void;

declare function NetworkRemoveFriend(networkHandle: number): [boolean, number];

/**
 * Note: this native was added in build 1311.23
 */
declare function NetworkRequestCloudTunables(): void;

declare function NetworkRequestControlOfAnimScene(animScene: number): boolean;

declare function NetworkRequestControlOfEntity(entity: number): boolean;

declare function NetworkRequestControlOfNetworkId(netId: number): boolean;

declare function NetworkRequestControlOfPickupPlacement(p0: number): boolean;

declare function NetworkRequestJoin(p0: number): number;

declare function NetworkRequestRecentGamerNames(p0: number, p1: number): boolean;

/**
 * flags:
 * enum eSessionRequestOptionFlags
 * {
 * SESSION_REQUEST_OPTION_FLAG_INCLUDE_GANG_MEMBERS = (1 << 1),
 * SESSION_REQUEST_OPTION_FLAG_LEADER_KEEPS_GANG = (1 << 7),
 * };
 * seamlessType:
 * enum eSeamlessType
 * {
 * SEAMLESS_TYPE_NORMAL,
 * SEAMLESS_TYPE_PVE,
 * SEAMLESS_TYPE_DEV,
 * SEAMLESS_TYPE_NO_SEAMLESS
 * };
 */
declare function NetworkRequestSessionSeamless(
  flags: number,
  seamlessType: number,
  sessionRequestId?: number,
): [boolean, number];

declare function NetworkResetPopulation(p0: boolean, p1: number): boolean;

declare function NetworkResurrectLocalPlayer(
  x: number,
  y: number,
  z: number,
  heading: number,
  p4: number,
  p5: boolean,
  p6: number,
  p7: boolean,
): void;

declare function NetworkResurrectLocalPlayer_2(args: number): void;

declare function NetworkSeedRandomNumberGenerator(seed: number): void;

declare function NetworkSendSessionInvite(
  contentId: string,
  dataSize: number,
  p4: number,
  flags: number,
): [boolean, number, number];

/**
 * enum eSessionFlags
 * {
 * SESSION_FLAG_NONE = 0,
 * SF_INSTANCE = (1 << 0),
 * SF_MATCH = (1 << 1),
 * SF_PRIVATE = (1 << 2),
 * SF_BLOCK_INVITES = (1 << 3),
 * SF_BLOCK_JOIN_VIA_PRESENCE = (1 << 4),
 * SF_BLOCK_NON_HOST_INVITES = (1 << 5),
 * SF_BLOCK_IN_PROGRESS_MATCHMAKING_BACKFILL = (1 << 6),
 * SF_BLOCK_IN_GAMEPLAY_MATCHMAKING_BACKFILL = (1 << 7),
 * SF_BLOCK_INVITES_TEMPORARY = (1 << 8),
 * SF_IN_GAMEPLAY = (1 << 9),
 * SF_COMPETITIVE = (1 << 10),
 * SF_MATCHMAKING_BACKFILL_IS_BLOCKED = (1 << 11)
 * };
 */
declare function NetworkSessionAddSessionFlags(flags: number): boolean;

/**
 * Note: this native was added in build 1311.23
 */
declare function NetworkSessionAreSessionIdsEqual(): [boolean, number, number];

declare function NetworkSessionCancelRequest(sessionRequestId: number): [boolean, number];

declare function NetworkSessionGetSessionFlags(): number;

/**
 * Note: this native was added in build 1311.23
 */
declare function NetworkSessionGetSessionId(sessionId: number): void;

/**
 * Returns result of session request:
 * 0 - NOT_FOUND
 * 1 - IN_PROGRESS
 * 2 - TIMEOUT
 * 3 - PLAYER_OFFLINE
 * 4 - GANG_MEMBERS_CHANGED
 * 5 - PLAYER_CANCELLED
 * 6 - PLAYER_SET_TOO_LARGE
 * 7 - MATCH_ACCEPTED
 * 8 - OTHER
 */
declare function NetworkSessionGetSessionRequestResult(): [number, number, number];

declare function NetworkSessionGetSessionType(): number;

declare function NetworkSessionIsAnyRequestInProgress(): boolean;

declare function NetworkSessionIsPrivate(): boolean;

declare function NetworkSessionIsRequestInProgress(sessionRequestId: number): [boolean, number];

declare function NetworkSessionIsRequestInProgressByQueueGroup(queueGroup: number): boolean;

declare function NetworkSessionIsRequestPendingTransition(sessionRequestId: number): [boolean, number];

declare function NetworkSessionIsSessionRequestIdValid(sessionRequestId: number): [boolean, number];

declare function NetworkSessionIsTransitioning(): boolean;

declare function NetworkSessionLeaveSession(): boolean;

declare function NetworkSessionLeftQueueOrRequestedSession(sessionRequestId: number): [boolean, number];

declare function NetworkSessionPlaylistGetUpcomingContent(): void;

declare function NetworkSessionPlaylistGoToNextContent(): void;

declare function NetworkSessionRemovePlayerFlags(flags: number): boolean;

/**
 * See _NETWORK_SESSION_ADD_SESSION_FLAGS
 */
declare function NetworkSessionRemoveSessionFlags(flags: number): boolean;

/**
 * matchType:
 * enum eMatchType
 * {
 * MATCHTYPE_DEPRECATED,
 * MATCHTYPE_UGCPLAYLIST,
 * MATCHTYPE_UGCMISSION,
 * MATCHTYPE_MINIGAME,
 * MATCHTYPE_SEAMLESS,
 * MATCHTYPE_PRIVATE_DO_NOT_USE
 * };
 */
declare function NetworkSessionRequestSessionCompetitive(
  flags: number,
  matchType: number,
  userHash: number,
  p3: number,
  sessionRequestId?: number,
): [boolean, number];

declare function NetworkSessionRequestSessionNominated(
  flags: number,
  userHash: number,
  p2: number,
  sessionRequestId?: number,
): [boolean, number];

/**
 * category:
 * enum eOnCallType
 * {
 * NETWORK_SESSION_REQUEST_ON_CALL_TYPE_STORY = 2,
 * NETWORK_SESSION_REQUEST_ON_CALL_TYPE_MATCH = 3
 * };
 */
declare function NetworkSessionRequestSessionOnCall(
  flags: number,
  category: number,
  userHash: number,
): [boolean, number, number];

declare function NetworkSessionRequestSessionPrivate(
  flags: number,
  numPlayers: number,
  userHash: number,
  sessionRequestId?: number,
): [boolean, number];

/**
 * Equivalent to NETWORK_REQUEST_SESSION_SEAMLESS if userHash == 0.
 * Otherwise it is equivalent to NETWORK_SESSION_REQUEST_SESSION_COMPETITIVE(flags, MATCHTYPE_SEAMLESS, userHash, 0, sessionRequestId);
 * p1 is unused
 */
declare function NetworkSessionRequestSessionSeamless(
  flags: number,
  p1: number,
  userHash: number,
  sessionRequestId?: number,
): [boolean, number];

declare function NetworkSessionSetPlayerFlags(flags: number): boolean;

declare function NetworkSessionTransitionToSession(sessionRequestId: number): [boolean, number];

declare function NetworkSetCompletedMpIntroFlowOnCurrentSlot(completed: boolean): boolean;

/**
 * if set to true other network players can't see it
 * if set to false other network player can see it
 * =========================================
 * ^^ I attempted this by grabbing an object with GET_ENTITY_PLAYER_IS_FREE_AIMING_AT and setting this naive no matter the toggle he could still see it.
 * pc or last gen?
 * ^^ last-gen
 */
declare function NetworkSetEntityInvisibleToNetwork(entity: number, toggle: boolean): void;

declare function NetworkSetFriendlyFireOption(toggle: boolean): void;

declare function NetworkSetInMpCutscene(p0: boolean, p1: boolean, p2: number, p3: boolean): void;

declare function NetworkSetInSpectatorMode(toggle: boolean, playerPed: number): void;

declare function NetworkSetInStaticSpectatorMode(toggle: boolean, x: number, y: number, z: number): void;

declare function NetworkSetLocalPlayerInvincibleTime(time: number): void;

declare function NetworkSetLocalPlayerPendingFastInstanceId(instanceId: number): void;

declare function NetworkSetLocalPlayerSyncLookAt(toggle: boolean): void;

declare function NetworkSetMissionFinished(): void;

declare function NetworkSetMpMissionFlagOnCurrentSlot(enabled: boolean, flagIndex: number): boolean;

/**
 * Old name: _NETWORK_SET_PASSIVE_MODE_OPTION
 */
declare function NetworkSetPlayerIsPassive(toggle: boolean): void;

declare function NetworkSetRecentGamersEnabled(toggle: boolean): void;

declare function NetworkSetRichPresence(p0: number, p2: number, p3: number): number;

declare function NetworkSetScriptIsSafeForNetworkGame(): void;

declare function NetworkSetScriptReadyForEvents(toggle: boolean): void;

declare function NetworkSetThisScriptIsNetworkScript(
  maxNumMissionParticipants: number,
  p1: boolean,
  instanceId: number,
): void;

declare function NetworkSetVehicleWheelsDestructible(p0: number, p1: number): void;

/**
 * Hardcoded to return false.
 */
declare function NetworkShouldShowPromotionDlg(): boolean;

declare function NetworkShowProfileUi(networkHandle: number): void;

declare function NetworkSpawnConfigAddExclusionVolume(volume: number): void;

declare function NetworkSpawnConfigSetFlags(flags: number): void;

declare function NetworkSpawnConfigSetGroundToRootOffset(offset: number): void;

declare function NetworkSpawnConfigSetTuningFloat(p0: string | number, p1: number): void;

declare function NetworkStartSoloTutorialSession(): void;

/**
 * Always returns -1. Seems to be XB1 specific.
 */
declare function NetworkStartUserContentPermissionsCheck(netHandle: number): [number, number];

declare function NetworkTryAccessTunableBool(
  tunableContext: string | number,
  tunableName: string | number,
  defaultValue: boolean,
): boolean;

declare function NetworkTryAccessTunableFloat(
  tunableContext: string | number,
  tunableName: string | number,
  defaultValue: number,
): number;

declare function NetworkTryAccessTunableInt(
  tunableContext: string | number,
  tunableName: string | number,
  defaultValue: number,
): number;

declare function NextOnscreenKeyboardResultWillDisplayUsingTheseFonts(p0: number): void;

/**
 * Returns the network ID of the given object.
 */
declare function ObjToNet(object: number): number;

declare function OpenPatrolRoute(patrolRoute: string): void;

declare function OpenSequenceTask(): number;

/**
 * Hardcoded to return true.
 */
declare function OpenVideoEditor(): boolean;

declare function OverrideSaveHouse(
  p0: boolean,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: boolean,
  p6: number,
  p7: number,
): boolean;

declare function OverrideTextureOnPed(ped: number, componentHash: string | number, textureId: number): void;

declare function ParseddataIsFileLoaded(p0: number): boolean;

declare function ParseddataIsFileValid(p0: number): boolean;

/**
 * Old name: _DATAFILE_GET_BOOL
 */
declare function ParseddataRqFilloutBool(): [boolean, any /* actually bool */, number];

/**
 * Old name: _DATAFILE_GET_FLOAT
 */
declare function ParseddataRqFilloutFloat(): [boolean, number, number];

/**
 * Old name: _DATAFILE_GET_HASH
 */
declare function ParseddataRqFilloutHash(): [boolean, number, number];

/**
 * Old name: _DATAFILE_GET_INT
 */
declare function ParseddataRqFilloutInt(): [boolean, number, number];

/**
 * Old name: _DATAFILE_GET_DATA_NODE_INDEX
 */
declare function ParseddataRqFilloutNode(): [boolean, number, number];

declare function ParseddataRqFilloutString_127(p0: string, p1?: number): [boolean, number];

/**
 * Old name: _DATAFILE_GET_STRING
 */
declare function ParseddataRqFilloutString_63(p0: string, p1?: number): [boolean, number];

/**
 * Old name: _DATAFILE_GET_VECTOR
 */
declare function ParseddataRqFilloutVector(): [boolean, number[], number];

/**
 * Return the local Participant ID
 */
declare function ParticipantId(): number;

/**
 * Return the local Participant ID.
 * This native is exactly the same as 'PARTICIPANT_ID' native.
 */
declare function ParticipantIdToInt(): number;

declare function PauseClock(toggle: boolean, unused: number): void;

declare function PauseClockThisFrame(toggle: boolean): void;

declare function PauseDeathArrestRestart(toggle: boolean): void;

/**
 * Pauses all script threads except the one that called it.
 */
declare function PauseScriptThreads(toggle: boolean): void;

declare function PauseScriptedConversation(p0: string, p1: boolean, p2: boolean, p3: boolean, p4: boolean): void;

declare function PedCowerInPlace(ped: number, ped2: number): void;

declare function PedCowerMoveToPoint(ped: number, p1: number, p2: number, p3: number, ped2: number, p5: number): void;

declare function PedHasUseScenarioTask(ped: number): boolean;

/**
 * Returns the network ID of the given ped.
 */
declare function PedToNet(ped: number): number;

declare function PersistenceRemoveAllEntitiesInArea(x: number, y: number, z: number, radius: number): void;

declare function PinClosestMapEntity(modelHash: string | number, x: number, y: number, z: number, p4: number): number;

declare function PinInteriorInMemory(interior: number): void;

declare function PlaceEntityOnGroundProperly(entity: number, p1: boolean): boolean;

declare function PlaceObjectOnGroundProperly(p0: number, p1: number | boolean): boolean;

/**
 * Old name: _PLAY_AMBIENT_SPEECH_AT_COORDS
 */
declare function PlayAmbientSpeechFromPositionNative(
  x: number,
  y: number,
  z: number,
  params?: number,
): [boolean, number];

declare function PlayAnimOnRunningScenario(ped: number, animDict: string, animName: string): void;

declare function PlayAnimalVocalization(pedHandle: number, vocalizationName: string, p2: boolean): void;

declare function PlayCamAnim(
  cam: number,
  animName: string,
  animDictionary: string,
  x: number,
  y: number,
  z: number,
  xRot: number,
  yRot: number,
  zRot: number,
  p9: boolean,
  p10: number,
): boolean;

declare function PlayEndCreditsMusic(play: boolean): void;

declare function PlayEntityAnim(
  entity: number,
  animName: string,
  animDict: string,
  p3: number,
  loop: boolean,
  stayInAnim: boolean,
  p6: boolean,
  delta: number,
  bitset: number,
): boolean;

declare function PlayEntityScriptedAnim(entity: number, args?: number): number;

/**
 * Valid pain IDs: 0..12
 */
declare function PlayPain(ped: number, painId: number, p2: number, p3: boolean, isNetwork: boolean): void;

/**
 * struct ScriptedSpeechParams
 * {
 * const char* speechName;
 * const char* voiceName;
 * alignas(8) int v3;
 * alignas(8) Hash speechParamHash;
 * alignas(8) Entity entity;
 * alignas(8) BOOL v6;
 * alignas(8) int v7;
 * alignas(8) int v8;
 * };
 * static_assert(sizeof(ScriptedSpeechParams) == 0x40, "incorrect ScriptedSpeechParams size");
 * Example:
 * ScriptedSpeechParams params{"RE_PH_RHD_V3_AGGRO", "0405_U_M_M_RhdSheriff_01", 1, 0x67F3AB43, 0, true, 1, 1};
 * _PLAY_AMBIENT_SPEECH1(PLAYER_PED_ID(), (Any*)&params);
 * Old name: _PLAY_AMBIENT_SPEECH1
 */
declare function PlayPedAmbientSpeechNative(ped: number, params?: DataView): [boolean];

declare function PlaySound(audioName: string, audioRef: string, p2: boolean, p3: number, p4: boolean, p5: number): void;

declare function PlaySoundFromEntity(
  audioName: string,
  entity: number,
  audioRef: string,
  isNetwork: boolean,
  p4: number,
  p5: number,
): void;

declare function PlaySoundFromPosition(
  audioName: string,
  x: number,
  y: number,
  z: number,
  audioRef: string,
  isNetwork: boolean,
  p6: number,
  p7: boolean,
  p8: number,
): void;

declare function PlaySoundFrontend(audioName: string, audioRef: string, p2: boolean, p3: number): void;

declare function PlayStreamFromPed(p0: number, p1: number): void;

declare function PlayStreamFromPosition(p0: number, p1: number, p2: number, p3: number): void;

declare function PlayStreamFrontend(p0: number): void;

/**
 * This returns YOUR 'identity' as a Player type.
 * Always returns 0 in story mode.
 */
declare function PlayerId(): number;

/**
 * Returns current player ped
 */
declare function PlayerPedId(): number;

declare function PointCamAtCoord(cam: number, x: number, y: number, z: number): void;

declare function PointCamAtEntity(cam: number, entity: number, p2: number, p3: number, p4: number, p5: boolean): void;

declare function PokerBuyIn(p0: number, p1: number): number;

declare function PokerCall(p0: number, p1: number): number;

declare function PokerCheck(p0: number, p1: number): number;

declare function PokerFold(p0: number): number;

declare function PokerGetGameSettingsForId(p0: number): number;

declare function PokerRaise(p0: number, p1: number): number;

declare function PokerReveal(p0: number): number;

/**
 * spawns a few distant/out-of-sight peds, vehicles, animals etc each time it is called
 */
declare function PopulateNow(): void;

declare function PosseGetPosseMembershipCount(): number;

declare function Pow(base: number, exponent: number): number;

declare function PrefetchSrl(srl: string): void;

declare function PreloadScriptConversation(p0: string, p1: boolean, p2: boolean, p3: boolean): void;

declare function PrepareMusicEvent(eventName: string): boolean;

declare function PrepareSound(soundName: string, soundsetName: string, soundId: number): boolean;

declare function PrepareSoundWithEntity(
  soundName: string,
  entity: number,
  soundsetName: string,
  soundId: number,
): boolean;

declare function PrepareSoundset(soundsetName: string, p1: boolean): boolean;

declare function PreventCollectionOfPortablePickup(object: number, p1: boolean, p2: boolean): void;

declare function PreventMigrationOfEntitiesInFastInstanceForLocalPlayer(toggle: boolean): void;

declare function PreventNetworkIdMigration(netId: number): void;

/**
 * Scope entry for profiler.
 * @param scopeName Scope name.
 */
declare function ProfilerEnterScope(scopeName: string): void;

/**
 * Scope exit for profiler.
 */
declare function ProfilerExitScope(): void;

/**
 * Returns true if the profiler is active.
 * @return True or false.
 */
declare function ProfilerIsRecording(): boolean;

declare function PropsetToNet(propSet: number): number;

/**
 * p0 must be < 2
 */
declare function QueueSavegameOperation(p0: number): boolean;

/**
 * Reads the passed value as floating point value and returns it.
 * Example: _READ_INT_AS_FLOAT(0x3F800000) returns 1.0f because 0x3F800000 is the hexadecimal representation of 1.0f.
 */
declare function ReadIntAsFloat(value: number): number;

declare function RefillAmmoInClip(ped: number, p2: number): [number, number];

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * Registers a set of archetypes with the game engine. These should match `CBaseArchetypeDef` class information from the game.
 * @param factory A function returning a list of archetypes.
 */
declare function RegisterArchetypes(factory: Function): void;

/**
 * Registered commands can be executed by entering them in the client console (this works for client side and server side registered commands). Or by entering them in the server console/through an RCON client (only works for server side registered commands). Or if you use a supported chat resource, like the default one provided in the cfx-server-data repository, then you can enter the command in chat by prefixing it with a `/`.
 * Commands registered using this function can also be executed by resources, using the [`ExecuteCommand` native](#\_0x561C060B).
 * The restricted bool is not used on the client side. Permissions can only be checked on the server side, so if you want to limit your command with an ace permission automatically, make it a server command (by registering it in a server script).
 * **Example result**:
 * ![](https://i.imgur.com/TaCnG09.png)
 * @param commandName The command you want to register.
 * @param handler A handler function that gets called whenever the command is executed.
 * @param restricted If this is a server command and you set this to true, then players will need the command.yourCommandName ace permission to execute this command.
 */
declare function RegisterCommand(commandName: string, handler: Function, restricted: boolean): void;

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * Registers a set of entities with the game engine. These should match `CEntityDef` class information from the game.
 * At this time, this function **should not be used in a live environment**.
 * @param factory A function returning a list of entities.
 */
declare function RegisterEntities(factory: Function): void;

/**
 * Registers a specified .gfx file as GFx font library.
 * The .gfx file has to be registered with the streamer already.
 * @param fileName The name of the .gfx file, without extension.
 */
declare function RegisterFontFile(fileName: string): void;

/**
 * Registers a specified font name for use with text draw commands.
 * @param fontName The name of the font in the GFx font library.
 * @return An index to use with [SET_TEXT_FONT](#\_0x66E0276CC5F6B9DA) and similar natives.
 */
declare function RegisterFontId(fontName: string): number;

/**
 * Based on TASK_COMBAT_HATED_TARGETS_AROUND_PED, the parameters are likely similar (PedHandle, and area to attack in).
 */
declare function RegisterHatedTargetsAroundPed(ped: number, radius: number): void;

declare function RegisterInteractionLockonPrompt(
  entity: number,
  p1: string,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  prompt: number,
  p8: boolean,
  p9: number,
): boolean;

/**
 * Registers a key mapping for the current resource.
 * See the related [cookbook post](https://cookbook.fivem.net/2020/01/06/using-the-new-console-key-bindings/) for more information.
 * @param commandString The command to execute, and the identifier of the binding.
 * @param description A description for in the settings menu.
 * @param defaultMapper The [mapper ID](https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/) to use for the default binding, e.g. `keyboard`.
 * @param defaultParameter The [IO parameter ID](https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/) to use for the default binding, e.g. `f3`.
 */
declare function RegisterKeyMapping(
  commandString: string,
  description: string,
  defaultMapper: string,
  defaultParameter: string,
): void;

declare function RegisterNamedRendertarget(name: string, p1: boolean): boolean;

declare function RegisterNuiCallbackType(callbackType: string): void;

/**
 * Registers a script for any object with a specific model hash.
 */
declare function RegisterObjectScriptBrain(
  scriptName: string,
  modelHash: string | number,
  p2: number,
  activationRange: number,
  p4: number,
  p5: number,
): void;

declare function RegisterRawNuiCallback(callbackType: string, callback: Function): void;

/**
 * An internal function which allows the current resource's HLL script runtimes to receive state for the specified event.
 * @param eventName An event name, or "\*" to disable HLL event filtering for this resource.
 */
declare function RegisterResourceAsEventHandler(eventName: string): void;

/**
 * nullsub, doesn't do anything
 */
declare function RegisterScriptWithAudio(p0: number): void;

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * Registers a dynamic streaming asset from the server with the GTA streaming module system.
 * @param resourceName The resource to add the asset to.
 * @param fileName A file name in the resource.
 * @param cacheString The string returned from `REGISTER_RESOURCE_ASSET` on the server.
 */
declare function RegisterStreamingFileFromCache(resourceName: string, fileName: string, cacheString: string): void;

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * Registers a KVP value as an asset with the GTA streaming module system. This function currently won't work.
 * @param kvsKey The KVP key in the current resource to register as an asset.
 */
declare function RegisterStreamingFileFromKvs(kvsKey: string): void;

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * Registers a file from an URL as a streaming asset in the GTA streaming subsystem. This will asynchronously register the asset, and caching is done based on the URL itself - cache headers are ignored.
 * Use `IS_STREAMING_FILE_READY` to check if the asset has been registered successfully.
 * @param registerAs The file name to register as, for example `asset.ydr`.
 * @param url The URL to fetch the asset from.
 */
declare function RegisterStreamingFileFromUrl(registerAs: string, url: string): void;

declare function RegisterTarget(p0: number, p1: number, p2: number): void;

declare function ReleaseAnimScenePlayList(animScene: number, playlistName: string): boolean;

declare function ReleaseMetapedOutfitRequest(requestId: number): void;

declare function ReleaseNamedRendertarget(name: string): boolean;

declare function ReleaseNamedScriptAudioBank(audioBank: string): void;

declare function ReleasePedVisibilityTracking(ped: number): void;

declare function ReleasePropSet(hash: string | number): boolean;

declare function ReleaseScriptAudioBank(): void;

declare function ReleaseSoundId(soundId: number): void;

declare function ReleaseTexture(textureId: number): void;

declare function RemoveAllCoverBlockingAreas(): void;

declare function RemoveAllPedAmmo(ped: number): void;

declare function RemoveAllPedWeapons(ped: number, p1: boolean, p2: boolean): void;

declare function RemoveAllPickupsOfType(pickupHash: string | number): void;

declare function RemoveAllShockingEvents(p0: boolean): void;

declare function RemoveAllShockingEventsInArea(x: number, y: number, z: number, radius: number, p4: boolean): void;

/**
 * eventType: https://alloc8or.re/rdr3/doc/enums/eEventType.txt
 */
declare function RemoveAllShockingEventsOfType(eventType: string | number, p1: boolean): void;

/**
 * eventType: https://alloc8or.re/rdr3/doc/enums/eEventType.txt
 */
declare function RemoveAllShockingEventsOfTypeInArea(
  eventType: string | number,
  x: number,
  y: number,
  z: number,
  radius: number,
  p5: boolean,
): void;

/**
 * removeReason must be REMOVE_REASON_USED, REMOVE_REASON_GIVEN, REMOVE_REASON_DROPPED or REMOVE_REASON_DEBUG, unless amount is -1
 * removeReason: see REMOVE_WEAPON_FROM_PED
 */
declare function RemoveAmmoFromPed(
  ped: number,
  weaponHash: string | number,
  amount: number,
  removeReason: string | number,
): void;

/**
 * removeReason must be REMOVE_REASON_USED, REMOVE_REASON_GIVEN, REMOVE_REASON_DROPPED or REMOVE_REASON_DEBUG, unless amount is -1
 * removeReason: see REMOVE_WEAPON_FROM_PED
 */
declare function RemoveAmmoFromPedByType(
  ped: number,
  ammoHash: string | number,
  amount: number,
  removeReason: string | number,
): void;

declare function RemoveAnimDict(animDict: string): void;

declare function RemoveAnimSceneEntity(animScene: number, p1: number, p2: number): void;

declare function RemoveBlip(blip: number): void;

/**
 * Alias for REMOVE_ANIM_SET.
 */
declare function RemoveClipSet(clipSet: string): void;

declare function RemoveCoverPoint(coverpoint: number): void;

/**
 * Most likely REMOVE_CURRENT_*
 */
declare function RemoveCurrentRise(p0: number): void;

declare function RemoveDecal(decal: number): void;

declare function RemoveDecalsFromObject(obj: number): void;

/**
 * Removes all decals in range from a position, it includes the bullet holes, blood pools, petrol...
 */
declare function RemoveDecalsInRange(x: number, y: number, z: number, range: number): void;

declare function RemoveDispatchSpawnBlockingArea(p0: number): void;

declare function RemoveDoorFromSystem(doorHash: string | number): void;

declare function RemoveEntityFromAudioMixGroup(entity: number, p1: number): void;

declare function RemoveEntityFromEntityMask(entity: number): void;

declare function RemoveForcedObject(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function RemoveFromItemset(itemset: number, p1: number): void;

declare function RemoveGroup(groupId: number): void;

declare function RemoveGuardZone(name: string): void;

/**
 * Old name: _REMOVE_IMAP_2
 */
declare function RemoveIplByHash(imapHash: string | number): void;

/**
 * Old name: _REMOVE_IMAP
 */
declare function RemoveIplHash(imapHash: string | number): void;

declare function RemoveModelHide(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function RemoveModelSwap(
  x: number,
  y: number,
  z: number,
  radius: number,
  originalModel: string | number,
  newModel: string | number,
  p6: boolean,
): void;

declare function RemoveMotionTypeAsset(nameHash: string | number, ped: number): void;

declare function RemoveMoveNetworkDef(name: string): void;

declare function RemoveMpGamerTag(gamerTagId: number): void;

declare function RemoveNamedPtfxAsset(fxNameHash: string | number): void;

declare function RemoveNavmeshBlockingObject(p0: number): void;

declare function RemoveNavmeshBlockingVolume(volume: number): void;

declare function RemoveParticleFx(ptfxHandle: number, p1: boolean): void;

declare function RemoveParticleFxFromEntity(entity: number): void;

declare function RemoveParticleFxInRange(X: number, Y: number, Z: number, radius: number): void;

/**
 * Ped will no longer get angry when you stay near him.
 */
declare function RemovePedDefensiveArea(ped: number, toggle: boolean): void;

/**
 * See _REQUEST_PED_EMOTIONAL_PRESET
 */
declare function RemovePedEmotionalPreset(ped: number, name: string): void;

declare function RemovePedFromGroup(ped: number): void;

declare function RemovePedFromMount(ped: number, p1: boolean, p2: boolean): void;

declare function RemovePedOverlay(textureId: number, overlayId: number): void;

declare function RemovePedStayOutVolume(ped: number, volume: number): boolean;

declare function RemovePedWoundEffect(ped: number, p1: number): void;

declare function RemovePickup(pickup: number): void;

declare function RemovePopMultiplierArea(id: number, p1: boolean): void;

declare function RemovePortalSettingsOverride(p0: string): void;

declare function RemovePtfxAsset(): void;

declare function RemoveRelationshipGroup(groupHash: string | number): void;

/**
 * Experimental natives, please do not use in a live environment.
 */
declare function RemoveReplaceTexture(origTxd: string, origTxn: string): void;

declare function RemoveRoadNodeSpeedZone(speedzone: number): boolean;

declare function RemoveScenarioBlockingArea(p0: number, p1: boolean): void;

declare function RemoveScenarioBlockingAreas(): void;

declare function RemoveScriptFire(fireHandle: number): void;

declare function RemoveShockingEvent(event: number): boolean;

declare function RemoveShockingEventSpawnBlockingAreas(): void;

declare function RemoveShopItemFromPedByCategory(ped: number, componentCategory: number, p2: number, p3: boolean): void;

/**
 * Appears to remove stealth kill action from memory
 */
declare function RemoveStealthKill(hash: string | number, p1: boolean): void;

declare function RemoveTagFromMetaPed(ped: number, component: string | number, p2: number): void;

declare function RemoveVegModifierSphere(p0: number, p1: number): void;

declare function RemoveVehicleAsset(vehicleAsset: number): void;

declare function RemoveVehicleLightPropSets(vehicle: number): void;

declare function RemoveVehiclePropSets(vehicle: number): void;

/**
 * See REQUEST_VEHICLE_RECORDING
 */
declare function RemoveVehicleRecording(p0: number, p1?: number): number;

/**
 * windowIndex:
 * 0 = Front Right Window
 * 1 = Front Left Window
 * 2 = Back Right Window
 * 3 = Back Left Window
 */
declare function RemoveVehicleWindow(vehicle: number, windowIndex: number): void;

declare function RemoveVehiclesFromGeneratorsInArea(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function RemoveWaypointRecording(name: string): void;

declare function RemoveWeaponAsset(weaponHash: string | number): void;

declare function RemoveWeaponComponentFromPed(
  ped: number,
  componentHash: string | number,
  weaponHash: string | number,
): void;

declare function RemoveWeaponComponentFromWeaponObject(p0: number, p1: number): void;

/**
 * removeReason:
 * enum eRemoveItemReason : Hash
 * {
 * REMOVE_REASON_CLIENT_PURGED = 0x4A4E94DC,
 * REMOVE_REASON_COALESCE = 0x2ABE393E,
 * REMOVE_REASON_DEBUG = 0xA07362E6,
 * REMOVE_REASON_DEFAULT = 0xF77DE93D,
 * REMOVE_REASON_DELETE_CHARACTER = 0x20AFBDE9,
 * REMOVE_REASON_DROPPED = 0xEC7FB5D5,
 * REMOVE_REASON_DUPLICATE = 0x19047132,
 * REMOVE_REASON_GIFTED_INCORRECTLY = 0x9C4E3829,
 * REMOVE_REASON_GIVEN = 0xAD5377D4,
 * REMOVE_REASON_INSUFFICIENT_INVENTORY = 0x518D1AAE,
 * REMOVE_REASON_ITEM_DOES_NOT_EXIST = 0xEAD5D889,
 * REMOVE_REASON_LOADOUT = 0x1B94E3BA,
 * REMOVE_REASON_SET_AMOUNT = 0x19D5CFA5,
 * REMOVE_REASON_SOLD = 0x76C4B482,
 * REMOVE_REASON_USED = 0x2188E0A3,
 * REMOVE_REASON_USE_FAILED = 0x671F9EAD
 * };
 */
declare function RemoveWeaponFromPed(
  ped: number,
  weaponHash: string | number,
  p2: boolean,
  removeReason: string | number,
): void;

declare function RemoveWeaponFromPedByGuid(ped: number, removeReason: string | number): number;

/**
 * ease - smooth transition between the camera's positions
 * easeTime - Time in milliseconds for the transition to happen
 * If you have created a script (rendering) camera, and want to go back to the
 * character (gameplay) camera, call this native with render set to 0.
 * Setting ease to 1 will smooth the transition.
 */
declare function RenderScriptCams(
  render: boolean,
  ease: boolean,
  easeTime: number,
  p3: boolean,
  p4: boolean,
  p5: number,
): void;

/**
 * crimeType:
 * enum eCrimeType : Hash
 * {
 * CRIME_ACCOMPLICE = 0xAF074F6D,
 * CRIME_ARSON = 0x68134DC7,
 * CRIME_ASSAULT = 0x0BADC882,
 * CRIME_ASSAULT_ANIMAL = 0x18DA55EE,
 * CRIME_ASSAULT_CORPSE = 0x4E5F23F2,
 * CRIME_ASSAULT_HORSE = 0xC4736181,
 * CRIME_ASSAULT_LAW = 0xD7466D7C,
 * CRIME_ASSAULT_LIVESTOCK = 0xCCE1CCBD,
 * CRIME_BANK_ROBBERY = 0x6A1ADE3D,
 * CRIME_BURGLARY = 0xA54C77E0,
 * CRIME_CHEATING = 0xA2FF1145,
 * CRIME_DISTURBANCE = 0x5011F613,
 * CRIME_EXPLOSION = 0x3EBA7A37,
 * CRIME_EXPLOSION_POISON = 0x91D0A0E1,
 * CRIME_GRAVE_ROBBERY = 0x971EA5AF,
 * CRIME_HASSLE = 0x58488776,
 * CRIME_HIT_AND_RUN = 0xFF0A3CC4,
 * CRIME_HIT_AND_RUN_LAW = 0x064814AF,
 * CRIME_INTIMIDATION = 0x8319FBAB,
 * CRIME_JACK_HORSE = 0x82F7E4A2,
 * CRIME_JACK_VEHICLE = 0x6B981F4C,
 * CRIME_JAIL_BREAK = 0x12C1D589,
 * CRIME_KIDNAPPING = 0x98F908DB,
 * CRIME_KIDNAPPING_LAW = 0xFD72A7EA,
 * CRIME_LASSO_ASSAULT = 0x56EE5D5A,
 * CRIME_LAW_IS_THREATENED = 0x1CB91DF0,
 * CRIME_LOITERING = 0x6629D2F4,
 * CRIME_LOOTING = 0x55AD2BEB,
 * CRIME_MURDER = 0xE28ECE7E,
 * CRIME_MURDER_ANIMAL = 0x48F59A66,
 * CRIME_MURDER_HORSE = 0xC7261D79,
 * CRIME_MURDER_LAW = 0x7797FCE7,
 * CRIME_MURDER_LIVESTOCK = 0x9569C546,
 * CRIME_MURDER_PLAYER = 0xF5ABD6C9,
 * CRIME_MURDER_PLAYER_HORSE = 0xD55C6A79,
 * CRIME_PROPERTY_DESTRUCTION = 0x533B003D,
 * CRIME_RESIST_ARREST = 0xDF577BA5,
 * CRIME_ROBBERY = 0xA3BEDE4C,
 * CRIME_SELF_DEFENCE = 0xBD6A0AA3,
 * CRIME_STAGECOACH_ROBBERY = 0xFC738E61,
 * CRIME_STOLEN_GOODS = 0x9A949C79,
 * CRIME_THEFT = 0x72ADE410,
 * CRIME_THEFT_HORSE = 0xBE3A5838,
 * CRIME_THEFT_LIVESTOCK = 0x85BA08FD,
 * CRIME_THEFT_VEHICLE = 0x43A9ECA1,
 * CRIME_THREATEN = 0x941C985A,
 * CRIME_THREATEN_LAW = 0x7F908566,
 * CRIME_TRAIN_ROBBERY = 0x647D2A5A,
 * CRIME_TRAMPLE = 0x45DB39D8,
 * CRIME_TRAMPLE_LAW = 0xF00F266B,
 * CRIME_TRAMPLE_PLAYER = 0x75970C15,
 * CRIME_TRESPASSING = 0xAEDE8E35,
 * CRIME_UNARMED_ASSAULT = 0x5098CC5A,
 * CRIME_VANDALISM = 0x80FDC759,
 * CRIME_VANDALISM_VEHICLE = 0xF9E7ECE4,
 * CRIME_VEHICLE_DESTRUCTION = 0x54A85DDC,
 * CRIME_WANTED_LEVEL_UP_DEBUG_HIGH = 0x99C52FF5,
 * CRIME_WANTED_LEVEL_UP_DEBUG_LOW = 0xD891890F
 * };
 */
declare function ReportCrime(
  player: number,
  crimeType: string | number,
  bounty: number,
  entity: number,
  isKnownSuspect: boolean,
): void;

declare function ReportPlayer(player: number, reportType: number, description: string, horseName: string): void;

declare function ReportPoliceSpottedPlayer(player: number): void;

declare function RequestAdditionalCollisionAtCoord(x: number, y: number, z: number): void;

declare function RequestAnimDict(animDict: string): void;

declare function RequestAnimScenePlayList(animScene: number, playlistName: string): boolean;

declare function RequestClipSet(clipSet: string): void;

declare function RequestClipSetByHash(clipSetHash: string | number): void;

declare function RequestCollisionAtCoord(x: number, y: number, z: number): void;

declare function RequestCollisionForModel(model: string | number): void;

/**
 * Old name: _REQUEST_IMAP_2
 */
declare function RequestIplByHash(imapHash: string | number): void;

/**
 * Old name: _REQUEST_IMAP
 */
declare function RequestIplHash(imapHash: string | number): void;

declare function RequestMetapedOutfit(model: string | number, outfit: string | number): number;

/**
 * Request a model to be loaded into memory.
 */
declare function RequestModel(model: string | number, p1: boolean): void;

declare function RequestMotionTypeAsset(nameHash: string | number, ped: number): void;

declare function RequestMoveNetworkDef(name: string): void;

declare function RequestNamedPtfxAsset(fxNameHash: string | number): void;

declare function RequestPathsPreferAccurateBoundingstruct(x1: number, y1: number, x2: number, y2: number): boolean;

/**
 * For more information, see common:/data/emotional_presets.meta
 */
declare function RequestPedEmotionalPreset(ped: number, name: string): void;

declare function RequestPedVehicleVisibilityTracking(ped: number, p1: boolean): void;

declare function RequestPedVisibilityTracking(ped: number): void;

declare function RequestPropSet(hash: string | number): boolean;

/**
 * Same as _REQUEST_PROP_SET
 */
declare function RequestPropSet_2(hash: string | number): boolean;

declare function RequestPtfxAsset(): void;

declare function RequestScenarioType(scenarioType: string | number, p1: number, p2: number, p3: number): number;

declare function RequestScript(scriptName: string): void;

declare function RequestScriptAudioBank(p0: number): boolean;

declare function RequestScriptWithNameHash(scriptHash: string | number): void;

declare function RequestStreamedTextureDict(textureDict: string, p1: boolean): void;

declare function RequestStreamedTxd(txdHash: string | number, p1: boolean): void;

declare function RequestTaskMoveNetworkStateTransition(ped: number, name: string): void;

/**
 * Material hash list: https://raw.githubusercontent.com/femga/rdr3_discoveries/master/clothes/cloth_drawable_albedo_normal_material_TEMPORARY.lua
 */
declare function RequestTexture(
  albedoHash: string | number,
  normalHash: string | number,
  materialHash: string | number,
): number;

declare function RequestThreadExit(threadId: number): void;

declare function RequestThreadExitForAllThreadsWithThisName(nameHash: string | number): void;

declare function RequestUiappTransitionByHash(appNameHash: string | number, transitionHash: string | number): boolean;

declare function RequestVehicleAsset(vehicleHash: string | number, vehicleAsset: number): void;

declare function RequestVehicleHighDetailModel(vehicle: number): void;

/**
 * Request the vehicle recording defined by the lowercase format string "%s%03d.yvr". For example, REQUEST_VEHICLE_RECORDING(1, "FBIs1UBER") corresponds to fbis1uber001.yvr.
 * For all vehicle recording/playback natives, "script" is a common prefix that usually corresponds to the script/mission the recording is used in, "recording" is its int suffix, and "id" corresponds to a unique identifier within the recording streaming module.
 * (GTA) Note that only 24 recordings (hardcoded in multiple places) can ever active at a given time before clobbering begins.
 */
declare function RequestVehicleRecording(recording: number, script: string): void;

declare function RequestVolumeLock(x: number, y: number, z: number, radius: number, p4: number, p5: number): number;

declare function RequestVolumeLockWithArgs(args: number): [number, number];

declare function RequestWaypointRecording(name: string): void;

declare function RequestWeaponAsset(weaponHash: string | number, p1: number, p2: boolean): void;

declare function ReserveAmbientPeds(numPeds: number): void;

declare function ReserveAmbientPedsTotal(numPeds: number): void;

declare function ReserveNetworkClientMissionObjects(amount: number): void;

declare function ReserveNetworkClientMissionPeds(amount: number): void;

declare function ReserveNetworkMissionObjects(amount: number): void;

declare function ReserveNetworkMissionPeds(amount: number): void;

declare function ReserveNetworkMissionPickups(amount: number): void;

declare function ReserveNetworkMissionVehicles(amount: number): void;

declare function ResetAiWeaponDamageModifier(): void;

declare function ResetAnimScene(animScene: number, p1: string): void;

declare function ResetAnimalTuningBoolParam(p0: number, p1: number): void;

declare function ResetAnimalTuningFloatParam(p0: number, p1: number): void;

/**
 * Begins with RESET_*. Next character in the name is either D or E.
 */
declare function ResetBenchmarkRecording(): void;

declare function ResetDispatchIdealSpawnDistance(): void;

declare function ResetDispatchMaxSpawnDistance(): void;

declare function ResetDispatchMinSpawnDistance(): void;

declare function ResetEntityAlpha(entity: number): void;

/**
 * Resets parameters which is used by the game for checking is ped needs to fly through windscreen after a crash to default values.
 */
declare function ResetFlyThroughWindscreenParams(): void;

declare function ResetGroupFormationDefaultSpacing(groupHandle: number): void;

declare function ResetHorseAvoidanceLevelToDefault(horse: number): void;

/**
 * Resets values from the zoom level data by index to defaults from mapzoomdata.meta.
 * @param index Zoom level index.
 */
declare function ResetMapZoomDataLevel(index: number): void;

declare function ResetMinimapFow(hash: string | number): void;

/**
 * Resets the effect of SET_PARTICLE_FX_OVERRIDE
 */
declare function ResetParticleFxOverride(name: string): void;

declare function ResetPausedRenderphases(): void;

declare function ResetPedInVehicleContext(ped: number): void;

/**
 * Resets the value for the last vehicle driven by the Ped.
 */
declare function ResetPedLastVehicle(ped: number): void;

declare function ResetPedModelPersonality(model: number | string): void;

declare function ResetPedRagdollTimer(ped: number): void;

declare function ResetPedTexture(textureId: number): void;

declare function ResetPedTexture_2(textureId: number): void;

declare function ResetPedWeaponMovementClipset(ped: number): void;

declare function ResetPlayerArrestState(player: number): void;

declare function ResetPlayerInputGait(player: number): void;

declare function ResetRoadsInVolume(volume: number, p1: boolean): void;

declare function ResetScenarioGroupsEnabled(): void;

declare function ResetScenarioTypesEnabled(): void;

declare function ResetScriptTimeWithinFrame(): void;

declare function ResetVehicleStuckTimer(vehicle: number, nullAttributes: number): void;

declare function ResetWantedLevelDifficulty(player: number): void;

declare function RestartScriptedConversation(p0: string): void;

declare function RestoreGlobalBlock(index: number): boolean;

/**
 * 0.0 <= stamina <= 100.0
 */
declare function RestorePedStamina(ped: number, stamina: number): void;

declare function RestorePlayerStamina(player: number, p1: number): void;

declare function ResumeAnimSceneFromLastCheckpoint(animScene: number): void;

/**
 * This function will simply bring the dead person back to life.
 * Try not to use it alone, since using this function alone, will make peds fall through ground in hell(well for the most of the times).
 * Instead, before calling this function, you may want to declare the position, where your Resurrected ped to be spawn at.(For instance, Around 2 floats of Player's current position.)
 * Also, disabling any assigned task immediately helped in the number of scenarios, where If you want peds to perform certain decided tasks.
 */
declare function ResurrectPed(ped: number): void;

declare function RevealMinimapFow(hash: string | number): void;

declare function ReviveInjuredPed(ped: number): void;

declare function RopeDrawShadowEnabled(toggle: boolean): number;

/**
 * Forces a rope to a certain length.
 */
declare function RopeForceLength(ropeId: number, length: number): void;

declare function RopeSetUpdateOrder(ropeId: number, p1: number): void;

declare function Round(value: number): number;

/**
 * Saves the benchmark recording to %USERPROFILE%\Documents\Rockstar Games\Red Dead Redemption 2\Benchmarks and submits some metrics.
 */
declare function SaveBenchmarkRecording(): void;

declare function SaveHighQualityPhoto(unused: number): boolean;

declare function SavegameIsSavePending(): boolean;

/**
 * See SAVEGAME_SAVE_SP
 */
declare function SavegameSaveMp(savegameType: string | number): boolean;

/**
 * enum eSavegameType : Hash
 * {
 * SAVEGAMETYPE_AMBIENT = 0x3CA4E1F8,
 * SAVEGAMETYPE_DEFAULT = 0xCB6ED080,
 * SAVEGAMETYPE_DELETE_CHAR = 0xCD35F947,
 * SAVEGAMETYPE_END_CREATE_NEWCHAR = 0x4C50A3CE,
 * SAVEGAMETYPE_END_MATCH = 0xE470ED50,
 * SAVEGAMETYPE_END_MISSION = 0x9A444E54,
 * SAVEGAMETYPE_END_SESSION = 0x6D23956C,
 * SAVEGAMETYPE_END_SHOPPING = 0xA311A6C4,
 * SAVEGAMETYPE_RANKUP = 0xE25F8017,
 * SAVEGAMETYPE_SCRIPT_MP_GLOBALS = 0xAFF30AD4,
 * SAVEGAMETYPE_SP_AUTOSAVE = 0xF4AE69EC,
 * SAVEGAMETYPE_SP_DEBUG = 0x6A8122FD,
 * SAVEGAMETYPE_SP_PROPERTY = 0xAE0AB38E
 * };
 */
declare function SavegameSaveSp(savegameType: string | number): boolean;

declare function ScFeedHubHasNewData(): boolean;

declare function ScFeedSubmitPresetMessage(_type: number, subType: number): number;

declare function ScInboxGetMessageIsReadAtIndex(msgIndex: number): boolean;

declare function ScInboxGetMessageTypeAtIndex(msgIndex: number): number;

declare function ScInboxGetTotalNumMessages(): number;

declare function ScInboxMessageGetDataInt(p0: number, context: string, out?: number): [boolean, number];

declare function ScInboxMessageGetDataString(p0: number, context: string, out: string): boolean;

declare function ScInboxMessageGetString(p0: number): string;

declare function ScInboxMessagePop(p0: number): boolean;

declare function ScPresenceAttrSetFloat(attrHash: string | number, value: number): boolean;

declare function ScPresenceAttrSetFloatEx(attrName: string, value: number, p2: boolean): boolean;

declare function ScPresenceAttrSetIntEx(attrName: string, value: number, p2: boolean): boolean;

declare function ScPresenceAttrSetStringEx(attrName: string, value: string, p2: boolean): boolean;

/**
 * Starts a task to check an entered string for profanity on the ROS/Social Club services.
 */
declare function ScProfanityCheckString(_string: string, token?: number): [boolean, number];

declare function ScProfanityGetCheckIsPending(token: number): boolean;

declare function ScProfanityGetCheckIsValid(token: number): boolean;

declare function ScProfanityGetStringPassed(token: number): boolean;

declare function ScProfanityGetStringStatus(token: number): number;

declare function ScriptRaceGetPlayerSplitTime(p0: number): [boolean, number, number];

declare function ScriptRaceInit(p0: number, p1: number, p2: number, p3: number): void;

declare function ScriptRaceShutdown(): void;

/**
 * If the function returns 0, the end of the iteration has been reached.
 */
declare function ScriptThreadIteratorGetNextThreadId(): number;

/**
 * Starts a new iteration of the current threads.
 * Call this first, then SCRIPT_THREAD_ITERATOR_GET_NEXT_THREAD_ID (0x30B4FA1C82DD4B9F)
 */
declare function ScriptThreadIteratorReset(): void;

declare function SearchBuildingPoolForEntityWithThisModel(modelHash: string | number): number;

/**
 * Sends a message to the specific DUI root page. This is similar to SEND_NUI_MESSAGE.
 * @param duiObject The DUI browser handle.
 * @param jsonString The message, encoded as JSON.
 */
declare function SendDuiMessage(duiObject: number, jsonString: string): void;

/**
 * Injects a 'mouse down' event for a DUI object. Coordinates are expected to be set using SEND_DUI_MOUSE_MOVE.
 * @param duiObject The DUI browser handle.
 * @param button Either `'left'`, `'middle'` or `'right'`.
 */
declare function SendDuiMouseDown(duiObject: number, button: string): void;

/**
 * Injects a 'mouse move' event for a DUI object. Coordinates are in browser space.
 * @param duiObject The DUI browser handle.
 * @param x The mouse X position.
 * @param y The mouse Y position.
 */
declare function SendDuiMouseMove(duiObject: number, x: number, y: number): void;

/**
 * Injects a 'mouse up' event for a DUI object. Coordinates are expected to be set using SEND_DUI_MOUSE_MOVE.
 * @param duiObject The DUI browser handle.
 * @param button Either `'left'`, `'middle'` or `'right'`.
 */
declare function SendDuiMouseUp(duiObject: number, button: string): void;

/**
 * Injects a 'mouse wheel' event for a DUI object.
 * @param duiObject The DUI browser handle.
 * @param deltaY The wheel Y delta.
 * @param deltaX The wheel X delta.
 */
declare function SendDuiMouseWheel(duiObject: number, deltaY: number, deltaX: number): void;

/**
 * Sends a message to the `loadingScreen` NUI frame, which contains the HTML page referenced in `loadscreen` resources.
 * @param jsonString The JSON-encoded message.
 * @return A success value.
 */
declare function SendLoadingScreenMessage(jsonString: string): boolean;

declare function SendNuiMessage(jsonString: string): boolean;

declare function SetActivateObjectPhysicsAsSoonAsItIsUnfrozen(object: number, toggle: boolean): void;

declare function SetAiMeleeWeaponDamageModifier(modifier: number): void;

declare function SetAiWeaponDamageModifier(value: number): void;

/**
 * This can be between 1.0f - 50.0f
 */
declare function SetAirDragMultiplierForPlayersVehicle(player: number, multiplier: number): void;

declare function SetAllGlobalBlocksHaveBeenLoaded(toggle: boolean): void;

declare function SetAllPlayerBits(value: number): void;

declare function SetAllRandomPedsFlee(player: number, toggle: boolean): void;

declare function SetAllRandomPedsFleeThisFrame(player: number): void;

declare function SetAllVehicleGeneratorsActive(): void;

declare function SetAllVehicleGeneratorsActiveInArea(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
  p6: boolean,
  p7: boolean,
): void;

declare function SetAllowAnyWeaponDrop(ped: number, toggle: boolean): void;

declare function SetAllowDualWield(ped: number, allow: boolean): void;

declare function SetAmbientAnimalDensityMultiplierThisFrame(multiplier: number): void;

declare function SetAmbientHumanDensityMultiplierThisFrame(multiplier: number): void;

declare function SetAmbientPedDensityMultiplierThisFrame(multiplier: number): void;

declare function SetAmbientPedRangeMultiplierThisFrame(multiplier: number): void;

declare function SetAmbientVoiceName(ped: number, name: string): void;

declare function SetAmbientZoneListState(p1: boolean, p2: boolean): number;

declare function SetAmbientZoneListStatePersistent(ambientZone: string, p1: boolean, p2: boolean): void;

declare function SetAmbientZoneState(zoneName: string, p1: boolean, p2: boolean): void;

declare function SetAmbientZoneStatePersistent(ambientZone: string, p1: boolean, p2: boolean): void;

declare function SetAmmoInClip(ped: number, weaponHash: string | number, ammo: number): boolean;

declare function SetAnimFilter(p0: number, p1: number, p2: number, p3: number): void;

declare function SetAnimRate(p0: number, p1: number, p2: number, p3: boolean): void;

declare function SetAnimSceneBool(animScene: number, name: string, value: boolean, p3: boolean): void;

declare function SetAnimSceneEntity(animScene: number, entityName: string, entity: number, flags: number): void;

declare function SetAnimSceneFloat(animScene: number, name: string, value: number, p3: boolean, p4: boolean): void;

declare function SetAnimSceneInt(animScene: number, name: string, value: number, p3: boolean): void;

declare function SetAnimSceneOrigin(
  animScene: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function SetAnimScenePaused(animScene: number, toggle: boolean): void;

declare function SetAnimScenePlayList(animScene: number, playlistName: string, p2: boolean): void;

declare function SetAnimScenePlaybackList(animScene: number, playbackListName: string): void;

declare function SetAnimSceneRate(animScene: number, rate: number): void;

/**
 * Not implemented.
 */
declare function SetAnimalMood(animal: number, mood: number): void;

/**
 * rarityLevel: see _GET_ANIMAL_RARITY
 */
declare function SetAnimalRarity(ped: number, rarityLevel: number): void;

declare function SetAnimalTuningBoolParam(animal: number, p1: number, p2: boolean): void;

declare function SetAnimalTuningFloatParam(animal: number, p1: number, p2: number): void;

/**
 * Does not affect weapons, particles, fire/explosions, flashlights or the sun.
 * When set to true, all emissive textures (including ped components that have light effects), street lights, building lights, vehicle lights, etc will all be turned off.
 * state: True turns off all artificial light sources in the map: buildings, street lights, car lights, etc. False turns them back on.
 */
declare function SetArtificialLightsState(state: boolean): void;

/**
 * attributeIndex:
 * enum ePedAttribute
 * {
 * PA_HEALTH,
 * PA_STAMINA,
 * PA_SPECIALABILITY,
 * PA_COURAGE,
 * PA_AGILITY,
 * PA_SPEED,
 * PA_ACCELERATION,
 * PA_BONDING,
 * SA_HUNGER,
 * SA_FATIGUED,
 * SA_INEBRIATED,
 * SA_POISONED,
 * SA_BODYHEAT,
 * SA_BODYWEIGHT,
 * SA_OVERFED,
 * SA_SICKNESS,
 * SA_DIRTINESS,
 * SA_DIRTINESSHAT,
 * MTR_STRENGTH,
 * MTR_GRIT,
 * MTR_INSTINCT,
 * PA_UNRULINESS,
 * SA_DIRTINESSSKIN
 * };
 */
declare function SetAttributeBaseRank(ped: number, attributeIndex: number, p2: number): void;

/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 */
declare function SetAttributeBonusRank(ped: number, attributeIndex: number, p2: number): void;

/**
 * coreIndex:
 * enum eAttributeCore
 * {
 * ATTRIBUTE_CORE_HEALTH,
 * ATTRIBUTE_CORE_STAMINA,
 * ATTRIBUTE_CORE_DEADEYE
 * };
 */
declare function SetAttributeCoreValue(ped: number, coreIndex: number, value: number): void;

/**
 * attributeIndex: see SET_ATTRIBUTE_BASE_RANK
 */
declare function SetAttributePoints(ped: number, attributeIndex: number, p2: number): void;

declare function SetAudioFlag(flagName: string, toggle: boolean): void;

declare function SetAudioOnlineTransitionStage(p0: string): void;

declare function SetAudioSceneVariable(scene: string, variable: string, value: number): void;

declare function SetAudioVehiclePriority(vehicle: number, p1: number): void;

declare function SetBit(offset: number): number;

declare function SetBitsInRange(rangeStart: number, rangeEnd: number, p3: number): number;

declare function SetBlipCoords(blip: number, posX: number, posY: number, posZ: number): void;

declare function SetBlipFlashTimer(blip: number, p1: number, p2: number): void;

declare function SetBlipFlashes(blip: number): [boolean, number, number];

/**
 * Example:
 * const char* playerString = VAR_STRING(10, "PLAYER_STRING", GET_PLAYER_NAME(PLAYER_ID()));
 * _SET_BLIP_NAME_FROM_PLAYER_STRING(blip, playerString);
 */
declare function SetBlipNameFromPlayerString(blip: number, playerString: string): void;

declare function SetBlipNameFromTextFile(blip: number, textLabel: string): void;

declare function SetBlipNameToPlayerName(blip: number, player: number): void;

declare function SetBlipRotation(blip: number, rotation: number): void;

declare function SetBlipScale(blip: number, scale: number): void;

declare function SetBlipSprite(blip: number, hash: string | number, p2: boolean): void;

declare function SetBlockOfPlayerBits(p1: number, p2: number): number;

declare function SetBlockingOfNonTemporaryEvents(ped: number, toggle: boolean): void;

declare function SetBoatAnchor(vehicle: number, toggle: boolean): void;

declare function SetBoatFrozenWhenAnchored(p0: number, p1: number, p2: number): void;

declare function SetBoatMovementResistance(vehicle: number, value: number): void;

declare function SetBoatSinksWhenWrecked(vehicle: number, toggle: boolean): void;

declare function SetBountyForPlayer(player: number, amount: number): void;

declare function SetBreakableVehicleLocksUnbreakable(vehicle: number, toggle: boolean): void;

/**
 * Set camera as active/inactive.
 */
declare function SetCamActive(cam: number, active: boolean): void;

declare function SetCamActiveWithInterp(
  camTo: number,
  camFrom: number,
  duration: number,
  easeLocation: boolean,
  easeRotation: boolean,
): void;

/**
 * Allows you to aim and shoot at the direction the camera is facing.
 */
declare function SetCamAffectsAiming(cam: number, toggle: boolean): void;

/**
 * Sets the position of the cam.
 */
declare function SetCamCoord(cam: number, posX: number, posY: number, posZ: number): void;

declare function SetCamFarClip(cam: number, farClip: number): void;

declare function SetCamFocusDistance(cam: number, distance: number): void;

/**
 * Sets the field of view of the cam.
 * Min: 1.0f
 * Max: 130.0f
 */
declare function SetCamFov(cam: number, fieldOfView: number): void;

declare function SetCamMotionBlurStrength(cam: number, strength: number): void;

declare function SetCamNearClip(cam: number, nearClip: number): void;

declare function SetCamParams(
  cam: number,
  posX: number,
  posY: number,
  posZ: number,
  rotX: number,
  rotY: number,
  rotZ: number,
  fieldOfView: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
): void;

/**
 * Sets the rotation of the cam.
 */
declare function SetCamRot(cam: number, rotX: number, rotY: number, rotZ: number, rotationOrder: number): void;

declare function SetCamSplineDuration(cam: number, timeDuration: number): void;

declare function SetCamSplinePhase(cam: number, p1: number): void;

declare function SetCamSplineSmoothingStyle(cam: number, smoothingStyle: number): void;

declare function SetCanAutoVaultOnEntity(entity: number, toggle: boolean): void;

declare function SetCanClimbOnEntity(entity: number, toggle: boolean): void;

/**
 * Cheats are GTA IV cheats:
 * 0 = unknown
 * 1 = unknown (same as 0)
 * 2 = Max Health and Armor
 * 3 = Raise Wanted Level
 * 4 = Lower Wanted Level
 * 5 = unknown (does nothing)
 * 6 = Change Weather
 * 7 = Spawn Annihilator
 * 8 = Spawn NRG 900
 * 9 = Spawn FBI
 * 10 = Spawn Jetmax
 * 11 = Spawn Comet
 * 12 = Spawn Turismo
 * 13 = Spawn Cognoscenti
 * 14 = Spawn Super GT
 * 15 = Spawn Sanchez
 * Initially used in Max Payne 3, that's why we know the name.
 */
declare function SetCheatActive(cheatId: number): void;

/**
 * Sets the checkpoint color.
 */
declare function SetCheckpointRgba(checkpoint: number, red: number, green: number, blue: number, alpha: number): void;

/**
 * Sets the checkpoint icon color.
 */
declare function SetCheckpointRgba2(checkpoint: number, red: number, green: number, blue: number, alpha: number): void;

declare function SetCinematicButtonActive(p0: boolean): void;

declare function SetCinematicModeActive(p0: boolean): void;

declare function SetClockDate(day: number, month: number, year: number): void;

/**
 * SET_CLOCK_TIME(12, 34, 56);
 */
declare function SetClockTime(hour: number, minute: number, second: number): void;

declare function SetCloudHeight(height: number): void;

declare function SetCloudLayer(p0: number, p1: number, p2: number): void;

declare function SetCloudNoise(x: number, y: number, z: number): void;

/**
 * combatType can be between 0-14. See GET_COMBAT_FLOAT below for a list of possible parameters.
 */
declare function SetCombatFloat(ped: number, combatType: number, p2: number): void;

/**
 * Sets the current control context. Must be called every frame.
 * context: https://alloc8or.re/rdr3/doc/misc/input_contexts.txt
 * For more information, see common:/data/control/settings.meta
 */
declare function SetControlContext(p0: number, context: string | number): void;

/**
 * nullsub, doesn't do anything
 * Old name: _SET_CONTROL_GROUP_COLOR
 */
declare function SetControlLightEffectColor(padIndex: number, red: number, green: number, blue: number): void;

/**
 * nullsub, doesn't do anything
 */
declare function SetControlLightEffectFlashingColor(p0: number, p1: number, p2: number, p3: number): void;

declare function SetControlNormal(padIndex: number, control: string | number, amount: number): boolean;

declare function SetCoreIcon(_type: number): void;

declare function SetCreateRandomCops(toggle: boolean): void;

declare function SetCreditsActive(toggle: boolean): void;

declare function SetCurrentPedVehicleWeapon(ped: number, weaponHash: string | number): boolean;

/**
 * attachPoint:
 * enum eWeaponAttachPoint
 * {
 * WEAPON_ATTACH_POINT_INVALID = -1,
 * WEAPON_ATTACH_POINT_HAND_PRIMARY = 0,
 * WEAPON_ATTACH_POINT_HAND_SECONDARY = 1,
 * WEAPON_ATTACH_POINT_PISTOL_R = 2,
 * MAX_HAND_WEAPON_ATTACH_POINTS = 2,
 * WEAPON_ATTACH_POINT_PISTOL_L = 3,
 * WEAPON_ATTACH_POINT_KNIFE = 4,
 * WEAPON_ATTACH_POINT_LASSO = 5,
 * WEAPON_ATTACH_POINT_THROWER = 6,
 * WEAPON_ATTACH_POINT_BOW = 7,
 * WEAPON_ATTACH_POINT_BOW_ALTERNATE = 8,
 * WEAPON_ATTACH_POINT_RIFLE = 9,
 * WEAPON_ATTACH_POINT_RIFLE_ALTERNATE = 10,
 * WEAPON_ATTACH_POINT_LANTERN = 11,
 * WEAPON_ATTACH_POINT_TEMP_LANTERN = 12,
 * WEAPON_ATTACH_POINT_MELEE = 13,
 * MAX_SYNCED_WEAPON_ATTACH_POINTS = 13,
 * WEAPON_ATTACH_POINT_HIP = 14,
 * WEAPON_ATTACH_POINT_BOOT = 15,
 * WEAPON_ATTACH_POINT_BACK = 16,
 * WEAPON_ATTACH_POINT_FRONT = 17,
 * WEAPON_ATTACH_POINT_SHOULDERSLING = 18,
 * WEAPON_ATTACH_POINT_LEFTBREAST = 19,
 * WEAPON_ATTACH_POINT_RIGHTBREAST = 20,
 * WEAPON_ATTACH_POINT_LEFTARMPIT = 21,
 * WEAPON_ATTACH_POINT_RIGHTARMPIT = 22,
 * WEAPON_ATTACH_POINT_LEFTARMPIT_RIFLE = 23,
 * WEAPON_ATTACH_POINT_SATCHEL = 24,
 * WEAPON_ATTACH_POINT_LEFTARMPIT_BOW = 25,
 * WEAPON_ATTACH_POINT_RIGHT_HAND_EXTRA = 26,
 * WEAPON_ATTACH_POINT_LEFT_HAND_EXTRA = 27,
 * WEAPON_ATTACH_POINT_RIGHT_HAND_AUX = 28,
 * MAX_WEAPON_ATTACH_POINTS = 29
 * };
 */
declare function SetCurrentPedWeapon(
  ped: number,
  weaponHash: string | number,
  equipNow: boolean,
  attachPoint: number,
  p4: boolean,
  p5: boolean,
): void;

declare function SetCurrentPedWeaponByGuid(ped: number, p2: boolean, p3: boolean, p4: boolean, p5: boolean): number;

declare function SetCursorLocation(x: number, y: number): boolean;

declare function SetCustomTexturesOnObject(object: number, txdHash: string | number, p2: number, p3: number): void;

declare function SetDamping(entity: number, vertex: number, value: number): void;

/**
 * Max level is 5.
 */
declare function SetDeadeyeAbilityLevel(player: number, level: number): void;

declare function SetDeadeyeAbilityLocked(player: number, abilityType: number, toggle: boolean): void;

declare function SetDecisionMaker(ped: number, name: string | number): void;

declare function SetDisableBreaking(object: number, toggle: boolean): void;

declare function SetDisableFragDamage(object: number, toggle: boolean): void;

/**
 * nullsub, doesn't do anything
 */
declare function SetDisableRandomTrainsThisFrame(toggle: boolean): void;

declare function SetDisableSuperdummyMode(vehicle: number, p1: boolean): void;

declare function SetDisableVehicleEngineFires(vehicle: number, p1: boolean): void;

declare function SetDisableVehiclePetrolTankDamage(vehicle: number, toggle: boolean): void;

declare function SetDisableVehiclePetrolTankFires(vehicle: number, toggle: boolean): void;

/**
 * This native sets the app id for the discord rich presence implementation.
 * @param appId A valid Discord API App Id, can be generated at https://discordapp.com/developers/applications/
 */
declare function SetDiscordAppId(appId: string): void;

/**
 * Sets a clickable button to be displayed in a player's Discord rich presence.
 * @param index The button index, either 0 or 1.
 * @param label The text to display on the button.
 * @param url The URL to open when clicking the button. This has to start with `fivem://connect/` or `https://`.
 */
declare function SetDiscordRichPresenceAction(index: number, label: string, url: string): void;

/**
 * This native sets the image asset for the discord rich presence implementation.
 * @param assetName The name of a valid asset registered on Discordapp's developer dashboard. note that the asset has to be registered under the same discord API application set using the SET_DISCORD_APP_ID native.
 */
declare function SetDiscordRichPresenceAsset(assetName: string): void;

/**
 * This native sets the small image asset for the discord rich presence implementation.
 * @param assetName The name of a valid asset registered on Discordapp's developer dashboard. Note that the asset has to be registered under the same discord API application set using the SET_DISCORD_APP_ID native.
 */
declare function SetDiscordRichPresenceAssetSmall(assetName: string): void;

/**
 * This native sets the hover text of the small image asset for the discord rich presence implementation.
 * @param text Text to be displayed when hovering over small image asset. Note that you must also set a valid small image asset using the SET_DISCORD_RICH_PRESENCE_ASSET_SMALL native.
 */
declare function SetDiscordRichPresenceAssetSmallText(text: string): void;

/**
 * This native sets the hover text of the image asset for the discord rich presence implementation.
 * @param text Text to be displayed when hovering over image asset. Note that you must also set a valid image asset using the SET_DISCORD_RICH_PRESENCE_ASSET native.
 */
declare function SetDiscordRichPresenceAssetText(text: string): void;

declare function SetDispatchIdealSpawnDistance(p0: number): void;

declare function SetDispatchMaxSpawnDistance(maxSpawnDistance: number): void;

declare function SetDispatchMinSpawnDistance(minSpawnDistance: number): void;

declare function SetDraftVehicleDesiredSpeed(vehicle: number, speed: number): void;

declare function SetDriveTaskCruiseSpeed(driver: number, cruiseSpeed: number): void;

/**
 * Not implemented.
 */
declare function SetDriveTaskMaxCruiseSpeed(ped: number, maxCruiseSpeed: number): void;

declare function SetDrivebyTaskTarget(
  shootingPed: number,
  targetPed: number,
  targetVehicle: number,
  x: number,
  y: number,
  z: number,
): void;

/**
 * Navigates the specified DUI browser to a different URL.
 * @param duiObject The DUI browser handle.
 * @param url The new URL.
 */
declare function SetDuiUrl(duiObject: number, url: string): void;

declare function SetEnableBoundAnkles(ped: number, toggle: boolean): void;

/**
 * ped can not pull out a weapon when true
 */
declare function SetEnableHandcuffs(ped: number, p1: boolean, p2: boolean): void;

declare function SetEnableSpeedRestrainForWaypointRecordingLeader(p0: number, p1: number): void;

declare function SetEnableVehicleSlipstreaming(p0: boolean): void;

declare function SetEnhancedBreakFree(ped: number, p1: boolean, p2: string): boolean;

/**
 * skin - everything alpha except skin
 * Set entity alpha level. Ranging from 0 to 255 but chnages occur after every 20 percent (after every 51).
 */
declare function SetEntityAlpha(entity: number, alphaLevel: number, skin: boolean): void;

declare function SetEntityAlwaysPrerender(entity: number, toggle: boolean): void;

declare function SetEntityAnimCurrentTime(entity: number, animDict: string, animName: string, time: number): void;

declare function SetEntityAnimSpeed(entity: number, animDict: string, animName: string, speedMultiplier: number): void;

/**
 * Makes the specified entity (ped, vehicle or object) persistent. Persistent entities will not automatically be removed by the engine.
 */
declare function SetEntityAsMissionEntity(entity: number, p1: boolean, p2: boolean): void;

/**
 * Marks the specified entity (ped, vehicle or object) as no longer needed.
 * Entities marked as no longer needed, will be deleted as the engine sees fit.
 */
declare function SetEntityAsNoLongerNeeded(entity: number): void;

declare function SetEntityCanBeDamaged(entity: number, toggle: boolean): void;

declare function SetEntityCanBeDamagedByRelationshipGroup(
  entity: number,
  bCanBeDamaged: boolean,
  relGroup: number,
): void;

/**
 * Sets whether the entity can be targeted without being in line-of-sight.
 */
declare function SetEntityCanBeTargetedWithoutLos(entity: number, toggle: boolean): void;

/**
 * flagId:
 * enum eCarryingFlag
 * {
 * CARRYING_FLAG_CAN_BE_CUT_FREE = 1,
 * CARRYING_FLAG_CAN_BE_CARRIED_ON_FOOT = 2,
 * CARRYING_FLAG_CAN_BE_DROPPED = 4,
 * CARRYING_FLAG_CAN_BE_CARRIED_WHEN_DEAD = 7,
 * CARRYING_FLAG_CAN_CARRY_ANYTHING = 9,
 * CARRYING_FLAG_DISABLE_PROMPT_LOS_CHECKS = 19,
 * CARRYING_FLAG_FORCE_ALLOW_WARP_TO_SAFE_GROUND_LOCATION = 23,
 * CARRYING_FLAG_PICKUPS_IGNORE_HEIGHT_RESTRICTIONS = 26,
 * CARRYING_FLAG_CLEAN_UP_WHEN_NOT_CARRIED = 27,
 * CARRYING_FLAG_BLOCK_KNOCK_OFF_PED_VARIATIONS_FROM_CARRIABLE_INTERACTIONS = 29,
 * CARRYING_FLAG_HIT_WHEN_CARRIABLE = 31,
 * CARRYING_FLAG_DISABLE_CARRIABLE_INTERACTIONS_ON_THIS_MOUNT = 34,
 * CARRYING_FLAG_FORCE_HIDE_PROMPT_GROUP = 37,
 * };
 */
declare function SetEntityCarryingFlag(entity: number, flagId: number, value: boolean): void;

/**
 * SET_ENTITY_*
 */
declare function SetEntityCleanupByEngine(entity: number, toggle: boolean): void;

declare function SetEntityCollision(entity: number, toggle: boolean, keepPhysics: boolean): void;

declare function SetEntityCompletelyDisableCollision(entity: number, toggle: boolean, keepPhysics: boolean): void;

declare function SetEntityCoords(
  entity: number,
  xPos: number,
  yPos: number,
  zPos: number,
  xAxis: number,
  yAxis: number,
  zAxis: number,
  clearArea: boolean,
): void;

declare function SetEntityCoordsAndHeading(
  entity: number,
  xPos: number,
  yPos: number,
  zPos: number,
  heading: number,
  xAxis: number,
  yAxis: number,
  zAxis: number,
): void;

declare function SetEntityCoordsAndHeadingNoOffset(
  entity: number,
  xPos: number,
  yPos: number,
  zPos: number,
  heading: number,
  p5: boolean,
  p6: boolean,
): void;

/**
 * Axis - Invert Axis Flags
 */
declare function SetEntityCoordsNoOffset(
  entity: number,
  xPos: number,
  yPos: number,
  zPos: number,
  xAxis: boolean,
  yAxis: boolean,
  zAxis: boolean,
): void;

declare function SetEntityCustomPickupRadius(entity: number, radius: number): void;

/**
 * SET_ENTITY_*
 */
declare function SetEntityDecalsDisabled(entity: number, toggle: boolean): void;

declare function SetEntityDynamic(entity: number, toggle: boolean): void;

declare function SetEntityFadeIn(entity: number): void;

declare function SetEntityGhostedToLocalPlayer(entity: number, toggle: boolean): void;

declare function SetEntityHasGravity(entity: number, toggle: boolean): void;

declare function SetEntityHeading(entity: number, heading: number): void;

/**
 * Sets the entity's health. healthAmount sets the health value to that, and sets the maximum health core value. Setting healthAmount to 0 will kill the entity. Unclear what role p2 serves, but it's either 0 or an entity handle.
 */
declare function SetEntityHealth(entity: number, healthAmount: number, p2: number): void;

/**
 * Sets a ped or an object totally invincible. It doesn't take any kind of damage. Peds will not ragdoll on explosions.
 */
declare function SetEntityInvincible(entity: number, toggle: boolean): void;

declare function SetEntityIsTargetPriority(entity: number, p1: boolean, p2: number): void;

declare function SetEntityLoadCollisionFlag(p0: number, p1: number): void;

/**
 * LOD distance can be 0 to 0xFFFF (higher values will result in 0xFFFF) as it is actually stored as a 16-bit value (aka uint16_t).
 */
declare function SetEntityLodDist(entity: number, value: number): void;

declare function SetEntityMaxHealth(entity: number, value: number): void;

declare function SetEntityMotionBlur(entity: number, toggle: boolean): void;

declare function SetEntityNoCollisionEntity(entity1: number, entity2: number, thisFrameOnly: boolean): void;

declare function SetEntityOnlyDamagedByPlayer(entity: number, toggle: boolean): void;

declare function SetEntityOnlyDamagedByRelationshipGroup(entity: number, p1: boolean, p2: number): void;

declare function SetEntityProofs(entity: number, proofsBitset: number, p2: boolean): void;

declare function SetEntityQuaternion(entity: number, x: number, y: number, z: number, w: number): void;

declare function SetEntityRenderScorched(entity: number, toggle: boolean): void;

declare function SetEntityRotation(
  entity: number,
  pitch: number,
  roll: number,
  yaw: number,
  rotationOrder: number,
  p5?: boolean,
): void;

/**
 * Note that the third parameter(denoted as z) is "up and down" with positive numbers encouraging upwards movement.
 */
declare function SetEntityVelocity(entity: number, x: number, y: number, z: number): void;

declare function SetEntityVisible(entity: number, toggle: boolean): void;

declare function SetEntityVisibleInCutscene(entity: number, p1: boolean, p2: boolean, p3: number): void;

declare function SetEventFlagForDeletion(p0: number, p1: number, p2: number): void;

declare function SetEveryoneIgnorePlayer(player: number, toggle: boolean): void;

/**
 * ENABLE_*
 */
declare function SetExtraTimecycleModifierStrength(strength: number): void;

declare function SetFacialIdleAnimOverride(ped: number, animName: string, animDict: string): void;

/**
 * Sets whether the game should fade in after the player dies or is arrested.
 */
declare function SetFadeInAfterDeathArrest(toggle: boolean): void;

declare function SetFadeInAfterLoad(toggle: boolean): void;

declare function SetFirstPersonCamPitchRange(p0: number, p1: number): void;

/**
 * Allows Weapon-Flashlight beams to stay visible while moving. Normally it only stays on while aiming.
 * @param state On/Off
 */
declare function SetFlashLightKeepOnWhileMoving(state: boolean): void;

/**
 * Sets some in-game parameters which is used for checks is ped needs to fly through windscreen after a crash.
 * @param vehMinSpeed Vehicle minimum speed (default 35.0).
 * @param unkMinSpeed Unknown minimum speed (default 40.0).
 * @param unkModifier Unknown modifier (default 17.0).
 * @param minDamage Minimum damage (default 2000.0).
 * @return A bool indicating if parameters was set successfully.
 */
declare function SetFlyThroughWindscreenParams(
  vehMinSpeed: number,
  unkMinSpeed: number,
  unkModifier: number,
  minDamage: number,
): boolean;

/**
 * It seems to make the entity's coords mark the point from which LOD-distances are measured. In my testing, setting a vehicle as the focus entity and moving that vehicle more than 300 distance units away from the player will make the level of detail around the player go down drastically (shadows disappear, textures go extremely low res, etc). The player seems to be the default focus entity.
 */
declare function SetFocusEntity(entity: number): void;

declare function SetFocusPosAndVel(
  x: number,
  y: number,
  z: number,
  offsetX: number,
  offsetY: number,
  offsetZ: number,
): void;

declare function SetForceHdVehicle(vehicle: number, toggle: boolean): void;

declare function SetForceObjectThisFrame(x: number, y: number, z: number, p3: number): void;

declare function SetFormationPositionsTargetRadius(p0: number, p1: number): number;

declare function SetFowUpdatePlayerOverride(toggle: boolean, p1: string | number): void;

declare function SetFrontendActive(active: boolean): void;

/**
 * Note: this native was added in build 1232.56
 */
declare function SetGameLogicPaused(): void;

/**
 * Make sure to call this from the correct thread if you're using multiple threads because all other threads except the one which is calling SET_GAME_PAUSED will be paused.
 */
declare function SetGamePaused(toggle: boolean): void;

declare function SetGamePausesForStreaming(toggle: boolean): void;

declare function SetGameplayCamFollowPedThisUpdate(p0: number): void;

/**
 * Sets the camera position relative to heading in float from -360 to +360.
 * Heading is alwyas 0 in aiming camera.
 */
declare function SetGameplayCamRelativeHeading(heading: number, p1: number): void;

/**
 * Sets the camera pitch.
 * Parameters:
 * x = pitches the camera on the x axis.
 * Value2 = always seems to be hex 0x3F800000 (1.000000 float).
 */
declare function SetGameplayCamRelativePitch(x: number, Value2: number): void;

/**
 * Sets the amplitude for the gameplay (i.e. 3rd or 1st) camera to shake.
 */
declare function SetGameplayCamShakeAmplitude(amplitude: number): void;

declare function SetGameplayCoordHint(
  x: number,
  y: number,
  z: number,
  duration: number,
  blendOutDuration: number,
  blendInDuration: number,
  unk: number,
): void;

/**
 * p6 & p7 - possibly length or time
 */
declare function SetGameplayEntityHint(
  entity: number,
  xOffset: number,
  yOffset: number,
  zOffset: number,
  p4: boolean,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function SetGameplayHintAnimOffsetx(p0: number): void;

declare function SetGameplayHintAnimOffsety(p0: number): void;

declare function SetGameplayHintBaseOrbitPitchOffset(p0: number): void;

declare function SetGameplayHintFollowDistanceScalar(p0: number): void;

declare function SetGameplayHintFov(FOV: number): void;

declare function SetGameplayObjectHint(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: boolean,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function SetGameplayPedHint(
  p0: number,
  x1: number,
  y1: number,
  z1: number,
  p4: boolean,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function SetGameplayVehicleHint(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: boolean,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function SetGlobalBlockCanBeAccessed(index: number, toggle: boolean): void;

declare function SetGlobalBlockIsLoaded(index: number, toggle: boolean): void;

/**
 * nullsub, doesn't do anything
 */
declare function SetGpsActive(active: boolean): void;

declare function SetGpsCustomRouteRender(p0: boolean, p1: number, p2: number): void;

declare function SetGpsFlags(p0: number, p1: number): void;

declare function SetGpsMultiRouteRender(toggle: boolean): void;

/**
 * 0: Default
 * 1: Circle Around Leader
 * 2: Alternative Circle Around Leader
 * 3: Line, with Leader at center
 */
declare function SetGroupFormation(groupId: number, formationType: number): void;

declare function SetGroupFormationSpacing(groupId: number, p1: number, p2: number, p3: number): void;

/**
 * Sets the range at which members will automatically leave the group.
 */
declare function SetGroupSeparationRange(groupHandle: number, separationRange: number): void;

declare function SetGuardZonePosition(name: string, x: number, y: number, z: number): void;

declare function SetGuardZonePosition_2(name: string, x: number, y: number, z: number): void;

declare function SetGuarmaWorldhorizonActive(toggle: boolean): void;

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingField('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param vehicle The vehicle class to set data for.
 * @param class_ The handling class to set. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The value to set.
 */
declare function SetHandlingField(vehicle: string, class_: string, fieldName: string, value: number): void;

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingFloat('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param vehicle The vehicle class to set data for.
 * @param class_ The handling class to set. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The floating-point value to set.
 */
declare function SetHandlingFloat(vehicle: string, class_: string, fieldName: string, value: number): void;

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * @param vehicle The vehicle class to set data for.
 * @param class_ The handling class to set. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The integer value to set.
 */
declare function SetHandlingInt(vehicle: string, class_: string, fieldName: string, value: number): void;

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingVector('AIRTUG', 'CHandlingData', 'vecCentreOfMassOffset', vector3(0.0, 0.0, -5.0))`
 * @param vehicle The vehicle class to set data for.
 * @param class_ The handling class to set. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The Vector3 value to set.
 */
declare function SetHandlingVector(vehicle: string, class_: string, fieldName: string): void;

declare function SetHdArea(x: number, y: number, z: number, radius: number): void;

declare function SetHidofEnvBlurParams(p0: boolean, p1: boolean, p2: number, p3: number, p4: number, p5: number): void;

/**
 * Makes the ped ragdoll like when falling from a great height
 */
declare function SetHighFallTask(ped: number, p1: number, p2: number, p3: number): void;

declare function SetHornEnabled(vehicle: number, toggle: boolean): void;

/**
 * -1 - HORSE_ASSIST__NO_CHANGE
 * 0 - HORSE_ASSIST__MANUAL
 * 1 - HORSE_ASSIST__SEMIASSIST
 * 2 - HORSE_ASSIST__FULLASSIST
 */
declare function SetHorseAvoidanceLevel(horse: number, avoidanceLevel: number): void;

/**
 * nullsub, doesn't do anything
 */
declare function SetIgnoreNoGpsFlag(toggle: boolean): void;

declare function SetIkTarget(
  ped: number,
  ikIndex: number,
  entityLookAt: number,
  boneLookAt: number,
  offsetX: number,
  offsetY: number,
  offsetZ: number,
  p7: number,
  blendInDuration: number,
  blendOutDuration: number,
): void;

declare function SetInVehicleCamStateThisUpdate(p0: number, p1: number): void;

declare function SetIncidentUnk(incidentId: number): void;

declare function SetInputExclusive(padIndex: number, control: string | number): void;

declare function SetInstantlyEquipWeaponPickups(ped: number, toggle: boolean): void;

declare function SetInteriorPortalCornerPosition(
  interiorId: number,
  portalIndex: number,
  cornerIndex: number,
  posX: number,
  posY: number,
  posZ: number,
): void;

declare function SetInteriorPortalFlag(interiorId: number, portalIndex: number, flag: number): void;

declare function SetInteriorPortalRoomFrom(interiorId: number, portalIndex: number, roomFrom: number): void;

declare function SetInteriorPortalRoomTo(interiorId: number, portalIndex: number, roomTo: number): void;

declare function SetInteriorRoomExtents(
  interiorId: number,
  roomIndex: number,
  bbMinX: number,
  bbMinY: number,
  bbMinZ: number,
  bbMaxX: number,
  bbMaxY: number,
  bbMaxZ: number,
): void;

declare function SetInteriorRoomFlag(interiorId: number, roomIndex: number, flag: number): void;

declare function SetInteriorRoomTimecycle(interiorId: number, roomIndex: number, timecycleHash: number): void;

declare function SetLaunchParamString(params: string): void;

declare function SetLaunchParamValue(paramName: string, value: string): void;

/**
 * enum eLawRegion : Hash
 * {
 * LAW_DISPATCH_REGION_NONE = 0,
 * LAW_REGION_AGUASDULCES = 0x2F573EBE,
 * LAW_REGION_ANNESBURG = 0x68CAFD50,
 * LAW_REGION_ARMADILLO = 0xF0B90756,
 * LAW_REGION_BAYOU_NWA = 0x80966B1C,
 * LAW_REGION_BEECHERS_HOPE = 0xE2544977,
 * LAW_REGION_BIG_VALLEY = 0x3DF1559A,
 * LAW_REGION_BLACKWATER = 0x60D4886D,
 * LAW_REGION_BLACKWATER_MAINGAME = 0x66553576,
 * LAW_REGION_BLUEGILL_MARSH = 0x1D6AED8E,
 * LAW_REGION_BRAITHWAITE_MANOR = 0x3D71E7FF,
 * LAW_REGION_BUTCHER_CREEK = 0x2B3E1822,
 * LAW_REGION_CALIGA_HALL = 0xF3FE5080,
 * LAW_REGION_CORNWALL = 0xCC4672FA,
 * LAW_REGION_CUMBERLAND_FOREST = 0x81A78306,
 * LAW_REGION_EMERALD_RANCH = 0x5C069DF3,
 * LAW_REGION_FORT_WALLACE = 0x0AF25192,
 * LAW_REGION_GREAT_PLAINS = 0xB20573FA,
 * LAW_REGION_GREAT_PLAINS_MAINGAME = 0x9862FF7C,
 * LAW_REGION_GRIZZLIES = 0xBB936031,
 * LAW_REGION_GUAMA = 0x200DFF42,
 * LAW_REGION_HEARTLANDS = 0xAD14DA65,
 * LAW_REGION_LAGRAS = 0xC64808D3,
 * LAW_REGION_MACFARLANES_RANCH = 0x396A7D5F,
 * LAW_REGION_MANICATO = 0x039DB6BF,
 * LAW_REGION_MANZANITA_POST = 0x895E580E,
 * LAW_REGION_MANZANITA_POST_MAINGAME = 0x9BDD6A38,
 * LAW_REGION_OCCUPIED_CARAVAN_CAMP = 0x7EBABB01,
 * LAW_REGION_OLD_MAP_WILDERNESS = 0xCBB45950,
 * LAW_REGION_OLD_MAP_WILDERNESS_MAINGAME = 0x9F839BE7,
 * LAW_REGION_OUTLAW3 = 0x97A02FC1,
 * LAW_REGION_PRONGHORN_RANCH = 0x398E4BFC,
 * LAW_REGION_RHODES = 0x89222928,
 * LAW_REGION_RHODES_LOCKDOWN = 0xB1181671,
 * LAW_REGION_RIDGEWOOD_FARM = 0x635C3028,
 * LAW_REGION_ROANOKE_RIDGE = 0x46386A9A,
 * LAW_REGION_SAINT_DENIS = 0x5CF7C268,
 * LAW_REGION_SAINT_DENIS_RURAL = 0x4FD5331A,
 * LAW_REGION_SCARLETT_MEADOWS = 0x5FDD9717,
 * LAW_REGION_SISIKA = 0x2B6BBA52,
 * LAW_REGION_STRAWBERRY = 0xDD932620,
 * LAW_REGION_TALL_TREES = 0xD939B758,
 * LAW_REGION_TALL_TREES_MAINGAME = 0x084B17DF,
 * LAW_REGION_THIEVES_LANDING = 0x3D0C2EB6,
 * LAW_REGION_THIEVES_LANDING_MAINGAME = 0x61C450F3,
 * LAW_REGION_TUMBLEWEED = 0x0EFAF8DC,
 * LAW_REGION_VALENTINE = 0xA7A3F0C3,
 * LAW_REGION_VALENTINE_LOCKDOWN = 0x123582FE,
 * LAW_REGION_VAN_HORN = 0x619B528E,
 * LAW_REGION_WAPITI = 0x7A976E02
 * };
 */
declare function SetLawRegion(player: number, lawRegionHash: string | number, stateHash: string | number): void;

declare function SetLightsColorForEntity(entity: number, red: number, green: number, blue: number): void;

declare function SetLightsIntensityForEntity(entity: number, intensity: number): void;

/**
 * type must be less than or equal to 20
 */
declare function SetLightsTypeForEntity(entity: number, _type: number): void;

declare function SetLocalPlayerAsGhost(toggle: boolean): void;

declare function SetLocalPlayerCanCollectPortablePickups(p0: boolean): void;

/**
 * Maximum amount of pickup models that can be disallowed is 10.
 * SET_LOCAL_PLAYER_*
 */
declare function SetLocalPlayerCanUsePickupsWithThisModel(modelHash: string | number, toggle: boolean): void;

declare function SetLocalPlayerDamageMultiplierForPlayer(player: number, damageMultiplier: number): void;

declare function SetLocalPlayerInvisibleLocally(p0: boolean): void;

/**
 * // see personaabilities.meta
 * enum ePersonaAbilityFlag
 * {
 * PERSONA_CAN_AUTOESCAPE_FROM_LASSO,
 * PERSONA_HAT_BLOCKS_FIRST_HEADSHOT,
 * PERSONA_FULL_AUTO_FOR_ALL_WEAPONS,
 * PERSONA_MIGHT_LIVE_AFTER_DEADLY_DAMAGE,
 * PERSONA_IGNORE_AIM_BEFORE_FIRING_RESTRICTIONS,
 * PERSONA_DEADEYE_INSTANT_RELOAD,
 * PERSONA_USE_PHOSPHOROUS_ROUNDS,
 * PERSONA_CONT_DEADEYE_ON_TAKING_COVER,
 * PERSONA_CONT_DEADEYE_ON_RELOAD,
 * PERSONA_CONT_DEADEYE_ON_SHOOTING,
 * PERSONA_CONT_DEADEYE_ON_EXITING_AIM,
 * PERSONA_DISABLE_PLAYER_CANCELLING_DEADEYE,
 * PERSONA_CONT_DEADEYE_ON_RAGDOLL,
 * PERSONA_USE_EXPLOSIVE_ROUNDS,
 * PERSONA_EXIT_DEADEYE_ON_TAKING_DAMAGE,
 * PERSONA_CARRY_TWO_MONEYBAGS,
 * PERSONA_ABILITY_LONG_PICK_HERBS,
 * PERSONA_ABILITY_UNBREAKABLE_LASSO,
 * PERSONA_CONT_DEADEYE_ON_SPRINTING,
 * PERSONA_CANT_DEAL_HEADSHOTS,
 * PERSONA_HANGMAN,
 * PERSONA_ALLOW_DEADEYE_WITH_MELEE_WEAPONS,
 * PERSONA_ALLOW_DEADEYE_WHILE_UNARMED,
 * PERSONA_DISABLE_DEADEYE_PERFECT_ACCURACY,
 * PERSONA_CANT_DEAL_HEADSHOTS_TO_PLAYERS,
 * PERSONA_CANT_DEAL_CRITICAL_DAMAGE,
 * PERSONA_CANT_DEAL_CRITICAL_DAMAGE_TO_PLAYERS,
 * PERSONA_ALLOW_EAGLEEYE_IN_COMBAT,
 * PERSONA_CONT_EAGLEEYE_ON_SPRINT,
 * PERSONA_SUPPRESS_LENGENDARY_EAGLEEYE_TRAIL_COLOR
 * };
 */
declare function SetLocalPlayerPersonaAbilityFlag(flagId: number, toggle: boolean): void;

declare function SetLocalPlayerVisibleInCutscene(p0: number, p1: number, p2: number): void;

/**
 * lootFlag:
 * enum eLootFlag
 * {
 * LOOT_FLAG_IS_CRITICAL_LOOT_TARGET = 7,
 * LOOT_FLAG_IGNORE_WATER_CHECKS = 8,
 * LOOT_FLAG_ANIMAL_FLAGGED_FOR_TAGGING = 23,
 * };
 */
declare function SetLootingFlag(ped: number, lootFlag: number, enabled: boolean): void;

/**
 * Sets whether or not `SHUTDOWN_LOADING_SCREEN` automatically shuts down the NUI frame for the loading screen. If this is enabled,
 * you will have to manually invoke `SHUTDOWN_LOADING_SCREEN_NUI` whenever you want to hide the NUI loading screen.
 * @param manualShutdown TRUE to manually shut down the loading screen NUI.
 */
declare function SetManualShutdownLoadingScreenNui(manualShutdown: boolean): void;

/**
 * Sets values to the zoom level data by index.
 * @param index Zoom level index.
 * @param zoomScale fZoomScale value.
 * @param zoomSpeed fZoomSpeed value.
 * @param scrollSpeed fScrollSpeed value.
 * @param tilesX vTiles X.
 * @param tilesY vTiles Y.
 */
declare function SetMapZoomDataLevel(
  index: number,
  zoomScale: number,
  zoomSpeed: number,
  scrollSpeed: number,
  tilesX: number,
  tilesY: number,
): void;

declare function SetMapdatacullboxEnabled(name: string, toggle: boolean): void;

declare function SetMaxNumPortablePickupsCarriedByPlayer(modelHash: string | number, p1: number): void;

declare function SetMaxWantedLevel(maxWantedLevel: number): void;

declare function SetMaxWantedLevel_2(maxWantedLevel: number): void;

declare function SetMetapedWeariness(ped: number, weariness: number): void;

/**
 * Overrides how many real ms are equal to one game minute.
 * A setter for [`GetMillisecondsPerGameMinute`](#\_0x2F8B4D1C595B11DB).
 * @param value Milliseconds.
 */
declare function SetMillisecondsPerGameMinute(value: number): void;

declare function SetMillisecondsPerGameMinute(ms: number): void;

declare function SetMinimapFowOverrideRevealScale(scale: number, p1: string | number): void;

declare function SetMinimapFowRevealCoordinate(x: number, y: number, z: number, p3: string | number): void;

declare function SetMinimapFowRevealVolume(volume: number, p1: string | number): void;

declare function SetMinimapFowShouldUpdate(toggle: boolean, p1: string | number): void;

/**
 * Reveals the entire minimap (FOW = Fog of War)
 */
declare function SetMinimapHideFow(toggle: boolean): void;

/**
 * Sets the display info for a minimap overlay.
 * @param miniMap The minimap overlay ID.
 * @param x The X position for the overlay. This is equivalent to a game coordinate X.
 * @param y The Y position for the overlay. This is equivalent to a game coordinate Y, except that it's inverted (gfxY = -gameY).
 * @param xScale The X scale for the overlay. This is equivalent to the Flash \_xscale property, therefore 100 = 100%.
 * @param yScale The Y scale for the overlay. This is equivalent to the Flash \_yscale property.
 * @param alpha The alpha value for the overlay. This is equivalent to the Flash \_alpha property, therefore 100 = 100%.
 */
declare function SetMinimapOverlayDisplay(
  miniMap: number,
  x: number,
  y: number,
  xScale: number,
  yScale: number,
  alpha: number,
): void;

/**
 * Possible Types:
 * ```
 * 0 = Off,
 * 1 = Regular,
 * 2 = Expanded,
 * 3 = Simple,
 * ```
 * @param type Type to set the minimap to.
 */
declare function SetMinimapType(_type: number): void;

/**
 * If true, the player can't save the game.
 */
declare function SetMissionFlag(toggle: boolean): void;

declare function SetMissionName(p0: boolean, name: string): void;

declare function SetMissionName_2(p0: boolean, name: string): void;

declare function SetMissionTrainAsNoLongerNeeded(train: number, p1: boolean): void;

declare function SetMissionTrainCoords(train: number, x: number, y: number, z: number): void;

/**
 * Marks the model as no longer needed.
 */
declare function SetModelAsNoLongerNeeded(model: string | number): void;

declare function SetModelHeadlightConfiguration(
  modelHash: string | number,
  ratePerSecond: number,
  headlightRotation: number,
  invertRotation: boolean,
): void;

/**
 * Shows the cursor on screen for one frame.
 */
declare function SetMouseCursorActiveThisFrame(): void;

/**
 * Changes the mouse cursor's sprite.
 * spriteId's: https://github.com/femga/rdr3_discoveries/tree/master/graphics/HUD/cursor_sprites#readme
 */
declare function SetMouseCursorSprite(spriteId: number): void;

declare function SetMpGamerTagBigText(gamerTagId: number, _string: string): void;

declare function SetMpGamerTagColour(gamerTagId: number, colour: string | number): void;

declare function SetMpGamerTagName(gamerTagId: number, _string: string): void;

declare function SetMpGamerTagNamePosse(gamerTagId: number, text: string): void;

/**
 * Found icons:
 * SPEAKER
 * THROPY
 */
declare function SetMpGamerTagSecondaryIcon(gamerTagId: number, icon: string | number): void;

/**
 * Found icons: https://pastebin.com/xx6rEgiG
 */
declare function SetMpGamerTagTopIcon(gamerTagId: number, icon: string | number): void;

/**
 * Found types: https://pastebin.com/nYDXeUCG
 */
declare function SetMpGamerTagType(gamerTagId: number, _type: string | number): void;

/**
 * visiblity:
 * enum eUIGamertagVisibility
 * {
 * UIGAMERTAGVISIBILITY_NONE,
 * UIGAMERTAGVISIBILITY_ICON,
 * UIGAMERTAGVISIBILITY_SIMPLE,
 * UIGAMERTAGVISIBILITY_COMPLEX
 * };
 */
declare function SetMpGamerTagVisibility(gamerTagId: number, visiblity: number): void;

/**
 * Sets whether all tags should group (normal game behavior) or should remain independent and above each ped's respective head when in a vehicle.
 * @param enabled Whether tags should use normal game behavior. Default is true.
 */
declare function SetMpGamerTagsUseVehicleBehavior(enabled: boolean): void;

/**
 * Sets the maximum distance at which all tags will be visible and which beyond will not be displayed. Distance is measured from the camera position.
 * @param distance The visible distance. Default is 100.0f.
 */
declare function SetMpGamerTagsVisibleDistance(distance: number): void;

declare function SetNetworkIdAlwaysExistsForPlayer(netId: number, player: number, toggle: boolean): void;

declare function SetNetworkIdExistsOnAllMachines(netId: number, toggle: boolean): void;

declare function SetNetworkIdVisibleInCutscene(p0: number, p1: number, p2: number, p3: number): void;

declare function SetNetworkRespotTimer(entity: number, timer: number, p2: boolean): void;

declare function SetNoLoadingScreen(toggle: boolean): void;

declare function SetNuiFocus(hasFocus: boolean, hasCursor: boolean): void;

declare function SetNuiFocusKeepInput(keepInput: boolean): void;

declare function SetObjectAllowLowLodBuoyancy(object: number, toggle: boolean): void;

/**
 * This is an alias of SET_ENTITY_AS_NO_LONGER_NEEDED.
 */
declare function SetObjectAsNoLongerNeeded(object: number): void;

declare function SetObjectBurnIntensity(object: number, intensity: number): void;

/**
 * Seems to mostly have effect on wood-made objects https://imgur.com/a/32oQvOn
 */
declare function SetObjectBurnLevel(object: number, burnLevel: number, affectAsh: boolean): void;

declare function SetObjectBurnOpacity(object: number, opacity: number): void;

/**
 * p2 is usually the same as speed parameter
 */
declare function SetObjectBurnSpeed(object: number, speed: number, p2: number): void;

/**
 * Adjust the physics parameters of a prop, or otherwise known as "object". This is useful for simulated gravity.
 * Other parameters seem to be unknown.
 * p2: seems to be weight and gravity related. Higher value makes the obj fall faster. Very sensitive?
 * p3: seems similar to p2
 * p4: makes obj fall slower the higher the value
 * p5: similar to p4
 */
declare function SetObjectPhysicsParams(
  object: number,
  weight: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  gravity: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  buoyancy: number,
): void;

declare function SetObjectTargettable(object: number, targettable: boolean): void;

declare function SetObjectTargettable_2(object: number, targettable: boolean): void;

declare function SetObjectTextureVariation(object: number, textureVariation: number): void;

declare function SetOverrideWeather(weatherType: string | number): void;

declare function SetPadShake(padIndex: number, duration: number, frequency: number): void;

declare function SetParkedVehicleDensityMultiplierThisFrame(multiplier: number): void;

declare function SetParticleFxBulletImpactScale(scale: number): void;

declare function SetParticleFxLoopedAlpha(ptfxHandle: number, alpha: number): void;

declare function SetParticleFxLoopedColour(ptfxHandle: number, r: number, g: number, b: number, p4: boolean): void;

declare function SetParticleFxLoopedEvolution(
  ptfxHandle: number,
  propertyName: string,
  amount: number,
  noNetwork: boolean,
): void;

declare function SetParticleFxLoopedFarClipDist(ptfxHandle: number, range: number): void;

declare function SetParticleFxLoopedOffsets(
  ptfxHandle: number,
  x: number,
  y: number,
  z: number,
  rotX: number,
  rotY: number,
  rotZ: number,
): void;

declare function SetParticleFxLoopedScale(ptfxHandle: number, scale: number): void;

declare function SetParticleFxNonLoopedAlpha(alpha: number): void;

declare function SetParticleFxNonLoopedColour(r: number, g: number, b: number): void;

declare function SetParticleFxNonLoopedEmitterScale(p0: number, p1: number, p2: number): void;

declare function SetParticleFxOverride(oldAsset: string, newAsset: string): void;

declare function SetPausePedWritheBleedout(ped: number, toggle: boolean): void;

declare function SetPausemapCoordsWithRadius(x: number, y: number, z: number, radius: number): void;

/**
 * Enables/disables a kind of 'shiny' effect on metals.
 */
declare function SetPearlescentFxEnabled(object: number, toggle: boolean): void;

/**
 * accuracy = 0-100, 100 being perfectly accurate
 */
declare function SetPedAccuracy(ped: number, accuracy: number): void;

declare function SetPedAllWeaponsVisibility(ped: number, visible: boolean): void;

declare function SetPedAmmo(ped: number, weaponHash: string | number, ammo: number): void;

declare function SetPedAmmoByType(ped: number, ammoType: string | number, ammo: number): void;

declare function SetPedAmmoToDrop(ped: number, p1: number, p2: number): void;

/**
 * Turns the desired ped into a cop. If you use this on the player ped, you will become almost invisible to cops dispatched for you. You will also report your own crimes, get a generic cop voice, get a cop-vision-cone on the radar, and you will be unable to shoot at other cops. Toggling ped as "false" has no effect; you must change p0's ped model to disable the effect.
 */
declare function SetPedAsCop(ped: number, toggle: boolean): void;

declare function SetPedAsGroupLeader(ped: number, groupId: number, p2: boolean): void;

declare function SetPedAsGroupMember(ped: number, groupId: number): void;

/**
 * This is an alias of SET_ENTITY_AS_NO_LONGER_NEEDED.
 */
declare function SetPedAsNoLongerNeeded(ped: number): void;

declare function SetPedAsSaddleHorseForPlayer(player: number, mount: number): void;

declare function SetPedAsTempPlayerHorse(player: number, horse: number): boolean;

declare function SetPedBlackboardBool(ped: number, variableName: string, value: boolean, p3: number): void;

declare function SetPedBlackboardFloat(ped: number, variableName: string, value: number, p3: number): void;

/**
 * p1:
 * BodyPartChained
 * OverloadMostInjuredBodyPart
 * p2:
 * LeftLeg
 * Legs
 * RightArm
 */
declare function SetPedBlackboardHash(ped: number, variableName: string, value: string, p3: number): void;

declare function SetPedBlackboardInt(ped: number, variableName: string, value: number, p3: number): void;

declare function SetPedBodyComponent(ped: number, hash: string | number): void;

/**
 * brawlingStyle:
 * enum eBrawlingStyle : Hash
 * {
 * BS_AI = 0x802C604D,
 * BS_AI_BARBRAWL = 0x4FF5F0C7,
 * BS_AI_DEFENSIVE = 0xD888F2FD,
 * BS_AI_MOONSHINE_BARBRAWL = 0xA01B433A,
 * BS_ALLIGATOR = 0x7A5548ED,
 * BS_ALLIGATOR_LARGE = 0x368EC7CB,
 * BS_ALLY = 0x69C76C14,
 * BS_ANIMAL = 0xD777C754,
 * BS_BADGER = 0x7E7C3F53,
 * BS_BEAR = 0x0BC66E35,
 * BS_BEAVER = 0x4E313783,
 * BS_BOAR = 0x176A5831,
 * BS_BOUNTY_HUNTER = 0x3900654C,
 * BS_BRUISER = 0x4514DB61,
 * BS_BULL = 0x4E50C5D2,
 * BS_COUGAR = 0x9DAA7CCB,
 * BS_COW = 0xB0E91295,
 * BS_COYOTE = 0xA448EB69,
 * BS_DEER = 0xA781E6B3,
 * BS_DOG = 0x5A4155C4,
 * BS_ELK = 0x408697F0,
 * BS_FEMALE = 0x6A3BB2C2,
 * BS_FEMALE_STRONG = 0x4DAFDD84,
 * BS_GANGUP = 0xD0CECFF2,
 * BS_GOAT = 0x078E649F,
 * BS_HORSE = 0xF6B775F3,
 * BS_MICAH_FINALE = 0x1F0BB27A,
 * BS_MOOSE = 0x968917AB,
 * BS_MUSKRAT = 0x1EDC33AC,
 * BS_NO_MELEE = 0x25B5F931,
 * BS_PIG = 0x22EAD110,
 * BS_PLAYER = 0x78BAEF07,
 * BS_PLAYER_FINALE = 0xF9E77D2D,
 * BS_PLAYER_MOONSHINER = 0x687BF19F,
 * BS_PLAYER_WINTER1 = 0x3C6A802F,
 * BS_QUICK = 0xC4CABB1B,
 * BS_RACCOON = 0x505F8917,
 * BS_SHEEP = 0x6827CCCF,
 * BS_SNAKE = 0x82BEBC4B,
 * BS_TIMID = 0x431AEF77,
 * BS_WOLF = 0xA8F023D4
 * };
 */
declare function SetPedBrawlingStyle(ped: number, brawlingStyle: string | number): void;

declare function SetPedCanArmIk(ped: number, toggle: boolean): void;

declare function SetPedCanBeIncapacitated(ped: number, toggle: boolean): void;

/**
 * state:
 * enum eKnockOffVehicle
 * {
 * KNOCKOFFVEHICLE_DEFAULT,
 * KNOCKOFFVEHICLE_NEVER,
 * KNOCKOFFVEHICLE_EASY,
 * KNOCKOFFVEHICLE_HARD
 * };
 */
declare function SetPedCanBeKnockedOffVehicle(ped: number, state: number): void;

declare function SetPedCanBeTargetted(ped: number, toggle: boolean): void;

declare function SetPedCanBeTargettedByPlayer(ped: number, player: number, toggle: boolean): void;

declare function SetPedCanBeTargettedByTeam(ped: number, team: number, toggle: boolean): void;

declare function SetPedCanHeadIk(ped: number, toggle: boolean): void;

declare function SetPedCanLegIk(ped: number, toggle: boolean): void;

declare function SetPedCanPlayAmbientAnims(ped: number, toggle: boolean): void;

declare function SetPedCanPlayAmbientBaseAnims(ped: number, toggle: boolean): void;

declare function SetPedCanPlayGestureAnims(p0: number, p1: number, p2: number): void;

declare function SetPedCanRagdoll(ped: number, toggle: boolean): void;

declare function SetPedCanRagdollFromPlayerImpact(ped: number, toggle: boolean): void;

/**
 * This only will teleport the ped to the group leader if the group leader teleports (sets coords).
 * Only works in singleplayer
 */
declare function SetPedCanTeleportToGroupLeader(pedHandle: number, groupHandle: number, toggle: boolean): void;

declare function SetPedCanTorsoIk(ped: number, toggle: boolean): void;

declare function SetPedCanTorsoReactIk(ped: number, p1: boolean): void;

declare function SetPedCanUseAutoConversationLookat(ped: number, toggle: boolean): void;

/**
 * Overrides the ped's collision capsule radius for the current tick.
 * Must be called every tick to be effective.
 * Setting this to 0.001 will allow warping through some objects.
 */
declare function SetPedCapsule(ped: number, value: number): void;

declare function SetPedClothPackageIndex(p0: number, p1: number): void;

/**
 * abilityLevel:
 * enum eCombatAbilityLevel
 * {
 * CAL_POOR,
 * CAL_AVERAGE,
 * CAL_PROFESSIONAL
 * };
 */
declare function SetPedCombatAbility(ped: number, abilityLevel: number): void;

/**
 * attributeIndex: https://alloc8or.re/rdr3/doc/enums/eCombatAttribute.txt
 */
declare function SetPedCombatAttributes(ped: number, attributeIndex: number, enabled: boolean): void;

/**
 * 0 - Stationary (Will just stand in place)
 * 1 - Defensive (Will try to find cover and very likely to blind fire)
 * 2 - Offensive (Will attempt to charge at enemy but take cover as well)
 * 3 - Suicidal Offensive (Will try to flank enemy in a suicidal attack)
 */
declare function SetPedCombatMovement(ped: number, combatMovement: number): void;

/**
 * range:
 * enum eCombatRange
 * {
 * CR_NEAR,
 * CR_MEDIUM,
 * CR_FAR,
 * CR_VERY_FAR
 * };
 */
declare function SetPedCombatRange(ped: number, range: number): void;

/**
 * flagId: https://alloc8or.re/rdr3/doc/enums/ePedScriptConfigFlags.txt
 */
declare function SetPedConfigFlag(ped: number, flagId: number, value: boolean): void;

declare function SetPedCrouchMovement(ped: number, state: boolean, p2: number, immediately: boolean): void;

declare function SetPedCurrentWeaponCockedState(ped: number, p1: number): void;

declare function SetPedCurrentWeaponVisible(
  ped: number,
  visible: boolean,
  deselectWeapon: boolean,
  p3: boolean,
  p4: boolean,
): void;

/**
 * damageCleanliness: see _GET_PED_DAMAGE_CLEANLINESS
 */
declare function SetPedDamageCleanliness(ped: number, damageCleanliness: number): void;

declare function SetPedDamaged(ped: number, damaged: boolean): void;

declare function SetPedDecomposed(ped: number, toggle: boolean): void;

declare function SetPedDefensiveAreaDirection(ped: number, p1: number, p2: number, p3: number, p4: boolean): void;

declare function SetPedDefensiveAreaVolume(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function SetPedDesiredHeading(ped: number, heading: number): void;

declare function SetPedDesiredMoveBlendRatio(ped: number, p1: number): void;

declare function SetPedDropsInventoryWeapon(
  ped: number,
  weaponHash: string | number,
  xOffset: number,
  yOffset: number,
  zOffset: number,
  ammoCount: number,
): void;

declare function SetPedDropsWeaponsWhenDead(ped: number, toggle: boolean): void;

declare function SetPedFaceFeature(ped: number, index: number, value: number): void;

declare function SetPedFiringPattern(ped: number, patternHash: string | number): void;

/**
 * attributeFlags:
 * enum eFleeAttribute
 * {
 * FA_FORCE_EXIT_VEHICLE = (1 << 16),
 * FA_DISABLE_MOUNT_USAGE = (1 << 20),
 * FA_DISABLE_ENTER_VEHICLES = (1 << 22),
 * };
 */
declare function SetPedFleeAttributes(ped: number, attributeFlags: number, enable: boolean): void;

declare function SetPedGestureGroup(p0: number, p1: number, p2: number): void;

declare function SetPedGravity(ped: number, toggle: boolean): void;

declare function SetPedGroupMemberPassengerIndex(ped: number, index: number): void;

declare function SetPedHeadshotDamageMultiplier(ped: number, multiplier: number): void;

/**
 * configHash: see pedhealth.meta
 */
declare function SetPedHealthConfig(ped: number, configHash: string | number): void;

declare function SetPedHearingRange(ped: number, value: number): void;

declare function SetPedHighlyPerceptive(ped: number, toggle: boolean): void;

declare function SetPedIdRange(ped: number, value: number): void;

declare function SetPedIncapacitationFlags(ped: number, flags: number): void;

declare function SetPedIncapacitationModifiers(
  ped: number,
  canBeIncapacitated: boolean,
  threshold: number,
  bleedoutTime: number,
  p4: number,
): void;

declare function SetPedInfiniteAmmo(ped: number, toggle: boolean, weaponHash: string | number): void;

declare function SetPedInfiniteAmmoClip(ped: number, toggle: boolean): void;

/**
 * Ped: The ped to warp.
 * vehicle: The vehicle to warp the ped into.
 * seatIndex: see CREATE_PED_INSIDE_VEHICLE
 */
declare function SetPedIntoVehicle(ped: number, vehicle: number, seatIndex: number): void;

declare function SetPedInventoryWeaponAmmoType(ped: number, ammoHash: string | number): number;

declare function SetPedIsDrunk(ped: number, toggle: boolean): void;

declare function SetPedKeepTask(ped: number, toggle: boolean): void;

declare function SetPedLassoHogtieFlag(ped: number, flagId: number, value: boolean): void;

declare function SetPedLegIkMode(ped: number, mode: number): void;

declare function SetPedLodMultiplier(ped: number, multiplier: number): void;

/**
 * Sets the maximum health of a ped.
 */
declare function SetPedMaxHealth(ped: number, value: number): void;

declare function SetPedMaxMoveBlendRatio(ped: number, value: number): void;

declare function SetPedMaxTimeInWater(ped: number, value: number): void;

declare function SetPedMaxTimeUnderwater(ped: number, value: number): void;

declare function SetPedMinMoveBlendRatio(ped: number, value: number): void;

declare function SetPedModelIsSuppressed(ped: number, toggle: boolean): void;

declare function SetPedMoney(ped: number, amount: number): void;

declare function SetPedMoveAnimsBlendOut(ped: number): void;

/**
 * Min: 0.0f
 * Max: 1.15f
 */
declare function SetPedMoveRateOverride(ped: number, value: number): void;

/**
 * nullsub, doesn't do anything
 */
declare function SetPedNameDebug(ped: number, name: string): void;

/**
 * The distance between these points, is the diagonal of a box (remember it's 3D).
 */
declare function SetPedNonCreationArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;

declare function SetPedOffTransportSeat(ped: number, flags: number): void;

/**
 * seat: see CREATE_PED_INSIDE_VEHICLE
 */
declare function SetPedOnTransportSeat(ped: number, transportEntity: number, seat: number, flags: number): void;

declare function SetPedOntoMount(ped: number, mount: number, seatIndex: number, p3: boolean): void;

/**
 * Sets the outfit preset for the ped. The presetId is an index which determines its preset outfit. p2 is always false.
 */
declare function SetPedOutfitPreset(ped: number, presetId: number, p2: boolean): void;

declare function SetPedOwnsAnimal(ped: number, animal: number, p2: boolean): void;

declare function SetPedOwnsVehicle(ped: number, vehicle: number): void;

declare function SetPedPanicExitScenario(p0: number, p1: number, p2: number, p3: number): number;

declare function SetPedPathAvoidFire(ped: number, avoidFire: boolean): void;

declare function SetPedPathCanDropFromHeight(ped: number, toggle: boolean): void;

declare function SetPedPathCanUseClimbovers(ped: number, toggle: boolean): void;

declare function SetPedPathCanUseLadders(ped: number, toggle: boolean): void;

declare function SetPedPathClimbCostModifier(ped: number, modifier: number): void;

declare function SetPedPathDeepSnowCostModifier(ped: number, modifier: number): void;

declare function SetPedPathFoliageCostModifier(ped: number, modifier: number): void;

declare function SetPedPathMayEnterDeepWater(ped: number, mayEnterDeepWater: boolean): void;

declare function SetPedPathMayEnterWater(ped: number, mayEnterWater: boolean): void;

declare function SetPedPathPreferToAvoidWater(ped: number, avoidWater: boolean, p2: number): void;

declare function SetPedPathsBackToOriginal(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function SetPedPathsInArea(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
  unknown: boolean,
  p7: number,
): void;

declare function SetPedPromptName(ped: number, name: string): void;

declare function SetPedPromptNameFromGxtEntry(ped: number, gxtEntryHash: string | number): void;

/**
 * quality: see _GET_PED_QUALITY
 */
declare function SetPedQuality(ped: number, quality: number): void;

declare function SetPedRagdollForceFall(ped: number): void;

/**
 * Causes Ped to ragdoll on collision with any object (e.g Running into trashcan). If applied to player you will sometimes trip on the sidewalk.
 */
declare function SetPedRagdollOnCollision(p0: number, p1: number, p2: number): void;

declare function SetPedRandomComponentVariation(ped: number, p1: number): void;

declare function SetPedRelationshipGroupDefaultHash(ped: number, hash: string | number): void;

declare function SetPedRelationshipGroupHash(ped: number, hash: string | number): void;

declare function SetPedResetFlag(ped: number, flagId: number, doReset: boolean): void;

declare function SetPedScale(ped: number, scale: number): void;

/**
 * 0.0 - 1.0
 * Modifies the "scent line" on the ped's body when using Eagle Eye.
 */
declare function SetPedScent(ped: number, scent: number): void;

declare function SetPedSeeingRange(ped: number, value: number): void;

/**
 * shootRate 0-1000
 */
declare function SetPedShootRate(ped: number, shootRate: number): void;

/**
 * lookIntensity: see SET_PED_SHOULD_PLAY_FLEE_SCENARIO_EXIT
 */
declare function SetPedShouldPlayCombatScenarioExit(
  ped: number,
  x: number,
  y: number,
  z: number,
  lookIntensity: number,
): boolean;

declare function SetPedShouldPlayDirectedScenarioExit(ped: number, x: number, y: number, z: number): boolean;

/**
 * lookIntensity: see SET_PED_SHOULD_PLAY_FLEE_SCENARIO_EXIT
 */
declare function SetPedShouldPlayEmotionalScenarioExit(
  ped: number,
  x: number,
  y: number,
  z: number,
  lookIntensity: number,
  p5: boolean,
): boolean;

/**
 * lookIntensity:
 * 0 - REACT_LOOK_NONE
 * 1 - REACT_LOOK_LOW
 * 2 - REACT_LOOK_MEDIUM
 * 3 - REACT_LOOK_HIGH
 */
declare function SetPedShouldPlayFleeScenarioExit(
  ped: number,
  x: number,
  y: number,
  z: number,
  lookIntensity: number,
): boolean;

declare function SetPedShouldPlayImmediateScenarioExit(ped: number): void;

declare function SetPedShouldPlayNormalScenarioExit(ped: number): void;

/**
 * lookIntensity: see SET_PED_SHOULD_PLAY_FLEE_SCENARIO_EXIT
 */
declare function SetPedShouldPlayQuickScenarioExit(
  ped: number,
  x: number,
  y: number,
  z: number,
  lookIntensity: number,
  p5: boolean,
): boolean;

declare function SetPedSphereDefensiveArea(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

/**
 * Not implemented.
 */
declare function SetPedStealthMovement(ped: number, p1: number, p2: number, p3: number): void;

declare function SetPedSweat(ped: number, sweat: number): void;

declare function SetPedTargetLossResponse(ped: number, responseType: number): void;

declare function SetPedToInformRespectedFriends(ped: number, radius: number, maxFriends: number): void;

/**
 * Old name: _SET_PED_DAMAGE_MODIFIER
 */
declare function SetPedToPlayerWeaponDamageModifier(ped: number, damageModifier: number): void;

declare function SetPedToRagdoll(
  ped: number,
  time1: number,
  time2: number,
  ragdollType?: number,
  p4?: boolean,
  p5?: boolean,
  p6?: boolean,
): boolean;

declare function SetPedToRagdollWithFall(
  ped: number,
  time: number,
  p2: number,
  ragdollType: number,
  x: number,
  y: number,
  z: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
): boolean;

declare function SetPedTrailEffect(ped: number, p1: boolean, p2: number): void;

/**
 * Doesn't actually return anything.
 */
declare function SetPedUseHorseMapCollision(ped: number, toggle: boolean): number;

declare function SetPedUsingActionMode(ped: number, p1: boolean, p2: number, action: string): void;

declare function SetPedVisualFieldCenterAngle(ped: number, angle: number): void;

declare function SetPedVisualFieldMaxAngle(ped: number, value: number): void;

declare function SetPedVisualFieldMinAngle(ped: number, value: number): void;

declare function SetPedVisualFieldPeripheralRange(ped: number, range: number): void;

declare function SetPedWaypointRouteOffset(p0: number, p1: number, p2: number, p3: number): number;

declare function SetPedWeaponAmmoType(ped: number, weaponHash: string | number, ammoHash: string | number): void;

/**
 * attachPoint: see SET_CURRENT_PED_WEAPON
 */
declare function SetPedWeaponAttachPointVisibility(ped: number, attachPoint: number, visible: boolean): void;

/**
 * combined with PED::SET_PED_WETNESS_HEIGHT(), this native makes the ped drenched in water up to the height specified in the other function
 */
declare function SetPedWetnessEnabledThisFrame(ped: number): void;

/**
 * It adds the wetness level to the player clothing/outfit. As if player just got out from water surface.
 */
declare function SetPedWetnessHeight(ped: number, height: number): void;

declare function SetPedWoundEffect(
  ped: number,
  p1: number,
  boneId: number,
  offsetZ: number,
  offsetX: number,
  offsetY: number,
  bloodFountainUpDown: number,
  bloodFountainForwardBack: number,
  bloodFountainLeftRight: number,
  bloodFountainPulse: number,
): void;

declare function SetPickupDoNotAutoPlaceOnGround(pickupObject: number): void;

declare function SetPickupGenerationRangeMultiplier(multiplier: number): void;

declare function SetPickupHiddenWhenUncollectable(p0: number, p1: number): void;

/**
 * https://imgur.com/a/I2swSDJ
 * Old name: _SET_PICKUP_OBJECT_GLOW_ENABLED
 */
declare function SetPickupLight(object: number, toggle: boolean): void;

declare function SetPickupNotLootable(p0: number, p1: number): void;

declare function SetPickupParticleFxHighlight(p0: number, p1: number): void;

declare function SetPickupParticleFxSpawn(p0: number, p1: number): void;

declare function SetPickupRegenerationTime(pickup: number, duration: number): void;

declare function SetPickupUncollectable(p0: number, p1: number): void;

declare function SetPlaybackSpeed(vehicle: number, speed: number): void;

declare function SetPlayerBitAtIndex(bitIndex: number): number;

/**
 * Sets whether this player can be hassled by gangs.
 */
declare function SetPlayerCanBeHassledByGangs(player: number, toggle: boolean): void;

declare function SetPlayerCanMercyKill(player: number, toggle: boolean): void;

/**
 * Sets whether this player can take cover.
 */
declare function SetPlayerCanUseCover(player: number, toggle: boolean): void;

declare function SetPlayerClothPinFrames(ped: number, p1: number): void;

declare function SetPlayerControl(player: number, toggle: boolean, flags: number, p3: boolean): void;

declare function SetPlayerForcedAim(player: number, toggle: boolean, ped: number, p3: number, p4: boolean): void;

declare function SetPlayerHealthRechargeMultiplier(player: number, regenRate: number): void;

/**
 * Simply sets you as invincible (Health will not deplete).
 * Use 0x733A643B5B0C53C1 instead if you want Ragdoll enabled, which is equal to:
 * *(DWORD *)(playerPedAddress + 0x188) |= (1 << 9);
 */
declare function SetPlayerInvincible(player: number, toggle: boolean): void;

declare function SetPlayerInvisibleLocally(player: number, toggle: boolean): void;

declare function SetPlayerLockon(player: number, toggle: boolean): void;

/**
 * Affects the range of auto aim target.
 */
declare function SetPlayerLockonRangeOverride(player: number, range: number): void;

declare function SetPlayerMayNotEnterAnyVehicle(player: number): void;

declare function SetPlayerMayOnlyEnterThisVehicle(player: number, vehicle: number): void;

declare function SetPlayerMeleeWeaponDamageModifier(player: number, modifier: number): void;

/**
 * Make sure to request the model first and wait until it has loaded.
 */
declare function SetPlayerModel(player: number, modelHash: string | number, p2: boolean): void;

declare function SetPlayerNoiseMultiplier(player: number, multiplier: number): void;

declare function SetPlayerOwnsVehicle(player: number, vehicle: number): void;

declare function SetPlayerPedQuickSwapWeaponByGuid(ped: number, p1: number, p2: number): void;

declare function SetPlayerSimulateAiming(player: number, toggle: boolean): void;

declare function SetPlayerSneakingNoiseMultiplier(player: number, multiplier: number): void;

declare function SetPlayerStaminaRechargeMultiplier(player: number, multiplier: number): void;

/**
 * the status of default voip system. It affects on `NETWORK_IS_PLAYER_TALKING` and `mp_facial` animation.
 * This function doesn't need to be called every frame, it works like a switcher.
 * @param player The target player.
 * @param state Overriding state.
 */
declare function SetPlayerTalkingOverride(player: number, state: boolean): void;

/**
 * Sets your targeting mode.
 * 0 = Traditional GTA
 * 1 = Assisted Aiming
 * 2 = Free Aim
 */
declare function SetPlayerTargetingMode(targetMode: number): void;

/**
 * Sets the player's team.
 */
declare function SetPlayerTeam(player: number, team: number, bRestrictToThisScript: boolean): void;

declare function SetPlayerVisibleLocally(player: number, toggle: boolean): void;

/**
 * nullsub, doesn't do anything
 */
declare function SetPlayerWantedLevel(player: number, wantedLevel: number, disableNoMission: boolean): void;

/**
 * This modifies the damage value of your weapon. Whether it is a multiplier or base damage is unknown.
 */
declare function SetPlayerWeaponDamageModifier(player: number, modifier: number): void;

declare function SetPlayerWeaponDefenseModifier(player: number, modifier: number): void;

declare function SetPlayerWeaponTypeDamageModifier(
  player: number,
  weaponHash: string | number,
  damageModifier: number,
): void;

/**
 * If toggle is set to false:
 * The police won't be shown on the (mini)map
 * If toggle is set to true:
 * The police will be shown on the (mini)map
 */
declare function SetPoliceRadarBlips(toggle: boolean): void;

declare function SetPopControlSphereThisFrame(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function SetPopulationBudgetMultiplier(fBudgetMultiplier: number): void;

declare function SetPopzonePopulationSet(popZone: number, populationSetHash: string | number): void;

declare function SetPortalSettingsOverride(p0: string, p1: string): void;

declare function SetPropSetAsNoLongerNeeded(propSet: number): void;

declare function SetPropSetVisible(propSet: number, toggle: boolean): void;

declare function SetRadarAsExteriorThisFrame(): void;

declare function SetRadarZoom(zoomLevel: number): void;

/**
 * flags:
 * enum eRagdollBlockingFlags
 * {
 * RBF_BULLET_IMPACT = (1 << 0),
 * RBF_VEHICLE_IMPACT = (1 << 1),
 * RBF_FIRE = (1 << 2),
 * RBF_ELECTROCUTION = (1 << 3),
 * RBF_PLAYER_IMPACT = (1 << 4),
 * RBF_EXPLOSION = (1 << 5),
 * RBF_IMPACT_OBJECT = (1 << 6),
 * RBF_MELEE = (1 << 7),
 * RBF_RUBBER_BULLET = (1 << 8),
 * RBF_FALLING = (1 << 9),
 * RBF_WATER_JET = (1 << 10),
 * RBF_DROWNING = (1 << 11),
 * RBF_0x9F52E2C4 = (1 << 12),
 * RBF_PLAYER_BUMP = (1 << 13),
 * RBF_PLAYER_RAGDOLL_BUMP = (1 << 14),
 * RBF_PED_RAGDOLL_BUMP = (1 << 15),
 * RBF_VEHICLE_GRAB = (1 << 16),
 * RBF_SMOKE_GRENADE = (1 << 17),
 * RBF_HORSE_BUMP = (1 << 18),
 * RBF_ACTIVATE_ON_COLLISION = (1 << 19)
 * };
 */
declare function SetRagdollBlockingFlags(ped: number, flags: number): void;

declare function SetRainLevel(intensity: number): void;

declare function SetRandomBoats(toggle: boolean): void;

/**
 * If the parameter is true, sets the random event flag to true, if the parameter is false, the function does nothing at all.
 * Does nothing if the mission flag is set.
 */
declare function SetRandomEventFlag(toggle: boolean): void;

declare function SetRandomOutfitVariation(ped: number, p1: boolean): void;

declare function SetRandomSeed(seed: number): void;

declare function SetRandomTrains(toggle: boolean): void;

declare function SetRandomVehicleDensityMultiplierThisFrame(multiplier: number): void;

declare function SetRandomWeatherType(p0: boolean, p1: boolean): void;

declare function SetRelationshipBetweenGroups(
  relationship: number,
  group1: string | number,
  group2: string | number,
): void;

/**
 * A setter for [GET_RESOURCE_KVP_STRING](#\_0x5240DA5A).
 * @param key The key to set
 * @param value The value to write
 */
declare function SetResourceKvp(key: string, value: string): void;

/**
 * A setter for [GET_RESOURCE_KVP_FLOAT](#\_0x35BDCEEA).
 * @param key The key to set
 * @param value The value to write
 */
declare function SetResourceKvpFloat(key: string, value: number): void;

/**
 * A setter for [GET_RESOURCE_KVP_INT](#\_0x557B586A).
 * @param key The key to set
 * @param value The value to write
 */
declare function SetResourceKvpInt(key: string, value: number): void;

/**
 * Sets the player's rich presence detail state for social platform providers to a specified string.
 * @param presenceState The rich presence string to set.
 */
declare function SetRichPresence(presenceState: string): void;

declare function SetRoadsBackToOriginal(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function SetRoadsBackToOriginalInAngledArea(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function SetRoadsInAngledArea(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function SetRoadsInArea(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function SetRoadsInVolume(volume: number, p1: boolean, p2: boolean, p3: boolean): void;

/**
 * Set's the ropes length change rate, which is the speed that rope should wind if started.
 * @param rope The rope to set the length change rate for.
 * @param lengthChangeRate The rope's new length change rate.
 */
declare function SetRopeLengthChangeRate(rope: number, lengthChangeRate: number): void;

/**
 * Toggles whether the usage of [ADD_ROPE](#\_0xE832D760399EB220) should create an underlying CNetworkRopeWorldStateData. By default this is set to false.
 * @param shouldCreate Whether to create an underlying network world state
 */
declare function SetRopesCreateNetworkWorldState(shouldCreate: boolean): void;

declare function SetRuntimeTextureArgbData(tex: number, buffer: string, length: number): boolean;

/**
 * Sets a pixel in the specified runtime texture. This will have to be committed using `COMMIT_RUNTIME_TEXTURE` to have any effect.
 * @param tex A handle to the runtime texture.
 * @param x The X position of the pixel to change.
 * @param y The Y position of the pixel to change.
 * @param r The new R value (0-255).
 * @param g The new G value (0-255).
 * @param b The new B value (0-255).
 * @param a The new A value (0-255).
 */
declare function SetRuntimeTexturePixel(
  tex: number,
  x: number,
  y: number,
  r: number,
  g: number,
  b: number,
  a: number,
): void;

declare function SetScenarioAnimalDensityMultiplierThisFrame(multiplier: number): void;

declare function SetScenarioGroupEnabled(scenarioGroup: string, toggle: boolean): void;

declare function SetScenarioGroupEnabledHash(scenarioGroup: string | number, toggle: boolean): void;

declare function SetScenarioHumanDensityMultiplierThisFrame(multiplier: number): void;

declare function SetScenarioPedDensityMultiplierThisFrame(multiplier: number): void;

/**
 * Sets the scenario ped density to the given config.
 * Valid configs:
 * - BLACKWATER
 * - DEFAULT
 * - NEWBORDEAUX
 * - RHODES
 * - STRAWBERRY
 * - TUMBLEWEED
 * - VALENTINE
 * - VANHORN
 * See common/data/ai/densityscoringconfigs.meta for more information.
 */
declare function SetScenarioPedDensityThisFrame(configHash: string | number): void;

declare function SetScenarioPedRangeMultiplierThisFrame(multiplier: number): void;

declare function SetScenarioPointActive(scenario: number, active: boolean): void;

declare function SetScenarioPointCoords(scenario: number, xPos: number, yPos: number, zPos: number, p4: boolean): void;

declare function SetScenarioPointFlag(scenario: number, flag: number, value: boolean): void;

declare function SetScenarioPointHeading(scenario: number, heading: number, p2: boolean): void;

declare function SetScenarioTypeEnabled(scenarioType: string, toggle: boolean): void;

declare function SetScenarioTypeEnabledHash(scenarioType: string | number, toggle: boolean): void;

declare function SetScriptAsNoLongerNeeded(scriptName: string): void;

/**
 * Sets a flag defining whether or not script draw commands should continue being drawn behind the pause menu. This is usually used for draw commands that are used with a world render target.
 */
declare function SetScriptGfxDrawBehindPausemenu(toggle: boolean): void;

/**
 * Sets the draw order for script draw commands.
 */
declare function SetScriptGfxDrawOrder(drawOrder: number): void;

declare function SetScriptWithNameHashAsNoLongerNeeded(scriptHash: string | number): void;

declare function SetSequenceToRepeat(taskSequenceId: number, repeat: boolean): void;

declare function SetSnakeoilForEntry(name: string, path: string, data: string): void;

/**
 * enum class eSnowCoverageType
 * {
 * Primary,
 * Secondary,
 * Xmas,
 * XmasSecondary // since b1232
 * };
 */
declare function SetSnowCoverageType(_type: number): void;

declare function SetSnowLevel(level: number): void;

declare function SetSocialMatchmakingAllowed(toggle: boolean): void;

declare function SetSpawnerInfoPriority(p0: string | number, p1: string | number, priority: number): void;

declare function SetSpeciesTuningBoolParam(p0: string | number, p1: number, p2: number, p3: boolean): void;

declare function SetSpeciesTuningFloatParam(p0: string | number, p1: number, p2: number, p3: number): void;

declare function SetSrlTime(p0: number): void;

/**
 * Internal function for setting a state bag value.
 */
declare function SetStateBagValue(
  bagName: string,
  keyName: string,
  valueData: string,
  valueLength: number,
  replicated: boolean,
): void;

declare function SetStateOfRayfireMapObject(object: number, state: number): void;

declare function SetStaticEmitterEnabled(emitterName: string, toggle: boolean): void;

declare function SetStreamedTextureDictAsNoLongerNeeded(textureDict: string): void;

declare function SetStreamedTxdAsNoLongerNeeded(txdHash: string | number): void;

declare function SetSuperJumpThisFrame(player: number): void;

/**
 * Swim speed multiplier.
 * Multiplier goes up to 1.49f
 */
declare function SetSwimMultiplierForPlayer(player: number, multiplier: number): void;

declare function SetTaskMoveNetworkSignalBool(ped: number, signalName: string, value: boolean): void;

declare function SetTaskMoveNetworkSignalFloat(ped: number, signalName: string, value: number): void;

declare function SetTaskMoveNetworkSignalVector(ped: number, signalName: string, x: number, y: number, z: number): void;

declare function SetTeamCarriableEntity(p0: number, p1: number, p2: number): void;

declare function SetTeamPickupObject(object: number, p1: number, p2: boolean): void;

declare function SetTextChatEnabled(enabled: boolean): boolean;

declare function SetTextRenderId(renderId: number): void;

declare function SetTextureLayerAlpha(textureId: number, layerId: number, texAlpha: number): void;

declare function SetTextureLayerMod(
  textureId: number,
  layerId: number,
  modTextureHash: string | number,
  modAlpha: number,
  modChannel: number,
): void;

declare function SetTextureLayerPallete(textureId: number, layerId: number, paletteHash: string | number): void;

declare function SetTextureLayerRoughness(textureId: number, layerId: number, texRough: number): void;

declare function SetTextureLayerSheetGridIndex(textureId: number, layerId: number, sheetGridIndex: number): void;

declare function SetTextureLayerTextureMap(
  textureId: number,
  layerId: number,
  albedoHash: string | number,
  normalHash: string | number,
  materialHash: string | number,
): void;

/**
 * Seem color is not RGB or HSV
 */
declare function SetTextureLayerTint(
  textureId: number,
  layerId: number,
  tint0: number,
  tint1: number,
  tint2: number,
): void;

declare function SetThisScriptCanBePaused(toggle: boolean): void;

declare function SetThisScriptCanRemoveBlipsCreatedByAnyScript(toggle: boolean): void;

/**
 * 0 = high
 * 1 = normal
 * 2 = low
 */
declare function SetThreadPriority(priority: number): void;

/**
 * Maximum value is 1.0f
 * At a value of 0.0f the game will still run at a minimum time scale.
 */
declare function SetTimeScale(timeScale: number): void;

declare function SetTimecycleModifier(modifierName: string): void;

declare function SetTimecycleModifierStrength(strength: number): void;

declare function SetTrackedPointInfo(point: number, x: number, y: number, z: number, radius: number): void;

declare function SetTrainCruiseSpeed(train: number, speed: number): void;

/**
 * Sets the ratio that a door is open for on a train.
 * @param train The train to set the door ratio for.
 * @param doorIndex Zero-based door index.
 * @param ratio A value between 0.0 (fully closed) and 1.0 (fully open).
 */
declare function SetTrainDoorOpenRatio(train: number, doorIndex: number, ratio: number): void;

/**
 * Maximum possible speed is 30.0 (108 km/h)
 */
declare function SetTrainMaxSpeed(train: number, speed: number): void;

declare function SetTrainOffsetFromStation(train: number, offset: number): void;

declare function SetTrainSpeed(train: number, speed: number): void;

declare function SetTrainStopsForStations(train: number, toggle: boolean): void;

/**
 * Enables or disables whether train doors should be forced open whilst a player is inside the train. This is enabled by default in multiplayer.
 * @param forceOpen Should force open.
 */
declare function SetTrainsForceDoorsOpen(forceOpen: boolean): void;

declare function SetTransitionTimecycleModifier(modifierName: string, transition: number): void;

declare function SetTransportAccessibleSeatFlags(transportEntity: number, flags: number): void;

/**
 * flagId:
 * enum eTransportConfigFlags
 * {
 * TCF_NotConsideredForEntryByLocalPlayer,
 * TCF_0xB78D6624,
 * TCF_0xA9700425,
 * TCF_0x8D7E4641,
 * TCF_0xF24BAA1F,
 * TCF_0x63B77935,
 * TCF_NotConsideredForEntryByAllPlayers,
 * TCF_0xD17A2AFD,
 * TCF_0xD4E4FDD5,
 * TCF_0x8227C929,
 * TCF_0x812C1070,
 * TCF_0x0E1AB26F,
 * TCF_0xBF4EC863,
 * TCF_0x75660C36,
 * TCF_0xA2539E20,
 * TCF_0x9162C633,
 * TCF_DisableHonorModifiers,
 * TCF_0xF9E71CB6,
 * TCF_0x933ECD3F,
 * TCF_0x18513A34
 * };
 */
declare function SetTransportConfigFlag(transportEntity: number, flagId: number, value: boolean): void;

/**
 * enum eTransportUsageFlags
 * {
 * TUF_INVALID = 0,
 * TUF_ALLOW_DRIVER_ME = (1 << 0),
 * TUF_ALLOW_DRIVER_GANG = (1 << 1),
 * TUF_ALLOW_DRIVER_CREW = (1 << 2),
 * TUF_ALLOW_DRIVER_FRIENDS = (1 << 3),
 * TUF_ALLOW_DRIVER_ANYONE = (1 << 4),
 * TUF_ALLOW_PASSENGER_ME = (1 << 5),
 * TUF_ALLOW_PASSENGER_GANG = (1 << 6),
 * TUF_ALLOW_PASSENGER_CREW = (1 << 7),
 * TUF_ALLOW_PASSENGER_FRIENDS = (1 << 8),
 * TUF_ALLOW_PASSENGER_ANYONE = (1 << 9),
 * TUF_ALLOW_ACCESS_AI = (1 << 10)
 * };
 */
declare function SetTransportUsageFlags(transportEntity: number, flags: number): void;

/**
 * Probably changes tvs from being a 3d audio to being "global" audio
 */
declare function SetTvAudioFrontend(toggle: boolean): void;

declare function SetTvChannel(channel: number): void;

declare function SetTvChannelPlaylist(tvChannel: number, playlistName: string, restart: boolean): void;

declare function SetTvVolume(volume: number): void;

declare function SetUpSpeedRestrainInformationForPlayerFollower(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function SetVehicleAlarmTimeLeft(vehicle: number, time: number): void;

/**
 * Makes the vehicle accept no passengers.
 */
declare function SetVehicleAllowNoPassengersLockon(veh: number, toggle: boolean): void;

/**
 * This is an alias of SET_ENTITY_AS_NO_LONGER_NEEDED.
 */
declare function SetVehicleAsNoLongerNeeded(vehicle: number): void;

/**
 * Disables the vehicle from being repaired when a vehicle extra is enabled.
 * @param vehicle The vehicle to set disable auto vehicle repair.
 * @param value Setting the value to  true prevents the vehicle from being repaired when a extra is enabled. Setting the value to false allows the vehicle from being repaired when a extra is enabled.
 */
declare function SetVehicleAutoRepairDisabled(vehicle: number, value: boolean): void;

declare function SetVehicleAutomaticallyAttaches(vehicle: number, p1: boolean, p2: number): number;

declare function SetVehicleBodyHealth(vehicle: number, value: number): void;

declare function SetVehicleCanBeTargetted(vehicle: number, state: boolean): void;

declare function SetVehicleCanBeUsedByFleeingPeds(vehicle: number, toggle: boolean): void;

declare function SetVehicleCanBeVisiblyDamaged(vehicle: number, state: boolean): void;

declare function SetVehicleCanBreak(vehicle: number, toggle: boolean): void;

declare function SetVehicleClutch(vehicle: number, clutch: number): void;

declare function SetVehicleCurrentRpm(vehicle: number, rpm: number): void;

/**
 * Apply damage to vehicle at a location. Location is relative to vehicle model (not world).
 * Radius of effect damage applied in a sphere at impact location
 */
declare function SetVehicleDamage(
  vehicle: number,
  xOffset: number,
  yOffset: number,
  zOffset: number,
  damage: number,
  radius: number,
  p6: boolean,
): void;

declare function SetVehicleDensityMultiplierThisFrame(multiplier: number): void;

declare function SetVehicleDirtLevel(vehicle: number, dirtLevel: number): void;

/**
 * dirtLevel: 0.0 - 1.0
 */
declare function SetVehicleDirtLevel_2(vehicle: number, dirtLevel: number): void;

/**
 * doorIndex:
 * 0 = Front Right Door
 * 1 = Front Left Door
 * 2 = Back Right Door
 * 3 = Back Left Door
 * 4 = Hood
 * 5 = Trunk
 */
declare function SetVehicleDoorBroken(vehicle: number, doorIndex: number, deleteDoor: boolean): void;

/**
 * Keeps Vehicle Doors/Hood/Trunk from breaking off
 */
declare function SetVehicleDoorCanBreak(vehicle: number, doorIndex: number, isBreakable: boolean): void;

declare function SetVehicleDoorControl(vehicle: number, doorIndex: number, speed: number, angle: number): void;

declare function SetVehicleDoorLatched(vehicle: number, doorIndex: number, p2: boolean, p3: boolean, p4: boolean): void;

/**
 * doorIndex:
 * 0 = Front Left Door
 * 1 = Front Right Door
 * 2 = Back Left Door
 * 3 = Back Right Door
 * 4 = Hood
 * 5 = Trunk
 * 6 = Back
 * 7 = Back2
 */
declare function SetVehicleDoorOpen(vehicle: number, doorIndex: number, loose: boolean, openInstantly: boolean): void;

/**
 * doorIndex:
 * 0 = Front Left Door
 * 1 = Front Right Door
 * 2 = Back Left Door
 * 3 = Back Right Door
 * 4 = Hood
 * 5 = Trunk
 * 6 = Trunk2
 */
declare function SetVehicleDoorShut(vehicle: number, doorIndex: number, closeInstantly: boolean): void;

declare function SetVehicleDoorsLocked(vehicle: number, doorLockStatus: number): void;

declare function SetVehicleDoorsLockedForAllPlayers(vehicle: number, toggle: boolean): void;

declare function SetVehicleDoorsLockedForPlayer(vehicle: number, player: number, toggle: boolean): void;

declare function SetVehicleDoorsLockedForTeam(vehicle: number, team: number, toggle: boolean): void;

/**
 * Closes all doors of a vehicle:
 */
declare function SetVehicleDoorsShut(vehicle: number, closeInstantly: boolean): void;

declare function SetVehicleDoorsToOpenAtAnyDistance(vehicle: number, toggle: boolean): void;

declare function SetVehicleEngineCanDegrade(vehicle: number, toggle: boolean): void;

/**
 * 1000 is max health
 * Begins leaking gas at around 650 health
 * -999.90002441406 appears to be minimum health, although nothing special occurs <- false statement
 * -------------------------
 * Minimum: -4000
 * Maximum: 1000
 * -4000: Engine is destroyed
 * 0 and below: Engine catches fire and health rapidly declines
 * 300: Engine is smoking and losing functionality
 * 1000: Engine is perfect
 */
declare function SetVehicleEngineHealth(vehicle: number, health: number): void;

/**
 * Starts or stops the engine on the specified vehicle.
 * vehicle: The vehicle to start or stop the engine on.
 * value: true to turn the vehicle on; false to turn it off.
 * instantly: if true, the vehicle will be set to the state immediately; otherwise, the current driver will physically turn on or off the engine.
 */
declare function SetVehicleEngineOn(vehicle: number, value: boolean, instantly: boolean): void;

declare function SetVehicleEngineTemperature(vehicle: number, temperature: number): void;

/**
 * index: 0 - 1
 * Used to be incorrectly named _SET_VEHICLE_EXCLUSIVE_DRIVER_2
 */
declare function SetVehicleExclusiveDriver(vehicle: number, ped: number, index: number): void;

/**
 * Sets a vehicle to be strongly resistant to explosions. p0 is the vehicle; set p1 to false to toggle the effect on/off.
 */
declare function SetVehicleExplodesOnHighExplosionDamage(vehicle: number, toggle: boolean): void;

/**
 * Note: only some vehicle have extras
 */
declare function SetVehicleExtra(vehicle: number, extraId: number, disable: boolean): void;

/**
 * This fixes a vehicle.
 * If the vehicle's engine's broken then you cannot fix it with this native.
 */
declare function SetVehicleFixed(vehicle: number): void;

declare function SetVehicleForwardSpeed(vehicle: number, speed: number): void;

declare function SetVehicleFuelLevel(vehicle: number, level: number): void;

declare function SetVehicleGravityAmount(vehicle: number, gravity: number): void;

declare function SetVehicleHandbrake(vehicle: number, toggle: boolean): void;

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FIELD`, this might require some experimentation.
 * Example: `SetVehicleHandlingField(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param vehicle The vehicle to set data for.
 * @param class_ The handling class to set. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The value to set.
 */
declare function SetVehicleHandlingField(vehicle: number, class_: string, fieldName: string, value: number): void;

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FLOAT`, this might require some experimentation.
 * Example: `SetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param vehicle The vehicle to set data for.
 * @param class_ The handling class to set. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The floating-point value to set.
 */
declare function SetVehicleHandlingFloat(vehicle: number, class_: string, fieldName: string, value: number): void;

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_INT`, this might require some experimentation.
 * @param vehicle The vehicle to set data for.
 * @param class_ The handling class to set. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The integer value to set.
 */
declare function SetVehicleHandlingInt(vehicle: number, class_: string, fieldName: string, value: number): void;

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_VECTOR`, this might require some experimentation.
 * @param vehicle The vehicle to set data for.
 * @param class_ The handling class to set. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The Vector3 value to set.
 */
declare function SetVehicleHandlingVector(vehicle: number, class_: string, fieldName: string): void;

declare function SetVehicleHasBeenOwnedByPlayer(vehicle: number, owned: boolean): void;

/**
 * if true, axles won't bend.
 */
declare function SetVehicleHasStrongAxles(vehicle: number, toggle: boolean): void;

declare function SetVehicleHasUnbreakableLights(vehicle: number, p1: boolean): void;

declare function SetVehicleHighGear(vehicle: number, gear: number): void;

declare function SetVehicleInactiveDuringPlayback(vehicle: number, toggle: boolean): void;

declare function SetVehicleIndividualDoorsLocked(vehicle: number, doorIndex: number, doorLockStatus: number): void;

/**
 * Setting this to false, makes the specified vehicle to where if you press Y your character doesn't even attempt the animation to enter the vehicle. Hence it's not considered aka ignored.
 */
declare function SetVehicleIsConsideredByPlayer(vehicle: number, toggle: boolean): void;

declare function SetVehicleIsStolen(vehicle: number, isStolen: boolean): void;

declare function SetVehicleJetEngineOn(vehicle: number, toggle: boolean): void;

/**
 * Sets the vehicle's lights state.
 */
declare function SetVehicleLights(vehicle: number, state: number): void;

declare function SetVehicleLivery(vehicle: number, liveryIndex: number): void;

/**
 * Ranges from -1 to ??? (internal type is int8)
 */
declare function SetVehicleLodLevel(vehicle: number, lodLevel: number): void;

declare function SetVehicleLodMultiplier(vehicle: number, multiplier: number): void;

/**
 * mudLevel: 0.0 - 1.0
 */
declare function SetVehicleMudLevel(vehicle: number, mudLevel: number): void;

declare function SetVehicleOilLevel(vehicle: number, level: number): void;

declare function SetVehicleOnGroundProperly(vehicle: number, p1: boolean): boolean;

/**
 * 1000 is max health
 */
declare function SetVehiclePetrolTankHealth(vehicle: number, health: number): void;

declare function SetVehicleProvidesCover(vehicle: number, toggle: boolean): void;

declare function SetVehicleShootAtTarget(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

/**
 * snowLevel: 0.0 - 1.0
 */
declare function SetVehicleSnowLevel(vehicle: number, snowLevel: number): void;

/**
 * Locks the vehicle's steering to the desired angle, explained below.
 * Requires to be called onTick. Steering is unlocked the moment the function stops being called on the vehicle.
 * Steer bias:
 * -1.0 = full right
 * 0.0 = centered steering
 * 1.0 = full left
 */
declare function SetVehicleSteerBias(vehicle: number, value: number): void;

declare function SetVehicleSteeringAngle(vehicle: number, angle: number): void;

declare function SetVehicleSteeringScale(vehicle: number, scale: number): void;

/**
 * If set to true, vehicle will not take crash damage, but is still susceptible to damage from bullets and explosives
 */
declare function SetVehicleStrong(vehicle: number, toggle: boolean): void;

/**
 * Sets the height of the vehicle's suspension.
 * This changes the same value set by Suspension in the mod shop.
 * Negatives values raise the car. Positive values lower the car.
 * This is change is visual only. The collision of the vehicle will not move.
 */
declare function SetVehicleSuspensionHeight(vehicle: number, newHeight: number): void;

declare function SetVehicleTint(vehicle: number, tintId: number): void;

declare function SetVehicleTurboPressure(vehicle: number, pressure: number): void;

/**
 * Allows you to toggle bulletproof tires.
 */
declare function SetVehicleTyresCanBurst(vehicle: number, toggle: boolean): void;

declare function SetVehicleUndriveable(vehicle: number, toggle: boolean): void;

declare function SetVehicleWeaponHeading(vehicle: number, seatIndex: number, heading: number, p3: boolean): void;

declare function SetVehicleWeaponHeadingLimits(
  vehicle: number,
  p1: number,
  minHeading: number,
  maxHeading: number,
): void;

/**
 * wetLevel: 0.0 - 1.0
 */
declare function SetVehicleWetLevel(vehicle: number, wetLevel: number): void;

/**
 * Sets brake pressure of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * Normal values around 1.0f
 */
declare function SetVehicleWheelBrakePressure(vehicle: number, wheelIndex: number, pressure: number): void;

/**
 * Sets the flags of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @param flags bit flags
 */
declare function SetVehicleWheelFlags(vehicle: number, wheelIndex: number, flags: number): void;

declare function SetVehicleWheelHealth(vehicle: number, wheelIndex: number, health: number): void;

/**
 * Sets whether the wheel is powered.
 * On all wheel drive cars this works to change which wheels receive power, but if a car's fDriveBiasFront doesn't send power to that wheel, it won't get power anyway. This can be fixed by changing the fDriveBiasFront with SET_VEHICLE_HANDLING_FLOAT.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * This is a shortcut to a flag in SET_VEHICLE_WHEEL_FLAGS.
 */
declare function SetVehicleWheelIsPowered(vehicle: number, wheelIndex: number, powered: boolean): void;

/**
 * Sets power being sent to a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 */
declare function SetVehicleWheelPower(vehicle: number, wheelIndex: number, power: number): void;

/**
 * Not sure what this changes, probably determines physical rim size in case the tire is blown.
 * @param vehicle The vehicle to obtain data for.
 * @param wheelIndex Index of wheel, 0-3.
 * @param value Size of rim collider.
 */
declare function SetVehicleWheelRimColliderSize(vehicle: number, wheelIndex: number, value: number): void;

/**
 * Sets the rotation speed of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 */
declare function SetVehicleWheelRotationSpeed(vehicle: number, wheelIndex: number, speed: number): void;

/**
 * Sets vehicle's wheels' size (size is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels.
 * Returns whether change was successful (can be false if trying to set size for non-default wheels).
 * @param vehicle The vehicle to set data for.
 * @param size Size of the wheels (usually between 0.5 and 1.5 is reasonable).
 * @return Bool - whether change was successful or not
 */
declare function SetVehicleWheelSize(vehicle: number, size: number): boolean;

/**
 * Use along with SetVehicleWheelSize to resize the wheels (this native sets the collider size affecting physics while SetVehicleWheelSize will change visual size).
 * @param vehicle The vehicle to obtain data for.
 * @param wheelIndex Index of wheel, 0-3.
 * @param value Radius of tire collider.
 */
declare function SetVehicleWheelTireColliderSize(vehicle: number, wheelIndex: number, value: number): void;

/**
 * Use along with SetVehicleWheelWidth to resize the wheels (this native sets the collider width affecting physics while SetVehicleWheelWidth will change visual width).
 * @param vehicle The vehicle to obtain data for.
 * @param wheelIndex Index of wheel, 0-3.
 * @param value Width of tire collider.
 */
declare function SetVehicleWheelTireColliderWidth(vehicle: number, wheelIndex: number, value: number): void;

/**
 * Sets the traction vector length of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 */
declare function SetVehicleWheelTractionVectorLength(vehicle: number, wheelIndex: number, length: number): void;

/**
 * Sets vehicle's wheels' width (width is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels.
 * Returns whether change was successful (can be false if trying to set width for non-default wheels).
 * @param vehicle The vehicle to set data for.
 * @param width Width of the wheels (usually between 0.1 and 1.5 is reasonable).
 * @return Bool - whether change was successful or not
 */
declare function SetVehicleWheelWidth(vehicle: number, width: number): boolean;

/**
 * Adjusts the offset of the specified wheel relative to the wheel's axle center.
 * Needs to be called every frame in order to function properly, as GTA will reset the offset otherwise.
 * This function can be especially useful to set the track width of a vehicle, for example:
 * ```
 * function SetVehicleFrontTrackWidth(vehicle, width)
 * SetVehicleWheelXOffset(vehicle, 0, -width/2)
 * SetVehicleWheelXOffset(vehicle, 1, width/2)
 * end
 * ```
 */
declare function SetVehicleWheelXOffset(vehicle: number, wheelIndex: number, offset: number): void;

declare function SetVehicleWheelYRotation(vehicle: number, wheelIndex: number, value: number): void;
declare function SetVehicleWheelXrot(vehicle: number, wheelIndex: number, value: number): void;

/**
 * Example script: https://pastebin.com/J6XGbkCW
 * List of known states:
 * ```
 * 1: Not wheeling.
 * 65: Vehicle is ready to do wheelie (burnouting).
 * 129: Vehicle is doing wheelie.
 * ```
 * @param vehicle Vehicle
 * @param state Wheelie state
 */
declare function SetVehicleWheelieState(vehicle: number, state: number): void;

declare function SetVehicleWheelsCanBreak(vehicle: number, enabled: boolean): void;

declare function SetVehicleWheelsCanBreakOffWhenBlowUp(vehicle: number, toggle: boolean): void;

/**
 * Overrides a floating point value from `visualsettings.dat` temporarily.
 * @param name The name of the value to set, such as `pedLight.color.red`.
 * @param value The value to write.
 */
declare function SetVisualSettingFloat(name: string, value: number): void;

declare function SetVolumeCoords(volume: number, posX: number, posY: number, posZ: number): boolean;

declare function SetVolumeOwnerPersistentCharacter(volume: number, persChar: number, p2: boolean): void;

declare function SetVolumeRotation(volume: number, rotX: number, rotY: number, rotZ: number): boolean;

declare function SetVolumeScale(volume: number, scaleX: number, scaleY: number, scaleZ: number): boolean;

declare function SetWantedIntensityForPlayer(player: number, intensity: number): void;

declare function SetWantedLevelMultiplier(multiplier: number): void;

declare function SetWaypointOff(): void;

/**
 * Related to weapon visual damage, not actual damage.
 */
declare function SetWeaponDamage(weaponObject: number, level: number, p2: boolean): void;

declare function SetWeaponDegradation(weaponObject: number, level: number): void;

declare function SetWeaponDirt(weaponObject: number, level: number, p2: boolean): void;

/**
 * every other level will have the max value of (brokeLevel - threshold)
 */
declare function SetWeaponLevelThreshold(weaponObject: number, threshold: number): void;

declare function SetWeaponScale(weaponObject: number, scale: number): void;

declare function SetWeaponSoot(weaponObject: number, level: number, p2: boolean): void;

/**
 * Disables the game's built-in auto-reloading.
 * @param state On/Off
 */
declare function SetWeaponsNoAutoreload(state: boolean): void;

/**
 * Disables autoswapping to another weapon when the current weapon runs out of ammo.
 * @param state On/Off
 */
declare function SetWeaponsNoAutoswap(state: boolean): void;

declare function SetWeatherType(
  weatherType: string | number,
  p1: boolean,
  p2: boolean,
  p3: boolean,
  p4: number,
  p5: boolean,
): void;

declare function SetWeatherTypeFrozen(toggle: boolean): void;

declare function SetWeatherTypeTransition(p0: number, p1: number, p2: number, p3: number): void;

declare function SetWeatherType_2(weatherType: string | number, p1: number, p2: number, p3: number, p4: boolean): void;

declare function SetWeatherVariation(weatherType: string, variation: string): void;

declare function SetWidescreenBorders(p0: boolean, p1: number): void;

declare function SetWindDirection(direction: number): void;

declare function SetWindSpeed(speed: number): void;

/**
 * 0 = World
 * 1 = Guarma
 */
declare function SetWorldWaterType(waterType: number): void;

declare function Settimera(value: number): void;

declare function Settimerb(value: number): void;

declare function ShakeCam(cam: number, _type: string, amplitude: number): void;

declare function ShakeGameplayCam(shakeName: string, intensity: number): void;

declare function ShiftLeft(value: number, bitShift: number): number;

declare function ShiftRight(value: number, bitShift: number): number;

declare function ShootSingleBulletBetweenCoords(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
  damage: number,
  p7: boolean,
  weaponHash: string | number,
  ownerPed: number,
  isAudible: boolean,
  isInvisible: boolean,
  speed: number,
  p13: boolean,
): void;

/**
 * Returns whether the game's measurement system is set to metric.
 */
declare function ShouldUseMetricMeasurements(): boolean;

/**
 * Same as SHOULD_USE_METRIC_MEASUREMENTS
 */
declare function ShouldUseMetricMeasurements_2(): boolean;

declare function ShouldUseMetricTemperature(): boolean;

declare function ShouldUseMetricWeight(): boolean;

declare function ShouldUse_24HourClock(): boolean;

declare function ShouldWeaponBeDiscardedWhenSwapped(weaponHash: string | number): boolean;

declare function ShowActivePointsOfInterest(): void;

declare function ShowHorseCores(state: boolean): void;

/**
 * Exemple : https://pastebin.com/kAtEMQTD
 */
declare function ShowNotification(p2: number, p3: number): [number, number, number];

declare function ShowPlayerCores(state: boolean): void;

declare function ShutdownLoadingScreen(): void;

/**
 * Shuts down the `loadingScreen` NUI frame, similarly to `SHUTDOWN_LOADING_SCREEN`.
 */
declare function ShutdownLoadingScreenNui(): void;

declare function SimulatePlayerInputGait(
  player: number,
  amount: number,
  gaitType: number,
  speed: number,
  p4: boolean,
  p5: boolean,
): void;

declare function SimulatedRouteGetEta(p0: number): number;

declare function SimulatedRouteIsLoaded(p0: number): boolean;

declare function SimulatedRouteTravelToPoint(p0: number, p1: number, p2: number): void;

declare function Sin(value: number): number;

/**
 * SET_TIME_POSITION_IN_RECORDING can be emulated by: desired_time - GET_TIME_POSITION_IN_RECORDING(vehicle)
 */
declare function SkipTimeInPlaybackRecordedVehicle(vehicle: number, time: number): void;

declare function SkipToNextScriptedConversationLine(p0: string): void;

declare function SlideObject(
  object: number,
  toX: number,
  toY: number,
  toZ: number,
  speedX: number,
  speedY: number,
  speedZ: number,
  collision: boolean,
): boolean;

declare function SpactionproxyGetNextPendingBuyAction(data: number): [boolean, number];

declare function SpactionproxyGetNextPendingCraftingAction(data: number): [boolean, number];

declare function SpactionproxyManagerIsFailed(): boolean;

declare function SpactionproxyManagerIsReady(): boolean;

declare function SpactionproxyProcessAction(p0: number, p1: boolean): boolean;

declare function SpactionproxyStartManager(): boolean;

declare function SpawnpointsCancelSearch(): void;

declare function SpawnpointsGetNumSearchResults(): number;

declare function SpawnpointsGetSearchResult(randomInt: number): [number, number, number];

declare function SpawnpointsGetSearchResultFlags(p0: number, p1?: number): number;

declare function SpawnpointsIsSearchActive(): boolean;

declare function SpawnpointsIsSearchComplete(): boolean;

declare function SpawnpointsIsSearchFailed(): boolean;

declare function SpawnpointsStartSearch(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function SpawnpointsStartSearchInAngledArea(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function SpawnpointsStartSearchWithVolume(
  volume: number,
  flags: number,
  p2: number,
  duration: number,
  p4: number,
): void;

declare function Sqrt(value: number): number;

declare function StartAnimScene(animScene: number): void;

declare function StartAudioScene(scene: string): boolean;

/**
 * Begins with START_*. Next character in the name is either D or E.
 */
declare function StartBenchmarkRecording(): void;

declare function StartEntityFire(p0: number, p1: number, p2: number, p3: number): void;

/**
 * Does the same as 0x7EE9F5D83DD4F90E, except blocking until the shape test completes.
 */
declare function StartExpensiveSynchronousShapeTestLosProbe(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
  flags: number,
  entity: number,
  p8?: number,
): number;

/**
 * Equivalent of [START_FIND_KVP](#\_0xDD379006), but for another resource than the current one.
 * @param resourceName The resource to try finding the key/values for
 * @param prefix A prefix match
 * @return A KVP find handle to use with [FIND_KVP](#\_0xBD7BEBC5) and close with [END_FIND_KVP](#\_0xB3210203)
 */
declare function StartFindExternalKvp(resourceName: string, prefix: string): number;

declare function StartFindKvp(prefix: string): number;

declare function StartGpsCustomRouteFromWaypointRecordingRoute(
  waypointRecording: string,
  point: number,
  numPoints: number,
  colorNameHash: string | number,
  p4: boolean,
  p5: boolean,
): void;

declare function StartGpsMultiRoute(colorNameHash: string | number, p1: boolean, p2: boolean): void;

declare function StartNetworkedParticleFxLoopedOnEntity(
  effectName: string,
  entity: number,
  xOffset: number,
  yOffset: number,
  zOffset: number,
  xRot: number,
  yRot: number,
  zRot: number,
  scale: number,
  xAxis: number,
  yAxis: number,
  zAxis: number,
): number;

declare function StartNetworkedParticleFxLoopedOnEntityBone(
  effectName: string,
  entity: number,
  xOffset: number,
  yOffset: number,
  zOffset: number,
  xRot: number,
  yRot: number,
  zRot: number,
  boneIndex: number,
  scale: number,
  xAxis: number,
  yAxis: number,
  zAxis: number,
): number;

declare function StartNetworkedParticleFxNonLoopedAtCoord(
  effectName: string,
  xPos: number,
  yPos: number,
  zPos: number,
  xRot: number,
  yRot: number,
  zRot: number,
  scale: number,
  xAxis: number,
  yAxis: number,
  zAxis: number,
): boolean;

declare function StartNetworkedParticleFxNonLoopedOnEntity(
  effectName: string,
  entity: number,
  offsetX: number,
  offsetY: number,
  offsetZ: number,
  rotX: number,
  rotY: number,
  rotZ: number,
  scale: number,
  axisX: number,
  axisY: number,
  axisZ: number,
): boolean;

declare function StartNewScript(scriptName: string, stackSize: number): number;

/**
 * return : script thread id, 0 if failed
 * Pass pointer to struct of args in p1, size of struct goes into p2
 */
declare function StartNewScriptWithArgs(scriptName: string, argCount: number, stackSize: number): [number, number];

declare function StartNewScriptWithNameHash(scriptHash: string | number, stackSize: number): number;

declare function StartNewScriptWithNameHashAndArgs(
  scriptHash: string | number,
  argCount: number,
  stackSize: number,
): [number, number];

declare function StartParticleFxLoopedAtCoord(
  effectName: string,
  x: number,
  y: number,
  z: number,
  xRot: number,
  yRot: number,
  zRot: number,
  scale: number,
  xAxis: boolean,
  yAxis: boolean,
  zAxis: boolean,
  p11: boolean,
): number;

declare function StartParticleFxLoopedOnEntity(
  effectName: string,
  entity: number,
  xOffset: number,
  yOffset: number,
  zOffset: number,
  xRot: number,
  yRot: number,
  zRot: number,
  scale: number,
  xAxis: boolean,
  yAxis: boolean,
  zAxis: boolean,
): number;

declare function StartParticleFxLoopedOnEntityBone(
  effectName: string,
  entity: number,
  xOffset: number,
  yOffset: number,
  zOffset: number,
  xRot: number,
  yRot: number,
  zRot: number,
  boneIndex: number,
  scale: number,
  xAxis: boolean,
  yAxis: boolean,
  zAxis: boolean,
): number;

declare function StartParticleFxLoopedOnPedBone(
  effectName: string,
  ped: number,
  xOffset: number,
  yOffset: number,
  zOffset: number,
  xRot: number,
  yRot: number,
  zRot: number,
  boneIndex: number,
  scale: number,
  xAxis: boolean,
  yAxis: boolean,
  zAxis: boolean,
): number;

declare function StartParticleFxNonLoopedAtCoord(
  effectName: string,
  xPos: number,
  yPos: number,
  zPos: number,
  xRot: number,
  yRot: number,
  zRot: number,
  scale: number,
  xAxis: boolean,
  yAxis: boolean,
  zAxis: boolean,
): number;

declare function StartParticleFxNonLoopedOnEntity(
  effectName: string,
  entity: number,
  offsetX: number,
  offsetY: number,
  offsetZ: number,
  rotX: number,
  rotY: number,
  rotZ: number,
  scale: number,
  axisX: boolean,
  axisY: boolean,
  axisZ: boolean,
): boolean;

declare function StartParticleFxNonLoopedOnPedBone(
  effectName: string,
  ped: number,
  offsetX: number,
  offsetY: number,
  offsetZ: number,
  rotX: number,
  rotY: number,
  rotZ: number,
  boneIndex: number,
  scale: number,
  axisX: boolean,
  axisY: boolean,
  axisZ: boolean,
): boolean;

declare function StartParticleFxNonLoopedOnPedBone_2(
  effectName: string,
  ped: number,
  offsetX: number,
  offsetY: number,
  offsetZ: number,
  rotX: number,
  rotY: number,
  rotZ: number,
  boneIndex: number,
  scale: number,
  axisX: boolean,
  axisY: boolean,
  axisZ: boolean,
): boolean;

declare function StartPeriodicIcon(_type: number): void;

declare function StartPetrolTrailDecals(p0: number, p1: number): void;

/**
 * p3 is some flag related to 'trailers' (invokes CVehicle::GetTrailer).
 * See REQUEST_VEHICLE_RECORDING
 */
declare function StartPlaybackRecordedVehicle(vehicle: number, recording: number, script: string, p3: boolean): void;

declare function StartPlayerTeleport(
  player: number,
  x: number,
  y: number,
  z: number,
  heading: number,
  p5: boolean,
  p6: boolean,
  p7: boolean,
  p8: boolean,
): void;

declare function StartPreloadedConversation(p0: string): void;

declare function StartRopeUnwindingFront(ropeId: number): void;

declare function StartRopeWinding(ropeId: number): void;

declare function StartScriptConversation(p0: string, p1: boolean, p2: boolean, p3: boolean): void;

/**
 * Starts a fire:
 * xyz: Location of fire
 * maxChildren: The max amount of times a fire can spread to other objects. Must be 25 or less, or the function will do nothing.
 * isGasFire: Whether or not the fire is powered by gasoline.
 */
declare function StartScriptFire(
  x: number,
  y: number,
  z: number,
  p3: number,
  p4: number,
  p5: boolean,
  soundsetName: string,
  p7: number,
  p8: number,
): number;

declare function StartShapeTestBox(
  x: number,
  y: number,
  z: number,
  x1: number,
  y2: number,
  z2: number,
  rotX: number,
  rotY: number,
  rotZ: number,
  p9: number,
  p10: number,
  entity: number,
  p12: number,
): number;

declare function StartShapeTestCapsule(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
  radius: number,
  flags: number,
  entityToIgnore: number,
  p9: number,
): number;

/**
 * Asynchronously starts a line-of-sight (raycast) world probe shape test.
 * Use the handle with 0x3D87450E15D98694 or 0x65287525D951F6BE until it returns 0 or 2.
 * p8 is a bit mask with bits 1, 2 and/or 4, relating to collider types; 4 should usually be used.
 */
declare function StartShapeTestLosProbe(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
  flags: number,
  entity: number,
  p8: number,
): number;

declare function StartShapeTestSurroundingCoords(
  flag: number,
  entity: number,
  flag2: number,
): [number, number[], number[]];

declare function StartShapeTestSweptSphere(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
  radius: number,
  flags: number,
  entity: number,
  p9: number,
): number;

/**
 * Sounds the horn for the specified vehicle.
 * vehicle: The vehicle to activate the horn for.
 * mode: The hash of "NORMAL" or "HELDDOWN". Can be 0.
 * duration: The duration to sound the horn, in milliseconds.
 * Note: If a player is in the vehicle, it will only sound briefly.
 */
declare function StartVehicleHorn(vehicle: number, duration: number, mode: string | number, forever: boolean): void;

declare function StatAddBountyTarget(p0: string | number, ped: number): void;

declare function StatBountyCaptured(p0: number): void;

declare function StatBountyEscaped(p0: number): void;

/**
 * statId: see 0xC48FE1971C9743FF
 */
declare function StatIdGetBool(): [boolean, number, any /* actually bool */];

/**
 * statId: see 0xC48FE1971C9743FF
 */
declare function StatIdGetDate(): [boolean, number, number];

/**
 * statId: see 0xC48FE1971C9743FF
 */
declare function StatIdGetFloat(): [boolean, number, number];

/**
 * statId: see 0xC48FE1971C9743FF
 */
declare function StatIdGetInt(): [boolean, number, number];

declare function StatIdIncrementFloat(value: number): number;

declare function StatIdIncrementInt(value: number): number;

/**
 * struct StatId
 * {
 * alignas(8) Hash BaseId;
 * alignas(8) Hash PermutationId;
 * }
 */
declare function StatIdIsValid(statId: number): [boolean, number];

/**
 * statId: see 0xC48FE1971C9743FF
 */
declare function StatIdSetBool(value: boolean, p2: boolean): [boolean, number];

/**
 * statId: see 0xC48FE1971C9743FF
 */
declare function StatIdSetDate(p2: boolean): [boolean, number, number];

/**
 * statId: see 0xC48FE1971C9743FF
 */
declare function StatIdSetFloat(value: number, p2: boolean): [boolean, number];

/**
 * statId: see 0xC48FE1971C9743FF
 */
declare function StatIdSetGxtLabel(label: string, p2: boolean): [boolean, number];

/**
 * statId: see 0xC48FE1971C9743FF
 */
declare function StatIdSetInt(value: number, p2: boolean): [boolean, number];

/**
 * statId: see 0xC48FE1971C9743FF
 */
declare function StatIdSetToPosseId(statId: number): void;

declare function StatPhotographTaken(itemset: number): void;

declare function StatRegisterLegendaryAnimalDeed(deedHash: string | number): void;

declare function StatstrackerDeedStarted(p0: string | number, p1: number): void;

declare function StatstrackerIsInitialized(p0: string | number): boolean;

declare function StopAnimPlayback(ped: number, p1: number, p2: boolean): void;

declare function StopAnimTask(ped: number, animDictionary: string, animationName: string, p3: number): void;

declare function StopAudioScene(scene: string): void;

declare function StopAudioScenes(): void;

/**
 * Begins with STOP_*. Next character in the name is either D or E.
 */
declare function StopBenchmarkRecording(): void;

declare function StopBringVehicleToHalt(vehicle: number): void;

declare function StopCamPointing(cam: number): void;

declare function StopCamShaking(cam: number, p1: boolean): void;

/**
 * nullsub, doesn't do anything
 */
declare function StopCurrentLoadingProgressTimer(): void;

declare function StopCurrentPlayingAmbientSpeech(p0: number, p1: number): void;

declare function StopCurrentPlayingSpeech(p0: number, p1: number): void;

declare function StopDisplayingMpTransitionLoadingScreens(p0: number): void;

declare function StopEntityAnim(entity: number, animation: string, animGroup: string, p3: number): number;

declare function StopEntityFire(p0: number, p1: number): void;

declare function StopFireInBox(
  posX: number,
  posY: number,
  posZ: number,
  rotX: number,
  rotY: number,
  rotZ: number,
  scaleX: number,
  scaleY: number,
  scaleZ: number,
): void;

declare function StopFireInRange(x: number, y: number, z: number, radius: number): void;

declare function StopGameplayCamShaking(p0: boolean): void;

declare function StopGameplayHint(p0: boolean): void;

declare function StopItemPreview(): void;

declare function StopPadShake(padIndex: number): void;

declare function StopParticleFxLooped(ptfxHandle: number, p1: boolean): void;

declare function StopPedSpeaking(ped: number, shaking: boolean): void;

declare function StopPeriodicIcon(_type: number): void;

declare function StopPlaybackRecordedVehicle(vehicle: number): void;

/**
 * Disables the player's teleportation
 */
declare function StopPlayerTeleport(): void;

/**
 * nullsub, doesn't do anything
 */
declare function StopRecordingThisFrame(): void;

declare function StopRenderingScriptCamsUsingCatchUp(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function StopRopeUnwindingFront(ropeId: number): void;

declare function StopRopeWinding(ropeId: number): void;

declare function StopScriptedConversation(p0: string, p1: boolean, p2: boolean): number;

declare function StopSoundWithName(audioName: string, audioRef: string): void;

declare function StopStream(p0: number): void;

declare function StoreGlobalBlock(index: number): boolean;

/**
 * Returns false if it's a null or empty string or if the string is too long. outInteger will be set to -999 in that case.
 */
declare function StringToInt(_string: string, outInteger?: number): [boolean, number];

/**
 * crimeType: see _REPORT_CRIME
 */
declare function SuppressCrime(player: number, crimeType: string | number, p2: number, p3: number, p4: number): void;

declare function SuppressShockingEventsNextFrame(): void;

declare function TakeOwnershipOfAnimScene(animScene: number): void;

declare function Tan(p0: number): number;

/**
 * Makes the specified ped achieve the specified heading.
 * pedHandle: The handle of the ped to assign the task to.
 * heading: The desired heading.
 * timeout: The time, in milliseconds, to allow the task to complete. If the task times out, it is cancelled, and the ped will stay at the heading it managed to reach in the time.
 */
declare function TaskAchieveHeading(ped: number, heading: number, timeout: number): void;

declare function TaskAimAtCoord(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function TaskAimAtEntity(ped: number, p1: number, p2: number, p3: number, p4: number): void;

declare function TaskAimGunAtCoord(
  ped: number,
  x: number,
  y: number,
  z: number,
  time: number,
  p5: boolean,
  p6: boolean,
): void;

/**
 * duration: the amount of time in milliseconds to do the task.  -1 will keep the task going until either another task is applied, or CLEAR_ALL_TASKS() is called with the ped
 */
declare function TaskAimGunAtEntity(ped: number, targetEntity: number, duration: number, p3: boolean, p4: number): void;

declare function TaskAmbientAnimalHunt(ped: number, p1: number, p2: number): void;

declare function TaskAmbientAnimalStalk(ped: number, p1: number, p2: number): void;

declare function TaskAnimalAlerted(ped: number, p1: number, p2: number): void;

declare function TaskAnimalBleedOut(
  ped: number,
  killer: number,
  p2: boolean,
  weaponHash: string | number,
  p4: number,
  p5: number,
): void;

declare function TaskAnimalFlee(ped: number, p1: number, p2: number): void;

declare function TaskAnimalInteraction(ped: number, p1: number, p2: number, p3: number, p4: number): void;

declare function TaskAnimalUnalerted(ped: number, p1: number, p2: number, p3: number, p4: number): void;

declare function TaskAnimalWrithe(ped: number, p1: number, p2: number): void;

declare function TaskArrestPed(ped: number, target: number): void;

declare function TaskBark(ped: number, p1: number, p2: number): void;

declare function TaskBoardVehicle(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function TaskBoardVehicle_2(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function TaskBoatMission(
  pedDriver: number,
  boat: number,
  p2: number,
  p3: number,
  x: number,
  y: number,
  z: number,
  p7: number,
  maxSpeed: number,
  drivingStyle: number,
  p10: number,
  p11: number,
): void;

declare function TaskBreakVehicleDoorLock(ped: number, vehicle: number): void;

/**
 * carriableSlot:
 * 7 > Back of a horse
 * 6 > Right side of a horse
 * 5 > Left side of a horse
 * flags:
 * 512: enables the prompt being the name of the item when using a generic item
 */
declare function TaskCarriable(
  entity: number,
  carryConfig: string | number,
  carrier: number,
  carriableSlot: number,
  flags: number,
): void;

declare function TaskClearDefensiveArea(ped: number): void;

declare function TaskClearLookAt(ped: number): void;

/**
 * Climbs or vaults the nearest thing.
 */
declare function TaskClimb(ped: number, unused: boolean): void;

declare function TaskClimbLadder(ped: number, p1: number, p2: number, p3: number): void;

declare function TaskClimb_2(ped: number, p1: number): void;

declare function TaskCombatAnimalChargePed(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function TaskCombatAnimalWarn(ped: number, p1: number, p2: number): void;

declare function TaskCombatHatedTargets(ped: number, radius: number): void;

/**
 * Despite its name, it only attacks ONE hated target. The one closest hated target.
 */
declare function TaskCombatHatedTargetsAroundPed(ped: number, radius: number, flags: number, p3: number): void;

declare function TaskCombatHatedTargetsAroundPedTimed(ped: number, radius: number, p2: number, p3: number): void;

/**
 * Despite its name, it only attacks ONE hated target. The one closest to the specified position.
 */
declare function TaskCombatHatedTargetsInArea(
  ped: number,
  x: number,
  y: number,
  z: number,
  radius: number,
  flags: number,
  p6: number,
): void;

declare function TaskCombatHatedTargetsNoLosTest(ped: number, radius: number): void;

declare function TaskCombatPed(ped: number, targetPed: number, p2: number, p3: number): void;

declare function TaskCombatPedTimed(ped: number, targetPed: number, p2: number, p3: number): void;

declare function TaskCombatPed_3(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function TaskCompanionAmbient(ped: number, p1: number): void;

declare function TaskConfront(ped: number, targetPed: number, p2: number): boolean;

declare function TaskCower(ped: number, duration: number, ped2: number, p3: string): void;

declare function TaskCutFreeHogtiedTargetPed(ped: number, targetPed: number): void;

declare function TaskCutFreeHogtiedTargetPed_2(ped: number, targetPed: number, p2: number): void;

declare function TaskDisembarkNearestTrainCarriage(p0: number, p1: number, p2: number): void;

declare function TaskDisembarkVehicle(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

/**
 * Dismounts the ped from the animal it's mounted on. taskFlag affects what side the rider gets off. 1 << 18 will get off on the left side, where any other value will get off on the right side. The only other known value are 1 << 17 and 1 << 24, which has the behavior of any other value (getting off the animal from the right side). p2-p5 are almost always 0.
 */
declare function TaskDismountAnimal(
  rider: number,
  taskFlag: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function TaskDriveBy(
  driverPed: number,
  targetPed: number,
  targetVehicle: number,
  targetX: number,
  targetY: number,
  targetZ: number,
  distanceToShoot: number,
  pedAccuracy: number,
  p8: boolean,
  firingPattern: string | number,
): void;

declare function TaskDuck(ped: number, p1: number): void;

declare function TaskDuel(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function TaskDumpCarriableFromParent(ped: number, ped2: number, entity: number): void;

declare function TaskEat(ped: number, p1: number, p2: number): void;

declare function TaskEnterAnimScene(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function TaskEnterCover(ped: number): void;

declare function TaskEnterTransport(args: number): void;

declare function TaskEnterVehicle(
  ped: number,
  vehicle: number,
  timeout: number,
  seat: number,
  speed: number,
  flag: number,
  p6: number,
): void;

declare function TaskEvasiveAnim(ped: number, p1: number, p2: number): void;

declare function TaskEveryoneLeaveVehicleInOrder(vehicle: number, p1: boolean): void;

declare function TaskExitCover(ped: number): void;

declare function TaskExitTransport(args: number): void;

/**
 * Adds a new point to the current point route. Call TASK_FLUSH_ROUTE before the first call to this. Call TASK_FOLLOW_POINT_ROUTE to make the Ped go the route.
 * A maximum of 8 points can be added.
 */
declare function TaskExtendRoute(x: number, y: number, z: number): void;

declare function TaskFleeCoord(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function TaskFleeCoordVia(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
): void;

declare function TaskFleeFromCoord(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
): void;

declare function TaskFleeFromPed(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function TaskFleePed(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;

declare function TaskFleePedVia(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

/**
 * Clears the current point route. Call this before TASK_EXTEND_ROUTE and TASK_FOLLOW_POINT_ROUTE.
 */
declare function TaskFlushRoute(): void;

declare function TaskFlyAway(ped: number, p1: number): void;

declare function TaskFlyToCoord(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function TaskFlyingCircle(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function TaskFollowAndConverseWithPed(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function TaskFollowEntityAlongWaypointRecordingAtOffset(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function TaskFollowEntityWhileAimingAtEntity(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

/**
 * If no timeout, set timeout to -1.
 */
declare function TaskFollowNavMeshToCoord(
  ped: number,
  x: number,
  y: number,
  z: number,
  speedMultiplier: number,
  timeout: number,
  stoppingRange: number,
  flags: number,
  unk: number,
): void;

declare function TaskFollowNavMeshToCoordAdvanced(
  ped: number,
  x: number,
  y: number,
  z: number,
  speedMultiplier: number,
  timeout: number,
  stoppingRange: number,
  flags: number,
  p8: number,
  p9: number,
  p10: number,
  entity: number,
  unk: number,
): void;

declare function TaskFollowPavementToCoord(ped: number, args?: number): number;

declare function TaskFollowPointRoute(ped: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function TaskFollowToOffsetOfCoord(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
): void;

declare function TaskFollowToOffsetOfEntity(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
): void;

declare function TaskFollowWaypointRecording(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function TaskFollowWaypointRecordingAdvanced(ped: number, p1: number): void;

declare function TaskFollowWaypointRecordingAtOffset(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

/**
 * motionStateHash: see FORCE_PED_MOTION_STATE
 */
declare function TaskForceMotionState(ped: number, motionStateHash: string | number, p2: boolean): void;

declare function TaskGoStraightToCoord(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function TaskGoStraightToCoordRelativeToEntity(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function TaskGoToCoordAndAimAtHatedEntitiesNearCoord(
  ped: number,
  goToLocationX: number,
  goToLocationY: number,
  goToLocationZ: number,
  focusLocationX: number,
  focusLocationY: number,
  focusLocationZ: number,
  speed: number,
  shootAtEnemies: boolean,
  distanceToStopAt: number,
  noRoadsDistance: number,
  unkTrue: boolean,
  unkFlag: number,
  aimingFlag: number,
  firingPattern: string | number,
): void;

declare function TaskGoToCoordAndAimAtHatedEntitiesNearCoordUsingCombatStyle(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
): void;

declare function TaskGoToCoordAnyMeans(
  ped: number,
  x: number,
  y: number,
  z: number,
  speed: number,
  p5: number,
  p6: boolean,
  walkingStyle: number,
  p8: number,
): void;

declare function TaskGoToCoordAnyMeansExtraParams(
  ped: number,
  x: number,
  y: number,
  z: number,
  speed: number,
  p5: number,
  p6: boolean,
  walkingStyle: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
): void;

declare function TaskGoToCoordAnyMeansExtraParamsWithCruiseSpeed(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
): void;

declare function TaskGoToCoordWhileAimingAtCoord(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
  p15: number,
): void;

declare function TaskGoToCoordWhileAimingAtCoordUsingCombatStyle(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
  p15: number,
): void;

declare function TaskGoToCoordWhileAimingAtEntity(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
): void;

declare function TaskGoToCoordWhileAimingAtEntityUsingCombatStyle(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
): void;

declare function TaskGoToEntity(
  ped: number,
  target: number,
  duration: number,
  distance: number,
  speed: number,
  p5: number,
  p6: number,
): void;

/**
 * shootatEntity:
 * If true, peds will shoot at Entity till it is dead.
 * If false, peds will just walk till they reach the entity and will cease shooting.
 */
declare function TaskGoToEntityWhileAimingAtEntity(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function TaskGoToEntityWhileAimingAtEntityUsingCombatStyle(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function TaskGoToWhistle(ped: number, p1: number, p2: number): void;

/**
 * ped = Ped you want to perform this task.
 * target = the Entity they should aim at.
 * distanceToStopAt = distance from the target, where the ped should stop to aim.
 * StartAimingDist = distance where the ped should start to aim.
 */
declare function TaskGotoEntityAiming(
  ped: number,
  target: number,
  distanceToStopAt: number,
  StartAimingDist: number,
): void;

declare function TaskGotoEntityOffset(
  ped: number,
  entity: number,
  p2: number,
  x: number,
  y: number,
  z: number,
  duration: number,
): void;

declare function TaskGotoEntityOffsetXy(
  ped: number,
  entity: number,
  duration: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: boolean,
): void;

declare function TaskGotoEntityOffsetXyAiming(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function TaskGotoEntityOffsetXyz(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function TaskGotoEntityOffsetXyzAiming(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function TaskGrapple(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): boolean;

declare function TaskGuard(ped: number, p1: number, p2: number): void;

declare function TaskGuardAssignedDefensiveArea(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function TaskGuardAssignedDefensiveArea_2(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function TaskGuardCurrentPosition(ped: number, p1: number, p2: number, p3: boolean): void;

declare function TaskHandsUp(ped: number, duration: number, facingPed: number, p3: number, p4: boolean): void;

declare function TaskHitchAnimal(ped: number, p1: number, p2: number): void;

declare function TaskHogtieTargetPed(ped: number, targetPed: number): void;

declare function TaskHogtieable(ped: number): void;

declare function TaskHorseAction(ped: number, p1: number, p2: number, p3: number): void;

declare function TaskIntimidated(p0: number, p1: number, p2: number, p3: number, p4: number): boolean;

declare function TaskIntimidated_2(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): boolean;

declare function TaskInvestigate(ped: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function TaskItemInteraction(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function TaskItemInteraction_2(
  ped: number,
  propNameGxt: string | number,
  prop: number,
  propId: string | number,
  itemInteractionState: string | number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function TaskItemInteraction_3(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function TaskJump(ped: number, unused: boolean): void;

declare function TaskJump_2(ped: number, x: number, y: number, z: number, entity: number): void;

declare function TaskKnockedOut(ped: number, p1: number, permanently: boolean): void;

declare function TaskKnockedOutAndHogtied(ped: number, p1: number, p2: number): void;

declare function TaskLassoPed(ped: number, targetPed: number): void;

declare function TaskLeadAndConverse(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function TaskLeadHorse(ped: number, horse: number): void;

declare function TaskLeaveAnyVehicle(ped: number, p1: number, p2: number): void;

declare function TaskLeaveVehicle(ped: number, vehicle: number, flags: number, unkPed: number): void;

declare function TaskLookAtCoord(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

/**
 * param3: duration in ms, use -1 to look forever
 * param4: using 2048 is fine
 * param5: using 3 is fine
 */
declare function TaskLookAtEntity(ped: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function TaskLootEntity(ped: number, entity: number): void;

declare function TaskLootNearestEntity(ped: number, x: number, y: number, z: number, p4: number, p5: number): void;

declare function TaskMelee(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): boolean;

declare function TaskMountAnimal(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function TaskMoveBeInFormation(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function TaskMoveInTraffic(ped: number, p1: number, p2: number, p3: number): void;

declare function TaskMoveInTrafficAwayFromEntity(ped: number, p1: number, p2: number, p3: number, p4: number): void;

declare function TaskMoveInTrafficToDestination(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function TaskMoveInTraffic_4(ped: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function TaskMoveNetworkAdvancedByNameWithInitParams(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
): void;

declare function TaskMoveNetworkAdvancedByNameWithInitParamsAttached(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
  p15: number,
  p16: number,
  p17: number,
): void;

declare function TaskMoveNetworkByName(
  ped: number,
  task: string,
  multiplier: number,
  p3: boolean,
  animDict: string,
  flags: number,
): void;

declare function TaskMoveNetworkByNameWithInitParams(
  ped: number,
  p1: string,
  p3: number,
  p4: boolean,
  animDict: string,
  flags: number,
): number;

declare function TaskPatrol(ped: number, p1: string, p2: number, p3: boolean, p4: boolean): void;

declare function TaskPatrol_2(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

/**
 * This tasks the ped to do nothing for the specified amount of miliseconds.
 * This is useful if you want to add a delay between tasks when using a sequence task.
 */
declare function TaskPause(ped: number, ms: number): void;

declare function TaskPedSlideToCoord(ped: number, x: number, y: number, z: number, heading: number, p5: number): void;

declare function TaskPerformSequence(ped: number, taskSequenceId: number): void;

declare function TaskPerformSequenceFromProgress(ped: number, p1: number, p2: number, p3: number): void;

declare function TaskPerformSequence_2(p0: number, p1: number, p2: number, p3: number): void;

declare function TaskPersistentCharacter(ped: number): void;

declare function TaskPickUpWeapon(ped: number, p1: number): void;

declare function TaskPickupCarriableEntity(ped: number, entity: number): void;

declare function TaskPlaceCarriedEntityAtCoord(
  ped: number,
  entity: number,
  x: number,
  y: number,
  z: number,
  p5: number,
  flags: number,
): void;

declare function TaskPlaceCarriedEntityOnMount(ped: number, entity: number, mount: number, p3: number): void;

declare function TaskPlantBomb(ped: number, x: number, y: number, z: number, heading: number): void;

declare function TaskPlayAnim(
  ped: number,
  animDict: string,
  animName: string,
  speed: number,
  speedMultiplier: number,
  duration: number,
  flags: number,
  playbackRate: number,
  p8: boolean,
  p9: number,
  p10: boolean,
  p11: number,
  p12: boolean,
): void;

declare function TaskPlayAnimAdvanced(
  ped: number,
  animDict: string,
  animName: string,
  posX: number,
  posY: number,
  posZ: number,
  rotX: number,
  rotY: number,
  rotZ: number,
  speed: number,
  speedMultiplier: number,
  duration: number,
  flags: number,
  p13: number,
  p14: number,
  p15: number,
  p16: number,
): void;

/**
 * Similar to 0xB31A277C1AC7B7FF but checks if the ped's inventory contains the specified emote kit.
 */
declare function TaskPlayEmote(
  ped: number,
  category: number,
  p2: number,
  emoteType: string | number,
  p4: boolean,
  p5: boolean,
  p6: boolean,
  p7: boolean,
  p8: boolean,
): void;

/**
 * category:
 * enum class eEmoteCategory
 * {
 * Reaction,
 * Action,
 * Taunts,
 * Greets,
 * TwirlGun,
 * Dances
 * };
 * p2: usually 2
 * emoteType: https://alloc8or.re/rdr3/doc/enums/eEmoteType.txt
 */
declare function TaskPlayEmoteWithHash(
  ped: number,
  category: number,
  p2: number,
  emoteType: string | number,
  p4: boolean,
  p5: boolean,
  p6: boolean,
  p7: boolean,
  p8: boolean,
): void;

declare function TaskPlayUpperAnimFacingEntity(
  ped: number,
  animDict: string,
  animName: string,
  entity: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: boolean,
  p10: boolean,
  p11: number,
  p12: string,
  p13: number,
  p14: number,
): void;

declare function TaskPolice(ped: number, p1: boolean): boolean;

declare function TaskPutPedDirectlyIntoCover(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
): void;

declare function TaskPutPedDirectlyIntoGrapple(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function TaskPutPedDirectlyIntoMelee(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

/**
 * Has the ped react to another entity. The reactionType determines how the ped reacts. p3 is 7.5f in the scripts. p4 is 0f. unkFlag is always 4. The rest of the parameters are unknown, but 0 is acceptable input. Here is a list of the different reaction type values by Mooshe: https://pastebin.com/Ju7BbmMt
 */
declare function TaskReact(
  ped: number,
  reactingTo: number,
  reactionType: number,
  p3: number,
  p4: number,
  unkFlag: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function TaskReloadWeapon(ped: number, unused: boolean): void;

declare function TaskReviveTarget(ped: number, p1: number, p2: number): void;

declare function TaskRideTrain(ped: number, train: number, scenarioPoint: number, scenarioHash: string | number): void;

declare function TaskRobPed(ped: number, p1: number, p2: number, p3: number, p4: number): void;

declare function TaskScriptedAnimation(ped: number, args?: number): number;

declare function TaskSeekClearLosToEntity(ped: number, p1: number, p2: number, p3: number, p4: number): void;

declare function TaskSeekCoverFromPed(ped: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function TaskSeekCoverFromPos(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function TaskSeekCoverToCoords(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function TaskSeekCoverToCoverPoint(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function TaskSetBlockingOfNonTemporaryEvents(ped: number, toggle: boolean): void;

declare function TaskSetCrouchMovement(ped: number, p1: boolean, p2: number, p3: boolean): void;

declare function TaskSetSphereDefensiveArea(ped: number, p1: number, p2: number, p3: number, p4: number): void;

declare function TaskSetStealthMovement(ped: number, p1: boolean, p2: number, p3: boolean): void;

declare function TaskShockingEventReact(ped: number, p1: number, p2: number): void;

declare function TaskShootAtCoord(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function TaskShootAtEntity(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function TaskShootWithWeapon(ped: number, args?: number): number;

/**
 * Makes the specified ped shuffle to the next vehicle seat.
 * The ped MUST be in a vehicle and the vehicle parameter MUST be the ped's current vehicle.
 */
declare function TaskShuffleToNextVehicleSeat(ped: number, p1: number): void;

/**
 * Makes the specified ped flee the specified distance from the specified position.
 */
declare function TaskSmartFleeCoord(
  ped: number,
  x: number,
  y: number,
  z: number,
  distance: number,
  time: number,
  fleeType: number,
  fleeSpeed: number,
): void;

/**
 * Makes a ped run away from another ped (fleeTarget).
 * distance = ped will flee this distance.
 * fleeTime = ped will flee for this amount of time, set to "-1" to flee forever
 */
declare function TaskSmartFleePed(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function TaskStandGuard(
  ped: number,
  x: number,
  y: number,
  z: number,
  heading: number,
  scenarioName: string,
): void;

/**
 * Makes the specified ped stand still for (time) milliseconds.
 */
declare function TaskStandStill(ped: number, time: number): void;

declare function TaskStartScenarioAtPosition(
  ped: number,
  scenarioHash: string | number,
  x: number,
  y: number,
  z: number,
  heading: number,
  duration: number,
  sittingScenario: boolean,
  teleport: boolean,
  p9: string,
  p10: number,
  p11: boolean,
): void;

declare function TaskStartScenarioInPlaceHash(
  ped: number,
  scenarioHash: string | number,
  duration: number,
  playEnterAnim: boolean,
  conditionalHash: number,
  heading: number,
  p6: boolean,
): void;

declare function TaskStartScenarioInPlace_2(
  ped: number,
  p1: number,
  p2: string,
  p3: number,
  p4: boolean,
  p5: number,
  p6: boolean,
): void;

/**
 * Makes the ped run to take cover
 */
declare function TaskStayInCover(ped: number): void;

declare function TaskStopLeadingHorse(ped: number): void;

declare function TaskSwapFishingBait(ped: number, bait: string, withoutBuoy: boolean): void;

declare function TaskSwapWeapon(ped: number, p1: number, p2: number, p3: number, p4: number): void;

declare function TaskThrowProjectile(ped: number, p1: number, p2: number, p3: number): void;

declare function TaskThrowProjectile_2(p0: number, p1: number, p2: number, p3: number): void;

/**
 * duration in milliseconds
 */
declare function TaskTurnPedToFaceCoord(ped: number, x: number, y: number, z: number, duration: number): void;

/**
 * duration: the amount of time in milliseconds to do the task. -1 will keep the task going until either another task is applied, or CLEAR_ALL_TASKS() is called with the ped
 */
declare function TaskTurnPedToFaceEntity(
  ped: number,
  targetEntity: number,
  duration: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function TaskTurnToFaceClosestPed(ped: number, p1: number, p2: number, p3: number): void;

declare function TaskUseNearestScenarioChainToCoord(
  ped: number,
  x: number,
  y: number,
  z: number,
  distance: number,
  p5: boolean,
  p6: boolean,
  p7: boolean,
  p8: boolean,
): void;

declare function TaskUseNearestScenarioChainToCoordWarp(
  ped: number,
  x: number,
  y: number,
  z: number,
  distance: number,
  p5: boolean,
  p6: boolean,
  p7: boolean,
  p8: boolean,
): void;

declare function TaskUseNearestScenarioToCoord(
  ped: number,
  x: number,
  y: number,
  z: number,
  distance: number,
  duration: number,
  p6: boolean,
  p7: boolean,
  p8: boolean,
  p9: boolean,
): void;

declare function TaskUseNearestScenarioToCoordWarp(
  ped: number,
  x: number,
  y: number,
  z: number,
  distance: number,
  duration: number,
  p6: boolean,
  p7: boolean,
  p8: boolean,
  p9: boolean,
): void;

declare function TaskUseNearestTrainScenarioToCoordWarp(
  ped: number,
  x: number,
  y: number,
  z: number,
  distance: number,
): void;

declare function TaskUseRandomScenarioInGroup(ped: number, p1: number, p2: number, p3: number, p4: number): void;

declare function TaskUseScenarioPoint(
  ped: number,
  p1: number,
  p2: string,
  p3: number,
  p4: boolean,
  p5: boolean,
  p6: string | number,
  p7: boolean,
  p8: number,
  p9: boolean,
): void;

declare function TaskUseScenarioPoint_2(
  ped: number,
  ped2: number,
  p2: number,
  p3: string,
  p4: number,
  p5: string | number,
  p6: number,
  p7: boolean,
): void;

declare function TaskVehicleAimAtCoord(ped: number, x: number, y: number, z: number): void;

declare function TaskVehicleAimAtPed(ped: number, target: number): void;

declare function TaskVehicleDriveToCoord(
  ped: number,
  vehicle: number,
  x: number,
  y: number,
  z: number,
  speed: number,
  p6: number,
  vehicleModel: string | number,
  drivingMode: number,
  stopRange: number,
  p10: number,
): void;

declare function TaskVehicleDriveToCoord_2(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function TaskVehicleDriveToDestination(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function TaskVehicleDriveToDestination_2(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function TaskVehicleDriveToPoint(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function TaskVehicleDriveToPoint_2(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function TaskVehicleDriveWander(ped: number, vehicle: number, speed: number, drivingStyle: number): void;

declare function TaskVehicleEscort(
  ped: number,
  vehicle: number,
  targetVehicle: number,
  mode: number,
  speed: number,
  drivingStyle: number,
  minDistance: number,
  p7: number,
  noRoadsDistance: number,
): void;

declare function TaskVehicleFollowWaypointRecording(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function TaskVehicleFollowWaypointRecording_2(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function TaskVehicleGotoNavmesh(
  ped: number,
  vehicle: number,
  x: number,
  y: number,
  z: number,
  speed: number,
  behaviorFlag: number,
  stoppingRange: number,
): void;

declare function TaskVehicleMission(
  driver: number,
  vehicle: number,
  vehicleTarget: number,
  missionType: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  DriveAgainstTraffic: boolean,
): void;

/**
 * See TASK_VEHICLE_MISSION
 */
declare function TaskVehicleMissionPedTarget(
  ped: number,
  vehicle: number,
  pedTarget: number,
  mode: number,
  maxSpeed: number,
  drivingStyle: number,
  minDistance: number,
  p7: number,
  DriveAgainstTraffic: boolean,
): void;

declare function TaskVehicleShootAtCoord(ped: number, x: number, y: number, z: number, p4: number): void;

declare function TaskVehicleShootAtPed(ped: number, target: number, p2: number): void;

/**
 * Documentation from GTA V, might be the same in RDR:
 * '1 - brake
 * '3 - brake + reverse
 * '4 - turn left 90 + braking
 * '5 - turn right 90 + braking
 * '6 - brake strong (handbrake?) until time ends
 * '7 - turn left + accelerate
 * '7 - turn right + accelerate
 * '9 - weak acceleration
 * '10 - turn left + restore wheel pos to center in the end
 * '11 - turn right + restore wheel pos to center in the end
 * '13 - turn left + go reverse
 * '14 - turn left + go reverse
 * '16 - crash the game after like 2 seconds :)
 * '17 - keep actual state, game crashed after few tries
 * '18 - game crash
 * '19 - strong brake + turn left/right
 * '20 - weak brake + turn left then turn right
 * '21 - weak brake + turn right then turn left
 * '22 - brake + reverse
 * '23 - accelerate fast
 * '24 - brake
 * '25 - brake turning left then when almost stopping it turns left more
 * '26 - brake turning right then when almost stopping it turns right more
 * '27 - brake until car stop or until time ends
 * '28 - brake + strong reverse acceleration
 * '30 - performs a burnout (brake until stop + brake and accelerate)
 * '31 - accelerate + handbrake
 * '32 - accelerate very strong
 * Seems to be this:
 * Works on NPCs, but overrides their current task. If inside a task sequence (and not being the last task), "time" will work, otherwise the task will be performed forever until tasked with something else
 */
declare function TaskVehicleTempAction(driver: number, vehicle: number, action: number, time: number): void;

declare function TaskWalkAway(ped: number, p1: number): void;

declare function TaskWanderAndConverseWithPed(ped: number, p1: number, p2: number, p3: number): void;

declare function TaskWanderInArea(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function TaskWanderInVolume(ped: number, p1: number, p2: number, p3: number, p4: number): void;

/**
 * Makes ped walk around the area.
 * set p1 to 10.0f and p2 to 10 if you want the ped to walk anywhere without a duration.
 */
declare function TaskWanderStandard(ped: number, p1: number, p2: number): void;

declare function TaskWanderSwim(ped: number, p1: number): void;

declare function TaskWarpPedIntoVehicle(ped: number, vehicle: number, seat: number): void;

declare function TaskWeapon(ped: number): void;

declare function TaskWhistleAnim(ped: number, p1: number, p2: number): void;

declare function TelemetryAnimalSkinned(_type: string | number, items?: number): number;

declare function TelemetryBountyTarget(data: number): void;

declare function TelemetryCampCreated(p0: number): void;

declare function TelemetryCampDonate(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function TelemetryCampSupplies(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function TelemetryCharCreator(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function TelemetryCollect(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function TelemetryCoupon(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function TelemetryCraftItem(p0: number, p1: number, p2: number, p3: number): void;

/**
 * Works in MP only.
 */
declare function TelemetryCreateUuid(uuid: number): [boolean, number];

declare function TelemetryCustom(args: number): void;

declare function TelemetryDefensive(p0: number, p1: number, p2: number): void;

declare function TelemetryFastTravel(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function TelemetryGameProgress(p0: number, p1: number): void;

declare function TelemetryGangShares(p0: number, p1: number, p2: number, p3: number): void;

declare function TelemetryGoldStore(p0: number, p1: number, p2: number, p3: number): void;

declare function TelemetryGunLocker(): void;

declare function TelemetryHerbPicked(p0: number): void;

declare function TelemetryHonor(p0: number, p1: number): void;

declare function TelemetryHubNavigation(p0: number, p1: number, p2: number, p3: number): void;

declare function TelemetryIntroSkip(p0: number, p1: number, p2: number): void;

declare function TelemetryLoot(p0: number, p1: number, p2: number, p3: number): void;

declare function TelemetryMatchOver(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function TelemetryMatchQueue(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function TelemetryMenuNavigation(p0: number, p1: number, p2: number, p3: number): void;

declare function TelemetryMissionCheckpoint(p0: number, p1: number, p2: number): void;

declare function TelemetryMissionIloOption(p0: number, p1: number): void;

declare function TelemetryMissionOver(p0: number, p1: number): void;

declare function TelemetryMissionStarted(p0: number, p1: number, p2: number, p3: number): void;

declare function TelemetryMoonshineBrew(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function TelemetryNetCamp(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function TelemetryNotoriety(p0: number, p1: number, p2: number, p3: number): void;

declare function TelemetryParleyFeud(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function TelemetryPersonalVehicleMount(p0: number, p1: number, p2: number, p3: number): void;

declare function TelemetryPhoto(p0: number, p1: number, p2: number, p3: number): void;

declare function TelemetryPhotoCam(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function TelemetryPlayerMenuPin(p0: number, p1: number, p2: number, p3: number): void;

declare function TelemetryPlayerSpawned(ped: number): void;

declare function TelemetryPokerOver(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function TelemetryPrison(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function TelemetryRoleBounty(p0: number): void;

declare function TelemetryRoleCollector(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function TelemetryRoleMoonshiner(p0: number, p1: number): void;

declare function TelemetryRoleNaturalist(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function TelemetryRoleTokenTransaction(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function TelemetryRoleTrader(p0: number, p1: number): void;

declare function TelemetrySample(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function TelemetryShopCutscene(p0: number, p1: number, p2: number, p3: number): void;

declare function TelemetryShopExit(p0: number, p1: number): void;

declare function TelemetryShopPurchase(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function TelemetryShopSell(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function TerminateThisThread(): void;

declare function TerminateThread(threadId: number): void;

declare function TestProbeAgainstAllWater(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): boolean;

declare function TestVerticalProbeAgainstAllWater(
  x: number,
  y: number,
  z: number,
  p3: number,
  height?: number,
): [boolean, number];

declare function TextBlockDelete(textBlock: string): void;

declare function TextBlockIsLoaded(textBlock: string): boolean;

declare function TextBlockRequest(textBlock: string): void;

declare function TextureDownloadGetName(p0: number): string;

declare function TextureDownloadRelease(p0: number): void;

declare function TextureDownloadRequest(FilePath: string, Name: string, p3: boolean): [number, number];

/**
 * Counts up. Every 1000 is 1 real-time second. Use SETTIMERA(int value) to set the timer (e.g.: SETTIMERA(0)).
 */
declare function Timera(): number;

declare function Timerb(): number;

/**
 * Gets the current frame time.
 */
declare function Timestep(): number;

declare function ToFloat(value: number): number;

declare function TogglePausedRenderphases(toggle: boolean): void;

declare function TrackObjectVisibility(object: number): void;

declare function TrackVehicleVisibility(vehicle: number): void;

declare function TriggerAnimSceneSkip(animScene: number): void;

/**
 * The backing function for TriggerEvent.
 */
declare function TriggerEventInternal(eventName: string, eventPayload: string, payloadLength: number): void;

/**
 * The backing function for TriggerLatentServerEvent.
 */
declare function TriggerLatentServerEventInternal(
  eventName: string,
  eventPayload: string,
  payloadLength: number,
  bps: number,
): void;

declare function TriggerMissionFailedCam(): void;

declare function TriggerMusicEvent(eventName: string): boolean;

/**
 * eventGroup: 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork), 2 = unk, 3 = unk, 4 = SCRIPT_EVENT_QUEUE_SCRIPT_ERRORS (CEventGroupScriptErrors)
 * Note: eventDataSize is NOT the size in bytes, it is the size determined by the SIZE_OF operator (RAGE Script operator, not C/C++ sizeof). That is, the size in bytes divided by 8 (script variables are always 8-byte aligned!).
 * playerBits (also known as playersToBroadcastTo) is a bitset that indicates which players this event should be sent to. In order to send the event to specific players only, use (1 << playerIndex). Set all bits if it should be broadcast to all players.
 */
declare function TriggerScriptEvent(
  eventGroup: number,
  eventDataSize: number,
  scriptMetadataIndex: number,
): [number, number];

declare function TriggerScriptEvent_2(eventDataSize: number, scriptMetadataIndex: number, threadId: number): number;

/**
 * The backing function for TriggerServerEvent.
 */
declare function TriggerServerEventInternal(eventName: string, eventPayload: string, payloadLength: number): void;

declare function TriggerSonarBlip(typeHash: string | number, x: number, y: number, z: number): void;

declare function TriggerSonarBlip_2(typeHash: string | number, entity: number): void;

declare function Ugc2SetPlayerData(p0: number, p1: number, p2: number, p3: number): number;

declare function UgcClearQueryResults(p0: number): void;

declare function UgcDidRequestSucceed(p0: number): boolean;

declare function UgcGetCachedDescription(p0: number, length: number): string;

/**
 * Checks if the user has ROS privilege 14.
 */
declare function UgcHasPrivilege(): boolean;

declare function UgcHasRequestFinished(p0: number): boolean;

declare function UgcIsLanguageSupported(languageId: number): boolean;

declare function UgcIsRequestPending(p0: number): boolean;

declare function UgcQueryByContentId(contentId: string, latestVersion: boolean, contentTypeName: string): boolean;

declare function UgcQueryGetContentHasPlayerRecord(p0: number, p1: number): boolean;

declare function UgcQueryGetContentNum(p0: number): number;

declare function UgcQueryWasForceCancelled(p0: number): boolean;

declare function UgcRequestCachedDescription(p0: number): number;

declare function UgcRequestContentDataFromParams(
  contentTypeName: string,
  contentId: string,
  fileId: number,
  fileVersion: number,
  languageId: number,
): number;

declare function UgcSetQueryDataFromOffline(p0: boolean): void;

declare function UgcTextureDownloadRequest(p1: number, p2: number, p3: number, p5: boolean): [number, number, number];

declare function UiFeedClearChannel(p0: number, p1: number, p2: number): void;

declare function UiFeedGetCurrentMessage(p0: number): number;

/**
 * Display text on right of the screen, Example : https://pastebin.com/n1YmNe25
 */
declare function UiFeedPostFeedTicker(p2: boolean): [number, number, number];

declare function UiFeedPostGameUpdateShard(p2: boolean): [number, number, number];

/**
 * Example : https://pastebin.com/GvdBp8Dh
 */
declare function UiFeedPostHelpText(p0: DataView, p1: DataView, p2: boolean): number;

/**
 * Example : https://pastebin.com/h1YzycuR
 */
declare function UiFeedPostLocationShard(p2: boolean, p3: boolean): [number, number, number];

declare function UiFeedPostMissionName(p2: boolean): [number, number, number];

/**
 * Example : https://pastebin.com/13tuRa63
 */
declare function UiFeedPostObjective(p2: boolean): [number, number, number];

declare function UiFeedPostOneTextShard(p2: boolean): [number, number, number];

declare function UiFeedPostReticleMessage(p2: boolean): [number, number, number];

/**
 * Example : https://pastebin.com/YZMBkAmW
 */
declare function UiFeedPostSampleToast(p2: boolean, p3: boolean): [number, number, number];

declare function UiFeedPostSampleToastWithAppLink(p2: boolean, p3: boolean, p4: boolean): [number, number, number];

declare function UiFeedPostThreeTextShard(p2: boolean, p3: boolean, p4: boolean): [number, number, number];

declare function UiFeedPostTwoTextShard(p2: boolean, p3: boolean): [number, number, number];

declare function UiFeedPostVoiceChatFeed(p2: boolean): [number, number, number];

declare function UiGetSceneUiobject(p0: number): number;

/**
 * Hardcoded to return false.
 */
declare function UiIsSingleplayerPauseMenuActive(): boolean;

declare function UiMovieviewSetRenderTarget(p0: number, p1: number): void;

declare function UiRequestScene(p0: number, p1: number): number;

declare function UiStateMachineCanRequestTransition(p0: number): number;

declare function UiStateMachineCreate(p0: number, p1: number): number;

declare function UiStateMachineDestroy(p0: number): void;

declare function UiStateMachineDestroyAndClear(p0: number): void;

declare function UiStateMachineExists(p0: number): number;

declare function UiStateMachineRequestExit(p0: number, p1: number): void;

declare function UiStateMachineRequestTransition(p0: number, p1: number): number;

declare function UiStickyFeedClearMessage(msgId: number): void;

/**
 * Example: https://pastebin.com/JygJShNU
 */
declare function UiStickyFeedCreateDeathFailMessage(p2: boolean): [number, number, number];

/**
 * Example: https://pastebin.com/EJD7ytnz
 */
declare function UiStickyFeedCreateErrorMessage(p2: boolean): [number, number, number];

/**
 * Example: https://pastebin.com/6mLtee2S
 */
declare function UiStickyFeedCreateWarningMessage(p2: boolean): [number, number, number];

/**
 * Returns state of sticky feed message:
 * 0 - INITIALIZING
 * 1 - IN QUEUE
 * 2 - WAITING TO SHOW
 * 3 - ENTERING
 * 4 - SHOWING
 * 5 - EXITING
 * 6 - COMPLETE
 * 7 - COUNT
 */
declare function UiStickyFeedGetMessageState(msgId: number): number;

declare function UiStickyFeedIsAlertScreenActive(): boolean;

declare function UiStickyFeedIsChannelActive(p0: number): boolean;

/**
 * Seems to only update _UI_STICKY_FEED_CREATE_ERROR_MESSAGE(0x9F2CC2439A04E7BA) and _UI_STICKY_FEED_CREATE_DEATH_FAIL_MESSAGE(0x815C4065AE6E6071) message.
 * Example: https://pastebin.com/nDrJyWq2
 */
declare function UiStickyFeedUpdateMessage(msgId: number, p2: boolean): number;

declare function UiflowblockEnter(p0: number, p1: number): number;

declare function UiflowblockIsLoaded(p0: number): number;

declare function UiflowblockRelease(p0: number): void;

declare function UiflowblockRequest(p0: number): number;

declare function UilogAddEntryHash(
  p0: number,
  p1: number,
  x: number,
  y: number,
  z: number,
  p5: string | number,
  p6: string | number,
  p7: number,
): void;

declare function UilogAddOrUpdateObjective(
  p0: number,
  p1: string | number,
  p2: string | number,
  p3: string,
  p4: boolean,
  p5: boolean,
  p6: boolean,
): void;

declare function UilogAddTotalTakeEntry(
  p0: string | number,
  p1: string | number,
  p2: string,
  p3: string,
  p4: string | number,
): void;

declare function UilogClearAllEntries(): void;

declare function UilogClearCachedObjective(): void;

declare function UilogClearHasDisplayedCachedObjective(): void;

declare function UilogGetCachedObjective(): string;

declare function UilogHasDisplayedCachedObjective(): boolean;

declare function UilogIsEntryRegistered(p0: number, p1: string | number): boolean;

declare function UilogMarkAllEntriesAvailability(p0: number, p1: string): void;

declare function UilogMarkEntryAvailability(p0: number, p1: string | number, p2: number, p3: string): void;

declare function UilogMarkMissionCompleted(p0: string | number): void;

declare function UilogPostNotification(data: number): [number, number];

declare function UilogPrintCachedObjective(): void;

declare function UilogRemoveEntry(p0: number, p1: string | number): void;

declare function UilogSetCachedObjective(p0: string): void;

declare function UilogSetEntryBriefTexture(
  p0: number,
  p1: string | number,
  p2: string | number,
  p3: string | number,
): void;

declare function UilogSetEntryIconTexture(
  p0: number,
  p1: string | number,
  p2: string | number,
  p3: string | number,
): void;

declare function UilogSetEntryPinned(p0: number, p1: string | number, p2: boolean): void;

declare function UilogSetHasDisplayedCachedObjective(): void;

declare function UilogSetPendingDetailsId(p0: number, p1: string | number): number;

declare function UilogSetTotalTakeSummary(p0: string, p1: string): void;

declare function UilogUpdateEntrySubheader(p0: number, p1: string | number, p2: string): void;

declare function PromptAddGroupLink(p0: number, prompt: number, p2: number): void;

declare function PromptAddGroupReturnLink(p0: number, prompt: number): void;

declare function PromptClearFavouredPedForConflictResolution(): void;

/**
 * id is the return value from 0xD9459157EB22C895.
 */
declare function PromptClearHorizontalOrientation(id: number): void;

declare function PromptContextSetPoint(prompt: number, x: number, y: number, z: number): void;

declare function PromptContextSetSize(prompt: number, size: number): void;

declare function PromptCreate(
  inputHash: string | number,
  labelName: string,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function PromptDelete(prompt: number): void;

declare function PromptDisablePromptTypeThisFrame(p0: number): void;

declare function PromptDisablePromptsThisFrame(): void;

declare function PromptDoesAmbientGroupExist(hash: string | number): boolean;

declare function PromptEnablePromptTypeThisFrame(p0: number): void;

declare function PromptFilterClear(): void;

declare function PromptGetGroupActivePage(hash: string | number): number;

declare function PromptGetGroupIdForScenarioPoint(p0: number, p1: number): number;

declare function PromptGetGroupIdForTargetEntity(entity: number): number;

declare function PromptGetMashModeProgress(prompt: number): number;

declare function PromptGetUrgentPulsingEnabled(prompt: number): boolean;

declare function PromptHasHoldAutoFillMode(prompt: number): boolean;

declare function PromptHasHoldMode(prompt: number): boolean;

declare function PromptHasHoldModeCompleted(prompt: number): boolean;

declare function PromptHasManualMashMode(prompt: number): boolean;

declare function PromptHasMashMode(prompt: number): boolean;

declare function PromptHasMashModeCompleted(prompt: number): boolean;

declare function PromptHasMashModeFailed(prompt: number): boolean;

declare function PromptHasPressedTimedModeCompleted(prompt: number): number;

declare function PromptHasPressedTimedModeFailed(prompt: number): number;

declare function PromptHasStandardModeCompleted(prompt: number, p1: number): boolean;

declare function PromptIsActive(prompt: number): boolean;

declare function PromptIsControlActionActive(control: string | number): boolean;

declare function PromptIsEnabled(prompt: number): boolean;

declare function PromptIsHoldModeRunning(prompt: number): boolean;

declare function PromptIsJustPressed(prompt: number): boolean;

declare function PromptIsJustReleased(prompt: number): boolean;

declare function PromptIsPressed(prompt: number): boolean;

declare function PromptIsReleased(prompt: number): boolean;

declare function PromptIsValid(prompt: number): boolean;

declare function PromptRegisterBegin(): number;

declare function PromptRegisterEnd(prompt: number): void;

declare function PromptRemoveGroup(prompt: number, p1: number): void;

declare function PromptRestartModes(prompt: number): void;

declare function PromptSetActiveGroupThisFrame(
  hash: string | number,
  p1: string | number,
  p2: number,
  p3: number,
  p4: number,
  prompt: number,
): number;

declare function PromptSetAllowedAction(prompt: number, p1: number): void;

declare function PromptSetAmbientGroupThisFrame(
  entity: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function PromptSetAttribute(prompt: number, p1: number, p2: boolean): void;

declare function PromptSetBeatMode(prompt: number, p1: number): void;

declare function PromptSetBeatModeGrayedOut(prompt: number, p1: number): void;

declare function PromptSetControlAction(prompt: number, control: string | number): number;

declare function PromptSetEnabled(prompt: number, toggle: boolean): void;

declare function PromptSetFavouredPedForConflictResolution(ped: number): void;

declare function PromptSetGroup(prompt: number, p1: number, p2: number): void;

declare function PromptSetHoldAutoFillMode(prompt: number, p1: number, p2: number): void;

declare function PromptSetHoldIndefinitelyMode(prompt: number): void;

declare function PromptSetHoldMode(prompt: number, p1: number): void;

declare function PromptSetMashAutoFillMode(prompt: number, p1: number, p2: number): void;

declare function PromptSetMashIndefinitelyMode(prompt: number): void;

declare function PromptSetMashManualCanFailMode(prompt: number, p1: number, p2: number, p3: number, p4: number): void;

declare function PromptSetMashManualMode(prompt: number, p1: number, p2: number, p3: number, p4: number): void;

declare function PromptSetMashManualModeDecaySpeed(prompt: number, p1: number): void;

declare function PromptSetMashManualModeIncreasePerPress(prompt: number, p1: number): void;

declare function PromptSetMashManualModePressedGrowthSpeed(prompt: number, p1: number): void;

declare function PromptSetMashMode(prompt: number, p1: number): void;

declare function PromptSetMashWithResistanceCanFailMode(prompt: number, p1: number, p2: number, p3: number): void;

declare function PromptSetMashWithResistanceMode(prompt: number, p1: number, p2: number, p3: number): void;

declare function PromptSetOrderingAsInputType(prompt: number, p1: number): void;

declare function PromptSetPressedTimedMode(prompt: number, p1: number): void;

declare function PromptSetPriority(prompt: number, p1: number): void;

/**
 * This returns an id that can be used with 0x6095358C4142932A.
 */
declare function PromptSetRegisterHorizontalOrientation(): number;

declare function PromptSetRotateMode(prompt: number, p1: number, p2: number): void;

declare function PromptSetSpinnerPosition(prompt: number, p1: number): void;

declare function PromptSetSpinnerSpeed(prompt: number, p1: number): void;

declare function PromptSetStandardMode(prompt: number, p1: boolean): void;

declare function PromptSetStandardizedHoldMode(prompt: number, p1: number): void;

declare function PromptSetTag(prompt: number, p1: number): void;

declare function PromptSetTargetMode(prompt: number, p1: number, p2: number, p3: number): void;

declare function PromptSetTargetModeProgress(prompt: number, p1: number): void;

declare function PromptSetTargetModeTarget(prompt: number, p1: number, p2: number): void;

declare function PromptSetText(prompt: number, text: number | string): void;

declare function PromptSetTransportMode(prompt: number, p1: number): void;

declare function PromptSetUrgentPulsingEnabled(prompt: number, p1: number): void;

declare function PromptSetVisible(prompt: number, toggle: boolean): void;

declare function PromptWasBeatModePressedInTimeWindow(prompt: number): boolean;

declare function UitutorialGetIsThreatIndicatorCapableRadarShown(): boolean;

declare function UitutorialGetIsThreatIndicatorOn(): boolean;

/**
 * enum eRpgIcons
 * {
 * ICON_STAMINA,
 * ICON_STAMINA_CORE,
 * ICON_DEADEYE,
 * ICON_DEADEYE_CORE,
 * ICON_HEALTH,
 * ICON_HEALTH_CORE,
 * ICON_HORSE_HEALTH,
 * ICON_HORSE_HEALTH_CORE,
 * ICON_HORSE_STAMINA,
 * ICON_HORSE_STAMINA_CORE,
 * ICON_HORSE_COURAGE,
 * ICON_HORSE_COURAGE_CORE
 * };
 */
declare function UitutorialSetRpgIconVisibility(rpgIcon: number, visibility: number): void;

declare function UncuffPed(ped: number): void;

/**
 * getupSetHash: see nm_blend_out_sets.meta
 */
declare function UnhogtiePed(
  ped: number,
  flags: number,
  getupSetHash: string | number,
  p3: string,
  p4: string,
  p5: number,
): void;

declare function UnlockIsLootable(unlockHash: string | number): boolean;

declare function UnlockIsNew(unlockHash: string | number): boolean;

declare function UnlockIsUnlockFlagSet(unlockHash: string | number, flag: number): boolean;

declare function UnlockIsUnlocked(unlockHash: string | number): boolean;

declare function UnlockIsVisible(unlockHash: string | number): boolean;

declare function UnlockMinimapAngle(): void;

declare function UnlockSetNew(unlockHash: string | number, toggle: boolean): void;

declare function UnlockSetUnlocked(unlockHash: string | number, toggle: boolean): void;

declare function UnlockSetVisible(unlockHash: string | number, toggle: boolean): void;

/**
 * Does something similar to INTERIOR::DISABLE_INTERIOR.
 * You don't fall through the floor but everything is invisible inside and looks the same as when INTERIOR::DISABLE_INTERIOR is used. Peds behaves normally inside.
 */
declare function UnpinInterior(interior: number): void;

declare function UnpinMapEntity(entity: number): void;

/**
 * nullsub, doesn't do anything
 */
declare function UnregisterScriptWithAudio(): void;

declare function UnreserveAmbientPeds(numPeds: number): void;

declare function UpdateLightsOnEntity(entity: number): void;

/**
 * Returns the current status of the onscreen keyboard, and updates the output.
 * Status Codes:
 * 0 - User still editing
 * 1 - User has finished editing
 * 2 - User has canceled editing
 * 3 - Keyboard isn't active
 */
declare function UpdateOnscreenKeyboard(): number;

declare function UpdatePedTexture(textureId: number): void;

/**
 * Update variation on ped, needed after first creation, or when compoent or texture/overlay is changed
 */
declare function UpdatePedVariation(ped: number, p1: boolean, p2: boolean, p3: boolean, p4: boolean, p5: boolean): void;

declare function UpdatePlayerTeleport(player: number): boolean;

declare function UpdateTaskHandsUpDuration(ped: number, duration: number): void;

declare function UseParticleFxAsset(name: string): void;

declare function UseWaypointRecordingAsAssistedMovementRoute(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

/**
 * Note: The first bit in 'flags' must not be set.
 * It is also required to pass at least one extra argument (this must be a text label string or hash).
 * When passing a hash, flags should be 0.
 */
declare function VarString(flags: number, ...params: any): number;

/**
 * Calculates distance between vectors.
 */
declare function Vdist(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

/**
 * Calculates distance between vectors but does not perform Sqrt operations. (Its way faster)
 */
declare function Vdist2(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

/**
 * Returns the network ID of the given vehicle.
 */
declare function VehToNet(vehicle: number): number;

declare function VehicleWaypointPlaybackGetIsPaused(p0: number): number;

declare function VehicleWaypointPlaybackOverrideSpeed(vehicle: number, speed: number): void;

declare function VehicleWaypointPlaybackPause(vehicle: number): void;

declare function VehicleWaypointPlaybackResume(vehicle: number): void;

declare function VehicleWaypointPlaybackUseDefaultSpeed(vehicle: number): void;

declare function VirtualCollectionExists(p0: number): number;

declare function VirtualCollectionItemAdd(p0: number, p1: number, p2: number, p3: number): void;

declare function VirtualCollectionReset(p0: number): void;

declare function VirtualCollectionSetInterestIndex(p0: number, p1: number): void;

declare function VirtualCollectionSetSize(p0: number, p1: number): void;

/**
 * Calculates the magnitude of a vector.
 */
declare function Vmag(x: number, y: number, z: number): number;

/**
 * Calculates the magnitude of a vector but does not perform Sqrt operations. (Its way faster)
 */
declare function Vmag2(x: number, y: number, z: number): number;

declare function Wait(ms: number): void;

declare function WasAnimSceneSkipped(animScene: number): boolean;

/**
 * Returns whether or not the currently executing event was canceled.
 * @return A boolean.
 */
declare function WasEventCanceled(): boolean;

/**
 * Despite this function's name, it simply returns whether the specified handle is a Ped.
 */
declare function WasPedSkeletonUpdated(ped: number): boolean;

declare function WaterOverrideSetOceanwavemaxamplitude(maxAmplitude: number): void;

declare function WaterOverrideSetShorewaveamplitude(amplitude: number): void;

declare function WaypointPlaybackGetIsAiming(p0: number): number;

declare function WaypointPlaybackGetIsPaused(p0: number): boolean;

declare function WaypointPlaybackGetIsShooting(p0: number): number;

declare function WaypointPlaybackOverrideSpeed(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function WaypointPlaybackPause(p0: number, p1: number, p2: number, p3: number): void;

declare function WaypointPlaybackResume(p0: number, p1: boolean, p2: number, p3: number): void;

declare function WaypointPlaybackStartAimingAtCoord(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function WaypointPlaybackStartAimingAtEntity(p0: number, p1: number, p2: number, p3: number): void;

declare function WaypointPlaybackStartAimingAtPed(p0: number, p1: number, p2: number, p3: number): void;

declare function WaypointPlaybackStartShootingAtCoord(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function WaypointPlaybackStartShootingAtEntity(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function WaypointPlaybackStartShootingAtPed(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function WaypointPlaybackStopAimingOrShooting(p0: number): void;

declare function WaypointPlaybackUseDefaultSpeed(p0: number): void;

declare function WaypointRecordingGetClosestWaypoint(
  name: string,
  x: number,
  y: number,
  z: number,
  point?: number,
): [boolean, number];

declare function WaypointRecordingGetCoord(name: string, point: number): [boolean, number[]];

declare function WaypointRecordingGetNumPoints(name: string, points?: number): [boolean, number];

declare function WaypointRecordingGetSpeedAtPoint(name: string, point: number): number;

declare function WeeklyCollectibleGetItemInSet(
  chalHash: string | number,
  setIndex: number,
  itemIndex: number,
): [boolean, number, number];

declare function WeeklyCollectibleGetItemSetBuyAward(chalHash: string | number, index: number): number;

declare function WeeklyCollectibleGetItemSetLabel(chalHash: string | number, index: number): number;

declare function WeeklyCollectibleGetNumItemsInSet(chalHash: string | number, index: number): number;

declare function WeeklyCollectibleGetNumSets(chalHash: string | number): number;

declare function WouldEntityBeOccluded(
  entityModelHash: string | number,
  x: number,
  y: number,
  z: number,
  p4: boolean,
): boolean;

declare function SetTextCentre(align: boolean): void;

/**
 * This native does nothing since build 1436, use _BG_SET_TEXT_COLOR (0x16FA5CE47F184F1E) instead.
 */
declare function SetTextColor(r: number, g: number, b: number, a: number): void;

declare function SetTextDropshadow(distance: number, r: number, g: number, b: number, a: number): void;

declare function SetTextFontForCurrentCommand(fontId: number): void;

declare function SetTextScale(scale: number, size: number): void;
