import { MessageTypes } from '@logto/connector-kit';
import type { InteractionEvent } from '@logto/schemas';

import { createPasscode, sendPasscode, verifyPasscode } from '#src/libraries/passcode.js';
import type { LogContext } from '#src/middleware/koa-audit-log.js';

import type { SendPasscodePayload, PasscodeIdentifierPayload } from '../types/index.js';

/**
 * Refactor Needed:
 * This is a work around to map the latest interaction event type to old MessageTypes
 *  */
const eventToMessageTypesMap: Record<InteractionEvent, MessageTypes> = {
  SignIn: MessageTypes.SignIn,
  Register: MessageTypes.Register,
  ForgotPassword: MessageTypes.ForgotPassword,
};

const getMessageTypesByEvent = (event: InteractionEvent): MessageTypes =>
  eventToMessageTypesMap[event];

export const sendPasscodeToIdentifier = async (
  payload: SendPasscodePayload & { event: InteractionEvent },
  jti: string,
  createLog: LogContext['createLog']
) => {
  const { event, ...identifier } = payload;
  const messageType = getMessageTypesByEvent(event);

  const log = createLog(`Interaction.${event}.Identifier.VerificationCode.Create`);
  log.append(identifier);

  const passcode = await createPasscode(jti, messageType, identifier);
  const { dbEntry } = await sendPasscode(passcode);

  log.append({ connectorId: dbEntry.id });
};

export const verifyIdentifierByPasscode = async (
  payload: PasscodeIdentifierPayload & { event: InteractionEvent },
  jti: string,
  createLog: LogContext['createLog']
) => {
  const { event, passcode, ...identifier } = payload;
  const messageType = getMessageTypesByEvent(event);

  // TODO: @Simeng maybe we should just log all interaction payload in every request?
  const log = createLog(`Interaction.${event}.Identifier.VerificationCode.Submit`);
  log.append(identifier);

  await verifyPasscode(jti, messageType, passcode, identifier);
};
