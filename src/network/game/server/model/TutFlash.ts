import { ServerProtPriority } from '#/network/game/server/codec/ServerProtPriority.js';
import OutgoingMessage from '#/network/game/server/OutgoingMessage.js';

export default class TutorialFlashSide extends OutgoingMessage {
    priority = ServerProtPriority.BUFFERED;

    constructor(readonly tab: number) {
        super();
    }
}
