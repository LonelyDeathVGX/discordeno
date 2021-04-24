import { rest } from "../../rest/rest.ts";
import { Webhook } from "../../types/webhooks/webhook.ts";
import { endpoints } from "../../util/constants.ts";

/** Returns the new webhook object for the given id, this call does not require authentication and returns no user in the webhook object. */
export async function getWebhookWithToken(webhookId: string, token: string) {
  return await rest.runMethod<Webhook>(
    "get",
    endpoints.WEBHOOK(webhookId, token),
  );
}
