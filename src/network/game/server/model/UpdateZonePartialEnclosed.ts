import { ServerProtPriority } from '#/network/game/server/codec/ServerProtPriority.js';
import OutgoingMessage from '#/network/game/server/OutgoingMessage.js';

export default class UpdateZonePartialEnclosed extends OutgoingMessage {
    priority = ServerProtPriority.IMMEDIATE;

    constructor(
        readonly zoneX: number,
        readonly zoneZ: number,
        readonly originX: number,
        readonly originZ: number,
        readonly data: Uint8Array
    ) {
        super();
    }
}
