import type { MiddlewareType } from 'koa';

import { type WithLogContext } from '#src/middleware/koa-audit-log.js';
import type TenantContext from '#src/tenants/TenantContext.js';

import ExperienceInteraction from '../classes/experience-interaction.js';
import { experienceRoutes } from '../const.js';
import { type WithHooksAndLogsContext } from '../types.js';

export type WithExperienceInteractionContext<ContextT extends WithLogContext = WithLogContext> =
  ContextT & {
    experienceInteraction: ExperienceInteraction;
  };

/**
 * @overview This middleware initializes the `ExperienceInteraction` for the current request.
 * The `ExperienceInteraction` instance is used to manage all the data related to the current interaction.
 * All the interaction data is stored using oidc-provider's interaction session.
 *
 * @see {@link https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#user-flows}
 */
export default function koaExperienceInteraction<
  StateT,
  ContextT extends WithHooksAndLogsContext,
  ResponseT,
>(
  tenant: TenantContext
): MiddlewareType<StateT, WithExperienceInteractionContext<ContextT>, ResponseT> {
  return async (ctx, next) => {
    const {
      interactionDetails,
      request: { method, path },
    } = ctx;

    // Should not retrieve the interaction details for the PUT /experience request.
    // New ExperienceInteraction instance supposed to be created for this request.
    if (method === 'PUT' && path === `${experienceRoutes.prefix}`) {
      return next();
    }

    ctx.experienceInteraction = new ExperienceInteraction(ctx, tenant, interactionDetails);

    return next();
  };
}
